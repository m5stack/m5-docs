# M5StickC {docsify-ignore-all}

<img src="assets/img/product_pics/core/minicore/m5stickc/m5stickc_05.png" alt="gray_02" width="350" height="350">

* * *

:memo:**[概要](#概要)**&nbsp;&nbsp;&nbsp;:bulb:**[クイックスタート](ja/quick_start/m5stickc/m5stickc_quick_start_with_arduino_Windows)**&nbsp;&nbsp;&nbsp;:octocat:**[サンプルコード](#サンプルコード)**&nbsp;&nbsp;&nbsp;🛒**[購入リンク](https://www.aliexpress.com/item/New-Arrival-2019-M5StickC-1-of-Limited-Trial-Edition-ESP32-PICO-Mini-IoT-Development-Board-Finger/32985247364.html)**&nbsp;&nbsp;&nbsp;:clapper:**[関連動画](#関連動画)**

## 概要

<mark>**M5StickC**</mark>は、0.96 インチの **TFTカラー液晶** (解像度: 80 * 160), **赤色LED**, **ボタン**, **マイクロフォン**, **IR送信機**, **6 DoF IMU (SH200Q)**,そして**80mAHの電池**を備えたESP32開発用ボードです。またM5StickC内のESP32 **ESP32-Pico** モジュールは4MBのフラッシュメモリを内蔵しています。ストラップベースを利用すれば、いつでもあなたの手首にM5Stickを身に着けることができます。

**電源操作:**

- 電源オン: 電源スイッチを2秒間押し続けます。  
- 電源オフ: 電源オンの状態で電源スイッチを6秒間押し続けます。  

**メモ:**

- M5StickCがサポートするボーレートは 1,200 ~ 115,200, 250K, 500K, 750K, 1,500K です。

  ```path/to/esp32/[version]/boards.txt
  # 表示されていないスピードを追加する場合は、以下のようにします。
  # 例）1,500Kを追加する場合は、boards.txt内で次の行を検索し、
  # 見つかった行の1行上に以下の２行を貼り付けます。
  # 検索する行
  pico32.menu.UploadSpeed.921600=921600
  # 貼り付ける行
  pico32.menu.UploadSpeed.1500000=1500000
  pico32.menu.UploadSpeed.1500000.upload.speed=1500000
  ```

- 販売用M5StickCのカラーはオレンジ色のみです。

## 特徴

- サポートプログラミング環境: Arduino, UIFlow(Blockly, MicroPython)

## ピンマップ

<img src="assets/img/product_pics/core/minicore/m5stickc/m5stickc_01.png" alt="gray_02" width=50% height=50%><img src="assets/img/product_pics/core/minicore/m5stickc/m5stickc_06.png" alt="gray_02" width=30% height=30%>

**赤色LED & IR送信機 & ボタンA & ボタンB**

<table>
 <tr><td>ESP32 chip</td><td>GPIO10</td><td>GPIO9</td><td>GPIO37</td><td>GPIO39</td></tr>
 <tr><td>赤色LED</td><td>LEDピン</td><td> </td><td> </td><td> </td></tr>
 <tr><td>IR送信機</td><td> </td><td>送信ピン</td><td> </td><td> </td></tr>
<tr><td>ボタンA</td><td> </td><td> </td><td>ボタンピン</td><td> </td></tr>
<tr><td>ボタンB</td><td> </td><td> </td><td> </td><td>ボタンピン</td></tr>
</table>

**TFTスクリーン**

*ドライバIC: ST7735S*

*解像度: 80 * 160*

<table>
 <tr><td>ESP32 chip</td><td>GPIO15</td><td>GPIO13</td><td>GPIO23</td><td>GPIO18</td><td>GPIO5</td></tr>
 <tr><td>TFTスクリーン</td><td>TFT_MOSI</td><td>TFT_CLK</td><td>TFT_DC</td><td>TFT_RST</td><td>TFT_CS</td></tr>
</table>

**GROVEインターフェース**

<table>
 <tr><td>ESP32 chip</td><td>GPIO33</td><td>GPIO32</td><td>5V</td><td>GND</td></tr>
 <tr><td>GROVEインターフェース</td><td>SCL</td><td>SDA</td><td>5V</td><td>GND</td></tr>
</table>

**マイク (SPM1423)**

<table>
 <tr><td>ESP32 chip</td><td>GPIO0</td><td>GPIO34</td></tr>
 <tr><td>マイク</td><td>SCL</td><td>SDA</td></tr>
</table>

**6 DoF IMU (SH200Q) ＆ 電源管理IC (AXP192)**

<table>
 <tr><td>ESP32 chip</td><td>GPIO22</td><td>GPIO21</td>
 <tr><td>6 DoF IMU (SH200Q)</td><td>SCL</td><td>SDA</td>
 <tr><td>電源管理IC (AXP192)</td><td>SCL</td><td>SDA</td>
</table>

**M5StickC 拡張 IO ポート**

<img src="assets/img/product_pics/core/minicore/m5stickc/m5stickc_04.png" alt="gray_02" width=100% height=100%>

## パッケージ内容

- 1x M5StickC (80mAh電池内蔵)

## 関連リンク

- **データシート**

  - [コントローラ：ESP32-PICO](https://github.com/m5stack/M5-Schematic/blob/master/Core/esp32-pico-d4_datasheet_en.pdf)
  - [ディスプレイ：ST7735S](https://github.com/m5stack/M5-Schematic/blob/master/Core/ST7735S_v1.1.pdf)
  - [IMU：SH200Q](https://github.com/m5stack/M5-Schematic/blob/master/Core/SH200Q.pdf)
  - [電源管理：AXP192](https://github.com/m5stack/M5-Schematic/blob/master/Core/AXP192%20Datasheet%20v1.13_cn.pdf)
  - [マイク：SPM1423](https://pdf1.alldatasheet.com/datasheet-pdf/view/546596/KNOWLES/SPM1423HM4H-B.html)

## サンプルコード

- **Arduino**
  - [M5Stick Factory Test](https://github.com/m5stack/M5StickC/tree/master/examples/Basics/FactoryTest)

## 関連動画

- **M5StickC デモ - タイムカウンター**

<video width="500" controls>
    <source src="https://m5stack.oss-cn-shenzhen.aliyuncs.com/video/Blog/Twitch201903/StickC%20Watch.mp4" type="video/mp4">
</video>
