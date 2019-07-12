# Module LTE {docsify-ignore-all}

<img src="assets/img/product_pics/module/module_sim800_01.png" width="30%" height="30%"> <img src="assets/img/product_pics/module/module_sim800_02.png" width="30%" height="30%">

***

:memo:**[Description](#Description)**&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;:electric_plug:**[Schematic](#Schematic)**&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;:octocat:**[Code](#Code)**&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<img src="https://m5stack.oss-cn-shenzhen.aliyuncs.com/image/EasyLoader_logo-min.jpg">**[EasyLoader](#EasyLoader)** &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;🛒**[Purchase](https://m5stack.com/collections/m5-unit/products/m5stickc-dac-hat-mcp4725)**

## Description

This is a wireless communication module, integrated an **NB-IOT** M8321  module that released by China Mobile, provided TD-LTE/FDD-LTE/WCDMA/TD- SCDMA/GSM/GPRS/EDGE Frequency Band and LCC+LGA package type.
<br>
It has integrated plentiful Internet protocols, field standard interface, and functions,  supported WindowsXP、Windows7 、Windows8、 Windows10、Linux and Android USB driver.
<br>
In the LTE-4G module scheme, we added more hardware resources, 1 reserved speaker solder panel, 3 LEDs, exported USB interface, double antennea allowed.
<br>
M8321  is 4V power input, so in the hardware of LTE-4G module, we added a Bidirectional Voltage-Level Translator (TXS0104E), to switch the power supply to 4V. 

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
        LTE-TDD：B38/B39/B40/B41 
        LTE-FDD：B1/B3/B8△ 
        TD-SCDMA：B34/B39△ 
        WCDMA：B1/B8△ 
        GSM(MHz)：900/1800
    - Data Transmit:
        LTE speed (Mbps) LTE-FDD 50(UL)/150(DL)△　LTE-TDD 50(UL)/100(DL)
        HSPA+ speed (Mbps) 5.76(UL)/21.6(DL)△
        TD-SCDMA speed (Mbps) 2.2(UL)/2.8(DL)△
        EDGE speed (Kbps) 384(UL)/384(DL)
        GPRS speed (Kbps) 85.6(UL)/85.6(DL)
        SMS supported PDU/TEXT mode
        Network Protocol IPV4/IPV6/TCP/PPP/UDP/FTP/HTTP/NTP
    - Interface：
        USIM ×1(1.8V/3.0V) 
        Digital Audio(PCM) supported 
        UART ×3 
        USB: 2.0 Hi-Speed 
        I2C sopported 
        ADC ×2(12bits) 
        GSM(MHz)：900/1800
        Double antenna：main & diversity
        GPIO ×3（M8321） 
    - Comsuption:
        17uA@Poweroff 
        3mA@Sleep 
        45mA@Idle

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

<a href="https://m5stack.oss-cn-shenzhen.aliyuncs.com/EasyLoader/Module/EasyLoader_SIM800L_at.exe"><button type="button" class="btn btn-primary">Click to check the list: frequency band of Globle mobile operators </button></a>

## Links

-  **Datasheet** - [MCP4725](http://pdf1.alldatasheet.com/datasheet-pdf/view/233449/MICROCHIP/MCP4725.html)
  
## Schematic

<img src="assets/img/product_pics/hat/dac_hat/dac_hat_04.jpg" width="80%" height="80%">



## EasyLoader

<img src="https://m5stack.oss-cn-shenzhen.aliyuncs.com/image/EasyLoader_logo.png" width="100px" style="margin-top:20px">

<a href="https://m5stack.oss-cn-shenzhen.aliyuncs.com/EasyLoader/HAT/DAC/EasyLoader_DAC_HAT.exe"><button type="button" class="btn btn-primary">click to download EasyLoader</button></a>

>1.EasyLoader is a simple and fast program burner, and each product page has a product-related case program for EasyLoader.

>2.After downloading the software, double-click to run the application, connect the M5 device to the computer via the data cable, select the port parameters, and click **"Burn"** to start burning.

## Code

### 1. Arduino IDE

*To get complete code, please click [here](https://github.com/m5stack/M5StickC/blob/master/examples/Hat/DAC).*

```arduino
#include <M5StickC.h>
#include <Wire.h>
#include "Adafruit_MCP4725.h"
#define DAC_ADDR
Adafruit_MCP4725 dac;

void setup(void) {
    M5.begin(true,true,false);
    dac.begin(0x60);
    dac.setVoltage(2048, false);

}

void loop(void) {
    // 12bit value , false mean not write EEPROM   
    dac.setVoltage(1024, false);
    dac.setVoltage(2048, false);   
}

```

### Pin Map

<table>
 <tr><td>M5StickC</td><td>GPIO0</td><td>GPIO26</td><td>5V</td><td>GND</td></tr>
 <tr><td>HAT ADC</td><td>SDA</td><td>SCL</td><td>5V</td><td>GND</td></tr>
</table>


<!--## Video
**Demo** 

<video width="500" height="500" controls>
    <source src="https://m5stack.oss-cn-shenzhen.aliyuncs.com/video/Product_example_video/HAT/ADC-DAC-HAT.mp4" type="video/mp4" >
</video>
-->




