# ATOM FLY Kit

<el-tag effect="plain">SKU:K040</el-tag>

<div class="product_pic"><img src="assets/img/product_pics/atom_base/atomFly/atomfly.webp"></div>

## Description

**ATOM FLY** is a programmable mini quadcopter that utilizes M5ATOM as its core. The AtomFLY is suitable for flying indoors. The PCB also acts as the quadcopter frame with the motors embedded in the PCB to minimize the take-off weight. The frame has an X-shaped layout for more flexible control. The frame is also equipped with a barometer, three-axis accelerometer and gyroscope (IMU)for height setting and attitude maintenance.  AtomFLY is also equipped with ToF (Time of Flight) for automatic landing and obstacle avoidance. There is an LED power indicator on the frame, and the quadcopter is powered by an external 200mAh lithium battery. (NOTE: There is no pre-programmed factory firmware) AtomFLY is intended as a quadcopter dev kit and users need to write their own firmware in order to control it.

## USAGE

<img src="assets/img/product_pics/atom_base/atomFly/atomfly_01.webp" width = "40%">

All hardware functions of the AtomFLY Kit are tested before leaving the factory. Atom Lite does not have any built-in firmware. The programs provided below only provide basic function tests. You need to program yourself to achieve the purpose of remote control flight. Please pay attention to safety during the test and keep your body away from the propeller to prevent accidents. Lithium battery is charged using the supplied charging cable, and the battery charging status is observed through the indicator lights. Red led means charging, and green led means already fully charged(About 30 minutes). Unplug the charger in time after the battery is full to prevent damage caused by overcharging the battery.

## Product Features

- ATOM Matrix/ATOM Lite compatible
- Supports WiFi or Bluetooth remote control if programmed to do so.
- Built-in barometer, accelerometer, gyroscope and ToF
- Small and compact body

## Include

- 1x ATOM FLY frame
- 1x ATOM Lite
- 1x Battery charge
- 1x 200mAh Battery
- 2x CW propeller
- 2x CCW propeller

## Applications

- Remote control drone

## Specification

<table class="table-1">
    <thead>
    <tr>
        <th>Specification</th>
        <th>Parameter</th>
    </tr>
    </thead>
    <tbody>
       <tr>
            <td>ToF</td>
            <td>VL53L0x</td>
       </tr>
       <tr>
            <td>IMU</td>
            <td>MPU6886</td>
       </tr>
       <tr>
            <td>Barometer</td>
            <td>BMP280</td>
       </tr>
       <tr>
            <td>Power Battery</td>
            <td>200mAh/1S/25C/JST </td>
        </tr>
        <tr>
            <td>Propeller Diameter</td>
            <td>2 inch</td>
        </tr>
        <tr>
            <td>Coreless Motor</td>
            <td>Load Speed:31000±10%RPM</td>
        </tr>
        <tr>
            <td>Coreless Motor Stall Current</td>
            <td>4A Max.</td>
        </tr>
        <tr>
            <td>Net weight</td>
            <td>32g</td>
        </tr>
        <tr>
            <td>Gross weight</td>
            <td>70g</td>
        </tr>
        <tr>
            <td>Product Size</td>
            <td>70*70*30mm</td>
        </tr>
        <tr>
            <td>Package Size</td>
            <td>150*75*40mm</td>
        </tr>
        <tr>
            <td>Case material</td>
            <td>PCB</td>
        </tr>
     </tbody>
</table>

## EasyLoader

>EasyLoader is a concise and fast program writer, which has a built-in case program related to the product. It can be burned to the main control by simple steps to perform a series of function verification. Please install the corresponding driver according to the device type. M5Core host [Please click here to view the CP210X driver installation tutorial](en/arduino/arduino_development), M5StickC/V/T/ATOM series can be used without driver)

<div class="easyloader-box">
    <div style="background-color:white;">
        <div><img src="https://m5stack.oss-cn-shenzhen.aliyuncs.com/image/easyloader_intro.webp"></div>
        <div class="easyloader-btn">
            <a href="https://m5stack.oss-cn-shenzhen.aliyuncs.com/EasyLoader/Windows/ATOM_BASE/EasyLoader_AtomFLY.exe">Windows</a>
            <a href="https://m5stack.oss-cn-shenzhen.aliyuncs.com/EasyLoader/MacOS/ATOM_BASE/EasyLoader_AtomFLY.dmg">MacOS</a>
            <!-- <a>Linux</a>
            <a>MacOS</a> -->
        </div>
    </div>
    <div>
        <video id="example_video" controls>
            <source src="https://m5stack.oss-cn-shenzhen.aliyuncs.com/video/Product_example_video/AtomBase/AtomFLY.mp4" type="video/mp4">
        </video>
        <div class="easyloader-mask">
        <a>
            <svg id="play-btn" t="1583228776634" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="4152" width="75" height="75"><path d="M512 0C229.216 0 0 229.216 0 512s229.216 512 512 512 512-229.216 512-512S794.784 0 512 0z m0 928C282.24 928 96 741.76 96 512S282.24 96 512 96s416 186.24 416 416-186.24 416-416 416zM384 288l384 224-384 224z" p-id="4153" fill="#007aff"></path></svg></a>
            <p>Description:</p>
            <p>Press the Atom button, the propeller rotates in turn, and the serial monitor outputs the IMU status</p>
        </div>
    </div>
</div>

## Related Link

-  **Datasheet** 
    - [MPU6886](https://m5stack.oss-cn-shenzhen.aliyuncs.com/resource/docs/datasheet/core/MPU-6886-000193%2Bv1.1_GHIC_en.pdf)
    - [BMP280](https://m5stack.oss-cn-shenzhen.aliyuncs.com/resource/docs/datasheet/hat/BMP280-DS001-11_en.pdf)
    - [VL53L0X](https://m5stack.oss-cn-shenzhen.aliyuncs.com/resource/docs/datasheet/hat/VL53L0X_en.pdf)
    - [Coreless Moter C.W](https://m5stack.oss-cn-shenzhen.aliyuncs.com/resource/docs/datasheet/atombase/AtomFLY/Motor_716-37A-14.pdf)
    - [Coreless Moter CCW](https://m5stack.oss-cn-shenzhen.aliyuncs.com/resource/docs/datasheet/atombase/AtomFLY/Motor_716-37B-14.pdf)

### Pin Map

<table>
 <tr><td>ATOM</td><td>G21</td><td>G25</td><td>G22</td><td>G19</td><td>G23</td><td>G33</td></tr>
 <tr><td>ATOM FLY</td><td>SCL</td><td>SDA</td><td>PWM1</td><td>PWM2</td><td>PWM3</td><td>PWM4</td></tr>
 <tr><td>MPU6886</td><td>SCL</td><td>SDA</td><td></td><td></td><td></td><td></td></tr>
 <tr><td>VL53L0X</td><td>SCL</td><td>SDA</td><td></td><td></td><td></td><td></td></tr>
 <tr><td>BMP280</td><td>SCL</td><td>SDA</td><td></td><td></td><td></td><td></td></tr>
</table>

## Schematic

<img src="assets/img/product_pics/atom_base/atomFly/atomFly_sch.webp">

## Example

### 1. Arduino

- [Click here to download the Arduino example](https://github.com/m5stack/M5-ProductExampleCodes/tree/master/AtomBase/AtomFLY)

<script>

   var purchase_link = 'https://m5stack.com/collections/m5-atom/products/atom-fly';

   anchor_search(purchase_link);
   scrollFunc();

</script>