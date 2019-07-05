# Application PIANO {docsify-ignore-all}

<img src="assets/img/product_pics/app/app_piano_01.png" width="30%" height="30%">

***

:memo:**[描述](#描述)**&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;:electric_plug:**[管脚映射](#管脚映射)**&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;🛒**[购买链接](https://m5stack.com/collections/m5-application/products/acrylic-piano-board-with-rgb-led)**

## 描述

**PIANO** 是一款触摸板钢琴.配备两个触摸传感器**TS20**，通过I2C协议与M5Core进行通信.通过触摸控制钢琴的发声，适合应用在STEM教育与音乐表演场景.

I2C 地址分别为0x6A和0x7A.

<img src="assets/img/product_pics/app/app_piano_02.png">

## 管脚映射

**触摸芯片 TS20 & LED灯**

<table>
 <tr><td>ESP32 Chip</td><td>GPIO7</td><td>GPIO6</td><td>GPIO5</td><td>GPIO26</td><td>GPIO2</td></tr>
 <tr><td>TS20</td><td>RESET</td><td>EN</td><td>SCL</td><td>SDA</td><td>/</td></tr>
 <tr><td>RGB LED</td><td>/</td><td>/</td><td>/</td><td>/</td><td>Signal Pin</td></tr>
</table>
