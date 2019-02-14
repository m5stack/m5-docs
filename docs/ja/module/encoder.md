# ENCODER {docsify-ignore-all}

<img src="assets/img/product_pics/module/module_encoder_01.png" width="30%" height="30%"> <img src="assets/img/product_pics/module/module_encoder_02.png" width="30%" height="30%">

***

:memo:**[概要](#概要)**&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;:octocat:**[サンプルコード](#サンプルコード)**&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;:electric_plug:**[回路図](#回路図)**&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;🛒**[購入リンク](https://www.aliexpress.com/item/M5Stack-Encoder-Panel-for-M5Stack-FACES-ESP32-Pocket-Computer-with-12pcs-NeoPixel-LED-MEGA328-Inside-I2C/32960440900.html)**

## 概要

<mark>ENCODER</mark>はFACES向けのロータリエンコーダモジュールです. 利用するにはFACESベースとM5Coreが必要になります。ENCODERは回転角度を出力します。ダイヤルノブのクリック入力を取得したり、フルカラーLEDを制御することができます。

ENCODERはM5CoreからI2C通信で制御することができます。I2Cアドレスは0x5Eです。

<img src="assets/img/product_pics/module/module_encoder_03.png" width="60%" height="60%">

## 特徴

- 12 RGB LED
- I2C 通信
- シンプルAPI

## 機能

**LEDを一つ制御する**

```arduino
/*
    Parameter:
        led_index: 0 ~ 11
        r, g, b: 0 ~ 254
*/
void Led(int led_index, int r, int g, int b){
    // I2C データ送信
    Wire.beginTransmission(Faces_Encoder_I2C_ADDR);
    Wire.write(led_index);
    Wire.write(r);
    Wire.write(g);
    Wire.write(b);
    Wire.endTransmission();
}
```

**エンコーダの増分読取り**

```arduino
void get_encoder_increment(void){
    int temp_encoder_increment;

    // I2C データ読み込み
    Wire.requestFrom(Faces_Encoder_I2C_ADDR, 3);
    if(Wire.available()){
       temp_encoder_increment = Wire.read(); // 増分を取得
       button_state = Wire.read(); // ボタンの値を取得
    }
    if(temp_encoder_increment > 127){ // 反時計まわり
        direction = 1; // 回転方向のフラグ
        encoder_increment = 256 - temp_encoder_increment;
    }
    else{// clockwise
        direction = 0;
        encoder_increment = temp_encoder_increment;
    }
}
```

## パッケージ内容

- 1x ENCODER

## 関連リンク

- **[公式ビデオ](https://www.youtube.com/channel/UCozgFVglWYQXbvTmGyS739w)**

- **[フォーラム](http://forum.m5stack.com/)**

- **[ATmega328pファームウェア](https://github.com/m5stack/M5-ProductExampleCodes/tree/master/Module/ENCODER/firmware_328p/FacesEncoder328)**

## サンプルコード

### Arduino IDE

*`faces_encoder.ino`の完全なコードは[こちら](https://github.com/m5stack/M5-ProductExampleCodes/tree/master/Module/ENCODER/Arduino/faces_encoder).*

```arduino
/*
* faces_encoder.ino
*/
#include <M5Stack.h>

#define Faces_Encoder_I2C_ADDR     0X5E

// 宣言
int encoder_increment; // +: 時計まわり -: 反時計まわり
uint16_t encoder_value=0;
int button_state;
uint8_t direction; // 0: 時計まわり 1: 反時計まわり
int temp_encoder_increment;

// 初期化
M5.begin();
Wire.begin();

// ENCONDERからデータを取得
Wire.requestFrom(Faces_Encoder_I2C_ADDR, 3);
if(Wire.available()){
    temp_encoder_increment = Wire.read(); // １バイト目: 増分データ
    button_state = Wire.read(); // 2バイト目: ボタンの値
}

// I2C データ送信、4バイト
Wire.beginTransmission(Faces_Encoder_I2C_ADDR);
Wire.write(led_index);
Wire.write(r);
Wire.write(g);
Wire.write(b);
Wire.endTransmission();
```

<img src="assets/img/product_pics/module/module_example/ENCODER/example_faces_encoder_01.png" width="55%" height="55%">

<!-- ## Schematic

<img src="assets/img/product_pics/module/gps_sch.png"> -->
