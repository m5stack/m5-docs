# Ameter Unit{docsify-ignore-all}

<el-tag effect="plain">SKU:U086</el-tag>

<div class="product_pic"><img src="assets/img/product_pics/unit/a_meter/ameter.webp"></div>

## Description

**Ameter Unit** is a current meter that can monitor the current in real time. The 16-bit ADS1115 ADC (analog-to-digital) converter can be used to communicate through I2C protocol (By default the I2C address is 0X48 unless manually modified).

In order to ensure the measurement accuracy, there is a built-in DC-DC isolated power supply.

The I2C interface is also electrically isolated through the low-power isolator module CA-IS3020S, This prevents noise and surges on the data bus or other circuits from entering the local ground terminal to interfere or damage sensitive circuits.

Each Unit is factory calibrated with initial accuracy of 0.1%FS, ±1 count and resolution of 0.3mA.

The unit has a maximum measurement current of ±4A, and an internal integrated 4A fuse to prevent excessive measurement current from burning out the circuit.

>? EEPROM (0x51) has built-in calibration parameters when leaving the factory. Please do not write to the EEPROM, otherwise the calibration data will be overwritten and the measurement results will be inaccurate.

## Product Features

- ±4A range
- 16-bit ADC conversion
- Inital Accurancy 0.1%FS, ±1 count
- Resolution 0.3mA
- LED power indicator
- 4A Slow-blow Fuse
- Factory calibration (Cal data saved in on-board EEPROM)
- Built-in I2C isolator CA-IS3020S
- Isolated DC-DC
- Development platform: Arduino, UIFlow (under development)
- 2x LEGO compatible holes

## Includes

- 1x Ameter Unit
- 1x Grove Cable (20cm)

## Application

- galvano-meter
- electricity monitoring
- power management monitoring

## Specification

<table>
   <tr style="font-weight:bold">
      <td>Resources</td>
      <td>Parameter</td>
   </tr>
   <tr>
      <td>Measuring range</td>
      <td>±4A</td>
   </tr>
   <tr>
      <td>Communication protocol</td>
      <td>I2C：0x48</td>
   </tr>
   <tr>
   <td>Net Weight</td>
      <td>9g</td>
   </tr>
   <tr>
      <td>Gross Weight</td>
      <td>24g</td>
   </tr>
   <tr>
      <td>Product Size</td>
      <td>65*24*8mm</td>
   </tr>
   <tr>
      <td>Package Size</td>
      <td>67*53*12mm</td>
   </tr>
 </table>

 ## Measurement Range Gain Setting

**There are different range of resolutions, the % of error values for each result might be different as well. please set the appropriate range according to the application needs in order to maximize the accuracy. Do not write the values into the EEPROM, If you'd like to save the custom calibration values to EEPROM，Using the following example, the factory data will be lost (overwritten)**

<!-- ```Arduino

bool Ameter::saveCalibration2EEPROM(ameterGain_t gain, int16_t hope, int16_t actual)

//@Parameter: ameterGarin_t gain //Set Gain
###########################################
# // | PAG      | Max Input Voltage(V) |  #
# // | PAG_4096 |        64            |  #
# // | PAG_2048 |        32            |  #
# // | PAG_512  |        16            |  #
# // | PAG_256  |        8             |  #
###########################################
//@Parameter: int16_t hope  // Set target value
//@Parameter: int16_t actual //ADC raw value

``` -->

<!-- <table>
 <tr><td>ADC1115_Reference calibration</td><td>Calibration current(A)</td><td>Expected reading(int16)</td></tr>
 <tr><td>PGA512(O.512)</td><td>2</td><td>6400</td></tr>
</table> -->

?>Absolute maxium `6A` Do not exceed it, otherwise the equipment will be burnt down.

