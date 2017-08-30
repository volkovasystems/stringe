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
			"path": "stringe/stringe.module.js",
			"file": "stringe.js",
			"module": "stringe",
			"author": "Richeve S. Bebedor",
			"eMail": "richeve.bebedor@gmail.com",
			"contributors": [
				"John Lenon Maghanoy <johnlenonmaghanoy@gmail.com>"
			],
			"repository": "https://github.com/volkovasystems/stringe.git",
			"test": "stringe-test.js",
			"global": true
		}
	@end-module-configuration

	@module-documentation:
		Safe toString alternative.
	@end-module-documentation
*/var _getOwnPropertyNames=require("babel-runtime/core-js/object/get-own-property-names");var _getOwnPropertyNames2=_interopRequireDefault(_getOwnPropertyNames);var _stringify=require("babel-runtime/core-js/json/stringify");var _stringify2=_interopRequireDefault(_stringify);function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj};}

var TO_STRING="toString";

var stringe=function stringe(entity){
/*;
		@meta-configuration:
			{
				"entity:required": "*"
			}
		@end-meta-configuration
	*/

if(typeof entity=="string"){
return entity;
}

var issue=[];
try{
if(
typeof entity=="undefined"||
entity===null||
typeof entity[TO_STRING]!="function")
{
return""+entity;
}

}catch(error){issue.push(error.stack);}

try{
if(
entity[TO_STRING]&&
typeof entity[TO_STRING]=="function")
{
return entity.toString();
}

}catch(error){issue.push(error.stack);}

try{
return(0,_stringify2.default)((0,_getOwnPropertyNames2.default)(entity).
reduce(function(cache,property){
cache[property]=stringe(entity[property]);

return cache;
},{}));

}catch(error){issue.push(error.stack);}

try{
return""+entity;

}catch(error){
issue.push(error.stack);

throw new Error("cannot transform to string, "+issue.join(","));
}
};

