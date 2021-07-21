const { series, src, dest, watch, parallel } = require('gulp');
const sass = require('gulp-sass');
const browserSync = require('browser-sync').create();

const browserTask = () =>
  browserSync.init({
    server: {
      baseDir: './src',
    },
  });

const watcher = () => {
  watch('./src/scss/**/*.scss', sassTask);
  watch('./src/about/scss/**/*.scss', sassTaskAbout);
  watch('./src/services/scss/**/*.scss', sassTaskServices);
  watch('./src/services/services_page/scss/**/*.scss', sassTaskServices_page);
  watch('./src/Team/scss/**/*.scss', sassTaskTeam);
  watch('./src/Team/Team_member_page/scss/**/*.scss', sassTaskTeam_member_page);
  watch('./src/*.html').on('change', browserSync.reload);
};

const sassTask = () =>
  src('./src/scss/style.scss')
    .pipe(sass())
    .pipe(dest('./src/css'))
    .pipe(browserSync.stream());

const sassTaskAbout = () =>
  src('./src/about/scss/style.scss')
    .pipe(sass())
    .pipe(dest('./src/about/css'))
    .pipe(browserSync.stream());

const sassTaskServices = () =>
  src('./src/services/scss/style.scss')
    .pipe(sass())
    .pipe(dest('./src/services/css'))
    .pipe(browserSync.stream());

const sassTaskServices_page = () =>
  src('./src/services/services_page/scss/style.scss')
    .pipe(sass())
    .pipe(dest('./src/services/services_page/css'))
    .pipe(browserSync.stream());

const sassTaskTeam = () =>
  src('./src/Team/scss/style.scss')
    .pipe(sass())
    .pipe(dest('./src/Team/css'))
    .pipe(browserSync.stream());

const sassTaskTeam_member_page = () =>
  src('./src/Team/Team_member_page/scss/style.scss')
    .pipe(sass())
    .pipe(dest('./src/Team/Team_member_page/css'))
    .pipe(browserSync.stream());

exports.default = series(sassTask, parallel(browserTask, watcher));
