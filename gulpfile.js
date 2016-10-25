var gulp        = require('gulp');
var stylus 			= require('gulp-stylus');
var minifyCSS 	= require('gulp-minify-css');
var uglify 			= require('gulp-uglify');
var rename 			= require('gulp-rename');
var concat 			= require('gulp-concat');
var browserSync = require('browser-sync');

gulp.task('bootstrap', function(){
	gulp.src('build/bootstrap/*.css')
		.pipe(minifyCSS())
		.pipe(gulp.dest('public/bootstrap'))
});

gulp.task('stylus', function () {
    gulp.src('build/stylus/*.styl')
        .pipe(stylus({compress: true, paths: ['build/stylus']}))
        .pipe(minifyCSS())
        .pipe(rename('style.css'))
        .pipe(gulp.dest('public/css'))
		.pipe(browserSync.reload({stream:true}))
});

gulp.task('js', function(){
    gulp.src('build/js/script.js')
    .pipe(uglify())
    .pipe(concat('output.min.js')) 
    .pipe(gulp.dest('public/js'))
    .pipe(browserSync.reload({stream:true}))
})

gulp.task('html', function(){
	gulp.src('build/html/*.html')
		.pipe(gulp.dest('public'))
		.pipe(browserSync.reload({stream:true}))
});

gulp.task('watch', function () {
   gulp.watch('build/stylus/*.styl', ['stylus']);
   gulp.watch('build/html/*.html', ['html']);
   gulp.watch('build/js/*.js', ['js']);
});

gulp.task('browser-sync', function() {
  browserSync({
    server: {
      baseDir: "public"
    }
  });
});

gulp.task('default', ['bootstrap', 'stylus', 'js', 'html','browser-sync', 'watch']);
