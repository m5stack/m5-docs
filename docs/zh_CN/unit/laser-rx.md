# LASER.RX {docsify-ignore-all}

<div class="badge badge-pill badge-primary product_sku_tag">SKU:U065</div>

<div class="product_pic"><img src="assets\img\product_pics\unit\laser_rx\unit_laser_rx_01.webp"><img src="assets\img\product_pics\unit\laser_rx\unit_laser_rx_02.webp"></div>

## 描述

**LASER.RX** 是一款激光接收器Unit,内部主要由激光晶体管构成.
激光通信设备通过大气的无线连接。 除了光束通过自由空间传输外，它们的工作方式类似于光纤链路。 虽然发射器和接收器必须要求视距条件，但它们的好处是不需要广播权和埋地电缆。 因其小巧，低功率并且不需要任何无线电干扰研究的特点，激光通信系统可以很容易地部署到各个位置.该Unit使用的端口类型为 PORTB.

## 产品特性

- 激光接收
- 配对 LASER.TX
- 2x LEGO 兼容孔
- 开发平台: Arduino, UIFlow(Blockly, Python)

## 包含

- 1x LASER.RX unit
- 1x CONNEXT cable

## 应用

- 空间激光通信系统.


## 规格参数

<table>
   <tr style="font-weight:bold">
      <td>规格</td>
      <td>参数</td>
   </tr>
   <tr>
      <td>工作电压</td>
      <td>5V</td>
   </tr>
   <tr>
      <td>接收频率</td>
      <td>140KHz ~205KHz</td>
   </tr>
   <tr>
      <td>尺寸</td>
      <td>32.2mm x 24.2mm x 8.1mm</td>
   </tr>
   <tr>
      <td>重量</td>
      <td>3.8g</td>
   </tr>
</table>

## EasyLoader

<img src="https://m5stack.oss-cn-shenzhen.aliyuncs.com/image/EasyLoader_logo.webp" width="100px" style="margin-top:20px">

<a href="https://m5stack.oss-cn-shenzhen.aliyuncs.com/EasyLoader/Unit/LASER/EasyLoader_LASER_RX.exe"><button type="button" class="btn btn-primary">点击下载EasyLoader</button></a>

>1.EasyLoader是一个简洁快速的程序烧录器，每一个产品页面里的EasyLoader都提供了一个与产品相关的案例程序，通过简单步骤将其烧录至主控，能够进行一系列的功能验证.

>2.下载软件后，双击运行应用程序，将M5设备通过数据线连接至电脑,选择端口参数，点击 **"Burn"** 即可开始烧录.(**为M5StickC烧录时，请将波特率设置在750000或115200**)

?>3.目前EasyLoader仅适用于Windows操作系统、兼容M5体系采用ESP32作为控制核心的主机.在为M5Core烧录前需要安装CP210X驱动程序（使用M5StickC作为控制器的则无需安装）[点击此处查看驱动安装教程](zh_CN/related_documents/M5Burner#安装串口驱动)


### 管脚映射

<table>
 <tr><td>M5 PORTB</td><td>GPIO36</td><td>GPIO26</td><td>5V</td><td>GND</td></tr>
 <tr><td>LASER_RX</td><td>RX</td><td>/</td><td>5V</td><td>GND</td></tr>
</table>


## 原理图

<img src="assets/img/product_pics/unit/laser_rx/unit_laser_rx_04.webp" width="50%" height="50%">


## 案例程序

### 1.Arduino IDE

- [请点击此处获取Arduino示例代码](https://github.com/m5stack/M5Stack/tree/master/examples/Unit/LASER)

### 2.UIFlow

<img src="assets\img\product_pics\unit\laser_rx\laser-rx.webp" width="80%" height="80%">

## 相关视频

<video class="video_size" controls>
    <source src="https://m5stack.oss-cn-shenzhen.aliyuncs.com/video/Product_example_video/Unit/LASER-TX-RX.mp4" type="video/mp4" >
</video>

<script>

   var purchase_link = 'https://m5stack.com/collections/m5-unit/products/laser-rx-unit';


   anchor_search(purchase_link);
   scrollFunc();

</script>