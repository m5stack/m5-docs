# 8Servos HAT {docsify-ignore-all}

<img src="assets\img\product_pics\hat\8servos_hat\8servos_01.jpg" width="30%" height="30%"> <img src="assets\img\product_pics\hat\8servos_hat\8servos_02.jpg" width="30%" height="30%">
<img src="assets\img\product_pics\hat\8servos_hat\8servos_04.jpg" width="30%" height="30%">

:memo:**[Description](#Description)**&nbsp;&nbsp;&nbsp;&nbsp;<img src="https://m5stack.oss-cn-shenzhen.aliyuncs.com/image/EasyLoader_M5StickC_logo_min.png">**[EasyLoader](#EasyLoader)**&nbsp;&nbsp;&nbsp;&nbsp;:octocat:**[Code](#Code)**&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;🛒**[Purchase](https://m5stack.com/products/m5stickc-8servos-hat)**



## Description

**8Servos HAT** is an 8-way servo control board compatible with M5StickC. The brains of the borad is the STM32F030F4 microcontroller which communicates with M5StickC through I2C. In order to ensure that multiple servos can work at the same time, the HAT is equipped with a separate 16340 battery base for an external and independent power supply. A control switch and an RGB LED are also integrated with the HAT. The SG90 servos are a perfect fit for this HAT.
<img src="assets\img\product_pics\hat\8servos_hat\8servos_03.jpg" width="30%" height="30%">

## Product Features


- 8-way servo control
- onboard RGB LED
- 16340 battery base
- I2C protocol for comunication and control

## Weight and Size

- Size：55mm * 25mm * 20mm


## Applications

- Multiple servo control
- Robotic Arm
- Biomimetic Robots
- Smart and cognitive toys

## Package Includes

- 1x 8Servos-HAT
- 1x 16340 battery

## EasyLoader

<img src="https://m5stack.oss-cn-shenzhen.aliyuncs.com/image/EasyLoader_M5StickC_logo.png" width="100px" style="margin-top:20px">

<a href="https://m5stack.oss-cn-shenzhen.aliyuncs.com/EasyLoader/HAT/8Servos/EasyLoader_8Servos-HAT.exe"><button type="button" class="btn btn-primary">Download EasyLoader</button></a>

>1. EasyLoader is a simple and fast program burner. Every product page in EasyLoader provides a product-related case program. This can be burned to the M5 device through simple steps, and a series of function verifications can be performed.


>2. After downloading the software, double-click to run the application, connect the M5 device to the computer through the data cable, select the port parameters, click **"Burn"** to burn the program (**For M5StickC, set the baud rate to 115200 or 750000**)


## Code

### 1. Arduino IDE

*To get complete code, please click [here](https://github.com/m5stack/M5-ProductExampleCodes/tree/master/Hat/8servos_hat/stickC/8servos_hat)*


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




## Video

<video class="video_size" controls>
    <source src="https://m5stack.oss-cn-shenzhen.aliyuncs.com/video/Product_example_video/HAT/8Servos_hat.mp4" type="video/mp4">
</video>

