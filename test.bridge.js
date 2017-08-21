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
              				"John Lenon Maghanoy <johnlenonmaghanoy@gmail.com>",
              				"Vinse Vinalon <vinsevinalon@gmail.com>"
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

var assert = require("should");





//: @bridge:
var path = require("path");
//: @end-bridge







//: @bridge:

describe("stringe", function () {

	var bridgeURL = "file://" + path.resolve(__dirname, "bridge.html");

	describe("`stringe( window )`", function () {

		it("should be equal to '[object Window]'", function () {

			var result = browser.url(bridgeURL).execute(function () {return stringe(window);});

			assert.equal(result.value, "[object Window]");

		});

	});


	describe("`stringe( true )`", function () {

		it("should be equal to 'true'", function () {

			var result = browser.url(bridgeURL).execute(function () {return stringe(true);});

			assert.equal(result.value, "true");

		});

	});


	describe("`stringe( undefined )`", function () {

		it("should be equal to 'undefined'", function () {

			var result = browser.url(bridgeURL).execute(function () {return stringe(undefined);});

			assert.equal(result.value, "undefined");

		});

	});


	describe("`stringe( null )`", function () {

		it("should be equal to 'null'", function () {

			var result = browser.url(bridgeURL).execute(function () {return stringe(null);});

			assert.equal(result.value, "null");

		});

	});


	describe("`stringe( NaN )`", function () {

		it("should be equal to 'NaN'", function () {

			var result = browser.url(bridgeURL).execute(function () {return stringe(NaN);});

			assert.equal(result.value, "NaN");

		});

	});


	describe("`stringe( Infinity )`", function () {

		it("should be equal to 'Infinity'", function () {

			var result = browser.url(bridgeURL).execute(function () {return stringe(Infinity);});

			assert.equal(result.value, "Infinity");

		});

	});


	describe("`stringe( Array )`", function () {

		it("should be equal to 'function Array() { [native code] }'", function () {

			var result = browser.url(bridgeURL).execute(function () {return stringe(Array);});

			assert.equal(result.value, "function Array() { [native code] }");

		});

	});


	describe("`stringe( 123 )`", function () {

		it("should be equal to '123'", function () {

			var result = browser.url(bridgeURL).execute(function () {return stringe(123);});

			assert.equal(result.value, "123");

		});

	});


	describe("`stringe( 'hello world' )`", function () {

		it("should be equal to 'hello world'", function () {

			var result = browser.url(bridgeURL).execute(function () {return stringe("hello world");});

			assert.equal(result.value, "hello world");

		});

	});


	describe("`stringe( { 'hello': 'world' } )`", function () {

		it("should be equal to '[object Object]'", function () {

			var result = browser.url(bridgeURL).execute(function () {return stringe({ "hello": "world" });});

			assert.equal(result.value, "[object Object]");

		});

	});


	describe("`stringe( ( ) => { } )`", function () {
		it("should be equal to '( ) => { }'", function () {
			//: @ignore:
   			let result = browser.url( bridgeURL ).execute(
   
   				function( ){
   					let pattern = /\(\s*\)\s*\=\>\s*\{\s*\}/;
   					let data = stringe( ( ) => { } );
   					let test = pattern.test( data );
   					return test;
   				}
   
   			).value;
   
   			assert.equal( result, true );
   			//: @end-ignore
		});
	});


	describe("`stringe( function test( ){ return 'test' } )`", function () {
		it("should be equal to 'function test( ){ return 'test' }'", function () {
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
			assert.equal(result, true);

		});
	});

});

