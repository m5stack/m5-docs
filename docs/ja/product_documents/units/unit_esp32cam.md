# ESP32Cam ユニット

## 概要

**<mark>ESP32Cam ユニット</mark>**は**ESP32**、**OV2640**、**LiPoチャージャー(IP5306)**を内蔵しています。リチウムバッテリ、MPU6050（ジャイロ＋加速度センサー）、BME280（温湿度＋気圧センサー）、マイクなどと組み合わせることでバッテリ駆動の監視システムを構築することも可能です。

## 特徴

- ESP32 スペック
  - デュアルコア Tensilica LX6 マイクロプロセッサ
  - 最大クロック 240MHz
  - 520KB SRAM
  - 4MB Flash メモリ
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
- サイズ: 25mm x 24mm
- 重量: 5g

## パッケージ内容

- 1x M5 カメラ
- 1x USB Type-C ケーブル

## ドキュメント

- データシート
  - [ESP32](https://www.espressif.com/sites/default/files/documentation/esp32_datasheet_cn.pdf)
  - [OV2640](https://www.uctronics.com/download/cam_module/OV2640DS.pdf)

- クイックスタート
  - [Arduino](/en/quick_start/m5camera/m5camera_quick_start)

- サンプルコード
  - [Arduino](https://github.com/1zlab/1ZLAB_ESP32_Wifi_Camera)

<figure>
    <img src="assets/img/product_pics/units/esp32cam.jpg">
</figure>

## 関連情報

- [ESP32Cam ユニット 購入(AliExpress)](https://www.aliexpress.com/store/product/M5Stack-Official-ESP32-Camera-Module-Development-Board-OV2640-Camera-Type-C-Grove-Port-3D-Wifi-Antenna/3226069_32881414545.html)