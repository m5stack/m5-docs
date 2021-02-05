# Voltmeter Unit{docsify-ignore-all}

<el-tag effect="plain">SKU:U087</el-tag>

<div class="product_pic"><img src="assets/img/product_pics/unit/v_meter/vmeter.webp"></div>

## Description

**Voltmeter Unit** is a voltage meter that can monitor the voltage in real time. The 16-bit ADC (analog-to-digital) converter ADS1115 is used internally to communicate through I2C (0X49).

In order to ensure the measurement accuracy, there is a built-in DC-DC isolated power supply, and the I2C interface is also electrically isolated through the low-power isolator CA-IS3020S.

This prevents noise and surges on the data bus or other circuits from entering the local ground terminal to interfere or damage sensitive circuits. Each Unit is individually calibrated when leaving the factory, initial accuracy of 0.1%FS, ±1 count, and a maximum measurement voltage of ±36V.

?>EEPROM (0x53) has built-in calibration parameters when leaving the factory. Please do not write to the EEPROM, otherwise the calibration data will be overwritten and the measurement results will be inaccurate.

## Product Features

- ±36V range
- LED power indicator
- 16-bit ADC conversion
- Resolution: Auto range, Count ≤ 16V, 1mV; Count > 16V, 7.9mV
- Inital accuracy 0.1%FS, ±1 count
- Built-in CA-IS3020S isolation chip, anti-interference
- Isolated DC-DC
- Up to 1000 VRMS isolation withstand voltage
- Development platform: Arduino, UIFlow (under development)
- 2x LEGO compatible holes

## Includes

- 1x Voltmeter Unit
- 1x Grove Cable(20cm)

## Application

- voltmeter

## Specification

<table>
   <tr style="font-weight:bold">
      <td>Resources</td>
      <td>Parameter</td>
   </tr>
   <tr>
      <td>Resolution</td>
      <td>Auto range, Count ≤ 16V, 1mV; Count > 16V, 7.9mV</td>
   </tr>
   <tr>
      <td>Measuring range</td>
      <td>±36V</td>
   </tr>
   <tr>
      <td>Inital Accurancy </td>
      <td>0.1%FS, ±1 count</td>
   </tr>
   <tr>
      <td>Protocol</td>
      <td>I2C</td>
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

##  Measurement Range Gain Setting

**Different range resolution is different, the error value of the result is different, please set the appropriate range according to the needs.Do not write EEPROM.If you really want to save the custom calibration values to EEPROM，Using the following statement, the factory data will be lost once written**

```Arduino

bool Voltmeter::saveCalibration2EEPROM(voltmeterGain_t gain, int16_t hope, int16_t actual)

//@Parameter: voltmeterGarin_t gain //Set Gain
###########################################
# // | PAG      | Max Input Voltage(V) |  #
# // | PAG_4096 |        128            |  #
# // | PAG_2048 |        64            |  #
# // | PAG_1024 |        32            |  #
# // | PAG_512  |        16            |  #
# // | PAG_256  |        8             |  #
###########################################
//@Parameter: int16_t hope  // Set target value
//@Parameter: int16_t actual //ADC raw value

```

<!-- <table>
 <tr><td>ADC1115_Reference calibration</td><td>Calibration voltage(V)</td><td>Expected reading(int16)</td></tr>
 <tr><td>PGA4096(4.096)</td><td>60</td><td>7641</td></tr>
 <tr><td>PGA512(0.512)</td><td>5</td><td>5094</td></tr>
</table> -->

<table>
 <tr><td>Voltage measurement range</td><td>Maximum input DC voltage(V)</td><td>Minimum resolution(mV)</td><td>Gain factor</td></tr>
 <tr><td>PAG_4096(Calibrated)</td><td>±128</td><td>7.85</td><td>0.125</td></tr>
 <!-- <tr><td>2.048</td><td>64</td><td>3.93</td><td>0.0625</td></tr>
 <tr><td>1.024</td><td>32</td><td>1.96</td><td>0.03125</td></tr>
 <tr><td>0.512</td><td>16</td><td>0.98</td><td>0.015625</td></tr> -->
 <tr><td>PAG_256(Calibrated)</td><td>±8</td><td>0.49</td><td>0.007813</td></tr>
</table>

## EasyLoader

>EasyLoader is a concise and fast program writer, which has a built-in case program related to the product. It can be burned to the main control by simple steps to perform a series of function verification. Please install the corresponding driver according to the device type. M5Core host [Please click here to view the CP210X driver installation tutorial](en/arduino/arduino_development), M5StickC/V/T/ATOM series can be used without driver)

<div class="easyloader-box">
    <div style="background-color:white;">
        <div><img src="https://m5stack.oss-cn-shenzhen.aliyuncs.com/image/easyloader_intro.webp"></div>
        <div class="easyloader-btn">
            <a href="https://m5stack.oss-cn-shenzhen.aliyuncs.com/EasyLoader/Windows/UNIT/For%20M5Core/EasyLoader_V_Meter_Unit.exe">Windows</a>
            <a href="https://m5stack.oss-cn-shenzhen.aliyuncs.com/EasyLoader/MacOS/UNIT/EasyLoader_V_Meter_Unit_for_M5Core.dmg">MacOS</a>
        </div>
    </div>
    <div>
        <video id="example_video" controls>
            <source src="https://m5stack.oss-cn-shenzhen.aliyuncs.com/video/Product_example_video/Unit/VMeter.mp4" type="video/mp4">
        </video>
        <div class="easyloader-mask">
        <a>
            <svg id="play-btn" t="1583228776634" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="4152" width="75" height="75"><path d="M512 0C229.216 0 0 229.216 0 512s229.216 512 512 512 512-229.216 512-512S794.784 0 512 0z m0 928C282.24 928 96 741.76 96 512S282.24 96 512 96s416 186.24 416 416-186.24 416-416 416zM384 288l384 224-384 224z" p-id="4153" fill="#007aff"></path></svg></a>
            <p>Description:</p>
            <p>Measuring voltage, gear 0.512, maximum measuring voltage 16V, analog pointer indicating range 5V</p>
        </div>
    </div>
</div>

## Related Link

-  **Datasheet**
  - [CA-IS3020S](https://m5stack.oss-cn-shenzhen.aliyuncs.com/resource/docs/datasheet/unit/CA-IS3020S.pdf)
  - [ADS1115](https://m5stack.oss-cn-shenzhen.aliyuncs.com/resource/docs/datasheet/unit/ADS1115.PDF)

## Schematic

<img src="assets/img/product_pics/unit/v_meter/v_meter_sch.webp" width="40%">

### PinMap

<table>
 <tr><td>M5Core(GROVE A)</td><td>SDA(GPIO21)</td><td>SCL(GPIO22)</td><td>5V</td><td>GND</td></tr>
 <tr><td>V Meter Unit</td><td>SDA</td><td>SCL</td><td>5V</td><td>GND</td></tr>
</table>

## Example

### 1. Arduino IDE

[Click here to download the Arduino example](https://github.com/m5stack/M5-ProductExampleCodes/tree/master/Unit/V_Meter_Unit)

### 2. UIFlow

[Click here to download the UIFlow example](https://github.com/m5stack/M5-ProductExampleCodes/tree/master/Unit/V_Meter_Unit/UIFlow)

<img src="assets/img/product_pics/unit/v_meter/v_meter.webp">

<el-divider content-position="right">Last updated: 2020-12-14</el-divider>

<script>

   var purchase_link = 'https://m5stack.com/collections/m5-unit/products/voltmeter-unit-ads1115';

   anchor_search(purchase_link);
   scrollFunc();

</script>
