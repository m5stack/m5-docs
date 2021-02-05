# ANGLE ユニット {docsify-ignore-all}

<img src="assets/img/product_pics/unit/M5GO_Unit_angle.png" width="30%" height="30%"><img src="assets/img/product_pics/unit/unit_angle_grove_b.png" width="30%" height="30%">

***

:memo:**[概要](#概要)**&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;:octocat:**[サンプルコード](#サンプルコード)**&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; :electric_plug:**[回路図](#回路図)** &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;🛒**[購入リンク](https://www.aliexpress.com/item/M5Stack-Official-Mini-Angle-Unit-Potentiometer-Inside-Resistance-Adjustable-GPIO-GROVE-Co-n-nec-to-r/32931834705.html)**

## 概要

**<mark>ANGLE</mark>**ユニットはは10Kポテンショメータと呼ばれる抵抗器を搭載したユニットです。ポテンショメータは3端子の抵抗素子で、つまみを回すことで抵抗値を調整できます。ポテンショメータが回転すると、出力電圧値(Uo)が変化します。モーター速度、LEDの明るさなどの調整に使用できます。抵抗値の変化を下図に示します。

<img src="assets/img/product_pics/unit/angle/unit_angle_03.png">

M5CoreのGROVE Bインターフェースに接続して、利用可能です。

## 特徴

- 出力電圧範囲: 0 ~ 2500mV
- [UIFlow](http://flow.m5stack.com)、[Arduino](http://www.arduino.cc)プログラミングサポート
- LEGO 互換ホール

## パッケージ内容

- 1x ANGLEユニット
- 1x Groveケーブル

## 関連リンク

- **[公式ビデオ](https://www.youtube.com/channel/UCozgFVglWYQXbvTmGyS739w)**

- **[フォーラム](http://forum.m5stack.com/)**

## サンプルコード

### 1. Arduino

*完全なソースコードは[こちら](https://github.com/m5stack/M5-ProductExampleCodes/tree/master/Unit/ANGLE/Arduino)。*

画面にユニット出力電圧値に対応するデジタル値を表示します。 範囲は0~4095です。

```arduino
#include <M5Stack.h>
// select the input pin for the potentiometer
int sensorPin = 36;
// last variable to store the value coming from the sensor
int last_sensorValue = 0;
// current variable to store the value coming from the sensor
int cur_sensorValue = 0;

void setup() {
  M5.begin();
  pinMode(sensorPin, INPUT);
  M5.Lcd.setTextSize(2);
  M5.Lcd.setCursor(0, 0);
  M5.Lcd.print("the value of ANGLE: ");
}

void loop() {
  // read the value from the sensor:
  cur_sensorValue = analogRead(sensorPin);
  M5.Lcd.setCursor(0, 25);
  if(abs(cur_sensorValue - last_sensorValue) > 10){//debaunce
    M5.Lcd.fillRect(0, 25, 100, 25, BLACK);
    M5.Lcd.print(cur_sensorValue);
    last_sensorValue = cur_sensorValue;
  }
  delay(50);
}
```

<img src="assets/img/product_pics/unit/unit_example/ANGLE/example_unit_angle_04.png">

### 2. UIFlow

*完全なソースコードは[こちら](https://github.com/m5stack/M5-ProductExampleCodes/tree/master/Unit/ANGLE/UIFlow)。*

<img src="assets/img/product_pics/unit/unit_example/ANGLE/example_unit_angle_03.png">

## 回路図

<img src="assets/img/product_pics/unit/angle_sch.png">

### ピンマップ

<table>
 <tr><td>M5Core(GROVE B)</td><td>GPIO36</td><td>GPIO26</td><td>5V</td><td>GND</td></tr>
 <tr><td>ANGLE Unit</td><td>Sensor Pin</td><td> </td><td>5V</td><td>GND</td></tr>
</table>
