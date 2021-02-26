# Module COMMU

<el-tag effect="plain">SKU:M011</el-tag>

<div class="product_pic"><img src="assets/img/product_pics/module/module_commu_01.webp"><img src="assets/img/product_pics/module/module_commu_02.webp"></div>

## 描述

**COMMU** 是M5Stack堆叠模块系列中的一款，通信转换模块.其内部集成了2个**I2C**接口、1个**TTL**接口、1个**CAN**接口、1个**RS485**接口.能够满足开发时遇到的各种通信转换需求.

默认连接:TTL  -  UART0，RS485  -  UART2.ESP32允许引脚映射重分配，所以你可以将TTL或是RS485接口重新定义到其他引脚.

## 产品特性

- 支持I2C,TTL,RS485,CAN等多种通讯协议

## 包含

-  1x M5Stack COMMU 通信转换模块

## 规格参数

<table>
   <tr style="font-weight:bold">
      <td>规格</td>
      <td>参数</td>
   </tr>
   <tr>
      <td>接口</td>
      <td>I2C x2, CAN x1, RS485 x1, TTL x1</td>
   </tr>
   <tr>
      <td>CAN 控制器</td>
      <td>MCP2515-1/SO</td>
   </tr>
   <tr>
      <td>RS485 收发器</td>
      <td>SP3485EN-L/TR</td>
   </tr>
   <tr>
      <td>净重</td>
      <td>13.5g</td>
   </tr>
   <tr>
      <td>毛重</td>
      <td>24g</td>
   </tr>
   <tr>
      <td>产品尺寸</td>
      <td>54.2*54.2*13mm</td>
   </tr>
   <tr>
      <td>包装尺寸</td>
      <td>60*57*17mm</td>
   </tr>
   <tr>
      <td>材质</td>
      <td>Plastic ( PC )</td>
   </tr>
</table>

## MBUS引脚定义

<img src="assets\img\product_pics\module\module_bus.webp"/>

## EasyLoader

>EasyLoader是一个简洁快速的程序烧录器，其内置了一个产品相关的案例程序，通过简单步骤将其烧录至主控，即可进行一系列的功能验证.**(程序烧录前，请根据设备类型安装相应驱动程序. M5Core型主机[请点击此处查看CP210X驱动安装教程](zh_CN/arduino/arduino_development?id=安装串口驱动)，M5StickC/V/T/ATOM系列可免驱动使用)**

<div class="easyloader-box">
    <div style="background-color:white;">
        <div><img src="https://m5stack.oss-cn-shenzhen.aliyuncs.com/image/easyloader_intro.webp"></div>
        <div class="easyloader-btn">
            <a href="https://m5stack.oss-cn-shenzhen.aliyuncs.com/EasyLoader/Windows/MODULE/EasyLoader_COMMU_MODULE.exe">Windows</a>
            <a href="https://m5stack.oss-cn-shenzhen.aliyuncs.com/EasyLoader/MacOS/MODULE/EasyLoader_COMMU_MODULE.dmg">MacOS</a>
            <!-- <a>Linux</a>
            <a>MacOS</a> -->
        </div>
    </div>
    <div>
        <video id="example_video" controls>
            <source src="https://m5stack.oss-cn-shenzhen.aliyuncs.com/video/Product_example_video/Module/COMMU.mp4" type="video/mp4">
        </video>
        <div class="easyloader-mask">
        <a>
            <svg id="play-btn" t="1583228776634" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="4152" width="75" height="75"><path d="M512 0C229.216 0 0 229.216 0 512s229.216 512 512 512 512-229.216 512-512S794.784 0 512 0z m0 928C282.24 928 96 741.76 96 512S282.24 96 512 96s416 186.24 416 416-186.24 416-416 416zM384 288l384 224-384 224z" p-id="4153" fill="#007aff"></path></svg></a>
            <p>案例描述:</p>
            <p>通过RS485进行通讯，发送数据.</p>
        </div>
    </div>
</div>

## 管脚分配

| *MCP2515*        | *ESP32 Chip*      |
| :----------: |:------------: |
| CAN_CS       | GPIO12         |
| CAN_INT      | GPIO15         |
| CAN_SCK      | GPIO18         |
| CAN_MISO     | GPIO19         |
| CAN_MOSI     | GPIO23         |


| *I2C Interface*   | *ESP32 Chip*      |
| :--------------:  |:------------: |
| I2C_SDA           | GPIO21         |
| I2C_SCL           | GPIO22         |


## 原理图

<img src="assets/img/product_pics/module/commu_sch.webp">

## 相关链接

- **数据手册**

    - [SP3485](https://m5stack.oss-cn-shenzhen.aliyuncs.com/resource/docs/datasheet/module/SP3485_en.pdf)
    - [MCP2515](https://m5stack.oss-cn-shenzhen.aliyuncs.com/resource/docs/datasheet/module/MCP2515_en.pdf)

## 案例程序

### 1. Arduino

- [点击此处查看Arduino案例程序](https://github.com/m5stack/M5Stack/tree/master/examples/Modules/COMMU)

<script>

   var purchase_link = 'https://m5stack.com/collections/m5-module/products/commu-module';

   anchor_search(purchase_link);
   scrollFunc();

</script>