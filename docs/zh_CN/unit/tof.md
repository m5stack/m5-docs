# Unit TOF {docsify-ignore-all}

<img src="assets/img/product_pics/unit/M5GO_Unit_tof.png" width="30%" height="30%"><img src="assets/img/product_pics/unit/unit_tof_grove_a.png" width="30%" height="30%">

***

:memo:**[描述](#描述)**&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;:octocat:**[例程](#例程)**&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;:electric_plug:**[原理图](#原理图)**&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;🛒**[购买链接](https://item.taobao.com/item.htm?spm=a1z10.3-c.w4002-1172588106.40.3a93425e5PQbBs&id=580005945330)**

## 描述

**TOF** 是一款激光测距 Unit.集成**VL53L0X**激光测距模块,通过测量激光信号往返时间，计算发射点与检测对象之间的距离.与传统测距不同的地方在于,无论检测目标的的反射率如何，能够提供精确的距离测量数据.发射940nm波长的激光，能够在不到30ms的时间内测量最大2m的绝对距离.

该 Unit 与 M5Core 通过 Grove A 接口通信，I2C 地址为**0x29**.

### 产品特性

- 高精度
- 最大测量距离 2m
- 激光波长: 940nm
- 开发平台: Arduino, UIFlo(Blockly, Python)
- 2x LEGO 兼容孔

## 包含

- 1x ToF Unit
- 1x Grove 线

## 应用

- 手势识别
- 激光测距
- 3D结构光成像（3D感应）
- 摄像机辅助（超快速自动对焦和景深图）

## 相关链接

- **[官方频道视频](https://i.youku.com/i/UNjE1ODA2MzE0OA==?spm=a2hzp.8253869.0.0)**

- **[官方论坛](http://forum.m5stack.com/)**

-  **数据手册** - [VL53L0X](https://pdf1.alldatasheet.com/datasheet-pdf/view/948120/STMICROELECTRONICS/VL53L0X.html)

## 例程

### 1. Arduino IDE

*以下代码仅为片段，如需获取完整代码， [请点击此处.](https://github.com/m5stack/M5-ProductExampleCodes/tree/master/Unit/TOF/Arduino).*

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

*以下代码仅为片段，如需获取完整代码， [请点击此处.](https://github.com/m5stack/M5-ProductExampleCodes/tree/master/Unit/TOF/UIFlow).*

<img src="assets/img/product_pics/unit/unit_example/TOF/example_unit_tof_01.png">

## 原理图

<img src="assets/img/product_pics/unit/tof_sch.JPG">

### 管脚映射

<table>
 <tr><td>M5Core(GROVE A)</td><td>GPIO22</td><td>GPIO21</td><td>5V</td><td>GND</td></tr>
 <tr><td>TOF Unit</td><td>SCL</td><td>SDA</td><td>5V</td><td>GND</td></tr>
</table>