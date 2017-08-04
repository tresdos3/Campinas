const gulp = require('gulp');
const shell = require('gulp-shell');
const runSequence = require('run-sequence');
const del = require('del');
const fs = require('fs');

gulp.task('default', function(callback) {
    runSequence('directoy','firebase','init','build','copy','deploy', callback);
    // runSequence('build','copy','deploy', callback);
});
gulp.task('directoy', shell.task('mkdir deploy'));
gulp.task('firebase', shell.task('firebase login'));
gulp.task('init', shell.task('cd deploy && firebase init'));
gulp.task('build', shell.task('ng build --aot'));
gulp.task('copy', shell.task('cp dist/* deploy/public'));
gulp.task('deploy', shell.task('cd deploy && firebase deploy'));