# NB-IoT Plus

<el-tag effect="plain">SKU:M030</el-tag>

<div class="product_pic"><img src="assets/img/product_pics/module/nb-iot-plus/nb_iot_plus_01.webp"><img src="assets/img/product_pics/module/nb-iot-plus/nb_iot_plus_02.webp"></div>

## Description

**NB-IoT Plus** is a wireless communication module, integrated with the NB-IoT **M5311-GB** module from China Mobile. It supports multiple frequency bands such as B1 / B3 / B5 / B8 / B20 / B28. It's very tiny form factor gives more convenience for applications with flexible dimension requirement. It comes with a built-in copper helical antenna, and also an IPEX connector, reserved for adding an external antenna to obtain better signal strength.Package with LCC allows quick production through standard SMT, which provides a more reliable connection method and performance in extreme environments.The power requirement of this M5311-GB module is as low as 2.1V,it supports and can fully utilize the power of AA battery, to provide an extremely low-power-consumption solution for field deployed terminal devices.M5311 provides abundant external interfaces and protocol stacks, and also support for peripheral sensors, etc.Based on M5311-GB, we have offered extra hardware resources to the NB-IoT Module, WUP and STA LEDs, 3 alternative UARTs, a power button, and support for two alternative antennae.

Power Operation:
- Power On: GPIO2 stay HIGH for 2s
- Power Off: GPIO2 stay HIGH for 8s
- Power On: Button long-press for 2s
- Power Off: Button long-press for 8s
- Reset module: GPIO26 HIGH
<br>

<img src="assets/img/product_pics/module/nb-iot-plus/NanoSIM.jpeg" width="30%" height="30%">
<img src="assets/img/product_pics/module/nb-iot-plus/nb_iot_plus_04.webp" width="30%" height="30%">
<img src="assets/img/product_pics/module/nb-iot-plus/nb_iot_plus_05.webp" width="30%" height="30%">    
<br><br>

*More info about NB-IoT: NarrowBand-Internet of Things (NB-IoT) is a standards-based low power wide area (LPWA) technology developed to enable a wide range of new IoT devices and services. NB-IoT significantly improves the power consumption of user devices, system capacity and spectrum efficiency, especially in deep coverage. Battery life of more than 10 years can be supported for a wide range of use cases.Supported by all major mobile equipment, chipset and module manufacturers, NB-IoT can co-exist with 2G, 3G, and 4G mobile networks. It also benefits from all the security and privacy features of mobile networks, such as support for user identity confidentiality, entity authentication, confidentiality, data integrity, and mobile equipment identification. NB-IoT focuses specifically on indoor coverage, low cost, long battery life, and high connection density. NB-IoT uses a subset of the LTE standard, but limits the bandwidth to a single narrow-band of 200kHz. It uses OFDM modulation for downlink communication and SC-FDMA for uplink communications*

!> **M5Stack Fire** has occupied GPIO16 / 17 to connect with the PSRAM by default, it's conflict with TXD / RXD (GPIO16, GPIO17) of NB-IoT Plus module. Therefore, when using the NB-IoT Plus module with the M5Stack Fire, you might have to cut the TXD and RXD from NB-IoT Plus module and wire fly to another set of UART pin

## Product Features
- Serial communication: UART
- Product Power in : 5V
- Serial Communication: UART2 (GPIO16/17)
- 2x antenna: Helical / External 
- WUP, STA LEDs
- 1x Power Button
- Nano SIM
- M5311-GB
	- Package: LCC
	- Frequency Band: B3/B8/B5
    - Tem:-40°C ~ 85°C 
    - NB-IoT support LTE Cat NB2*
    - LTE Cat NB1 speed (kbps):
    - Single Tone:15.625(UL)/21.25(DL)
	  - Multi Tone:62.5(UL)/21.25(DL)
    - SMS:  PDU/TEXT mode
    - Network Protocol: 
        - IPv4/IPv6/UDP/TCP/ 
        - CoAP/LwM2M/HTTP/MQTT/TLS
    - Sensitivity: 
        - Turn on retransmission :-130db
        - Turn off retransmission :-114db
    - power in: 
      - 2.1V ~ 3.6V,Typ 3.3V  (Low-Voltage version) 
      - & 3.0V ~ 3.6V,Typ 3.3V (Fixed-Voltage version)
    - Consumption: 
      - 3uA@PSM 0.4mA@ldle mode(DRx=1.28S)
      - 167mA@Tx(23dBm/15kHzST) 54mA@Rx
      - output power: 23dBm±2dB
    - Certificate: CCC/SRRC/NAL/GTI

