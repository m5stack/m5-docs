# Unit TOF {docsify-ignore-all}

<img src="assets/img/product_pics/unit/M5GO_Unit_tof.png" width="30%" height="30%"><img src="assets/img/product_pics/unit/unit_tof_grove_a.png" width="30%" height="30%">

***

:memo:**[Description](#Description)**&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;:octocat:**[Example](#Example)**&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; :electric_plug:**[Schematic](#Schematic)** &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;🛒**[Purchase](https://www.aliexpress.com/store/product/M5Stack-Official-ToF-Unit-VL53L0X-Time-of-Flight-ToF-Laser-Ranging-Sensor-Breakout-Laser-Distance-Sensor/3226069_32949310300.html?spm=a2g1x.12024536.productList_5885013.pic_3)**

## Description

**<mark>TOF</mark>** is a unit that can detect distance using a newest "Time-of-Flight" sensor using laser light. It is higher precision than most distance sensors. The unit comunicates with M5Core with I2C.

The unit communicates with m5core through GROVE A(IIC). And the IIC address is 0x29.

## Feature

-  High precision
-  Measure absolute distances up to 2m
-  the wavelength of laser: 940nm
-  GROVE interface, support [UiFlow](http://flow.m5stack.com) and [Arduino](http://www.arduino.cc)
-  Two Lego installation holes

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

<img src="assets/img/product_pics/unit/tof_sch.JPG">

### PinMap

<table>
 <tr><td>M5Core(GROVE A)</td><td>GPIO22</td><td>GPIO21</td><td>5V</td><td>GND</td></tr>
 <tr><td>TOF Unit</td><td>SCL</td><td>SDA</td><td>5V</td><td>GND</td></tr>
</table>