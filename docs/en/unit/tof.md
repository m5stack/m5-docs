# ToF

<div class="badge badge-pill badge-primary product_sku_tag">SKU:U010</div>

<div class="product_pic"><img src="assets/img/product_pics/unit/tof/unit_tof_01.webp"><img src="assets/img/product_pics/unit/tof/unit_tof_02.webp"></div>

## Description

**ToF** that employs time-of-flight techniques to resolve distance between the emit point and the reach point of a subject, measuring the round trip time of an artificial light signal provided by a laser.

This unit integrated a distance measuring sensor VL53L0x providing accurate distance measurement whatever the target reflectance, unlike conventional technologies. It can measure absolute distances up to 2m in less than 30ms.

This unit comunicates with M5Core via I2C(0x29).

*Noitce: If you found ToF performance unstable, means what you have could be the old-version hardware PCB board, Following will teach you how to fix it*

- Disassembling ToF and Check the PCB board, if you see it like this, means it is the NEW(fixed) version. <br> <br> <br>
  <img src="assets/img/product_pics/unit/tof/unit_tof_05.webp" width="30%" height="30%"><br> <br> <br>
- If not, take off the two MOSFETs (AO3400A), and connect SCL,SDA from GROVE directly to SCL,SDA on VL53L0x. See the above picture for wiring.<br> <br> <br>
<img src="assets/img/product_pics/unit/tof/unit_tof_sch_02.webp" width="60%" height="60%"><br> <br> <br>
- In this case, make sure you use the 3.3V on SDA and SCL, M5Core GROVE provide 3.3V to data pins, 5V to power pin. only 3.3v allowed on VL53L0x.

## Product Features

- High precision
- Measure absolute distances up to 2m
- The wavelength of laser: 940nm
- Program Platform: Arduino, UIFlow(Blockly, Python)
- Two Lego-compatible holes
- Product Size：32.2mm x 24.2mm x 8.1mm
- Product weight：4g

## Include

- 1x ToF Unit
- 1x Grove Cable

## Applications

-  1D gesture recognition
-  Laser Ranging
-  3D structured light imaging（3D sensing）
-  Camera assist (ultra fast autofocus and depth of field)

## Related Link

- **[VL53L0X Datasheet](https://m5stack.oss-cn-shenzhen.aliyuncs.com/resource/docs/datasheet/hat/VL53L0X_en.pdf)**

## EasyLoader

>EasyLoader is a concise and fast program writer, which has a built-in case program related to the product. It can be burned to the main control by simple steps to perform a series of function verification. Please install the corresponding driver according to the device type. M5Core host [Please click here to view the CP210X driver installation tutorial](en/arduino/arduino_development), M5StickC/V/T/ATOM series can be used without driver)

<div class="easyloader-box">
    <div style="background-color:white;">
        <div><img src="https://m5stack.oss-cn-shenzhen.aliyuncs.com/image/easyloader_intro.webp"></div>
        <div class="easyloader-btn">
            <a href="https://m5stack.oss-cn-shenzhen.aliyuncs.com/EasyLoader/Windows/UNIT/For%20M5Core/EasyLoader_ToF_UNIT_With_M5Core.exe">Windows</a>
            <a href="https://m5stack.oss-cn-shenzhen.aliyuncs.com/EasyLoader/MacOS/UNIT/EasyLoader_ToF_UNIT_With_M5Core_0x1000.dmg">MacOS</a>
            <!-- <a>Linux</a>
            <a>MacOS</a> -->
        </div>
    </div>
    <div>
        <video id="example_video" controls>
            <source src="https://m5stack.oss-cn-shenzhen.aliyuncs.com/video/Product_example_video/Unit/ToF_UNIT.mp4" type="video/mp4">
        </video>
        <div class="easyloader-mask">
        <a>
            <svg id="play-btn" t="1583228776634" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="4152" width="75" height="75"><path d="M512 0C229.216 0 0 229.216 0 512s229.216 512 512 512 512-229.216 512-512S794.784 0 512 0z m0 928C282.24 928 96 741.76 96 512S282.24 96 512 96s416 186.24 416 416-186.24 416-416 416zM384 288l384 224-384 224z" p-id="4153" fill="#007aff"></path></svg></a>
            <p>Description:</p>
            <p>The screen displays the current ranging data.</p>
        </div>
    </div>
</div>


## Example

### 1. Arduino IDE

The below code is incomplete(just for usage). If you want the complete code, please click [here](https://github.com/m5stack/M5-ProductExampleCodes/tree/master/Unit/TOF/Arduino)

### 2. UIFlow

If you want the complete code, please click [here](https://github.com/m5stack/M5-ProductExampleCodes/tree/master/Unit/TOF/UIFlow)

<img src="assets/img/product_pics/unit/unit_example/TOF/example_unit_tof_01.webp">

## Schematic

[ToF Schematic](https://github.com/m5stack/M5-Schematic/blob/master/Units/UNIT_TOF.pdf)

<img src="assets/img/product_pics/unit/tof/unit_tof_sch_01.webp">

### PinMap

<table>
 <tr><td>M5Core(GROVE A)</td><td>GPIO22</td><td>GPIO21</td><td>5V</td><td>GND</td></tr>
 <tr><td>ToF Unit</td><td>SCL</td><td>SDA</td><td>5V</td><td>GND</td></tr>
</table>

<script>

   var purchase_link = 'https://m5stack.com/collections/m5-unit/products/tof-sensor-unit';


   anchor_search(purchase_link);
   scrollFunc();

</script>