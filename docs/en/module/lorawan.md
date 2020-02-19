# Module LoRaWAN {docsify-ignore-all}

<img src="assets/img/product_pics/module/module_lorawan_01.png" width="30%" height="30%"> <img src="assets/img/product_pics/module/module_lorawan_02.png" width="30%" height="30%">


## Description

**LoRaWAN** build with RHF76-052 and optional Antennas. RHF76-052 is designed by Ai-Thinker, it is a LoRaWAN ™ UART modem & compatible device, supports LoRaWAN communication. It's based on the RHF76-052 module and an embeded LoRaWAN stack. You can use M5 core as a host MCU to control this this modem with simple AT command or UART.

Since LoRa defines the lower physical layer, the upper networking layers were lacking. LoRaWAN was developed to define the upper layers of the network. LoRaWAN is a media access control (MAC) layer protocol but acts mainly as a network layer protocol for managing communication between LPWAN gateways and end-node devices as a routing protocol,maintained by the LoRa Alliance.

you can upgrade your work with a LoRa / LoRaWAN radio, so it can communicate over very long distances and extrmely low power consuming.


By default, the UART configuration: "9600, 8, n, 1"(8 bits data, no parity, 1 stop bit)

*Notice: The 5 holes which are under the silk screen "LoRaWAN" are designed for upgrading the firmware of LoRaWAN module.*

## Product Features

-  Build-in PCB Antenna
-  External Antenna Port
-  Product Size：54.2mm x 54.2mm x 12.8mm
-  Product weight：17.5g

### LoRaWAN Module Specification

- Model: RHF76-052
- Supports dual-band 433 / 470MHz and 868 / 915MHz
- Radio IC: Semtech SX1276
- Microcontroller: STM32L052C8T6
- Package: SMD-33
- Size: 28 x 23 x 3 mm
- Weight: 3.2g
- interface: UART
- Protocol: AT commands
- Embedded LoRaWAN protocol stack
- Frequency: 868/915 MHz
- TXOP: 20dBm @ 868MHz/915MHz
- Link budget: 160dB
- Antenna: external (via PCB pad)
- Supply voltage range: 1.8 ~ 3.6V
- Typical supply voltage: 3.3V
- Current usage in sleep mode: 1.45uA
- Protocol: LoRaWAN
- Work temperature: -40 ~+85C
- Storage temperature: -40 ~ +90C, <90% RH
- Certification: FCC, CE, IC, TELEC

## Include

-  1x LoRaWAN Module

## Applications

-  Automatic meter reading
-  Home building automation
-  Remote irrigation system

## PinMap

| *RHF76-052_UART* | *ESP32 Chip* |
| :----------: |:------------: |
| RXD       | GPIO17    |
| TXD      | GPIO16     |

**M5Stack Fire** has occupied GPIO16 / 17 to connect with the PSRAM by default, it's conflict with TXD / RXD (GPIO16, GPIO17) in this module. Therefore, when using the LoRaWAN module with the M5Stack Fire, you might have to cut the TXD and RXD from GPS module and wire fly to another set of UART pin

## Related Link

