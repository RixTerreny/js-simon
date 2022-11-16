setTimeout(scomparsaNumeri, 30000);

const addNumber =document.getElementById("num");

for (let i = 0; i <= 5; i++) {
    let numGen = Math.floor(Math.random()*50);
    console.log(numGen);
    addNumber.innerHTML= addNumber.innerHTML+" "+`"`+numGen+`"`;
}

const timer = document.getElementById("timer");


const repeatInt = setInterval(timePasses,1000);

i=30;
timer.innerHTML = i;

function timePasses() {
    i--
    if (i==0) {
        clearInterval(repeatInt);
    }
    timer.innerHTML = i;
}



function scomparsaNumeri() {
    addNumber.classList.add("d-none");

    //verifica numeri
    let counter = 0;
    setTimeout(askNum, 500);

    for (let j = 0; j < array.length; j++) {
        function askNum() {
            let  numInserito = prompt("inserisci un numero");
            if (numInserito==0) {
                
            }
        }
    }
    
}