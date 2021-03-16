# RoverC

<el-tag effect="plain">SKU:K036</el-tag>

<div class="product_pic"><img src="assets\img\product_pics\hat\roverc_hat\roverc_hat_01.webp"><img src="assets\img\product_pics\hat\roverc_hat\roverc_hat_02.webp"></div>

## 描述

**RoverC**是一款兼容M5StickC的可编程麦克纳姆轮全向移动机器人底座，只需插入M5StickC即可启动.主控芯片为STM32F030F4，4路N20蜗杆减速电机由电机驱动器直驱，带动麦克纳姆轮进行全向移动.此外，提供2个兼容Grove的I2C连接座方便扩展其他模块.底座兼容乐高孔，可以在结构上对其进行拓展.底座的背面装有18350(900mAh)电池，并由独立开关控制，满足小车的动力和续航需求.

<img src="assets\img\product_pics\hat\roverc_hat\roverc_hat_05.webp" width="40%" height="30%">

## 产品特性

- I2C通讯（0x38）
- 可编程机器人
- 远程控制
- 四路电机驱动器
- 全向移动
- 配备18350电池底座
- 运动灵活

## 包含

- 1x RoverC底座（内置18350电池900mAh)

## 应用

- 小型移动式机器人
- 远程遥控
- 智能玩具


## 规格参数

<table>
   <tr style="font-weight:bold">
      <td>规格</td>
      <td>参数</td>
   </tr>
   <tr>
      <td>通信协议</td>
      <td>I2C：0x38</td>
   </tr>
   <tr>
      <td>净重</td>
      <td>213g</td>
   </tr>
   <tr>
      <td>毛重</td>
      <td>217g</td>
   </tr>
   <tr>
      <td>产品尺寸</td>
      <td>75*75*55mm</td>
   </tr>
   <tr>
      <td>包装尺寸</td>
      <td>115*85*65mm</td>
   </tr>
 </table>

## EasyLoader

<img src="https://m5stack.oss-cn-shenzhen.aliyuncs.com/image/EasyLoader_M5StickC_logo.webp" width="100px" style="margin-top:20px">

<a href="https://m5stack.oss-cn-shenzhen.aliyuncs.com/EasyLoader/HAT/RoverC/EasyLoader_RoverC.exe"><el-button type="primary">RoverC测试</el-button></a>

<a href="https://m5stack.oss-cn-shenzhen.aliyuncs.com/EasyLoader/Windows/HAT/RoverC_Remote/RoverC%26JoyC_Remote.zip"><el-button type="primary">RoverC搭配JoyC使用(for M5StickC)</el-button></a>

>1.EasyLoader是一个简洁快速的程序烧录器，每一个产品页面里的EasyLoader都提供了一个与产品相关的案例程序，通过简单步骤将其烧录至主控，能够进行一系列的功能验证.

>2.下载软件后，双击运行应用程序，将M5设备通过数据线连接至电脑,选择端口参数，点击 **"Burn"** 即可开始烧录.(**为M5StickC烧录时，请将波特率设置在750000或115200**)

## 案例程序

?>1: 该案例使用RoverC和JoyC，通过UDP通信实现无线控制。 请据你所使用的设备选择下方对应的案例程序。

<el-card class="box-card" style="margin-bottom:20px">
   <div slot="header" class="clearfix">
   <span style="font-size: 22px; font-weight: bold;">Arduino</span>
   <i class="el-icon-s-management" style="float: right;"></i>
   </div>
   <div class="box-card-item">
   <a href='https://github.com/m5stack/M5StickC/tree/master/examples/KIT/JoyC_%26_RoverC'><el-tag>M5StickC</el-tag></a>
   </div>
   <div class="box-card-item">
   <a href='https://github.com/m5stack/M5StickC-Plus/tree/master/examples/KIT/JoyC_%26_RoverC'><el-tag>M5StickC Plus</el-tag></a>
   </div>
</el-card>

