# ADC ユニット

<img src="assets/img/product_pics/unit/M5GO_Unit_adc.png" width="30%" height="30%"><img src="assets/img/product_pics/unit/unit_adc_grove_a.png" width="30%" height="30%">

***

:memo:**[概要](#概要)**&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;:octocat:**[サンプルコード](#サンプルコード)**&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; :electric_plug:**[回路図](#回路図)** &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;🛒**[購入リンク](#購入リンク)**

## 概要

**<mark>ADC</mark>**ユニットは自己校正機能を備えた16bit ADコンバータユニットです。ESP32内蔵ADコンバータの2倍の分解能をほこり、より精細なデータを取得する事ができるようになります。変換モードは連続モードとワンショットモードの２つがあります。I2Cを使用してADCユニットからデータの取得を行う事ができます。I2Cアドレスは **<mark>0x48</mark>**です。

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

## サンプルコード

### 1. Arduino IDE


### 2. UIFlow

## 回路図

<img src="assets/img/product_pics/unit/adc_sch.JPG">

### PinMap

<table>
 <tr><td>M5Core(GROVE A)</td><td>GPIO22</td><td>GPIO21</td><td>5V</td><td>GND</td></tr>
 <tr><td>ADC Unit</td><td>SCL</td><td>SDA</td><td>5V</td><td>GND</td></tr>
</table>

## 関連リンク

- **[公式ビデオ](https://www.youtube.com/channel/UCozgFVglWYQXbvTmGyS739w)**

- **[フォーラム](http://forum.m5stack.com/)**

- **データシート**
  - [ADS1100](http://pdf1.alldatasheet.com/datasheet-pdf/view/619024/TI1/ADS1100.html)

## 購入リンク

- [ADC ユニット 購入(AliExpress)](https://www.aliexpress.com/store/product/M5Stack-ADC-16-I2C-ADS1100-0-12/3226069_32946953374.html)