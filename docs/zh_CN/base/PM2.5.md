# PM2.5 {docsify-ignore-all}

<img src="https://m5stack.oss-cn-shenzhen.aliyuncs.com/image/m5-docs_homepage/base/base_pm25_01.jpg" width="250" height="250"> <img src="assets/img/product_pics/base/PM2.5/PM2.5-2.jpg" width="250" height="250"><img src="assets/img/product_pics/base/PM2.5/PM2.5-4.jpg" width="250" height="250">

* * *

:memo:**[描述](#描述)**&nbsp;&nbsp;&nbsp;:bulb:**[上手指南](/zh_CN/quick_start/m5core/m5stack_core_quick_start)**&nbsp;&nbsp;&nbsp;:octocat:**[例程](#案例)**&nbsp;&nbsp;&nbsp;🛒**[购买链接](https://item.taobao.com/item.htm?spm=a2oq0.12575281.0.0.78ec1debCSGLNF&ft=t&id=594362860431)**&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;:clapper:**[相关视频](#相关视频)**


## 描述

**PM2.5** 是一款环境温湿度、空气质量检测产品.内置SHT20温湿度传感器、PMSA003数字式通用颗粒物浓度传感器.能够快速检测当前环境的温湿度数据，并采集计算单位体积内空气中不同粒径的悬浮颗粒物个数.简洁可靠的设计使其能够快速的部署节点，应用在生活或是工业等场景中，用作环境数据采集，或为空气中悬浮颗粒物浓度相关的仪器仪表或环境改善设备，提供实时准确的浓度数据.

PMSA003数字式通用颗粒物浓度传感器

-  激光散射原理实现精准测量
-  零错误报警率
-  实时响应并支持连续采集
-  最小分辨粒径 0.3μ m
-  六面全方位屏蔽，抗干扰性能更强
-  进出风口方向可选，适用范围广，用户无需再进行风道设计
-  12mm模块尺寸，适用于便携式、可穿戴设备

SHT20温湿度传感器

-  完全校准
-  数字输出，I2C接口
-  低功耗
-  出色的稳定性


## 产品特性

-  直流 5V 电源 
-  兼容 M5stack 拓展堆叠体系.
-  M5Core pedestal (Pin out SPI/I2C/Power)
-  万能板
-  Typy-C USB 

<!-- 
## 模块参数


| **参数** | **指标**  |**单位** |
| :------: | :------: | :------: |
| 颗粒物测量范围 | 0.3-1.0 ；1.0-2.5 ； 2.5-10  | 微米（μ m）|
| 颗粒物计数效率 | 50%@0.3 ；98%@>=0.5   | 微米（μ m）|
| 颗粒物质量浓度有效量程（PM2.5 标准值） | 0-500 | 微克/立方米 |
| 颗粒物质量浓度最大量程（PM2.5 标准值） | ≥1000 | 微克/立方米 |
| 颗粒物质量浓度分辨率 | 1 | 微克/立方米 |
| 颗粒物质量浓度一致性（PM2.5 标准值）| ±10%@100 -500 ；±10@0-100 | 微克/立方米 |
| 称准体积 | 0.1  | 升（L）|
| 单次响应时间 | ＜1 | 秒（s）|
| 综合响应时间 | ≤10  | 秒（s） |
| 直流供电电压  | Typ:5.0  Min:4.5  Max: 5.5 | 伏特（V）|
| 工作电流 | ≤100 | 毫安（mA）|
| 待机电流 | ≤200 | 微安（μ A）|
| 数据接口电平 | L <0.8 @3.3 H >2.7 @3.3 | 伏特（V）|
| 工作温度范围 | -10 ~ +60 | 摄氏度（℃）|
| 工作湿度范围 | 0-99% | |
| 储存温度范围 | -40 ~ +80 | 摄氏度（℃）|

[点击此处查看配套M5Core参数](/zh_CN/core/basic) -->

## 套件清单

- 1x M5Stack Basic 
- 1x PM2.5 base
- 1x M5Core 底座
- 1x Type-C USB
- 2x M3x16 螺丝

## 教程

### 数据手册

- [SHT20](https://www.mouser.com/ds/2/682/Sensirion_Humidity_Sensors_SHT20_Datasheet-1274196.pdf)

- [PMSA003](https://datasheet.lcsc.com/szlcsc/Beijing-Plantower-PMSA003-C_C89095.pdf)

### 案例 
- [Arduino](https://github.com/m5stack/M5-ProductExampleCodes/tree/master/Base/PM2.5)
  
### 相关连接

- **[Forum](http://forum.m5stack.com/)**


## 原理图

- [PM2.5](https://github.com/m5stack/M5-Schematic/blob/master/Units/UNIT_PM25.pdf)