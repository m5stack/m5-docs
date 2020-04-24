# YUN HAT

<div class="badge badge-pill badge-primary product_sku_tag">SKU:U070</div>

<div class="product_pic"><img src="assets\img\product_pics\hat\yun_hat\yun_hat_01.webp"><img src="assets\img\product_pics\hat\yun_hat\yun_hat_02.webp"></div>

## Description

**YUN HAT** is a cloud-shaped multi-function environment information measurement base. Built-in temperature and humidity sensor **SHT20**, air pressure sensor **BMP280**, photoresistor,14 RGB LEDs. The board is build with Embedded Microprocesser ** STM32F030F4** , which implenmented a consice and efficient program APIs.
<br>
YUN HAT features a pretty appearance which could be used as a decration for your space.
<br>
The base is designed for the M5StickC, like other HAT devices, it is compatible with top socket of M5StickC. The overall structure adopts a three-layer design, and the upper and lower PCB boards serve as fixed structure and main circuit respectively, which is beneficial to the circuit conduct long hours of work.
<br>
the board also provides an independent external power interface.
<br>
The middle layer is a light-guided acrylic component. To achieve a better light display effect, The acrylic outer contour cutting surface is partially polished, and the purpose is to effectively reduce the scattering of light, making it evenly saturated with light effects.
<br>
One hook hole and two 6*4mm magnet mounting positions are reserved on the board, so users can easily magnet or hang in any corner of space.

## Product Features

- Compatible with M5StickC
- On-board Microprocessor **STM32F030F4**
- Temperature and Humidity sensor **SHT20**
- Air pressure sensor **BMP280**
- Photoresistance
- 14 x SK6812 4020 RGB LED
- Three-layer structure design:
     - 1 x hook hole
     - 2 x 6*4mm magnet mounting position
     - 1 x finishing Acrylic profile surface 
- Development platform: Arduino, UIFlow(Blockly, Python)

## Include

- 1x YUN HAT
- 2x Dupont

<img src="assets\img\product_pics\hat\yun_hat\yun_hat_04.webp" width="30%" height="30%">

## Applications

- Environmental information collection
- Smart home decoration
- Fridge Magnet

## Schematic

<img src="assets\img\product_pics\hat\yun_hat\yun_hat_05.webp" width="50%">

## Links

-  **datasheet**

    - [SHT20](https://m5stack.oss-cn-shenzhen.aliyuncs.com/resource/docs/datasheet/hat/SHT20_Datasheet_en.pdf)
    - [BMP280](https://m5stack.oss-cn-shenzhen.aliyuncs.com/resource/docs/datasheet/hat/BMP280-DS001-11_en.pdf)

## EasyLoader

<img src="https://m5stack.oss-cn-shenzhen.aliyuncs.com/image/EasyLoader_M5StickC_logo.webp" width="100px" style="margin-top:20px">

<a href="https://m5stack.oss-cn-shenzhen.aliyuncs.com/EasyLoader/HAT/YUN/EasyLoader_YUN_HAT.exe"><button type="button" class="btn btn-primary">click to download EasyLoader</button></a>

>1.EasyLoader is a simple and fast program burner. Every product page in EasyLoader provides a product-related case program. It can be burned to the master through simple steps, and a series of function verification can be performed.(**Currently EasyLoader is only available for Windows OS**)

>2. After downloading the software, double-click to run the application, connect the M5 device to the computer through the data cable, select the port parameters, click **"Burn"** to start burning. (**For M5StickC burning, please Set the baud rate to 750000 or 115200**)

## Example

### 1. Arduino

To get complete code, please click [here](https://github.com/m5stack/M5-ProductExampleCodes/tree/master/Hat/hat-yun)

### 2. UIFlow

Open http://flow.m5stack.com and Load Demo

<img src="assets/img/product_pics/hat/yun_hat/yun.webp">

### Pin Map

<table>
 <tr><td>M5StickC</td><td>GND</td><td>5V OUT</td><td>GPIO26</td><td>GPIO0</td><td>GPIO36</td><td>BAT</td><td>3V3</td><td>5V IN</td></tr>
 <tr><td>YUN HAT</td><td>GND</td><td>+5V</td><td>SCL</td><td>SDA</td><td>/</td><td>BAT</td><td>+3.3V</td><td>+5V IN</td></tr>
</table>

<script>

   var purchase_link = 'https://m5stack.com/products/m5stickc-yun-hatsh20-bmp280-sk6812';

   anchor_search(purchase_link);
   scrollFunc();

</script>