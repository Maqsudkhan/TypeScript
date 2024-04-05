// 1-misol
// let person_name: string =  "Maqsud";
// let person_age: number = 22;
// console.log("Ismi: ", person_name);
// console.log("Yoshi", person_age);

// // 2-misol
// let itemOne: number = 1;
// if(true){
//     let itemOne: number = 2;
// }
// console.log(itemOne); // outputda 1 natija chiqadi

// const itemTwo:string = "Hello Maqsud";
// //itemTwo = "Salom Maqsud"; //Error chiqadi chunki constantani o'zgartirib bo'maydi

// function FunctionOne(){
//     var itemThree: boolean = true;
//     if (itemThree){
//         var itemThree = false;
//     }
//     console.log(itemThree);
// }
// FunctionOne();


// // 3-misol
// let itemNumberOne:number = 11;
// let itemBoolean: boolean = false;
// let itemString: string = "Hello Maqsud"
// let itemUndefined: undefined = undefined;

// const itemNumberTwo: number =  1;
// const sum: number = itemNumberOne + itemNumberTwo;
// console.log("Yig'indisi: ", sum);

// const addString:string = itemString +  " Qalesiz?";
// console.log("2 ta stringni yig'indisi: " ,addString)

// const IsTrue: boolean = itemBoolean && true
// console.log("Boolean bilan ishlash: ", IsTrue)

// if(itemUndefined === undefined){
//     console.log("itemUndefined is undefined");
// }
// else{
//     console.log("itemUndefined is defined");
// }


// // 4-misol

// let a:number = 15;
// // a = "maqsud"; // Error beradi
// console.log("a = ", a);


// // 5-misol
// let item5 = 7;
// console.log("item5 ni type", typeof item5);

// // item5 = "maqsud"; // typeni o'zgartirib bumaydi error beradi
// console.log("qiymatini O'zgartirib tpeni kuramz", typeof item5);


// // 6-mosil
// let itemString6: string = "1";
// let itemNumber6: number = parseInt(itemString6);
// console.log("Stringni typeni uzgartirdik", itemNumber6);

// let itemNumber61: number = 1
// let itemString61: string = itemNumber6.toString();
// console.log(itemNumber61);


// // 7 - misol
// type User = {
//     id: number;
//     FirstName: string;
//     LastName: string;
// };

// const user: User = {
//     id: 1,
//     FirstName: "Maqsud",
//     LastName: "To'rayev",
// }

// function PrintUserInfo(user: User){
//     console.log(`Id: ${user.id} \nFirstName: ${user.FirstName} \nLastNmae: ${user.LastName}`)
// }

// PrintUserInfo(user);

// // 8-misol
// const arr: string[] = ["maqsud", "elyor", "sardor", "akram", "ergash"];
// arr.push("eshmat");
// arr.push("shermat");
// arr.push("kimdir");
// arr.pop(); // oxiridagi elementni olib tashllaydi

// for (const c of arr){
//     console.log(c);
// };


// const searchName = "maqsud";
// const isNameInArray = arr.includes(searchName);
// console.log(isNameInArray);
// console.log(`Is ${searchName} in the array? ${isNameInArray ? "Yes" : "No"}`);

// const indexOfMaqsud = arr.indexOf("maqsud");
// console.log(`maqsud ${indexOfMaqsud}-indexda turubdi`);

// if(indexOfMaqsud !== -1){
//     arr.splice(indexOfMaqsud);
// }
// console.log(arr);


// 9-misol
// enum color{
//     red,
//     green,
//     white,
//     blue,
// }
// console.log(color);
// let selectedColor: color = color.white;
// console.log(selectedColor);

// 10-misol
let isNull: null = null;
let isUndefined: undefined = undefined;
console.log("isNull:", isNull);
console.log("isUndefined:", isUndefined);
