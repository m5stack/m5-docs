# Unit ADC {docsify-ignore-all}

<img src="assets/img/product_pics/unit/M5GO_Unit_adc.png" width="30%" height="30%"><img src="assets/img/product_pics/unit/unit_adc_grove_a.png" width="30%" height="30%">

***

:memo:**[Description](#Description)**&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;:octocat:**[Example](#Example)**&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; :electric_plug:**[Schematic](#Schematic)** &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;🛒**[Purchase](https://www.aliexpress.com/store/product/M5Stack-Official-ADC-Unit-16-Bit-I2C-GROVE-ADS1100-Module-0V-to-12V-analog-to-digital/3226069_32946953374.html?spm=a2g1x.12024536.productList_5885013.pic_7)**

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

## APPLICATION

-  ECG signal acquisition
-  Blood pressure measurement
-  Dynamometer

## Include

- 1x ADC unit
- 1x GROVE Cable
- 1x HT3.96 Male Socket(2 pins)

## Related Link

- **[Offical Video](https://www.youtube.com/channel/UCozgFVglWYQXbvTmGyS739w)**

- **[Forum](http://forum.m5stack.com/)**

-  **Datasheet** - [ADS1100](http://pdf1.alldatasheet.com/datasheet-pdf/view/619024/TI1/ADS1100.html)

## Example

### Mini Burner

>1.Mini Burner is a simple and fast program burner, and each product page has a product-related case program for Mini Burner.
[Click here to download](https://m5stack.oss-cn-shenzhen.aliyuncs.com/MiniBurner/Unit/MiniBurner_ADC_ADS1100.exe)

>2.After downloading the software, double-click to run the application, connect the M5 device to the computer via the data cable, select the port parameters, and click **"Burn"** to start burning.

!>3.The CP210X (USB driver) needs to be installed before the Mini Burner is burned. [Click here to view the driver installation tutorial](en/related_documents/establish_serial_connection)

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