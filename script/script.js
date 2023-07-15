
// // 1 Literals
// const cat = {
//     weight: '5 кг',
//     eye_color: 'black',
//     breed: 'Британец'
// }
// // 2 Literals expand
// cat[prompt('Key')] = prompt('Value')
// console.log(cat)
// // 3 Literals copy
// const catNew = {
//     ...cat,
// }
// catNew[prompt('Key')] = prompt('Value')
// console.log(catNew)

// //4 Html tree
// let body = {
//     tagName: 'body',
//     children: [
//         {
//             tagName: 'div',
//             children:[
//                 {
//                     tagName: 'span',
//                     children:['Enter a data please:'],
//                 },
//                 {
//                     tagName: 'br',
//                 },
//                 {
//                     tagName: 'input ',
//                     attrs: {
//                         type: "text",
//                         id: "name",
//                     },
//                 },
//                 {
//                     tagName: 'input ',
//                     attrs: {
//                         type: "text",
//                         id: "surname",
//                     },
//                 },
//             ]
//         },
//         {
//             tagName: 'div',
//             children:[
//                 {
//                     tagName: 'button ',
//                     attrs: {
//                         id: "ok",
//                     },
//                     children:['OK'],
//                 },
//                 {
//                     tagName: 'button ',
//                     attrs: {
//                         id: "cancel",
//                     },
//                     children:['Cancel'],
//                 },
//             ]
//         }
//     ]
// };

// const buttonText = body.children[1].children[1].children[0];
// console.log(buttonText);

// const inputId = body.children[0].children[3].attrs.id;
// console.log(inputId);

// //5 Parent
// var body = {
//     tagName: 'body',
//     children: [
//         {
//             tagName: 'div',
//             children:[
//                 {
//                     tagName: 'span',
//                     children:['Enter a data please:'],
//                     ...body,
//                 },
//                 {
//                     tagName: 'br',
//                     ...body,
//                 },
//                 {
//                     tagName: 'input ',
//                     attrs: {
//                         type: "text",
//                         id: "name",
//                     },
//                     ...body,
//                 },
//                 {
//                     tagName: 'input ',
//                     attrs: {
//                         type: "text",
//                         id: "surname",
//                     },
//                     ...body,
//                 },
//             ],
//             ...body,
//         },
//         {
//             tagName: 'div',
//             children:[
//                 {
//                     tagName: 'button ',
//                     attrs: {
//                         id: "ok",
//                     },
//                     children:['OK'],
//                     ...body,
//                 },
//                 {
//                     tagName: 'button ',
//                     attrs: {
//                         id: "cancel",
//                     },
//                     children:['Cancel'],
//                     ...body,
//                 },
//             ],
//             ...body,
//         }
//     ]
// };
// console.log(body);

//6 Change OK
// let body = {
//     tagName: 'body',
//     children: [
//         {
//             tagName: 'div',
//             children:[
//                 {
//                     tagName: 'span',
//                     children:['Enter a data please:'],
//                 },
//                 {
//                     tagName: 'br',
//                 },
//                 {
//                     tagName: 'input ',
//                     attrs: {
//                         type: "text",
//                         id: "name",
//                     },
//                 },
//                 {
//                     tagName: 'input ',
//                     attrs: {
//                         type: "text",
//                         id: "surname",
//                     },
//                 },
//             ]
//         },
//         {
//             tagName: 'div',
//             children:[
//                 {
//                     tagName: 'button ',
//                     attrs: {
//                         id: "ok",
//                     },
//                     children:['OK'],
//                 },
//                 {
//                     tagName: 'button ',
//                     attrs: {
//                         id: "cancel",
//                     },
//                     children:['Cancel'],
//                 },
//             ]
//         }
//     ]
// };

// body.children[1].children[0].attrs[prompt('Key')] = prompt('Value')
// console.log(body.children[1].children[0].attrs)


//7 Destructure
// let body = {
//     tagName: 'body',
//     children: [
//         {
//             tagName: 'div',
//             children:[
//                 {
//                     tagName: 'span',
//                     children:['Enter a data please:'],
//                 },
//                 {
//                     tagName: 'br',
//                 },
//                 {
//                     tagName: 'input ',
//                     attrs: {
//                         type: "text",
//                         id: "name",
//                     },
//                 },
//                 {
//                     tagName: 'input ',
//                     attrs: {
//                         type: "text",
//                         id: "surname",
//                     },
//                 },
//             ]
//         },
//         {
//             tagName: 'div',
//             children:[
//                 {
//                     tagName: 'button ',
//                     attrs: {
//                         id: "ok",
//                     },
//                     children:['OK'],
//                 },
//                 {
//                     tagName: 'button ',
//                     attrs: {
//                         id: "cancel",
//                     },
//                     children:['Cancel'],
//                 },
//             ]
//         }
//     ]
// };

// const { children: [{ children: [spanText] }] } = body.children[0];
// console.log(spanText);
// const { children: [button2Text] } = body.children[1].children[1];
// console.log(button2Text);
// const { id: input2ID} = body.children[0].children[3].attrs
// console.log(input2ID);

// //8 Destruct array

// let arr = [1, 2, 3, 4, 5, "a", "b", "c"];

// let [even1, even2, ...oddArr] = arr.filter(item => typeof item === 'number' && item % 2 === 0);
// let [odd1, odd2, odd3] = arr.filter(item => typeof item === 'number' && item % 2 !== 0);
// let letterArr = arr.filter(item => typeof item === 'string');

