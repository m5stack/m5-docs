# YUN HAT {docsify-ignore-all}

<img src="assets\img\product_pics\hat\yun_hat\yun_hat_01.jpg" width="30%" height="30%">
<img src="assets\img\product_pics\hat\yun_hat\yun_hat_02.jpg" width="30%" height="30%">

***

:memo:**[描述](#描述)**&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;:electric_plug:**[原理图](#原理图)**&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;:octocat:**[例程](#例程)**&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;🛒**[购买链接](https://m5stack.com/products/m5stickc-yun-hatsh20-bmp280-sk6812)**&nbsp;&nbsp;&nbsp;<img src="https://m5stack.oss-cn-shenzhen.aliyuncs.com/image/EasyLoader_M5StickC_logo_min.png">**[EasyLoader](#EasyLoader)**

## 描述

**YUN HAT**是一款云朵形状的多功能环境信息采集底座.内置温湿度传感器**SHT20**、气压传感器**BMP280**、光敏电阻.以及14颗RGB LED.内嵌**STM32F030F4**控制芯片，提供简洁高效的程序调用接口.精致的设计外观、实现精准环境信息数据采集的同时具备一定的装饰效果.

底座针对M5StickC设计，预留相同数目的排针与空间能够与M5StickC顶部的拓展端口完美插接.整体结构采用三层设计，上下两层PCB板，分别充当固定结构与主体电路，为利于电路的长时间工作，板上还提供了独立外部电源接口.中层为导光亚克力件，为获得更好的灯光显示效果，亚克力外轮廓切割面部分采用了打磨工艺，其目的在于编程控制灯光时，能够有效减少光的散射，使其呈现加均匀饱和的灯光效果.板上嵌入2个6*4mm磁铁并预留1个挂钩孔，用户能够便捷的将它安装在生活中的任意角落.

<br>

<img src="assets\img\product_pics\hat\yun_hat\yun_hat_03.jpg" width="30%" height="30%">

<br>

## 产品特性

- 控制芯片**STM32F030F4**
- 温湿度传感器**SHT20**
- 气压传感器**BMP280**
- 光敏电阻
- 14 x SK6812 4020 RGB LED
- 三层结构设计：
    - 1 x 挂钩孔
    - 2 x 6*4mm磁铁嵌入
    - 1 x 亚克力外轮廓切割面加工打磨
- 开发平台: Arduino, UIFlow(Blockly, Python)

## 包含

- 1x YUN HAT
- 2x 杜邦线

<img src="assets\img\product_pics\hat\yun_hat\yun_hat_04.jpg" width="30%" height="30%">

## 应用

-  环境信息采集
-  智能家居装饰

## 原理图

<img src="assets\img\product_pics\hat\yun_hat\yun_hat_05.jpg" width="50%">

## 相关链接

-  **datasheet**

    - [SHT20](https://m5stack.oss-cn-shenzhen.aliyuncs.com/resource/docs/datasheet/hat/SHT20_Datasheet_en.pdf)
    - [BMP280](https://m5stack.oss-cn-shenzhen.aliyuncs.com/resource/docs/datasheet/hat/BMP280-DS001-11_en.pdf)

## EasyLoader

<img src="https://m5stack.oss-cn-shenzhen.aliyuncs.com/image/EasyLoader_M5StickC_logo.png" width="100px" style="margin-top:20px">

<a href="https://m5stack.oss-cn-shenzhen.aliyuncs.com/EasyLoader/HAT/YUN/EasyLoader_YUN_HAT.exe"><button type="button" class="btn btn-primary">点击下载EasyLoader</button></a>

>1.EasyLoader是一个简洁快速的程序烧录器，每一个产品页面里的EasyLoader都提供了一个与产品相关的案例程序，通过简单步骤将其烧录至主控，能够进行一系列的功能验证.**(目前EasyLoader仅适用于Windows操作系统)**

>2.下载软件后，双击运行应用程序，将M5设备通过数据线连接至电脑,选择端口参数，点击 **"Burn"** 即可开始烧录.(**为M5StickC烧录时，请将波特率设置在750000或115200**)

## 例程

- **UIFlow**

Open http://flow.m5stack.com and Load Demo

<img src="assets/img/product_pics/hat/yun_hat/yun.png">

- **Arduino**

To get complete code, please click [here](https://github.com/m5stack/M5-ProductExampleCodes/tree/master/Hat/hat-yun)

### 管脚映射

<table>
 <tr><td>M5StickC</td><td>GND</td><td>5V OUT</td><td>GPIO26</td><td>GPIO0</td><td>GPIO36</td><td>BAT</td><td>3V3</td><td>5V IN</td></tr>
 <tr><td>YUN HAT</td><td>GND</td><td>+5V</td><td>SCL</td><td>SDA</td><td>/</td><td>BAT</td><td>+3.3V</td><td>+5V IN</td></tr>
</table>

## 相关视频

**Demo** 

<video class="video_size" controls>
    <source src="https://m5stack.oss-cn-shenzhen.aliyuncs.com/video/Product_example_video/HAT/YUN-HAT.mp4" type="video/mp4" >
</video>


<script>

   var purchase_link = 'https://m5stack.com/collections/m5-core/products/basic-core-iot-development-kit';


   anchor_search(purchase_link);
   scrollFunc();

</script>