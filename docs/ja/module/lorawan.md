# LoRaWAN モジュール(433/470MHz和868/915MHz) {docsify-ignore-all}

<img src="assets/img/product_pics/module/module_lora_01.png" width="30%" height="30%"> <img src="assets/img/product_pics/module/module_lora_02.png" width="30%" height="30%"> <img src="assets/img/product_pics/module/module_lora_03.png" width="30%" height="30%">

***

:memo:**[概要](#概要)**&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;:octocat:**[サンプルコード](#サンプルコード)**&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;:electric_plug:**[回路図](#回路図)**&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;🛒**[購入リンク](https://www.aliexpress.com/store/product/M5Stack-New-LoRaWAN-Module-433-470Mhz-868-915MHz-with-Internal-Antenna-and-MCX-External-Antenna-Port/3226069_32953098569.html?spm=a2g1y.12024536.productList_5885011.pic_2)**

## 概要

**<mark>LoRaWAN</mark>**モジュールはLoRaチップ(SX1276)とMCU内蔵の小型LoRa端末モジュールです。完全なLoRaプロトコルスタックが組み込まれており、UARTまたはsimple ATコマンドを利用してLoRaWANモジュールを開発することができます。

デフォルトUART config: "9600, 8, n, 1" (8ビットデータ, ノーパリティ, 1ストップビット)

?> "LoRaWAN"シルクスクリーンの隣の5つの穴はLoRaWANモジュールのファームウェアアップデート用です。

## 特徴

- サポートバンド: 433/470MHz , 868/915MHz
- データレート: 0.018-38.4kbps
- 出力: 17 ± 0.5dbm
- ADR(Adaptive Data Rate)サポート
- アンテナ内蔵

## パッケージ内容

- 1x LoRaWAN　モジュール

## アプリケーション

- オートメーターリーダー
- スマートホーム
- リモート灌漑システム

## ピンマップ

|RHF76-052_UART | ESP32 Chip |
|:--------------|:-----------|
|RXD | GPIO16 |
|TXD | GPIO17 |

## 関連リンク

- **[公式ビデオ](https://www.youtube.com/channel/UCozgFVglWYQXbvTmGyS739w)**

- **[フォーラム](http://forum.m5stack.com/)**

- **データシート** - [RHF76-052 wiki](http://wiki.ai-thinker.com/sx127x-052) - [ATコマンド for LoRaWAN](http://wiki.ai-thinker.com/_media/rhf-ps01509_module_lorawan_class_ac_at_command_specification_-_v4.4.pdf)

## サンプルコード

### Arduino IDE

これは2つのLoRaWANモジュール間通信のサンプルです。

機能：ボタンBを押すと、433MHz帯を用いて文字列「Hello World」を送信します。ボタンCを押すと、868MHz帯を用いて文字列「Hello World」を送信します。ボタンAを押すと画面をクリアします。

注：M5Stack用のLoraWanプログラムはコンパイルする前に、以下のパスに解凍する必要があります。                      `C:\Users\<user_name>\Documents\Arduino\libraries`

*以下のコードは不完全です(説明のためだけに). 完全なコードが必要な場合は、ここをクリックしてください[サンプルコード](https://github.com/m5stack/M5-ProductExampleCodes/tree/master/Module/LORAWAN/Arduino).*

```arduino
/*
    device_A.ino
*/
#include <M5Stack.h>
#include <LoRaWan.h>

#define SerialUSB Serial

// declaration
M5.begin();
SerialUSB.begin(9600);
lora.init();
delay(2000); // must delay for lorawan power on

// 433MHz frequency initialization
lora.initP2PMode(433, SF12, BW500, 8, 8, 20);

// 868MHz frequency initialization
lora.initP2PMode(868, SF12, BW500, 8, 8, 20);

// send string
lora.transferPacketP2PMode("hello world");

// receive data
short length = 0;
short rssi = 0;
memset(buffer, 0, 128);
length = lora.receivePacketP2PMode(buffer, 128, &rssi, 1);
```

```arduino
/*
    device_B.ino
*/
#include <M5Stack.h>
#include <LoRaWan.h>

#define SerialUSB Serial

// declaration
M5.begin();
SerialUSB.begin(9600);
lora.init();
delay(2000); // must delay for lorawan power on

// 433MHz frequency initialization
lora.initP2PMode(433, SF12, BW500, 8, 8, 20);

// 868MHz frequency initialization
lora.initP2PMode(868, SF12, BW500, 8, 8, 20);

// send string
lora.transferPacketP2PMode("hello world");

// receive data
short length = 0;
short rssi = 0;
memset(buffer, 0, 128);
length = lora.receivePacketP2PMode(buffer, 128, &rssi, 1);
```

<img src="assets/img/product_pics/module/module_example/LORAWAN/example_module_lorawan_01.png">


## 回路図

<img src="assets/img/product_pics/module/lorawan_sch.png">