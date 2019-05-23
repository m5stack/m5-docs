# Unit TOF {docsify-ignore-all}

<img src="assets/img/product_pics/unit/tof/unit_tof_01.jpg" width="30%" height="30%"><img src="assets/img/product_pics/unit/tof/unit_tof_02.jpg" width="30%" height="30%">

***

:memo:**[Description](#Description)**&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;:octocat:**[Example](#Example)**&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; :electric_plug:**[Schematic](#Schematic)** &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;🛒**[Purchase](https://www.aliexpress.com/store/product/M5Stack-Official-ToF-Unit-VL53L0X-Time-of-Flight-ToF-Laser-Ranging-Sensor-Breakout-Laser-Distance-Sensor/3226069_32949310300.html?spm=a2g1x.12024536.productList_5885013.pic_3)**

## Description

**TOF** that employs time-of-flight techniques to resolve distance between the emit point and the reach point of a subject, measuring the round trip time of an artificial light signal provided by a laser.

This unit integrated a distance measuring sensor VL53L0x providing accurate distance measurement whatever the target reflectance, unlike conventional technologies. It can measure absolute distances up to 2m in less than 30ms.

This unit comunicates with M5Core via I2C(0x29).


*Noitce: If you found TOF performance unstable, means waht you have could be the old-version hardware PCB board, Following will teach you how to fix the PCB board*

- Disassembling TOF and Check the PCB board, if you see it like this , means it is the new version. 
  <img src="assets/img/product_pics/unit/tof/unit_tof_05.jpg" width="30%" height="30%">
- If not, take off the two MOSFET (AO3400A), and connect SCL,SDA directly to VL53L0x. Wire pattern refer to the photo above.
- <img src="assets/img/product_pics/unit/tof/unit_tof_sch_02.jpg" width="30%" height="30%">
- In this pattern, make sure you use the 3.3V on SDA and SCL, M5Core GROVE provide 3.3V to data pins, 5V to power pin. only 3.3v allowed on VL53L0x.



## Product Features

-  High precision
-  Measure absolute distances up to 2m
-  The wavelength of laser: 940nm
- Program Platform: Arduino, UIFlo(Blockly, Python)
- Two Lego-compatible holes

## Include

- 1x ToF Unit
- 1x Grove Cable

## APPLICATION

-  1D gesture recognition
-  Laser Ranging
-  3D structured light imaging（3D sensing）
-  Camera assist (ultra fast autofocus and depth of field)

## Related Link

- **[Offical Video](https://www.youtube.com/channel/UCozgFVglWYQXbvTmGyS739w)**

- **[Forum](http://forum.m5stack.com/)**

-  **Datasheet** - [VL53L0X](https://pdf1.alldatasheet.com/datasheet-pdf/view/948120/STMICROELECTRONICS/VL53L0X.html)

## Example

### 1. Arduino IDE

*The below code is incomplete(just for usage). If you want the complete code, please click [here](https://github.com/m5stack/M5-ProductExampleCodes/tree/master/Unit/TOF/Arduino).*

```arduino
#include <M5Stack.h>
#include <Wire.h>

#define ToF_ADDR 0x29//the iic address of tof

#define SYSRANGE_START  0x00
#define RESULT_RANGE_STATUS 0x14
#define ToF_ADDR 0x29   //the IIC address of ToF

// declaration
uint16_t dist=0;

// initialization
M5.begin();
Wire.begin();// join i2c bus (address optional for master)

// read data
write_byte_data_at(VL53L0X_REG_SYSRANGE_START, 0x01);
read_block_data_at(VL53L0X_REG_RESULT_RANGE_STATUS, 12);//read 12 bytes once
// get distance
dist = makeuint16(gbuf[11], gbuf[10]);//split distance data to variable "dist"
```

### 2. UIFlow

*If you want the complete code, please click [here](https://github.com/m5stack/M5-ProductExampleCodes/tree/master/Unit/TOF/UIFlow).*

<img src="assets/img/product_pics/unit/unit_example/TOF/example_unit_tof_01.png">

## Schematic

[TOF](https://github.com/m5stack/M5-Schematic/blob/master/Units/UNIT_TOF.pdf)
<img src="assets/img/product_pics/unit/tof/unit_tof_sch_01.jpg">

### PinMap

<table>
 <tr><td>M5Core(GROVE A)</td><td>GPIO22</td><td>GPIO21</td><td>5V</td><td>GND</td></tr>
 <tr><td>TOF Unit</td><td>SCL</td><td>SDA</td><td>5V</td><td>GND</td></tr>
</table>