# Module GSM

<div class="badge badge-pill badge-primary product_sku_tag">SKU:M026</div>

<div class="product_pic"><img src="assets/img/product_pics/module/gsm/gsm_01.webp">&nbsp;&nbsp;&nbsp; <img src="assets/img/product_pics/module/gsm/gsm_02.webp"> </div>

## Description

This is a 2G and industrial wireless communication module, integrated an GSM/GPRS module M6315, released by China Mobile,
supported GPRS class12 and GPRS CS-1, CS-2, CS-3, CS-4 encode, M6315 has LCC package type, features tiny dimension, highly reliability, strong anti-interference capability. 
<br>
It can apply to the comunication requirement on diversity industrial, electricity, petroleum, transportation, financial, etc  
<br>
In the GSM module scheme, we added more hardware resources, 1 reserved speaker- SPK1, 1 onboard speaker-SPK2, LEDs, 2 alternative antenna.
<br>
M6315  is 2.8V power input, so in the hardware of GSM module, we added a Bidirectional Voltage-Level Translator (TXS0104E), to switch the power supply to 2.8V. 
<br><br>

Power Operation:
- Power On: GPIO2 stay HIGH for 2s
- Power Off: GPIO2 stay HIGH for 8s
- Power On: Button long-press for 2s
- Power Off: Button long-press for 8s
- Reset module: GPIO26 HIGH

<img src="assets/img/product_pics/module/gsm/gsm_03.webp" width="30%" height="30%"> <img src="assets/img/product_pics/module/gsm/gsm_04.webp" width="30%" height="30%"> <img src="assets/img/product_pics/module/gsm/NanoSIM.jpeg" width="30%" height="30%"> 
<br><br><br>

*The Global System for Mobile Communications (GSM) is a standard developed by the European Telecommunications Standards Institute (ETSI) to describe the protocols for second-generation (2G) digital cellular networks used by mobile devices such as mobile phones and tablets.*

!> **M5Stack Fire** has occupied GPIO16 / 17 to connect with the PSRAM by default, it's conflict with TXD / RXD (GPIO16, GPIO17) of GSM module. Therefore, when using the GSM module with the M5Stack Fire, you might have to cut the TXD and RXD from GSM module and wire fly to another set of UART pin

## Product Features
Product Feature:
- Serial communication: Uart 16/17
- Alternative Antenna
- GSM 2G industrial level
- SIM card type: Nano
- 2x LEDs
- 2X speakers: SPK1 reserved, SPK2 connected to PIN25
- M6315
    - Tem:-40°C ~ + 85°C
    - Frequency Band（MHz:
        - 850/900/1800/1900 
    - Data Transmit:
        - spped: (kbps) 85.6(UL)/85.6(DL) 
        - GPRS:  Class12
        - SMS: supported PDU/TEXT mode
        - Network Protocol: IPV4/IPV6*/TCP/UDP/PPP/HTTP/FTP/MQTT 
    - Consumption:
        - <2mA@DRX=5 
- Product Size:54.2mm x 54.2mm x 12.8mm
- Product weight:12.8g

## Include

- 1x GSM module 

## Applications

-  M2M industrial
-  Wireless communication 
-  Industrial Application

## Links

-  **Datasheet** - [MC6315](https://m5stack.oss-cn-shenzhen.aliyuncs.com/resource/docs/datasheet/module/M6315_cn.pdf)

-  **Datasheet** - [MC6315 AT Command](https://m5stack.oss-cn-shenzhen.aliyuncs.com/resource/docs/datasheet/module/M6315%20AT_Command_Interface_Specification_cn.pdf)

### Pin Map

<table>
 <tr><td>M5Stack</td><td>GPIO16</td><td>GPIO17</td><td>5V</td><td>GND</td></tr>
 <tr><td>Module GSM</td><td>RX</td><td>TX</td><td>5V</td><td>GND</td></tr>
</table>


## Schematic

- [GSM Module](https://github.com/m5stack/M5-Schematic/blob/master/Modules/module_gsm_sch.pdf)

## EasyLoader

<img src="https://m5stack.oss-cn-shenzhen.aliyuncs.com/image/EasyLoader_logo.webp" width="100px" style="margin-top:20px">

<a href="https://m5stack.oss-cn-shenzhen.aliyuncs.com/EasyLoader/Module/EasyLoader_GSM_MODULE.exe"><button type="button" class="btn btn-primary">click to download EasyLoader</button></a>

>1.EasyLoader is a simple and fast program burner. Every product page in EasyLoader provides a product-related case program. It can be burned to the master through simple steps, and a series of function verification can be performed.(**Currently EasyLoader is only available for Windows OS**)

>2.After downloading the software, double-click to run the application, connect the M5 device to the computer via the data cable, select the port parameters, and click **"Burn"** to start burning.

!>3.The CP210X (USB driver) needs to be installed before the EasyLoader is burned. [Click here to view the driver installation tutorial](en/related_documents/M5Burner#install-usb-driver)


## Example

### 1. Arduino IDE

To get complete code, please click [here](https://github.com/m5stack/M5Stack/tree/master/examples/Modules/GSM_M6315)

<script>

   var purchase_link = 'https://m5stack.com/collections/m5-module/products/m5stack-gsm-module';

   anchor_search(purchase_link);
   scrollFunc();

</script>