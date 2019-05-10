# Unit THERMAL {docsify-ignore-all}

<img src="assets/img/product_pics/unit/M5GO_Unit_thermal.png" width="30%" height="30%"><img src="assets/img/product_pics/unit/M5GO_Unit_thermal_02.png" width="30%" height="30%"><img src="assets/img/product_pics/unit/unit_thermal_grove_a.png" width="30%" height="30%">

***

:memo:**[描述](#描述)**&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;:octocat:**[例程](#例程)**&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;:electric_plug:**[原理图](#原理图)**&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;🛒**[购买链接](https://item.taobao.com/item.htm?spm=a1z10.3-c.w4002-1172588106.70.3a93425e5PQbBs&id=576966170317)**&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;:clapper:**[相关视频](#相关视频)**

## 描述

**THERMAL** 是一款人体红外成像 Unit.内置**MLX90640**热电堆传感器,能够测量物体表面温度.并通过由表面温度形成的温度梯度，生成热成像图片.(图片分辨率为**32 x 24**)

**MLX90640** 红外（IR）传感器阵列具备了高分辨率与在恶劣环境中可靠工作的能力.与昂贵的高端热像仪相比，该 Unit 是一个高性价比的替代方案.相对一般的微测辐射热计，该传感器优势在于，不需要频繁重复校准,从而确保了检测的连续性并降低了系统维护成本.视场角提供标准版（55°×35° 采用封装BAB）与广角版（110°×75° 采用封装BAA），检测距离可以达到 7m.

该 Unit 与 M5Core 通过 Grove A 接口通信，I2C 地址为**0x33**.

<img src="assets/img/product_pics/unit/thermal/unit_thermal_05.png">

## 产品特性

- 工作电压: 3V ~ 3.6V
- 工作电流: 23mA
- 视场角: 55°x35°
- 测温范围: -40°C ~ 300°C
- 精度: ±1.5°C
- 刷新频率: 0.5Hz-64Hz
- 工作温度: -40°C ~ 85°C
- 2x LEGO 兼容孔

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

*以下代码仅为片段，如需获取完整代码， [请点击此处](https://github.com/m5stack/M5-ProductExampleCodes/tree/master/Unit/THERMAL/Arduino)。*

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

## 原理图

<img src="assets/img/product_pics/unit/thermal_sch.JPG">

### 管脚映射

<table>
 <tr><td>M5Core (GROVE A)</td><td>GPIO22</td><td>GPIO21</td><td>5V</td><td>GND</td></tr>
 <tr><td>THERMAL Unit</td><td>SCL</td><td>SDA</td><td>5V</td><td>GND</td></tr>
</table>

## 相关视频

**THERMAL 的演示**

<video width="500" height="315" controls>
    <source src="https://m5stack.oss-cn-shenzhen.aliyuncs.com/video/Blog/Twitch201811/Infrared%20Thermal%20Imaging.mp4" type="video/mp4">
</video>
