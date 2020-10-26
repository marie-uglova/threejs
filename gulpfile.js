const gulp = require('gulp');
const include = require('gulp-include');
const concat = require('gulp-concat');
const cleanCSS = require('gulp-clean-css');
const browserSync = require('browser-sync').create();
const sourcemaps = require('gulp-sourcemaps');
const less = require('gulp-less');
const uglify = require('gulp-uglify-es').default;

const styleFiles = [
    './src/less/',
];

const scriptsFiles = [
    './src/js/official/',
];

// Стили сайта
gulp.task('styles', () => {
   return gulp.src(styleFiles + 'style.less')
       .pipe(sourcemaps.init())
       .pipe(less())
       .pipe(concat('style.css'))
       .pipe(cleanCSS({level: 2}))
       .pipe(sourcemaps.write('./'))
       //Выходная папка для стилей
       .pipe(gulp.dest('./build/css'))
       .pipe(browserSync.stream());
});

// Скрипты сайта
gulp.task('scripts', () => {
    return gulp.src(scriptsFiles + 'official.js')
        .pipe(include())
        .pipe(uglify())
        .on('error', console.log)
        //Выходная папка для стилей
        .pipe(gulp.dest('./build/js'))
        .pipe(browserSync.stream());
});

// Таск для отслеживания изменений в файлах
gulp.task('watch', () => {
    gulp.watch('./src/less/**', gulp.series('styles'))
    gulp.watch('./src/js/official/**', gulp.series('scripts'))
});

// Таск по умолчанию
gulp.task('default', gulp.series(gulp.parallel('styles', 'scripts'), 'watch'));