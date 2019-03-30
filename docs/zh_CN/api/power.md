# Power

*电源相关的函数可能涉及 IP5306 芯片的寄存器，如果有不明白的地方，可以查看 [IP5306](https://github.com/m5stack/M5-Schematic/blob/master/Core/IIC_IP5306_REG_V1.4.pdf) 的寄存器手册。*

## setPowerBoostKeepOn()

**函数原型:**

<mark>bool setPowerBoostKeepOn(bool en)</mark>

**功能: BOOST 输出常开功能**

**参数**

true: BOOST 常开  
false: BOOST 常闭  

**返回值**

true: 控制成功  
false: 控制失败  

**函数实现**

```arduino
bool setPowerBoostKeepOn(bool en){
  uint8_t data;
  Wire.beginTransmission(IP5306_ADDR);
  Wire.write(IP5306_REG_SYS_CTL0);
  Wire.endTransmission();

  if(Wire.requestFrom(IP5306_ADDR, 1))
  {
    data = Wire.read();

    Wire.beginTransmission(IP5306_ADDR);
    Wire.write(IP5306_REG_SYS_CTL0);
    if (en) Wire.write(data |  BOOST_OUT_BIT);
    else Wire.write(data &(~BOOST_OUT_BIT));
    Wire.endTransmission();
    return true;
  }
  return false;
}
#endif
```

## setKeepLightLoad()

**函数原型:**

<mark>bool setKeepLightLoad(bool en)</mark>

**功能:**

设置自动关机功能。  

**参数**

true:当电流消耗低时，不会发生自动关闭  
false:电流消耗低时自动关闭  

**返回值**

true: 控制成功  
false: 控制失败  

**函数实现**

```arduino
bool setKeepLightLoad(bool en) {
  uint8_t data;
  Wire.beginTransmission(IP5306_ADDR);
  Wire.write(IP5306_REG_SYS_CTL0);
  Wire.endTransmission();

  if(Wire.requestFrom(IP5306_ADDR, 1))
  {
    data = Wire.read();

    Wire.beginTransmission(IP5306_ADDR);
    Wire.write(IP5306_REG_SYS_CTL0);
    if (!en) Wire.write(data |  LIGHT_LOAD_BIT);
    else Wire.write(data &(~LIGHT_LOAD_BIT));
    Wire.endTransmission();
    return true;
  }
  return false;
}
```


## setCharge()

**函数原型:**

<mark>bool setCharge(bool en)</mark>

**功能:设置充电状态**

true:充电开始指令  
false:充电停止指令  

**返回值**

true: 控制成功  
false: 控制失败  

**定義:**

```arduino
bool POWER::setCharge(bool en){
  uint8_t data;
  Wire.beginTransmission(IP5306_ADDR);
  Wire.write(IP5306_REG_SYS_CTL0);
  Wire.endTransmission();

  if(Wire.requestFrom(IP5306_ADDR, 1))
  {
    data = Wire.read();

    Wire.beginTransmission(IP5306_ADDR);
    Wire.write(IP5306_REG_SYS_CTL0);
    if (en) Wire.write(data |  CHARGE_OUT_BIT);
    else Wire.write(data &(~CHARGE_OUT_BIT));
    Wire.endTransmission();
    return true;
  }
  return false;
}
```

## isChargeFull()

**函数原型:**

<mark>bool isChargeFull()</mark>

**说明:**

确认完全充电.  

**参数**

无。  

**返回值**

true:完全充电  
false:没有完全充电  

**函数实现:**

```arduino
bool isChargeFull(){
  uint8_t data;
  Wire.beginTransmission(IP5306_ADDR);
  Wire.write(IP5306_REG_READ1);
  Wire.endTransmission(false);
  if(Wire.requestFrom(IP5306_ADDR, 1))
  {
    data = Wire.read();
    if (data & (1 << CHARGE_FULL_BIT)) return true;
    else return false;
  }
  return false;
}
```

## canControl()

**函数原型:**

<mark>bool canControl()</mark>

**功能:**

确认完全充电  

**参数**

无。  

**返回值**

true: 电源控制器发现  
false:找不到电源控制器  

**函数实现:**

```arduino
bool canControl(){
  uint8_t data;
  Wire.beginTransmission(IP5306_ADDR);
  Wire.write(IP5306_REG_READ0);
  return(Wire.endTransmission()==0);
}
```

## isCharging()

**函数原型:**

<mark>bool isCharging()</mark>

**功能:确认是否正在充电**

**参数**

无。  

**返回值**

true: 在充电过程中  
false: 不充电  

**函数实现:**

```arduino
bool isCharging(){
  uint8_t data;
  Wire.beginTransmission(IP5306_ADDR);
  Wire.write(IP5306_REG_READ0);
  Wire.endTransmission(false);
  if(Wire.requestFrom(IP5306_ADDR, 1))
  {
    data = Wire.read();
    if (data & (1 << CHARGE_FULL_BIT)) return true;
    else return false;
  }
  return false;
}
```

## getBatteryLevel()

**函数原型:**

<mark>bool getBatteryLevel()</mark>

**功能:**

返回电池电量  

**参数**

无。  

**返回值**

返回0到100范围内的电池电量.（单位：％）  
如果无法检查剩余金额，则返回-1  

**函数实现:**

```arduino
int8_t getBatteryLevel() {
    Wire.beginTransmission(0x75);
    Wire.write(0x78);
    if (Wire.endTransmission(false) == 0 && Wire.requestFrom(0x75, 1)) {
        switch (Wire.read() & 0xF0) {
        case 0xE0: return 25;
        case 0xC0: return 50;
        case 0x80: return 75;
        case 0x00: return 100;
        default: return 0;
        }
    }
    return -1;
}
```

## setWakeupButton()

**函数原型:**

<mark>void setWakeupButton(uint8_t button)</mark>

**功能:设置睡眠返回端口**

**函数实现:**

```arduino
void setWakeupButton(uint8_t button) {
  _wakeupPin = button;
}
```

## reset()

**函数原型:**

<mark>void reset()</mark>

**功能:执行CPU重置**

**函数实现:**

```arduino
void reset() {
  esp_restart();
}
```

<!--
## batteryMode()

**函数原型:**

<mark>bool batteryMode(bool en)</mark>

**功能:设置电池供电状态**

**函数实现:**

```arduino
bool batteryMode(bool en){

  uint8_t data;
  Wire.beginTransmission(IP5306_ADDR);
  Wire.write(IP5306_REG_SYS_CTL0);
  Wire.endTransmission();

  if(Wire.requestFrom(IP5306_ADDR, 1))
  {
    data = Wire.read();

    Wire.beginTransmission(IP5306_ADDR);
    Wire.write(IP5306_REG_SYS_CTL0);
    if (en) Wire.write(data |  BOOST_ENABLE_BIT);
    else Wire.write(data &(~BOOST_ENABLE_BIT));
    Wire.endTransmission();
    return true;
  }
  return false;
}
```
-->

## deepSleep()

**函数原型:**

<mark>void deepSleep()</mark>

**功能:进入 deep sleep 状态**

**函数实现:**

```arduino
void deepSleep(){

  #ifdef M5STACK_FIRE
  // Keep power keep boost on
  setPowerBoostKeepOn(true);
  #endif

  // power off the Lcd
  M5.Lcd.setBrightness(0);
  M5.Lcd.sleep();

  // ESP32 into deep sleep
  esp_sleep_enable_ext0_wakeup((gpio_num_t)_wakeupPin , LOW);

  while(digitalRead(_wakeupPin) == LOW) {
    delay(10);
  }
  esp_deep_sleep_start();
}
```
