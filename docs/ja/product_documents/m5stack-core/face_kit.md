# FACES Kit

[中文](zh_CN/product_documents/m5stack-core/face_kit) | [English](en/product_documents/m5stack-core/face_kit) | 日本語

## 概要

**FACES Kit** は M5Core GRAY、ファンクショナルキーボード, FACESベース, FACESチャージャー、そしていくつかのアクセサリ（DuPont線、ストラップ、M3ネジなど）で構成されたキットです。 現在、ファンクショナルキーボードはGameBoy、 電卓、 QWERTYの3つがあります。今後、さらに別のキーボードがFACESキットに追加される予定です。Arduino IDEまたはMicroPythonを使用してプログラムすることができます。異なるアプリケーションに対し、それぞれ対応したキーボードをFACESベースにスタックして、利用することができます。[FACES Base](ja/product_documents/bases/face_base)のページで詳細を確認できます。

*それぞれのキーボードには、**MEGA328**チップが統合されており、ボタンを押した時に対応した値(**16進フォーマット**)がキーボードからM5Coreに送信されます。それぞれI2Cを使って通信しており、各キーボードのI2Cアドレスは<mark>**0x08**</mark>です。*

## パッケージ内容

<figure>
    <img src="assets/img/product_pics/core/faces_kit/faces_kit.png">
</figure>

### 1. GameBoyキーボード

ゲームを作りたい時は、GameBoyキーボードをFACES Baseにスタックします。そしてNESエミュレータを書き込んでみましょう。

エミュレータとゲームの書き込み方法はこのページを参照してください: [ゲームのプレイ方法](ja/quick_start/faces/gameboy_burn_a_nes_game)

<figure>
    <img src="assets/img/product_pics/core/faces_kit/gameboy_01.png">
</figure>

### 2. 電卓キーボード

電卓を作りたい時は、電卓キーボードをスタックします。そして、M5Coreにファームウェアを書き込みます。ボタンが押されると、コールバックで特殊な関数を実行し、電卓が作成されます。

<figure>
    <img src="assets/img/product_pics/core/faces_kit/calculator.png">
</figure>

### 3. QWERTYキーボード

フルキーボードが必要なときは、QWERTYキーボードをスタックします。

次のサンプルを書き込んでみましょう。(サンプルコードの機能: M5Coreとシリアルターミナルにterminal押したボタンの内容が表示されます。)

- **サンプルコード**
 - [Arduino](https://github.com/m5stack/M5Stack/tree/master/examples/Modules/FACES)
 - [MicroPython](https://github.com/m5stack/M5Cloud/tree/master/examples/FACES)(for M5Cloud)

- **M5Cloudの使い方** - [MicroPython(M5Cloud)](ja/quick_start/m5core/m5stack_core_get_started_MicroPython_m5cloud)

<figure>
    <img src="assets/img/product_pics/core/faces_kit/qwerty.png">
</figure>

### 4. FACES チャージャー

**FACES チャージャー**は磁石内蔵です。充電する時はFACESを充電器にくっつけてください。FACESとチャージャーはポゴピンで接続されます。

<figure>
    <img src="assets/img/product_pics/core/faces_kit/charger.png">
</figure>
