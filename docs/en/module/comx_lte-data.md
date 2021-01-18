# COM.LTE-DATA

<el-tag effect="plain">SKU:M031-E</el-tag>

<div class="product_pic"><img src="assets/img/product_pics/module/com.x_lte-data/comx_lte-data.webp"><img src="assets/img/product_pics/module/com.x_lte-data/comx_lte-data_2.webp">
</div>

## Description

**COM.LTE-DATA** is a stackable multifunctional LTE communication module with built-in LTE communication module A7600C, supporting LTE-TDD/LTE-FDD/EDGE/GPRS and GSM frequency bands, and the transmission rate is LTE.CAT1 standard.

Its performance is stable, the appearance is small and well designed, the cost performance is high and can transmit data with low power consumption. The module has a DC power input and can provide 5V-12V power supply through an external power supply.

In order to facilitate the user to configure the pin, the DIP switch is used to set the pin. This module is especially suitable for remote meter reading, smart phones, smart wearables, smart parking, municipal management and other IoT industries with low power consumption and compact size as the core requirements.

>COM.LTE-DATA RXD/TXD can be connected to M5Stack's UART (TX(0/13/17)RX(5/15/16)) by setting the DIP switch, GPIO in **M5Stack Fire** 16/17 It is connected to PSRAM by default. It is recommended to use any one of the remaining two groups of pins.

>Dial the DIP switch on the side of the audio configuration pin to ON when in use

## Product Features

- Stackable design
- Independent external power supply
- AT command control
- SIM card type: MicroSIM
- Status signal: two LED indicators
- External antenna: SMA antenna
- Serial communication: UART 115200bps


- Frequency band:
    - LTE-TDD B34/B38/B39/B40/B41
    - LTE-FDD B1/B3/B5/B8
    - GSM/GPRS/EDGE 900/1800 MHz*

- Data transmission speed:
    - LTE Cat 1
        - (UL) 5Mbps
        - (DL) 10Mbps
    - EDGE
        - UL/DL 236.8Kbps
    - GPRS
        - UL/DL 85.6Kbps

- Protocol
    - TCP/IP/IPV4/IPV6/MultiPDP/FTP/FTPS/HTTP/HTTPS/DNS
    - RNDIS/PPP/ECM
    - SSL

## Include

-  1x COM.LTE-DATA module
-  1x SMA antenna

## Applications

- Smart meter
- Smart parking
- Municipal management

## Specification

<table>
   <tr style="font-weight:bold">
      <td>Resources</td>
      <td>Parameter</td>
   </tr>
   <tr>
      <td>Frequency band</td>
      <td>LTE-FDD/LTE-TDD/WCDMA/GSM</td>
   </tr>
   <tr>
      <td>Network protocol</td>
      <td>TTCP/IP/IPV4/IPV6/ Multi-PDP/FTP/FTPS/HTTP/ HTTPS/DNS etc.</td>
   </tr>
   <tr>
      <td>Communication</td>
      <td>UART 115200bps</td>
   </tr>
   <tr>
      <td>Net Weight</td>
      <td>54g</td>
   </tr>
   <tr>
      <td>Gross Weight</td>
      <td>89g</td>
   </tr>
   <tr>
      <td>Product Size</td>
      <td>54.2*54.2*13.2mm</td>
   </tr>
   <tr>
      <td>Package Size</td>
      <td>165*60*36mm</td>
   </tr>
 </table>

### Operator frequency bands in some countries

The following content is for reference only.

<table>
 <tr><td>North America</td><td>B4 (1700), B12 (700), B66 (1700), B71 (600), B26 (850) </td></tr>
 <tr><td>Asia Pacific</td><td>B1(2100), B3(1800), B5(850), B8(900), B18(850), B20(800), B26(850),B28(700)</td></tr>
 <tr><td>Europe:</td><td> B3 (1800), B8 (900) , B20 (800) </td></tr>
 <tr><td>Latin America</td><td>B2(1900), B3(1800), B5(850), B28(700) </td></tr>
 <tr><td>Commonwealth of Independent States</td><td>B3 (1800), B8 (900), B20 (800)</td></tr>
 <tr><td>Sub-Saharan Africa</td><td>B3(1800), B8(900) </td></tr>
 <tr><td>Middle East, North Africa</td><td>B8(900), B20(800)</td></tr>
</table>

## EasyLoader

>EasyLoader is a concise and fast program writer, which has a built-in case program related to the product. It can be burned to the main control by simple steps to perform a series of function verification. Please install the corresponding driver according to the device type. M5Core host [Please click here to view the CP210X driver installation tutorial](en/arduino/arduino_development), M5StickC/V/T/ATOM series can be used without driver)

<div class="easyloader-box">
    <div style="background-color:white;">
        <div><img src="https://m5stack.oss-cn-shenzhen.aliyuncs.com/image/easyloader_intro.webp"></div>
        <div class="easyloader-btn">
            <a href="https://m5stack.oss-cn-shenzhen.aliyuncs.com/EasyLoader/Windows/MODULE/EasyLoader_COM_LTE_DATA.exe">Windows</a>
            <a href="https://m5stack.oss-cn-shenzhen.aliyuncs.com/EasyLoader/MacOS/MODULE/EasyLoader_COM_LTE_DATA.dmg">MacOS</a>
        </div>
    </div>
    <div>
        <video id="example_video" controls>
            <source src="https://m5stack.oss-cn-shenzhen.aliyuncs.com/video/Product_example_video/Module/COM.LTE-DATA.mp4" type="video/mp4">
        </video>
        <div class="easyloader-mask">
        <a>
            <svg id="play-btn" t="1583228776634" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="4152" width="75" height="75"><path d="M512 0C229.216 0 0 229.216 0 512s229.216 512 512 512 512-229.216 512-512S794.784 0 512 0z m0 928C282.24 928 96 741.76 96 512S282.24 96 512 96s416 186.24 416 416-186.24 416-416 416zM384 288l384 224-384 224z" p-id="4153" fill="#007aff"></path></svg></a>
            <p>Description:</p>
            <p>Check signal strength,Register to the network,5 and 13 of the DIP switch are set to ON.</p>
        </div>
    </div>
</div>



## Related Link

-  **AT Command**
    - [A7600C AT command](https://m5stack.oss-cn-shenzhen.aliyuncs.com/resource/docs/datasheet/module/SIM7500_SIM7600%20Series_AT%20Command%20Manual%20_V1.10.pdf)


## Schematic

<img src = "assets/img/product_pics/module/com.x_lte-data/com.x_lte-data_sch.webp">

### PinMap

<table>
 <tr><td>M5Stack</td><td>TX(GPIO0/13/17)</td><td>RX(GPIO5/15/16)</td><td>5V</td><td>GND</td></tr>
 <tr><td>COM.LTE-DATA</td><td>RX</td><td>TX</td><td>VIN</td><td>GND</td></tr>
</table>

## Example

To get complete code, please click [here](https://github.com/m5stack/M5-ProductExampleCodes/tree/master/Module/COMX_LTE-DATA)

<el-divider content-position="right">Last updated: 2020-12-24</el-divider>

<script>

   var purchase_link = 'https://m5stack.com/collections/m5-module/products/com-lte-data-modulea7600c';

   anchor_search(purchase_link);
   scrollFunc();

</script>
