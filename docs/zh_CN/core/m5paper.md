# M5Paper

<el-tag effect="plain">SKU:xxx</el-tag>

## 描述

**M5Paper** 是M5Stack推出的一款可触控墨水屏主控设备，控制器采用ESP32-D0WD。正面嵌入了一块分辨率为540*960 @4.7"的电子墨水屏，支持16级灰度显示。搭配GT911电容式触控面板，支持两点触控与多种手势操作，丰富人机交互体验。相对于普通的LCD的屏幕，电子墨水屏能够提供用户更好的文本阅读体验，即便在室外光线环境下屏幕上的文本也能够非常清晰自然的显示，并且做到更加的省电 , 即便是在断电情况下也能够保持图像显示。集成拨轮编码器, SD卡槽， 与物理按键。额外挂载FM24C02储存芯片(256KB-EEPROM)，方便用户数据的断电存储。内置了1150mAh锂电池，结合内部的RTC(BM8563)可实现休眠与唤醒功能，能够为设备提供强大的续航能力。开放了3组HY2.0-4P外设接口能够拓展各式各样的传感器设备，为后续的应用功能开发提供无限可能。

## 产品特性

- 内嵌ESP32，支持WiFi、蓝牙
- 内置16M Flash
- 低功耗显示面板
- 支持两点触控
- 近180度可视角
- 人机交互接口
- 内置1150mAh大容量锂电池·
- 丰富的拓展接口

## 包含

-  1x M5Paper
-  1x Type-C USB(20cm)

## 应用

- 物联网控制器
- 电子书阅读器
- 工业仪器显示面板
- 智能家居设备

## 规格参数

<table>
   <tr style="font-weight:bold">
      <td>主控资源</td>
      <td>参数</td>
   </tr>
   <tr>
      <td>ESP32-D0WD</td>
      <td>240MHz dual core, 600 DMIPS, 520KB SRAM, Wi-Fi, dual mode Bluetooth</td>
   </tr>
   <tr>
      <td>Flash</td>
      <td>16MB</td>
   </tr>
   <tr>
      <td>PSRAM</td>
      <td>8MB</td>
   </tr>
   <tr>
      <td>输入电压</td>
      <td>5V @ 500mA</td>
   </tr>
   <tr>
      <td>接口</td>
      <td>TypeC*1, HY2.0-4P*3 , SD卡槽</td>
   </tr>
   <tr>
      <td>墨水屏</td>
      <td>型号：EPD_ED047TC1 | 540*960@4.7" | 灰度 : 16级 | 显示区域 : 58.32*103.68mm | 显示驱动芯片 : IT8951</td>
   </tr>
   <tr>
      <td>物理按键</td>
      <td>拨轮编码器*1 ， 复位按键*1</td>
   </tr>
   <tr>
      <td>RTC</td>
      <td>BM8563</td>
   </tr>   
   <tr>
      <td>天线</td>
      <td>2.4G 3D天线</td>
   </tr>
   <tr>
      <td>PIN脚引出</td>
      <td>G25, G32, G26, G33, G18, G19</td>
   </tr>
   <tr>
      <td>电池</td>
      <td>1150mAh@3.7V</td>
   </tr>
   <tr>
      <td>工作温度</td>
      <td>32°F to 104°F ( 0°C to 40°C )</td>
   </tr>
   <tr>
      <td>净重</td>
      <td>xxg</td>
   </tr>
   <tr>
      <td>毛重</td>
      <td>xxg</td>
   </tr>
   <tr>
      <td>产品尺寸</td>
      <td>x*x*xmm</td>
   </tr>
   <tr>
      <td>包装尺寸</td>
      <td>x*x*xmm</td>
   </tr>
   <tr>
      <td>外壳材质</td>
      <td>Plastic ( PC )</td>·
   </tr>
</table>

## 管脚映射

**墨水屏幕 & SD Card**

屏幕像素：540*960
 
<table>
 <tr><td>ESP32 Chip</td><td>GPIO13</td><td>GPIO12</td><td>GPIO15</td><td>GPIO4</td></tr>
 <tr><td>IT8951</td><td>MISO</td><td>MOSI</td><td>SCK</td><td>CS</td><td>/</td></tr>
 <tr><td>SD Card</td><td>MISO</td><td>MOSI</td><td>SCK</td><td>/</td><td>CS</td></tr>
