# AXP192

**AXP192 是一款高度集成的电源系统管理芯片。**

## SetLed()

**函数原型：**

`void SetLed(uint8_t state);`

**功能：设置LED电源指示灯。**

**例程：**
```arduino
#include <M5Core2.h>

void setup() {
  M5.begin(); //By default, "M5.begin()" will initialize AXP192 chip
  M5.Axp.SetLed(1);
}
void loop() {}
```

## CHGCurrent()

**函数原型:**

`void SetCHGCurrent(uint8_t state);`

**功能: 设置充电电流.**

**例程:**

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

**函数原型：**

`void SetSpkEnable(uint8_t state);`

**功能：使能扬声器。**

**例程：**
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

**函数原型：**

`void SetBusPowerMode(uint8_t state);`

**功能：使能总线电源输出**

**例程：**
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

**函数原型:**

`void SetLcdVoltage(uint16_t voltage)`

**功能: 设置屏幕背光电压.**

**例程:**

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

**函数原型:**

`void SetLDOEnable(uint8_t number, bool state)`

**功能: 使能LDO引脚**

**例程:**

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

**函数原型:**

`void SetLDOVoltage(uint8_t number, uint16_t voltage);`

**功能: 配置LDO引脚电压**

**例程:**

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

**函数原型：**

`bool isACIN()`

**功能：判断是否外接供电**

**例程：**
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

**函数原型:**

`uint16_t GetVapsData(void);`

**功能: 获取电池容量.**

**例程:**

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

**函数原型:**

`uint16_t GetTempData(void);`

**功能: 获取芯片温度.**

**例程:**

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

**函数原型:**

`uint16_t GetIdischargeData(void);`

**功能: 获取放电电流.**

**例程:**

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

**函数原型:**

`uint16_t GetIinData(void);`

**功能: 获取输入电流.**

**例程:**

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

**函数原型:**

`uint16_t GetIusbinData(void);`

**功能:获取USB电流.**

**例程:**

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