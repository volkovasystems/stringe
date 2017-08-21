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

			var pattern = /\(\s*\)\s*\=\>\s*\{\s*\}/;
			var data = stringe(function () {});
			var test = pattern.test(data);

			assert.equal(test, true);

		});
	});


	describe("`stringe( function test( ){ return 'test' } )`", function () {
		it("should be equal to 'function test( ){ return 'test' }'", function () {

			var pattern = /function\s+test\s*\(\s*\)\s*\{\s*return\s+\'test\'\s*\}/;
			var data = stringe(function test() {return 'test';});
			var test = pattern.test(data);

			assert.equal(test, true);

		});
	});

});

//: @end-client
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInRlc3Quc3VwcG9ydC5qcyJdLCJuYW1lcyI6WyJhc3NlcnQiLCJyZXF1aXJlIiwic3RyaW5nZSIsImRlc2NyaWJlIiwiaXQiLCJlcXVhbCIsIndpbmRvdyIsInVuZGVmaW5lZCIsIk5hTiIsIkluZmluaXR5IiwiQXJyYXkiLCJwYXR0ZXJuIiwiZGF0YSIsInRlc3QiXSwibWFwcGluZ3MiOiJBQUFBOztBQUVBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBdURBLElBQU1BLFNBQVNDLFFBQVMsUUFBVCxDQUFmOzs7O0FBSUE7QUFDQSxJQUFNQyxVQUFVRCxRQUFTLHNCQUFULENBQWhCO0FBQ0E7Ozs7Ozs7O0FBUUE7O0FBRUFFLFNBQVUsU0FBVixFQUFxQixZQUFPOztBQUUzQkEsVUFBVSxxQkFBVixFQUFpQyxZQUFPOztBQUV2Q0MsS0FBSSxzQ0FBSixFQUE0QyxZQUFPOztBQUVsREosVUFBT0ssS0FBUCxDQUFjSCxRQUFTSSxNQUFULENBQWQsRUFBaUMsaUJBQWpDOztBQUVBLEdBSkQ7O0FBTUEsRUFSRDs7O0FBV0FILFVBQVUsbUJBQVYsRUFBK0IsWUFBTzs7QUFFckNDLEtBQUksMkJBQUosRUFBaUMsWUFBTzs7QUFFdkNKLFVBQU9LLEtBQVAsQ0FBY0gsUUFBUyxJQUFULENBQWQsRUFBK0IsTUFBL0I7O0FBRUEsR0FKRDs7QUFNQSxFQVJEOzs7QUFXQUMsVUFBVSx3QkFBVixFQUFvQyxZQUFPOztBQUUxQ0MsS0FBSSxnQ0FBSixFQUFzQyxZQUFPOztBQUU1Q0osVUFBT0ssS0FBUCxDQUFjSCxRQUFTSyxTQUFULENBQWQsRUFBb0MsV0FBcEM7O0FBRUEsR0FKRDs7QUFNQSxFQVJEOzs7QUFXQUosVUFBVSxtQkFBVixFQUErQixZQUFPOztBQUVyQ0MsS0FBSSwyQkFBSixFQUFpQyxZQUFPOztBQUV2Q0osVUFBT0ssS0FBUCxDQUFjSCxRQUFTLElBQVQsQ0FBZCxFQUErQixNQUEvQjs7QUFFQSxHQUpEOztBQU1BLEVBUkQ7OztBQVdBQyxVQUFVLGtCQUFWLEVBQThCLFlBQU87O0FBRXBDQyxLQUFJLDBCQUFKLEVBQWdDLFlBQU87O0FBRXRDSixVQUFPSyxLQUFQLENBQWNILFFBQVNNLEdBQVQsQ0FBZCxFQUE4QixLQUE5Qjs7QUFFQSxHQUpEOztBQU1BLEVBUkQ7OztBQVdBTCxVQUFVLHVCQUFWLEVBQW1DLFlBQU87O0FBRXpDQyxLQUFJLCtCQUFKLEVBQXFDLFlBQU87O0FBRTNDSixVQUFPSyxLQUFQLENBQWNILFFBQVNPLFFBQVQsQ0FBZCxFQUFtQyxVQUFuQzs7QUFFQSxHQUpEOztBQU1BLEVBUkQ7OztBQVdBTixVQUFVLG9CQUFWLEVBQWdDLFlBQU87O0FBRXRDQyxLQUFJLHlEQUFKLEVBQStELFlBQU87O0FBRXJFSixVQUFPSyxLQUFQLENBQWNILFFBQVNRLEtBQVQsQ0FBZCxFQUFnQyxvQ0FBaEM7O0FBRUEsR0FKRDs7QUFNQSxFQVJEOzs7QUFXQVAsVUFBVSxrQkFBVixFQUE4QixZQUFPOztBQUVwQ0MsS0FBSSwwQkFBSixFQUFnQyxZQUFPOztBQUV0Q0osVUFBT0ssS0FBUCxDQUFjSCxRQUFTLEdBQVQsQ0FBZCxFQUE4QixLQUE5Qjs7QUFFQSxHQUpEOztBQU1BLEVBUkQ7OztBQVdBQyxVQUFVLDRCQUFWLEVBQXdDLFlBQU87O0FBRTlDQyxLQUFJLGtDQUFKLEVBQXdDLFlBQU87O0FBRTlDSixVQUFPSyxLQUFQLENBQWNILFFBQVMsYUFBVCxDQUFkLEVBQXdDLGFBQXhDOztBQUVBLEdBSkQ7O0FBTUEsRUFSRDs7O0FBV0FDLFVBQVUsbUNBQVYsRUFBK0MsWUFBTzs7QUFFckRDLEtBQUksc0NBQUosRUFBNEMsWUFBTzs7QUFFbERKLFVBQU9LLEtBQVAsQ0FBY0gsUUFBUyxFQUFFLFNBQVMsT0FBWCxFQUFULENBQWQsRUFBK0MsaUJBQS9DOztBQUVBLEdBSkQ7O0FBTUEsRUFSRDs7O0FBV0FDLFVBQVUseUJBQVYsRUFBcUMsWUFBTztBQUMzQ0MsS0FBSSxpQ0FBSixFQUF1QyxZQUFPOztBQUU3QyxPQUFJTyxVQUFVLDBCQUFkO0FBQ0EsT0FBSUMsT0FBT1YsUUFBUyxZQUFPLENBQUcsQ0FBbkIsQ0FBWDtBQUNBLE9BQUlXLE9BQU9GLFFBQVFFLElBQVIsQ0FBY0QsSUFBZCxDQUFYOztBQUVBWixVQUFPSyxLQUFQLENBQWNRLElBQWQsRUFBb0IsSUFBcEI7O0FBRUEsR0FSRDtBQVNBLEVBVkQ7OztBQWFBVixVQUFVLGdEQUFWLEVBQTRELFlBQU87QUFDbEVDLEtBQUksd0RBQUosRUFBOEQsWUFBTzs7QUFFcEUsT0FBSU8sVUFBVSx5REFBZDtBQUNBLE9BQUlDLE9BQU9WLFFBQVMsU0FBU1csSUFBVCxHQUFnQixDQUFFLE9BQU8sTUFBUCxDQUFlLENBQTFDLENBQVg7QUFDQSxPQUFJQSxPQUFPRixRQUFRRSxJQUFSLENBQWNELElBQWQsQ0FBWDs7QUFFQVosVUFBT0ssS0FBUCxDQUFjUSxJQUFkLEVBQW9CLElBQXBCOztBQUVBLEdBUkQ7QUFTQSxFQVZEOztBQVlBLENBeklEOztBQTJJQSIsImZpbGUiOiJ0ZXN0LnN1cHBvcnQuanMiLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuLyo7XG5cdEB0ZXN0LWxpY2Vuc2U6XG5cdFx0VGhlIE1JVCBMaWNlbnNlIChNSVQpXG5cdFx0QG1pdC1saWNlbnNlXG5cblx0XHRDb3B5cmlnaHQgKEBjKSAyMDE3IFJpY2hldmUgU2lvZGluYSBCZWJlZG9yXG5cdFx0QGVtYWlsOiByaWNoZXZlLmJlYmVkb3JAZ21haWwuY29tXG5cblx0XHRQZXJtaXNzaW9uIGlzIGhlcmVieSBncmFudGVkLCBmcmVlIG9mIGNoYXJnZSwgdG8gYW55IHBlcnNvbiBvYnRhaW5pbmcgYSBjb3B5XG5cdFx0b2YgdGhpcyBzb2Z0d2FyZSBhbmQgYXNzb2NpYXRlZCBkb2N1bWVudGF0aW9uIGZpbGVzICh0aGUgXCJTb2Z0d2FyZVwiKSwgdG8gZGVhbFxuXHRcdGluIHRoZSBTb2Z0d2FyZSB3aXRob3V0IHJlc3RyaWN0aW9uLCBpbmNsdWRpbmcgd2l0aG91dCBsaW1pdGF0aW9uIHRoZSByaWdodHNcblx0XHR0byB1c2UsIGNvcHksIG1vZGlmeSwgbWVyZ2UsIHB1Ymxpc2gsIGRpc3RyaWJ1dGUsIHN1YmxpY2Vuc2UsIGFuZC9vciBzZWxsXG5cdFx0Y29waWVzIG9mIHRoZSBTb2Z0d2FyZSwgYW5kIHRvIHBlcm1pdCBwZXJzb25zIHRvIHdob20gdGhlIFNvZnR3YXJlIGlzXG5cdFx0ZnVybmlzaGVkIHRvIGRvIHNvLCBzdWJqZWN0IHRvIHRoZSBmb2xsb3dpbmcgY29uZGl0aW9uczpcblxuXHRcdFRoZSBhYm92ZSBjb3B5cmlnaHQgbm90aWNlIGFuZCB0aGlzIHBlcm1pc3Npb24gbm90aWNlIHNoYWxsIGJlIGluY2x1ZGVkIGluIGFsbFxuXHRcdGNvcGllcyBvciBzdWJzdGFudGlhbCBwb3J0aW9ucyBvZiB0aGUgU29mdHdhcmUuXG5cblx0XHRUSEUgU09GVFdBUkUgSVMgUFJPVklERUQgXCJBUyBJU1wiLCBXSVRIT1VUIFdBUlJBTlRZIE9GIEFOWSBLSU5ELCBFWFBSRVNTIE9SXG5cdFx0SU1QTElFRCwgSU5DTFVESU5HIEJVVCBOT1QgTElNSVRFRCBUTyBUSEUgV0FSUkFOVElFUyBPRiBNRVJDSEFOVEFCSUxJVFksXG5cdFx0RklUTkVTUyBGT1IgQSBQQVJUSUNVTEFSIFBVUlBPU0UgQU5EIE5PTklORlJJTkdFTUVOVC4gSU4gTk8gRVZFTlQgU0hBTEwgVEhFXG5cdFx0QVVUSE9SUyBPUiBDT1BZUklHSFQgSE9MREVSUyBCRSBMSUFCTEUgRk9SIEFOWSBDTEFJTSwgREFNQUdFUyBPUiBPVEhFUlxuXHRcdExJQUJJTElUWSwgV0hFVEhFUiBJTiBBTiBBQ1RJT04gT0YgQ09OVFJBQ1QsIFRPUlQgT1IgT1RIRVJXSVNFLCBBUklTSU5HIEZST00sXG5cdFx0T1VUIE9GIE9SIElOIENPTk5FQ1RJT04gV0lUSCBUSEUgU09GVFdBUkUgT1IgVEhFIFVTRSBPUiBPVEhFUiBERUFMSU5HUyBJTiBUSEVcblx0XHRTT0ZUV0FSRS5cblx0QGVuZC10ZXN0LWxpY2Vuc2VcblxuXHRAdGVzdC1jb25maWd1cmF0aW9uOlxuXHRcdHtcblx0XHRcdFwicGFja2FnZVwiOiBcInN0cmluZ2VcIixcblx0XHRcdFwicGF0aFwiOiBcInN0cmluZ2UvdGVzdC5tb2R1bGUuanNcIixcblx0XHRcdFwiZmlsZVwiOiBcInRlc3QubW9kdWxlLmpzXCIsXG5cdFx0XHRcIm1vZHVsZVwiOiBcInRlc3RcIixcblx0XHRcdFwiYXV0aG9yXCI6IFwiUmljaGV2ZSBTLiBCZWJlZG9yXCIsXG5cdFx0XHRcImVNYWlsXCI6IFwicmljaGV2ZS5iZWJlZG9yQGdtYWlsLmNvbVwiLFxuXHRcdFx0XCJjb250cmlidXRvcnNcIjogW1xuXHRcdFx0XHRcIkpvaG4gTGVub24gTWFnaGFub3kgPGpvaG5sZW5vbm1hZ2hhbm95QGdtYWlsLmNvbT5cIixcblx0XHRcdFx0XCJWaW5zZSBWaW5hbG9uIDx2aW5zZXZpbmFsb25AZ21haWwuY29tPlwiXG5cdFx0XHRdLFxuXHRcdFx0XCJyZXBvc2l0b3J5XCI6IFwiaHR0cHM6Ly9naXRodWIuY29tL3ZvbGtvdmFzeXN0ZW1zL251bXJpYy5naXRcIlxuXHRcdH1cblx0QGVuZC10ZXN0LWNvbmZpZ3VyYXRpb25cblxuXHRAdGVzdC1kb2N1bWVudGF0aW9uOlxuXG5cdEBlbmQtdGVzdC1kb2N1bWVudGF0aW9uXG5cblx0QGluY2x1ZGU6XG5cdFx0e1xuXHRcdFx0XCJhc3NlcnRcIjogXCJzaG91bGRcIixcblx0XHRcdFwic3RyaW5nZVwiOiBcInN0cmluZ2VcIlxuXHRcdH1cblx0QGVuZC1pbmNsdWRlXG4qL1xuXG5jb25zdCBhc3NlcnQgPSByZXF1aXJlKCBcInNob3VsZFwiICk7XG5cblxuXG4vLzogQGNsaWVudDpcbmNvbnN0IHN0cmluZ2UgPSByZXF1aXJlKCBcIi4vc3RyaW5nZS5zdXBwb3J0LmpzXCIgKTtcbi8vOiBAZW5kLWNsaWVudFxuXG5cblxuXG5cblxuXG4vLzogQGNsaWVudDpcblxuZGVzY3JpYmUoIFwic3RyaW5nZVwiLCAoICkgPT4ge1xuXG5cdGRlc2NyaWJlKCBcImBzdHJpbmdlKCB3aW5kb3cgKWBcIiwgKCApID0+IHtcblxuXHRcdGl0KCBcInNob3VsZCBiZSBlcXVhbCB0byAnW29iamVjdCBXaW5kb3ddJ1wiLCAoICkgPT4ge1xuXG5cdFx0XHRhc3NlcnQuZXF1YWwoIHN0cmluZ2UoIHdpbmRvdyApLCBcIltvYmplY3QgV2luZG93XVwiICk7XG5cblx0XHR9ICk7XG5cblx0fSApO1xuXG5cblx0ZGVzY3JpYmUoIFwiYHN0cmluZ2UoIHRydWUgKWBcIiwgKCApID0+IHtcblxuXHRcdGl0KCBcInNob3VsZCBiZSBlcXVhbCB0byAndHJ1ZSdcIiwgKCApID0+IHtcblxuXHRcdFx0YXNzZXJ0LmVxdWFsKCBzdHJpbmdlKCB0cnVlICksIFwidHJ1ZVwiICk7XG5cblx0XHR9ICk7XG5cblx0fSApO1xuXG5cblx0ZGVzY3JpYmUoIFwiYHN0cmluZ2UoIHVuZGVmaW5lZCApYFwiLCAoICkgPT4ge1xuXG5cdFx0aXQoIFwic2hvdWxkIGJlIGVxdWFsIHRvICd1bmRlZmluZWQnXCIsICggKSA9PiB7XG5cblx0XHRcdGFzc2VydC5lcXVhbCggc3RyaW5nZSggdW5kZWZpbmVkICksIFwidW5kZWZpbmVkXCIgKTtcblxuXHRcdH0gKTtcblxuXHR9ICk7XG5cblxuXHRkZXNjcmliZSggXCJgc3RyaW5nZSggbnVsbCApYFwiLCAoICkgPT4ge1xuXG5cdFx0aXQoIFwic2hvdWxkIGJlIGVxdWFsIHRvICdudWxsJ1wiLCAoICkgPT4ge1xuXG5cdFx0XHRhc3NlcnQuZXF1YWwoIHN0cmluZ2UoIG51bGwgKSwgXCJudWxsXCIgKTtcblxuXHRcdH0gKTtcblxuXHR9ICk7XG5cblxuXHRkZXNjcmliZSggXCJgc3RyaW5nZSggTmFOIClgXCIsICggKSA9PiB7XG5cblx0XHRpdCggXCJzaG91bGQgYmUgZXF1YWwgdG8gJ05hTidcIiwgKCApID0+IHtcblxuXHRcdFx0YXNzZXJ0LmVxdWFsKCBzdHJpbmdlKCBOYU4gKSwgXCJOYU5cIiApO1xuXG5cdFx0fSApO1xuXG5cdH0gKTtcblxuXG5cdGRlc2NyaWJlKCBcImBzdHJpbmdlKCBJbmZpbml0eSApYFwiLCAoICkgPT4ge1xuXG5cdFx0aXQoIFwic2hvdWxkIGJlIGVxdWFsIHRvICdJbmZpbml0eSdcIiwgKCApID0+IHtcblxuXHRcdFx0YXNzZXJ0LmVxdWFsKCBzdHJpbmdlKCBJbmZpbml0eSApLCBcIkluZmluaXR5XCIgKTtcblxuXHRcdH0gKTtcblxuXHR9ICk7XG5cblxuXHRkZXNjcmliZSggXCJgc3RyaW5nZSggQXJyYXkgKWBcIiwgKCApID0+IHtcblxuXHRcdGl0KCBcInNob3VsZCBiZSBlcXVhbCB0byAnZnVuY3Rpb24gQXJyYXkoKSB7IFtuYXRpdmUgY29kZV0gfSdcIiwgKCApID0+IHtcblxuXHRcdFx0YXNzZXJ0LmVxdWFsKCBzdHJpbmdlKCBBcnJheSApLCBcImZ1bmN0aW9uIEFycmF5KCkgeyBbbmF0aXZlIGNvZGVdIH1cIiApO1xuXG5cdFx0fSApO1xuXG5cdH0gKTtcblxuXG5cdGRlc2NyaWJlKCBcImBzdHJpbmdlKCAxMjMgKWBcIiwgKCApID0+IHtcblxuXHRcdGl0KCBcInNob3VsZCBiZSBlcXVhbCB0byAnMTIzJ1wiLCAoICkgPT4ge1xuXG5cdFx0XHRhc3NlcnQuZXF1YWwoIHN0cmluZ2UoIDEyMyApLCBcIjEyM1wiICk7XG5cblx0XHR9ICk7XG5cblx0fSApO1xuXG5cblx0ZGVzY3JpYmUoIFwiYHN0cmluZ2UoICdoZWxsbyB3b3JsZCcgKWBcIiwgKCApID0+IHtcblxuXHRcdGl0KCBcInNob3VsZCBiZSBlcXVhbCB0byAnaGVsbG8gd29ybGQnXCIsICggKSA9PiB7XG5cblx0XHRcdGFzc2VydC5lcXVhbCggc3RyaW5nZSggXCJoZWxsbyB3b3JsZFwiICksIFwiaGVsbG8gd29ybGRcIiApO1xuXG5cdFx0fSApO1xuXG5cdH0gKTtcblxuXG5cdGRlc2NyaWJlKCBcImBzdHJpbmdlKCB7ICdoZWxsbyc6ICd3b3JsZCcgfSApYFwiLCAoICkgPT4ge1xuXG5cdFx0aXQoIFwic2hvdWxkIGJlIGVxdWFsIHRvICdbb2JqZWN0IE9iamVjdF0nXCIsICggKSA9PiB7XG5cblx0XHRcdGFzc2VydC5lcXVhbCggc3RyaW5nZSggeyBcImhlbGxvXCI6IFwid29ybGRcIiB9ICksIFwiW29iamVjdCBPYmplY3RdXCIgKTtcblxuXHRcdH0gKTtcblxuXHR9ICk7XG5cblxuXHRkZXNjcmliZSggXCJgc3RyaW5nZSggKCApID0+IHsgfSApYFwiLCAoICkgPT4ge1xuXHRcdGl0KCBcInNob3VsZCBiZSBlcXVhbCB0byAnKCApID0+IHsgfSdcIiwgKCApID0+IHtcblxuXHRcdFx0bGV0IHBhdHRlcm4gPSAvXFwoXFxzKlxcKVxccypcXD1cXD5cXHMqXFx7XFxzKlxcfS87XG5cdFx0XHRsZXQgZGF0YSA9IHN0cmluZ2UoICggKSA9PiB7IH0gKTtcblx0XHRcdGxldCB0ZXN0ID0gcGF0dGVybi50ZXN0KCBkYXRhICk7XG5cblx0XHRcdGFzc2VydC5lcXVhbCggdGVzdCwgdHJ1ZSApO1xuXG5cdFx0fSApO1xuXHR9ICk7XG5cblxuXHRkZXNjcmliZSggXCJgc3RyaW5nZSggZnVuY3Rpb24gdGVzdCggKXsgcmV0dXJuICd0ZXN0JyB9IClgXCIsICggKSA9PiB7XG5cdFx0aXQoIFwic2hvdWxkIGJlIGVxdWFsIHRvICdmdW5jdGlvbiB0ZXN0KCApeyByZXR1cm4gJ3Rlc3QnIH0nXCIsICggKSA9PiB7XG5cblx0XHRcdGxldCBwYXR0ZXJuID0gL2Z1bmN0aW9uXFxzK3Rlc3RcXHMqXFwoXFxzKlxcKVxccypcXHtcXHMqcmV0dXJuXFxzK1xcJ3Rlc3RcXCdcXHMqXFx9Lztcblx0XHRcdGxldCBkYXRhID0gc3RyaW5nZSggZnVuY3Rpb24gdGVzdCggKXsgcmV0dXJuICd0ZXN0JyB9ICk7XG5cdFx0XHRsZXQgdGVzdCA9IHBhdHRlcm4udGVzdCggZGF0YSApO1xuXG5cdFx0XHRhc3NlcnQuZXF1YWwoIHRlc3QsIHRydWUgKTtcblxuXHRcdH0gKTtcblx0fSApO1xuXG59ICk7XG5cbi8vOiBAZW5kLWNsaWVudFxuXG5cbiJdfQ==
//# sourceMappingURL=test.support.js.map