// console.log(even1, even2);
// console.log(odd1, odd2, odd3);
// console.log(letterArr);

// // 9 Destruct string

// let arr = [1, "abc"];

// let [number, [s1, s2, s3]] = arr;

// console.log(number); 
// console.log(s1); 
// console.log(s2); 
// console.log(s3); 

// // 10 Destruct 2
// let obj = {
//     name: 'Ivan',
//     surname: 'Petrov',
//     children: [
//         {name: 'Maria'}, 
//         {name: 'Nikolay'}
//     ]
// }
// const { children: [{ name: name1 }, { name: name2 }] }= obj

// console.log(name1, name2)

// // 11 Destruct 3
// let arr = [1,2,3,4, 5,6,7,10]
// const [a, b, ...Else]= arr
// const length = arr.length
// console.log(a, b, length)

// // 12 Copy delete

// const cat ={
//     weight: '5 кг',
//     eye_color: 'black',
//     breed: 'Британец'
// }
// const keyToRemove = prompt('Key');
// const { [keyToRemove]: remove, ...rest} = cat;
// console.log(restrest)


// // // 13 Currency real rate Самое интересное задание за все время)))))


// fetch('https://open.er-api.com/v6/latest/USD')
// .then(res => res.json())
// .then(data => {
//     console.log(data);

//     const availableCurrencies = Object.keys(data.rates);
//     let startValut = prompt('Валюта');
//     let summ = +prompt('Сумма');
//     let endValut = prompt('Валюта в яку конвертуємо');
    
//     if (startValut != null && endValut != null && !isNaN(summ) && availableCurrencies.includes(startValut.toUpperCase()) && availableCurrencies.includes(endValut.toUpperCase())) {
//         let exchangeRate = data.rates[endValut];
//         let result = summ * exchangeRate
//         alert(`Результат: з ${summ} ${startValut} ви отримаете ${result} ${endValut}`)
//     }
//     else{
//         alert('Щось не те')
//     }
// });


// // 14 Currency drop down
// fetch('https://open.er-api.com/v6/latest/USD')
// .then(res => res.json())
//  .then(data => {
//     console.log(data);

//     const availableCurrencies = Object.keys(data.rates);

//     let selectOptions = '';
//     availableCurrencies.forEach(currency => {
//         selectOptions += `<option value="${currency}">${currency}</option>`;
//     });

//     const selectHTML = `
//         <select>
//             ${selectOptions}
//         </select>
//     `;

//     const currencyListDiv = document.createElement('div');
//     currencyListDiv.innerHTML = selectHTML;
//     document.body.appendChild(currencyListDiv);
// });


// 15 Currency table 
// Выше моих сил


// // 16 Form

// const car = {
//     "Name": "chevrolet chevelle malibu",
//     "Cylinders": 8,
//     "Displacement": 307,
//     "Horsepower": 130,
//     "Weight_in_lbs": 3504,
//     "Origin": "USA",
//     "in_production": false
// }; 
// let formHTML = "<form>";
// for (const key in car) {
//     const value = car[key];
//     let inputType = typeof value;
//     if (inputType === 'boolean') {
//         inputType = 'checkbox';
//     } else if (inputType === 'string') {
//         inputType = 'text';
//     } 
//     formHTML += `<label>${key}: <input type="${inputType}" value="${value}" /></label>`;
// }
// formHTML += "</form>";
// const formContainer = document.getElementById("formContainer");
// formContainer.innerHTML = formHTML;

// // 17 Table

// const persons = [
//     {
//         "Name":"chevrolet chevelle malibu",
//         "Cylinders":8,
//         "Displacement":307,
//         "Horsepower":130,
//         "Weight_in_lbs":3504,
//         "Origin":"USA"
//     },
//     {
//         "Name":"buick skylark 320",
//         "Miles_per_Gallon":15,
//         "Cylinders":8,
//         "Displacement":350,
//         "Horsepower":165,
//         "Weight_in_lbs":3693,
//         "Acceleration":11.5,
//         "Year":"1970-01-01",
//     },
//         {
//         "Miles_per_Gallon":18,
//         "Cylinders":8,
//         "Displacement":318,
//         "Horsepower":150,
//         "Weight_in_lbs":3436,
//         "Year":"1970-01-01",
//         "Origin":"USA"
//     },
//     {
//         "Name":"amc rebel sst",
//         "Miles_per_Gallon":16,
//         "Cylinders":8,
//         "Displacement":304,
//         "Horsepower":150,
//         "Year":"1970-01-01",
//         "Origin":"USA"
//     },
// ]

// const columns = [];

// // Перший прохід - пошук колонок
// for (const person of persons) {
//     for (const key in person) {
//         if (!columns.includes(key)) {
//         columns.push(key);
//     }
//     }
// }

// // Заголовок 
// let tableHTML = "<table style='border: 2px solid red;'><tr >";
// for (const column of columns) {
//     tableHTML += `<th style='background-color: grey; border: 2px solid black;'>${column}</th>`;
// }
// tableHTML += "</tr>";

// // Другий прохід - відображення таблиці
// for (const person of persons) {
//     tableHTML += "<tr>";
//     for (const column of columns) {
//         const value = person[column] !== undefined ? person[column] : "";
//         tableHTML += `<td style='border: 2px solid black;'>${value}</td>`;
//     }
//     tableHTML += "</tr>";
//     }
// tableHTML += "</table>";

// const tableContainer = document.getElementById("tableContainer");
// tableContainer.innerHTML = tableHTML;
