import info, { suma, resta, multiplicacion, division } from './calculadora.js';

const calcular = (operacion, valor1, valor2) => {
    let resultado;
    switch (operacion) {
        case 'suma':
            resultado = suma(valor1, valor2);
            break;
        case 'resta':
            resultado = resta(valor1, valor2);
            break;
        case 'multiplicacion':
            resultado = multiplicacion(valor1, valor2);
            break;
        case 'division':
            resultado = division(valor1, valor2);
            break;
        default:
            resultado = "Error: Operación no reconocida.";
    }
    console.log(`El resultado de la ${operacion} es: ${resultado}`);
};

console.log("--- Información del Módulo Calculadora ---");
console.log(info());
console.log("---------------------------------------");

console.log("\n--- Pruebas de Cálculos ---");
calcular('suma', 10, 5);
calcular('resta', 20, 7);
calcular('multiplicacion', 8, 4);
calcular('division', 100, 10);

console.log("\n--- Pruebas de Errores ---");
calcular('suma', 'hola', 5);
calcular('division', 10, 0);
calcular('multiplicacion', 5, 'adios');
calcular('operacion_desconocida', 1, 2);