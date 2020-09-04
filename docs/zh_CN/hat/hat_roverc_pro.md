# RoverC-Pro

<el-tag effect="plain">SKU:K036-B</el-tag>

<div class="product_pic"><img src="assets/img/product_pics/hat/roverc_pro_hat/roverc_pro.webp">

## 描述

**RoverC-Pro** 是一款可编程麦克纳姆轮全向移动机器人底座。与M5StickC/M5StickC PLUS兼容，只需插入M5StickC/M5StickC PLUS即可使用。主控芯片为STM32F030C6T6，由四个N20蜗杆减速电机组成，由电机驱动器L9110S驱动。PRO版本提供了一个由舵机控制的夹持机构，用于夹持物体。底座上提供了两个舵机接口。此外，还有两个Grove兼容的I2C接口，以便于扩展其他模块。底座与乐高孔兼容，在结构上可以扩展。背面有一个16340（700毫安时）的可更换充电电池。底座电池可通过M5StickC/M5StickC Plus进行充电。在底座尾部有一个电源开关和指示灯。

<img src="assets\img\product_pics\hat\roverc_hat\roverc_hat_05.webp" width="40%" height="30%">

## 产品特性

- I2C地址0x38
- 可遥控
- 带有夹持机构
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
        <th>/</th>
        <th>RoverC PRO</th>
        <th>RoverC</th>
    </tr>
    </thead>
    <tbody>
        <tr>
            <td>舵机爪手</td>
            <td>●</td>
            <td>-</td>
        </tr>
        <tr>
            <td>2路舵机接口</td>
            <td>●</td>
            <td>-</td>
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


MotorControl：

<table>
<tr><td>电机编号</td><td>寄存器地址</td><td>参数范围</td></tr>
<tr><td>01</td><td>0x00</td><td>-127~127</td></tr>
<tr><td>02</td><td>0x01</td><td>-127~127</td></tr>
<tr><td>03</td><td>0x02</td><td>-127~127</td></tr>
<tr><td>04</td><td>0x03</td><td>-127~127</td></tr>
</table>

<table>
<tr><td>舵机编号</td><td>角度(寄存器地址)</td><td>参数范围</td><td>脉冲(寄存器地址)</td><td>参数范围</td></tr>
<tr><td>01</td><td>0x10</td><td>0~180°</td><td>0x20</td><td>500~2500ms</td></tr>
<tr><td>02</td><td>0x11</td><td>0~180°</td><td>0x21</td><td>500~2500ms</td></tr>
</table>

## 案例程序

### 1. Arduino IDE

配合摇杆使用(无夹持) [点击此处](https://github.com/m5stack/M5-ProductExampleCodes/tree/master/Hat/RoverC)
使用前，请确保RoverC充满电。充电方式：将M5StickC/M5StickC Plus插入RoverC，连接USB线充电。分别用两个M5StickC/M5StickC PLUS烧录JoyC和RoverC的EasyLoader固件。然后分别插入JoyC和RoverC。开机后，RoverC将显示MAC地址名称和电池电量。同时，JoyC将扫描RoverC的MAC地址。长按Joyc上M5StickC的A键，两者将配对。左摇杆控制前进和后退运动，左右控制平移，右摇杆控制左右转向。

单独使用参考(含夹持) [点击此处](https://github.com/m5stack/M5-ProductExampleCodes/tree/master/Application/RoverC_PRO_Arduino_Alone)

### 引脚映射

<table>
 <tr><td>M5StickC</td><td>GPIO26</td><td>GPIO0</td><td>5V</td><td>GND</td></tr>
 <tr><td>RoverC HAT</td><td>SCL</td><td>SDA</td><td>5V</td><td>GND</td></tr>
 <tr><td>I2C①</td><td>SCL</td><td>SDA</td><td>5V</td><td>GND</td></tr>
 <tr><td>I2C②</td><td>SCL</td><td>SDA</td><td>5V</td><td>GND</td></tr>
</table>

<script>

   var purchase_link = 'https://m5stack.com/collections/all/products/rovercw-o-m5stickc';

   anchor_search(purchase_link);
   scrollFunc();

</script>
