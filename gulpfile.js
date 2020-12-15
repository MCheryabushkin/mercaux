const gulp = require("gulp");
const { series, parallel } = gulp;

const pug = require("gulp-pug");
const clean = require("gulp-clean");
const server = require("browser-sync").create();
const sass = require("gulp-sass");
const autoprefixer = require("gulp-autoprefixer");
const babel = require('gulp-babel');
const uglify = require('gulp-uglify');
const concat = require('gulp-concat');
const imagemin = require('gulp-imagemin')

const html = () => {
  return gulp
    .src("src/pug/*.pug")
    .pipe(
      pug({
        pretty: true,
      })
    )
    .pipe(gulp.dest("build"));
};
const styles = () => {
  return gulp
    .src("src/styles/**/*.scss")
    .pipe(sass())
    .pipe(
      autoprefixer({
        cascade: false,
      })
    )
    .pipe(gulp.dest("build/css"));
};
const scripts = () => {
  return gulp
    .src("src/scripts/*.js")
    .pipe(
      babel({
        presets: ["@babel/preset-env"],
      })
    )
    .pipe(uglify())
    .pipe(concat("main.min.js"))
    .pipe(gulp.dest("build/js"));
};

const cleanBuild = () => {
  return gulp.src("build", { read: false }).pipe(clean());
};

const images = () => {
  return gulp
    .src("src/images/**/*.{gif,png,jpg,svg,webp}")
    .pipe(imagemin())
    .pipe(gulp.dest("build/images"));
};

const watch = () => {
  gulp.watch("src/pug/**/*.pug", html).on("change", server.reload);
  gulp.watch("src/styles/**/*.scss", styles).on("change", server.reload);
  gulp.watch("src/scripts/**/*.js", scripts).on("change", server.reload);
  gulp.watch("src/images/**/*.{gif,png,jpg,svg,webp}", images).on("change", server.reload);
};

const serv = (cb) => {
  server.init({
    server: "build",
    notify: false,
    open: true,
    cors: true,
  });
  watch();
  return cb();
};

exports.dev = series(
  //   cleanBuild,
  parallel(html, styles, scripts, images),
  parallel(serv)
);
