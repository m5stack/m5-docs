# Power

## setPowerBoostKeepOn()

**構文:**

<mark>bool setPowerBoostKeepOn(bool en)</mark>

**説明:**

電源供給状態を設定します。  

**引数**

true: 常時供給モードon。  
false: 常時供給モードoff。  

**戻り値**

true: 制御成功。  
false: 制御失敗。  

**定義**

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

**構文:**

<mark>bool setKeepLightLoad(bool en)</mark>

**説明:**

自動シャットダウン無効化機能を設定します。  

**引数**

true: 軽負荷時に自動シャットダウンしません。  
false: 軽負荷時に自動シャットダウンします。  

**戻り値**

true: 制御成功。  
false: 制御失敗。  

**定義:**

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

**構文:**

<mark>bool setCharge(bool en)</mark>

**説明:**

充電制御状態を指示します。  
満充電時は、有効→無効→有効とセットすることで再充電ができます。  

**引数**

true: 充電開始指示。  
false: 充電中止指示。  

**戻り値**

true: 制御成功。  
false: 制御失敗。  

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
    else    Wire.write(data &(~CHARGE_OUT_BIT));
    Wire.endTransmission();
    return true;
  }
  return false;
}
```

## isChargeFull()

**構文:**

<mark>bool isChargeFull()</mark>

**説明:**

満充電かを判断します。  

**引数**

なし。  

**戻り値**

true: 満充電。  
false: 満充電ではない。  

**定義:**

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

**構文:**

<mark>bool canControl()</mark>

**説明:**

電源コントローラが制御可能かどうかを判断します。  

**引数**

なし。

**戻り値**

true: 電源コントローラーを制御可能。  
false: 電源コントローラーを制御不可能。  

**定義:**

```arduino
bool canControl(){
  uint8_t data;
  Wire.beginTransmission(IP5306_ADDR);
  Wire.write(IP5306_REG_READ0);
  return(Wire.endTransmission()==0);
}
```

## isCharging()

**構文:**

<mark>bool isCharging()</mark>

**説明:**

充電状態かどうかを判断します。  

**引数**

なし。  

**戻り値**

true: 充電中。  
false: 充電中ではない。  

**定義:**

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

**構文:**

<mark>bool getBatteryLevel()</mark>

**説明:**

バッテリー残量(%)を返します。  

**引数**

なし  

**戻り値**

バッテリーレベルを(0-100)の範囲で返します。（単位：％）  
もし残量が確認できる状態になければ-1を返します。  

**定義:**

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

**構文:**

<mark>void setWakeupButton(uint8_t button)</mark>

**説明:**

スリープ復帰信号ポートを設定します。  

**定義:**

```arduino
void setWakeupButton(uint8_t button) {
  _wakeupPin = button;
}
```

## reset()

**構文:**

<mark>void reset();</mark>

**説明:**

CPUをリセットします。  

**定義:**

```arduino
void reset() {
  esp_restart();
}
```

<!--
## batteryMode()

**構文:**

<mark>bool batteryMode(bool en)</mark>

**説明:**

電源の供給状態を設定します。

**定義:**

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

**構文:**

<mark>void deepSleep()</mark>

**説明:**

deep sleepモードに移行します。  

**定義:**

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
