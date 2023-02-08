/**
 * mapやfilterを使った配列の処理
 */

const nameArr = ["田中", "山田", "佐藤"];
//  まずfor文で配列の中身を出力する
// for (let index = 0; index < nameArr.length; index++) {
//   console.log(nameArr[index]);
// }
//  従来の配列の処理

// const nameArr2 = nameArr.map((name) => {
//   return name;
// });
// mapは配列に対して使える関数で、mapの中にアロー関数をカラで書く、
// 中にアロー関数を書いて、引数にその値を順番に入れて
// 新しい配列を生成するおの

// console.log(nameArr2);
// for文を使わなくても新しい配列にデータを入れる事ができた
// mapの中で、アロー関数を使い、配列のデータを順番に出力する

// nameArr.map((name) => console.log(name));
// mapの基本的な使い方
// １行で済む処理は｛｝省略できるから上のような書き方ができる
// 配列をループさせる、新しい配列を作る　の時はmapが使用できる

// filetr
// 条件に一致した値だけ出力するもの
const numArr = [1, 2, 3, 4, 5];
// 奇数だけ取り出す
const newNumArr = numArr.filter((num) => {
  return num % 2 === 1;
});
// 奇数だけ取り出すなら２で割った時に１が余れば良いので
// 数字　％　２　===１　という書き方で良い

console.log(newNumArr);
// 偶数処理も確認

// mapを使った練習
// １番目は、２番目はみたいに番号をつける場合
// mapの引数にindexを追加する
// 第二引数は０から始まる数字が自動で入る
const nameArr2 = nameArr.map((name, index) => {
  return `${index + 1}番目は${name}さんです。`;
});
// console.log(nameArr2);
// console.log(...nameArr2);

// 名前：佐藤　以外には「さん」をつけて出力する
// 実際にmapを使った処理を書いていく
// if文を用いて処理を実行する事が可能
const newNameArr = nameArr.map((name) => {
  if (name === "佐藤") {
    return name;
  } else {
    return `${name}さん`;
  }
});
// console.log(newNameArr)
