# LidarBOT

<img src="assets/img/product_pics/app/lidarbot_01.jpg" width="250" height="250"> <img src="assets/img/product_pics/app/lidarbot_02.jpg" width="250" height="250"> <img src="assets/img/product_pics/app/lidarbot_03.jpg" width="250" height="250"> <img src="assets/img/product_pics/app/lidarbot_04.jpg" width="250" height="250"> <img src="assets/img/product_pics/app/lidarbot_05.jpg" width="250" height="250">

* * *

:memo:**[概要](#概要)**&nbsp;&nbsp;&nbsp;:octocat:**[サンプルコード](https://github.com/m5stack/Applications-LidarBot/tree/master/LidarBot/Example)**&nbsp;&nbsp;&nbsp;🛒**[購入リンク](https://www.aliexpress.com/store/product/M5Stack-New-Lidar-Bot-Mini-Car-Lidar-8m-6Hz-McNamm-Wheels-NeoPixel-LED-Bar-with-ESP32/3226069_32951134988.html?spm=a2g1y.12024536.productList_5885013.subject_7)**

## 概要

**<mark>LidarBOT</mark>** は室内ナビゲーション用の四輪車です。 本体にはライダーセンサー、4つのメカナムホイール、ATmega328pベースのボトムボード、２つのフルカラーLEDバー、LEGO互換ホール、そしてメインコントローラーとしてM5Stackが装備されています。

ESP-NOWを利用したリアルタイム通信により、リモコンでLidarBOTを操作することができます。制御信号を受信した後、指定のプロトコルで各ホイールとRGBバーを制御することができます。

またリモコンによる前後左右のコントロールだけでなく、搭載されているM5Coreのディスプレイに、ライダーセンサーで読み取った地形マップを表示することができます。

## 特徴

- ライダー性能: 8m @ 6Hz
- プログラミングサポート
  - Arduino
- LEGO 互換ホール
- [メカナムホイール](https://en.wikipedia.org/wiki/Mecanum_wheel)

## プロトコル

*データフォーマット：データヘッダ(コマンドタイプ) + データパケット + データテール*

| ターゲット           | データフォーマット                           |
|:-------------------|:------------------------------------------|
| ホイール            |0xAA, SpeedX, SpeedY, SpeedZ, SpeedA, 0x55 |
| 各LED              |0xAB, LedIndex, R, G, B, 0x55              |
| フロントLEDバー      |0xAC, R, G, B, 0x55                        |
| バックLEDバー        |0xAD, R,G,B, 0x55                          |
| 全てのLED           |0xAE, R,G,B, 0x55                          |
| サーボモーター0      |0xAF, Angle, 0x55                          |
| サーボモーター1      |0xB0, Angle, 0x55                          |

## シリアル通信パラメータ

| ターゲット   | ピン @ M5Stack | ボーレート | シリアルパラメータ |
|:-----------|:--------------|:----------|:----------------|
| Lidar      | GPIO16 (RX)   | 230,400   | SERIAL_8N1 (8 bits data / non parity / 1 stop bit) |
| ボトムボード | GPIO17 (TX)   | 115,200   | SERIAL_8N1 (8 bits data / non parity / 1 stop bit) |

## ピンマップ（ボトム）

| 対象           | ピン @ ATmega328 |
|:--------------|:----------------|
| サーボモーター0 | A0              |
| サーボモーター1 | A1              |
| Neopixel      | 11              |

## パッケージ内容

- 1x LidarBot
- 1x リモコンハンドル
- 2x バッテリー(1300mAh @ 11.1V)
- 1x 充電器
- 1x USB Type-Cケーブル

## アプリケーション

- 室内ナビゲーション
- 自動迷路探索
- ルートプラン
- 自動操縦

