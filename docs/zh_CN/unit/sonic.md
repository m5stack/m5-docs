# Ultrasonic

<el-tag effect="plain">SKU:U098</el-tag>

<div class="product_pic"><img src="assets/img/product_pics/unit/sonic/ultrasonic.webp"></div>

## 描述

**Ultrasonic** 是一款超声波测距传感器单元，采用收发分体式设计，其中超声波探头的声波频率40Khz，方向角±20°，精度可达1mm,内部由RCWL-9600超声波测距芯片运算，通过IIC接口(0x57)可直接获得测量结果。测量有效距离为20-1500mm。

## 产品特性

- 分体式收发
- 有效距离1500mm
- 方向角范围广
- IIC通讯，结果直接输出

## 包含

-  1x Ultrasonic Unit
-  1x PORT连接线(20cm)

## 应用

- 距离测量
- 避障

## 规格参数

<table>
   <tr style="font-weight:bold">
      <td>规格</td>
      <td>参数</td>
   </tr>
   <tr>
      <td>测距芯片</td>
      <td>RCWL-9600</td>
   </tr>
   <tr>
      <td>测量距离</td>
      <td>20-1500mm</td>
   </tr>
   <tr>
      <td>发射端声压级</td>
      <td>108dB</td>
   </tr>
   <tr>
      <td>接收端灵敏度</td>
      <td>-68dB</td>
   </tr>
   <tr>
      <td>盲区</td>
      <td>20mm</td>
   </tr>
   <tr>
      <td>精度</td>
      <td>1mm</td>
   </tr>
   <tr>
      <td>净重</td>
      <td>9g</td>
   </tr>
   <tr>
      <td>毛重</td>
      <td>23g</td>
   </tr>
   <tr>
      <td>产品尺寸</td>
      <td>56*24*12mm</td>
   </tr>
   <tr>
      <td>包装尺寸</td>
      <td>60*55*16mm</td>
   </tr>
 </table>

## EasyLoader

>EasyLoader是一个简洁快速的程序烧录器，其内置了一个产品相关的案例程序，通过简单步骤将其烧录至主控，即可进行一系列的功能验证.**(程序烧录前，请根据设备类型安装相应驱动程序. M5Core型主机[请点击此处查看CP210X驱动安装教程](zh_CN/arduino/arduino_development?id=安装串口驱动)，M5StickC/V/T/ATOM系列可免驱动使用)**

<div class="easyloader-box">
    <div style="background-color:white;">
        <div><img src="https://m5stack.oss-cn-shenzhen.aliyuncs.com/image/easyloader_intro.webp"></div>
        <div class="easyloader-btn">
            <a href="https://m5stack.oss-cn-shenzhen.aliyuncs.com/EasyLoader/Windows/UNIT/For%20M5Core/EasyLoader_UltraSonic_Unit.exe">Windows</a>
            <a href="https://m5stack.oss-cn-shenzhen.aliyuncs.com/EasyLoader/MacOS/UNIT/EasyLoader_Ultrasonic.dmg">MacOS</a>
        </div>
    </div>
    <div>
        <video id="example_video" controls>
            <source src="https://m5stack.oss-cn-shenzhen.aliyuncs.com/video/Product_example_video/Unit/ULTRASONIC.mp4" type="video/mp4">
        </video>
        <div class="easyloader-mask">
        <a>
            <svg id="play-btn" t="1583228776634" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="4152" width="75" height="75"><path d="M512 0C229.216 0 0 229.216 0 512s229.216 512 512 512 512-229.216 512-512S794.784 0 512 0z m0 928C282.24 928 96 741.76 96 512S282.24 96 512 96s416 186.24 416 416-186.24 416-416 416zM384 288l384 224-384 224z" p-id="4153" fill="#007aff"></path></svg></a>
            <p>案例描述:</p>
            <p>测量距离</p>
        </div>
    </div>
</div>

## 管脚映射

<table>
 <tr><td>M5Core(PORT A)</td><td>GPIO22</td><td>GPIO21</td><td>5V</td><td>GND</td></tr>
 <tr><td>Ultrasonic Unit</td><td>SCL</td><td>SDA</td><td>5V</td><td>GND</td></tr>
</table>

## 相关链接

  - **[Ceramic Ultrasonic Sensor TC40-10T/R](https://m5stack.oss-cn-shenzhen.aliyuncs.com/resource/docs/datasheet/unit/TC40-10T-R.pdf)**

## 案例程序

### Arduino

- 点击此处[下载示例程序](https://github.com/m5stack/M5-ProductExampleCodes/tree/master/Unit/ULTRA)

<script>

   var purchase_link = 'https://m5stack.com/products/ultrasonic-distance-unit-rcwl-9600';

   anchor_search(purchase_link);
   scrollFunc();

</script>