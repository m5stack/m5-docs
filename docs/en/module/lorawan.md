# Module LoRaWAN

<div class="badge badge-pill badge-primary product_sku_tag">SKU:M018</div>

<div class="product_pic"><img src="assets/img/product_pics/module/module_lorawan_01.webp"><img src="assets/img/product_pics/module/module_lorawan_02.webp"></div>

## Description

**LoRaWAN** build with RHF76-052 and optional Antennas. RHF76-052 is designed by Ai-Thinker, it is a LoRaWAN ™ UART modem & compatible device, supports LoRaWAN communication. It's based on the RHF76-052 module and an embeded LoRaWAN stack. You can use M5 core as a host MCU to control this this modem with simple AT command or UART.

Since LoRa defines the lower physical layer, the upper networking layers were lacking. LoRaWAN was developed to define the upper layers of the network. LoRaWAN is a media access control (MAC) layer protocol but acts mainly as a network layer protocol for managing communication between LPWAN gateways and end-node devices as a routing protocol,maintained by the LoRa Alliance.

you can upgrade your work with a LoRa / LoRaWAN radio, so it can communicate over very long distances and extrmely low power consuming.


By default, the UART configuration: "9600, 8, n, 1"(8 bits data, no parity, 1 stop bit)

*Notice: The 5 holes which are under the silk screen "LoRaWAN" are designed for upgrading the firmware of LoRaWAN module.*

## Product Features

-  Build-in PCB Antenna
-  External Antenna Port
-  Model: RHF76-052
-  Supports dual-band 433 / 470MHz and 868 / 915MHz
-  Radio IC: Semtech SX1276
-  Microcontroller: STM32L052C8T6
-  interface: UART
-  Protocol: AT commands
-  Embedded LoRaWAN protocol stack
-  Link budget: 160dB
-  Protocol: LoRaWAN


## Include

-  1x LoRaWAN Module

## Applications

-  Automatic meter reading
-  Home building automation
-  Remote irrigation system

## Specification

<table>
   <tr style="font-weight:bold">
      <td>Resources</td>
      <td>Parameter</td>
   </tr>
   <tr>
      <td>net weight</td>
      <td>16g</td>
   </tr>
   <tr>
      <td>Gross weight</td>
      <td>28g</td>
   </tr>
   <tr>
      <td>Product Size</td>
      <td>54.2*54.2*12.8mm</td>
   </tr>
   <tr>
      <td>Package Size</td>
      <td>60*57*17mm</td>
   </tr>
   <tr>
      <td>Work temperature</td>
      <td>-40 ~+85C</td>
   </tr>
   <tr>
      <td>Storage temperature</td>
      <td>-40 ~ +90C, < 90% RH </td>
   </tr>
 </table>

## EasyLoader

<img src="https://m5stack.oss-cn-shenzhen.aliyuncs.com/image/EasyLoader_logo.webp" width="100px" style="margin-top:20px">

<a href="https://m5stack.oss-cn-shenzhen.aliyuncs.com/EasyLoader/Module/EasyLoader_lorawan_receiver.exe"><button type="button" class="btn btn-primary">click to download EasyLoader</button></a>

>1.EasyLoader is a simple and fast program burner. Every product page in EasyLoader provides a product-related case program. It can be burned to the master through simple steps, and a series of function verification can be performed.(**Currently EasyLoader is only available for Windows OS**)

>2.After downloading the software, double-click to run the application, connect the M5 device to the computer via the data cable, select the port parameters, and click **"Burn"** to start burning.

!>3.The CP210X (USB driver) needs to be installed before the EasyLoader is burned. [Click here to view the driver installation tutorial](en/related_documents/M5Burner#install-usb-driver)

## Pin Map

| *RHF76-052_UART* | *ESP32 Chip* |
| :----------: |:------------: |
| RXD       | GPIO17    |
| TXD      | GPIO16     |

**M5Stack Fire** has occupied GPIO16 / 17 to connect with the PSRAM by default, it's conflict with TXD / RXD (GPIO16, GPIO17) in this module. Therefore, when using the LoRaWAN module with the M5Stack Fire, you might have to cut the TXD and RXD from LoRaWAN module and wire fly to another set of UART pin

## Related Link

- **[LoRaWAN Datasheet](https://m5stack.oss-cn-shenzhen.aliyuncs.com/resource/docs/datasheet/module/LoRa_rhf76-052datasheet_v0.2_cn.pdf) (LoRaWAN)**

- **[LoRaWAN User Manual](https://m5stack.oss-cn-shenzhen.aliyuncs.com/resource/docs/datasheet/module/lorawan_modem_-_cn.pdf)**

- **[AT command for LoRaWAN](https://m5stack.oss-cn-shenzhen.aliyuncs.com/resource/docs/datasheet/module/lorawan_class_ac_at_command_specification_-_v4.4.pdf)**

- **[LoRaWAN Regional Parameters](https://m5stack.oss-cn-shenzhen.aliyuncs.com/resource/docs/datasheet/module/lorawantm_regional_parameters_v1.1rb_-_final.pdf)**

## Example

### 1. Arduino IDE

This is a exmaple of p2p LoRaWAN modules communication. Reference to `3.6 Point to Point communication with LoRa` of [LoRaWAN User Manual](http://wiki.ai-thinker.com/_media/lora/docs/rhf76-052_ho_to_use_ai-thinker_s_lorawan_modem.pdf).

**Function:**
Press button B to set 433MHz as LoRaWAN operating frequency, and send "Hello World";
Press button C to set 868MHz as LoRaWAN operating frequency and send "Hello World";
Press button A to clear the screen.

**Note:** Befor compiling this program, please extract `LoRaWan_for_M5Stack.rar` to this path `C:\Users\<user_name>\Documents\Arduino\libraries`.

The below code is incomplete. To get the complete code, please click [here](https://github.com/m5stack/M5Stack/tree/master/examples/Modules/LoRaWAN_RHF76_052)

<img src="assets/img/product_pics/module/module_example/LORAWAN/example_module_lorawan_01.webp">

## Schematic

<img src="assets/img/product_pics/module/lorawan_sch.webp">


<script>

   var purchase_link = 'https://www.aliexpress.com/store/product/M5Stack-New-LoRaWAN-Module-433-470Mhz-868-915MHz-with-Internal-Antenna-and-MCX-External-Antenna-Port/3226069_32953098569.html?spm=a2g1y.12024536.productList_5885011.pic_2';

   anchor_search(purchase_link);
   scrollFunc();

</script>