# ToF

<div class="badge badge-pill badge-primary product_sku_tag">SKU:U010</div>

<div class="product_pic"><img src="assets/img/product_pics/unit/tof/unit_tof_01.jpg"><img src="assets/img/product_pics/unit/tof/unit_tof_02.jpg"></div>

## Description

**ToF** that employs time-of-flight techniques to resolve distance between the emit point and the reach point of a subject, measuring the round trip time of an artificial light signal provided by a laser.

This unit integrated a distance measuring sensor VL53L0x providing accurate distance measurement whatever the target reflectance, unlike conventional technologies. It can measure absolute distances up to 2m in less than 30ms.

This unit comunicates with M5Core via I2C(0x29).

*Noitce: If you found ToF performance unstable, means what you have could be the old-version hardware PCB board, Following will teach you how to fix it*

- Disassembling ToF and Check the PCB board, if you see it like this, means it is the NEW(fixed) version. <br> <br> <br>
  <img src="assets/img/product_pics/unit/tof/unit_tof_05.jpg" width="30%" height="30%"><br> <br> <br>
- If not, take off the two MOSFETs (AO3400A), and connect SCL,SDA from GROVE directly to SCL,SDA on VL53L0x. See the above picture for wiring.<br> <br> <br>
<img src="assets/img/product_pics/unit/tof/unit_tof_sch_02.jpg" width="60%" height="60%"><br> <br> <br>
- In this case, make sure you use the 3.3V on SDA and SCL, M5Core GROVE provide 3.3V to data pins, 5V to power pin. only 3.3v allowed on VL53L0x.

## Product Features

- High precision
- Measure absolute distances up to 2m
- The wavelength of laser: 940nm
- Program Platform: Arduino, UIFlow(Blockly, Python)
- Two Lego-compatible holes
- Product Size：32.2mm x 24.2mm x 8.1mm
- Product weight：4g

## Include

- 1x ToF Unit
- 1x Grove Cable

## Applications

-  1D gesture recognition
-  Laser Ranging
-  3D structured light imaging（3D sensing）
-  Camera assist (ultra fast autofocus and depth of field)

## Related Link

- **[VL53L0X Datasheet](https://m5stack.oss-cn-shenzhen.aliyuncs.com/resource/docs/datasheet/hat/VL53L0X_en.pdf)**

## EasyLoader

<img src="https://m5stack.oss-cn-shenzhen.aliyuncs.com/image/EasyLoader_logo.png" width="100px" style="margin-top:20px">

<a href="https://m5stack.oss-cn-shenzhen.aliyuncs.com/EasyLoader/Unit/EasyLoader_TOF.exe"><button type="button" class="btn btn-primary">click to download EasyLoader</button></a>

>1.EasyLoader is a simple and fast program burner. Every product page in EasyLoader provides a product-related case program. It can be burned to the master through simple steps, and a series of function verification can be performed. .

>2. After downloading the software, double-click to run the application, connect the M5 device to the computer through the data cable, select the port parameters, click **"Burn"** to start burning. (**For M5StickC burning, please Set the baud rate to 750000 or 115200**)

?>3. Currently EasyLoader is only suitable for Windows operating system, compatible with M5 system adopts ESP32 as the control core host. Before installing for M5Core, you need to install CP210X driver (you do not need to install with M5StickC as controller)[Click here to view the driver installation tutorial](en/related_documents/M5Burner#install-usb-driver)

## Example

### 1. Arduino IDE

The below code is incomplete(just for usage). If you want the complete code, please click [here](https://github.com/m5stack/M5-ProductExampleCodes/tree/master/Unit/TOF/Arduino)

### 2. UIFlow

If you want the complete code, please click [here](https://github.com/m5stack/M5-ProductExampleCodes/tree/master/Unit/TOF/UIFlow)

<img src="assets/img/product_pics/unit/unit_example/TOF/example_unit_tof_01.png">

## Schematic

[ToF Schematic](https://github.com/m5stack/M5-Schematic/blob/master/Units/UNIT_TOF.pdf)

<img src="assets/img/product_pics/unit/tof/unit_tof_sch_01.jpg">

### PinMap

<table>
 <tr><td>M5Core(GROVE A)</td><td>GPIO22</td><td>GPIO21</td><td>5V</td><td>GND</td></tr>
 <tr><td>ToF Unit</td><td>SCL</td><td>SDA</td><td>5V</td><td>GND</td></tr>
</table>

<script>

   var purchase_link = 'https://m5stack.com/collections/m5-unit/products/tof-sensor-unit';


   anchor_search(purchase_link);
   scrollFunc();

</script>