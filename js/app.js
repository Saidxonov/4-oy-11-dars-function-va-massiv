//--------------> Oson masalalar <--------------

// 1. Funksiya yozing, bu funksiya berilgan sonning kvadratini qaytarsin.
// function kvadrat() {
//   let son = +prompt("Istalgan sonni kiriting: ", "");
//   let kvadrat = son ** 2;
//   alert(kvadrat);
// }
// kvadrat();

// 2. Funksiya yozing, bu funksiya berilgan ikkita sonning yig'indisini qaytarsin.
// function sum() {
//   let a = +prompt("Birinchi sonni kiriting: ", "");
//   let b = +prompt("Ikkinchi sonni kiriting: ", "");
//   let yigindi = a + b;
//   alert("Yig'indisi--> " + yigindi);
// }
// sum();

// 3. Funksiya yozing, bu funksiya foydalanuvchi nomini qabul qilib, unga "Salom, [ism]" degan matnni qaytarsin.
// function userName() {
//   let userName = prompt("Ismingizni kirirting!");
//   alert("Salom, " + userName);
// }
// userName();

// 4. Funksiya yozing, bu funksiya ikki sondan kattasini topib qaytarsin.
// function max() {
//   let a = +prompt("Birinchi sonni kiriting: ", "");
//   let b = +prompt("Ikkinchi sonni kiriting: ", "");
//   if (a > b) {
//     alert("Eng katta son--> " + a);
//   } else {
//     alert("Eng katta son--> " + b);
//   }
// }
// max();

// 5. Funksiya yozing, bu funksiya massiv ichidagi barcha sonlarni qo'shib, umumiy yig'indini qaytarsin.
// function sumArray() {
//   let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
//   let sum = 0;
//   for (let i = 0; i < arr.length; i++) {
//     sum += arr[i];
//   }
//   alert("Yig'indisi--> " + sum);
// }
// sumArray();

// 6. Funksiya yozing, bu funksiya berilgan son musbat yoki manfiy ekanligini aniqlasin va natijani qaytarsin.
// function musbatManfiy() {
//   let son = +prompt("Istalgan sonni kiriting: ", "");
//   if (son > 0) {
//     alert("Musbat son");
//   } else if (son < 0) {
//     alert("Manfiy son");
//   } else {
//     alert("Son nolga teng");
//   }
// }
// musbatManfiy();

// 7. Funksiya yozing, bu funksiya berilgan so'zning uzunligini qaytarsin.
// function sozUzunligi() {
//   let soz = prompt("Istalgan so'zni kiriting: ", "");
//   let uzunlik = soz.length;
//   alert("So'z uzunligi--> " + uzunlik);
// }
// sozUzunligi();

// 8. Funksiya yozing, bu funksiya berilgan ikki stringni birlashtirib, bitta string ko'rinishida qaytarsin.
// function birlashtirish() {
//   let str1 = prompt("Birinchi so'zni kiriting: ", "");
//   let str2 = prompt("Ikkinchi so'zni kiriting: ", "");
//   let res = str1 + "" + str2;
//   alert("Birlashtirilgan so'z--> " + res);
// }
// birlashtirish();

// 9. Funksiya yozing, bu funksiya berilgan massivdan eng kichik elementni qaytarsin.
// function kichikElement() {
//   let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
//   let min = arr[0];
//   for (let i = 0; i < arr.length; i++) {
//     if (arr[i] < min) {
//       min = arr[i];
//     }
//   }
//   alert("Eng kichik element--> " + min);
// }
// kichikElement();

// 10. Funksiya yozing, bu funksiya berilgan stringni teskari holatga keltirib, natijani qaytarsin.
// function reverse() {
//   let str = prompt("Istalgan so'zni kiriting: ", "");
//   let res = str.split("").reverse().join("");
//   alert("Teskari so'z--> " + res);
// }
// reverse();

//--------------> Massiv va funksiyalar <--------------

// 1. Funksiya yozing, bu funksiya berilgan massivdagi barcha sonlarni ekranga chiqarib bersin.
// function massiv() {
//   let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
//   for (let i = 0; i < arr.length; i++) {
//     alert(arr[i]);
//   }
// }
// massiv();

// 2. Funksiya yozing, bu funksiya massivdagi eng katta sonni topib qaytarsin.
// function maxElement() {
//   let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
//   let max = arr[0];
//   for (let i = 0; i < arr.length; i++) {
//     if (arr[i] > max) {
//       max = arr[i];
//     }
//   }
//   alert("Eng katta son--> " + max);
// }
// maxElement();

