const INGREDIENTES_SOPA = "agua,verduras,carne o pollo";

var ingredienteCondimento = confirm ("hay condimentos para la sopa?");
var ingredienteCuboCaldo = confirm ("hay un cubo de caldo para la sopa?");

if (INGREDIENTES_SOPA && ingredienteCondimento) {
    alert ("el robot realizo la sopa")
} else { 
    alert ("la sopa no se realizo por falta de ingredientes")
}