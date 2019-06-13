# Unit IR {docsify-ignore-all}

<img src="assets/img/product_pics/unit/M5GO_Unit_ir.png" width="30%" height="30%"><img src="assets/img/product_pics/unit/unit_ir_grove_b.png" width="30%" height="30%">

***

:memo:**[Description](#Description)**&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;:octocat:**[Example](#Example)**&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; :electric_plug:**[Schematic](#Schematic)** &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;🛒**[Purchase](https://www.aliexpress.com/store/product/M5Stack-Official-Mini-Infrared-Unit-IR-Remote-Reflective-Sensor-with-Receiver-and-Transmitter-GPIO-GROVE-Connector/3226069_32933215001.html?spm=a2g1y.12024536.productList_5885013.subject_20)**

## Description

**IR** is an pair of infrared photoelectric. Also from M5Go Kit, Contains 1x infrared emitter and 1x receiver.

IR remote control is widely used in consumer electronics,it can be used to operate devices such as a television set, DVD player, or other home appliance, from a short distance. Since this unit comes with emitter and receiver, you can practice not only onIR encode but also on IR decode.

## Product Features

- 1x infrared emitter
- 1x infrared receiver
- Distance range: < 5m
- Software Development Platform: Arduino, UIFlow(Blockly,Python)
- Two Lego-compatible holes

## Include

- 1x IR Unit
- 1x Grove Cable

## Related Link

- **[Offical Video](https://www.youtube.com/channel/UCozgFVglWYQXbvTmGyS739w)**

- **[Forum](http://forum.m5stack.com/)**

## EasyLoader

<img src="https://m5stack.oss-cn-shenzhen.aliyuncs.com/image/EasyLoader_logo.png" width="100px" style="margin-top:20px">

<a href="https://m5stack.oss-cn-shenzhen.aliyuncs.com/EasyLoader/Unit/EasyLoader_IR.exe"><button type="button" class="btn btn-primary">click to download EasyLoader</button></a>

>1.EasyLoader is a simple and fast program burner, and each product page has a product-related case program for EasyLoader.

>2.After downloading the software, double-click to run the application, connect the M5 device to the computer via the data cable, select the port parameters, and click **"Burn"** to start burning.

!>3.The CP210X (USB driver) needs to be installed before the EasyLoader is burned. [Click here to view the driver installation tutorial](en/related_documents/establish_serial_connection)

## Example

### 1. Arduino IDE

*The code below is incomplete. TO get the complete code, please click [here](https://github.com/m5stack/M5-ProductExampleCodes/tree/master/Unit/IR/Arduino).*

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

*To get the complete code, please click [here](https://github.com/m5stack/M5-ProductExampleCodes/tree/master/Unit/IR/UIFlow).*

<img src="assets/img/product_pics/unit/unit_example/IR/example_unit_ir_03.png">

## Schematic

<img src="assets/img/product_pics/unit/ir_sch.JPG">

### PinMap

<table>
 <tr><td>M5Core(GROVE B)</td><td>GPIO36</td><td>GPIO26</td><td>5V</td><td>GND</td></tr>
 <tr><td>IR Unit</td><td>Receiver Pin</td><td>Transmitter Pin</td><td>5V</td><td>GND</td></tr>
</table>