"use strict";
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
// class Users {
//     name : string
//     age : number
//     // constructor
//     constructor(name : string, age : number) {
//         this.name = name
//         this.age = age
//     }
//     // method
//     info(value : number) {
//         return `${this.name} ${value} yildan so'ng ${this.age + value} yoshga to'ladi`
//     }
//     isYoung ():string {
//         if(this.age < 18) {
//             return `${this.name} hali balo'gat yoshiga yetmagan`
//         }else if (this.age === 18) {
//             return `${this.name} hozirda balo'gat yoshida`
//         }
//          else {
//             return `${this.name} balog'at yoshiga yetganiga ${this.age - 18} yil bo'lgan`
//         }
//     }
//     // 
//     static description ():string  {
//         return `Ushbu klass foydalanuvchi haqida ma'lumot beradi...`
//     }
//     // Getter && Setter
//     get changeName () :string  {
//         return this.name
//     }
//     set changeName (value : string) {
//         this.name = value
//     }
//     // changeAge
//     get changeAge () : number {
//         return this.age
//     }
//     set changeAge(value : number) {
//         this.age = value
//     }
// }
// const Mavlon : Users = new Users("Mavlon", 22)
// console.log(Mavlon);
// console.log(Mavlon.info(5));
// console.log(Mavlon.isYoung());
// const Asliddin : Users = new Users("Asliddin", 18)
// console.log(Asliddin);
// console.log(Asliddin.info(5));
// console.log(Asliddin.isYoung());
// console.log(Users.description());
// // Bitta classda faqatgina bitta constructor ishlatish mumkin. Lekin cheksiz method ham staticlar ishlatsa bo'ladi
// // Static --- bu classga tegishli bo'lgan ma'lumotlardir. 
// Mavlon.name = "Asadbek"
// console.log(Mavlon.name); // Asadbek
// Asliddin.age = 25
// console.log(Asliddin.age); // 25
// // instanceof ====== obyektni qaysi klassdan olinganligini tekshiradi. For instance : 
// console.log(Mavlon instanceof Users);  //true mavjud bolsa true aks xolda false qaytaradi
// Extends ============ me'ros olish
// class Person {
//     _name : string
//     _age : number
//     constructor(name : string, age : number) {
//         this._name = name
//         this._age = age
//     }
//     greeting():string {
//         return `Hello my name is ${this._name}. I'm ${this._age} years old.`
//     }
// }
// const student : Person = new Person("Mavlon", 22)
// class Students extends Person {
//     _job : string
//     _skills : string[]
//     greeting(): string {
//         // extends method's
//         const parentGreeting = super.greeting()
//         return `${parentGreeting} I'm a ${this._job}. I know ${this._skills[0]}, ${this._skills[1]}, ${this._skills[2]} and etc`
//     }
//     constructor(name : string, age : number, job : string, skills : string[]) {
//         super(name, age)
//         this._job = job
//         this._skills = skills
//     }
// }
// const Mavlon : Students = new Students("Mavlon", 22, "Front-End Developer", ["JavaScript", "VueJs", "VueX", "TypeScript"])
// console.log(Mavlon.greeting());
// ================ INTERFACES interface larni typelardan asosiysi farqi => iterface larni bitta nima bilan bir nechtasini e'lon qilsa 
// bo'ladi. Typelarda esa aksincha. Typelarni birlashtirsa boladi. For instance : 
// bir nechta interface larni bir xil nom bilan atash
// interface Human {
//     _name : string
//     _age : number
// }
// interface Human {
//     seyHello() :string;          //seyHello: () => string
// }
// bir nechta typelarni birlashtirish
// type Users1 = {
//     _name: string
//     _age : number
// }
// type Users2 = {
//     _greeting() : string
// }
// type Users = Users1 & Users2 & {
//     _job : string | number
// }
// ===================== interface larni classlardan farqlari for intance : 
// classlarda bitta class faqatgina bitta classdan vorislik ola oladi. Interface larda esa cheksiz for instance :
// class User {
//     _name : string
//     _age : number
//     constructor(name : string, age : number) {
//         this._name = name
//         this._age = age
//     }
// }
// class User1 {
//     _salary : number
//     constructor(salary : number) {
//         this._salary = salary
//     }
// }
// class Person extends User /*, User1*/ {     //Error beradi
//     _job : string
//     _experience : boolean
//     constructor(name : string, age : number, job : string, experience : boolean) {
//         super(name, age)
//         this._job = job
//         this._experience = experience
//     }
// }
// interface UserA {
//     _name : string
// }
// interface UserB {
//     _age : number
// }
// interface UserC {
//     _job : string
// }
// interface UserGeneral extends UserA, UserB, UserC {
//     seyHello () :string ; 
// }
// class IUser implements UserA {
//     _name : string
//     constructor (name : string) {
//         this._name = name
//     }
// }
// //  = ========================== Abstract Classes  => Faqatgina vorislik olish uchun qo'llaniladigan classlar, bu classlardan new OBJ yasab bo'lmaydi
// // abstract classlarga abstract methodlar berish ham mumkin. Shunda bu methodlar majburiy bo'lib qoladi
// abstract class Users {
//     _name : string
//     _age : number
//     constructor (name : string, age : number) {
//         this._name = name
//         this._age = age
//     }
//     abstract greeting(): string;
// }
// // const newUser = new Users("Mavlon", 22)  Error beradi
// class UserA extends Users {
//     _job : string
//     constructor(name: string, age: number, job: string) {
//         super(name, age) 
//         this._job = job
//     }
//     greeting(): string {
//         return `Mening ismim ${this._name}. Yoshim ${this._age} da. ${this._job} bo'lib ishlayman`
//     }
// }
// const newUser = new UserA("Mavlon", 22, "Front-End developer")
// console.log(newUser.greeting());
// class MySafe {
//     private secretKey = 12345;
//   }
//   // In a JavaScript file...
//   const s = new MySafe();
//   // Will print 12345
//    console.log(s.secretKey);  // this is true console.log(s["secretKey"]);
// class Dog {
//     #barkAmount = 0;
//     personality = "happy";
//     constructor() {}
//   }
//   const newDog = new Dog()
//   console.log(newDog.personality);
// namespace Utils {
//     export function log (text : string, color : string, fontSize? : string):void {
//         if(fontSize) {
//             console.log(`%c${text}`, `color : ${color}; font-size : ${fontSize}`);
//         }else {
//             console.log(`%c${text}`, `color : ${color}`)
//         }
//     }
// }
// namespace Animals {
//     export abstract class Animal {
//         name : string
//         constructor(name : string) {
//             this.name = name
//         }
//         abstract say() :void;
//     }
//     export class Dogs extends Animals.Animal {
//         private sound : string
//         constructor(name : string, sound : string) {
//             super(name)
//             this.sound = sound
//         }
//         say() : void {
//             Utils.log(`${this.name} ${this.sound} degan ovoz chiqaradi`, 'red', '25px');
//         }
//     }
// }
// const cat = new Animals.Dogs("Arslon", "Woof")
// cat.say()
// function sound <Type>(x:Type) : Type {
//     return x
// }
// let result = sound(12)
// console.log(result);
// const sound = <Type> (x:Type) => x
// const result = sound(15)
// console.log(result);
// type A<T> = T
// const echo : <T>(x:T) => T = <T>(x:T) : T => {
//     return x
// }
// const echo = <T> (x:T) => x 
// const echo1 = echo([54,87,2158,5])
// console.log(echo1);
// function identity<Type>(arg: Type): Type {
//     return arg;
//   }
//   let myIdentity: <Type>(arg: Type) => Type = identity;
//   console.log(myIdentity(45));
// function identity<Type>(arg: Type): Type {
//   return arg;
// }
// let myIdentity: <Input>(arg: Input) => Input = identity
// console.log(myIdentity("sjbsjdns"));
// class getData <Type> {
//   name : Type
//   password : Type
//   addUser : (name : Type, password : Type) => Type
// }
// let newUser = new getData <string>()
// newUser.name = "Mavlon"
// newUser.password = "123456user"
// newUser.addUser = function (x, y) {
//   return x + y
// }
//   function getProperty<Type, Key extends keyof Type>(obj: Type, key: Key) {
//     return obj[key];
//   }
//   let x = { a: 1, b: 2, c: 3, d: 4 };
//  console.log( getProperty(x, "a"));
// type Point = { x: number; y: number };
// type P = keyof Point;
// const Num : P = "x" 
// console.log(Num);
// let Arr1 = [1, true, "bir"]
// type A<T> = T extends (infer U) [] ? U : never
// type B = typeof Arr1
// type C = A<B>
// ======================== Partial =========================
// type MyPartial<T> = {[P in keyof T]? : T[P]}
// type Obj = {
//   name: string
//   age : number
// }
// type Obj1 = MyPartial <Obj>
// type Obj1 = {
//   name?: string | undefined;
//   age?: number | undefined;
// }
// type Obj2 = Partial <Obj>
// type Obj2 = {
//   name?: string | undefined;
//   age?: number | undefined;
// }
// ===================== Required ==========================
// type User = {
//   name? : string
//   age? :number
// }
// type User1 = Required <User>
// // type User1 = {
// //   name: string;
// //   age: number;
// // }
// type MyRequired <T> = {[P in keyof T]-? : T[P]}
// type User2 = MyRequired <User>
// // type User2 = {
// //   name: string;
// //   age: number;
// // }
// ===================== Record ==========================
// interface CatInfo {
//   age: number;
//   breed: string;
// }
// type CatName = "miffy" | "boris" | "mordred";
// const cats: Record<CatName, CatInfo> = {
//   miffy: { age: 10, breed: "Persian" },
//   boris: { age: 5, breed: "Maine Coon" },
//   mordred: { age: 16, breed: "British Shorthair" },
//   // mavlon : {age : 22, breed : "lorem ipsum"}  Error beradi. Faqatgina korsatilgan keylardan foydalanish mumkin
// };
// ===================== NonNullable ========================== 
// // Faqatgina qiymat mavjud bolgan turdagi datalarni qaytaradi
// type Result = string | boolean | null | undefined
// type result1 = NonNullable<Result>  //type result1 = string | boolean
// type MyNonNullable <T> = T extends null | undefined ? never : T
// type result2 = MyNonNullable<Result>  //type result2 = string | boolean
// ===================== Readonly && ReadonlyArray  ========================== 
// type User = {
//   name : string
//   password : string
// }
// const user1 : Readonly <User> = {
//   name : 'Mavlon',
//   password : '12user12'
// }
// // user1.name = 'Asliddin' Error
// const user2 = {
//   name : 'Mavlon', 
//   password : 'user12345'
// } as const
// // user2.name = 'Asliddin'  Error
// const user3 = <const> {
//   name : 'mavlon', 
//   password : 'user12345'
// }
// // user3.name = 'Asliddin' Error
// const Arrays = [
//   {title : 'Olma', weight : '2kg'},
//   {title : 'Nok', weight : '3kg'},
//   {title : 'Olcha', weight : '10kg'},
// ] as const
// // Arrays.push({title : 'behi', weight : '1kg'})  Error
// const Arrays1 = <const>[
//   {title : 'Olma', weight : '2kg'},
//   {title : 'Nok', weight : '3kg'},
//   {title : 'Olcha', weight : '10kg'},
// ] 
// // Arrays.push({title : 'behi', weight : '1kg'})  Error
// ===================== Pick ========================== 
// type Person = {
//   name : string
//   age : number
// }
// type human = Pick <Person, 'name'>
// // type human = {
// //   name: string;
// // }
// type Mypick <T, K extends keyof T> = {[P in K] : T[P]}
// type human1 = Mypick<Person, 'age'>
// // type human1 = {
// //   age: number;
// // }
// interface Todo {
//   title: string;
//   description: string;
//   completed: boolean;
// }
//  type tasks = Pick <Todo, 'title'>
//  const todos : tasks = {
//   title : 'Reading books'
//  }
// ===================== Extract ========================== 
// type A = number | string | boolean
// type B = string | undefined | null
// type C = Extract<A,B>         //type C = string
// type MyExtract <T, U> = T extends U ? T : never
// type G = MyExtract<string | number, number | boolean | undefined>   //type G = number
// ===================== Exclude ========================== 
// type A = number | string | boolean
// type B = string | undefined | null
// type C = Exclude<A,B>           //type C = number | boolean
// type MyExclude <T, U> = T extends U ? never : T
// type G = MyExclude<A,B>            //type G = number | boolean
// ===================== Omit ========================== 
// interface Books {
//   title : string
//   pages : number
//   auth : string
// }
// type book = Omit <Books, 'auth'>      
// // type book = {
// //   title: string;
// //   pages: number;
// // }
// const newBook : book = {
//   title : "Rework", 
//   pages : 450
// }
// 
// class C {
//   _length = 0;
//   get length() {
//     return this._length;
//   }
//   set length(value) {
//     this._length = value;
//   }
// }
// const newObj = new C ()
// newObj.length = 15
// console.log(newObj);
//# sourceMappingURL=index.js.map