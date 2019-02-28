# FACES Kit {docsify-ignore-all}

**[GameBoyキーボード](#GameBoyキーボード)**&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;**[電卓キーボード](#電卓キーボード)**&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;**[QWERTYキーボード](#QWERTYキーボード)**&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;**[FACES チャージャー](#FACES-チャージャー)**&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;🛒**[購入リンク](https://www.aliexpress.com/item/M5Stack-NEW-Offer-ESP32-Open-Source-Faces-Pocket-Computer-with-Keyboard-Gameboy-Calculator-for-Micropython-Arduino/32843973578.html)**

## 概要

**FACES Kit** は M5Core GRAY、ファンクショナルキーボード, FACESベース, FACESチャージャー、そしていくつかのアクセサリ（DuPont線、ストラップ、M3ネジなど）で構成されたキットです。 現在、ファンクショナルキーボードはGameBoy、 電卓、 QWERTYの3つがあります。今後、さらに別のキーボードがFACESキットに追加される予定です。Arduino IDEまたはMicroPythonを使用してプログラムすることができます。異なるアプリケーションに対し、それぞれ対応したキーボードをFACESベースにスタックして、利用することができます。[FACES Base](ja/base/face_base)のページで詳細を確認できます。

*それぞれのキーボードには、**MEGA328**チップが統合されており、ボタンを押した時に対応した値(**16進フォーマット**)がキーボードからM5Coreに送信されます。それぞれI2Cを使って通信しており、各キーボードのI2Cアドレスは<mark>**0x08**</mark>です。*

## パッケージ内容

<figure>
    <img src="assets/img/product_pics/core/faces_kit/faces_kit.png">
</figure>

### GameBoyキーボード

ゲームを作りたい時は、GameBoyキーボードをFACES Baseにスタックします。そしてNESエミュレータを書き込んでみましょう。

エミュレータとゲームの書き込み方法はこのページを参照してください: [ゲームのプレイ方法](ja/quick_start/faces/gameboy_burn_a_nes_game)

<figure>
    <img src="assets/img/product_pics/core/faces_kit/gameboy_01.png">
</figure>

### 電卓キーボード

電卓を作りたい時は、電卓キーボードをスタックします。そして、M5Coreにファームウェアを書き込みます。ボタンが押されると、コールバックで特殊な関数を実行し、電卓が作成されます。

<figure>
    <img src="assets/img/product_pics/core/faces_kit/calculator.png">
</figure>

### QWERTYキーボード

フルキーボードが必要なときは、QWERTYキーボードをスタックします。

次のサンプルを書き込んでみましょう。(サンプルコードの機能: M5Coreとシリアルコンソールに、押したボタンが表示されます。)

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

### ノート

*FACES Kitの中には[Gray](ja/core/gray)コアが同梱されています。FACESではその他のコアも利用可能です。各コアの主な仕様は以下の表の通りです。*

- *比較表の**チェック**は[こちら](https://github.com/m5stack/M5-Schematic/blob/master/Core/hardware_difference_between_cores_zh_CN.md)。*

- *比較表の**ダウンロード**は[こちら](https://github.com/m5stack/M5-Schematic/blob/master/Core/M5%20Core%20Detailed%20Comparison.xlsx)。*

<img src="http://m5-docs.oss-cn-shenzhen.aliyuncs.com/assets/img/product_img/core/core_comparison_04_ja.png">

<img src="http://m5-docs.oss-cn-shenzhen.aliyuncs.com/assets/img/product_img/core/core_comparison_05_ja.png">
