# Power

## setPowerBoostKeepOn()

**構文:**

<mark>bool setPowerBoostKeepOn(bool en);</mark>

**説明:**

電源供給状態を設定します。

**定義:**

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

## setCharge()

**構文:**

<mark>bool setCharge(bool en);</mark>

**説明:**

充電状態を設定します。

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

**構文:**

<mark>bool isChargeFull(bool en);</mark>

**説明:**

満充電かを判定します

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

<mark>bool canControl();</mark>

**説明:**

電源コントローラが使用可能かを判断します

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

<mark>bool isCharging(){</mark>

**説明:**

充電中かを返答します

**定義:**

```arduino
bool canControl(){
	uint8_t data;
	Wire.beginTransmission(IP5306_ADDR);
	Wire.write(IP5306_REG_READ0);
	return(Wire.endTransmission()==0);
}
```


## setWakeupButton()

**構文:**

<mark>void setWakeupButton(uint8_t button){</mark>

**説明:**

スリープ復帰信号ポートを設定します

**定義:**

```arduino
void setWakeupButton(uint8_t button) {
	_wakeupPin = button;
}
```

## reset()

**構文:**

<mark>void reset()</mark>

**説明:**

CPUをリセットします

**定義:**

```arduino
void POWER::reset() {
	esp_restart();
}
```


## batteryMode()

**構文:**

<mark>bool batteryMode(bool en)</mark>

**説明:**

バッテリーの供給状態を設定します

**定義:**

```arduino
bool batteryMode(bool en){

	uint8_t data;
	Wire.beginTransmission(IP5306_ADDR);
	Wire.write(IP5306_REG_READ1);
	Wire.endTransmission();

	if(Wire.requestFrom(IP5306_ADDR, 1))
	{
		data = Wire.read();

		Wire.beginTransmission(IP5306_ADDR);
		Wire.write(IP5306_REG_READ1);
		if (en) Wire.write(data |  BOOST_ENABLE_BIT);
		else Wire.write(data &(~BOOST_ENABLE_BIT));
		Wire.endTransmission();
		return true;
	}
	return false;
}
```


## deepSleep()

**構文:**

<mark>void deepSleep()</mark>

**説明:**

省エネモードに移行します

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