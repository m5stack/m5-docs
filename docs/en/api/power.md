# Power

## setPowerBoostKeepOn()

**Syntax:**

<mark>bool setPowerBoostKeepOn(bool en);</mark>

**Description:**

This function sets enable/disable power mode.

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
		else Wire.write(data &(~BOOST_OUT_BIT));  
		Wire.endTransmission();
		return true;
	}
	return false;
}
#endif
```

## setCharge()

**Syntax:**

<mark>bool setCharge(bool en);</mark>

**Description:**

This function sets enable/disable charge mode.

**Definition:**

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

**Syntax:**

<mark>bool isChargeFull(bool en);</mark>

**Description:**

This function check battery level.

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

<mark>bool canControl();</mark>

**Description:**

This function checks the existence of the battery controller

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

<mark>bool isCharging(){</mark>

**Description:**

This function checks the state of the charge

**Definition:**

```arduino
bool canControl(){
	uint8_t data;
	Wire.beginTransmission(IP5306_ADDR);
	Wire.write(IP5306_REG_READ0);
	return(Wire.endTransmission()==0);
}
```


## setWakeupButton()

**Syntax:**

<mark>void setWakeupButton(uint8_t button){</mark>

**Description:**

This function set the port to exit sleep

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

This function reset the CPU.

**Definition:**

```arduino
void POWER::reset() {
	esp_restart();
}
```


## batteryMode()

**Syntax:**

<mark>bool batteryMode(bool en)</mark>

**Description:**

This function controls battery supply

**Definition:**

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

**Syntax:**

<mark>void deepSleep()</mark>

**Description:**

This function shifts to deep sleep mode

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