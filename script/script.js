const howeWork = +prompt("give me a HW number")
//1 Confirms
if(howeWork==1){
    let arr = [];
    arr = [confirm("Are you human?"), confirm("Let`s talk?"), confirm("Let`s play?")]; 
    console.log(arr);
}

//2 Prompts
if(howeWork==2){
    let arr = [];
    arr[0] = prompt('Hey?')
    arr[1] = prompt('Not hey?')
    arr[2] = prompt('Are you here?')
    console.log(arr)
}

//3 Item access
if(howeWork==3){
    let arr = ['what', null, 2, 3, 4, 5, 6, 7, 8, 9, 10];
    let index = +prompt('Give me index')
    if (index) {
        console.log(arr[index], arr.length)
    }
    else{
        alert('no index')
    }
}
//4 Item change
if(howeWork==4){
    let arr = [];
    let index = +prompt('Give me index')
    if (index) {
        let item = +prompt('Give me item')
        arr[index] = item3
        console.log(arr)
    }
    else{
        alert('no index')
    }
}

//5 Multiply table
if(howeWork==5){
    let result = 0
    const arr = [[0, 0, 0, 0, 0], [0, 1, 2, 3, 4], [0, 2, 4, 6, 8], [0, 3, 6, 9, 12], [0, 4, 8, 12, 16]]
    let first = +prompt('first sumbol')
    let second = +prompt('second sumbol')
    if(first && second) {
        result = alert(arr[first][second])
    }
    else{
        alert('smth wrong')
    }
}

//6 Multiply table slice
if(howeWork==6){
    const arr = [[0, 0, 0, 0, 0], [0, 1, 2, 3, 4], [0, 2, 4, 6, 8], [0, 3, 6, 9, 12], [0, 4, 8, 12, 16]]
    let arr2 = arr.slice(1)
    arr2[0] = arr2[0].slice(1);
    arr2[1] = arr2[1].slice(1);
    arr2[2] = arr2[2].slice(1);
    arr2[3] = arr2[3].slice(1);
    console.log(arr2);
}

//7 IndexOf Word
if(howeWork==7){
    let text = prompt("Write a sentence");
    let word = prompt("Word in sentence");
    let arr = text.split(" ");
    if(arr.indexOf(word) !== -1){
        console.log(arr.indexOf(word))
    }
    else{
        console.log("Not found")
    }
}

//8 Reverse
if(howeWork==8){
    let arr = [];
    let reverseArr = [];
    let add = 0
    while( add < 5){
        add += 1 
        arr.push(prompt('Element'))
    }
    while (arr.length > 0) {
        reverseArr.push(arr.pop());
    }
    console.log(reverseArr)
}

//9 Reverse 2
if(howeWork==9){
    let arr = [];
    let reverseArr = [];
    let reverseArr2 = [];
    let add = 0
    while( add < 5){
        add += 1 
        arr.push(prompt('Element'))
    }
    while (arr.length > 0) {
        reverseArr.push(arr.pop());10
    }
    while(reverseArr.length > 0){
        reverseArr2.unshift(reverseArr.shift());
    }
    console.log(reverseArr2)
}

//10 Copy
if(howeWork==10){
    let arr = [[0, 0, 0, 0, 0], [0, 1, 2, 3, 4], [0, 2, 4, 6, 8], [0, 3, 6, 9, 12], [0, 4, 8, 12, 16]];
    let arrCopy =[...arr];
    console.log(arrCopy);
}

//11 Deep Copy
if(howeWork==11){
    let arr = [[0, 0, 0, 0, 0], [0, 1, 2, 3, 4], [0, 2, 4, 6, 8], [0, 3, 6, 9, 12], [0, 4, 8, 12, 16]];
    let deepCopy = JSON.parse(JSON.stringify(arr));
    console.log(deepCopy);
}

//12 Array Equals
if(howeWork==12){
    let arr = [1,2,3]
    let arr2 = arr
    console.log(arr===arr2)
}

//13 Flat
if(howeWork==13){
    let arr = [[0, 0, 0, 0, 0], [0, 1, 2, 3, 4], [0, 2, 4, 6, 8], [0, 3, 6, 9, 12], [0, 4, 8, 12, 16]]
    let arr2 = [...arr[0], ...arr[1], ...arr[2], ...arr[3], ...arr[4]]
    console.log(arr2)
}

//14 Destruct
if(howeWork==14){
    let[one, , , , five, , , , nine] = prompt('write your sentence').split('');
    alert(one + ' ' + five + ' ' + nine);
}

//15 Destruct default
if(howeWork==15){
    let [, two = '!', , four = '!', five = '!'] =prompt('write your sentence ').split('');
    alert(two + ' ' + four + ' ' + five);    
}

//16 Multiply table rest
if(howeWork==16){
    
}

