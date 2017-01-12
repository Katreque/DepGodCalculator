const gulp = require('gulp')
const cssmin = require('gulp-cssmin')
const del = require('del')
const uglify = require('gulp-uglify')
const htmlmin = require('gulp-htmlmin')
const runSequence = require('run-sequence')
const karma = require('karma')
const rev = require('gulp-rev-append')

gulp.task('build', () =>{
    runSequence(
        'test',
        'del',
        [
            'dep',
            'js',
            'css'
        ], 

        'html'
    )
})

gulp.task('dep', () =>{
    return gulp.src('app/bower_components/**')
                .pipe(gulp.dest('dist/bower_components'))
})

gulp.task('test', (done) => {
    return new karma.Server({
        configFile: __dirname + '/karma.conf.js',
        singleRun: true,
        browsers: ['Chrome'],
        frameworks: ['jasmine']
    }, function(exitCode){
        done();
    }).start();
});

gulp.task('css', () => {
    return gulp.src('app/styles/*.css')
           .pipe(cssmin())
           .pipe(gulp.dest('dist/styles'))
})

gulp.task('js', () => {
    return gulp.src('app/scripts/**/*.js')
           .pipe(uglify())
           .pipe(gulp.dest('dist/scripts'))
})

gulp.task('html', () => {
    return gulp.src('app/**/*.html')
           .pipe(htmlmin({collapseWhitespace: true,
                          removeComments: true}))
           .pipe(rev())
           .on('error', (err) => {
               console.log(err)
           })
           .on('end', () => {
               console.log('wut')
           })
           .pipe(gulp.dest('dist'))
})

gulp.task('del', () => {
    return del(['dist'])
})