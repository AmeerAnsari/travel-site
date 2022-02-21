var gulp = require('gulp'),    
watch = require('gulp-watch'),
browserSync = require('browser-sync').create();


// gulp watch
gulp.task('watch', function(){
   
    // HTML task (index.html)
    watch('./app/index.html', function(){
        browserSync.reload();
    });

    // CSS task (Style.css)
    watch('./app/assets/styles/**/*.css', function () {
    gulp.start('cssInject');
    });

    browserSync.init({
        notify: false,
        server: {
            baseDir: 'app'
        }
    });

});


// task
gulp.task('cssInject', ['styles'], function(){
    return gulp.src('app/temp/styles/styles.css')
     .pipe(browserSync.stream());
 });
 