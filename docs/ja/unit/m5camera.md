# M5Camera - ノーマルレンズ (4MB PSRAM搭載) {docsify-ignore-all}

<img src="assets/img/product_pics/unit/unit_m5camera_01.png" width="30%" height="30%"><img src="assets/img/product_pics/unit/unit_m5camera_02.png" width="40%" height="40%">

***

:memo:**[概要](#概要)**&nbsp;&nbsp;&nbsp;:bulb:**[クイックスタート](ja/quick_start/m5camera/m5camera_quick_start)**&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;:octocat:**[サンプルコード](#サンプルコード)**&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;:octocat::electric_plug:**[回路図](https://github.com/m5stack/M5-Schematic/blob/master/Units/esp32-cam/M5CAM-ESP32-A1-POWER.pdf)** &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;🛒**[購入リンク](https://www.aliexpress.com/item/M5Stack-Official-ESP32-WROVER-with-PSRAM-Camera-Module-OV2640-Type-C-Grove-Port-Mini-Camera-Development/32909972455.html)**&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;:clapper:**[関連動画](#関連動画)**

## 概要

**<mark>M5Camera</mark>**は**ESP32**、**OV2640**、<mark>**4MBのPSRAM**</mark>、**LiPoチャージャー(IP5306)**などが内蔵されています。リチウムバッテリ、MPU6050（ジャイロ＋加速度センサー）、BME280（温湿度＋気圧センサー）、MIC（SPM1423）のパッドが用意されており、組み合わせることでバッテリ駆動の監視システムを構築することも可能です。ESP-IDFを用いてプログラム可能です。

**M5CameraはモデルAとモデルBの２つのモデルがあります。**

表面に貼ってあるシールで見分けることができます。

いくつかのピンが入れ替わっています。（下部ピンマップ参照）

<img src="assets/img/product_pics/unit/unit_m5camera_04.png">

またリチウムバッテリ、MPU6050(ジャイロ+加速度センサー)、BME280（温湿度+気圧センサー）、SPM1423(マイク)用のパターンが用意されているので、追加部品を半田付けすることで、グレードアップさせることが可能です。それらを組み合わせることでバッテリ駆動の監視システムなどを構築することも可能です。

**ノート: M5Cameraは以下のような命名ルールがあります。**

*M5Camera_#_#_#...*

* MPU6050付きの場合、M5Camera_6050
* MPU6050とマイク付きの場合、M5Camera_6050_MIC
* MPU6050とマイクとBME280付きの場合、M5Camera_6050_MIC_BME280

<img src="assets/img/product_pics/unit/unit_m5camera_05.png" width="100%" height="100%"><img src="assets/img/product_pics/unit/unit_m5camera_06.png" width="100%" height="100%">

## 特徴

- ESP32 スペック
  - デュアルコア Tensilica LX6 マイクロプロセッサ
  - 最大クロック 240MHz
  - 520KB SRAM
  - **4MB PSRAM**
  - **4MB Flash メモリ**
  - 802.11 b/g/n Wi-Fi
  - デュアルモード Bluetooth (classic and BLE)
  - ハードウェアアクセラレーションによる暗号化 (AES, SHA2, ECC, RSA-4096)
- CP2104 USB TTL
- OV2640 センサー
  - 出力フォーマット(8-bit):
    - YUV(422/420)/YCbCr422
    - RGB565/555
    - 8-bit 圧縮データ
    - 8/10-bit RAW RGB データ
  - 最大画像転送レート
    - UXGA/SXGA: 15fps
    - SVGA: 30fps
    - CIF: 60fps
  - スキャンモード: プログレッシブ
- カメラ スペック
  - CCD サイズ : 1/4inch
  - 視野 : 78 度
  - 最大ピクセル: 200万
- 最大解像度: 1600 * 1200
- サイズ: 40 × 49 × 13mm

## パッケージ内容

- 1x M5Camera
- 1x USB Type-C ケーブル

## ピンマップ

**Cameraインターフェースピンマップ**

| *インターフェース*       | *Cameraピン*| *M5Camera(モデルA)*  | *M5Camera(モデルB)*  |
| :-------------------  | :--------:| :------:  | :------:  |
| SCCB Clock            | SIOC      |IO23       |IO23       |
| SCCB Data             | SIOD      |<mark>**IO25**</mark>  |<mark>**IO22**</mark> |
| System Clock          | XCLK      |IO27       |IO27       |
| Vertical Sync         | VSYNC     |<mark>**IO22**</mark>  |<mark>**IO25**</mark> |
| Horizontal Reference  | HREF      |IO26       |IO26       |
| Pixel Clock           | PCLK      |IO21       |IO21       |
| Pixel Data Bit 0      | D2        |IO32       |IO32       |
| Pixel Data Bit 1      | D3        |IO35       |IO35       |
| Pixel Data Bit 2      | D4        |IO34       |IO34       |
| Pixel Data Bit 3      | D5        |IO5        |IO5        |
| Pixel Data Bit 4      | D6        |IO39       |IO39       |
| Pixel Data Bit 5      | D7        |IO18       |IO18       |
| Pixel Data Bit 6      | D8        |IO36       |IO36       |
| Pixel Data Bit 7      | D9        |IO19       |IO19       |
| Camera Reset          | RESET     |IO15       |IO15       |
| Camera Power Down     | PWDN      | *※1*      | *※1*      |
| Power Supply 3.3V     | 3V3       | 3V3       | 3V3       |
| Ground                | GND       | GND       | GND       |

**GROVEインターフェース**

| *Grove*         | *M5Camera(モデルA)*  | *M5Camera(モデルB)*  |
| :-----------: | :------:  | :------:  |
| SCL           | IO13      | IO13      |
| SDA           | <mark>**IO12**</mark> | <mark>**IO4**</mark> |
| 5V            | 5V        | 5V        |
| GND           | GND       | GND       |

**LEDインターフェース**

| *LED*         | *M5Camera(モデルA)*  | *M5Camera(モデルB)*  |
| :-----------: | :------:  | :------:  |
| LED_Pin       | IO14      | IO14      |

**<mark>予約済みチップインターフェース</mark>**

**BME280インターフェース**

*I2Cアドレス: 0x76*

| *BME280*         | *M5Camera(モデルA)*  | *M5Camera(モデルB)*  |
| :-----------: | :------:  | :------:  |
| SCL           | IO23      | IO23      |
| SDA           | IO22      | IO22      |


**MPU6050インターフェース**

| *MPU6050*         | *M5Camera(モデルA)*  | *M5Camera(モデルB)*  |
| :-----------: | :------:  | :------:  |
| SCL           | IO23      | IO23      |
| SDA           | IO22      | IO22      |

**MIC(SPM1423)インターフェース**

| *MIC(SPM1423)*     | *M5Camera(モデルA)*  | *M5Camera(モデルB)*  |
| :-----------: | :------:  | :------:  |
| SCL           |IO2|IO2|
| SDA           |IO4|IO4|

<img src="assets/img/product_pics/unit/unit_m5camera_03.png" width="60%" height="60%">

**<mark>ノート:</mark>**

1. **Camera Power Down**ピンはESP32のGPIOに接続する必要はありません。10Kオームの抵抗でGNDにプルダウンすることができます。

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

## サンプルコード

### ファームウェア

- [A Model](https://github.com/m5stack/m5stack-cam-psram/tree/ModeA)

- [B Model](https://github.com/m5stack/m5stack-cam-psram/tree/master)

### プログラム例

- [色認識](https://github.com/m5stack/Applications-cam)

- [顔認識](https://github.com/m5stack/esp-who)

## 回路図

### 電源

<img src="https://m5stack.oss-cn-shenzhen.aliyuncs.com/image/m5-docs_schematic/unit/m5camera_sch_01.png">

### ペリフェラル

<img src="https://m5stack.oss-cn-shenzhen.aliyuncs.com/image/m5-docs_schematic/unit/m5camera_sch_02.png">

### USBシリアル

<img src="https://m5stack.oss-cn-shenzhen.aliyuncs.com/image/m5-docs_schematic/unit/m5camera_sch_03.png">


## 関連動画

**M5Camera デモ - M5Cameraの画像をM5Coreに送る**

<iframe width="560" height="315" src="https://m5stack.oss-cn-shenzhen.aliyuncs.com/video/Blog/Twitch201812/M5Camera.mp4" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>