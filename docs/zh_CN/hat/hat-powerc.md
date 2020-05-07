# PowerC HAT

<div class="badge badge-pill badge-primary product_sku_tag">SKU:U081</div>

<div class="product_pic"><img src="assets\img\product_pics\hat\PowerC_hat\powerC_01.webp"><img src="assets\img\product_pics\hat\PowerC_hat\powerC_02.webp"></div> 

## 描述

**PowerC HAT** 是一款专为M5StickC设计的充电模块，内置IP3005高精度锂电池保护IC与IP5209电源管理IC，采用I2C通信协议与主机M5StickC进行数据传输，通过编程可查看电压、电流等信息.模块背面电池座可安装2节16340电池，通过充电模块对电池进行充电，也可作为充电宝通过电池对外供电.此外提供了XH1.25插头锂电池充电接口.模块提供一个I2C接口用于连接I2C外设，typeC接口用于电源输入，USB-A母座用于电源输出，电压输出为5V/1.5A，输入电压为5V.模块配有一个独立开关，按一次开启，连按两次关闭.

## 产品特性

- 电池检测
- 移动充电宝
- 电池充电器
- 单品尺寸：55mm x 35mm
- 重量：19g

## 包含

- 1x PowerC（含电池 2*750mAh）

## 应用

- 充电宝
- 电池充电器

## 通信协议

<mark>IP5209 I2C地址: 0x75</mark>

## 参考文档

- **[IP5209 Datasheet](https://m5stack.oss-cn-shenzhen.aliyuncs.com/resource/docs/datasheet/hat/IP5209.pdf)**
- **[IP3005 Datasheet](https://m5stack.oss-cn-shenzhen.aliyuncs.com/resource/docs/datasheet/hat/IP3005-INJOINIC.pdf)**

## 引脚映射

<table>
 <tr><td>M5StickC</td><td>GPIO0</td><td>GPIO26</td><td>5V</td><td>GND</td></tr>
 <tr><td>PowerC</td><td>SDA</td><td>SCL</td><td>5V</td><td>GND</td></tr>
<tr><td>PortA</td><td>YELLO</td><td>WHITE</td><td>RED</td><td>BLACK</td></tr>
</table>

## 案例程序

- **UIFlow**

UIFlow代码点击这里[下载](https://github.com/m5stack/M5-ProductExampleCodes/tree/master/Hat/PowerC/UIFlow)

<img src="assets\img\product_pics\hat\PowerC_hat\PowerC.webp" width="30%">

- **Arduino**

获取完整代码[点击这里](https://github.com/m5stack/M5-ProductExampleCodes/tree/master/Hat/PowerC/PowerC)

## EasyLoader

>EasyLoader是一个简洁快速的程序烧录器，其内置了一个产品相关的案例程序，通过简单步骤将其烧录至主控，即可进行一系列的功能验证.**(程序烧录前，请根据设备类型安装相应驱动程序. M5Core型主机[请点击此处查看CP210X驱动安装教程](zh_CN/arduino/arduino_development?id=安装串口驱动)，M5StickC/V/T/ATOM系列可免驱动使用)**

<div class="easyloader-box">
    <div style="background-color:white;">
        <div><img src="https://m5stack.oss-cn-shenzhen.aliyuncs.com/image/easyloader_intro.webp"></div>
        <div class="easyloader-btn">
            <a href="https://m5stack.oss-cn-shenzhen.aliyuncs.com/EasyLoader/Windows/HAT/EasyLoader_PowerC_HAT.exe">Windows</a>
            <a href="https://m5stack.oss-cn-shenzhen.aliyuncs.com/EasyLoader/MacOS/HAT/EasyLoader_PowerC_HAT_0x1000.dmg">MacOS</a>
            <!-- <a>Linux</a>
            <a>MacOS</a> -->
        </div>
    </div>
    <div>
        <video id="example_video" controls>
            <source src="https://m5stack.oss-cn-shenzhen.aliyuncs.com/video/Product_example_video/HAT/PowerC_HAT.mp4" type="video/mp4">
        </video>
        <div class="easyloader-mask">
        <a>
            <svg id="play-btn" t="1583228776634" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="4152" width="75" height="75"><path d="M512 0C229.216 0 0 229.216 0 512s229.216 512 512 512 512-229.216 512-512S794.784 0 512 0z m0 928C282.24 928 96 741.76 96 512S282.24 96 512 96s416 186.24 416 416-186.24 416-416 416zM384 288l384 224-384 224z" p-id="4153" fill="#007aff"></path></svg></a>
            <p>案例描述:</p>
            <p>检测当前底座电池电压以及电量信息.</p>
        </div>
    </div>
</div>

<script>

   var purchase_link = 'https://m5stack.com/products/m5stickc-powerc';

   anchor_search(purchase_link);
   scrollFunc();

</script>