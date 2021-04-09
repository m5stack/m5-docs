# C Back Driver

<el-tag effect="plain">SKU:A100</el-tag>

<div class="product_pic"><img src="assets\img\product_pics\hat\cback_driver\cback_driver_01.webp"><img src="assets\img\product_pics\hat\cback_driver\cback_driver_02.webp"><img src="assets\img\product_pics\hat\cback_driver\cback_driver_03.webp"></div>

## 描述

**C Back Driver**是一款兼容M5StickC的舵机驱动板，采用STM32F030F4P6控制方案，采用I2C通信接口与M5StickC进行通信, 提供4组PWM舵机驱动接口(舵机的驱动电源直连M5StickC的内部的电池，能够驱动一般规格的舵机,如:SG90等)。该模块对StickC顶部的I2C总线进行了引出，并通过STM32拓展额外提供一组GPIO接口。能够用于一般逻辑电平与ADC模拟信号输入读取。背部LEGO兼容孔设计，用户能够非常方便的将这个驱动板集成到LEGO积木结构中，可用于构建如舵机机械手等可控结构。

## 产品特性

- 4x Servo驱动
- 兼容C/C Plus
- 接口拓展(GPIO, I2C)

## 应用

- 舵机控制器
- 机器人控制

## 包含

- 1x C Back Driver
- 2× 六角螺丝M2*5
- 1× 内六角扳手


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
      <td>工作电流</td>
      <td>15mA</td>
   </tr>
   <tr>
      <td>净重</td>
      <td>9g</td>
   </tr>
   <tr>
      <td>毛重</td>
      <td>13.5g</td>
   </tr>
   <tr>
      <td>产品尺寸</td>
      <td>23.7*49.2*21mm</td>
   </tr>
   <tr>
      <td>包装尺寸</td>
      <td>42*40*30mm</td>
   </tr>
 </table>

<div class="product_pic"><img src="assets\img\product_pics\hat\cback_driver\cback_driver_04.webp"><img src="assets\img\product_pics\hat\cback_driver\cback_driver_05.webp"></div>

## 管脚映射

<table>
 <tr><td>M5StickC</td><td>GPIO0</td><td>GPIO26</td><td>3.3V</td><td>GND</td></tr>
 <tr><td>C Back Driver</td><td>SDA</td><td>SCL</td><td>3.3V</td><td>GND</td></tr>
</table>

## 原理图

<img src="assets\img\product_pics\hat\cback_driver\cback_driver_sch.webp">

## 案例程序

?>该案例使用C BACK DRIVER，实现4通道舵机控制, 与ADC的读取。 请据你所使用的设备选择下方对应的案例程序。 

<el-card class="box-card" style="margin-bottom:20px">
   <div slot="header" class="clearfix">
   <span style="font-size: 22px; font-weight: bold;">Arduino</span>
   <i class="el-icon-s-management" style="float: right;"></i>
   </div>
   <div class="box-card-item">
   <a href='https://github.com/m5stack/M5StickC-Plus/tree/master/examples/Hat/C_BACK_DRIVER'><el-tag>StickC Plus</el-tag></a>
   </div>
   <div class="box-card-item">
   <a href='https://github.com/m5stack/M5StickC/tree/master/examples/Hat/CBACK_DRIVER'><el-tag>StickC</el-tag></a>
   </div>
</el-card>

## 通讯协议

- 协议类型I2C
- I2C Address: **0x38**                         

```clike
/*------------------------------------------------ -------------------------------------------------- */
| SERVO_ANGLE_REG | 0x00-0x03
| ------------------------------------------------- -----------------------------------------------
| servo_1_reg[0] 0x00 | R/W | SERVO1 Angle value(0~180)
| servo_2_reg[1] 0x01 | R/W | SERVO2 Angle value(0~180)
| servo_3_reg[2] 0x02 | R/W | SERVO3 Angle value(0~180)
| servo_4_reg[3] 0x03 | R/W | SERVO4 Angle value(0~180)
/*------------------------------------------------ -------------------------------------------------- -

/*------------------------------------------------ -------------------------------------------------- */
| SERVO_PULSE_REG | 0x10-0x17
| ------------------------------------------------- -----------------------------------------------
| servo_1_reg[0:1] 0x10-0x11 | R/W | SERVO1 PULSE value(500~2500)
| servo_2_reg[2:3] 0x12-0x13 | R/W | SERVO2 PULSE value(500~2500)
| servo_3_reg[4:5] 0x14-0x15 | R/W | SERVO3 PULSE value(500~2500)
| servo_4_reg[6:7] 0x16-0x17 | R/W | SERVO4 PULSE value(500~2500)
/*------------------------------------------------ -------------------------------------------------- -

/*------------------------------------------------ -------------------------------------------------- */
| PPORTB_ADC_REG | 0x20-0x21
| ------------------------------------------------- -----------------------------------------------
| portb_adc_reg[0:1] 0x20-0x21 | R | PPORTB ADC value(0~4095)
/*------------------------------------------------ -------------------------------------------------- -

/*------------------------------------------------ -------------------------------------------------- */
| PPORTB_OUTPUT_REG | 0x30
| ------------------------------------------------- -----------------------------------------------
| portb_output_reg[0] 0x30 | R | PPORTB Output Digital value(0/1)
/*------------------------------------------------ -------------------------------------------------- -

/*------------------------------------------------ -------------------------------------------------- */
| PPORTB_INPUT_REG | 0x31
| ------------------------------------------------- -----------------------------------------------
| portb_input_reg[0] 0x31 | R | PPORTB Input Digital value(0/1)
/*------------------------------------------------ -------------------------------------------------- -

```

## 相关视频

>使用C BACK DRIVER制作四轮小车

<video class="video_size" controls>
    <source src="https://m5stack.oss-cn-shenzhen.aliyuncs.com/video/Product_example_video/HAT/C_BACK-DRIVER.mp4" type="video/mp4">
</video>


<script>

   var purchase_link = 'https://m5stack-store.myshopify.com/products/c-back-hat-with-servo-driver-stm32f0';

   anchor_search(purchase_link);
   scrollFunc();

</script>