# M5Stack BASIC {docsify-ignore-all}

<img src="assets/img/product_pics/core/basic/basic_02.png" alt="basic_02" width="350" height="350"> <img src="assets/img/product_pics/core/basic/basic_03.png" alt="basic_03" width="350" height="350">

* * *

:memo:**[概要](#概要)**&nbsp;&nbsp;&nbsp;:bulb:**[クイックスタート](ja/quick_start/m5core/m5stack_core_quick_start)**&nbsp;&nbsp;&nbsp;:octocat:**[サンプルコード](https://github.com/m5stack/M5Stack/tree/master/examples/Basics)**&nbsp;&nbsp;&nbsp;:electric_plug:**[回路図](https://github.com/m5stack/M5-Schematic/blob/master/Core/Basic/M5-Core-Schematic(20171206).pdf)**&nbsp;&nbsp;&nbsp;🛒**[購入リンク](https://www.aliexpress.com/item/M5Stack-ESP32-Wifi-BLE-IoT-arduino/32837164440.html)**&nbsp;&nbsp;&nbsp;:clapper:**[関連動画](#関連動画)**

## 概要

**<mark>M5Stack BASIC</mark>**は**ESP32**チップがベースの開発用デバイスです。[Core Bottom](ja/base/core_bottom)を含みます。[UIFlow](http://flow.m5stack.com)や[MicroPython](http://micropython.org/)、[Arduino](http://www.arduino.cc)などでプログラミングすることができます。

**M5Stack BASIC**にはESP32プログラミングに必要なものに加えて、TFT液晶も装備されています。簡易版"Leap Motion"のような3Dリモートジェスチャーコントローラなども短時間で作ることが出来るでしょう。

ボトムボードはDIY用のI2Sピン(GPIO0, GPIO12, GPIO13, GPIO15, GPIO34)の他に、M-Bus上のGPIOを拡張利用できるようにデザインされています。

?>M5Stack BASICにIMUは内蔵されていません。

<img src="assets/img/product_pics/core/basic/basic_07.png" width="350" height="350"><img src="assets/img/product_pics/core/basic/basic_08.png" width="350" height="350">

## 特徴

- プログラミングサポート
  - Arduino
  - ESP-IDF
  - MicroPython
- TFカード (サポート最大16GB)

## ピンマップ

*数種類のM5Coreを販売しています。機能などの違いは[こちら](https://github.com/m5stack/M5-Schematic/blob/master/Core/hardware_difference_between_cores.md)より確認できます。*

**LCD & TF Card**

*LCD解像度: 320x240*

<table>
 <tr><td>ESP32 Chip</td><td>GPIO23</td><td>GPIO19</td><td>GPIO18</td><td>GPIO14</td><td>GPIO27</td><td>GPIO33</td><td>GPIO32</td><td>GPIO4</td></tr>
 <tr><td>ILI9341</td><td>/</td><td>MISO</td><td>CLK</td><td>CS</td><td>DC</td><td>RST</td><td>BL</td><td> </td></tr>
 <tr><td>TF Card</td><td>MOSI</td><td>MISO</td><td>CLK</td><td> </td><td> </td><td> </td><td> </td><td>CS</td></tr>

</table>

**Button & Speaker**

<table>
 <tr><td>ESP32 Chip</td><td>GPIO39</td><td>GPIO38</td><td>GPIO37</td><td>GPIO25</td></tr>
 <tr><td>Button Pin</td><td>BUTTON A</td><td>BUTTON B</td><td>BUTTON C</td></tr>
 <tr><td>Speaker</td><td> </td><td> </td><td> </td><td>Speaker Pin</td></tr>
</table>

**GROVEポートA & IP5306**

*電源管理IC (IP5306) はカスタム品です。IP5306のI2Cアドレスは**0x75**です。[IP5306データシート](https://github.com/m5stack/M5-Schematic/blob/master/Core/IIC_IP5306_REG_V1.4.pdf)*

<table>
 <tr><td>ESP32 Chip</td><td>GPIO22</td><td>GPIO21</td></tr>
 <tr><td>GROVE A</td><td>SCL</td><td>SDA</td></tr>
 <tr><td>IP5306</td><td>SCL</td><td>SDA</td><td>5V</td><td>GND</td></tr>
</table>

## スペック

|項目|詳細|
|:---|:---|
|ESP32| 240MHz x 2コア, 600 DMIPS, 520KB SRAM, Wi-Fi, デュアルモードBluetooth|
|Flash| 16MB (旧: 4MB) |
|電源入力| 5V @ 500mA |
|インターフェース| USB Type-C x 1, Grove(I2C+I/0+UART) x 1|
|画面| 2 inch, 320x240 Colorful TFT LCD, ILI9342 |
|スピーカー| 1W-0928|
|電池| 150mAh @ 3.7V 内蔵|
|動作温度| 32°F to 104°F ( 0°C to 40°C ) |
|サイズ| 54 x 54 x 12.5 mm |
|ケース| プラスチック ( PC )|
|重量| 120g (ボトムモジュール含む）, 100g（コアのみ） |

**<mark>メモ:</mark>**

*各コアの主な仕様は以下の表の通りです。*

- *比較表の**チェック**は[こちら](https://github.com/m5stack/M5-Schematic/blob/master/Core/hardware_difference_between_cores_ja.md)。*

- *比較表の**ダウンロード**は[こちら](https://github.com/m5stack/M5-Schematic/blob/master/Core/M5%20Core%20Detailed%20Comparison.xlsx)。*

<img src="https://m5stack.oss-cn-shenzhen.aliyuncs.com/image/m5-docs_table/core_comparison/core_main_comparison_04_ja.png">

<img src="https://m5stack.oss-cn-shenzhen.aliyuncs.com/image/m5-docs_table/core_comparison/core_main_comparison_05_ja.png">

## パッケージ内容

- 1x M5Stack BASIC
- 1x M5Stack BASIC ボトムモジュール
- USB Type-C ケーブル
- ユーザーマニュアル

<img src="assets/img/product_pics/core/basic/basic_04.png" alt="basic_04" width="80%" height="80%">

<!-- <img src="assets/img/product_pics/core/basic/basic_06.png" width="250" height="250"> <img src="assets/img/product_pics/core/basic/basic_07.png" width="250" height="250">

<img src="assets/img/product_pics/core/basic/basic_08.png" width="250" height="250"> <img src="assets/img/product_pics/core/basic/basic_09.png" width="250" height="250"> -->

<img src="assets/img/product_pics/core/basic/basic_10.png" width="50%" height="50%">

## 関連リンク

- **データシート**
  - [ESP32(中国語)](https://www.espressif.com/sites/default/files/documentation/esp32_datasheet_cn.pdf)

## 関連動画

**m5stackの紹介**

<video width="500" controls>
    <source src="https://m5stack.oss-cn-shenzhen.aliyuncs.com/video/LukeVideo/m5stack%E7%AE%80%E4%BB%8B%EF%BC%88%E4%B8%AD%E6%96%87%EF%BC%89.mp4" type="video/mp4">
</video>

**M5Coreの作品**

[![core_bottom_01.png](http://m5stack.oss-cn-shenzhen.aliyuncs.com/image/m5-docs_content/core/core_compass.png)](https://m5stack.oss-cn-shenzhen.aliyuncs.com/video/Blog/Twitch201811/M5Stack%20Compass.mp4)[![core_bottom_01.png](http://m5stack.oss-cn-shenzhen.aliyuncs.com/image/m5-docs_content/core/core_imu.png)](https://v.youku.com/v_show/id_XNDAxNDMwMjAyNA==.html?spm=a2hzp.8253869.0.0)[![core_bottom_01.png](http://m5stack.oss-cn-shenzhen.aliyuncs.com/image/m5-docs_content/core/core_avatar.png)](https://m5stack.oss-cn-shenzhen.aliyuncs.com/video/Blog/Twitch201811/M5Stack%20Avatar%20Custom%20Face.mp4)

[![core_bottom_01.png](http://m5stack.oss-cn-shenzhen.aliyuncs.com/image/m5-docs_content/core/core_voice_recognition.png)](https://m5stack.oss-cn-shenzhen.aliyuncs.com/video/Blog/Twitch201812/M5Stack%20Voice-Recognize.mp4)[![core_bottom_01.png](http://m5stack.oss-cn-shenzhen.aliyuncs.com/image/m5-docs_content/core/core_smart_electric_monitor.png)](https://m5stack.oss-cn-shenzhen.aliyuncs.com/video/Blog/Twitch201811/M5stack%20Smart%20Electric%20Monitor.mp4)[![core_bottom_01.png](http://m5stack.oss-cn-shenzhen.aliyuncs.com/image/m5-docs_content/core/core_smart_home.png)](https://m5stack.oss-cn-shenzhen.aliyuncs.com/video/Blog/Twitch201812/Smart%20Home.mp4)

[![core_bottom_01.png](http://m5stack.oss-cn-shenzhen.aliyuncs.com/image/m5-docs_content/core/core_leap_motion.png)](https://m5stack.oss-cn-shenzhen.aliyuncs.com/video/Blog/Twitch201811/M5Stack%20Motion%20Detector.mp4)[![core_bottom_01.png](http://m5stack.oss-cn-shenzhen.aliyuncs.com/image/m5-docs_content/core/core_microphone_alexa.png)](https://m5stack.oss-cn-shenzhen.aliyuncs.com/video/Blog/Twitch201812/M5stack%20Microphone%20.mp4)[![core_bottom_01.png](http://m5stack.oss-cn-shenzhen.aliyuncs.com/image/m5-docs_content/core/core_robot.png)](https://m5stack.oss-cn-shenzhen.aliyuncs.com/video/Blog/Twitch201811/M5Stack%20Robot.mp4)