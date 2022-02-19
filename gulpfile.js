// import gulp package
var gulp = require('gulp'),
watch = require('gulp-watch');


// default talk
gulp.task('default', function(){
    console.log("Yes, you create a Gulp task.")
})
// html sample task
gulp.task('html', function () {
    console.log("Imagin begin done something useful here.")
})


// gulp watch

gulp.task('watch', function(){
    watch('./app/index.html', function(){
        gulp.start('html');
    });
})