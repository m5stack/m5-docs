# SIM800L モジュール

[中文](zh_CN/product_documents/modules/module_sim800) | [English](en/product_documents/modules/module_sim800) | 日本語

## 概要

**<mark>SIM800L</mark>**モジュールは小型のSIM800Lを用いたGSM/GPRS通信用モジュールです。
M5Stackシリーズのコアを使用し、Blockly、Arduino、MicroPythonでプログラムすることが可能です。

**SIM800L**モジュールはクアッドバンドのGSM/GPRS通信ソリューションを提供します。SIM800LとM5StackはUSART2と呼ばれるシリアルポートで接続されます。もちろん、あなた自身でシリアルポート番号を変更することも可能です。

## 特徴

- SIM800L モジュール
- アンテナ内蔵
- 3.5 mm オーディオジャック, マイク(ユーザーは、マイクを有効にするためにO ohm抵抗を半田付けする必要があります)
- マイク
- パラメータ
- GSM/GPRS
- クアッドバンド 850/900/1800/1900MHz をサポート
- 低消費電力で通話、SMS、データ通信が可能
- Bluetooth と Embedded AT

## ピンマッピング

*After SIM800 was stacked with M5Core, they communicat through UART2*

**SIM800**

| SIM800 Pin        | ESP32 Chip      |
| :----------:  |:------------: |
| TXD        | GPIO16         |
| RXD        | GPIO17         |
| RST        | GPIO5         |

## パッケージ内容

- 1x SIM800L モジュール

## アプリケーション

- 二酸化窒素アラーム
- 自動WebクローラーSMS通知
- リモート検針システム

## ドキュメント

- **サンプルコード**
  - [Arduino](https://github.com/m5stack/M5Stack/tree/master/examples)
- **データシート**
  - [SIM800L](http://simcomm2m.com/En/module/detail.aspx?id=138)(SIM800L)

<figure>
  <img src="assets/img/product_pics/modules/module_sim800_01.png" alt="module_sim800_01" width="300px" height="300px">
</figure>
<figure>
  <img src="assets/img/product_pics/modules/module_sim800_02.png" alt="module_sim800_02" width="300px" height="300px">
</figure>

## 関連情報

- [SIM800L モジュール 購入(AliExpress)](https://www.aliexpress.com/store/product/M5Stack-gsm-SIM800L-iot-arduino-ESP32-3-5/3226069_32843211923.html)
