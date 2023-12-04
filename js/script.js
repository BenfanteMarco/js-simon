// genero numeri casuali
function randomNumber(){
    return Math.floor(Math.random() * 100 + 1);
}

// inserire numeri in un array
const arrayNum = [];

// ciclo che esce solo quando arrayNum avrà lunghezza 5
while(arrayNum.length < 5){
    let num = randomNumber();
    if(!arrayNum.includes(num)){
        arrayNum.push(num);
    }
}