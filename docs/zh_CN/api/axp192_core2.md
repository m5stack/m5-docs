# AXP192

**AXP192 是一款高度集成的电源系统管理芯片, 在M5Core2库中封装了一系列电源芯片对周边外设电源控制的API**

## SetLcdVoltage()

**函数原型：**

`void SetLcdVoltage(uint16_t voltage);`

**功能：设置屏幕电压，调整亮度，参数有效范围 2500-3300**

**例程：**
```arduino
#include <M5Core2.h>

void setup() {
  M5.begin(); //By default, "M5.begin()" will initialize AXP192 chip
  M5.Lcd.fillScreen(RED);
}
void loop() {
  M5.update();
  for(int i=2500; i<3300;i++){
    M5.Axp.SetLcdVoltage(i);
    delay(10);
  }
  for(int i=3300; i>2500;i--){
    M5.Axp.SetLcdVoltage(i);
    delay(10);
  }
}
```

## SetLed()

**函数原型：**

`void SetLed(uint8_t state);`

**功能：设置内置LED灯， state：1为点亮，state：0为熄灭**

**例程：**
```arduino
#include <M5Core2.h>

void setup() {
  M5.begin();
}
void loop() {
  M5.Axp.SetLed(1);
  delay(1000);
  M5.Axp.SetLed(0);
  delay(1000);
}
```

## SetBusPowerMode()

**函数原型：**

`void SetBusPowerMode( uint8_t state );`

**功能：设置BUS电源模式，设置0为USB/BAT供电，设置1为外部输入供电**


## SetSpkEnable()

**函数原型：**

`void SetSpkEnable(uint8_t state);`

**功能：设置扬声器电源启用**


## SetCHGCurrent()

**函数原型：**

`void SetCHGCurrent(uint8_t state);`

**功能：设置电池充电电流**

## GetBatVoltage()

**函数原型：**

`float GetBatVoltage();`

**功能：读取电池电压**

## GetBatCurrent()

**函数原型：**

`float GetBatCurrent();`

**功能：读取电池电流**

## GetVBusVoltage()

**函数原型：**

`float GetVBusVoltage();`

**功能：读取VBUS电压**

## GetVBusCurrent()

**函数原型：**

`float GetVBusCurrent();`

**功能：读取VBUS电流**

## GetTempInAXP192()

**函数原型：**

`float GetTempInAXP192();`

**功能：读取AXP192芯片温度**

## GetBatPower()

**函数原型：**

`float GetBatPower();`

**功能：读取电池当前消耗功率**

## GetBatChargeCurrent()

**函数原型：**

`float GetBatChargeCurrent();`

**功能：读取电池充电电流**

## isCharging()

**函数原型：**

`bool isCharging();`

**功能：检查是否处于充电状态**