# System

## begin()

**Syntax:**

```arudino
void begin(bool LCDEnable=true, bool SDEnable=true, bool SerialEnable=true);
```

**Description:**

This function sets enable/disable LCD, TF Card and Serial port.

**Definition:**

```arduino
void M5Stack::begin(bool LCDEnable, bool SDEnable, bool SerialEnable) {
  if (isInited) return;
  else isInited = true;
  if (SerialEnable) {
    Serial.begin(115200);
    Serial.flush();
    delay(50);
    Serial.print("M5Stack initializing...");
  }
  if (LCDEnable) {
    Lcd.begin();
  }
  if (SDEnable) {
    SD.begin(TFCARD_CS_PIN, SPI, 40000000);
  }
  setWakeupButton(BUTTON_A_PIN);
}
```

**Example:**

```arduino
#include <M5Stack.h>

void setup() {
  M5.begin();
}
```

## update()

**Syntax:**

```arduino
void update();
```

**Description:**

This function reads The State of Button A and B and C.

**Definition:**

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

**Example:**

```arduino
#include <M5Stack.h>

void setup() {
  M5.begin();
}

void loop() {
  M5.update();
}
```

## powerOFF()

**Syntax:**

```arduino
void powerOFF();
```

**Description:**

This function turns off the power of M5.

**Definition:**

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

**Example:**

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