<table>
 <tr><td>Current measurement range</td><td>Maximum input current(A)</td><td>Power dispensation(W)</td><td>Minimum resolution(mA)</td><td>Gain factor</td></tr>
 <tr><td>PAG_4096(Calibrated)</td><td>±4</td><td>83.88</td><td>2.5</td><td>0.125</td></tr>
 <!-- <tr><td>2.048</td><td>20.48</td><td>20.97152</td><td>1.25</td><td>0.0625</td></tr>
 <tr><td>1.024</td><td>10.24</td><td>5.24288</td><td>0.625</td><td>0.03125</td></tr>
 <tr><td>0.512</td><td>5.12</td><td>1.31072</td><td>0.3125</td><td>0.015625</td></tr> -->
 <tr><td>PAG_256(Calibrated)</td><td>±2.56</td><td>0.32768</td><td>0.15626</td><td>0.007813</td></tr>
</table>


## EasyLoader

>EasyLoader is a concise and fast program writer, which has a built-in case program related to the product. It can be burned to the main control by simple steps to perform a series of function verification. Please install the corresponding driver according to the device type. M5Core host [Please click here to view the CP210X driver installation tutorial](en/arduino/arduino_development), M5StickC/V/T/ATOM series can be used without driver)

<div class="easyloader-box">
    <div style="background-color:white;">
        <div><img src="https://m5stack.oss-cn-shenzhen.aliyuncs.com/image/easyloader_intro.webp"></div>
        <div class="easyloader-btn">
            <a href="https://m5stack.oss-cn-shenzhen.aliyuncs.com/EasyLoader/Windows/UNIT/For%20M5Core/EasyLoader_A_Meter_Unit.exe">Windows</a>
            <a href="https://m5stack.oss-cn-shenzhen.aliyuncs.com/EasyLoader/MacOS/UNIT/EasyLoader_A_Meter_Unit_for_M5Core.dmg">MacOS</a>
        </div>
    </div>
    <div>
        <video id="example_video" controls>
            <source src="https://m5stack.oss-cn-shenzhen.aliyuncs.com/video/Product_example_video/Unit/AMeter.mp4" type="video/mp4">
        </video>
        <div class="easyloader-mask">
        <a>
            <svg id="play-btn" t="1583228776634" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="4152" width="75" height="75"><path d="M512 0C229.216 0 0 229.216 0 512s229.216 512 512 512 512-229.216 512-512S794.784 0 512 0z m0 928C282.24 928 96 741.76 96 512S282.24 96 512 96s416 186.24 416 416-186.24 416-416 416zM384 288l384 224-384 224z" p-id="4153" fill="#007aff"></path></svg></a>
            <p>Description:</p>
            <p>Measuring current, gear 0.512, maximum input current 5A, analog pointer shows range 2A</p>
        </div>
    </div>
</div>

## Related Link

-  **Datasheet**
    - [CA-IS3020S](https://m5stack.oss-cn-shenzhen.aliyuncs.com/resource/docs/datasheet/unit/CA-IS3020S.pdf)
    - [ADS1115](https://m5stack.oss-cn-shenzhen.aliyuncs.com/resource/docs/datasheet/unit/ADS1115.PDF)

## Schematic

<img src="assets/img/product_pics/unit/a_meter/a_meter_sch.webp" width="40%">

### PinMap

<table>
 <tr><td>M5Core(GROVE A)</td><td>SDA(GPIO21)</td><td>SCL(GPIO22)</td><td>5V</td><td>GND</td></tr>
 <tr><td>A Meter Unit</td><td>SDA</td><td>SCL</td><td>5V</td><td>GND</td></tr>
</table>

## Example

### 1. Arduino

- [Click here to download the Arduino example](https://github.com/m5stack/M5-ProductExampleCodes/tree/master/Unit/A_Meter_Unit)

### 2. UIFlow

- [Click here to download the UIFlow example](https://github.com/m5stack/M5-ProductExampleCodes/tree/master/Unit/A_Meter_Unit/UIFlow)

<img src="assets/img/product_pics/unit/a_meter/a_meter.webp" width="50%" height="50%">


<el-divider content-position="right">Last updated: 2020-12-10</el-divider>

<script>

   var purchase_link = 'https://m5stack.com/collections/m5-unit/products/ammeter-unit-ads1115';

   anchor_search(purchase_link);
   scrollFunc();

</script>