module.exports=stringe;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInN0cmluZ2Uuc3VwcG9ydC5qcyJdLCJuYW1lcyI6WyJUT19TVFJJTkciLCJzdHJpbmdlIiwiZW50aXR5IiwiaXNzdWUiLCJlcnJvciIsInB1c2giLCJzdGFjayIsInRvU3RyaW5nIiwicmVkdWNlIiwiY2FjaGUiLCJwcm9wZXJ0eSIsIkVycm9yIiwiam9pbiIsIm1vZHVsZSIsImV4cG9ydHMiXSwibWFwcGluZ3MiOiJBQUFBOztBQUVBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBaURBLEdBQU1BLFdBQVksVUFBbEI7O0FBRUEsR0FBTUMsU0FBVSxRQUFTQSxRQUFULENBQWtCQyxNQUFsQixDQUEwQjtBQUN6Qzs7Ozs7Ozs7QUFRQSxHQUFJLE1BQU9BLE9BQVAsRUFBaUIsUUFBckIsQ0FBK0I7QUFDOUIsTUFBT0EsT0FBUDtBQUNBOztBQUVELEdBQUlDLE9BQVEsRUFBWjtBQUNBLEdBQUc7QUFDRjtBQUNDLE1BQU9ELE9BQVAsRUFBaUIsV0FBakI7QUFDR0EsU0FBVyxJQURkO0FBRUcsTUFBT0EsUUFBUUYsU0FBUixDQUFQLEVBQThCLFVBSGxDO0FBSUM7QUFDQSxTQUFXRSxNQUFYO0FBQ0E7O0FBRUQsT0FBT0UsS0FBUCxDQUFjLENBQUVELE1BQU1FLElBQU4sQ0FBWUQsTUFBTUUsS0FBbEIsRUFBNEI7O0FBRTdDLEdBQUc7QUFDRjtBQUNDSixPQUFRRixTQUFSO0FBQ0csTUFBT0UsUUFBUUYsU0FBUixDQUFQLEVBQThCLFVBRmxDO0FBR0M7QUFDQSxNQUFPRSxRQUFPSyxRQUFQLEVBQVA7QUFDQTs7QUFFRCxPQUFPSCxLQUFQLENBQWMsQ0FBRUQsTUFBTUUsSUFBTixDQUFZRCxNQUFNRSxLQUFsQixFQUE0Qjs7QUFFN0MsR0FBRztBQUNGLE1BQU8sd0JBQWdCLGtDQUE0QkosTUFBNUI7QUFDckJNLE1BRHFCLENBQ2IsU0FBRUMsS0FBRixDQUFTQyxRQUFULENBQXVCO0FBQy9CRCxNQUFPQyxRQUFQLEVBQW9CVCxRQUFTQyxPQUFRUSxRQUFSLENBQVQsQ0FBcEI7O0FBRUEsTUFBT0QsTUFBUDtBQUNBLENBTHFCLENBS25CLEVBTG1CLENBQWhCLENBQVA7O0FBT0EsT0FBT0wsS0FBUCxDQUFjLENBQUVELE1BQU1FLElBQU4sQ0FBWUQsTUFBTUUsS0FBbEIsRUFBNEI7O0FBRTdDLEdBQUc7QUFDRixTQUFXSixNQUFYOztBQUVBLE9BQU9FLEtBQVAsQ0FBYztBQUNkRCxNQUFNRSxJQUFOLENBQVlELE1BQU1FLEtBQWxCOztBQUVBLEtBQU0sSUFBSUssTUFBSixnQ0FBMkNSLE1BQU1TLElBQU4sQ0FBWSxHQUFaLENBQTNDLENBQU47QUFDQTtBQUNELENBckREOztBQXVEQUMsT0FBT0MsT0FBUCxDQUFpQmIsT0FBakIiLCJmaWxlIjoic3RyaW5nZS5zdXBwb3J0LmpzIiwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qO1xuXHRAbW9kdWxlLWxpY2Vuc2U6XG5cdFx0VGhlIE1JVCBMaWNlbnNlIChNSVQpXG5cdFx0QG1pdC1saWNlbnNlXG5cblx0XHRDb3B5cmlnaHQgKEBjKSAyMDE3IFJpY2hldmUgU2lvZGluYSBCZWJlZG9yXG5cdFx0QGVtYWlsOiByaWNoZXZlLmJlYmVkb3JAZ21haWwuY29tXG5cblx0XHRQZXJtaXNzaW9uIGlzIGhlcmVieSBncmFudGVkLCBmcmVlIG9mIGNoYXJnZSwgdG8gYW55IHBlcnNvbiBvYnRhaW5pbmcgYSBjb3B5XG5cdFx0b2YgdGhpcyBzb2Z0d2FyZSBhbmQgYXNzb2NpYXRlZCBkb2N1bWVudGF0aW9uIGZpbGVzICh0aGUgXCJTb2Z0d2FyZVwiKSwgdG8gZGVhbFxuXHRcdGluIHRoZSBTb2Z0d2FyZSB3aXRob3V0IHJlc3RyaWN0aW9uLCBpbmNsdWRpbmcgd2l0aG91dCBsaW1pdGF0aW9uIHRoZSByaWdodHNcblx0XHR0byB1c2UsIGNvcHksIG1vZGlmeSwgbWVyZ2UsIHB1Ymxpc2gsIGRpc3RyaWJ1dGUsIHN1YmxpY2Vuc2UsIGFuZC9vciBzZWxsXG5cdFx0Y29waWVzIG9mIHRoZSBTb2Z0d2FyZSwgYW5kIHRvIHBlcm1pdCBwZXJzb25zIHRvIHdob20gdGhlIFNvZnR3YXJlIGlzXG5cdFx0ZnVybmlzaGVkIHRvIGRvIHNvLCBzdWJqZWN0IHRvIHRoZSBmb2xsb3dpbmcgY29uZGl0aW9uczpcblxuXHRcdFRoZSBhYm92ZSBjb3B5cmlnaHQgbm90aWNlIGFuZCB0aGlzIHBlcm1pc3Npb24gbm90aWNlIHNoYWxsIGJlIGluY2x1ZGVkIGluIGFsbFxuXHRcdGNvcGllcyBvciBzdWJzdGFudGlhbCBwb3J0aW9ucyBvZiB0aGUgU29mdHdhcmUuXG5cblx0XHRUSEUgU09GVFdBUkUgSVMgUFJPVklERUQgXCJBUyBJU1wiLCBXSVRIT1VUIFdBUlJBTlRZIE9GIEFOWSBLSU5ELCBFWFBSRVNTIE9SXG5cdFx0SU1QTElFRCwgSU5DTFVESU5HIEJVVCBOT1QgTElNSVRFRCBUTyBUSEUgV0FSUkFOVElFUyBPRiBNRVJDSEFOVEFCSUxJVFksXG5cdFx0RklUTkVTUyBGT1IgQSBQQVJUSUNVTEFSIFBVUlBPU0UgQU5EIE5PTklORlJJTkdFTUVOVC4gSU4gTk8gRVZFTlQgU0hBTEwgVEhFXG5cdFx0QVVUSE9SUyBPUiBDT1BZUklHSFQgSE9MREVSUyBCRSBMSUFCTEUgRk9SIEFOWSBDTEFJTSwgREFNQUdFUyBPUiBPVEhFUlxuXHRcdExJQUJJTElUWSwgV0hFVEhFUiBJTiBBTiBBQ1RJT04gT0YgQ09OVFJBQ1QsIFRPUlQgT1IgT1RIRVJXSVNFLCBBUklTSU5HIEZST00sXG5cdFx0T1VUIE9GIE9SIElOIENPTk5FQ1RJT04gV0lUSCBUSEUgU09GVFdBUkUgT1IgVEhFIFVTRSBPUiBPVEhFUiBERUFMSU5HUyBJTiBUSEVcblx0XHRTT0ZUV0FSRS5cblx0QGVuZC1tb2R1bGUtbGljZW5zZVxuXG5cdEBtb2R1bGUtY29uZmlndXJhdGlvbjpcblx0XHR7XG5cdFx0XHRcInBhY2thZ2VcIjogXCJzdHJpbmdlXCIsXG5cdFx0XHRcInBhdGhcIjogXCJzdHJpbmdlL3N0cmluZ2UubW9kdWxlLmpzXCIsXG5cdFx0XHRcImZpbGVcIjogXCJzdHJpbmdlLmpzXCIsXG5cdFx0XHRcIm1vZHVsZVwiOiBcInN0cmluZ2VcIixcblx0XHRcdFwiYXV0aG9yXCI6IFwiUmljaGV2ZSBTLiBCZWJlZG9yXCIsXG5cdFx0XHRcImVNYWlsXCI6IFwicmljaGV2ZS5iZWJlZG9yQGdtYWlsLmNvbVwiLFxuXHRcdFx0XCJjb250cmlidXRvcnNcIjogW1xuXHRcdFx0XHRcIkpvaG4gTGVub24gTWFnaGFub3kgPGpvaG5sZW5vbm1hZ2hhbm95QGdtYWlsLmNvbT5cIlxuXHRcdFx0XSxcblx0XHRcdFwicmVwb3NpdG9yeVwiOiBcImh0dHBzOi8vZ2l0aHViLmNvbS92b2xrb3Zhc3lzdGVtcy9zdHJpbmdlLmdpdFwiLFxuXHRcdFx0XCJ0ZXN0XCI6IFwic3RyaW5nZS10ZXN0LmpzXCIsXG5cdFx0XHRcImdsb2JhbFwiOiB0cnVlXG5cdFx0fVxuXHRAZW5kLW1vZHVsZS1jb25maWd1cmF0aW9uXG5cblx0QG1vZHVsZS1kb2N1bWVudGF0aW9uOlxuXHRcdFNhZmUgdG9TdHJpbmcgYWx0ZXJuYXRpdmUuXG5cdEBlbmQtbW9kdWxlLWRvY3VtZW50YXRpb25cbiovXG5cbmNvbnN0IFRPX1NUUklORyA9IFwidG9TdHJpbmdcIjtcblxuY29uc3Qgc3RyaW5nZSA9IGZ1bmN0aW9uIHN0cmluZ2UoIGVudGl0eSApe1xuXHQvKjtcblx0XHRAbWV0YS1jb25maWd1cmF0aW9uOlxuXHRcdFx0e1xuXHRcdFx0XHRcImVudGl0eTpyZXF1aXJlZFwiOiBcIipcIlxuXHRcdFx0fVxuXHRcdEBlbmQtbWV0YS1jb25maWd1cmF0aW9uXG5cdCovXG5cblx0aWYoIHR5cGVvZiBlbnRpdHkgPT0gXCJzdHJpbmdcIiApe1xuXHRcdHJldHVybiBlbnRpdHk7XG5cdH1cblxuXHRsZXQgaXNzdWUgPSBbIF07XG5cdHRyeXtcblx0XHRpZihcblx0XHRcdHR5cGVvZiBlbnRpdHkgPT0gXCJ1bmRlZmluZWRcIlxuXHRcdFx0fHwgZW50aXR5ID09PSBudWxsXG5cdFx0XHR8fCB0eXBlb2YgZW50aXR5WyBUT19TVFJJTkcgXSAhPSBcImZ1bmN0aW9uXCJcblx0XHQpe1xuXHRcdFx0cmV0dXJuIGAkeyBlbnRpdHkgfWA7XG5cdFx0fVxuXG5cdH1jYXRjaCggZXJyb3IgKXsgaXNzdWUucHVzaCggZXJyb3Iuc3RhY2sgKTsgfVxuXG5cdHRyeXtcblx0XHRpZihcblx0XHRcdGVudGl0eVsgVE9fU1RSSU5HIF1cblx0XHRcdCYmIHR5cGVvZiBlbnRpdHlbIFRPX1NUUklORyBdID09IFwiZnVuY3Rpb25cIlxuXHRcdCl7XG5cdFx0XHRyZXR1cm4gZW50aXR5LnRvU3RyaW5nKCApO1xuXHRcdH1cblxuXHR9Y2F0Y2goIGVycm9yICl7IGlzc3VlLnB1c2goIGVycm9yLnN0YWNrICk7IH1cblxuXHR0cnl7XG5cdFx0cmV0dXJuIEpTT04uc3RyaW5naWZ5KCBPYmplY3QuZ2V0T3duUHJvcGVydHlOYW1lcyggZW50aXR5IClcblx0XHRcdC5yZWR1Y2UoICggY2FjaGUsIHByb3BlcnR5ICkgPT4ge1xuXHRcdFx0XHRjYWNoZVsgcHJvcGVydHkgXSA9IHN0cmluZ2UoIGVudGl0eVsgcHJvcGVydHkgXSApO1xuXG5cdFx0XHRcdHJldHVybiBjYWNoZTtcblx0XHRcdH0sIHsgfSApICk7XG5cblx0fWNhdGNoKCBlcnJvciApeyBpc3N1ZS5wdXNoKCBlcnJvci5zdGFjayApOyB9XG5cblx0dHJ5e1xuXHRcdHJldHVybiBgJHsgZW50aXR5IH1gO1xuXG5cdH1jYXRjaCggZXJyb3IgKXtcblx0XHRpc3N1ZS5wdXNoKCBlcnJvci5zdGFjayApO1xuXG5cdFx0dGhyb3cgbmV3IEVycm9yKCBgY2Fubm90IHRyYW5zZm9ybSB0byBzdHJpbmcsICR7IGlzc3VlLmpvaW4oIFwiLFwiICkgfWAgKTtcblx0fVxufTtcblxubW9kdWxlLmV4cG9ydHMgPSBzdHJpbmdlO1xuIl19
//# sourceMappingURL=stringe.support.js.map
