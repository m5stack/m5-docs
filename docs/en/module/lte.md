# Module LTE

<el-tag effect="plain">SKU:M027</el-tag>

<div class="product_pic"><img src="assets/img/product_pics/module/lte/lte_01.webp">&nbsp;&nbsp;&nbsp;<img src="assets/img/product_pics/module/lte/lte_02.webp"></div>

## Description

This is a wireless communication module, integrated **M8321**  module that released by China Mobile, provided TD-LTE/FDD-LTE/WCDMA/TD- SCDMA/GSM/GPRS/EDGE Frequency Band and LCC+LGA package type.
It has integrated plentiful Internet protocols, field standard interface, and functions,  supported WindowsXP,Windows7,Windows8,Windows10,Linux and Android USB driver.
In the LTE-4G module scheme, we added more hardware resources, 1 reserved speaker solder panel, 3 LEDs, exported USB interface, double antennea allowed.
M8321  is 4V power input, so in the hardware of LTE-4G module, we added a Bidirectional Voltage-Level Translator (TXS0104E), to switch the power supply to 4V.

<img src="assets/img/product_pics/module/lte/lte_03.webp" width="50%" height="50%">
<img src="assets/img/product_pics/module/lte/NanoSIM.jpeg" width="50%" height="50%">
<br>

*In telecommunication, Long-Term Evolution (LTE) is a standard for wireless broadband communication for mobile devices and data terminals, based on the GSM/EDGE and UMTS/HSPA technologies. It increases the capacity and speed using a different radio interface together with core network improvements.*

!> **M5Stack Fire** has occupied GPIO16 / 17 to connect with the PSRAM by default, it's conflict with TXD / RXD (GPIO16, GPIO17) of LTE module. Therefore, when using the LTE module with the M5Stack Fire, you might have to cut the TXD and RXD from LTE module and wire fly to another set of UART pin

## Product Features

Product Feature:
- Double Antenna
- Resolved Speaker on board(I2S)
- Power Input: 5V
- Serial Communication: Uart2 16/17
- M8321
    - Tem:-40°C ~ + 85°C
    - Frequency Band:
        - LTE-TDD：B38/B39/B40/B41 
        - LTE-FDD：B1/B3/B8 
        - TD-SCDMA：B34/B39
        - WCDMA：B1/B8
        - GSM(MHz):900/1800
    - Data Transmit:
        - LTE speed: (Mbps) LTE-FDD 50(UL)/150(DL)　LTE-TDD 50(UL)/100(DL)
        - HSPA+ speed: (Mbps) 5.76(UL)/21.6(DL)
        - TD-SCDMA speed: (Mbps) 2.2(UL)/2.8(DL)
        - EDGE speed: (Kbps) 384(UL)/384(DL)
        - GPRS speed: (Kbps) 85.6(UL)/85.6(DL)
        - SMS supported PDU/TEXT mode
        - Network Protocol: IPV4/IPV6/TCP/PPP/UDP/FTP/HTTP/NTP 
    - Comsuption:
        - 17uA@Poweroff 
        - 3mA@Sleep 
        - 45mA@Idle

## Include

- 1x Antenna
- 1x LTE module 

## Applications

-  M2M industrial
-  Vehicle-mounted 
-  Video 
-  Security
-  CPE
-  Router
-  POC

## Specification

<table>
   <tr style="font-weight:bold">
      <td>Resources</td>
      <td>Parameter</td>
   </tr>
   <tr>
      <td>net weight</td>
      <td>18g</td>
   </tr>
   <tr>
      <td>Gross weight</td>
      <td>29g</td>
   </tr>
   <tr>
      <td>Product Size</td>
      <td>54.2*54.2*12.8mm</td>
   </tr>
   <tr>
      <td>Package Size</td>
      <td>60*57*17mm</td>
   </tr>
 </table>

## Related Link

-  **Datasheet** - [M8321](https://m5stack.oss-cn-shenzhen.aliyuncs.com/resource/docs/datasheet/module/M8321_cn.pdf)

-  **Datasheet** - [M8321 AT Command](https://m5stack.oss-cn-shenzhen.aliyuncs.com/resource/docs/datasheet/module/M8321%20AT_Command_Interface_Specification_cn.pdf)

### Pin Map

<table>
 <tr><td>M5Stack</td><td>GPIO16</td><td>GPIO17</td><td>5V</td><td>GND</td></tr>
 <tr><td>Module LTE</td><td>RX</td><td>TX</td><td>5V</td><td>GND</td></tr>
</table>

## Schematic

- [LTE Module](https://m5stack.oss-cn-shenzhen.aliyuncs.com/resource/docs/schematic/Modules/module_lte_sch.pdf)

## EasyLoader

<img src="https://m5stack.oss-cn-shenzhen.aliyuncs.com/image/EasyLoader_logo.webp" width="100px" style="margin-top:20px">

<a href="https://m5stack.oss-cn-shenzhen.aliyuncs.com/EasyLoader/Module/EasyLoader_LTE_MODULE.exe"><button type="button" class="btn btn-primary">click to download EasyLoader</button></a>

>1.EasyLoader is a simple and fast program burner. Every product page in EasyLoader provides a product-related case program. It can be burned to the master through simple steps, and a series of function verification can be performed.(**Currently EasyLoader is only available for Windows OS**)

>2.After downloading the software, double-click to run the application, connect the M5 device to the computer via the data cable, select the port parameters, and click **"Burn"** to start burning.

!>3.The CP210X (USB driver) needs to be installed before the EasyLoader is burned. [Click here to view the driver installation tutorial](en/related_documents/M5Burner#install-usb-driver)

## Example

### 1. Arduino IDE

To get complete code, please click [here](https://github.com/m5stack/M5Stack/tree/master/examples/Modules/LTE_M8321)

<script>

   var purchase_link = 'https://m5stack.com/collections/m5-module/products/m5stack-lte-module';

   anchor_search(purchase_link);
   scrollFunc();

</script>