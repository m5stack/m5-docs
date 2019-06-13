# Module SERVO {docsify-ignore-all}

<img src="assets/img/product_pics/module/module_servo_01.png" width="30%" height="30%"> <img src="assets/img/product_pics/module/module_servo_02.png" width="30%" height="30%"> <img src="assets/img/product_pics/module/module_servo_03.png" width="30%" height="30%">

***

:clapper: **[Video Tutorial](#Video-Tutorial)**&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;:memo:**[Description](#Description)**&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;:octocat:**[Example](#Example)**&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;:electric_plug:**[Schematic](#Schematic)**&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;🛒**[Purchase](https://www.aliexpress.com/store/product/M5Stack-New-SERVO-Module-Board-12-Channels-Servo-Controller-with-MEGA328-Inside-Power-Adapter-6-24V/3226069_32951356502.html?spm=a2g1y.12024536.productList_5885011.pic_0)**&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;:clapper:**[Related Video](#Related-Video)**

## Description

**SERVO** is made to implement the bestest, easiest way to drive Servo motors. This M5 module will make quick work of your next Servo project!  It is able to drive mutiple Servo motors, up to 12 channals. We also added an DC input for power supplement. Through M-BUS the DC in can automatically power the M5 core at top.

Servo is powered by MEGA328 communicate via IIC(0x53).

## Product Features

-  12x servo ports
-  DC power input: 6-24V  5.5*2.1mm
-  DC Connector Type: XT60 (female)

## Include

-  1x M5Stack Servo Module
-  1x Common Male to XT60 Male DC convertor

## Applications

-  Humanoid robot
-  Bionic multi-joint robot
-  Triaxial Camera Cradle

## Related Link

- **[Offical Video](https://www.youtube.com/channel/UCozgFVglWYQXbvTmGyS739w)**

- **[Forum](http://forum.m5stack.com/)**

- **[The Firmware of inside MEGA328](https://github.com/m5stack/M5-ProductExampleCodes/tree/master/Module/SERVO/firmware_328p)**

## Example

### Mini Burner

>1.Mini Burner is a simple and fast program burner, and each product page has a product-related case program for Mini Burner.
[Click here to download](https://m5stack.oss-cn-shenzhen.aliyuncs.com/MiniBurner/Module/MiniBurner_Servo.exe)

>2.After downloading the software, double-click to run the application, connect the M5 device to the computer via the data cable, select the port parameters, and click **"Burn"** to start burning.

!>3.The CP210X (USB driver) needs to be installed before the Mini Burner is burned. [Click here to view the driver installation tutorial](en/related_documents/establish_serial_connection)


### 1. Arduino IDE

*The below code is incomplete(just for usage). If you want the complete code, please click [here](https://github.com/m5stack/M5-ProductExampleCodes/tree/master/Module/SERVO/Arduino).*

```arduino
#define SERVO_ADDR 0x53 //the IIC address of SERVO Module
/*
 * control servo(CH channle) by us
 */
Wire.beginTransmission(SERVO_ADDR);
Wire.write(CH|0x00);
Wire.write(timeL);
Wire.write(timeH);
Wire.endTransmission();

/*
 * control servo(CH channle) by angle
 */
Wire.beginTransmission(SERVO_ADDR);
Wire.write(CH|0x10);
Wire.write(angle);//0-180°
Wire.endTransmission();
```

### 2. UIFlow

Wanna explore the easiest way of Servo programming?? Check out the Blockly Platform at [UIFlow](flow.m5stack.com).

*TO get the complete code, please click [here](https://github.com/m5stack/M5-ProductExampleCodes/tree/master/Module/SERVO/UIFlow).*

<img src="assets/img/product_pics/module/module_example/SERVO/example_module_servo_01.png">

## Schematic

<img src="assets/img/product_pics/module/servo_sch.png">

## Related Video

**Video Tutorial**

<video width="500" height="315" controls>
    <source src="https://m5stack.oss-cn-shenzhen.aliyuncs.com/video/%E6%95%99%E7%A8%8B/Servo/E4%20-%20Servo%20Demo(UIFlow%20Tutorials%205).mp4" type="video/mp4">
</video>

**SERVO Case**

<video width="500" height="315" controls>
    <source src="https://m5stack.oss-cn-shenzhen.aliyuncs.com/video/Blog/Twitch201901/M5stack%20Servo.mp4" type="video/mp4">
</video>