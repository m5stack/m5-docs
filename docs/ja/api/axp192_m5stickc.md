# AXP192

*AXP192は高度な電源管理ICです。*

## begin()

**説明**

AXP192を初期化します。  

**構文：**

<mark>void begin(void);</mark>

**使用例：**

```arduino
#include <M5StickC.h>

void setup() {
  M5.begin(); //By default, "M5.begin()" will initialize AXP192 chip
}
void loop() {}
```

## ScreenBreath()

**説明：**

AXP192のLDO3出力電圧を制御します。  

**構文：**

<mark>void ScreenBreath(uint8_t brightness);</mark>

**パラメータ：**

| 引数 | 説明 |
| --- | --- |
| brightness | TFTバックライトの輝度 ( 範囲： 7 ~ 15 ) |

**使用例：**

```arduino
#include <M5StickC.h>

uint8_t i = 7;

void setup() {
  M5.begin(); //By default, "M5.begin()" will initialize AXP192 chip
  M5.Lcd.printf("Hello, M5Stack!!");
}
void loop() {
  M5.Axp.ScreenBreath(i++);
  if (i > 15) i = 7;
  delay(1000);
}
```

## GetVbatData()

**説明：**

電池電圧を取得します。  

**構文：**

<mark>uint16_t GetVbatData(void);</mark>

**使用例：**

```arduino
#include <M5StickC.h>

double vbat = 0.0;

void setup() {
  M5.begin(); //By default, "M5.begin()" will initialize AXP192 chip
  M5.Lcd.fillScreen(BLACK);
}

void loop() {
  vbat = M5.Axp.GetVbatData() * 1.1 / 1000;
  M5.Lcd.setCursor(0, 0, 1);
  M5.Lcd.printf("vbat:%.3fV\r\n", vbat);
  delay(500);
}
```

## GetIchargeData()

##説明：**

電池の充電電流を取得します。  

**構文：**

<mark>uint16_t GetIchargeData(void);</mark>

**使用例：**

```arduino
#include <M5StickC.h>

int charge;

void setup() {
  M5.begin(); //By default, "M5.begin()" will initialize AXP192 chip
  M5.Lcd.fillScreen(BLACK);
}

void loop() {
  charge = M5.Axp.GetIchargeData() / 2;
  M5.Lcd.setCursor(0, 0, 1);
  M5.Lcd.printf("icharge:%dmA\r\n", charge);
  delay(500);
}
```