- **[LoRaWAN Datasheet](https://m5stack.oss-cn-shenzhen.aliyuncs.com/resource/docs/datasheet/module/LoRa_rhf76-052datasheet_v0.2_cn.pdf) (LoRaWAN)**

- **[LoRaWAN User Manual](https://m5stack.oss-cn-shenzhen.aliyuncs.com/resource/docs/datasheet/module/lorawan_modem_-_cn.pdf)**

- **[AT command for LoRaWAN](https://m5stack.oss-cn-shenzhen.aliyuncs.com/resource/docs/datasheet/module/lorawan_class_ac_at_command_specification_-_v4.4.pdf)**

- **[LoRaWAN Regional Parameters](https://m5stack.oss-cn-shenzhen.aliyuncs.com/resource/docs/datasheet/module/lorawantm_regional_parameters_v1.1rb_-_final.pdf)**


## EasyLoader

<img src="https://m5stack.oss-cn-shenzhen.aliyuncs.com/image/EasyLoader_logo.png" width="100px" style="margin-top:20px">

<a href="https://m5stack.oss-cn-shenzhen.aliyuncs.com/EasyLoader/Module/EasyLoader_lorawan_receiver.exe"><button type="button" class="btn btn-primary">click to download EasyLoader</button></a>

>1.EasyLoader is a simple and fast program burner. Every product page in EasyLoader provides a product-related case program. It can be burned to the master through simple steps, and a series of function verification can be performed.(**Currently EasyLoader is only available for Windows OS**)

>2.After downloading the software, double-click to run the application, connect the M5 device to the computer via the data cable, select the port parameters, and click **"Burn"** to start burning.

!>3.The CP210X (USB driver) needs to be installed before the EasyLoader is burned. [Click here to view the driver installation tutorial](en/related_documents/M5Burner#install-usb-driver)


## Example

### Arduino IDE

This is a exmaple of p2p LoRaWAN modules communication. Reference to `3.6 Point to Point communication with LoRa` of [LoRaWAN User Manual](http://wiki.ai-thinker.com/_media/lora/docs/rhf76-052_ho_to_use_ai-thinker_s_lorawan_modem.pdf).

**Function:**
Press button B to set 433MHz as LoRaWAN operating frequency, and send "Hello World";
Press button C to set 868MHz as LoRaWAN operating frequency and send "Hello World";
Press button A to clear the screen.

**Note:** Befor compiling this program, please extract `LoRaWan_for_M5Stack.rar` to this path `C:\Users\<user_name>\Documents\Arduino\libraries`.

*The below code is incomplete. To get the complete code, please click [here](https://github.com/m5stack/M5-ProductExampleCodes/tree/master/Module/LORAWAN/Arduino).*

```arduino
/*
    device_A.ino
*/
#include <M5Stack.h>
#include <LoRaWan.h>

#define SerialUSB Serial

// declaration
M5.begin();
SerialUSB.begin(9600);
lora.init();
delay(2000); // must delay for lorawan power on

// 433MHz frequency initialization
lora.initP2PMode(433, SF12, BW500, 8, 8, 20);

// 868MHz frequency initialization
lora.initP2PMode(868, SF12, BW500, 8, 8, 20);

// send string
lora.transferPacketP2PMode("hello world");

// receive data
short length = 0;
short rssi = 0;
memset(buffer, 0, 128);
length = lora.receivePacketP2PMode(buffer, 128, &rssi, 1);
```

```arduino
/*
    device_B.ino
*/
#include <M5Stack.h>
#include <LoRaWan.h>

#define SerialUSB Serial

// declaration
M5.begin();
SerialUSB.begin(9600);
lora.init();
delay(2000); // must delay for lorawan power on

// 433MHz frequency initialization
lora.initP2PMode(433, SF12, BW500, 8, 8, 20);

// 868MHz frequency initialization
lora.initP2PMode(868, SF12, BW500, 8, 8, 20);

// send string
lora.transferPacketP2PMode("hello world");

// receive data
short length = 0;
short rssi = 0;
memset(buffer, 0, 128);
length = lora.receivePacketP2PMode(buffer, 128, &rssi, 1);
```

<img src="assets/img/product_pics/module/module_example/LORAWAN/example_module_lorawan_01.png">

## Schematic

<img src="assets/img/product_pics/module/lorawan_sch.png">


<script>

   var purchase_link = 'https://www.aliexpress.com/store/product/M5Stack-New-LoRaWAN-Module-433-470Mhz-868-915MHz-with-Internal-Antenna-and-MCX-External-Antenna-Port/3226069_32953098569.html?spm=a2g1y.12024536.productList_5885011.pic_2';

   anchor_search(purchase_link);
   scrollFunc();

</script>