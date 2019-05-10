# 按键

## read()

**函数原型：**

<mark>read();</mark> // for arduino

**功能：返回按键状态。1：按下；0：松开。**

**例程**
```arduino
#include <M5Stack.h>

void setup() {
  M5.begin();
}

void loop() {
  M5.Lcd.setCursor(0, 0);
  M5.Lcd.print("Button A Status: ");
  M5.Lcd.println(M5.BtnA.read());
}
```

## isPressed()

**函数原型：**

<mark>isPressed();</mark> // for arduino

**功能：返回键值。如果指定按键奇数次数按下后，一直返回 1，偶数次数按下，一直返回 0。**

**例程**
```arduino
#include <M5Stack.h>

void setup() {
  M5.begin();
}

void loop() {
  M5.update(); // update()を呼び出す必要があります。
  M5.Lcd.setCursor(0, 0);
  if (M5.BtnA.isPressed()) {
    M5.Lcd.printf("A button is pressed.");
  } else {
    M5.Lcd.printf("A button is released.");
  }
}
```

## wasPressed()

**函数原型：**

<mark>wasPressed();</mark> // for arduino

**功能：返回键值。如果指定按键按下，则返回 1 一次，然后置位为0，否则一直返回 0。**

**例程**
```arduino
#include <M5Stack.h>

void setup() {
  M5.begin();
}

void loop() {
  M5.update();
  M5.Lcd.clear();
  M5.Lcd.setCursor(0, 0);
  if (M5.BtnA.wasPressed()) {
    M5.Lcd.printf("Button A was pressed.");
    delay(1000);
  }
}
```

## pressedFor()

**函数原型：**

<mark>pressedFor(uint32_t ms);</mark> // for arduino

**功能：返回键值。如果指定按键按下超过指定时间之后，则返回 1，否则返回 0。**

| 参数 | 描述 |
| --- | --- |
| ms | 按键按下时间 (单位：毫秒) |

**例程**
```arduino
#include <M5Stack.h>

void setup() {
  M5.begin();
}

void loop() {
  M5.update();
  M5.Lcd.clear();
  M5.Lcd.setCursor(0, 0);
  if (M5.BtnA.pressedFor(2000)) {
    M5.Lcd.printf("Button A was pressed for more than 2 seconds.");
    delay(1000);
  }
}
```
