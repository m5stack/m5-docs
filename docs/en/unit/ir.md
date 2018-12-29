# Unit IR

<img src="assets/img/product_pics/unit/M5GO_Unit_ir.png" width="30%" height="30%">

***

:memo:**[Description](#Description)**&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;:octocat:**[Example](#Example)**&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; :electric_plug:**[Schematic](#Schematic)** &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;🛒**[Purchase](https://www.aliexpress.com/store/product/M5Stack-Official-Mini-Infrared-Unit-IR-Remote-Reflective-Sensor-with-Receiver-and-Transmitter-GPIO-GROVE-Connector/3226069_32933215001.html?spm=a2g1y.12024536.productList_5885013.subject_20)**

## Description

The Unit IR is a IR infrared obstacle avoidance sensor. It can
be widely used in robot obstacle avoidance, obstacle avoidance car, line
count, and black and white line tracking and so on.

It has a pair of infrared transmitting and receiving tube, tube infrared
emit a certain frequency, when detecting direction meet with obstacles
(reflecting surface), reflected infrared receiving tube, after the
comparator circuit processing, green indicator will light up, at the
same time signal output interface to output digital signal.

## Feature

-  A pair of infrared transmitting and receiving tube
-  Detects the distance 2 ~ 5cm
-  GROVE interface, support [UiFlow](http://flow.m5stack.com) and [Arduino](http://www.arduino.cc)
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

<img src="assets/img/product_pics/unit/unit_example/IR/example_unit_ir_01.png"  width="30%" height="30%"> <img src="assets/img/product_pics/unit/unit_example/IR/example_unit_ir_02.png"  width="50%" height="50%">

## Schematic

<img src="assets/img/product_pics/unit/ir_sch.JPG">

### PinMap

<table>
 <tr><td>M5Core(GROVE B)</td><td>GPIO36</td><td>GPIO26</td><td>5V</td><td>GND</td></tr>
 <tr><td>IR Unit</td><td>Receiver Pin</td><td>Transmitter Pin</td><td>5V</td><td>GND</td></tr>
</table>