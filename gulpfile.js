import { task, series, src, dest, watch } from "gulp";
import connect from "gulp-connect";
import pug from "gulp-pug";
import notify from "gulp-notify";
import map from "gulp-sourcemaps";
import * as dartSass from "sass";
import gulpSass from "gulp-sass";
import prefixer from "gulp-autoprefixer";
import uglify from "gulp-uglify";
import concat from "gulp-concat";
import git from "gulp-gh-pages";

const sass = gulpSass(dartSass);

task("connect", () => {
  connect.server({
    root: "dist",
    livereload: true,
  });
});

task("jenkins-tests", () => {
  connect.server({
    port: 8888,
  });
  connect.serverClose();
});

task("html", () => {
  return src("src/pug/index.pug")
    .pipe(pug())
    .pipe(dest("dist"))
    .pipe(notify({ message: "HTML Task Is Successful", onLast: true }))
    .pipe(connect.reload());
});

task("css", () => {
  return src("src/scss/main.scss")
    .pipe(map.init())
    .pipe(sass({ outputStyle: "compressed" }).on("error", sass.logError))
    .pipe(prefixer("last 2 versions"))
    .pipe(map.write("."))
    .pipe(dest("dist/css"))
    .pipe(notify({ message: "CSS Task Is Successful", onLast: true }))
    .pipe(connect.reload());
});
task("js", () => {
  return src("src/js/*.js")
    .pipe(uglify())
    .pipe(concat("main.js"))
    .pipe(dest("dist/js"))
    .pipe(notify({ message: "JS Task Is Successful", onLast: true }))
    .pipe(connect.reload());
});

task("deploy", function () {
  return src("./dist/**/*").pipe(
    git({
      repository: "https://github.com/Abdul-Rahman-Ahmed/Armonia-Italia",
      branch: "main",
      message: "Automated deployment to GitHub Pages",
    })
  );
});

watch("src/pug/index.pug", series("html"));
watch("src/**/**.scss", series("css"));
watch("src/js/*.js", series("js"));
watch("**/*", series("deploy"));
task("default", series("connect"));
