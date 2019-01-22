# NEOFLASH

<img src="assets/img/product_pics/unit/unit_neoflash_01.png" width="30%" height="30%"><img src="assets/img/product_pics/unit/unit_neoflash_02.png" width="30%" height="30%">

***

:memo:**[概要](#概要)**&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;:octocat:**[サンプルコード](#サンプルコード)**&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;🛒**[購入リンク](https://www.aliexpress.com/item/M5Stack-Newest-NeoFlash-Light-Board-made-of-Acrylic-with-192pcs-NeoPixels-and-PIR-Sensor-compatible-with/32957760176.html)**

## 概要

**<mark>NEOFLASH</mark>**は192個のフルカラーLED(24x8)と人感センサー(PIR)を搭載したLEDパネルユニットです。左上が1番目ののLEDです。左から右、上から下にいくにつれて番号が増えていきます。NEOFLASHは、3つの`GROVE A`インターフェース(I2C)を備えており、他のNEOFLASHを接続する事が可能です。

<img src="assets/img/product_pics/unit/unit_neoflash_03.png">

## 特徴

- フルカラーLED: 192個
- GROVEインターフェース、[UIFlow](http://flow.m5stack.com)と[Arduino](http://www.arduino.cc)をサポート

## 関連リンク

- **[公式ビデオ](https://www.youtube.com/channel/UCozgFVglWYQXbvTmGyS739w)**

- **[フォーラム](http://forum.m5stack.com/)**

- **[FastLEDライブラリ](https://github.com/FastLED/FastLED/wiki/Overview)**

- **[FastLEDリファレンス(中国語)](http://www.taichi-maker.com/homepage/reference-index/arduino-library-index/fastled-library/)**

## サンプルコード

### 1. Arduino IDE

人を検知したらネットワークから現在時刻を取得してNEOFLASHに表示します。何も検知しないと時計は消えます。

*完全なソースコードは[こちら](https://github.com/m5stack/M5-ProductExampleCodes/tree/master/Unit/NEOPIXEL/Arduino)。*

<img src="assets/img/product_pics/unit/unit_example/NEOFLASH/example_unit_neoflash_01.png">

### ピンマップ

<table>
<tr><td>M5Core(GROVE B)</td><td>GPIO36</td><td>GPIO26</td><td>5V</td><td>GND</td></tr>
 <tr><td>NEOFLASH Unit</td><td>PIR Pin</td><td>RGB Pin</td><td>5V</td><td>GND</td></tr>
</table>