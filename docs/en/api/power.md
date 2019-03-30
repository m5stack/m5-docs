# Power

## setPowerBoostKeepOn()

**Syntax:**

<mark>bool setPowerBoostKeepOn(bool en)</mark>

**Description:**

This function sets/unsets always boost output mode.  

**Function argument**

true: Turn on always boost output mode,  
false: Turn off always boost output mode.  

**Function return value**

true: Control success,  
false: Control failure.  

**Definition:**

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
    else    Wire.write(data &(~BOOST_OUT_BIT));
    Wire.endTransmission();
    return true;
  }
  return false;
}
```

## setKeepLightLoad()

**Syntax:**

<mark>bool setKeepLightLoad(bool en)</mark>

**Description:**

This function sets/unsets to disable the automatic shutdown.  

**Function argument**

true: When the current is too small, IP5306 will *not* automatically shutdown,  
false: When the current is too small, IP5306 will automatically shutdown.  

**Function return value**

true: Control success,  
false: Control failure.  

**Definition:**

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
    else     Wire.write(data &(~LIGHT_LOAD_BIT));
    Wire.endTransmission();
    return true;
  }
  return false;
}
```

## setCharge()

**Syntax:**

<mark>bool setCharge(bool en)</mark>

**Description:**

This function sets/unsets charge mode. When the battery is fully charged,  
try set charge enable->disable->enable, It can be recharged.  

**Function argument**

true: Start charging,  
false: Stop charging.  

**Function return value**

true: Control success,  
false: Control failure.  

**Definition:**

```arduino
bool setCharge(bool en){
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
    else    Wire.write(data &(~CHARGE_OUT_BIT));
    Wire.endTransmission();
    return true;
  }
  return false;
}
```

## isChargeFull()

**Syntax:**

<mark>bool isChargeFull()</mark>

**Description:**

This function checks if the battery is fully charged.  

**Function argument**

No argument.  

**Function return value**

true: Full charged,  
false: Not full charged.  

**Definition:**

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

**Syntax:**

<mark>bool canControl()</mark>

**Description:**

This function checks the existence of the battery controller on I2C.  

**Function argument**

No argument.

**Function return value**

true: Battery controller is found,  
false: Battery controller is not found.  

**Definition:**

```arduino
bool canControl(){
  uint8_t data;
  Wire.beginTransmission(IP5306_ADDR);
  Wire.write(IP5306_REG_READ0);
  return(Wire.endTransmission()==0);
}
```

## isCharging()

**Syntax:**

<mark>bool isCharging()</mark>

**Description:**

This function checks the state of the charging.  

**Function argument**

No argument.  

**Function return value**

true: In charging,  
false: Not in charging.  

**Definition:**

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

**Syntax:**

<mark>bool getBatteryLevel()</mark>

**Description:**

This function gets the battery level.  

**Function argument**

No argument.

**Function return value**

Battery remaining percentage. (0-100 %)  
Returns -1 if it can not communicate with the controller.  

**Definition:**

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

**Syntax:**

<mark>void setWakeupButton(uint8_t button)</mark>

**Description:**

This function sets the port to exit sleep mode.  

**Definition:**

```arduino
void setWakeupButton(uint8_t button) {
  _wakeupPin = button;
}
```

## reset()

**Syntax:**

<mark>void reset()</mark>

**Description:**

This function resets the CPU.  

**Definition:**

```arduino
void reset() {
  esp_restart();
}
```

<!--
## batteryMode()

**Syntax:**

<mark>bool batteryMode(bool en)</mark>

**Description:**

This function controls power supply.

**Definition:**

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

**Syntax:**

<mark>void deepSleep()</mark>

**Description:**

This function shifts to deep sleep mode.  

**Definition:**

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
