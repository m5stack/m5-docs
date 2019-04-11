# LidarBOT {docsify-ignore-all}

<img src="assets/img/product_pics/app/lidarbot_01.jpg" width="250" height="250"> <img src="assets/img/product_pics/app/lidarbot_03.jpg" width="250" height="250">

* * *

:memo:**[概要](#概要)**&nbsp;&nbsp;&nbsp;:octocat:**[サンプルコード](#サンプルコード)**&nbsp;&nbsp;&nbsp;🛒**[購入リンク](https://www.aliexpress.com/store/product/M5Stack-New-Lidar-Bot-Mini-Car-Lidar-8m-6Hz-McNamm-Wheels-NeoPixel-LED-Bar-with-ESP32/3226069_32951134988.html)**&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;:clapper:**[関連動画](#関連動画)**

## 概要

**<mark>LidarBOT</mark>** は室内ナビゲーション用の四輪車です。 本体にはライダーセンサー、4つのメカナムホイール、ATmega328pベースのボトムボード、２つのフルカラーLEDバー、LEGO互換ホール、そしてメインコントローラーとしてM5Stackが装備されています。

ESP-NOWを利用したリアルタイム通信により、リモコンでLidarBOTを操作することができます。制御信号を受信した後、指定のプロトコルで各ホイールとRGBバーを制御することができます。

またリモコンによる前後左右のコントロールだけでなく、搭載されているM5Coreのディスプレイに、ライダーセンサーで読み取った地形マップを表示することができます。

## 特徴

- ライダー性能: 8m @ 6Hz
- プログラミングサポート
  - Arduino
- LEGO 互換ホール
- [メカナムホイール](https://en.wikipedia.org/wiki/Mecanum_wheel)

## プロトコル (CarBottomBoard)

*データフォーマット： データヘッダ ( コマンドタイプ ) + データパケット + データテール*

|制御対象        | フォーマット                            | 例   | 関数 |
|:-------------:|:------------------------------------: |:---:|:---:|
|Wheels| 0xAA,SpeedX(-7 ~ 7),SpeedY,SpeedZ,SpeedA,0x55 |0xAA, 5, 5, 5, 5, 0x55(Go ahead, speed: 5)|ControlWheel(5, 5, 5)|
| One RGB| 0xAB,LedIndex,R(0 ~ 254),G,B,0x55| 0xAB, 3, 20, 50, 100, 0x55(3th RGB displays specific color)|setLedColor(3, 20, 50, 100)|
| Front RGB Bar| 0xAC,R(0 ~ 254),G,B,0x55|0xAC, 20, 50, 100, 0x55(Front LED Bar displays specific color)|setFrontLedBar(20, 50, 100)|
| Back RGB Bar| 0xAD,R(0 ~ 254),G,B,0x55|0xAD, 20, 50, 100, 0x55(Back LED Bar displays specific color)|setBackLedBar(20, 50, 100)|
| All RGB| 0xAE,R(0 ~ 254),G,B,0x55|0xAE, 20, 50, 100, 0x55(All LED display specific color)|setLedAll(20, 50, 100)|
| ServoMotor0 | 0xAF,Angle(0 ~ 180),0x55|0xAF, 100, 0x55(Servo 0 turns angle 100 degree)|setServo0Angle(100)|
| ServoMotor1 | 0xB0,Angle(0 ~ 180),0x55|0xB0, 100, 0x55(Servo 1 turns angle 100 degree)|setServo1Angle(100)|

<img src="assets/img/product_pics/app/lidarbot_04.jpg" width=60% height=60%>

## 仕様

- LidarBot サイズ: 142mm x 117mm x 120mm
- 通信仕様
  - M5Core(CarMain) <-> Lidar(<mark>**U1RXD**(GPIO16)</mark> <-> Lidar) Serial設定: "230400bps, 8, n, 1"(8 bits data, no parity, 1 stop bit)
  - M5Core(CarMain) <-> CarBottomBoard(<mark>**U2TXD**(GPIO17)</mark> <-> Lidar) Serial設定: "115200bps, 8, n, 1"(8 bits data, no parity, 1 stop bit)
- ピンマップ
  - ServoMotor0 <-> A0(MEGA328)
  - ServoMotor1 <-> A1(MEGA328)
  - NeoPixelRGB <-> 11(MEGA328)

<img src="assets/img/product_pics/app/lidarbot_05.jpg" width="300" height="300">

## パッケージ内容

- 1x LidarBot
- 1x リモコンハンドル
- 2x バッテリ(1300mAh @ 11.1V)
- 1x 充電器
- 1x USB Type-C ケーブル

<img src="assets/img/product_pics/app/lidarbot_02.jpg" width="300" height="300">

## アプリケーション

- 室内ナビ
- 無人迷路探査
- ルートナビ
- 無人パイロット

## サンプルコード

*完全なソースコードは[こちら](https://github.com/m5stack/Applications-LidarBot/tree/master/LidarBot/Example)。*

**サンプルディレクトリのツリー構造**

├─LidarBot_CarMain_V1.1 - Main program of LidarBot

├─LidarBot_RemoteController_V1.0 - Program of RemoteController V1.0

└─LidarBot_RemoteController_V1.2 - Program of RemoteController V1.2(higher precision)

#### プログラム説明:

#### **1. メインプログラム:**

```arduino
/* Main program */
void loop()
{
  espnow.BotConnectUpdate();// ESPNOW reconnect
  lidarcar.MapDisplay();// display map
  esp_now_send(espnow.peer_addr, lidarcar.mapdata, 180);// ESPNOW sends map data
}
```

* **個別機能解説:**

  * レーダーデータ読み取り

    ```arduino
    #include "lidarcar.h"
    LidarCar lidarcar;

    lidarcar.Init();
    GetData();//save radar data to array distance[]
    ```

  * ライントレース

    ```arduino
    #include "rprtrack.h"
    Rprtrack rprtrack;

    SensorStatus();// save line following data to array sensorValue[]
    CalTrackDev();// handle array sensorValue[], get car offset and save it
    ```

  * ESP_NOW

    Please refer to https://github.com/m5stack/M5-espnow


#### **2. 遠隔操作プログラム**

```arduino
/* Main program */
void loop()
{
  espnow.RemoteConnectUpdate();// ESPNOW reconnect
  keyboard.GetValue();// read data of joystick
  // ESPNOW sends joystick data to car
  esp_now_send(espnow.peer_addr, keyboard.keyData, 3);
  MapDisplay();// display map
  accessport.AnalzyCommand();// send map data to PC software
}
```

* **個別機能解説:**

  * ジョイスティック

    ```arduino
    #include "keyboard.h"
    KeyBoard keyboard;

    keyboard.Init();
    // get joystick data and save to adX, adY
    GetValue();
    ```

  * PCとの通信

    ```arduino
    #include "accessport.h"
    AccessPort accessport;

    accessport.AnalzyCommand();// send map data to PC software
    ```

## 関連動画

**LidarBOT デモ**

<video width="500" height="315" controls>
    <source src="https://m5stack.oss-cn-shenzhen.aliyuncs.com/video/Blog/Twitch201904/LidarBot.mp4" type="video/mp4">
</video>