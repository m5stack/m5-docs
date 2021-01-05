# COM GSM

<el-tag effect="plain">SKU:M031-D</el-tag>

<div class="product_pic"><img src="assets/img/product_pics/module/com.x_gsm/comx_gsm.webp">
</div>

## Description

**COM GSM** is a stackable 2G communication module, with the SIM800C communication module built-in. The working frequency of COM GSM is GSM/GPRS 850/900/1800/1900MHz,and it can transmit SMS and data information with low power consumption. The module has a DC power input and can provide 5V-12V power supply through an external power supply. In order to facilitate the user to configure the pins, the DIP switch is used to set the pins. This module is especially suitable for remote meter reading, smart wearables, smart parking, municipal management and other IoT industries with ultra-low power consumption and small size as the core requirements.

<img src="assets/img/product_pics/module/com.x_gsm/comx_gsm_02.webp" width = "30%">

>COM GSM RXD/TXD can be connected to M5Stack's UART (TX(0/13/17)RX(5/15/16)) by setting the DIP switch. Since these GPIO in **M5Stack Fire** 16/17 are connected to PSRAM by default, conflicts may occur when using GSM. It is recommended to use any set of UART pins in the remaining two groups.

>The DIP switch on the right is invalid for the GSM module, no need to set.


## Product Features

- Stackable design
- Support SMS text and data transmission
- Independent external power supply
- AT command control
- SIM card type: MicroSIM
- Status signal: two LED indicators (power/network status)
- Power supply voltage: 3.4-4.4V
- Typical power consumption in sleep mode: 0.88mA
- External antenna: SMA antenna 2.5dBi
- Serial communication: UART 115200bps
- Operating temperature range: -40°C to +85°C

- Frequency band:
    - Quad-band 850/900/1800/1900MHz
    - GPRS multi-slot class 12/10
    - GPRS mobile station class B
- data transmission：
    - PRS class 12: Maximum 85.6 kbps (uplink/downlink rate)
        - Support PBCCH (Packet Broadcast Control Channel)
        - Coding scheme: CS 1, 2, 3, 4
        - Integrated TCP/IP TCP/IP、UDP、HTTP、FTP protocol
        - Support USSD (Unstructured Supplementary Services Data)

## Include

-  1x COM GSM module
-  1x SMA antenna

## Applications

-  Remote meter reading system
-  Automatic Web Spider SMS-notifier
-  Wireless communication

## Specification

<table>
   <tr style="font-weight:bold">
      <td>Resources</td>
      <td>Parameter</td>
   </tr>
   <tr>
      <td>Frequency band</td>
      <td>GSM/GPRS 850/900/1800/1900MHz</td>
   </tr>
   <tr>
      <td>Network protocol</td>
      <td>TCP/IP/UDP/FTP/HTTP etc.</td>
   </tr>
   <tr>
      <td>Communication</td>
      <td>UART 115200bps</td>
   </tr>
   <tr>
      <td>Antenna Gain</td>
      <td>2.5dB 1880-1900MHZ/2320-2370MHZ 2575-2635MHZ</td>
   </tr>
   <tr>
      <td>Net Weight</td>
      <td>40g</td>
   </tr>
   <tr>
      <td>Gross weight</td>
      <td>75g</td>
   </tr>
   <tr>
      <td>Module Size</td>
      <td>54*54*13.2mm</td>
   </tr>
   <tr>
      <td>Package Size</td>
      <td>60*57*17mm</td>
   </tr>
 </table>


## EasyLoader

>EasyLoader is a concise and fast program writer, which has a built-in case program related to the product. It can be burned to the main control by simple steps to perform a series of function verification. Please install the corresponding driver according to the device type. M5Core host [Please click here to view the CP210X driver installation tutorial](en/arduino/arduino_development), M5StickC/V/T/ATOM series can be used without driver)

<div class="easyloader-box">
    <div style="background-color:white;">
        <div><img src="https://m5stack.oss-cn-shenzhen.aliyuncs.com/image/easyloader_intro.webp"></div>
        <div class="easyloader-btn">
            <a href="https://m5stack.oss-cn-shenzhen.aliyuncs.com/EasyLoader/Windows/MODULE/EasyLoader_COMX_GSM.exe">Windows</a>
            <a href="https://m5stack.oss-cn-shenzhen.aliyuncs.com/EasyLoader/MacOS/MODULE/EasyLoader_COMX_GSM.dmg">MacOS</a>
        </div>
    </div>
    <div>
        <video id="example_video" controls>
            <source src="https://m5stack.oss-cn-shenzhen.aliyuncs.com/video/Product_example_video/Module/COM.GSM.mp4" type="video/mp4">
        </video>
        <div class="easyloader-mask">
        <a>
            <svg id="play-btn" t="1583228776634" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="4152" width="75" height="75"><path d="M512 0C229.216 0 0 229.216 0 512s229.216 512 512 512 512-229.216 512-512S794.784 0 512 0z m0 928C282.24 928 96 741.76 96 512S282.24 96 512 96s416 186.24 416 416-186.24 416-416 416zM384 288l384 224-384 224z" p-id="4153" fill="#007aff"></path></svg></a>
            <p>Description:</p>
            <p>Power on to test signal quality and network access status</p>
        </div>
    </div>
</div>

## Related Link

- **Datasheet**

    - [SIM800C datasheet](https://m5stack.oss-cn-shenzhen.aliyuncs.com/resource/docs/datasheet/module/SIM800C_datasheet.pdf)

-  **AT Command**
    - [SIM800C AT Command](https://m5stack.oss-cn-shenzhen.aliyuncs.com/resource/docs/datasheet/module/SIM800_Series_AT_Command_Manual_V1.09.pdf)

## Schematic

<img src = "assets/img/product_pics/module/com.x_gsm/com.x_gsm.webp">

### PinMap

<table>
 <tr><td>M5Stack</td><td>TX(GPIO0/13/17)</td><td>RX(GPIO5/15/16)</td><td>5V</td><td>GND</td></tr>
 <tr><td>COM GSM</td><td>RX</td><td>TX</td><td>VIN</td><td>GND</td></tr>
</table>

## MBUS PinMap

<img src="assets\img\product_pics\module\module_bus.webp"/>

## Example

### Arduino IDE

To get complete code, please click [here](https://github.com/m5stack/M5-ProductExampleCodes/tree/master/Module/COMX_GSM)

<el-divider content-position="right">Last updated: 2020-12-23</el-divider>

<script>

   var purchase_link = 'https://m5stack.com/collections/m5-module/products/com-gsm-module-sim800c';

   anchor_search(purchase_link);
   scrollFunc();

</script>
