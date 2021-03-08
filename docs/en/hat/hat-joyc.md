# JoyC

<el-tag effect="plain">SKU:U079</el-tag>

<div class="product_pic"><img src="assets\img\product_pics\hat\JoyC_hat\JoyC_01.webp"><img src="assets\img\product_pics\hat\JoyC_hat\JoyC_02.webp"></div>

## Description

**JoyC** is a rocker module designed for the M5StickC.It supports two-hand operation. Embedded STM32F030F4 main control chip, using I2C communication protocol and host M5StickC for data transmission. The range of the joystick is 0~200, there are 12 RGB LEDs under the left and right joysticks, and the bottom of the joystick is equipped with a 16340 battery base for continuous battery life.

## Product Features

- STM32F030F4 inside 
- communication protocol: I2C (address: 0x38)
- support omni-directional movement/button press


## Include

- 1x JoyC
- 1x 16340 700mAh Battery

## Applications

- Game Handle
- Wireless Joystick Device

## Specification

<table>
   <tr style="font-weight:bold">
      <td>Resources</td>
      <td>Parameter</td>
   </tr>
   <tr>
      <td>Communication protocol</td>
      <td>I2C：0x38</td>
   </tr>
   <tr>
      <td>Net weight</td>
      <td>81g</td>
   </tr>
   <tr>
      <td>Gross weight</td>
      <td>117g</td>
   </tr>
   <tr>
      <td>Product Size</td>
      <td>200*55*50mm</td>
   </tr>
   <tr>
      <td>Package Size</td>
      <td>119*89*65mm</td>
   </tr>
 </table>


## EasyLoader

<img src="https://m5stack.oss-cn-shenzhen.aliyuncs.com/image/EasyLoader_M5StickC_logo.webp" width="100px" style="margin-top:20px">

<a href="https://m5stack.oss-cn-shenzhen.aliyuncs.com/EasyLoader/Windows/HAT/EasyLoader_JoyC_Test.exe"><el-button type="primary">Use alone</el-button></a>

<a href="https://m5stack.oss-cn-shenzhen.aliyuncs.com/EasyLoader/Windows/HAT/RoverC_Remote/RoverC%26JoyC_Remote.zip"><el-button type="primary">Use RoverC with JoyC</el-button></a>

>1.EasyLoader is a simple and fast program burner. Every product page in EasyLoader provides a product-related case program. It can be burned to the master through simple steps, and a series of function verification can be performed.

>2. After downloading the software, double-click to run the application, connect the M5 device to the computer through the data cable, select the port parameters,click **"Burn"** to start burning. (**For M5StickC burning, please Set the baud rate to 750000 or 115200**)


## Protocol

- Protocol type I2C
- I2C Address: **0x38**                                   

```clike
/*--------------------------------------------------------------------------------------------------*/
| JOYC_COLOR_REG       | 0x20
| ------------------------------------------------------------------------------------------------
| rgb_r_reg[0]  |  R/W  |  RED value
| rgb_g_reg[1]  |  R/W  |  Green value
| rgb_b_reg[2]  |  R/W  |  Blue value
/*----------------------------------------------------------------------------------------------------

/*--------------------------------------------------------------------------------------------------*/
| JOYC_LEFT_X_REG       | 0x60
| ------------------------------------------------------------------------------------------------
| left_x_reg[0]  |  R  |  LEFT X VALUE
/*----------------------------------------------------------------------------------------------------

/*--------------------------------------------------------------------------------------------------*/
| JOYC_LEFT_Y_REG       | 0x61
| ------------------------------------------------------------------------------------------------
| left_y_reg[0]  |  R |  LEFT Y VALUE
/*----------------------------------------------------------------------------------------------------

/*--------------------------------------------------------------------------------------------------*/
| JOYC_RIGHT_X_REG       | 0x62
| ------------------------------------------------------------------------------------------------
| right_x_reg[0]  |  R |  RIGHT X VALUE
/*----------------------------------------------------------------------------------------------------

/*--------------------------------------------------------------------------------------------------*/
| JOYC_RIGHT_Y_REG       | 0x63
| ------------------------------------------------------------------------------------------------
| right_y_reg[0]  |  R  |  RIGHT Y VALUE
/*----------------------------------------------------------------------------------------------------

/*--------------------------------------------------------------------------------------------------*/
| JOYC_PRESS_REG       | 0x64
| ------------------------------------------------------------------------------------------------
| press_reg[0]  |  R  |  LEFT AND RIGHT PRESS VALUE
                           | 7 | 6 | 5 | 4 | 3 | 2 | 1 | 0 |
                           | R | R | R | R | R | R | LEFT | RIGHT |
                           | LEFT: 
                                   Pressed: 1
                                   Released: 0
                           | RIGHT: 
                                   Pressed: 1
                                   Released: 0
/*----------------------------------------------------------------------------------------------------

/*--------------------------------------------------------------------------------------------------*/
| JOYC_LEFT_ANGLE_REG       | 0x70
| ------------------------------------------------------------------------------------------------
| left_angle_reg[0]  |  R |  LEFT ANGLE VALUE
/*----------------------------------------------------------------------------------------------------

/*--------------------------------------------------------------------------------------------------*/
| JOYC_RIGHT_ANGLE_REG       | 0x72
| ------------------------------------------------------------------------------------------------
| right_angle_reg[0]  |  R |  RIGHT ANGLE VALUE
/*----------------------------------------------------------------------------------------------------

/*--------------------------------------------------------------------------------------------------*/
| JOYC_LEFT_DISTANCE_REG       | 0x74
| ------------------------------------------------------------------------------------------------
| left_distance_reg[0]  |  R |  LEFT DISTANCE VALUE
/*----------------------------------------------------------------------------------------------------

/*--------------------------------------------------------------------------------------------------*/
| JOYC_RIGHT_DISTANCE_REG       | 0x76
| ------------------------------------------------------------------------------------------------
| right_distance_reg[0]  |  R  |  RIGHT DISTANCE VALUE
/*----------------------------------------------------------------------------------------------------

```

## Example

### 1.Arduino

Use with RoverC HAT, please click [here](https://github.com/m5stack/M5-ProductExampleCodes/tree/master/Hat/JoyC/Arduino/JoyC)

Use alone [here](https://github.com/m5stack/M5StickC/blob/master/examples/Hat/JoyC/JoyC.ino)

### 2. UIFlow

- [Click here to download the UIFlow example](https://github.com/m5stack/M5-ProductExampleCodes/tree/master/Hat/JoyC/UIFlow)


<img src="assets\img\product_pics\hat\JoyC_hat\JoyC.webp" width="50%" height="50%">

<script>

   var purchase_link = 'https://m5stack.com/collections/m5-hat/products/joyc-w-o-m5stickc';

   anchor_search(purchase_link);
   scrollFunc();

</script>