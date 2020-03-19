# Module SERVO {docsify-ignore-all}

<div class="badge badge-pill badge-primary product_sku_tag">SKU:M014</div>

<img src="assets\img\product_pics\module\servo\servo_01.jpg" width="30%"><img src="assets\img\product_pics\module\servo\servo_02.jpg" width="30%"><img src="assets\img\product_pics\module\servo\servo_03.jpg" width="30%">

## Description

**SERVO** is made to implement the bestest, easiest way to drive Servo motors. This M5 module will make quick work of your next Servo project!  It is able to drive mutiple Servo motors, up to 12 channels(Max load :14W) . We also added an DC input for power supplement. Through M-BUS the DC in can automatically power the M5 core at top.

Servo is powered by MEGA328 communicate via IIC(0x53).

## Product Features

-  12x servo ports
-  DC power input: 5-7V
-  DC Connector Type: XT30 (female)
-  Power adapter interface: 5.5mm x 2.1mm
-  Product Size：54.2mm x 54.2mm x 12.8mm
-  Product weight：24.5g

## Include

-  1x M5Stack Servo Module
-  1x Common Male to XT30 Male DC convertor

## Applications

-  Humanoid robot
-  Bionic multi-joint robot
-  Triaxial Camera Cradle

## Related Link

- **[Offical Video](https://www.youtube.com/channel/UCozgFVglWYQXbvTmGyS739w)**

- **[Forum](http://forum.m5stack.com/)**

- **[The Firmware of inside MEGA328](https://github.com/m5stack/M5-ProductExampleCodes/tree/master/Module/SERVO/firmware_328p)**

## EasyLoader

<img src="https://m5stack.oss-cn-shenzhen.aliyuncs.com/image/EasyLoader_logo.png" width="100px" style="margin-top:20px">

<a href="https://m5stack.oss-cn-shenzhen.aliyuncs.com/EasyLoader/Module/EasyLoader_Servo.exe"><button type="button" class="btn btn-primary">click to download EasyLoader</button></a>

>1.EasyLoader is a simple and fast program burner. Every product page in EasyLoader provides a product-related case program. It can be burned to the master through simple steps, and a series of function verification can be performed.(**Currently EasyLoader is only available for Windows OS**)

>2.After downloading the software, double-click to run the application, connect the M5 device to the computer via the data cable, select the port parameters, and click **"Burn"** to start burning.

!>3.The CP210X (USB driver) needs to be installed before the EasyLoader is burned. [Click here to view the driver installation tutorial](en/related_documents/M5Burner#install-usb-driver)

## PinMap

**Mega328 ISP**Download interface Pin foot definition

<img src="assets\img\product_pics\app\mega328_isp.png" width="30%" height="30%">

## Example

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

Wanna explore the easiest way of Servo programming?? Check out the Blockly Platform at [UIFlow](http://flow.m5stack.com).

*TO get the complete code, please click [here](https://github.com/m5stack/M5-ProductExampleCodes/tree/master/Module/SERVO/UIFlow).*

<img src="assets/img/product_pics/module/module_example/SERVO/example_module_servo_01.png">

## Schematic

<img src="assets/img/product_pics/module/servo_sch.png">

## Video

**Video Tutorial**

<video width="500" height="315" controls>
    <source src="https://m5stack.oss-cn-shenzhen.aliyuncs.com/video/%E6%95%99%E7%A8%8B/Servo/E4%20-%20Servo%20Demo(UIFlow%20Tutorials%205).mp4" type="video/mp4">
</video>

**SERVO Case**

<video width="500" height="315" controls>
    <source src="https://m5stack.oss-cn-shenzhen.aliyuncs.com/video/Blog/Twitch201901/M5stack%20Servo.mp4" type="video/mp4">
</video>

<script>

   var purchase_link = 'https://m5stack.com/collections/m5-module/products/servo-module';

   anchor_search(purchase_link);
   scrollFunc();

</script>