# Unit ADC {docsify-ignore-all}

<img src="assets/img/product_pics/unit/M5GO_Unit_adc.png" width="30%" height="30%">

***

:memo:**[Description](#Description)**&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;:octocat:**[Example](#Example)**&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; :electric_plug:**[Schematic](#Schematic)** &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;🛒**[Purchase](https://m5stack.com/collections/m5-unit/products/adc-unit)**&nbsp;&nbsp;&nbsp;<img src="https://m5stack.oss-cn-shenzhen.aliyuncs.com/image/EasyLoader_logo-min.jpg">**[EasyLoader](#EasyLoader)**

## Description

**ADC** integrated with ADS1100 which is a fully differential, 16-bit, self-calibrating,delta-sigma A/D converter.
It communicates through an I2C interface,which means you can collect AD data thru PortA on M5 core from this unit to enhence your A/D performance.

The I2C address is 0x48.

### Product Specification

- COMPLETE DATA ACQUISITION SYSTEM IN A
   TINY SOT23-6 PACKAGE
- 16-BITS NO MISSING CODES
- INL: 0.0125% of FSR MAX
- CONTINUOUS SELF-CALIBRATION
- SINGLE-CYCLE CONVERSION
- PROGRAMMABLE GAIN AMPLIFIER
GAIN = 1, 2, 4, OR 8
- LOW NOISE: 4µVp-p
- PROGRAMMABLE DATA RATE: 8SPS to 128SPS
- INTERNAL SYSTEM CLOCK
- I2CTM INTERFACE
- POWER SUPPLY: 2.7V to 5.5V
- LOW CURRENT CONSUMPTION: 90µA
- AVAILABLE IN EIGHT DIFFERENT ADDRESSES
- Two Lego-compatible holes
- Product Size：32.5mm x 24.1mm x 10.2mm
- Product weight：5.9g

## APPLICATION

-  ECG signal acquisition
-  Blood pressure measurement
-  Dynamometer

## Include

- 1x ADC unit
- 1x GROVE Cable
- 1x HT3.96 Male Socket(2 pins)

## Related Link

-  **Datasheet** - [ADS1100](https://m5stack.oss-cn-shenzhen.aliyuncs.com/resource/docs/datasheet/unit/ADS1100_en.pdf)

## EasyLoader

<img src="https://m5stack.oss-cn-shenzhen.aliyuncs.com/image/EasyLoader_logo.png" width="100px" style="margin-top:20px">

<a href="https://m5stack.oss-cn-shenzhen.aliyuncs.com/EasyLoader/Unit/EasyLoader_ADC.exe"><button type="button" class="btn btn-primary">click to download EasyLoader</button></a>

>1.EasyLoader is a simple and fast program burner. Every product page in EasyLoader provides a product-related case program. It can be burned to the master through simple steps, and a series of function verification can be performed. .

>2. After downloading the software, double-click to run the application, connect the M5 device to the computer through the data cable, select the port parameters, click **"Burn"** to start burning. (**For M5StickC burning, please Set the baud rate to 750000 or 115200**)

?> 3. Currently EasyLoader is only suitable for Windows operating system, compatible with M5 system adopts ESP32 as the control core host. Before installing for M5Core, you need to install CP210X driver (you do not need to install with M5StickC as controller)[Click here to view the driver installation tutorial](en/related_documents/M5Burner#install-usb-driver)

## Example

### 1. Arduino IDE

*The below code is incomplete(just for usage). If you want the complete code, please click [here](https://github.com/m5stack/M5-ProductExampleCodes/tree/master/Unit/ADC/Arduino/ADC_ADS1100).*

```arduino
#include <M5Stack.h>
#include <Wire.h>
#include "ADS1100.h"

#define ADS1100_DEFAULT_ADDRESS 0x48

// declaration
byte error;
int8_t address;

//new a object
ADS1100 ads;

// initialization
M5.begin(true, false, false);
ads.getAddr_ADS1100(ADS1100_DEFAULT_ADDRESS);// 0x48, 1001 000 (ADDR = GND)
ads.setGain(GAIN_ONE);          // 1x gain(default)
ads.setMode(MODE_CONTIN);       // Continuous conversion mode (default)
ads.setRate(RATE_8);            // 8SPS (default)
ads.setOSMode(OSMODE_SINGLE);   // Set to start a single-conversion
ads.begin();

// read data
address = ads.ads_i2cAddress;
Wire.beginTransmission(address);
Wire.endTransmission();
ads.Measure_Differential();
```

### 2. UIFlow

*If you want the complete code, please click [here](https://github.com/m5stack/M5-ProductExampleCodes/tree/master/Unit/ADC/UIFlow).*

<img src="assets/img/product_pics/unit/unit_example/ADC/example_unit_adc_01.png">

## Schematic

<img src="assets/img/product_pics/unit/adc_sch.JPG">

### PinMap

<table>
 <tr><td>M5Core ( GROVE A )</td><td>GPIO22</td><td>GPIO21</td><td>5V</td><td>GND</td></tr>
 <tr><td>ADC Unit</td><td>SCL</td><td>SDA</td><td>5V</td><td>GND</td></tr>
</table>