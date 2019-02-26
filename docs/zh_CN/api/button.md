# 按键

## read()

**函数原型：**

<mark>read();</mark> // for arduino

<!-- <mark>fillScreen(color)</mark> # for micropython -->

**功能：返回按键状态。1：按下；0：松开。**

**例程**
```arduino
#include <M5Stack.h>

void setup(){
    M5.begin();
}

void loop(){
    Serial.print("Button A Status: ");
    Serial.println(M5.BtnA.read());
    delay(200);
}
```

## isPressed()

**函数原型：**

<mark>isPressed();</mark> // for arduino

<!-- <mark>fillScreen(color)</mark> # for micropython -->

**功能：返回键值。如果指定按键奇数次数按下后，一直返回 1，偶数次数按下，一直返回 0。**

**例程**
```arduino
#include <M5Stack.h>

void setup(){
    M5.begin();
}

void loop(){
    if(M5.BtnA.isPressed()) { // for button A
        Serial.printf("A\r\n");
    }
    M5.update();
}
```

## wasPressed()

**函数原型：**

<mark>wasPressed();</mark> // for arduino

<!-- <mark>fillScreen(color)</mark> # for micropython -->

**功能：返回键值。如果指定按键按下，则返回 1 一次，然后置位为0，否则一直返回 0。**

**例程**
```arduino
#include <M5Stack.h>

void setup(){
    M5.begin();
}

void loop(){
    if(M5.BtnA.wasPressed()) { // for button A
        M5.Lcd.printf("A");
        Serial.printf("A");
    }
    M5.update();
}
```
<!-- ```python
# MicroPython
from m5stack import *
from m5ui import *

lcd.fillScreen(lcd.RED)
``` -->

* * *

## pressedFor()

**函数原型：**

<mark>pressedFor(uint32_t ms);</mark> // for arduino

<!-- <mark>fillScreen(color)</mark> # for micropython -->

**功能：返回键值。如果指定按键按下超过指定时间之后，则返回 1，否则返回 0。**

| 参数 | 描述 |
| --- | --- |
| ms | 按键按下时间 (单位：毫秒) |

**例程**
```arduino
#include <M5Stack.h>

void setup(){
    M5.begin();
}

void loop(){
    if(M5.BtnA.pressedFor(2000)) { // for button A
        Serial.printf("A");
    }
    M5.update();
}
```
<!-- ```python
# MicroPython
from m5stack import *
from m5ui import *

lcd.fillScreen(lcd.RED)
``` -->

<!-- * * * -->