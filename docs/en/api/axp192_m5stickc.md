# AXP192 (Power management)

*The AXP192 is a highly integrated power system management chip.*

## begin()

**Syntax:**

<mark>void begin(void);</mark>

**Description: Initialize the AXP192.**

**Example:**

```arduino
#include <M5StickC.h>

void setup() {
  M5.begin(); //By default, "M5.begin()" will initialize AXP192 chip
}
void loop() {}
```

## ScreenBreath()

**Syntax:**

<mark>void ScreenBreath(uint8_t brightness);</mark>

**Description: Change the LDO3 output voltage of the AXP192 chip.**

| parameter | description |
| --- | --- |
| brightness | TFT backlight brightness (range: 7~15) |

**Example:**

```arduino
#include <M5StickC.h>

uint8_t i = 7;

void setup() {
  M5.begin(); //By default, "M5.begin()" will initialize AXP192 chip
  M5.Lcd.printf("Hello, M5Stack!!");
}
void loop() {
  M5.Axp.ScreenBreath(i++);
  if (i > 15) i = 7;
  delay(1000);
}
```

## GetVbatData()

**Syntax:**

<mark>uint16_t GetVbatData(void);</mark>

**Description: Get the battery voltage value.**

**Example:**

```arduino
#include <M5StickC.h>

double vbat = 0.0;

void setup() {
  M5.begin(); //By default, "M5.begin()" will initialize AXP192 chip
  M5.Lcd.fillScreen(BLACK);
}

void loop() {
  vbat = M5.Axp.GetVbatData() * 1.1 / 1000;
  M5.Lcd.setCursor(0, 0, 1);
  M5.Lcd.printf("vbat:%.3fV\r\n", vbat);
  delay(500);
}
```

## GetIchargeData()

**Syntax:**

<mark>uint16_t GetIchargeData(void);</mark>

**Description: Get the battery charging current.**

**Example:**

```arduino
#include <M5StickC.h>

int charge;

void setup() {
  M5.begin(); //By default, "M5.begin()" will initialize AXP192 chip
  M5.Lcd.fillScreen(BLACK);
}

void loop() {
  charge = M5.Axp.GetIchargeData() / 2;
  M5.Lcd.setCursor(0, 0, 1);
  M5.Lcd.printf("icharge:%dmA\r\n", charge);
  delay(500);
}
```