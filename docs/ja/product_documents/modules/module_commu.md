# M5Stack COMMU モジュール

## 概要

**<mark>M5Stack COMMU</mark>**モジュールはアプリケーション設計の大部分を満たす事ができる通信インターフェースコンバータモジュールです。1つのRS-485インターフェース、１つのCANインターフェース、2つのI2Cインターフェースを備えています。M5Coreにスタックするだけで、RS-485デバイスやCANデバイスを制御する事が可能です。TTLインターフェースに注意してください。デフォルトではUARTですが、(J6, J7, J9, J10)のジャンパを変更する事でUART2に接続可能です。

## 特徴

- 2x I2C インタフェース
- 1x CAN インタフェース(コントローラ: MCP2515, トランシーバ: TJA1051)
- 1x RS-485 インタフェース(SP3485)
- 1x TTL インタフェース

## パッケージ内容

- 1x M5Stack COMMU モジュール

## ピンマップ

| CAN | ESP32 |
|:---:|:-----:|
| CAN_CS   | GPIO12 |
| CAN_INT  | GPIO15 |
| CAN_SCK  | GPIO18 |
| CAN_MISO | GPIO19 |
| CAN_MOSI | GPIO23 |

| I2C Interface | ESP32 |
|:-------------:|:-----:|
| IIC_SDA | GPIO21 |
| IIC_SCL | GPIO22 |

## ドキュメント

- **回路図**
  - [Schematic](https://github.com/m5stack/M5-Schematic/blob/master/Modules/COMMU.pdf)

- **データシート**
  - [MCP2515](http://ww1.microchip.com/downloads/en/devicedoc/20001801h.pdf)
  - [TJA1051](https://www.nxp.com/docs/en/data-sheet/TJA1051.pdf)
  - [SP3485](https://www.exar.com/ds/sp3485.pdf)

<figure>
  <img src="assets/img/product_pics/modules/commu_01.jpg" alt="commu_01" width="300px" height="300px">
</figure>
<figure>
  <img src="assets/img/product_pics/modules/commu_02.jpg" alt="commu_02" width="300px" height="300px">
</figure>

## 関連情報

- [M5Stack COMMU モジュール 購入(AliExpress)](https://www.aliexpress.com/store/product/M5Stack-RS485-TTL-I2C-MCP2515-TJA1051-SP3485/3226069_32954475633.html)