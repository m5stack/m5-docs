# ATOM Motion

<el-tag effect="plain">SKU:K053</el-talg>

<div class="product_pic"><img src="assets/img/product_pics/atom_base/atom_motion/atom_motion_01.webp"><img src="assets/img/product_pics/atom_base/atom_motion/atom_motion_02.webp"></div>

## 描述

**ATOM Motion** 是适配ATOM主控系列的舵机&DC电机驱动方案，内部集成STM32控制芯片，采用I2C通信控制方式。提供4通道舵机，2通道DC电机接口。集成规格16340锂电池(容量700mAh)。两路HY2.0-4P接口拓展，对4个PIN脚进行了引出，能够用于外接一些传感器与拓展设备。适用于多舵机/电机控制场景，如多轴舵机机械臂控制或是小车电机驱动。

## 产品特性

- 4通道舵机控制
- 2通道直流电机控制
- 可拆卸锂电池
- 背面磁吸设计
- 独立电源开关
- 2路HY2.0-4P拓展接口

## 包含

- 1x ATOM Lite
- 1x ATOM Motion
- 1x M2内六角扳手
- 1x M2*8杯头机械牙螺丝
- 1x TYPE-C USB Cable（20cm)

## 应用

- 直流电机小车控制
- 舵机机械臂控制

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
            <td>可拆卸锂电池</td>
            <td>规格:16340, 容量700mAh</td>
        </tr>
        <tr>
            <td>接口PIN间距</td>
            <td>2.54mm</td>
        </tr>
        <tr>
            <td>净重</td>
            <td>40g</td>
        </tr>
        <tr>
            <td>毛重</td>
            <td>77.1g</td>
        </tr>
        <tr>
            <td>产品尺寸</td>
            <td>24*72*21mm</td>
        </tr>
        <tr>
            <td>包装尺寸</td>
            <td>95 x 65 x 25mm</td>
        </tr>
     </tbody>
</table>

## EasyLoader

>EasyLoader是一个简洁快速的程序烧录器，其内置了一个产品相关的案例程序，通过简单步骤将其烧录至主控，即可进行一系列的功能验证。

<div class="easyloader-box">
    <div style="background-color:white;">
        <div><img src="https://m5stack.oss-cn-shenzhen.aliyuncs.com/image/easyloader_intro.webp"></div>
        <div class="easyloader-btn">
            <a href="https://m5stack.oss-cn-shenzhen.aliyuncs.com/EasyLoader/Windows/ATOM_BASE/EasyLoader_Atom_Motion.exe">Windows</a>
            <a href="https://m5stack.oss-cn-shenzhen.aliyuncs.com/EasyLoader/MacOS/ATOM_BASE/EasyLoader_ATOM_Motion.dmg">MacOS</a>
        </div>
    </div>
    <div>
        <video id="example_video" controls>
            <source src="https://m5stack.oss-cn-shenzhen.aliyuncs.com/video/Product_example_video/AtomBase/ATOM_MOTION.mp4" type="video/mp4">
        </video>
        <div class="easyloader-mask">
        <a>
            <svg id="play-btn" t="1583228776634" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="4152" width="75" height="75"><path d="M512 0C229.216 0 0 229.216 0 512s229.216 512 512 512 512-229.216 512-512S794.784 0 512 0z m0 928C282.24 928 96 741.76 96 512S282.24 96 512 96s416 186.24 416 416-186.24 416-416 416zM384 288l384 224-384 224z" p-id="4153" fill="#007aff"></path></svg></a>
            <p>案例描述:</p>
            <p>控制4路舵机与2路DC电机转动，按下ATOM中心按键可切换DC电机旋转方向</p>
        </div>
    </div>
</div>

## 管脚映射

- I2C Interface

<table>
 <tr><td>ATOM</td><td>G21</td><td>G25</td></tr>
 <tr><td>ATOM Motion</td><td>SCL</td><td>SDA</td></tr>
</table>

- HY2.0-4P

<table>
 <tr><td>ATOM</td><td>G23、G33</td><td>G22、G19</td></tr>
 <tr><td>ATOM Motion</td><td>PORT-B(Black)</td><td>PORT-C(Blue)</td></tr>
</table>

## 通讯协议

- 协议类型I2C
- I2C Address: **0x38**                                       

<table>
 <tr><td>Function</td><td>Reg Address</td><td>Data Range</td><td>R/W</td></tr>
 <tr><td>Servo(1~4)</td><td>0x00~0x03</td><td>angle: 0-180</td><td>R/W</td></tr>
 <tr><td>Servo(1~4)</td><td>0x10、0x12、0x14、0x16</td><td>pulse: 500-2500</td><td>R/W</td></tr>
 <tr><td>Motor(1~2)</td><td>0x20~0x21</td><td>speed: -127-127</td><td>R/W</td></tr>
</table>


## 原理图

<img src="assets/img/product_pics/atom_base/atom_motion/atom_motion_sch.webp">

## 案例程序

- [请点击此处获取Arduino示例程序](https://github.com/m5stack/M5Atom/tree/master/examples/ATOM_BASE/ATOM_Motion)

<script>

   var purchase_link = 'https://m5stack.com/products/atom-motion-kit-with-motor-and-servo-driver-stm32f0';

   anchor_search(purchase_link);
   scrollFunc();

</script>

