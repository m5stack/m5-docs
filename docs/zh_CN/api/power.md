# Power

## setPowerBoostKeepOn()

**函数原型:**

<mark>bool setPowerBoostKeepOn(bool en);</mark>

**功能:BOOST输出常开功能**

**函数实现:**

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

**函数原型:**

<mark>bool setCharge(bool en);</mark>

**功能:设置充电状态**

**函数实现:**

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

<mark>bool isChargeFull(bool en);</mark>

**功能:确认完全充电**

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

<mark>bool canControl();</mark>

**功能:确认可以使用电源控制器**

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

<mark>bool isCharging(){</mark>

**功能:确认是否正在充电**

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


## setWakeupButton()

**函数原型:**

<mark>void setWakeupButton(uint8_t button){</mark>

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
void POWER::reset() {
	esp_restart();
}
```


## boostMode()

**函数原型:**

<mark>bool boostMode(bool en)</mark>

**功能:设置电池供电状态**

**函数实现:**

```arduino
bool boostMode(bool en){

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