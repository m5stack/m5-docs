# M5Stack FIRE

<img src="assets/img/product_pics/core/fire/product_pic_fire.png" alt="fire_01" width="250" height="250"> <img src="assets/img/product_pics/core/fire/m5_fire_01.png" width="35%" height="35%">

* * *

:memo:**[概要](#概要)**&nbsp;&nbsp;&nbsp;:bulb:**[クイックスタート](ja/quick_start/m5core/m5stack_core_quick_start)**&nbsp;&nbsp;&nbsp;:octocat:**[サンプルコード](https://github.com/m5stack/M5Stack/tree/master/examples/Basics)**&nbsp;&nbsp;&nbsp;:electric_plug:**[回路図](https://github.com/m5stack/M5-3D_and_PCB/blob/master/M5_Core_SCH%2820171206%29.pdf)**&nbsp;&nbsp;&nbsp;🛒**[購入リンク](https://www.aliexpress.com/item/M5Stack-PSRAM-2-0-IoT-ESP32-16M-FLash-4M-PSRAM-BLE/32847906756.html)**&nbsp;&nbsp;&nbsp;:clapper:**[関連動画](#関連動画)**

## 概要

**<mark>M5Stack FIRE</mark>**は**ESP32**チップがベースです。**Blockly**、**Arduino**、**MicroPython**などでプログラミングすることができます。

**M5Stack FIRE**は、ESP32プログラミングに必要なものに加えて、~~**MPU6050**MEMSセンサー（3軸ジャイロ + 3軸加速度）、**MAG3110**MEMSセンサー(3軸地磁気)、~~ **MPU9250**MEMSセンサー(3軸ジャイロ + 3軸加速度 + 3軸地磁気) 、TFT LCDなどを備えています。簡易版"Leap Motion"のような3Dリモートジェスチャーコントローラなどを短時間で作ることが出来るでしょう。

M5Go CHG.ベースはPOGOピン、M5GoベースはPORT B, PORT C, 2つのLEDバー(SK6812)で構成されています。

## 特徴

- プログラミングサポート
  - Arduino
  - Blockly
  - ESP-IDF
  - Python
- LEGO 互換ホール
- [TFカード](https://ja.wikipedia.org/wiki/SD%E3%83%A1%E3%83%A2%E3%83%AA%E3%83%BC%E3%82%AB%E3%83%BC%E3%83%89)サポート

## ピンマップ

*数種類のM5Coreを販売しています。機能などの違いは[こちら](https://github.com/m5stack/M5-Schematic/blob/master/Core/hardware_diff_between_m5cores.md)より確認できます。*

#### メインボードピンマップ

**LCD & TFカード**

*LCD解像度: 320x240*
*TFカード最大サイズ: 16GB*

<table>
 <tr><td>ESP32 Chip</td><td>GPIO23</td><td>GPIO19</td><td>GPIO18</td><td>GPIO14</td><td>GPIO27</td><td>GPIO33</td><td>GPIO32</td><td>GPIO4</td></tr>
 <tr><td>ILI9341(LCD Driver)</td><td>/</td><td>MISO</td><td>CLK</td><td>CS</td><td>DC</td><td>RST</td><td>BL</td><td> </td></tr>
 <tr><td>TF Card</td><td>MOSI</td><td>MISO</td><td>CLK</td><td> </td><td> </td><td> </td><td> </td><td>CS</td></tr>
</table>

**ボタン & スピーカー**

<table>
 <tr><td>ESP32 Chip</td><td>GPIO39</td><td>GPIO38</td><td>GPIO37</td><td>GPIO25</td></tr>
 <tr><td>Button</td><td>BUTTON A</td><td>BUTTON B</td><td>BUTTON C</td></tr>
 <tr><td>Speaker</td><td> </td><td> </td><td> </td><td>Speaker Pin</td></tr>
</table>

**GROVE A**

<table>
 <tr><td>ESP32 Chip</td><td>GPIO22</td><td>GPIO21</td><td>5V</td><td>GND</td></tr>
 <tr><td>GROVE A</td><td>SCL</td><td>SDA</td><td>5V</td><td>GND</td></tr>
</table>

**9自由度IMUセンサー(MPU9250)**

*I2C Address: 0x68*

<table>
 <tr><td>ESP32 Chip</td><td>GPIO22</td><td>GPIO21</td><td>5V</td><td>GND</td></tr>
 <tr><td>MPU9250</td><td>SCL</td><td>SDA</td><td>5V</td><td>GND</td></tr>
</table>

#### M5GOベースピンマップ

**GROVE B**

<table>
 <tr><td>ESP32 Chip</td><td>GPIO36</td><td>GPIO26</td><td>5V</td><td>GND</td></tr>
 <tr><td>GROVE B</td><td>GPIO36</td><td>GPIO26</td><td>5V</td><td>GND</td></tr>
</table>

**GROVE C**

<table>
 <tr><td>ESP32 Chip</td><td>GPIO16</td><td>GPIO17</td><td>5V</td><td>GND</td></tr>
 <tr><td>GROVE C</td><td>RXD</td><td>TXD</td><td>5V</td><td>GND</td></tr>
</table>

**LEDバー & マイク**

<table>
 <tr><td>ESP32 Chip</td><td>GPIO15</td><td>GPIO34</td></tr>
 <tr><td>LED Bar</td><td>SIG Pin</td><td> </td></tr>
 <tr><td>MicroPhone</td><td> </td><td>MIC Pin</td></tr>
</table>

## 仕様

<table>
   <tr style="font-weight:bold">
      <td>M5Core Source</td>
      <td>Parameter</td>
   </tr>
   <tr>
      <td>ESP32</td>
      <td>240MHz dual core, 600 DMIPS, 520KB SRAM, Wi-Fi, dual mode Bluetooth</td>
   </tr>
   <tr>
      <td>Flash & PSRAM</td>
      <td>16MB Flash + 4MB pSRAM</td>
   </tr>
   <tr>
      <td>Input</td>
      <td>5V @ 500mA</td>
   </tr>
   <tr>
      <td>Interface</td>
      <td>TypeC x 1, GROVE(I2C+I/0+UART) x 1</td>
   </tr>
   <tr>
      <td>LCD</td>
      <td>2 inch, 320x240 Colorful TFT LCD, ILI9342</td>
   </tr>
   <tr>
      <td>Speaker</td>
      <td>1W-0928</td>
   </tr>
      <tr>
      <td>Microphone</td>
      <td>MEMS Analog BSE3729 Microphone</td>
   </tr>
   <tr>
      <td>LED</td>
      <td>SK6812 3535 RGB LED x 10</td>
   </tr>
   <tr>
      <td>MEMS</td>
      <td>MPU9250</td>
   </tr>
   <tr>
      <td>Battery</td>
      <td>550mAh @ 3.7V, inside  vb</td>
   </tr>
   <tr>
      <td>Op.Temp.</td>
      <td>32°F to 104°F ( 0°C to 40°C )</td>
   </tr>
   <tr>
      <td>Size</td>
      <td>54 x 54 x 12.5 mm</td>
   </tr>
   <tr>
      <td>C.A.S.E</td>
      <td>Plastic ( PC )</td>
   </tr>
   <tr>
      <td>Weight</td>
      <td>120g with bottom, 100g only core</td>
   </tr>
</table>

## パッケージ内容

- 1x M5Stack FIRE
- 1x M5GO ボトムモジュール
- 1x M5GO チャージベース
- USB Type-C ケーブル
- ユーザーマニュアル

## ドキュメント

- **サンプルコード**
  - [Arduino](https://github.com/m5stack/M5Stack/tree/master/examples)
  - [MicroPython](https://github.com/m5stack/M5GO/tree/master/examples)

- **データシート** - [ESP32](https://www.espressif.com/sites/default/files/documentation/esp32_datasheet_cn.pdf) - [MPU9250](http://www.invensense.com/wp-content/uploads/2015/02/PS-MPU-9250A-01-v1.1.pdf) - [MPU9250レジスタマップ](https://www.invensense.com/wp-content/uploads/2015/02/RM-MPU-9250A-00-v1.6.pdf) - [AK8963 (日本語)](https://strawberry-linux.com/pub/AK8963.pdf) - [AK8963 (英語)](https://www.akm.com/akm/ja/file/datasheet/AK8963C.pdf)

## 関連動画

- **m5stackの紹介**

<iframe width="560" height="315" src="https://www.youtube.com/embed/W5ZfDCBc1lk" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
