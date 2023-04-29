const inputIngrediente1 = document.querySelector("#ingrediente-1");
const inputIngrediente2 = document.querySelector("#ingrediente-2");
const inputIngrediente3 = document.querySelector("#ingrediente-3");
const inputIngrediente4 = document.querySelector("#ingrediente-4");
const inputIngrediente5 = document.querySelector("#ingrediente-5");
const inputIngrediente6 = document.querySelector("#ingrediente-6");

const pResultado = document.querySelector("#resultado");

function verificarPreparacionSopa(){
    let tenemosIngrediente1 =inputIngrediente1.value;
    let tenemosIngrediente2 =inputIngrediente2.value;
    let tenemosIngrediente3 =inputIngrediente3.value;
    let tenemosIngrediente4 =inputIngrediente4.value;
    let tenemosIngrediente5 =inputIngrediente5.value;
    let tenemosIngrediente6 =inputIngrediente6.value;
    console.log(tenemosIngrediente1);
    console.log(tenemosIngrediente2);
    console.log(tenemosIngrediente3);
    console.log(tenemosIngrediente4);
    console.log(tenemosIngrediente5);
    console.log(tenemosIngrediente6);
    if(  ((tenemosIngrediente1 == "Y" && tenemosIngrediente2 == "Y") && (tenemosIngrediente3 == "Y" || tenemosIngrediente4 == "Y")) && (tenemosIngrediente5 == "Y" || tenemosIngrediente6 == "Y")){
        pResultado.innerHTML = "Preparando sopa!";
    }else{
        pResultado.innerHTML = "No hay ingredientes necesarios para preparar la sopa!";
    
    }
}