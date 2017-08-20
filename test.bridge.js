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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInRlc3QuYnJpZGdlLmpzIl0sIm5hbWVzIjpbImFzc2VydCIsInJlcXVpcmUiLCJwYXRoIiwiZGVzY3JpYmUiLCJicmlkZ2VVUkwiLCJyZXNvbHZlIiwiX19kaXJuYW1lIiwiaXQiLCJyZXN1bHQiLCJicm93c2VyIiwidXJsIiwiZXhlY3V0ZSIsInN0cmluZ2UiLCJ3aW5kb3ciLCJlcXVhbCIsInZhbHVlIiwidW5kZWZpbmVkIiwiTmFOIiwiSW5maW5pdHkiLCJBcnJheSJdLCJtYXBwaW5ncyI6IkFBQUE7O0FBRUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUF1REEsSUFBTUEsU0FBU0MsUUFBUyxRQUFULENBQWY7Ozs7OztBQU1BO0FBQ0EsSUFBTUMsT0FBT0QsUUFBUyxNQUFULENBQWI7QUFDQTs7Ozs7Ozs7QUFRQTs7QUFFQUUsU0FBVSxTQUFWLEVBQXFCLFlBQU87O0FBRTNCLEtBQUlDLHdCQUF1QkYsS0FBS0csT0FBTCxDQUFjQyxTQUFkLEVBQXlCLGFBQXpCLENBQTNCOztBQUVBSCxVQUFVLHFCQUFWLEVBQWlDLFlBQU87O0FBRXZDSSxLQUFJLHNDQUFKLEVBQTRDLFlBQU87O0FBRWxELE9BQUlDLFNBQVNDLFFBQVFDLEdBQVIsQ0FBYU4sU0FBYixFQUF5Qk8sT0FBekIsQ0FBa0Msb0JBQU9DLFFBQVNDLE1BQVQsQ0FBUCxFQUFsQyxDQUFiOztBQUVBYixVQUFPYyxLQUFQLENBQWNOLE9BQU9PLEtBQXJCLEVBQTRCLGlCQUE1Qjs7QUFFQSxHQU5EOztBQVFBLEVBVkQ7OztBQWFBWixVQUFVLG1CQUFWLEVBQStCLFlBQU87O0FBRXJDSSxLQUFJLDJCQUFKLEVBQWlDLFlBQU87O0FBRXZDLE9BQUlDLFNBQVNDLFFBQVFDLEdBQVIsQ0FBYU4sU0FBYixFQUF5Qk8sT0FBekIsQ0FBa0Msb0JBQU9DLFFBQVMsSUFBVCxDQUFQLEVBQWxDLENBQWI7O0FBRUFaLFVBQU9jLEtBQVAsQ0FBY04sT0FBT08sS0FBckIsRUFBNEIsTUFBNUI7O0FBRUEsR0FORDs7QUFRQSxFQVZEOzs7QUFhQVosVUFBVSx3QkFBVixFQUFvQyxZQUFPOztBQUUxQ0ksS0FBSSxnQ0FBSixFQUFzQyxZQUFPOztBQUU1QyxPQUFJQyxTQUFTQyxRQUFRQyxHQUFSLENBQWFOLFNBQWIsRUFBeUJPLE9BQXpCLENBQWtDLG9CQUFPQyxRQUFTSSxTQUFULENBQVAsRUFBbEMsQ0FBYjs7QUFFQWhCLFVBQU9jLEtBQVAsQ0FBY04sT0FBT08sS0FBckIsRUFBNEIsV0FBNUI7O0FBRUEsR0FORDs7QUFRQSxFQVZEOzs7QUFhQVosVUFBVSxtQkFBVixFQUErQixZQUFPOztBQUVyQ0ksS0FBSSwyQkFBSixFQUFpQyxZQUFPOztBQUV2QyxPQUFJQyxTQUFTQyxRQUFRQyxHQUFSLENBQWFOLFNBQWIsRUFBeUJPLE9BQXpCLENBQWtDLG9CQUFPQyxRQUFTLElBQVQsQ0FBUCxFQUFsQyxDQUFiOztBQUVBWixVQUFPYyxLQUFQLENBQWNOLE9BQU9PLEtBQXJCLEVBQTRCLE1BQTVCOztBQUVBLEdBTkQ7O0FBUUEsRUFWRDs7O0FBYUFaLFVBQVUsa0JBQVYsRUFBOEIsWUFBTzs7QUFFcENJLEtBQUksMEJBQUosRUFBZ0MsWUFBTzs7QUFFdEMsT0FBSUMsU0FBU0MsUUFBUUMsR0FBUixDQUFhTixTQUFiLEVBQXlCTyxPQUF6QixDQUFrQyxvQkFBT0MsUUFBU0ssR0FBVCxDQUFQLEVBQWxDLENBQWI7O0FBRUFqQixVQUFPYyxLQUFQLENBQWNOLE9BQU9PLEtBQXJCLEVBQTRCLEtBQTVCOztBQUVBLEdBTkQ7O0FBUUEsRUFWRDs7O0FBYUFaLFVBQVUsdUJBQVYsRUFBbUMsWUFBTzs7QUFFekNJLEtBQUksK0JBQUosRUFBcUMsWUFBTzs7QUFFM0MsT0FBSUMsU0FBU0MsUUFBUUMsR0FBUixDQUFhTixTQUFiLEVBQXlCTyxPQUF6QixDQUFrQyxvQkFBT0MsUUFBU00sUUFBVCxDQUFQLEVBQWxDLENBQWI7O0FBRUFsQixVQUFPYyxLQUFQLENBQWNOLE9BQU9PLEtBQXJCLEVBQTRCLFVBQTVCOztBQUVBLEdBTkQ7O0FBUUEsRUFWRDs7O0FBYUFaLFVBQVUsb0JBQVYsRUFBZ0MsWUFBTzs7QUFFdENJLEtBQUkseURBQUosRUFBK0QsWUFBTzs7QUFFckUsT0FBSUMsU0FBU0MsUUFBUUMsR0FBUixDQUFhTixTQUFiLEVBQXlCTyxPQUF6QixDQUFrQyxvQkFBT0MsUUFBU08sS0FBVCxDQUFQLEVBQWxDLENBQWI7O0FBRUFuQixVQUFPYyxLQUFQLENBQWNOLE9BQU9PLEtBQXJCLEVBQTRCLG9DQUE1Qjs7QUFFQSxHQU5EOztBQVFBLEVBVkQ7OztBQWFBWixVQUFVLGtCQUFWLEVBQThCLFlBQU87O0FBRXBDSSxLQUFJLDBCQUFKLEVBQWdDLFlBQU87O0FBRXRDLE9BQUlDLFNBQVNDLFFBQVFDLEdBQVIsQ0FBYU4sU0FBYixFQUF5Qk8sT0FBekIsQ0FBa0Msb0JBQU9DLFFBQVMsR0FBVCxDQUFQLEVBQWxDLENBQWI7O0FBRUFaLFVBQU9jLEtBQVAsQ0FBY04sT0FBT08sS0FBckIsRUFBNEIsS0FBNUI7O0FBRUEsR0FORDs7QUFRQSxFQVZEOzs7QUFhQVosVUFBVSw0QkFBVixFQUF3QyxZQUFPOztBQUU5Q0ksS0FBSSxrQ0FBSixFQUF3QyxZQUFPOztBQUU5QyxPQUFJQyxTQUFTQyxRQUFRQyxHQUFSLENBQWFOLFNBQWIsRUFBeUJPLE9BQXpCLENBQWtDLG9CQUFPQyxRQUFTLGFBQVQsQ0FBUCxFQUFsQyxDQUFiOztBQUVBWixVQUFPYyxLQUFQLENBQWNOLE9BQU9PLEtBQXJCLEVBQTRCLGFBQTVCOztBQUVBLEdBTkQ7O0FBUUEsRUFWRDs7O0FBYUFaLFVBQVUsbUNBQVYsRUFBK0MsWUFBTzs7QUFFckRJLEtBQUksc0NBQUosRUFBNEMsWUFBTzs7QUFFbEQsT0FBSUMsU0FBU0MsUUFBUUMsR0FBUixDQUFhTixTQUFiLEVBQXlCTyxPQUF6QixDQUFrQyxvQkFBT0MsUUFBUyxFQUFFLFNBQVMsT0FBWCxFQUFULENBQVAsRUFBbEMsQ0FBYjs7QUFFQVosVUFBT2MsS0FBUCxDQUFjTixPQUFPTyxLQUFyQixFQUE0QixpQkFBNUI7O0FBRUEsR0FORDs7QUFRQSxFQVZEOzs7QUFhQVosVUFBVSx5QkFBVixFQUFxQyxZQUFPO0FBQzNDSSxLQUFJLGlDQUFKLEVBQXVDLFlBQU87QUFDN0M7QUFDSDs7Ozs7Ozs7Ozs7Ozs7QUFjQTtBQUNHLEdBakJEO0FBa0JBLEVBbkJEOzs7QUFzQkFKLFVBQVUsZ0RBQVYsRUFBNEQsWUFBTztBQUNsRUksS0FBSSx3REFBSixFQUE4RCxZQUFPO0FBQ3BFO0FBQ0g7Ozs7Ozs7Ozs7OztBQVlBO0FBQ0dQLFVBQU9jLEtBQVAsQ0FBY04sTUFBZCxFQUFzQixJQUF0Qjs7QUFFQSxHQWpCRDtBQWtCQSxFQW5CRDs7QUFxQkEsQ0FqTEQ7O0FBbUxBIiwiZmlsZSI6InRlc3QuYnJpZGdlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XHJcblxyXG4vKjtcclxuXHRAdGVzdC1saWNlbnNlOlxyXG5cdFx0VGhlIE1JVCBMaWNlbnNlIChNSVQpXHJcblx0XHRAbWl0LWxpY2Vuc2VcclxuXHJcblx0XHRDb3B5cmlnaHQgKEBjKSAyMDE3IFJpY2hldmUgU2lvZGluYSBCZWJlZG9yXHJcblx0XHRAZW1haWw6IHJpY2hldmUuYmViZWRvckBnbWFpbC5jb21cclxuXHJcblx0XHRQZXJtaXNzaW9uIGlzIGhlcmVieSBncmFudGVkLCBmcmVlIG9mIGNoYXJnZSwgdG8gYW55IHBlcnNvbiBvYnRhaW5pbmcgYSBjb3B5XHJcblx0XHRvZiB0aGlzIHNvZnR3YXJlIGFuZCBhc3NvY2lhdGVkIGRvY3VtZW50YXRpb24gZmlsZXMgKHRoZSBcIlNvZnR3YXJlXCIpLCB0byBkZWFsXHJcblx0XHRpbiB0aGUgU29mdHdhcmUgd2l0aG91dCByZXN0cmljdGlvbiwgaW5jbHVkaW5nIHdpdGhvdXQgbGltaXRhdGlvbiB0aGUgcmlnaHRzXHJcblx0XHR0byB1c2UsIGNvcHksIG1vZGlmeSwgbWVyZ2UsIHB1Ymxpc2gsIGRpc3RyaWJ1dGUsIHN1YmxpY2Vuc2UsIGFuZC9vciBzZWxsXHJcblx0XHRjb3BpZXMgb2YgdGhlIFNvZnR3YXJlLCBhbmQgdG8gcGVybWl0IHBlcnNvbnMgdG8gd2hvbSB0aGUgU29mdHdhcmUgaXNcclxuXHRcdGZ1cm5pc2hlZCB0byBkbyBzbywgc3ViamVjdCB0byB0aGUgZm9sbG93aW5nIGNvbmRpdGlvbnM6XHJcblxyXG5cdFx0VGhlIGFib3ZlIGNvcHlyaWdodCBub3RpY2UgYW5kIHRoaXMgcGVybWlzc2lvbiBub3RpY2Ugc2hhbGwgYmUgaW5jbHVkZWQgaW4gYWxsXHJcblx0XHRjb3BpZXMgb3Igc3Vic3RhbnRpYWwgcG9ydGlvbnMgb2YgdGhlIFNvZnR3YXJlLlxyXG5cclxuXHRcdFRIRSBTT0ZUV0FSRSBJUyBQUk9WSURFRCBcIkFTIElTXCIsIFdJVEhPVVQgV0FSUkFOVFkgT0YgQU5ZIEtJTkQsIEVYUFJFU1MgT1JcclxuXHRcdElNUExJRUQsIElOQ0xVRElORyBCVVQgTk9UIExJTUlURUQgVE8gVEhFIFdBUlJBTlRJRVMgT0YgTUVSQ0hBTlRBQklMSVRZLFxyXG5cdFx0RklUTkVTUyBGT1IgQSBQQVJUSUNVTEFSIFBVUlBPU0UgQU5EIE5PTklORlJJTkdFTUVOVC4gSU4gTk8gRVZFTlQgU0hBTEwgVEhFXHJcblx0XHRBVVRIT1JTIE9SIENPUFlSSUdIVCBIT0xERVJTIEJFIExJQUJMRSBGT1IgQU5ZIENMQUlNLCBEQU1BR0VTIE9SIE9USEVSXHJcblx0XHRMSUFCSUxJVFksIFdIRVRIRVIgSU4gQU4gQUNUSU9OIE9GIENPTlRSQUNULCBUT1JUIE9SIE9USEVSV0lTRSwgQVJJU0lORyBGUk9NLFxyXG5cdFx0T1VUIE9GIE9SIElOIENPTk5FQ1RJT04gV0lUSCBUSEUgU09GVFdBUkUgT1IgVEhFIFVTRSBPUiBPVEhFUiBERUFMSU5HUyBJTiBUSEVcclxuXHRcdFNPRlRXQVJFLlxyXG5cdEBlbmQtdGVzdC1saWNlbnNlXHJcblxyXG5cdEB0ZXN0LWNvbmZpZ3VyYXRpb246XHJcblx0XHR7XHJcblx0XHRcdFwicGFja2FnZVwiOiBcInN0cmluZ2VcIixcclxuXHRcdFx0XCJwYXRoXCI6IFwic3RyaW5nZS90ZXN0Lm1vZHVsZS5qc1wiLFxyXG5cdFx0XHRcImZpbGVcIjogXCJ0ZXN0Lm1vZHVsZS5qc1wiLFxyXG5cdFx0XHRcIm1vZHVsZVwiOiBcInRlc3RcIixcclxuXHRcdFx0XCJhdXRob3JcIjogXCJSaWNoZXZlIFMuIEJlYmVkb3JcIixcclxuXHRcdFx0XCJlTWFpbFwiOiBcInJpY2hldmUuYmViZWRvckBnbWFpbC5jb21cIixcclxuXHRcdFx0XCJjb250cmlidXRvcnNcIjogW1xyXG5cdFx0XHRcdFwiSm9obiBMZW5vbiBNYWdoYW5veSA8am9obmxlbm9ubWFnaGFub3lAZ21haWwuY29tPlwiLFxyXG5cdFx0XHRcdFwiVmluc2UgVmluYWxvbiA8dmluc2V2aW5hbG9uQGdtYWlsLmNvbT5cIlxyXG5cdFx0XHRdLFxyXG5cdFx0XHRcInJlcG9zaXRvcnlcIjogXCJodHRwczovL2dpdGh1Yi5jb20vdm9sa292YXN5c3RlbXMvbnVtcmljLmdpdFwiXHJcblx0XHR9XHJcblx0QGVuZC10ZXN0LWNvbmZpZ3VyYXRpb25cclxuXHJcblx0QHRlc3QtZG9jdW1lbnRhdGlvbjpcclxuXHJcblx0QGVuZC10ZXN0LWRvY3VtZW50YXRpb25cclxuXHJcblx0QGluY2x1ZGU6XHJcblx0XHR7XHJcblx0XHRcdFwiYXNzZXJ0XCI6IFwic2hvdWxkXCIsXHJcblx0XHRcdFwic3RyaW5nZVwiOiBcInN0cmluZ2VcIlxyXG5cdFx0fVxyXG5cdEBlbmQtaW5jbHVkZVxyXG4qL1xyXG5cclxuY29uc3QgYXNzZXJ0ID0gcmVxdWlyZSggXCJzaG91bGRcIiApO1xyXG5cclxuXHJcblxyXG5cclxuXHJcbi8vOiBAYnJpZGdlOlxyXG5jb25zdCBwYXRoID0gcmVxdWlyZSggXCJwYXRoXCIgKTtcclxuLy86IEBlbmQtYnJpZGdlXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG4vLzogQGJyaWRnZTpcclxuXHJcbmRlc2NyaWJlKCBcInN0cmluZ2VcIiwgKCApID0+IHtcclxuXHJcblx0bGV0IGJyaWRnZVVSTCA9IGBmaWxlOi8vJHsgcGF0aC5yZXNvbHZlKCBfX2Rpcm5hbWUsIFwiYnJpZGdlLmh0bWxcIiApIH1gO1xyXG5cclxuXHRkZXNjcmliZSggXCJgc3RyaW5nZSggd2luZG93IClgXCIsICggKSA9PiB7XHJcblxyXG5cdFx0aXQoIFwic2hvdWxkIGJlIGVxdWFsIHRvICdbb2JqZWN0IFdpbmRvd10nXCIsICggKSA9PiB7XHJcblxyXG5cdFx0XHRsZXQgcmVzdWx0ID0gYnJvd3Nlci51cmwoIGJyaWRnZVVSTCApLmV4ZWN1dGUoICggKSA9PiBzdHJpbmdlKCB3aW5kb3cgKSApO1xyXG5cclxuXHRcdFx0YXNzZXJ0LmVxdWFsKCByZXN1bHQudmFsdWUsIFwiW29iamVjdCBXaW5kb3ddXCIgKTtcclxuXHJcblx0XHR9ICk7XHJcblxyXG5cdH0gKTtcclxuXHJcblxyXG5cdGRlc2NyaWJlKCBcImBzdHJpbmdlKCB0cnVlIClgXCIsICggKSA9PiB7XHJcblxyXG5cdFx0aXQoIFwic2hvdWxkIGJlIGVxdWFsIHRvICd0cnVlJ1wiLCAoICkgPT4ge1xyXG5cclxuXHRcdFx0bGV0IHJlc3VsdCA9IGJyb3dzZXIudXJsKCBicmlkZ2VVUkwgKS5leGVjdXRlKCAoICkgPT4gc3RyaW5nZSggdHJ1ZSApICk7XHJcblxyXG5cdFx0XHRhc3NlcnQuZXF1YWwoIHJlc3VsdC52YWx1ZSwgXCJ0cnVlXCIgKTtcclxuXHJcblx0XHR9ICk7XHJcblxyXG5cdH0gKTtcclxuXHJcblxyXG5cdGRlc2NyaWJlKCBcImBzdHJpbmdlKCB1bmRlZmluZWQgKWBcIiwgKCApID0+IHtcclxuXHJcblx0XHRpdCggXCJzaG91bGQgYmUgZXF1YWwgdG8gJ3VuZGVmaW5lZCdcIiwgKCApID0+IHtcclxuXHJcblx0XHRcdGxldCByZXN1bHQgPSBicm93c2VyLnVybCggYnJpZGdlVVJMICkuZXhlY3V0ZSggKCApID0+IHN0cmluZ2UoIHVuZGVmaW5lZCApICk7XHJcblxyXG5cdFx0XHRhc3NlcnQuZXF1YWwoIHJlc3VsdC52YWx1ZSwgXCJ1bmRlZmluZWRcIiApO1xyXG5cclxuXHRcdH0gKTtcclxuXHJcblx0fSApO1xyXG5cclxuXHJcblx0ZGVzY3JpYmUoIFwiYHN0cmluZ2UoIG51bGwgKWBcIiwgKCApID0+IHtcclxuXHJcblx0XHRpdCggXCJzaG91bGQgYmUgZXF1YWwgdG8gJ251bGwnXCIsICggKSA9PiB7XHJcblxyXG5cdFx0XHRsZXQgcmVzdWx0ID0gYnJvd3Nlci51cmwoIGJyaWRnZVVSTCApLmV4ZWN1dGUoICggKSA9PiBzdHJpbmdlKCBudWxsICkgKTtcclxuXHJcblx0XHRcdGFzc2VydC5lcXVhbCggcmVzdWx0LnZhbHVlLCBcIm51bGxcIiApO1xyXG5cclxuXHRcdH0gKTtcclxuXHJcblx0fSApO1xyXG5cclxuXHJcblx0ZGVzY3JpYmUoIFwiYHN0cmluZ2UoIE5hTiApYFwiLCAoICkgPT4ge1xyXG5cclxuXHRcdGl0KCBcInNob3VsZCBiZSBlcXVhbCB0byAnTmFOJ1wiLCAoICkgPT4ge1xyXG5cclxuXHRcdFx0bGV0IHJlc3VsdCA9IGJyb3dzZXIudXJsKCBicmlkZ2VVUkwgKS5leGVjdXRlKCAoICkgPT4gc3RyaW5nZSggTmFOICkgKTtcclxuXHJcblx0XHRcdGFzc2VydC5lcXVhbCggcmVzdWx0LnZhbHVlLCBcIk5hTlwiICk7XHJcblxyXG5cdFx0fSApO1xyXG5cclxuXHR9ICk7XHJcblxyXG5cclxuXHRkZXNjcmliZSggXCJgc3RyaW5nZSggSW5maW5pdHkgKWBcIiwgKCApID0+IHtcclxuXHJcblx0XHRpdCggXCJzaG91bGQgYmUgZXF1YWwgdG8gJ0luZmluaXR5J1wiLCAoICkgPT4ge1xyXG5cclxuXHRcdFx0bGV0IHJlc3VsdCA9IGJyb3dzZXIudXJsKCBicmlkZ2VVUkwgKS5leGVjdXRlKCAoICkgPT4gc3RyaW5nZSggSW5maW5pdHkgKSApO1xyXG5cclxuXHRcdFx0YXNzZXJ0LmVxdWFsKCByZXN1bHQudmFsdWUsIFwiSW5maW5pdHlcIiApO1xyXG5cclxuXHRcdH0gKTtcclxuXHJcblx0fSApO1xyXG5cclxuXHJcblx0ZGVzY3JpYmUoIFwiYHN0cmluZ2UoIEFycmF5IClgXCIsICggKSA9PiB7XHJcblxyXG5cdFx0aXQoIFwic2hvdWxkIGJlIGVxdWFsIHRvICdmdW5jdGlvbiBBcnJheSgpIHsgW25hdGl2ZSBjb2RlXSB9J1wiLCAoICkgPT4ge1xyXG5cclxuXHRcdFx0bGV0IHJlc3VsdCA9IGJyb3dzZXIudXJsKCBicmlkZ2VVUkwgKS5leGVjdXRlKCAoICkgPT4gc3RyaW5nZSggQXJyYXkgKSApO1xyXG5cclxuXHRcdFx0YXNzZXJ0LmVxdWFsKCByZXN1bHQudmFsdWUsIFwiZnVuY3Rpb24gQXJyYXkoKSB7IFtuYXRpdmUgY29kZV0gfVwiICk7XHJcblxyXG5cdFx0fSApO1xyXG5cclxuXHR9ICk7XHJcblxyXG5cclxuXHRkZXNjcmliZSggXCJgc3RyaW5nZSggMTIzIClgXCIsICggKSA9PiB7XHJcblxyXG5cdFx0aXQoIFwic2hvdWxkIGJlIGVxdWFsIHRvICcxMjMnXCIsICggKSA9PiB7XHJcblxyXG5cdFx0XHRsZXQgcmVzdWx0ID0gYnJvd3Nlci51cmwoIGJyaWRnZVVSTCApLmV4ZWN1dGUoICggKSA9PiBzdHJpbmdlKCAxMjMgKSApO1xyXG5cclxuXHRcdFx0YXNzZXJ0LmVxdWFsKCByZXN1bHQudmFsdWUsIFwiMTIzXCIgKTtcclxuXHJcblx0XHR9ICk7XHJcblxyXG5cdH0gKTtcclxuXHJcblxyXG5cdGRlc2NyaWJlKCBcImBzdHJpbmdlKCAnaGVsbG8gd29ybGQnIClgXCIsICggKSA9PiB7XHJcblxyXG5cdFx0aXQoIFwic2hvdWxkIGJlIGVxdWFsIHRvICdoZWxsbyB3b3JsZCdcIiwgKCApID0+IHtcclxuXHJcblx0XHRcdGxldCByZXN1bHQgPSBicm93c2VyLnVybCggYnJpZGdlVVJMICkuZXhlY3V0ZSggKCApID0+IHN0cmluZ2UoIFwiaGVsbG8gd29ybGRcIiApICk7XHJcblxyXG5cdFx0XHRhc3NlcnQuZXF1YWwoIHJlc3VsdC52YWx1ZSwgXCJoZWxsbyB3b3JsZFwiICk7XHJcblxyXG5cdFx0fSApO1xyXG5cclxuXHR9ICk7XHJcblxyXG5cclxuXHRkZXNjcmliZSggXCJgc3RyaW5nZSggeyAnaGVsbG8nOiAnd29ybGQnIH0gKWBcIiwgKCApID0+IHtcclxuXHJcblx0XHRpdCggXCJzaG91bGQgYmUgZXF1YWwgdG8gJ1tvYmplY3QgT2JqZWN0XSdcIiwgKCApID0+IHtcclxuXHJcblx0XHRcdGxldCByZXN1bHQgPSBicm93c2VyLnVybCggYnJpZGdlVVJMICkuZXhlY3V0ZSggKCApID0+IHN0cmluZ2UoIHsgXCJoZWxsb1wiOiBcIndvcmxkXCIgfSApICk7XHJcblxyXG5cdFx0XHRhc3NlcnQuZXF1YWwoIHJlc3VsdC52YWx1ZSwgXCJbb2JqZWN0IE9iamVjdF1cIiApO1xyXG5cclxuXHRcdH0gKTtcclxuXHJcblx0fSApO1xyXG5cclxuXHJcblx0ZGVzY3JpYmUoIFwiYHN0cmluZ2UoICggKSA9PiB7IH0gKWBcIiwgKCApID0+IHtcclxuXHRcdGl0KCBcInNob3VsZCBiZSBlcXVhbCB0byAnKCApID0+IHsgfSdcIiwgKCApID0+IHtcclxuXHRcdFx0Ly86IEBpZ25vcmU6XG4vKlxyXG5cdFx0XHRsZXQgcmVzdWx0ID0gYnJvd3Nlci51cmwoIGJyaWRnZVVSTCApLmV4ZWN1dGUoXHJcblxyXG5cdFx0XHRcdGZ1bmN0aW9uKCApe1xyXG5cdFx0XHRcdFx0bGV0IHBhdHRlcm4gPSAvXFwoXFxzKlxcKVxccypcXD1cXD5cXHMqXFx7XFxzKlxcfS87XHJcblx0XHRcdFx0XHRsZXQgZGF0YSA9IHN0cmluZ2UoICggKSA9PiB7IH0gKTtcclxuXHRcdFx0XHRcdGxldCB0ZXN0ID0gcGF0dGVybi50ZXN0KCBkYXRhICk7XHJcblx0XHRcdFx0XHRyZXR1cm4gdGVzdDtcclxuXHRcdFx0XHR9XHJcblxyXG5cdFx0XHQpLnZhbHVlO1xyXG5cclxuXHRcdFx0YXNzZXJ0LmVxdWFsKCByZXN1bHQsIHRydWUgKTtcclxuXHRcdFx0Ki9cbi8vOiBAZW5kLWlnbm9yZVxyXG5cdFx0fSApO1xyXG5cdH0gKTtcclxuXHJcblxyXG5cdGRlc2NyaWJlKCBcImBzdHJpbmdlKCBmdW5jdGlvbiB0ZXN0KCApeyByZXR1cm4gJ3Rlc3QnIH0gKWBcIiwgKCApID0+IHtcclxuXHRcdGl0KCBcInNob3VsZCBiZSBlcXVhbCB0byAnZnVuY3Rpb24gdGVzdCggKXsgcmV0dXJuICd0ZXN0JyB9J1wiLCAoICkgPT4ge1xyXG5cdFx0XHQvLzogQGlnbm9yZTpcbi8qXHJcblx0XHRcdGxldCByZXN1bHQgPSBicm93c2VyLnVybCggYnJpZGdlVVJMICkuZXhlY3V0ZShcclxuXHJcblx0XHRcdFx0ZnVuY3Rpb24oICl7XHJcblx0XHRcdFx0XHRsZXQgcGF0dGVybiA9IC9mdW5jdGlvblxccyt0ZXN0XFxzKlxcKFxccypcXClcXHMqXFx7XFxzKnJldHVyblxccytcXCd0ZXN0XFwnXFxzKlxcfS87XHJcblx0XHRcdFx0XHRsZXQgZGF0YSA9IHN0cmluZ2UoIGZ1bmN0aW9uIHRlc3QoICl7IHJldHVybiAndGVzdCcgfSApO1xyXG5cdFx0XHRcdFx0bGV0IHRlc3QgPSBwYXR0ZXJuLnRlc3QoIGRhdGEgKTtcclxuXHRcdFx0XHRcdHJldHVybiB0ZXN0O1xyXG5cdFx0XHRcdH1cclxuXHJcblx0XHRcdCkudmFsdWU7XHJcblx0XHRcdCovXG4vLzogQGVuZC1pZ25vcmVcclxuXHRcdFx0YXNzZXJ0LmVxdWFsKCByZXN1bHQsIHRydWUgKTtcclxuXHJcblx0XHR9ICk7XHJcblx0fSApO1xyXG5cclxufSApO1xyXG5cclxuLy86IEBlbmQtYnJpZGdlXHJcbiJdfQ==
//# sourceMappingURL=test.bridge.js.map
