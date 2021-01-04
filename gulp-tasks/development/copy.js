const gulp = require("gulp"); // Подключаем Gulp

// Следим за картинками images
gulp.task("copy:img", function(callback) {
    return gulp
        .src("./src/img/**/*.*")
        .pipe(gulp.dest("./docs/img/"))
        .pipe(browserSync.stream());
    callback();
});

// Следим за картинками Upload
gulp.task("copy:files", function(callback) {
    return gulp
        .src("./src/files/**/*.*")
        .pipe(gulp.dest("./docs/files/"))
        .pipe(browserSync.stream());
    callback();
});

// Следим за картинками Upload
gulp.task("copy:libs", function(callback) {
    return gulp
        .src("./src/libs/**/*.*")
        .pipe(gulp.dest("./docs/libs/"))
        .pipe(browserSync.stream());
    callback();
});

// Следим за скриптами
gulp.task("copy:js", function(callback) {
    return gulp
        .src("./src/js/**/*.*")
        .pipe(gulp.dest("./docs/js/"))
        .pipe(browserSync.stream());
    callback();
});
