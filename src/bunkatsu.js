/**
 * 分割代入
 */

// const myprofile = {
//   name: "kanai",
//   age: 31
// };

// console.log(myprofile);

// const message = `私は${myprofile.name}で、年齢は${myprofile.age}歳です`;
// console.log(message);

// const { name, age } = myprofile;
// const message2 = `私は${name}です。年齢は${age}歳です。`;
// console.log(message2);

const myprofile = ["kanai", 31];
const message3 = `私は${myprofile[0]}です。年齢は${myprofile[1]}歳です。`;
// console.log(message3);

const [name, age] = myprofile;
const message4 = `私は${name}です。年齢は${age}歳です。`;
console.log(message4);
