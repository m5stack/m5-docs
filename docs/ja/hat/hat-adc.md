# Hat ADC {docsify-ignore-all}

<img src="assets\img\product_pics\hat\adc_hat\adc_hat_01.jpg" width="30%" height="30%"><img src="assets\img\product_pics\hat\adc_hat\adc_hat_02.jpg" width="30%" height="30%"><img src="assets\img\product_pics\hat\adc_hat\adc_hat_03.jpg" width="30%" height="30%">

***

:memo:**[Description](#Description)**&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;:electric_plug:**[Schematic](#Schematic)**&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;:octocat:**[Code](#Code)**&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<img src="https://m5stack.oss-cn-shenzhen.aliyuncs.com/image/EasyLoader_logo-min.jpg">**[EasyLoader](#EasyLoader)** &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;🛒**[Purchase](https://m5stack.com/collections/m5-unit/products/m5stickc-adc-hat-ads1100)**

## Description

ADC_HAT  is another type of C-HAT specifically design for M5StickC controller. Same as ADC unit, this is an ADC converter component for stickc. Packed with an ADC converter chip ADS1100, which is a fully differential, 16-bit, self-calibrating, delta-sigma A/D converter. Extremely easy to design with and configure, the ADS1100 allows you to obtain precise measurements with a minimum of effort.
<br>
The ADS1100 consists of a delta-sigma A/D converter core with adjustable gain, a clock generator, and an I2C interface.
<br>
ADS1100 itself is able to accept a differential input from -5 ~ +5 V, but we have limited the input to 0~12V by adding on the peripheral circuit design of this IC.

<br>

### Product Features
- M5StickC Compatible
- Input: 0-12V
- Software Development Platform: Arduino, UIFlow(Blockly, Python)
- ADS1100
    - 16-bits Resolution    
    - CONTINUOUS SELF-CALIBRATION
    - SINGLE-CYCLE CONVERSION
    - PROGRAMMABLE GAIN AMPLIFIER GAIN = 1, 2, 4, OR 8
    - LOW NOISE: 4μVp-p
    - PROGRAMMABLE DATA RATE: 8SPS to 128SPS
    - INTERNAL SYSTEM CLOCK
    - I2C INTERFACE: address 0x48

## Include

- 1x ADC HAT
- 1x 2 Pin 3.96 Pitch Terminal

## Application

-  Analog Signal Capture


## Links

-  **Datasheet** - [ADS1100](http://www.ti.com/lit/ds/symlink/ads1100.pdf)

  
## Schematic

<img src="assets/img/product_pics/hat/adc_hat/adc_hat_04.jpg" width="80%" height="80%">


## EasyLoader

<img src="https://m5stack.oss-cn-shenzhen.aliyuncs.com/image/EasyLoader_logo.png" width="100px" style="margin-top:20px">

<a href="https://m5stack.oss-cn-shenzhen.aliyuncs.com/EasyLoader/HAT/ADC/EasyLoader_ADC_HAT.exe"><el-tag effect="plain">click to download EasyLoade</el-tag></a>

>1.EasyLoader is a simple and fast program burner. Every product page in EasyLoader provides a product-related case program. It can be burned to the master through simple steps, and a series of function verification can be performed.(**Currently EasyLoader is only available for Windows OS**)

>2. After downloading the software, double-click to run the application, connect the M5 device to the computer through the data cable, select the port parameters, click **"Burn"** to start burning. (**For M5StickC burning, please Set the baud rate to 750000 or 115200**)

## Code

### 1. Arduino IDE

*- [Click here to download the Arduino example](https://github.com/m5stack/M5StickC/tree/master/examples/Hat/ADC).*

```clike
#include <M5StickC.h>
#include <Wire.h>
#include "ADS1100.h"

ADS1100 ads;
#define REF_VOL    3.3
#define ADC_BASE   REF_VOL/32768
void setup(void)
{
    M5.begin(true,true,false);
    // The address can be changed making the option of connecting multiple devices
    ads.getAddr_ADS1100(ADS1100_DEFAULT_ADDRESS);   // 0x48, 1001 000 (ADDR = GND)
    // The ADC gain (PGA), Device operating mode, Data rate
    // can be changed via the following functions
    ads.setGain(GAIN_ONE);          // 1x gain(default)
    ads.setMode(MODE_CONTIN);       // Continuous conversion mode (default)
    ads.setRate(RATE_8);            // 8SPS (default)
    ads.setOSMode(OSMODE_SINGLE);   // Set to start a single-conversion
    ads.begin();
}
void loop() {
byte error;
    int8_t address;
    address = ads.ads_i2cAddress;
    // The i2c_scanner uses the return value of
    // the Write.endTransmisstion to see if
    // a device did acknowledge to the address.
    Wire.beginTransmission(address);
    error = Wire.endTransmission();
    result = ads.Measure_Differential();
}
```

### Pin Map

<table>
 <tr><td>M5StickC</td><td>GPIO0</td><td>GPIO26</td><td>5V</td><td>GND</td></tr>
 <tr><td>HAT ADC</td><td>SDA</td><td>SCL</td><td>5V</td><td>GND</td></tr>
</table>


## Video
**Demo** 

<video width="500" height="500" controls>
    <source src="https://m5stack.oss-cn-shenzhen.aliyuncs.com/video/Product_example_video/HAT/ADC-DAC-HAT.mp4" type="video/mp4" >
</video>
