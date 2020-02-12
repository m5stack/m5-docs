# DAC HAT {docsify-ignore-all}

<img src="assets\img\product_pics\hat\dac_hat\dac_hat_01.jpg" width="30%" height="30%"><img src="assets\img\product_pics\hat\dac_hat\dac_hat_02.jpg" width="30%" height="30%"><img src="assets\img\product_pics\hat\dac_hat\dac_hat_03.jpg" width="30%" height="30%">

## Description

DAC_HAT is also a type of C-HAT specifically design for M5StickC controller. Same as DAC unit, this is a voltage output DAC converter for stickc. It can generate a voltage of 0～3.3V.
<br>
Packed with a DAC converter chip MCP4725, which is low-power, high accuracy, single-channel, 12-bit buffered voltage output Digital-to-Analog Converter (DAC) with a non-volatile memory (EEPROM). Its on-board precision output amplifier allows it to achieve rail-to-rail analog output swing.
<br>
The DAC input and configuration data can be programmed to the non-volatile memory (EEPROM) by the user using the I2C interface command.
I2C address: 0x60

<br>

## Product Features

- Output: 0～3.3V
- Software Development Platform: Arduino, UIFlow(Blockly, Python)
- MCP4725
    - 12-BitResolution
    - External A0 Address Pin
    - NormalorPower-DownMode
    - Fast Settling Time of 6 μs (typical)
    - ExternalVoltageReference(VDD)
    - Rail-to-RailOutput
    - LowPowerConsumption
    - Single-SupplyOperation:2.7V to 5.5V
    - I2C Interface: address 0x60
    - ExtendedTemperatureRange:-40°Cto+125°C

## Include

- 1x DAC HAT
- 1x 2 Pin 3.96 Pitch Terminal

## Applications

- SetPointorOffsetTrimming
- SensorCalibration
- Closed-LoopServoControl
- LowPowerPortableInstrumentation • PCPeripherals
- DataAcquisitionSystems


## Links

-  **Datasheet** - [MCP4725](https://m5stack.oss-cn-shenzhen.aliyuncs.com/resource/docs/datasheet/hat/MCP4725_en.pdf)
  
## Schematic

<img src="assets/img/product_pics/hat/dac_hat/dac_hat_04.jpg" width="80%" height="80%">

## EasyLoader

<img src="https://m5stack.oss-cn-shenzhen.aliyuncs.com/image/EasyLoader_M5StickC_logo.png" width="100px" style="margin-top:20px">

<a href="https://m5stack.oss-cn-shenzhen.aliyuncs.com/EasyLoader/HAT/DAC/EasyLoader_DAC_HAT.exe"><button type="button" class="btn btn-primary">click to download EasyLoader</button></a>

>1.EasyLoader is a simple and fast program burner. Every product page in EasyLoader provides a product-related case program. It can be burned to the master through simple steps, and a series of function verification can be performed.(**Currently EasyLoader is only available for Windows OS**)

>2. After downloading the software, double-click to run the application, connect the M5 device to the computer through the data cable, select the port parameters, click **"Burn"** to start burning. (**For M5StickC burning, please Set the baud rate to 750000 or 115200**)

## Example

- **UIFlow**

Open http://flow.m5stack.com and Load Demo

<img src="assets/img/product_pics/hat/dac_hat/dac.png">

###  Arduino IDE

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


## Video

<video class="video_size" controls>
    <source src="https://m5stack.oss-cn-shenzhen.aliyuncs.com/video/Product_example_video/HAT/ADC-DAC-HAT.mp4" type="video/mp4" >
</video>


<script>

   var purchase_link = 'https://m5stack.com/collections/m5-unit/products/m5stickc-dac-hat-mcp4725';

   anchor_search(purchase_link);
   scrollFunc();

</script>

