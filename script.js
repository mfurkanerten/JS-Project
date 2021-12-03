

var firstInput = document.querySelector("#xx");
var value1 = document.querySelector("#yy");
var value2 = document.querySelector("#zz");
var convButton = document.getElementsByClassName("convert");
var resetButton = document.getElementsByClassName("reset");
var result = document.getElementById("res");


function convertFromBaseToBase(str, fromBase, toBase){
    var num = parseInt(str, fromBase);
    return num.toString(toBase);
}



function setValue(){

    let a = Number(firstInput.value);
    let b = Number(value1.value);
    let c = Number(value2.value);
    result.value = convertFromBaseToBase(a,b,c);

}; 

function setReset(){
    result.value = "";
    firstInput.value = "";

}

function setSwap() {
    var val1 = value2.selectedIndex;
    var val2 = value1.selectedIndex;

    value1.selectedIndex = val1;
    value2.selectedIndex = val2;
  }










