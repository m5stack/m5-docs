# TVOC/eCO2

<el-tag effect="plain">SKU:U088</el-tag>

<div class="product_pic"><img src="assets/img/product_pics/unit/tvoc/tvoc.webp"></div>


## 描述

**TVOC/eCO2 mini Unit** 是一款数字式多像素气体传感器单元，内部集成SGP30,主要测量空气中的各种VOC(挥发性有机化合物)和H2，通过编程可实现对TVOC(总挥发性有机化合物)和eCO2(二氧化碳等效)浓度的测量，在测量范围内典型测量精度为15%,SGP30读数经过内部校准输出，可保持长期稳定。SGP30采用I2C协议通讯，带有片上湿度补偿功能，可通过外接湿度传感器开启该功能。如果您需要获取精确的结果，您需要根据已知测量源进行校准，SGP30内置校准功能。此外，eCO2是根据H2浓度计算得出的，并不能完全替代CO2传感器。

## 产品特性

- TVOC与eCO2浓度检测
- I2C通讯(0x58)
- 读数稳定
- 具备片上湿度补偿功能
- 2x LEGO 兼容孔
- HY2.0 4P 接口

## 包含

- 1x TVOC/eCO2 mini Unit
- 1x HY2.0 连接线(5CM)

## 应用

- 空气质量监测
- eCO2浓度检测

## 规格参数

<table class="table-1">
    <thead>
    <tr>
        <th>规格</th>
        <th>参数</th>
    </tr>
    </thead>
    <tbody>
        <tr>
            <td>测量范围</td>
            <td>Ethanol：0-1000ppm，H2：0-1000ppm，TVOC：0-60000 ppb，eCO2：400-60000 ppm</td>
        </tr>
        <tr>
            <td>TVOC与eCO2采样率</td>
            <td>1Hz</td>
        </tr>
        <tr>
            <td>TVOC与eCO2采样精度</td>
            <td>TVOC：1/6/32bbp，eCO2：1/3/9/31ppm</td>
        </tr>
        <tr>
            <td>通信协议</td>
            <td>I2C：0x58</td>
        </tr>
        <tr>
            <td>净重</td>
            <td>4g</td>
        </tr>
        <tr>
            <td>毛重</td>
            <td>8g</td>
        </tr>
        <tr>
            <td>产品尺寸</td>
            <td>24*24*13mm</td>
        </tr>
        <tr>
            <td>包装尺寸</td>
            <td>35*36*18mm</td>
        </tr>
        <tr>
            <td>外壳材质</td>
            <td>Plastic ( PC )</td>
        </tr>
     </tbody>
</table>

## EasyLoader

>EasyLoader是一个简洁快速的程序烧录器，其内置了一个产品相关的案例程序，通过简单步骤将其烧录至主控，即可进行一系列的功能验证.**(程序烧录前，请根据设备类型安装相应驱动程序. M5Core型主机[请点击此处查看CP210X驱动安装教程](zh_CN/arduino/arduino_development?id=安装串口驱动)，M5StickC/V/T/ATOM系列可免驱动使用)**

<div class="easyloader-box">
    <div style="background-color:white;">
        <div><img src="https://m5stack.oss-cn-shenzhen.aliyuncs.com/image/easyloader_intro.webp"></div>
        <div class="easyloader-btn">
            <a href="https://m5stack.oss-cn-shenzhen.aliyuncs.com/EasyLoader/Windows/UNIT/For%20M5Core/EasyLoader_TVOC_Unit.exe">Windows</a>
            <a href="https://m5stack.oss-cn-shenzhen.aliyuncs.com/EasyLoader/MacOS/UNIT/EasyLoader_TVOC_eCO2_UNIT_With_M5Core.dmg">MacOS</a>
            <!-- <a>Linux</a>
            <a>MacOS</a> -->
        </div>
    </div>
    <div>
        <video id="example_video" controls>
            <source src="https://m5stack.oss-cn-shenzhen.aliyuncs.com/video/Product_example_video/Unit/TVOC%20eCO2.mp4" type="video/mp4">
        </video>
        <div class="easyloader-mask">
        <a>
            <svg id="play-btn" t="1583228776634" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="4152" width="75" height="75"><path d="M512 0C229.216 0 0 229.216 0 512s229.216 512 512 512 512-229.216 512-512S794.784 0 512 0z m0 928C282.24 928 96 741.76 96 512S282.24 96 512 96s416 186.24 416 416-186.24 416-416 416zM384 288l384 224-384 224z" p-id="4153" fill="#007aff"></path></svg></a>
            <p>案例描述:</p>
            <p>显示TVOC和eCO2读数</p>
        </div>
    </div>
</div>

### 管脚映射

<table>
 <tr><td>M5Core(PORT A)</td><td>GPIO22</td><td>GPIO21</td><td>5V</td><td>GND</td></tr>
 <tr><td>TVOC Unit</td><td>SCL</td><td>SDA</td><td>5V</td><td>GND</td></tr>
</table>

## 原理图

<img src="assets/img/product_pics/unit/envII_sch.webp">


## 相关链接

- **Datasheet** 

   - [SGP30](https://m5stack.oss-cn-shenzhen.aliyuncs.com/resource/docs/datasheet/unit/Sensirion_Gas_Sensors_SGP30_Datasheet.pdf)

## 案例程序

### 1. Arduino

[请点击此处下载Arduino示例程序](https://github.com/m5stack/M5-ProductExampleCodes/tree/master/Unit/TVOC)

### 2. UIFlow

- [请点击此处获取UIFlow示例](https://github.com/m5stack/M5-ProductExampleCodes/tree/master/Unit/TVOC/UIFlow)

<img src="assets/img/product_pics/unit/tvoc/TVOC_eCO2_Example.webp">

<script>

   var purchase_link = 'https://m5stack.com/collections/m5-unit/products/tvoc-eco2-gas-unit-sgp30';

   anchor_search(purchase_link);
   scrollFunc();

</script>
