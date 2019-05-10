# FINGER {docsify-ignore-all}

<img src="assets/img/product_pics/unit/unit_finger_01.png" width="30%" height="30%"><img src="assets/img/product_pics/unit/unit_finger_02.png" width="30%" height="30%"><img src="assets/img/product_pics/unit/unit_finger_grove_c.png" width="30%" height="30%">

***

:memo:**[概要](#概要)**&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;:octocat:**[サンプルコード](#サンプルコード)**&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;:electric_plug:**[回路図](#回路図)**&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;🛒**[購入リンク](https://www.aliexpress.com/item/M5Stack-Official-Finger-Print-Unit-FPC1020A-Capacitive-Fingerprint-Identification-Module-Grove-Cable-UART-Interface-for-ESP32/32966642182.html)**&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;:clapper:**[関連動画](#関連動画)**

## 概要

**<mark>FINGER</mark>**は指紋認識ユニットです。静電容量方式指紋認識モジュール（FPC1020A）という指紋認識アルゴリズムチップを搭載しています。指紋情報入力、指紋削除、指紋検索、複数人の特徴抽出などを実現できます。 このユニットは指紋認識・比較レベルや様々なセキュリティレベルを設定することができます。

FINGERとM5Coreはシリアル通信(UART)で接続されます。

UARTパラメータ: ボーレート(デフォルト: 19200bps), スタートビット(1 bit), ストップビット(1 bit), パリティ(no)

## 特徴
| タイプ | 仕様 |
|:-|:-|
| 指紋容量 | 1000/1700/2000/3000 ( デフォルト 1700 ) |
| 本人拒否率 | <0.001%  ( セキュリティレベル 3 ) |
| 他人受入率 | <0.1%  ( セキュリティレベル 3 ) |
| 比較モード | 1 : 1 検証 / 1 : N 識別 |
| セキュリティレベル | 1 ~ 5 ( デフォルト 3 ) |
| 待機電流 | < 20 uA |
| 応答時間 | 前処理時間 < 0.45s |
| 出力フォーマット | 3タイプ: ユーザー名、画像、署名 |
| 署名サイズ | 193 Byte |
| 通信インターフェース | UART |
| 通信ボーレート | 9600 ~ 115200 ( デフォルト 19200 ) |
| 動作温度 | -10° ~ 60° |
| 動作湿度 | 20% ~ 80% |

## パッケージ内容

- 1x FINGER ユニット
- 1x Grove ケーブル

## 応用例

- 指紋による出欠確認
- 指紋認証ロック

## 関連リンク

- **[公式ビデオ](https://www.youtube.com/channel/UCozgFVglWYQXbvTmGyS739w)**

- **[フォーラム](http://forum.m5stack.com/)**

- **[FINGERユニット通信プロトコル](https://github.com/m5stack/M5-Schematic/blob/master/Units/finger/biovo_fingerprint_Protocol_en.DOC)**

## サンプルコード

### 1. Arduino IDE

*完全なソースコードは[こちら](https://github.com/m5stack/M5-ProductExampleCodes/tree/master/Unit/FINGER/Arduino)。*

```arduino
/*
    Connect to GRVOE C on M5Core
*/
#include <M5Stack.h>
#include "finger.h"

uint8_t userNum; //User number
uint8_t res1;

// result for "res1"
#define ACK_SUCCESS    0x00
#define ACK_FAIL       0x01
#define ACK_FULL       0x04
#define ACK_NOUSER     0x05
#define ACK_USER_EXIST 0x07
#define ACK_TIMEOUT    0x08

// initialization
M5.begin();
Serial2.begin(19200, SERIAL_8N1, 16, 17);
userNum = fpm_getUserNum();
M5.Lcd.print("userNum:");
M5.Lcd.println(userNum);

// add a new user
res1 = fpm_addUser(userNum,1); //get function result

// compare your finger
res1 = fpm_compareFinger();

// delete all user
res1 = fpm_deleteAllUser();
```

## 回路図

<img src="assets/img/product_pics/unit/finger_sch.JPG">

### ピンマップ

<table>
<tr><td>M5Core(GROVE C)</td><td>U2RXD</td><td>U2TXD</td><td>5V</td><td>GND</td></tr>
 <tr><td>FINGERユニット</td><td>TXD</td><td>RXD</td><td>5V</td><td>GND</td></tr>
</table>

## 関連動画

- **FINGER アプリケーション**

<video width="500" controls>
    <source src="https://m5stack.oss-cn-shenzhen.aliyuncs.com/video/Blog/Twitch201901/Fingerprint%20Unit.mp4" type="video/mp4">
</video>