// 3. Funksiya yozing, bu funksiya berilgan massivning uzunligini qaytarsin.
// function massivLength() {
//   let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
//   let length = arr.length;
//   alert("Massiv uzunligi--> " + length);
// }
// massivLength();

// 4. Funksiya yozing, bu funksiya berilgan massivdagi barcha elementlarning yig'indisini hisoblasin va qaytarsin.
// function sum() {
//   let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
//   let sum = 0;
//   for (let i = 0; i < arr.length; i++) {
//     sum += arr[i];
//   }
//   alert("Massiv yig'indisi--> " + sum);
// }
// sum();

// 5. Funksiya yozing, bu funksiya massiv ichida berilgan element necha marta uchrashganini qaytarsin.
// function count() {
//   let arr = [
//     1, 2, 3, 4, 5, 2, 3, 4, 5, 6, 7, 8, 9, 10, 2, 3, 4, 5, 6, 7, 8, 9, 10, 2, 3,
//     4, 5, 6, 7, 8, 9, 10,
//   ];
//   let element = 10;
//   let count = 0;
//   for (let i = 0; i < arr.length; i++) {
//     if (arr[i] == element) {
//       count++;
//     }
//   }
//   alert("Element " + element + " massivda " + count + " marta uchrashgan");
// }
// count();

// 6. Funksiya yozing, bu funksiya massivdagi toq sonlarni yangi massivga ajratib qaytarsin.
// function toqSonlar() {
//   let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];
//   let toqSonlar = [];
//   for (let i = 0; i < arr.length; i++) {
//     if (arr[i] % 2 != 0) {
//       toqSonlar.push(arr[i]);
//     }
//   }
//   alert(toqSonlar);
//   console.log(toqSonlar);
// }
// toqSonlar();

// 7. Funksiya yozing, bu funksiya massiv ichidagi elementlarni teskari tartibda qaytarsin.
// function reverse() {
//   let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
//   let reverseArr = [];
//   for (let i = arr.length - 1; i >= 0; i--) {
//     reverseArr.push(arr[i]);
//   }
//   alert(reverseArr);
//   console.log(reverseArr);
// }
// reverse();

// 8. Funksiya yozing, bu funksiya berilgan massiv ichidan faqat manfiy sonlarni ajratib olsin va yangi massivda qaytarsin.
// function manfiySonlar() {
//   let arr = [1, -2, 3, -4, 5, -6, 7, -8, 9, -10];
//   let manfiySonlar = [];
//   for (let i = 0; i < arr.length; i++) {
//     if (arr[i] < 0) {
//       manfiySonlar.push(arr[i]);
//     }
//   }
//   alert(manfiySonlar);
//   console.log(manfiySonlar);
// }
// manfiySonlar();

// 9. Funksiya yozing, bu funksiya berilgan massivning oxirgi elementini olib tashlasin va yangilangan massivni qaytarsin.
// function lastElement() {
//   let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
//   let oxirgiElement = arr.pop();
//   alert(arr);
//   console.log(arr);
// }
// lastElement();

// 10. Funksiya yozing, bu funksiya berilgan massivga yangi element qo'shish funksiyasini amalga oshirsin.
// function addElement() {
//   let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
//   let element = 11;
//   arr.push(element);
//   alert(arr);
//   console.log(arr);
// }
// addElement();

// 11. Funksiya yozing, bu funksiya berilgan ikki massivni birlashtirib, yangi massiv qaytarsin.
// function res() {
//   let arr1 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
//   let arr2 = [11, 12, 13, 14, 15, 16, 17, 18, 19, 20];
//   let arr = arr1.concat(arr2);
//   alert(arr);
//   console.log(arr);
// }
// res();

// 12. Funksiya yozing, bu funksiya massiv ichidagi sonlarning kvadratlarini hisoblab, yangi massivda qaytarsin.
// function kvadrat() {
//   let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
//   let arr2 = [];
//   for (let i = 0; i < arr.length; i++) {
//     arr2.push(arr[i] * arr[i]);
//   }
//   alert(arr2);
//   console.log(arr2);
// }
// kvadrat();

// 13. Funksiya yozing, bu funksiya berilgan massiv ichidagi juft sonlarni o'chirib, yangi massiv qaytarsin.
// function juft() {
//   let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
//   let arr2 = [];
//   for (let i = 0; i < arr.length; i++) {
//     if (arr[i] % 2 !== 0) {
//       arr2.push(arr[i]);
//     }
//   }
//   alert(arr2);
//   console.log(arr2);
// }
// juft();

