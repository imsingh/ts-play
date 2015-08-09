var gulp = require('gulp');
var tsc = require('gulp-typescript');
var babel = require('gulp-babel');
var concat = require('gulp-concat');
var connect = require('gulp-connect');

var tsOptions = {
	target: 'ES6'
};

var babelOptions = {
	modules: 'system',
	moduleId: true,
	getModuleId: function(name) {
		return name;
	}
}

var serverSettings = {
	port: 8080
};

gulp.task('default', ['serve', 'watch'], function() {
	console.log("It works!");
});

gulp.task('serve', ['transpile'], function() {
	connect.server({
		port: serverSettings.port,
		livereload: true
	});
});

gulp.task('watch', function() {
	gulp.watch('js/**/*.ts', ['transpile']);
});

gulp.task('transpile', function() {
	var stream = gulp.src('js/**/*.ts')
		.pipe(tsc(tsOptions))
		.on('error', function(err) {
			this.emit('end')
		})
		.pipe(babel(babelOptions));

	// Generating Dist Folder
	stream.pipe(gulp.dest('dist'));
	
	// Generating App Bundle
	stream.pipe(concat('app.bundle.js'))
	.pipe(gulp.dest('dist'));
		
});