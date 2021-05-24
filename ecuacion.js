let x = Math.floor(Math.random() * 100);
let y = Math.floor(Math.random() * 100);
let aleatorie = Math.floor(Math.random() * 10)+1;
let aleatorie2 = Math.floor(Math.random() * 10)+1;

let x1 = x * aleatorie;
let y1 = y * aleatorie2;

let result2 = document.getElementById("Zum42");
let result = document.getElementById("Suma1");

function sumas() {
    let suma1 = x + y;
    let suma2 = x1 + y1;
    result.textContent = "x" + " + " + " y " + " = " + suma1
    result2.textContent = aleatorie + "x" + "+" + aleatorie2 + "y" + "=" + suma2
}
sumas();

function ecuation(){
    
}

