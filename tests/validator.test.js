import makeValidator from '../src/validator.js';

describe('Validator', () => {

  test('validator sin reglas acepta cualquier valor', () => {
    // 1️⃣ CONFIGURAR
    const validator = makeValidator();

    // 2️⃣ PROBAR
    expect(validator.isValid('hola')).toBe(true);
    expect(validator.isValid(123)).toBe(true);
    expect(validator.isValid(null)).toBe(true);
  });


  test('validator con regla: debe ser número', () => {
    // 1️⃣ CONFIGURAR
    const validator = makeValidator();
    const isNumber = (v) => typeof v === 'number';

    validator.addCheck(isNumber);

    // 2️⃣ PROBAR
    expect(validator.isValid(10)).toBe(true);
    expect(validator.isValid('hola')).toBe(false);
  });


  test('validator con múltiples reglas', () => {
    // 1️⃣ CONFIGURAR
    const validator = makeValidator();

    const isNumber = (v) => typeof v === 'number';
    const isPositive = (v) => v > 0;

    validator.addCheck(isNumber);
    validator.addCheck(isPositive);

    // 2️⃣ PROBAR
    expect(validator.isValid(10)).toBe(true);   // número positivo ✅
    expect(validator.isValid(-3)).toBe(false);  // número pero no positivo ❌
    expect(validator.isValid('hola')).toBe(false); // ni número ❌
  });

});
