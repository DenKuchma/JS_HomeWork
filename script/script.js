//1 greeting
// {
//     let result = prompt("What is your name?")
//     alert('Hey ' + result)
// }

//2 gopni4ek
// {
//     let result = prompt("Some sentence");
//     let method = result.split(',').join(' блин,');;
//     alert(method);
// }

//3 capitalize
// {
//     let str = "cANBerRa";
//     let result = str.toLowerCase();
//     result = result[0].toUpperCase() + result.slice(1);

//     console.log(result); //Canberra
// }

//4 word count
// {
//     let str = "Hello guys, how are you?";
//     let word = str.split(' ');
//     word = word.length;
//     console.log(word);

// }

//5 credentials
// {
//     let name = prompt("Name").trim();
//     let surname = prompt("Surname").trim();
//     let patronymic =  prompt("Patronymic").trim();
//     name = name.toLowerCase();
//     surname = surname.toLowerCase();
//     patronymic = patronymic.toLowerCase();
//     name = name[0].toUpperCase() + name.slice(1);
//     surname = surname[0].toUpperCase() + surname.slice(1);
//     patronymic = patronymic[0].toUpperCase() + patronymic.slice(1);
//     let fullName = name + ' ' + surname + ' ' + patronymic;
//     alert(fullName);
// }

//6 beer
// {
//     let str = "Было жарко. Василий пил пиво вприкуску с креветками";
//     let result =  str.split('пиво').join('чай');
//     console.log(result);
// }

//7 no tag
// {
//     let str = "какой-то текст в котором есть один тэг <br /> и всякое другое";
//     let result = str.slice(0, str.indexOf('<') - 1) + str.slice(str.indexOf('>') + 1)
//     console.log(result);
// }

//8 big tag
// {
//     let str = "какой-то текст в котором есть один тэг <br /> и всякое другое"
//     let first = str.indexOf("<");
//     let second = str.indexOf(">");
//     let tag = str.slice(first, second + 1);
//     let result = str.slice(0, str.indexOf('<') ) + tag.toUpperCase() + str.slice(str.indexOf('>') + 1);
//     console.log(result);
// }

//9 new line
// {
//     let stroka = prompt("Vvodi smth")
//     let result = stroka.split("\\n").join('\n')
//     alert(result)
// }

//10 youtube
// const youtube = /^(?:https?:)?(?:\/\/)?(?:www\.)?(?:youtu\.be\/|youtube(?:\-nocookie)?\.(?:[A-Za-z]{2,4}|[A-Za-z]{2,3}\.[A-Za-z]{2})\/)(?:watch|embed\/|vi?\/)*(?:\?[\w=&]*vi?=)?([^#&\?\/]{11}).*$/;
// let id = prompt();
// id = id.match(youtube)[1];
// let file = `<iframe width="600" height="300" src="https://www.youtube.com/embed/${id}" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>`;
// document.write(file);
