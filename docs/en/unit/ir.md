# Unit IR {docsify-ignore-all}

<img src="assets/img/product_pics/unit/M5GO_Unit_ir.png" width="30%" height="30%"><img src="assets/img/product_pics/unit/unit_ir_grove_b.png" width="30%" height="30%">

***

:memo:**[Description](#Description)**&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;:octocat:**[Example](#Example)**&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; :electric_plug:**[Schematic](#Schematic)** &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;🛒**[Purchase](https://www.aliexpress.com/store/product/M5Stack-Official-Mini-Infrared-Unit-IR-Remote-Reflective-Sensor-with-Receiver-and-Transmitter-GPIO-GROVE-Connector/3226069_32933215001.html?spm=a2g1y.12024536.productList_5885013.subject_20)**

## Description

**<mark>IR</mark>** is an infrared photoelectric pair unit that integrates a pair of infrared transmitting and receiving tubes.

After connecting with the M5Core, you can control whether to emit infrared light through the M5Core. The other receiving tube can detect whether infrared light is sent from other devices to the unit.

Because the GROVE interface has two signal pins, one controls infrared transmission and one controls infrared reception, so if you want to send infrared light, you need the OUTPUT pin (GPIO26) to output high level.

## Feature

-  A pair of infrared transmitting and receiving tube
-  Detects the distance 2 ~ 5cm
-  GROVE interface, support [UIFlow](http://flow.m5stack.com) and [Arduino](http://www.arduino.cc)
-  Two Lego installation holes

## Related Link

- **[Offical Video](https://www.youtube.com/channel/UCozgFVglWYQXbvTmGyS739w)**

- **[Forum](http://forum.m5stack.com/)**

## Example

### 1. Arduino IDE

*The below code is incomplete(just for usage). If you want the complete code, please click [here](https://github.com/m5stack/M5-ProductExampleCodes/tree/master/Unit/IR/Arduino).*

```arduino
#include <M5Stack.h>

// declaration
int cur_recv_value = 0;

// initialization
M5.begin();
pinMode(ir_recv_pin, INPUT);// receiver pin
pinMode(ir_send_pin, OUTPUT);// transmitter pin
digitalWrite(ir_send_pin, 1);// send infrared light

// read data
cur_recv_value = digitalRead(ir_recv_pin);// read the status of receiver
```

### 2. UIFlow

*If you want the complete code, please click [here](https://github.com/m5stack/M5-ProductExampleCodes/tree/master/Unit/IR/UIFlow).*

<img src="assets/img/product_pics/unit/unit_example/IR/example_unit_ir_03.png">

## Schematic

<img src="assets/img/product_pics/unit/ir_sch.JPG">

### PinMap

<table>
 <tr><td>M5Core(GROVE B)</td><td>GPIO36</td><td>GPIO26</td><td>5V</td><td>GND</td></tr>
 <tr><td>IR Unit</td><td>Receiver Pin</td><td>Transmitter Pin</td><td>5V</td><td>GND</td></tr>
</table>