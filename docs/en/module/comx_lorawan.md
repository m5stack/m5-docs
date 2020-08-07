# COM.LoRaWAN

<el-tag effect="plain">SKU:M031-C</el-tag>

<div class="product_pic"><img src="assets/img/product_pics/module/com_lorawan/com.lorawan.webp"></div>

## Description

**COM.LoRaWAN**is a LoRaWAN communication module in the M5Stack stackable module series, supporting node-to-node or LoRaWAN communication. The LoRaWAN module based on ASR6501 encapsulates the PSoC4000 and SX1262 chips, supports the 868MHz frequency band, is based on an ultra-low power design, and consumes very low current (3.5μA) in deep sleep mode. In order to facilitate the user to configure the pins, the DIP switch is used to set the hardware serial port pins. The user only needs to switch the corresponding pins to ON as needed and specify the pins in the program. A DC power socket is designed under the module, which can be powered by an external power supply, and an external antenna can be used to obtain better signal quality. This module is especially suitable for remote low-power transmission application scenarios with ultra-low power consumption and ultra-small size as the core requirements.
Since LoRa defines the lower physical layer, the upper networking layers were lacking. LoRaWAN was developed to define the upper layers of the network. LoRaWAN is a media access control (MAC) layer protocol but acts mainly as a network layer protocol for managing communication between LPWAN gateways and end-node devices as a routing protocol,maintained by the LoRa Alliance.You can upgrade your work with a LoRa / LoRaWAN radio, so it can communicate over very long distances and extremely low power consuming.

COM.LoRaWAN serial port settings baud rate: 115200, stop bit: 1, data bit: 8, parity bit: none, terminator: none

?>COM.LoRaWAN RXD/TXD can be connected to M5Stack's UART (TX(0/13/17)RX(5/15/16)) by setting the DIP switch. Since these GPIO in **M5Stack Fire** 16/17 are connected to PSRAM by default. It is recommended to use any set of UART pins in the remaining two groups.

?>The DIP switch on the right is invalid for the LoRaWAN module, no need to set.

## Product Features

-  Stackable design
-  Support LoRa/LoRaWAN
-  Module: Based on ASR6501
-  Frequency Baud:868MHz(EU868)
-  Radio IC: SX1262
-  MasterChip:PSoC® 4000 series MCU (ARM® Cortex® M0+ Core)
-  Interface: UART
-  Protocol：AT Command
-  Compatible Arduino
-  Ultra-low power design

## Include

-  1x LoRaWAN Module
-  1x SMA antenna

## Applications

-  Automatic meter reading
-  Home building automation
-  Remote irrigation system

## Specification

<table>
   <tr style="font-weight:bold">
      <td>Specification</td>
      <td>Parameter</td>
   </tr>
   <tr>
      <td>Frequency Baud</td>
      <td>868MHz</td>
   </tr>
   <tr>
      <td>Communication</td>
      <td>UART</td>
   </tr>
   <tr>
      <td>Protocol</td>
      <td>AT Command</td>
   </tr>
   <tr>
      <td>Net weight</td>
      <td>40g</td>
   </tr>
   <tr>
      <td>Gross weight</td>
      <td>75g</td>
   </tr>
   <tr>
      <td>Product Size</td>
      <td>54.2*54.2*13.2mm</td>
   </tr>
   <tr>
      <td>Package Size</td>
      <td>60*57*17mm</td>
   </tr>
 </table>

## Main countries and regions supported by EU868

**Austria/Belgium/Czech Republic/Denmark/Finland/France/Germany/Italy/Netherlands/Sweden/UK/Angola/Andorra/Bulgaria/Estonia/India/Malta/Philippines/Portugal/Russia/Spain/Switzerland/Zambia**

## EasyLoader

>EasyLoader is a concise and fast program writer, which has a built-in case program related to the product. It can be burned to the main control by simple steps to perform a series of function verification. Please install the corresponding driver according to the device type. M5Core host [Please click here to view the CP210X driver installation tutorial](en/arduino/arduino_development), M5StickC/V/T/ATOM series can be used without driver)

<div class="easyloader-box">
    <div style="background-color:white;">
        <div><img src="https://m5stack.oss-cn-shenzhen.aliyuncs.com/image/easyloader_intro.webp"></div>
        <div class="easyloader-btn">
            <a href="https://m5stack.oss-cn-shenzhen.aliyuncs.com/EasyLoader/Windows/MODULE/EasyLoader_COM_LoraWAN.zip">Windows</a>
            <a href="https://m5stack.oss-cn-shenzhen.aliyuncs.com/EasyLoader/MacOS/MODULE/EasyLoader_COM_LoraWAN.zip">MacOS</a>
        </div>
    </div>
    <div>
        <video id="example_video" controls>
            <source src="https://m5stack.oss-cn-shenzhen.aliyuncs.com/video/Product_example_video/Module/COM.LoraWAN.mp4" type="video/mp4">
        </video>
        <div class="easyloader-mask">
        <a>
            <svg id="play-btn" t="1583228776634" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="4152" width="75" height="75"><path d="M512 0C229.216 0 0 229.216 0 512s229.216 512 512 512 512-229.216 512-512S794.784 0 512 0z m0 928C282.24 928 96 741.76 96 512S282.24 96 512 96s416 186.24 416 416-186.24 416-416 416zM384 288l384 224-384 224z" p-id="4153" fill="#007aff"></path></svg></a>
            <p>Description:</p>
            <p>One master and one slave, the slave presses the Button_A to send a message and the master receives</p>
        </div>
    </div>
</div>


## PinMap

| *HTCC-AM01_UART* | *ESP32 Chip* |
| :----------: |:------------: |
| RXD       | TXD(GPIO0/13/17)    |
| TXD      | RXD(GPIO5/15/16)     |


## Related Link

- **[LoRaWAN AT Command](https://m5stack.oss-cn-shenzhen.aliyuncs.com/resource/docs/datasheet/module/CubeCell_Series_AT_Command_User_Manual_V0.5.pdf)**

- **[LoRaWAN Area parameters](https://m5stack.oss-cn-shenzhen.aliyuncs.com/resource/docs/datasheet/module/lorawantm_regional_parameters_v1.1rb_-_final.pdf)**

## Schematic

<img src="assets/img/product_pics/module/com_lorawan/com.lorawan_sch.webp">

## Example

### Arduino IDE

[Click here to get Arduino example](https://github.com/m5stack/M5-ProductExampleCodes/tree/master/Module/COM_LoRaWAN/Arduino)

### UIFlow

[Click here to download](https://github.com/m5stack/M5-ProductExampleCodes/tree/master/Module/COM_LoRaWAN/UIFlow)

<script>

   var purchase_link = '';


   anchor_search(purchase_link);
   scrollFunc();

</script>