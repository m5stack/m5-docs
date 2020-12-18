# UWB

<el-tag effect="plain">SKU:U100</el-tag>

<div class="product_pic"><img src="assets/img/product_pics/unit/uwb/uwb_01.webp"></div>

## 描述

**UWB** 是一款具备室内定位技术的无线通信Unit. 该设计采用Ai-Thinker BU01模组方案(基于Decawave的DW1000设计的超宽带（UWB）收发器模组)。内置STM32并集成测距算法，定位精度可达10cm，支持AT指令控制。应用于室内无线测距时，以基站和标签方式进行工作(基站把位置信息解算输出到标签)。

?>该Unit目前所搭载的固件仅支持测距信息的传输，暂不支持自定义信息传输。使用时，支持配置4个基站设备(使用不同ID)，同一时刻仅允许单个标签设备接入运行。

## 产品特性

- 定位精度:10cm
- 内置STM32集成测距算法
- AT指令控制
- 集成简单，无需RF设计
- 符合IEEE 802.15.4-2011 UWB标准
- 支持双向测距和TDOA
- 开发平台: Arduino, UIFlow(Blockly, Python)
- 2x LEGO 兼容孔

## 套件清单

- 1x UWB Unit
- 1x HY2.0-4P线缆

## 应用

- 室内定位/无线测距

## 规格参数

<table>
   <tr style="font-weight:bold">
      <td>规格</td>
      <td>参数</td>
   </tr>
   <tr>
      <td>净重</td>
      <td>7g</td>
   </tr>
   <tr>
      <td>毛重</td>
      <td>19g</td>
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

- **[AT Command](https://m5stack.oss-cn-shenzhen.aliyuncs.com/resource/docs/datasheet/unit/uwb/uwb_unit_at_command_cn.pdf)**
- **[BU01-specification](https://m5stack.oss-cn-shenzhen.aliyuncs.com/resource/docs/datasheet/unit/uwb/nodemcu-bu01-specification_1_14.pdf)**
- **[DW1000 Datasheet](https://m5stack.oss-cn-shenzhen.aliyuncs.com/resource/docs/datasheet/unit/uwb/dwm1000-datasheet-1.pdf)**

## EasyLoader

>EasyLoader是一个简洁快速的程序烧录器，其内置了一个产品相关的案例程序，通过简单步骤将其烧录至主控，即可进行一系列的功能验证.**(程序烧录前，请根据设备类型安装相应驱动程序. M5Core型主机[请点击此处查看CP210X驱动安装教程](zh_CN/arduino/arduino_development?id=安装串口驱动)，M5StickC/V/T/ATOM系列可免驱动使用)**

<div class="easyloader-box">
    <div style="background-color:white;">
        <div><img src="https://m5stack.oss-cn-shenzhen.aliyuncs.com/image/easyloader_intro.webp"></div>
        <div class="easyloader-btn">
            <a href="https://m5stack.oss-cn-shenzhen.aliyuncs.com/EasyLoader/Windows/UNIT/For%20M5Core/EasyLoader_UWB_UNIT_With_M5Core.exe">Windows</a>
            <a href="https://m5stack.oss-cn-shenzhen.aliyuncs.com/EasyLoader/MacOS/UNIT/EasyLoader_UWB_UNIT_With_M5Core.dmg">MacOS</a>
        </div>
    </div>
    <div>
        <video id="example_video" controls>
            <source src="https://m5stack.oss-cn-shenzhen.aliyuncs.com/video/Product_example_video/Unit/UWB_VIDEO.mp4" type="video/mp4">
        </video>
        <div class="easyloader-mask">
        <a>
            <svg id="play-btn" t="1583228776634" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="4152" width="75" height="75"><path d="M512 0C229.216 0 0 229.216 0 512s229.216 512 512 512 512-229.216 512-512S794.784 0 512 0z m0 928C282.24 928 96 741.76 96 512S282.24 96 512 96s416 186.24 416 416-186.24 416-416 416zM384 288l384 224-384 224z" p-id="4153" fill="#007aff"></path></svg></a>
            <p>案例描述:</p>
            <p>屏幕显示当前标签设备与基站点的测距数据.</p>
        </div>
    </div>
</div>

## 案例程序

### Arduino IDE

- [Arduino示例程序](https://github.com/m5stack/M5Stack/blob/master/examples/Unit/UWB_DW1000/UWB_DW1000.ino)

## 原理图

<img src="assets/img/product_pics/unit/uwb/uwb_sch_01.webp">
<img src="assets/img/product_pics/unit/uwb/uwb_sch_02.webp">

### 管脚映射

<table>
 <tr><td>M5Core</td><td>U2RXD(GPIO16)</td><td>U2TXD(GPIO17)</td><td>5V</td><td>GND</td></tr>
 <tr><td>UWB Unit</td><td>TXD</td><td>RXD</td><td>5V</td><td>GND</td></tr>
</table>

<script>

   var purchase_link = 'https://m5stack.com/products/u100-ultra-wideband-uwb-unit-indoor-positioning-module-dw1000';
   
   anchor_search(purchase_link);
   scrollFunc();

</script>