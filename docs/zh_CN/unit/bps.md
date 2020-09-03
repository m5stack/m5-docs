# BPS {docsify-ignore-all}

<el-tag effect="plain">SKU:</el-tag>

<div class="product_pic"><img src="assets/img/product_pics/unit/bps/bps.webp">
## 描述

**BPS Mini Unit** 是一款气压计单元，采用博世BMP280气压传感器，用于测量大气压强与高度估算，相对精度可达到±0.12hPa，相当于±1m的高度差，同时温漂系数相当低，可以达到1.5 Pa/K，即温度漂移为12.6 cm/K，此外在芯片内部还有集成有温度传感器。

## 产品特性

- 气压传感器，片上带有温度传感器，可同时测量温度
- 精度达到±0.12hPa
- 温漂系数1.5Pa/K
- 支持周期性测量
- 内部集成5段式滤波器
- 支持低功耗
- I2C通讯：0x76
- 开发平台: Arduino, UIFlow(Blockly,Pyhton)
- 2x LEGO 兼容孔

## 包含

- 1x BPS Mini Unit
- 1x Grove 线(5cm)

## 应用

- Wearable devices
- GPS height calculation
- Weather station

## 规格参数

<table>
   <tr style="font-weight:bold">
      <td>规格</td>
      <td>参数</td>
   </tr>
   <tr>
      <td>气压测量范围</td>
      <td>300 - 1100 hPa(+9000m ~ -500m)</td>
   </tr>
   <tr>
      <td>相对精度</td>
      <td>0.12hPa</td>
   </tr>
   <tr>
      <td>绝对精度</td>
      <td>1hPa</td>
   </tr>
   <tr>
      <td>温度测量范围</td>
      <td>-40 ~ +85°C</td>
   </tr>
   <tr>
      <td>温度分辨率</td>
      <td>0.01°C</td>
   </tr>
   <tr>
      <td>气压分辨率</td>
      <td>0.16Pa</td>
   </tr>
   <tr>
      <td>温度漂移</td>
      <td>1.5 Pa/K(12.6 cm/K)</td>
   </tr>
   <tr>
      <td>电流消耗</td>
      <td>2.7μA @ 1 Hz 采样率</td>
   </tr>
   <tr>
      <td>工作电压</td>
      <td>1.71V - 3.6V</td>
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
            <a href="https://m5stack.oss-cn-shenzhen.aliyuncs.com/EasyLoader/Windows/UNIT/For%20M5Core/EasyLoader_BPS_Unit_With_M5Core.exe">Windows</a>
            <a href="https://m5stack.oss-cn-shenzhen.aliyuncs.com/EasyLoader/MacOS/UNIT/EasyLoader_BPS_Unit_For_M5Core_.dmg">MacOS</a>
        </div>
    </div>
    <div>
        <video id="example_video" controls>
            <source src="https://m5stack.oss-cn-shenzhen.aliyuncs.com/video/Product_example_video/Module/COM.NB-IoT.mp4">
        </video>
        <div class="easyloader-mask">
        <a>
            <svg id="play-btn" t="1583228776634" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="4152" width="75" height="75"><path d="M512 0C229.216 0 0 229.216 0 512s229.216 512 512 512 512-229.216 512-512S794.784 0 512 0z m0 928C282.24 928 96 741.76 96 512S282.24 96 512 96s416 186.24 416 416-186.24 416-416 416zM384 288l384 224-384 224z" p-id="4153" fill="#007aff"></path></svg></a>
            <p>案例描述:</p>
            <p>获取大气压强与芯片温度，估算高度</p>
        </div>
    </div>
</div>

## 相关链接

-  **Datasheet** 
    - [BMP 280](https://m5stack.oss-cn-shenzhen.aliyuncs.com/resource/docs/datasheet/hat/BMP280-DS001-11_en.pdf)

## 原理图

<img src="assets/img/product_pics/unit/bps/bps_sch.webp" width="40%">

### 管脚映射

<table>
 <tr><td>M5Core(GROVE A)</td><td>SCL</td><td>SDA</td><td>5V</td><td>GND</td></tr>
 <tr><td>IMU Unit</td><td>GPIO22</td><td>GPIO21</td><td>5V</td><td>GND</td></tr>
</table>

## 案例程序

### 1. Arduino IDE

[点击这里获取Arduino示例程序](https://github.com/m5stack/M5-ProductExampleCodes/tree/master/Unit/BPS_Unit)

<script>

   var purchase_link = '';

   anchor_search(purchase_link);
   scrollFunc();

</script>