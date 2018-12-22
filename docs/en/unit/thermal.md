# Unit THERMAL

<img src="assets/img/product_pics/unit/M5GO_Unit_thermal.png" width="30%" height="30%"><img src="assets/img/product_pics/unit/unit_thermal_grove_a.png" width="30%" height="30%">

***

:memo:**[Description](#Description)**&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;:octocat:**[Example](#Example)**&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; :electric_plug:**[Schematic](#Schematic)** &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;🛒**[Purchase](https://www.aliexpress.com/store/product/M5Stack-Official-New-Thermal-Camera-MLX90640-with-GROVE-I2C-Compatible-M5GO-FIRE-ESP32-Kit-Mini-Development/3226069_32918177644.html?spm=2114.12010615.8148356.2.4ad0717733LM7H)**

## Description

The Unit thermal is a thermal camera module contains thermopile sensors named MLX90640. the MLX90640 contains a 32x64 piexls IR array. It communicates with M5GO Core via GROVE which actually is a I2C interfacel.
As the images show you can detect surface temperatures from many feet away with an accuracy of ±1.5°C (best case).
After burn the firmware of the module's demostatrion to M5GO Core via `M5Burner`, the module will be running. Then you can program it via Arduino IDE.


## Feature

-  32x24 piexls
-  Target temperature -40°C ÷ 300°C
-  GROVE interface, support [UiFlow](http://flow.m5stack.com) and [Arduino](http://www.arduino.cc)
-  Two Lego installation holes

## APPLICATION

-  High precision non-contact temperature measurements
-  Intrusion / Movement detection
-  Visual IR thermometers
-  Temperature sensing element for intelligent building air conditioning

## Related Link

- **[Offical Video](https://www.youtube.com/channel/UCozgFVglWYQXbvTmGyS739w)**

- **[Forum](http://forum.m5stack.com/)**

-  **Datasheet** - [MLX90640](https://www.melexis.com/-/media/files/documents/datasheets/mlx90640-datasheet-melexis.pdf)

## Example

<!-- ```c++
float tmp = dht12.readTemperature();//temperature
float hum = dht12.readHumidity();//humidity
float pressure = bme.readPressure();//pressure
```

Click [here](https://github.com/m5stack/M5-ProductExampleCodes/tree/master/Unit/THERMAL)for Specific example. -->

## Schematic

<img src="assets/img/product_pics/unit/thermal_sch.JPG">

### PinMap

<table>
 <tr><td>M5Core(GROVE A)</td><td>GPIO22</td><td>GPIO21</td><td>5V</td><td>GND</td></tr>
 <tr><td>THERMAL Unit</td><td>SCL</td><td>SDA</td><td>5V</td><td>GND</td></tr>
</table>