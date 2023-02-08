/**
 * 分割代入
 */

// オブジェクトの定義
// const myprofile = {
//   name: "kanai",
//   age: 31
// };

// console.log(myprofile);

// テンプレート文字列で表示
// 前回と異なる部分として、変数の表示ではなくオブジェクトの表示をしているため
// 変数名とキーで指定している
// const message = `私は${myprofile.name}で、年齢は${myprofile.age}歳です`;
// console.log(message);
// これだと助長になってしまう

// const { name, age } = myprofile;
// const message2 = `私は${name}です。年齢は${age}歳です。`;
// console.log(message2);
// 分割代入は処理の最初の方でオブジェクトから指定のプロパティを抜き出して
// 自由に利用できるため
// コードが簡潔になる、見やすくなる

// 配列でも似たような処理が可能
const myprofile = ["kanai", 31];
const message3 = `私は${myprofile[0]}です。年齢は${myprofile[1]}歳です。`;
// console.log(message3);

// 配列で分割代入を使う場合は
const [name, age] = myprofile;
const message4 = `私は${name}です。年齢は${age}歳です。`;
console.log(message4);
// 配列の場合は順番が大事
// 意味を知らないと何が書いてあるか分からないので、覚えておこう
