# ADC ユニット

## 概要

ADC ユニットは自己校正機能を備えた16bit ADコンバータユニットです。ESP32内蔵ADコンバータの2倍の分解能をほこり、より精細なデータを取得する事ができるようになります。変換モードは連続モードとワンショットモードの２つがあります。I2Cを使用してADCユニットからデータの取得を行う事ができます。I2Cアドレスは **<mark>0x48</mark>**です。

## 特徴

- 最大分解能 16bit
- サンプリングレート変更可能 - サンプルレート 8, 16, 32, 128Hz
- 増幅率変更可能 - 利得 1, 2, 4, 8 dB
- 0〜12Vの電圧入力を検出可能
- ２種類の変換モード - 連続モード、ワンショットモード
- LEGO 互換ホール

## アプリケーション

- 心電図
- 血圧計
- ダイナモメーター

## ドキュメント

- サンプルコード
  - [Arduino](https://github.com/m5stack/M5Stack/tree/master/examples/Unit/ADC_ADS1100)

- データシート
  - [ADS1100](http://pdf1.alldatasheet.com/datasheet-pdf/view/619024/TI1/ADS1100.html)

<figure>
    <img src="assets/img/product_pics/units/M5GO_Unit_adc.png" height="300" width="300">
</figure>

## 関連情報

<!-- - [ADC ユニット 購入(スイッチサイエンス)]() -->
- [ADC ユニット 購入(AliExpress)](https://www.aliexpress.com/store/product/M5Stack-Official-ADC-Unit-16-Bit-I2C-GROVE-ADS1100-Module-0V-to-12V-analog-to-digital/3226069_32946953374.html)