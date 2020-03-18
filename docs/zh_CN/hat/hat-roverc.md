# RoverC

<div class="badge badge-pill badge-primary product_sku_tag">SKU:K036</div>

<div class="product_pic"><img src="assets\img\product_pics\hat\roverc_hat\roverc_hat_01.jpg"><img src="assets\img\product_pics\hat\roverc_hat\roverc_hat_02.jpg"></div>

## 描述

**RoverC**是一款兼容M5StickC的可编程麦克纳姆轮全向移动机器人底座，只需插入M5StickC即可启动.主控芯片为STM32F030F4，4路N20蜗杆减速电机由电机驱动器直驱，带动麦克纳姆轮进行全向移动.此外，提供2个兼容Grove的I2C连接座方便扩展其他模块.底座兼容乐高孔，可以在结构上对其进行拓展.底座的背面装有16340电池，并由独立开关控制，满足小车的动力和续航需求.

<img src="assets\img\product_pics\hat\roverc_hat\roverc_hat_05.jpg" width="40%" height="30%">

## 产品特性

- I2C通讯（0x38）
- 可编程机器人
- 远程控制
- 四路电机驱动器
- 全向移动
- 配备电池底座
- 运动灵活
- 尺寸：75mm * 75mm * 55mm
- 重量： 213g

## 使用说明
使用前请确保RoverC已经充满电，充电方式：将M5StickC插入RoverC，并连接USB线缆进行充电.
分别将两台M5StickC烧录JoyC与RoverC的EasyLoader固件，烧录后分别插入JoyC与RoverC，开机后RoverC会显示"M5AP+2字节mac地址"热点名称，同时JoyC会扫描到RoverC的mac地址名，长按3秒JoyC上的M5StickC的A键，开始扫描小车的热点，即可配对成功。成功配对后屏幕左上角会高亮显示链接图标，同时屏幕显示摇杆数值。左摇杆上下控制前后，左右控制平移，右摇杆左右控制转向。

电机控制：

<table>
<tr><td>电机序号</td><td>寄存器地址</td><td>参数值</td></tr>
<tr><td>01</td><td>0x00</td><td>-127~127</td></tr>
<tr><td>02</td><td>0x01</td><td>-127~127</td></tr>
<tr><td>03</td><td>0x02</td><td>-127~127</td></tr>
<tr><td>04</td><td>0x03</td><td>-127~127</td></tr>
</table>


### 管脚映射

<table>
 <tr><td>M5StickC</td><td>GPIO0</td><td>GPIO26</td><td>3.3V</td><td>GND</td></tr>
 <tr><td>RoverC HAT</td><td>SDA</td><td>SCL</td><td>3.3V</td><td>GND</td></tr>
 <tr><td>I2C①</td><td>SDA</td><td>SCL</td><td>3.3V</td><td>GND</td></tr>
 <tr><td>I2C②</td><td>SDA</td><td>SCL</td><td>3.3V</td><td>GND</td></tr>
</table>

<img src="assets\img\product_pics\hat\roverc_hat\roverC_user1.jpg" width="30%" height="30%"><img src="assets\img\product_pics\hat\roverc_hat\roverC_user2.jpg" width="30%" height="30%"><img src="assets\img\product_pics\hat\roverc_hat\roverC_user3.jpg" width="30%" height="30%">

<video class="video_size" controls>
    <source src="https://m5stack.oss-cn-shenzhen.aliyuncs.com/video/Product_example_video/HAT/RoverC_USER.MP4" type="video/mp4">
</video>

## 应用

- 小型移动式机器人
- 远程遥控
- 智能玩具

## 包含

- 1x RoverC底座（含750mAh电池）

## EasyLoader

<img src="https://m5stack.oss-cn-shenzhen.aliyuncs.com/image/EasyLoader_M5StickC_logo.png" width="100px" style="margin-top:20px">

<a href="https://m5stack.oss-cn-shenzhen.aliyuncs.com/EasyLoader/HAT/RoverC/EasyLoader_RoverC.exe"><button type="button" class="btn btn-primary">点击下载EasyLoader</button></a>

>1.EasyLoader是一个简洁快速的程序烧录器，每一个产品页面里的EasyLoader都提供了一个与产品相关的案例程序，通过简单步骤将其烧录至主控，能够进行一系列的功能验证.**(目前EasyLoader仅适用于Windows操作系统)**

>2.下载软件后，双击运行应用程序，将M5设备通过数据线连接至电脑,选择端口参数，点击 **"Burn"** 即可开始烧录.(**为M5StickC烧录时，请将波特率设置在750000或115200**)

## 案例程序

- **UIFlow**

<img src="assets\img\product_pics\hat\roverc_hat\roverC.png" width="40%" height="30%">

- **Arduino**

配合JoyC HAT使用 [点击此处](https://github.com/m5stack/M5-ProductExampleCodes/tree/master/Hat/RoverC)，获取完整程序.

单独使用 [点击此处](https://github.com/m5stack/M5-ProductExampleCodes/tree/master/Application/RoverC_Arduino_Alone)，获取完整程序.

## 相关视频

<video class="video_size" controls>
    <source src="https://m5stack.oss-cn-shenzhen.aliyuncs.com/video/Product_example_video/HAT/RoverC.mp4" type="video/mp4">
</video>

<script>

   var purchase_link = 'https://m5stack.com/collections/all/products/rovercw-o-m5stickc';


   anchor_search(purchase_link);
   scrollFunc();

</script>