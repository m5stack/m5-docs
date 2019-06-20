# Unit DAC {docsify-ignore-all}

<img src="assets/img/product_pics/unit/M5GO_Unit_dac.png" width="30%" height="30%"><img src="assets/img/product_pics/unit/unit_dac_grove_a.png" width="30%" height="30%">

***

:memo:**[Description](#Description)**&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;:octocat:**[Example](#Example)**&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;🛒**[Purchase](https://m5stack.com/collections/m5-unit/products/dac-unit)**&nbsp;&nbsp;&nbsp;<img src="https://m5stack.oss-cn-shenzhen.aliyuncs.com/image/EasyLoader_logo-min.jpg">**[EasyLoader](#EasyLoader)**

## Description

**<mark>DAC</mark>** is a unit can convert digital signal to analog signal like voltage waveform, audio waveform and so on. It integrates a 12-bit high resolution DAC chip named **MCP4725** which integrates a on-board non-volatile memory (EEPROM). The unit comunicates with M5Core with I2C. The DAC input and configuration data can be programmed to the EEPROM. I2C address is 0x60.

## Product Features

-  Up to 12 bits of resolution
-  Output 0~3.3V voltage
  GROVE interface, support [UIFlow](http://flow.m5stack.com) and [Arduino](http://www.arduino.cc)
-  Two Lego-compatible holes

## Include

- 1x DAC Unit
- 1x Grove Cable

## APPLICATION

-  MP3 Audio Player
-  mini Oscilloscope

## Related Link

- **[Offical Video](https://www.youtube.com/channel/UCozgFVglWYQXbvTmGyS739w)**

- **[Forum](http://forum.m5stack.com/)**

-  **Datasheet** - [MCP4725](http://pdf1.alldatasheet.com/datasheet-pdf/view/233449/MICROCHIP/MCP4725.html)


## EasyLoader

<img src="https://m5stack.oss-cn-shenzhen.aliyuncs.com/image/EasyLoader_logo.png" width="100px" style="margin-top:20px">

<a href="https://m5stack.oss-cn-shenzhen.aliyuncs.com/EasyLoader/Unit/EasyLoader_DAC.exe"><button type="button" class="btn btn-primary">click to download EasyLoader</button></a>

>1.EasyLoader is a simple and fast program burner, and each product page has a product-related case program for EasyLoader.

>2.After downloading the software, double-click to run the application, connect the M5 device to the computer via the data cable, select the port parameters, and click **"Burn"** to start burning.

!>3.The CP210X (USB driver) needs to be installed before the EasyLoader is burned. [Click here to view the driver installation tutorial](en/related_documents/establish_serial_connection)

## Example

### 1. Arduino IDE

*The code below is incomplete(just for usage). To get the complete code, please click [here](https://github.com/m5stack/M5-ProductExampleCodes/tree/master/Unit/DAC/Arduino).*

```arduino
/*
    hardware : m5stack uint dac
    please install adafruit MCP4725 lib
*/
#include <Wire.h>
#include <Adafruit_MCP4725.h>

// new a object
Adafruit_MCP4725 dac;

// initialization
dac.begin(0x60);
dac.setVoltage(2048, false);

// 12bit value , false mean not write EEPROM
dac.setVoltage(1024, false);// input digital value "1024" to unit
delay(1000);
dac.setVoltage(2048, false);// input digital value "2048" to unit
delay(1000);
```

## Schematic

<img src="assets/img/product_pics/unit/dac_sch.JPG">

### PinMap

<table>
 <tr><td>M5Core(GROVE A)</td><td>GPIO22</td><td>GPIO21</td><td>5V</td><td>GND</td></tr>
 <tr><td>DAC Unit</td><td>SCL</td><td>SDA</td><td>5V</td><td>GND</td></tr>
</table>