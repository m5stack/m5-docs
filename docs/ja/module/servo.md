# SERVO モジュール {docsify-ignore-all}

<img src="assets/img/product_pics/module/module_servo_01.png" width="30%" height="30%"> <img src="assets/img/product_pics/module/module_servo_02.png" width="30%" height="30%"> <img src="assets/img/product_pics/module/module_servo_03.png" width="30%" height="30%">

***

:memo:**[概要](#概要)**&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;:octocat:**[サンプルコード](#サンプルコード)**&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;:electric_plug:**[回路図](#回路図)**&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;🛒**[購入リンク](https://www.aliexpress.com/item/M5Stack-New-SERVO-Module-Board-12-Channels-Servo-Controller-with-MEGA328-Inside-Power-Adapter-6-24V/32951356502.html)**&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;:clapper:**[関連動画](#関連動画)**

## 概要

**<mark>SERVO</mark>** モジュールは、12WAYのサーボモータを同時に駆動できるサーボモータドライバモジュールです。(現在、最大電流の制限により、駆動できるサーボモータの最大数は9です。すぐにアップグレード版を公開します。）

サーボモータをコントロールするのはとても簡単です。Arduino IDEで2〜3行のコードを書くか、UIFlowで2-3ブロックをドラッグ&ドロップするだけで、一度に多くのサーボモータを駆動できます。

サーボはGROVEインタフェース（I2C）を介してM5Coreと通信します。 I2Cアドレスは<mark>0x53</mark>です。

## 特徴

- 12サーボモータ同時駆動可能
- 電源範囲：6-12V
- [Arduino](http://www.arduino.cc/), [UIFlow](http://flow.m5stack.com/)をサポート

## パッケージ内容

- 1x SERVO モジュール
- 1x 6-12V 電源インターフェース

## アプリケーション

- ヒューマノイドロボット
- バイオニック多関節ロボット
- カメラ用3軸ヘッド

## 関連リンク

- **[公式ビデオ](https://www.youtube.com/channel/UCozgFVglWYQXbvTmGyS739w)**

- **[フォーラム](http://forum.m5stack.com/)**

- **[ATmega328pファームウェア](https://github.com/m5stack/M5-ProductExampleCodes/tree/master/Module/SERVO/firmware_328p)**

## サンプルコード

### 1. Arduino IDE

*完全なソースコードは[こちら](https://github.com/m5stack/M5-ProductExampleCodes/tree/master/Module/SERVO/Arduino)。*

```arduino
#include <Arduino.h>
#include <M5Stack.h>
#include <Wire.h>

#define SERVO_ADDR 0x53
void setup() {
    M5.begin(true, false, true);
    M5.Lcd.setTextFont(4);
    M5.Lcd.setCursor(70, 100);
    M5.Lcd.print("Servo Example");

    Wire.begin(21, 22, 100000);
}

// addr 0x01 means "control the number 1 servo by us"
void Servo_write_us(uint8_t number, uint16_t us) {
    Wire.beginTransmission(SERVO_ADDR);
    Wire.write(0x00 | number);
    Wire.write(us & 0x00ff);
    Wire.write(us >> 8 & 0x00ff);
    Wire.endTransmission();
}

// addr 0x11 means "control the number 1 servo by angle"
void Servo_write_angle(uint8_t number, uint8_t angle) {
    Wire.beginTransmission(SERVO_ADDR);
    Wire.write(0x10 | number);
    Wire.write(angle);
    Wire.endTransmission();
}

void loop() {
    for(uint8_t i = 0; i < 12; i++){
        Servo_write_us(i, 700);
        // Servo_write_angle(i, 0);
    }
    delay(1000);
    for(uint8_t i = 0; i < 12; i++){
        Servo_write_us(i, 2300);
        // Servo_write_angle(i, 180);
    }
    delay(1000);
}
```

### 2. UIFlow

*完全なソースコードは[こちら](https://github.com/m5stack/M5-ProductExampleCodes/tree/master/Module/SERVO/UIFlow)。*

<img src="assets/img/product_pics/module/module_example/SERVO/example_module_servo_01.png">

## 回路図

<img src="assets/img/product_pics/module/servo_sch.png">

## 関連動画

**SERVO チュートリアル**

<iframe width="560" height="315" src="https://m5stack.oss-cn-shenzhen.aliyuncs.com/video/%E6%95%99%E7%A8%8B/Servo/E4%20-%20Servo%20Demo(UIFlow%20Tutorials%205).mp4" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

**SERVO ケース**

<iframe width="560" height="315" src='https://m5stack.oss-cn-shenzhen.aliyuncs.com/video/Blog/Twitch201901/M5stack%20Servo.mp4' frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>