# Hall effect Unit

<el-tag effect="plain">SKU:U084</el-tag>

<div class="product_pic"><img src="assets/img/product_pics/unit/hall/hall_unit.webp"></div>

## Description

**Hall effect Unit** integrated with three A3144E Hall sensor switches which are processed by 74HC series gate integrated circuits.

Low-level signal can be generated when the magnet S pole is close to the top of the sensor or the N pole is close to the back, and the internal LED indicator will light up.

It is widely used in applications such as door sensor alarms, proximity sensors, rotation speed measurement and so on. The front side is the North pole, and the low level is output when the south pole signal of the magnetic field is sensed.

## Produce Future

- Unipolar Hall switch sensor
- Fast response and high sensitivity
- Status indicator
- Low-level output
- Lego compatible

## Include

- 1x Hall effect Unit
- 1x GROVE Cable(20cm)
- 1x Magnet

## Application

-  Door sensor alarm
-  Magnetic field proximity sensing
-  Speed measurement

## Specification

<table>
    <tr style="font-weight:bold">
        <td>Specification</td>
        <td>Parameter</td>
    </tr>
    <tr>
        <td>Hall sensor</td>
        <td>A3144E * 3</td>
    </tr>
    <tr>
        <td>Logic IC</td>
        <td>74HC08D</td>
    </tr>
    <tr>
        <td>Status indication</td>
        <td> RED LED</td>
    </tr>
    <tr>
        <td>Output Level</td>
        <td>Active Low</td>
    </tr>
    <tr>
      <td>Net weight</td>
      <td>4g</td>
   </tr>
      <tr>
      <td>Gross weight</td>
      <td>17g</td>
   </tr>
   <tr>
      <td>Product Size</td>
      <td>24*32*8mm</td>
   </tr>
   <tr>
      <td>Package Size</td>
      <td>67*52*11mm</td>
   </tr>
</table>

## EasyLoader

>EasyLoader is a concise and fast program writer, which has a built-in case program related to the product. It can be burned to the main control by simple steps to perform a series of function verification. Please install the corresponding driver according to the device type. M5Core host [Please click here to view the CP210X driver installation tutorial](en/arduino/arduino_development), M5StickC/V/T/ATOM series can be used without driver)

<div class="easyloader-box">
    <div style="background-color:white;">
        <div><img src="https://m5stack.oss-cn-shenzhen.aliyuncs.com/image/easyloader_intro.webp"></div>
        <div class="easyloader-btn">
            <a href="https://m5stack.oss-cn-shenzhen.aliyuncs.com/EasyLoader/Windows/UNIT/For%20M5Core/EasyLoader_HALL_UNIT_With_M5Core.exe">Windows</a>
            <a href="https://m5stack.oss-cn-shenzhen.aliyuncs.com/EasyLoader/MacOS/UNIT/EasyLoader_HALL_UNIT_With_M5Core.dmg">MacOS</a>
        </div>
    </div>
    <div>
        <video id="example_video" controls>
            <source src="https://m5stack.oss-cn-shenzhen.aliyuncs.com/video/Product_example_video/Unit/HALL_Unit.mp4" type="video/mp4">
        </video>
        <div class="easyloader-mask">
        <a>
            <svg id="play-btn" t="1583228776634" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="4152" width="75" height="75"><path d="M512 0C229.216 0 0 229.216 0 512s229.216 512 512 512 512-229.216 512-512S794.784 0 512 0z m0 928C282.24 928 96 741.76 96 512S282.24 96 512 96s416 186.24 416 416-186.24 416-416 416zM384 288l384 224-384 224z" p-id="4153" fill="#007aff"></path></svg></a>
            <p>Description:</p>
            <p>The screen displays the state of magnetic induction, low-level effective</p>
        </div>
    </div>
</div>

### PinMap

<table>
 <tr><td>M5Core (PORT B)</td><td>GPIO26</td><td>GPIO36</td><td>5V</td><td>GND</td></tr>
 <tr><td>Hall effect Unit</td><td> </td><td>INPUT</td><td>5V</td><td>GND</td></tr>
</table>

## Related Links

- **Datasheet**
    - [A3144E](https://m5stack.oss-cn-shenzhen.aliyuncs.com/resource/docs/datasheet/unit/3141Thru3144E_HALL.PDF)

## Schematic

<img src= "assets/img/product_pics/unit/hall/hall_unit_sch.webp">

## Example

### Arduino

- [Click here to download Arduino example](https://github.com/m5stack/M5-ProductExampleCodes/tree/master/Unit/HALL/HALL).

### 2. UIFlow

- [Click here to download UIFlow example](https://github.com/m5stack/M5-ProductExampleCodes/tree/master/Unit/HALL/UIFlow).

<img src= "assets/img/product_pics/unit/hall/hall_unit_uiflow.webp">

<el-divider content-position="right">Last updated: 2020-12-11</el-divider>

<script>

   var purchase_link = 'https://m5stack.com/collections/m5-unit/products/hall-effect-unit-a3144e';


   anchor_search(purchase_link);
   scrollFunc();

</script>
