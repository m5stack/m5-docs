# ANGLE {docsify-ignore-all}

<div class="badge badge-pill badge-primary product_sku_tag">SKU:U005</div>

<img src="assets/img/product_pics/unit/M5GO_Unit_angle.png" width="30%" height="30%">


## Description

**ANGLE** is a rotary switch Unit,simply having a **10K** potentiometer inside. This unit can be used for Continuous singal dialing control, such as volume, brightness, or motor speed.

A potentiometer is a manually adjustable, variable resistor with three terminals. Two terminals are connected to a resistive element, the third terminal is connected to an adjustable wiper. The position of the wiper determines the output voltage.
The out voltage is captured and converted by AD on ESP32 on portB.


*In M5Stack product system, Normally the Grove color indicates the type of communications.*
- Black: Single BUS (AD ,DA ,GPIO)
- Red: I2C
- Blue：Uart
- White： Others(depends)


<img src="assets/img/product_pics/unit/angle/unit_angle_03.png">

The Unit's Grove interface is black, specify it is an analog interface that should be connected to the M5Core's GROVE B interface.

## Product Features

- Output voltage range: 0 ~ 2500mV
- GROVE interface, support [UIFlow](http://flow.m5stack.com) and [Arduino](http://www.arduino.cc)
- Two Lego-compatible holes
- Product Size：32.2mm x 24.2mm x 21.7mm
- Product weight：5.6g

## Include

- 1x ANGLE Unit
- 1x Grove Cable

## Related Link

- **[Offical Video](https://www.youtube.com/channel/UCozgFVglWYQXbvTmGyS739w)**

- **[Forum](http://forum.m5stack.com/)**


## EasyLoader

>EasyLoader is a concise and fast program writer, which has a built-in case program related to the product. It can be burned to the main control by simple steps to perform a series of function verification. Please install the corresponding driver according to the device type. M5Core host [Please click here to view the CP210X driver installation tutorial](en/arduino/arduino_development), M5StickC/V/T/ATOM series can be used without driver)

<div class="easyloader-box">
    <div style="background-color:white;">
        <div><img src="https://m5stack.oss-cn-shenzhen.aliyuncs.com/image/easyloader_intro.jpg"></div>
        <div class="easyloader-btn">
            <a href="https://m5stack.oss-cn-shenzhen.aliyuncs.com/EasyLoader/Windows/UNIT/For%20M5Core/EasyLoader_Angle_UNIT_With_M5Core.exe">Windows</a>
            <!-- <a>Linux</a>
            <a>MacOS</a> -->
        </div>
    </div>
    <div>
        <video id="example_video" controls>
            <source src="https://m5stack.oss-cn-shenzhen.aliyuncs.com/video/Product_example_video/Unit/Angle_UNIT.mp4" type="video/mp4">
        </video>
        <div class="easyloader-mask">
        <a>
            <svg id="play-btn" t="1583228776634" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="4152" width="75" height="75"><path d="M512 0C229.216 0 0 229.216 0 512s229.216 512 512 512 512-229.216 512-512S794.784 0 512 0z m0 928C282.24 928 96 741.76 96 512S282.24 96 512 96s416 186.24 416 416-186.24 416-416 416zM384 288l384 224-384 224z" p-id="4153" fill="#007aff"></path></svg></a>
            <p>Description:</p>
            <p>Display knob analog value data.</p>
        </div>
    </div>
</div>

## Example

### 1. Arduino IDE

*The code below is incomplete. To get the complete code, please click [here](https://github.com/m5stack/M5-ProductExampleCodes/tree/master/Unit/ANGLE/Arduino).*

Example function: Display the digital value converted from the Unit output voltage (0 ~ 4095)

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


<script>

   var purchase_link = 'https://m5stack.com/collections/m5-unit/products/angle-unit';

   anchor_search(purchase_link);
   scrollFunc();

</script>