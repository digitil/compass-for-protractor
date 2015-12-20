var gulp = require('gulp');
require('./gulp');

gulp.task('lint', ['jshint', 'jscs']);
gulp.task('test', ['mocha', 'protractor']);
gulp.task('default', ['lint', 'test']);

gulp.task('publish', ['default', 'jsdoc', 'gh-pages']);