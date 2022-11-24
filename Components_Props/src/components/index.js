// console.log("Hello Node");

// var slugify = require('slugify')
// import slugify from "slugify";

// const title = slugify("some string", "*");
// console.log(title);
// ! ***********-------------------****************
//  default olanları süslü parantez içine yazmamalıyız.
//  default olanların parametreleri aynı olmak zorunda değil .

// import merhaba, { topla, cikar } from "./my-Module.js";
// console.log(topla(2, 4));
// console.log(cikar(12, 3));
// merhaba("Unal");

import hello, { topla, cikar, text, user, users } from "./my-Module.js";
console.log(topla(2, 4));
console.log(cikar(12, 3));
console.log(text);
console.log(user);
console.log(users);
hello("Unal");