// function htmlTree(structure) {
//     if (!structure.tagName) {
//         return;
//     }
//     if (structure.tagName === 'br') {
//         return `<${structure.tagName}/>` 
//     }

//     let htmlString = `<${structure.tagName}`;

//     if (structure.attrs) {
//         for (const [key, value] of Object.entries(structure.attrs)) {
//             htmlString += ` ${key}='${value}'`;
//         }
//     }

//     htmlString += '>';

//     if (structure.children) {
//         for (const child of structure.children) {
//             htmlString += htmlTree(child); 
//         }
//     }

//     htmlString += `</${structure.tagName}>`;

//     return htmlString;
// }

// const table = {
//     tagName: 'table',
//     attrs: {
//         border: "1",
//     },
//     children: [
//         {
//             tagName: 'tr',
//             children: [
//                 {
//                     tagName: "td",
//                     children: ["1x1"],
//                 },
//                 {
//                     tagName: "td",
//                     children: ["1x2"],
//                 },
//             ]
//         },
//         {
//             tagName: 'tr',
//             children: [
//                 {
//                     tagName: "td",
//                     children: ["2x1"],
//                 },
//                 {
//                     tagName: "td",
//                     children: ["2x2"],
//                 },
//             ]
//         }
//     ]
// }

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
//                     tagName: 'br',
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
// document.write(htmlTree(table));
// document.write(htmlTree(body));

// function deepCopy(obj) {
//     if (obj === null || typeof obj !== 'object') {
//         return obj; 
//     }
//     if (Array.isArray(obj)) {
//         const copyArr = [];
//         for (let i = 0; i < obj.length; i++) {
//             copyArr[i] = deepCopy(obj[i]); 
//         }
//         return copyArr;
//     }
//     const copyObject = {};
//     for(key in obj) {
//         copyObject[key] = deepCopy(obj[key]);
//     }
//     return copyObject;
// }

// const arr  = [1,"string", null, undefined, {a: 15, b: 10, c: [1,2,3,4],d: undefined, e: true }, true, false]
// const arr2 = deepCopy(arr) //arr2 та всі його вкладені масиви та об'єкти - інші об'єкти, які можна змінювати без ризику поміняти щось у arr
// console.log(arr2)


// function getElementById(idToFind) {
//     function walker(parent) {
//         if (parent.id === idToFind) {
//             throw parent; 
//         }
//         for (let i = 0; i < parent.children.length; i++) {
//             walker(parent.children[i]); 
//         }
//     }
//     try {
//         walker(document.body); 
//     } catch (element) {
//         return element; 
//     }
//     return null; 
// }
// try {
//     const foundElement = getElementById("testElment");
//     if (foundElement) {
//         console.log("Поймал:", foundElement);
//     } else {
//         console.log("Такого нет");
//     }
// } catch (e) {
//     console.error("Ерор", e);
// }
