# M5CameraF - 魚眼レンズ (4MB pSRAM搭載) {docsify-ignore-all}

<img src="assets/img/product_pics/unit/unit_m5camera_f_01.png" width="30%" height="30%"><img src="assets/img/product_pics/unit/unit_m5camera_f_07.png" width="30%" height="30%">

***

:memo:**[概要](#概要)**&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;:bulb:**[クイックスタート](ja/quick_start/m5camera/m5camera_quick_start)**&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;:octocat:**[サンプルコード](#サンプルコード)**&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;🛒**[購入リンク](https://www.aliexpress.com/item/M5Stack-New-Fish-eye-Camera-Module-OV2640-Fisheye-Mini-Camera-Unit-Demoboard-with-ESP32-PSRAM-Development/32973208335.html)**

## 概要

**<mark>M5CameraF</mark>** はESP32チップ、OV2640 **<mark>including PSRAM</mark>**、**<mark>160° Fisheye Lens</mark>**をベースにした広角型のカメラユニットです。 ESP-IDF や Arduino IDEを利用してプログラムすることができます。

<img src="assets/img/product_pics/unit/unit_m5camera_f_04.png">

このユニットはMPU6050（加速度+ジャイロセンサー）、BME280（温度、湿度、圧力センサー）、および**デジタルマイク（SPM1423）**のパターンを有しています。 これらのデバイスが必要な場合は、それらを自分で半田付けするか、それらの部品が搭載されているバージョンを直接購入することができます。 さらに、M5CameraFはリチウムバッテリーのパターンも有しており、ケースに収めることができるバッテリーのサイズは**80mAh**に対応します。

**ノート: M5Cameraは以下のような命名ルールがあります。**

*M5CameraF_#_#_#...*

* MPU6050付きの場合、M5CameraF_6050
* MPU6050とマイク付きの場合、M5CameraF_6050_MIC
* MPU6050とマイクとBME280付きの場合、M5CameraF_6050_MIC_BME280

<img src="assets/img/product_pics/unit/unit_m5camera_f_02.png" width="100%" height="100%"><img src="assets/img/product_pics/unit/unit_m5camera_f_03.png" width="100%" height="100%">

## 特徴

- ESP32 仕様
  - デュアルコア Tensilica LX6 マイクロプロセッサ
  - 最大周波数: 240MHz
  - **4MB pSRAM**
  - **4MB Flash memory**
  - 802.11 BGN WiFi送受信機
  - デュアルモード Bluetooth (classic and BLE)
  - 暗号化のハードウェアアクセラレーション (AES, SHA2, ECC, RSA-4096)
- CP2104 USB-to-UART 変換ドライバ
- OV2640 センサー
  - Output Formats(8-bit):
    - YUV(422/420)/YCbCr422
    - RGB565/555
    - 8-bit 圧縮データ
    - 8-/10-bit Raw RGBデータ
  - フォーマット毎の最大フレームレート
    - UXGA/SXGA: 15fps
    - SVGA: 30fps
    - CIF: 60fps
  - スキャンモード: Progressive
- カメラ仕様
  - 視野角 : **160 degree**
  - 最大解像度: 200万画素
- センサー最大解像度: 1600 * 1200
- サイズ：23.5 × 48 × 23.5mm

## パッケージ内容

- 1x M5Camera
- 1x LEGO アダプタ
- 1x Wall/1515
- 1x USB Type-C ケーブル

<img src="assets/img/product_pics/unit/unit_m5camera_f_05.png" width="50%" height="50%">

## ピンマップ

**Camera Interface PinMap**

| *Interface*             | *Camera Pin*| *M5CameraF*  |
| :-------------------  | :--------:| :------:  |
| SCCB Clock            | SIOC     |IO23       |
| SCCB Data             | SIOD         |**IO22**       |
| System Clock          | XCLK     |IO27       |
| Vertical Sync         | VSYNC        |**IO25**       |
| Horizontal Reference  | HREF     |IO26       |
| Pixel Clock           | PCLK     |IO21       |
| Pixel Data Bit 0      | D2       |IO32       |
| Pixel Data Bit 1      | D3       |IO35       |
| Pixel Data Bit 2      | D4       |IO34       |
| Pixel Data Bit 3      | D5       |IO5        |
| Pixel Data Bit 4      | D6       |IO39       |
| Pixel Data Bit 5      | D7       |IO18       |
| Pixel Data Bit 6      | D8       |IO36       |
| Pixel Data Bit 7      | D9       |IO19       |
| Camera Reset          | RESET    |IO15       |
| Camera Power Down     | PWDN     | *see Note 1* |
| Power Supply 3.3V     | 3V3      | 3V3       |
| Ground                | GND      | GND       |

**GROVE Interface**

| *Grove*         | *M5CameraF*  |
| :-----------: | :------:  |
| SCL           | **IO13**      |
| SDA               | **IO4**      |
| 5V            | 5V        |
| GND           | GND       |

**LED Interface**

| *LED*         | *M5CameraF*  |
| :-----------: | :------:  |
| LED_Pin       | IO14      |

**<mark>予約済みチップのインターフェース</mark>**

**BME280 Interface**

*I2Cアドレス: 0x76.*

| *BME280*         | *M5CameraF*  |
| :-----------: | :------:  |
| SCL           | IO23      |
| SDA           | IO22      |


**MPU6050 Interface**

*I2Cアドレス: 0x68.*

| *MPU6050*         | *M5CameraF*  |
| :-----------: | :------:  |
| SCL           | IO23      |
| SDA           | IO22      |

**MIC(SPM1423) Interface**

| *MIC(SPM1423)*     | *M5CameraF*  |
| :-----------: | :------:  |
| CLK           |IO4|
| DATA           |IO2|

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

<!-- - **[The comparison between ESP32CAM and M5Camera](https://github.com/m5stack/M5-Schematic/blob/master/Units/m5camera/hardware_diff_with_ESP32CAM_M5Camera.md)** -->

## サンプルコード

### ファームウェア

- **[M5Camera Firmware](https://github.com/m5stack/m5stack-cam-psram/tree/FishEye)**

<img src="assets/img/product_pics/unit/unit_m5camera_f_06.png" width="50%" height="50%">

<!-- ### Example

- **[Color recognition](https://github.com/m5stack/Applications-cam)**

- **[Face recognition](https://github.com/m5stack/esp-who)** -->

<!-- ```arduino
float tmp = dht12.readTemperature();//temperature
float hum = dht12.readHumidity();//humidity
float pressure = bme.readPressure();//pressure
```

Click [here](https://github.com/m5stack/M5-ProductExampleCodes/tree/master/Unit/M5CAMERA)for Specific example. -->

<!-- ## Schematic -->

<!-- <img src="assets/img/product_pics/unit/m5camera_sch.JPG"> -->

<!-- ### PinMap -->

<!-- <table>
 <tr><td>M5Core(GROVE A)</td><td>GPIO22</td><td>GPIO21</td></tr>
 <tr><td>M5CAMERA Unit</td><td>SCL</td><td>SDA</td></tr>
</table> -->