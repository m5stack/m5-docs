# Module SigFox

<el-tag effect="plain">SKU:M031-F</el-tag>

<div class="product_pic"><img src="assets/img/product_pics/module/com.x_sigfox/sigfox.webp">

## Description

**SigFox Module** is a universal wireless module suitable for SigFox communication and Tracker equipment in the COM.X series. The module is SFM11R3, and the internal RF chip is AX-SFJK-1-01. It supports RC3 and RC5. The transmission frequency band is 923.2 MHz, receiving frequency band is 922.2 MHz, and the bandwidth is 192KHz. In order to facilitate the user to configure the pins, the DIP switch is used to set the hardware serial port pins. The user only needs to switch the corresponding pins to ON and specify the pins in the program. A DC power socket is designed under the module, which can be powered by an external power source.


?>COM.SigFox RXD/TXD can be connected to M5Stack's UART (TX(0/13/17)RX(5/15/16)) by setting the DIP switch. Since these GPIO in **M5Stack Fire** 16/17 are connected to PSRAM by default. It is recommended to use any set of UART pins in the remaining two groups.

?>The DIP switch on the right is invalid for the LoRaWAN module, no need to set.

<img src="assets/img/product_pics/module/nb-iot/module_nbiot_note01.webp" width="100%">

## Product Features

-  Stackable design
-  Support RC3/RC5
-  Module: Based on SFM11R3
-  Bandwidth: 192KHz
-  Interface: UART
-  Protocol：AT Command
-  Tx Output power : +13dBm(max)
-  Rx Sensitivity : -127dBm@600bps
-  Ultra-low power design


## Include

- 1x SigFox module

## Applications

- Smart Parking 
- Smart Meter 
- IoT in City

## Specification

<table>
   <tr style="font-weight:bold">
      <td>Resources</td>
      <td>Parameter</td>
   </tr>
   <tr>
      <td>Baudwidth</td>
      <td>192KHz</td>
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
      <td>net weight</td>
      <td>27g</td>
   </tr>
      <td>Gross weight</td>
      <td>62g</td>
   </tr>
   <tr>
      <td>Product Size</td>
      <td>54.2*54.2*13.2mm</td>
   </tr>
   <tr>
      <td>Package Size</td>
      <td>165*60*37mm</td>
   </tr>
 </table>


 ## EasyLoader

>EasyLoader is a concise and fast program writer, which has a built-in case program related to the product. It can be burned to the main control by simple steps to perform a series of function verification. Please install the corresponding driver according to the device type. M5Core host [Please click here to view the CP210X driver installation tutorial](en/arduino/arduino_development), M5StickC/V/T/ATOM series can be used without driver)

<div class="easyloader-box">
    <div style="background-color:white;">
        <div><img src="https://m5stack.oss-cn-shenzhen.aliyuncs.com/image/easyloader_intro.webp"></div>
        <div class="easyloader-btn">
            <a href="https://m5stack.oss-cn-shenzhen.aliyuncs.com/EasyLoader/Windows/MODULE/EasyLoader_COM_Sigfox.exe">Windows</a>
            <a href="https://m5stack.oss-cn-shenzhen.aliyuncs.com/EasyLoader/MacOS/MODULE/EasyLoader_COM.SigFox.dmg">MacOS</a>
            <!-- <a>Linux</a>
            <a>MacOS</a> -->
        </div>
    </div>
    <div>
        <video id="example_video" controls>
            <source src="" type="video/mp4">
        </video>
        <div class="easyloader-mask">
        <a>
            <svg id="play-btn" t="1583228776634" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="4152" width="75" height="75"><path d="M512 0C229.216 0 0 229.216 0 512s229.216 512 512 512 512-229.216 512-512S794.784 0 512 0z m0 928C282.24 928 96 741.76 96 512S282.24 96 512 96s416 186.24 416 416-186.24 416-416 416zM384 288l384 224-384 224z" p-id="4153" fill="#007aff"></path></svg></a>
            <p>Description:</p>
            <p>(DIP Switch)TX/RX 16/17, every  60 seconds to send "00FFEE"</p>
        </div>
    </div>
</div>


## Related Link

- **Datasheet** 

  - [SFM11R3](https://m5stack.oss-cn-shenzhen.aliyuncs.com/resource/docs/datasheet/module/DS_SFM11R3000_REV05.pdf)

### Pin Map

<table>
 <tr><td>M5Stack</td><td>TXD(GPIO0/13/17)</td><td>RXD(GPIO5/15/16)</td><td>3.3V</td><td>GND</td></tr>
 <tr><td>Module SigFox</td><td>RX</td><td>TX</td><td>3.3V</td><td>GND</td></tr>
</table>

## Schematic

<img src="assets/img/product_pics/module/com.x_sigfox/com.x_sigfox_sch.webp">

## Usage

Debugging method: 

1. Download and Install [Sigfox Network Emulator](https://support.sigfox.com/downloads/snek.exe), and run snek.vbs
2. Insert SDR Dongle
3. Open Sigfox Network Emulator
4. Setting Radio config
5. upload Arduino code
6. Fill in the device ID displayed on the screen into the list
7. View the message

<img src="assets/img/product_pics/module/com.x_sigfox/sigfox_1.webp" width = "50"><img src="docs/assets/img/product_pics/module/com.x_sigfox/sigfox_2.webp" width = "50"><img src="docs/assets/img/product_pics/module/com.x_sigfox/sigfox_3.webp" width = "50">

## Example

### 1. Arduino IDE

To get complete code, please click [here](https://github.com/m5stack/M5-ProductExampleCodes/tree/master/Module/COMX_SigFox)

<script>

   var purchase_link = '';

   anchor_search(purchase_link);
   scrollFunc();

</script>