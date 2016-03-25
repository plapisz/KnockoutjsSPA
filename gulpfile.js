var gulp = require('gulp');
 
function errorLog (error) {
	console.error.bind(error);
	this.emit('end');
}

gulp.task('copy_js_lib', function() {
	return gulp.src([
		'jspm_packages/github/jmcriffey/bower-traceur-runtime@0.0.91/traceur-runtime.min.js',
		'jspm_packages/system.js',
        'bower_components/jquery/dist/jquery.js',
        'bower_components/bootstrap/dist/js/bootstrap.js',
        'bower_components/sammy/lib/sammy.js',
		'bower_components/knockout/dist/knockout.js'])
	.pipe(gulp.dest('src/assets/libs/'));
});

gulp.task('copy_css_files', function () {
    return gulp.src([
        'bower_components/bootstrap/dist/css/bootstrap.min.css',
    ])
	.pipe(gulp.dest('src/assets/css/'));
});

gulp.task('default', ['copy_js_lib','copy_css_files']);