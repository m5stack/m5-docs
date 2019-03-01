# Button

## read()

**Syntax:**

<mark>uint8_t read();</mark>

**Description:**

This function returns reading the state of the button directly. 1: pressed, 0: released.

**Example:**

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

**Syntax:**

<mark>uint8_t isPressed();</mark>

**Description:**

This function returns the state of the button the last time Button.read() was called. 1: pressed, 0: released.

**Example:**

```arduino
#include <M5Stack.h>

void setup() {
  M5.begin();
}

void loop() {
  M5.update(); // need to call update()
  M5.Lcd.setCursor(0, 0);
  if (M5.BtnA.isPressed()) {
    M5.Lcd.printf("A button is pressed.");
  } else {
    M5.Lcd.printf("A button is released.");
  }
}
```

## wasPressed()

**Syntax:**

<mark>uint8_t wasPressed();</mark>

**Description:**

This function returns 1 only once each time the button is pressed. 1: pressed, 0: released.

**Example:**

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

**Syntax:**

<mark>uint8_t pressedFor(uint32_t ms);</mark>

**Description:**

This function returns 1 if button has been pressed for more than specified time. 1: pressed, 0: released.

| argument | description | type |
| --- | --- | -- |
| ms | pressing time (ms) | uint32_t |

**Example:**

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
