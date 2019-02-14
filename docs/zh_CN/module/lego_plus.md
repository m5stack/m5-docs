# LEGO+ - 乐高电机驱动模块 {docsify-ignore-all}

<img src="assets/img/product_pics/module/module_lego_plus_01.png" width="30%" height="30%"><img src="assets/img/product_pics/module/module_lego_plus_02.png" width="60%" height="60%">

***

:memo:**[描述](#描述)**&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;:electric_plug:**[原理图](#原理图)**&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;🛒**[购买链接](https://item.taobao.com/item.htm?spm=a1z10.3-c.w4002-1172588106.13.7698425eZ5TWJR&id=583130748767)**

## 描述

**<mark>LEGO+</mark>** 模块是直流编码电机模块，内置MEGA328芯片，管理和控制每个DC口电机。LEGO+模块与M5Core之间通过I2C通信，其I2C地址为0x56。
模块还自带了直流电源接口，如果需要更高的电压输入驱动电机的话，可以接入电源。

## 特性

-  电源接口输入电压范围：6-12V

## 包含

-  1x LEGO+模块
-  1x 10cm LEGO线
-  1x DC接头

## 相关链接

- **[官方频道视频](https://i.youku.com/i/UNjE1ODA2MzE0OA==?spm=a2hzp.8253869.0.0)**

- **[官方论坛](http://forum.m5stack.com/)**

- **[模块内MEGA328固件](https://github.com/m5stack/M5-ProductExampleCodes/tree/master/Module/LEGO_PLUS/firmware_328p)**

## 例程

<!-- ### 1. Arduino IDE -->



### 2. UIFlow

*具体例程请点击[这里](https://github.com/m5stack/M5-ProductExampleCodes/tree/master/Module/LEGO_PLUS/UIFlow)。*

<img src="assets/img/product_pics/module/module_example/LEGO_PLUS/example_module_lego_plus_03_zh_CN.png">


## 原理图

<img src="assets/img/product_pics/module/lego_plus_sch.png">

## NOTE

如果您希望升级 **MEGA328 芯片**的固件的话，可以通过模块中的 **ISP** 口对 **MEGA328** 升级。下图是 模块中的 ISP 接口。

<img src="assets/img/product_pics/module/module_lego_plus_03.png">