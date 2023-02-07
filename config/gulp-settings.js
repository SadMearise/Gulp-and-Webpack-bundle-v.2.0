// Получаем имя папки проекта
const nodePath = require("path");
const rootFolder = nodePath.basename(nodePath.resolve());

// Пути к папке с исходниками и папке с результатом
const buildFolder = `./dist`;
const srcFolder = `./src`;

// Пути к папкам и файлам проекта
module.exports = path = {
	build: {
		html: `${buildFolder}/`,
		js: `${buildFolder}`,
		files: `${buildFolder}/files/`,
		fonts: `${buildFolder}/fonts/`,
		css: `${buildFolder}/css/`,
		images: `${buildFolder}/img/`,
	},
	src: {
		html: `${srcFolder}/*.html`,
		js: `${srcFolder}/js/*.js`,
		files: `${srcFolder}/files/**/*.*`,
		fonts: `${srcFolder}/fonts/*.*`,
		scss: `${srcFolder}/scss/style.scss`,
		images: `${srcFolder}/img/**/*.{jpg,png,svg,jpeg,gif,webp}`,
		svg: `${srcFolder}/img/**/*.svg`,
		svgicons: `${srcFolder}/svgicons/*.svg`,
	},
	clean: buildFolder,
	buildFolder: buildFolder,
	rootFolder: rootFolder,
	srcFolder: srcFolder,
};
