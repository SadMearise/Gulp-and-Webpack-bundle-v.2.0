const fs = require("fs");
const fonter = require("gulp-fonter-fix");
const ttf2woff2 = require("gulp-ttf2woff2");

function otfToTtf() {
  return (
    app.gulp
      .src(`${app.path.srcFolder}/fonts/*.otf`, {})
      .pipe(
        app.plugins.plumber(
          app.plugins.notify.onError({
            title: "FONTS",
            message: "Error: <%= error.message %>",
          }),
        ),
      )
      .pipe(
        fonter({
          formats: ["ttf"],
        }),
      )
      .pipe(app.gulp.dest(`${app.path.srcFolder}/fonts/`))
  );
}

function ttfToWoff() {
  return (
    app.gulp
      .src(`${app.path.srcFolder}/fonts/*.ttf`, {})
      .pipe(
        app.plugins.plumber(
          app.plugins.notify.onError({
            title: "FONTS",
            message: "Error: <%= error.message %>",
          }),
        ),
      )
      .pipe(
        fonter({
          formats: ["woff"],
        }),
      )
      .pipe(app.gulp.dest(`${app.path.build.fonts}`))
      .pipe(app.gulp.src(`${app.path.srcFolder}/fonts/*.ttf`))
      .pipe(ttf2woff2())
      .pipe(app.gulp.dest(`${app.path.build.fonts}`))
      .pipe(app.gulp.src(`${app.path.srcFolder}/fonts/*.{woff,woff2}`))
      .pipe(app.gulp.dest(`${app.path.build.fonts}`))
  );
}

function fonstStyle() {
  const fontsFile = `${app.path.srcFolder}/scss/base/_fonts.scss`;
  app.isFontsReW ? fs.unlink(fontsFile, cb) : null;
  fs.readdir(app.path.build.fonts, (err, fontsFiles) => {
    if (fontsFiles) {
      if (!fs.existsSync(fontsFile)) {
        fs.writeFile(fontsFile, "", cb);
        let newFileOnly;
        for (let i = 0; i < fontsFiles.length; i++) {
          const fontFileName = fontsFiles[i].split(".")[0];
          if (newFileOnly !== fontFileName) {
            const fontName = fontFileName.split("-")[0]
              ? fontFileName.split("-")[0]
              : fontFileName;
            let fontWeight = fontFileName.split("-")[1]
              ? fontFileName.split("-")[1]
              : fontFileName;
            if (fontWeight.toLowerCase() === "thin") {
              fontWeight = 100;
            } else if (fontWeight.toLowerCase() === "extralight") {
              fontWeight = 200;
            } else if (fontWeight.toLowerCase() === "light") {
              fontWeight = 300;
            } else if (fontWeight.toLowerCase() === "medium") {
              fontWeight = 500;
            } else if (fontWeight.toLowerCase() === "semibold") {
              fontWeight = 600;
            } else if (fontWeight.toLowerCase() === "bold") {
              fontWeight = 700;
            } else if (
              fontWeight.toLowerCase() === "extrabold"
              || fontWeight.toLowerCase() === "heavy"
            ) {
              fontWeight = 800;
            } else if (fontWeight.toLowerCase() === "black") {
              fontWeight = 900;
            } else {
              fontWeight = 400;
            }
            fs.appendFile(
              fontsFile,
              `@font-face {\n\tfont-family: ${fontName};\n\tfont-display: swap;\n\tsrc: url("../fonts/${fontFileName}.woff2") format("woff2"), url("../fonts/${fontFileName}.woff") format("woff");\n\tfont-weight: ${fontWeight};\n\tfont-style: normal;\n}\r\n`,
              cb,
            );
            newFileOnly = fontFileName;
          }
        }
      } else {
        console.log(
          "Файл fonts.scss уже существует. Для обновления файла нужно его удалить!",
        );
      }
    } else {
      fs.unlink(fontsFile, cb);
    }
  });
  return app.gulp.src(`${app.path.srcFolder}`);
}

function cb() { }

module.exports = {
  otfToTtf,
  ttfToWoff,
  fonstStyle,
};
