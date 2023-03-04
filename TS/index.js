"use strict";
// Get strated
// ts faylni js ga ulash "tsc faylNomi"
// ts falni init qilish "tsc --init"  "sourceMap" : true (in tsconfig.json)
// tsc faylni avtomatik ishga tushurish "watch" : true (in tsconfig.json)
console.log("Hello TypeScript");
// Data Types
// TypeScriptda bir data turdagi ma'lumotni ikkinchi bir data turdagi ma'lumotga o'zgaritib bo'lmaydi
// For instance : 
let a = 21;
// a = "Mavlon" //Error beradi
let b = 25; //O'zgaruvchini Ushbu ko'rinishda yozish tavsiya etiladi
let isName = "Mavlon"; // | let isName = "Mavlon"
let isTrue = false; // | let isTrue = false
let age = null; // null qiymatga faqat null berish mumkin | let age = null
let profession = undefined; // undefined da ham faqat undefined qiymat berish mumkin
let user = {}; // | let user = {}
user = { ism: "mavlon" };
// console.log(user.ism);  // objectga nima kiritilsa uni ham avvaldan data turini ko'rsatib o'tilmasa Error beradi
// For Example : 
let user1 = { ism: "Mavlon" };
console.log(user1.ism);
let anything; /* any data turiga istalgan turdagi data turini biriktirsa bo'ladi.
Ammo bunda typscriptdan ko'zlangan maqsad bajarilmaydi. TypeScriptning asosiy maqsadlaridan biri data turlarini ajaratib ishlatish*/
anything = 12;
anything = "Mavlon";
anything = true;
anything = undefined;
anything = null;
anything = { ism: "Mavlon" };
let newarr = [1, 4, 8, 7, 5,];
console.log(newarr);
const names = ["mavlon", "yusuf", "huzayfa"];
// console.log(typeof names);
// Functions
// function declaration in JS
// function pow(x, y) {
//     return x**y
// }
function pow(x, y) {
    return x ** y;
}
console.log(pow(10, 2));
function logId(id) {
    console.log(id); // for example : function logId(id : number | string) :void => console.log(id)
}
// logId(15)
// logId('35')
function greeting(user) {
    console.log(`Assalamu alaykum ${user.first} ${user.last}`);
}
// greeting({first : "Mavlon"})
const guests = (arr) => {
    if (Array.isArray(arr)) {
        console.log("Hello, " + arr.join(" and "));
    }
    else {
        console.log("Welcome lone traveler " + arr);
    }
};
// guests("Mavlon")
// Signature function         // Avvaldan funksiya biriktirilib qo'yib uni istalgan joyda ishlatish mumkin
let users;
users = function (name, age) {
    return (`${name} siz ${age} yoshdasiz`);
};
function OverLoadFunc(a, b) {
    if (typeof a === "number" && typeof b === "number") {
        return a + b;
    }
    else {
        return `${a} ${b}`;
    }
}
// console.log(OverLoadFunc(8, 8784848));
// console.log(OverLoadFunc('Javob', 45));
function getFirstThree(x) {
    return x.slice(0, 3);
}
console.log(getFirstThree("Assalamu alaykum"));
// Bir data turidan ikkinchi bir data turiga otish. bu imkoniyat faqatgina 2ta data turida mavjud. "any" va shuning muqobili "unknown" 
// For instance : 
let num = 10;
let num1 = num; // Bu usul bilan ham boshqa data turiga otib bolsada , tavsiya qilinmaydi
// Secondly method
let num2 = 10; // unknown any ning muqobili bolib, boshqa bir data turiga otkazish mumkin
let num3 = num2; //yoki
let num4 = num2;
// Union types
// istalgan data typeni avvaldan ma'lum qilib uni qayerda bolsa ham osha data turiga biriktirsa boladi
let str;
str = "Mavlon";
str = ["mavlon", "yusuf"];
// function printId(x : string | number ) {   
//     console.log(x.toUpperCase()); //ushbu uslub tavsiya qilinmaydi. Avval ozgaruvchining data turi aniqlanib, 
// }                 //  keyin methodlarni ishlarish kk
// function printId (x : string | number) {
//     if(typeof x === "string") {
//         console.log(x.toUpperCase());
//     }else {
//         console.log(x);
//     }
// }
// printId("Mavlon")
// printId(85)
// LITERAL TYPES
// bu typeda faqatgina oldindan kiritilgan qiymatlarni tanlash mumkin, Huddin optionga o'xshash
let size;
size = "LG";
size = "SM";
let news = "XL";
// Arrays
let newArr = []; // Ushbu ko'rinishdagi arrayga istalgan data type ni kiritish mumkin 
newArr = [1, 7, 8, "sajbsja", true];
let newStr; /* yoki let newStr : Array<string> */ // [] dan avval qaysi typelar yozilgan bolsa faqat osha turdagi typelarni qabul qiladi
newStr = ["bir", "ikki", "uch"];
// Bir nechta typelarni qabul qiluvchi array
let newArr1;
// TUPLES  ======= KARTEJLAR
let data; // ushbu korinishdagi arrayning 0 siga number, 1-siga string kiritish mumkin
data = [12, "Mavlon"]; // it is correct
// data = [12, 13]   it's error
// data = ["o'n", "ikki"]   it's error
// data = [45]   it's error
// data = ["bir"]   it's error
var Names;
(function (Names) {
    Names[Names["A"] = 0] = "A";
    Names[Names["B"] = 1] = "B";
    Names[Names["C"] = 2] = "C";
})(Names || (Names = {}));
console.log(Names.A);
console.log(0 /* Letters.A */);
//# sourceMappingURL=index.js.map