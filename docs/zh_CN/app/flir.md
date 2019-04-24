# Application FLIR {docsify-ignore-all}

<img src="assets/img/product_pics/app/app_flir_01.png" width="300" height="300">

* * *

:memo:**[描述](#描述)**&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;:octocat:**[例程](#例程)**&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;🛒**[购买链接](https://item.taobao.com/item.htm?spm=a1z10.3-c.w4002-1172588106.10.405c425eyfkKSu&id=583291687617)**

## 描述

**<mark>FLIR</mark>** 是一款集成 FLIR 公司的微型长波红外热像仪 (**Lepton 3.0**) 的应用模块。

<img src="assets/img/product_pics/app/app_flir_04.png">


能实时获得传感器非接触式温度测量数据。因为集成了数字热图像处理单元，所以使用起来更简单。装配在 M5 标准尺寸的 3D 打印外壳中，堆叠了 M5Core 之后，通过 IIC 与主控通信。Lepton 传感器获取得到的有效像素是 160×120，可是您可以通过 Arduino 程序配置在 M5Core 上显示不同分辨率的图像大小。不同分辨率的图像大小分别是 80x60, 160x120, 240x320。

**注意：** 工作时间长了热像仪 Lepton 会升温，可是输出图像不受热像仪温度影响。

<img src="assets/img/product_pics/app/app_flir_02.png" width=50% height=50%>

## 特性

- 160×120 有效像素
- Lepton 传感器运行功率较低 — 典型值为 140 mW、使用快门期间为 650 mW
- 56° 视觉范围，带快门
- Lepton 传感器输入电压范围：1.2V，2.8V，2.5V 至 3.1V IO
- 成像时间快 (< 0.5 秒)

## 参数

| *Lepton 参数项*         | *参数值*  |
| :-----------: | :------:  |
| 有效帧频           | 8.7Hz      |
| 输入时钟           | 25-MHz|
| 像素尺寸           | 12µm       |
| 场景动态范围 | 低增益模式：-10℃至400℃; 高增益模式：-10℃至140℃       |
| 波长范围	| 8µm至14µm       |
| 热灵敏度		| ＜50 mK（0.050℃）       |
| 输入电源电压		| 2.8 V，1.2 V，2.5 V至3.1 V IO       |
| 最佳温度范围		| -10℃至+80℃      |

## 包含

- 1x FLIR

## 应用

- 汽车发动机故障检查
- 建筑除湿保温密封性检测
- 工业炉内壁耐火材料裂痕
- 夜晚户外观测动物

## 相关链接

- **[官方频道视频](https://i.youku.com/i/UNjE1ODA2MzE0OA==?spm=a2hzp.8253869.0.0)**
- **[官方论坛](http://forum.m5stack.com/)**
- **[FLIR 官网的 Lepton 信息](https://www.flir.cn/products/lepton/)**
- **数据手册** - [Lepton 2.5](https://www.flir.cn/globalassets/imported-assets/document/lepton-2.5-family-datasheet.pdf) - [Lepton 3&3.5](https://www.flir.cn/globalassets/imported-assets/document/lepton-3-3.5-datasheet.pdf)
- **[Lepton 工程版数据手册](https://www.flir.cn/globalassets/imported-assets/document/flir-lepton-engineering-datasheet.pdf)**
- **[Lepton 传感器的接口文档](https://www.flir.cn/globalassets/imported-assets/document/flir-lepton-software-interface-description-document.pdf)**

## 例程

*如果需要完整例程请点击[这里](https://github.com/m5stack/Applications-Lepton3.0/tree/master/lepton3/Src/Lepton_Bot)。*

<img src="assets/img/product_pics/app/app_flir_03.png">

<!--
**Example目录树**

├─LidarBot_CarMain_V1.1 - 雷达车主控程序

├─LidarBot_RemoteController_V1.0 - 遥控手柄程序V1.0

└─LidarBot_RemoteController_V1.2 - 遥控手柄程序V1.2(相比V1.0精度提高一倍) -->
