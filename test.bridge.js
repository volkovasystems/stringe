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

var assert=require("should/as-function");





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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInRlc3QuYnJpZGdlLmpzIl0sIm5hbWVzIjpbImFzc2VydCIsInJlcXVpcmUiLCJwYXRoIiwiZGVzY3JpYmUiLCJicmlkZ2VVUkwiLCJyZXNvbHZlIiwiX19kaXJuYW1lIiwiaXQiLCJyZXN1bHQiLCJicm93c2VyIiwidXJsIiwiZXhlY3V0ZSIsInN0cmluZ2UiLCJ3aW5kb3ciLCJlcXVhbCIsInZhbHVlIiwidW5kZWZpbmVkIiwiTmFOIiwiSW5maW5pdHkiLCJBcnJheSJdLCJtYXBwaW5ncyI6IkFBQUE7O0FBRUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQXNEQSxHQUFNQSxRQUFTQyxRQUFTLG9CQUFULENBQWY7Ozs7OztBQU1BO0FBQ0EsR0FBTUMsTUFBT0QsUUFBUyxNQUFULENBQWI7QUFDQTs7Ozs7OztBQU9BO0FBQ0FFLFNBQVUsU0FBVixDQUFxQixVQUFPOztBQUUzQixHQUFJQyxxQkFBdUJGLEtBQUtHLE9BQUwsQ0FBY0MsU0FBZCxDQUF5QixhQUF6QixDQUEzQjs7QUFFQUgsU0FBVSxxQkFBVixDQUFpQyxVQUFPO0FBQ3ZDSSxHQUFJLHNDQUFKLENBQTRDLFVBQU87O0FBRWxELEdBQUlDLFFBQVNDLFFBQVFDLEdBQVIsQ0FBYU4sU0FBYixFQUF5Qk8sT0FBekIsQ0FBa0MsaUJBQU9DLFNBQVNDLE1BQVQsQ0FBUCxFQUFsQyxDQUFiOztBQUVBYixPQUFPYyxLQUFQLENBQWNOLE9BQU9PLEtBQXJCLENBQTRCLGlCQUE1Qjs7QUFFQSxDQU5EO0FBT0EsQ0FSRDs7QUFVQVosU0FBVSxtQkFBVixDQUErQixVQUFPO0FBQ3JDSSxHQUFJLDJCQUFKLENBQWlDLFVBQU87O0FBRXZDLEdBQUlDLFFBQVNDLFFBQVFDLEdBQVIsQ0FBYU4sU0FBYixFQUF5Qk8sT0FBekIsQ0FBa0MsaUJBQU9DLFNBQVMsSUFBVCxDQUFQLEVBQWxDLENBQWI7O0FBRUFaLE9BQU9jLEtBQVAsQ0FBY04sT0FBT08sS0FBckIs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RUEsQ0FORDtBQU9BLENBUkQ7O0FBVUFaLFNBQVUseUJBQVYsQ0FBcUMsVUFBTztBQUMzQ0ksR0FBSSxpQ0FBSixDQUF1QyxVQUFPO0FBQzdDO0FBQ0g7Ozs7Ozs7Ozs7OztBQVlBOztBQUVHUCxPQUFPYyxLQUFQLENBQWNOLE1BQWQsQ0FBc0IsSUFBdEI7QUFDQSxDQWpCRDtBQWtCQSxDQW5CRDs7QUFxQkFMLFNBQVUsZ0RBQVYsQ0FBNEQsVUFBTztBQUNsRUksR0FBSSx3REFBSixDQUE4RCxVQUFPO0FBQ3BFO0FBQ0g7Ozs7Ozs7Ozs7OztBQVlBOztBQUVHUCxPQUFPYyxLQUFQLENBQWNOLE1BQWQsQ0FBc0IsSUFBdEI7O0FBRUEsQ0FsQkQ7QUFtQkEsQ0FwQkQ7O0FBc0JBLENBbkpEO0FBb0pBIiwiZmlsZSI6InRlc3QuYnJpZGdlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qO1xuXHRAdGVzdC1saWNlbnNlOlxuXHRcdFRoZSBNSVQgTGljZW5zZSAoTUlUKVxuXHRcdEBtaXQtbGljZW5zZVxuXG5cdFx0Q29weXJpZ2h0IChAYykgMjAxNyBSaWNoZXZlIFNpb2RpbmEgQmViZWRvclxuXHRcdEBlbWFpbDogcmljaGV2ZS5iZWJlZG9yQGdtYWlsLmNvbVxuXG5cdFx0UGVybWlzc2lvbiBpcyBoZXJlYnkgZ3JhbnRlZCwgZnJlZSBvZiBjaGFyZ2UsIHRvIGFueSBwZXJzb24gb2J0YWluaW5nIGEgY29weVxuXHRcdG9mIHRoaXMgc29mdHdhcmUgYW5kIGFzc29jaWF0ZWQgZG9jdW1lbnRhdGlvbiBmaWxlcyAodGhlIFwiU29mdHdhcmVcIiksIHRvIGRlYWxcblx0XHRpbiB0aGUgU29mdHdhcmUgd2l0aG91dCByZXN0cmljdGlvbiwgaW5jbHVkaW5nIHdpdGhvdXQgbGltaXRhdGlvbiB0aGUgcmlnaHRzXG5cdFx0dG8gdXNlLCBjb3B5LCBtb2RpZnksIG1lcmdlLCBwdWJsaXNoLCBkaXN0cmlidXRlLCBzdWJsaWNlbnNlLCBhbmQvb3Igc2VsbFxuXHRcdGNvcGllcyBvZiB0aGUgU29mdHdhcmUsIGFuZCB0byBwZXJtaXQgcGVyc29ucyB0byB3aG9tIHRoZSBTb2Z0d2FyZSBpc1xuXHRcdGZ1cm5pc2hlZCB0byBkbyBzbywgc3ViamVjdCB0byB0aGUgZm9sbG93aW5nIGNvbmRpdGlvbnM6XG5cblx0XHRUaGUgYWJvdmUgY29weXJpZ2h0IG5vdGljZSBhbmQgdGhpcyBwZXJtaXNzaW9uIG5vdGljZSBzaGFsbCBiZSBpbmNsdWRlZCBpbiBhbGxcblx0XHRjb3BpZXMgb3Igc3Vic3RhbnRpYWwgcG9ydGlvbnMgb2YgdGhlIFNvZnR3YXJlLlxuXG5cdFx0VEhFIFNPRlRXQVJFIElTIFBST1ZJREVEIFwiQVMgSVNcIiwgV0lUSE9VVCBXQVJSQU5UWSBPRiBBTlkgS0lORCwgRVhQUkVTUyBPUlxuXHRcdElNUExJRUQsIElOQ0xVRElORyBCVVQgTk9UIExJTUlURUQgVE8gVEhFIFdBUlJBTlRJRVMgT0YgTUVSQ0hBTlRBQklMSVRZLFxuXHRcdEZJVE5FU1MgRk9SIEEgUEFSVElDVUxBUiBQVVJQT1NFIEFORCBOT05JTkZSSU5HRU1FTlQuIElOIE5PIEVWRU5UIFNIQUxMIFRIRVxuXHRcdEFVVEhPUlMgT1IgQ09QWVJJR0hUIEhPTERFUlMgQkUgTElBQkxFIEZPUiBBTlkgQ0xBSU0sIERBTUFHRVMgT1IgT1RIRVJcblx0XHRMSUFCSUxJVFksIFdIRVRIRVIgSU4gQU4gQUNUSU9OIE9GIENPTlRSQUNULCBUT1JUIE9SIE9USEVSV0lTRSwgQVJJU0lORyBGUk9NLFxuXHRcdE9VVCBPRiBPUiBJTiBDT05ORUNUSU9OIFdJVEggVEhFIFNPRlRXQVJFIE9SIFRIRSBVU0UgT1IgT1RIRVIgREVBTElOR1MgSU4gVEhFXG5cdFx0U09GVFdBUkUuXG5cdEBlbmQtdGVzdC1saWNlbnNlXG5cblx0QHRlc3QtY29uZmlndXJhdGlvbjpcblx0XHR7XG5cdFx0XHRcInBhY2thZ2VcIjogXCJzdHJpbmdlXCIsXG5cdFx0XHRcInBhdGhcIjogXCJzdHJpbmdlL3Rlc3QubW9kdWxlLmpzXCIsXG5cdFx0XHRcImZpbGVcIjogXCJ0ZXN0Lm1vZHVsZS5qc1wiLFxuXHRcdFx0XCJtb2R1bGVcIjogXCJ0ZXN0XCIsXG5cdFx0XHRcImF1dGhvclwiOiBcIlJpY2hldmUgUy4gQmViZWRvclwiLFxuXHRcdFx0XCJlTWFpbFwiOiBcInJpY2hldmUuYmViZWRvckBnbWFpbC5jb21cIixcblx0XHRcdFwiY29udHJpYnV0b3JzXCI6IFtcblx0XHRcdFx0XCJKb2huIExlbm9uIE1hZ2hhbm95IDxqb2hubGVub25tYWdoYW5veUBnbWFpbC5jb20+XCJcblx0XHRcdF0sXG5cdFx0XHRcInJlcG9zaXRvcnlcIjogXCJodHRwczovL2dpdGh1Yi5jb20vdm9sa292YXN5c3RlbXMvbnVtcmljLmdpdFwiXG5cdFx0fVxuXHRAZW5kLXRlc3QtY29uZmlndXJhdGlvblxuXG5cdEB0ZXN0LWRvY3VtZW50YXRpb246XG5cblx0QGVuZC10ZXN0LWRvY3VtZW50YXRpb25cblxuXHRAaW5jbHVkZTpcblx0XHR7XG5cdFx0XHRcImFzc2VydFwiOiBcInNob3VsZFwiLFxuXHRcdFx0XCJzdHJpbmdlXCI6IFwic3RyaW5nZVwiXG5cdFx0fVxuXHRAZW5kLWluY2x1ZGVcbiovXG5cbmNvbnN0IGFzc2VydCA9IHJlcXVpcmUoIFwic2hvdWxkL2FzLWZ1bmN0aW9uXCIgKTtcblxuXG5cblxuXG4vLzogQGJyaWRnZTpcbmNvbnN0IHBhdGggPSByZXF1aXJlKCBcInBhdGhcIiApO1xuLy86IEBlbmQtYnJpZGdlXG5cblxuXG5cblxuXG4vLzogQGJyaWRnZTpcbmRlc2NyaWJlKCBcInN0cmluZ2VcIiwgKCApID0+IHtcblxuXHRsZXQgYnJpZGdlVVJMID0gYGZpbGU6Ly8keyBwYXRoLnJlc29sdmUoIF9fZGlybmFtZSwgXCJicmlkZ2UuaHRtbFwiICkgfWA7XG5cblx0ZGVzY3JpYmUoIFwiYHN0cmluZ2UoIHdpbmRvdyApYFwiLCAoICkgPT4ge1xuXHRcdGl0KCBcInNob3VsZCBiZSBlcXVhbCB0byAnW29iamVjdCBXaW5kb3ddJ1wiLCAoICkgPT4ge1xuXG5cdFx0XHRsZXQgcmVzdWx0ID0gYnJvd3Nlci51cmwoIGJyaWRnZVVSTCApLmV4ZWN1dGUoICggKSA9PiBzdHJpbmdlKCB3aW5kb3cgKSApO1xuXG5cdFx0XHRhc3NlcnQuZXF1YWwoIHJlc3VsdC52YWx1ZSwgXCJbb2JqZWN0IFdpbmRvd11cIiApO1xuXG5cdFx0fSApO1xuXHR9ICk7XG5cblx0ZGVzY3JpYmUoIFwiYHN0cmluZ2UoIHRydWUgKWBcIiwgKCApID0+IHtcblx0XHRpdCggXCJzaG91bGQgYmUgZXF1YWwgdG8gJ3RydWUnXCIsICggKSA9PiB7XG5cblx0XHRcdGxldCByZXN1bHQgPSBicm93c2VyLnVybCggYnJpZGdlVVJMICkuZXhlY3V0ZSggKCApID0+IHN0cmluZ2UoIHRydWUgKSApO1xuXG5cdFx0XHRhc3NlcnQuZXF1YWwoIHJlc3VsdC52YWx1ZSwgXCJ0cnVlXCIgKTtcblxuXHRcdH0gKTtcblx0fSApO1xuXG5cdGRlc2NyaWJlKCBcImBzdHJpbmdlKCB1bmRlZmluZWQgKWBcIiwgKCApID0+IHtcblx0XHRpdCggXCJzaG91bGQgYmUgZXF1YWwgdG8gJ3VuZGVmaW5lZCdcIiwgKCApID0+IHtcblxuXHRcdFx0bGV0IHJlc3VsdCA9IGJyb3dzZXIudXJsKCBicmlkZ2VVUkwgKS5leGVjdXRlKCAoICkgPT4gc3RyaW5nZSggdW5kZWZpbmVkICkgKTtcblxuXHRcdFx0YXNzZXJ0LmVxdWFsKCByZXN1bHQudmFsdWUsIFwidW5kZWZpbmVkXCIgKTtcblxuXHRcdH0gKTtcblx0fSApO1xuXG5cdGRlc2NyaWJlKCBcImBzdHJpbmdlKCBudWxsIClgXCIsICggKSA9PiB7XG5cdFx0aXQoIFwic2hvdWxkIGJlIGVxdWFsIHRvICdudWxsJ1wiLCAoICkgPT4ge1xuXG5cdFx0XHRsZXQgcmVzdWx0ID0gYnJvd3Nlci51cmwoIGJyaWRnZVVSTCApLmV4ZWN1dGUoICggKSA9PiBzdHJpbmdlKCBudWxsICkgKTtcblxuXHRcdFx0YXNzZXJ0LmVxdWFsKCByZXN1bHQudmFsdWUsIFwibnVsbFwiICk7XG5cblx0XHR9ICk7XG5cdH0gKTtcblxuXHRkZXNjcmliZSggXCJgc3RyaW5nZSggTmFOIClgXCIsICggKSA9PiB7XG5cdFx0aXQoIFwic2hvdWxkIGJlIGVxdWFsIHRvICdOYU4nXCIsICggKSA9PiB7XG5cblx0XHRcdGxldCByZXN1bHQgPSBicm93c2VyLnVybCggYnJpZGdlVVJMICkuZXhlY3V0ZSggKCApID0+IHN0cmluZ2UoIE5hTiApICk7XG5cblx0XHRcdGFzc2VydC5lcXVhbCggcmVzdWx0LnZhbHVlLCBcIk5hTlwiICk7XG5cblx0XHR9ICk7XG5cdH0gKTtcblxuXHRkZXNjcmliZSggXCJgc3RyaW5nZSggSW5maW5pdHkgKWBcIiwgKCApID0+IHtcblx0XHRpdCggXCJzaG91bGQgYmUgZXF1YWwgdG8gJ0luZmluaXR5J1wiLCAoICkgPT4ge1xuXG5cdFx0XHRsZXQgcmVzdWx0ID0gYnJvd3Nlci51cmwoIGJyaWRnZVVSTCApLmV4ZWN1dGUoICggKSA9PiBzdHJpbmdlKCBJbmZpbml0eSApICk7XG5cblx0XHRcdGFzc2VydC5lcXVhbCggcmVzdWx0LnZhbHVlLCBcIkluZmluaXR5XCIgKTtcblxuXHRcdH0gKTtcblx0fSApO1xuXG5cdGRlc2NyaWJlKCBcImBzdHJpbmdlKCBBcnJheSApYFwiLCAoICkgPT4ge1xuXHRcdGl0KCBcInNob3VsZCBiZSBlcXVhbCB0byAnZnVuY3Rpb24gQXJyYXkoKSB7IFtuYXRpdmUgY29kZV0gfSdcIiwgKCApID0+IHtcblxuXHRcdFx0bGV0IHJlc3VsdCA9IGJyb3dzZXIudXJsKCBicmlkZ2VVUkwgKS5leGVjdXRlKCAoICkgPT4gc3RyaW5nZSggQXJyYXkgKSApO1xuXG5cdFx0XHRhc3NlcnQuZXF1YWwoIHJlc3VsdC52YWx1ZSwgXCJmdW5jdGlvbiBBcnJheSgpIHsgW25hdGl2ZSBjb2RlXSB9XCIgKTtcblxuXHRcdH0gKTtcblx0fSApO1xuXG5cdGRlc2NyaWJlKCBcImBzdHJpbmdlKCAxMjMgKWBcIiwgKCApID0+IHtcblx0XHRpdCggXCJzaG91bGQgYmUgZXF1YWwgdG8gJzEyMydcIiwgKCApID0+IHtcblxuXHRcdFx0bGV0IHJlc3VsdCA9IGJyb3dzZXIudXJsKCBicmlkZ2VVUkwgKS5leGVjdXRlKCAoICkgPT4gc3RyaW5nZSggMTIzICkgKTtcblxuXHRcdFx0YXNzZXJ0LmVxdWFsKCByZXN1bHQudmFsdWUsIFwiMTIzXCIgKTtcblxuXHRcdH0gKTtcblx0fSApO1xuXG5cdGRlc2NyaWJlKCBcImBzdHJpbmdlKCAnaGVsbG8gd29ybGQnIClgXCIsICggKSA9PiB7XG5cdFx0aXQoIFwic2hvdWxkIGJlIGVxdWFsIHRvICdoZWxsbyB3b3JsZCdcIiwgKCApID0+IHtcblxuXHRcdFx0bGV0IHJlc3VsdCA9IGJyb3dzZXIudXJsKCBicmlkZ2VVUkwgKS5leGVjdXRlKCAoICkgPT4gc3RyaW5nZSggXCJoZWxsbyB3b3JsZFwiICkgKTtcblxuXHRcdFx0YXNzZXJ0LmVxdWFsKCByZXN1bHQudmFsdWUsIFwiaGVsbG8gd29ybGRcIiApO1xuXG5cdFx0fSApO1xuXHR9ICk7XG5cblx0ZGVzY3JpYmUoIFwiYHN0cmluZ2UoIHsgJ2hlbGxvJzogJ3dvcmxkJyB9IClgXCIsICggKSA9PiB7XG5cdFx0aXQoIFwic2hvdWxkIGJlIGVxdWFsIHRvICdbb2JqZWN0IE9iamVjdF0nXCIsICggKSA9PiB7XG5cblx0XHRcdGxldCByZXN1bHQgPSBicm93c2VyLnVybCggYnJpZGdlVVJMICkuZXhlY3V0ZSggKCApID0+IHN0cmluZ2UoIHsgXCJoZWxsb1wiOiBcIndvcmxkXCIgfSApICk7XG5cblx0XHRcdGFzc2VydC5lcXVhbCggcmVzdWx0LnZhbHVlLCBcIltvYmplY3QgT2JqZWN0XVwiICk7XG5cblx0XHR9ICk7XG5cdH0gKTtcblxuXHRkZXNjcmliZSggXCJgc3RyaW5nZSggKCApID0+IHsgfSApYFwiLCAoICkgPT4ge1xuXHRcdGl0KCBcInNob3VsZCBiZSBlcXVhbCB0byAnKCApID0+IHsgfSdcIiwgKCApID0+IHtcblx0XHRcdC8vOiBAaWdub3JlOlxuLypcblx0XHRcdGxldCByZXN1bHQgPSBicm93c2VyLnVybCggYnJpZGdlVVJMICkuZXhlY3V0ZShcblxuXHRcdFx0XHRmdW5jdGlvbiggKXtcblx0XHRcdFx0XHRsZXQgcGF0dGVybiA9IC9cXChcXHMqXFwpXFxzKlxcPVxcPlxccypcXHtcXHMqXFx9Lztcblx0XHRcdFx0XHRsZXQgZGF0YSA9IHN0cmluZ2UoICggKSA9PiB7IH0gKTtcblx0XHRcdFx0XHRsZXQgdGVzdCA9IHBhdHRlcm4udGVzdCggZGF0YSApO1xuXHRcdFx0XHRcdHJldHVybiB0ZXN0O1xuXHRcdFx0XHR9XG5cblx0XHRcdCkudmFsdWU7XG5cdFx0XHQqL1xuLy86IEBlbmQtaWdub3JlXG5cblx0XHRcdGFzc2VydC5lcXVhbCggcmVzdWx0LCB0cnVlICk7XG5cdFx0fSApO1xuXHR9ICk7XG5cblx0ZGVzY3JpYmUoIFwiYHN0cmluZ2UoIGZ1bmN0aW9uIHRlc3QoICl7IHJldHVybiAndGVzdCcgfSApYFwiLCAoICkgPT4ge1xuXHRcdGl0KCBcInNob3VsZCBiZSBlcXVhbCB0byAnZnVuY3Rpb24gdGVzdCggKXsgcmV0dXJuICd0ZXN0JyB9J1wiLCAoICkgPT4ge1xuXHRcdFx0Ly86IEBpZ25vcmU6XG4vKlxuXHRcdFx0bGV0IHJlc3VsdCA9IGJyb3dzZXIudXJsKCBicmlkZ2VVUkwgKS5leGVjdXRlKFxuXG5cdFx0XHRcdGZ1bmN0aW9uKCApe1xuXHRcdFx0XHRcdGxldCBwYXR0ZXJuID0gL2Z1bmN0aW9uXFxzK3Rlc3RcXHMqXFwoXFxzKlxcKVxccypcXHtcXHMqcmV0dXJuXFxzK1xcJ3Rlc3RcXCdcXHMqXFx9Lztcblx0XHRcdFx0XHRsZXQgZGF0YSA9IHN0cmluZ2UoIGZ1bmN0aW9uIHRlc3QoICl7IHJldHVybiAndGVzdCcgfSApO1xuXHRcdFx0XHRcdGxldCB0ZXN0ID0gcGF0dGVybi50ZXN0KCBkYXRhICk7XG5cdFx0XHRcdFx0cmV0dXJuIHRlc3Q7XG5cdFx0XHRcdH1cblxuXHRcdFx0KS52YWx1ZTtcblx0XHRcdCovXG4vLzogQGVuZC1pZ25vcmVcblxuXHRcdFx0YXNzZXJ0LmVxdWFsKCByZXN1bHQsIHRydWUgKTtcblxuXHRcdH0gKTtcblx0fSApO1xuXG59ICk7XG4vLzogQGVuZC1icmlkZ2VcbiJdfQ==
//# sourceMappingURL=test.bridge.js.map
