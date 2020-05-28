# FINGER

<div class="badge badge-pill badge-primary product_sku_tag">SKU:U008</div>

<div class="product_pic"><img src="assets/img/product_pics/unit/unit_finger_01.webp"><img src="assets/img/product_pics/unit/unit_finger_02.webp"></div>

## 描述

**FINGER** 是一款指纹识别传感器. 内部集成 FPC1020A 电容式指纹识别模组,具备多指纹录入、图像处理、特征值提取、指纹比对、搜索等功能.

采用UART通信协议、紧凑的外观设计、与低功耗能带给项目可靠的安全级别的同时，提供最佳的用户便利性.如果你想要为你的项目添加生物指纹识别功能，并希望其具备稳定可靠的添加、验证、管理机制.**FINGER Unit** 是一个不错的解决方案.

**使用时，请将该 Unit 连接到 PORT C ，它将通过UART协议与M5Core进行通信**

UART 参数设置:
- 波特率(**默认: 19200bps**)
- 起始位(1 bit)
- 停止位(1 bit)
- 校验位(无)

## 产品特性

- 采用电容式面阵式半导体指纹传感器
- 传感器每个像素拥有 256 灰度级的像素质量
- 1:N 识别 及 1:1 验证功能
- 支持手指 360 旋转识别
- 指纹比对、搜索功能

## 包含

- 1x FINGER Unit
- 1x Grove 线

## 应用

- 指纹考勤机
- 指纹储物柜

## 规格参数

<table>
   <tr style="font-weight:bold">
      <td>规格</td>
      <td>参数</td>
   </tr>
   <tr>
      <td>指纹容量</td>
      <td>150</td>
   </tr>
   <tr>
      <td>安全等级</td>
      <td>0-9，默认5</td>
   </tr>
   <tr>
      <td>输出格式</td>
      <td>用户名、图像、特征值</td>
   </tr>
   <tr>
      <td>特征值大小</td>
      <td>193Byte</td>
   </tr>
   <tr>
      <td>通讯方式</td>
      <td>UART(9600-115200)</td>
   </tr>
   <tr>
      <td>工作温度</td>
      <td>-10°C - 60°C</td>
   </tr>
   <tr>
      <td>相对湿度</td>
      <td>20%-80%</td>
   </tr>
   <tr>
      <td>净重</td>
      <td>7g</td>
   </tr>
   <tr>
      <td>毛重</td>
      <td>20g</td>
   </tr>
   <tr>
      <td>产品尺寸</td>
      <td>48*24*8mm</td>
   </tr>
   <tr>
      <td>包装尺寸</td>
      <td>67*53*12mm</td>
   </tr>
</table>


## 相关链接

- 通信协议 **[FINGER 串口通信协议](https://github.com/m5stack/M5-Schematic/blob/master/Units/finger/biovo_fingerprint_Protocol_en.DOC)**

- 数据手册 **[FPC1020A](https://m5stack.oss-cn-shenzhen.aliyuncs.com/resource/docs/datasheet/hat/1020A_datasheet_cn.pdf)**

## EasyLoader

>EasyLoader是一个简洁快速的程序烧录器，其内置了一个产品相关的案例程序，通过简单步骤将其烧录至主控，即可进行一系列的功能验证.**(程序烧录前，请根据设备类型安装相应驱动程序. M5Core型主机[请点击此处查看CP210X驱动安装教程](zh_CN/arduino/arduino_development?id=安装串口驱动)，M5StickC/V/T/ATOM系列可免驱动使用)**

<div class="easyloader-box">
    <div style="background-color:white;">
        <div><img src="https://m5stack.oss-cn-shenzhen.aliyuncs.com/image/easyloader_intro.webp"></div>
        <div class="easyloader-btn">
            <a href="https://m5stack.oss-cn-shenzhen.aliyuncs.com/EasyLoader/Windows/UNIT/For%20M5Core/EasyLoader_Finger_UNIT_With_M5Core.exe">Windows</a>
            <a href="https://m5stack.oss-cn-shenzhen.aliyuncs.com/EasyLoader/MacOS/UNIT/EasyLoader_Finger_UNIT_With_M5Core.dmg">MacOS</a>
            <!-- <a>Linux</a>
            <a>MacOS</a> -->
        </div>
    </div>
    <div>
        <video id="example_video" controls>
            <source src="https://m5stack.oss-cn-shenzhen.aliyuncs.com/video/Product_example_video/Unit/Finger_UNIT.mp4" type="video/mp4">
        </video>
        <div class="easyloader-mask">
        <a>
            <svg id="play-btn" t="1583228776634" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="4152" width="75" height="75"><path d="M512 0C229.216 0 0 229.216 0 512s229.216 512 512 512 512-229.216 512-512S794.784 0 512 0z m0 928C282.24 928 96 741.76 96 512S282.24 96 512 96s416 186.24 416 416-186.24 416-416 416zM384 288l384 224-384 224z" p-id="4153" fill="#007aff"></path></svg></a>
            <p>案例描述:</p>
            <p>FINGER UNIT使用案例：按下左侧按键进入录入指纹模式. 按下中间按键进入指纹识别模式.</p>
        </div>
    </div>
</div>

### 管脚映射

<table>
<tr><td>M5Core(GROVE C)</td><td>U2RXD</td><td>U2TXD</td><td>5V</td><td>GND</td></tr>
 <tr><td>FINGER Unit</td><td>TXD</td><td>RXD</td><td>5V</td><td>GND</td></tr>
</table>

## 原理图

<img src="assets/img/product_pics/unit/finger_sch.JPG">

## 案例程序

- **UIFlow**

- [请点击此处下载UIFlow示例](https://github.com/m5stack/M5-ProductExampleCodes/tree/master/Unit/FINGER/UIFlow)

<img src="assets/img/product_pics/unit/fingerprint.webp">

### Arduino IDE

- [请点击此处下载Arduino示例程序](https://github.com/m5stack/M5Stack/tree/master/examples/Unit/FINGER_FPC1020A)

## 相关视频

- **FINGER 的演示**

<video class="video_size" controls>
    <source src="https://m5stack.oss-cn-shenzhen.aliyuncs.com/video/Blog/Twitch201901/Fingerprint%20Unit.mp4" type="video/mp4">
</video>

<script>

   var purchase_link = 'https://m5stack.com/collections/m5-unit/products/finger-sensor-unit';
   anchor_search(purchase_link);
   scrollFunc();

</script>