//17 For Alert
if(howeWork==17){
    let names = ["John", "Paul", "George", "Ringo"]
    for(name of names){
        alert(name)
    }
}

//18 For Select Option
if(howeWork==18){
    const currencies = ["USD", "EUR", "GBP", "UAH"]
    let   str = "<select>"
    for (const currency of currencies){
        str += `<option value='${currency}'>${currency}</option>`;
    }
    str+= "</select>"
    document.write(str) //document.write відобразить ваш HTML на сторінці
}

//19 For Table Horizontal
if(howeWork==19){
    const names = ["John", "Paul", "George", "Ringo"]
    let   str = "<table><tr>"
    for (const name of names){
        str += `<td>${name}</td>`;
    }
    str+= "</tr></table>"
    document.write(str) //document.write відобразить ваш HTML на сторінці
}

//20 For Table Vertical
if(howeWork==20){
    const names = ["John", "Paul", "George", "Ringo"]
    let   str = "<table>"
    for (const name of names){
        str += `<tr><td>${name}</td></tr>`;
    }
    str+= "</table>"
    document.write(str) //document.write відобразить ваш HTML на сторінці
}

//21 For Table Letters
if(howeWork==21){
    const currencies = ["USD", "EUR", "GBP", "UAH"]
    let   str = "<table>"
    for (const currency of currencies){ //цикл створює рядки
        str += `<tr>`;
        console.log(currency)
        for (const letter of currency){ //цикл створює осередки в одному рядку
            str += `<td>${letter}</td>`
            console.log(letter)
        }
        str += `</tr>`;
    }
    str+= "</table>"
    document.write(str) //document.write відобразить ваш HTML на сторінці
}

//22 For Multiply Table
if(howeWork==22){
    let arr = [[0, 0, 0, 0, 0], [0, 1, 2, 3, 4], [0, 2, 4, 6, 8], [0, 3, 6, 9, 12], [0, 4, 8, 12, 16]]
    let str = "<table>"
    for (let number of arr.keys()){
    if (number % 2 == 0) {
        str += "<tr style='background-color: Tomato;'>";
    } else {
        str += "<tr style='background-color: DodgerBlue;'>";
    }
    for (let numbers of arr[number]) {
        str += `<td style = 'text-align: center; border: 1px solid; width: 25px; height: 25px;'>${numbers}</td>`;
    }
    str += "</tr>";
    }
    str += "</table>";
    document.write(str);
}

//23 Function Capitalize
if(howeWork==23){
    const capitalize = str => {
        let result = str.slice(0, 1).toUpperCase() + str.slice(1).toLowerCase();
        return result //саме цей код забезпечить повернення результату функції
    }
   console.log(capitalize("cANBerRa")) //Canberra
}

//24 Map Capitalize
if(howeWork==24){
    const capitalize = str => {
        let result = str.slice(0, 1).toUpperCase() + str.slice(1).toLowerCase();
        return result
    }
    let sentense = prompt("Give a sentense").split(' ')
    let mapSentense = sentense.map(x => capitalize(x)).join(' ');
    alert(mapSentense)
}

//25 Filter Lexics
if(howeWork==25){
    let strFilter = prompt("Give a sentense").split(' ');
    let arr = ['lox', 'net', 'who'];
    let result = strFilter.filter(item => !arr.includes(item.toLowerCase())).join(' ');
    alert(result);
}

//26 Beep Lexics
if(howeWork==26){
    let strFilter = prompt('Enter the string').split(' ');
    let arr = ['lox', 'net', 'who'];
    let result = strFilter.map(item => arr.includes(item.toLowerCase()) ? 'BEEP' : item).join(' ');
    alert(result);
}

//27 Reduce HTML
if(howeWork==27){
    const currencies = ["USD", "EUR", "GBP", "UAH"]
    let str = "<select>"
    str += currencies.reduce((a, b) => `${a}<option value='${b}'>${b}</option>`, "")
    str += "</select>"
    document.write(str)
}

//28 For Brackets Hell Check
if(howeWork==28){
    const line = prompt()
    const bracketsStack = []
    let i = 0
    let errorIndex = -1
    
    for (const character of line) {
        if (character === '[' || character === '(' || character === '{') {
            bracketsStack.push(character) 
        } 
        else if (character === ']' || character === ')' || character === '}') {
            if (bracketsStack.length === 0) {
                errorIndex = i
                break
            }
            const lastOpeningBracket = bracketsStack.pop() 
            if (
                (character === ']' && lastOpeningBracket !== '[') ||
                (character === ')' && lastOpeningBracket !== '(') ||
                (character === '}' && lastOpeningBracket !== '{')
            ) {
                errorIndex = i
                break
            }
        }
    
        i++
    }
    
    if (errorIndex !== -1) {
        console.log(`Помилка у позиції ${errorIndex}`)
    } 
    else {
        console.log('Рядок містить правильну послідовність дужок')
    }
}
