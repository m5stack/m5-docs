# COMMU モジュール

<img src="assets/img/product_pics/module/module_commu_01.png" width="30%" height="30%"> <img src="assets/img/product_pics/module/module_commu_02.png" width="30%" height="30%">

***

:memo:**[概要](#概要)**&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;:octocat:**[サンプルコード](#サンプルコード)**&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;:electric_plug:**[回路図](#回路図)**&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;🛒**[購入リンク](https://www.aliexpress.com/store/product/M5Stack-New-COMMU-Module-Extend-RS485-TTL-CAN-I2C-Port-with-MCP2515-TJA1051-SP3485-Development-Board/3226069_32954475633.html?spm=a2g1y.12024536.productList_5885013.subject_2)**

## 概要

**<mark>COMMU</mark>**モジュールはアプリケーション設計の大部分を満たす事ができる通信インターフェースコンバータモジュールです。1つのRS-485インターフェース、１つのCANインターフェース、2つのI2Cインターフェースを備えています。M5Coreにスタックするだけで、RS-485デバイスやCANデバイスを制御する事が可能です。TTLインターフェースに注意してください。デフォルトではUARTですが、(J6, J7, J9, J10)のジャンパを変更する事でUART2に接続可能です。

## 特徴

- 2x I2C インタフェース
- 1x CAN インタフェース(コントローラ: MCP2515, トランシーバ: TJA1051)
- 1x RS-485 インタフェース(SP3485)
- 1x TTL インタフェース

## パッケージ内容

- 1x COMMU モジュール

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

## 関連リンク

- **[公式ビデオ](https://www.youtube.com/channel/UCozgFVglWYQXbvTmGyS739w)**

- **[フォーラム](http://forum.m5stack.com/)**

- **[データシート](https://www.u-blox.com/zh/product/neo-m8-series)** (GPS)

- **データシート** - [MCP2515](http://ww1.microchip.com/downloads/en/devicedoc/20001801h.pdf) - [TJA1051](https://www.nxp.com/docs/en/data-sheet/TJA1051.pdf) - [SP3485](https://www.exar.com/ds/sp3485.pdf)

## サンプルコード

### 1. Arduino IDE

### 2. UIFlow

## 回路図

<!-- <img src="assets/img/product_pics/module/commu_sch.png"> -->