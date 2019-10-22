# Module GSM {docsify-ignore-all}

<img src="assets/img/product_pics/module/gsm/gsm_01.jpg" width="30%" height="30%">&nbsp;&nbsp;&nbsp; <img src="assets/img/product_pics/module/gsm/gsm_02.jpg" width="30%" height="30%"> 
***

:memo:**[Description](#Description)**&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;:electric_plug:**[Schematic](#Schematic)**&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;:octocat:**[Code](#Code)**&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<img src="https://m5stack.oss-cn-shenzhen.aliyuncs.com/image/EasyLoader_logo-min.jpg">**[EasyLoader](#EasyLoader)** &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;🛒**[Purchase](https://m5stack.com/collections/m5-module/products/m5stack-gsm-module)**

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

<img src="assets/img/product_pics/module/gsm/gsm_03.jpg" width="50%" height="50%"> <img src="assets/img/product_pics/module/gsm/gsm_04.jpg" width="50%" height="50%"> <img src="assets/img/product_pics/module/gsm/NanoSIM.jpeg" width="50%" height="50%"> 
<br><br><br>

*The Global System for Mobile Communications (GSM) is a standard developed by the European Telecommunications Standards Institute (ETSI) to describe the protocols for second-generation (2G) digital cellular networks used by mobile devices such as mobile phones and tablets.*

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

## Application

-  M2M industrial
-  Wireless communication 
-  Industrial Application

## Links


-  **Datasheet** - [MC6315](https://m5stack.oss-cn-shenzhen.aliyuncs.com/resource/docs/datasheet/module/M6315_cn.pdf)

-  **Datasheet** - [MC6315 AT Command](https://m5stack.oss-cn-shenzhen.aliyuncs.com/resource/docs/datasheet/module/M6315%20AT_Command_Interface_Specification_cn.pdf)



## Schematic

- [GSM Module](https://github.com/m5stack/M5-Schematic/blob/master/Modules/module_gsm_sch.pdf)


## EasyLoader

<img src="https://m5stack.oss-cn-shenzhen.aliyuncs.com/image/EasyLoader_logo.png" width="100px" style="margin-top:20px">

<a href="https://m5stack.oss-cn-shenzhen.aliyuncs.com/EasyLoader/Module/EasyLoader_GSM_MODULE.exe"><button type="button" class="btn btn-primary">click to download EasyLoader</button></a>

>1.EasyLoader is a simple and fast program burner. Every product page in EasyLoader provides a product-related case program. It can be burned to the master through simple steps, and a series of function verification can be performed.(**Currently EasyLoader is only available for Windows OS**)

>2.After downloading the software, double-click to run the application, connect the M5 device to the computer via the data cable, select the port parameters, and click **"Burn"** to start burning.

!>3.The CP210X (USB driver) needs to be installed before the EasyLoader is burned. [Click here to view the driver installation tutorial](en/related_documents/M5Burner#install-usb-driver)


## Code

### 1. Arduino IDE

*To get complete code, please click [here](https://github.com/m5stack/M5-ProductExampleCodes/tree/master/Module/GSM/Arduino).*

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
//AT+CSQ=?
void get_time(void){
  IotWriteCommand("CSQ=?",NULL);
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
}


```

### Pin Map

<table>
 <tr><td>M5Stack</td><td>GPIO16</td><td>GPIO17</td><td>5V</td><td>GND</td></tr>
 <tr><td>Module GSM</td><td>RX</td><td>TX</td><td>5V</td><td>GND</td></tr>
</table>

