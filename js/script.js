// genero numeri casuali
function randomNumber(){
    return Math.floor(Math.random() * 100 + 1);
}

// funzione di reset
function reset(){
    document.getElementById('numbers').innerHTML = 'inserisci i numeri mostrati';
}

// creo una funzione che crea l'array dell'user
function userNumber(){
    const userNum = [];
    while(userNum.length < 5){
        let number = parseInt(prompt('inserisci il numero'));
        if(!isNaN(number) && !userNum.includes(number)){
            userNum.push(number);
        }
    }

    return userNum;
}

// verifico quanti numeri ho indovinato
function checkNum(userNum, randomNum){
    let check = [];
    for(let i=0; i<userNum.length; i++){
        if(randomNum.includes(userNum[i])){
            check.push(userNum[i]);
        }
    }
    return check;
}

// stampo i risultati
function printResult(array){
    let text;

    if(array.length == 1){
        text = `Hai indovinato un numero; ${array}`;
    } else{
        text = `Hai indovinato ${array.length} numeri. ecco quali: ${array}`;
    }

    document.getElementById('result').innerHTML = text;
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
}, 30000)

// far inserire i numeri all'user con il timer
setTimeout(function(){
    let userNum = userNumber();
    let checkNumbers = checkNum(userNum, arrayNum);
    printResult(checkNumbers);
}, 31000)