// 14. Funksiya yozing, bu funksiya berilgan massiv ichidagi stringlarni katta harfga o'zgartirib qaytarsin.
// function bigStr() {
//   let arr = ["hello", "world", "javascript", "python", "java"];
//   let arr2 = [];
//   for (let i = 0; i < arr.length; i++) {
//     arr2.push(arr[i].toUpperCase());
//   }
//   alert(arr2);
//   console.log(arr2);
// }
// bigStr();

// 15. Funksiya yozing, bu funksiya massivdagi har bir elementning uzunligini hisoblab, natijalarni yangi massivda qaytarsin (agar element string bo'lsa).
// function uzunlik() {
//   let arr = [
//     "hello",
//     "world",
//     "javascript",
//     "python",
//     "java",
//     123,
//     456,
//     789,
//     101,
//     202,
//     303,
//     true,
//     false,
//     null,
//     undefined,
//     "string",
//   ];
//   let arr2 = [];
//   for (let i = 0; i < arr.length; i++) {
//     if (typeof arr[i] === "string") {
//       arr2.push(arr[i].length);
//     }
//   }
//   alert(arr2);
//   console.log(arr2);
// }
// uzunlik();

// --------------> Jarima masalalar <--------------

// 1. Funksiya yozing, bu funksiya massivdagi har bir sonni ikki baravar qilib qaytarsin.
// function num() {
//   let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
//   let arr2 = [];
//   for (let i = 0; i < arr.length; i++) {
//     arr2.push(arr[i] * 2);
//   }
//   console.log(arr2);
//   alert(arr2);
// }
// num();

// 2. Funksiya yozing, bu funksiya berilgan massiv ichidan ma'lum bir qiymatni o'chirib, yangi massivni qaytarsin.
// function deleteNum() {
//   let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
//   let num = 5;
//   let arr2 = [];
//   for (let i = 0; i < arr.length; i++) {
//     if (arr[i] !== num) {
//       arr2.push(arr[i]);
//     }
//   }
//   console.log(arr2);
//   alert(arr2);
// }
// deleteNum();

// 3. Funksiya yozing, bu funksiya massiv ichidagi elementlarni tartiblasin (katta-kichik tartibda).
// function sortNum() {
//   let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
//   let arr2 = arr.sort((a, b) => b - a);
//   console.log(arr2);
//   alert(arr2);
// }
// sortNum();

// 4. Funksiya yozing, bu funksiya massiv ichidan eng kichik va eng katta sonni topib, natijalarni massiv ko'rinishida qaytarsin.
// function kattaKichikSon() {
//   let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
//   let min = arr[0];
//   let max = arr[0];
//   let arr2 = [];
//   for (let i = 0; i < arr.length; i++) {
//     if (arr[i] < min) {
//       min = arr[i];
//     }
//     if (arr[i] > max) {
//       max = arr[i];
//     }
//   }
//   arr2.push(min);
//   arr2.push(max);
//   console.log(arr2);
//   alert(arr2);
// }
// kattaKichikSon();

// 5. Funksiya yozing, bu funksiya massiv ichidagi barcha sonlarning o'rtacha qiymatini qaytarsin.
// function center() {
//   let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
//   let sum = 0;
//   for (let i = 0; i < arr.length; i++) {
//     sum += arr[i];
//   }
//   sum = sum / arr.length;
//   console.log(sum);
//   alert(sum);
// }
// center();

// 6. Funksiya yozing, bu funksiya massivning har bir elementini string sifatida qaytarsin.
// function str() {
//   let userNumber = +prompt("Xoxlagan narsangizni kiriting!");
//   let res = String(userNumber);
//   console.log(res);
//   alert(res);
// }
// str();

// 7. Funksiya yozing, bu funksiya berilgan massiv ichidagi barcha elementlarni ikki qismga ajratsin: juft va toq elementlar, va yangi massivlar qaytarsin.
// function num() {
//   let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
//   let juft = [];
//   let toq = [];
//   for (let i = 0; i <= arr.length; i++) {
//     if (arr[i] % 2 == 0) {
//       juft.push(arr[i]);
//     } else {
//       toq.push(arr[i]);
//     }
//   }
//   console.log(juft);
//   console.log(toq);
//   alert("Toq sonlar--> " + juft);
//   alert("Toq sonlar--> " + toq);
// }
// num();

// 8. Funksiya yozing, bu funksiya berilgan massiv ichidagi raqamlarni kichikdan kattaga qarab tartiblasin va yangi massivni qaytarsin.
// function number() {
//   let arr = [10, 9, 8, 7, 6, 5, 4, 3, 2, 1];
//   let arr2 = arr.sort(function (a, b) {
//     return a - b;
//   });
//   console.log(arr2);
//   alert(arr2);
// }
// number();
