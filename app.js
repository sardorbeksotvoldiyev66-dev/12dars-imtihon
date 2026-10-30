// const users = [
//   {
//     id: 1,
//     name: "Ali",
//     lastName: "Valiyev",
//     age: 22,
//     job: "Frontend Developer",
//     email: "ali@gmail.com",
//     password: "ali123",
//   },
//   {
//     id: 2,
//     name: "Vali",
//     lastName: "Karimov",
//     age: 25,
//     job: "Backend Developer",
//     email: "vali@gmail.com",
//     password: "vali123",
//   },
//   {
//     id: 3,
//     name: "Sardor",
//     lastName: "Toshmatov",
//     age: 19,
//     job: "Student",
//     email: "sardor@gmail.com",
//     password: "sardor123",
//   },
//   {
//     id: 4,
//     name: "Madina",
//     lastName: "Aliyeva",
//     age: 24,
//     job: "UI/UX Designer",
//     email: "madina@gmail.com",
//     password: "madina123",
//   },
//   {
//     id: 5,
//     name: "Aziz",
//     lastName: "Rasulov",
//     age: 28,
//     job: "Fullstack Developer",
//     email: "aziz@gmail.com",
//     password: "aziz123",
//   },
//   {
//     id: 6,
//     name: "Malika",
//     lastName: "Sobirova",
//     age: 21,
//     job: "Graphic Designer",
//     email: "malika@gmail.com",
//     password: "malika123",
//   },
//   {
//     id: 7,
//     name: "Jasur",
//     lastName: "Ergashev",
//     age: 30,
//     job: "Project Manager",
//     email: "jasur@gmail.com",
//     password: "jasur123",
//   },
//   {
//     id: 8,
//     name: "Shahnoza",
//     lastName: "Qodirova",
//     age: 23,
//     job: "QA Engineer",
//     email: "shahnoza@gmail.com",
//     password: "shahnoza123",
//   },
//   {
//     id: 9,
//     name: "Bekzod",
//     lastName: "Ismoilov",
//     age: 18,
//     job: "Student",
//     email: "bekzod@gmail.com",
//     password: "bekzod123",
//   },
//   {
//     id: 10,
//     name: "Dilnoza",
//     lastName: "Hamidova",
//     age: 26,
//     job: "Python Developer",
//     email: "dilnoza@gmail.com",
//     password: "dilnoza123",
//   },
// ];

// function addUser(arr, name, lastname, age, job, email, password, users) {
//   let user_id = users.map((item) => item.id).at(-1);
//   let newUser = {
//     id: user_id + 1,
//     lastname,
//     age,
//     job,
//     email,
//     password,
//   };
//   return [...users, newUser];
// }

// console.log
//   addUser(
//     users,
//     "john doe",
//     "macgregor",
//     34,
//     "boxer",
//     "johndoe@gmail.com",
//     "1234",
//     users,
//   )


// 100.Quyidagi namunani kuzatgan holda funksiya yasang.
// Namuna("div*2") ᔍ "<div></div><div></div>"

// function Namuna(str) {
//     let arr = str.split("*");
//     let tag = arr[0];
//     let son = Number(arr[1]);
//     let natija = "";

//     for (let i = 1; i <= son; i++) {
//         if (tag === "li") {
//             natija += `<li>${i}.</li>\n`;
//         } else {
//             natija += `<${tag}></${tag}>\n`;
//         }
//     }

//     return natija;
// }

// console.log(Namuna("div*2"));
// console.log(Namuna("p*1"));
// console.log(Namuna("li*3"));

// 101.Funksiya butun son qabul qilsa, 1dan ushbu butun
// songacha bo’lgan sonlar yig’indisini qaytarsin.

// function namuna(son) {
//     let yigindi = 0;

//     for (let i = 1; i <= son; i++) {
//         yigindi += i;
//     }

//     return yigindi;
// }

// console.log(namuna(3)); 
// console.log(namuna(10)); 
// console.log(namuna(7));  

// 102.Funskiya son va object qabul qiladi. Objectni ichida min va
// max degan propertilar mavjud. Agar ushbu son min va maxni
// oralig’ida bo’lsa funksiya true qaytarsin, aks holda false

// function Namuna(son, object) {
//     if (son >= object.min && son <= object.max) {
//         return true;
//     } else {
//         return false;
//     }
// }

