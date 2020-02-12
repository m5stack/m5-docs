# ENV HAT {docsify-ignore-all}

<img src="assets\img\product_pics\hat\env_hat\env_hat_01.jpg" width="30%" height="30%"><img src="assets\img\product_pics\hat\env_hat\env_hat_02.jpg" width="30%" height="30%"><img src="assets\img\product_pics\hat\env_hat\env_hat_03.jpg" width="30%" height="30%">

## Description


**Hat ENV**  It is able to detect the temperature, humidity, air pressure and magnetic field. This product relates via I2C protocol which allows you to obtain 4 types of environment data thru just 2pins, together with the tiny body, makes it a powerful application for envitonment data collecting. 


## Product Feature

- temperature:
    -  Range: -20 ~ 60 ℃
- Humidity:
    -  Range: 20 ~ 95 %RH
- Air pressure:
    -  Range: 300 ~ 1100hPa

- Typical Magnetic Field：
    - ±1300μT（x，y-axis），±2500μT（z-axis）
    - magnetic field resolution: 0.3μT

## Weight & Dimension

- Dimension：24mm x 20.3mm x 13.8mm
- Weight：3g


## Package Includes

- 1x ENV Hat

## Applications

- Weather Station 
- Compass


## Links

- **[BMP280 library](https://github.com/adafruit/Adafruit_BMP280_Library)**

- **[BMP280 Datasheet](https://m5stack.oss-cn-shenzhen.aliyuncs.com/resource/docs/datasheet/hat/BMP280-DS001-11_en.pdf)**

- **[DHT12 Datasheet](https://m5stack.oss-cn-shenzhen.aliyuncs.com/resource/docs/datasheet/hat/DHT12_en.pdf)**

- **[BMM150 Datasheet](https://m5stack.oss-cn-shenzhen.aliyuncs.com/resource/docs/datasheet/core/BMM150_datasheet_en.pdf)**


## EasyLoader

<img src="https://m5stack.oss-cn-shenzhen.aliyuncs.com/image/EasyLoader_M5StickC_logo.png" width="100px" style="margin-top:20px">

<a href="https://m5stack.oss-cn-shenzhen.aliyuncs.com/EasyLoader/HAT/ENV/EasyLoader_StickC_HAT_ENV.exe"><button type="button" class="btn btn-primary">click to download EasyLoader</button></a>

>1.EasyLoader is a simple and fast program burner. Every product page in EasyLoader provides a product-related case program. It can be burned to the master through simple steps, and a series of function verification can be performed.(**Currently EasyLoader is only available for Windows OS**)

>2. After downloading the software, double-click to run the application, connect the M5 device to the computer through the data cable, select the port parameters, click **"Burn"** to start burning. (**For M5StickC burning, please Set the baud rate to 750000 or 115200**)

## Example

- **UIFlow**

Open http://flow.m5stack.com and Load Demo

<img src="assets/img/product_pics/hat/env_hat/env.png">

- **Arduino**

 Please click [here](https://github.com/m5stack/M5StickC/tree/master/examples/Hat/ENV) to get complete code

### Pin Map

<table>
 <tr><td>M5StickC</td><td>GPIO0</td><td>GPIO26</td><td>5V</td><td>GND</td></tr>
 <tr><td>HAT ENV</td><td>SDA</td><td>SCL</td><td>5V</td><td>GND</td></tr>
</table>

<script>

   var purchase_link = 'https://m5stack.com/collections/m5-unit/products/m5stickc-env-hat';

   anchor_search(purchase_link);
   scrollFunc();

</script>