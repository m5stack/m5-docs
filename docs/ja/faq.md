# よくある質問 {docsify-ignore-all}

**[Core](#Core)**&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;**[Unit](#Unit)**&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;**[共通](#共通)**

## Core

### Q1. 各M5Coreの違いを教えてください。

A. 各M5Coreの主な違いは、内部ハードウェアの構成とキットのセット内容です。 基本モデルから上位モデルになるにつれ、姿勢センサーMPU9250の追加、FLASHの増量、PSRAMの追加などの違いがあります。 詳しくは[こちら](https://github.com/m5stack/M5-Schematic/blob/master/Core/hardware_difference_between_cores_ja.md)をご覧ください。

<img src="https://m5stack.oss-cn-shenzhen.aliyuncs.com/image/m5-docs_table/core_comparison/core_main_comparison_04_ja.png">

<img src="https://m5stack.oss-cn-shenzhen.aliyuncs.com/image/m5-docs_table/core_comparison/core_main_comparison_05_ja.png">

---

### Q2. 内蔵スピーカーをどうしたらオフにできますか？

A. Setup()関数の中に以下の命令を追記してください。

```arduino
dacWrite(M5STACKFIRE_SPEAKER_PIN, 0);
```

---

### Q3. M5Coreとモジュールを積み重ねたあとだと、ソフトウェアを書き込みできません。（例えばUSB Host モジュール）

A. GPIO0 ピンとM5CoreのM-Busとの接触が悪いために起きている可能性があります。しっかりと挿さっているか確認してください。どうしてもダメな場合は、自分でGPIO０ピンをGNDにプルダウンしてみてください。

---

### Q4. M5GOと[M5GO bottom](ja/base/m5go_bottom)を組み合わせた時に、バッテリは満充電のはずなのに、電源が入りません。

A. スタッキング後、ベース上のM-Busの左下隅のBATTERYピンがM5Coreに正しく接続されていない可能性があります。これは製造時のはんだ付け位置のずれが原因です。バスピンの位置がわずかに偏っていると、BATTERYピンがM5Coreとうまく接触しないことがあります。再度はんだ付けをして直す必要があります。自分で直せない方は、購入元または @M5Stack にご相談ください。

---

### Q5. 書き込み時に以下の図のようなエラーになってしまいます。

<img src="assets/img/faq/faq_03.png">

A. PCによって書き込みができない場合があるようです。そこで下図のRST-GND間に0.1uF〜程度のコンデンサをつけると改善する場合があるようです。

<img src="assets/img/faq/faq_05.png" width="80%" height="80%">

<img src="assets/img/faq/faq_06.png" width="80%" height="80%">

<img src="assets/img/faq/faq_07.png" width="100%" height="100%">

---

### Q6. ESP32で取り扱いに注意しないといけないピンはありますか？

A. GPIO34-39までは入力専用です。出力には使用できません。その他は入出力に使用できます。

---

### Q7. M5Stick Gray（MPU9250あり）で工場出荷時のファームウェアを起動し、ボタンAを押すとNoと表示されますが、これはMPU9250がないということですか？

A. 再起動してみてください。認識されるはずです。

## Unit

### Q1. M5Stack向けの各カメラの違いはなんですか？

A. 各カメラの主な違いは、いくつかのピンの位置(OV2640-SIOD、OV2640-VSYNC, GROVEポート)、 レンズタイプ、 PSRAMの有無があります。詳しくは[こちら](https://shimo.im/sheets/gP96C8YTdyjGgKQC/09fd4)をご覧ください。

<img src="https://m5stack.oss-cn-shenzhen.aliyuncs.com/image/m5-docs_table/camera_comparison/camera_comparison_ja.png">

### Q2. WiFiを用いて、カメラの画像をスマートフォンに送信できますが、どの程度の距離まで大丈夫ですか？

A. M5Cameraで実験したところ、室内では約20メートルでした。

## 共通

### Q1. USB Type-C ケーブルに表裏はありますか？

A. 仕様上は表裏の区別はありませんが、たまに接触が悪い場合があるようです。その場合は表裏を逆に差し替えてみてください。

---

### Q2. ArduinoでI2Cがうまく動きません。

A. Arduino IDEのボードマネージャから最新のesp32ライブラリ(>=1.0.1)を導入してください。

---

### Q3. UIFlowのソースは公開されていますか？

A. 現在公開はされていません。もしかしたら将来公開されるかもしれません。

---

### Q4. XXX の使い方がわかりません。

A. Twitterで [@M5Stack](https://twitter.com/M5Stack) 宛てにメッセージをお送りください。

---

### Q5. 買った時から XXX が壊れています。

A. お買い求め担ったお店にお問い合わせいただくか、またはTwitterで [@M5Stack](https://twitter.com/M5Stack) 宛てにメッセージをお送りください。
