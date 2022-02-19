var gulp = require('gulp'),    
watch = require('gulp-watch'),
postcss = require('gulp-postcss'),
cssvars = require('postcss-simple-vars'),
autoprefixer = require('autoprefixer'),
nested = require('postcss-nested'),
cssImport = require('postcss-import');


// default talk
gulp.task('default', function(){
    console.log("Yes, you create a Gulp task.")
})
// html sample task
gulp.task('html', function () {
    console.log("Imagin begin done something useful here.")
})

// CSS sample task
gulp.task('styles', function () {
    // piping the post-processor PostCSS
    return gulp.src('./app/assets/styles/styles.css')
        .pipe(postcss([cssImport, cssvars, autoprefixer, nested]))
        .pipe(gulp.dest('./app/temp/styles'));
})





// gulp watch
gulp.task('watch', function(){
   
    // HTML task (index.html)
    watch('./app/index.html', function(){
        gulp.start('html');
    });

    // CSS task (Style.css)
    watch('./app/assets/styles/**/*.css', function () {
    gulp.start('styles');
    });

    // 

});
