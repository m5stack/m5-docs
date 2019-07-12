# Module LTE {docsify-ignore-all}

<img src="assets/img/product_pics/module/lte/lte_01.jpg" width="30%" height="30%">&nbsp;&nbsp;&nbsp;<img src="assets/img/product_pics/module/lte/lte_02.jpg" width="30%" height="30%"> 

***

:memo:**[Description](#Description)**&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;:electric_plug:**[Schematic](#Schematic)**&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;:octocat:**[Code](#Code)**&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<img src="https://m5stack.oss-cn-shenzhen.aliyuncs.com/image/EasyLoader_logo-min.jpg">**[EasyLoader](#EasyLoader)** &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;🛒**[Purchase](https://m5stack.com/collections/m5-module/products/m5stack-lte-module)**

## Description

This is a wireless communication module, integrated an **NB-IOT** M8321  module that released by China Mobile, provided TD-LTE/FDD-LTE/WCDMA/TD- SCDMA/GSM/GPRS/EDGE Frequency Band and LCC+LGA package type.
<br><br>
It has integrated plentiful Internet protocols, field standard interface, and functions,  supported WindowsXP,Windows7,Windows8,Windows10,Linux and Android USB driver.
<br><br>
In the LTE-4G module scheme, we added more hardware resources, 1 reserved speaker solder panel, 3 LEDs, exported USB interface, double antennea allowed.
<br><br>
M8321  is 4V power input, so in the hardware of LTE-4G module, we added a Bidirectional Voltage-Level Translator (TXS0104E), to switch the power supply to 4V. 

<img src="assets/img/product_pics/module/lte/lte_03.jpg" width="50%" height="50%">
<br>

*In telecommunication, Long-Term Evolution (LTE) is a standard for wireless broadband communication for mobile devices and data terminals, based on the GSM/EDGE and UMTS/HSPA technologies. It increases the capacity and speed using a different radio interface together with core network improvements.*

## Product Features
Product Feature:
- Double Antenna
-  Resolved Speaker on board(I2S)
- Power Input: 5V
- Serial Communication: Uart2 16/17
- M8321
    - Tem：-40°C ~ + 85°C
    - Frequency Band:
        - LTE-TDD：B38/B39/B40/B41 
        - LTE-FDD：B1/B3/B8 
        - TD-SCDMA：B34/B39
        - WCDMA：B1/B8
        - GSM(MHz)：900/1800
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

## Application

-  M2M industrial
-  Vehicle-mounted 
-  Video 
-  Security
- CPE
-  Router
- POC

<!-->
<a href="https://m5stack.oss-cn-shenzhen.aliyuncs.com/EasyLoader/Module/EasyLoader_SIM800L_at.exe"><button type="button" class="btn btn-primary">Click to check the list: frequency band of Globle mobile operators </button></a>
<-->
## Links

-  **Datasheet** - [M8321](http://iot.10086.cn/Uploads/file/product/20190216/M8321_%E4%BA%A7%E5%93%81%E6%89%8B%E5%86%8C_20190216184322_87691.pdf)

-  **Datasheet** - [TXS0104E](http://iot.10086.cn/Uploads/file/product/20190216/M5311_AT_Command_Interface_Specification_v2_20190216181452_37713.pdf)
  
## Schematic
-  **Sche** - [GSM Module](https://github.com/m5stack/M5-Schematic/blob/master/Modules/module_lte_sch.pdf)



## EasyLoader

<img src="https://m5stack.oss-cn-shenzhen.aliyuncs.com/image/EasyLoader_logo.png" width="100px" style="margin-top:20px">

<a href="https://m5stack.oss-cn-shenzhen.aliyuncs.com/EasyLoader/Module/EasyLoader_LTE_MODULE.exe"><button type="button" class="btn btn-primary">click to download EasyLoader</button></a>

>1.EasyLoader is a simple and fast program burner, and each product page has a product-related case program for EasyLoader.

>2.After downloading the software, double-click to run the application, connect the M5 device to the computer via the data cable, select the port parameters, and click **"Burn"** to start burning.

!>3.Please make sure you have CP210X（USB driver) on you computer[Click here for driver installation tutorial](zh_CN/related_documents/M5Burner#安装串口驱动)

## Code

### 1. Arduino IDE

*To get complete code, please click [here](https://github.com/m5stack/M5-ProductExampleCodes/tree/master/Module/LTE/Arduino).*

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
  IotWriteCommand(NULL,NULL);
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
 <tr><td>M5Stack</td><td>GPIO16</td><td>GPIO17</td><td>5V</td><td>GND</td></tr>
 <tr><td>HAT ADC</td><td>RX</td><td>TX</td><td>5V</td><td>GND</td></tr>
</table>


<!--## Video
**Demo** 

<video width="500" height="500" controls>
    <source src="https://m5stack.oss-cn-shenzhen.aliyuncs.com/video/Product_example_video/HAT/ADC-DAC-HAT.mp4" type="video/mp4" >
</video>
-->




