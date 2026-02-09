import capitalize from '../src/capitalize.js';

describe('capitalize()', () => {

  // Casos normales
  describe('basic behavior', () => {
    test('capitalizes a lowercase word', () => {
      expect(capitalize('hello')).toBe('Hello');
    });

    test('does not change an already capitalized word', () => {
      expect(capitalize('World')).toBe('World');
    });
  });

  //  Edge cases
  describe('edge cases', () => {
    test('empty string', () => {
      expect(capitalize('')).toBe('');
    });

    test('one character', () => {
      expect(capitalize('a')).toBe('A');
    });
  });

});

