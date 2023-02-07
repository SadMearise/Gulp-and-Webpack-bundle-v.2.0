const notify = require("gulp-notify");
const plumber = require("gulp-plumber");
const ifPlugin = require("gulp-if");
const rename = require("gulp-rename");
const newer = require("gulp-newer");

module.exports = plugins = {
	notify,
	if: ifPlugin,
	plumber,
	rename,
	newer,
};
