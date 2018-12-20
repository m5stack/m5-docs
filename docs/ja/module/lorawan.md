# LoRaWAN モジュール

[中文](zh_CN/product_documents/modules/module_lorawan) | [English](en/product_documents/modules/module_lorawan) | 日本語

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

## ドキュメント

- データシート
  - [RHF76-052 wiki](http://wiki.ai-thinker.com/sx127x-052)
  - [ATコマンド for LoRaWAN](http://wiki.ai-thinker.com/_media/rhf-ps01509_lorawan_class_ac_at_command_specification_-_v4.4.pdf)

<figure>
  <img src="assets/img/product_pics/modules/module_lorawan_01.png" alt="module_lorawan_01" width="300px" height="300px">
</figure>
<figure>
  <img src="assets/img/product_pics/modules/module_lorawan_02.png" alt="module_lorawan_02" width="300px" height="300px">
</figure>

## 関連情報

- [LoRaWAN モジュール 購入(AliExpress)](https://www.aliexpress.com/store/product/M5Stack-LoRaWAN-433-470-mhz-868-915-mhz-mcx/3226069_32953098569.html)