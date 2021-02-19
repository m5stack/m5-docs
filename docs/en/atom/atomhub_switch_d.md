# ATOM HUB SWITCH D

<el-tag effect="plain">SKU:K042-D</el-tag>

<div class="product_pic"><img src="assets/img/product_pics/atom_base/atomhub_switch_d/atom_switch_d_01.webp"><img src="assets/img/product_pics/atom_base/atomhub_switch_d/atom_switch_d_02.webp"></div>

## Description

**Atom Hub Switch D** is a dual relay expansion kit. The D in the name stands for "Direct" since the power supply is directly connected to the relays. The AC power supply flows to the NO(Normally Open) contacts of the two relays and can be controlled via the M5Atom. When in use, the user only needs to connect the electrical load to the relay, and there is no need to connect the power line separately. Compared with the previous relay control scheme, this module will be more concise and efficient in controlling the electric load. In addition to the power supply for the relay, the input power supply will also provide 5V/1A DC power supply for the ATOM through the built-in step-down module. In order to ensure the safety of use, the power input circuit has overheating and short-circuit protection, when the current is too high or a short circuit occurs It can effectively disconnect the circuit to prevent damage to the components. A built-in SP485EE level conversion chip, provides an RS485 communication interface to support multi-device communication. It also integrates a 9-24V step-down 5V circuit to adapt to the power demand in industrial scenarios, and expand power supply capabilities. 

A pair of HY2.0-4P ports are included to connect to I2C peripherals or general I/O devices. Combined with ATOM's built-in Bluetooth and WIFI functions, ATOM HUB SWITCH D can quickly build remote device switch applications.

## Product Features

- Compatible ATOM Matrix/ATOM Lite
- Built-in AC-DC circuit
- 2-way relay
- Built-in RS485 level-conversion, supporting Modbus
- HY2.0-4P port extend
- Short circuit protection
- Remote control via Bluetooth, WiFi and RS485

## Include

- 1x ATOM SWITCH D
- 1x ATOM Lite
- 4x Magnet
- 1x double-side tape
- 1x DIN Rail
- 1x 3.96*4P plug
- 3x 3.96*3P plug
- 1x M4 Hex Key
- 1x M2 Hex Key
- 2x M4*10mm Hexagon countersunk screw
- 1x M2*20mm Hexagon socket cup head machine screw

## Applications

- Intelligent switch

## Switch & Switch-D Compared

<table>
   <tr style="font-weight:bold">
      <td>/</td>
      <td>Switch</td>
      <td>Switch-D</td>
   </tr>
   <tr>
      <td>Relay Current</td>
      <td>AC 250V/10A</td>
      <td>AC 250V/5A</td>
   </tr>
   <tr>
      <td>Power Input</td>
      <td>HT3.96R 2P</td>
      <td>HT3.96R 3P</td>
   </tr>
   <tr>
      <td>Relay Interface</td>
      <td>(NO,NC,COM) x2</td>
      <td><mark>(NO(connect to the AC power L line)</mark>, <mark>COM(connect to the AC power N line))</mark> x2</td>
   </tr>
 </table>

?>Please refer to the figure below for details

<img src="assets/img/product_pics/atom_base/atomhub_switch_d/atom_switch_d_04.webp">

## Specification

<table>
   <tr style="font-weight:bold">
      <td>Specification</td>
      <td>Parameter</td>
   </tr>
   <tr>
      <td>Relay</td>
      <td>AC 250V/10A(Instantaneous current 16A), DC 5V/1A</td>
   </tr>
   <tr>
      <td>Switch power supply(AC-DC)</td>
      <td>AC 250V-DC 5V</td>
   </tr>
   <tr>
      <td>RS485 supply voltage</td>
      <td>9V-24V</td>
   </tr>
   <tr>
      <td>Interface</td>
      <td>1x HY2.0(PORT A)， 1x HT3.96R 4P(RS485), 2x HT3.96R 3P(Relay), 1x HT3.96R 3P(AC/DC IN)</td>
   </tr>
   <tr>
      <td>Net weight</td>
      <td>134g</td>
   </tr>
   <tr>
      <td>Gross weight</td>
      <td>158g</td>
   </tr>
   <tr>
      <td>Product Size</td>
      <td>72*40*30mm</td>
   </tr>
   <tr>
      <td>Package Size</td>
      <td>104*77*35mm</td>
   </tr>
   <tr>
      <td>Case material</td>
      <td>Plastic ( PC )</td>
   </tr>
 </table>

## EasyLoader

>EasyLoader is a concise and fast program writer, which has a built-in case program related to the product. It can be burned to the main control by simple steps to perform a series of function verification. Please install the corresponding driver according to the device type. M5Core host [Please click here to view the CP210X driver installation tutorial](en/arduino/arduino_development), M5StickC/V/T/ATOM series can be used without driver)

- **Windows** 
   - [FactoryTest](https://m5stack.oss-cn-shenzhen.aliyuncs.com/EasyLoader/Windows/CORE/EasyLoader_M5Paper_FactoryTest.exe)

## Related Link

-  **Datasheet** 
    - [SP485EE](https://m5stack.oss-cn-shenzhen.aliyuncs.com/resource/docs/datasheet/hat/SP485EEN_en.pdf)

### Pin Map

<table>
 <tr><td>ATOM</td><td>22</td><td>19</td><td>33</td><td>23</td><td>25</td><td>21</td></tr>
 <tr><td>ATOM HUB SWITCH D</td><td>Relay1</td><td>Relay2</td><td>RX</td><td>TX</td><td>SDA</td><td>SCL</td></tr>
</table>

## Schematic

<img src="assets/img/product_pics/atom_base/atomhub_switch_d/atom_switch_d_03.webp">

## Example

### 1. Arduino

- [Click here to download the Arduino example](https://github.com/m5stack/M5-ProductExampleCodes/tree/master/AtomBase/AtomHubSwitch/AtomHubSwitch)

### 2. UIFlow

- [Click here to download the UIFlow example](https://github.com/m5stack/M5-ProductExampleCodes/tree/master/AtomBase/AtomHubSwitch/UIFlow)

<img src="assets/img/product_pics/atom_base/atomhub_switch/uiflow_atomswitch.webp" width = "50%">

## Video

<video class="video_size" controls>
    <source src="https://m5stack.oss-cn-shenzhen.aliyuncs.com/video/Product_example_video/AtomBase/ATOM_SWITCH_D.mp4" type="video/mp4">
</video>

<script>

   var purchase_link = 'https://m5stack.com/products/atom-hub-switchd-2-relay-kit';

   anchor_search(purchase_link);
   scrollFunc();

</script>