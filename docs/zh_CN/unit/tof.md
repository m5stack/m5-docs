# ToF {docsify-ignore-all}

<div class="badge badge-pill badge-primary product_sku_tag">SKU:U010</div>

<div class="product_pic"><img src="assets/img/product_pics/unit/tof/unit_tof_01.webp"><img src="assets/img/product_pics/unit/tof/unit_tof_02.webp"></div>

## 描述

**ToF** 是一款激光测距 Unit.集成**VL53L0X**激光测距模块,通过测量激光信号往返时间，计算发射点与检测对象之间的距离.与传统测距不同的地方在于,无论检测目标的的反射率如何，能够提供精确的距离测量数据.发射940nm波长的激光，能够在不到30ms的时间内测量最大2m的绝对距离.

该 Unit 与 M5Core 通过 Grove A 接口通信，I2C 地址为**0x29**.

*注意: 如果你发现你的ToF Unit存在性能不稳定状况，极有可能是因为旧版本的PCB电路板缺陷导致，下面将为你讲解如何解决这一状况*

- 拆解 ToF Unit 查看其内部的PCB板，若内部电路如下图，则表示您的ToF Unit为新版本.

  <img src="assets/img/product_pics/unit/tof/unit_tof_05.webp" width="30%" height="30%">

- 若不是新版本，则需要手动拆解两个MOSFET（AO3400A），并参照下图将SCL，SDA直接连接到VL53L0x上.

- <img src="assets/img/product_pics/unit/tof/unit_tof_sch_02.webp" width="30%" height="30%">

- VL53L0x的工作电压为3.3V. 因此，请确保SDA与SCL使用电压为3.3V.(M5Core的GROVE接口中的数据引脚提供3.3V，电源引脚提供5V.)

## 产品特性

- 高精度
- 最大测量距离 2m
- 激光波长: 940nm
- 开发平台: Arduino, UIFlow(Blockly, Python)
- 2x LEGO 兼容孔

## 套件清单

- 1x ToF Unit
- 1x Grove 线

## 应用

- 手势识别
- 激光测距
- 3D结构光成像（3D感应）
- 摄像机辅助（超快速自动对焦和景深图）

## 相关链接

- **[VL53L0X Datasheet](https://m5stack.oss-cn-shenzhen.aliyuncs.com/resource/docs/datasheet/hat/VL53L0X_en.pdf)**

## EasyLoader

>EasyLoader是一个简洁快速的程序烧录器，其内置了一个产品相关的案例程序，通过简单步骤将其烧录至主控，即可进行一系列的功能验证.**(程序烧录前，请根据设备类型安装相应驱动程序. M5Core型主机[请点击此处查看CP210X驱动安装教程](zh_CN/arduino/arduino_development?id=安装串口驱动)，M5StickC/V/T/ATOM系列可免驱动使用)**

<div class="easyloader-box">
    <div style="background-color:white;">
        <div><img src="https://m5stack.oss-cn-shenzhen.aliyuncs.com/image/easyloader_intro.webp"></div>
        <div class="easyloader-btn">
            <a href="https://m5stack.oss-cn-shenzhen.aliyuncs.com/EasyLoader/Windows/UNIT/For%20M5Core/EasyLoader_ToF_UNIT_With_M5Core.exe">Windows</a>
            <a href="https://m5stack.oss-cn-shenzhen.aliyuncs.com/EasyLoader/MacOS/UNIT/EasyLoader_ToF_UNIT_With_M5Core.dmg">MacOS</a>
            <!-- <a>Linux</a>
            <a>MacOS</a> -->
        </div>
    </div>
    <div>
        <video id="example_video" controls>
            <source src="https://m5stack.oss-cn-shenzhen.aliyuncs.com/video/Product_example_video/Unit/ToF_UNIT.mp4" type="video/mp4">
        </video>
        <div class="easyloader-mask">
        <a>
            <svg id="play-btn" t="1583228776634" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="4152" width="75" height="75"><path d="M512 0C229.216 0 0 229.216 0 512s229.216 512 512 512 512-229.216 512-512S794.784 0 512 0z m0 928C282.24 928 96 741.76 96 512S282.24 96 512 96s416 186.24 416 416-186.24 416-416 416zM384 288l384 224-384 224z" p-id="4153" fill="#007aff"></path></svg></a>
            <p>案例描述:</p>
            <p>屏幕显示当前测距数据.</p>
        </div>
    </div>
</div>

## 案例程序

### 1. Arduino IDE

[请点击此处下载Arduino示例程序](https://github.com/m5stack/M5Stack/tree/master/examples/Unit/ToF_VL53L0X)

### 2. UIFlow

[请点击此处下载UIFlow示例](https://github.com/m5stack/M5-ProductExampleCodes/tree/master/Unit/TOF/UIFlow)

<img src="assets/img/product_pics/unit/unit_example/TOF/example_unit_tof_01.webp">

## 原理图

[ToF Schematic](https://github.com/m5stack/M5-Schematic/blob/master/Units/UNIT_TOF.pdf)

<img src="assets/img/product_pics/unit/tof/unit_tof_sch_01.webp">

### 管脚映射

<table>
 <tr><td>M5Core(GROVE A)</td><td>GPIO22</td><td>GPIO21</td><td>5V</td><td>GND</td></tr>
 <tr><td>ToF Unit</td><td>SCL</td><td>SDA</td><td>5V</td><td>GND</td></tr>
</table>

<script>

   var purchase_link = 'https://m5stack.com/collections/m5-unit/products/tof-sensor-unit';

   anchor_search(purchase_link);
   scrollFunc();

</script>