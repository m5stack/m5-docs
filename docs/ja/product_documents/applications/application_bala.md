# M5BALA

## 概要

**M5BALA**はM5Stack Fireに対応したバランスカーモジュールです。Arduino UNOなどにも使われているATmega328PチップをベースにしたDCモータx2のドライバモジュールを備えています。
**Arduino**や**MicroPython**を使用して、M5BALAをコントロールするプログラムを簡単に書くことが可能です。

このDCモータドライバモジュールとM5BALAは**I2C**で接続されており、M5Stack Fire側からコントロールすることができます。I2Cアドレスは<mark>**0x56**</mark>です。

## 特徴

- プログラミングサポート
  - Arduino
  - MicroPython
- LEGO 互換ホール
- POGO ピン
- [TFカード](https://ja.wikipedia.org/wiki/SD%E3%83%A1%E3%83%A2%E3%83%AA%E3%83%BC%E3%82%AB%E3%83%BC%E3%83%89)サポート

## スペック

|項目|詳細|
|:---|:---|
|対応 Core | M5Stack FIRE   <mark>※M5BALAには含まれません</mark>|
|ESP32| 240MHz x 2コア, 600 DMIPS, 4MB SRAM, Wi-Fi, デュアルモード Bluetooth|
|Flash| 16M-Bytes|
|電源入力 | 5V @ 500mA|
|インターフェース | USB Type-C x 1, Grove(I2C+I/0+UART), Pogoピン x 1|
|画面 | 2 inch, 320x240 Colorful TFT LCD, ILI9342|
|スピーカー | 1W-0928|
|マイク | MEMS Analog BSE3729 Microphone|
|LED | SK6812 3535 RGB LED x 10|
|MEMS | MPU6050/MAG3110|
|電池 | 550mAh @ 3.7V 内蔵|
|動作温度 | 32°F to 104°F ( 0°C to 40°C )|
|サイズ | 54 x 54 x 21 mm|
|ケース | プラスチック ( PC )|
|重量 | 56g|

## パッケージ内容

- 1x M5BALA
- 1x モータドライバ
- 2x N20 DCギヤモータ(エンコーダ内蔵)
- USB Type-C ケーブル

## ドキュメント

- **サンプルコード**
  - [Arduino版](https://github.com/m5stack/M5Bala/tree/master/examples)
  - [MicroPython版](https://github.com/m5stack/M5Bala/tree/master/mpy)

- **GitHub**
  - [M5Bala](https://github.com/m5stack/M5Bala)

<figure>
    <img src="assets/img/product_pics/applications/bala_1.jpg">
</figure>

<figure>
    <img src="assets/img/product_pics/applications/bala_2.jpg">
</figure>

<figure>
    <img src="assets/img/product_pics/applications/bala_3.jpg">
</figure>

<figure>
    <img src="assets/img/product_pics/applications/bala_4.jpg">
</figure>

<figure>
    <img src="assets/img/product_pics/applications/bala_5.jpg">
</figure>

## 関連情報

- [M5BALA 購入(スイッチサイエンス)](https://www.switch-science.com/catalog/3995/)
- [M5Stack Fire 購入(スイッチサイエンス)](https://www.switch-science.com/catalog/3953/)
- [M5BALA 購入(AliExpress)](https://www.aliexpress.com/store/product/M5Satck-New-BALA-Car-ESP32-Development-Mini-Electric-Self-balancing-Car-2DC-Motor-with-Encoder-PSRAM/3226069_32904033658.html)
- [M5Stack Fire 購入(AliExpress)](https://www.aliexpress.com/store/product/M5Stack-NEW-PSRAM-2-0-FIRE-IoT-Kit-Dual-Core-ESP32-16M-FLash-4M-PSRAM-Development/3226069_32847906756.html)
- [LEGO-CABLE 購入(AliExpress)](https://www.aliexpress.com/store/product/M5Stack-M5Bala-ESP32-6Pin-10-20/3226069_32923086380.html)
- [MPU6050 データシート](https://store.invensense.com/datasheets/invensense/MPU-6050_DataSheet_V3%204.pdf)
- [MPU6050 レジスタマップ](https://www.invensense.com/wp-content/uploads/2015/02/MPU-6000-Register-Map1.pdf)
- [MAG3110 データシート](https://www.nxp.com/docs/en/data-sheet/MAG3110.pdf)