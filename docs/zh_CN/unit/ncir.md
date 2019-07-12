# Unit NCIR {docsify-ignore-all}

<img src="assets/img/product_pics/unit/M5GO_Unit_ncir.png" width="30%" height="30%"><img src="assets/img/product_pics/unit/unit_ncir_grove_a.png" width="30%" height="30%">

***

:memo:**[描述](#描述)**&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;:octocat:**[例程](#例程)**&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;:electric_plug:**[原理图](#原理图)**&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;🛒**[购买链接](https://m5stack.com/collections/m5-unit/products/ncir-sensor-unit)**&nbsp;&nbsp;&nbsp;<img src="https://m5stack.oss-cn-shenzhen.aliyuncs.com/image/EasyLoader_logo-min.jpg">**[EasyLoader](#EasyLoader)**

## 描述

**NCIR** 是一款单点红外测温传感器.内置红外传感器**MLX90614**，能够测量人体或其他物体的表面温度.

与大多数接触式型传感器不同地方在于,该传感器通过测量远距离物体发射出的红外光波来检测温度.无需物理接触，这使得它比一般传感器拥有更广的测温范围: -70°C 至 + 380°C.视场角为90°，能够方便快捷的测量某一位置的平均温度.

该 Unit 通过GROVE A IIC（0x5A）与M5Core连接.

## 产品特性
- MLX90614ESF-AAA
- 工作电压: 4.5 to 5.5V
- 物体测温范围: -70°C ~ 382.2°C
- 环境测温范围: -40°C ~ 125 ˚C
- 室温下测量精度: ±0.5°C
- 视场角: 90°
- 开发平台: Arduino, UIFlow(Blockly, Python)
- 2x LEGO 兼容孔

## 包含

- 1x NCIR Unit
- 1x Grove 线

## 应用

-  人体体温测量
-  物体 ( 生物 ) 移动检测

## 相关链接

- **[官方频道视频](https://i.youku.com/i/UNjE1ODA2MzE0OA==?spm=a2hzp.8253869.0.0)**

- **[官方论坛](http://forum.m5stack.com/)**

-  **数据手册** - [MLX90614](https://pdf1.alldatasheet.com/datasheet-pdf/view/218977/ETC2/MLX90614.html)

## EasyLoader

<img src="https://m5stack.oss-cn-shenzhen.aliyuncs.com/image/EasyLoader_logo.png" width="100px" style="margin-top:20px">

<a href="https://m5stack.oss-cn-shenzhen.aliyuncs.com/EasyLoader/Unit/EasyLoader_NCIR.exe"><button type="button" class="btn btn-primary">点击下载EasyLoader</button></a>

>1.EasyLoader是一个简洁快速的程序烧录器，每一个产品页面里的EasyLoader都提供了一个与产品相关的案例程序.

>2.下载软件后，双击运行应用程序，将M5设备通过数据线连接至电脑,选择端口参数，点击 **"Burn"** 即可开始烧录

!>3.EasyLoader烧录前需要安装有CP210X（USB驱动程序），[点击此处查看驱动安装教程](zh_CN/related_documents/M5Burner#安装串口驱动)

## 例程

### 1. Arduino IDE

*以下代码仅为片段，如需获取完整代码， [请点击此处](https://github.com/m5stack/M5Stack/tree/master/examples/Unit/NCIR).*

```arduino
#include <M5Stack.h>
#include <Wire.h>

#define NCIR_ADDR 0x5A

// declaration
uint16_t result;
float temperature;

// initialization
Wire.begin();
M5.begin();

// read data
Wire.beginTransmission(NCIR_ADDR);Wire.write(0x07);Wire.endTransmission(false);
Wire.requestFrom(NCIR_ADDR, 2);
result = Wire.read();// Receive DATA
result |= Wire.read() << 8;// Receive DATA

// store temperature value
temperature = result * 0.02 - 273.15;
```

<img src="assets/img/product_pics/unit/unit_example/NCIR/example_unit_ncir_04.png">

### 2. UIFlow

*以下代码仅为片段，如需获取完整代码， [请点击此处](https://github.com/m5stack/M5-ProductExampleCodes/tree/master/Unit/NCIR/UIFlow).*

<img src="assets/img/product_pics/unit/unit_example/NCIR/example_unit_ncir_03.png">

## 原理图

<img src="assets/img/product_pics/unit/ncir_sch.JPG">

### 管脚映射

<table>
 <tr><td>M5Core (GROVE A)</td><td>GPIO22</td><td>GPIO21</td><td>5V</td><td>GND</td></tr>
 <tr><td>NCIR Unit</td><td>SCL</td><td>SDA</td><td>5V</td><td>GND</td></tr>
</table>