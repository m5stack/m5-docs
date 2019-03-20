# ESP32Cam ユニット (PSRAM無し) {docsify-ignore-all}

<img src="assets/img/product_pics/unit/unit_esp32cam_01.png" width="30%" height="30%"><img src="assets/img/product_pics/unit/unit_esp32cam_02.png" width="65%" height="65%">

***

:memo:**[概要](#概要)**&nbsp;&nbsp;&nbsp;:bulb:**[クイックスタート](ja/quick_start/m5camera/m5camera_quick_start)**&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;:octocat:**[サンプルコード](#サンプルコード)**&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;:electric_plug:**[回路図](https://github.com/m5stack/M5-回路図/blob/master/Units/esp32-cam/M5CAM-ESP32-A1-POWER.pdf)**&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;🛒**[購入リンク](https://www.aliexpress.com/item/M5Stack-Official-ESP32-Camera-Module-Development-Board-OV2640-Camera-Type-C-Grove-Port-3D-Wifi-Antenna/32881414545.html)**&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;:clapper:**[関連動画](#関連動画)**

## 概要

**<mark>ESP32Cam</mark>** ユニットは **ESP32** をメインチップとして備え、他にも **OV2640**、**LiPoチャージャー(IP5306)** を内蔵しています。(ただし 4MB の PSRAM 非搭載です）。またリチウムバッテリ、MPU6050 (ジャイロ+加速度センサー)、BME280（温湿度+気圧センサー）、SPQ2410 (マイク)用のパターンが用意されているので、追加部品を半田付けすることで、グレードアップさせることが可能です。それらを組み合わせることでバッテリ駆動の監視システムなどを構築することも可能です。ESP-IDFを利用して、カメラの機能をプログラムすることができます。

**ノート: ESP32CAM は以下のような命名ルールがあります。**

*ESP32CAM_#_#_#...*

* MPU6050 付きの場合、ESP32CAM_6050
* MPU6050 とマイク付きの場合、ESP32CAM_6050_MIC
* MPU6050 とマイクと BME280 付きの場合、ESP32CAM_6050_MIC_BME280

<img src="assets/img/product_pics/unit/unit_esp32cam_05.png" width="100%" height="100%"><img src="assets/img/product_pics/unit/unit_esp32cam_06.png" width="100%" height="100%">

このユニットはWi-FiのホットスポットAPになることができるので、スマホ、PC、その他のデバイスからWi-FiやGROVEインターフェースを介して撮影画像を取得できます。

## 特徴

- ESP32 スペック
  - デュアルコア Tensilica LX6 マイクロプロセッサ
  - 最大クロック 240MHz
  - **520KB RAM**
  - **4MB Flash メモリ**
  - 802.11 b/g/n Wi-Fi
  - デュアルモード Bluetooth (classic and BLE)
  - ハードウェアアクセラレーションによる暗号化 (AES, SHA2, ECC, RSA-4096)
- CP2104 USB-UART変換ドライバ
- OV2640 カメラセンサー
  - 出力フォーマット(8-bit):
    - YUV(422/420)/YCbCr422
    - RGB565/555
    - 8-bit 圧縮データ
    - 8/10-bit RAW RGB データ
  - 最大画像転送レート
    - UXGA/SXGA: 15fps
    - SVGA: 30fps
    - CIF: 60fps
  - スキャンモード: Progressive
- カメラ スペック
  - 視野 : **78 度**
- 最大解像度: 200万画素(メモリの都合上、本ユニットは最大800 * 600 pixels JPEG)
- サイズ: 20.5 × 46.5 × 11.5mm

## パッケージ内容

- 1x ESP32Cam

## ピンマップ

**Camera Interface**

| *Interface*          | *OV2640 Pin* | *ESP32Cam*  |
| :------------------- | :----------: | :---------: |
| SCCB Clock           | SIOC         | IO23        |
| SCCB Data            | SIOD         | IO25        |
| System Clock         | XCLK         | IO27        |
| Vertical Sync        | VSYNC        | IO22        |
| Horizontal Reference | HREF         | IO26        |
| Pixel Clock          | PCLK         | IO21        |
| Pixel Data Bit 0     | D2           | IO17        |
| Pixel Data Bit 1     | D3           | IO35        |
| Pixel Data Bit 2     | D4           | IO34        |
| Pixel Data Bit 3     | D5           | IO5         |
| Pixel Data Bit 4     | D6           | IO39        |
| Pixel Data Bit 5     | D7           | IO18        |
| Pixel Data Bit 6     | D8           | IO36        |
| Pixel Data Bit 7     | D9           | IO19        |
| Camera Reset         | RESET        | IO15        |
| Camera Power Down    | PWDN         |*see Note 1* |
| Power Supply 3.3V    | 3V3          | 3V3         |
| Ground               | GND          | GND         |

**GROVE Interface**

| *Grove*       | *ESP32Cam* |
| :-----------: | :--------: |
| SCL           | IO4        |
| SDA           | IO13        |
| 5V            | 5V         |
| GND           | GND        |

**LED Interface**

| *LED*         | *ESP32Cam* |
| :-----------: | :--------: |
| LED_Pin       | IO16       |

**<mark>以下は追加可能部品のインターフェースです。</mark>**

**BME280 Interface**

*I2Cアドレス: 0x76*

| *BME280*      | *ESP32Cam* |
| :-----------: | :--------: |
| SCL           | IO4        |
| SDA           | IO13       |


**MPU6050 Interface**

*I2Cアドレス: 0x68*

| *MPU6050*     | *ESP32Cam* |
| :-----------: | :--------: |
| SCL           | IO4        |
| SDA           | IO13       |

**MIC(SPQ2410) Interface**

| *SPQ2410*            | *ESP32Cam*  |
| :-----------: | :------:  |
| OUT           | IO32      |

**<mark>ノート:</mark>**

1. **Camera Power Down** ピンはESP32のGPIOに接続する必要はありません。10Kオームの抵抗でGNDにプルダウンすることができます。

2. いくつかのカメラユニットを準備しています。 簡単な比較表を以下に示します。

  より詳細な比較表が**見たい方**は[こちら](https://shimo.im/sheets/gP96C8YTdyjGgKQC/09fd4)。

  詳細な比較表を**ダウンロードしたい方**は[こちら](https://github.com/m5stack/M5-Schematic/blob/master/Units/m5camera/M5%20Camera%20Detailed%20Comparison.xlsx)。

<img src="https://m5stack.oss-cn-shenzhen.aliyuncs.com/image/m5-docs_table/camera_comparison/camera_comparison_ja.png">

## 関連リンク

- **[公式ビデオ](https://www.youtube.com/channel/UCozgFVglWYQXbvTmGyS739w)**

- **[フォーラム](http://forum.m5stack.com/)**

- **データシート**
  - [ESP32](https://www.espressif.com/sites/default/files/documentation/esp32_datasheet_cn.pdf)
  - [OV2640](https://www.uctronics.com/download/cam_module/OV2640DS.pdf)

## コード

### ファームウェア

- **[ESP32CAM ファームウェア](https://github.com/m5stack/m5stack-cam-psram/tree/NoPsram)**

## 関連動画

**ESP32CAM デモ - 01**

<video width="500" height="315" controls>
    <source src="https://m5stack.oss-cn-shenzhen.aliyuncs.com/video/Blog/Twitch201903/esp32cam_webcam_01.mp4" type="video/mp4">
</video>

**M5Camera デモ - 02**

<video width="500" height="315" controls>
    <source src="https://m5stack.oss-cn-shenzhen.aliyuncs.com/video/Blog/Twitch201901/The%20M5Camera%20works.mp4" type="video/mp4">
</video>