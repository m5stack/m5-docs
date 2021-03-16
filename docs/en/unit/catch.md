# Catch Unit

<el-tag effect="plain">SKU:U102</el-tag>

<div class="product_pic"><img src="assets/img/product_pics/unit/catch/catch_01.webp"><img src="assets/img/product_pics/unit/catch/catch_02.webp"><img src="assets/img/product_pics/unit/catch/catch_03.webp"></div>

## Description

**Catch** is a gripper that uses a SG92R servo as a power source. The servo uses a PWM signal to drive the gripper gear to rotate and control the gripper for clamping and releasing operations. The structure adopts a design compatible with Lego 8mm round holes. You can combine it with other Lego components to build creative control structures, such as robotic arms, gripper carts, etc.

?>Because the opening and closing angle of the gripper is `90°`, please control the rotation angle of the driving servo to `0-45°` (PWM: freq: 50Hz, 0°-45°(pulse:0.5ms-1ms) to prevent blocking rotation. The steering gear burned out.

## Product Features

- SG92R steering gear
- PWM signal drive
- Lego hole compatible
- The jaw opening and closing angle is 90°
- Compatible with RoverC
- Support input voltage: 4.2-6V
- Development platform [UIFlow](http://flow.m5stack.com), [MicroPython](http://micropython.org/), [Arduino](http://www.arduino.cc)

## Include

- 1x Catch Unit(Built-in Servo-SG92R)
- 1x HY2.0-4 adapter
- 1x RoverC.Pro Connector

## Application

- Robot gripper
- Steering gear manipulator gripper

## Specification

<table>
   <tr style="font-weight:bold">
      <td>Master control resources</td>
      <td>Parameters</td>
   </tr>
   <tr>
      <td>Servo model</td>
      <td>SG92R</td>
   </tr>
   <tr>
      <td>Drive signal</td>
      <td>PWM: freq: 50Hz, 0°-45°(pulse:0.5ms-1ms)</td>
   </tr>
   <tr>
      <td>Working frequency</td>
      <td>50Hz</td>
   </tr>
   <tr>
      <td>Clamping jaw opening and closing angle</td>
      <td>90°</td>
   </tr>
   <tr>
      <td>Input voltage range</td>
      <td>4.2-6V</td>
   </tr>
   <tr>
      <td>Work dead zone</td>
      <td>10us</td>
   </tr>
   <tr>
      <td>Output torque</td>
      <td>2.5kg/cm at 4.8V</td>
   </tr>
   <tr>
      <td>Output speed</td>
      <td>0.1sec/60° at 4.8V</td>
   </tr>
   <tr>
      <td>Working temperature</td>
      <td>0°C to 55°C</td>
   </tr>
   <tr>
      <td>Net weight</td>
      <td>21.5g</td>
   </tr>
   <tr>
      <td>Gross weight</td>
      <td>50g</td>
   </tr>
   <tr>
      <td>Product size (gripper extension)</td>
      <td>72 x 56 x 37 mm</td>
   </tr>
   <tr>
      <td>Package size</td>
      <td>147 x 90 x 40 mm</td>
   </tr>
   <tr>
      <td>Shell material</td>
      <td>Plastic (PC )</td>
   </tr>
</table>


## Pin mapping

**When the Catch Unit is connected to PortB, the pin mapping is as follows**

<table>
 <tr><td>M5Core(PORT B)</td><td>GPIO26</td><td>5V</td><td>GND</td></tr>
 <tr><td>Catch Unit</td><td>SIGNAL</td><td>5V</td><td>GND</td></tr>
</table>

## Example


?>This case controls the Catch Unit clamping jaws to perform clamping and releasing cycles.

<el-card class="box-card" style="margin-bottom:20px">
   <div slot="header" class="clearfix">
   <span style="font-size: 22px; font-weight: bold;">Arduino</span>
   <i class="el-icon-s-management" style="float: right;"></i>
   </div>
   <div class="box-card-item">
   <a href='https://github.com/m5stack/M5Stack/tree/master/examples/Unit/CATCH'><el-tag>For BASIC/M5GO/FIRE</el-tag></a>
   </div>
</el-card>

```clike

/*
    Description: Control Catch Unit through PWM.
*/

#include <M5Stack.h>

const int servoPin = 26;
int freq = 50;
int ledChannel = 0;
int resolution = 10;
void setup() {
  // put your setup code here, to run once:
  M5.begin();
  M5.Power.begin();
  M5.Lcd.setCursor(100, 50, 4);
  M5.Lcd.println("Catch Unit");
  M5.Lcd.setCursor(40, 120, 4);
  ledcSetup(ledChannel, freq, resolution);
  ledcAttachPin(servoPin, ledChannel);
}

void loop() {
  // High level 0.5ms is angle 0°
  // duty = 0.5/20ms = 0.025, 0.025*1023≈25
    ledcWrite(ledChannel, 25);
    delay(2000);
  // High level 1ms is angle 45°
  // duty = 1/20ms = 0.05, 0.05*1023≈50
    ledcWrite(ledChannel, 50);
    delay(2000);
}

```

## Video

<video class="video_size" controls>
    <source src="https://m5stack.oss-cn-shenzhen.aliyuncs.com/video/Product_example_video/Unit/CATCH.mp4" type="video/mp4">
</video>


<script>

   var purchase_link = 'https://m5stack-store.myshopify.com/products/catch-unit';

   anchor_search(purchase_link);
   scrollFunc();

</script>
