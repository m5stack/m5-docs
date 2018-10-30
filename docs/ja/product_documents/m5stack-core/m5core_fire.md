# M5Stack FIRE

## 概要

M5Stack **FIRE**は**ESP32**チップがベースです。**Blockly**、**Arduino**、**MicroPython**などでプログラミングすることができます。

M5Stack Fireは、ESP32プログラミングに必要なものに加えて、**MPU6050**MEMSセンサー（3軸ジャイロ + 3軸加速度）、**MAG3110**MEMSセンサー(3軸地磁気)、TFT LCDなどを備えています。簡易版"Leap Motion"のような3Dリモートジェスチャーコントローラなどを短時間で作ることが出来るでしょう。

## 特徴

- プログラミングサポート
  - Arduino
  - Blockly
  - ESP-IDF
  - Python
- LEGO 互換
- [TFカード](https://ja.wikipedia.org/wiki/SD%E3%83%A1%E3%83%A2%E3%83%AA%E3%83%BC%E3%82%AB%E3%83%BC%E3%83%89)サポート

## スペック

|項目|詳細|
|:---|:---|
|Core|M5Stack Fire|
|ESP32| 240MHz x 2コア, 600 DMIPS, 4MB SRAM, Wi-Fi, デュアルモードBluetooth|
|Flash| 16M-Bytes|
|電源入力| 5V @ 500mA |
|インターフェース | USB Type-C x 1, Grove(I2C+I/0+UART) x 1 |
|画面| 2 inch, 320x240 Colorful TFT LCD, ILI9342|
|スピーカー| 1W-0928 |
|マイク| MEMS Analog BSE3729 Microphone|
|LED| SK6812 3535 RGB LED x 10 |
|MEMS| MPU6050, MAG3110 |
|電池| 150mAh @ 3.7V 内蔵|
|動作温度| 32°F to 104°F ( 0°C to 40°C ) |
|サイズ| 54 x 54 x 12.5 mm |
|ケース| プラスチック ( PC ) |
|重量| 56g |

## パッケージ内容

- 1x M5Stack FIRE
- 1x M5GO ボトムモジュール
- 1x M5GO チャージベース
- USB Type-C ケーブル
- ユーザーマニュアル

## ドキュメント

- **サンプルコード**
  - [Arduino](https://github.com/m5stack/M5Stack/tree/master/examples)
  - [MicroPython](https://github.com/m5stack/M5GO/tree/master/examples)

- **データシート**
  - [ESP32](https://www.espressif.com/sites/default/files/documentation/esp32_datasheet_cn.pdf)
  - [MPU6050](https://www.invensense.com/wp-content/uploads/2015/02/MPU-6000-Datasheet1.pdf)
  - [MAG3110](https://www.nxp.com/docs/en/data-sheet/MAG3110.pdf)

- **GitHub**
  - [M5Stack](https://github.com/m5stack/M5Stack)
  - [M5GO](https://github.com/m5stack/M5GO)

- **クイックスタート (Arduino)**
  - [macOS](en/quick_start/m5core/m5stack_core_get_started_Arduino_MacOS)
  - [Windows](en/quick_start/m5core/m5stack_core_get_started_Arduino_Windows)
  - [MicroPython](en/quick_start/m5core/m5stack_core_get_started_MicroPython)

<figure>
    <img src="assets/img/product_pics/core/fire/product_pic_fire.jpg">
</figure>

<figure>
    <img src="assets/img/product_pics/core/fire/simple_sch_just_for_fire.jpg">
</figure>

<figure>
    <img src="assets/img/product_pics/core/fire/interface_fire.jpg">
</figure>

## 関連情報

- [M5Stack Fire 購入(スイッチサイエンス)](https://www.switch-science.com/catalog/3953/)