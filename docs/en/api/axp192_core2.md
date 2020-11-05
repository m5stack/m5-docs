# AXP192

**AXP192 is a highly integrated power system management chip.**

## SetLed()

**Syntax：**

`void SetLed(uint8_t state);`

**Description：Setting LED power indicator**

**Example：**

```arduino
#include <M5Core2.h>

void setup() {
  M5.begin(); //By default, "M5.begin()" will initialize AXP192 chip
  M5.Axp.SetLed(1);
}
void loop() {}
```

## CHGCurrent()

**Syntax:**

`void SetCHGCurrent(uint8_t state);`

**Description: Set charging current.**

**Example:**

```arduino
#include <M5Core2.h>

void setup() { 
  M5.begin();
  M5.Axp.SetCHGCurrent(AXP192::kCHG_190mA);
}
void loop() {
}
```


## setSpkEnable()

**Syntax：**

`void SetSpkEnable(uint8_t state);`

**Description：Enable speaker。**

**Example：**
```arduino
#include <M5Core2.h>

void setup() {
  M5.begin(); //By default, "M5.begin()" will initialize AXP192 chip
  M5.Axp.SetSpkEnable(1);
}
void loop() {

}
```

## SetBusPowerMode()

**Syntax：**

`void SetBusPowerMode(uint8_t state);`

**Description：Enable bus power output**

**Example：**
```arduino
#include <M5Core2.h>

void setup() {
  M5.begin(); //By default, "M5.begin()" will initialize AXP192 chip
}

void loop() {
    M5.Axp.SetBusPowerMode(1);
}
```

## SetLcdVoltage()

**Syntax:**

`void SetLcdVoltage(uint16_t voltage)`

**Description: Setting screen backlight voltage.**

**Example:**

```arduino
#include <M5Core2.h>


void setup() { 
  M5.begin();
  M5.Axp.SetLcdVoltage(3300);
}
void loop() {

}
```

## SetLDOEnable()

**Syntax:**

`void SetLDOEnable(uint8_t number, bool state)`

**Description: Enable LDO Pin**

**Example:**

```arduino
#include <M5Core2.h>

void setup() {
  M5.begin();
}

void loop() {
    M5.Axp.SetLDOEnable(3, 1);
    delay(200);
    M5.Axp.SetLDOEnable(3, 0);
    delay(200);
}
```

## SetLDOVoltage()

**Syntax:**

`void SetLDOVoltage(uint8_t number, uint16_t voltage);`

**Description: Config LDO voltage**

**Example:**

```arduino
#include <M5Core2.h>

void setup() { 
  M5.begin();
  M5.Axp.SetLDOVoltage(3,3300);   
}
void loop() {

}
```


## isACIN()

**Syntax：**

`bool isACIN()`

**Description：Determine whether the external power supply is connected**

**Example：**
```arduino
#include <M5Core2.h>

void setup() {
  M5.begin(); //By default, "M5.begin()" will initialize AXP192 chip
}

void loop() {
    if(M5.Axp.isACIN){
        Serial.print("AC IN");
    }else{
        Serial.print("Battery powered");
    }
}
```

## GetVapsData()

**Syntax:**

`uint16_t GetVapsData(void);`

**Description: Get battery capacity.**

**Example:**

```arduino
#include <M5Core2.h>

int Vaps;

void setup() {
  M5.begin(); //By default, "M5.begin()" will initialize AXP192 chip
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

`uint16_t GetTempData(void);`

**Description: Get AXP192 chip temperature.**

**Example:**

```arduino
#include <M5Core2.h>

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


## GetIdischargeData()

**Syntax:**

`uint16_t GetIdischargeData(void);`

**Description: Obtain discharge current.**

**Example:**

```arduino
#include <M5Core2.h>

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


## GetIinData()

**Syntax:**

`uint16_t GetIinData(void);`

**Description: Get input current.**

**Example:**

```arduino
#include <M5Core2.h>

void setup() {
  M5.begin(); //By default, "M5.begin()" will initialize AXP192 chip
  M5.Lcd.fillScreen(BLACK);
}

void loop() {
  M5.Lcd.setCursor(0, 0, 1);
  M5.Lcd.printf("Iin:%.3fmA\r\n",M5.Axp.GetIinData() * 0.625);
}
```


## GetIusbinData()

**Syntax:**

`uint16_t GetIusbinData(void);`

**Description:Get USB current.**

**Example:**

```arduino
#include <M5Core2.h>

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