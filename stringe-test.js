
const assert = require( "assert" );
const stringe = require( "./stringe.js" );

assert.ok( stringe( global ) );

assert.ok( stringe( true ) );

assert.ok( stringe( undefined ) );

assert.ok( stringe( null ) );

assert.ok( stringe( NaN ) );

assert.ok( stringe( Infinity ) );

assert.ok( stringe( Array ) );

assert.ok( stringe( 123 ) );

assert.ok( stringe( "hello world" ) );

assert.ok( stringe( function test( ){ return "test"; } ) );

assert.ok( stringe( ( ) => { } ) );

assert.ok( stringe( { "hello": "world" } ) );

console.log( "ok" );
