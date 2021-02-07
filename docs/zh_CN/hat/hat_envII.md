# ENV II HAT

<el-tag effect="plain">SKU:U053-B</el-tag>

<div class="product_pic"><img src="assets/img/product_pics/hat/envii_hat/envii.webp"></div>

## 描述

**ENV II** 是一款多功能环境传感器,内部集成SHT30、BMP280以及BMM150，用于检测温度、湿度、大气压值数据和磁场.SHT30是高精度低功耗的数字温湿度传感器,并支持I2C接口（0x44）.BMP280(0x76)是一款专为移动应用而设计的绝对气压传感器，具有较高的精准度.BMM150(0x10)是磁力计，可用于监测磁场变化及磁场方向，对于需要对环境数据进行快速采集检测的项目来说, ENV-II HAT是一个兼顾性能与性价比的不错选择.

## 产品特性

- 温湿度、气压、磁场测量
- 简单易用
- 较高精准度
- 支持IIC
- GROVE 接口, 支持平台 [UIFlow](http://flow.m5stack.com) 、 [Arduino](http://www.arduino.cc).
- 2x LEGO 兼容孔

## 包含

- 1x ENV-II HAT
- 1x 双面胶

## 应用

- 气象站
- 储谷仓环境监控
- 指南针

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
            <td>最大温度测量范围</td>
            <td>-40 ~ 120 ℃</td>
        </tr>
        <tr>
            <td>最高测量精度</td>
            <td>0 ~ 60 ℃/±0.2℃</td>
        </tr>
        <tr>
            <td>湿度测量范围/误差</td>
            <td>10 ~ 90 %RH / ±2%</td>
        </tr>
        <tr>
            <td>大气压测量范围/误差</td>
            <td>300 ~ 1100hPa / ±1hPa</td>
        </tr>
        <tr>
            <td>磁力计范围/误差</td>
            <td>±1300μT (x, y-axis), ±2500μT (z-axis), 0.3μT</td>
        </tr>
        <tr>
            <td>通信协议</td>
            <td>I2C：SHT30(0x44),BMP280(0x76), BMM150(0x10)</td>
        </tr>
        <tr>
            <td>工作温度</td>
            <td>32°F to 104°F ( 0°C to 40°C )</td>
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
            <td>15*24*14mm</td>
        </tr>
        <tr>
            <td>包装尺寸</td>
            <td>36*36*18mm</td>
        </tr>
        <tr>
            <td>外壳材质</td>
            <td>Plastic ( PC )</td>
        </tr>
     </tbody>
</table>

## SHT30与DHT12对比

<table class="table-1">
    <thead>
    <tr>
        <th>/</th>
        <th>SHT30</th>
        <th>DHT12</th>
    </tr>
    </thead>
    <tbody>
        <tr>
            <td>最大温度测量范围</td>
            <td>-40 ~ 120 ℃</td>
            <td>-20 ~ 60 ℃</td>
        </tr>
        <tr>
            <td>温度测量误差</td>
            <td>0 ~ 60 ℃/±0.2℃</td>
            <td>±0.2℃</td>
        </tr>
        <tr>
            <td>湿度测量范围/误差</td>
            <td>10 ~ 90 %RH / ±2%</td>
            <td>20 ~ 95 %RH/0.1%</td>
        </tr>
     </tbody>
</table>

## EasyLoader

>EasyLoader是一个简洁快速的程序烧录器，其内置了一个产品相关的案例程序，通过简单步骤将其烧录至主控，即可进行一系列的功能验证.**(程序烧录前，请根据设备类型安装相应驱动程序. M5Core型主机[请点击此处查看CP210X驱动安装教程](zh_CN/arduino/arduino_development?id=安装串口驱动)，M5StickC/V/T/ATOM系列可免驱动使用)**

<div class="easyloader-box">
    <div style="background-color:white;">
        <div><img src="https://m5stack.oss-cn-shenzhen.aliyuncs.com/image/easyloader_intro.webp"></div>
        <div class="easyloader-btn">
            <a href="https://m5stack.oss-cn-shenzhen.aliyuncs.com/EasyLoader/Windows/HAT/EasyLoader_ENV-II_HAT.exe">Windows</a>
            <a href="https://m5stack.oss-cn-shenzhen.aliyuncs.com/EasyLoader/MacOS/HAT/EasyLoader_ENVII_HAT.dmg">MacOS</a>
            <!-- <a>Linux</a>
            <a>MacOS</a> -->
        </div>
    </div>
    <div>
        <video id="example_video" controls>
            <source src="https://m5stack.oss-cn-shenzhen.aliyuncs.com/video/Product_example_video/HAT/ENV_HAT.mp4" type="video/mp4">
        </video>
        <div class="easyloader-mask">
        <a>
            <svg id="play-btn" t="1583228776634" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="4152" width="75" height="75"><path d="M512 0C229.216 0 0 229.216 0 512s229.216 512 512 512 512-229.216 512-512S794.784 0 512 0z m0 928C282.24 928 96 741.76 96 512S282.24 96 512 96s416 186.24 416 416-186.24 416-416 416zM384 288l384 224-384 224z" p-id="4153" fill="#007aff"></path></svg></a>
            <p>案例描述:</p>
            <p>显示温湿度、大气压、磁力计数据.</p>
        </div>
    </div>
</div>

### 管脚映射

<table>
 <tr><td>M5StickC</td><td>GPIO26</td><td>GPIO0</td><td>5V</td><td>GND</td></tr>
 <tr><td>ENV II HAT</td><td>SCL</td><td>SDA</td><td>5V</td><td>GND</td></tr>
</table>

## 原理图

<img src="assets/img/product_pics/hat/envii_hat/env_ii_hat_sch.webp">

## 相关链接

- **Datasheet** 

  - **[BMP280 Datasheet](https://m5stack.oss-cn-shenzhen.aliyuncs.com/resource/docs/datasheet/hat/BMP280-DS001-11_en.pdf)**

  - **[SHT30 Datasheet](https://m5stack.oss-cn-shenzhen.aliyuncs.com/resource/docs/datasheet/unit/SHT3x_Datasheet_digital.pdf)**

  - **[bmm150 Datasheet](https://m5stack.oss-cn-shenzhen.aliyuncs.com/resource/docs/datasheet/core/BMM150_datasheet_en.pdf)**

## 案例程序

### 1. Arduino

- [请点击此处获取Arduino示例程序](https://github.com/m5stack/M5-ProductExampleCodes/tree/master/Hat/ENVII_HAT/Arduino/ENVII_HAT)


### 2. UIFlow

- [请点击此处获取UIFlow示例](https://github.com/m5stack/M5-ProductExampleCodes/tree/master/Hat/ENVII_HAT/UIFlow)

<img src="assets/img/product_pics/hat/envii_hat/ENV2_hat.webp" width="80%" height="80%">


<script>

   var purchase_link = 'https://m5stack.com/collections/all/products/env-ii-unit';

   anchor_search(purchase_link);
   scrollFunc();

</script>
