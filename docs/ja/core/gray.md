# GRAY {docsify-ignore-all}

<img src="assets/img/product_pics/core/gray/gray_01.png" alt="gray_02" width="350" height="350"><img src="assets/img/product_pics/core/gray/gray_02.png" alt="gray_02" width="350" height="350">

* * *

:memo:**[概要](#概要)**&nbsp;&nbsp;&nbsp;:bulb:**[クイックスタート](ja/quick_start/m5core/m5stack_core_quick_start)**&nbsp;&nbsp;&nbsp;:octocat:**[サンプルコード](https://github.com/m5stack/M5Stack/tree/master/examples/Basics)**&nbsp;&nbsp;&nbsp;:electric_plug:**[回路図](https://github.com/m5stack/M5-Schematic/blob/master/Core/Basic/M5-Core-Schematic(20171206).pdf)**&nbsp;&nbsp;&nbsp;🛒**[購入リンク](https://www.aliexpress.com/item/M5Stack-ESP32-Mpu9250-9-Axies-IoT/32836393710.html)**&nbsp;&nbsp;&nbsp;:clapper:**[関連動画](#関連動画)**

## 概要

**M5Stack GRAY Kit**はM5Stack開発キットシリーズのひとつで、M5Stack BASICのアップグレード版です。16MBのフラッシュメモリやMPU9250MEMSセンサー（3軸ジャイロ + 3軸加速度 + 3軸地磁気)が追加されています。

IMUセンサーを用いると、加速度、角速度、地磁気を検出することができます。それらを利用して、スポーツの際の運動データ収集や、3Dリモートジェスチャーコントローラーなどを作ることができます。

