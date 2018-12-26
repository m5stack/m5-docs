# Unit TOF

<img src="assets/img/product_pics/unit/M5GO_Unit_tof.png" width="30%" height="30%"><img src="assets/img/product_pics/unit/unit_tof_grove_a.png" width="30%" height="30%">

***

:memo:**[Description](#Description)**&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;:octocat:**[Example](#Example)**&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; :electric_plug:**[Schematic](#Schematic)** &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;🛒**[Purchase](https://www.aliexpress.com/store/product/M5Stack-Official-ToF-Unit-VL53L0X-Time-of-Flight-ToF-Laser-Ranging-Sensor-Breakout-Laser-Distance-Sensor/3226069_32949310300.html?spm=a2g1x.12024536.productList_5885013.pic_3)**

## Description

This is a unit can detect distance using a newest "Time-to-Flight" sensor using laser light. It is higher precision than most distance sensors. The unit comunicates with M5Core with I2C.

## Feature

-  High precision
-  Measure absolute distances up to 2m
-  GROVE interface, support [UiFlow](http://flow.m5stack.com) and [Arduino](http://www.arduino.cc)
-  Two Lego installation holes

## APPLICATION

-  1D gesture recognition

## Related Link

- **[Offical Video](https://www.youtube.com/channel/UCozgFVglWYQXbvTmGyS739w)**

- **[Forum](http://forum.m5stack.com/)**

-  **Datasheet** - [VL53L0X](https://pdf1.alldatasheet.com/datasheet-pdf/view/948120/STMICROELECTRONICS/VL53L0X.html)

## Example

### 1. Arduino IDE

```arduino
#define SYSRANGE_START  0x00
#define RESULT_RANGE_STATUS 0x14
#define ToF_ADDR 0x29   //the IIC address of ToF

write_byte_data_at(SYSRANGE_START, 0x01);   //start measure
read_block_data_at(RESULT_RANGE_STATUS, 12);    //read 12 bytes once
dist = makeuint16(gbuf[11], gbuf[10]);  //split distance data and save at "dist"
```

Click [here](https://github.com/m5stack/M5-ProductExampleCodes/tree/master/Unit/TOF/Arduino) for Specific example.

## Schematic

<img src="assets/img/product_pics/unit/tof_sch.JPG">

### PinMap

<table>
 <tr><td>M5Core(GROVE A)</td><td>GPIO22</td><td>GPIO21</td><td>5V</td><td>GND</td></tr>
 <tr><td>TOF Unit</td><td>SCL</td><td>SDA</td><td>5V</td><td>GND</td></tr>
</table>