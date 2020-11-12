# M5GO BOTTOM2

<el-tag effect="plain">SKU:A014-C</el-tag>

<div class="product_pic"><img src="assets/img/product_pics/base/m5go_bottom2/m5go_bottom2_01.webp"><img src="assets/img/product_pics/base/m5go_bottom2/m5go_bottom2_02.webp"></div>

## Description

**M5GO BOTTOM2** is an expansion base designed for M5Core2. It integrates an MPU6886 6 axis gyro/accelerometer，digital mic(SPM1423) and 500mAh LiPo battery. The base also includes 2 HY2.0-4P expanion ports capable of ADC/DAC/UART protocols and data input/output，which allows the use of units from the M5Stack range. On either side of the base beneath a diffuser are a total of 10 programmable RGB LEDs(SK6812)，which can be used as a form of notification or for impressive lighting effectss. Beneath the device are a set of pogo pins which attach to the included base for charging，The charging base incorporates a TP4057 charging IC which facilitates efficient and safe charging. The pogo pin connector can also be used for I2C communication, therefore if the user wants to attach or modify the base to include I2C devices they are able to do so. On the bottom of the device are an array of Lego™ compatible holes which makes integration of your Lego™ projects a breeze.

## Features

- Compatible with M5Core2
- Digital microphone
- Programmable RGB LED
- HY2.0-4P expansion ports
- Lego™ compatible
- Pogo Pin magnetic charging

## Includes

- 1x M5GO BOTTOM2
- 2x M3*16 screws
- 2x M3*18 screws

## Specifications

<table>
   <tr style="font-weight:bold">
      <td>Resource</td>
      <td>Parameter</td>
   </tr>
   <tr>
      <td>Mic</td>
      <td>SPM1423</td>
   </tr>
   <tr>
      <td>LED</td>
      <td>SK6812*10</td>
   </tr>
   <tr>
      <td>IMU</td>
      <td>MPU6886</td>
   </tr>
   <tr>
      <td>Net Weight</td>
      <td>31g</td>
   </tr>
   <tr>
      <td>Gross Weight</td>
      <td>45g</td>
   </tr>
   <tr>
      <td>Product Dimensions</td>
      <td>54*54*8mm</td>
   </tr>
   <tr>
      <td>Packaging Dimensions</td>
      <td>60*57*17mm</td>
   </tr>
 </table>

## EasyLoader

>EasyLoader is a concise and fast program writer, which has a built-in case program related to the product. It can be burned to the main control by simple steps to perform a series of function verification. Please install the corresponding driver according to the device type. M5Core host [Please click here to view the CP210X driver installation tutorial](en/arduino/arduino_development), M5StickC/V/T/ATOM series can be used without driver)

<div class="easyloader-box">
    <div style="background-color:white;">
        <div><img src="https://m5stack.oss-cn-shenzhen.aliyuncs.com/image/easyloader_intro.webp"></div>
        <div class="easyloader-btn">
            <a href="https://m5stack.oss-cn-shenzhen.aliyuncs.com/EasyLoader/Windows/BASE/EasyLoader_M5GO_BOTTOM2.exe">Windows</a>
            <!-- <a>Linux</a>
            <a>MacOS</a> -->
        </div>
    </div>
    <div>
        <video id="example_video" controls>
            <source src="https://m5stack.oss-cn-shenzhen.aliyuncs.com/video/Product_example_video/App/PM2.5.mp4" type="video/mp4">
        </video>
        <div class="easyloader-mask">
        <a>
            <svg id="play-btn" t="1583228776634" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="4152" width="75" height="75"><path d="M512 0C229.216 0 0 229.216 0 512s229.216 512 512 512 512-229.216 512-512S794.784 0 512 0z m0 928C282.24 928 96 741.76 96 512S282.24 96 512 96s416 186.24 416 416-186.24 416-416 416zM384 288l384 224-384 224z" p-id="4153" fill="#007aff"></path></svg></a>
            <p>Description:</p>
            <p>IMU data acquisition, microphone data acquisition Display spectrum, control LED blinking.</p>
        </div>
    </div>
</div>


## Pin Mapping

**SK6812-LED Bar**

<table>
 <tr><td>ESP32 Chip</td><td>GPIO25</td></tr>
 <tr><td>SK6812</td><td>DATA</td></tr>
</table>

**SPM1423-Mic**

<table>
 <tr><td>ESP32 Chip</td><td>GPIO34</td><td>GPIO0</td></tr>
 <tr><td>SPM1423</td><td>DAT</td><td>CLK</td></tr>
</table>

**MPU6886 & Pogo Pin**

<table>
 <tr><td>ESP32 Chip</td><td>GPIO21</td><td>GPIO22</td></tr>
 <tr><td>MPU6886</td><td>SDA</td><td>SCL</td></tr>
 <tr><td>Pogo Pin</td><td>SDA</td><td>SCL</td></tr>
</table>

**HY2.0-4P-PortB(black)**

<table>
 <tr><td>ESP32 Chip</td><td>GPIO26</td><td>GPIO36</td></tr>
 <tr><td>PortB</td><td>GPIO26(DAC)</td><td>GPIO36(ADC)</td></tr>
</table>

**HY2.0-4P-PortC(blue)**

<table>
 <tr><td>ESP32 Chip</td><td>GPIO13</td><td>GPIO14</td></tr>
 <tr><td>PortC</td><td>GPIO13(RXD2)</td><td>GPIO14(TXD2)</td></tr>
</table>

**M5GO-BOTTOM2-BUS**

<img src="assets/img/product_pics/base/m5go_bottom2/m5go_bottom2_bus.webp">

## Related Links

   - [SPM1423](https://m5stack.oss-cn-shenzhen.aliyuncs.com/resource/docs/datasheet/core/SPM1423HM4H-B_datasheet_en.pdf)
   - [MPU6886](https://m5stack.oss-cn-shenzhen.aliyuncs.com/resource/docs/datasheet/core/MPU-6886-000193%2Bv1.1_GHIC_en.pdf)


## Example

- **Arduino**

Use with Arduino, please click [here](https://github.com/m5stack/M5-ProductExampleCodes/tree/master/Base/M5GO_BOTTOM2)


## Schematic

<img src="assets/img/product_pics/base/m5go_bottom2/m5go_bottom2_sch.webp">

<script>

   var purchase_link = 'https://m5stack.com/products/m5go-battery-bottom2-for-core2-only';

   anchor_search(purchase_link);
   scrollFunc();

</script>