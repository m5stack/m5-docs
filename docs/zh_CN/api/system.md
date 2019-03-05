# 系统函数

##  begin()

**函数原型：**

<mark>void begin(bool LCDEnable=true, bool SDEnable=true, bool SerialEnable=true,bool I2CEnable=false);</mark>

<!-- <mark>fillScreen(color)</mark> # for micropython -->

**功能：清串口缓冲区，设置串口波特率为 115200；初始化 LCD；初始化 SD 卡；初始化 I2C；设置按键 A 是睡眠唤醒按键。**

**函数实现**
```arduino
void M5Stack::begin(bool LCDEnable, bool SDEnable, bool SerialEnable,bool I2CEnable) {

	// Correct init once
	if (isInited) return;
	else isInited = true;

	// UART
	if (SerialEnable) {
		Serial.begin(115200);
		Serial.flush();
		delay(50);
		Serial.print("M5Stack initializing...");
	}

	// LCD INIT
	if (LCDEnable) {
		Lcd.begin();
	}

	// TF Card
	if (SDEnable) {
		SD.begin(TFCARD_CS_PIN, SPI, 40000000);
	}

	// TONE
	// Speaker.begin();

	// Set wakeup button
	Power.setWakeupButton(BUTTON_A_PIN);

	// I2C init
	if(I2CEnable)
	{
		Wire.begin(21, 22);
	}

	if (SerialEnable) {
		Serial.println("OK");
	}
}

void M5Stack::update() {

	//Button update
	BtnA.read();
	BtnB.read();
	BtnC.read();

	//Speaker update
	Speaker.update();
}

```

**例程**
```arduino
#include <M5Stack.h>

void setup() {
  M5.begin();
}
```

##  update()

**函数原型：**

<mark>void update();</mark>

<!-- <mark>fillScreen(color)</mark> # for micropython -->

**功能：读取按键 A, B, C 的状态。**

**函数实现**
```arduino
void M5Stack::update() {

  //Button update
  BtnA.read();
  BtnB.read();
  BtnC.read();

  //Speaker update
  Speaker.update();
}
```

**例程**
```arduino
#include <M5Stack.h>

void setup() {
  M5.begin();
}

void loop() {
  M5.update();
}
```

##  powerOFF()

**函数原型：**

<mark>void powerOFF();</mark>

<!-- <mark>fillScreen(color)</mark> # for micropython -->

**功能：系统进入深度睡眠状态。**

**函数实现**
```arduino
void M5Stack::powerOFF() {

#ifdef M5STACK_FIRE
  // Keep power keep boost on
  setPowerBoostKeepOn(true);
#endif

  // power off the Lcd
  Lcd.setBrightness(0);
  Lcd.sleep();

  // ESP32 into deep sleep
  esp_sleep_enable_ext0_wakeup((gpio_num_t)_wakeupPin , LOW);

  while (digitalRead(_wakeupPin) == LOW) {
    delay(10);
  }
  esp_deep_sleep_start();
}
```

**例程**
```arduino
#include <M5Stack.h>

void setup() {
  M5.begin();
  M5.Lcd.println("This is software power off demo");
  M5.Lcd.println("Press the button A to power off.");
  M5.setWakeupButton(BUTTON_A_PIN);
}

void loop() {
  M5.update();
  if (M5.BtnA.wasPressed()) {
    M5.powerOFF();
  }
}
```