</table>


**拨轮编码器**

<table>
 <tr><td>ESP32 Chip</td><td>GPIO37</td><td>GPIO38</td><td>GPIO39</td></tr>
 <tr><td>拨轮编码器</td><td>右转信号</td><td>编码器按钮/电源按钮</td><td>左转信号</td></tr>
</table>


**内部I2C连接**

<table>
 <tr><td>ESP32 Chip</td><td>GPIO21</td><td>GPIO22</td><td>GPIO36</td></tr>
 <tr><td>GT911</td><td>SDA</td><td>SCL</td><td>INT</td></tr>
 <tr><td>SHT30</td><td>SDA</td><td>SCL</td><td>/</td></tr>
 <tr><td>BM8563</td><td>SDA</td><td>SCL</td><td>/</td></tr>
 <tr><td>FM24C02</td><td>SDA</td><td>SCL</td><td>/</td></tr>
</table>

**USB转串口下载**

<table>
 <tr><td>ESP32 Chip</td><td>GPIO1</td><td>GPIO3</td></tr>
 <tr><td>CP2104</td><td>RXD</td><td>TXD</td></tr>
</table>

## M5Paper-HY2.0 4P端口

<table>
      <thead>
         <th>PORT</th>
         <th>PIN</th>
         <th>备注:</th>
      </thead>
      <tbody>
      <tr>
         <td>PORT.A</td>
         <td>G25,G32</td>
         <td>I2C</td>
      </tr>
      <tr>
         <td>PORT.B</td>
         <td>G26,G33</td>
         <td>DAC/ADC</td>
      </tr>
      <tr>
         <td>PORT.C</td>
         <td>G18,G19</td>
         <td>UART</td>
      </tr>
    </tbody>
</table>

## ESP32 ADC/DAC可映射引脚

<table>
      <thead>
         <th>ADC1</th>
         <th>ADC2</th>
         <th>DAC1</th>
         <th>DAC2</th>
      </thead>
      <tbody>
      <tr>
         <td>8 通道</td>
         <td>10 通道</td>
         <td>2 通道</td>
         <td>2 通道</td>  
      </tr>
      <tr>
         <td>G32-39</td>
         <td>G0/2/4/12-15/25-27</td>
         <td>G25</td>
         <td>G26</td>
      </tr>
    </tbody>
</table>

有关引脚分配和引脚重新映射的更多信息，请参考[ESP32 datasheet](https://m5stack.oss-cn-shenzhen.aliyuncs.com/resource/docs/datasheet/core/esp32_datasheet_cn.pdf)


## 相关链接

- **Datasheet** 
   - [ESP32](https://m5stack.oss-cn-shenzhen.aliyuncs.com/resource/docs/datasheet/core/esp32_datasheet_cn.pdf)
   - [SHT30 Datasheet](https://m5stack.oss-cn-shenzhen.aliyuncs.com/resource/docs/datasheet/unit/SHT3x_Datasheet_digital.pdf)
   - [BM8563](https://m5stack.oss-cn-shenzhen.aliyuncs.com/resource/docs/datasheet/core/BM8563_V1.1_cn.pdf)
   - [SY7088](https://m5stack.oss-cn-shenzhen.aliyuncs.com/resource/docs/datasheet/core/SY7088-Silergy.pdf)
   - [GT911编程指南](https://m5stack.oss-cn-shenzhen.aliyuncs.com/resource/docs/datasheet/core/CoreInk-K048-GDEW0154M09%20V2.0%20Specification.pdf)
   - [GT911-datasheet](https://m5stack.oss-cn-shenzhen.aliyuncs.com/resource/docs/datasheet/core/m5paper/gt911_datasheet.pdf)


## 原理图

<!-- <img src="assets/img/product_pics/core/coreink/coreink_sch1.webp"> -->


<script>

   var purchase_link = 'https://m5stack.com/collections/m5-core/products/m5stack-core2-esp32-iot-development-kit';

   var quickstart_link = 'https://docs.m5stack.com/#/zh_CN/quick_start/core2/m5stack_core2_quick_start';

   anchor_search(purchase_link,quickstart_link);
   scrollFunc();

</script>