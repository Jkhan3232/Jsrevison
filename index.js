// var num = 15;
// // var newNum = num++;
// // console.log(newNum);
// console.log(num++);

// var leap = 2400;

// if (leap % 4 === 0) {
//   if (leap % 100 === 0)
//     if (leap % 400 === 0) {
//       console.log(`this is ${leap} year`);
//     } else {
//       jghjghj;
//       console.log(`this is not ${leap} year`);
//     }
//   else {
//     console.log(`this is  ${leap} year`);
//   }
// } else {
//   console.log(`this is not a leap ${leap} year`);
// }

// var area = "triangle";
// var PI = 3.14,
//   l = 5,
//   b = 4,
//   r = 3;

// switch (area) {
//   case " circle ":
//     console.log("The area is Pi " + PI * r ** 2);
//     break;
//   case " triangle ":
//     console.log("The triangle is  " + (l * b) / 2);
//     break;
//   case " ractangle ":
//     console.log("The ractangle is " + l * b);

//   default:
//     console.log("Pls enter Valid Data");
// }

// var num = 0;
// for (num = 10; num <= 20; num++) {
//   console.log(num);
// }

// for (num = 1; num <= 10; num++) {
//   var table = 8;
//   console.log("The Table of = " + table * num);
// }

// const sum = (a, b = 5) => a * b;

// console.log(sum(5));

// let myDta = ["bca", " mca ", "tech"];
// myDta.forEach((elments) => {
//   console.log(elments);
// });

// let arr = [4, 25, 16, 64, 49];

// let sq = arr.map((curElm) => {
//   return Math.sqrt(curElm);
// });

// console.log(sq);

// let arr3 = arr2.map((curElm) => {
//   return curElm > 10;
// });
// // console.log(arr3);

// let arr = [2, 4, 5, 3, 8];

// let arr2 = arr
//   .map((curElm) => curElm * 2)
//   .filter((curElm) => curElm >= 10)
//   .reduce((accumaltor, curElm) => accumaltor * curElm);

// // this methosd using flatent array and we use in chainig methods and calculateing..

// console.log(arr2);

//String......///

// const fun = () => {
//   setTimeout(() => {
//     console.log("Hi fun");
//   }, 2000);
// };

// const fun2 = () => {
//   console.log("hi fun 2");
//   fun();
//   console.log("hi fun 2 again");
// };

// fun2();

// const sum = (num) => (num2) => (num3) => console.log(num + num2 + num3);
// sum(5)(4)(8);

let arr = [2, 3, 4, 6, 8];
let arr2 = arr.map((curalm) => curalm * 2);
console.log(arr2);
