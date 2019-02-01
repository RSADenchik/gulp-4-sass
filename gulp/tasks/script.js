module.exports = function () {

    $.gulp.task('scripts:lib',function () {
        return $.gulp.src(['src/js/partials/jquery-3.3.1.min.js',
        'node_modules/slick-carousel/slick/slick.min.js'])
            .pipe($.gp.concat('libs.min.js'))
            .pipe($.gulp.dest('build/js'))
            .pipe($.bs.reload({
                stream:true
            }));
    });
    
    $.gulp.task('scripts',function () {
        return $.gulp.src('src/js/main.js')
            .pipe($.gulp.dest('build/js'))
            .pipe($.bs.reload({
                stream:true
            }));
    });
};