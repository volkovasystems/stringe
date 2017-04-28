"use strict";

/*;
              	@module-license:
              		The MIT License (MIT)
              		@mit-license
              
              		Copyright (@c) 2017 Richeve Siodina Bebedor
              		@email: richeve.bebedor@gmail.com
              
              		Permission is hereby granted, free of charge, to any person obtaining a copy
              		of this software and associated documentation files (the "Software"), to deal
              		in the Software without restriction, including without limitation the rights
              		to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
              		copies of the Software, and to permit persons to whom the Software is
              		furnished to do so, subject to the following conditions:
              
              		The above copyright notice and this permission notice shall be included in all
              		copies or substantial portions of the Software.
              
              		THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
              		IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
              		FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
              		AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
              		LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
              		OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
              		SOFTWARE.
              	@end-module-license
              
              	@module-configuration:
              		{
              			"package": "stringe",
              			"path": "stringe/stringe.js",
              			"file": "stringe.js",
              			"module": "stringe",
              			"author": "Richeve S. Bebedor",
              			"eMail": "richeve.bebedor@gmail.com",
              			"repository": "https://github.com/volkovasystems/stringe.git",
              			"test": "stringe-test.js",
              			"global": true
              		}
              	@end-module-configuration
              
              	@module-documentation:
              		Safe toString alternative.
              	@end-module-documentation
              */var _getOwnPropertyNames = require("babel-runtime/core-js/object/get-own-property-names");var _getOwnPropertyNames2 = _interopRequireDefault(_getOwnPropertyNames);var _stringify = require("babel-runtime/core-js/json/stringify");var _stringify2 = _interopRequireDefault(_stringify);function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };}

var TO_STRING = "toString";

var stringe = function stringe(entity) {
	/*;
                                        	@meta-configuration:
                                        		{
                                        			"entity:required": "*"
                                        		}
                                        	@end-meta-configuration
                                        */

	if (typeof entity == "string") {
		return entity;
	}

	var issue = [];
	try {
		if (typeof entity == "undefined" || entity === null ||
		typeof entity[TO_STRING] != "function")
		{
			return "" + entity;
		}

	} catch (error) {issue.push(error.stack);}

	try {
		if (entity[TO_STRING] && typeof entity[TO_STRING] == "function") {
			return entity.toString();
		}

	} catch (error) {issue.push(error.stack);}

	try {
		return (0, _stringify2.default)((0, _getOwnPropertyNames2.default)(entity).
		reduce(function (cache, property) {
			cache[property] = stringe(entity[property]);

			return cache;
		}, {}));

	} catch (error) {issue.push(error.stack);}

	try {
		return "" + entity;

	} catch (error) {
		issue.push(error.stack);

		throw new Error("fatal, cannot transform to string, " + issue.join(","));
	}
};

module.exports = stringe;

//# sourceMappingURL=stringe.support.js.map