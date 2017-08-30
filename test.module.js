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

//: @server:
describe( "stringe", ( ) => {

	describe( "`stringe( global )`", ( ) => {
		it( "should be equal to '[object global]'", ( ) => {

			assert.equal( stringe( global ), "[object global]" );

		} );
	} );

	describe( "`stringe( true )`", ( ) => {
		it( "should be equal to 'true'", ( ) => {

			assert.equal( stringe( true ), "true" );

		} );
	} );

	describe( "`stringe( undefined )`", ( ) => {
		it( "should be equal to 'undefined'", ( ) => {

			assert.equal( stringe( undefined ), "undefined" );

		} );
	} );

	describe( "`stringe( null )`", ( ) => {
		it( "should be equal to 'null'", ( ) => {

			assert.equal( stringe( null ), "null" );

		} );
	} );

	describe( "`stringe( NaN )`", ( ) => {
		it( "should be equal to 'NaN'", ( ) => {

			assert.equal( stringe( NaN ), "NaN" );

		} );
	} );

	describe( "`stringe( Infinity )`", ( ) => {
		it( "should be equal to 'Infinity'", ( ) => {

			assert.equal( stringe( Infinity ), "Infinity" );

		} );
	} );

	describe( "`stringe( Array )`", ( ) => {
		it( "should be equal to 'function Array() { [native code] }'", ( ) => {

			assert.equal( stringe( Array ), "function Array() { [native code] }" );

		} );
	} );

	describe( "`stringe( 123 )`", ( ) => {
		it( "should be equal to '123'", ( ) => {

			assert.equal( stringe( 123 ), "123" );

		} );
	} );

	describe( "`stringe( 'hello world' )`", ( ) => {
		it( "should be equal to 'hello world'", ( ) => {

			assert.equal( stringe( "hello world" ), "hello world" );

		} );
	} );

	describe( "`stringe( { 'hello': 'world' } )`", ( ) => {
		it( "should be equal to '[object Object]'", ( ) => {

			assert.equal( stringe( { "hello": "world" } ), "[object Object]" );

		} );
	} );

	describe( "`stringe( ( ) => { } )`", ( ) => {
		it( "should be equal to '( ) => { }'", ( ) => {

			let pattern = /\(\s*\)\s*\=\>\s*\{\s*\}/;
			let data = stringe( ( ) => { } );
			let test = pattern.test( data );

			assert.equal( test, true );

		} );
	} );

	describe( "`stringe( function test( ){ return 'test' } )`", ( ) => {
		it( "should be equal to 'function test( ){ return 'test' }'", ( ) => {

			let pattern = /function\s+test\s*\(\s*\)\s*\{\s*return\s+\'test\'\s*\}/;
			let data = stringe( function test( ){ return 'test' } );
			let test = pattern.test( data );

			assert.equal( test, true );

		} );
	} );
} );
//: @end-server

//: @client:
describe( "stringe", ( ) => {

	describe( "`stringe( window )`", ( ) => {
		it( "should be equal to '[object Window]'", ( ) => {

			assert.equal( stringe( window ), "[object Window]" );

		} );
	} );

	describe( "`stringe( true )`", ( ) => {
		it( "should be equal to 'true'", ( ) => {

			assert.equal( stringe( true ), "true" );

		} );
	} );

	describe( "`stringe( undefined )`", ( ) => {
		it( "should be equal to 'undefined'", ( ) => {

			assert.equal( stringe( undefined ), "undefined" );

		} );
	} );


	describe( "`stringe( null )`", ( ) => {
		it( "should be equal to 'null'", ( ) => {

			assert.equal( stringe( null ), "null" );

		} );
	} );


	describe( "`stringe( NaN )`", ( ) => {
		it( "should be equal to 'NaN'", ( ) => {

			assert.equal( stringe( NaN ), "NaN" );

		} );
	} );

	describe( "`stringe( Infinity )`", ( ) => {
		it( "should be equal to 'Infinity'", ( ) => {

			assert.equal( stringe( Infinity ), "Infinity" );

		} );
	} );

	describe( "`stringe( Array )`", ( ) => {
		it( "should be equal to 'function Array() { [native code] }'", ( ) => {

			assert.equal( stringe( Array ), "function Array() { [native code] }" );

		} );
	} );

	describe( "`stringe( 123 )`", ( ) => {
		it( "should be equal to '123'", ( ) => {

			assert.equal( stringe( 123 ), "123" );

		} );
	} );

	describe( "`stringe( 'hello world' )`", ( ) => {
		it( "should be equal to 'hello world'", ( ) => {

			assert.equal( stringe( "hello world" ), "hello world" );

		} );
	} );

	describe( "`stringe( { 'hello': 'world' } )`", ( ) => {
		it( "should be equal to '[object Object]'", ( ) => {

			assert.equal( stringe( { "hello": "world" } ), "[object Object]" );

		} );
	} );

} );
//: @end-client


//: @bridge:
describe( "stringe", ( ) => {

	let bridgeURL = `file://${ path.resolve( __dirname, "bridge.html" ) }`;

	describe( "`stringe( window )`", ( ) => {
		it( "should be equal to '[object Window]'", ( ) => {

			let result = browser.url( bridgeURL ).execute( ( ) => stringe( window ) );

			assert.equal( result.value, "[object Window]" );

		} );
	} );

	describe( "`stringe( true )`", ( ) => {
		it( "should be equal to 'true'", ( ) => {

			let result = browser.url( bridgeURL ).execute( ( ) => stringe( true ) );

			assert.equal( result.value, "true" );

		} );
	} );

	describe( "`stringe( undefined )`", ( ) => {
		it( "should be equal to 'undefined'", ( ) => {

			let result = browser.url( bridgeURL ).execute( ( ) => stringe( undefined ) );

			assert.equal( result.value, "undefined" );

		} );
	} );

	describe( "`stringe( null )`", ( ) => {
		it( "should be equal to 'null'", ( ) => {

			let result = browser.url( bridgeURL ).execute( ( ) => stringe( null ) );

			assert.equal( result.value, "null" );

		} );
	} );

	describe( "`stringe( NaN )`", ( ) => {
		it( "should be equal to 'NaN'", ( ) => {

			let result = browser.url( bridgeURL ).execute( ( ) => stringe( NaN ) );

			assert.equal( result.value, "NaN" );

		} );
	} );

	describe( "`stringe( Infinity )`", ( ) => {
		it( "should be equal to 'Infinity'", ( ) => {

			let result = browser.url( bridgeURL ).execute( ( ) => stringe( Infinity ) );

			assert.equal( result.value, "Infinity" );

		} );
	} );

	describe( "`stringe( Array )`", ( ) => {
		it( "should be equal to 'function Array() { [native code] }'", ( ) => {

			let result = browser.url( bridgeURL ).execute( ( ) => stringe( Array ) );

			assert.equal( result.value, "function Array() { [native code] }" );

		} );
	} );

	describe( "`stringe( 123 )`", ( ) => {
		it( "should be equal to '123'", ( ) => {

			let result = browser.url( bridgeURL ).execute( ( ) => stringe( 123 ) );

			assert.equal( result.value, "123" );

		} );
	} );

	describe( "`stringe( 'hello world' )`", ( ) => {
		it( "should be equal to 'hello world'", ( ) => {

			let result = browser.url( bridgeURL ).execute( ( ) => stringe( "hello world" ) );

			assert.equal( result.value, "hello world" );

		} );
	} );

	describe( "`stringe( { 'hello': 'world' } )`", ( ) => {
		it( "should be equal to '[object Object]'", ( ) => {

			let result = browser.url( bridgeURL ).execute( ( ) => stringe( { "hello": "world" } ) );

			assert.equal( result.value, "[object Object]" );

		} );
	} );

	describe( "`stringe( ( ) => { } )`", ( ) => {
		it( "should be equal to '( ) => { }'", ( ) => {
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

			assert.equal( result, true );
		} );
	} );

	describe( "`stringe( function test( ){ return 'test' } )`", ( ) => {
		it( "should be equal to 'function test( ){ return 'test' }'", ( ) => {
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

			assert.equal( result, true );

		} );
	} );

} );
//: @end-bridge
