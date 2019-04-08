# AXP192

*AXP192 是一款高度集成的电源系统管理芯片。*

## begin()

**函数原型：**

<mark>void begin(void);</mark>

**功能：初始化 AXP192 芯片。**

**例程：**
```arduino
#include <M5StackC.h>

void setup(){
    M5.begin(); //By default, "M5.begin()" will initialize AXP192 chip
    Serial.begin(115200);
}
```

## ScreenBreath()

**函数原型：**

<mark>void ScreenBreath(uint8_t brightness);</mark>

**功能：改变 AXP192 芯片的LDO3输出电压。**

| 参数 | 描述 |
| --- | --- |
| brightness | TFT 的背光 ( 数值范围：7-15 ) |

**例程：**
```arduino
#include <M5StackC.h>

void setup(){
    M5.begin(); //By default, "M5.begin()" will initialize AXP192 chip
    Serial.begin(115200);
    M5.Axp.ScreenBreath(7);
}
```

## GetVbatData()

**函数原型：**

<mark>uint16_t GetVbatData(void);</mark>

**功能：获取电池电压值。**

**例程：**
```arduino
#include <M5StackC.h>

double vbat = 0.0;

void setup(){
    M5.begin(); //By default, "M5.begin()" will initialize AXP192 chip
    Serial.begin(115200);
    M5.Lcd.fillScreen(BLACK);
}

void loop(){
    vbat = M5.Axp.GetVbatData() * 1.1 / 1000;
    M5.Lcd.setCursor(0, 0, 1);
    M5.Lcd.printf("vbat:%.3fV\r\n",vbat); 
    delay(500);
}
```

## GetIchargeData()

**函数原型：**

<mark>uint16_t GetIchargeData(void);</mark>

**功能：获取电池充电电流值。**

**例程：**
```arduino
#include <M5StackC.h>

int charge;

void setup(){
    M5.begin(); //By default, "M5.begin()" will initialize AXP192 chip
    Serial.begin(115200);
    M5.Lcd.fillScreen(BLACK);
}

void loop(){
    charge = M5.Axp.GetIchargeData() / 2;
    M5.Lcd.setCursor(0, 0, 1);
    M5.Lcd.printf("icharge:%dmA\r\n",charge);
    delay(500);
}
```