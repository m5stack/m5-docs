# Application FLIR {docsify-ignore-all}

<img src="assets/img/product_pics/app/app_flir_01.png" width="250" height="250">

* * *

:memo:**[Description](#Description)**&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;:octocat:**[Example](#Example)**&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;🛒**[Purchase](https://www.aliexpress.com/store/product/M5Stack-Official-FLIR-Radiometric-Lepton-2-0-3-0-Dev-160HX120V-80HX60V-Thermal-Imager-Kit-M5/3226069_32959050762.html?spm=2114.12010615.8148356.2.13421cc8ExLqq4)**

<!-- &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;:clapper:**[相关视频](#相关视频)** -->

## Description

**<mark>FLIR</mark>** is a module which integrates lwir micro thermal camera (**Lepton 3.0**) supplied by FLIR company.

<img src="assets/img/product_pics/app/app_flir_04.png">

Real-time access to non-contact temperature measurement data. Easy to use because it integrates a digital thermal image processing unit. Lepton is equipped in M5 standard size 3D printing housing, after stacking M5Core, communicate with the master via IIC.

The effective pixels obtained by the Lepton sensor are 160×120, but you can display the image size of different resolutions on the M5Core through the Arduino program. The image sizes for different resolutions are 80x60, 160x120, 240x320.

**Note:** If working long hours, Lepton will heat up. But the output image is not affected by the camera temperature.

<img src="assets/img/product_pics/app/app_flir_02.png" width=50% height=50%>

## Feature

- 160×120 Effective Pixels
- Lepton Low operating power — 150 mW (operating), 650 mW (during shutter event), 5 mW (standby)
- Field of view: 56°, with shutter
- Lepton Input Supply Voltage: 1.2V，2.8V，2.5V - 3.1V IO
- Fast imaging time (< 0.5 second)

## Parameter

| *Lepton Parameter item* | *Parameter value*  |
| :-----------: | :------:  |
| Effective Frame Rate | 8.7Hz      |
| Input Clock  | 25-MHz|
| Pixel Size  | 12µm       |
| Scene Dynamic Range | Low Gain Mode: -10 to 400°C; High Gain Mode: -10 to 140°C |
| Spectral Range | 8 µm to 14 µm       |
| Thermal Sensitivity	| ＜50 mK（0.050℃）       |
| Input Supply Voltage	| 2.8 V, 1.2 V, 2.5 V - 3.1 V IO       |
| Optimum Temperature Range	| -10 °C to +80 °C |

## Include

- 1x FLIR

## Application

- Car engine failure check
- Building dehumidification insulation sealing test
- Industrial furnace inner wall refractory crack
- Outdoor observation of animals at night

## Related Link

- **[Offical Video](https://www.youtube.com/channel/UCozgFVglWYQXbvTmGyS739w)**
- **[Forum](http://forum.m5stack.com/)**
- **[Lepton Info (FLIR Website)](https://www.flir.com/products/lepton/)**
- **Datasheet** - [Lepton 2.5](https://www.flir.cn/globalassets/imported-assets/document/lepton-2.5-family-datasheet.pdf) - [Lepton 3&3.5](https://www.flir.cn/globalassets/imported-assets/document/lepton-3-3.5-datasheet.pdf)
- **[Lepton Engineering Datasheet](https://www.flir.cn/globalassets/imported-assets/document/flir-lepton-engineering-datasheet.pdf)**
- **[Lepton Software Interface Description](https://www.flir.cn/globalassets/imported-assets/document/flir-lepton-software-interface-description-document.pdf)**

## Example

*If you want the complete code, please click [here](https://github.com/m5stack/Applications-Lepton3.0/tree/master/lepton3/Src/Lepton_Bot)。*

<img src="assets/img/product_pics/app/app_flir_03.png">

<!--
**Example目录树**

├─LidarBot_CarMain_V1.1 - 雷达车主控程序

├─LidarBot_RemoteController_V1.0 - 遥控手柄程序V1.0

└─LidarBot_RemoteController_V1.2 - 遥控手柄程序V1.2(相比V1.0精度提高一倍) -->

<!-- ## 相关视频

**Lidar Bot 在迷宫中巡线**
