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
              			"contributors": [
              				"John Lenon Maghanoy <johnlenonmaghanoy@gmail.com>",
              				"Vinse Vinalon <vinsevinalon@gmail.com>"
              			],
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInN0cmluZ2Uuc3VwcG9ydC5qcyJdLCJuYW1lcyI6WyJUT19TVFJJTkciLCJzdHJpbmdlIiwiZW50aXR5IiwiaXNzdWUiLCJlcnJvciIsInB1c2giLCJzdGFjayIsInRvU3RyaW5nIiwicmVkdWNlIiwiY2FjaGUiLCJwcm9wZXJ0eSIsIkVycm9yIiwiam9pbiIsIm1vZHVsZSIsImV4cG9ydHMiXSwibWFwcGluZ3MiOiJBQUFBOztBQUVBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQWtEQSxJQUFNQSxZQUFZLFVBQWxCOztBQUVBLElBQU1DLFVBQVUsU0FBU0EsT0FBVCxDQUFrQkMsTUFBbEIsRUFBMEI7QUFDekM7Ozs7Ozs7O0FBUUEsS0FBSSxPQUFPQSxNQUFQLElBQWlCLFFBQXJCLEVBQStCO0FBQzlCLFNBQU9BLE1BQVA7QUFDQTs7QUFFRCxLQUFJQyxRQUFRLEVBQVo7QUFDQSxLQUFHO0FBQ0YsTUFBSSxPQUFPRCxNQUFQLElBQWlCLFdBQWpCLElBQWdDQSxXQUFXLElBQTNDO0FBQ0gsU0FBT0EsT0FBUUYsU0FBUixDQUFQLElBQThCLFVBRC9CO0FBRUE7QUFDQyxlQUFXRSxNQUFYO0FBQ0E7O0FBRUQsRUFQRCxDQU9DLE9BQU9FLEtBQVAsRUFBYyxDQUFFRCxNQUFNRSxJQUFOLENBQVlELE1BQU1FLEtBQWxCLEVBQTRCOztBQUU3QyxLQUFHO0FBQ0YsTUFBSUosT0FBUUYsU0FBUixLQUF5QixPQUFPRSxPQUFRRixTQUFSLENBQVAsSUFBOEIsVUFBM0QsRUFBeUU7QUFDeEUsVUFBT0UsT0FBT0ssUUFBUCxFQUFQO0FBQ0E7O0FBRUQsRUFMRCxDQUtDLE9BQU9ILEtBQVAsRUFBYyxDQUFFRCxNQUFNRSxJQUFOLENBQVlELE1BQU1FLEtBQWxCLEVBQTRCOztBQUU3QyxLQUFHO0FBQ0YsU0FBTyx5QkFBZ0IsbUNBQTRCSixNQUE1QjtBQUNyQk0sUUFEcUIsQ0FDYixVQUFFQyxLQUFGLEVBQVNDLFFBQVQsRUFBdUI7QUFDL0JELFNBQU9DLFFBQVAsSUFBb0JULFFBQVNDLE9BQVFRLFFBQVIsQ0FBVCxDQUFwQjs7QUFFQSxVQUFPRCxLQUFQO0FBQ0EsR0FMcUIsRUFLbkIsRUFMbUIsQ0FBaEIsQ0FBUDs7QUFPQSxFQVJELENBUUMsT0FBT0wsS0FBUCxFQUFjLENBQUVELE1BQU1FLElBQU4sQ0FBWUQsTUFBTUUsS0FBbEIsRUFBNEI7O0FBRTdDLEtBQUc7QUFDRixjQUFXSixNQUFYOztBQUVBLEVBSEQsQ0FHQyxPQUFPRSxLQUFQLEVBQWM7QUFDZEQsUUFBTUUsSUFBTixDQUFZRCxNQUFNRSxLQUFsQjs7QUFFQSxRQUFNLElBQUlLLEtBQUoseUNBQWtEUixNQUFNUyxJQUFOLENBQVksR0FBWixDQUFsRCxDQUFOO0FBQ0E7QUFDRCxDQWhERDs7QUFrREFDLE9BQU9DLE9BQVAsR0FBaUJiLE9BQWpCIiwiZmlsZSI6InN0cmluZ2Uuc3VwcG9ydC5qcyIsInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xyXG5cclxuLyo7XHJcblx0QG1vZHVsZS1saWNlbnNlOlxyXG5cdFx0VGhlIE1JVCBMaWNlbnNlIChNSVQpXHJcblx0XHRAbWl0LWxpY2Vuc2VcclxuXHJcblx0XHRDb3B5cmlnaHQgKEBjKSAyMDE3IFJpY2hldmUgU2lvZGluYSBCZWJlZG9yXHJcblx0XHRAZW1haWw6IHJpY2hldmUuYmViZWRvckBnbWFpbC5jb21cclxuXHJcblx0XHRQZXJtaXNzaW9uIGlzIGhlcmVieSBncmFudGVkLCBmcmVlIG9mIGNoYXJnZSwgdG8gYW55IHBlcnNvbiBvYnRhaW5pbmcgYSBjb3B5XHJcblx0XHRvZiB0aGlzIHNvZnR3YXJlIGFuZCBhc3NvY2lhdGVkIGRvY3VtZW50YXRpb24gZmlsZXMgKHRoZSBcIlNvZnR3YXJlXCIpLCB0byBkZWFsXHJcblx0XHRpbiB0aGUgU29mdHdhcmUgd2l0aG91dCByZXN0cmljdGlvbiwgaW5jbHVkaW5nIHdpdGhvdXQgbGltaXRhdGlvbiB0aGUgcmlnaHRzXHJcblx0XHR0byB1c2UsIGNvcHksIG1vZGlmeSwgbWVyZ2UsIHB1Ymxpc2gsIGRpc3RyaWJ1dGUsIHN1YmxpY2Vuc2UsIGFuZC9vciBzZWxsXHJcblx0XHRjb3BpZXMgb2YgdGhlIFNvZnR3YXJlLCBhbmQgdG8gcGVybWl0IHBlcnNvbnMgdG8gd2hvbSB0aGUgU29mdHdhcmUgaXNcclxuXHRcdGZ1cm5pc2hlZCB0byBkbyBzbywgc3ViamVjdCB0byB0aGUgZm9sbG93aW5nIGNvbmRpdGlvbnM6XHJcblxyXG5cdFx0VGhlIGFib3ZlIGNvcHlyaWdodCBub3RpY2UgYW5kIHRoaXMgcGVybWlzc2lvbiBub3RpY2Ugc2hhbGwgYmUgaW5jbHVkZWQgaW4gYWxsXHJcblx0XHRjb3BpZXMgb3Igc3Vic3RhbnRpYWwgcG9ydGlvbnMgb2YgdGhlIFNvZnR3YXJlLlxyXG5cclxuXHRcdFRIRSBTT0ZUV0FSRSBJUyBQUk9WSURFRCBcIkFTIElTXCIsIFdJVEhPVVQgV0FSUkFOVFkgT0YgQU5ZIEtJTkQsIEVYUFJFU1MgT1JcclxuXHRcdElNUExJRUQsIElOQ0xVRElORyBCVVQgTk9UIExJTUlURUQgVE8gVEhFIFdBUlJBTlRJRVMgT0YgTUVSQ0hBTlRBQklMSVRZLFxyXG5cdFx0RklUTkVTUyBGT1IgQSBQQVJUSUNVTEFSIFBVUlBPU0UgQU5EIE5PTklORlJJTkdFTUVOVC4gSU4gTk8gRVZFTlQgU0hBTEwgVEhFXHJcblx0XHRBVVRIT1JTIE9SIENPUFlSSUdIVCBIT0xERVJTIEJFIExJQUJMRSBGT1IgQU5ZIENMQUlNLCBEQU1BR0VTIE9SIE9USEVSXHJcblx0XHRMSUFCSUxJVFksIFdIRVRIRVIgSU4gQU4gQUNUSU9OIE9GIENPTlRSQUNULCBUT1JUIE9SIE9USEVSV0lTRSwgQVJJU0lORyBGUk9NLFxyXG5cdFx0T1VUIE9GIE9SIElOIENPTk5FQ1RJT04gV0lUSCBUSEUgU09GVFdBUkUgT1IgVEhFIFVTRSBPUiBPVEhFUiBERUFMSU5HUyBJTiBUSEVcclxuXHRcdFNPRlRXQVJFLlxyXG5cdEBlbmQtbW9kdWxlLWxpY2Vuc2VcclxuXHJcblx0QG1vZHVsZS1jb25maWd1cmF0aW9uOlxyXG5cdFx0e1xyXG5cdFx0XHRcInBhY2thZ2VcIjogXCJzdHJpbmdlXCIsXHJcblx0XHRcdFwicGF0aFwiOiBcInN0cmluZ2Uvc3RyaW5nZS5qc1wiLFxyXG5cdFx0XHRcImZpbGVcIjogXCJzdHJpbmdlLmpzXCIsXHJcblx0XHRcdFwibW9kdWxlXCI6IFwic3RyaW5nZVwiLFxyXG5cdFx0XHRcImF1dGhvclwiOiBcIlJpY2hldmUgUy4gQmViZWRvclwiLFxyXG5cdFx0XHRcImVNYWlsXCI6IFwicmljaGV2ZS5iZWJlZG9yQGdtYWlsLmNvbVwiLFxyXG5cdFx0XHRcImNvbnRyaWJ1dG9yc1wiOiBbXHJcblx0XHRcdFx0XCJKb2huIExlbm9uIE1hZ2hhbm95IDxqb2hubGVub25tYWdoYW5veUBnbWFpbC5jb20+XCIsXHJcblx0XHRcdFx0XCJWaW5zZSBWaW5hbG9uIDx2aW5zZXZpbmFsb25AZ21haWwuY29tPlwiXHJcblx0XHRcdF0sXHJcblx0XHRcdFwicmVwb3NpdG9yeVwiOiBcImh0dHBzOi8vZ2l0aHViLmNvbS92b2xrb3Zhc3lzdGVtcy9zdHJpbmdlLmdpdFwiLFxyXG5cdFx0XHRcInRlc3RcIjogXCJzdHJpbmdlLXRlc3QuanNcIixcclxuXHRcdFx0XCJnbG9iYWxcIjogdHJ1ZVxyXG5cdFx0fVxyXG5cdEBlbmQtbW9kdWxlLWNvbmZpZ3VyYXRpb25cclxuXHJcblx0QG1vZHVsZS1kb2N1bWVudGF0aW9uOlxyXG5cdFx0U2FmZSB0b1N0cmluZyBhbHRlcm5hdGl2ZS5cclxuXHRAZW5kLW1vZHVsZS1kb2N1bWVudGF0aW9uXHJcbiovXHJcblxyXG5jb25zdCBUT19TVFJJTkcgPSBcInRvU3RyaW5nXCI7XHJcblxyXG5jb25zdCBzdHJpbmdlID0gZnVuY3Rpb24gc3RyaW5nZSggZW50aXR5ICl7XHJcblx0Lyo7XHJcblx0XHRAbWV0YS1jb25maWd1cmF0aW9uOlxyXG5cdFx0XHR7XHJcblx0XHRcdFx0XCJlbnRpdHk6cmVxdWlyZWRcIjogXCIqXCJcclxuXHRcdFx0fVxyXG5cdFx0QGVuZC1tZXRhLWNvbmZpZ3VyYXRpb25cclxuXHQqL1xyXG5cclxuXHRpZiggdHlwZW9mIGVudGl0eSA9PSBcInN0cmluZ1wiICl7XHJcblx0XHRyZXR1cm4gZW50aXR5O1xyXG5cdH1cclxuXHJcblx0bGV0IGlzc3VlID0gWyBdO1xyXG5cdHRyeXtcclxuXHRcdGlmKCB0eXBlb2YgZW50aXR5ID09IFwidW5kZWZpbmVkXCIgfHwgZW50aXR5ID09PSBudWxsIHx8XHJcblx0XHRcdHR5cGVvZiBlbnRpdHlbIFRPX1NUUklORyBdICE9IFwiZnVuY3Rpb25cIiApXHJcblx0XHR7XHJcblx0XHRcdHJldHVybiBgJHsgZW50aXR5IH1gO1xyXG5cdFx0fVxyXG5cclxuXHR9Y2F0Y2goIGVycm9yICl7IGlzc3VlLnB1c2goIGVycm9yLnN0YWNrICk7IH1cclxuXHJcblx0dHJ5e1xyXG5cdFx0aWYoIGVudGl0eVsgVE9fU1RSSU5HIF0gJiYgKCB0eXBlb2YgZW50aXR5WyBUT19TVFJJTkcgXSA9PSBcImZ1bmN0aW9uXCIgKSApe1xyXG5cdFx0XHRyZXR1cm4gZW50aXR5LnRvU3RyaW5nKCApO1xyXG5cdFx0fVxyXG5cclxuXHR9Y2F0Y2goIGVycm9yICl7IGlzc3VlLnB1c2goIGVycm9yLnN0YWNrICk7IH1cclxuXHJcblx0dHJ5e1xyXG5cdFx0cmV0dXJuIEpTT04uc3RyaW5naWZ5KCBPYmplY3QuZ2V0T3duUHJvcGVydHlOYW1lcyggZW50aXR5IClcclxuXHRcdFx0LnJlZHVjZSggKCBjYWNoZSwgcHJvcGVydHkgKSA9PiB7XHJcblx0XHRcdFx0Y2FjaGVbIHByb3BlcnR5IF0gPSBzdHJpbmdlKCBlbnRpdHlbIHByb3BlcnR5IF0gKTtcclxuXHJcblx0XHRcdFx0cmV0dXJuIGNhY2hlO1xyXG5cdFx0XHR9LCB7IH0gKSApO1xyXG5cclxuXHR9Y2F0Y2goIGVycm9yICl7IGlzc3VlLnB1c2goIGVycm9yLnN0YWNrICk7IH1cclxuXHJcblx0dHJ5e1xyXG5cdFx0cmV0dXJuIGAkeyBlbnRpdHkgfWA7XHJcblxyXG5cdH1jYXRjaCggZXJyb3IgKXtcclxuXHRcdGlzc3VlLnB1c2goIGVycm9yLnN0YWNrICk7XHJcblxyXG5cdFx0dGhyb3cgbmV3IEVycm9yKCBgZmF0YWwsIGNhbm5vdCB0cmFuc2Zvcm0gdG8gc3RyaW5nLCAkeyBpc3N1ZS5qb2luKCBcIixcIiApIH1gIClcclxuXHR9XHJcbn07XHJcblxyXG5tb2R1bGUuZXhwb3J0cyA9IHN0cmluZ2U7XHJcbiJdfQ==
//# sourceMappingURL=stringe.support.js.map
