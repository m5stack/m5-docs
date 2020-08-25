# TRACE

<el-tag effect="plain">SKU:A048</el-tag>

<div class="product_pic"><img src="assets/img/product_pics/unit/unit_trace_01.webp"><img src="assets/img/product_pics/unit/unit_trace_02.webp"></div>

## Description

**TRACE** is mainly consist of 4 sets of IR, 1x infrared emitting and 1x infrared receiver for each set. The infrared LEDs should be placed towards and close to the ground where having black tracing lines and white background (or vice versa) layouts.

The IR transmitter keep emitting, at the mean time infrared ray would be absorbed by different color of objects. Black can absorb more ray than other color, so the infrared receiver (infrared sensitive phototransistor) would receive less which makes the resistance value of the phototransistor would vary with different object color. Then we assign an AD convertor tp capture the data.

This Unit communicates with the M5Core via GROVE PORTA I2C(0x5A).

<img src="assets/img/product_pics/unit/unit_trace_03.webp" width="60%" height="60%">

## Product Features

- operation range: The reflecting surface is less than 11mm from the photoelectric surface
- Program Platform: Arduino, UIFlow(Blockly,Python)
- Two Lego-compatible holes

## Include

- 1x TRACE Unit

## Applications

- Self-tracing robot

## Specification

<table>
   <tr style="font-weight:bold">
      <td>Resources</td>
      <td>Parameter</td>
   </tr>
   <tr>
      <td>net weight</td>
      <td>32g</td>
   </tr>
   <tr>
      <td>Gross weight</td>
      <td>34g</td>
   </tr>
   <tr>
      <td>Product Size</td>
      <td>70*16*18mm</td>
   </tr>
   <tr>
      <td>Package Size</td>
      <td>200*100*10mm</td>
   </tr>
 </table>

## Related Link

- **[TRACE Firmeare](https://github.com/m5stack/M5-ProductExampleCodes/tree/master/Unit/TRACE/firmware_328p)**


## EasyLoader

<img src="https://m5stack.oss-cn-shenzhen.aliyuncs.com/image/EasyLoader_logo.webp" width="100px" style="margin-top:20px">

<a href="https://m5stack.oss-cn-shenzhen.aliyuncs.com/EasyLoader/Unit/EasyLoader_TRACE.exe"><el-button type="primary">download EasyLoader</el-button></a>

>1.EasyLoader is a simple and fast program burner. Every product page in EasyLoader provides a product-related case program. It can be burned to the master through simple steps, and a series of function verification can be performed. .

>2. After downloading the software, double-click to run the application, connect the M5 device to the computer through the data cable, select the port parameters, click **"Burn"** to start burning. (**For M5StickC burning, please Set the baud rate to 750000 or 115200**)

?>3. Currently EasyLoader is only suitable for Windows operating system, compatible with M5 system adopts ESP32 as the control core host. Before installing for M5Core, you need to install CP210X driver (you do not need to install with M5StickC as controller)[Click here to view the driver installation tutorial](en/related_documents/M5Burner#install-usb-driver)

## Schematic

<img src="assets/img/product_pics/unit/trace_sch.webp">

### PinMap

<table>
 <tr><td>M5Core(GROVE A)</td><td>GPIO22</td><td>GPIO21</td><td>5V</td><td>GND</td></tr>
 <tr><td>TRACE Unit</td><td>SCL</td><td>SDA</td><td>5V</td><td>GND</td></tr>
</table>

**Mega328 ISP**Download interface Pin foot definition

<img src="assets\img\product_pics\app\mega328_isp.webp" width="30%" height="30%">

## Example

### 1. Arduino IDE

The code below is incomplete. To get complete code, please click [here](https://github.com/m5stack/M5Stack/tree/master/examples/Unit/TRACE)


<img src="assets/img/product_pics/unit/unit_trace_04.webp">

### 2. UIFlow

To get complete code, please click [here](https://github.com/m5stack/M5-ProductExampleCodes/tree/master/Unit/TRACE/UIFlow)

<img src="assets/img/product_pics/unit/unit_example/TRACE/example_unit_trace_01.webp">

<script>

   var purchase_link = 'https://m5stack.com/collections/m5-unit/products/m5stack-trace-board-for-lidar-bot';


   anchor_search(purchase_link);
   scrollFunc();

</script>