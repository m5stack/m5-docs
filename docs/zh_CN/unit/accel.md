# ACCEL

<div class="badge badge-pill badge-primary product_sku_tag">SKU:U056</div>

<div class="product_pic"><img src="assets/img/product_pics/unit/accel/accel_01.webp"><img src="assets/img/product_pics/unit/accel/accel_02.webp"></div>

## 描述

**ACCEL** 是一款运动数据传感器. 内部集成**ADXL345**三轴加速度计.可测量范围高达±16g（13位分辨率）的加速度数据.输出数据格式为16位二进制补码，可通过I2C数字接口访问.

什么是加速度计?<br>
加速度计是一种加速力的测量设备。这些力可能是静态的(如重力). 或者是动态的由加速度计的移动或振动引起.
<br>
加速度计的数据可以做什么?<br>
通过测量由于重力引起的加速度，你可以计算出设备相对于水平面的倾斜角度。通过分析动态加速度，你可以分析出设备移动的方式

## 产品特性

- 低功耗设计
- 单振/双振检测
- 活动/非活动监控
- 自由落体检测
- I2C数字接口
- 宽温度范围

## 套件清单

- 1x ACCEL unit
- 1x GROVE 线

## 应用

-  建筑和结构监测
-  导航
-  方向感应

## 规格参数

<table>
   <tr style="font-weight:bold">
      <td>规格</td>
      <td>参数</td>
   </tr>
   <tr>
      <td>测量范围</td>
      <td>±16g</td>
   </tr>
   <tr>
      <td>分辨率</td>
      <td>10位固定分辨率分辨率随g范围提高而提高，±16 g时高达13位 </td>
   </tr>
   <tr>
      <td>功耗</td>
      <td>VS = 2.5 V时(典型值)，测量模式下低至23 µA，待 机模式下为0.1 µA</td>
   </tr>
   <tr>
      <td>I/O电压范围</td>
      <td>1.7 V至VS</td>
   </tr>
   <tr>
      <td>工作温度</td>
      <td>−40°C至+85°C</td>
   </tr>
   

## EasyLoader

<img src="https://m5stack.oss-cn-shenzhen.aliyuncs.com/image/EasyLoader_logo.webp" width="100px" style="margin-top:20px">

<a href="https://m5stack.oss-cn-shenzhen.aliyuncs.com/EasyLoader/Unit/EasyLoader_ACCEL.exe"><button type="button" class="btn btn-primary">点击下载EasyLoader</button></a>

>1.EasyLoader是一个简洁快速的程序烧录器，每一个产品页面里的EasyLoader都提供了一个与产品相关的案例程序，通过简单步骤将其烧录至主控，能够进行一系列的功能验证.

>2.下载软件后，双击运行应用程序，将M5设备通过数据线连接至电脑,选择端口参数，点击 **"Burn"** 即可开始烧录.(**为M5StickC烧录时，请将波特率设置在750000或115200**)

?>3.目前EasyLoader仅适用于Windows操作系统、兼容M5体系采用ESP32作为控制核心的主机.在为M5Core烧录前需要安装CP210X驱动程序（使用M5StickC作为控制器的则无需安装）[点击此处查看驱动安装教程](zh_CN/related_documents/M5Burner#安装串口驱动)

### 管脚映射

<table>
 <tr><td>M5Core ( GROVE A )</td><td>GPIO22</td><td>GPIO21</td><td>5V</td><td>GND</td></tr>
 <tr><td>ACC Unit</td><td>SCL</td><td>SDA</td><td>5V</td><td>GND</td></tr>
</table>

## 相关链接

- Datasheet 
    - **[ADXL345](https://m5stack.oss-cn-shenzhen.aliyuncs.com/resource/docs/datasheet/unit/ADXL345_en.pdf)**

## 原理图

<img src="assets/img/product_pics/unit/accel/accel_04.webp">

- **[原理图](https://github.com/m5stack/M5-Schematic/blob/master/Units/UNIT-ACC.pdf)**

## 案例程序

### Arduino

- [点击此处获取Arduino案例程序](https://github.com/m5stack/M5Stack/tree/master/examples/Unit/ACCEL_ADXL345).

## UIFlow

- [点击此处获取UIFlow案例程序](https://github.com/m5stack/M5-ProductExampleCodes/tree/master/Unit/ACCEL/UIFLOW). 

<img src="assets/img/product_pics/unit/accel/ACCEL_05.webp">

## 相关视频

<video class="video_size" controls>
    <source src="https://m5stack.oss-cn-shenzhen.aliyuncs.com/video/Product_example_video/ACCEL.mp4" type="video/mp4">
</video>


<script>

   var purchase_link = 'https://m5stack.com/products/3-axis-digital-accelerometer-unit-adxl345';


   anchor_search(purchase_link);
   scrollFunc();

</script>