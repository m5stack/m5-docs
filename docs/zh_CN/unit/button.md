# BUTTON - 单按键Unit

<img src="assets/img/product_pics/unit/M5GO_Unit_button.png" width="30%" height="30%"><img src="assets/img/product_pics/unit/unit_button_grove_b.png" width="30%" height="30%">

***

:memo:**[描述](#描述)**&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;:octocat:**[例程](#例程)**&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;:electric_plug:**[原理图](#原理图)**&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;🛒**[购买链接](https://item.taobao.com/item.htm?spm=a1z10.3-c.w4002-1172588106.49.3a93425e5PQbBs&id=577636117298)**

## 描述

BUTTON是一个单按键unit，这个Unit能检测你是否按下了.

## 特性

-  GROVE接口，支持[UiFlow](http://flow.m5stack.com)编程，[Arduino](http://www.arduino.cc)编程
-  Unit内置两个Lego插件孔，方便与Lego件结合

## 相关链接

- **[官方频道视频](https://i.youku.com/i/UNjE1ODA2MzE0OA==?spm=a2hzp.8253869.0.0)**

- **[官方论坛](http://forum.m5stack.com/)**

## 例程

### 1. Arduino IDE

```arduino
#include <M5Stack.h>

int last_value = 0;
int cur_value = 0;

void setup() {
  M5.begin();// init
  Serial.begin(115200);
  pinMode(36, INPUT);
  M5.Lcd.clear(BLACK);
  M5.Lcd.setTextColor(YELLOW);
  M5.Lcd.setTextSize(2);
  M5.Lcd.setCursor(80, 0); M5.Lcd.println("Button example");
  Serial.println("Button example: ");
  M5.Lcd.setTextColor(WHITE);
}

void loop() {
  cur_value = digitalRead(36);// read the value of BUTTON
  M5.Lcd.setCursor(0,25); M5.Lcd.print("Status: ");
  M5.Lcd.setCursor(0,45); M5.Lcd.print("Value: ");
  if(cur_value != last_value){
    M5.Lcd.fillRect(95,25,100,25,BLACK);
    M5.Lcd.fillRect(95,45,100,25,BLACK);
    if(cur_value==0){
      M5.Lcd.setCursor(95,25); M5.Lcd.print("pressed");// display the status
      M5.Lcd.setCursor(95,45); M5.Lcd.print("0");
      Serial.println("Button Status: pressed");
      Serial.println("       value:  0");
    }
    else{
      M5.Lcd.setCursor(95,25); M5.Lcd.print("released");// display the status
      M5.Lcd.setCursor(95,45); M5.Lcd.print("1");
      Serial.println("Button Status: released");
      Serial.println("       value:  1");
    }
    last_value = cur_value;
  }
  M5.update();
}
```

具体例程请点击[这里](https://github.com/m5stack/M5-ProductExampleCodes/tree/master/Unit/BUTTON/Arduino)。

### 2. UIFlow

<img src="assets/img/product_pics/unit/unit_example/example_unit_button_01.png" width="30%" height="30%"> <img src="assets/img/product_pics/unit/unit_example/example_unit_button_02.png" width="55%" height="55%">

具体例程请点击[这里](https://github.com/m5stack/M5-ProductExampleCodes/tree/master/Unit/BUTTON/UIFlow)。

## 原理图

<img src="assets/img/product_pics/unit/button_sch.JPG">

### 管脚映射

<table>
 <tr><td>M5Core(GROVE A)</td><td>GPIO36</td><td>GPIO26</td><td>5V</td><td>GND</td></tr>
 <tr><td>BUTTON Unit</td><td>GPIO36</td><td>GPIO26</td><td>5V</td><td>GND</td></tr>
</table>