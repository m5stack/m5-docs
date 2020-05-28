# LAN 底座

<div class="badge badge-pill badge-primary product_sku_tag">SKU:K012</div>

<div class="product_pic"><img src="assets/img/product_pics/base/lan_01.webp" width="300" height="300"></div>

## 描述

**LAN** 是一款以太网控制器底座.内置**W5500**全硬件 TCP/IP 嵌入式以太网控制器，为嵌入式系统提供更加简易的互联网连接方案.专为工业应用场景设计，提供金属滑轨和磁盘便于安装固定，配备HT3.96端子用作电气连接.能够满足实际生产环境中的有线网络接入需求.

HT3.96连接器的 6 个引脚默认悬空，你可以根据需求将其与M-BUS的任意引脚进行连接.

**下图为 LAN 的内部构造**

<img src="assets/img/product_pics/base/lan_03.webp" width="350" height="350"><img src="assets/img/product_pics/base/lan_07.webp" width="350" height="350">

如果需要添加 RS485 通信接口，请将 TTL-RS485 转接板与配套排针焊接到主板上相应的引脚上.

**TTL-RS485 转接板 与 LAN 底座**

<img src="assets/img/product_pics/base/lan_04.webp" width="60%">

**TTL-RS485 转接板 与 LAN 底座的连接图**

*TTL-RS485 转接板的串口引脚将连接到 LAN 底座的 GPIO16 和 GPIO17.*

<img src="assets/img/product_pics/base/lan_05.webp" width="50%" height="50%">

## 管脚映射

**W5500以太网芯片**

| W5500  | ESP32 Chip   |
| :----: | :----------: |
| MOSI   | GPIO23       |
| MISO   | GPIO19       |
| CLK    | GPIO18       |
| CS     | GPIO26       |
| RST    | GPIO13       |
| INTn   | GPIO34       |


**M-Bus**

<img src="assets/img/product_pics/core/M-BUS.webp" width="500" height="385">

## 产品特性

- 输入电源电压: 9-24V
- HT3.96 端子
- 支持RS485通信
- 固定方式简单

## 包含

- 1x LAN Base
- 1x TTL-RS485 转接板
- 1x 排针 20pin
- 1x 金属导轨和磁盘
- 3x HT3.96 端子
 - 2x 3pin
 - 1x 4pin
- 10x 冷压接端子
- 3x 内六角扳手
  - 1x 1.5mm
  - 1x 2mm
  - 1x 2.5mm
- 2x 内六角螺丝 M3x28
- 4x 内六角自攻螺丝 KA2x4
- 1x 沉头螺丝 M3x8

<img src="assets/img/product_pics/base/lan_06.webp" width="50%" height="50%">

## 应用

- M5Core + LAN 实现传输带控制器

<img src="assets/img/product_pics/base/base_example/example_base_lan_01.webp" width="70%" height="70%">

- PC 端与 Core 有线传输视频数据

<img src="assets/img/product_pics/base/base_example/example_base_lan_02.webp" width="70%" height="70%">

## 规格参数

<table>
   <tr style="font-weight:bold">
      <td>规格</td>
      <td>参数</td>
   </tr>
   <tr>
      <td>净重</td>
      <td>32g</td>
   </tr>
   <tr>
      <td>毛重</td>
      <td>132g</td>
   </tr>
   <tr>
      <td>产品尺寸</td>
      <td>54*54*28mm</td>
   </tr>
   <tr>
      <td>包装尺寸</td>
      <td>105*65*4mm</td>
   </tr>
 </table>

## 案例程序

- 获取代码[点击此处](https://github.com/m5stack/M5-ProductExampleCodes/tree/master/Base/LAN/Arduino)

## 相关链接

- **Datasheet** - [W5500](https://m5stack.oss-cn-shenzhen.aliyuncs.com/resource/docs/datasheet/base/W5500_datasheet_v1.0.2_1_en.pdf)

## 原理图

<img src="assets/img/product_pics/base/lan_sch.JPG">

[原理图](https://m5stack.oss-cn-shenzhen.aliyuncs.com/resource/docs/schematic/Bases/lan_base.pdf)

## 相关视频

**LAN 案例 - PC 使用 UDP 协议通过 LAN 底座实现有线传输视频给 Core**

<video class="video_size" controls>
    <source src="https://m5stack.oss-cn-shenzhen.aliyuncs.com/video/Blog/Twitch201904/M5StackLovyanlauncher.mp4" type="video/mp4">
</video>


<script>

   var purchase_link = 'https://m5stack.com/collections/m5-base/products/lan-module';


   anchor_search(purchase_link);
   scrollFunc();

</script>