// console.log(Namuna(4, { min: 0, max: 5 }));
// console.log(Namuna(4, { min: 4, max: 5 }));
// console.log(Namuna(4, { min: 6, max: 10 }));

// 103.Funksiya son qabul qiladi, agar ushbu sonni kvadratga
// ko’tarsak, ushbu natijaning oxirigi qiymati sonning o’ziga teng
// bo’lsa funksiya true qaytarsin, aks holda false.

// function Namuna(son) {
//     let kvadrat = son * son;

//     if (String(kvadrat).endsWith(String(son))) {
//         return true;
//     } else {
//         return false;
//     }
// }

// console.log(Namuna(1));  
// console.log(Namuna(3));  
// console.log(Namuna(6));  
// console.log(Namuna(95)); 

// 104.Funksiya massiv qabul qiladi. Funksiya massivning elementlariga o’sha elementning indexini qo’shgan holda yangi
// massiv qaytarsin.

// function Namuna(arr) {
//     let yangiArray = [];

//     for (let i = 0; i < arr.length; i++) {
//         yangiArray.push(arr[i] + i);
//     }

//     return yangiArray;
// }

// console.log(Namuna([0, 0, 0, 0, 0]));
// console.log(Namuna([1, 2, 3, 4, 5]));
// console.log(Namuna([5, 4, 3, 2, 1]));

// 105.Funksiya ichimliklar massivini qabul qiladi. Funksiya
// ichida shakari yo’q ichimlilarinigina qaytarishi kerak. Ichida
// shakari bor ichimliklar ro’yxati:
// cola fanta

// function Namuna(arr) {
//     let yangiArray = [];

//     for (let i = 0; i < arr.length; i++) {
//         if (arr[i] !== "cola" && arr[i] !== "fanta") {
//             yangiArray.push(arr[i]);
//         }
//     }

//     return yangiArray;
// }

// console.log(Namuna(["cola", "water", "fanta", "tea", "coffee"]));

// 106.Funksiya son qabul qilsa, Funksiya ushbu sonda nechta
// raqam borligini qaytarsin.

// function Namuna(son) {
//     return String(Math.abs(son)).length;
// }

// console.log(Namuna(123));          
// console.log(Namuna(56));           
// console.log(Namuna(7154));       
// console.log(Namuna(61217311514));  
// console.log(Namuna(0));            

// 107.Funksiya son qabu qilsa, ushbu funksiya sonning raqamlari
// o’rni istalgancha almashtirib eng katta hosil bo’lishi mumkin
// bo’lgan sonni qaytarsin.

// function Namuna(son) {
//     return Number(String(son).split("").sort().reverse().join(""));
// }

// console.log(Namuna(123));   
// console.log(Namuna("001")); 
// console.log(Namuna(999));   

// 108.Funksiya 2ta sonlar oralig’ini qabul qiladi. Funksiya ushbu
// oraliqdan bironta random son qaytarsin.

// function Namuna(min, max) {
//     return Math.floor(Math.random() * (max - min + 1)) + min;
// }

// console.log(Namuna(5, 9));
// console.log(Namuna(5, 9));
// console.log(Namuna(5, 9));

// 109.Funksiya son qabul qiladi. Ushbu funksiya ushbu son narissistik son bo’lsa true qaytarsin, aks holda false. Narissistik son
// degani sonning har bir raqamini sonning uzunligi miqdorida
// darajaga ko’tarib qo’shib chiqilganda o’ziga teng bo’lgan son.

// function Namuna(son) {
//     let raqamlar = String(son);
//     let yigindi = 0;

//     for (let i = 0; i < raqamlar.length; i++) {
//         yigindi += Number(raqamlar[i]) ** raqamlar.length;
//     }

//     return yigindi === son;
// }

// console.log(Namuna(153));  
// console.log(Namuna(370));  
// console.log(Namuna(1652)); 

// 110.Funksiya string qabul qiladi.Funksiya ushbu stringda
// nechta katta harf ishtirok etganin qaytarsin

function Namuna(str) {
    let count = 0;

    for (let i = 0; i < str.length; i++) {
        if (str[i] >= "A" && str[i] <= "Z") {
            count++;
        }
    }

    return count;
}

console.log(Namuna("fvLzpxmgXSDrobbgMVrc")); 
console.log(Namuna("JMZWCneOTFLWYwBWxyFw")); 
console.log(Namuna("mqeytbbjwqemcdrdsyvq"));