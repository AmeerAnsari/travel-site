var gulp = require('gulp'),   
cssvars = require('postcss-simple-vars'),
nested = require('postcss-nested'),
postcss = require('gulp-postcss'),
autoprefixer = require('autoprefixer'),
cssImport = require('postcss-import'),
mixins = require('postcss-mixins');


// CSS sample task
gulp.task('styles', function () {
    // piping the post-processor PostCSS
    return gulp.src('./app/assets/styles/styles.css')
        .pipe(postcss([cssImport, mixins,cssvars, autoprefixer, nested]))
        .on('error', function(errorInfo){
            console.log(errorInfo.toString());
            this.emit('end');
        })
        .pipe(gulp.dest('./app/temp/styles'));
});

