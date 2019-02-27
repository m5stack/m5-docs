# ボタン

## read()

**説明:**

この関数はボタンの状態を直接読み出します。 1: pressed, 0: released.

**構文:**

```arduino
uint8_t read();
```

**使用例:**

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

**説明:**

この関数は最後にM5.Button.read()を呼び出した時のボタンの状態を読み出します。1: pressed, 0: released.

**構文:**

```arduino
uint8_t isPressed();
```

**使用例:**

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

**構文:**

```arduino
uint8_t wasPressed();
```

**説明:**

この関数はボタンが押される度に一度だけ1を返します。 1: pressed, 0: released.

**使用例:**

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

**構文:**

```arduino
uint8_t pressedFor(uint32_t ms);
```

**説明:**

この関数は引数で指定した時間以上ボタンが押し続けられたら1を返します。 1: pressed, 0: released.

| argument | 説明 | type |
| --- | --- | -- |
| ms | pressing time (ms) | uint32_t |

**使用例:**

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
