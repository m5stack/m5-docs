# M5Camera ユニット {docsify-ignore-all}

<img src="assets/img/product_pics/unit/unit_m5camera_01.png" width="30%" height="30%"><img src="assets/img/product_pics/unit/unit_m5camera_02.png" width="40%" height="40%">

***

:memo:**[概要](#概要)**&nbsp;&nbsp;&nbsp;:bulb:**[クイックスタート](ja/quick_start/m5core/m5stack_core_quick_start)**&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;:octocat:**[サンプルコード](#サンプルコード)**&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;:octocat::electric_plug:**[回路図](https://github.com/m5stack/M5-Schematic/blob/master/Units/esp32-cam/M5CAM-ESP32-A1-POWER.pdf)** &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;🛒**[購入リンク](https://www.aliexpress.com/item/M5Stack-Official-ESP32-WROVER-with-PSRAM-Camera-Module-OV2640-Type-C-Grove-Port-Mini-Camera-Development/32909972455.html)**

## 概要

**<mark>M5Camera</mark>**は**ESP32**、**OV2640**、4MBの**pSRAM**、**LiPoチャージャー(IP5306)**などが内蔵されています。リチウムバッテリ、MPU6050（ジャイロ＋加速度センサー）、BME280（温湿度＋気圧センサー）、MIC（SPM1423）のパッドが用意されており、組み合わせることでバッテリ駆動の監視システムを構築することも可能です。ESP-IDFを用いてプログラム可能です。

## 特徴

- ESP32 スペック
  - デュアルコア Tensilica LX6 マイクロプロセッサ
  - 最大クロック 240MHz
  - 520KB SRAM
  - **4MB pSRAM**
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
  - 最大ピクセル: 200W
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
| SCCB Data             | SIOD      |**IO25**   |**IO22**   |
| System Clock          | XCLK      |IO27       |IO27       |
| Vertical Sync         | VSYNC     |**IO22**   |**IO25**   |
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

※1:**Cameraパワーダウン**ピンはESP32のGPIOに接続する必要はありません。代わりに10kΩの抵抗でGNDにプルダウンできます。

**GROVEインターフェース**

| *Grove*         | *M5Camera(モデルA)*  | *M5Camera(モデルB)*  |
| :-----------: | :------:  | :------:  |
| SCL           | IO13      | IO13      |
| SDA           | **IO12**      | **IO4**      |
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


## 関連リンク

- **[公式ビデオ](https://www.youtube.com/channel/UCozgFVglWYQXbvTmGyS739w)**

- **[フォーラム](http://forum.m5stack.com/)**

- **データシート**
  - [ESP32](https://www.espressif.com/sites/default/files/documentation/esp32_datasheet_cn.pdf)
  - [OV2640](https://www.uctronics.com/download/cam_module/OV2640DS.pdf)

## サンプルコード

### ファームウェア

- **[M5Camera ファームウェア](https://github.com/m5stack/m5stack-cam-psram/tree/master)**

### ルーチン

- **[色認識](https://github.com/m5stack/Applications-cam)**

- **[顔認識](https://github.com/m5stack/esp-who)**