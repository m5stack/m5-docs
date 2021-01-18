# COM.GPS

<el-tag effect="plain">SKU:m031-G</el-tag>

<div class="product_pic"><img src="assets/img/product_pics/module/com.x_gps/comx_gps.webp"></div>

## 描述

**COM.GPS** 是M5Stack堆叠模块系列中的一款，卫星定位模块.基于NEO-M8N模组开发，配备有源天线.NEO-M8N具备 -167 dBm 高接收灵敏度，并且保持系统低功耗.NEO-M8N 集成了 72 通道的 [u-blox](https://www.u-blox.com) M8 GNSS 引擎，支持多个 GNSS 系统：北斗, Galileo, GLONASS, GPS / QZSS，允许同时接收 3 个 GNSS 系统的数据.模组内部集成了可编程FLASH，可对固件进行升级。该模块具有较小的静态漂移，低功耗和紧凑的尺寸非常适合于车辆，PDA等手持设备，车辆监控，移动电话，相机和其他移动定位系统中的应用。M5Core与COM.GPS模块之间使用UART通信协议，通过模块内的拨码开关可设置UART通讯引脚.

如果你想要更改串口波特率，请点击 ( [u-center-just-for-Windows](https://www.u-blox.com/en/product/u-center-windows) )查看.

**注意: 为了使 GPS 模块获得良好信号，请在使用时将模块放置在室外.**

**UART协议：波特率（默认为9600bps），数据位（8位），起始位（1位），停止位（1位），校验位（无）**

?>COM GSM的RXD/TXD可以通过设置拨码开关接入的M5Stack的UART（TX(0/13/17)RX(5/15/16)），**M5Stack Fire** 中的 GPIO 16 / 17 默认与PSRAM连接，在使用GSM时会产生冲突，建议使用剩余两组中的任意一组UART引脚。

?>右侧拨码开关无需设置。

## 产品特性

- 天线类型：外置有源天线
- 外部天线端口：SMA
- 可以同时从3个GNSS系统接收数据
- 水平位置精度：最小 2.5m
- GPS 模组 (NEO-M8N) 内置闪存, 通过[u-center-just-for-Windows](https://www.u-blox.com/en/product/u-center-windows)升级固件
- 支持协议: NMEA, UBX, RTCM
- 行业领先的 -167dBm 灵敏度
- 与 NEO‑7 和 NEO‑6 系列向后兼容

## 包含

-  1x M5Stack GPS 模块
-  1x 外置天线(长度: 1 m)

## 应用

- 基于 GPS 的物流跟踪管理
- 无人驾驶汽车定位

## 规格参数

<table>
   <tr style="font-weight:bold">
      <td>规格</td>
      <td>参数</td>
   </tr>
   <tr>
      <td>接收类型</td>
      <td>GPS:L1C/A SBAS:L1C/A QZSS:L1C/A GLONASS:L1OF BediDou:B1 Galileo:E1B/C</td>
   </tr>
   <tr>
      <td>定位时间</td>
      <td>Cold start:26S Hot start:1.5S </td>
   </tr>
   <tr>
      <td>灵敏度</td>
      <td>-167 dBm</td>
   </tr>
   <tr>
      <td>刷新率</td>
      <td>Separate GNSS 10Hz，Parallel GNSS 5Hz</td>
   </tr>
   <tr>
      <td>速率精度</td>
      <td>0.05m/s</td>
   </tr>
   <tr>
      <td>最大高度</td>
      <td>50000m</td>
   </tr>
   <tr>
      <td>最大速度</td>
      <td>500m/s</td>
   </tr>
   <tr>
      <td>工作电压</td>
      <td>2.7 ~ 3.6V</td>
   </tr>
   <tr>
      <td>工作温度</td>
      <td>-40 ~ 80°C</td>
   </tr>
   <tr>
      <td>净重</td>
      <td>28g</td>
   </tr>
   <tr>
      <td>毛重</td>
      <td>99g</td>
   </tr>
   <tr>
      <td>产品尺寸</td>
      <td>54*54*13mm</td>
   </tr>
   <tr>
      <td>包装尺寸</td>
      <td>165*60*36mm</td>
   </tr>
 </table>

## 相关链接

- **[GPS Info](https://www.u-blox.com/zh/product/neo-m8-series)** (GPS)

- **[TinyGPS++库官网](http://arduiniana.org/libraries/tinygpsplus/)**

- **datasheet** 

   - **[NEO-M8N](https://m5stack.oss-cn-shenzhen.aliyuncs.com/resource/docs/datasheet/module/NEO-M8-FW3_DataSheet_en.pdf)**

   - **[u-blox Protocol Manual](https://m5stack.oss-cn-shenzhen.aliyuncs.com/resource/docs/datasheet/module/u-blox8-M8_ReceiverDescrProtSpec_en.pdf)**

## EasyLoader

>EasyLoader是一个简洁快速的程序烧录器，其内置了一个产品相关的案例程序，通过简单步骤将其烧录至主控，即可进行一系列的功能验证.**(程序烧录前，请根据设备类型安装相应驱动程序. M5Core型主机[请点击此处查看CP210X驱动安装教程](zh_CN/arduino/arduino_development?id=安装串口驱动)，M5StickC/V/T/ATOM系列可免驱动使用)**

<div class="easyloader-box">
    <div style="background-color:white;">
        <div><img src="https://m5stack.oss-cn-shenzhen.aliyuncs.com/image/easyloader_intro.webp"></div>
        <div class="easyloader-btn">
            <a href="https://m5stack.oss-cn-shenzhen.aliyuncs.com/EasyLoader/Windows/MODULE/EasyLoader_COM_GPS.exe">Windows</a>
            <a href="https://m5stack.oss-cn-shenzhen.aliyuncs.com/EasyLoader/MacOS/MODULE/EasyLoader_COMX_GPS_for_M5Core.dmg">MacOS</a>
        </div>
    </div>
    <div>
        <video id="example_video" controls>
            <source src="https://m5stack.oss-cn-shenzhen.aliyuncs.com/video/Product_example_video/Module/COM.GPS.mp4" type="video/mp4">
        </video>
        <div class="easyloader-mask">
        <a>
            <svg id="play-btn" t="1583228776634" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="4152" width="75" height="75"><path d="M512 0C229.216 0 0 229.216 0 512s229.216 512 512 512 512-229.216 512-512S794.784 0 512 0z m0 928C282.24 928 96 741.76 96 512S282.24 96 512 96s416 186.24 416 416-186.24 416-416 416zM384 288l384 224-384 224z" p-id="4153" fill="#007aff"></path></svg></a>
            <p>案例描述:</p>
            <p>拨码开关RX16/TX17,屏幕显示地理位置与时间</p>
        </div>
    </div>
</div>


## 案例程序

### Arduino IDE

[点击这里下载Arduino示例](https://github.com/m5stack/M5-ProductExampleCodes/tree/master/Module/COMX_GPS)

**注意: 为了使 GPS 模块获得良好信号，请在使用时将模块放置在室外.**

**协议规范:**

请参考 [u-blox 8 / u-blox M8 Receiver Description - Manual](https://www.u-blox.com/sites/default/files/products/documents/u-blox8-M8_ReceiverDescrProtSpec_%28UBX-13003221%29_Public.pdf)了解更多信息, 下表是NMEA协议中xxRMC消息的指令.



## 原理图

<img src="assets/img/product_pics/module/com.x_gps/com.x_gps_sch.webp">


<script>

   var purchase_link = 'https://m5stack.com/collections/m5-module/products/com-gps-module-neo-m8n-with-antenna';


   anchor_search(purchase_link);
   scrollFunc();

</script>