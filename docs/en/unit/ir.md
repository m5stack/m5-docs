# IR

<div class="badge badge-pill badge-primary product_sku_tag">SKU:U002</div>

<div class="product_pic"><img src="assets/img/product_pics/unit/M5GO_Unit_ir.webp"></div>

## Description

**IR** is an pair of infrared photoelectric. Also from M5Go Kit, Contains 1x infrared emitter and 1x receiver.
IR remote control is widely used in consumer electronics,it can be used to operate devices such as a television set, DVD player, or other home appliance, from a short distance. Since this unit comes with emitter and receiver, you can practice not only on IR encode but also on IR decode.

## Product Features

- 1x infrared emitter
- 1x infrared receiver
- Distance range: < 5m
- Software Development Platform: Arduino, UIFlow(Blockly,Python)
- Two Lego-compatible holes
- Product Size：32.2mm x 24.2mm x 8.9mm
- Product weight：4.3g

## Include

- 1x IR Unit
- 1x Grove Cable

## EasyLoader

<img src="https://m5stack.oss-cn-shenzhen.aliyuncs.com/image/EasyLoader_logo.webp" width="100px" style="margin-top:20px">

<a href="https://m5stack.oss-cn-shenzhen.aliyuncs.com/EasyLoader/Unit/EasyLoader_IR.exe"><button type="button" class="btn btn-primary">click to download EasyLoader</button></a>

>1.EasyLoader is a simple and fast program burner. Every product page in EasyLoader provides a product-related case program. It can be burned to the master through simple steps, and a series of function verification can be performed. .

>2. After downloading the software, double-click to run the application, connect the M5 device to the computer through the data cable, select the port parameters, click **"Burn"** to start burning. (**For M5StickC burning, please Set the baud rate to 750000 or 115200**)

?>3. Currently EasyLoader is only suitable for Windows operating system, compatible with M5 system adopts ESP32 as the control core host. Before installing for M5Core, you need to install CP210X driver (you do not need to install with M5StickC as controller)[Click here to view the driver installation tutorial](en/related_documents/M5Burner#install-usb-driver)

## Schematic

<img src="assets/img/product_pics/unit/ir_sch.JPG">

### PinMap

<table>
 <tr><td>M5Core(GROVE B)</td><td>GPIO36</td><td>GPIO26</td><td>5V</td><td>GND</td></tr>
 <tr><td>IR Unit</td><td>Receiver Pin</td><td>Transmitter Pin</td><td>5V</td><td>GND</td></tr>
</table>

## Example

### 1. Arduino IDE

To get the complete code, please click [here](https://github.com/m5stack/M5-ProductExampleCodes/tree/master/Unit/IR/Arduino)

### 2. UIFlow

To get the complete code, please click [here](https://github.com/m5stack/M5-ProductExampleCodes/tree/master/Unit/IR/UIFlow)

<img src="assets/img/product_pics/unit/unit_example/IR/example_unit_ir_03.webp">

<script>

   var purchase_link = 'https://m5stack.com/collections/m5-unit/products/ir-unit';

   anchor_search(purchase_link);
   scrollFunc();

</script>