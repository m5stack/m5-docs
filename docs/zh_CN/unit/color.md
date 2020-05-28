# COLOR

<div class="badge badge-pill badge-primary product_sku_tag">SKU:U009</div>

<div class="product_pic"><img src="assets/img/product_pics/unit/M5GO_Unit_color.webp"></div>

## 描述

**COLOR** 是一款颜色识别 Unit，其内部集成**TCS3472**彩色光数字转换器,能够将其检测到颜色值转换为RGB数据返回给M5Core.该 Unit 通过 GROVE A 接口（I2C）与M5Core通信，I2C地址为0x29.

**识别颜色原理：**

在 TCS3472 中，内嵌了 3*4 阵列的滤波光电二极管和 16 位模拟转转换器。在 12 个光电二极管中，3个具有红色滤光片，3个具有绿色滤光片，3个具有蓝色滤光片，3个没有滤光片（透明）。

<img src="assets/img/product_pics/unit/color/unit_color_07.webp">

检测物体颜色时，TCS3472 会返回四个通道数据 - 红色（R），绿色（G），蓝色（B）和清除（C）（未过滤）。红色，绿色和蓝色通道（RGB）的响应可用于确定特定光源的色度坐标（x，y）。

<img src="assets/img/product_pics/unit/color/unit_color_04.webp">

色度计算过程概述：

<img src="assets/img/product_pics/unit/color/unit_color_05.webp">

最终得到色度坐标（x，y），之后参考下图，以获得推荐的颜色。

<img src="assets/img/product_pics/unit/color/unit_color_06.webp">

该 Unit 与 M5Core 通过 GROVE A 接口 ( IIC ) 通信，其 I2C 地址是 0x29 。

## 产品特性

- GROVE 接口, 支持 [UIFlow](http://flow.m5stack.com) 、 [Arduino](http://www.arduino.cc)
- 2x LEGO 兼容孔

## 包含

- 1x COLOR Unit
- 1x Grove 线

## 应用

- 产品颜色验证
- 颜色追踪机器人

## 规格参数

<table>
   <tr style="font-weight:bold">
      <td>规格</td>
      <td>参数</td>
   </tr>
   <tr>
      <td>IC型号</td>
      <td>TCS3472</td>
   </tr>
   <tr>
      <td>工作温度范围</td>
      <td>-40°C~85°C</td>
   </tr>
   <tr>
      <td>通讯方式</td>
      <td>IIC</td>
   </tr>
   <tr>
      <td>净重</td>
      <td>4g</td>
   </tr>
   <tr>
      <td>毛重</td>
      <td>17g</td>
   </tr>
   <tr>
      <td>产品尺寸</td>
      <td>32.2*24.2*8.2mm</td>
   </tr>
   <tr>
      <td>包装尺寸</td>
      <td>67*53*12mm</td>
   </tr>
</table>

## 相关链接

-  **Datasheet** 
    - [TCS3472](https://m5stack.oss-cn-shenzhen.aliyuncs.com/resource/docs/datasheet/unit/TCS3472_en.pdf)

## EasyLoader

>EasyLoader是一个简洁快速的程序烧录器，其内置了一个产品相关的案例程序，通过简单步骤将其烧录至主控，即可进行一系列的功能验证.**(程序烧录前，请根据设备类型安装相应驱动程序. M5Core型主机[请点击此处查看CP210X驱动安装教程](zh_CN/arduino/arduino_development?id=安装串口驱动)，M5StickC/V/T/ATOM系列可免驱动使用)**

<div class="easyloader-box">
    <div style="background-color:white;">
        <div><img src="https://m5stack.oss-cn-shenzhen.aliyuncs.com/image/easyloader_intro.webp"></div>
        <div class="easyloader-btn">
            <a href="https://m5stack.oss-cn-shenzhen.aliyuncs.com/EasyLoader/Windows/UNIT/For%20M5Core/EasyLoader_Color_UNIT_With_M5Core.exe">Windows</a>
            <a href="https://m5stack.oss-cn-shenzhen.aliyuncs.com/EasyLoader/MacOS/UNIT/EasyLoader_Color_UNIT_With_M5Core.dmg">MacOS</a>
            <!-- <a>Linux</a>
            <a>MacOS</a> -->
        </div>
    </div>
    <div>
        <video id="example_video" controls>
            <source src="https://m5stack.oss-cn-shenzhen.aliyuncs.com/video/Product_example_video/Unit/Color_UNIT.mp4" type="video/mp4">
        </video>
        <div class="easyloader-mask">
        <a>
            <svg id="play-btn" t="1583228776634" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="4152" width="75" height="75"><path d="M512 0C229.216 0 0 229.216 0 512s229.216 512 512 512 512-229.216 512-512S794.784 0 512 0z m0 928C282.24 928 96 741.76 96 512S282.24 96 512 96s416 186.24 416 416-186.24 416-416 416zM384 288l384 224-384 224z" p-id="4153" fill="#007aff"></path></svg></a>
            <p>案例描述:</p>
            <p>传感器采集当前CRGB数值，串口打印输出.</p>
        </div>
    </div>
</div>

### 管脚映射

<table>
 <tr><td>M5Core(GROVE A)</td><td>GPIO22</td><td>GPIO21</td><td>5V</td><td>GND</td></tr>
 <tr><td>COLOR Unit</td><td>SCL</td><td>SDA</td><td>5V</td><td>GND</td></tr>
</table>

## 原理图

<img src="assets/img/product_pics/unit/color_sch.JPG">

## 案例程序

### 1.Arduino IDE

- [请点击获取Arduino示例程序](https://github.com/m5stack/M5Stack/tree/master/examples/Unit/COLOR_TCS3472)

烧录了例程后，串口显示终端会打印原始值，包括明光感应值(Clear)、红、绿、蓝(RGB)

下图是感应红色的输出结果

<img src="assets/img/product_pics/unit/unit_example/COLOR/example_unit_color_result_01.webp">

### 2.UIFlow

- [点击此处获取UIFlow示例](https://github.com/m5stack/M5-ProductExampleCodes/tree/master/Unit/COLOR/UIFlow)

<img src="assets/img/product_pics/unit/color/color.webp">

## 相关视频

**COLOR 案例 - 01**

<video class="video_size" controls>
    <source src="https://m5stack.oss-cn-shenzhen.aliyuncs.com/video/Blog/Twitch201902/Color%20Unit.mp4" type="video/mp4">
</video>

<script>

   var purchase_link = 'https://m5stack.com/collections/m5-unit/products/color-unit';

   anchor_search(purchase_link);
   scrollFunc();

</script>