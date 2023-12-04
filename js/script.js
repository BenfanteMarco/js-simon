// genero numeri casuali
function randomNumber(){
    return Math.floor(Math.random() * 100 + 1);
}

// funzione di reset
function reset(){
    document.getElementById('numbers').innerHTML = 'inserisci i numeri mostrati';
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

// collego all'html
document.getElementById('numbers').innerHTML = arrayNum;

// time for reset
setTimeout(function(){
    document.getElementById('numbers').innerText = '';
}, 5000)

// far inserire i numeri all'user con il timer
setTimeout(function(){
    const userNum = [];
    while(userNum.length < 5){
        let number = parseInt(prompt('inserisci il numero'));
        if(isNaN(number) == false){
            userNum.push(number);
        }
    }
}, 6000)