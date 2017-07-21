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

const assert = require( "should" );

//: @server:
const stringe = require( "./stringe.js" );
//: @end-server

//: @client:
const stringe = require( "./stringe.support.js" );
//: @end-client

//: @bridge:
const path = require( "path" );
//: @end-bridge

//: @!bridge:


describe( "stringe", ( ) => {


	describe( "`stringe( global )`", ( ) => {

		it( "should return '[object global]'", ( ) => {
			assert.equal( stringe( global ), "[object global]" );
		} );

	} );

} );


//: @end-bridge


//: @bridge:
//let result = browser.url( bridgeURL ).execute( ( ) => <test> );
//result.value
describe( "stringe", ( ) => {


	let directory = __dirname;
	let testBridge = path.resolve( directory, "bridge.html" );
	let bridgeURL = `file://${ testBridge }`;

	describe( "`stringe( global )`", ( ) => {

		it( "should return '[object global]'", ( ) => {

			let result = browser.url( bridgeURL ).execute( ( ) => stringe( global ) );

			assert.equal( result.value, "[object global]" );

		} );

	} );

} );

//: @end-bridge





/*

assert.equal( stringe( global ), "[object global]", "should return '[object global]'" );

assert.equal( stringe( true ), "true", "should return 'true'" );

assert.equal( stringe( undefined ), "undefined", "should return 'undefined'" );

assert.equal( stringe( null ), "null", "should return 'null'" );

assert.equal( stringe( NaN ), "NaN", "should return 'NaN'" );

assert.equal( stringe( Infinity ), "Infinity", "should return 'Infinity'" );

assert.equal( stringe( Array ), "function Array() { [native code] }", "should return 'function Array() { [native code] }'" );

assert.equal( stringe( 123 ), "123", "should return '123'" );

assert.equal( stringe( "hello world" ), "hello world", "should return 'hello world'" );

assert.equal( stringe( function test( ){ return 'test'; } ), "function test( ){ return 'test'; }", "should return 'function test( ){ return 'test' }'" );

assert.equal( stringe( ( ) => { } ), "( ) => { }", "should return '( ) => { }'" );

assert.equal( stringe( { "hello": "world" } ), "[object Object]", "should return '[object Object]'" );

*/
