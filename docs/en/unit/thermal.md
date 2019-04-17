# Unit THERMAL {docsify-ignore-all}

<img src="assets/img/product_pics/unit/M5GO_Unit_thermal.png" width="30%" height="30%"><img src="assets/img/product_pics/unit/M5GO_Unit_thermal_02.png" width="30%" height="30%"><img src="assets/img/product_pics/unit/unit_thermal_grove_a.png" width="30%" height="30%">

***

:memo:**[Description](#Description)**&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;:octocat:**[Example](#Example)**&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; :electric_plug:**[Schematic](#Schematic)** &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;🛒**[Purchase](https://www.aliexpress.com/store/product/M5Stack-Official-New-Thermal-Camera-MLX90640-with-GROVE-I2C-Compatible-M5GO-FIRE-ESP32-Kit-Mini-Development/3226069_32918177644.html?spm=2114.12010615.8148356.2.4ad0717733LM7H)**&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;:clapper:**[Related Video](#Related-Video)**

## Description

**<mark>THERMAL</mark>** is a thermal camera Unit contained thermopile sensors named **MLX90640**. It can be used to measure the surface temperature of an object and form a thermographic image by a temperature gradient composed of different surface temperatures. The image size and resolution of the MLX90640 output is **32 x 24**.

The MLX90640 Infrared (IR) sensor array combines high resolution and reliable operation in harsh environments, providing a cost-effective alternative to more expensive high-end thermal imaging cameras. Unlike the case of a microbolometer, the sensor does not require frequent recalibration, ensuring continuous monitoring and reducing system cost.

The field of view (FoV) option includes a standard 55° x 35° version and a wide angle version of 110° x 75° for distances up to 7m. THERMAL uses a version of **110°×75° FoV**, also known as the BAA package.

The Unit communicates with the M5Core through the Grove A interface, and its IIC address is **0x33**

<img src="assets/img/product_pics/unit/thermal/unit_thermal_05.png">

## Feature

- Operating Voltage: 3V ~ 3.6V
- Current Consumption: 23mA
- Field of View: 55°x35°
- Measurement Range: -40°C ~ 300°C
- Resolution: ±1.5°C
- Refresh Rate: 0.5Hz-64Hz
- Operating temperature: -40°C ~ 85°C
<!-- -  GROVE interface, support [UIFlow](http://flow.m5stack.com) and [Arduino](http://www.arduino.cc) -->
- Two Lego installation holes

## Include

- 1x THERMAL Unit
- 1x Grove Cable

## APPLICATION

-  High precision non-contact temperature measurements
-  Intrusion / Movement detection
-  Visual IR thermometers

## Related Link

- **[Offical Video](https://www.youtube.com/channel/UCozgFVglWYQXbvTmGyS739w)**

- **[Forum](http://forum.m5stack.com/)**

-  **Datasheet** - [MLX90640](https://www.melexis.com/-/media/files/documents/datasheets/mlx90640-datasheet-melexis.pdf)

## Example

### 1. Arduino IDE

*The below code is incomplete(just for usage). If you want the complete code, please click [here](https://github.com/m5stack/M5-ProductExampleCodes/tree/master/Unit/THERMAL/Arduino)。*

```arduino
/*
    MLX90640.ino
*/
#include <M5Stack.h>
#include <Wire.h>
#include "MLX90640_API.h"
#include "MLX90640_I2C_Driver.h"

// declaration
uint16_t eeMLX90640[832];//32 * 24 = 768
int SetRefreshRate;

// initialization
/* load system parameter */
MLX90640_DumpEE(MLX90640_address, eeMLX90640);
/* load extraction parameter */
MLX90640_ExtractParameters(eeMLX90640, &mlx90640);
SetRefreshRate = MLX90640_SetRefreshRate(0x33, 0x05);
M5.Lcd.fillScreen(TFT_BLACK);
infodisplay();

// display heat map
M5.update();
infodisplay();
interpolate_image(reversePixels,ROWS,COLS,dest_2d,\
                    INTERPOLATED_ROWS,INTERPOLATED_COLS);
```

<img src="assets/img/product_pics/unit/M5GO_Unit_thermal_03.png" width="30%" height="30%"><img src="assets/img/product_pics/unit/M5GO_Unit_thermal_04.png" width="30%" height="30%">

## Schematic

<img src="assets/img/product_pics/unit/thermal_sch.JPG">

### PinMap

<table>
 <tr><td>M5Core (GROVE A)</td><td>GPIO22</td><td>GPIO21</td><td>5V</td><td>GND</td></tr>
 <tr><td>THERMAL Unit</td><td>SCL</td><td>SDA</td><td>5V</td><td>GND</td></tr>
</table>

## Related Video

**THERMAL Case**

<video width="500" height="315" controls>
    <source src="https://m5stack.oss-cn-shenzhen.aliyuncs.com/video/Blog/Twitch201811/Infrared%20Thermal%20Imaging.mp4" type="video/mp4">
</video>