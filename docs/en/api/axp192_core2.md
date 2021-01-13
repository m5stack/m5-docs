# AXP192

**AXP192 is a highly integrated power system management chip. A series of power chips are packaged in the M5Core2 library to control the power of peripheral peripherals.**

## SetLcdVoltage()

**Syntax：**

`void SetLcdVoltage(uint16_t voltage);`

**Description：Set screen voltage, adjust brightness, valid range of parameters is 2500-3300**

**Example：**
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

**Syntax：**

`void SetLed(uint8_t state);`

**Description：Set the built-in LED light, state: 1 is on, state: 0 is off**

**Example：**
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

**Syntax：**

`void SetBusPowerMode( uint8_t state );`

**Description：Set BUS power mode, set 0 for USB/BAT power supply, set 1 for external input power supply**


## SetSpkEnable()

**Syntax：**

`void SetSpkEnable(uint8_t state);`

**Description：Set speaker power enable**


## SetCHGCurrent()

**Syntax：**

`void SetCHGCurrent(uint8_t state);`

**Description：Set battery charging current**

## GetBatVoltage()

**Syntax：**

`float GetBatVoltage();`

**Description：Read battery voltage**

## GetBatCurrent()

**Syntax：**

`float GetBatCurrent();`

**Description：Read battery current**

## GetVBusVoltage()

**Syntax：**

`float GetVBusVoltage();`

**Description：Read VBUS voltage**

## GetVBusCurrent()

**Syntax：**

`float GetVBusCurrent();`

**Description：Read VBUS current**

## GetTempInAXP192()

**Syntax：**

`float GetTempInAXP192();`

**Description：Read AXP192 chip temperature**

## GetBatPower()

**Syntax：**

`float GetBatPower();`

**Description：Read the current power consumption of the battery**

## GetBatChargeCurrent()

**Syntax：**

`float GetBatChargeCurrent();`

**Description：Read battery charging current**

