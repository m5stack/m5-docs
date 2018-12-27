# LORA モジュール

<img src="assets/img/product_pics/module/module_lora_01.png" width="30%" height="30%"> <img src="assets/img/product_pics/module/module_lora_02.png" width="30%" height="30%"> <img src="assets/img/product_pics/module/module_lora_03.png" width="30%" height="30%">

***

:memo:**[概要](#概要)**&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;:octocat:**[サンプルコード](#サンプルコード)**&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;:electric_plug:**[回路図](#回路図)**&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;🛒**[購入リンク](https://www.aliexpress.com/store/product/M5Stack-Official-Stock-Offer-LoRa-Module-for-ESP32-DIY-Development-Kit-Wireless-433MHz-Built-in-Antenna/3226069_32839736315.html?spm=2114.12010615.8148356.22.25e96be7xE1y22.html)**

## 概要

**<mark>LORA</mark>**モジュールはRa-02と呼ばれる小型のLoRa™モジュールを採用しています。

LoRa™は少ない消費電力で広いエリアをカバーする無線通信方式の一つです。

## 特徴

- Ai-Thinker製Ra-02採用
- FSK, GFSK, MSK, GMSK, LoRa™, OOK 変調モードをサポート
- 受信感度 -141 dBm
- ビットレート可変 up to 300Kbps
- アンテナ内蔵

## パッケージ内容

- 1x LORA モジュール

## アプリケーション

- 自動検針器
- スマートホーム
- リモート灌漑システム

## 関連リンク

- **[公式ビデオ](https://www.youtube.com/channel/UCozgFVglWYQXbvTmGyS739w)**

- **[フォーラム](http://forum.m5stack.com/)**

- **データシート** - [LoRa](http://wiki.ai-thinker.com/lora)

?> **メモ** もしあなたのLCD画面が表示されない場合は、以下のソースのように``m5.begin()``の前にGPIO5をプルアップする２行を追加してみてください。GPIO5がLoRaモジュールのNSSピンに接続されている為、GPIO５をプルアップする必要があります。

```arduino
    pinMode(5,OUTPUT);
    digitalWrite(5,HIGH);
    m5.begin();
```
## サンプルコード

### 1. Arduino IDE

### 2. UIFlow

## 回路図

<!-- <img src="assets/img/product_pics/module/lora_sch.png"> -->
