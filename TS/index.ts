// Get strated
// ts faylni js ga ulash "tsc faylNomi"
// ts falni init qilish "tsc --init"  "sourceMap" : true (in tsconfig.json)

// tsc faylni avtomatik ishga tushurish "watch" : true (in tsconfig.json)
// console.log("Hello TypeScript");


// Data Types

// TypeScriptda bir data turdagi ma'lumotni ikkinchi bir data turdagi ma'lumotga o'zgaritib bo'lmaydi
// // For instance : 
// let a = 21
// // a = "Mavlon" //Error beradi
// let b: number = 25  //O'zgaruvchini Ushbu ko'rinishda yozish tavsiya etiladi

// let isName : string = "Mavlon" // | let isName = "Mavlon"
// let isTrue : boolean = false // | let isTrue = false
// let age : null = null // null qiymatga faqat null berish mumkin | let age = null
// let profession : undefined = undefined // undefined da ham faqat undefined qiymat berish mumkin

// let user : object = {}  // | let user = {}
// user = {ism : "mavlon"} 
// console.log(user.ism);  // objectga nima kiritilsa uni ham avvaldan data turini ko'rsatib o'tilmasa Error beradi
// For Example : 
// let user1 : {ism : string} = {ism : "Mavlon"}
// console.log(user1.ism);

// let anything : any  /* any data turiga istalgan turdagi data turini biriktirsa bo'ladi. 
// Ammo bunda typscriptdan ko'zlangan maqsad bajarilmaydi. TypeScriptning asosiy maqsadlaridan biri data turlarini ajaratib ishlatish*/
// anything = 12
// anything = "Mavlon"
// anything = true
// anything = undefined
// anything = null
// anything = {ism : "Mavlon"}
// let newarr : object = [1,4,8,7,5,]
// console.log(newarr);
// const names = ["mavlon", "yusuf", "huzayfa"]
// console.log(typeof names);


// Functions

// function declaration in JS
// function pow(x, y) {
//     return x**y
// }
// function pow(x:number, y:number) : number {
//     return x**y
// }
// console.log(pow(10, 2));

// function logId(id : number | string) {    //this is void function. it doesn't need to write, but may write 
//     console.log(id);                      // for example : function logId(id : number | string) :void => console.log(id)
    
// }
// logId(15)
// logId('35')

// function greeting(user : {first : string; last? : string})  {
//     console.log(`Assalamu alaykum ${user.first} ${user.last}`);
// }
// // greeting({first : "Mavlon"})

// const guests = (arr: string[] | string)  => {
//     if(Array.isArray(arr)) {
//         console.log("Hello, " + arr.join(" and "));
//     }else {
//         console.log("Welcome lone traveler " + arr);
        
//     }
// }
// guests("Mavlon")

// Signature function         // Avvaldan funksiya biriktirilib qo'yib uni istalgan joyda ishlatish mumkin

// let users : (name : string, age : number) => string;

// users = function(name : string, age : number) : string {
//      return (`${name} siz ${age} yoshdasiz`);
    
// }
// console.log(users("Mavlon", 22));

// OverLoad function

// function OverLoadFunc (a : number, b : number) :number;
// function OverLoadFunc (a : string, b : number) :string;
// function OverLoadFunc (a : any, b : any) :any {
//     if(typeof a === "number" && typeof b === "number") {
//         return a+b
//     }else {
//         return `${a} ${b}`
//     }
// }
// console.log(OverLoadFunc(8, 8784848));
// console.log(OverLoadFunc('Javob', 45));


// function getFirstThree(x: number[] | string) {
//     return x.slice(0, 3);
//   }

// console.log(getFirstThree("Assalamu alaykum"));

// Bir data turidan ikkinchi bir data turiga otish. bu imkoniyat faqatgina 2ta data turida mavjud. "any" va shuning muqobili "unknown" 
// For instance : 
// let num : any = 10
// let num1 :number = num    // Bu usul bilan ham boshqa data turiga otib bolsada , tavsiya qilinmaydi

// Secondly method
// let num2 : unknown = 10     // unknown any ning muqobili bolib, boshqa bir data turiga otkazish mumkin
// let num3 : number = <number>num2  //yoki
// let num4 : number = num2 as number

// Union types

// istalgan data typeni avvaldan ma'lum qilib uni qayerda bolsa ham osha data turiga biriktirsa boladi
// let str :string[] | string;
// str = "Mavlon"
// str = ["mavlon" , "yusuf"]

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


