# EXT.IO

<div class="badge badge-pill badge-primary product_sku_tag">SKU:U011</div>

<div class="product_pic"><img src="assets/img/product_pics/unit/unit_extio_01.webp"><img src="assets/img/product_pics/unit/unit_extio_02.webp"></div>

## Description

**EXT.IO** is a GPIO Expander. With simple I2C commands you can have up to 8 GPIOs.

Integrates PCA9554PW. This 8-bit I/O expander for the two-line bidirectionalbus (I2C) is designed for 2.3-V to 5.5-V VCC • Open-Drain Active-Low Interrupt Output operation. It provides general-purpose remote I/O expansion for most microcontroller families via the I2C interface.

IIC address: 0x27.

It’s difficult to foresee the needs of your project from the start. EXT.IO is the perfect solution for expanding the number of IO. It allows you to add new features, logic,timing and sensing to alrady highly integrated designs.

## Product Features

-  Expanded I/O number: 8
- GROVE interface, support [UIFlow](http://flow.m5stack.com) and [Arduino](http://www.arduino.cc)
- Two Lego-compatible holes
- Product Size：32.2mm x 24.2mm x 11.3mm
- Product weight：4.9g

## Include

- 1x EXT.IO Unit
- 1x Grove Cable

## Related Link

- Datasheet - **[PCA9554PW](https://m5stack.oss-cn-shenzhen.aliyuncs.com/resource/docs/datasheet/unit/PCA9554PW_en.pdf)**

## EasyLoader

<img src="https://m5stack.oss-cn-shenzhen.aliyuncs.com/image/EasyLoader_logo.webp" width="100px" style="margin-top:20px">

<a href="https://m5stack.oss-cn-shenzhen.aliyuncs.com/EasyLoader/Unit/EasyLoader_EXT_IO.exe"><button type="button" class="btn btn-primary">click to download EasyLoader</button></a>

>1.EasyLoader is a simple and fast program burner. Every product page in EasyLoader provides a product-related case program. It can be burned to the master through simple steps, and a series of function verification can be performed. .

>2. After downloading the software, double-click to run the application, connect the M5 device to the computer through the data cable, select the port parameters, click **"Burn"** to start burning. (**For M5StickC burning, please Set the baud rate to 750000 or 115200**)

?>3. Currently EasyLoader is only suitable for Windows operating system, compatible with M5 system adopts ESP32 as the control core host. Before installing for M5Core, you need to install CP210X driver (you do not need to install with M5StickC as controller)[Click here to view the driver installation tutorial](en/related_documents/M5Burner#install-usb-driver)

### PinMap

<table>
 <tr><td>M5Core(GROVE A)</td><td>GPIO22</td><td>GPIO21</td><td>5V</td><td>GND</td></tr>
 <tr><td>EXT.IO Unit</td><td>SCL</td><td>SDA</td><td>5V</td><td>GND</td></tr>
</table>

## Example

### 1. Arduino IDE

To get the complete code, please click [here](https://github.com/m5stack/M5-ProductExampleCodes/tree/master/Unit/EXTIO/Arduino)

### 2. UIFlow

To get the complete code, please click [here](https://github.com/m5stack/M5-ProductExampleCodes/tree/master/Unit/EXTIO/UIFlow)

<img src="assets/img/product_pics/unit/unit_example/EXTIO/example_unit_extio_01.webp">

<script>

   var purchase_link = 'https://m5stack.com/collections/m5-unit/products/official-extend-serial-i-o-unit';

   anchor_search(purchase_link);
   scrollFunc();

</script>