# PaHUB {docsify-ignore-all}

<el-tag effect="plain">SKU:U040</el-tag>


<div class="product_pic"><img src="assets/img/product_pics/unit/pahub/pahub_p1.webp"><img src="assets/img/product_pics/unit/pahub/pahub_p3.webp"></div>

## 描述

**PaHUB**, 是一款 I2C HY2.0-4P PORTA 扩展器.能够将单路 I2C HY2.0-4P 接口拓展至六路,并且允许挂载相同I2C地址的从设备.

内部集成**TCA9548A**-I2C多路复用器，配有8个可通过I2C总线控制的双向转换开关.串行时钟/串行数据（SCL /SDA）上行对可扩展为8个下行对或通道.根据可编程控制寄存器的内容，可选择任一单独SCn /SDn通道或者通道组合.

支持多层 Unit 嵌套，这意味着你可以将PaHUB连接到PaHUB上以获得更多的I2C从设备接口.（例：将7个Unit进行连接，将获得36个**I2C**接口，且在主控仅仅占用了一个HY2.0-4P端口）当你的项目需要挂载多个I2C设备或存在I2C地址冲突时，PaHUB Unit 是完美解决方案.该 Unit 的 I2C 地址为0x70(可通过调整电阻进行更改).

注意：编程时请注意通道顺序

<img src="assets/img/product_pics/unit/pahub/pahub_p2.webp" width="30%" height="30%">

## 产品特性

- I2C HY2.0-4P PORTA 拓展
- 2x LEGO 兼容孔
- 允许多个嵌套
- 1-6 拓展

参考原理图及TCA9548A数据手册可知，该Unit能够通过控制A0~A2引脚的电平组合，修改设备的I2C地址。(默认地址为0x70)

在Unit的PCB板上预留了三个贴片电阻焊接位，分别为A0-A2，如下图所示。

<img src="assets\img\product_pics\unit\pahub\pahub_p5.webp" width="50%">

焊接0欧电阻后，相应的引脚将由低电平变为高电平，引脚电平组合与其对应的I2C地址如下表所示。

<img src="assets\img\product_pics\unit\pahub\pahub_p4.webp" width="50%">

## 包含

- 1x PaHUB Unit
- 1x HY2.0-4P线缆

## 应用

- I2C扩展

## 规格参数

<table>
   <tr style="font-weight:bold">
      <td>规格</td>
      <td>参数</td>
   </tr>
   <tr>
      <td>通讯协议</td>
      <td>I2C：0x70(可通过电阻A0，A1，A2修改)</td>
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
      <td>48*24*12mm</td>
   </tr>
   <tr>
      <td>包装尺寸</td>
      <td>67*53*12mm</td>
   </tr>
 </table>

## 原理图

<img src="assets/img/product_pics/unit/pahub/pahub_sch.webp" width="50%">

## 相关链接

- **Datasheet** 
   - **[TCA9548A](https://m5stack.oss-cn-shenzhen.aliyuncs.com/resource/docs/datasheet/unit/TCA9548A_en.pdf)**

## EasyLoader

<img src="https://m5stack.oss-cn-shenzhen.aliyuncs.com/image/EasyLoader_logo.webp" width="100px" style="margin-top:20px">

<a href="https://m5stack.oss-cn-shenzhen.aliyuncs.com/EasyLoader/Unit/EasyLoader_PaHUB.exe"><el-button type="primary">点击下载EasyLoader</el-button></a>

>1.EasyLoader是一个简洁快速的程序烧录器，每一个产品页面里的EasyLoader都提供了一个与产品相关的案例程序，通过简单步骤将其烧录至主控，能够进行一系列的功能验证.

>2.下载软件后，双击运行应用程序，将M5设备通过数据线连接至电脑,选择端口参数，点击 **"Burn"** 即可开始烧录.(**为M5StickC烧录时，请将波特率设置在750000或115200**)

?>3.目前EasyLoader仅适用于Windows操作系统、兼容M5体系采用ESP32作为控制核心的主机.在为M5Core烧录前需要安装CP210X驱动程序（使用M5StickC作为控制器的则无需安装）[点击此处查看驱动安装教程](zh_CN/related_documents/M5Burner#安装串口驱动)

## 案例程序

### 1. Arduino

- [请点击此处获取Arduino示例程序](https://github.com/m5stack/M5Stack/tree/master/examples/Unit/PaHUB_TCA9548A)

### 2. UIFlow

- [请点击此处获取UIFlow示例](https://github.com/m5stack/M5-ProductExampleCodes/tree/master/Unit/PaHUB/UIFlow)

<img src="assets/img/product_pics/unit/pahub/pahub.webp" width="50%" height="50%">

<script>

   var purchase_link = 'https://m5stack.com/collections/m5-unit/products/pahub-unit';

   anchor_search(purchase_link);
   scrollFunc();

</script>