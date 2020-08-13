# TVOC

<el-tag effect="plain">SKU:U088</el-tag>

<div class="product_pic"><img src="assets/img/product_pics/unit/tvoc/tvoc.webp"></div>

## Description

**TVOC/eCO2 mini Unit** is a digital multi-pixel gas sensor unit with integrated SGP30. It mainly measures various VOC (volatile organic compounds) and H2 in the air. It can be programmed to detect TVOC (total volatile organic compounds) and eCO2 (equivalent carbon dioxide reading)Concentration measurement. Typical measurement accuracy is 15% within the measurement range, the SGP30 reading is internally calibrated and output, which can maintain long-term stability. SGP30 uses I2C protocol communication with on-chip humidity compensation function, which can be turned on through an external humidity sensor. If you need to obtain accurate results, you need to calibrate according to a known measurement source. SGP30 has a built-in calibration function. In addition, eCO2 is calculated based on the concentration of H2 and cannot completely replace "true" CO2 sensors for laboratory use.

## Product Features

- TVOC/eCO2 concentration detection
- I2C communication
- Outstanding long-term stability
- Humidity Compensation
- 2x LEGO™ Hole
- HY2.0 4P interface, support [UIFlow](http://flow.m5stack.com) 、 [Arduino](http://www.arduino.cc).


## Include

- 1x TVOC/eCO2 Mini Unit
- 1x HY2.0 Cable(5CM)

## Applications

- Air quality monitoring
- Formaldehyde detection
- eCO2 concentration

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
            <td>Measurement range</td>
            <td>Ethanol：0-1000ppm，H2：0-1000ppm，TVOC：0-60000 ppb，eCO2：400-60000 ppm</td>
        </tr>
        <tr>
            <td>TVOC/eCO2 Sampling rate</td>
            <td>1Hz</td>
        </tr>
        <tr>
            <td>TVOC/eCO2 Resolution</td>
            <td>TVOC：1/6/32bbp，eCO2：1/3/9/31ppm</td>
        </tr>
        <tr>
            <td>Protocol</td>
            <td>I2C:</td>
        </tr>
        <tr>
            <td>Net Weight</td>
            <td>4g</td>
        </tr>
        <tr>
            <td>Gross Weight</td>
            <td>8g</td>
        </tr>
        <tr>
            <td>Product Size</td>
            <td>24*24*13mm</td>
        </tr>
        <tr>
            <td>Package Size</td>
            <td>35*36*18mm</td>
        </tr>
        <tr>
            <td>Case material</td>
            <td>Plastic(PC)</td>
        </tr>
     </tbody>
</table>


## EasyLoader

>EasyLoader is a concise and fast program writer, which has a built-in case program related to the product. It can be burned to the main control by simple steps to perform a series of function verification. Please install the corresponding driver according to the device type. M5Core host [Please click here to view the CP210X driver installation tutorial](en/arduino/arduino_development), M5StickC/V/T/ATOM series can be used without driver)

<div class="easyloader-box">
    <div style="background-color:white;">
        <div><img src="https://m5stack.oss-cn-shenzhen.aliyuncs.com/image/easyloader_intro.webp"></div>
        <div class="easyloader-btn">
            <a href="https://m5stack.oss-cn-shenzhen.aliyuncs.com/EasyLoader/Windows/UNIT/For%20M5Core/EasyLoader_TVOC_Unit.exe">Windows</a>
            <a href="https://m5stack.oss-cn-shenzhen.aliyuncs.com/EasyLoader/MacOS/UNIT/EasyLoader_TVOC_eCO2_UNIT_With_M5Core.dmg">MacOS</a>
            <!-- <a>Linux</a>
            <a>MacOS</a> -->
        </div>
    </div>
    <div>
        <video id="example_video" controls>
            <source src="https://m5stack.oss-cn-shenzhen.aliyuncs.com/video/Product_example_video/Unit/TVOC%20eCO2.mp4" type="video/mp4">
        </video>
        <div class="easyloader-mask">
        <a>
            <svg id="play-btn" t="1583228776634" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="4152" width="75" height="75"><path d="M512 0C229.216 0 0 229.216 0 512s229.216 512 512 512 512-229.216 512-512S794.784 0 512 0z m0 928C282.24 928 96 741.76 96 512S282.24 96 512 96s416 186.24 416 416-186.24 416-416 416zM384 288l384 224-384 224z" p-id="4153" fill="#007aff"></path></svg></a>
            <p>Description:</p>
            <p>Display temperature, humidity and atmospheric pressure data.</p>
        </div>
    </div>
</div>

### PinMap

<table>
 <tr><td>M5Core(GROVE A)</td><td>GPIO22</td><td>GPIO21</td><td>5V</td><td>GND</td></tr>
 <tr><td>TVOC Unit</td><td>SCL</td><td>SDA</td><td>5V</td><td>GND</td></tr>
</table>

## Related Link

  - **[SGP30 Datasheet](hhttps://m5stack.oss-cn-shenzhen.aliyuncs.com/resource/docs/datasheet/unit/Sensirion_Gas_Sensors_SGP30_Datasheet.pdf)**

## Schematic

<img src="assets/img/product_pics/unit/tvoc/tvoc_sch.webp">

## Example

### 1. Arduino IDE

The code below is incomplete. To get the complete code, please click [here](https://github.com/m5stack/M5-ProductExampleCodes/tree/master/Unit/TVOC)


<script>

   var purchase_link = '';

   anchor_search(purchase_link);
   scrollFunc();

</script>
