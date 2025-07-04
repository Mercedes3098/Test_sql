export function suma(a, b) {
    if (typeof a !== 'number' || typeof b !== 'number') {
      return "Error: Ambos parámetros deben ser valores numéricos.";
    }
    return a + b;
  }
  
  export function resta(a, b) {
    if (typeof a !== 'number' || typeof b !== 'number') {
      return "Error: Ambos parámetros deben ser valores numéricos.";
    }
    return a - b;
  }
  
  export function multiplicacion(a, b) {
    if (typeof a !== 'number' || typeof b !== 'number') {
      return "Error: Ambos parámetros deben ser valores numéricos.";
    }
    return a * b;
  }
  
  export function division(a, b) {
    if (typeof a !== 'number' || typeof b !== 'number') {
      return "Error: Ambos parámetros deben ser valores numéricos.";
    }
    if (b === 0) {
      return "Error: No se puede dividir por cero.";
    }
    return a / b;
  }
  
  const info = () => {
    return "Con el presente modulo usted podrá realizar las operaciones básicas de matemática como sumar, restar, multiplicar y dividir.";
  };
  
  export default info;