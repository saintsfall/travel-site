var gulp = require('gulp');
var watch = require('gulp-watch');
var postcss = require('gulp-postcss');
var autoprefixer = require('autoprefixer');
var cssVars = require('postcss-simple-vars');
var nested = require('postcss-nested');
var cssImport = require('postcss-import');

gulp.task('default', function(){
	console.log('this is my first gulp task');
});

gulp.task('html', function(){
	console.log('imagine something magical happening to your html file');
});

gulp.task('styles', function(){
	return gulp.src('./app/assets/styles/style.css')
		.pipe(postcss([cssImport, cssVars, nested, autoprefixer]))
		.pipe(gulp.dest('./app/temp/styles.css'));
})

gulp.task('watch', function(){
	watch('./app/index.html', function(){
		gulp.start('html');
	});

	// Setting the path to be watched use ** to any hypotetical folders and *.css to any .css file
	watch('./app/assets/styles/**/*.css', function(){
		gulp.start('styles');
	})
});
