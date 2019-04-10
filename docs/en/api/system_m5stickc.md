# System (M5StickC)

##  begin()

**Syntax:**

<mark>void begin(bool LCDEnable=true, bool PowerEnable=true, bool SerialEnable=true);</mark>

**Description: Clear the serial port buffer, set the serial port baud rate to 115200; initialize the LCD; initialize the power management chip AXP192.**

**Definition:**

```arduino
void M5StickC::begin(bool LCDEnable, bool PowerEnable, bool SerialEnable) {

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

**Example:**

```arduino
#include <M5StickC.h>

void setup() {
  M5.begin();
}
void loop() {}
```

## GetBm8563Time()

*This is the API function of the BM8563 chip. The chip communicates with the ESP32 via I2C, and the I2C address is 0x51.*

**Syntax:**

<mark>void GetBm8563Time(void);</mark>

**Description: Get the current hour, minute, and second value and save it to M5.Rtc.Hour, M5.Rtc.Minute, M5.Rtc.Second, in ASCII format.**

**Example:：**

```arduino
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
  M5.Lcd.printf("%02d : %02d : %02d\n", M5.Rtc.Hour, M5.Rtc.Minute, M5.Rtc.Second);
  delay(1000);
}
```