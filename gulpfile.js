const gulp = require('gulp')
const cssmin = require('gulp-cssmin')
const del = require('del')
const uglify = require('gulp-uglify')
const htmlmin = require('gulp-htmlmin')
const runSequence = require('run-sequence')
const karma = require('karma')
const rev = require('gulp-rev-append')
const nginclude = require('gulp-nginclude')
const babel = require('gulp-babel')

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
        browsers: ['Chrome', 'Firefox'],
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
           .pipe(babel({
             presets: [
               "es2015",
               "babili"
             ]
           }))
           .pipe(uglify().on('error', function(err){
             console.log(err);
           }))
           .pipe(gulp.dest('dist/scripts'))
})

gulp.task('html', () => {
    return gulp.src('app/**/*.html')
           .pipe(htmlmin({collapseWhitespace: true,
                          removeComments: true}))
           .pipe(nginclude())
           .pipe(rev())
           .pipe(gulp.dest('dist'))
})

gulp.task('del', () => {
    return del(['dist'])
})
