# Dual-BUTTON

<div class="badge badge-pill badge-primary product_sku_tag">SKU:U025</div>

<div class="product_pic"><img src="assets/img/product_pics/unit/M5GO_Unit_dual_button.webp"></div>

## Description

**Dual Button**, as its namesake, has two buttons with different color. If the Button unit is not enough, how about double it up to a pair. They share the exact same mechanism, button status can be detected by the input pin status,simply capture the high/low electrical level.

This unit communicates with M5Core through GROVE B port.


## Product Features

- GROVE interface, support [UIFlow](http://flow.m5stack.com) and [Arduino](http://www.arduino.cc)
- Two Lego-compatible holes
- Product Size：48.2mm x 24.2mm x 15.2mm
- Product weight：7.6g

## Include

- 1x Dual BUTTON Unit
- 1x Grove Cable

## Applications

- Game Controller
- Remote control switch

## Specification

<table>
   <tr style="font-weight:bold">
      <td>Resources</td>
      <td>Parameter</td>
   </tr>
   <tr>
      <td>RGB LED</td>
      <td>WS2812 x 37</td>
   </tr>
   <tr>
      <td>net weight</td>
      <td>8g</td>
   </tr>
   <tr>
      <td>Gross weight</td>
      <td>22g</td>
   </tr>
   <tr>
      <td>Product Size</td>
      <td>48*24*8mm</td>
   </tr>
   <tr>
      <td>Package Size</td>
      <td>60*57*17mm</td>
   </tr>
</table>

## EasyLoader

<img src="https://m5stack.oss-cn-shenzhen.aliyuncs.com/image/EasyLoader_logo.webp" width="100px" style="margin-top:20px">

<a href="https://m5stack.oss-cn-shenzhen.aliyuncs.com/EasyLoader/Unit/EasyLoader_Dual_Button.exe"><button type="button" class="btn btn-primary">click to download EasyLoader</button></a>

>1.EasyLoader is a simple and fast program burner. Every product page in EasyLoader provides a product-related case program. It can be burned to the master through simple steps, and a series of function verification can be performed. .

>2. After downloading the software, double-click to run the application, connect the M5 device to the computer through the data cable, select the port parameters, click **"Burn"** to start burning. (**For M5StickC burning, please Set the baud rate to 750000 or 115200**)

?>3. Currently EasyLoader is only suitable for Windows operating system, compatible with M5 system adopts ESP32 as the control core host. Before installing for M5Core, you need to install CP210X driver (you do not need to install with M5StickC as controller)[Click here to view the driver installation tutorial](en/related_documents/M5Burner#install-usb-driver)

## Schematic

<img src="assets/img/product_pics/unit/dual_button_sch.webp">

### PinMap

<table>
 <tr><td>M5Core (GROVE B)</td><td>GPIO36</td><td>GPIO26</td><td>5V</td><td>GND</td></tr>
 <tr><td>DUAL_BUTTON Unit</td><td>Blue Button Pin</td><td>Red Button Pin</td><td>5V</td><td>GND</td></tr>
</table>


## Example

### 1. Arduino IDE

The code below is incomplete(just for usage). TO get the complete code, please click [here](https://github.com/m5stack/M5Stack/tree/master/examples/Unit/DUAL_BUTTON)

### 2. UIFlow

To get the complete code, please click [here](https://github.com/m5stack/M5-ProductExampleCodes/tree/master/Unit/DUAL_BUTTON/UIFlow)

<img src="assets/img/product_pics/unit/unit_example/DUAL_BUTTON/example_unit_dual_button_05.webp">

<script>

   var purchase_link = 'https://m5stack.com/collections/m5-unit/products/mini-dual-button-unit';

   anchor_search(purchase_link);
   scrollFunc();

</script>