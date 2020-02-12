# Unit PaHUB {docsify-ignore-all}


<img src="assets/img/product_pics/unit/pahub/pahub_p1.jpg" width="30%" height="30%"><img src="assets/img/product_pics/unit/pahub/pahub_p3.jpg" width="30%" height="30%">



## 描述

**PaHUB**, 是一款 I2C GROVE PORTA 扩展器.能够将单路 I2C GROBE 接口拓展至六路,并且允许挂载相同I2C地址的从设备.

内部集成**TCA9548A**-I2C多路复用器，配有8个可通过I2C总线控制的双向转换开关.串行时钟/串行数据（SCL /SDA）上行对可扩展为8个下行对或通道.根据可编程控制寄存器的内容，可选择任一单独SCn /SDn通道或者通道组合.

支持多层 Unit 嵌套，这意味着你可以将PaHUB连接到PaHUB上以获得更多的I2C从设备接口.（例：将7个Unit进行连接，将获得36个**I2C**接口，且在主控仅仅占用了一个GROVE端口）当你的项目需要挂载多个I2C设备或存在I2C地址冲突时，PaHUB Unit 是完美解决方案.

该 Unit 的 I2C 地址为0x70（可通过调整电阻进行更改）.

*注意：编程时请注意通道顺序*

<img src="assets/img/product_pics/unit/pahub/pahub_p2.jpg" width="30%" height="30%">



### 产品特性

- I2C GROVE PORTA 拓展
- 2x LEGO 兼容孔
- 允许多个嵌套
- 1-6 拓展

## 原理图

<img src="assets/img/product_pics/unit/pahub/pahub_sch.png" width="50%">

参考原理图及TCA9548A数据手册可知，该Unit能够通过控制A0~A2引脚的电平组合，修改设备的I2C地址。(默认地址为0x70)

在Unit的PCB板上预留了三个贴片电阻焊接位，分别为A0-A2，如下图所示。

<img src="assets\img\product_pics\unit\pahub\pahub_p5.jpg" width="50%">

焊接0欧电阻后，相应的引脚将由低电平变为高电平，引脚电平组合与其对应的I2C地址如下表所示。

<img src="assets\img\product_pics\unit\pahub\pahub_p4.jpg" width="50%">

### 套件清单

- 1x PaHUB Unit
- 1x Grove 线


## 参考文档

- Datasheet - **[TCA9548A](https://m5stack.oss-cn-shenzhen.aliyuncs.com/resource/docs/datasheet/unit/TCA9548A_en.pdf)**


## 案例程序

- 通讯类型 - I2C
- 地址 - 0x70

- **UIFlow**

*下载完整代码 [点击这里](https://github.com/m5stack/M5-ProductExampleCodes/tree/master/Unit/PaHUB/UIFlow).*

<img src="assets/img/product_pics/unit/pahub/pahub.png" width="80%" height="80%">

- **[Arduino](https://github.com/m5stack/M5-ProductExampleCodes/tree/master/Unit/PaHUB/Arduino/PaHUB)**

## EasyLoader

<img src="https://m5stack.oss-cn-shenzhen.aliyuncs.com/image/EasyLoader_logo.png" width="100px" style="margin-top:20px">

<a href="https://m5stack.oss-cn-shenzhen.aliyuncs.com/EasyLoader/Unit/EasyLoader_PaHUB.exe"><button type="button" class="btn btn-primary">点击下载EasyLoader</button></a>

>1.EasyLoader是一个简洁快速的程序烧录器，每一个产品页面里的EasyLoader都提供了一个与产品相关的案例程序，通过简单步骤将其烧录至主控，能够进行一系列的功能验证.

>2.下载软件后，双击运行应用程序，将M5设备通过数据线连接至电脑,选择端口参数，点击 **"Burn"** 即可开始烧录.(**为M5StickC烧录时，请将波特率设置在750000或115200**)

?>3.目前EasyLoader仅适用于Windows操作系统、兼容M5体系采用ESP32作为控制核心的主机.在为M5Core烧录前需要安装CP210X驱动程序（使用M5StickC作为控制器的则无需安装）[点击此处查看驱动安装教程](zh_CN/related_documents/M5Burner#安装串口驱动)

<script>

   var purchase_link = 'https://m5stack.com/collections/m5-unit/products/pahub-unit';

   anchor_search(purchase_link);
   scrollFunc();

</script>