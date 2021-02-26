# Button

## read()

**Syntax:**

`uint8_t read()`

**Description:**

This function returns reading the state of the button directly. 1: pressed, 0: released.

**Example:**

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

**Syntax:**

`uint8_t isPressed()`

**Description:**

This function returns the state of the button the last time Button.read() was called. 1: pressed, 0: released.

**Example:**

```clike
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

`uint8_t wasPressed()`

**Description:**

This function returns 1 only once each time the button is pressed. 1: pressed, 0: released.

**Example:**

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

## releasedFor()

**Syntax:**

`uint8_t releasedFor(uint32_t ms)`

**Description:**

releasedFor(ms) check to see if the button is pressed (or released), and has been in that state for the specified time in milliseconds. Returns false (0) or true (1) accordingly.

**Example:**

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

**Syntax:**

`uint8_t pressedFor(uint32_t ms);`

**Description:**

This function returns 1 if button has been pressed for more than specified time. 1: pressed, 0: released.

| argument | description | type |
| --- | --- | -- |
| ms | pressing time (ms) | uint32_t |

**Example:**

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

## lastChange()

**Syntax:**

`uint32_t lastChange(void);`

**Description:**

Returns the last state time point .

**Example:**

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

## wasReleasefor()

**Syntax:**

`uint8_t wasReleasefor(uint32_t ms);`

**Description:**

releasedFor(ms) check to see if the button is released, and has been in that state for the specifiedtime in milliseconds. Returns false (0) or true (1) accordingly .

**Example:**

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

## wasReleased()

**Syntax:**

`uint8_t wasReleased(void)`

**Description:**

This function returns 1 only once each time the button is pressed. 1: pressed, 0: released.

**Example:**

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