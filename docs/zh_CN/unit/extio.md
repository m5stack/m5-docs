# EXT.IO

<el-tag effect="plain">SKU:U011</el-tag>

<div class="product_pic"><img src="assets/img/product_pics/unit/unit_extio_01.webp"><img src="assets/img/product_pics/unit/unit_extio_02.webp"></div>

## 描述

**EXT.IO** 是一款并行端口拓展器.集成了IO拓展芯片PCA9554PW,支持拓展至8个GPIO，能够用于用于2.3~5.5V VCC、开漏、上拉、中断输出操作.通过I2C接口（串行时钟SCL,串行数据SDA）辅助多数的微控制器提供I/0拓展,对于I/O引脚紧缺，又不想浪费资源添加额外控制器的开发者来说,EXT.IO会是一个不错辅助 Unit.

### 产品特性

- I2C通讯
- 输入输出拓展
- HY2.0-4P 接口, 支持 [UIFlow](http://flow.m5stack.com) 、 [Arduino](http://www.arduino.cc).
- 2x LEGO 兼容孔


## 包含

- 1x EXT.IO Unit
- 1x HY2.0-4P线缆

## 规格参数

<table>
   <tr style="font-weight:bold">
      <td>规格</td>
      <td>参数</td>
   </tr>
   <tr>
      <td>IIC地址</td>
      <td>0x27</td>
   </tr>
   <tr>
      <td>I/O扩展数量</td>
      <td>8</td>
   </tr>
   <tr>
      <td>净量</td>
      <td>5g</td>
   </tr>
   <tr>
      <td>毛重</td>
      <td>16g</td>
   </tr>
   <tr>
      <td>产品尺寸</td>
      <td>32*24*11mm</td>
   </tr>
   <tr>
      <td>包装尺寸</td>
      <td>67*53*12mm</td>
   </tr>
</table>

### EasyLoader

<img src="https://m5stack.oss-cn-shenzhen.aliyuncs.com/image/EasyLoader_logo.webp" width="100px" style="margin-top:20px">

<a href="https://m5stack.oss-cn-shenzhen.aliyuncs.com/EasyLoader/Unit/EasyLoader_EXT_IO.exe"><el-button type="primary">点击下载EasyLoader</el-button></a>

>1.EasyLoader是一个简洁快速的程序烧录器，每一个产品页面里的EasyLoader都提供了一个与产品相关的案例程序，通过简单步骤将其烧录至主控，能够进行一系列的功能验证.

>2.下载软件后，双击运行应用程序，将M5设备通过数据线连接至电脑,选择端口参数，点击 **"Burn"** 即可开始烧录.(**为M5StickC烧录时，请将波特率设置在750000或115200**)

?>3.目前EasyLoader仅适用于Windows操作系统、兼容M5体系采用ESP32作为控制核心的主机.在为M5Core烧录前需要安装CP210X驱动程序（使用M5StickC作为控制器的则无需安装）[点击此处查看驱动安装教程](zh_CN/related_documents/M5Burner#安装串口驱动)

### 管脚映射

<table>
 <tr><td>M5Core(PORT A)</td><td>GPIO22</td><td>GPIO21</td><td>5V</td><td>GND</td></tr>
 <tr><td>EXT.IO Unit</td><td>SCL</td><td>SDA</td><td>5V</td><td>GND</td></tr>
</table>


## 原理图

参考原理图及PCA9554PW数据手册可知，该Unit能够通过控制A0~A2引脚的电平组合，修改设备的I2C地址。(默认地址为0x27，更多信息请查看datasheet)
在Unit的PCB板上预留了三个贴片电阻焊接位，分别为A0-A2(R6-R8)，如下图所示。

<img src="assets\img\product_pics\unit\extio\extio_sch.webp">

## 相关链接

- Datasheet - **[PCA9554PW](https://m5stack.oss-cn-shenzhen.aliyuncs.com/resource/docs/datasheet/unit/PCA9554PW_en.pdf)**

## 案例程序

### 1. Arduino IDE

[请点击此处下载Arduino示例程序](https://github.com/m5stack/M5Stack/tree/master/examples/Unit/EXT_IO_PCA9554PW)

<img src="assets/img/product_pics/unit/unit_extio_03.webp">

### 2. UIFlow

[请点击此处下载UIFlow示例](https://github.com/m5stack/M5-ProductExampleCodes/tree/master/Unit/EXTIO/UIFlow)

<img src="assets/img/product_pics/unit/unit_example/EXTIO/example_unit_extio_01.webp">

<script>

   var purchase_link = 'https://m5stack.com/collections/m5-unit/products/official-extend-serial-i-o-unit';


   anchor_search(purchase_link);
   scrollFunc();

</script>