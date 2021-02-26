# 系统函数

##  begin()

**函数原型：**

`void begin(bool LCDEnable=true, bool PowerEnable=true, bool SerialEnable=true);`

<!-- `fillScreen(color)` # for micropython -->

**功能：清串口缓冲区，设置串口波特率为 115200；初始化 LCD；初始化电源管理芯片 AXP192。**

**函数实现**

```clike
void M5StickC::begin(bool LCDEnable, bool PowerEnable, bool SerialEnable){

	//! Correct init once
	if (isInited) return;
	else isInited = true;

	//! UART
	if (SerialEnable) {
		Serial.begin(115200);
		Serial.flush();
		delay(50);
		Serial.print("M5StickC initializing...");
	}

    // Power
	if (PowerEnable) {
		Axp.begin();
	}

	// LCD INIT
	if (LCDEnable) {
		Lcd.begin();
	}




	if (SerialEnable) {
		Serial.println("OK");
	}
}
```

**例程**

```clike
#include <M5StickC.h>

void setup() {
  M5.begin();
}
```

## GetBm8563Time()

*这是 BM8563 芯片的 API 函数。该芯片与 ESP32 之间通过 I2C 通信，I2C 地址为 0x51*

**函数原型：**

`void GetBm8563Time(void);`

**功能：获取当前时分秒的值，并保存到 M5.Rtc.Hour，M5.Rtc.Minute，M5.Rtc.Second 中，ASCII 格式。**

**例程：**
```clike
#include <M5StickC.h>

void setup() {
  // put your setup code here, to run once:
  M5.begin();
  M5.Lcd.setRotation(3);
  M5.Lcd.fillScreen(BLACK);

  M5.Lcd.setTextSize(2);
  M5.Lcd.println("rtc test");
}

void loop() {
  // put your main code here, to run repeatedly:
  M5.Rtc.GetBm8563Time();
  M5.Lcd.setCursor(0, 30, 2);
  M5.Lcd.printf("%02d : %02d : %02d\n",M5.Rtc.Hour, M5.Rtc.Minute, M5.Rtc.Second);
  delay(1000);
}
```