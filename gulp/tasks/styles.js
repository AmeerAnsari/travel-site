var gulp = require('gulp'),   
cssvars = require('postcss-simple-vars'),
nested = require('postcss-nested'),
postcss = require('gulp-postcss'),
cssImport = require('postcss-import');
autoprefixer = require('autoprefixer'),


// CSS sample task
gulp.task('styles', function () {
    // piping the post-processor PostCSS
    return gulp.src('./app/assets/styles/styles.css')
        .pipe(postcss([cssImport, cssvars, autoprefixer, nested]))
        .on('error', function(errorInfo){
            console.log(errorInfo.toString());
            this.emit('end');
        })
        .pipe(gulp.dest('./app/temp/styles'));
});