// let size : "SM" | "MD" | "LG" | "XL"
// size = "LG"
// size = "SM"
// size = "2XL" bu yuqorida berilmagani uchun error beradi

// type aliases
// bu turda istalgan bir data turini yaratsa boladi. Unda kiritilgan malumotlardangina foydalanish mumkin
// type size = "XL" | "XXL" | "MD"

// let news : size = "XL"
// Arrays

// let newArr = [];           // Ushbu ko'rinishdagi arrayga istalgan data type ni kiritish mumkin 
// newArr = [1,7,8,"sajbsja", true]

// let newStr : string[]  /* yoki let newStr : Array<string> */   // [] dan avval qaysi typelar yozilgan bolsa faqat osha turdagi typelarni qabul qiladi
// newStr = ["bir", "ikki", "uch"]

// Bir nechta typelarni qabul qiluvchi array

// let newArr1 : (number | string | boolean /**.. etc*/) []

// TUPLES  ======= KARTEJLAR

// let data : [number, string]  // ushbu korinishdagi arrayning 0 siga number, 1-siga string kiritish mumkin

// data = [12, "Mavlon"]    // it is correct

// data = [12, 13]   it's error
// data = ["o'n", "ikki"]   it's error
// data = [45]   it's error
// data = ["bir"]   it's error

// enum Names  {
// A,
// B, 
// C,
// }
// console.log(Names.A);

// type users1 = keyof typeof Names
// declare enum Enuma {
//     A = 1,
//     B,
//     C = 2,
//   }
//   console.log(Enuma.A);
  
// const enam EnamName {  const enam larni oddiy enam dan asosiy farqi js faylda nima sodir bolayotganini  
// A,                       yozilmaydi. Faqat natija yoziladi
// B,
// C
// }

// const enum Letters {
//     A,
//     B,
//     C
// }
// console.log(Letters.A);

// function makeDate(timestamp: number): Date;
// function makeDate(m: number, d: number, y: number): Date;
// function makeDate(mOrTimestamp: number, d?: number, y?: number): Date {
//   if (d !== undefined && y !== undefined) {
//     return new Date(y, mOrTimestamp, d);
//   } else {
//     return new Date(mOrTimestamp);
//   }
// }
// const d1 = makeDate(12345678);
// const d2 = makeDate(5, 5, 5);
// console.log(d1);
// console.log(d2);


// function len(s: string): number;
// function len(arr: any[]): number;
// function len(x: any) {
//   return x.length;
// }


// console.log(len(""))  ; // OK
// console.log(len([0]));  // OK
// console.log();

class Users {
    name : string
    age : number

    // constructor

    constructor(name : string, age : number) {
        this.name = name
        this.age = age
    }

    // method

    info(value : number) {
        return `${this.name} ${value} yildan so'ng ${this.age + value} yoshga to'ladi`
    }
    isYoung ():string {
        if(this.age < 18) {
            return `${this.name} hali balo'gat yoshiga yetmagan`
        }else if (this.age === 18) {
            return `${this.name} hozirda balo'gat yoshida`
        }
         else {
            return `${this.name} balog'at yoshiga yetganiga ${this.age - 18} yil bo'lgan`
        }
    }

    // 
    static description ():string  {
        return `Ushbu klass foydalanuvchi haqida ma'lumot beradi...`
    }

    // Getter && Setter

    get changeName () :string  {
        return this.name
    }
    set changeName (value : string) {
        this.name = value
    }

    // changeAge
    get changeAge () : number {
        return this.age
    }
    set changeAge(value : number) {
        this.age = value
    }
}
const Mavlon : Users = new Users("Mavlon", 22)
console.log(Mavlon);
console.log(Mavlon.info(5));
console.log(Mavlon.isYoung());

const Asliddin : Users = new Users("Asliddin", 18)
console.log(Asliddin);
console.log(Asliddin.info(5));
console.log(Asliddin.isYoung());
console.log(Users.description());

// Bitta classda faqatgina bitta constructor ishlatish mumkin. Lekin cheksiz method ham staticlar ishlatsa bo'ladi
// Static --- bu classga tegishli bo'lgan ma'lumotlardir. 

Mavlon.name = "Asadbek"
console.log(Mavlon.name); // Asadbek
Asliddin.age = 25
console.log(Asliddin.age); // 25
