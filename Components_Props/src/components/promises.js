// ! Promise start----------------**********-----------

import axios from "axios";

// (async () => {
//   const { data: post1 } = await axios(
//     "https://jsonplaceholder.typicode.com/posts/1"
//   );
//   const { data: post2 } = await axios(
//     "https://jsonplaceholder.typicode.com/posts/2"
//   );
//   const { data: post3 } = await axios(
//     "https://jsonplaceholder.typicode.com/posts/3"
//   );
//   console.log("post1 yüklendi", post1);
//   console.log("post2 yüklendi", post2);
//   console.log("post3 yüklendi", post3);
// })();

// const getComments = () => {
//   return new Promise((resolve, reject) => {
//     console.log("Malatya");
//     resolve();
//   });
// };
// getComments()
//   .then(() => console.log("Nokta"))
//   .catch((e) => console.log(e));

// const getComments = () => {
//   return new Promise((resolve, reject) => {
//     resolve("hello");
//     resolve(1);
//     resolve({ text:"Malatya"});
//   });
// };
// getComments()
//   .then((data) => console.log(data))
//   .catch((e) => console.log(e));

// const getComments = (number) => {
//   return new Promise((resolve, reject) => {
//     if (number === 1) {
//       resolve("Her şey yolunda...");
//     } else {
//       reject("bir şeyler yanlış gitti...");
//     }
//   });
// };
// getComments(1)
//   .then((data) => console.log(data))
//   .catch((e) => console.log(e));

// const getUsers = () => {
//   return new Promise(async (resolve, reject) => {
//     const { data } = await axios("https://jsonplaceholder.typicode.com/users");
//     resolve(data);
//   });
// };
// const getPosts = () => {
//   return new Promise(async (resolve, reject) => {
//     const { data } = await axios(
//       "https://jsonplaceholder.typicode.com/posts/1"
//     );
//     resolve(data);
//   });
// };
// getUsers()
//   .then((data) => console.log(data))
//   .catch((e) => console.log(e));
// getPosts()
//   .then((data) => console.log(data))
//   .catch((e) => console.log(e));

// sırayla çalışması için

// (async () => {
//   await getUsers()
//     .then((data) => console.log(data))
//     .catch((e) => console.log(e));
//   await getPosts()
//     .then((data) => console.log(data))
//     .catch((e) => console.log(e));
// })();

// then ve catch kullanmak istemiyorsak

// (async () => {
//   const users = await getUsers();

//   const post = await getPosts();

//   console.log(users);
//   console.log(post);
// })();

const getUsers = () => {
  return new Promise(async (resolve, reject) => {
    const { data } = await axios("https://jsonplaceholder.typicode.com/users");
    resolve(data);
  });
};
const getPosts = () => {
  return new Promise(async (resolve, reject) => {
    const { data } = await axios(
      "https://jsonplaceholder.typicode.com/posts/1"
    );
    resolve(data);
    // reject("Bir sorun oluştu");
  });
};
// (async () => {
//   try {
//     const users = await getUsers();

//     const post = await getPosts();

//     console.log(users);
//     console.log(post);
//   } catch (error) {
//     console.log(error);
//   }
// })();

// Promise.all([getUsers(), getPosts()]).then(console.log).catch(console.log);
Promise.all([getUsers(),getPosts()])
  .then((data) => console.log(data))
  .catch((e) => console.log(e));
