# システム

##  begin()

**説明：**

シリアルポートバッファクリア、ボーレート設定:115200、LCD初期化、電源管理チップAXP192の初期化を行います。  

**構文：**

<mark>void begin(bool LCDEnable=true, bool PowerEnable=true, bool SerialEnable=true);</mark>

**定義：**

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

**使用例：**

```arduino
#include <M5StickC.h>

void setup() {
  M5.begin();
}
void loop() {}
```

## GetBm8563Time()

*BM8563はRTC機能を実現します。I2CでESP32と通信します。I2Cアドレスは 0x51 です。*

**説明：**

現在の時 / 分 / 秒の値を取得し、ASCII形式で Rtc.Hour / Rtc.Minute / Rtc.Second に保存します。  

**構文：**

<mark>void GetBm8563Time(void);</mark>

**使用例：**

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