# NCIR

<el-tag effect="plain">SKU:U028</el-tag>

<div class="product_pic"><img src="assets/img/product_pics/unit/ncir/unit_ncir_01.webp"></div>

## Description

**NCIR** featured with built-in infrared **MLX90614** sensor， It can be used to measure the surface temperature of a human body or other object.<br>

Unlike most temperature sensors, this sensor measures infrared light bouncing off of remote objects so it can sense temperature without having to touch them physically.

Simply point the sensor towards what you want to measure and it will detect the temperature by absorbing IR waves emitted. Because it doesn't have to touch the object it's measuring, it can sense a wider range of temperatures than most digital sensors! It takes the measurement over an 90-degree field of view so it can be handy for determining the average temperature of an area.
<br>
The MLX90614 is factory calibrated in wide temperature ranges: -40 to 125 ˚C for the ambient temperature and -70 to 380 ˚C for the object temperature.

Connect with M5Core via GROVE A I2C(0x5A).

## Product Features

- Operating voltage: 4.5 to 5.5V
- Measuring object temperature range: -70°C ~ 380°C
- Measuring ambient temperature range: -40 to 125 ˚C
- Measurement accuracy at room temperature: ±0.5°C
- Field of view: 90°
- Software Development Platform: Arduino, UIFlow (Blockly, Python)
- Two Lego-compatible holes

## Include

- 1x NCIR Unit
- 1x Grove Cable

## Applications

-  Body Temperature Measurement
-  Object (biological) Motion Detection


## Specification

<table>
   <tr style="font-weight:bold">
      <td>Resources</td>
      <td>Parameter</td>
   </tr>
   <tr>
      <td>Communication protocol</td>
      <td>I2C：0x5A</td>
   </tr>
   <tr>
      <td>Net weight</td>
      <td>4g</td>
   </tr>
   <tr>
      <td>Gross weight</td>
      <td>16g</td>
   </tr>
   <tr>
      <td>Product Size</td>
      <td>32*24*8mm</td>
   </tr>
   <tr>
      <td>Package Size</td>
      <td>67*53*12mm</td>
   </tr>
 </table>

## Related Link

- **[MLX90614 Datasheet](https://m5stack.oss-cn-shenzhen.aliyuncs.com/resource/docs/datasheet/hat/MLX90614-Datasheet-Melexis_en.pdf)**

## EasyLoader

>EasyLoader is a concise and fast program writer, which has a built-in case program related to the product. It can be burned to the main control by simple steps to perform a series of function verification. Please install the corresponding driver according to the device type. M5Core host [Please click here to view the CP210X driver installation tutorial](en/arduino/arduino_development), M5StickC/V/T/ATOM series can be used without driver)

<div class="easyloader-box">
    <div style="background-color:white;">
        <div><img src="https://m5stack.oss-cn-shenzhen.aliyuncs.com/image/easyloader_intro.webp"></div>
        <div class="easyloader-btn">
            <a href="https://m5stack.oss-cn-shenzhen.aliyuncs.com/EasyLoader/Windows/UNIT/For%20M5Core/EasyLoader_NCIR_UNIT_With_M5Core.exe">Windows</a>
            <a href="https://m5stack.oss-cn-shenzhen.aliyuncs.com/EasyLoader/MacOS/UNIT/EasyLoader_NCIR_UNIT_With_M5Core.dmg">MacOS</a>
            <!-- <a>Linux</a>
            <a>MacOS</a> -->
        </div>
    </div>
    <div>
        <video id="example_video" controls>
            <source src="https://m5stack.oss-cn-shenzhen.aliyuncs.com/video/Product_example_video/Unit/NCIR_UNIT.mp4" type="video/mp4">
        </video>
        <div class="easyloader-mask">
        <a>
            <svg id="play-btn" t="1583228776634" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="4152" width="75" height="75"><path d="M512 0C229.216 0 0 229.216 0 512s229.216 512 512 512 512-229.216 512-512S794.784 0 512 0z m0 928C282.24 928 96 741.76 96 512S282.24 96 512 96s416 186.24 416 416-186.24 416-416 416zM384 288l384 224-384 224z" p-id="4153" fill="#007aff"></path></svg></a>
            <p>Description:</p>
            <p>The screen displays the current detected temperature value.</p>
        </div>
    </div>
</div>

### PinMap

<table>
 <tr><td>M5Core (GROVE A)</td><td>GPIO22</td><td>GPIO21</td><td>5V</td><td>GND</td></tr>
 <tr><td>NCIR Unit</td><td>SCL</td><td>SDA</td><td>5V</td><td>GND</td></tr>
</table>

## Example

### 1. Arduino

- [Click here to download the Arduino example](https://github.com/m5stack/M5Stack/tree/master/examples/Unit/NCIR_MLX90614)

### 2. UIFlow

- [Click here to download the UIFlow example](https://github.com/m5stack/M5-ProductExampleCodes/tree/master/Unit/NCIR/UIFlow)

<img src="assets/img/product_pics/unit/unit_example/NCIR/example_unit_ncir_03.webp">

## Schematic

<img src="assets/img/product_pics/unit/ncir_sch.JPG">

<el-divider content-position="right">Last updated: 2020-12-14</el-divider>

<script>

   var purchase_link = 'https://m5stack.com/collections/m5-unit/products/ncir-sensor-unit';


   anchor_search(purchase_link);
   scrollFunc();

</script>
