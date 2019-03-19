# M5StickC {docsify-ignore-all}

<img src="assets/img/product_pics/core/minicore/m5stickc/m5stickc_05.png" alt="gray_02" width="350" height="350">

* * *

:memo:**[概要](#概要)**&nbsp;&nbsp;&nbsp;:octocat:**[サンプルコード](#サンプルコード)**&nbsp;&nbsp;&nbsp;🛒**[購入リンク](https://www.aliexpress.com/item/New-Arrival-2019-M5StickC-1-of-Limited-Trial-Edition-ESP32-PICO-Mini-IoT-Development-Board-Finger/32985247364.html)**&nbsp;&nbsp;&nbsp;:clapper:**[関連動画](#関連動画)**

## 概要

<mark>**M5StickC**</mark>は、0.96 インチの **TFTカラー液晶** (解像度: 80 * 160), **赤色LED**, **ボタン**, **マイクロフォン**, **IR送信機**, **6 DoF IMU (SH200Q)**,そして**80mAHの電池**を備えたESP32開発用ボードです。またM5StickC内のESP32モジュールは4MBのフラッシュメモリを内蔵しています。ストラップベースを利用すれば、いつでもあなたの手首にM5Stickを身に着けることができます。

**電源操作:** 電源スイッチを2秒間押し続けると電源オンになります。電源オンの状態で電源スイッチを6秒間押し続けると電源オフになります。

**メモ:** 販売用M5StickCはオレンジ色のケースのみです。

## 特徴

- サポートプログラミング環境: Arduino, UIFlow　(Blockly, MicroPython)

## ピンマップ

<img src="assets/img/product_pics/core/minicore/m5stickc/m5stickc_01.png" alt="gray_02" width=50% height=50%><img src="assets/img/product_pics/core/minicore/m5stickc/m5stickc_06.png" alt="gray_02" width=30% height=30%>

**赤色LED & IR送信機 & ボタンA & ボタンB**

<table>
 <tr><td>ESP32 chip</td><td>GPIO9</td><td>GPIO10</td><td>GPIO37</td><td>GPIO39</td></tr>
 <tr><td>赤色LED</td><td>LED pin</td><td> </td><td> </td><td> </td></tr>
 <tr><td>IR送信機</td><td> </td><td>送信ピン</td><td> </td><td> </td></tr>
<tr><td>ボタンA</td><td> </td><td> </td><td>ボタンピン</td><td> </td></tr>
<tr><td>ボタンB</td><td> </td><td> </td><td> </td><td>ボタンピン</td></tr>
</table>

**TFTスクリーン**

*ドライバIC: ST7735S*

*解像度: 80 * 160*

<table>
 <tr><td>ESP32 chip</td><td>GPIO15</td><td>GPIO13</td><td>GPIO23</td><td>GPIO18</td><td>GPIO5</td></tr>
 <tr><td>TFT Screen</td><td>TFT_MOSI</td><td>TFT_CLK</td><td>TFT_DC</td><td>TFT_RST</td><td>TFT_CS</td></tr>
</table>

**GROVE インターフェース**

<table>
 <tr><td>ESP32 chip</td><td>GPIO33</td><td>GPIO32</td><td>5V</td><td>GND</td></tr>
 <tr><td>GROVEインターフェース</td><td>SCL</td><td>SDA</td><td>5V</td><td>GND</td></tr>
</table>

**マイク (SPM1423)**

<table>
 <tr><td>ESP32 chip</td><td>GPIO0</td><td>GPIO34</td></tr>
 <tr><td>マイク</td><td>SCL</td><td>SDA</td></tr>
</table>

**6 DoF IMU (SH200Q)**

<table>
 <tr><td>ESP32 chip</td><td>GPIO22</td><td>GPIO21</td>
 <tr><td>6 DoF IMU (SH200Q)</td><td>SCL</td><td>SDA</td>
</table>

**M5StickC 拡張 IO ポート**

<img src="assets/img/product_pics/core/minicore/m5stickc/m5stickc_04.png" alt="gray_02" width=100% height=100%>

## Include

- 1x M5StickC including 80mAh-Battery

## 関連リンク

- **データシート**

  - [ESP32-PICO](https://github.com/m5stack/M5-Schematic/blob/master/Core/esp32-pico-d4_datasheet_cn.pdf)
  - [ST7735S](https://github.com/m5stack/M5-Schematic/blob/master/Core/ST7735S_v1.1.pdf)
  - [SH200Q](https://github.com/m5stack/M5-Schematic/blob/master/Core/SH200Q.pdf)
  - [AXP192](https://github.com/m5stack/M5-Schematic/blob/master/Core/AXP192%20Datasheet%20v1.13_cn..pdf)

## サンプルコード

- **Arduino**
  - [M5Stick Factory Test](https://github.com/m5stack/M5-ProductExampleCodes/tree/master/Core/M5StickC/Arduino/FactoryTest)

## 関連動画

- **M5StickC デモ - タイムカウンター**

<iframe width="560" height="315" src="https://m5stack.oss-cn-shenzhen.aliyuncs.com/video/Blog/Twitch201903/StickC%20Watch.mp4" frameborder="0" allow="accelerometer; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
