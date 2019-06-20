# FACES Kit {docsify-ignore-all}

<img src="assets/img/product_pics/core/faces_kit/face_01.jpg" width="30%" height="30%" ><img src="assets/img/product_pics/core/faces_kit/face_02.jpg" width="30%" height="30%" ><img src="assets/img/product_pics/core/faces_kit/face_03.jpg" width="30%" height="30%" >


:memo:**[描述](#描述)**&nbsp;&nbsp;&nbsp;:bulb:**[上手指南](en/quick_start/m5core/m5stack_core_quick_start)**&nbsp;&nbsp;&nbsp;:octocat:**[例程](https://github.com/m5stack/M5Stack/tree/master/examples/Modules/FACES)**&nbsp;&nbsp;&nbsp;:electric_plug:**[原理图](https://github.com/m5stack/M5-Schematic/blob/master/Core/Basic/M5-Core-Schematic(20171206).pdf)**&nbsp;&nbsp;&nbsp;🛒**[购买链接](https://m5stack.com/collections/m5-core/products/m5go-iot-starter-kit-stem-education)**&nbsp;&nbsp;&nbsp;


## 描述

**FACES Kit** 是一系列功能面板的集合.套件内包含了三个常用的功能面板，"GameBoy（游戏键盘）"、"Calculator（计算器键盘）"、"QWERTY（输入全键盘）".内部集成**MEGA328**处理器，通过I2C通信协议（0x08）工作在从机模式下.根据需求去运用这3个不同的功能面板，进而实现用户与M5Core之间的人机交互.

### GameBoy Keyboard

如果你想用 M5Core 玩一些经典小游戏，那么使用GameBoy面板和 M5Core 会是完美的方案.你需要做的就是将游戏模拟器程序上传到 M5Core 上，并连接好 GameBoy 面板.连接图如下:

*下载游戏：https://docs.m5stack.com/#/zh_CN/quick_start/faces/gameboy_burn_a_nes_game*

<img src="assets/img/product_pics/core/faces_kit/face_05.jpg">

另外两个面板是计算器键盘和输入全键盘，你可以将它们运用在那些需要输入信息以及复杂控制的应用场景中.

### Calculator Keyboard

<img src="assets/img/product_pics/core/faces_kit/calculator.png">

### QWERTY Keyboard

<img src="assets/img/product_pics/core/faces_kit/face_04.jpg">

### FACE Charger

除了三个功能面板之外，套件内还提供了 Face 的专用充电座（充电座内置磁铁，能够稳定的吸附主机，并通过 POGO pin 对主机进行充电），杜邦线等配件.

<img src="assets/img/product_pics/core/faces_kit/charger.png">

关于本套件中的主机"Gray"的更多信息，请点击查看**Gray套件**

## 产品特性

- 5V 直流电源
- USB Type-C
- 基于 ESP32 开发
- 16 MByte flash(旧版：4 MByte flash)
- MPU9250
- 扬声器，按键x3，LCD屏幕（320 * 240），电源/复位按键x1
- 2.4G天线：Proant 440
- TF卡插槽（最大可拓展16GB）
- 电池总线母座和 150 mAh 锂电池
- 可拓展的引脚与接口
- Grove 接口
- M-Bus总线母座 & 引脚
- 开发平台 [UIFlow](http://flow.m5stack.com), [MicroPython](http://micropython.org/), [Arduino](http://www.arduino.cc)


## 套件清单:

- 1x GRAY Controller
- 1x FACES 充电座
- 1x FACES 挂绳
- 1x 面板贴纸
- 3x FACES 键盘(GameBoy, Calculator, QWERTY)
- 8x 杜邦线
- 6x M3x10 螺丝
- 1x 六角螺丝扳手

<img src="assets/img/product_pics/core/faces_kit/faces_kit.png">


### 相关链接

- **数据手册** - [ESP32](https://www.espressif.com/sites/default/files/documentation/esp32_datasheet_cn.pdf) - [MPU9250](https://www.invensense.com/download-pdf/mpu-9250-datasheet/)

- **寄存器手册** - [IP5306](https://github.com/m5stack/M5-Schematic/blob/master/Core/IIC_IP5306_REG_V1.4.pdf)


### 注意：

*FACES Kit 中配置了[灰色版本](https://docs.m5stack.com/#/zh_CN/core/gray)的 Core，而我们的 Core 有几个版本，同样可以将其他版本的 Core 堆叠到 FACES 的底座上用。下图是它们主要区别的比较，方便您使用。*

- *如果想**查看**详细的资源对比，请点击[这里](https://github.com/m5stack/M5-Schematic/blob/master/Core/hardware_difference_between_cores_zh_CN.md)。*

- *如果想**下载**详细的资源对比，请点击[这里](https://github.com/m5stack/M5-Schematic/blob/master/Core/M5%20Core%20Detailed%20Comparison.xlsx)。*


<img src="https://m5stack.oss-cn-shenzhen.aliyuncs.com/image/m5-docs_table/core_comparison/core_main_comparison_04_zh_CN.png">

<img src="https://m5stack.oss-cn-shenzhen.aliyuncs.com/image/m5-docs_table/core_comparison/core_main_comparison_05_zh_CN.png">


**<mark>注意2：M5PORT 说明 </mark>**
*不同颜色的GROVE端口分别代表不同的功能.红色的PortA（21/22），为默认的I2C协议接口，黑色的PortB（26/36）, 支持AD/DA转换与信号总线通信.蓝色的PortC（16/17）, 支持Uart串口通信.在使用Unit进行功能拓展的时候，只需要匹配二者的端口的颜色，相应的进行连接即可正常使用.不仅提供简洁的硬件连接方式，还支持引脚的重映射.PortA（红色）被作为信号总线连接至是ESP32的GPIO21/22 ，没有AD通道转换方案，因此不能用作模拟输入使用.
<img src="assets/img/product_pics/core/basic/basic_notice_01.jpg">
使用AD读取功能:
1，使用杜邦线连接机身侧面的能够AD转换的引脚.
2，堆叠一个M5GO底座，使用其提供PortB.
3，使用PbHUB连接至PortA，拓展出6个PortB.
有关引脚分配和引脚重映射的更多信息，请查阅[ESP32数据手册](https://www.espressif.com/sites/default/files/documentation/esp32_datasheet_cn.pdf)

<br>
**<mark>注意3：Face Kit 出厂程序</mark>**<br>
出厂程序由于没有main.py文件，因此错误信息提示是正常的，并不意味着硬件问题,请放心使用. <br>
<img src="assets/img/product_pics/core/faces_kit/faces_kit_06.png" width="30%" hight="30%">

## 用户作品
- **[2048 Game with FACES Kit- Video](https://www.youtube.com/watch?v=ccEq0s7dU84)**
- **[2048 Game with FACES Kit- Source Code](https://github.com/phillowcompiler/2048_M5Stack)**