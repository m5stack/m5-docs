# M5Paper

<el-tag effect="plain">SKU:K049</el-tag>

<div class="product_pic"><img class="pic" src="assets/img/product_pics/core/m5paper/m5paper_01.webp"></div>

## 教程&快速上手

选择你想使用的开发平台，查看对应的教程&快速上手。

<a href="/#/zh_CN/quick_start/m5paper/quick_start_arduino"><el-tag effect="plain">Arduino</el-tag></a>
<a href="/#/zh_CN/quick_start/m5paper/quick_start_todo"><el-tag effect="plain">ToDo List</el-tag></a>

## 描述

**M5Paper** 是M5Stack推出的一款可触控墨水屏主控设备，控制器采用ESP32-D0WDQ6-V3。正面嵌入了一块分辨率为540*960 @4.7"的电子墨水屏，支持16级灰度显示。搭配GT911电容式触控面板，支持两点触控与多种手势操作。相对于普通的LCD的屏幕，电子墨水屏能够提供用户更好的文本阅读体验， 同时具有低功耗，掉电图像保持等特性。 集成拨轮开关, SHT30温湿度传感器, 与物理按键。 数据储存方面预留了TF-card(microSD)接口，并集成了FM24C02储存芯片提供2K-bit(256x8)-EEPROM用于用户数据的断电存储。内置了1150mAh锂电池，结合内部的RTC(BM8563)可实现休眠与唤醒功能，能够为设备提供强大的续航能力。开放了3组HY2.0-4P外设接口能够拓展各式各样的传感器设备，为后续的应用功能开发提供无限可能。

?>注意事项: 请勿长时间暴露在紫外线下, 否则有可能对墨水屏造成不可逆的损害。M5Paper采用的低功耗电源管理方案与CORE与StickC设备有所不同，使用时，PWR按键作为开机按键使用(长按2s)，如需要使设备关机，则需要通过软件API或是按下背部的复位按键实现，当使用USB供电时，则无法关机。

## 产品特性

- 内嵌ESP32，支持WiFi、蓝牙
- 内置16M Flash
- E-Ink低功耗显示面板
- 支持两点触控
- 近180度可视角
- 背面磁吸设计
- 内置1150mAh大容量锂电池
- HY2.0-4P外设接口*3

## 包含

-  1x M5Paper

## 应用

- 物联网控制器
- 电子书阅读器
- 工业仪器显示面板
- 电子标签

## 规格参数

<table>
   <tr style="font-weight:bold">
      <td>主控资源</td>
      <td>参数</td>
   </tr>
   <tr>
      <td>ESP32-D0WDQ6-V3</td>
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
      <td>TypeC*1, HY2.0-4P*3 , TF-card(microSD)卡槽</td>
   </tr>
   <tr>
      <td>墨水屏</td>
      <td>型号：EPD_ED047TC1 | 540*960@4.7" | 灰度 : 16级 | 显示区域 : 58.32*103.68mm | 显示驱动芯片 : IT8951</td>
   </tr>
   <tr>
      <td>物理按键</td>
      <td>拨轮开关*1 ， 复位按键*1</td>
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
      <td>86g</td>
   </tr>
   <tr>
      <td>毛重</td>
      <td>100g</td>
   </tr>
   <tr>
      <td>产品尺寸</td>
      <td>118*66x*10mm</td>
   </tr>
   <tr>
      <td>包装尺寸</td>
      <td>120*70x*14mm</td>
   </tr>
   <tr>
      <td>外壳材质</td>
      <td>Plastic ( PC )</td>
   </tr>
</table>

## EasyLoader

