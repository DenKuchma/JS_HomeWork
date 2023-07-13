const howeWork = +prompt("give me a HW number")
if(howeWork==1){
    let number = +prompt("Give a number");
    if(number){
        if(number % 2 === 0){
            alert("All right, odd number");
        }
        else{
            alert("All right, even number");
        }
    }
    else{
        alert("Oops, no number")
    }
}
if(howeWork==2){
    let text = prompt("Write a sentence")
    if(text.includes("блять")){
        alert("Don't use this word");
    }
    else{
        alert("Have a nice sentence");
    }
}
if(howeWork==3){
    const message = confirm('Поговорим?')
}
if(howeWork==4){
    const message = confirm('Ты женщина?')
    if (message) {
        alert("Вы женщина");
    } else {
        alert("Вы мужчина");
    }
}
if(howeWork==5){
    let size = +prompt("Введите размер одежды") 
    size < 42 ? alert("S") : size < 46 ? alert("M") : size < 50 ? alert("L") : size < 54 ? alert("XL") : size >= 54 ? alert("XXL") : alert("Error")
}
if(howeWork==6){
    const gender = confirm('Ты женщина?') ? "Женщина" : "Мужчина"
    alert(gender)
}
if(howeWork==7){
    let age = +prompt("How old are you?") || alert("Error");
    if (age){
        const year = 2022 - age;
        const year2 = year - 1
        alert("You born in " + year + " or " + year2)
    }
}
if(howeWork==8){
    confirm('Шопинг?') || alert('ты - бяка')
}
if(howeWork==9){
    if(!confirm('Шопинг?')){
        alert('ты - бяка')
    }
}
if(howeWork==10){
    let name = prompt("Name") || 'Anton';
    let surname = prompt("Surname") || 'Antonchev';
    let patronymic =  prompt("Patronymic") || 'Antonovich';
    let fullName = name + ' ' + surname + ' ' + patronymic;
    alert(fullName);
}
if(howeWork==11){
    let name = prompt("Name")
    let surname = prompt("Surname")
    let patronymic =  prompt("Patronymic")
    if(!name){
        name = 'Anton';
    }
    if(!surname){
        surname = 'Antonchev';
    }
    if(!patronymic){
        patronymic = 'Antonovich';
    }
    let fullName = name + ' ' + surname + ' ' + patronymic
    alert(fullName);
}
if(howeWork==12){
    let credentials = {
        login: 'admin',
        password: 'qwerty',
    };
    let yourLogin = prompt("Login")
    if( yourLogin === credentials.login){
        let yourPassword = prompt("Password")
        if(yourPassword === credentials.password){
            alert("Congrat!")
        }
        else{
            alert("Eror password")
        }
    }
    else{
        alert("Eror login")
    }
}
if(howeWork==13){
    let start;
    do{
        start = prompt("Тебе нужна операция с usd или eur?").toLowerCase();
    } while (start !== "usd" && start !== "eur");
    let summ = +prompt("Какая сумма?");
    let buyRateD = 39.99
    let sellRateD = 39.49
    let buyRateE = 39.1
    let sellRateE = 38.1
    if(start === 'usd'){
        confirm("Купить доллар?") ? alert("С " + summ + " гривен, ты получиш: " + summ/buyRateD + start) : alert("С " + summ + start + " ты получиш: " + summ*sellRateD + " гривен");
    }
    if(start === 'eur'){
        confirm("Купить евро?") ? alert("С " + summ + " гривен, ты получиш: " + summ/buyRateE + start) : alert("С " + summ + start + " ты получиш: " + summ*sellRateE + " гривен");
    }
}
if(howeWork==14){
    let user;
    do{
        user = prompt("Камень ножницы или бумага?").toLowerCase();
    } while (user !== "камень" && user !== "ножницы" && user !== "бумага")
    var arr = ["камень", "ножницы", "бумага"]
    var program = Math.floor(Math.random() * arr.length);
    alert("Бот выбрал: " + arr[program]);
    if(user === "камень" && arr[program] === "камень" || user === "ножницы" && arr[program] === "ножницы" || user === "бумага" && arr[program] === "бумага"){
        alert("draw");
    }
    else if(user === "камень" && arr[program] === "ножницы" || user === "ножницы" && arr[program] === "бумага" || user === "бумага" && arr[program] === "камень"){
        alert("you win");
    }
    else{
        alert("you lose");
    }

}
if(howeWork==14.1){
    let user;
    do{
        user = prompt("Камень ножницы или бумага?").toLowerCase();
    } while (user !== "камень" && user !== "ножницы" && user !== "бумага")
    var arr = ["камень", "ножницы", "бумага"]
    var program = Math.floor(Math.random() * arr.length);
    alert("Бот выбрал: " + arr[program]);
    let result = (user === "камень" && arr[program] === "камень") || (user === "ножницы" && arr[program] === "ножницы") || (user === "бумага" && arr[program] === "бумага") ? "draw" : (user === "камень" && arr[program] === "ножницы") || (user === "ножницы" && arr[program] === "бумага") || (user === "бумага" && arr[program] === "камень") ? "you win" : "you lose";
    alert(result);
}
