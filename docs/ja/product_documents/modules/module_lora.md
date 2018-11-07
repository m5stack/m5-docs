# M5Stack LORA モジュール

## 概要

M5Stack LORA モジュールはRa-02と呼ばれる小型のLoRa™モジュールを採用しています。

LoRa™は少ない消費電力で広いエリアをカバーする無線通信方式の一つです。

## 特徴

- Ai-Thinker製Ra-02採用
- FSK, GFSK, MSK, GMSK, LoRa™, OOK 変調モードをサポート
- 受信感度 -141 dBm
- ビットレート可変 up to 300Kbps
- アンテナ内蔵

## パッケージ内容

- 1x M5Stack LORA モジュール

## アプリケーション

- 自動検針器
- スマートホーム
- リモート灌漑システム

## ドキュメント

- ウェブサイト
  - [M5Stack](https://m5stack.com)
- サンプルコード
  - [Arduino](https://github.com/m5stack/M5Stack/tree/master/examples/Modules/Lora)
- データシート
  - [LoRa](http://wiki.ai-thinker.com/lora)
- GitHub
  - [M5Stack](https://github.com/m5stack/M5Stack)

?> **メモ** もしあなたのLCD画面が表示されない場合は、以下のソースのように``m5.begin()``のあとに以下の２行を追加してみてください。GPIO5がLoRaモジュールのNSSピンに接続されている為、GPIO５をプルアップする必要があります。

```cpp
    pinMode(5,OUTPUT);
    digitalWrite(5,HIGH);
    m5.begin();
```

## 関連情報

- [M5Stack LORA モジュール 購入(AliExpress)](https://www.aliexpress.com/store/product/M5Stack-Official-Stock-Offer-LoRa-Module-for-ESP32-DIY-Development-Kit-Wireless-433MHz-Built-in-Antenna/3226069_32839736315.html)