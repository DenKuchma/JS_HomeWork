// // Квартира в ней комнаты - в каждой комнате ширина и длинна => вернуть площадь квартиры
// const rooms = [
//     { roomWidth: 50, roomLength: 60 },
//     { roomWidth: 40, roomLength: 50 },
//     { roomWidth: 30, roomLength: 40 }
// ];

// const getflatSize = (quantityRoom) => {
//     let totalArea = 0;
//     for (let i = 0; i < quantityRoom; i++) {
//         const randomRoomSize= Math.floor(Math.random() * rooms.length);
//         const room = rooms[randomRoomSize];
//         const roomArea = room.roomWidth * room.roomLength;
//         totalArea += roomArea;
//     }
//     return totalArea;
// };

// console.log(getflatSize(15));





// // PROMPT и ты вводишь слово => найти сколько гласных и согласных букв 
// const vowels = "aeiou";
// let vowelCount = 0;
// let consonantCount = 0;

// const getCountTypeLetter = (getUserWord) => {
//     const getUserWordArray = getUserWord.toLowerCase().split('');  
//     for (let i = 0; i < getUserWordArray.length; i++) {
//         if (vowels.split('').includes(getUserWordArray[i])) {
//             vowelCount++;
//         } else{
//             consonantCount++;
//         }
//     }
//     return { vowels: vowelCount, consonants: consonantCount };
// };
// console.log(getCountTypeLetter(prompt("Give me a word")));





// Инпут в HTML => вводим имейл и проверяем его на валидность => проверяем на наличие @ .com / .ua / .ru
// function validateFormat(email) {
//     const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.(com|ua|net)$/;
//     return emailRegex.test(email);
// }

// function validateEmail() {
//     const emailInput = document.getElementById('emailInput');
//     const validationResult = document.getElementById('validationResult');
    
//     const email = emailInput.value.trim();

//     if (validateFormat(email)) {
//         validationResult.textContent = 'имейл верный.';
//     } else {
//         validationResult.textContent = 'имейл неверный.';
//     }
// }





// К примеру в вас есть кофе (1кг, 2кг) => задача сделать функцию,// запытаете зерна - ставите помол (грамм за порцию) и считаете кол-во чашек
// const calculateCoffeeCups = (weightOfBeans, gramsPerPortion) => Math.floor(weightOfBeans / gramsPerPortion);

// const cups = calculateCoffeeCups(1000, 15);
// console.log(`Можно приготовить ${cups} чашек кофе.`);




// У вас есть дистанция и длинна шага => покажите за сколько мы ее пройдем и ответ должен быть вы прошли за (0 часов 12 минут 10 секунд)
// function calculateTimeToWalk(distance, stepLength) {
//     const averageSpeed = 1.5;
    
//     const timeInSeconds = distance / (stepLength * averageSpeed);
//     const hours = Math.floor(timeInSeconds / 3600);
//     const minutes = Math.floor((timeInSeconds % 3600) / 60);
//     const seconds = Math.floor(timeInSeconds % 60);

//     return `Вы прошли за ${hours} часов ${minutes} минут ${seconds} секунд.`;
// }

// const timeTaken = calculateTimeToWalk(1000, 0.8);
// console.log(timeTaken);




// У вас телефон с памятью в ГБ - и при вызове функции вы передаете массив с данными(в МБ) по типу [0.2, 5.5, 2.3] 
//=>показать сколько осталось памяти
// function calculateRemainingMemory(totalMemoryGB, dataUsageMBArray) {
//     const totalMemoryMB = totalMemoryGB * 1000;
//     const usedMemoryMB = dataUsageMBArray.reduce((total, data) => total + data, 0);
//     const remainingMemoryMB = totalMemoryMB - usedMemoryMB;

//     return remainingMemoryMB;
// }

// const remainingMemoryMB = calculateRemainingMemory(32, [0.2, 5.5, 2.3]);
// console.log(`Осталось ${remainingMemoryMB} МБ памяти на телeефоне`);
