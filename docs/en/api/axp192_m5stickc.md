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

## GetWarningLeve()

**Syntax:**

<mark>uint8_t GetWarningLeve(void);</mark>

**Description: get current warning level.**

**Example:**

```arduino
#include <M5StickC.h>
int level;

void setup() { 
  M5.begin();
}
void loop() {
  level = M5.Axp.GetWarningLeve();
  M5.Lcd.setCursor(0, 0);
  M5.Lcd.print(level);
}
```

## LightSleep()

**Syntax:**

<mark>void LightSleep(uint64_t time_in_us = 0)</mark>

**Description: control ESP32 into LightSleep Mode ,Press power swith to wakeup.**

| parameter | description |
| --- | --- |
| time_in_us| sleep time in us|

**Example:**

```arduino
#include <M5StickC.h>

int count = 0;
void setup() { 
  M5.begin();
  M5.Lcd.fillScreen(WHITE);
  pinMode(M5_BUTTON_HOME,INPUT_PULLUP);
}
void loop() {
  if(digitalRead(M5_BUTTON_HOME) == LOW){
    while(digitalRead(M5_BUTTON_HOME) == LOW);
    M5.Axp.LightSleep(SLEEP_SEC(5));  //SLEEP_SEC(us)  (((uint64_t)us) * 1000000L)
  }
  count++;
  M5.Lcd.setCursor(60, 30);
  M5.Lcd.setTextColor(BLACK, WHITE);
  M5.Lcd.print(count);
}
```

## SetSleep()

**Syntax:**

<mark>void SetSleep(void);</mark>

**Description: control external device into Sleep Mode,Press power switch to wakeup.**

**Example:**

```arduino
#include <M5StickC.h>

void setup() { 
  M5.begin();
  M5.Lcd.fillScreen(WHITE);
  pinMode(M5_BUTTON_HOME,INPUT_PULLUP);
  M5.Lcd.setCursor(60, 30);
  M5.Lcd.print("SLEEP");
}
void loop() {
  if(digitalRead(M5_BUTTON_HOME) == LOW){
    while(digitalRead(M5_BUTTON_HOME) == LOW);
    M5.Axp.SetSleep(); 
  }
}
```

## DeepSleep()

**Syntax:**

<mark>void DeepSleep(uint64_t time_in_us = 0)</mark>

**Description: control external device into DeepSleep Mode,When timeout device auto wakeup.**

**Example:**

```arduino
#include <M5StickC.h>

void setup() {
  M5.begin();
  M5.Lcd.setRotation(3);
  M5.Lcd.fillScreen(WHITE);
  M5.Lcd.setTextColor(BLACK, WHITE);
  pinMode(M5_BUTTON_HOME,INPUT_PULLUP);
  M5.Lcd.setCursor(60, 30);
  M5.Lcd.print("SLEEP");
}

void loop() {
  if(digitalRead(M5_BUTTON_HOME) == LOW){
    while(digitalRead(M5_BUTTON_HOME) == LOW);
    M5.Axp.DeepSleep(SLEEP_SEC(5));
  }
}
```

## ScreenBreath()

**Syntax:**

<mark>void ScreenBreath(uint8_t brightness);</mark>

**Description: Change the LDO3 output voltage of the AXP192 chip.**

| parameter | description |
| --- | --- |
| brightness | TFT backlight brightness (range: 7~12) |

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
  if (i > 12) i = 7;
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

## GetPowerbatData()

**Syntax:**

<mark>uint32_t GetPowerbatData(void);</mark>

**Description: Get Current Power.**

**Example:**

```arduino
#include <M5StickC.h>

int bat;

void setup() {
  M5.begin(); //By default, "M5.begin()" will initialize AXP192 chip
  M5.Lcd.fillScreen(BLACK);
  M5.Axp.ScreenBreath(7);
}

void loop() {
  bat = M5.Axp.GetPowerbatData()*1.1*0.5/1000;
  M5.Lcd.setCursor(0, 0, 1);
  M5.Lcd.printf("battery power:%dmW\r\n", bat);
  delay(500);
}
```

## GetVapsData()

**Syntax:**

<mark>uint16_t GetVapsData(void);</mark>

**Description: Get battery capacity.**

**Example:**

```arduino
#include <M5StickC.h>

int Vaps;

void setup() {
  M5.begin(); //By default, "M5.begin()" will initialize AXP192 chip
  M5.Lcd.fillScreen(BLACK);
}

void loop() {
  Vaps = M5.Axp.GetVapsData();
  M5.Lcd.setCursor(0, 0, 1);
  M5.Lcd.printf("battery capacity :%dmW\r\n", Vaps);
  delay(500);
}
```

## GetTempData()

**Syntax:**

<mark>uint16_t GetTempData(void);</mark>

**Description: Get battery capacity.**

**Example:**

```arduino
#include <M5StickC.h>

int temp;

void setup() {
  M5.begin(); //By default, "M5.begin()" will initialize AXP192 chip
  M5.Lcd.fillScreen(BLACK);
}

void loop() {
  temp = M5.Axp.GetTempData()*0.1-144.7;
  M5.Lcd.setCursor(0, 0, 1);
  M5.Lcd.printf("tempurature:%d\r\n", temp);
  delay(500);
}
```

## GetIinData()

**Syntax:**

<mark>uint16_t GetIinData(void);</mark>

**Description: ACIN current.**

**Example:**

```arduino
#include <M5StickC.h>

void setup() {
  M5.begin(); //By default, "M5.begin()" will initialize AXP192 chip
  M5.Lcd.fillScreen(BLACK);
}

void loop() {
  M5.Lcd.setCursor(0, 0, 1);
  M5.Lcd.printf("Iin:%.3fmA\r\n",M5.Axp.GetIinData() * 0.625);
}
```


## GetIdischargeData()

**Syntax:**

<mark>uint16_t GetIdischargeData(void);</mark>

**Description: Get battery output current.**

**Example:**

```arduino
#include <M5StickC.h>

int disCharge;

void setup() {
  M5.begin(); //By default, "M5.begin()" will initialize AXP192 chip
  M5.Lcd.fillScreen(BLACK);
}

void loop() {
  disCharge = M5.Axp.GetIdischargeData() / 2;
  M5.Lcd.setCursor(0, 0, 1);
  M5.Lcd.printf("disCharge:%dma\r\n", disCharge);
  delay(500);
}
```

## GetIusbinData()

**Syntax:**

<mark>uint16_t GetIusbinData(void);</mark>

**Description: Get USB vin current.**

**Example:**

```arduino
#include <M5StickC.h>

int Iusb;

void setup() {
  M5.begin(); //By default, "M5.begin()" will initialize AXP192 chip
  M5.Lcd.fillScreen(BLACK);
}

void loop() {
  Iusb = M5.Axp.GetIdischargeData() * 0.375;
  M5.Lcd.setCursor(0, 0, 1);
  M5.Lcd.printf("Iusbin:%da\r\n", Iusb);
  delay(500);
}
```