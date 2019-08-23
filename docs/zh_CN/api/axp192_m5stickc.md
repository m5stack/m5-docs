# AXP192

*AXP192 是一款高度集成的电源系统管理芯片。*

## begin()

**函数原型：**

<mark>void begin(void);</mark>

**功能：初始化 AXP192 芯片。**

**例程：**
```arduino
#include <M5StickC.h>

void setup() {
  M5.begin(); //By default, "M5.begin()" will initialize AXP192 chip
}
void loop() {}
```

## GetWarningLeve()

**函数原型:**

<mark>uint8_t GetWarningLeve(void);</mark>

**功能: 获取当前报警等级.**

**例程:**

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


## ScreenBreath()

**函数原型：**

<mark>void ScreenBreath(uint8_t brightness);</mark>

**功能：改变 AXP192 芯片的LDO3输出电压。**

| 参数 | 描述 |
| --- | --- |
| brightness | TFT 的背光 ( 数值范围：7-12 ) |

**例程：**
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

**函数原型：**

<mark>uint16_t GetVbatData(void);</mark>

**功能：获取电池电压值。**

**例程：**
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

## LightSleep()

**函数原型:**

<mark>void LightSleep(uint64_t time_in_us = 0)</mark>

**功能: 控制ESP32进入轻度睡眠模式，开机键唤醒.**

| 参数 | 描述 |
| --- | --- |
| time_in_us| 休眠时间|

**例程:**

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

## DeepSleep()

**函数原型:**

<mark>void DeepSleep(uint64_t time_in_us = 0)</mark>

**功能: 控制外设进入休眠模式，到达时间自动唤醒.**

**例程:**

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

## SetSleep()

**函数原型:**

<mark>void SetSleep(void);</mark>

**功能: 控制外设进入休眠模式，按下电源键唤醒.**

**例程:**

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


## GetIchargeData()

**函数原型：**

<mark>uint16_t GetIchargeData(void);</mark>

**功能：获取电池充电电流值。**

**例程：**
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

**函数原型:**

<mark>uint32_t GetPowerbatData(void);</mark>

**功能: 当前电源功率.**

**例程:**

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

**函数原型:**

<mark>uint16_t GetVapsData(void);</mark>

**功能: 获取电池容量.**

**例程:**

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

**函数原型:**

<mark>uint16_t GetTempData(void);</mark>

**功能: 获取芯片温度.**

**例程:**

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


## GetIdischargeData()

**函数原型:**

<mark>uint16_t GetIdischargeData(void);</mark>

**功能: 获取放电电流.**

**例程:**

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


## GetIinData()

**函数原型:**

<mark>uint16_t GetIinData(void);</mark>

**功能: 获取输入电流.**

**例程:**

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


## GetIusbinData()

**函数原型:**

<mark>uint16_t GetIusbinData(void);</mark>

**功能:获取USB电流.**

**例程:**

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