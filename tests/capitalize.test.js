import capitalize from '../src/capitalize.js';

test('capitalizes first letter', () => {
  expect(capitalize('hello')).toBe('Hello');
});

test('returns empty string when input is empty', () => {
  expect(capitalize('')).toBe('');
});

test('does not change already capitalized word', () => {
  expect(capitalize('Hello')).toBe('Hello');
});

test('only capitalizes first letter', () => {
  expect(capitalize('javaScript')).toBe('JavaScript');
});