//: @end-bridge
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInRlc3QuYnJpZGdlLmpzIl0sIm5hbWVzIjpbImFzc2VydCIsInJlcXVpcmUiLCJwYXRoIiwiZGVzY3JpYmUiLCJicmlkZ2VVUkwiLCJyZXNvbHZlIiwiX19kaXJuYW1lIiwiaXQiLCJyZXN1bHQiLCJicm93c2VyIiwidXJsIiwiZXhlY3V0ZSIsInN0cmluZ2UiLCJ3aW5kb3ciLCJlcXVhbCIsInZhbHVlIiwidW5kZWZpbmVkIiwiTmFOIiwiSW5maW5pdHkiLCJBcnJheSJdLCJtYXBwaW5ncyI6IkFBQUE7O0FBRUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUF1REEsSUFBTUEsU0FBU0MsUUFBUyxRQUFULENBQWY7Ozs7OztBQU1BO0FBQ0EsSUFBTUMsT0FBT0QsUUFBUyxNQUFULENBQWI7QUFDQTs7Ozs7Ozs7QUFRQTs7QUFFQUUsU0FBVSxTQUFWLEVBQXFCLFlBQU87O0FBRTNCLEtBQUlDLHdCQUF1QkYsS0FBS0csT0FBTCxDQUFjQyxTQUFkLEVBQXlCLGFBQXpCLENBQTNCOztBQUVBSCxVQUFVLHFCQUFWLEVBQWlDLFlBQU87O0FBRXZDSSxLQUFJLHNDQUFKLEVBQTRDLFlBQU87O0FBRWxELE9BQUlDLFNBQVNDLFFBQVFDLEdBQVIsQ0FBYU4sU0FBYixFQUF5Qk8sT0FBekIsQ0FBa0Msb0JBQU9DLFFBQVNDLE1BQVQsQ0FBUCxFQUFsQyxDQUFiOztBQUVBYixVQUFPYyxLQUFQLENBQWNOLE9BQU9PLEtBQXJCLEVBQTRCLGlCQUE1Qjs7QUFFQSxHQU5EOztBQVFBLEVBVkQ7OztBQWFBWixVQUFVLG1CQUFWLEVBQStCLFlBQU87O0FBRXJDSSxLQUFJLDJCQUFKLEVBQWlDLFlBQU87O0FBRXZDLE9BQUlDLFNBQVNDLFFBQVFDLEdBQVIsQ0FBYU4sU0FBYixFQUF5Qk8sT0FBekIsQ0FBa0Msb0JBQU9DLFFBQVMsSUFBVCxDQUFQLEVBQWxDLENBQWI7O0FBRUFaLFVBQU9jLEtBQVAsQ0FBY04sT0FBT08s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TixPQUFPTyxLQUFyQixFQUE0QixpQkFBNUI7O0FBRUEsR0FORDs7QUFRQSxFQVZEOzs7QUFhQVosVUFBVSx5QkFBVixFQUFxQyxZQUFPO0FBQzNDSSxLQUFJLGlDQUFKLEVBQXVDLFlBQU87QUFDN0M7QUFDSDs7Ozs7Ozs7Ozs7Ozs7QUFjQTtBQUNHLEdBakJEO0FBa0JBLEVBbkJEOzs7QUFzQkFKLFVBQVUsZ0RBQVYsRUFBNEQsWUFBTztBQUNsRUksS0FBSSx3REFBSixFQUE4RCxZQUFPO0FBQ3BFO0FBQ0g7Ozs7Ozs7Ozs7OztBQVlBO0FBQ0dQLFVBQU9jLEtBQVAsQ0FBY04sTUFBZCxFQUFzQixJQUF0Qjs7QUFFQSxHQWpCRDtBQWtCQSxFQW5CRDs7QUFxQkEsQ0FqTEQ7O0FBbUxBIiwiZmlsZSI6InRlc3QuYnJpZGdlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qO1xuXHRAdGVzdC1saWNlbnNlOlxuXHRcdFRoZSBNSVQgTGljZW5zZSAoTUlUKVxuXHRcdEBtaXQtbGljZW5zZVxuXG5cdFx0Q29weXJpZ2h0IChAYykgMjAxNyBSaWNoZXZlIFNpb2RpbmEgQmViZWRvclxuXHRcdEBlbWFpbDogcmljaGV2ZS5iZWJlZG9yQGdtYWlsLmNvbVxuXG5cdFx0UGVybWlzc2lvbiBpcyBoZXJlYnkgZ3JhbnRlZCwgZnJlZSBvZiBjaGFyZ2UsIHRvIGFueSBwZXJzb24gb2J0YWluaW5nIGEgY29weVxuXHRcdG9mIHRoaXMgc29mdHdhcmUgYW5kIGFzc29jaWF0ZWQgZG9jdW1lbnRhdGlvbiBmaWxlcyAodGhlIFwiU29mdHdhcmVcIiksIHRvIGRlYWxcblx0XHRpbiB0aGUgU29mdHdhcmUgd2l0aG91dCByZXN0cmljdGlvbiwgaW5jbHVkaW5nIHdpdGhvdXQgbGltaXRhdGlvbiB0aGUgcmlnaHRzXG5cdFx0dG8gdXNlLCBjb3B5LCBtb2RpZnksIG1lcmdlLCBwdWJsaXNoLCBkaXN0cmlidXRlLCBzdWJsaWNlbnNlLCBhbmQvb3Igc2VsbFxuXHRcdGNvcGllcyBvZiB0aGUgU29mdHdhcmUsIGFuZCB0byBwZXJtaXQgcGVyc29ucyB0byB3aG9tIHRoZSBTb2Z0d2FyZSBpc1xuXHRcdGZ1cm5pc2hlZCB0byBkbyBzbywgc3ViamVjdCB0byB0aGUgZm9sbG93aW5nIGNvbmRpdGlvbnM6XG5cblx0XHRUaGUgYWJvdmUgY29weXJpZ2h0IG5vdGljZSBhbmQgdGhpcyBwZXJtaXNzaW9uIG5vdGljZSBzaGFsbCBiZSBpbmNsdWRlZCBpbiBhbGxcblx0XHRjb3BpZXMgb3Igc3Vic3RhbnRpYWwgcG9ydGlvbnMgb2YgdGhlIFNvZnR3YXJlLlxuXG5cdFx0VEhFIFNPRlRXQVJFIElTIFBST1ZJREVEIFwiQVMgSVNcIiwgV0lUSE9VVCBXQVJSQU5UWSBPRiBBTlkgS0lORCwgRVhQUkVTUyBPUlxuXHRcdElNUExJRUQsIElOQ0xVRElORyBCVVQgTk9UIExJTUlURUQgVE8gVEhFIFdBUlJBTlRJRVMgT0YgTUVSQ0hBTlRBQklMSVRZLFxuXHRcdEZJVE5FU1MgRk9SIEEgUEFSVElDVUxBUiBQVVJQT1NFIEFORCBOT05JTkZSSU5HRU1FTlQuIElOIE5PIEVWRU5UIFNIQUxMIFRIRVxuXHRcdEFVVEhPUlMgT1IgQ09QWVJJR0hUIEhPTERFUlMgQkUgTElBQkxFIEZPUiBBTlkgQ0xBSU0sIERBTUFHRVMgT1IgT1RIRVJcblx0XHRMSUFCSUxJVFksIFdIRVRIRVIgSU4gQU4gQUNUSU9OIE9GIENPTlRSQUNULCBUT1JUIE9SIE9USEVSV0lTRSwgQVJJU0lORyBGUk9NLFxuXHRcdE9VVCBPRiBPUiBJTiBDT05ORUNUSU9OIFdJVEggVEhFIFNPRlRXQVJFIE9SIFRIRSBVU0UgT1IgT1RIRVIgREVBTElOR1MgSU4gVEhFXG5cdFx0U09GVFdBUkUuXG5cdEBlbmQtdGVzdC1saWNlbnNlXG5cblx0QHRlc3QtY29uZmlndXJhdGlvbjpcblx0XHR7XG5cdFx0XHRcInBhY2thZ2VcIjogXCJzdHJpbmdlXCIsXG5cdFx0XHRcInBhdGhcIjogXCJzdHJpbmdlL3Rlc3QubW9kdWxlLmpzXCIsXG5cdFx0XHRcImZpbGVcIjogXCJ0ZXN0Lm1vZHVsZS5qc1wiLFxuXHRcdFx0XCJtb2R1bGVcIjogXCJ0ZXN0XCIsXG5cdFx0XHRcImF1dGhvclwiOiBcIlJpY2hldmUgUy4gQmViZWRvclwiLFxuXHRcdFx0XCJlTWFpbFwiOiBcInJpY2hldmUuYmViZWRvckBnbWFpbC5jb21cIixcblx0XHRcdFwiY29udHJpYnV0b3JzXCI6IFtcblx0XHRcdFx0XCJKb2huIExlbm9uIE1hZ2hhbm95IDxqb2hubGVub25tYWdoYW5veUBnbWFpbC5jb20+XCIsXG5cdFx0XHRcdFwiVmluc2UgVmluYWxvbiA8dmluc2V2aW5hbG9uQGdtYWlsLmNvbT5cIlxuXHRcdFx0XSxcblx0XHRcdFwicmVwb3NpdG9yeVwiOiBcImh0dHBzOi8vZ2l0aHViLmNvbS92b2xrb3Zhc3lzdGVtcy9udW1yaWMuZ2l0XCJcblx0XHR9XG5cdEBlbmQtdGVzdC1jb25maWd1cmF0aW9uXG5cblx0QHRlc3QtZG9jdW1lbnRhdGlvbjpcblxuXHRAZW5kLXRlc3QtZG9jdW1lbnRhdGlvblxuXG5cdEBpbmNsdWRlOlxuXHRcdHtcblx0XHRcdFwiYXNzZXJ0XCI6IFwic2hvdWxkXCIsXG5cdFx0XHRcInN0cmluZ2VcIjogXCJzdHJpbmdlXCJcblx0XHR9XG5cdEBlbmQtaW5jbHVkZVxuKi9cblxuY29uc3QgYXNzZXJ0ID0gcmVxdWlyZSggXCJzaG91bGRcIiApO1xuXG5cblxuXG5cbi8vOiBAYnJpZGdlOlxuY29uc3QgcGF0aCA9IHJlcXVpcmUoIFwicGF0aFwiICk7XG4vLzogQGVuZC1icmlkZ2VcblxuXG5cblxuXG5cblxuLy86IEBicmlkZ2U6XG5cbmRlc2NyaWJlKCBcInN0cmluZ2VcIiwgKCApID0+IHtcblxuXHRsZXQgYnJpZGdlVVJMID0gYGZpbGU6Ly8keyBwYXRoLnJlc29sdmUoIF9fZGlybmFtZSwgXCJicmlkZ2UuaHRtbFwiICkgfWA7XG5cblx0ZGVzY3JpYmUoIFwiYHN0cmluZ2UoIHdpbmRvdyApYFwiLCAoICkgPT4ge1xuXG5cdFx0aXQoIFwic2hvdWxkIGJlIGVxdWFsIHRvICdbb2JqZWN0IFdpbmRvd10nXCIsICggKSA9PiB7XG5cblx0XHRcdGxldCByZXN1bHQgPSBicm93c2VyLnVybCggYnJpZGdlVVJMICkuZXhlY3V0ZSggKCApID0+IHN0cmluZ2UoIHdpbmRvdyApICk7XG5cblx0XHRcdGFzc2VydC5lcXVhbCggcmVzdWx0LnZhbHVlLCBcIltvYmplY3QgV2luZG93XVwiICk7XG5cblx0XHR9ICk7XG5cblx0fSApO1xuXG5cblx0ZGVzY3JpYmUoIFwiYHN0cmluZ2UoIHRydWUgKWBcIiwgKCApID0+IHtcblxuXHRcdGl0KCBcInNob3VsZCBiZSBlcXVhbCB0byAndHJ1ZSdcIiwgKCApID0+IHtcblxuXHRcdFx0bGV0IHJlc3VsdCA9IGJyb3dzZXIudXJsKCBicmlkZ2VVUkwgKS5leGVjdXRlKCAoICkgPT4gc3RyaW5nZSggdHJ1ZSApICk7XG5cblx0XHRcdGFzc2VydC5lcXVhbCggcmVzdWx0LnZhbHVlLCBcInRydWVcIiApO1xuXG5cdFx0fSApO1xuXG5cdH0gKTtcblxuXG5cdGRlc2NyaWJlKCBcImBzdHJpbmdlKCB1bmRlZmluZWQgKWBcIiwgKCApID0+IHtcblxuXHRcdGl0KCBcInNob3VsZCBiZSBlcXVhbCB0byAndW5kZWZpbmVkJ1wiLCAoICkgPT4ge1xuXG5cdFx0XHRsZXQgcmVzdWx0ID0gYnJvd3Nlci51cmwoIGJyaWRnZVVSTCApLmV4ZWN1dGUoICggKSA9PiBzdHJpbmdlKCB1bmRlZmluZWQgKSApO1xuXG5cdFx0XHRhc3NlcnQuZXF1YWwoIHJlc3VsdC52YWx1ZSwgXCJ1bmRlZmluZWRcIiApO1xuXG5cdFx0fSApO1xuXG5cdH0gKTtcblxuXG5cdGRlc2NyaWJlKCBcImBzdHJpbmdlKCBudWxsIClgXCIsICggKSA9PiB7XG5cblx0XHRpdCggXCJzaG91bGQgYmUgZXF1YWwgdG8gJ251bGwnXCIsICggKSA9PiB7XG5cblx0XHRcdGxldCByZXN1bHQgPSBicm93c2VyLnVybCggYnJpZGdlVVJMICkuZXhlY3V0ZSggKCApID0+IHN0cmluZ2UoIG51bGwgKSApO1xuXG5cdFx0XHRhc3NlcnQuZXF1YWwoIHJlc3VsdC52YWx1ZSwgXCJudWxsXCIgKTtcblxuXHRcdH0gKTtcblxuXHR9ICk7XG5cblxuXHRkZXNjcmliZSggXCJgc3RyaW5nZSggTmFOIClgXCIsICggKSA9PiB7XG5cblx0XHRpdCggXCJzaG91bGQgYmUgZXF1YWwgdG8gJ05hTidcIiwgKCApID0+IHtcblxuXHRcdFx0bGV0IHJlc3VsdCA9IGJyb3dzZXIudXJsKCBicmlkZ2VVUkwgKS5leGVjdXRlKCAoICkgPT4gc3RyaW5nZSggTmFOICkgKTtcblxuXHRcdFx0YXNzZXJ0LmVxdWFsKCByZXN1bHQudmFsdWUsIFwiTmFOXCIgKTtcblxuXHRcdH0gKTtcblxuXHR9ICk7XG5cblxuXHRkZXNjcmliZSggXCJgc3RyaW5nZSggSW5maW5pdHkgKWBcIiwgKCApID0+IHtcblxuXHRcdGl0KCBcInNob3VsZCBiZSBlcXVhbCB0byAnSW5maW5pdHknXCIsICggKSA9PiB7XG5cblx0XHRcdGxldCByZXN1bHQgPSBicm93c2VyLnVybCggYnJpZGdlVVJMICkuZXhlY3V0ZSggKCApID0+IHN0cmluZ2UoIEluZmluaXR5ICkgKTtcblxuXHRcdFx0YXNzZXJ0LmVxdWFsKCByZXN1bHQudmFsdWUsIFwiSW5maW5pdHlcIiApO1xuXG5cdFx0fSApO1xuXG5cdH0gKTtcblxuXG5cdGRlc2NyaWJlKCBcImBzdHJpbmdlKCBBcnJheSApYFwiLCAoICkgPT4ge1xuXG5cdFx0aXQoIFwic2hvdWxkIGJlIGVxdWFsIHRvICdmdW5jdGlvbiBBcnJheSgpIHsgW25hdGl2ZSBjb2RlXSB9J1wiLCAoICkgPT4ge1xuXG5cdFx0XHRsZXQgcmVzdWx0ID0gYnJvd3Nlci51cmwoIGJyaWRnZVVSTCApLmV4ZWN1dGUoICggKSA9PiBzdHJpbmdlKCBBcnJheSApICk7XG5cblx0XHRcdGFzc2VydC5lcXVhbCggcmVzdWx0LnZhbHVlLCBcImZ1bmN0aW9uIEFycmF5KCkgeyBbbmF0aXZlIGNvZGVdIH1cIiApO1xuXG5cdFx0fSApO1xuXG5cdH0gKTtcblxuXG5cdGRlc2NyaWJlKCBcImBzdHJpbmdlKCAxMjMgKWBcIiwgKCApID0+IHtcblxuXHRcdGl0KCBcInNob3VsZCBiZSBlcXVhbCB0byAnMTIzJ1wiLCAoICkgPT4ge1xuXG5cdFx0XHRsZXQgcmVzdWx0ID0gYnJvd3Nlci51cmwoIGJyaWRnZVVSTCApLmV4ZWN1dGUoICggKSA9PiBzdHJpbmdlKCAxMjMgKSApO1xuXG5cdFx0XHRhc3NlcnQuZXF1YWwoIHJlc3VsdC52YWx1ZSwgXCIxMjNcIiApO1xuXG5cdFx0fSApO1xuXG5cdH0gKTtcblxuXG5cdGRlc2NyaWJlKCBcImBzdHJpbmdlKCAnaGVsbG8gd29ybGQnIClgXCIsICggKSA9PiB7XG5cblx0XHRpdCggXCJzaG91bGQgYmUgZXF1YWwgdG8gJ2hlbGxvIHdvcmxkJ1wiLCAoICkgPT4ge1xuXG5cdFx0XHRsZXQgcmVzdWx0ID0gYnJvd3Nlci51cmwoIGJyaWRnZVVSTCApLmV4ZWN1dGUoICggKSA9PiBzdHJpbmdlKCBcImhlbGxvIHdvcmxkXCIgKSApO1xuXG5cdFx0XHRhc3NlcnQuZXF1YWwoIHJlc3VsdC52YWx1ZSwgXCJoZWxsbyB3b3JsZFwiICk7XG5cblx0XHR9ICk7XG5cblx0fSApO1xuXG5cblx0ZGVzY3JpYmUoIFwiYHN0cmluZ2UoIHsgJ2hlbGxvJzogJ3dvcmxkJyB9IClgXCIsICggKSA9PiB7XG5cblx0XHRpdCggXCJzaG91bGQgYmUgZXF1YWwgdG8gJ1tvYmplY3QgT2JqZWN0XSdcIiwgKCApID0+IHtcblxuXHRcdFx0bGV0IHJlc3VsdCA9IGJyb3dzZXIudXJsKCBicmlkZ2VVUkwgKS5leGVjdXRlKCAoICkgPT4gc3RyaW5nZSggeyBcImhlbGxvXCI6IFwid29ybGRcIiB9ICkgKTtcblxuXHRcdFx0YXNzZXJ0LmVxdWFsKCByZXN1bHQudmFsdWUsIFwiW29iamVjdCBPYmplY3RdXCIgKTtcblxuXHRcdH0gKTtcblxuXHR9ICk7XG5cblxuXHRkZXNjcmliZSggXCJgc3RyaW5nZSggKCApID0+IHsgfSApYFwiLCAoICkgPT4ge1xuXHRcdGl0KCBcInNob3VsZCBiZSBlcXVhbCB0byAnKCApID0+IHsgfSdcIiwgKCApID0+IHtcblx0XHRcdC8vOiBAaWdub3JlOlxuLypcblx0XHRcdGxldCByZXN1bHQgPSBicm93c2VyLnVybCggYnJpZGdlVVJMICkuZXhlY3V0ZShcblxuXHRcdFx0XHRmdW5jdGlvbiggKXtcblx0XHRcdFx0XHRsZXQgcGF0dGVybiA9IC9cXChcXHMqXFwpXFxzKlxcPVxcPlxccypcXHtcXHMqXFx9Lztcblx0XHRcdFx0XHRsZXQgZGF0YSA9IHN0cmluZ2UoICggKSA9PiB7IH0gKTtcblx0XHRcdFx0XHRsZXQgdGVzdCA9IHBhdHRlcm4udGVzdCggZGF0YSApO1xuXHRcdFx0XHRcdHJldHVybiB0ZXN0O1xuXHRcdFx0XHR9XG5cblx0XHRcdCkudmFsdWU7XG5cblx0XHRcdGFzc2VydC5lcXVhbCggcmVzdWx0LCB0cnVlICk7XG5cdFx0XHQqL1xuLy86IEBlbmQtaWdub3JlXG5cdFx0fSApO1xuXHR9ICk7XG5cblxuXHRkZXNjcmliZSggXCJgc3RyaW5nZSggZnVuY3Rpb24gdGVzdCggKXsgcmV0dXJuICd0ZXN0JyB9IClgXCIsICggKSA9PiB7XG5cdFx0aXQoIFwic2hvdWxkIGJlIGVxdWFsIHRvICdmdW5jdGlvbiB0ZXN0KCApeyByZXR1cm4gJ3Rlc3QnIH0nXCIsICggKSA9PiB7XG5cdFx0XHQvLzogQGlnbm9yZTpcbi8qXG5cdFx0XHRsZXQgcmVzdWx0ID0gYnJvd3Nlci51cmwoIGJyaWRnZVVSTCApLmV4ZWN1dGUoXG5cblx0XHRcdFx0ZnVuY3Rpb24oICl7XG5cdFx0XHRcdFx0bGV0IHBhdHRlcm4gPSAvZnVuY3Rpb25cXHMrdGVzdFxccypcXChcXHMqXFwpXFxzKlxce1xccypyZXR1cm5cXHMrXFwndGVzdFxcJ1xccypcXH0vO1xuXHRcdFx0XHRcdGxldCBkYXRhID0gc3RyaW5nZSggZnVuY3Rpb24gdGVzdCggKXsgcmV0dXJuICd0ZXN0JyB9ICk7XG5cdFx0XHRcdFx0bGV0IHRlc3QgPSBwYXR0ZXJuLnRlc3QoIGRhdGEgKTtcblx0XHRcdFx0XHRyZXR1cm4gdGVzdDtcblx0XHRcdFx0fVxuXG5cdFx0XHQpLnZhbHVlO1xuXHRcdFx0Ki9cbi8vOiBAZW5kLWlnbm9yZVxuXHRcdFx0YXNzZXJ0LmVxdWFsKCByZXN1bHQsIHRydWUgKTtcblxuXHRcdH0gKTtcblx0fSApO1xuXG59ICk7XG5cbi8vOiBAZW5kLWJyaWRnZVxuIl19
//# sourceMappingURL=test.bridge.js.map
