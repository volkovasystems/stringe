
const assert = require( "assert" );
const stringe = require( "./stringe.js" );

assert.equal( stringe( global ), "[object global]", "should be equal" );

assert.equal( stringe( true ), "true", "should be 'true'" );

assert.equal( stringe( undefined ), "undefined", "should be 'undefined'" );

assert.equal( stringe( null ), "null", "should be 'null'" );

assert.equal( stringe( NaN ), "NaN", "should have value 'NaN'" );

assert.equal( stringe( Infinity ), "Infinity", "should have value 'Infinity'" );

assert.equal( stringe( Array ), "function Array() { [native code] }", "should be equal" );

assert.equal( stringe( 123 ), "123", "should have value '123'" );

assert.equal( stringe( "hello world" ), "hello world", "should have value 'hello world'" );

assert.equal( stringe( function test( ){ return 'test'; } ), "function test( ){ return 'test'; }", "should be equal" );

assert.equal( stringe( ( ) => { } ), "( ) => { }", "should be equal" );

assert.equal( stringe( { "hello": "world" } ), "[object Object]", "should be equal" );

console.log( "ok" );