- **Windows** 
   - [FactoryTest](https://m5stack.oss-cn-shenzhen.aliyuncs.com/EasyLoader/Windows/CORE/EasyLoader_M5Paper_FactoryTest.exe)
   - [ToDo](https://m5stack.oss-cn-shenzhen.aliyuncs.com/EasyLoader/Windows/CORE/EasyLoader_M5Paper_Todo.exe)
   - [Calculator](https://m5stack.oss-cn-shenzhen.aliyuncs.com/EasyLoader/Windows/CORE/EasyLoader_M5Paper_Calculator.exe)

- **MacOS** 
   - [FactoryTest](https://m5stack.oss-cn-shenzhen.aliyuncs.com/EasyLoader/MacOS/CORE/EasyLoader_M5Paper_FactoryTest.dmg)
   - [ToDo](https://m5stack.oss-cn-shenzhen.aliyuncs.com/EasyLoader/MacOS/CORE/EasyLoader_M5Paper_Todo.dmg)
   - [Calculator](https://m5stack.oss-cn-shenzhen.aliyuncs.com/EasyLoader/MacOS/CORE/EasyLoader_M5Paper_Calculator.dmg)


## 管脚映射

**墨水屏幕 & TF-card(microSD)**

屏幕像素：540*960
 
<table>
 <tr><td>ESP32 Chip</td><td>GPIO13</td><td>GPIO12</td><td>GPIO14</td><td>GPIO15</td><td>GPIO4</td></tr>
 <tr><td>IT8951</td><td>MISO</td><td>MOSI</td><td>SCK</td><td>CS</td><td>/</td></tr>
 <tr><td>TF-card(microSD)</td><td>MISO</td><td>MOSI</td><td>SCK</td><td>/</td><td>CS</td></tr>
</table>


**拨轮开关**

<table>
 <tr><td>ESP32 Chip</td><td>GPIO37</td><td>GPIO38</td><td>GPIO39</td><td>GPIO2</td></tr>
 <tr><td>拨轮开关</td><td>右</td><td>中按钮/电源按钮</td><td>左</td><td>/</td></tr>
 <tr><td>电源控制</td><td>/</td><td>/</td><td>/</td><td>MOS</td></tr>
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
   - [ESP32](https://m5stack.oss-cn-shenzhen.aliyuncs.com/resource/docs/datasheet/core/esp32_datasheet_en.pdf)
   - [SHT30 Datasheet](https://m5stack.oss-cn-shenzhen.aliyuncs.com/resource/docs/datasheet/unit/SHT3x_Datasheet_digital.pdf)
   - [BM8563](https://m5stack.oss-cn-shenzhen.aliyuncs.com/resource/docs/datasheet/core/BM8563_V1.1_cn.pdf)
   - [SY7088](https://m5stack.oss-cn-shenzhen.aliyuncs.com/resource/docs/datasheet/core/SY7088-Silergy.pdf)
   - [GT911-datasheet](https://m5stack.oss-cn-shenzhen.aliyuncs.com/resource/docs/datasheet/core/m5paper/gt911_datasheet.pdf)

- **API** 

   - [Arduino API](zh_CN/arduino/arduino_home_page?id=m5paper_api)
   - [image2gray tool](https://github.com/m5stack/M5EPD/tree/main/tools)

## Example

- **Arduino** 

   - [FactoryTest](https://github.com/m5stack/M5Paper_FactoryTest)
   - [M5EPD_Todo](https://github.com/m5stack/M5EPD_Todo)
   - [M5EPD_Calculator](https://github.com/m5stack/M5EPD_Calculator)
   - [M5EPD_TTFExample](https://github.com/m5stack/M5EPD_TTFExample)
   - [M5EPD-Lib](https://github.com/m5stack/M5EPD)

>在使用FactoryTest加载特殊字符(如中文，日文)时，请向TF卡根目录放入字体文件，并命名为`font.ttf`。[ttf文件下载地址](https://m5stack.oss-cn-shenzhen.aliyuncs.com/resource/example/Font.ttf)

## 原理图

   - [M5 PAPER 原理图下载](https://m5stack.oss-cn-shenzhen.aliyuncs.com/resource/docs/schematic/Core/m5paper/M5_PAPER_SCH.pdf)

## 相关视频

- 产品介绍

<video class="video_size" controls>
    <source src="https://m5stack.oss-cn-shenzhen.aliyuncs.com/video/Product_example_video/Core/M5PAPER.mp4" type="video/mp4">
</video>

- M5Paper背板拆解教程

<video class="video_size" controls>
    <source src="https://m5stack.oss-cn-shenzhen.aliyuncs.com/video/Product_example_video/Core/paper_open_shell.mp4" type="video/mp4">
</video>

<script>

   var purchase_link = 'https://m5stack.com/collections/black-friday/products/m5paper-esp32-development-kit-960x540-4-7-eink-display-235-ppi';

   var quickstart_link = '/#/zh_CN/quick_start/m5paper/quick_start_arduino';

   anchor_search(purchase_link,quickstart_link);
   scrollFunc();

</script>