最速でIoTプロトタイピングをしたいなら、M5Stack開発ボードは最も良いソリューションのひとつです。M5Stack開発ボードはしっかりとしたケースに収められていおり、ベースのESP32は高性能なデュアルコアCPU、４MBのSPIフラッシュ搭載といった特徴があります。またWi-FiやBluetoothも使用可能です。30以上の[M5Stack用モジュール](https://docs.m5stack.com/#/ja/?id=module)、40以上の[拡張ユニット](https://docs.m5stack.com/#/ja/?id=unit)、さまざまなプログラム言語を好きに組み合わせることで、短期間でIoT製品の作成や検証ができます。サポートされている開発プラットフォームおよびプログラム言語は次の通りです：[Arduino](http://www.arduino.cc)、[UIFlow](http://flow.m5stack.com)を使用したBlockly言語、[MicroPython](http://micropython.org/)。どのプログラムスキルの方にとっても、M5Stackは最速でアイデアを実現する手助けになるでしょう。

もし今までESP8266を使用した経験があるなら、ESP32はESP8266からの完璧なアップグレード版であることに気がつくでしょう。ESP32は、より多くのGPIO、アナログ入力、2つのアナログ出力、周辺機器の為の複数のインターフェース（予備UARTなど）などを備えています。公式開発プラットフォームESP-IDFはFreeRTOSを採用しています。リアルタイムOS内で、より体系的なコードとはるかに高速なプロセッサを利用可能です。

M5Stack Basicは2つの分離可能なパーツで構成されています。アッパー部分にはプロセッサ、チップ、その他のスロットコンポーネントが含まれています。また[ボトム部分](https://docs.m5stack.com/#/ja/base/core_bottom)には、リチウム電池、[M-BUS](https://m5stack.oss-cn-shenzhen.aliyuncs.com/image/m5-docs_schematic/M-BUS.png)ソケット、両サイドには拡張用のピンソケットが含まれています。

<img src="assets/img/product_pics/core/gray/gray_11.png">

## 製品特徴

- 5V 直流電源
- USB Type-C
- ESP32ベース
- 16 MB Flash
- MPU9250
- スピーカー、ボタンx3、LCD(320x240)、電源/リセットボタンx1
- 2.4Gアンテナ: Proant 440
- TFカードスロット (16GBまでサポート)
- バッテリソケット & 150 mAh Lipoバッテリー
- 拡張ピン & LEGO用ホール
- Groveポート
- M-Busソケット & ピン
- 開発プラットフォーム [UIFlow](http://flow.m5stack.com), [MicroPython](http://micropython.org/), [Arduino](http://www.arduino.cc)

### ESP32特性

- 240 MHzデュアルコア Tensilica LX6 MCU、600DMIPS
- 520 KB SRAM
- 802.11 b/g/n HT40 Wi-Fi トランシーバー、ベースバンド、スタック & LWIP
- Bluetooth（Classic & BLE）
- ホールセンサー
- 10x 静電容量式タッチセンサー対応
- 32 kHz 水晶振動子
- 各GPIOピン PWM/タイマー/入力/出力 可能(一部除く)
- SDIO マスター/スレーブ 50MHz
- SDカードインターフェースサポート

## ピンマップ

### メインボードピンマップ

**LCD & TFカード**  

*LCD解像度: 320x240*  
*TFカード最大サイズ: 16GB*  

<table>
 <tr><td>ESP32 Chip</td><td>GPIO23</td><td>GPIO19</td><td>GPIO18</td><td>GPIO14</td><td>GPIO27</td><td>GPIO33</td><td>GPIO32</td><td>GPIO4</td></tr>
 <tr><td>ILI9341</td><td>MOSI</td><td>/</td><td>CLK</td><td>CS</td><td>DC</td><td>RST</td><td>BL</td><td> </td></tr>
 <tr><td>TF Card</td><td>MOSI</td><td>MISO</td><td>CLK</td><td> </td><td> </td><td> </td><td> </td><td>CS</td></tr>
</table>

**ボタン & スピーカー**

<table>
 <tr><td>ESP32 Chip</td><td>GPIO39</td><td>GPIO38</td><td>GPIO37</td><td>GPIO25</td></tr>
 <tr><td>Button</td><td>BUTTON A</td><td>BUTTON B</td><td>BUTTON C</td></tr>
 <tr><td>Speaker</td><td> </td><td> </td><td> </td><td>Speaker Pin</td></tr>
</table>

**GROVEポートA & IP5306**

*電源管理IC (IP5306) はカスタム品です。IP5306のI2Cアドレスは**0x75**です。[IP5306データシート](https://github.com/m5stack/M5-Schematic/blob/master/Core/IIC_IP5306_REG_V1.4.pdf)*

<table>
 <tr><td>ESP32 Chip</td><td>GPIO22</td><td>GPIO21</td></tr>
 <tr><td>GROVE A</td><td>SCL</td><td>SDA</td></tr>
 <tr><td>IP5306</td><td>SCL</td><td>SDA</td><td>5V</td><td>GND</td></tr>
</table>

**9自由度IMUセンサー(MPU9250)**

*I2C Address: 0x68*

<table>
 <tr><td>ESP32 Chip</td><td>GPIO22</td><td>GPIO21</td><td>5V</td><td>GND</td></tr>
 <tr><td>MPU9250</td><td>SCL</td><td>SDA</td><td>5V</td><td>GND</td></tr>
</table>

## 仕様

<table>
   <tr style="font-weight:bold">
      <td>項目</td>
      <td>詳細</td>
   </tr>
   <tr>
      <td>ESP32</td>
      <td>240MHz dual core, 600 DMIPS, 520KB SRAM, Wi-Fi, dual mode Bluetooth</td>
   </tr>
   <tr>
      <td>Flash</td>
      <td>16MB (旧: 4MB)</td>
   </tr>
   <tr>
      <td>電源入力</td>
      <td>5V @ 500mA</td>
   </tr>
   <tr>
      <td>インターフェース</td>
      <td>TypeC x 1, GROVE(I2C+I/0+UART) x 1</td>
   </tr>
   <tr>
      <td>LCD</td>
      <td>2インチ, 320x240 カラフル TFT LCD, ILI9341</td>
   </tr>
   <tr>
      <td>スピーカー</td>
      <td>1W-0928</td>
   </tr>
      <tr>
      <td>マイク</td>
      <td>MEMS Analog BSE3729 Microphone</td>
   </tr>
   <tr>
      <td>LEDバー</td>
      <td>SK6812 3535 RGB LED x 10</td>
   </tr>
   <tr>
      <td>MEMS</td>
      <td>MPU9250</td>
   </tr>
   <tr>
      <td>バッテリ</td>
      <td>550mAh @ 3.7V 内蔵</td>
   </tr>
   <tr>
      <td>動作温度</td>
      <td>32°F to 104°F ( 0°C to 40°C )</td>
   </tr>
   <tr>
      <td>サイズ</td>
      <td>54 x 54 x 12.5 mm</td>
   </tr>
   <tr>
      <td>ケース材質</td>
      <td>プラスチック ( PC )</td>
   </tr>
   <tr>
      <td>重量</td>
      <td>120g(ボトム含む), 100g(コアのみ)</td>
   </tr>
</table>

**<mark>メモ:</mark>**

*各コアの主な仕様は以下の表の通りです。*

- *比較表の**チェック**は[こちら](https://github.com/m5stack/M5-Schematic/blob/master/Core/hardware_difference_between_cores_ja.md)。*

- *比較表の**ダウンロード**は[こちら](https://github.com/m5stack/M5-Schematic/blob/master/Core/M5%20Core%20Detailed%20Comparison.xlsx)。*

<img src="https://m5stack.oss-cn-shenzhen.aliyuncs.com/image/m5-docs_table/core_comparison/core_main_comparison_04_ja.png">

<img src="https://m5stack.oss-cn-shenzhen.aliyuncs.com/image/m5-docs_table/core_comparison/core_main_comparison_05_ja.png">

## パッケージ内容

- 1x M5Stack GRAY
- 1x M5Stackボトムモジュール
- 10x デュポンケーブル
- 1x USB Type-Cケーブル
- 1x ユーザーマニュアル

<img src="assets/img/product_pics/core/gray/gray_04.png" alt="gray_04" width="80%" height="80%">

## 関連リンク

- **データシート**
  - [ESP32](https://www.espressif.com/sites/default/files/documentation/esp32_datasheet_en.pdf)
  - [MPU9250](https://www.invensense.com/wp-content/uploads/2015/02/PS-MPU-9250A-01-v1.1.pdf)
  - [IP5306](https://github.com/m5stack/M5-Schematic/blob/master/Core/IIC_IP5306_REG_V1.4.pdf)
- [回路図](https://github.com/m5stack/M5-Schematic/blob/master/Core/Basic/M5-Core-Schematic(20171206).pdf)

## 関連動画

**m5stack 紹介**

<video width="500" controls>
    <source src="https://m5stack.oss-cn-shenzhen.aliyuncs.com/video/LukeVideo/m5stack%E7%AE%80%E4%BB%8B%EF%BC%88%E4%B8%AD%E6%96%87%EF%BC%89.mp4" type="video/mp4">
</video>

**M5Core デモ**

[![core_bottom_01.png](http://m5stack.oss-cn-shenzhen.aliyuncs.com/image/m5-docs_content/core/core_compass.png)](https://m5stack.oss-cn-shenzhen.aliyuncs.com/video/Blog/Twitch201811/M5Stack%20Compass.mp4)[![core_bottom_01.png](http://m5stack.oss-cn-shenzhen.aliyuncs.com/image/m5-docs_content/core/core_imu.png)](https://m5stack.oss-cn-shenzhen.aliyuncs.com/video/Blog/Twitch201903/M5stack%20Gray.mp4)[![core_bottom_01.png](http://m5stack.oss-cn-shenzhen.aliyuncs.com/image/m5-docs_content/core/core_avatar.png)](https://m5stack.oss-cn-shenzhen.aliyuncs.com/video/Blog/Twitch201811/M5Stack%20Avatar%20Custom%20Face.mp4)

[![core_bottom_01.png](http://m5stack.oss-cn-shenzhen.aliyuncs.com/image/m5-docs_content/core/core_voice_recognition.png)](https://m5stack.oss-cn-shenzhen.aliyuncs.com/video/Blog/Twitch201812/M5Stack%20Voice-Recognize.mp4)[![core_bottom_01.png](http://m5stack.oss-cn-shenzhen.aliyuncs.com/image/m5-docs_content/core/core_smart_electric_monitor.png)](https://m5stack.oss-cn-shenzhen.aliyuncs.com/video/Blog/Twitch201811/M5stack%20Smart%20Electric%20Monitor.mp4)[![core_bottom_01.png](http://m5stack.oss-cn-shenzhen.aliyuncs.com/image/m5-docs_content/core/core_smart_home.png)](https://m5stack.oss-cn-shenzhen.aliyuncs.com/video/Blog/Twitch201904/Esplora-and-M5Stack.mp4)

[![core_bottom_01.png](http://m5stack.oss-cn-shenzhen.aliyuncs.com/image/m5-docs_content/core/core_leap_motion.png)](https://m5stack.oss-cn-shenzhen.aliyuncs.com/video/Blog/Twitch201811/M5Stack%20Motion%20Detector.mp4)[![core_bottom_01.png](http://m5stack.oss-cn-shenzhen.aliyuncs.com/image/m5-docs_content/core/core_microphone_alexa.png)](https://m5stack.oss-cn-shenzhen.aliyuncs.com/video/Blog/Twitch201812/M5stack%20Microphone%20.mp4)[![core_bottom_01.png](http://m5stack.oss-cn-shenzhen.aliyuncs.com/image/m5-docs_content/core/core_robot.png)](https://m5stack.oss-cn-shenzhen.aliyuncs.com/video/Blog/Twitch201811/M5Stack%20Robot.mp4)