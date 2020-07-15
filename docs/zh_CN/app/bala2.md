# BALA2

<div class="badge badge-pill badge-primary product_sku_tag">SKU:K014</div>

<div class="product_pic"><img src="assets/img/product_pics/app/bala_1.webp"> <img src="assets/img/product_pics/app/bala_5.webp"></div>

## 描述

**BALA2** 是一款平衡车应用.该产品是由 M5Stack Gray 与 BALA2电机底座组合而成的一款自平衡机器人，底座采用STM32F030C8T6作为主控，两路编码电机驱动，内置1200mAh电池，其"BALA"名称的由来出自"Balance"一词的缩写，目前为第二代产品。BALA2底座包含了丰富的接口，除了常规的PortB、PortC外还支持8路舵机，其中4路接口可直接连接，其余4路需从底座内部引出。您可以通过编程控制它自由行走，也可以结合WiFi和蓝牙开发遥控功能。即使您从来没有接触过平衡车程序，您也可以通过UIFlow快速完成编程对它进行控制。

默认预装平衡车应用程序，在运行时使用PID闭环算法保持垂直平衡，利用加速度计与陀螺仪姿态数据来校正其方向和位置。

底座通过I2C总线与M5Stack Gray通信.默认I2C地址为**0x56**。

## 产品特性

- 9轴姿态传感器
- 双轮驱动，PID控制平衡
- Grove扩展接口
- 8路舵机驱动，4路外接，4路内置
- 支持WiFi蓝牙，可编程
- 内置扬声器
- 支持 TF 卡拓展
- 兼容 LEGO
- 开发平台
   + MicroPython
   + UIFlow
   + Arduino

## 包含

- 1x M5Stack Gray + BALA2
- 2x 轮毂连接器
- 4x 连接销
- 2x 乐高臂
- 1x 内六角扳手
- 1x Type-C USB 数据线

## 传感器进行校准

注意：首次使用务必先进行校准！按住最右侧C键开机，听到"滴"声后松开按键，传感器会进入校准设置，保持主机水平静止放置，3秒后传感器校准完成，校准完成后会自动进入平衡模式。如果在使用过程中发现BALA无法保持平衡，可通过尝试校准传感器进行解决。

## 规格参数

<table>
   <tr style="font-weight:bold">
      <td>规格</td>
      <td>参数</td>
   </tr>
   <tr>
      <td>ESP32</td>
      <td>240MHz双核，600 DMIPS，520KB SRAM，Wi-Fi，双模蓝牙</td>
   </tr>
   <tr>
      <td>Flash/RAM</td>
      <td>16MB Flash + 4MB PSRAM</td>
   </tr>
   <tr>
      <td>LCD</td>
      <td>2 英寸, 320x240 彩色 TFT LCD, ILI9342C</td>
   </tr>
   <tr>
      <td>扬声器</td>
      <td>1W-0928</td>
   </tr>
   <tr>
      <td>MEMS</td>
      <td>BMM150+MPU6886</td>
   </tr>
   <tr>
      <td>电机驱动</td>
      <td>HR8833</td>
   </tr>
   <tr>
      <td>底座主控</td>
      <td>STM32F030</td>
   </tr>
   <tr>
      <td>接口</td>
      <td>GROVE I2C*1/UART*1/GPIO*1/SERVO*4(+4 Extendable Channel)</td>
   </tr>
   <tr>
      <td>电池容量</td>
      <td>1200mAh</td>
   </tr>
   <tr>
      <td>净重</td>
      <td>130g</td>
   </tr>
   <tr>
      <td>毛重</td>
      <td>247g</td>
   </tr>
   <tr>
      <td>产品尺寸</td>
      <td>90*54*61mm</td>
   </tr>
   <tr>
      <td>包装尺寸</td>
      <td>185*108*81mm</td>
   </tr>
   <tr>
      <td>外壳材质</td>
      <td>Plastic</td>
   </tr>
 </table>

## EasyLoader

>EasyLoader是一个简洁快速的程序烧录器，其内置了一个产品相关的案例程序，通过简单步骤将其烧录至主控，即可进行一系列的功能验证.**(程序烧录前，请根据设备类型安装相应驱动程序. M5Core型主机[请点击此处查看CP210X驱动安装教程](zh_CN/arduino/arduino_development?id=安装串口驱动)，M5StickC/V/T/ATOM系列可免驱动使用)**

<div class="easyloader-box">
    <div style="background-color:white;">
        <div><img src="https://m5stack.oss-cn-shenzhen.aliyuncs.com/image/easyloader_intro.webp"></div>
        <div class="easyloader-btn">
            <a href="">Windows</a>
            <a href="">MacOS</a>
        </div>
    </div>
    <div>
        <video id="example_video" controls>
            <source src="" type="video/mp4">
        </video>
        <div class="easyloader-mask">
        <a>
            <svg id="play-btn" t="1583228776634" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="4152" width="75" height="75"><path d="M512 0C229.216 0 0 229.216 0 512s229.216 512 512 512 512-229.216 512-512S794.784 0 512 0z m0 928C282.24 928 96 741.76 96 512S282.24 96 512 96s416 186.24 416 416-186.24 416-416 416zM384 288l384 224-384 224z" p-id="4153" fill="#007aff"></path></svg></a>
            <p>案例描述:</p>
            <p>该案例中两台设备将互相收发消息在屏幕上进行显示.</p>
        </div>
    </div>
</div>

## 案例程序

### 1. Arduino IDE

*下载完整代码 [点击此处](https://github.com/m5stack/M5Stack/tree/master/examples/Modules/BALA).*

## 管脚映射

**Mega328 ISP**下载接口Pin脚定义

<img src="assets\img\product_pics\app\mega328_isp.webp" width="30%" height="30%">

## 相关视频

**BALA 的演示**

<video class="video_size" controls>
    <source src="https://m5stack.oss-cn-shenzhen.aliyuncs.com/video/Blog/Twitch201812/M5BALA%20.mp4" type="video/mp4">
</video>

<script>

   var purchase_link = 'https://m5stack.com/collections/m5-application/products/bala-esp32-development-mini-self-balancing-car';
   
   var quickstart_link = 'https://docs.m5stack.com/#/en/quick_start/bala/bala_quick_start';

   anchor_search(purchase_link,quickstart_link);
   scrollFunc();

</script>
