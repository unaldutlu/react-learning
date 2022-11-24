// setTimeout(() => {
//   console.log("Merhaba");
// }, 5000);

// setInterval(() => {
//   console.log("Merhaba ben her saniye çalışacağım");
// }, 1000);

// const sayHi = () => console.log("hello");
// sayHi();

// const sayHi = (un) => un();
// sayHi(() => console.log("Hello"));

import fetch from "node-fetch";

// fetch("https://jsonplaceholder.typicode.com/users")
//   .then((data) => data.json())
//   .then((users) => {
//     console.log("users yüklendi!", users);

//     fetch("https://jsonplaceholder.typicode.com/posts/1")
//       .then((data) => data.json())
//       .then((post) => {
//         console.log("post yüklendi", post);

//         fetch("https://jsonplaceholder.typicode.com/posts/2")
//           .then((data) => data.json())
//           .then((posts) => console.log("postlar yüklendi", posts));
//       });
//   });

// async function getData() {
//   const users = await (
//     await fetch("https://jsonplaceholder.typicode.com/users")
//   ).json();

//   const post = await (
//     await fetch("https://jsonplaceholder.typicode.com/posts/1")
//   ).json();

//   const posts = await (
//     await fetch("https://jsonplaceholder.typicode.com/posts/2")
//   ).json();

//   console.log("users yüklendi", users);
//   console.log("post yüklendi", post);
//   console.log("postlar yüklendi", posts);
// }
// getData();

// (()=>{
//   console.log("hello");
// })();

(async () => {
  const users = await (
    await fetch("https://jsonplaceholder.typicode.com/users")
  ).json();

  const post = await (
    await fetch("https://jsonplaceholder.typicode.com/posts/1")
  ).json();

  const posts = await (
    await fetch("https://jsonplaceholder.typicode.com/posts/2")
  ).json();

  console.log("users yüklendi", users);
  console.log("post yüklendi", post);
  console.log("postlar yüklendi", posts);
})();

