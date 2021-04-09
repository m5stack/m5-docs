# C Back Driver

<el-tag effect="plain">SKU:A100</el-tag>

<div class="product_pic"><img src="assets\img\product_pics\hat\cback_driver\cback_driver_01.webp"><img src="assets\img\product_pics\hat\cback_driver\cback_driver_02.webp"><img src="assets\img\product_pics\hat\cback_driver\cback_driver_03.webp"></div>

## Description

**C Back Driver** is a steering gear drive board compatible with M5StickC. It adopts STM32F030F4P6 control scheme, uses I2C communication interface to communicate with M5StickC, and provides 4 sets of PWM steering gear drive interfaces (the drive power of the steering gear is directly connected to the M5StickC The internal battery can drive general specifications of the steering gear, such as: SG90, etc.). This module leads the I2C bus at the top of StickC and provides an additional GPIO interface through STM32 expansion. It can be used for general logic level and ADC analog signal input reading. With the LEGO compatible hole design on the back, users can easily integrate this driver board into the LEGO building block structure, which can be used to build controllable structures such as steering gear manipulators.

## Product Features

- 4x Servo driver
- Compatible with C/C Plus
- Interface expansion (GPIO, I2C)

## Application

- Servo controller
- Robot control

## Contains

- 1x C Back Driver
- 2× Hexagonal screws M2*5
- 1× Allen key


## Specifications

<table>
   <tr style="font-weight:bold">
      <td>Specifications</td>
      <td>Parameters</td>
   </tr>
   <tr>
      <td>Communication protocol</td>
      <td>I2C: 0x38</td>
   </tr>
   <tr>
      <td>Working current</td>
      <td>15mA</td>
   </tr>
   <tr>
      <td>Net weight</td>
      <td>9g</td>
   </tr>
   <tr>
      <td>Gross weight</td>
      <td>13.5g</td>
   </tr>
   <tr>
      <td>Product size</td>
      <td>23.7*49.2*21mm</td>
   </tr>
   <tr>
      <td>Package size</td>
      <td>42*40*30mm</td>
   </tr>
 </table>

<div class="product_pic"><img src="assets\img\product_pics\hat\cback_driver\cback_driver_04.webp"><img src="assets\img\product_pics\hat\cback_driver\cback_driver_05.webp"></div>

## Pin mapping

<table>
 <tr><td>M5StickC</td><td>GPIO0</td><td>GPIO26</td><td>3.3V</td><td>GND</td></tr>
 <tr><td>C Back Driver</td><td>SDA</td><td>SCL</td><td>3.3V</td><td>GND</td></tr>
</table>

## Schematic

<img src="assets\img\product_pics\hat\cback_driver\cback_driver_sch.webp">

## Example

?>This case uses C BACK DRIVER to realize 4-channel servo control and ADC reading. Please select the corresponding case program below according to the equipment you are using. 

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

## Protocol

- Protocol type I2C
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

## Video

>Use C BACK DRIVER to make a four-wheeled car

<video class="video_size" controls>
    <source src="https://m5stack.oss-cn-shenzhen.aliyuncs.com/video/Product_example_video/HAT/C_BACK-DRIVER.mp4" type="video/mp4">
</video>

<script>

   var purchase_link ='https://m5stack-store.myshopify.com/products/c-back-hat-with-servo-driver-stm32f0';

   anchor_search(purchase_link);
   scrollFunc();

</script>
