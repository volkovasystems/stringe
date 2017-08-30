"use strict";

/*;
	@test-license:
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
	@end-test-license

	@test-configuration:
		{
			"package": "stringe",
			"path": "stringe/test.module.js",
			"file": "test.module.js",
			"module": "test",
			"author": "Richeve S. Bebedor",
			"eMail": "richeve.bebedor@gmail.com",
			"contributors": [
				"John Lenon Maghanoy <johnlenonmaghanoy@gmail.com>"
			],
			"repository": "https://github.com/volkovasystems/numric.git"
		}
	@end-test-configuration

	@test-documentation:

	@end-test-documentation

	@include:
		{
			"assert": "should",
			"stringe": "stringe"
		}
	@end-include
*/

var assert=require("should");





//: @bridge:
var path=require("path");
//: @end-bridge






//: @bridge:
describe("stringe",function(){

var bridgeURL="file://"+path.resolve(__dirname,"bridge.html");

describe("`stringe( window )`",function(){
it("should be equal to '[object Window]'",function(){

var result=browser.url(bridgeURL).execute(function(){return stringe(window);});

assert.equal(result.value,"[object Window]");

});
});

describe("`stringe( true )`",function(){
it("should be equal to 'true'",function(){

var result=browser.url(bridgeURL).execute(function(){return stringe(true);});

assert.equal(result.value,"true");

});
});

describe("`stringe( undefined )`",function(){
it("should be equal to 'undefined'",function(){

var result=browser.url(bridgeURL).execute(function(){return stringe(undefined);});

assert.equal(result.value,"undefined");

});
});

describe("`stringe( null )`",function(){
it("should be equal to 'null'",function(){

var result=browser.url(bridgeURL).execute(function(){return stringe(null);});

assert.equal(result.value,"null");

});
});

describe("`stringe( NaN )`",function(){
it("should be equal to 'NaN'",function(){

var result=browser.url(bridgeURL).execute(function(){return stringe(NaN);});

assert.equal(result.value,"NaN");

});
});

describe("`stringe( Infinity )`",function(){
it("should be equal to 'Infinity'",function(){

var result=browser.url(bridgeURL).execute(function(){return stringe(Infinity);});

assert.equal(result.value,"Infinity");

});
});

describe("`stringe( Array )`",function(){
it("should be equal to 'function Array() { [native code] }'",function(){

var result=browser.url(bridgeURL).execute(function(){return stringe(Array);});

assert.equal(result.value,"function Array() { [native code] }");

});
});

describe("`stringe( 123 )`",function(){
it("should be equal to '123'",function(){

var result=browser.url(bridgeURL).execute(function(){return stringe(123);});

assert.equal(result.value,"123");

});
});

describe("`stringe( 'hello world' )`",function(){
it("should be equal to 'hello world'",function(){

var result=browser.url(bridgeURL).execute(function(){return stringe("hello world");});

assert.equal(result.value,"hello world");

});
});

describe("`stringe( { 'hello': 'world' } )`",function(){
it("should be equal to '[object Object]'",function(){

var result=browser.url(bridgeURL).execute(function(){return stringe({"hello":"world"});});

assert.equal(result.value,"[object Object]");

});
});

describe("`stringe( ( ) => { } )`",function(){
it("should be equal to '( ) => { }'",function(){
//: @ignore:
			let result = browser.url( bridgeURL ).execute(

				function( ){
					let pattern = /\(\s*\)\s*\=\>\s*\{\s*\}/;
					let data = stringe( ( ) => { } );
					let test = pattern.test( data );
					return test;
				}

			).value;
			//: @end-ignore

assert.equal(result,true);
});
});

describe("`stringe( function test( ){ return 'test' } )`",function(){
it("should be equal to 'function test( ){ return 'test' }'",function(){
//: @ignore:
			let result = browser.url( bridgeURL ).execute(

				function( ){
					let pattern = /function\s+test\s*\(\s*\)\s*\{\s*return\s+\'test\'\s*\}/;
					let data = stringe( function test( ){ return 'test' } );
					let test = pattern.test( data );
					return test;
				}

			).value;
			//: @end-ignore

assert.equal(result,true);

});
});

});
//: @end-bridge
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInRlc3QuYnJpZGdlLmpzIl0sIm5hbWVzIjpbImFzc2VydCIsInJlcXVpcmUiLCJwYXRoIiwiZGVzY3JpYmUiLCJicmlkZ2VVUkwiLCJyZXNvbHZlIiwiX19kaXJuYW1lIiwiaXQiLCJyZXN1bHQiLCJicm93c2VyIiwidXJsIiwiZXhlY3V0ZSIsInN0cmluZ2UiLCJ3aW5kb3ciLCJlcXVhbCIsInZhbHVlIiwidW5kZWZpbmVkIiwiTmFOIiwiSW5maW5pdHkiLCJBcnJheSJdLCJtYXBwaW5ncyI6IkFBQUE7O0FBRUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQXNEQSxHQUFNQSxRQUFTQyxRQUFTLFFBQVQsQ0FBZjs7Ozs7O0FBTUE7QUFDQSxHQUFNQyxNQUFPRCxRQUFTLE1BQVQsQ0FBYjtBQUNBOzs7Ozs7O0FBT0E7QUFDQUUsU0FBVSxTQUFWLENBQXFCLFVBQU87O0FBRTNCLEdBQUlDLHFCQUF1QkYsS0FBS0csT0FBTCxDQUFjQyxTQUFkLENBQXlCLGFBQXpCLENBQTNCOztBQUVBSCxTQUFVLHFCQUFWLENBQWlDLFVBQU87QUFDdkNJLEdBQUksc0NBQUosQ0FBNEMsVUFBTzs7QUFFbEQsR0FBSUMsUUFBU0MsUUFBUUMsR0FBUixDQUFhTixTQUFiLEVBQXlCTyxPQUF6QixDQUFrQyxpQkFBT0MsU0FBU0MsTUFBVCxDQUFQLEVBQWxDLENBQWI7O0FBRUFiLE9BQU9jLEtBQVAsQ0FBY04sT0FBT08sS0FBckIsQ0FBNEIsaUJBQTVCOztBQUVBLENBTkQ7QUFPQSxDQVJEOztBQVVBWixTQUFVLG1CQUFWLENBQStCLFVBQU87QUFDckNJLEdBQUksMkJBQUosQ0FBaUMsVUFBTzs7QUFFdkMsR0FBSUMsUUFBU0MsUUFBUUMsR0FBUixDQUFhTixTQUFiLEVBQXlCTyxPQUF6QixDQUFrQyxpQkFBT0MsU0FBUyxJQUFULENBQVAsRUFBbEMsQ0FBYjs7QUFFQVosT0FBT2MsS0FBUCxDQUFjTixPQUFPTyxLQUFyQixD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QSxDQU5EO0FBT0EsQ0FSRDs7QUFVQVosU0FBVSx5QkFBVixDQUFxQyxVQUFPO0FBQzNDSSxHQUFJLGlDQUFKLENBQXVDLFVBQU87QUFDN0M7QUFDSDs7Ozs7Ozs7Ozs7O0FBWUE7O0FBRUdQLE9BQU9jLEtBQVAsQ0FBY04sTUFBZCxDQUFzQixJQUF0QjtBQUNBLENBakJEO0FBa0JBLENBbkJEOztBQXFCQUwsU0FBVSxnREFBVixDQUE0RCxVQUFPO0FBQ2xFSSxHQUFJLHdEQUFKLENBQThELFVBQU87QUFDcEU7QUFDSDs7Ozs7Ozs7Ozs7O0FBWUE7O0FBRUdQLE9BQU9jLEtBQVAsQ0FBY04sTUFBZCxDQUFzQixJQUF0Qjs7QUFFQSxDQWxCRDtBQW1CQSxDQXBCRDs7QUFzQkEsQ0FuSkQ7QUFvSkEiLCJmaWxlIjoidGVzdC5icmlkZ2UuanMiLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuLyo7XG5cdEB0ZXN0LWxpY2Vuc2U6XG5cdFx0VGhlIE1JVCBMaWNlbnNlIChNSVQpXG5cdFx0QG1pdC1saWNlbnNlXG5cblx0XHRDb3B5cmlnaHQgKEBjKSAyMDE3IFJpY2hldmUgU2lvZGluYSBCZWJlZG9yXG5cdFx0QGVtYWlsOiByaWNoZXZlLmJlYmVkb3JAZ21haWwuY29tXG5cblx0XHRQZXJtaXNzaW9uIGlzIGhlcmVieSBncmFudGVkLCBmcmVlIG9mIGNoYXJnZSwgdG8gYW55IHBlcnNvbiBvYnRhaW5pbmcgYSBjb3B5XG5cdFx0b2YgdGhpcyBzb2Z0d2FyZSBhbmQgYXNzb2NpYXRlZCBkb2N1bWVudGF0aW9uIGZpbGVzICh0aGUgXCJTb2Z0d2FyZVwiKSwgdG8gZGVhbFxuXHRcdGluIHRoZSBTb2Z0d2FyZSB3aXRob3V0IHJlc3RyaWN0aW9uLCBpbmNsdWRpbmcgd2l0aG91dCBsaW1pdGF0aW9uIHRoZSByaWdodHNcblx0XHR0byB1c2UsIGNvcHksIG1vZGlmeSwgbWVyZ2UsIHB1Ymxpc2gsIGRpc3RyaWJ1dGUsIHN1YmxpY2Vuc2UsIGFuZC9vciBzZWxsXG5cdFx0Y29waWVzIG9mIHRoZSBTb2Z0d2FyZSwgYW5kIHRvIHBlcm1pdCBwZXJzb25zIHRvIHdob20gdGhlIFNvZnR3YXJlIGlzXG5cdFx0ZnVybmlzaGVkIHRvIGRvIHNvLCBzdWJqZWN0IHRvIHRoZSBmb2xsb3dpbmcgY29uZGl0aW9uczpcblxuXHRcdFRoZSBhYm92ZSBjb3B5cmlnaHQgbm90aWNlIGFuZCB0aGlzIHBlcm1pc3Npb24gbm90aWNlIHNoYWxsIGJlIGluY2x1ZGVkIGluIGFsbFxuXHRcdGNvcGllcyBvciBzdWJzdGFudGlhbCBwb3J0aW9ucyBvZiB0aGUgU29mdHdhcmUuXG5cblx0XHRUSEUgU09GVFdBUkUgSVMgUFJPVklERUQgXCJBUyBJU1wiLCBXSVRIT1VUIFdBUlJBTlRZIE9GIEFOWSBLSU5ELCBFWFBSRVNTIE9SXG5cdFx0SU1QTElFRCwgSU5DTFVESU5HIEJVVCBOT1QgTElNSVRFRCBUTyBUSEUgV0FSUkFOVElFUyBPRiBNRVJDSEFOVEFCSUxJVFksXG5cdFx0RklUTkVTUyBGT1IgQSBQQVJUSUNVTEFSIFBVUlBPU0UgQU5EIE5PTklORlJJTkdFTUVOVC4gSU4gTk8gRVZFTlQgU0hBTEwgVEhFXG5cdFx0QVVUSE9SUyBPUiBDT1BZUklHSFQgSE9MREVSUyBCRSBMSUFCTEUgRk9SIEFOWSBDTEFJTSwgREFNQUdFUyBPUiBPVEhFUlxuXHRcdExJQUJJTElUWSwgV0hFVEhFUiBJTiBBTiBBQ1RJT04gT0YgQ09OVFJBQ1QsIFRPUlQgT1IgT1RIRVJXSVNFLCBBUklTSU5HIEZST00sXG5cdFx0T1VUIE9GIE9SIElOIENPTk5FQ1RJT04gV0lUSCBUSEUgU09GVFdBUkUgT1IgVEhFIFVTRSBPUiBPVEhFUiBERUFMSU5HUyBJTiBUSEVcblx0XHRTT0ZUV0FSRS5cblx0QGVuZC10ZXN0LWxpY2Vuc2VcblxuXHRAdGVzdC1jb25maWd1cmF0aW9uOlxuXHRcdHtcblx0XHRcdFwicGFja2FnZVwiOiBcInN0cmluZ2VcIixcblx0XHRcdFwicGF0aFwiOiBcInN0cmluZ2UvdGVzdC5tb2R1bGUuanNcIixcblx0XHRcdFwiZmlsZVwiOiBcInRlc3QubW9kdWxlLmpzXCIsXG5cdFx0XHRcIm1vZHVsZVwiOiBcInRlc3RcIixcblx0XHRcdFwiYXV0aG9yXCI6IFwiUmljaGV2ZSBTLiBCZWJlZG9yXCIsXG5cdFx0XHRcImVNYWlsXCI6IFwicmljaGV2ZS5iZWJlZG9yQGdtYWlsLmNvbVwiLFxuXHRcdFx0XCJjb250cmlidXRvcnNcIjogW1xuXHRcdFx0XHRcIkpvaG4gTGVub24gTWFnaGFub3kgPGpvaG5sZW5vbm1hZ2hhbm95QGdtYWlsLmNvbT5cIlxuXHRcdFx0XSxcblx0XHRcdFwicmVwb3NpdG9yeVwiOiBcImh0dHBzOi8vZ2l0aHViLmNvbS92b2xrb3Zhc3lzdGVtcy9udW1yaWMuZ2l0XCJcblx0XHR9XG5cdEBlbmQtdGVzdC1jb25maWd1cmF0aW9uXG5cblx0QHRlc3QtZG9jdW1lbnRhdGlvbjpcblxuXHRAZW5kLXRlc3QtZG9jdW1lbnRhdGlvblxuXG5cdEBpbmNsdWRlOlxuXHRcdHtcblx0XHRcdFwiYXNzZXJ0XCI6IFwic2hvdWxkXCIsXG5cdFx0XHRcInN0cmluZ2VcIjogXCJzdHJpbmdlXCJcblx0XHR9XG5cdEBlbmQtaW5jbHVkZVxuKi9cblxuY29uc3QgYXNzZXJ0ID0gcmVxdWlyZSggXCJzaG91bGRcIiApO1xuXG5cblxuXG5cbi8vOiBAYnJpZGdlOlxuY29uc3QgcGF0aCA9IHJlcXVpcmUoIFwicGF0aFwiICk7XG4vLzogQGVuZC1icmlkZ2VcblxuXG5cblxuXG5cbi8vOiBAYnJpZGdlOlxuZGVzY3JpYmUoIFwic3RyaW5nZVwiLCAoICkgPT4ge1xuXG5cdGxldCBicmlkZ2VVUkwgPSBgZmlsZTovLyR7IHBhdGgucmVzb2x2ZSggX19kaXJuYW1lLCBcImJyaWRnZS5odG1sXCIgKSB9YDtcblxuXHRkZXNjcmliZSggXCJgc3RyaW5nZSggd2luZG93IClgXCIsICggKSA9PiB7XG5cdFx0aXQoIFwic2hvdWxkIGJlIGVxdWFsIHRvICdbb2JqZWN0IFdpbmRvd10nXCIsICggKSA9PiB7XG5cblx0XHRcdGxldCByZXN1bHQgPSBicm93c2VyLnVybCggYnJpZGdlVVJMICkuZXhlY3V0ZSggKCApID0+IHN0cmluZ2UoIHdpbmRvdyApICk7XG5cblx0XHRcdGFzc2VydC5lcXVhbCggcmVzdWx0LnZhbHVlLCBcIltvYmplY3QgV2luZG93XVwiICk7XG5cblx0XHR9ICk7XG5cdH0gKTtcblxuXHRkZXNjcmliZSggXCJgc3RyaW5nZSggdHJ1ZSApYFwiLCAoICkgPT4ge1xuXHRcdGl0KCBcInNob3VsZCBiZSBlcXVhbCB0byAndHJ1ZSdcIiwgKCApID0+IHtcblxuXHRcdFx0bGV0IHJlc3VsdCA9IGJyb3dzZXIudXJsKCBicmlkZ2VVUkwgKS5leGVjdXRlKCAoICkgPT4gc3RyaW5nZSggdHJ1ZSApICk7XG5cblx0XHRcdGFzc2VydC5lcXVhbCggcmVzdWx0LnZhbHVlLCBcInRydWVcIiApO1xuXG5cdFx0fSApO1xuXHR9ICk7XG5cblx0ZGVzY3JpYmUoIFwiYHN0cmluZ2UoIHVuZGVmaW5lZCApYFwiLCAoICkgPT4ge1xuXHRcdGl0KCBcInNob3VsZCBiZSBlcXVhbCB0byAndW5kZWZpbmVkJ1wiLCAoICkgPT4ge1xuXG5cdFx0XHRsZXQgcmVzdWx0ID0gYnJvd3Nlci51cmwoIGJyaWRnZVVSTCApLmV4ZWN1dGUoICggKSA9PiBzdHJpbmdlKCB1bmRlZmluZWQgKSApO1xuXG5cdFx0XHRhc3NlcnQuZXF1YWwoIHJlc3VsdC52YWx1ZSwgXCJ1bmRlZmluZWRcIiApO1xuXG5cdFx0fSApO1xuXHR9ICk7XG5cblx0ZGVzY3JpYmUoIFwiYHN0cmluZ2UoIG51bGwgKWBcIiwgKCApID0+IHtcblx0XHRpdCggXCJzaG91bGQgYmUgZXF1YWwgdG8gJ251bGwnXCIsICggKSA9PiB7XG5cblx0XHRcdGxldCByZXN1bHQgPSBicm93c2VyLnVybCggYnJpZGdlVVJMICkuZXhlY3V0ZSggKCApID0+IHN0cmluZ2UoIG51bGwgKSApO1xuXG5cdFx0XHRhc3NlcnQuZXF1YWwoIHJlc3VsdC52YWx1ZSwgXCJudWxsXCIgKTtcblxuXHRcdH0gKTtcblx0fSApO1xuXG5cdGRlc2NyaWJlKCBcImBzdHJpbmdlKCBOYU4gKWBcIiwgKCApID0+IHtcblx0XHRpdCggXCJzaG91bGQgYmUgZXF1YWwgdG8gJ05hTidcIiwgKCApID0+IHtcblxuXHRcdFx0bGV0IHJlc3VsdCA9IGJyb3dzZXIudXJsKCBicmlkZ2VVUkwgKS5leGVjdXRlKCAoICkgPT4gc3RyaW5nZSggTmFOICkgKTtcblxuXHRcdFx0YXNzZXJ0LmVxdWFsKCByZXN1bHQudmFsdWUsIFwiTmFOXCIgKTtcblxuXHRcdH0gKTtcblx0fSApO1xuXG5cdGRlc2NyaWJlKCBcImBzdHJpbmdlKCBJbmZpbml0eSApYFwiLCAoICkgPT4ge1xuXHRcdGl0KCBcInNob3VsZCBiZSBlcXVhbCB0byAnSW5maW5pdHknXCIsICggKSA9PiB7XG5cblx0XHRcdGxldCByZXN1bHQgPSBicm93c2VyLnVybCggYnJpZGdlVVJMICkuZXhlY3V0ZSggKCApID0+IHN0cmluZ2UoIEluZmluaXR5ICkgKTtcblxuXHRcdFx0YXNzZXJ0LmVxdWFsKCByZXN1bHQudmFsdWUsIFwiSW5maW5pdHlcIiApO1xuXG5cdFx0fSApO1xuXHR9ICk7XG5cblx0ZGVzY3JpYmUoIFwiYHN0cmluZ2UoIEFycmF5IClgXCIsICggKSA9PiB7XG5cdFx0aXQoIFwic2hvdWxkIGJlIGVxdWFsIHRvICdmdW5jdGlvbiBBcnJheSgpIHsgW25hdGl2ZSBjb2RlXSB9J1wiLCAoICkgPT4ge1xuXG5cdFx0XHRsZXQgcmVzdWx0ID0gYnJvd3Nlci51cmwoIGJyaWRnZVVSTCApLmV4ZWN1dGUoICggKSA9PiBzdHJpbmdlKCBBcnJheSApICk7XG5cblx0XHRcdGFzc2VydC5lcXVhbCggcmVzdWx0LnZhbHVlLCBcImZ1bmN0aW9uIEFycmF5KCkgeyBbbmF0aXZlIGNvZGVdIH1cIiApO1xuXG5cdFx0fSApO1xuXHR9ICk7XG5cblx0ZGVzY3JpYmUoIFwiYHN0cmluZ2UoIDEyMyApYFwiLCAoICkgPT4ge1xuXHRcdGl0KCBcInNob3VsZCBiZSBlcXVhbCB0byAnMTIzJ1wiLCAoICkgPT4ge1xuXG5cdFx0XHRsZXQgcmVzdWx0ID0gYnJvd3Nlci51cmwoIGJyaWRnZVVSTCApLmV4ZWN1dGUoICggKSA9PiBzdHJpbmdlKCAxMjMgKSApO1xuXG5cdFx0XHRhc3NlcnQuZXF1YWwoIHJlc3VsdC52YWx1ZSwgXCIxMjNcIiApO1xuXG5cdFx0fSApO1xuXHR9ICk7XG5cblx0ZGVzY3JpYmUoIFwiYHN0cmluZ2UoICdoZWxsbyB3b3JsZCcgKWBcIiwgKCApID0+IHtcblx0XHRpdCggXCJzaG91bGQgYmUgZXF1YWwgdG8gJ2hlbGxvIHdvcmxkJ1wiLCAoICkgPT4ge1xuXG5cdFx0XHRsZXQgcmVzdWx0ID0gYnJvd3Nlci51cmwoIGJyaWRnZVVSTCApLmV4ZWN1dGUoICggKSA9PiBzdHJpbmdlKCBcImhlbGxvIHdvcmxkXCIgKSApO1xuXG5cdFx0XHRhc3NlcnQuZXF1YWwoIHJlc3VsdC52YWx1ZSwgXCJoZWxsbyB3b3JsZFwiICk7XG5cblx0XHR9ICk7XG5cdH0gKTtcblxuXHRkZXNjcmliZSggXCJgc3RyaW5nZSggeyAnaGVsbG8nOiAnd29ybGQnIH0gKWBcIiwgKCApID0+IHtcblx0XHRpdCggXCJzaG91bGQgYmUgZXF1YWwgdG8gJ1tvYmplY3QgT2JqZWN0XSdcIiwgKCApID0+IHtcblxuXHRcdFx0bGV0IHJlc3VsdCA9IGJyb3dzZXIudXJsKCBicmlkZ2VVUkwgKS5leGVjdXRlKCAoICkgPT4gc3RyaW5nZSggeyBcImhlbGxvXCI6IFwid29ybGRcIiB9ICkgKTtcblxuXHRcdFx0YXNzZXJ0LmVxdWFsKCByZXN1bHQudmFsdWUsIFwiW29iamVjdCBPYmplY3RdXCIgKTtcblxuXHRcdH0gKTtcblx0fSApO1xuXG5cdGRlc2NyaWJlKCBcImBzdHJpbmdlKCAoICkgPT4geyB9IClgXCIsICggKSA9PiB7XG5cdFx0aXQoIFwic2hvdWxkIGJlIGVxdWFsIHRvICcoICkgPT4geyB9J1wiLCAoICkgPT4ge1xuXHRcdFx0Ly86IEBpZ25vcmU6XG4vKlxuXHRcdFx0bGV0IHJlc3VsdCA9IGJyb3dzZXIudXJsKCBicmlkZ2VVUkwgKS5leGVjdXRlKFxuXG5cdFx0XHRcdGZ1bmN0aW9uKCApe1xuXHRcdFx0XHRcdGxldCBwYXR0ZXJuID0gL1xcKFxccypcXClcXHMqXFw9XFw+XFxzKlxce1xccypcXH0vO1xuXHRcdFx0XHRcdGxldCBkYXRhID0gc3RyaW5nZSggKCApID0+IHsgfSApO1xuXHRcdFx0XHRcdGxldCB0ZXN0ID0gcGF0dGVybi50ZXN0KCBkYXRhICk7XG5cdFx0XHRcdFx0cmV0dXJuIHRlc3Q7XG5cdFx0XHRcdH1cblxuXHRcdFx0KS52YWx1ZTtcblx0XHRcdCovXG4vLzogQGVuZC1pZ25vcmVcblxuXHRcdFx0YXNzZXJ0LmVxdWFsKCByZXN1bHQsIHRydWUgKTtcblx0XHR9ICk7XG5cdH0gKTtcblxuXHRkZXNjcmliZSggXCJgc3RyaW5nZSggZnVuY3Rpb24gdGVzdCggKXsgcmV0dXJuICd0ZXN0JyB9IClgXCIsICggKSA9PiB7XG5cdFx0aXQoIFwic2hvdWxkIGJlIGVxdWFsIHRvICdmdW5jdGlvbiB0ZXN0KCApeyByZXR1cm4gJ3Rlc3QnIH0nXCIsICggKSA9PiB7XG5cdFx0XHQvLzogQGlnbm9yZTpcbi8qXG5cdFx0XHRsZXQgcmVzdWx0ID0gYnJvd3Nlci51cmwoIGJyaWRnZVVSTCApLmV4ZWN1dGUoXG5cblx0XHRcdFx0ZnVuY3Rpb24oICl7XG5cdFx0XHRcdFx0bGV0IHBhdHRlcm4gPSAvZnVuY3Rpb25cXHMrdGVzdFxccypcXChcXHMqXFwpXFxzKlxce1xccypyZXR1cm5cXHMrXFwndGVzdFxcJ1xccypcXH0vO1xuXHRcdFx0XHRcdGxldCBkYXRhID0gc3RyaW5nZSggZnVuY3Rpb24gdGVzdCggKXsgcmV0dXJuICd0ZXN0JyB9ICk7XG5cdFx0XHRcdFx0bGV0IHRlc3QgPSBwYXR0ZXJuLnRlc3QoIGRhdGEgKTtcblx0XHRcdFx0XHRyZXR1cm4gdGVzdDtcblx0XHRcdFx0fVxuXG5cdFx0XHQpLnZhbHVlO1xuXHRcdFx0Ki9cbi8vOiBAZW5kLWlnbm9yZVxuXG5cdFx0XHRhc3NlcnQuZXF1YWwoIHJlc3VsdCwgdHJ1ZSApO1xuXG5cdFx0fSApO1xuXHR9ICk7XG5cbn0gKTtcbi8vOiBAZW5kLWJyaWRnZVxuIl19
//# sourceMappingURL=test.bridge.js.map
