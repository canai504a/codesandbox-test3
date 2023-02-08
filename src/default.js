/**
 * デフォルト値,引数など
 */

// react開発でよく使われる技法
// とりあえず関数をアロー関数で作る
const sayhello = (name = "ゲスト") => console.log(`こんにちは${name}さん`);
// 試しに実行してみると
// sayhello("kanai");
// 試しに引数消してみると
sayhello();
// JSでは引数なしだとundefinedが表示される
// バグが発生しやすいからよろしくない

// nameに対して＝”ゲスト”と入れる事でその初期値、もしくはデフォルト値
// を設定する事ができた。

// name="ゲスト"　を最初に書いて、後から消したバージョン見せて
// 消すとundefinedが表示される⇒バグりやすいからデフォルト値必要、って
// 説明に方が良いかも
