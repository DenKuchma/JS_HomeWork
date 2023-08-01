// //1) Temperature

// const temperatureCalc = startTemperature => {
//     return endTemperature = startTemperature * 1.80 + 32
// }
// temperatureCalc(20)


// // 2) RGB

// const rgbCalc = (r, g, b) => {
//     const zeroAdd = (val) => {
//         const zeroAdd = Math.floor(val).toString(16);
//         return zeroAdd.length === 1 ? "0" + zeroAdd : zeroAdd;
//     };

//     return colorRGB = "#" + zeroAdd(r) + zeroAdd(g) + zeroAdd(b);
// };
// let colorChance = document.getElementsByClassName('color');
// colorChance[0].style.width  = "200px";
// colorChance[0].style.height = "200px";
// colorChance[0].style.background = rgbCalc(1, 155,120);

// // 3) Flats

// function findApartmentLocation(totalFloors, apartmentsPerFloor, apartmentNumber) {
//     const totalApartments = totalFloors * apartmentsPerFloor;

//     let entrance = Math.ceil(apartmentNumber / totalApartments);
//     let floor = Math.ceil((apartmentNumber % totalApartments) / apartmentsPerFloor);
//     floor = floor === 0 ? apartmentsPerFloor : floor;

//     return { entrance, floor };
// }

// function getUserInput() {
//     const totalFloorsInput = parseInt(prompt("Введіть кількість поверхів у будинку:"));
//     const apartmentsPerFloorInput = parseInt(prompt("Введіть кількість квартир на поверсі:"));
//     const apartmentNumberInput = parseInt(prompt("Введіть номер квартири:"));

//     return { totalFloors: totalFloorsInput, apartmentsPerFloor: apartmentsPerFloorInput, apartmentNumber: apartmentNumberInput };
// }

// const userInput = getUserInput();
// const apartmentLocation = findApartmentLocation(userInput.totalFloors, userInput.apartmentsPerFloor, userInput.apartmentNumber);

// console.log(`Квартира №${userInput.apartmentNumber} знаходиться у ${apartmentLocation.entrance}-му під'їзді, на ${apartmentLocation.floor}-му поверсі.`);

// // 4 Credentials

// function getFullName() {
//     const name = prompt("Введіть ваше ім'я:").trim();
//     const surname = prompt("Введіть ваше прізвище:").trim();
//     const fatherName = prompt("Введіть ваше по батькові:").trim();

//     function capitalize(str) {
//         return str.slice(0, 1).toUpperCase() + str.slice(1).toLowerCase();
//     }

//     const fullName = `${capitalize(name)} ${capitalize(surname)} ${capitalize(fatherName)}`;

//     console.log(`Ім'я: ${name}`);
//     console.log(`Прізвище: ${surname}`);
//     console.log(`По батькові: ${fatherName}`);
//     console.log(`Повне ім'я: ${fullName}`);

//     return { name, surname, fatherName, fullName };
// }

// const userData = getFullName();

// console.log(userData);


// //5 New line
// const newLine = (line) => {
//     const userInput = prompt(line)
//     return userInput.split("\\n").join('\n')
// };
// const result = newLine('Write a new line whis \\n')
// alert(result)

// //6 Prompt OR

// const getAge = (promptText, defaultValue) => {
//     const inputAge = prompt(promptText);
//     const age = inputAge || defaultValue;
//     const currentYear = new Date().getFullYear();
//     const birthYear = currentYear - age;

//     return birthYear;
// };

// const birthYear = getAge("How old are you?", 18);

// alert(`You born in:  ${birthYear}`);

// //7 Login And Password

// const loginAndPassword = (login, password) => {
//     const userLogin = prompt('Enter your login')
//     const userPassword = prompt('Enter your password')
//     if (userLogin === login || userPassword === password) {
//         return true
//     }
//     else {
//         return false
//     }
// };
// const validInput = loginAndPassword('admin', 'qwerty')
// console.log(validInput);

//8  For Table

// const arrInHtml = (arr) => {
//     let str = "<table>"
//     for (let number of arr.keys()){
//     if (number % 2 == 0) {
//         str += "<tr style='background-color: Tomato;'>";
//     } else {
//         str += "<tr style='background-color: DodgerBlue;'>";
//     }
//     for (let numbers of arr[number]) {
//         str += `<td style = 'text-align: center; border: 1px solid; width: 25px; height: 25px;'>${numbers}</td>`;
//     }
//     str += "</tr>";
//     }
//     str += "</table>";
//     document.write(str);
// };

// arrInHtml([[0, 0, 0, 0, 0], [0, 1, 2, 3, 4], [0, 2, 4, 6, 8], [0, 3, 6, 9, 12], [0, 4, 8, 12, 16]])

// //9 Filter Lexics
// const badWordsFilter = (userSentence, badWordArr) => {
//     const userInput = prompt(userSentence).split(' ');
//     const result = userInput.filter(item => !badWordArr.includes(item.toLowerCase())).join(' ');
//     return result
// };
// const filteredSentence = badWordsFilter('Ваше погане речення', ['бляха', 'муха', "пляшка", "шабля"])
// console.log(filteredSentence )

//10 Currency Table

// //11 Form
// const objectInHtml = (inputObject) => {
//     let formHTML = "<form>";
//     for (const key in inputObject) {
//         const value = inputObject[key];
//         let inputType = typeof value;
//         if (inputType === 'boolean') {
//             inputType = 'checkbox';
//         } else if (inputType === 'string') {
//             inputType = 'text';
//         } 
//         formHTML += `<label>${key}: <input type="${inputType}" name="${key}" value="${value}" /></label><br>`;
//     }
//     formHTML += "</form>";
//     const formContainer = document.getElementById("formContainer");
//     formContainer.innerHTML = formHTML;
// };

// const car = {
//     "Name": "chevrolet chevelle malibu",
//     "Cylinders": 8,
//     "Displacement": 307,
//     "Horsepower": 130,
//     "Weight_in_lbs": 3504,
//     "Origin": "USA",
//     "in_production": false
// };

// objectInHtml(car);

// //12 Array of objects sort

// function sort(array, field, ascending = true) {
//     array.sort((a, b) => {
//         const aValue = a[field];
//         const bValue = b[field];

//         if (typeof aValue === 'string' && typeof bValue === 'string') {
//             const comparison = a[field].localeCompare(b[field]);
//             return ascending ? comparison : -comparison;
//         } else {
//             return ascending ? aValue - bValue : bValue - aValue;
//         }
//     });
// }

// var persons = [
//     {name: "Іван", age: 17},
//     {name: "Марія", age: 35},
//     {name: "Олексій", age: 73},
//     {name: "Яків", age: 12},
// ];

// sort(persons, "name", false);
// console.log(persons);

//13 Table

//14 Divide
