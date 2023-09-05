"use strict";
const gulp = require("gulp");
const uglify = require("gulp-uglify");
const sass = require("gulp-sass")(require("sass"));

/**
 * Asset paths
 */
const srcJS = "js/**/*.js";
const srcCss = "styles/**/*.{scss,css}";
const dest = "../assets";

/**
 * JS task
 */
gulp.task("js", function () {
  return gulp.src(srcJS).pipe(uglify()).pipe(gulp.dest(dest));
});

/**
 * CSS task
 */
gulp.task("styles", function () {
  return gulp
    .src(srcCss)
    .pipe(sass().on("error", sass.logError))
    .pipe(gulp.dest(dest));
});

/**
 * Watch task
 */
gulp.task("watch", function () {
  gulp.watch(srcJS, gulp.series("js"));
  gulp.watch(srcCss, gulp.series("styles"));
});

/**
 * Default task
 */
gulp.task("default", gulp.series("js", "styles"));
