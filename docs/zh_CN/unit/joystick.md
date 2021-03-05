# JOYSTICK {docsify-ignore-all}

<el-tag effect="plain">SKU:U024</el-tag>

<div class="product_pic"><img src="assets/img/product_pics/unit/joystick/unit_joystick_01.webp"></div>

## 描述

**JOYSTICK**, 是一款摇杆控制 Unit.内部集成 MEGA328 芯片，工作原理与一般的摇杆游戏手柄类似，X、Y轴分别对应着两个 10K 的电位器.当摇杆进行动作时，产生相应的模拟信号并向M5Core输入摇杆的偏移值. Z轴方向则为一个按钮应用.

内部电路中，摇杆 X 方向连接至 MEGA328 的 A0 管脚，Y 方向连接至 A1 管脚，Z 方向连接至 A2管脚.

<img src="assets/img/product_pics/unit/M5GO_Unit_joystick_02.webp" width="50%" height="50%">

该 Unit 通过PORT A接口与M5Core进行通信，I2C地址为0x52.

## 产品特性

- 开发平台: Arduino, UIFlow(Blockly, Python)
- 2x LEGO 兼容孔

## 包含

- 1x JOYSTICK Unit
- 1x HY2.0-4P线缆

## 应用

- 游戏控制器
- 机器人远程控制

## 规格参数

<table>
   <tr style="font-weight:bold">
      <td>规格</td>
      <td>参数</td>
   </tr>
   <tr>
      <td>通讯协议</td>
      <td>I2C：0x52</td>
   </tr>
   <tr>
      <td>X、Y轴范围</td>
      <td>10-250</td>
   </tr>
   <tr>
      <td>Z轴输出值</td>
      <td>0-1</td>
   </tr>
   <tr>
      <td>净重</td>
      <td>11g</td>
   </tr>
   <tr>
      <td>毛重</td>
      <td>27g</td>
   </tr>
   <tr>
      <td>产品尺寸</td>
      <td>48*24*32mm</td>
   </tr>
   <tr>
      <td>包装尺寸</td>
      <td>75*45*30mm</td>
   </tr>
</table>

## EasyLoader

>EasyLoader是一个简洁快速的程序烧录器，其内置了一个产品相关的案例程序，通过简单步骤将其烧录至主控，即可进行一系列的功能验证.**(程序烧录前，请根据设备类型安装相应驱动程序. M5Core型主机[请点击此处查看CP210X驱动安装教程](zh_CN/arduino/arduino_development?id=安装串口驱动)，M5StickC/V/T/ATOM系列可免驱动使用)**

<div class="easyloader-box">
    <div style="background-color:white;">
        <div><img src="https://m5stack.oss-cn-shenzhen.aliyuncs.com/image/easyloader_intro.webp"></div>
        <div class="easyloader-btn">
            <a href="https://m5stack.oss-cn-shenzhen.aliyuncs.com/EasyLoader/Windows/UNIT/For%20M5Core/EasyLoader_Joystick_UNIT_With_M5Core.exe">Windows</a>
            <a href="https://m5stack.oss-cn-shenzhen.aliyuncs.com/EasyLoader/MacOS/UNIT/EasyLoader_Joystick_UNIT_With_M5Core.dmg">MacOS</a>
            <!-- <a>Linux</a>
            <a>MacOS</a> -->
        </div>
    </div>
    <div>
        <video id="example_video" controls>
            <source src="https://m5stack.oss-cn-shenzhen.aliyuncs.com/video/Product_example_video/Unit/Joystick_UNIT.mp4" type="video/mp4">
        </video>
        <div class="easyloader-mask">
        <a>
            <svg id="play-btn" t="1583228776634" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="4152" width="75" height="75"><path d="M512 0C229.216 0 0 229.216 0 512s229.216 512 512 512 512-229.216 512-512S794.784 0 512 0z m0 928C282.24 928 96 741.76 96 512S282.24 96 512 96s416 186.24 416 416-186.24 416-416 416zM384 288l384 224-384 224z" p-id="4153" fill="#007aff"></path></svg></a>
            <p>案例描述:</p>
            <p>显示摇杆XY数据及按钮状态.</p>
        </div>
    </div>
</div>

### 管脚映射

<table>
 <tr><td>M5Core(PORT A)</td><td>GPIO22</td><td>GPIO21</td><td>5V</td><td>GND</td></tr>
 <tr><td>JOYSTICK Unit</td><td>SCL</td><td>SDA</td><td>5V</td><td>GND</td></tr>
</table>


## 通讯协议

- 协议类型I2C
- I2C Address: **0x52**                                       

```clike
/*--------------------------------------------------------------------------------------------------*/
| JOYSTICK REG       | 0x52
| ------------------------------------------------------------------------------------------------
| joystick_x_reg[0]        |  R |  JOYSTICK X VALUE
| joystick_x_reg[1]       |  R |  JOYSTICK Y VALUE
| joystick_btn_reg[2]         |  R |  JOYSTICK BTN STATUS
/*----------------------------------------------------------------------------------------------------
```

**Mega328 ISP**下载接口Pin脚定义

<img src="assets\img\product_pics\app\mega328_isp.webp" width="30%" height="30%">

## 原理图

<img src="assets/img/product_pics/unit/joystick_sch.webp">

## 案例程序

### 1. Arduino

- [请点击此处获取Arduino示例程序](https://github.com/m5stack/M5Stack/tree/master/examples/Unit/JOYSTICK)

<img src="assets/img/product_pics/unit/unit_example/JOYSTICK/example_unit_joystick_04.webp">

### 2. UIFlow

- [请点击此处获取UIFlow示例](https://github.com/m5stack/M5-ProductExampleCodes/tree/master/Unit/JOYSTICK/UIFlow)

<img src="assets/img/product_pics/unit/unit_example/JOYSTICK/example_unit_joystick_03.webp">

<script>

   var purchase_link = 'https://m5stack.com/collections/m5-unit/products/joystick-unit';


   anchor_search(purchase_link);
   scrollFunc();

</script>