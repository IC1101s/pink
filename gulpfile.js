"use strict";

var gulp = require("gulp");
var less = require("gulp-less");
var plumber = require("gulp-plumber");
var autoprefixer = require("autoprefixer");
var sourcemap = require("gulp-sourcemaps");
var csso = require("gulp-csso");
var rename = require("gulp-rename");
var postcss = require("gulp-postcss");
var imagemin = require("gulp-imagemin");
var htmlmin = require("gulp-htmlmin");
var svgstore = require("gulp-svgstore");
var webp = require("gulp-webp");
var posthtml = require("gulp-posthtml");
var include = require("posthtml-include");
var del = require("del");
var server = require("browser-sync").create();

gulp.task("html", function () {
	return gulp.src("source/*.html")
	.pipe(posthtml([
		include()
	]))
	.pipe(gulp.dest("build/"));
});

gulp.task("css", function () {
  return gulp.src("source/less/style.less")
    .pipe(plumber())
    .pipe(sourcemap.init())
    .pipe(less())
    .pipe(postcss([
      autoprefixer()
    ]))
    .pipe(gulp.dest("build/css"))
    .pipe(csso())
    .pipe(htmlmin({collapseWhitespace: true}))
    .pipe(rename("style.min.css"))
    .pipe(sourcemap.write("."))
    .pipe(gulp.dest("build/css"))
    .pipe(server.stream());
});

gulp.task("images", function () {
	return gulp.src("source/img/**/*.{png,jpg,svg}")
	.pipe(imagemin([
		imagemin.optipng({optimizationLevel: 3}),
		imagemin.mozjpeg({progressive: true}),
	 	imagemin.svgo()
	]))
	.pipe(gulp.dest("source/img"));
});

gulp.task("sprite", function () {
	return gulp.src("source/img/{logo-pink-*,logo-htmlacademy,icon-editor-*}.svg")
	.pipe(svgstore({
		inlineSvg: true
	}))
	.pipe(rename("sprite.svg"))
	.pipe(gulp.dest("build/img"));
});

gulp.task("webp", function () {
	return gulp.src("source/img/**/*.{png,jpg}")
	.pipe(webp({quality: 90}))
	.pipe(gulp.dest("source/img"));
});

gulp.task("clean", function () {
	return del("build");
});

gulp.task("copy", function () {
	return gulp.src([
		"source/fonts/**/*.{woff,woff2}",
		"source/img/**",
		"source/js/**",
		"source/*ico"
	], {
		base: "source"
	})
	.pipe(gulp.dest("build"));
});

gulp.task("server", function () {
  server.init({
    server: "build/",
    notify: false,
    open: true,
    cors: true,
    ui: false
  });

  gulp.watch("source/less/**/*.less", gulp.series("css"));
  gulp.watch("source/img/logo-pink-*.svg", gulp.series("sprite", "html", "refresh"));
  gulp.watch("source/*.html", gulp.series("html", "refresh"));
});

gulp.task("refresh", function (done) {
	server.reload();
	done();
});

gulp.task("build", gulp.series(
	"clean", 
	"copy",   
	"css", 
	"sprite", 
	"html"
));
gulp.task("start", gulp.series("build", "server"));