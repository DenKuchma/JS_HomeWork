// //1 evaluation

// let a = 5;  
// let b, c;

// b = a * 5;  
// console.log(b)
// b = c = b/2; 
// console.log(b,c)

// //2 age

// let result = prompt("How old are you?");
// let years = 2023;
// let old = years - result;
// let old_2 = old - 1;
// alert("You born in " + old + " or " + old_2)

// //3 temperature

// let celsius = prompt("Give me a Temperature in celsius")
// let faringate = celsius * 1.80 + 32
// alert("Your temperature in faringate = " + faringate)

// //4 divide

// let x = prompt("first");
// let y = prompt("second");
// alert(Math.floor(x/y));

// //5 currency

// let rate = prompt("Сколько гривен хотите перевести?")
// let dollar = rate * 36.92
// let euro = rate * 40.08
// alert("Ваша сумма в долларах: " + dollar.toFixed(2) + '\n' + "евро: " + euro.toFixed(2))

// //6 RGB

// let red ;
// do{
//     red = prompt("RED: Введите число больше 15 меньше 256", 0);
// } while (red < 16 || red > 255 );
// let green ;
// do{
//     green = prompt("GREEN: Введите число больше 15 меньше 256", 0);
// } while (green < 16 || green > 255 );
// let blue ;
// do{
//     blue = prompt("BLUE: Введите число больше 15 меньше 256", 0);
// } while (blue < 16 || blue > 255 );
// let colorRGB = "#" + Math.floor(red).toString(16) + Math.floor(green).toString(16) + Math.floor(blue).toString(16);
// let colorChance = document.getElementsByClassName('color');
// colorChance[0].style.background = colorRGB;

// //7 flats

// let floors = 15; 
// let porches = 3;
// let flat = 4;

// let number = prompt("Give me a number :)")

// let numberFlat = Math.ceil(number/flat); // номер квартиры относительно подьезда
// let floor = Math.ceil(numberFlat/floors); // номер нужного подьезда относительно кол-во этажей
// numberFlat -= (floor - 1) *  floors; // этаж относительно подъезда

// alert("Квартира: " + number + " подъезд: " + floor + " этаж: " + numberFlat)
