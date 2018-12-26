# Unit COLOR

<img src="assets/img/product_pics/unit/M5GO_Unit_color.png" width="30%" height="30%"><img src="assets/img/product_pics/unit/unit_color_grove_a.png" width="30%" height="30%">

***

:memo:**[Description](#Description)**&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;:octocat:**[Example](#Example)**&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; :electric_plug:**[Schematic](#Schematic)** &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;🛒**[Purchase](https://www.aliexpress.com/store/product/M5Stack-Official-Color-Unit-TCS34725-Color-Sensor-RGB-Color-Sensor-Development-Board-Module-GROVE-I2C-Compatible/3226069_32946957647.html?spm=a2g1x.12024536.productList_5885013.pic_5)**

## Description

This is a unit can detecte the color of object surface which integrates TCS3472 (a color sensor). The unit comunicates with M5Core with I2C.

## Feature

-  High precision
-  Detection range: -70℃~382.2℃
-  GROVE interface, support [UiFlow](http://flow.m5stack.com) and [Arduino](http://www.arduino.cc)
-  Two Lego installation holes

## APPLICATION

-  RGB LED Backlight Control
-  Product Color Verification

## Related Link

- **[Offical Video](https://www.youtube.com/channel/UCozgFVglWYQXbvTmGyS739w)**

- **[Forum](http://forum.m5stack.com/)**

-  **Datasheet** - [TCS3472](https://pdf1.alldatasheet.com/datasheet-pdf/view/560511/AMSCO/TCS3472.html)

## Example
### 1. Arduino IDE

```arduino
Adafruit_TCS34725 tcs;

tcs = Adafruit_TCS34725(TCS34725_INTEGRATIONTIME_50MS, TCS34725_GAIN_4X);

tcs.getRawData(&red, &green, &blue, &clear);//get rgb value
```

Click [here](https://github.com/m5stack/M5-ProductExampleCodes/tree/master/Unit/COLOR/Arduino)for Specific example.

<img src="assets/img/product_pics/unit/unit_example/COLOR/example_unit_color_result_01.png">

## Schematic

<img src="assets/img/product_pics/unit/color_sch.JPG">

### PinMap

<table>
 <tr><td>M5Core(GROVE A)</td><td>GPIO22</td><td>GPIO21</td><td>5V</td><td>GND</td></tr>
 <tr><td>COLOR Unit</td><td>SCL</td><td>SDA</td><td>5V</td><td>GND</td></tr>
</table>