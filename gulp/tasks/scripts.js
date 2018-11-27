let gulp = require('gulp');
let webpack = require('webpack');

gulp.task('scripts', function(callback){
    webpack(require('../../webpack.config'), function(error, stats){
        if(error){
            console.log(error.toString())
        }
        console.log(stats.toString());
        callback();
    });
})