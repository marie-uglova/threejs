const gulp = require('gulp');
const concat = require('gulp-concat');
const cleanCSS = require('gulp-clean-css');
const browserSync = require('browser-sync').create();
const sourcemaps = require('gulp-sourcemaps');
const less = require('gulp-less');

const styleFiles = [
    './src/less/',
]

//Базовые стили сайта
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

/*Стили промо
gulp.task('promo', function () {
    return gulp.src([styleFiles + 'promo/*.less'])
        .pipe(sourcemaps.init())
        .pipe(less())
        .pipe(concat('promo.css'))
        .pipe(autoprefixer({
            overrideBrowserslist: ['last 2 versions'],
            cascade: false
        }))
        .pipe(cleanCSS({level: 2}))
        //.pipe(sourcemaps.write('./'))
        //Выходная папка для стилей
        .pipe(gulp.dest('./web/build/'))
        .pipe(browserSync.stream());
});*/

//Таск для отслеживания изменений в файлах
gulp.task('watch', () => {
    gulp.watch('./src/less/**', gulp.series('styles'));
});

//Таск по умолчанию
gulp.task('default', gulp.parallel('styles', 'watch'));