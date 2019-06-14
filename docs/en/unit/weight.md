# Unit WEIGHT {docsify-ignore-all}

<img src="assets/img/product_pics/unit/unit_weight_01.png" width="30%" height="30%"> <img src="assets/img/product_pics/unit/unit_weight_grove_b.png" width="30%" height="30%">

***

:memo:**[Description](#Description)**&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;:octocat:**[Example](#Example)**&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;:electric_plug:**[Schematic](#Schematic)**&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;🛒**[Purchase](https://item.taobao.com/item.htm?spm=a1z10.3-c.w4002-1172588106.37.3a93425e5PQbBs&id=580131730176)**

## Description

**WEIGHT** intergrates an 24 bits A/D chip **HX711** that is specifically designed for electronic weighing device.

The input multiplexer selects either Channel A or B differential input to the low-noise programmable gain amplifier (PGA). Channel A can be programmed with a gain of 128 or 64, corresponding to a full-scale differential input
voltage of ±20mV or ±40mV respectively, when a 5V supply is connected to AVDD analog power supply pin. Channel B has a fixed gain of 32. There is no programming needed for the
internal registers. All controls to the HX711 are
through the pins.

In the test, we have this Unit channel A to connect a pressure sensor. Then use M5Core screen to display the weight data.

<img src="assets/img/product_pics/unit/unit_weight_04.png">

<img src="assets/img/product_pics/unit/unit_weight_03.png">

## Product Features

- Two selectable differential input channels
- On-chip active low noise PGA with selectable gain
of 32, 64 and 128
- On-chip power supply regulator for load-cell and
ADC analog power supply
- On-chip oscillator requiring no external
component with optional external crystal
- On-chip power-on-reset
- Simple digital control and serial interface:
pin-driven controls, no programming needed
- Selectable 10SPS or 80SPS output data rate
- Simultaneous 50 and 60Hz supply rejection
- Current consumption including on-chip analog
power supply regulator:
 normal operation < 1.5mA, power down < 1uA
- Operation supply voltage range: 2.6 ~ 5.5V
- Operation temperature range: -40 ~ +85℃
- 16 pin SOP-16 package
- Program Platform: Arduino, UIFlow(Blockly, Python)
- Two Lego-compatible holes

## Include

- 1x WEIGHT Unit
- 1x Grove Cable

## Application

-  Micro weight meter
-  Kitchen Scale

## Related Link

- **[Offical Video](https://www.youtube.com/channel/UCozgFVglWYQXbvTmGyS739w)**

- **[Forum](http://forum.m5stack.com/)**

-  **Datasheet** - [HX711](http://www.dfrobot.com/image/data/SEN0160/hx711_english.pdf)


## EasyLoader

<img src="https://m5stack.oss-cn-shenzhen.aliyuncs.com/image/EasyLoader_logo.png" width="100px" style="margin-top:20px">

<a href="https://m5stack.oss-cn-shenzhen.aliyuncs.com/EasyLoader/Unit/EasyLoader_WEIGHT.exe"><button type="button" class="btn btn-primary">click to download EasyLoader</button></a>

>1.EasyLoader is a simple and fast program burner, and each product page has a product-related case program for EasyLoader.

>2.After downloading the software, double-click to run the application, connect the M5 device to the computer via the data cable, select the port parameters, and click **"Burn"** to start burning.

!>3.The CP210X (USB driver) needs to be installed before the EasyLoader is burned. [Click here to view the driver installation tutorial](en/related_documents/establish_serial_connection)

## Example

### 1. Arduino IDE

We used a pressure sensor(10kg) in this experiment. (Unit: gram)

*To get complete code, please click [here](https://github.com/m5stack/M5-ProductExampleCodes/tree/master/Unit/WEIGHT/Arduino/weight)。*

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

*To get complete code, please click [here](https://github.com/m5stack/M5-ProductExampleCodes/tree/master/Unit/WEIGHT/UIFlow)。*

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