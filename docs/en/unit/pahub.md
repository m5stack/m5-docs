# Unit PaHUB {docsify-ignore-all}

<img src="assets/img/product_pics/unit/pahub/pahub_p1.png" width="30%" height="30%"><img src="assets/img/product_pics/unit/pahub/pahub_p3.png" width="30%" height="30%"><img src="assets/img/product_pics/unit/pahub/pahub_grove_a.png" width="30%" height="30%">

***

:memo:**[Description](#Description)**&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;:electric_plug:**[Schematic](#Schematic)** &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;🛒**[Purchase](https://www.aliexpress.com/item/New-Arrival-M5Stack-Official-I2C-Hub-1-to-6-Expansion-Grove-I2C-Interface-for-Arduino-Blockly/32998974179.html?gps-id=pcStoreJustForYou&scm=1007.23125.122752.0&scm_id=1007.23125.122752.0&scm-url=1007.23125.122752.0&pvid=0cd77ea5-52b2-4aa7-856b-0dd4e43ee0d1&spm=a2g1y.12024536.smartJustForYou_39076158.12)**

<!-- :memo:**[Description](#Description)**&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;:octocat:**[Example](#Example)**&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; :electric_plug:**[Schematic](#Schematic)** &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;🛒**[Purchase](https://www.aliexpress.com/item/New-Arrival-M5Stack-Official-I2C-Hub-1-to-6-Expansion-Grove-I2C-Interface-for-Arduino-Blockly/32998974179.html?gps-id=pcStoreJustForYou&scm=1007.23125.122752.0&scm_id=1007.23125.122752.0&scm-url=1007.23125.122752.0&pvid=0cd77ea5-52b2-4aa7-856b-0dd4e43ee0d1&spm=a2g1y.12024536.smartJustForYou_39076158.12)** -->

## Description

**PaHUB**, is a expander for I2C GROVE PORTA(red port on M5Core). 1-to-6. If you want connect mutiple I2C slave devices and some of them may sharing the same address, this unit can resolve I2C address conflicts.

At the Unit PaHUB's heart is an **TCA9548A** produced by TI. The TCA9548A device has eight bidirectional translating switches that can be controlled through the I2C bus. The SCL/SDA upstream pair fans out to downstream pairs, or channels. Any individual SCn/SDn channel or combination of channels can beselected, determined by the contents of the
programmable control register.

Technically this Unit allows mutiple levels of nesting, for example you can wire PaHUBs to the root PaHUB to get more seats for your I2C slave devices, if you have 7 of them you can have up to 36 I2C GROVE ports, which makes it easier to get your project more organized.

The I2C address of this unit is 0x77 (changable by resistors).

*Notice: Please pay attention to the channel order while programing*

<img src="assets/img/product_pics/unit/pahub/pahub_p2.png">

## Product Features

- I2C GROVE PORTA Expander
- Two Lego-compatible holes
- Nested allowed
- 1-To-6

## Include

- 1x PaHUB Unit
- 1x Grove Cable

<!-- ## Application

- Fruit piano

<img src="assets/img/product_pics/unit/M5GO_Unit_makey_05.png" width="40%" height="40%"> -->

## Driver Protocol

<!-- - Driver firmware - -->

<!-- - Test code - -->
- protovol type - I2C
- address - 0x77

## Related Link

- **[Offical Video](https://www.youtube.com/channel/UCozgFVglWYQXbvTmGyS739w)**

- **[Forum](http://forum.m5stack.com/)**

- Datasheet - **[TCA9548A](http://www.ti.com/lit/ds/symlink/tca9548a.pdf)**

<!-- ## Example

### 1. Arduino IDE

*The code below is incomplete. To get complete code, please click [here](https://github.com/m5stack/M5-ProductExampleCodes/tree/master/Unit/Makey_NewVersion/Arduino/Makey_new_version).*

```arduino
#include <M5Stack.h>
#include <Wire.h>

// initialization
M5.begin();
pinMode(21, INPUT); pinMode(22, INPUT);
Wire.begin();// Init I2C

// read data
Wire.requestFrom(MAKEY_ADDR, 2);
while (Wire.available()) {
  Key1 = Wire.read();//read data from MAKEY
  Key2 = Wire.read();//read data from MAKEY
  tone_key = (Key2<<8) | Key1;// the following picture will explain "tone_key"
}
```

<img src="assets/img/product_pics/unit/unit_example/MAKEY/tone_key_pitch_zh_CN.png">

<img src="assets/img/product_pics/unit/M5GO_Unit_makey_04.png" width="30%" height="30%">

### 2. UIFlow

*To get complete code, please click [here](https://github.com/m5stack/M5-ProductExampleCodes/tree/master/Unit/Makey_NewVersion/UIFlow).*

<img src="assets/img/product_pics/unit/unit_example/MAKEY/example_unit_makey_02.png"> -->

## Schematic

<img src="assets/img/product_pics/unit/pahub/sch_pahub.png">

### PinMap

<table>
 <tr><td>M5Core(GROVE A)</td><td>GPIO22</td><td>GPIO21</td><td>5V</td><td>GND</td></tr>
 <tr><td>PaHUB Unit</td><td>SCL</td><td>SDA</td><td>5V</td><td>GND</td></tr>
</table>

<!--
<img src="assets/img/product_pics/unit/M5GO_Unit_makey_03.png" width="30%" height="30%"> -->