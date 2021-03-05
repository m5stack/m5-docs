# BugC

<el-tag effect="plain">SKU:K033</el-tag>

<div class="product_pic"><img src="assets\img\product_pics\hat\bugc_hat\bugc_hat_01.webp"><img src="assets\img\product_pics\hat\bugc_hat\bugc_hat_02.webp"></div>

## Description

**BugC** is a programmable robot base compatible with the M5StickC. This has four DC motors, motor driver, two RGB LEDs, battery holder and a switch.
The Bugc base needs to be used in conjunction with the M5StickC controller. The base comes with an STM32F030F4 micro controller which controls all the motors and LEDs and this is controlled through I2C protocol(0x38) by the M5StickC which sits on top of the base.

## Product Features

- remote control
- Programmable 
- Four-way motor driver
- 4xGeared motors
- 2xRGB LEDs
- Simple and compact design
- Equipped with a battery holder
- Flexible movement in all directions
- Motor Specification：
   - Rated voltage: 3.7V DC
   - Rated speed: 15000-2000rpm
   - Rated current: 50mA
   - Stall current: 70mA
   - Insulation resistance: 10MΩ

##  Include

- 1x BugC base
- 1x 16340 Battery(750mAh)

## Applications

- RC motor
- Robot control
- Smart and cognitive toys


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
      <td>34g</td>
   </tr>
   <tr>
      <td>Gross weight</td>
      <td>46g</td>
   </tr>
   <tr>
      <td>Product Size</td>
      <td>55*40*25mm</td>
   </tr>
   <tr>
      <td>Package Size</td>
      <td>74*46*9mm</td>
   </tr>
 </table>

## EasyLoader

<img src="https://m5stack.oss-cn-shenzhen.aliyuncs.com/image/EasyLoader_M5StickC_logo.webp" width="100px" style="margin-top:20px">

<a href="https://m5stack.oss-cn-shenzhen.aliyuncs.com/EasyLoader/HAT/BugC/EasyLoader_BugC.exe"><el-button type="primary">download EasyLoader</el-button></a>

>EasyLoader is a simple and fast program burner. Every product page in EasyLoader provides a product-related case program. It can be burned to the M5 device through simple steps, and a series of function verification can be performed.

>2. After downloading the software, double-click to run the application, connect the M5 device to the computer through the data cable, select the port parameters, click **"Burn"** to burn the program (**For M5StickC, set the baud rate to 750000 or 115200**)

## PinMap

<table>
 <tr><td>M5StickC</td><td>GPIO0</td><td>GPIO26</td><td>3.3V</td><td>GND</td><td>BAT</td></tr>
 <tr><td>BugC</td><td>SDA</td><td>SCL</td><td>3.3V</td><td>GND</td><td>BAT</td></tr>
</table>

## Protocol

- Protocol type I2C
- I2C Address: **0x38**                                       

```clike
/*--------------------------------------------------------------------------------------------------*/
| MOTOR SPEED REG       | 0x00
| ------------------------------------------------------------------------------------------------
| FRONT_LEFT_reg[0]        |  R/W  |  FRONT_LEFT SPEED
| FRONT_RIGHT_reg[1]       |  R/W  |  FRONT_RIGHT SPEED
| REAR_LEFT_reg[2]         |  R/W  |  REAR_LEFT SPEED
| REAR_RIGHT_reg[3]        |  R/W  |  REAR_RIGHT SPEED
/*----------------------------------------------------------------------------------------------------

/*--------------------------------------------------------------------------------------------------*/
| RGB LED COLOR REG       | 0x10
| ------------------------------------------------------------------------------------------------
| left/right_reg[0]  |  R/W  | left/right control
                           | 7 | 6 | 5 | 4 | 3 | 2 | 1 | 0 |
                           | R | R | R | R | R | R | R | SELECT |
                           | -SELECT: 0 FRONT_LEFT RGB LED
                           |          1 FRONT_RIGHT RGB LED
| rgb_r_reg[1]  |  R/W  |  RED value
| rgb_g_reg[2]  |  R/W  |  Green value
| rgb_b_reg[3]  |  R/W  |  Blue value
/*----------------------------------------------------------------------------------------------------

```

## Example

### 1. Arduino

- [Click here to download the Arduino example](https://github.com/m5stack/M5-ProductExampleCodes/tree/master/Hat/BugC/bugC)

### 2. UIFlow

- [Click here to download the UIFlow example](https://github.com/m5stack/M5-ProductExampleCodes/tree/master/Hat/BugC/UIFlow)

<img src="assets\img\product_pics\hat\bugc_hat\bugc.webp" width="70%" height="70%">

<script>

   var purchase_link = 'https://m5stack.com/products/bugc-w-o-m5stickc';

   anchor_search(purchase_link);
   scrollFunc();

</script>