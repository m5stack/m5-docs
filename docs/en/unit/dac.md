# Unit DAC

<img src="assets/img/product_pics/unit/M5GO_Unit_dac.png" width="30%" height="30%"><img src="assets/img/product_pics/unit/unit_dac_grove_a.png" width="30%" height="30%">

***

:memo:**[Description](#Description)**&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;:octocat:**[Example](#Example)**&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; :electric_plug:**[Schematic](#Schematic)** &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;🛒**[Purchase](https://www.aliexpress.com/store/product/M5Stack-Official-DAC-Unit-MCP4725-I2C-DAC-Converter-Breakout-Module-Digital-to-Analog-12-Bits-0V/3226069_32947696641.html?spm=a2g1x.12024536.productList_5885013.pic_6)**

## Description

This is a unit can convert digital signal to analog signal like voltage waveform, audio waveform and so on. It integrates a 12-bit high resolution DAC chip named MCP4725 which integrates a on-board non-volatile memory (EEPROM). The unit comunicates with M5Core with I2C. The DAC input and configuration data can be programmed to the EEPROM.

## Feature

-  Up to 12 bits of resolution
-  Output 0~3.3V voltage
-  GROVE interface, support [UiFlow](http://flow.m5stack.com) and [Arduino](http://www.arduino.cc)
-  Two Lego installation holes

## APPLICATION

-  MP3 Audio Player
-  mini Oscilloscope

## Related Link

- **[Offical Video](https://www.youtube.com/channel/UCozgFVglWYQXbvTmGyS739w)**

- **[Forum](http://forum.m5stack.com/)**

-  **Datasheet** - [MCP4725](http://pdf1.alldatasheet.com/datasheet-pdf/view/233449/MICROCHIP/MCP4725.html)

## Example
### 1. Arduino IDE
<!--
```arduino
/*
    hardware : m5stack uint dac
    please install adafruit MCP4725 lib
*/
#include <Wire.h>
#include <Adafruit_MCP4725.h>

#define DAC_ADDR
Adafruit_MCP4725 dac;

void setup(void) {
    Serial.begin(115200);
    Serial.println("Hello!");

    // For Adafruit
    ///the address of MCP4725A1 is 0x62 (default) or 0x63 (ADDR pin tied to VCC)
    // the address of MCP4725A0 is 0x60 or 0x61
    // the address of MCP4725A2 is 0x64 or 0x65
    dac.begin(0x60);

    Serial.println("Generating a triangle wave");
    dac.setVoltage(2048, false);

}

void loop(void) {
    // 12bit value , false mean not write EEPROM
    dac.setVoltage(1024, false);
    delay(1000);
    dac.setVoltage(2048, false);
    delay(1000);
}
```

Click [here](https://github.com/m5stack/M5-ProductExampleCodes/tree/master/Unit/DAC)for Specific example.

## Schematic

<img src="assets/img/product_pics/unit/dac_sch.JPG">

### PinMap

<table>
 <tr><td>M5Core(GROVE A)</td><td>GPIO22</td><td>GPIO21</td><td>5V</td><td>GND</td></tr>
 <tr><td>DAC Unit</td><td>SCL</td><td>SDA</td><td>5V</td><td>GND</td></tr>
</table>