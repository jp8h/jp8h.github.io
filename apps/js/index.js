function  RandInt(max) {
    return Math.floor(Math.random() * Math.floor(max));
  }
  window.onload = function(){
  var topic = ["プロモデラーMG",".52ガロン",".52ガロンデコ",".96ガロン",".96ガロンデコ","プロモデラーRG","ジェットスイーパーカスタム","もみじシューター","ボトルガイザーフォイル","プライムシューターコラボ","ジェットスイーパー","スプラシューターベッチュー",
  "シャープマーカーネオ","ボールドマーカーネオ","N-ZAP85","N-ZAP89","オクタシューター レプリカ","シャープマーカー","スプラシューター","わかばシューター","プライムシューター","ボールドマーカー",
  "ボトルガイザー","スプラシューターコラボ","ホットブラスター","クラッシュブラスター","クラッシュブラスターネオ","ホットブラスターカスタム","ロングブラスターカスタム","ノヴァブラスター","ノヴァブラスターネオ","ロングブラスター","ラピッドブラスター","ラピッドブラスターデコ",
  "Rブラスターエリート","Rブラスターエリートデコ","デュアルスイーパーカスタム","スパッタリー","スパッタリー・ヒュー","クアッドホッパーブラック","デュアルスイーパー","スプラマニューバーコラボ",
  "ケルビン525","ケルビン525デコ","スプラマニューバーベッチュー","クアッドホッパーホワイト","スプラマニューバー","H3リールガン",
  "H3リールガンD","L3リールガン","L3リールガンD","カーボンローラー","カーボンローラーデコ","ダイナモローラー","ヴァリアブルローラー","ヴァリアブルローラーフォイル","ダイナモローラーテスラ","スプラローラーベッチュー","スプラローラーコラボ","スプラローラー",
  "パブロ","パブロ・ヒュー","ホクサイ","ホクサイ・ヒュー","14式竹筒銃・甲","14式竹筒銃・乙","スクイックリンα","リッター4Kカスタム","ソイチューバーカスタム","リッター4K","スプラチャージャーコラボ","ソイチューバー",
  "スプラチャージャーベッチュー","スクイックリンβ","スプラチャージャー","オーバーフロッシャー","エクスプロッシャー","バケットスロッシャー","バケットスロッシャーデコ","スクリュースロッシャー","スクリュースロッシャーネオ","ヒッセン","ヒッセン・ヒュー","クーゲルシュライバー","ハイドラントカスタム","バレルスピナー","バレルスピナーデコ","ハイドラント",
  "スプラスピナー","ノーチラス47","スプラスピナーコラボ","パラシェルターソレーラ","パラシェルター","キャンピングシェルター","キャンピングシェルターソレーラ","スパイガジェット","スパイガジェットソレーラ","プライムシューターベッチュー","ノヴァブラスターベッチュー","ダイナモローラーベッチュー","スクリュースロッシャーベッチュー","おちばシューター",
  "ホクサイベッチュー","スパイガジェットベッチュー","L3リールガンベッチュー","エクスプロッシャーカスタム","クーゲルシュライバー・ヒュー","オーバーフロッシャーデコ","ノーチラス79",".52ガロンベッチュー","ラピッドブラスターベッチュー","スプラスピナーベッチュー","ケルビン525ベッチュー","スパッタリークリア",
  "キャンピングシェルターカーモ","スクイックリンγ","パーマネントパブロ","バケットスロッシャーソーダ","バレルスピナーリミックス","14式竹筒銃・丙","ロングブラスターネクロ","N-ZAP83","プロモデラーPG","ボールドマーカー7",
  "H３リールガンチェリー"];
  //console.log(RandInt(12));
    const valp = document.myform.selectInt;
    buki = topic[RandInt(topic.length)];
    document.getElementById("message").innerHTML = buki;
    var target2 = document.getElementById("message").value;
    console.log(buki);
    setTweetButton(buki);
  }

    //ツイートボタン
function setTweetButton(text){
      $('#tweet-area').empty(); //既存のボタン消す
      twttr.widgets.createShareButton(
      "",
      document.getElementById("tweet-area"),
      {
        size: "large",
        text: "今日は『"+text+"』をつかいます! https://jp8h.com/apps/splapp.html",
        url: "https://jp8h.com/apps/splapp.html", // URL
        hashtags: "今日のブキ", // ハッシュタグ
      }
        );
      }
