# NCIR {docsify-ignore-all}

<div class="badge badge-pill badge-primary product_sku_tag">SKU:U028</div>

<div class="product_pic"><img src="assets/img/product_pics/unit/M5GO_Unit_ncir.webp"></div>

## 描述

**NCIR** 是一款单点红外测温传感器.内置红外传感器**MLX90614**，能够测量人体或其他物体的表面温度.

与大多数接触式型传感器不同地方在于,该传感器通过测量远距离物体发射出的红外光波来检测温度.无需物理接触，这使得它比一般传感器拥有更广的测温范围: -70°C 至 + 380°C.视场角为90°，能够方便快捷的测量某一位置的平均温度.

该 Unit 通过GROVE A IIC（0x5A）与M5Core连接.

## 产品特性

- MLX90614ESF-AAA
- 物体与环境测量
- 开发平台: Arduino, UIFlow(Blockly, Python)
- 2x LEGO 兼容孔

## 包含

- 1x NCIR Unit
- 1x Grove 线

## 应用

-  人体体温测量
-  物体 ( 生物 ) 移动检测


## 规格参数

<table>
   <tr style="font-weight:bold">
      <td>规格</td>
      <td>参数</td>
   </tr>
   <tr>
      <td>工作电压</td>
      <td>4.5V-5.5V</td>
   </tr>
   <tr>
      <td>物体测温范围</td>
      <td>-70°C ~ 380°C</td>
   </tr>
   <tr>
      <td>环境测温范围</td>
      <td>-40°C ~ 125 ˚C</td>
   </tr>
   <tr>
      <td>测量精度</td>
      <td>±0.5˚C</td>
   </tr>
   <tr>
      <td>视场角</td>
      <td>90°</td>
   </tr>
</table>

## 相关链接

- **[MLX90614 Datasheet](https://m5stack.oss-cn-shenzhen.aliyuncs.com/resource/docs/datasheet/hat/MLX90614-Datasheet-Melexis_en.pdf)**

## EasyLoader

>EasyLoader是一个简洁快速的程序烧录器，其内置了一个产品相关的案例程序，通过简单步骤将其烧录至主控，即可进行一系列的功能验证.**(程序烧录前，请根据设备类型安装相应驱动程序. M5Core型主机[请点击此处查看CP210X驱动安装教程](zh_CN/arduino/arduino_development?id=安装串口驱动)，M5StickC/V/T/ATOM系列可免驱动使用)**

<div class="easyloader-box">
    <div style="background-color:white;">
        <div><img src="https://m5stack.oss-cn-shenzhen.aliyuncs.com/image/easyloader_intro.webp"></div>
        <div class="easyloader-btn">
            <a href="https://m5stack.oss-cn-shenzhen.aliyuncs.com/EasyLoader/Windows/UNIT/For%20M5Core/EasyLoader_NCIR_UNIT_With_M5Core.exe">Windows</a>
            <!-- <a>Linux</a>
            <a>MacOS</a> -->
        </div>
    </div>
    <div>
        <video id="example_video" controls>
            <source src="https://m5stack.oss-cn-shenzhen.aliyuncs.com/video/Product_example_video/Unit/NCIR_UNIT.mp4" type="video/mp4">
        </video>
        <div class="easyloader-mask">
        <a>
            <svg id="play-btn" t="1583228776634" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="4152" width="75" height="75"><path d="M512 0C229.216 0 0 229.216 0 512s229.216 512 512 512 512-229.216 512-512S794.784 0 512 0z m0 928C282.24 928 96 741.76 96 512S282.24 96 512 96s416 186.24 416 416-186.24 416-416 416zM384 288l384 224-384 224z" p-id="4153" fill="#007aff"></path></svg></a>
            <p>案例描述:</p>
            <p>屏幕显示当前检测温度值.</p>
        </div>
    </div>
</div>

### 管脚映射

<table>
 <tr><td>M5Core (GROVE A)</td><td>GPIO22</td><td>GPIO21</td><td>5V</td><td>GND</td></tr>
 <tr><td>NCIR Unit</td><td>SCL</td><td>SDA</td><td>5V</td><td>GND</td></tr>
</table>

## 原理图

<img src="assets/img/product_pics/unit/ncir_sch.JPG">

## 案例程序

### 1. Arduino IDE

- [请点击此处下载Arduino示例代码](https://github.com/m5stack/M5Stack/tree/master/examples/Unit/NCIR)

<img src="assets/img/product_pics/unit/unit_example/NCIR/example_unit_ncir_04.webp">

### 2. UIFlow

- [请点击此处下载UIFlow示例](https://github.com/m5stack/M5-ProductExampleCodes/tree/master/Unit/NCIR/UIFlow)

<img src="assets/img/product_pics/unit/unit_example/NCIR/example_unit_ncir_03.webp">

<script>

   var purchase_link = 'https://m5stack.com/collections/m5-unit/products/ncir-sensor-unit';

   anchor_search(purchase_link);
   scrollFunc();

</script>