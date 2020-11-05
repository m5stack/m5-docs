# CoreInk

<!-- <el-tag effect="plain">SKU:K010</el-tag> -->

<div class="product_pic"><img class="pic" src="assets/img/product_pics/core/coreink/coreink_01.webp"></div>

## 教程&快速上手

查看教程&快速上手。

<a href="/#/zh_CN/quick_start/coreink/quick_start_arduino"><el-tag effect="plain">Arduino</el-tag></a>

## 描述

**CoreInk** 是M5Stack推出的一款带有电子墨水屏(E-Ink)的主控设备，控制器采用ESP32-PICO-D4。正面嵌入了一块分辨率为200x200 @ 1.54"的电子墨水屏，支持黑/白显示。相对于普通的LCD的屏幕，电子墨水屏能够提供用户更好的文本阅读体验， 同时具有低功耗，掉电图像保持等特性。人机交互方面提供了拨轮开关，与物理按键, 集成LED指示灯与蜂鸣器。内置了390mAh锂电池，结合内部的RTC(BM8563)可实现定时休眠与唤醒功能，能够为设备提供较为优秀的续航能力。在机身的左侧和底部配有独立的电源按键与复位(RST)按键，方便使用与调试。开放了丰富的外设接口(HY2.0-4P、M-BUS、HAT模块接口)能够拓展各式各样的传感器设备，为后续的应用功能开发提供无限可能。

?>注意事项: 使用时请注意避免长时间高频刷新，建议刷新间隔为(15s/次), 请勿长时间暴露在紫外线下, 否则有可能对墨水屏造成不可逆的损害。

<img class="pic" src="assets/img/product_pics/core/coreink/coreink_02.webp">

## 产品特性

- 基于 ESP32 开发，支持WiFi、蓝牙
- 内置4M Flash
- 低功耗显示面板
- 近180度可视角
- 人机交互接口
- 背面磁吸设计
- 内置锂电池
- 丰富的拓展接口

## 包含

-  1x CoreInk
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
      <td>ESP32-PICO-D4</td>
      <td>240MHz dual core, 600 DMIPS, 520KB SRAM, Wi-Fi, dual mode Bluetooth</td>
   </tr>
   <tr>
      <td>Flash</td>
      <td>4MB Flash</td>
   </tr>
   <tr>
      <td>输入电压</td>
      <td>5V @ 500mA</td>
   </tr>
   <tr>
      <td>接口</td>
      <td>TypeC*1, HY2.0-4P*1 , M-BUS总线母座，顶部HAT拓展接口</td>
   </tr>
   <tr>
      <td>墨水屏</td>
      <td>GDEW0154M09 | SPI接口 | 200*200@1.54" | Dpi:184 | 1-bit黑/白显示(灰阶：2) |<br>
         视域尺寸(mm)：27.6x27.6 | 点间距(mm)	0.138x0.138 |刷新时间（s）	0.82 /局刷时间（s）	0.24
      </td>
   </tr>
   <tr>
      <td>物理按键</td>
      <td>可编程按键*1 ， 复位按键*1， 电源按键*1</td>
   </tr>
   <tr>
      <td>LED</td>
      <td>绿色LED x 1</td>
   </tr>
   <tr>
      <td>RTC</td>
      <td>BM8563</td>
   </tr>
   <tr>
      <td>蜂鸣器</td>
      <td>无源蜂鸣器*1</td>
   </tr>   
   <tr>
      <td>天线</td>
      <td>2.4G 3D天线</td>
   </tr>
   <tr>
      <td>PIN脚引出</td>
      <td>G25, G26, G36, G23, G34, G18, G21, G22, G14, G13</td>
   </tr>
   <tr>
      <td>电池</td>
      <td>390mAh@3.7V</td>
   </tr>
   <tr>
      <td>工作温度</td>
      <td>32°F to 104°F ( 0°C to 40°C )</td>
   </tr>
   <tr>
      <td>净重</td>
      <td>32g</td>
   </tr>
   <tr>
      <td>毛重</td>
      <td>xxg</td>
   </tr>
   <tr>
      <td>产品尺寸</td>
      <td>56*40*16mm</td>
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

**墨水屏幕**

屏幕像素：200x200

<table>
 <tr><td>ESP32 Chip</td><td>GPIO4</td><td>GPIO0</td><td>GPIO15</td><td>GPIO9</td><td>GPIO18</td><td>GPIO23</td></tr>
 <tr><td>GDEW0154M09</td><td>BUSY</td><td>RST</td><td>D/C</td><td>CS</td><td>SCK</td><td>MOSI</td></tr>
</table>

**拨轮开关 & 物理按键 & LED & 蜂鸣器**

<table>
 <tr><td>ESP32 Chip</td><td>GPIO37</td><td>GPIO38</td><td>GPIO39</td><td>GPIO5</td><td>GPIO10</td><td>GPIO2</td></tr>
 <tr><td>拨轮开关</td><td>右</td><td>中</td><td>左</td><td>/</td><td>/</td><td>/</td></tr>
 <tr><td>物理按键</td><td>/</td><td>/</td><td>/</td><td>物理按键</td><td>/</td><td>/</td></tr>
 <tr><td>LED</td><td>/</td><td>/</td><td>/</td><td>/</td><td>LED</td><td>/</td></tr>
 <tr><td>蜂鸣器</td><td>/</td><td>/</td><td>/</td><td>/</td><td>/</td><td>蜂鸣器</td></tr>
</table>

**USB转串口下载**

<table>
 <tr><td>ESP32 Chip</td><td>GPIO1</td><td>GPIO3</td></tr>
 <tr><td>CP2104</td><td>RXD</td><td>TXD</td></tr>
</table>


**内部I2C连接**

<table>
 <tr><td>ESP32 Chip</td><td>GPIO21</td><td>GPIO22</td></tr>
 <tr><td>BM8563</td><td>SDA</td><td>SCL</td></tr>
</table>

## Coreink-HY2.0 4P端口

<table>
      <thead>
         <th>PORT</th>
         <th>PIN</th>
         <th>备注:</th>
      </thead>
      <tbody>
      <tr>
         <td>EXT-PORT</td>
         <td>G32/33</td>
         <td>I2C</td>
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
   - [BM8563](https://m5stack.oss-cn-shenzhen.aliyuncs.com/resource/docs/datasheet/core/BM8563_V1.1_cn.pdf)
   - [SY7088](https://m5stack.oss-cn-shenzhen.aliyuncs.com/resource/docs/datasheet/core/SY7088-Silergy.pdf)
   - [GDEW0154M09](https://m5stack.oss-cn-shenzhen.aliyuncs.com/resource/docs/datasheet/core/CoreInk-K048-GDEW0154M09%20V2.0%20Specification.pdf)

- **API** 

   - [Arduino API](zh_CN/arduino/arduino_home_page)


## 原理图

<img src="assets/img/product_pics/core/coreink/coreink_sch1.webp">


<script>

   var purchase_link = '';

   var quickstart_link = '#/zh_CN/quick_start/coreink/quick_start_arduino';

   anchor_search(purchase_link,quickstart_link);
   scrollFunc();

</script>