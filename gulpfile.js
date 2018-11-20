const gulp = require('gulp');
const sass = require('gulp-sass');
const browserSync = require('browser-sync').create();
const nodemon = require('gulp-nodemon');
const runSequence = require('run-sequence');
const uglify = require('gulp-uglify');
const pump = require('pump');

const gulpConfig = {
    paths: {
        scss: `${__dirname}/dev/scss/**/*.scss`,
        scssDest: `${__dirname}/app/assets/css`,
        js: `${__dirname}/dev/scripts/**/*.js`,
        jsDest: `${__dirname}/app/assets/scripts`,
        nunjucks: `${__dirname}/app/views/**/*.njk`,
        govImages: [`${__dirname}/node_modules/govuk-frontend/assets/images/**.*{png,svg}`],
        govImagesDest: `${__dirname}/app/assets/images`,
        key: `${__dirname}/dev/certs/server.key`,
        cert: `${__dirname}/dev/certs/server.crt`
    }
};

// Copy images from govuk node_modules
gulp.task('copygovImages', () => {
    return gulp.src(gulpConfig.paths.govImages)
        .pipe(gulp.dest(gulpConfig.paths.govImagesDest));
});

// minifies and compiles sass files from development to app (main.scss imports sass files from govuk node_modules)
gulp.task('sass', () => {
    try {
        return gulp.src(gulpConfig.paths.scss)
            .pipe(sass({outputStyle: 'compressed',
                includePaths: [
                    'node_modules/govuk_frontend'
                ]}).on('error', sass.logError))
            .pipe(gulp.dest(gulpConfig.paths.scssDest))
            .pipe(browserSync.reload({
                stream: true
            }));
    }
    catch(error) {
        console.log(error);
    }
});


gulp.task('uglyjs', (cb) => {
    pump([
        gulp.src(gulpConfig.paths.js),
        uglify(),
        gulp.dest(gulpConfig.paths.jsDest)
    ],
    cb)
        .pipe(browserSync.reload({
            stream: true
        }));
});

// refreshes on njk file change
gulp.task('nunjucks', () => {
    browserSync.reload();
});

// watch all scss and js files, run required tasks, refresh browser
gulp.task('watch', ['sass'], () =>{
    gulp.watch(gulpConfig.paths.scss, {interval: 1000, mode: 'poll'}, ['sass']);
    gulp.watch(gulpConfig.paths.js, {interval: 1000, mode: 'poll'}, ['uglyjs']);
    gulp.watch(gulpConfig.paths.nunjucks, {interval: 1000, mode: 'poll'}, ['nunjucks']);
});

gulp.task('browserSync', () => {
    browserSync.init({
        proxy: 'http://localhost:9800',
        port: 9801,
        reloadDelay: 1000,
        ghostMode: {
            clicks: false,
            forms: false,
            scroll: false
        },
        open: false
    });
});

gulp.task('server', () => {
    nodemon({
        script: 'index.js',
        ext: 'js'
    }).on('quit', function() {
        process.exit(0);
    });
});

gulp.task('default', (done) => {
    runSequence('copygovImages', 'watch', 'sass', 'uglyjs', 'server', 'browserSync', done);
});
