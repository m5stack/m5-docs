# NCIR ユニット

<img src="assets/img/product_pics/unit/M5GO_Unit_ncir.png" width="30%" height="30%"><img src="assets/img/product_pics/unit/unit_ncir_grove_a.png" width="30%" height="30%">

***

:memo:**[概要](#概要)**&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;:octocat:**[サンプルコード](#サンプルコード)**&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; :electric_plug:**[回路図](#回路図)** &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;🛒**[購入リンク](https://www.aliexpress.com/store/product/M5Stack-Official-NCIR-Unit-MLX90614-Contactless-Temperature-Sensor-Module-70C-382-2C-GROVE-I2C-Development-Board/3226069_32947772098.html?spm=a2g1x.12024536.productList_5885013.pic_4)**

## 概要

**<mark>NCIR</mark>**ユニットは内蔵されている**MLX90641**により赤外線を測定する事で、体温測定や動きを検出する事が可能です。I2C通信により値の取得が可能です。

## 特徴

- 高精度
- 検出範囲: -70℃~382.2℃
- LEGO 互換ホール

## アプリケーション

- 体温測定
- 動き検出

## サンプルコード

### 1. Arduino IDE


### 2. UIFlow

## 回路図

<img src="assets/img/product_pics/unit/ncir_sch.JPG">

### ピンマッピング

<table>
 <tr><td>M5Core(GROVE A)</td><td>GPIO22</td><td>GPIO21</td><td>5V</td><td>GND</td></tr>
 <tr><td>NCIR Unit</td><td>SCL</td><td>SDA</td><td>5V</td><td>GND</td></tr>
</table>

## 関連リンク

- **[公式ビデオ](https://www.youtube.com/channel/UCozgFVglWYQXbvTmGyS739w)**

- **[フォーラム](http://forum.m5stack.com/)**

- **データシート** - [MLX90614](https://pdf1.alldatasheet.com/datasheet-pdf/view/218977/ETC2/MLX90614.html)