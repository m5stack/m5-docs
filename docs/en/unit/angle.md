# Unit ANGLE {docsify-ignore-all}

<img src="assets/img/product_pics/unit/M5GO_Unit_angle.png" width="30%" height="30%"><img src="assets/img/product_pics/unit/unit_angle_grove_b.png" width="30%" height="30%">

***

:memo:**[Description](#Description)**&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;:octocat:**[Example](#Example)**&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; :electric_plug:**[Schematic](#Schematic)** &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;🛒**[Purchase](https://www.aliexpress.com/store/product/M5Stack-Official-Mini-Angle-Unit-Potentiometer-Inside-Resistance-Adjustable-GPIO-GROVE-Co-n-nec-to-r/3226069_32931834705.html?spm=a2g1y.12024536.productList_5885013.subject_18)**

## Description

**<mark>ANGLE</mark>** is a Unit with the highest resistance of **10K** potentiometer. The potentiometer is a resistance element having three terminals and the resistance value can be adjusted by the knob rotation. Each time the potentiometer is rotated to a different position, the Unit outputs a different voltage value named Uo. It can be used to adjust motor speed, LED brightness and more. The specific analysis is shown in the figure below.

<img src="assets/img/product_pics/unit/angle/unit_angle_03.png">

The Unit's Grove interface is black, indicating an analog interface that needs to be connected to the M5Core's GROVE B interface.

## Feature

- Output voltage range: 0 ~ 2500mV
- GROVE interface, support [UIFlow](http://flow.m5stack.com) and [Arduino](http://www.arduino.cc)
- Two Lego installation holes

## Include

- 1x ANGLE Unit
- 1x Grove Cable

## Related Link

- **[Offical Video](https://www.youtube.com/channel/UCozgFVglWYQXbvTmGyS739w)**

- **[Forum](http://forum.m5stack.com/)**

## Example

### 1. Arduino IDE

*The below code is incomplete(just for usage). If you want the complete code, please click [here](https://github.com/m5stack/M5-ProductExampleCodes/tree/master/Unit/ANGLE/Arduino).*

Example function: Display the digital quantity corresponding to the Unit output voltage value on the screen, the range is 0 ~ 4095

```arduino
#include <M5Stack.h>
// select the input pin for the potentiometer
int sensorPin = 36;
// last variable to store the value coming from the sensor
int last_sensorValue = 0;
// current variable to store the value coming from the sensor
int cur_sensorValue = 0;

void setup() {
  M5.begin();
  pinMode(sensorPin, INPUT);
  M5.Lcd.setTextSize(2);
  M5.Lcd.setCursor(0, 0);
  M5.Lcd.print("the value of ANGLE: ");
}

void loop() {
  // read the value from the sensor:
  cur_sensorValue = analogRead(sensorPin);
  M5.Lcd.setCursor(0, 25);
  if(abs(cur_sensorValue - last_sensorValue) > 10){//debaunce
    M5.Lcd.fillRect(0, 25, 100, 25, BLACK);
    M5.Lcd.print(cur_sensorValue);
    last_sensorValue = cur_sensorValue;
  }
  delay(50);
}
```

<img src="assets/img/product_pics/unit/unit_example/ANGLE/example_unit_angle_04.png">

### 2. UIFlow

*If you want the complete code, please click [here](https://github.com/m5stack/M5-ProductExampleCodes/tree/master/Unit/ANGLE/UIFlow).*

<img src="assets/img/product_pics/unit/unit_example/ANGLE/example_unit_angle_03.png">

## Schematic

<img src="assets/img/product_pics/unit/angle_sch.png">

### PinMap

<table>
 <tr><td>M5Core(GROVE B)</td><td>GPIO36</td><td>GPIO26</td><td>5V</td><td>GND</td></tr>
 <tr><td>ANGLE Unit</td><td>Sensor Pin</td><td> </td><td>5V</td><td>GND</td></tr>
</table>