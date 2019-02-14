# LORA モジュール(433MHz) {docsify-ignore-all}

<img src="assets/img/product_pics/module/module_lora_01.png" width="30%" height="30%"> <img src="assets/img/product_pics/module/module_lora_02.png" width="30%" height="30%"> <img src="assets/img/product_pics/module/module_lora_03.png" width="30%" height="30%">

***

:memo:**[概要](#概要)**&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;:octocat:**[サンプルコード](#サンプルコード)**&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;:electric_plug:**[回路図](#回路図)**&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;🛒**[購入リンク](https://www.aliexpress.com/store/product/M5Stack-Official-Stock-Offer-LoRa-Module-for-ESP32-DIY-Development-Kit-Wireless-433MHz-Built-in-Antenna/3226069_32839736315.html?spm=2114.12010615.8148356.22.25e96be7xE1y22.html)**

## 概要

**<mark>LORA</mark>**モジュールはRa-02と呼ばれる小型のLoRa™モジュールを採用しています。

LoRa™は少ない消費電力で広いエリア(1~2km)をカバーする無線通信方式の一つです。Wi-FiやBluetoothなどとは補完の関係にあります。

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

### Arduino IDE

２台以上のLoRaモジュールを用い、長距離通信を行うサンプルコードです。
- メッセージの送信に成功したら、青い文字列が表示されます。
- メッセージの受信に成功したら、黄色い文字列が表示されます。
- 初期化に失敗したら、赤い文字列が表示されます。

*完全なソースコードは[こちら](https://github.com/m5stack/M5-ProductExampleCodes/tree/master/Module/LORA/Arduino)*

```arduino
#include <M5Stack.h>
#include <M5LoRa.h>

// 宣言
String outgoing;                     // 送信メッセージ
byte msgCount = 0;                   // 送信メッセージ数
byte localAddress = 0xBB;            // このデバイスのアドレス
byte destination = 0xFF;             // 送信先

// 初期化
M5.begin();
LoRa.setPins();                      // CS, reset, IRQピンの設定
LoRa.begin(433E6);                   // 915 MHzで初期化

// メッセージ送信
void sendMessage(String outgoing) {
  LoRa.beginPacket();                // パケット開始
  LoRa.write(destination);           // 送信先アドレスの追加
  LoRa.write(localAddress);          // 送信者アドレスの追加
  LoRa.write(msgCount);              // メッセージIDの追加
  LoRa.write(outgoing.length());     // ペイロード長の追加
  LoRa.print(outgoing);              // ペイロードの追加
  LoRa.endPacket();                  // パケット送信
  msgCount++;                        // メッセージIDインクリメント
}

// メッセージ受信
void onReceive(int packetSize) {
  if (packetSize == 0) return;       // パケットが無い場合リターン
  int recipient = LoRa.read();       // 受信者アドレス
  byte sender = LoRa.read();         // 送信者アドレス
  byte incomingMsgId = LoRa.read();  // 受信メッセージID
  byte incomingLength = LoRa.read(); // 受信メッセージ長

  String incoming = "";

  while (LoRa.available()) {
    incoming += (char)LoRa.read(); // メッセージ取得
  }
}

onReceive(LoRa.parsePacket());
```

<img src="assets/img/product_pics/module/module_example/LORA/example_module_lora_02.png">

## 回路図

<img src="assets/img/product_pics/module/lora_sch.png">
