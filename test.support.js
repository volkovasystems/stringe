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



//: @client:
var stringe = require("./stringe.support.js");
//: @end-client







//: @client:

describe("stringe", function () {

	describe("`stringe( window )`", function () {

		it("should be equal to '[object Window]'", function () {

			assert.equal(stringe(window), "[object Window]");

		});

	});


	describe("`stringe( true )`", function () {

		it("should be equal to 'true'", function () {

			assert.equal(stringe(true), "true");

		});

	});


	describe("`stringe( undefined )`", function () {

		it("should be equal to 'undefined'", function () {

			assert.equal(stringe(undefined), "undefined");

		});

	});


	describe("`stringe( null )`", function () {

		it("should be equal to 'null'", function () {

			assert.equal(stringe(null), "null");

		});

	});


	describe("`stringe( NaN )`", function () {

		it("should be equal to 'NaN'", function () {

			assert.equal(stringe(NaN), "NaN");

		});

	});


	describe("`stringe( Infinity )`", function () {

		it("should be equal to 'Infinity'", function () {

			assert.equal(stringe(Infinity), "Infinity");

		});

	});


	describe("`stringe( Array )`", function () {

		it("should be equal to 'function Array() { [native code] }'", function () {

			assert.equal(stringe(Array), "function Array() { [native code] }");

		});

	});


	describe("`stringe( 123 )`", function () {

		it("should be equal to '123'", function () {

			assert.equal(stringe(123), "123");

		});

	});


	describe("`stringe( 'hello world' )`", function () {

		it("should be equal to 'hello world'", function () {

			assert.equal(stringe("hello world"), "hello world");

		});

	});


	describe("`stringe( { 'hello': 'world' } )`", function () {

		it("should be equal to '[object Object]'", function () {

			assert.equal(stringe({ "hello": "world" }), "[object Object]");

		});

	});


	describe("`stringe( ( ) => { } )`", function () {
		it("should be equal to '( ) => { }'", function () {
			//: @ignore:
			var pattern = /\(\s*\)\s*\=\>\s*\{\s*\}/;
			var data = stringe(function () {});
			var test = pattern.test(data);
			//: @end-ignore
			assert.equal(test, true);

		});
	});


	describe("`stringe( function test( ){ return 'test' } )`", function () {
		it("should be equal to 'function test( ){ return 'test' }'", function () {
			//: @ignore:
			var pattern = /function\s+test\s*\(\s*\)\s*\{\s*return\s+\'test\'\s*\}/;
			var data = stringe(function test() {return 'test';});
			var test = pattern.test(data);
			//: @end-ignore
			assert.equal(test, true);

		});
	});

});

//: @end-client
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInRlc3Quc3VwcG9ydC5qcyJdLCJuYW1lcyI6WyJhc3NlcnQiLCJyZXF1aXJlIiwic3RyaW5nZSIsImRlc2NyaWJlIiwiaXQiLCJlcXVhbCIsIndpbmRvdyIsInVuZGVmaW5lZCIsIk5hTiIsIkluZmluaXR5IiwiQXJyYXkiLCJwYXR0ZXJuIiwiZGF0YSIsInRlc3QiXSwibWFwcGluZ3MiOiJBQUFBOztBQUVBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBdURBLElBQU1BLFNBQVNDLFFBQVMsUUFBVCxDQUFmOzs7O0FBSUE7QUFDQSxJQUFNQyxVQUFVRCxRQUFTLHNCQUFULENBQWhCO0FBQ0E7Ozs7Ozs7O0FBUUE7O0FBRUFFLFNBQVUsU0FBVixFQUFxQixZQUFPOztBQUUzQkEsVUFBVSxxQkFBVixFQUFpQyxZQUFPOztBQUV2Q0MsS0FBSSxzQ0FBSixFQUE0QyxZQUFPOztBQUVsREosVUFBT0ssS0FBUCxDQUFjSCxRQUFTSSxNQUFULENBQWQsRUFBaUMsaUJBQWpDOztBQUVBLEdBSkQ7O0FBTUEsRUFSRDs7O0FBV0FILFVBQVUsbUJBQVYsRUFBK0IsWUFBTzs7QUFFckNDLEtBQUksMkJBQUosRUFBaUMsWUFBTzs7QUFFdkNKLFVBQU9LLEtBQVAsQ0FBY0gsUUFBUyxJQUFULENBQWQsRUFBK0IsTUFBL0I7O0FBRUEsR0FKRDs7QUFNQSxFQVJEOzs7QUFXQUMsVUFBVSx3QkFBVixFQUFvQyxZQUFPOztBQUUxQ0MsS0FBSSxnQ0FBSixFQUFzQyxZQUFPOztBQUU1Q0osVUFBT0ssS0FBUCxDQUFjSCxRQUFTSyxTQUFULENBQWQsRUFBb0MsV0FBcEM7O0FBRUEsR0FKRDs7QUFNQSxFQVJEOzs7QUFXQUosVUFBVSxtQkFBVixFQUErQixZQUFPOztBQUVyQ0MsS0FBSSwyQkFBSixFQUFpQyxZQUFPOztBQUV2Q0osVUFBT0ssS0FBUCxDQUFjSCxRQUFTLElBQVQsQ0FBZCxFQUErQixNQUEvQjs7QUFFQSxHQUpEOztBQU1BLEVBUkQ7OztBQVdBQyxVQUFVLGtCQUFWLEVBQThCLFlBQU87O0FBRXBDQyxLQUFJLDBCQUFKLEVBQWdDLFlBQU87O0FBRXRDSixVQUFPSyxLQUFQLENBQWNILFFBQVNNLEdBQVQsQ0FBZCxFQUE4QixLQUE5Qjs7QUFFQSxHQUpEOztBQU1BLEVBUkQ7OztBQVdBTCxVQUFVLHVCQUFWLEVBQW1DLFlBQU87O0FBRXpDQyxLQUFJLCtCQUFKLEVBQXFDLFlBQU87O0FBRTNDSixVQUFPSyxLQUFQLENBQWNILFFBQVNPLFFBQVQsQ0FBZCxFQUFtQyxVQUFuQzs7QUFFQSxHQUpEOztBQU1BLEVBUkQ7OztBQVdBTixVQUFVLG9CQUFWLEVBQWdDLFlBQU87O0FBRXRDQyxLQUFJLHlEQUFKLEVBQStELFlBQU87O0FBRXJFSixVQUFPSyxLQUFQLENBQWNILFFBQVNRLEtBQVQsQ0FBZCxFQUFnQyxvQ0FBaEM7O0FBRUEsR0FKRDs7QUFNQSxFQVJEOzs7QUFXQVAsVUFBVSxrQkFBVixFQUE4QixZQUFPOztBQUVwQ0MsS0FBSSwwQkFBSixFQUFnQyxZQUFPOztBQUV0Q0osVUFBT0ssS0FBUCxDQUFjSCxRQUFTLEdBQVQsQ0FBZCxFQUE4QixLQUE5Qjs7QUFFQSxHQUpEOztBQU1BLEVBUkQ7OztBQVdBQyxVQUFVLDRCQUFWLEVBQXdDLFlBQU87O0FBRTlDQyxLQUFJLGtDQUFKLEVBQXdDLFlBQU87O0FBRTlDSixVQUFPSyxLQUFQLENBQWNILFFBQVMsYUFBVCxDQUFkLEVBQXdDLGFBQXhDOztBQUVBLEdBSkQ7O0FBTUEsRUFSRDs7O0FBV0FDLFVBQVUsbUNBQVYsRUFBK0MsWUFBTzs7QUFFckRDLEtBQUksc0NBQUosRUFBNEMsWUFBTzs7QUFFbERKLFVBQU9LLEtBQVAsQ0FBY0gsUUFBUyxFQUFFLFNBQVMsT0FBWCxFQUFULENBQWQsRUFBK0MsaUJBQS9DOztBQUVBLEdBSkQ7O0FBTUEsRUFSRDs7O0FBV0FDLFVBQVUseUJBQVYsRUFBcUMsWUFBTztBQUMzQ0MsS0FBSSxpQ0FBSixFQUF1QyxZQUFPO0FBQzdDO0FBQ0EsT0FBSU8sVUFBVSwwQkFBZDtBQUNBLE9BQUlDLE9BQU9WLFFBQVMsWUFBTyxDQUFHLENBQW5CLENBQVg7QUFDQSxPQUFJVyxPQUFPRixRQUFRRSxJQUFSLENBQWNELElBQWQsQ0FBWDtBQUNBO0FBQ0FaLFVBQU9LLEtBQVAsQ0FBY1EsSUFBZCxFQUFvQixJQUFwQjs7QUFFQSxHQVJEO0FBU0EsRUFWRDs7O0FBYUFWLFVBQVUsZ0RBQVYsRUFBNEQsWUFBTztBQUNsRUMsS0FBSSx3REFBSixFQUE4RCxZQUFPO0FBQ3BFO0FBQ0EsT0FBSU8sVUFBVSx5REFBZDtBQUNBLE9BQUlDLE9BQU9WLFFBQVMsU0FBU1csSUFBVCxHQUFnQixDQUFFLE9BQU8sTUFBUCxDQUFlLENBQTFDLENBQVg7QUFDQSxPQUFJQSxPQUFPRixRQUFRRSxJQUFSLENBQWNELElBQWQsQ0FBWDtBQUNBO0FBQ0FaLFVBQU9LLEtBQVAsQ0FBY1EsSUFBZCxFQUFvQixJQUFwQjs7QUFFQSxHQVJEO0FBU0EsRUFWRDs7QUFZQSxDQXpJRDs7QUEySUEiLCJmaWxlIjoidGVzdC5zdXBwb3J0LmpzIiwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XHJcblxyXG4vKjtcclxuXHRAdGVzdC1saWNlbnNlOlxyXG5cdFx0VGhlIE1JVCBMaWNlbnNlIChNSVQpXHJcblx0XHRAbWl0LWxpY2Vuc2VcclxuXHJcblx0XHRDb3B5cmlnaHQgKEBjKSAyMDE3IFJpY2hldmUgU2lvZGluYSBCZWJlZG9yXHJcblx0XHRAZW1haWw6IHJpY2hldmUuYmViZWRvckBnbWFpbC5jb21cclxuXHJcblx0XHRQZXJtaXNzaW9uIGlzIGhlcmVieSBncmFudGVkLCBmcmVlIG9mIGNoYXJnZSwgdG8gYW55IHBlcnNvbiBvYnRhaW5pbmcgYSBjb3B5XHJcblx0XHRvZiB0aGlzIHNvZnR3YXJlIGFuZCBhc3NvY2lhdGVkIGRvY3VtZW50YXRpb24gZmlsZXMgKHRoZSBcIlNvZnR3YXJlXCIpLCB0byBkZWFsXHJcblx0XHRpbiB0aGUgU29mdHdhcmUgd2l0aG91dCByZXN0cmljdGlvbiwgaW5jbHVkaW5nIHdpdGhvdXQgbGltaXRhdGlvbiB0aGUgcmlnaHRzXHJcblx0XHR0byB1c2UsIGNvcHksIG1vZGlmeSwgbWVyZ2UsIHB1Ymxpc2gsIGRpc3RyaWJ1dGUsIHN1YmxpY2Vuc2UsIGFuZC9vciBzZWxsXHJcblx0XHRjb3BpZXMgb2YgdGhlIFNvZnR3YXJlLCBhbmQgdG8gcGVybWl0IHBlcnNvbnMgdG8gd2hvbSB0aGUgU29mdHdhcmUgaXNcclxuXHRcdGZ1cm5pc2hlZCB0byBkbyBzbywgc3ViamVjdCB0byB0aGUgZm9sbG93aW5nIGNvbmRpdGlvbnM6XHJcblxyXG5cdFx0VGhlIGFib3ZlIGNvcHlyaWdodCBub3RpY2UgYW5kIHRoaXMgcGVybWlzc2lvbiBub3RpY2Ugc2hhbGwgYmUgaW5jbHVkZWQgaW4gYWxsXHJcblx0XHRjb3BpZXMgb3Igc3Vic3RhbnRpYWwgcG9ydGlvbnMgb2YgdGhlIFNvZnR3YXJlLlxyXG5cclxuXHRcdFRIRSBTT0ZUV0FSRSBJUyBQUk9WSURFRCBcIkFTIElTXCIsIFdJVEhPVVQgV0FSUkFOVFkgT0YgQU5ZIEtJTkQsIEVYUFJFU1MgT1JcclxuXHRcdElNUExJRUQsIElOQ0xVRElORyBCVVQgTk9UIExJTUlURUQgVE8gVEhFIFdBUlJBTlRJRVMgT0YgTUVSQ0hBTlRBQklMSVRZLFxyXG5cdFx0RklUTkVTUyBGT1IgQSBQQVJUSUNVTEFSIFBVUlBPU0UgQU5EIE5PTklORlJJTkdFTUVOVC4gSU4gTk8gRVZFTlQgU0hBTEwgVEhFXHJcblx0XHRBVVRIT1JTIE9SIENPUFlSSUdIVCBIT0xERVJTIEJFIExJQUJMRSBGT1IgQU5ZIENMQUlNLCBEQU1BR0VTIE9SIE9USEVSXHJcblx0XHRMSUFCSUxJVFksIFdIRVRIRVIgSU4gQU4gQUNUSU9OIE9GIENPTlRSQUNULCBUT1JUIE9SIE9USEVSV0lTRSwgQVJJU0lORyBGUk9NLFxyXG5cdFx0T1VUIE9GIE9SIElOIENPTk5FQ1RJT04gV0lUSCBUSEUgU09GVFdBUkUgT1IgVEhFIFVTRSBPUiBPVEhFUiBERUFMSU5HUyBJTiBUSEVcclxuXHRcdFNPRlRXQVJFLlxyXG5cdEBlbmQtdGVzdC1saWNlbnNlXHJcblxyXG5cdEB0ZXN0LWNvbmZpZ3VyYXRpb246XHJcblx0XHR7XHJcblx0XHRcdFwicGFja2FnZVwiOiBcInN0cmluZ2VcIixcclxuXHRcdFx0XCJwYXRoXCI6IFwic3RyaW5nZS90ZXN0Lm1vZHVsZS5qc1wiLFxyXG5cdFx0XHRcImZpbGVcIjogXCJ0ZXN0Lm1vZHVsZS5qc1wiLFxyXG5cdFx0XHRcIm1vZHVsZVwiOiBcInRlc3RcIixcclxuXHRcdFx0XCJhdXRob3JcIjogXCJSaWNoZXZlIFMuIEJlYmVkb3JcIixcclxuXHRcdFx0XCJlTWFpbFwiOiBcInJpY2hldmUuYmViZWRvckBnbWFpbC5jb21cIixcclxuXHRcdFx0XCJjb250cmlidXRvcnNcIjogW1xyXG5cdFx0XHRcdFwiSm9obiBMZW5vbiBNYWdoYW5veSA8am9obmxlbm9ubWFnaGFub3lAZ21haWwuY29tPlwiLFxyXG5cdFx0XHRcdFwiVmluc2UgVmluYWxvbiA8dmluc2V2aW5hbG9uQGdtYWlsLmNvbT5cIlxyXG5cdFx0XHRdLFxyXG5cdFx0XHRcInJlcG9zaXRvcnlcIjogXCJodHRwczovL2dpdGh1Yi5jb20vdm9sa292YXN5c3RlbXMvbnVtcmljLmdpdFwiXHJcblx0XHR9XHJcblx0QGVuZC10ZXN0LWNvbmZpZ3VyYXRpb25cclxuXHJcblx0QHRlc3QtZG9jdW1lbnRhdGlvbjpcclxuXHJcblx0QGVuZC10ZXN0LWRvY3VtZW50YXRpb25cclxuXHJcblx0QGluY2x1ZGU6XHJcblx0XHR7XHJcblx0XHRcdFwiYXNzZXJ0XCI6IFwic2hvdWxkXCIsXHJcblx0XHRcdFwic3RyaW5nZVwiOiBcInN0cmluZ2VcIlxyXG5cdFx0fVxyXG5cdEBlbmQtaW5jbHVkZVxyXG4qL1xyXG5cclxuY29uc3QgYXNzZXJ0ID0gcmVxdWlyZSggXCJzaG91bGRcIiApO1xyXG5cclxuXHJcblxyXG4vLzogQGNsaWVudDpcclxuY29uc3Qgc3RyaW5nZSA9IHJlcXVpcmUoIFwiLi9zdHJpbmdlLnN1cHBvcnQuanNcIiApO1xyXG4vLzogQGVuZC1jbGllbnRcclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcbi8vOiBAY2xpZW50OlxyXG5cclxuZGVzY3JpYmUoIFwic3RyaW5nZVwiLCAoICkgPT4ge1xyXG5cclxuXHRkZXNjcmliZSggXCJgc3RyaW5nZSggd2luZG93IClgXCIsICggKSA9PiB7XHJcblxyXG5cdFx0aXQoIFwic2hvdWxkIGJlIGVxdWFsIHRvICdbb2JqZWN0IFdpbmRvd10nXCIsICggKSA9PiB7XHJcblxyXG5cdFx0XHRhc3NlcnQuZXF1YWwoIHN0cmluZ2UoIHdpbmRvdyApLCBcIltvYmplY3QgV2luZG93XVwiICk7XHJcblxyXG5cdFx0fSApO1xyXG5cclxuXHR9ICk7XHJcblxyXG5cclxuXHRkZXNjcmliZSggXCJgc3RyaW5nZSggdHJ1ZSApYFwiLCAoICkgPT4ge1xyXG5cclxuXHRcdGl0KCBcInNob3VsZCBiZSBlcXVhbCB0byAndHJ1ZSdcIiwgKCApID0+IHtcclxuXHJcblx0XHRcdGFzc2VydC5lcXVhbCggc3RyaW5nZSggdHJ1ZSApLCBcInRydWVcIiApO1xyXG5cclxuXHRcdH0gKTtcclxuXHJcblx0fSApO1xyXG5cclxuXHJcblx0ZGVzY3JpYmUoIFwiYHN0cmluZ2UoIHVuZGVmaW5lZCApYFwiLCAoICkgPT4ge1xyXG5cclxuXHRcdGl0KCBcInNob3VsZCBiZSBlcXVhbCB0byAndW5kZWZpbmVkJ1wiLCAoICkgPT4ge1xyXG5cclxuXHRcdFx0YXNzZXJ0LmVxdWFsKCBzdHJpbmdlKCB1bmRlZmluZWQgKSwgXCJ1bmRlZmluZWRcIiApO1xyXG5cclxuXHRcdH0gKTtcclxuXHJcblx0fSApO1xyXG5cclxuXHJcblx0ZGVzY3JpYmUoIFwiYHN0cmluZ2UoIG51bGwgKWBcIiwgKCApID0+IHtcclxuXHJcblx0XHRpdCggXCJzaG91bGQgYmUgZXF1YWwgdG8gJ251bGwnXCIsICggKSA9PiB7XHJcblxyXG5cdFx0XHRhc3NlcnQuZXF1YWwoIHN0cmluZ2UoIG51bGwgKSwgXCJudWxsXCIgKTtcclxuXHJcblx0XHR9ICk7XHJcblxyXG5cdH0gKTtcclxuXHJcblxyXG5cdGRlc2NyaWJlKCBcImBzdHJpbmdlKCBOYU4gKWBcIiwgKCApID0+IHtcclxuXHJcblx0XHRpdCggXCJzaG91bGQgYmUgZXF1YWwgdG8gJ05hTidcIiwgKCApID0+IHtcclxuXHJcblx0XHRcdGFzc2VydC5lcXVhbCggc3RyaW5nZSggTmFOICksIFwiTmFOXCIgKTtcclxuXHJcblx0XHR9ICk7XHJcblxyXG5cdH0gKTtcclxuXHJcblxyXG5cdGRlc2NyaWJlKCBcImBzdHJpbmdlKCBJbmZpbml0eSApYFwiLCAoICkgPT4ge1xyXG5cclxuXHRcdGl0KCBcInNob3VsZCBiZSBlcXVhbCB0byAnSW5maW5pdHknXCIsICggKSA9PiB7XHJcblxyXG5cdFx0XHRhc3NlcnQuZXF1YWwoIHN0cmluZ2UoIEluZmluaXR5ICksIFwiSW5maW5pdHlcIiApO1xyXG5cclxuXHRcdH0gKTtcclxuXHJcblx0fSApO1xyXG5cclxuXHJcblx0ZGVzY3JpYmUoIFwiYHN0cmluZ2UoIEFycmF5IClgXCIsICggKSA9PiB7XHJcblxyXG5cdFx0aXQoIFwic2hvdWxkIGJlIGVxdWFsIHRvICdmdW5jdGlvbiBBcnJheSgpIHsgW25hdGl2ZSBjb2RlXSB9J1wiLCAoICkgPT4ge1xyXG5cclxuXHRcdFx0YXNzZXJ0LmVxdWFsKCBzdHJpbmdlKCBBcnJheSApLCBcImZ1bmN0aW9uIEFycmF5KCkgeyBbbmF0aXZlIGNvZGVdIH1cIiApO1xyXG5cclxuXHRcdH0gKTtcclxuXHJcblx0fSApO1xyXG5cclxuXHJcblx0ZGVzY3JpYmUoIFwiYHN0cmluZ2UoIDEyMyApYFwiLCAoICkgPT4ge1xyXG5cclxuXHRcdGl0KCBcInNob3VsZCBiZSBlcXVhbCB0byAnMTIzJ1wiLCAoICkgPT4ge1xyXG5cclxuXHRcdFx0YXNzZXJ0LmVxdWFsKCBzdHJpbmdlKCAxMjMgKSwgXCIxMjNcIiApO1xyXG5cclxuXHRcdH0gKTtcclxuXHJcblx0fSApO1xyXG5cclxuXHJcblx0ZGVzY3JpYmUoIFwiYHN0cmluZ2UoICdoZWxsbyB3b3JsZCcgKWBcIiwgKCApID0+IHtcclxuXHJcblx0XHRpdCggXCJzaG91bGQgYmUgZXF1YWwgdG8gJ2hlbGxvIHdvcmxkJ1wiLCAoICkgPT4ge1xyXG5cclxuXHRcdFx0YXNzZXJ0LmVxdWFsKCBzdHJpbmdlKCBcImhlbGxvIHdvcmxkXCIgKSwgXCJoZWxsbyB3b3JsZFwiICk7XHJcblxyXG5cdFx0fSApO1xyXG5cclxuXHR9ICk7XHJcblxyXG5cclxuXHRkZXNjcmliZSggXCJgc3RyaW5nZSggeyAnaGVsbG8nOiAnd29ybGQnIH0gKWBcIiwgKCApID0+IHtcclxuXHJcblx0XHRpdCggXCJzaG91bGQgYmUgZXF1YWwgdG8gJ1tvYmplY3QgT2JqZWN0XSdcIiwgKCApID0+IHtcclxuXHJcblx0XHRcdGFzc2VydC5lcXVhbCggc3RyaW5nZSggeyBcImhlbGxvXCI6IFwid29ybGRcIiB9ICksIFwiW29iamVjdCBPYmplY3RdXCIgKTtcclxuXHJcblx0XHR9ICk7XHJcblxyXG5cdH0gKTtcclxuXHJcblxyXG5cdGRlc2NyaWJlKCBcImBzdHJpbmdlKCAoICkgPT4geyB9IClgXCIsICggKSA9PiB7XHJcblx0XHRpdCggXCJzaG91bGQgYmUgZXF1YWwgdG8gJyggKSA9PiB7IH0nXCIsICggKSA9PiB7XHJcblx0XHRcdC8vOiBAaWdub3JlOlxyXG5cdFx0XHRsZXQgcGF0dGVybiA9IC9cXChcXHMqXFwpXFxzKlxcPVxcPlxccypcXHtcXHMqXFx9LztcclxuXHRcdFx0bGV0IGRhdGEgPSBzdHJpbmdlKCAoICkgPT4geyB9ICk7XHJcblx0XHRcdGxldCB0ZXN0ID0gcGF0dGVybi50ZXN0KCBkYXRhICk7XHJcblx0XHRcdC8vOiBAZW5kLWlnbm9yZVxyXG5cdFx0XHRhc3NlcnQuZXF1YWwoIHRlc3QsIHRydWUgKTtcclxuXHJcblx0XHR9ICk7XHJcblx0fSApO1xyXG5cclxuXHJcblx0ZGVzY3JpYmUoIFwiYHN0cmluZ2UoIGZ1bmN0aW9uIHRlc3QoICl7IHJldHVybiAndGVzdCcgfSApYFwiLCAoICkgPT4ge1xyXG5cdFx0aXQoIFwic2hvdWxkIGJlIGVxdWFsIHRvICdmdW5jdGlvbiB0ZXN0KCApeyByZXR1cm4gJ3Rlc3QnIH0nXCIsICggKSA9PiB7XHJcblx0XHRcdC8vOiBAaWdub3JlOlxyXG5cdFx0XHRsZXQgcGF0dGVybiA9IC9mdW5jdGlvblxccyt0ZXN0XFxzKlxcKFxccypcXClcXHMqXFx7XFxzKnJldHVyblxccytcXCd0ZXN0XFwnXFxzKlxcfS87XHJcblx0XHRcdGxldCBkYXRhID0gc3RyaW5nZSggZnVuY3Rpb24gdGVzdCggKXsgcmV0dXJuICd0ZXN0JyB9ICk7XHJcblx0XHRcdGxldCB0ZXN0ID0gcGF0dGVybi50ZXN0KCBkYXRhICk7XHJcblx0XHRcdC8vOiBAZW5kLWlnbm9yZVxyXG5cdFx0XHRhc3NlcnQuZXF1YWwoIHRlc3QsIHRydWUgKTtcclxuXHJcblx0XHR9ICk7XHJcblx0fSApO1xyXG5cclxufSApO1xyXG5cclxuLy86IEBlbmQtY2xpZW50XHJcblxyXG5cclxuIl19
//# sourceMappingURL=test.support.js.map