## Include

- 1x NB-IoT Plus module 

## Applications

- Smart Wearable device
- Smart Parking 
- Smart Meter 
- Deployed IoT sensors in and around cities
- Farm Monitorning systems
- industrial Navigation and Monitorning

## Specification

<table>
   <tr style="font-weight:bold">
      <td>Resources</td>
      <td>Parameter</td>
   </tr>
   <tr>
      <td>net weight</td>
      <td>13g</td>
   </tr>
   <tr>
      <td>Gross weight</td>
      <td>24g</td>
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

## Some national carrier frequency bands

only for reference

<table>
 <tr><td>North America</td><td>B4 (1700), B12 (700), B66 (1700), B71 (600), B26 (850) </td></tr>
 <tr><td>Asia Pacific</td><td>B1(2100), B3(1800), B5(850), B8(900), B18(850), B20(800), B26(850),B28(700)</td></tr>
 <tr><td>Europe:</td><td> B3 (1800), B8 (900) , B20 (800) </td></tr>
 <tr><td>Latin America</td><td>B2(1900), B3(1800), B5(850), B28(700) </td></tr>
 <tr><td>Commonwealth of Independent States</td><td>B3 (1800), B8 (900), B20 (800)</td></tr>
 <tr><td>Sub-Saharan Africa</td><td>B3(1800), B8(900) </td></tr>
 <tr><td>Middle East, North Africa</td><td>B8(900), B20(800)</td></tr>
</table>

## Related Link

- **Datasheet** 
  - [M5311](https://m5stack.oss-cn-shenzhen.aliyuncs.com/resource/docs/datasheet/module/M5311_cn.pdf)

-  **AT Command** 
  - [M5311 AT Command](https://m5stack.oss-cn-shenzhen.aliyuncs.com/resource/docs/datasheet/module/M5311_AT_Command_Interface_Specification_en.pdf)

### Pin Map

<table>
 <tr><td>M5Stack</td><td>GPIO16</td><td>GPIO17</td><td>3.3V</td><td>GND</td></tr>
 <tr><td>Module NB-IoT Plus</td><td>RX</td><td>TX</td><td>3.3V</td><td>GND</td></tr>
</table>

## Schematic

- [NB-IoT Plus Module](https://m5stack.oss-cn-shenzhen.aliyuncs.com/resource/docs/schematic/Modules/module_nb_iot_sch.pdf)

## EasyLoader

<img src="https://m5stack.oss-cn-shenzhen.aliyuncs.com/image/EasyLoader_logo.webp" width="100px" style="margin-top:20px">

<a href="https://m5stack.oss-cn-shenzhen.aliyuncs.com/EasyLoader/Module/EasyLoader_NBIOT_PLUS_MODULE.exe"><button type="button" class="btn btn-primary">click to download EasyLoader</button></a>

>1.EasyLoader is a simple and fast program burner. Every product page in EasyLoader provides a product-related case program. It can be burned to the master through simple steps, and a series of function verification can be performed.(**Currently EasyLoader is only available for Windows OS**)

>2.After downloading the software, double-click to run the application, connect the M5 device to the computer via the data cable, select the port parameters, and click **"Burn"** to start burning.

!>3.The CP210X (USB driver) needs to be installed before the EasyLoader is burned. [Click here to view the driver installation tutorial](en/related_documents/M5Burner#install-usb-driver)

## Example

### 1. Arduino IDE

To get example code, please click [here](https://github.com/m5stack/M5Stack/tree/master/examples/Modules/NB-IoT-PLUS_M5311GB)

<script>

   var purchase_link = 'https://m5stack.com/collections/m5-module/products/m5stack-nb-iot-plus-module-m5311-gb';

   anchor_search(purchase_link);
   scrollFunc();

</script>

