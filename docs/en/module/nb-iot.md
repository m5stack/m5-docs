# Module NB-IoT {docsify-ignore-all}

<img src="assets/img/product_pics/module/nb-iot/nb_iot_01.jpg" width="30%">&nbsp;&nbsp;&nbsp; <img src="assets/img/product_pics/module/nb-iot/nb_iot_02.jpg" width="30%"> 
<img src="assets/img/product_pics/module/nb-iot/NanoSIM.jpeg" width="60%" height="60%">

***

:memo:**[Description](#Description)**&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;:electric_plug:**[Schematic](#Schematic)**&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;:octocat:**[Code](#Code)**&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<img src="https://m5stack.oss-cn-shenzhen.aliyuncs.com/image/EasyLoader_logo-min.jpg">**[EasyLoader](#EasyLoader)** &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;🛒**[Purchase](https://m5stack.com/collections/m5-module/products/m5stack-nb-iot-module)**

## Description

This is a wireless communication module, integrated an **NB-IoT** M5311  module that produced by China Mobile. The dimension if M5311 is 16mm * 18mm * 2.2mm, which is very tiny, and gives convenience to the user of more flexible dimension requirement.  
<br>
package with LCC allows quick production through standard SMT, which provides a more reliable connection method and performance on the extreme environment. 
<br>
the power requirement of this M5311 module is down to 2.1V, AA battery supported, it can fully utilize the power of AA battery, to provide an extremely low-power-consumption solution for terminal devices.
<br>
M5311 provides abundant external interfaces and protocol stacks, support peripheral sensors, etc.
<br>
Based on M5311, we have offered extra hardware resources on NB-IoT Module, WUP, STA LEDs, 3 alternative UARTs, one power button, and 2 alternative antennae.  
<br><br>

Power Operation:
- Power On: GPIO2 stay HIGH for 2s
- Power Off: GPIO2 stay HIGH for 8s
- Power On: Button long-press for 2s
- Power Off: Button long-press for 8s
- Reset module: GPIO26 HIGH
<br>

<img src="assets/img/product_pics/module/nb-iot/nb_iot_03.jpg" width="50%" height="50%"><img src="assets/img/product_pics/module/nb-iot/nb_iot_04.jpg" width="50%" height="50%">  
<br><br>

*More info about NB-IoT: NarrowBand-Internet of Things (NB-IoT) is a standards-based low power wide area (LPWA) technology developed to enable a wide range of new IoT devices and services. NB-IoT significantly improves the power consumption of user devices, system capacity and spectrum efficiency, especially in deep coverage. Battery life of more than 10 years can be supported for a wide range of use cases.Supported by all major mobile equipment, chipset and module manufacturers, NB-IoT can co-exist with 2G, 3G, and 4G mobile networks. It also benefits from all the security and privacy features of mobile networks, such as support for user identity confidentiality, entity authentication, confidentiality, data integrity, and mobile equipment identification. NB-IoT focuses specifically on indoor coverage, low cost, long battery life, and high connection density. NB-IoT uses a subset of the LTE standard, but limits the bandwidth to a single narrow-band of 200kHz. It uses OFDM modulation for downlink communication and SC-FDMA for uplink communications*

## Product Features
- Serial communication: UART
- Product Power in : 5V
- Serial Communication: Uart2 16/17
- 2x antenna: Spring / External 
- WUP, STA LEDs
- 1x Power Button
- Nano SIM
- M5311
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
    - power in: 
      - 2.1V ~ 3.6V,Typ 3.3V  (Low-Voltage version) 
      - & 3.0V ~ 3.6V,Typ 3.3V (Fixed-Voltage version)
    - Consumption: 
      - 3uA@PSM 0.4mA@ldle mode(DRx=1.28S)
      - 167mA@Tx(23dBm/15kHzST) 54mA@Rx
      -output power: 23dBm±2dB
    - Certificate: CCC/SRRC/NAL/GTI
- Product Size:54.2mm x 54.2mm x 12.8mm
- Product weight:13.3g

## Include

- 1x Nano Iot SIM card
- 1x NB-IoT module 

## Application

- Smart Wearable device
- Smart Parking 
- Smart Meter 
- IoT in City


### Some national carrier frequency bands

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


## Links

-  **Datasheet** - [M5311 AT Command](https://github.com/m5stack/M5-Schematic/blob/master/datasheet/NB-IOT-MODULE/M5311_AT_Command_Interface_Specification_v2_20190216181452_37713.pdf)

- **User Manual** - [M5311](http://iot.10086.cn/Uploads/file/product/20190216/M5311_%E4%BA%A7%E5%93%81%E6%89%8B%E5%86%8C_20190216181514_33229.pdf)

-  **Datasheet** - [TXS0104E](http://iot.10086.cn/Uploads/file/product/20190216/M5311_AT_Command_Interface_Specification_v2_20190216181452_37713.pdf)


  
## Schematic

- [NB-IoT Module](https://github.com/m5stack/M5-Schematic/blob/master/Modules/module_nb_iot_sch.pdf)


## EasyLoader

<img src="https://m5stack.oss-cn-shenzhen.aliyuncs.com/image/EasyLoader_logo.png" width="100px" style="margin-top:20px">

<a href="https://m5stack.oss-cn-shenzhen.aliyuncs.com/EasyLoader/Module/EasyLoader_NBIOT_MODULE.exe"><button type="button" class="btn btn-primary">click to download EasyLoader</button></a>

>1.EasyLoader is a simple and fast program burner. Every product page in EasyLoader provides a product-related case program. It can be burned to the master through simple steps, and a series of function verification can be performed.(**Currently EasyLoader is only available for Windows OS**)

>2.After downloading the software, double-click to run the application, connect the M5 device to the computer via the data cable, select the port parameters, and click **"Burn"** to start burning.

!>3.The CP210X (USB driver) needs to be installed before the EasyLoader is burned. [Click here to view the driver installation tutorial](en/related_documents/M5Burner#install-usb-driver)

## Code

### 1. Arduino IDE

*To get complete code, please click [here](https://github.com/m5stack/M5-ProductExampleCodes/blob/master/Module/NB_IOT/Arduino/NB_IOT.ino).*

```arduino
#include <M5Stack.h>

void IotWriteCommand(char cmd[],char date[]){
  char buf[256] = {0};

  if(cmd == NULL)
  sprintf(buf,"AT\r\n");
  else if(date == NULL)
  sprintf(buf,"AT+%s\r\n",cmd);
  else
  sprintf(buf,"AT+%s=%s\r\n",cmd,date);
  
  Serial2.write(buf);
}

void get_time(void){
  IotWriteCommand("CCLK?",NULL);
  while(Serial2.available()){
    uint8_t ch = Serial2.read();
    Serial.write(ch);
    M5.Lcd.write(ch);
  }
}

void setup() {
  M5.begin();

  Serial.begin(115200);
  Serial2.begin(115200, SERIAL_8N1, 16, 17);
  pinMode(5, OUTPUT);
  digitalWrite(5, 1);
}


void loop() {
 if(M5.BtnA.wasReleased()){
    M5.Lcd.fillScreen(TFT_BLACK); 
    M5.Lcd.setCursor(60,80,2);
    get_time();
  }
  M5.update();
}

```

### Pin Map

<table>
 <tr><td>M5Stack</td><td>GPIO16</td><td>GPIO17</td><td>3.3V</td><td>GND</td></tr>
 <tr><td>Module NB-IoT</td><td>RX</td><td>TX</td><td>3.3V</td><td>GND</td></tr>
</table>






