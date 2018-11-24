var gulp = require('gulp');
var postcss = require('gulp-postcss');
var autoprefixer = require('autoprefixer');
var cssVars = require('postcss-simple-vars');
var nested = require('postcss-nested');
var cssImport = require('postcss-import');
var mixins = require('postcss-mixins');

gulp.task('styles', function(){
	return gulp.src('./app/assets/styles/style.css')
        .pipe(postcss([cssImport, mixins, cssVars, nested, autoprefixer]))
        // This line prevents watch to stop running after an error occurs on css compile
        .on('error', function(errorInfo){
            console.log(errorInfo.toString());
            this.emit('end');
        })
		.pipe(gulp.dest('./app/temp/styles'));
});