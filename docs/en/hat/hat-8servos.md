# 8Servos HAT

<div class="badge badge-pill badge-primary product_sku_tag">SKU:U076</div>

<div class="product_pic"><img src="assets\img\product_pics\hat\8servos_hat\8servos_01.jpg"><img src="assets\img\product_pics\hat\8servos_hat\8servos_02.jpg"></div>

## Description

**8Servos HAT** is an 8-way servo control board compatible with M5StickC. The brains of the borad is the STM32F030F4 microcontroller which communicates with M5StickC through I2C. In order to ensure that multiple servos can work at the same time, the HAT is equipped with a separate 16340 battery base for an external and independent power supply. A control switch and an RGB LED are also integrated with the HAT. The SG90 servos are a perfect fit for this HAT.

## Product Features

- 8-way servo control
- onboard RGB LED
- 16340 battery base
- I2C protocol for comunication and control (0x38)

## Applications

- Multiple servo control
- Robotic Arm
- Biomimetic Robots
- Smart and cognitive toys

## Package Includes

- 1x 8Servos-HAT
- 1x 16340 battery(750mAh)

## EasyLoader

>EasyLoader is a concise and fast program writer, which has a built-in case program related to the product. It can be burned to the main control by simple steps to perform a series of function verification. Please install the corresponding driver according to the device type. M5Core host [Please click here to view the CP210X driver installation tutorial](en/arduino/arduino_development), M5StickC/V/T/ATOM series can be used without driver)

<div class="easyloader-box">
    <div style="background-color:white;">
        <div><img src="https://m5stack.oss-cn-shenzhen.aliyuncs.com/image/easyloader_intro.jpg"></div>
        <div class="easyloader-btn">
            <a href="https://m5stack.oss-cn-shenzhen.aliyuncs.com/EasyLoader/Windows/HAT/EasyLoader_8Servos_HAT.exe">Windows</a>
            <!-- <a>Linux</a>
            <a>MacOS</a> -->
        </div>
    </div>
    <div>
        <video id="example_video" controls>
            <source src="https://m5stack.oss-cn-shenzhen.aliyuncs.com/video/Product_example_video/HAT/8Servos_hat.mp4" type="video/mp4">
        </video>
        <div class="easyloader-mask">
        <a>
            <svg id="play-btn" t="1583228776634" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="4152" width="75" height="75"><path d="M512 0C229.216 0 0 229.216 0 512s229.216 512 512 512 512-229.216 512-512S794.784 0 512 0z m0 928C282.24 928 96 741.76 96 512S282.24 96 512 96s416 186.24 416 416-186.24 416-416 416zM384 288l384 224-384 224z" p-id="4153" fill="#007aff"></path></svg></a>
            <p>Description:</p>
            <p>This test program will test whether the drive servo function of each port of the 8Servos HAT module is normal.</p>
        </div>
    </div>
</div>

## Example

### UIFlow

<img src="assets\img\product_pics\hat\8servos_hat\8servos.png" width="30%" height="30%">

### Arduino IDE

To get complete code, please click [here](https://github.com/m5stack/M5-ProductExampleCodes/tree/master/Hat/8servos-hat/Arduino)

## 8Servos HAT Instructions

>1.	Function Description

	(1)Eight-way servo control

	(2)Onboard sk6812 LED control

>2.	Communication Method

	I2C,bitrate 400HZ,address support self-addition

	address：0x38

    register      value	    description

    00H	        0X00	   CH1 angle out

    01H	        0X00	   CH2 angle out

    02H	        0X00	   CH3 angle out

    03H	        0X00	   CH4 angle out

    04H	        0X00	   CH5 angle out

    05H	        0X00	   CH6 angle out

    06H	        0X00	   CH7 angle out

    07H	        0X00	   CH8 angle out

3.	I2C address description

	00H(R/W)servo register address
  
	description：

	（1）Data can be read and written continuously

	（2）Each register value indicates the degree can be written to 0-180

>	10H(R/W)servo pulse width register

    address	value	description

    10H	    0X00	CH1_WIDTH[8:15]

    11H	    0X00	CH1_WIDTH[0:7]

    12H	    0X00	CH2_WIDTH[8:15]

    13H	    0X00	CH2_WIDTH[0:7]

    14H	    0X00	CH3_WIDTH[8:15]

    15H	    0X00	CH3_WIDTH[0:7]

    16H	    0X00	CH4_WIDTH[8:15]

    17H	    0X00	CH4_WIDTH[0:7]

    18H	    0X00	CH5_WIDTH[8:15]

    19H	    0X00	CH5_WIDTH[0:7]

    1AH	    0X00	CH6_WIDTH[8:15]

    1BH	    0X00	CH6_WIDTH[0:7]

    1CH	    0X00	CH7_WIDTH[8:15]

    1DH	    0X00	CH7_WIDTH[0:7]

    1EH	    0X00	CH8_WIDTH[8:15]

    1FH	    0X00	CH8_WIDTH[0:7]

    description：

	（1）Data can be read and written continuously

>   20H(R/W)LED_RGB register

    address	value	description

    20H	    0X00	 G[0:7]

    21H	    0X00	 R[0:7]

    22H	    0X00	 B[0:7]

    description:

	（1）Data can be read and written continuously

	（2）RGB888

<script>

   var purchase_link = 'https://m5stack.com/products/m5stickc-8servos-hat';

   anchor_search(purchase_link);
   scrollFunc();

</script>