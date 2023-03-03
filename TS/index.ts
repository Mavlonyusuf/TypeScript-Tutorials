// Get strated
// ts faylni js ga ulash "tsc faylNomi"
// ts falni init qilish "tsc --init"  "sourceMap" : true (in tsconfig.json)

// tsc faylni avtomatik ishga tushurish "watch" : true (in tsconfig.json)
console.log("Hello TypeScript");


// Data Types

// TypeScriptda bir data turdagi ma'lumotni ikkinchi bir data turdagi ma'lumotga o'zgaritib bo'lmaydi
// For instance : 
let a = 21
// a = "Mavlon" //Error beradi
let b: number = 25  //O'zgaruvchini Ushbu ko'rinishda yozish tavsiya etiladi

let isName : string = "Mavlon" // | let isName = "Mavlon"
let isTrue : boolean = false // | let isTrue = false
let age : null = null // null qiymatga faqat null berish mumkin | let age = null
let profession : undefined = undefined // undefined da ham faqat undefined qiymat berish mumkin

let user : object = {}  // | let user = {}
user = {ism : "mavlon"} 
// console.log(user.ism);  // objectga nima kiritilsa uni ham avvaldan data turini ko'rsatib o'tilmasa Error beradi
// For Example : 
let user1 : {ism : string} = {ism : "Mavlon"}
console.log(user1.ism);

let anything : any  /* any data turiga istalgan turdagi data turini biriktirsa bo'ladi. 
Ammo bunda typscriptdan ko'zlangan maqsad bajarilmaydi. TypeScriptning asosiy maqsadlaridan biri data turlarini ajaratib ishlatish*/
anything = 12
anything = "Mavlon"
anything = true
anything = undefined
anything = null
anything = {ism : "Mavlon"}


