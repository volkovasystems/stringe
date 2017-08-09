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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInRlc3Quc3VwcG9ydC5qcyJdLCJuYW1lcyI6WyJhc3NlcnQiLCJyZXF1aXJlIiwic3RyaW5nZSIsImRlc2NyaWJlIiwiaXQiLCJlcXVhbCIsIndpbmRvdyIsInVuZGVmaW5lZCIsIk5hTiIsIkluZmluaXR5IiwiQXJyYXkiLCJwYXR0ZXJuIiwiZGF0YSIsInRlc3QiXSwibWFwcGluZ3MiOiJBQUFBOztBQUVBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBdURBLElBQU1BLFNBQVNDLFFBQVMsUUFBVCxDQUFmOzs7O0FBSUE7QUFDQSxJQUFNQyxVQUFVRCxRQUFTLHNCQUFULENBQWhCO0FBQ0E7Ozs7Ozs7O0FBUUE7O0FBRUFFLFNBQVUsU0FBVixFQUFxQixZQUFPOztBQUUzQkEsVUFBVSxxQkFBVixFQUFpQyxZQUFPOztBQUV2Q0MsS0FBSSxzQ0FBSixFQUE0QyxZQUFPOztBQUVsREosVUFBT0ssS0FBUCxDQUFjSCxRQUFTSSxNQUFULENBQWQsRUFBaUMsaUJBQWpDOztBQUVBLEdBSkQ7O0FBTUEsRUFSRDs7O0FBV0FILFVBQVUsbUJBQVYsRUFBK0IsWUFBTzs7QUFFckNDLEtBQUksMkJBQUosRUFBaUMsWUFBTzs7QUFFdkNKLFVBQU9LLEtBQVAsQ0FBY0gsUUFBUyxJQUFULENBQWQsRUFBK0IsTUFBL0I7O0FBRUEsR0FKRDs7QUFNQSxFQVJEOzs7QUFXQUMsVUFBVSx3QkFBVixFQUFvQyxZQUFPOztBQUUxQ0MsS0FBSSxnQ0FBSixFQUFzQyxZQUFPOztBQUU1Q0osVUFBT0ssS0FBUCxDQUFjSCxRQUFTSyxTQUFULENBQWQsRUFBb0MsV0FBcEM7O0FBRUEsR0FKRDs7QUFNQSxFQVJEOzs7QUFXQUosVUFBVSxtQkFBVixFQUErQixZQUFPOztBQUVyQ0MsS0FBSSwyQkFBSixFQUFpQyxZQUFPOztBQUV2Q0osVUFBT0ssS0FBUCxDQUFjSCxRQUFTLElBQVQsQ0FBZCxFQUErQixNQUEvQjs7QUFFQSxHQUpEOztBQU1BLEVBUkQ7OztBQVdBQyxVQUFVLGtCQUFWLEVBQThCLFlBQU87O0FBRXBDQyxLQUFJLDBCQUFKLEVBQWdDLFlBQU87O0FBRXRDSixVQUFPSyxLQUFQLENBQWNILFFBQVNNLEdBQVQsQ0FBZCxFQUE4QixLQUE5Qjs7QUFFQSxHQUpEOztBQU1BLEVBUkQ7OztBQVdBTCxVQUFVLHVCQUFWLEVBQW1DLFlBQU87O0FBRXpDQyxLQUFJLCtCQUFKLEVBQXFDLFlBQU87O0FBRTNDSixVQUFPSyxLQUFQLENBQWNILFFBQVNPLFFBQVQsQ0FBZCxFQUFtQyxVQUFuQzs7QUFFQSxHQUpEOztBQU1BLEVBUkQ7OztBQVdBTixVQUFVLG9CQUFWLEVBQWdDLFlBQU87O0FBRXRDQyxLQUFJLHlEQUFKLEVBQStELFlBQU87O0FBRXJFSixVQUFPSyxLQUFQLENBQWNILFFBQVNRLEtBQVQsQ0FBZCxFQUFnQyxvQ0FBaEM7O0FBRUEsR0FKRDs7QUFNQSxFQVJEOzs7QUFXQVAsVUFBVSxrQkFBVixFQUE4QixZQUFPOztBQUVwQ0MsS0FBSSwwQkFBSixFQUFnQyxZQUFPOztBQUV0Q0osVUFBT0ssS0FBUCxDQUFjSCxRQUFTLEdBQVQsQ0FBZCxFQUE4QixLQUE5Qjs7QUFFQSxHQUpEOztBQU1BLEVBUkQ7OztBQVdBQyxVQUFVLDRCQUFWLEVBQXdDLFlBQU87O0FBRTlDQyxLQUFJLGtDQUFKLEVBQXdDLFlBQU87O0FBRTlDSixVQUFPSyxLQUFQLENBQWNILFFBQVMsYUFBVCxDQUFkLEVBQXdDLGFBQXhDOztBQUVBLEdBSkQ7O0FBTUEsRUFSRDs7O0FBV0FDLFVBQVUsbUNBQVYsRUFBK0MsWUFBTzs7QUFFckRDLEtBQUksc0NBQUosRUFBNEMsWUFBTzs7QUFFbERKLFVBQU9LLEtBQVAsQ0FBY0gsUUFBUyxFQUFFLFNBQVMsT0FBWCxFQUFULENBQWQsRUFBK0MsaUJBQS9DOztBQUVBLEdBSkQ7O0FBTUEsRUFSRDs7O0FBV0FDLFVBQVUseUJBQVYsRUFBcUMsWUFBTztBQUMzQ0MsS0FBSSxpQ0FBSixFQUF1QyxZQUFPO0FBQzdDO0FBQ0EsT0FBSU8sVUFBVSwwQkFBZDtBQUNBLE9BQUlDLE9BQU9WLFFBQVMsWUFBTyxDQUFHLENBQW5CLENBQVg7QUFDQSxPQUFJVyxPQUFPRixRQUFRRSxJQUFSLENBQWNELElBQWQsQ0FBWDtBQUNBO0FBQ0FaLFVBQU9LLEtBQVAsQ0FBY1EsSUFBZCxFQUFvQixJQUFwQjs7QUFFQSxHQVJEO0FBU0EsRUFWRDs7O0FBYUFWLFVBQVUsZ0RBQVYsRUFBNEQsWUFBTztBQUNsRUMsS0FBSSx3REFBSixFQUE4RCxZQUFPO0FBQ3BFO0FBQ0EsT0FBSU8sVUFBVSx5REFBZDtBQUNBLE9BQUlDLE9BQU9WLFFBQVMsU0FBU1csSUFBVCxHQUFnQixDQUFFLE9BQU8sTUFBUCxDQUFlLENBQTFDLENBQVg7QUFDQSxPQUFJQSxPQUFPRixRQUFRRSxJQUFSLENBQWNELElBQWQsQ0FBWDtBQUNBO0FBQ0FaLFVBQU9LLEtBQVAsQ0FBY1EsSUFBZCxFQUFvQixJQUFwQjs7QUFFQSxHQVJEO0FBU0EsRUFWRDs7QUFZQSxDQXpJRDs7QUEySUEiLCJmaWxlIjoidGVzdC5zdXBwb3J0LmpzIiwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qO1xuXHRAdGVzdC1saWNlbnNlOlxuXHRcdFRoZSBNSVQgTGljZW5zZSAoTUlUKVxuXHRcdEBtaXQtbGljZW5zZVxuXG5cdFx0Q29weXJpZ2h0IChAYykgMjAxNyBSaWNoZXZlIFNpb2RpbmEgQmViZWRvclxuXHRcdEBlbWFpbDogcmljaGV2ZS5iZWJlZG9yQGdtYWlsLmNvbVxuXG5cdFx0UGVybWlzc2lvbiBpcyBoZXJlYnkgZ3JhbnRlZCwgZnJlZSBvZiBjaGFyZ2UsIHRvIGFueSBwZXJzb24gb2J0YWluaW5nIGEgY29weVxuXHRcdG9mIHRoaXMgc29mdHdhcmUgYW5kIGFzc29jaWF0ZWQgZG9jdW1lbnRhdGlvbiBmaWxlcyAodGhlIFwiU29mdHdhcmVcIiksIHRvIGRlYWxcblx0XHRpbiB0aGUgU29mdHdhcmUgd2l0aG91dCByZXN0cmljdGlvbiwgaW5jbHVkaW5nIHdpdGhvdXQgbGltaXRhdGlvbiB0aGUgcmlnaHRzXG5cdFx0dG8gdXNlLCBjb3B5LCBtb2RpZnksIG1lcmdlLCBwdWJsaXNoLCBkaXN0cmlidXRlLCBzdWJsaWNlbnNlLCBhbmQvb3Igc2VsbFxuXHRcdGNvcGllcyBvZiB0aGUgU29mdHdhcmUsIGFuZCB0byBwZXJtaXQgcGVyc29ucyB0byB3aG9tIHRoZSBTb2Z0d2FyZSBpc1xuXHRcdGZ1cm5pc2hlZCB0byBkbyBzbywgc3ViamVjdCB0byB0aGUgZm9sbG93aW5nIGNvbmRpdGlvbnM6XG5cblx0XHRUaGUgYWJvdmUgY29weXJpZ2h0IG5vdGljZSBhbmQgdGhpcyBwZXJtaXNzaW9uIG5vdGljZSBzaGFsbCBiZSBpbmNsdWRlZCBpbiBhbGxcblx0XHRjb3BpZXMgb3Igc3Vic3RhbnRpYWwgcG9ydGlvbnMgb2YgdGhlIFNvZnR3YXJlLlxuXG5cdFx0VEhFIFNPRlRXQVJFIElTIFBST1ZJREVEIFwiQVMgSVNcIiwgV0lUSE9VVCBXQVJSQU5UWSBPRiBBTlkgS0lORCwgRVhQUkVTUyBPUlxuXHRcdElNUExJRUQsIElOQ0xVRElORyBCVVQgTk9UIExJTUlURUQgVE8gVEhFIFdBUlJBTlRJRVMgT0YgTUVSQ0hBTlRBQklMSVRZLFxuXHRcdEZJVE5FU1MgRk9SIEEgUEFSVElDVUxBUiBQVVJQT1NFIEFORCBOT05JTkZSSU5HRU1FTlQuIElOIE5PIEVWRU5UIFNIQUxMIFRIRVxuXHRcdEFVVEhPUlMgT1IgQ09QWVJJR0hUIEhPTERFUlMgQkUgTElBQkxFIEZPUiBBTlkgQ0xBSU0sIERBTUFHRVMgT1IgT1RIRVJcblx0XHRMSUFCSUxJVFksIFdIRVRIRVIgSU4gQU4gQUNUSU9OIE9GIENPTlRSQUNULCBUT1JUIE9SIE9USEVSV0lTRSwgQVJJU0lORyBGUk9NLFxuXHRcdE9VVCBPRiBPUiBJTiBDT05ORUNUSU9OIFdJVEggVEhFIFNPRlRXQVJFIE9SIFRIRSBVU0UgT1IgT1RIRVIgREVBTElOR1MgSU4gVEhFXG5cdFx0U09GVFdBUkUuXG5cdEBlbmQtdGVzdC1saWNlbnNlXG5cblx0QHRlc3QtY29uZmlndXJhdGlvbjpcblx0XHR7XG5cdFx0XHRcInBhY2thZ2VcIjogXCJzdHJpbmdlXCIsXG5cdFx0XHRcInBhdGhcIjogXCJzdHJpbmdlL3Rlc3QubW9kdWxlLmpzXCIsXG5cdFx0XHRcImZpbGVcIjogXCJ0ZXN0Lm1vZHVsZS5qc1wiLFxuXHRcdFx0XCJtb2R1bGVcIjogXCJ0ZXN0XCIsXG5cdFx0XHRcImF1dGhvclwiOiBcIlJpY2hldmUgUy4gQmViZWRvclwiLFxuXHRcdFx0XCJlTWFpbFwiOiBcInJpY2hldmUuYmViZWRvckBnbWFpbC5jb21cIixcblx0XHRcdFwiY29udHJpYnV0b3JzXCI6IFtcblx0XHRcdFx0XCJKb2huIExlbm9uIE1hZ2hhbm95IDxqb2hubGVub25tYWdoYW5veUBnbWFpbC5jb20+XCIsXG5cdFx0XHRcdFwiVmluc2UgVmluYWxvbiA8dmluc2V2aW5hbG9uQGdtYWlsLmNvbT5cIlxuXHRcdFx0XSxcblx0XHRcdFwicmVwb3NpdG9yeVwiOiBcImh0dHBzOi8vZ2l0aHViLmNvbS92b2xrb3Zhc3lzdGVtcy9udW1yaWMuZ2l0XCJcblx0XHR9XG5cdEBlbmQtdGVzdC1jb25maWd1cmF0aW9uXG5cblx0QHRlc3QtZG9jdW1lbnRhdGlvbjpcblxuXHRAZW5kLXRlc3QtZG9jdW1lbnRhdGlvblxuXG5cdEBpbmNsdWRlOlxuXHRcdHtcblx0XHRcdFwiYXNzZXJ0XCI6IFwic2hvdWxkXCIsXG5cdFx0XHRcInN0cmluZ2VcIjogXCJzdHJpbmdlXCJcblx0XHR9XG5cdEBlbmQtaW5jbHVkZVxuKi9cblxuY29uc3QgYXNzZXJ0ID0gcmVxdWlyZSggXCJzaG91bGRcIiApO1xuXG5cblxuLy86IEBjbGllbnQ6XG5jb25zdCBzdHJpbmdlID0gcmVxdWlyZSggXCIuL3N0cmluZ2Uuc3VwcG9ydC5qc1wiICk7XG4vLzogQGVuZC1jbGllbnRcblxuXG5cblxuXG5cblxuLy86IEBjbGllbnQ6XG5cbmRlc2NyaWJlKCBcInN0cmluZ2VcIiwgKCApID0+IHtcblxuXHRkZXNjcmliZSggXCJgc3RyaW5nZSggd2luZG93IClgXCIsICggKSA9PiB7XG5cblx0XHRpdCggXCJzaG91bGQgYmUgZXF1YWwgdG8gJ1tvYmplY3QgV2luZG93XSdcIiwgKCApID0+IHtcblxuXHRcdFx0YXNzZXJ0LmVxdWFsKCBzdHJpbmdlKCB3aW5kb3cgKSwgXCJbb2JqZWN0IFdpbmRvd11cIiApO1xuXG5cdFx0fSApO1xuXG5cdH0gKTtcblxuXG5cdGRlc2NyaWJlKCBcImBzdHJpbmdlKCB0cnVlIClgXCIsICggKSA9PiB7XG5cblx0XHRpdCggXCJzaG91bGQgYmUgZXF1YWwgdG8gJ3RydWUnXCIsICggKSA9PiB7XG5cblx0XHRcdGFzc2VydC5lcXVhbCggc3RyaW5nZSggdHJ1ZSApLCBcInRydWVcIiApO1xuXG5cdFx0fSApO1xuXG5cdH0gKTtcblxuXG5cdGRlc2NyaWJlKCBcImBzdHJpbmdlKCB1bmRlZmluZWQgKWBcIiwgKCApID0+IHtcblxuXHRcdGl0KCBcInNob3VsZCBiZSBlcXVhbCB0byAndW5kZWZpbmVkJ1wiLCAoICkgPT4ge1xuXG5cdFx0XHRhc3NlcnQuZXF1YWwoIHN0cmluZ2UoIHVuZGVmaW5lZCApLCBcInVuZGVmaW5lZFwiICk7XG5cblx0XHR9ICk7XG5cblx0fSApO1xuXG5cblx0ZGVzY3JpYmUoIFwiYHN0cmluZ2UoIG51bGwgKWBcIiwgKCApID0+IHtcblxuXHRcdGl0KCBcInNob3VsZCBiZSBlcXVhbCB0byAnbnVsbCdcIiwgKCApID0+IHtcblxuXHRcdFx0YXNzZXJ0LmVxdWFsKCBzdHJpbmdlKCBudWxsICksIFwibnVsbFwiICk7XG5cblx0XHR9ICk7XG5cblx0fSApO1xuXG5cblx0ZGVzY3JpYmUoIFwiYHN0cmluZ2UoIE5hTiApYFwiLCAoICkgPT4ge1xuXG5cdFx0aXQoIFwic2hvdWxkIGJlIGVxdWFsIHRvICdOYU4nXCIsICggKSA9PiB7XG5cblx0XHRcdGFzc2VydC5lcXVhbCggc3RyaW5nZSggTmFOICksIFwiTmFOXCIgKTtcblxuXHRcdH0gKTtcblxuXHR9ICk7XG5cblxuXHRkZXNjcmliZSggXCJgc3RyaW5nZSggSW5maW5pdHkgKWBcIiwgKCApID0+IHtcblxuXHRcdGl0KCBcInNob3VsZCBiZSBlcXVhbCB0byAnSW5maW5pdHknXCIsICggKSA9PiB7XG5cblx0XHRcdGFzc2VydC5lcXVhbCggc3RyaW5nZSggSW5maW5pdHkgKSwgXCJJbmZpbml0eVwiICk7XG5cblx0XHR9ICk7XG5cblx0fSApO1xuXG5cblx0ZGVzY3JpYmUoIFwiYHN0cmluZ2UoIEFycmF5IClgXCIsICggKSA9PiB7XG5cblx0XHRpdCggXCJzaG91bGQgYmUgZXF1YWwgdG8gJ2Z1bmN0aW9uIEFycmF5KCkgeyBbbmF0aXZlIGNvZGVdIH0nXCIsICggKSA9PiB7XG5cblx0XHRcdGFzc2VydC5lcXVhbCggc3RyaW5nZSggQXJyYXkgKSwgXCJmdW5jdGlvbiBBcnJheSgpIHsgW25hdGl2ZSBjb2RlXSB9XCIgKTtcblxuXHRcdH0gKTtcblxuXHR9ICk7XG5cblxuXHRkZXNjcmliZSggXCJgc3RyaW5nZSggMTIzIClgXCIsICggKSA9PiB7XG5cblx0XHRpdCggXCJzaG91bGQgYmUgZXF1YWwgdG8gJzEyMydcIiwgKCApID0+IHtcblxuXHRcdFx0YXNzZXJ0LmVxdWFsKCBzdHJpbmdlKCAxMjMgKSwgXCIxMjNcIiApO1xuXG5cdFx0fSApO1xuXG5cdH0gKTtcblxuXG5cdGRlc2NyaWJlKCBcImBzdHJpbmdlKCAnaGVsbG8gd29ybGQnIClgXCIsICggKSA9PiB7XG5cblx0XHRpdCggXCJzaG91bGQgYmUgZXF1YWwgdG8gJ2hlbGxvIHdvcmxkJ1wiLCAoICkgPT4ge1xuXG5cdFx0XHRhc3NlcnQuZXF1YWwoIHN0cmluZ2UoIFwiaGVsbG8gd29ybGRcIiApLCBcImhlbGxvIHdvcmxkXCIgKTtcblxuXHRcdH0gKTtcblxuXHR9ICk7XG5cblxuXHRkZXNjcmliZSggXCJgc3RyaW5nZSggeyAnaGVsbG8nOiAnd29ybGQnIH0gKWBcIiwgKCApID0+IHtcblxuXHRcdGl0KCBcInNob3VsZCBiZSBlcXVhbCB0byAnW29iamVjdCBPYmplY3RdJ1wiLCAoICkgPT4ge1xuXG5cdFx0XHRhc3NlcnQuZXF1YWwoIHN0cmluZ2UoIHsgXCJoZWxsb1wiOiBcIndvcmxkXCIgfSApLCBcIltvYmplY3QgT2JqZWN0XVwiICk7XG5cblx0XHR9ICk7XG5cblx0fSApO1xuXG5cblx0ZGVzY3JpYmUoIFwiYHN0cmluZ2UoICggKSA9PiB7IH0gKWBcIiwgKCApID0+IHtcblx0XHRpdCggXCJzaG91bGQgYmUgZXF1YWwgdG8gJyggKSA9PiB7IH0nXCIsICggKSA9PiB7XG5cdFx0XHQvLzogQGlnbm9yZTpcblx0XHRcdGxldCBwYXR0ZXJuID0gL1xcKFxccypcXClcXHMqXFw9XFw+XFxzKlxce1xccypcXH0vO1xuXHRcdFx0bGV0IGRhdGEgPSBzdHJpbmdlKCAoICkgPT4geyB9ICk7XG5cdFx0XHRsZXQgdGVzdCA9IHBhdHRlcm4udGVzdCggZGF0YSApO1xuXHRcdFx0Ly86IEBlbmQtaWdub3JlXG5cdFx0XHRhc3NlcnQuZXF1YWwoIHRlc3QsIHRydWUgKTtcblxuXHRcdH0gKTtcblx0fSApO1xuXG5cblx0ZGVzY3JpYmUoIFwiYHN0cmluZ2UoIGZ1bmN0aW9uIHRlc3QoICl7IHJldHVybiAndGVzdCcgfSApYFwiLCAoICkgPT4ge1xuXHRcdGl0KCBcInNob3VsZCBiZSBlcXVhbCB0byAnZnVuY3Rpb24gdGVzdCggKXsgcmV0dXJuICd0ZXN0JyB9J1wiLCAoICkgPT4ge1xuXHRcdFx0Ly86IEBpZ25vcmU6XG5cdFx0XHRsZXQgcGF0dGVybiA9IC9mdW5jdGlvblxccyt0ZXN0XFxzKlxcKFxccypcXClcXHMqXFx7XFxzKnJldHVyblxccytcXCd0ZXN0XFwnXFxzKlxcfS87XG5cdFx0XHRsZXQgZGF0YSA9IHN0cmluZ2UoIGZ1bmN0aW9uIHRlc3QoICl7IHJldHVybiAndGVzdCcgfSApO1xuXHRcdFx0bGV0IHRlc3QgPSBwYXR0ZXJuLnRlc3QoIGRhdGEgKTtcblx0XHRcdC8vOiBAZW5kLWlnbm9yZVxuXHRcdFx0YXNzZXJ0LmVxdWFsKCB0ZXN0LCB0cnVlICk7XG5cblx0XHR9ICk7XG5cdH0gKTtcblxufSApO1xuXG4vLzogQGVuZC1jbGllbnRcblxuXG4iXX0=
//# sourceMappingURL=test.support.js.map
