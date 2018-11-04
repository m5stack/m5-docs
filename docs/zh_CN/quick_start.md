# 快速上手(Quick Start)

**这篇文章主要帮助你搭建M5Stack系列产品中<mark>Arduino</mark>，<mark>MicroPython</mark>的开发环境，并通过简单的例子引导你学会使用和开发M5Stack的所有产品，实现自己的创意作品。**

## 介绍(Introduction)

**M5是以M5Core主控为核心的一系列可堆叠、模块化的电子产品。 M 代表可堆叠的模块，5 代表模块尺寸为5 * 5 cm大小。**

## 需要准备的(What Your Need)

在开发之前，你需要着手准备一下东西：

* 一台装了Windows, Linux 或者 Mac系统的**电脑**
* 一根 **Type-C** 线

在搭建环境之前，你需要做一下软件准备：

1. 建立板子和PC之间的串口连接：

  [如何下载串口驱动并建立串口连接](/en/related_documents\establish_serial_connection)

## 快速上手(Quick Start)

!> **注意** 确保你的板子已经能够与PC进行串口通信。如果还没的话，参考这篇教程 [如何下载串口驱动并建立串口连接](/en/related_documents\establish_serial_connection) for connection.

首先，在能进行串口通讯之后，你要根据板子类型和下面的教程，下载对应的固件程序(.bin)到板子里。 固件程序后缀名是.bin。 [如何烧录固件程序](/en/related_documents\how_to_burn_firmware)

点击下图中你所对应的板子开始开发，实现创意：

<img src="assets/img/getting_started_pics/m5stack_core.png"> | <img src="assets/img/getting_started_pics/m5camera.jpg">  | <img src="assets/img/getting_started_pics/M5Bala.jpg">
---|---|---
[M5StackCore](/zh_CN/quick_start/m5core/m5stack_core_quick_start) | [M5Camera](/zh_CN/quick_start/m5camera/m5camera_quick_start) | [M5BALA](/zh_CN/quick_start/bala/bala_quick_start)

## 练习(Practice)

**最好做一下下面对应的练习版块，这样更加熟悉如何使用M5Stack产品。**

<img src="assets/img/getting_started_pics/programming_mode_arduino.png"> | <img src="assets/img/getting_started_pics/programming_mode_blockly.png">  | <img src="assets/img/getting_started_pics/programming_mode_micropython.png">
---|---|---
[Arduino](/en/practice\practice_arduino) | [M5Flow-Blockly](/en/practice\practice_blockly) | [M5Flow-MicroPython](/en/practice\practice_micropython)

## 相关文档(Related Documents)

- [如何下载串口驱动并建立串口连接](/en/related_documents/establish_serial_connection)
- [如何烧录固件](/en/related_documents/how_to_burn_firmware)
- [如何让Core连接能上网的WIFI热点](/en/related_documents/how_to_connect_wifi_using_core)
- [如何升级Arduino IDE中的M5Stack库](/en/related_documents/upgrade_m5stack_lib)