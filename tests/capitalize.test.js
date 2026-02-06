import assert from 'power-assert';
import capitalize from '../src/capitalize.js';

assert(capitalize('hello') === 'Hello');
assert(capitalize('Hello') === 'Hello');
assert(capitalize('') === '');
assert(capitalize('javaScript') === 'JavaScript');
assert(capitalize('world') === 'World');

console.log('✅ Tests de capitalize pasaron');
