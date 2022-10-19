//maña revisar video clase 4 para hacer calculadora//

//function saludar () {
//alert("hola");
//}
//function solicitarNombre(){
    //let nombreIngreso = prompt ("igresar nombre:");
    //alert("el nombre ingresado es "+ nombreIngreso);
//}

//function holaCrayola(valor1, valor2 ){
    //console.log(valor1+""+valor2)
//}

//function resta (parametro1, parametro2){
    //return (parametro1 - parametro2); // se hace un Break
//}
//console.log(resta(5, 3));
//let resultado = resta (3,1);
//console.log(resultado);

//function Calculadora(valor1, valor2, operacion){
    //switch(operacion){
        //case "+":
            //return valor1 + valor2;
            //break;
        //case "-":
            //return valor1 - valor2;
            //break;
        //case "-":
           //return valor1 * valor2;
            //break;
       // default:
            //return 0;
           //break;
    //}
//}
//let valorIng1 = parseInt(prompt("ingrese valor 1:")); 
//let valorIng2 = parseInt(prompt("ingrese valor 2:"));
//let valorCal = Calculadora (valorIng1, valorIng2, "+");
//console.log(valorCal)

//let resultado = 0;
//function sumar (num1, num2){
    //let resultado = num1 + num2;
   // console.log (resultado)
//}
//sumar (2,2);

//console.log (resultado)



//Declaramos variables
var operandoa;
var operandob;
var operacion;

function init(){
    //variables
    var resultado = document.getElementById('resultado');
    var reset = document.getElementById('reset');
    var suma = document.getElementById('suma');
    var resta = document.getElementById('resta');
    var multiplicacion = document.getElementById('multiplicacion');
    //var division = document.getElementById('division');
    var igual = document.getElementById('igual');
    var uno = document.getElementById('uno');
    var dos = document.getElementById('dos');
    var tres = document.getElementById('tres');
    var cuatro = document.getElementById('cuatro');
    var cinco = document.getElementById('cinco');
    var seis = document.getElementById('seis');
    var siete = document.getElementById('siete');
    var ocho = document.getElementById('ocho');
    var nueve = document.getElementById('nueve');
    var cero = document.getElementById('cero');
  }

  //Eventos de click
  uno.onclick = function(e){
    resultado.textContent = resultado.textContent  + "1";
}
dos.onclick = function(e){
    resultado.textContent = resultado.textContent  + "2";
}
tres.onclick = function(e){
    resultado.textContent = resultado.textContent  + "3";
}
cuatro.onclick = function(e){
    resultado.textContent = resultado.textContent  + "4";
}
cinco.onclick = function(e){
    resultado.textContent = resultado.textContent  + "5";
}
seis.onclick = function(e){
    resultado.textContent = resultado.textContent  + "6";
}
siete.onclick = function(e){
    resultado.textContent = resultado.textContent  + "7";
}
ocho.onclick = function(e){
    resultado.textContent = resultado.textContent  + "8";
}
nueve.onclick = function(e){
    resultado.textContent = resultado.textContent  + "9";
}
cero.onclick = function(e){
    resultado.textContent = resultado.textContent  + "0";
}
reset.onclick = function(e){
    resetear();
}
suma.onclick = function(e){
    operandoa = resultado.textContent;
    operacion = "+";
    limpiar();
}
resta.onclick = function(e){
    operandoa = resultado.textContent;
    operacion = "-";
    limpiar();
}
multiplicacion.onclick = function(e){
    operandoa = resultado.textContent;
    operacion = "*";
    limpiar();
}
division.onclick = function(e){
    operandoa = resultado.textContent;
   operacion = "/";
    limpiar();
}
igual.onclick = function(e){
    operandob = resultado.textContent;
    resolver();
}


function limpiar(){
    resultado.textContent = "";
  }
  function resetear(){
    resultado.textContent = "";
    operandoa = 0;
    operandob = 0;
    operacion = "";
  }

  
  function resolver(){
  var res = 0;
  switch(operacion){
    case "+":
      res = parseFloat(operandoa) + parseFloat(operandob);
      break;
    case "-":
        res = parseFloat(operandoa) - parseFloat(operandob);
        break;
    case "*":
      res = parseFloat(operandoa) * parseFloat(operandob);
      break;
    case "/":
      res = parseFloat(operandoa) / parseFloat(operandob);
      break;
  }
  resetear();
  resultado.textContent = res;
}