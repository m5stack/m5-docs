# Unit ToF {docsify-ignore-all}

<img src="assets/img/product_pics/unit/tof/unit_tof_01.jpg" width="30%" height="30%"><img src="assets/img/product_pics/unit/tof/unit_tof_02.jpg" width="30%" height="30%">

***

:memo:**[描述](#描述)**&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;:octocat:**[例程](#例程)**&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;:electric_plug:**[原理图](#原理图)**&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;🛒**[购买链接](https://m5stack.com/collections/m5-unit/products/tof-sensor-unit)**&nbsp;&nbsp;&nbsp;<img src="https://m5stack.oss-cn-shenzhen.aliyuncs.com/image/EasyLoader_logo-min.jpg">**[EasyLoader](#EasyLoader)**

## 描述

**ToF** 是一款激光测距 Unit.集成**VL53L0X**激光测距模块,通过测量激光信号往返时间，计算发射点与检测对象之间的距离.与传统测距不同的地方在于,无论检测目标的的反射率如何，能够提供精确的距离测量数据.发射940nm波长的激光，能够在不到30ms的时间内测量最大2m的绝对距离.

该 Unit 与 M5Core 通过 Grove A 接口通信，I2C 地址为**0x29**.

*注意: 如果你发现你的ToF Unit存在性能不稳定状况，极有可能是因为旧版本的PCB电路板缺陷导致，下面将为你讲解如何解决这一状况*

- 拆解 ToF Unit 查看其内部的PCB板，若内部电路如下图，则表示您的ToF Unit为新版本.

  <img src="assets/img/product_pics/unit/tof/unit_tof_05.jpg" width="30%" height="30%">

- 若不是新版本，则需要手动拆解两个MOSFET（AO3400A），并参照下图将SCL，SDA直接连接到VL53L0x上.

- <img src="assets/img/product_pics/unit/tof/unit_tof_sch_02.jpg" width="30%" height="30%">

- VL53L0x的工作电压为3.3V. 因此，请确保SDA与SCL使用电压为3.3V.(M5Core的GROVE接口中的数据引脚提供3.3V，电源引脚提供5V.)

## 产品特性

- 高精度
- 最大测量距离 2m
- 激光波长: 940nm
- 开发平台: Arduino, UIFlow(Blockly, Python)
- 2x LEGO 兼容孔

## 套件清单

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

## EasyLoader

<img src="https://m5stack.oss-cn-shenzhen.aliyuncs.com/image/EasyLoader_logo.png" width="100px" style="margin-top:20px">

<a href="https://m5stack.oss-cn-shenzhen.aliyuncs.com/EasyLoader/Unit/EasyLoader_TOF.exe"><button type="button" class="btn btn-primary">点击下载EasyLoader</button></a>

>1.EasyLoader是一个简洁快速的程序烧录器，每一个产品页面里的EasyLoader都提供了一个与产品相关的案例程序，通过简单步骤将其烧录至主控，能够进行一系列的功能验证.

>2.下载软件后，双击运行应用程序，将M5设备通过数据线连接至电脑,选择端口参数，点击 **"Burn"** 即可开始烧录.(**为M5StickC烧录时，请将波特率设置在750000或115200**)

?>3.目前EasyLoader仅适用于Windows操作系统、兼容M5体系采用ESP32作为控制核心的主机.在为M5Core烧录前需要安装CP210X驱动程序（使用M5StickC作为控制器的则无需安装）[点击此处查看驱动安装教程](zh_CN/related_documents/M5Burner#安装串口驱动)

## 例程

### 1. Arduino IDE

*以下代码仅为片段，如需获取完整代码， [请点击此处](https://github.com/m5stack/M5-ProductExampleCodes/tree/master/Unit/TOF/Arduino).*

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

*以下代码仅为片段，如需获取完整代码， [请点击此处](https://github.com/m5stack/M5-ProductExampleCodes/tree/master/Unit/TOF/UIFlow).*

<img src="assets/img/product_pics/unit/unit_example/TOF/example_unit_tof_01.png">

## 原理图

[ToF Schematic](https://github.com/m5stack/M5-Schematic/blob/master/Units/UNIT_TOF.pdf)

<img src="assets/img/product_pics/unit/tof/unit_tof_sch_01.jpg">

### 管脚映射

<table>
 <tr><td>M5Core(GROVE A)</td><td>GPIO22</td><td>GPIO21</td><td>5V</td><td>GND</td></tr>
 <tr><td>ToF Unit</td><td>SCL</td><td>SDA</td><td>5V</td><td>GND</td></tr>
</table>