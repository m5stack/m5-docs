# Unit TRACE {docsify-ignore-all}

<img src="assets/img/product_pics/unit/unit_trace_01.png" width="30%" height="30%"><img src="assets/img/product_pics/unit/unit_trace_02.png" width="30%" height="30%">

***

:memo:**[Description](#Description)**&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;:octocat:**[Example](#Example)**&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;:electric_plug:**[Schematic](#Schematic)**&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;🛒**[Purchase](https://www.aliexpress.com/store/product/M5Stack-New-TRACE-Board-for-Lidar-Bot-Mini-Car-M5BALA-Balance-Car-with-MEGA328-4-IR/3226069_32974626338.html?spm=a2g1y.12024536.productList_5885013.subject_0)**&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;:clapper:**[Related Video](#Related-Video)**

## Description

**TRACE** is mainly consist of 4 sets of IR, 1x infrared emitting and 1x infrared receiver for each set. The infrared LEDs should be placed towards and close to the ground where having black tracing lines and white background (or vice versa) layouts.

The IR transmitter keep emitting, at the mean time infrared ray would be absorbed by different color of objects. Black can absorb more ray than other color, so the infrared receiver (infrared sensitive phototransistor) would receive less which makes the resistance value of the phototransistor would vary with different object color. Then we assign an AD convertor tp capture the data.

This Unit communicates with the M5Core via GROVE PORTA I2C(0x5A).

<img src="assets/img/product_pics/unit/unit_trace_03.png" width="60%" height="60%">

## Product Features

- operation range: The reflecting surface is less than 11mm from the photoelectric surface
- Program Platform: Arduino, UIFlow(Blockly,Python)
- Two Lego-compatible holes

## Include

- 1x TRACE Unit
- 1x Grove Cable

## Application

- Self-tracing robot

## Related Link

- **[Offical Video](https://www.youtube.com/channel/UCozgFVglWYQXbvTmGyS739w)**

- **[Forum](http://forum.m5stack.com/)**

- **[TRACE Firmeare](https://github.com/m5stack/M5-ProductExampleCodes/tree/master/Unit/TRACE/firmware_328p)**


## EasyLoader

<img src="https://m5stack.oss-cn-shenzhen.aliyuncs.com/image/EasyLoader_logo.png" width="100px" style="margin-top:20px">

<a href="https://m5stack.oss-cn-shenzhen.aliyuncs.com/EasyLoader/Unit/EasyLoader_TRACE.exe"><button type="button" class="btn btn-primary">click to download EasyLoader</button></a>

>1.EasyLoader is a simple and fast program burner, and each product page has a product-related case program for EasyLoader.

>2.After downloading the software, double-click to run the application, connect the M5 device to the computer via the data cable, select the port parameters, and click **"Burn"** to start burning.

!>3.The CP210X (USB driver) needs to be installed before the EasyLoader is burned. [Click here to view the driver installation tutorial](en/related_documents/establish_serial_connection)

## Example

### 1. Arduino IDE

*The code below is incomplete. To get complete code, please click [here](https://github.com/m5stack/M5-ProductExampleCodes/tree/master/Unit/TRACE/Arduino)。*

```arduino
#include <M5Stack.h>
#include "Wire.h"

#define TRACE_ADDR 0x5a

// declaration
#define VALUE_SPLIT
uint8_t value;
int SensorArray[4] = {0};

// initialization
m5.begin();
Serial.begin(115200);
Wire.begin();


// read data
Wire.beginTransmission(TRACE_ADDR);
Wire.write(0x00);
Wire.endTransmission();
Wire.requestFrom(TRACE_ADDR,1);
while(Wire.available()){
    value = Wire.read();
}
SensorArray[3] = (value&0x08)>>3;
SensorArray[2] = (value&0x04)>>2;
SensorArray[1] = (value&0x02)>>1;
SensorArray[0] = (value&0x01)>>0;
```

<img src="assets/img/product_pics/unit/unit_trace_04.png">

### 2. UIFlow

*To get complete code, please click [here](https://github.com/m5stack/M5-ProductExampleCodes/tree/master/Unit/TRACE/UIFlow)。*

<img src="assets/img/product_pics/unit/unit_example/TRACE/example_unit_trace_01.png">

## Schematic

<img src="assets/img/product_pics/unit/trace_sch.png">

### PinMap

<table>
 <tr><td>M5Core(GROVE A)</td><td>GPIO22</td><td>GPIO21</td><td>5V</td><td>GND</td></tr>
 <tr><td>TRACE Unit</td><td>SCL</td><td>SDA</td><td>5V</td><td>GND</td></tr>
</table>

## Related Video

**TRACE Case**

<video width="500" height="315" controls>
    <source src="https://m5stack.oss-cn-shenzhen.aliyuncs.com/video/Blog/Twitch201901/lidarbot.mp4" type="video/mp4">
</video>