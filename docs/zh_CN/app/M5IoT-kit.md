# M5IoT-kit {docsify-ignore-all}

<img src="assets/img/product_pics/app/M5IoT-kit/M5IoT-kit-01.jpg" width="250" height="250"> <img src="assets/img/product_pics/app/M5IoT-kit/M5IoT-kit-02.jpg" width="250" height="250"><img src="assets/img/product_pics/app/M5IoT-kit/M5IoT-kit-03.jpg" width="250" height="250">

* * *

:memo:**[描述](#描述)**&nbsp;&nbsp;&nbsp;

<!-- :bulb:**[上手指南](/zh_CN/quick_start/m5core/m5stack_core_quick_start)**&nbsp;&nbsp;&nbsp;:octocat:**[例程](#案例)**&nbsp;&nbsp;&nbsp;🛒**[购买链接](https://item.taobao.com/item.htm?spm=a1z10.3-c.w4002-1172588106.13.3b6d425eZah7wG&id=574761698176)**&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;:clapper:**[相关视频](#相关视频)** -->


## 描述

**M5IoT-kit** 是一款学习开发板.采用M5Core作为控制核心，完全兼容模块堆叠与硬件拓展体系.

配备多组环境检测相关的传感器，提供摇杆、旋转编码、矩阵按键、无线射频识别等多种输入方式.

包含三种电机驱动方式，Neopixel灯板、继电器控制.集成多组ADC、DAC转换电路，支持RS485、RS232总线通信，并为每一个模块提供独立电源开关.

结合自带物联网属性的M5Core用作控制核心，涵盖了"声、光、电、力"学等多个方面，M5IoT-kit开发板会是你学习硬件、编程的一大利器.

## 产品特性

-  兼容Module堆叠、Unit拓展体系
-  Proto板、M5-BUS总线拓展
-  各模块带有独立电源开关
-  环境传感器系列（温度、湿度、气压、光线、麦克风）
-  摇杆输入
-  8路继电器输出
-  4路DAC，4路ADC
-  4x4按键矩阵
-  8x8 矩阵 Neopixel
-  旋转编码器
-  单路舵机
-  直流电机（带反馈）
-  四相五线制步进电机
-  无线射频识别读卡器
-  RS-458，RS232通信功能

## 模块参数


| **模块名称** | **工作电压**  |**相关参数** |
| :------: | :------: | :------: |
| ADC | 5V | 4通道ADC接口/内置ADS1115 |
| DAC | 5V | 4通道DAC接口/内置DAC6574 |
| Joystick | 3.3V | X/Y轴电位器输入,Z轴按键输入  |
| DHT12  | 3.3V | I2C地址0x5C |
| BMP280 | 3.3V | I2C地址0x76  |
| Light | 3.3V  | 支持模拟量/数字量采集/可调节阀值  |
| Microphone| 3.3V  | 支持模拟量/数字量采集/可调节阀值 |
| Relay	| 5V  | 8路控制/3A-220V-AC/3A-30V-DC  |
| Neopixel| 5V  | 8x8矩阵灯  |
| Servo  | 5V  |  10KG扭力 |
| DC-Motor | 5V  |  带反馈，集成LV8548MC|
| Stepmotor | 5V | 四相五线制 集成LV8548MC|
| RFID | 3.3V | 读写距离: < 8 cm/内置MFRC522 |
| RS485	| 5V  | 内置SP485EEN-L/TR |
| RS232| 5V  | 内置MAX232ESE |
| Encode |  | 旋转编码器/带按键输入|
| Proto |  | 板孔数量x170|
| Keyboard|   | 4x4按键矩阵  |


## 套件清单

- 1x M5Stack M5IoT-kit
- 1x 12V 电源适配器
- 12x 面包线

## 参考文档

**数据手册**

- [ADS1115](http://www.ti.com/lit/ds/symlink/ads1115.pdf)

- [DAC6574](http://www.ti.com/cn/lit/ds/symlink/dac6574.pdf)

- [LV8548MC](https://www.onsemi.cn/PowerSolutions/document/ANDLV8548MC-D.PDF)

- [TPS54360](http://www.ti.com/lit/ds/symlink/tps54360.pdf)

- [RC522](https://www.nxp.com/docs/en/data-sheet/MFRC522.pdf)

- [MAX232ESE](https://pdf1.alldatasheet.com/datasheet-pdf/view/73114/MAXIM/MAX232ESE.html)

- [MAX4466](http://pdf-file.ic37.com/pdf1/MAXIM/MAX4466_datasheet_430883/702566/MAX4466_datasheet.pdf)

- [SP485EEN-L/TR](http://pdf-file.ic37.com/pdf4/EXAR/SP485_datasheet_891519/145610/SP485_datasheet.pdf)

- [BMP280](https://www.mouser.cn/pdfDocs/BST-BMP280-DS001.pdf)


**原理图**

- [M5IoT-kit](https://github.com/m5stack/M5-Schematic/tree/master/Applications/M5IoT-kit)

### 案例

#### Arduino IDE

-  **Joystick** - [摇杆模块案例程序](https://github.com/m5stack/M5-ProductExampleCodes/tree/master/App/M5IoT-kit/joystick)

-  **DHT12+BMP280** - [环境传感器模块案例程序](https://github.com/m5stack/M5Stack/tree/master/examples/Unit/ENV)

-  **Light** - [光线传感器案例程序](https://github.com/m5stack/M5Stack/tree/master/examples/Unit/Light)

-  **Relay** - [继电器模块案例程序](https://github.com/m5stack/M5Stack/tree/master/examples/Unit/Relay)

-  **Microphone** - [麦克风案例程序](https://github.com/m5stack/M5-ProductExampleCodes/tree/master/App/M5IoT-kit/Microphone)

-  **Neopixel** - [矩阵灯案例程序](https://github.com/m5stack/M5-ProductExampleCodes/tree/master/Unit/NEOPIXEL/Arduino)

-  **Servo** - [舵机驱动案例程序](https://github.com/m5stack/M5-ProductExampleCodes/tree/master/App/M5IoT-kit/servo)

-  **DC-Motor** - [直流电机案例程序](https://github.com/m5stack/M5-ProductExampleCodes/tree/master/App/M5IoT-kit/DC-Motor)

-  **RFID** - [无线射频模块案例程序](https://github.com/m5stack/M5Stack/tree/master/examples/Unit/RFID)
