# Node ベース {docsify-ignore-all}

<img src="assets/img/product_pics/base/node_01.png" width="30%" height="30%"> <img src="assets/img/product_pics/base/node_02.png" width="30%" height="30%">

***

:memo:**[概要](#概要)**&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;:octocat:**[サンプルコード](#サンプルコード)**&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;:electric_plug:**[回路図](https://github.com/m5stack/Bases-Node/tree/master/schematic)**&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;**🛒[购买链接](https://www.aliexpress.com/store/product/M5Stack-New-NODE-Samrt-Speaker-WM8978-Audio-Development-Board-I2S-Module-with-DHT12-Sensor-MIC-IR/3226069_32949773234.html)**&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;:clapper:**[関連動画](#関連動画)**

## 概要

**<mark>M5Stack Node</marK>**ベースは12個のRGB LED(SK6812)、コーデックチップ(WM8978)、DHT12、IR送受信機(CHQ0038H)、2つのマイクを備えたサウンドボックスベースです。WM8978チップはHi-Fiスピーカーなどでよく使われています。

<img src="assets/img/product_pics/base/node_04.png" width="30%" height="30%">

このベースを使えば、WEBラジオ、Bluetoothスピーカー、インテリジェントサウンドボックスなどを作ることが可能です。

## 特徴

- 12 x RGB LED
- 温湿度センサー DHT12
- Hi-Fiステレオコーデックチップ(最大分解能24bitDAC)
- IR送受信機内蔵
- マイク内蔵
- 3.5mm マイクジャック
- 内蔵リチウムバッテリー(500mAh)

## スペック

<table>
 <tr><td>ESP32</td><td>GPIO0</td><td>GPIO13</td><td>GPIO5</td><td>GPIO2 ( MOSI )</td><td>GPIO34 ( MISO )</td><td>GPIO21</td><td>GPIO22</td><td>GPIO25</td></tr>
 <tr><td>Codec Chip ( WM8978 )</td><td>I2S_CLK ( MCLK )</td><td>I2S_WS ( LRC )</td><td>I2S_BCK ( BCK )</td><td>I2S_IN ( DACDAT )</td><td>I2S_OUT ( ADCDAT )</td><td>I2C_SDA ( SDIN )</td><td>I2C_SCL ( SCLK )</td><td>L_OUT1 ( LOUT1 )</td></tr>
</table>

<table>
 <tr><td>ESP32</td><td>GPIO15</td><td>GPIO35</td><td>GPIO12</td><td>GPIO21</td><td>GPIO22</td></tr>
 <tr><td>RGBLed ( SK6812 )</td><td>Signal Pin</td><td> </td><td> </td><td> </td></tr>
 <tr><td>IR</td><td> </td><td>IR_Receive</td><td>IR_Send</td><td> </td><td> </td></tr>
 <tr><td>DHT12</td><td> </td><td> </td><td> </td><td>I2C_SDA</td><td>I2C_SCL</td></tr>
</table>

## パッケージ内容

- 1x Node ベース
- 1x ウォールホルダー
- 2x M3x12ネジ
- 2x M3x18ネジ
- 1x USB Type-C ケーブル

## アプリケーション

- WEBラジオ
- Bluetoothスピーカー
- インテリジェントサウンドボックス

<img src="assets/img/product_pics/base/node_03.png" width="30%" height="30%">

## ドキュメント

- **ウェブサイト**
  - [M5Stack](https://m5stack.com)
- **データシート**
  - [WM8978](http://pdf1.alldatasheet.com/datasheet-pdf/view/96647/WOLFSON/WM8978.html)
- **回路図**
  - [Schematic](https://github.com/m5stack/M5StackModule-Node/tree/master/schematic)
- **サンプルコード**
  - [Arduino](https://github.com/m5stack/M5StackModule-Node/tree/master/example)

<!-- <figure>
    <img src="assets/img/product_pics/bases/node_01.jpg" alt="node_01" width="300px" height="300px">
</figure>
<figure>
    <img src="assets/img/product_pics/bases/node_02.jpg" alt="node_02" width="300px" height="300px">
</figure>
<figure>
    <img src="assets/img/product_pics/bases/node_03.jpg" alt="node_03" width="300px" height="300px">
</figure>
<figure>
    <img src="assets/img/product_pics/bases/node_04.jpg" alt="node_04" width="300px" height="300px">
</figure> -->

## 関連情報

- [Node ベース 購入(AliExpress)](https://www.aliexpress.com/store/product/M5Stack-Samrt-WM8978-I2S-DHT12-Ir-500/3226069_32949773234.html)

## サンプルコード

* DHT12

    https://github.com/m5stack/Bases-Node/tree/master/example/dht12

* RGB LED

    https://github.com/m5stack/Bases-Node/tree/master/example/rgbled/NeoPixelFunRandomChange

* WM8978

    https://github.com/m5stack/esp-adf/tree/master/NODE_example

## 関連動画

**NODEデモ - 音声認識**

<iframe height=498 width=510 src='https://player.youku.com/embed/XNDAxNDMxMjI2NA==' frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>