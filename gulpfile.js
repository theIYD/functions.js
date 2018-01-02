const gulp = require('gulp');
const cleanCSS = require('gulp-clean-css');

gulp.task('minifyCSS', () => {
    return gulp.src('src/assets/app.css')
        .pipe(cleanCSS({
            compatibility: 'ie8'
        }))
        .pipe(gulp.dest('./src'));
});