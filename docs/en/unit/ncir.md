# NCIR

<div class="badge badge-pill badge-primary product_sku_tag">SKU:U028</div>

<div class="product_pic"><img src="assets/img/product_pics/unit/M5GO_Unit_ncir.png"></div>

## Description

**NCIR** featured with built-in infrared sensor **MLX90614**. It can be used to measure the surface temperature of a human body or other object.<br>

Unlike most temperature sensors, this sensor measures infrared light bouncing off of remote objects so it can sense temperature without having to touch them physically. Simply point the sensor towards what you want to measure and it will detect the temperature by absorbing IR waves emitted. Because it doesn't have to touch the object it's measuring, it can sense a wider range of temperatures than most digital sensors! It takes the measurement over an 90-degree field of view so it can be handy for determining the average temperature of an area.<br>
The MLX90614 is factory calibrated in wide temperature ranges: -40 to 125 ˚C for the ambient temperature and -70 to 380 ˚C for the object temperature. 

Connect with M5Core via GROVE A IIC(0x5A).

## Product Features

- Operating voltage: 4.5 to 5.5V
- Measuring object temperature range: -70°C ~ 380°C
- Measuring ambient temperature range: -40 to 125 ˚C 
- Measurement accuracy at room temperature: ±0.5°C
- Field of view: 90°
- Sofrware Development Platform: Arduino, UIFlow(Blockly, Python)
- Two Lego-compatible holes
- Product Size：32.2mm x 24.2mm x 8.2mm
- Product weight：4.6g

## Include

- 1x NCIR Unit
- 1x Grove Cable

## Applications

-  Body Temperature Measurement
-  Object (biological) Motion Detection

## Related Link

- **[MLX90614 Datasheet](https://m5stack.oss-cn-shenzhen.aliyuncs.com/resource/docs/datasheet/hat/MLX90614-Datasheet-Melexis_en.pdf)**

## EasyLoader

<img src="https://m5stack.oss-cn-shenzhen.aliyuncs.com/image/EasyLoader_logo.png" width="100px" style="margin-top:20px">

<a href="https://m5stack.oss-cn-shenzhen.aliyuncs.com/EasyLoader/Unit/EasyLoader_NCIR.exe"><button type="button" class="btn btn-primary">click to download EasyLoader</button></a>

>1.EasyLoader is a simple and fast program burner. Every product page in EasyLoader provides a product-related case program. It can be burned to the master through simple steps, and a series of function verification can be performed. .

>2. After downloading the software, double-click to run the application, connect the M5 device to the computer through the data cable, select the port parameters, click **"Burn"** to start burning. (**For M5StickC burning, please Set the baud rate to 750000 or 115200**)

?>3. Currently EasyLoader is only suitable for Windows operating system, compatible with M5 system adopts ESP32 as the control core host. Before installing for M5Core, you need to install CP210X driver (you do not need to install with M5StickC as controller)[Click here to view the driver installation tutorial](en/related_documents/M5Burner#install-usb-driver)

## Example

### 1. Arduino IDE

The code below is incomplete. TO get complete code, please click [here](https://github.com/m5stack/M5Stack/tree/master/examples/Unit/NCIR)

### 2. UIFlow

To get complete code, please click [here](https://github.com/m5stack/M5-ProductExampleCodes/tree/master/Unit/NCIR/UIFlow)

<img src="assets/img/product_pics/unit/unit_example/NCIR/example_unit_ncir_03.png">

## Schematic

<img src="assets/img/product_pics/unit/ncir_sch.JPG">

### PinMap

<table>
 <tr><td>M5Core (GROVE A)</td><td>GPIO22</td><td>GPIO21</td><td>5V</td><td>GND</td></tr>
 <tr><td>NCIR Unit</td><td>SCL</td><td>SDA</td><td>5V</td><td>GND</td></tr>
</table>

<script>

   var purchase_link = 'https://m5stack.com/collections/m5-unit/products/ncir-sensor-unit';


   anchor_search(purchase_link);
   scrollFunc();

</script>