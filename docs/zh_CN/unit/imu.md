# 6-Axis IMU Unit {docsify-ignore-all}

<el-tag effect="plain">SKU:U095</el-tag>

<div class="product_pic"><img src="assets/img/product_pics/unit/imu/imu.webp"></div>

## 描述

**6-Axis IMU Unit** 是一款6轴姿态传感器，内部集成了3轴重力加速计与3轴陀螺仪，可以实时计算倾斜角度与加速度。芯片采用MPU6886,片上具有16位ADC，内置可编程的数字滤波器与片上温度传感器，采用I2C接口(addr:0x68)与主机通讯，支持低功耗模式。

## 产品特性

- 3轴重力加速计与3轴陀螺仪
- 片上温度传感器
- 1KB FIFO
- 支持低功耗
- 开发平台: Arduino, UIFlow(Blockly,Python)
- 2x LEGO 兼容孔

## 包含

- 1x 6-Axis IMU Unit
- 1x HY2.0-4P线缆 (5cm)

## 应用

- 可穿戴设备
- 运动追踪
- 无人机姿态判断

## 规格参数

<table>
   <tr style="font-weight:bold">
      <td>规格</td>
      <td>参数</td>
   </tr>
   <tr>
      <td>I2C接口</td>
      <td>addr:0x68</td>
   </tr>
   <tr>
      <td>加速计量程</td>
      <td>±2g, ±4g, ±8g, or ±16g</td>
   </tr>
   <tr>
      <td>加速计噪声</td>
      <td>100 μg/√Hz</td>
   </tr>
   <tr>
      <td>陀螺仪量程</td>
      <td>±250, ±500, ±1000, or ±2000 degrees per second</td>
   </tr>
   <tr>
      <td>陀螺仪误差</td>
      <td>1%</td>
   </tr>
   <tr>
      <td>陀螺仪噪声</td>
      <td>±4 mdps/√Hz</td>
   </tr>
   <tr>
      <td>工作电压</td>
      <td>1.71V - 3.45V</td>
   </tr>
   <tr>
      <td>净重</td>
      <td>4g</td>
   </tr>
   <tr>
      <td>毛重</td>
      <td>9g</td>
   </tr>
   <tr>
      <td>产品尺寸</td>
      <td>24*24*13mm</td>
   </tr>
   <tr>
      <td>包装尺寸</td>
      <td>35*36*18mm</td>
   </tr>
 </table>

## EasyLoader

>EasyLoader是一个简洁快速的程序烧录器，其内置了一个产品相关的案例程序，通过简单步骤将其烧录至主控，即可进行一系列的功能验证.**(程序烧录前，请根据设备类型安装相应驱动程序. M5Core型主机[请点击此处查看CP210X驱动安装教程](zh_CN/arduino/arduino_development?id=安装串口驱动)，M5StickC/V/T/ATOM系列可免驱动使用)**

<div class="easyloader-box">
    <div style="background-color:white;">
        <div><img src="https://m5stack.oss-cn-shenzhen.aliyuncs.com/image/easyloader_intro.webp"></div>
        <div class="easyloader-btn">
            <a href="https://m5stack.oss-cn-shenzhen.aliyuncs.com/EasyLoader/Windows/UNIT/For%20M5Core/EasyLoader_IMU_UNIT_With_M5Core.exe">Windows</a>
            <a href="https://m5stack.oss-cn-shenzhen.aliyuncs.com/EasyLoader/MacOS/UNIT/EasyLoader_IMU6886_Unit_For_M5Core_.dmg">MacOS</a>
        </div>
    </div>
    <div>
        <video id="example_video" controls>
            <source src="https://m5stack.oss-cn-shenzhen.aliyuncs.com/video/Product_example_video/Unit/IMU.mp4">
        </video>
        <div class="easyloader-mask">
        <a>
            <svg id="play-btn" t="1583228776634" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="4152" width="75" height="75"><path d="M512 0C229.216 0 0 229.216 0 512s229.216 512 512 512 512-229.216 512-512S794.784 0 512 0z m0 928C282.24 928 96 741.76 96 512S282.24 96 512 96s416 186.24 416 416-186.24 416-416 416zM384 288l384 224-384 224z" p-id="4153" fill="#007aff"></path></svg></a>
            <p>案例描述:</p>
            <p>获取IMU加速度、角速度及温度</p>
        </div>
    </div>
</div>

## 相关链接

-  **Datasheet** 
    - [MPU 6886](https://m5stack.oss-cn-shenzhen.aliyuncs.com/resource/docs/datasheet/core/MPU-6886-000193%2Bv1.1_GHIC_en.pdf)

## 原理图

<img src="assets/img/product_pics/unit/imu/imu_sch.webp" width="40%">

### 管脚映射

<table>
 <tr><td>M5Core(PORT A)</td><td>SCL</td><td>SDA</td><td>5V</td><td>GND</td></tr>
 <tr><td>IMU Unit</td><td>GPIO22</td><td>GPIO21</td><td>5V</td><td>GND</td></tr>
</table>

## 案例程序

### 1. Arduino

- [请点击此处获取Arduino示例程序](https://github.com/m5stack/M5-ProductExampleCodes/tree/master/Unit/IMU_Unit)

<script>

   var purchase_link = 'https://m5stack.com/collections/m5-unit/products/6-axis-imu-unitmpu6886';

   anchor_search(purchase_link);
   scrollFunc();

</script>