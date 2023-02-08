/**
 * 三項演算子
 */

//  ある条件　？　条件がtrueの時　：　条件がfalseの時

// const val1 = 1 > 0 ? "trueです" : "falseです";
// console.log(val1);

// if elseみたいなものを１行で書くことが出来る

// const num = 1300;
// 金額表示 数値型の時だけ機能する
// console.log(num.toLocaleString());

// typeofはデータ型を判別する機能
// const formattedNum =
//   typeof num === "number" ? num.toLocaleString() : "数値を入力してください";
// console.log(formattedNum);

// 関数のreturn部分で三項演算子使って値の判別をする事も可能
const checkSum = (num1, num2) => {
  return num1 + num2 > 100 ? "100を超えています" : "許容範囲内です";
};
console.log(checkSum(50, 40));
