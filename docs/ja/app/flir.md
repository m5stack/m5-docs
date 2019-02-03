# FLIR - LWIRマイクロサーマルカメラ

<img src="assets/img/product_pics/app/app_flir_01.png" width="250" height="250">

* * *

:memo:**[概要](#概要)**&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;:octocat:**[サンプルコード](#サンプルコード)**&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;🛒**[購入リンク](https://www.aliexpress.com/item/M5Stack-Official-FLIR-Radiometric-Lepton-2-0-3-0-Dev-160HX120V-80HX60V-Thermal-Imager-Kit-M5/32959050762.html)**

## 概要

**<mark>FLIR</mark>**はFLIRはLeptonのマイクロサーマルカメラを統合したモジュールです。リアルタイムに非接触対象の温度を測定可能で、デジタルサーモ画像処理ユニットを統合しているので簡単に扱うことができます。M5CoreとスタックすることでSPI通信を介してコントロールすることができます。

**メモ：** 長時間使用するとセンサーも温まりますが、それによる測定データへの影響はありません。

<img src="assets/img/product_pics/app/app_flir_02.png">

## 特徴

- 有効画素: 160×120
- 低消費電力 — 通常時 140mW、シャッターイベント中 650mW、スタンバイ 5mW
- 視野角: 56° (シャッター込み)
- 入力電圧範囲: 1.2V，2.8V，2.5V ~ 3.1V IO
- イメージング時間 (< 0.5 秒)

## 仕様

| *項目*         | *仕様*       |
| :-----------: | :------:     |
| 有效フレームレート | 8.7Hz      |
| 入力クロック      | 25-MHz     |
| ピクセルサイズ    | 12µm       |
| シーンダイナミックレンジ | Low Gain モード: -10℃~400℃; High Gain モード: -10℃至140℃       |
| スペクトラルレンジ | 8µm~14µm                    |
| サーマル感度      | ＜50 mK（0.050℃）            |
| 入力電圧         | 2.8 V，1.2 V，2.5 V~3.1 V IO |
| 最適温度範囲      | -10℃至+80℃                  |

## パッケージ内容

- 1x FLIRモジュール

## アプリケーション

- 自動車のエンジン故障チェック
- 建物除湿断熱シーリングチェック
- 工業炉内耐火壁割れ
- 夜間の野外動物観察

## 関連リンク

- **[公式ビデオ](https://i.youku.com/i/UNjE1ODA2MzE0OA==?spm=a2hzp.8253869.0.0)**

- **[フォーラム](http://forum.m5stack.com/)**

- **[Lepton公式FLIR情報](https://www.flir.cn/products/lepton/)**

## サンプルコード

*完全なソースコードは[こちら](https://github.com/m5stack/Applications-Lepton3.0/tree/master/lepton3/Src/Lepton_Bot)。*

<img src="assets/img/product_pics/app/app_flir_03.png">

<!--
**Example目录树**

├─LidarBot_CarMain_V1.1 - 雷达车主控程序

├─LidarBot_RemoteController_V1.0 - 遥控手柄程序V1.0

└─LidarBot_RemoteController_V1.2 - 遥控手柄程序V1.2(相比V1.0精度提高一倍) -->

<!-- ## 相关视频

**Lidar Bot 在迷宫中巡线**

<iframe height=498 width=510 src='https://player.youku.com/embed/XNDAyODEzMDQ2MA==' frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe> -->
