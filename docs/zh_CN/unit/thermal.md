# THERMAL - 人体红外成像Unit {docsify-ignore-all}

<img src="assets/img/product_pics/unit/M5GO_Unit_thermal.png" width="30%" height="30%"><img src="assets/img/product_pics/unit/M5GO_Unit_thermal_02.png" width="30%" height="30%"><img src="assets/img/product_pics/unit/unit_thermal_grove_a.png" width="30%" height="30%">

***

:memo:**[描述](#描述)**&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;:octocat:**[例程](#例程)**&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;:electric_plug:**[原理图](#原理图)**&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;🛒**[购买链接](https://item.taobao.com/item.htm?spm=a1z10.3-c.w4002-1172588106.70.3a93425e5PQbBs&id=576966170317)**&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;:clapper:**[相关视频](#相关视频)**

## 描述

**THERMAL** 是一款内置热电堆传感器 ( 一种热释红外传感器，型号 **MLX90640** ) 的 Unit。它可以用了测量物体表面温度，并由各个表面温度不同组成的温度梯度而形成热成像图。MLX90640 输出的图片大小和分辨率是 **32 x 24**。

MLX90640 红外（IR）传感器阵列结合了高分辨率和在恶劣环境中可靠工作的能力，为更昂贵的高端热像仪提供了高性价比的替代方案。与微测辐射热计的情况不同，该传感器不需要频繁重新校准，从而可确保连续监测并降低系统成本。

视场角（FoV）选项包括标准的 55°×35° 版本和 110°×75° 的广角版本，距离可以达到 7m。 THERMAL 采用的是 **110°×75° FoV** 的版本，也叫 BAA 封装。

该 Unit 与 M5Core 通过 Grove A 接口通信，它 的 IIC 地址是 **0x33**

<img src="assets/img/product_pics/unit/thermal/unit_thermal_05.png">

## 特性

- 工作电压：3V ~ 3.6V
- 工作电流：23mA
- 视场角：55°×35°
- 测量温度：-40°C ~ 300°C
- 精度：±1.5°C
- 可编程刷新率：0.5Hz ~ 64Hz
- 工作温度：-40°C ~ 85°C
- Unit 内置两个 Lego 插件孔，方便与 Lego 件结合

## 包含

- 1x THERMAL Unit
- 1x Grove 线

## 应用

-  高精度的非接触性测温器
-  生物移动检测
-  可视化红外成像

## 相关链接

- **[官方频道视频](https://i.youku.com/i/UNjE1ODA2MzE0OA==?spm=a2hzp.8253869.0.0)**

- **[官方论坛](http://forum.m5stack.com/)**

-  **数据手册** - [MLX90640](http://www.alldatasheet.com/datasheet-pdf/pdf/884988/MELEXIS/MLX90640.html)

## 例程

### 1. Arduino IDE

*以下仅为用法示意，并不完整。如果需要完整例程请点击[这里](https://github.com/m5stack/M5-ProductExampleCodes/tree/master/Unit/THERMAL/Arduino)。*

```arduino
/*
    MLX90640.ino
*/
#include <M5Stack.h>
#include <Wire.h>
#include "MLX90640_API.h"
#include "MLX90640_I2C_Driver.h"

// declaration
uint16_t eeMLX90640[832];//32 * 24 = 768
int SetRefreshRate;

// initialization
/* load system parameter */
MLX90640_DumpEE(MLX90640_address, eeMLX90640);
/* load extraction parameter */
MLX90640_ExtractParameters(eeMLX90640, &mlx90640);
SetRefreshRate = MLX90640_SetRefreshRate(0x33, 0x05);
M5.Lcd.fillScreen(TFT_BLACK);
infodisplay();

// display heat map
M5.update();
infodisplay();
interpolate_image(reversePixels,ROWS,COLS,dest_2d,\
                    INTERPOLATED_ROWS,INTERPOLATED_COLS);
```

<img src="assets/img/product_pics/unit/M5GO_Unit_thermal_03.png" width="30%" height="30%"><img src="assets/img/product_pics/unit/M5GO_Unit_thermal_04.png" width="30%" height="30%">

<!-- ### 2. UIFlow

*具体例程请点击[这里](https://github.com/m5stack/M5-ProductExampleCodes/tree/master/Unit/THERMAL/UIFlow)。*

<img src="assets/img/product_pics/unit/unit_example/example_unit_thermal_01.png" width="30%" height="30%"> <img src="assets/img/product_pics/unit/unit_example/example_unit_thermal_02.png" width="55%" height="55%"> -->

## 原理图

<img src="assets/img/product_pics/unit/thermal_sch.JPG">

### 管脚映射

<table>
 <tr><td>M5Core ( GROVE 接口 A )</td><td>GPIO22</td><td>GPIO21</td><td>5V</td><td>GND</td></tr>
 <tr><td>人体红外成像 Unit</td><td>SCL</td><td>SDA</td><td>5V</td><td>GND</td></tr>
</table>

## 相关视频

**THERMAL 的演示**

<video width="500" height="315" controls>
    <source src="https://m5stack.oss-cn-shenzhen.aliyuncs.com/video/Blog/Twitch201811/Infrared%20Thermal%20Imaging.mp4" type="video/mp4">
</video>
