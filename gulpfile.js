var gulp = require('gulp');
var watch = require('gulp-watch');

gulp.task('default', function(){
	console.log('this is my first gulp task');
});

gulp.task('html', function(){
	console.log('imagine something magical happening to your html file');
});

gulp.task('styles', function(){
	console.log('something wonderfull just happened to your styles.css file')
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
