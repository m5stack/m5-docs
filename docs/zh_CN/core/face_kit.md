# FACES Kit {docsify-ignore-all}

**[GameBoy Keyboard](#gameBoy-keyboard)**&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;**[Calculator Keyboard](#calculator-keyboard)**&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;**[QWERTY Keyboard](#qeerty-keyboard)**&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;**[FACES Charger 充电座](#faces-charger-充电座)**&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;**[相关链接](#相关链接)**

**FACES Kit** 是一系列功能面板的集合.套件内包含了三个常用的功能面板，"GameBoy（游戏键盘）"、"Calculator（计算器键盘）"、"QWERTY（输入全键盘）".内部集成**MEGA328**处理器，通过I2C通信协议（0x08）工作在从机模式下.根据需求去运用这3个不同的功能面板，进而实现用户与M5Core之间的人机交互.

如果你想用 M5Core 玩一些经典小游戏，那么使用GameBoy面板和 M5Core 会是完美的方案.你需要做的就是将游戏模拟器程序上传到 M5Core 上，并连接好 GameBoy 面板.连接图如下:

*下载游戏：https://docs.m5stack.com/#/zh_CN/quick_start/faces/gameboy_burn_a_nes_game*

<img src="assets/img/product_pics/core/faces_kit/gameboy_01.png">

另外两个面板是计算器键盘和输入全键盘，你可以将它们运用在那些需要输入信息以及复杂控制的应用场景中.

<img src="assets/img/product_pics/core/faces_kit/calculator.png">

### QWERTY Keyboard

<img src="assets/img/product_pics/core/faces_kit/qwerty.png">

除了三个功能面板之外，套件内还提供了 Face 的专用充电座（充电座内置磁铁，能够稳定的吸附主机，并通过 POGO pin 对主机进行充电），杜邦线等配件.

<img src="assets/img/product_pics/core/faces_kit/charger.png">

关于本套件中的主机"Gray"的更多信息，请点击查看**Gray套件**

## 产品特性

- 5V 直流电源
- USB Type-C
- 基于 ESP32 开发
- 16 MByte PSRAM
- MPU9250
- 扬声器，按键x3，LCD屏幕（320 * 240），电源/复位按键x1
- 2.4G天线：Proant 440
- TF卡插槽（最大可拓展16GB）
- 电池总线母座和 150 mAh 锂电池
- 可拓展的引脚与接口
- Grove 接口
- M-Bus总线母座 & 引脚
- 开发平台 [UIFlow](http://flow.m5stack.com), [MicroPython](http://micropython.org/), [Arduino](http://www.arduino.cc)


### 套件清单:

- 1x GRAY Controller
- 1x FACES 充电座
- 1x FACES 挂绳
- 1x 面板贴纸
- 3x FACES 键盘(GameBoy, Calculator, QWERTY)
- 8x 杜邦线
- 6x M3x10 螺丝
- 1x 六角螺丝扳手

<img src="assets/img/product_pics/core/faces_kit/faces_kit.png">

## 烧录出厂固件

如果您打算自己烧录 FACES Kit 的出厂固件，需要到[官网](https://m5stack.com/download)下载 M5Burner。将 FACES 通过 Type-C USB 线连接到 PC，然后通过 M5Burner 烧录

<img src="assets/img/product_pics/core/faces_kit/download_faces_firmware_01.png">

<img src="assets/img/product_pics/core/faces_kit/download_faces_firmware_02.png">

### 相关链接

- **数据手册** - [ESP32](https://www.espressif.com/sites/default/files/documentation/esp32_datasheet_cn.pdf) - [MPU9250](https://www.invensense.com/download-pdf/mpu-9250-datasheet/)

- **寄存器手册** - [IP5306](https://github.com/m5stack/M5-Schematic/blob/master/Core/IIC_IP5306_REG_V1.4.pdf)

- **[例程](https://github.com/m5stack/M5Stack/tree/master/examples/Modules/FACES)**

- **[面板的 MEGA328P 固件](https://github.com/m5stack/FACES-Firmware)**

- **[购买链接](https://item.taobao.com/item.htm?spm=a1z10.3-c.w4002-1172588106.15.686c425eRw6D4J&id=562810115476)**

### 注意：

*FACES Kit 中配置了[灰色版本](https://docs.m5stack.com/#/zh_CN/core/gray)的 Core，而我们的 Core 有几个版本，同样可以将其他版本的 Core 堆叠到 FACES 的底座上用。下图是它们主要区别的比较，方便您使用。*

- *如果想**查看**详细的资源对比，请点击[这里](https://github.com/m5stack/M5-Schematic/blob/master/Core/hardware_difference_between_cores_zh_CN.md)。*

- *如果想**下载**详细的资源对比，请点击[这里](https://github.com/m5stack/M5-Schematic/blob/master/Core/M5%20Core%20Detailed%20Comparison.xlsx)。*

<!-- <img src="assets/img/product_pics/core/core_comparison_04_zh_CN.png"> -->

<img src="https://m5stack.oss-cn-shenzhen.aliyuncs.com/image/m5-docs_table/core_comparison/core_main_comparison_04_zh_CN.png">

<img src="https://m5stack.oss-cn-shenzhen.aliyuncs.com/image/m5-docs_table/core_comparison/core_main_comparison_05_zh_CN.png">