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

```arduino
#include <M5Stack.h>
// select the input pin for the potentiometer
int ir_recv_pin = 36;
int ir_send_pin = 26;
int last_recv_value = 0;
int cur_recv_value = 0;

void setup() {
  M5.begin();
  pinMode(ir_recv_pin, INPUT);
  pinMode(ir_send_pin, OUTPUT);
  //send infrared light
  //now, you can see the infrared light through mobile phone camera
  digitalWrite(ir_send_pin, 1);
  M5.Lcd.setTextSize(2);
  M5.Lcd.setCursor(0, 0);
  M5.Lcd.print("Test for IR receiver: ");
}

void loop() {
  //now, once you press the button on a remote controller to send infrared light
  //the screen will display "detected!"
  cur_recv_value = digitalRead(ir_recv_pin);
  if(last_recv_value != cur_recv_value){
    M5.Lcd.setCursor(0, 25);
    M5.Lcd.fillRect(0, 25, 150, 25, BLACK);
    if(cur_recv_value == 0){//0: detected 1: not detected
      M5.Lcd.print("detected!");
    }
    last_recv_value = cur_recv_value;
  }
  delay(100);
}
```

Click [here](https://github.com/m5stack/M5-ProductExampleCodes/tree/master/Unit/IR/Arduino)for `ir_dectect.ino` example.

## Schematic

<img src="assets/img/product_pics/unit/ir_sch.JPG">

### PinMap

<table>
 <tr><td>M5Core(GROVE B)</td><td>GPIO36</td><td>GPIO26</td><td>5V</td><td>GND</td></tr>
 <tr><td>IR Unit</td><td>Receiver Pin</td><td>Transmitter Pin</td><td>5V</td><td>GND</td></tr>
</table>