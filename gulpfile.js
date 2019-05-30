const gulp = require('gulp');
const browserSync = require('browser-sync').create();
const ghPages = require('gulp-gh-pages');

const paths = {
  src: 'src/**/*',
  html: {
    src: 'src/**/*.html'
  },
  styles: {
    src: 'src/**/*.css'
  },
  scripts: {
    src: 'src/**/*.js'
  }
};

function serve(cb) {
  browserSync.init({
    server: {
      baseDir: './src/'
    },
    port: 3030,
    notify: false,
    open: false,
  });
  
  gulp.watch([paths.html.src, paths.styles.src, paths.scripts.src]).on('change', () => {
    browserSync.reload();
  });

  cb();
}

exports.default = serve;