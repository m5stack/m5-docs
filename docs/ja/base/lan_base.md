# LAN ベース {docsify-ignore-all}

<img src="assets/img/product_pics/base/lan_01.png" width="300" height="300">

***

:memo:**[概要](#概要)**&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;:octocat:**[サンプルコード](https://github.com/m5stack/M5-ProductExampleCodes/tree/master/Base/LAN/Arduino)**&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;:electric_plug:**[回路図](#回路図)**&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;🛒**[購入リンク](https://www.aliexpress.com/item/M5Stack-New-Arrival-LAN-Module-with-W5500-Chip-LanProto-Ethernet-convert-Network-Module-Microcontroller-for-Arduino/32904089417.html)**:clapper:**[関連動画](#関連動画)**

## 概要

**<mark>LAN</mark>**ベースは**W5500**イーサネットチップをベースにデザインされた有線ネットワーク用ベースです。もしあなたのプロジェクトが有線LANからのみアクセス可能な場合は、このLANベースがフィットするでしょう。

M5CoreはワイヤレスWIFIを統合していますが、ネットワークインターフェースがないため、M5Coreに有線ネットワークへアクセスさせる必要がある場合は、LANベースを使用するのが適切です。

LANベースには、LANを壁や鉄骨に簡単に取り付けるための金属製のレールとマグネットディスクも付いています。

LANベースのオレンジ色のHT3.96端子。このインターフェースはまだ電気的に接続されていません。各ピンはM-BUS上のどのピンにも接続できます。

**下図はLANの内部を示しています**

<img src="assets/img/product_pics/base/lan_03.png" width="350" height="350"><img src="assets/img/product_pics/base/lan_07.png" width="350" height="350">

RS485通信を実装する必要がある場合は、対応するピンヘッダとTLL-to-RS485変換小型ボードを使用してLANベースに半田付けすると、RS485インタフェースを実現できます。そして上記のHT3.96端子を通じてRS485デバイスと通信できます。

**TTL-to-RS485アダプタボードとLANベース**

<img src="assets/img/product_pics/base/lan_04.png" width="100%" height="100%">

**下図は、TTL-to-RS485アダプタボードをLANバックプレーンと組み合わせる方法を示しています。**

*RS485変換用の小型ボードはLANバックプレーンにはんだ付けされています。小型ボードのシリアルポートピンは、LANバックプレーンのGPIO16とGPIO17に接続されます。*

<img src="assets/img/product_pics/base/lan_05.png" width="50%" height="50%">

## ピンマップ

**W5500**

| W5500  | ESP32 Chip   |
| :----: | :----------: |
| MOSI   | GPIO23       |
| MISO   | GPIO19       |
| CLK    | GPIO18       |
| CS     | GPIO26       |
| RST    | GPIO13       |
| INTn   | GPIO34       |

**M-Bus**

<img src="assets/img/product_pics/core/M-BUS.png" width="500" height="385">

## 特徴

- 入力電圧範囲： 9 ~ 24V
- RS485通信をサポート
- RS485通信用のHT3.96サポート
- 壁固定可能

## パッケージ内容

- 1x LAN Base
- 1x TTL-to-RS485変換アダプタボード
- 1x ピンヘッダ 20pin
- 1x メタルレール、マグネットディスク
- 3x HT3.96端子
  - 2x 3pin
  - 1x 4pin
- 10x コールドクリンプ端子
- 3x アレンレンチ
  - 1x 1.5mm
  - 1x 2mm
  - 1x 2.5mm
- 2x 六角鍋ネジ M3x28
- 4x h六角鍋ネジ KA2x4
- 1x 皿頭ネジ M3x8

<img src="assets/img/product_pics/base/lan_06.png" width="50%" height="50%">

## アプリケーション

- M5Core + RS485ベルトコンベヤーコントローラ

<img src="assets/img/product_pics/base/base_example/example_base_lan_01.png" width="70%" height="70%">

- 有線ストリーミングビデオ配信

<img src="assets/img/product_pics/base/base_example/example_base_lan_02.png" width="70%" height="70%">

## 関連リンク

- **[公式ビデオ](https://www.youtube.com/channel/UCozgFVglWYQXbvTmGyS739w)**

- **[公式フォーラム](http://forum.m5stack.com/)**

- **データシート**
  - [W5500](https://cdn.sparkfun.com/datasheets/Dev/Arduino/Shields/W5500_datasheet_v1.0.2_1.pdf)

## 回路図

<img src="assets/img/product_pics/base/lan_sch.JPG">

## 関連動画

**LAN ケース - PCから動画をLANモジュール経由でUDP配信**

<video width="500" controls>
    <source src="https://m5stack.oss-cn-shenzhen.aliyuncs.com/video/Blog/Twitch201904/M5StackLovyanlauncher.mp4" type="video/mp4">
</video>
