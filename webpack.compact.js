"use strict";

const path = require( "path" );
const webpack = require( "webpack" );

const UglifyJSPlugin = require( "uglifyjs-webpack-plugin" );

module.exports = {
	"entry": "./stringe.support.js",
	"mode": "production",
	"resolve": {
		"descriptionFiles": [
			"bower.json",
			"package.json"
		],
		"modules": [
			"bower_components",
			"node_modules"
		],
		"mainFields": [
			"support",
			"browser",
			"module",
			"main"
		]
	},
	"module": {
		"rules": [
			{
				"test": /\.support\.js$/,
				"loader": "source-map-loader",
				"enforce": "pre"
			}
		]
	},
	"output": {
		"path": path.resolve( "./" ),
		"library": "stringe",
		"libraryTarget": "umd",
		"filename": "stringe.deploy.js"
	},
	"optimization": {
		"minimize": false
	},
	"plugins": [
		new UglifyJSPlugin( {
			"parallel": true,
			"sourceMap": true,
			"uglifyOptions": {
				"ecma": 8,
				"compress": {
					"keep_fargs": true,
					"keep_infinity": true,
					"passes": 3
				},
				"output": {
					"beautify": false
				},
				"mangle": false,
				"keep_classnames": true,
				"keep_fnames": true
			}
		} )
	],
	"devtool": "source-map"
};
