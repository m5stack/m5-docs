# Unit ADC {docsify-ignore-all}

<img src="assets/img/product_pics/unit/M5GO_Unit_adc.png" width="30%" height="30%"><img src="assets/img/product_pics/unit/unit_adc_grove_a.png" width="30%" height="30%">

***

:memo:**[Description](#Description)**&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;:octocat:**[Example](#Example)**&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; :electric_plug:**[Schematic](#Schematic)** &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;🛒**[Purchase](https://www.aliexpress.com/store/product/M5Stack-Official-ADC-Unit-16-Bit-I2C-GROVE-ADS1100-Module-0V-to-12V-analog-to-digital/3226069_32946953374.html?spm=a2g1x.12024536.productList_5885013.pic_7)**

## Description

This is a unit having self-calibrating function and 16bit analog-to-digitial coverter. The resolution is double than insided ADC of esp32, that means you can detect smaller amplitude voltage. The unit communicates with M5Core with I2C (I2C address is 0x48). It has provided two modes: continuously conversion and single conversion.

## Feature

- Up to 16 bits of resolution and perform conversions at rates of 8, 16, 32, or 128 samples per second
- Bult in programmable gain amplifier, thereby collecting analog signals with smaller amplitudes
    - Gain = 1, 2, 4, OR 8
- Detect 0~12V voltage Input
<!-- -  GROVE interface, support [UiFlow](http://flow.m5stack.com) and [Arduino](http://www.arduino.cc) -->
- Two Lego installation holes

## APPLICATION

-  ECG signal acquisition
-  Blood pressure measurement
-  Dynamometer

## Related Link

- **[Offical Video](https://www.youtube.com/channel/UCozgFVglWYQXbvTmGyS739w)**

- **[Forum](http://forum.m5stack.com/)**

-  **Datasheet** - [ADS1100](http://pdf1.alldatasheet.com/datasheet-pdf/view/619024/TI1/ADS1100.html)

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

<!-- ### 2. UIFlow -->

## Schematic

<img src="assets/img/product_pics/unit/adc_sch.JPG">

### PinMap

<table>
 <tr><td>M5Core(GROVE A)</td><td>GPIO22</td><td>GPIO21</td><td>5V</td><td>GND</td></tr>
 <tr><td>ADC Unit</td><td>SCL</td><td>SDA</td><td>5V</td><td>GND</td></tr>
</table>