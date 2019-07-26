# Butterfly Launcher {docsify-ignore-all}

<img src="assets\img\product_pics\app\butterfly\butterfly_01.jpg" width="30%" height="30%"> <img src="assets\img\product_pics\app\butterfly\butterfly_02.jpg" width="30%" height="30%">

***

:memo:**[描述](#描述)**&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;:bulb:**[步骤](#步骤)**&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;🛒**[购买链接](https://m5stack.com/collections/m5-unit/products/m5stack-butterfly-magic-prop-toy)**&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;

## 描述

**Butterfly Launcher** 是一个酷炫的蝴蝶模型发射器，相比旧版本的发射器，新版配备了MEGA328微处理器、锂电池组件、18个彩色LED灯，以及提供了两个拓展端口（分别用于电源，串口通信）. 实际使用时能够同时串联多个设备，并独立控制它们.

串行通信机制：将多个设备进行串联，为了准确的向某个设备发送指令，我们在代码中附加"id"变量，当指令通过控制器串行传输到设备时，每经过一个设备，变量都将进行减一操作，读取到变量为0的设备则执行命令.

因此，1，我们能够独立控制串行设备中的任意一个，并单独设置它们的LED颜色，闪烁模式，亮度和伺服状态.

2,如同下方视频所示，在LED灯演示时，存在着一定的延迟，假设每个设备有100ms的延迟，并且我们总共有10个，则最后一个设备将有1s的延迟时间.为了优化这种延迟，我们可以对第一个设备进行编程以等待最后一个设备（由于协议的特性，延迟的产生是无法避免的）

## 产品特性

- 可串接拓展
- 18xRGB LED
- UART串行通信
- 支持 [UIFlow](http://flow.m5stack.com)（Blockly/图形化语言）
- 电池容量:120mA


<img src="assets\img\product_pics\app\butterfly\butterfly_03.jpg" width="30%" height="30%"> <img src="assets\img\product_pics\app\butterfly\butterfly_04.jpg" width="30%" height="30%">


## 套件清单

- BUTTERFLY发射器
- 纸蝴蝶模型
- CONNEXT连接线
- 橡皮筋


## 应用

- 时尚科技
- STEM教育

<img src="assets\img\product_pics\app\butterfly\butterfly_05.jpg" width="30%" height="30%">

关于控制程序，我们在UIFLow上封装了一个特别的程序块, 这使得您能够简单地编写控制程序.下面将向您展示如何在UIFlow上添加程序块.

>1，导航到"自定义"，单击"打开"* m5d

<img src="assets\img\product_pics\app\butterfly\1.jpg">

>2，选择butterfly.m5d

<img src="assets\img\product_pics\app\butterfly\2.jpg">

>3，展开Custom选项，选择蝴蝶程序块.

<img src="assets\img\product_pics\app\butterfly\3.jpg">
