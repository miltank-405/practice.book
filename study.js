// /* P35 chapter01 consoleに計算結果を出力 */
// // 足し算
// console.log(10 + 11);
// // 引き算
// console.log(21 - 10);
// // 掛け算
// console.log(13 * 4);
// // 割り算
// console.log(52 / 2);
// // 割り算のあまり
// console.log(12 % 10);



/* chapter02 */
// P49 - 変数と定数
	/* 
		--- なにをやってるのかイメージしながら書くことが大事 ---
		let  <--今から変数を使うおー
		let input  <--変数名はinputにするおー
		let input = 0;  <--inputに0入れるおー
		--- 書き方だけを覚えるんじゃなくて、書こうとしているコードの意味を頭の中で声出す心がけが大事 ---
	 */
/* 
	自動販売機で例えると、
	・投入金額＆お釣りの金額　=> 変数　（投入金額によって変化するから）
	・ジュースの値段　=> 定数_const　（価格変更しない限り固定だから）
 */
	/* 
		--- 定数は const で宣言する ---
		const  <--今から定数を使うおー
		const price  <--定数名はpriceにするおー
		const price = 150;  <--priceに150入れるおー
		--- 予約語は使えない。（構文で決まっているキーワード）
		同じ名前の変数とか定数を宣言するとエラーになるお！ for, switch, function　も入るから要注意 ---
	 */

	// p54 数値型
	// // 数値型のデータ同士は、四則演算（+, -, *, /）が可能。
	// const price = 150;
	// let input = 200;
	// console.log(input - price);

	// p55 文字列型-String
// let name = "りんごジュース";
// let message = 'お買い上げありがとうございました';
// console.log(name + message);

// p56 論理型-Boolean
	// // お釣りがあれば真、なかったら儀
	// let otsuri = true;
	// // もしもお釣りがある場合はメッセージの出力
	// if(otsuri) {
	// 	console.log("お釣りがあります");
	// }

// p58 文字列演算子
	// // 文字列と文字列を繋げるときに使用。
	// // 使い方 => 文字列 + 文字列 (+の前後には半角スペースを)
	// console.log("お釣りは"+"50円です");
	// // 変数を使って全く同じことを書く
	// let message1 = "お釣りは";
	// let message2 = "50円です";
	// console.log(message1 + message2);

// p60 算術演算子
	// // 四則計算(+, -, *, /, %)
	// console.log(10 + 11);
	// console.log(21 - 15);
	// console.log(10 * 2);
	// console.log(20 / 2);
	// console.log(53 % 10);

	// インクリメントとデクリメント
	// 変数に代入した数値を1だけ増やすことを インクリメント => 変数名++
	// let count = 1;
	// count++;
	// console.log(count);
	// 1だけ減らすことをデクリメント => 変数名--
	// let count = 1;
	// count--;
	// console.log(count);

	// インクリメントは 変数に入っている数値を一旦取り出して、1を足した計算結果を再び同じ変数に代入し直すこと。
	// let count = 1;
	// count = count + 1;
	// 式を計算すること -> 式を評価する っていう

// p63 論理演算子
	// 論理積(AND) -> &&
	// 二つの条件が同時に成立することをあらわす
	// let apple_zaiko = true;
	// let orange_zaiko = true;
	// console.log(apple_zaiko && orange_zaiko);

	// 論理和(OR) -> ||
	// 二つの条件のうち1つ以上が成立することをあらわす
	// let apple_zaiko = false;
	// let orange_zaiko = true;
	// console.log(apple_zaiko || orange_zaiko);

// p64 代入演算子
// let input = 0;
// input = input + 100;
// // ▼短縮して書く
// let input = 0;
// input += 100;
// // 文字列の連結も複合代入演算子でOK

// p65 比較演算子
/* 
	A == B  等価 AとBが等しければtrue, 違ったらfalse
	A != B  不等価 AとBが等しくなかったらtrue, 違ったらfalse
	A > B   より大きい AがBよりも大きかったらtrue, 違ったらfalse
	A >= B  以上 AがB以上ならtrue, 違ったらfalse
	A < B   より小さい AがBより小さかったらtrue, 違ったらfalse
	A <= B  以下 AがB以下ならtrue, 違ったらfalse
 */