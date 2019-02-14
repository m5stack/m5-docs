# FINGER {docsify-ignore-all}

<img src="assets/img/product_pics/unit/unit_finger_01.png" width="30%" height="30%"><img src="assets/img/product_pics/unit/unit_finger_02.png" width="30%" height="30%"><img src="assets/img/product_pics/unit/unit_finger_grove_c.png" width="30%" height="30%">

***

:memo:**[概要](#概要)**&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;:electric_plug:**[回路図](#回路図)**&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;🛒**[購入リンク](https://www.aliexpress.com/item/M5Stack-Official-Finger-Print-Unit-FPC1020A-Capacitive-Fingerprint-Identification-Module-Grove-Cable-UART-Interface-for-ESP32/32966642182.html)**&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;:clapper:**[関連動画](#関連動画)**

<!-- :memo:**[Description](#Description)**&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;:octocat:**[Example](#Example)**&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;:electric_plug:**[Schematic](#Schematic)**&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;🛒**[Purchase](https://pt.aliexpress.com/store/product/M5Stack-Official-Finger-Print-Unit-FPC1020A-Capacitive-Fingerprint-Identification-Module-Grove-Cable-UART-Interface-for-ESP32/3226069_32966642182.html?spm=a2g03.12010612.8148356.36.73ee56a05T9uR7)**&nbsp;&nbsp;&nbsp;:clapper:**[Related Video](#Related-Video)** -->

## 概要

**<mark>FINGER</mark>**は指紋認識ユニットです。静電容量式指紋認識モジュール（FPC1020A）という指紋認識アルゴリズムチップを搭載しています。指紋情報入力、指紋削除、指紋検索、複数人の特徴抽出などを実現できます。 このユニットは指紋認識・比較レベルや様々なセキュリティレベルを設定することができます。

FINGERとM5Coreはシリアル通信(UART)で接続されます。

USARTパラメータ: ボーレート(デフォルト: 19200bps), スタートビット(1 bit), ストップビット(1 bit), パリティ(no)

## 特徴

- 静電容量式指紋認識: 150 pices
- 比較モード: 1:N or 1:1
- 比較レベル: 0 ~ 9(default: 5)
- セキュリティレベル: 1 ~ 5(default: 3)
- 応答時間: fingerprint preprocessing < 0.45s
- 入力電圧範囲: 3.3 ~ 6V
- 動作温度および湿度: -10 ~ 60°, 20% ~ 80%

## 関連リンク

- **[公式ビデオ](https://www.youtube.com/channel/UCozgFVglWYQXbvTmGyS739w)**

- **[フォーラム](http://forum.m5stack.com/)**

## 回路図

<img src="assets/img/product_pics/unit/finger_sch.JPG">

### ピンマップ

<table>
<tr><td>M5Core(GROVE C)</td><td>U2RXD</td><td>U2TXD</td><td>5V</td><td>GND</td></tr>
 <tr><td>FINGER Unit</td><td>TXD</td><td>RXD</td><td>5V</td><td>GND</td></tr>
</table>

## 関連動画

- **FINGERアプリケーション**

<iframe height=498 width=510 src="http://player.youku.com/embed/XMzk5NjU4NjM3Ng==" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>