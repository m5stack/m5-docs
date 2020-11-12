# M5GO BOTTOM2

<el-tag effect="plain">SKU:A014-C</el-tag>

<div class="product_pic"><img src="assets/img/product_pics/base/m5go_bottom2/m5go_bottom2_01.webp"><img src="assets/img/product_pics/base/m5go_bottom2/m5go_bottom2_02.webp"></div>

## 描述

**M5GO BOTTOM2** 是一款专为M5Core2设计的拓展型底座，底座集成了MPU6886六轴姿态传感器，数字麦克风(SPM1423),500mAh锂电池。两组HY2.0-4P拓展接口将常用的ADC/DAC/UART引脚进行了引出，能够用于各类型传感器的接入。底座两侧分别为10颗可编程RGB灯(SK6812)，配合磨砂透光材质遮光条，能够提供柔和舒适发光效果。底部采用pogo pin磁吸充电接口，当吸附充电底座时，电流将经过内置的TP4057充电芯片安全的流入内部电池。除充电功能外pogo pin接口对主控I2C总线进行了引出，这使得你能够通过磁吸的方式去外接拓展。内置吸附磁铁，背面采用兼容LEGO孔设计，能够与你的其他的LEGO结构设计无缝对接。

## 产品特性

- 兼容M5Core2
- 数字麦克风
- 可编程LED灯条
- HY2.0-4P拓展接口
- 兼容乐高积木结构
- 适配磁吸充电底座

## 包含

- 1x M5GO BOTTOM2
- 2x M3*16螺丝
- 2x M3*18螺丝

## 应用

- CORE2拓展

## 规格参数

<table>
   <tr style="font-weight:bold">
      <td>规格</td>
      <td>参数</td>
   </tr>
   <tr>
      <td>麦克风</td>
      <td>SPM1423</td>
   </tr>
   <tr>
      <td>LED</td>
      <td>SK6812*10</td>
   </tr>
   <tr>
      <td>IMU</td>
      <td>MPU6886</td>
   </tr>
   <tr>
      <td>净重</td>
      <td>31g</td>
   </tr>
   <tr>
      <td>毛重</td>
      <td>45g</td>
   </tr>
   <tr>
      <td>产品尺寸</td>
      <td>54*54*8mm</td>
   </tr>
   <tr>
      <td>包装尺寸</td>
      <td>60*57*17mm</td>
   </tr>
 </table>

 ## EasyLoader

>EasyLoader是一个简洁快速的程序烧录器，其内置了一个产品相关的案例程序，通过简单步骤将其烧录至主控，即可进行一系列的功能验证.**(程序烧录前，请根据设备类型安装相应驱动程序. M5Core型主机[请点击此处查看CP210X驱动安装教程](zh_CN/arduino/arduino_development?id=安装串口驱动)，M5StickC/V/T/ATOM系列可免驱动使用)**

<div class="easyloader-box">
    <div style="background-color:white;">
        <div><img src="https://m5stack.oss-cn-shenzhen.aliyuncs.com/image/easyloader_intro.webp"></div>
        <div class="easyloader-btn">
            <a href="https://m5stack.oss-cn-shenzhen.aliyuncs.com/EasyLoader/Windows/BASE/EasyLoader_M5GO_BOTTOM2.exe">Windows</a>
            <!-- <a>Linux</a>
            <a>MacOS</a> -->
        </div>
    </div>
    <div>
        <video id="example_video" controls>
            <source src="https://m5stack.oss-cn-shenzhen.aliyuncs.com/video/Product_example_video/Base/M5GO_BOTTOM2_video.mp4" type="video/mp4">
        </video>
        <div class="easyloader-mask">
        <a>
            <svg id="play-btn" t="1583228776634" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="4152" width="75" height="75"><path d="M512 0C229.216 0 0 229.216 0 512s229.216 512 512 512 512-229.216 512-512S794.784 0 512 0z m0 928C282.24 928 96 741.76 96 512S282.24 96 512 96s416 186.24 416 416-186.24 416-416 416zM384 288l384 224-384 224z" p-id="4153" fill="#007aff"></path></svg></a>
            <p>案例描述:</p>
            <p>IMU数据获取，麦克风数据获取显示频谱，控制LED灯闪烁.</p>
        </div>
    </div>
</div>

## 管脚映射

**SK6812-LED Bar**

<table>
 <tr><td>ESP32 Chip</td><td>GPIO25</td></tr>
 <tr><td>SK6812</td><td>DATA</td></tr>
</table>

**SPM1423-麦克风**

<table>
 <tr><td>ESP32 Chip</td><td>GPIO34</td><td>GPIO0</td></tr>
 <tr><td>SPM1423</td><td>DAT</td><td>CLK</td></tr>
</table>

**MPU6886 & Pogo Pin**

<table>
 <tr><td>ESP32 Chip</td><td>GPIO21</td><td>GPIO22</td></tr>
 <tr><td>MPU6886</td><td>SDA</td><td>SCL</td></tr>
 <tr><td>Pogo Pin</td><td>SDA</td><td>SCL</td></tr>
</table>

**HY2.0-4P-PortB(black)**

<table>
 <tr><td>ESP32 Chip</td><td>GPIO26</td><td>GPIO36</td></tr>
 <tr><td>PortB</td><td>GPIO26(DAC)</td><td>GPIO36(ADC)</td></tr>
</table>

**HY2.0-4P-PortC(blue)**

<table>
 <tr><td>ESP32 Chip</td><td>GPIO13</td><td>GPIO14</td></tr>
 <tr><td>PortC</td><td>GPIO13(RXD2)</td><td>GPIO14(TXD2)</td></tr>
</table>

**M5GO-BOTTOM2-BUS**

<img src="assets/img/product_pics/base/m5go_bottom2/m5go_bottom2_bus.webp">

## 相关链接

   - [SPM1423](https://m5stack.oss-cn-shenzhen.aliyuncs.com/resource/docs/datasheet/core/SPM1423HM4H-B_datasheet_en.pdf)
   - [MPU6886](https://m5stack.oss-cn-shenzhen.aliyuncs.com/resource/docs/datasheet/core/MPU-6886-000193%2Bv1.1_GHIC_en.pdf)

## 案例程序 

- **Arduino**

获取Arduino代码示例[点击此处](https://github.com/m5stack/M5-ProductExampleCodes/tree/master/Base/M5GO_BOTTOM2)


## 原理图

<img src="assets/img/product_pics/base/m5go_bottom2/m5go_bottom2_sch.webp">

<script>

   var purchase_link = 'https://m5stack.com/products/m5go-battery-bottom2-for-core2-only';

   anchor_search(purchase_link);
   scrollFunc();

</script>