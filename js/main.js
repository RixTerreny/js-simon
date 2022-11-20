setTimeout(scomparsaNumeri, 30000);

const addNumber =document.getElementById("num");
let arrayNum =[];

for (let i = 0; i < 5; i++) {
    let numGen = Math.floor(Math.random()*50);
    console.log(numGen);
    arrayNum.push(numGen)
    addNumber.innerHTML= addNumber.innerHTML+" "+`"`+numGen+`"`;
}

console.log(arrayNum);
const timer = document.getElementById("timer");
const repeatInt = setInterval(timePasses,1000);

cuntdown=30;
timer.innerHTML = cuntdown;

function timePasses() {
    cuntdown--
    if (cuntdown==0) {
        clearInterval(repeatInt);
    }
    timer.innerHTML = cuntdown;
}

function scomparsaNumeri() {
    addNumber.classList.add("d-none");

    //verifica numeri
    let counter = 0;
    setTimeout(askNum, 200);

    function askNum() {
        for (let i = 0; i < 5; i++) {
            let  numInserito = prompt("inserisci un numero");
            if (numInserito==arrayNum[i]) {
                console.log(i+1+"° numero indovinato");
            }
            else{
                console.log(i+1+"° numero sbagliato");
            }
        }
    }
    
}