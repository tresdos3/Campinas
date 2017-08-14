<<<<<<< HEAD
const gulp = require('gulp');
const shell = require('gulp-shell');
const runSequence = require('run-sequence');
const del = require('del');
const fs = require('fs');

gulp.task('default', function(callback) {
    runSequence('directoy','interac','init','build','copy','deploy', callback);
    // runSequence('build','copy','deploy', callback);
});
gulp.task('directoy', shell.task('mkdir deploy'));
gulp.task('interac', shell.task('firebase login --interactive'));
// gulp.task('firebase', shell.task('firebase login'));
gulp.task('init', shell.task('cd deploy && firebase init'));
gulp.task('build', shell.task('ng build --aot'));
gulp.task('copy', shell.task('cp -r dist\* deploy\public'));
=======
const gulp = require('gulp');
const shell = require('gulp-shell');
const runSequence = require('run-sequence');
const del = require('del');
const fs = require('fs');

gulp.task('default', function(callback) {
    runSequence('directoy','interac','init','build','copy','deploy', callback);
    // runSequence('build','copy','deploy', callback);
});
gulp.task('directoy', shell.task('mkdir deploy'));
gulp.task('interac', shell.task('firebase login --interactive'));
// gulp.task('firebase', shell.task('firebase login'));
gulp.task('init', shell.task('cd deploy && firebase init'));
gulp.task('build', shell.task('ng build --aot'));
gulp.task('copy', shell.task('cp -r dist\* deploy\public'));
>>>>>>> 9f714dc4a339608272edb07e476a195e21d4a859
gulp.task('deploy', shell.task('cd deploy && firebase deploy'));