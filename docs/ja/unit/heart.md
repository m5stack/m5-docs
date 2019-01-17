# HEART

<img src="assets/img/product_pics/unit/unit_heart_01.png" width="30%" height="30%"> <img src="assets/img/product_pics/unit/unit_heart_02.png" width="30%" height="30%"> <img src="assets/img/product_pics/unit/unit_heart_grove_a.png" width="30%" height="30%">

***

:memo:**[Description](#Description)**&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;:octocat:**[Example](#Example)**&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; :electric_plug:**[Schematic](#Schematic)** &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;🛒**[Purchase](https://pt.aliexpress.com/store/product/M5Stack-Newest-Mini-Heart-Rate-Unit-MAX30100-Module-Sensor-for-Arduino-Low-Power-Heart-Rate-Oxygen/3226069_32960528289.html?spm=a2g03.12010615.8148356.2.770159282aM5qM)**

## Description

**<mark>HEART</mark>** is a unit integrated **MAX30100**(pulse oximeter chip). The principle is that the amount of oxygen and non-carrying oxygen in the red blood cells can be detected by infrared LED illumination, and the ADC value of the heart rate can be obtained. MAX30100 is built in two light emitting diodes and one light detector. After the unit is connected to the GROVE A port of the M5Core, you only need to put your finger on the MAX30110 module of the unit to read the physiological information.

## Feature

-  Low noise
-  Can output specific blood oxygen value and heart rate value
-  GROVE interface, support [Arduino](http://www.arduino.cc)
-  Two Lego installation holes

## Related Link

- **[Offical Video](https://www.youtube.com/channel/UCozgFVglWYQXbvTmGyS739w)**

- **[Forum](http://forum.m5stack.com/)**

- **Datasheet** - [MAX30100](https://datasheets.maximintegrated.com/en/ds/MAX30110.pdf)

- **[MAX30100lib](https://github.com/oxullo/Arduino-MAX30100)**

## Example

### 1. Arduino IDE

*If you want the code, please click [here](https://github.com/m5stack/M5-ProductExampleCodes/tree/master/Unit/HEART/Arduino).*

```arduino
/*
    Install MAX30100lib Library first.

    MAX30100_RawData.ino
*/
#include <Wire.h>
#include "MAX30100.h"

#define SAMPLING_RATE   MAX30100_SAMPRATE_100HZ
#define IR_LED_CURRENT  MAX30100_LED_CURR_50MA
#define RED_LED_CURRENT MAX30100_LED_CURR_27_1MA
// set HIGHRES_MODE to true only
// when setting PULSE_WIDTH to MAX30100_SPC_PW_1600US_16BITS
#define PULSE_WIDTH MAX30100_SPC_PW_1600US_16BITS
#define HIGHRES_MODE    true

// new a object
MAX30100 sensor;

void setup()
{
    Serial.begin(115200);
    Serial.print("Initializing MAX30100..");
    if (!sensor.begin()) {
        Serial.println("FAILED");
        for(;;);
    } else {
        Serial.println("SUCCESS");
    }
    sensor.setMode(MAX30100_MODE_SPO2_HR);
    sensor.setLedsCurrent(IR_LED_CURRENT, RED_LED_CURRENT);
    sensor.setLedsPulseWidth(PULSE_WIDTH);
    sensor.setSamplingRate(SAMPLING_RATE);
    sensor.setHighresModeEnabled(HIGHRES_MODE);
}

void loop()
{
    uint16_t ir, red;
    sensor.update();
    while (sensor.getRawValues(&ir, &red)) {
        Serial.print(ir);
        Serial.print('\t');
        Serial.println(red);
    }
}
```

<img src="assets/img/product_pics/unit/unit_example/HEART/example_unit_heart_01.png">

<!-- ### 2. UIFlow

*If you want the complete code, please click [here](https://github.com/m5stack/M5-ProductExampleCodes/tree/master/Unit/JOYSTICK/UIFlow).*

<img src="assets/img/product_pics/unit/unit_example/JOYSTICK/example_unit_joystick_01.png" width="30%" height="30%"> <img src="assets/img/product_pics/unit/unit_example/JOYSTICK/example_unit_joystick_02.png" width="58%" height="58%"> -->

## Schematic

<img src="assets/img/product_pics/unit/heart_sch.JPG">

### PinMap

<table>
<tr><td>M5Core(GROVE A)</td><td>GPIO22</td><td>GPIO21</td><td>5V</td><td>GND</td></tr>
 <tr><td>HEART Unit</td><td>SCL</td><td>SDA</td><td>5V</td><td>GND</td></tr>
</table>