//Variables utiles
//Precio base de la cotización, en quetzales, lo puede cambiar
const precio_base = 2000;

//Valores de los recargos según la edad, y según estado civil y edad de cónyugue, y según hijos de cónyugue
const edad_18 = 0.1; // 10%
const edad_25 = 0.2; // 20%
const edad_50 = 0.3; // 30%

const casado_18 = 0.1; // 10%
const casado_25 = 0.2; // 20%
const casado_50 = 0.3; // 30%

const hijos_recargo = 0.2; // 20%

//Recargo
let recargo_edad = 0;
let recargo_conyuge = 0;
let recargo_hijos = 0;
let recargo_total = 0;

//Precio final
let precio_final = 0;

//Mensajes de alerta para ingresar datos
let nombre = prompt("Ingrese su nombre y apellido, por favor");

mayor_de_edad_switch = true;
let edad = parseInt(prompt("¿Cuantos años tiene? Ingrese solamente números "));

//while loop para hacer proceso solo si es mayor de 17 el cliente que cotiza
if (edad > 18) {
  if (edad >= 18 && edad < 25) {
    //Calculamos el recargo en base a la edad
    recargo_edad = precio_base * edad_18;
  } else if (edad >= 25 && edad < 50) {
    recargo_edad = precio_base * edad_25;
  } else if (edad >= 50) {
    recargo_edad = precio_base * edad_50;
  }

  precio_final = precio_base + recargo_edad;

  let casado = prompt("¿Está casado actualmente? Responda si/no, sin tildes.");

  //Comprobamos la edad del cónyuge, solamente si se está casado/a
  let edad_conyuge;
  if ("SI" == casado.toUpperCase()) {
    edad_conyuge = parseInt(
      prompt("¿Que edad tiene su esposo/a? Ingrese un número entero.")
    );
    // 2. Recargo por la edad del conyuge
    if (edad_conyuge >= 18 && edad_conyuge < 25) {
      //Calculamos el recargo en base a la edad
      recargo_conyuge = precio_base * edad_18;
    } else if (edad_conyuge >= 25 && edad_conyuge < 50) {
      recargo_conyuge = precio_base * edad_25;
    } else if (edad_conyuge >= 50) {
      recargo_conyuge = precio_base * edad_50;
    }
  }

  //consultar si tiene hijos
  let hijos = prompt("¿Tiene hijos o hijas? Si/no.");

  //Comprobamos la cantidad de hijos solamente si los tienen
  let cantidad_hijos = 0;
  //1. Convierte la cantidad de hijos a número
  if ("SI" == hijos.toUpperCase()) {
    cantidad_hijos = parseInt(prompt("¿Cuántos hij@s tiene en total?"));
  }
  // 3. Recargo por la cantidad de hijos
  recargo_hijos = cantidad_hijos * (precio_base * hijos_recargo);

  //Aquí debe calcular el recargo total basado en las respuestas ingresadas
  recargo_total = recargo_edad + recargo_conyuge + recargo_hijos;
  precio_final = precio_base + recargo_total;
  //Resultado
  alert(
    "Para el asegurado " +
      nombre +
      " el recargo total será de: " +
      recargo_total
  );
  alert("El precio final cotizado es de: " + precio_final);
} else {
  alert("Por ser menor que 18 años, no aplica para la cobertura del seguro.");
}