- 注意: 使用前请确保RoverC已经充满电，充电方式：将M5StickC插入RoverC，并连接USB线缆进行充电.分别将两台M5StickC烧录JoyC与RoverC的EasyLoader固件，烧录后分别插入JoyC与RoverC，开机后RoverC会显示"M5AP+2字节mac地址"热点名称，同时JoyC会扫描到RoverC的mac地址名，长按3秒JoyC上的M5StickC的Home键，开始扫描小车的热点，即可配对成功。成功配对后屏幕左上角会高亮显示链接图标，同时屏幕显示摇杆数值。左摇杆上下控制前后，左右控制平移，右摇杆左右控制转向。

?>2: 该案例为RoverC单机控制程序，由主控直接控制。请据你所使用的设备选择下方对应的案例程序。

<el-card class="box-card" style="margin-bottom:20px">
   <div slot="header" class="clearfix">
   <span style="font-size: 22px; font-weight: bold;">Arduino</span>
   <i class="el-icon-s-management" style="float: right;"></i>
   </div>
   <div class="box-card-item">
   <a href='https://github.com/m5stack/M5StickC/tree/master/examples/Hat/RoverC'><el-tag>M5StickC</el-tag></a>
   </div>
   <div class="box-card-item">
   <a href='https://github.com/m5stack/M5StickC-Plus/blob/master/examples/Hat/RoverC_PRO/RoverC_PRO_Arduino_Alone/RoverC_PRO_Arduino_Alone.ino'><el-tag>M5StickC Plus</el-tag></a>
   </div>
</el-card>


## 通讯协议

- 协议类型I2C
- I2C Address: **0x38**                         

```clike
/*--------------------------------------------------------------------------------------------------*/
| ROVERC_MOTOR_REG       | 0x00-0x03
| ------------------------------------------------------------------------------------------------
| motor_1_reg[0]  |  R/W  |  Motor1 Speed value(-127~127)
| motor_2_reg[1]  |  R/W  |  Motor2 Speed value(-127~127)
| motor_3_reg[2]  |  R/W  |  Motor3 Speed value(-127~127)
| motor_4_reg[3]  |  R/W  |  Motor4 Speed value(-127~127)
/*----------------------------------------------------------------------------------------------------

```

### 2. UIFlow

- [请点击此处获取UIFlow示例](https://github.com/m5stack/M5-ProductExampleCodes/tree/master/Hat/RoverC/UIFlow)

<img src="assets\img\product_pics\hat\roverc_hat\roverC.webp" width="60%" height="60%">


## 版本变更

<table>
      <thead>
         <tr>
            <th>上市日期</th>
            <th>产品变动</th>
            <th>备注：</th>
         </tr>
      </thead>
      <tbody>   
         <tr>
            <td>2019.11</td>
            <td>首次发售</td>
            <td>/</td>
         </tr>
         <tr>
            <td>2020.5</td>
            <td>电池型号16340(750mAh)变更为18350(900mAh)</td>
            <td>/</td>
         </tr>
    </tbody>
</table>

### 管脚映射

<table>
 <tr><td>M5StickC</td><td>GPIO26</td><td>GPIO0</td><td>5V</td><td>GND</td></tr>
 <tr><td>RoverC HAT</td><td>SCL</td><td>SDA</td><td>5V</td><td>GND</td></tr>
 <tr><td>I2C①</td><td>SCL</td><td>SDA</td><td>5V</td><td>GND</td></tr>
 <tr><td>I2C②</td><td>SCL</td><td>SDA</td><td>5V</td><td>GND</td></tr>
</table>

<img src="assets\img\product_pics\hat\roverc_hat\roverC_user1.webp" width="30%" height="30%"><img src="assets\img\product_pics\hat\roverc_hat\roverC_user2.webp" width="30%" height="30%"><img src="assets\img\product_pics\hat\roverc_hat\roverC_user3.webp" width="30%" height="30%">

## 相关视频

<video class="video_size" controls>
    <source src="https://m5stack.oss-cn-shenzhen.aliyuncs.com/video/Product_example_video/HAT/RoverC.mp4" type="video/mp4">
</video>

<script>

   var purchase_link = 'https://m5stack.com/collections/all/products/rovercw-o-m5stickc';


   anchor_search(purchase_link);
   scrollFunc();

</script>