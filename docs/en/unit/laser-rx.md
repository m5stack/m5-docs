# LASER.RX

<el-tag effect="plain">SKU:U065</el-tag>

<div class="product_pic"><img src="assets\img\product_pics\unit\laser_rx\unit_laser_rx_01.webp"><img src="assets\img\product_pics\unit\laser_rx\unit_laser_rx_02.webp"></div>

## Description

This is one of the communication devices among M5Units, a Laser receiver. It is mainly built with a laser transistor.
Laser communications devices are wireless connections through the atmosphere. They work similarly to fiber-optic links, except the beam is transmitted through free space. While the transmitter and receiver must require line-of-sight conditions, they have the benefit of eliminating the need for broadcast rights and buried cables. Laser communications systems can be easily deployed since they are inexpensive, small, low power and do not require any radio interference studies. 
Two parallel beams are needed, one for transmission and one for reception. Therefore we have a LASER.TX parallelly.  Port type of this unit is PORTB.

## Product Features

- Laser receiver
- Work voltage: 5V
- Pair with LASER.TX
- Response Frequency: 140KHz ~205KHz
- Two Lego-compatible holes
- Program Platform: Arduino, UIFlow(Blockly, Python)

## Include

- 1x LASER.RX unit
- 1x GROVE cable

## Applications

- Laser communication system on space. 

## Specification

<table>
   <tr style="font-weight:bold">
      <td>Resources</td>
      <td>Parameter</td>
   </tr>
   <tr>
      <td>Operating Voltage</td>
      <td>5V</td>
   </tr>
   <tr>
      <td>Receive frequency</td>
      <td>140KHz ~205KHz</td>
   </tr>
   <tr>
      <td>net weight</td>
      <td>4g</td>
   </tr>
   <tr>
      <td>Gross weight</td>
      <td>18g</td>
   </tr>
   <tr>
      <td>Product Size</td>
      <td>32*24*8mm</td>
   </tr>
   <tr>
      <td>Package Size</td>
      <td>60*57*17mm</td>
   </tr>
</table>

## Schematic

<img src="assets/img/product_pics/unit/laser_rx/unit_laser_rx_04.webp" width="50%" height="50%">

## EasyLoader

<img src="https://m5stack.oss-cn-shenzhen.aliyuncs.com/image/EasyLoader_logo.webp" width="100px" style="margin-top:20px">

<a href="https://m5stack.oss-cn-shenzhen.aliyuncs.com/EasyLoader/Unit/LASER/EasyLoader_LASER_RX.exe"><button type="button" class="btn btn-primary">click to download EasyLoader</button></a>

>1.EasyLoader is a simple and fast program burner. Every product page in EasyLoader provides a product-related case program. It can be burned to the master through simple steps, and a series of function verification can be performed. .

>2. After downloading the software, double-click to run the application, connect the M5 device to the computer through the data cable, select the port parameters, click **"Burn"** to start burning. (**For M5StickC burning, please Set the baud rate to 750000 or 115200**)

?>3. Currently EasyLoader is only suitable for Windows operating system, compatible with M5 system adopts ESP32 as the control core host. Before installing for M5Core, you need to install CP210X driver (you do not need to install with M5StickC as controller)[Click here to view the driver installation tutorial](en/related_documents/M5Burner#install-usb-driver)

### Pin Map

<table>
 <tr><td>M5 PORTB</td><td>GPIO36</td><td>GPIO26</td><td>5V</td><td>GND</td></tr>
 <tr><td>LASER_RX</td><td>RX</td><td>/</td><td>5V</td><td>GND</td></tr>
</table>

## Example

### 1. Arduino IDE

To get complete code, please click [here](https://github.com/m5stack/M5Stack/tree/master/examples/Unit/LASER)

### 2. UIFlow

<img src="assets/img/product_pics/unit/laser_rx/laser-rx.webp">

<script>

   var purchase_link = 'https://m5stack.com/collections/m5-unit/products/laser-rx-unit';

   anchor_search(purchase_link);
   scrollFunc();

</script>