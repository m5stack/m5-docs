# RFID {docsify-ignore-all}

<img src="assets/img/product_pics/unit/unit_rfid_01.png" width="30%" height="30%"><img src="assets/img/product_pics/unit/unit_rfid_02.png" width="30%" height="30%"><img src="assets/img/product_pics/unit/unit_rfid_grove_a.png" width="30%" height="30%">

***

:memo:**[概要](#概要)**&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;:octocat:**[サンプルコード](#サンプルコード)**&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;:electric_plug:**[回路図](#回路図)** &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;🛒**[購入リンク](https://www.aliexpress.com/store/product/M5Stack-Newest-Mini-RFID-Unit-RC522-Module-Sensor-for-Arduino-SPI-Writer-Reader-IC-Card-with/3226069_32963407976.html)**

## 概要

**<mark>RFID</mark>** は **MFRC522**(13.56MHzの非接触通信用リーダライタIC)を内蔵したユニットです。このユニットは、非接触カードリーダ機能を備え、複数のカード情報を識別して記録することができます。入退室管理システム、パンチングシステム、倉庫商品管理および車両アクセス管理などのアプリケーションを実現することが可能です。

M5CoreのGROVE Aインターフェースに接続して利用することができます。I2Cアドレスは**0x28**です。

## 特徴

- I2Cデータレート: Fast mode: 最大400kbps; High-speed mode: 最大3400kbps
- RC522トランシーババッファ：64バイト
- サポートするプロトコル: ISO14443A, MIFARE, NTAG
- 動作温度: -20℃~85℃
- データ保存期間: > 10年
- 読み書き距離: < 8 cm
- GROVE インターフェース, [UiFlow](http://flow.m5stack.com), [Arduino](http://www.arduino.cc)をサポート
- LEGO 互換ホール

## パッケージ内容

- 1x RFID ユニット
- 1x Grove ケーブル

## アプリケーション

- スマートホームアクセス管理システム
- 車両管理
- インテリジェント交通
- スマート本棚

## 関連リンク

- **[公式ビデオ](https://www.youtube.com/channel/UCozgFVglWYQXbvTmGyS739w)**

- **[フォーラム](http://forum.m5stack.com/)**

- **データシート**
  - [MFRC522](https://www.nxp.com/docs/en/data-sheet/MFRC522.pdf)

## サンプルコード

### 1. Arduino

*完全なソースコードは[こちら](https://github.com/m5stack/M5-ProductExampleCodes/tree/master/Unit/RFID/Arduino)。*

RFID.inoを実行すると、 ICやスマートフォンのNFCをユニットの周りで4回ほど往復させると、M5Coreの画面にカードやスマホのNFCのUIDが表示されます。

```clike
/*
    RFID.ino
*/
#include <Wire.h>
#include "MFRC522_I2C.h"
#include <M5Stack.h>

// 0x28 is i2c address on SDA. Check your address with i2cscanner if not match.
MFRC522 mfrc522(0x28);   // MFRC522 インスタンス宣言

// 初期化
M5.begin();
Wire.begin();
/* MFRC522を初期化 */
mfrc522.PCD_Init();
/* Show details of PCD - MFRC522 Card Reader details */
ShowReaderDetails();

// 利用可能なカードのUIDを取得
mfrc522.PICC_IsNewCardPresent();// scan for a new card
mfrc522.PICC_ReadCardSerial();// read data
// a new card is selected. The UID and SAK is saved at mfrc522.uid structor.
for (byte i = 0; i < mfrc522.uid.size; i++) {
  Serial.print(mfrc522.uid.uidByte[i] < 0x10 ? " 0" : " ");
  Serial.print(mfrc522.uid.uidByte[i], HEX);
}

// その他の関数
void ShowReaderDetails() {
  /* MFRC522のソフトウェアバージョンを取得 */
  byte v = mfrc522.PCD_ReadRegister(mfrc522.VersionReg);
  if (v == 0x91) Serial.print(F(" = v1.0"));
  else if (v == 0x92) Serial.print(F(" = v2.0"));
  else Serial.print(F(" (unknown)"));
}
```

<img src="assets/img/product_pics/unit/unit_example/RFID/example_unit_rfid_01.png" width="100%" height="100%">

### 2. UIFlow

*完全なソースコードは[こちら](https://github.com/m5stack/M5-ProductExampleCodes/tree/master/Unit/RFID/UIFlow)。*

[UIFlow](flow.m5stack.com) を利用してプログラムを書き込んだら、カードをRFIDユニットに近づけると、スクリーンに「True」の文字、そしてカードのUIDが表示されます。

<img src="assets/img/product_pics/unit/unit_example/RFID/example_unit_rfid_02.png">

## 回路図

<img src="assets/img/product_pics/unit/rfid_sch.JPG">

### ピンマップ

<table>
<tr><td>M5Core(GROVE A)</td><td>GPIO22</td><td>GPIO21</td><td>5V</td><td>GND</td></tr>
 <tr><td>RFID Unit</td><td>SCL</td><td>SDA</td><td>5V</td><td>GND</td></tr>
</table>
