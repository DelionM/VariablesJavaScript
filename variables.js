document.write("<h2>Adiós mundo</h2>");
alert("Soy una alerta alv");
console.log("para entrara a la consola es con fn + f12");

/*definición de los valores
    var me permite acceder a esta variable desde cualquier parte del código
    esto puede causar problemas.
    let me permite cambiar la variable de valor en un futuro como lo muestro en el ejemplo de abajo
    const no me deja cambiar el valor de la variable nunca de los jamas
*/
var edad;
let nombre = "Brayan";
nombre = "Giovanni";
console.log(nombre);

const correo = "delion@gmail.com";
console.log(correo);

/*ejemplo de asignación multivariable*/

let numero, pais, id;
numero = 123456789;
pais = "Colombia";
id = 123456789;
console.log("numero de telefono " + numero + " País: " + pais, id);

const resultado = 4 + 4;
console.log(resultado);
const nombre1 = "Brayan ";
const nombre2 = "Giovanni";
const nombreCompleto = nombre1 + nombre2;
console.log(nombreCompleto);

//de String a int en corto padrino 😎
let miVariable = 'Texto';
miVariable = 5;
console.log(miVariable);
