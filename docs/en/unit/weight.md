# WEIGHT {docsify-ignore-all}

<img src="assets/img/product_pics/unit/unit_weight_01.png" width="30%" height="30%"> <img src="assets/img/product_pics/unit/unit_weight_grove_b.png" width="30%" height="30%">

***

:memo:**[Description](#Description)**&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;:octocat:**[Example](#Example)**&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;:electric_plug:**[原理图](#原理图)**&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;🛒**[购买链接](https://item.taobao.com/item.htm?spm=a1z10.3-c.w4002-1172588106.37.3a93425e5PQbBs&id=580131730176)**

## Description

**<mark>WEIGHT</mark>** is a metering unit that integrates an ADC chip dedicated to the scale design.

* Because the Unit is connected to the GROVE port (the GRVOE port is a 5V supply voltage), the positive supply voltage is +5V for the HX711 in Unit. Output voltage range is 0 ~ 5mV. The greater the applied pressure, the greater the voltage value of the corresponding output.

* HX711 has two input channels A, B. Compared to channel B, Channel A has programmable signal amplification. Channel A is used in the circuit design of this Unit, so this unit has programmable amplification.

The unit is connected to the pressure sensor at one end and the M5Core is connected to the other end through the GROVE line.

<img src="assets/img/product_pics/unit/unit_weight_04.png">

<img src="assets/img/product_pics/unit/unit_weight_03.png">

## Feature

- Programmable magnification: 32, 64, 128
- ADC accuracy inside the HX711: 24 bits
- Output voltage range: 0 ~ 5mV
-  GROVE interface, support [UiFlow](http://flow.m5stack.com) and [Arduino](http://www.arduino.cc)
-  Two Lego installation holes

## Application

-  Micro weight meter
-  Kitchen Scale

## Related Link

- **[Offical Video](https://www.youtube.com/channel/UCozgFVglWYQXbvTmGyS739w)**

- **[Forum](http://forum.m5stack.com/)**

-  **Datasheet** - [HX711](http://www.dfrobot.com/image/data/SEN0160/hx711_english.pdf)

## Example

### 1. Arduino IDE

This example uses a 10Kg range sensor. (Unit: gram)

*If you want the complete code, please click [here](https://github.com/m5stack/M5-ProductExampleCodes/tree/master/Unit/WEIGHT/Arduino/weight)。*

```arduino
/*
  This Unit connects to GRVOE B on M5Core.
*/

#include <M5Stack.h>
#include "hx711.h"

HX711 scale(36, 26);// GROVE B

void setup() {
  M5.begin();
  M5.Lcd.clear(BLACK);
  M5.Lcd.setTextSize(2);
  M5.Lcd.setTextColor(YELLOW);
  M5.Lcd.setCursor(50, 10);
  M5.Lcd.print("UNIT_WEIGHT EXAMPLE\n");
  M5.Lcd.setCursor(15, 50);
  M5.Lcd.print("Connect Unit to GROVE B");
  Serial.begin(115200);

  scale.setOffset(125184);
  scale.setScale(67.4);

  M5.Lcd.setCursor(0, 90);
  M5.Lcd.print("The weight: ");
}

void loop(){
  // Serial.println(scale.averageValue());
  float weight;
  weight = ((float)((int)((scale.getGram()+0.005)*100)))/100;
  // sprintf(&weight, "%0.2f", scale.getGram());
  Serial.print("The weight: ");
  Serial.print(weight);
  M5.Lcd.fillRect(150, 90, 100, 20, BLACK);
  M5.Lcd.setCursor(150, 90);
  M5.Lcd.print(weight);
  Serial.println(" g");
  delay(100);
}
```

### 2. UIFlow

After each download of the program with nothing on the electronic scale, you need to press the button A for calibration. Then put the object to be measured and the weight of the object will be displayed on the screen. (Unit: gram)

*If you want the complete code, please click [here](https://github.com/m5stack/M5-ProductExampleCodes/tree/master/Unit/WEIGHT/UIFlow)。*

<img src="assets/img/product_pics/unit/unit_example/WEIGHT/example_unit_weight_01.png">

## Schematic

<img src="assets/img/product_pics/unit/weight_sch.png">

### Pinmap

**If WEIGHT was connected to GROVE A**

<table>
 <tr><td>M5Core(GROVE A)</td><td>GPIO22</td><td>GPIO21</td><td>5V</td><td>GND</td></tr>
 <tr><td>WEIGHT Unit</td><td>DATA Pin (DAT)</td><td>CLOCK Pin (CLK)</td><td>5V</td><td>GND</td></tr>
</table>

**If WEIGHT was connected to GROVE B**

<table>
<tr><td>M5Core(GROVE B)</td><td>GPIO36</td><td>GPIO26</td><td>5V</td><td>GND</td></tr>
 <tr><td>WEIGHT Unit</td><td>DATA Pin (DAT)</td><td>CLOCK Pin (CLK)</td><td>5V</td><td>GND</td></tr>
</table>

**If WEIGHT was connected to GROVE C**

<table>
<tr><td>M5Core(GROVE C)</td><td>GPIO16</td><td>GPIO17</td><td>5V</td><td>GND</td></tr>
 <tr><td>WEIGHT Unit</td><td>DATA Pin (DAT)</td><td>CLOCK Pin (CLK)</td><td>5V</td><td>GND</td></tr>
</table>