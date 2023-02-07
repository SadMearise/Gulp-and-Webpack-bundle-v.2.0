const webpack = require("webpack");
const webpackStream = require("webpack-stream");
const webpackConfig = require("../webpack.config.js");

module.exports = function js() {
	return app.gulp
		.src(app.path.src.js)
		.pipe(
			app.plugins.plumber(
				app.plugins.notify.onError({
					title: "JS",
					message: "Error: <%= error.message %>",
				})
			)
		)
		.pipe(webpackStream(webpackConfig), webpack)
		.pipe(app.gulp.dest(app.path.build.js));
};
