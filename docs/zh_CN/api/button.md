# 按键

## read()

**函数原型：**

`read();` // for arduino

**功能：返回按键状态。1：按下；0：松开。**

**例程**
```clike
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

`isPressed();` // for arduino

**功能：返回键值。如果按键按下，总是返回true，否则总是返回false**

**例程**
```clike
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

## lastChange()

**函数原型:**

`uint32_t lastChange(void);`

**功能:**

返回最后一次状态发生变化的时间 .

**例程:**

```clike
#include <M5Stack.h>

void setup() {
  M5.begin();
}

void loop() {
  M5.update();
  int current_time = M5.BtnB.lastChange();
  M5.Lcd.setCursor(0, 0);
  M5.Lcd.printf("The last change at No. %d ms",current_time);
}
```

## wasPressed()

**函数原型：**

`wasPressed();` // for arduino

**功能：返回键值。如果指定按键按下，则返回 1 一次，然后置位为0，否则一直返回 0。**

**例程**
```clike
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

`pressedFor(uint32_t ms);` // for arduino

**功能：返回键值。如果指定按键按下超过指定时间之后，则返回 1，否则返回 0。**

| 参数 | 描述 |
| --- | --- |
| ms | 按键按下时间 (单位：毫秒) |

**例程**
```clike
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

## releasedFor()

**函数原型:**

`uint8_t releasedFor(uint32_t ms)`

**功能:**

如果按键松开超过设定的时间则总是返回真

**例程:**

```clike
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

## wasReleased()

**函数原型:**

`uint8_t wasReleased(void)`

**功能:**

按键按下松开一次则返回一次真

**例程:**

```clike
#include <M5Stack.h>

void setup() {
  M5.begin();
  M5.Lcd.print("Press Button A and release, you will see the message");
}

void loop() {
  M5.update();
  if (M5.BtnA.wasReleased()){
    M5.Lcd.clear();
    M5.Lcd.setCursor(0, 0);
    M5.Lcd.print("Button A was Released");
  }
}
```

## wasReleasefor()

**函数原型:**

`uint8_t wasReleasefor(uint32_t ms);`

**功能:**

按键按下,在超过指定时间后松开则返回真 .

**例程:**

```clike
#include <M5Stack.h>

void setup() {
  M5.begin();
  M5.Lcd.setCursor(0, 0);
  M5.Lcd.print("press Button A to display message");
  delay(3000);
}

void loop() {
  M5.update();
  if (M5.BtnA.isPressed()){
    M5.Lcd.setCursor(0, 0);
    M5.Lcd.print("release Button A, 3 seconds will clear screen");
  }
  if (M5.BtnA.wasReleasefor(3000)) {
      M5.Lcd.clear(BLACK);
  }
}
```