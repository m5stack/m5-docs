# Unit CardKB {docsify-ignore-all}

<img src="assets/img/product_pics/unit/unit_cardkb_01.png" width="30%" height="30%"><img src="assets/img/product_pics/unit/unit_cardkb_grove_a.png" width="30%" height="30%">

***

:memo:**[Description](#Description)**&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;:octocat:**[Example](#Example)**&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;🛒**[Purchase](https://pt.aliexpress.com/store/product/M5Stack-Official-CardKB-Mini-Keyboard-Unit-with-MEGA328P-GROVE-Port-I2C-ISP-for-M5Stack-ESP32-Arduino/3226069_32963872643.html?spm=a2g03.12010615.8148356.28.7b686481fhK2em)**&nbsp;&nbsp;&nbsp;:clapper:**[Related Video](#Related-Video)**

## Description

**<mark>CardKB</mark>** is a unit can achieve QWERTY full keyboard. It also can achieve button combination(Sym+Key, Shift+Key, Fn+Key) and output richer key value. This unit communicates with M5Core through GROVE A port(IIC interface), and it's IIC address is 0x5F.

**1. Button combination description:**

* **Single button pressed**, keyborad will output the first key value(letter button will output lower case form). E.g if "Q" was pressed, keyboard will output "q"(lower case).

* **Sym+key**, keyborad will output the second key value. E.g if "Sym" was single pressed, then "Q" was pressed, the keyboard will output "{". If "Sym" was double clicked, then the keyboard will lock this function, all key pressed will output it's second key value.

* **Shift+key**, if a letter button was pressed, it'll output upper case form. E.g if "Shift" was single pressed, then "Q" was pressed, the keyboard will output "Q". If "Shift" was double clicked, then the keyboard will lock this function, all letter key pressed will output it's upper case form.

* **Fn+key(custom function key combination)**, keyborad will output the third key value. You can custom what function the key pressed corresponds.

<img src="assets/img/product_pics/unit/unit_cardkb_03.png">

## Feature

- GROVE interface, IIC communication

- Full keyboard function, multi-key combination

## Include

- 1x CardKB unit
- 1x GROVE Cable

## Application

- Keyboard peripherals for M5Stack Core

## Related Link

- **[Offical Video](https://www.youtube.com/channel/UCozgFVglWYQXbvTmGyS739w)**

- **[Forum](http://forum.m5stack.com/)**

- **[The Firmware of inside MEGA328](https://github.com/m5stack/M5-ProductExampleCodes/tree/master/Unit/CARDKB/firmware_328p/CardKeyBoard)**

## Example

### 1. Arduino IDE

*If you want the example code, please click [here](https://github.com/m5stack/M5-ProductExampleCodes/tree/master/Unit/CARDKB/Arduino)。*

```arduino
#include <Wire.h>
#include <M5Stack.h>

#define CARDKB_ADDR 0x5F

void setup()
{
  M5.begin();
  Serial.begin(115200);
  Wire.begin();
  pinMode(5, INPUT);
  digitalWrite(5, HIGH);
  M5.Lcd.fillScreen(BLACK);
  M5.Lcd.setCursor(1, 10);
  M5.Lcd.setTextColor(YELLOW);
  M5.Lcd.setTextSize(2);
  M5.Lcd.printf("IIC Address: 0x5F\n");
  M5.Lcd.printf(">>");
}
void loop()
{
  Wire.requestFrom(CARDKB_ADDR, 1);
  while (Wire.available())
  {
    char c = Wire.read(); // receive a byte as characterif
    if (c != 0)
    {
      M5.Lcd.printf("%c", c);
      Serial.println(c, HEX);
     // M5.Speaker.beep();
    }
  }
}
```

<img src="assets/img/product_pics/unit/unit_example/CARDKB/example_unit_cardkb_01.png" width="80%" height="80%">

### 2. UIFlow

*If you want the complete code, please click [here](https://github.com/m5stack/M5-ProductExampleCodes/tree/master/Unit/CARDKB/UIFlow)。*

<img src="assets/img/product_pics/unit/unit_example/CARDKB/example_unit_cardkb_02.png">

### PinMap

<table>
 <tr><td>M5Core(GROVE A)</td><td>GPIO22</td><td>GPIO21</td><td>5V</td><td>GND</td></tr>
 <tr><td>CardKB</td><td>SCL</td><td>SDA</td><td>5V</td><td>GND</td></tr>
</table>

## Related Video

- **CardKB Case - 01**

<video width="500" height="315" controls>
    <source src="https://m5stack.oss-cn-shenzhen.aliyuncs.com/video/Blog/Twitch201901/M5stack%20Cardkb.mp4" type="video/mp4">
</video>
