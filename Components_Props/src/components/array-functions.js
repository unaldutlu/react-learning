/* 
! En çok kullanılacaklar.
*  push
*  map
*  find
*  filter
*  some
*  every
*  includes
*/

const users = ["Mehmet", "Ahmet", "Murat"];
const usersObje = [
  { name: "Ayşe", age: 20 },
  { name: "Fatma", age: 30 },
  { name: "Hayriye", age: 15 },
  { name: "Cevriye", age: 10 },
];

// ! push
// users.push("Ayşe");
// users.push("Fatma");
// console.log(users);

// ! map
/*
for (let i = 0; i < users.length; i++) {
    const element = users[i];
    console.log(element);
}
*/
// bu uzun versiyona gerek yok
// users.map((item) => console.log(item));
// usersObje.map((item) => console.log(item));

// ! find
// const findUser = usersObje.find(
//   (item) => item.name === "Hayriye" || item.age > 29
// );
// console.log(findUser);

// ! filter
// const filterUser = usersObje.filter((item) => item.age >= 15);
// console.log(filterUser);

// const filterUser = usersObje.filter(
//   (item) => item.name === "Cevriye" || item.age > 15
// );
// console.log(filterUser);

//* item vb. yazmak istemiyorsanız

// const filterUsers = usersObje.filter(
//   ({ name, age }) => name === "Fatma" && age > 25
// );
// console.log(filterUsers);

// ! some
// const someUsers = usersObje.some(({ name, age }) => age > 15 && age == 25);
// console.log(someUsers);

// ! every
// const everyUsers1 = usersObje.every(({ name, age }) => age > 5);
// const everyUsers2 = usersObje.every(({ name, age }) => age > 20);
// console.log(everyUsers1);
// console.log(everyUsers2);

// ! includes
const includesUser = users.includes("Ahmet");
const includesUser1 = users.includes("Ayşe");
console.log(includesUser);
console.log(includesUser1);
