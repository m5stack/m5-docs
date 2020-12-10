# EARTH

<el-tag effect="plain">SKU:U019</el-tag>

<div class="product_pic"><img src="assets/img/product_pics/unit/earth/unit_earth_01.webp"></div>

## 描述

**EARTH** 是一款土壤湿度传感器，用于采集土壤或是类似材料中的水分.传感器上有两个测量探头,将其插入待测量土壤中，由于水分含量越高，则拥有更好的导电性,通过测量两探头之间的电势差，并进行ADC转换,将检测结果发送给M5Core.Unit上还集成了一个10K可调电阻，用于调节检测门槛值.

## 产品特性

- 集成10K可调电阻，用于调节阈值.
- 模拟 & 数字 输出
- HY2.0-4P 接口, 支持 [UIFlow](http://flow.m5stack.com) 、 [Arduino](http://www.arduino.cc)
- 2x LEGO 兼容孔

## 包含

- 1x EARTH Unit
- 1x HY2.0-4P线缆

## 应用

- 盆栽土壤湿度监控

## 规格参数

<table>
   <tr style="font-weight:bold">
      <td>规格</td>
      <td>参数</td>
   </tr>
   <tr>
      <td>净重</td>
      <td>5g</td>
   </tr>
   <tr>
      <td>毛重</td>
      <td>18g</td>
   </tr>
   <tr>
      <td>产品尺寸</td>
      <td>64.4*24.1*8.1mm</td>
   </tr>
   <tr>
      <td>包装尺寸</td>
      <td>67*53*12mm</td>
   </tr>
</table>

## EasyLoader

<img src="https://m5stack.oss-cn-shenzhen.aliyuncs.com/image/EasyLoader_logo.webp" width="100px" style="margin-top:20px">

<a href="https://m5stack.oss-cn-shenzhen.aliyuncs.com/EasyLoader/Unit/EasyLoader_Earth.exe"><el-button type="primary">点击下载EasyLoader</el-button></a>

>1.EasyLoader是一个简洁快速的程序烧录器，每一个产品页面里的EasyLoader都提供了一个与产品相关的案例程序，通过简单步骤将其烧录至主控，能够进行一系列的功能验证.

>2.下载软件后，双击运行应用程序，将M5设备通过数据线连接至电脑,选择端口参数，点击 **"Burn"** 即可开始烧录.(**为M5StickC烧录时，请将波特率设置在750000或115200**)

?>3.目前EasyLoader仅适用于Windows操作系统、兼容M5体系采用ESP32作为控制核心的主机.在为M5Core烧录前需要安装CP210X驱动程序（使用M5StickC作为控制器的则无需安装）[点击此处查看驱动安装教程](zh_CN/related_documents/M5Burner#安装串口驱动)

### 管脚映射

<table>
 <tr><td>M5Core(PORT B)</td><td>GPIO36</td><td>GPIO26</td><td>5V</td><td>GND</td></tr>
 <tr><td>EARTH Unit</td><td>AnalogSignal Pin</td><td>DigitalSignal Pin</td><td>5V</td><td>GND</td></tr>
</table>

## 原理图

<img src="assets/img/product_pics/unit/earth_sch.JPG">

## 案例程序

### 1. Arduino IDE

[请点击此处获取Arduino代码示例](https://github.com/m5stack/M5Stack/tree/master/examples/Unit/EARTH)

### 2. UIFlow

[请点击此处](https://github.com/m5stack/M5-ProductExampleCodes/tree/master/Unit/EARTH/UIFlow)

<img src="assets/img/product_pics/unit/unit_example/EARTH/example_unit_earth_04.webp">

## 相关视频

**EARTH 的教程 - 监控花瓶土壤含水量**

<video width="500" height="315" controls>
    <source src="https://m5stack.oss-cn-shenzhen.aliyuncs.com/video/LukeVideo/(M5stack%20x%20Arduino)%20Do%20plants%20have%20feelings.mp4" type="video/mp4">
</video>

<script>

   var purchase_link = 'https://m5stack.com/collections/m5-unit/products/earth-sensor-unit';

   anchor_search(purchase_link);
   scrollFunc();

</script>