# ATOM FLY Kit

<el-tag effect="plain">SKU:K040</el-tag>

<div class="product_pic"><img src="assets/img/product_pics/atom_base/atomFly/atomfly.webp"></div>

## 描述

**ATOM FLY** 是一款支持ATOM的可编程迷你四轴无人机，适用于室内或无风情况下飞行。机架采取PCB一体化设计，直接将电机固定于PCB上，最大程度减轻机身重量。机臂采用X型布局，操控更加灵活，机身搭载气压计与三轴加速计和陀螺仪(IMU)可进行定高与姿态保持，同时底部配备ToF可用于自动起降与避障。机头有一颗LED电源指示灯，整机由外置200mAh锂电池供电。(出厂无任何固件程序，用户需自行编写程序进行控制)

## 产品特性

- 适配ATOM Matrix/ATOM Lite
- 支持WiFi、蓝牙遥控、可编程
- 内置气压计、三轴加速计、陀螺仪、ToF
- 机身小巧、紧凑

## 包含

- 1x ATOM FLY 整机机架
- 1x ATOM Lite
- 1x 200mAh电池
- 1x 电池充电器
- 2x 正桨
- 2x 反桨

## 应用

- 遥控无人机

## 规格参数

<table>
   <tr style="font-weight:bold">
      <td>规格</td>
      <td>参数</td>
   </tr>
   <tr>
      <td>ToF</td>
      <td>VL53L0x</td>
   </tr>
   <tr>
      <td>陀螺仪加速计(IMU)</td>
      <td>MPU6886</td>
   </tr>
   <tr>
      <td>气压计</td>
      <td>BMP280</td>
   </tr>
   <tr>
      <td>动力电池</td>
      <td>200mAh/1S/25C/JST </td>
   </tr>
   <tr>
      <td>螺旋桨直径</td>
      <td>2英寸</td>
   </tr>
   <tr>
      <td>空心杯电机</td>
      <td>负载转速31000±10%RPM</td>
   </tr>
   <tr>
      <td>净重</td>
      <td>32g</td>
   </tr>
   <tr>
      <td>毛重</td>
      <td>70g</td>
   </tr>
   <tr>
      <td>产品尺寸</td>
      <td>70*70*30mm</td>
   </tr>
   <tr>
      <td>包装尺寸</td>
      <td>150*75*40mm</td>
   </tr>
   <tr>
      <td>外壳材质</td>
      <td>PCB</td>
   </tr>
 </table>

## 使用说明

<img src="assets/img/product_pics/atom_base/atomFly/atomfly_01.webp" width = "10%">

AtomFLY Kit所有硬件功能出厂均经过测试，Atom Lite无任何内置固件，以下提供的程序均只提供基本功能测试，您需要通过自行编程来实现遥控飞行的目的。测试时请注意安全，身体远离螺旋桨，防止意外发生。锂电池使用随机附送的充电线进行充电，通过指示灯观察电池充电状态，红色表示正在充电，绿色表示充电完成(30分钟左右)。电池充满后不可长时间继续充电，防止电池发热造成安全隐患。

## EasyLoader

>EasyLoader是一个简洁快速的程序烧录器，其内置了一个产品相关的案例程序，通过简单步骤将其烧录至主控，即可进行一系列的功能验证.**(程序烧录前，请根据设备类型安装相应驱动程序. M5Core型主机[请点击此处查看CP210X驱动安装教程](zh_CN/arduino/arduino_development?id=安装串口驱动)，M5StickC/V/T/ATOM系列可免驱动使用)**

<div class="easyloader-box">
    <div style="background-color:white;">
        <div><img src="https://m5stack.oss-cn-shenzhen.aliyuncs.com/image/easyloader_intro.webp"></div>
        <div class="easyloader-btn">
            <a href="https://m5stack.oss-cn-shenzhen.aliyuncs.com/EasyLoader/Windows/ATOM_BASE/EasyLoader_AtomFLY.exe">Windows</a>
            <a href="https://m5stack.oss-cn-shenzhen.aliyuncs.com/EasyLoader/MacOS/ATOM_BASE/EasyLoader_AtomFLY.dmg">MacOS</a>
        </div>
    </div>
    <div>
        <video id="example_video" controls>
            <source src="https://m5stack.oss-cn-shenzhen.aliyuncs.com/video/Product_example_video/AtomBase/AtomFLY.mp4" type="video/mp4">
        </video>
        <div class="easyloader-mask">
        <a>
            <svg id="play-btn" t="1583228776634" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="4152" width="75" height="75"><path d="M512 0C229.216 0 0 229.216 0 512s229.216 512 512 512 512-229.216 512-512S794.784 0 512 0z m0 928C282.24 928 96 741.76 96 512S282.24 96 512 96s416 186.24 416 416-186.24 416-416 416zM384 288l384 224-384 224z" p-id="4153" fill="#007aff"></path></svg></a>
            <p>案例描述:</p>
            <p>按下Atom按键，螺旋桨依次旋转，串口监视器输出IMU状态</p>
        </div>
    </div>
</div>

## 相关链接

-  **Datasheet** 
    - [MPU6886](https://m5stack.oss-cn-shenzhen.aliyuncs.com/resource/docs/datasheet/core/MPU-6886-000193%2Bv1.1_GHIC_en.pdf)
    - [BMP280](https://m5stack.oss-cn-shenzhen.aliyuncs.com/resource/docs/datasheet/hat/BMP280-DS001-11_en.pdf)
    - [VL53L0X](https://m5stack.oss-cn-shenzhen.aliyuncs.com/resource/docs/datasheet/hat/VL53L0X_en.pdf)
    - [DC Moter C.W](https://m5stack.oss-cn-shenzhen.aliyuncs.com/resource/docs/datasheet/atombase/AtomFLY/Motor_716-37A-14.pdf)
    - [DC Moter CCW](https://m5stack.oss-cn-shenzhen.aliyuncs.com/resource/docs/datasheet/atombase/AtomFLY/Motor_716-37B-14.pdf)

### 管脚映射

<table>
 <tr><td>ATOM</td><td>G21</td><td>G25</td><td>G22</td><td>G19</td><td>G23</td><td>G33</td></tr>
 <tr><td>ATOM FLY</td><td>SCL</td><td>SDA</td><td>PWM1</td><td>PWM2</td><td>PWM3</td><td>PWM4</td></tr>
 <tr><td>MPU6886</td><td>SCL</td><td>SDA</td><td></td><td></td><td></td><td></td></tr>
 <tr><td>VL53L0X</td><td>SCL</td><td>SDA</td><td></td><td></td><td></td><td></td></tr>
 <tr><td>BMP280</td><td>SCL</td><td>SDA</td><td></td><td></td><td></td><td></td></tr>
</table>

## 原理图

<img src="assets/img/product_pics/atom_base/atomFly/atomFly_sch.webp">

## 案例程序

- Arduino代码示例 [点击这里](https://github.com/m5stack/M5-ProductExampleCodes/tree/master/AtomBase/AtomFLY)

<script>

   var purchase_link = '';
   anchor_search(purchase_link);
   scrollFunc();

</script>