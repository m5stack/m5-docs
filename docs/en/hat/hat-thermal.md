# THERMAL HAT {docsify-ignore-all}

<img src="assets\img\product_pics\hat\thermal_hat\hat_thermal_01.jpg" width="30%" height="30%"><img src="assets\img\product_pics\hat\thermal_hat\hat_thermal_02.jpg" width="30%" height="30%"><img src="assets\img\product_pics\hat\thermal_hat\hat_thermal_03.jpg" width="30%" height="30%">


## Description

**THERMAL HAT** is an M5StickC-compatible human infrared thermal imaging. Built-in **MLX90640** thermopile sensor that measures the surface temperature of an object and generates a thermal image through a temperature gradient formed by the surface temperature. Resolution is **32 x 24**)

**MLX90640** Infrared (IR) sensor arrays offer high resolution and the ability to work reliably in harsh environments. Compared to expensive high-end thermal imaging cameras, Hat-Thermal is a cost-effective alternative. Relatively general Micro-bolometer, the advantage of this sensor is that it does not require frequent re-calibration, thus ensuring continuity of detection and reducing system maintenance costs. The field of view provides a wide-angle version (110 ° × 75 °).

The I2C address is **0x33**. (GOIO 0/26)

<img src="assets\img\product_pics\hat\thermal_hat\hat_thermal_04.jpg" width="50%" height="50%"> <br><br><br>


## Product Features

- Operating Voltage: 3V ~ 3.6V
- Current Consumption: 23mA
- Field of View: 55°x35°
- Measurement Range: -40°C ~ 300°C
- Resolution: ±1.5°C
- Refresh Rate: 0.5Hz-64Hz
- Operating temperature: -40°C ~ 85°C

## Include

- 1x THERMAL CAMERA HAT

## Applications

-  High precision non-contact temperature measurements
-  Intrusion / Movement detection
-  Visual IR thermometers

## Schematic

<img src="assets\img\product_pics\hat\thermal_hat\hat_thermal_05.jpg" width="60%" height="60%">


## Links

- **[MLX90640 Datasheet](https://m5stack.oss-cn-shenzhen.aliyuncs.com/resource/docs/datasheet/hat/MLX90640-Datasheet-Melexis_en.pdf)**


## EasyLoader

<img src="https://m5stack.oss-cn-shenzhen.aliyuncs.com/image/EasyLoader_M5StickC_logo.png" width="100px" style="margin-top:20px">

<a href="https://m5stack.oss-cn-shenzhen.aliyuncs.com/EasyLoader/HAT/THERMAL/EasyLoader_StickC_HAT_THERMAL.exe"><button type="button" class="btn btn-primary">click to download EasyLoader</button></a>

>1.EasyLoader is a simple and fast program burner. Every product page in EasyLoader provides a product-related case program. It can be burned to the master through simple steps, and a series of function verification can be performed.(**Currently EasyLoader is only available for Windows OS**)

>2. After downloading the software, double-click to run the application, connect the M5 device to the computer through the data cable, select the port parameters, click **"Burn"** to start burning. (**For M5StickC burning, please Set the baud rate to 750000 or 115200**)


## Example

- **UIFlow**

*If you want the complete code, please click [here](https://github.com/m5stack/M5-ProductExampleCodes/tree/master/Hat/MLX90640/UIFlow).*

<img src="assets/img/product_pics/hat/thermal_hat/thermal.png">

- **[Arduino](https://github.com/m5stack/M5StickC/tree/master/examples/Hat/MLX90640)**

### Pin Map

<table>
 <tr><td>M5StickC</td><td>GPIO0</td><td>GPIO26</td><td>5V</td><td>GND</td></tr>
 <tr><td>HAT THERMAL</td><td>SDA</td><td>SCL</td><td>5V</td><td>GND</td></tr>
</table>


## Video

<video class="video_size" controls>
    <source src="https://m5stack.oss-cn-shenzhen.aliyuncs.com/video/Product_example_video/HAT/THERMAL-HAT.mp4" type="video/mp4">
</video>

<script>

   var purchase_link = 'https://m5stack.com/collections/m5-unit/products/m5stickc-thermal-camera-hatmlx90640';

   anchor_search(purchase_link);
   scrollFunc();

</script>
