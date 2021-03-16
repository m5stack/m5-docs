# RoverC-Pro

<el-tag effect="plain">SKU:K036-B</el-tag>

<div class="product_pic"><img src="assets/img/product_pics/hat/roverc_pro_hat/roverc_pro.webp"></div>

## 描述

**RoverC-Pro** 是一款可编程麦克纳姆轮全向移动机器人底座。与M5StickC/M5StickC PLUS兼容，只需插入M5StickC/M5StickC PLUS即可使用。主控芯片为STM32F030C6T6，由四个N20蜗杆减速电机组成，由电机驱动器L9110S驱动。PRO版本提供了一个由舵机控制的夹持机构，用于夹持物体。底座上提供了两个舵机接口。此外，还有两个Grove兼容的I2C接口，以便于扩展其他模块。底座与乐高孔兼容，在结构上可以扩展。背面有一个16340（700毫安时）的可更换充电电池。底座电池可通过M5StickC/M5StickC Plus进行充电。在底座尾部有一个电源开关和指示灯。

<img src="assets\img\product_pics\hat\roverc_hat\roverc_hat_05.webp" width="40%" height="30%">

## 产品特性

- I2C地址0x38
- 可遥控
- 带有夹持结构
- 可编程
- 全方位灵活移动
- 四通道电机驱动器
- 兼容乐高
- 额外的Grove接口用于扩展
- 配备16340（700毫安时)


## 应用

- 迷你侦察车
- 小型移动机器人
- 智能玩具

## 包含

- 1x RoverC 底座(内含 16340(700mAh) 电池)
- 1x 夹持机构

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
      <td>187g</td>
   </tr>
   <tr>
      <td>毛重</td>
      <td>245g</td>
   </tr>
   <tr>
      <td>产品尺寸</td>
      <td>120 x 75 x 58mm</td>
   </tr>
   <tr>
      <td>包装尺寸</td>
      <td>115 x 85 x 65mm</td>
   </tr>
 </table>


 ## RoverC PRO与RoverC对比

<table class="table-1">
    <thead>
    <tr>
        <th></th>
        <th>RoverC PRO</th>
        <th>RoverC</th>
    </tr>
    </thead>
    <tbody>
        <tr>
            <td>舵机爪手</td>
            <td>x1</td>
            <td>/</td>
        </tr>
        <tr>
            <td>舵机拓展接口</td>
            <td>x2</td>
            <td>/</td>
        </tr>
        <tr>
            <td>电池</td>
            <td>可拆卸</td>
            <td>不可拆卸</td>
        </tr>
     </tbody>
</table>


## EasyLoader

>EasyLoader是一个简洁快速的程序烧录器，其内置了一个产品相关的案例程序，通过简单步骤将其烧录至主控，即可进行一系列的功能验证.

<div class="easyloader-box">
    <div style="background-color:white;">
        <div><img src="https://m5stack.oss-cn-shenzhen.aliyuncs.com/image/easyloader_intro.webp"></div>
        <div class="easyloader-btn">
            <a href="https://m5stack.oss-cn-shenzhen.aliyuncs.com/EasyLoader/Windows/HAT/EasyLoader_RoverC_PRO_Alone.exe">Windows</a>
            <a href="https://m5stack.oss-cn-shenzhen.aliyuncs.com/EasyLoader/MacOS/HAT/EasyLoader_ROVERC_PRO_Alone.dmg">MacOS</a>
        </div>
    </div>
    <div>
        <video id="example_video" controls>
            <source src="https://m5stack.oss-cn-shenzhen.aliyuncs.com/video/Product_example_video/HAT/RoverC.Pro.mp4" type="video/mp4">
        </video>
        <div class="easyloader-mask">
        <a>
            <svg id="play-btn" t="1583228776634" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="4152" width="75" height="75"><path d="M512 0C229.216 0 0 229.216 0 512s229.216 512 512 512 512-229.216 512-512S794.784 0 512 0z m0 928C282.24 928 96 741.76 96 512S282.24 96 512 96s416 186.24 416 416-186.24 416-416 416zM384 288l384 224-384 224z" p-id="4153" fill="#007aff"></path></svg></a>
            <p>案例描述:</p>
            <p>按下A键夹持物体，前后左右移动后夹子释放</p>
        </div>
    </div>
</div>

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

/*--------------------------------------------------------------------------------------------------*/
| ROVERC_SERVO_ANGLE_REG       | 0x10-0x11
| ------------------------------------------------------------------------------------------------
| servo_1_reg[0]  |  R/W  |  SERVO1 Angle value(0-180)
| servo_2_reg[1]  |  R/W  |  SERVO2 Angle value(0-180)
/*----------------------------------------------------------------------------------------------------

/*--------------------------------------------------------------------------------------------------*/
| ROVERC_SERVO_PULSE_REG       | 0x20-0x23
| ------------------------------------------------------------------------------------------------
| servo_1_pulse_reg[0]  |  R/W  |  SERVO1 PULSE H value
| servo_1_pulse_reg[1]  |  R/W  |  SERVO1 PULSE L value
| servo_2_pulse_reg[2]  |  R/W  |  SERVO2 PULSE H value
| servo_2_pulse_reg[3]  |  R/W  |  SERVO2 PULSE L value      (pulse value:500-2500us)
/*----------------------------------------------------------------------------------------------------

```

### 2. UIFlow

<img src="assets\img\product_pics\hat\roverc_hat\roverC.webp" width="60%" height="60%">

### 引脚映射

<table>
 <tr><td>M5StickC</td><td>GPIO26</td><td>GPIO0</td><td>5V</td><td>GND</td></tr>
 <tr><td>RoverC HAT</td><td>SCL</td><td>SDA</td><td>5V</td><td>GND</td></tr>
 <tr><td>I2C①</td><td>SCL</td><td>SDA</td><td>5V</td><td>GND</td></tr>
 <tr><td>I2C②</td><td>SCL</td><td>SDA</td><td>5V</td><td>GND</td></tr>
</table>

<script>

   var purchase_link = 'https://m5stack.com/collections/m5-unit/products/roverc-prow-o-m5stickc';

   anchor_search(purchase_link);
   scrollFunc();

</script>
