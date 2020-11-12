# M5GO BOTTOM2

<el-tag effect="plain">SKU:A014-C</el-tag>

<div class="product_pic"><img src="assets/img/product_pics/base/m5go_bottom2/m5go_bottom2_01.webp"><img src="assets/img/product_pics/base/m5go_bottom2/m5go_bottom2_02.webp"></div>

## Description

**M5GO BOTTOM2** is an expansion base designed for M5Core2. It integrates an MPU6886 6 axis gyro/accelerometer，digital mic(SPM1423) and 500mAh LiPo battery. The base also includes 2 HY2.0-4P expanion ports capable of ADC/DAC/UART protocols and data input/output，which allows the use of units from the M5Stack range. On either side of the base beneath a diffuser are a total of 10 programmable RGB LEDs(SK6812)，which can be used as a form of notification or for impressive lighting effectss. Beneath the device are a set of pogo pins which attach to the included base for charging，The charging base incorporates a TP4057 charging IC which facilitates efficient and safe charging. The pogo pin connector can also be used for I2C communication, therefore if the user wants to attach or modify the base to include I2C devices they are able to do so. On the bottom of the device are an array of Lego™ compatible holes which makes integration of your Lego™ projects a breeze.

## Features

- Compatible with M5Core2
- Digital microphone
- Programmable RGB LED
- HY2.0-4P expansion ports
- Lego™ compatible
- Pogo Pin magnetic charging

## Includes

- 1x M5GO BOTTOM2
- 2x M3*16 screws
- 2x M3*18 screws

## Specifications

<table>
   <tr style="font-weight:bold">
      <td>Resource</td>
      <td>Parameter</td>
   </tr>
   <tr>
      <td>Mic</td>
      <td>SPM1423</td>
   </tr>
   <tr>
      <td>LED</td>
      <td>SK6812*10</td>
   </tr>
   <tr>
      <td>IMU</td>
      <td>MPU6886</td>
   </tr>
   <tr>
      <td>Net Weight</td>
      <td>31g</td>
   </tr>
   <tr>
      <td>Gross Weight</td>
      <td>45g</td>
   </tr>
   <tr>
      <td>Product Dimensions</td>
      <td>54*54*8mm</td>
   </tr>
   <tr>
      <td>Packaging Dimensions</td>
      <td>60*57*17mm</td>
   </tr>
 </table>

## Pin Mapping

**SK6812-LED Bar**

<table>
 <tr><td>ESP32 Chip</td><td>GPIO25</td></tr>
 <tr><td>SK6812</td><td>DATA</td></tr>
</table>

**SPM1423-Mic**

<table>
 <tr><td>ESP32 Chip</td><td>GPIO34</td><td>GPIO0</td></tr>
 <tr><td>SPM1423</td><td>DAT</td><td>CLK</td></tr>
</table>

**MPU6886 & Pogo Pin**

<table>
 <tr><td>ESP32 Chip</td><td>GPIO21</td><td>GPIO22</td></tr>
 <tr><td>MPU6886</td><td>SDA</td><td>SCL</td></tr>
 <tr><td>Pogo Pin</td><td>SDA</td><td>SCL</td></tr>
</table>

**HY2.0-4P-PortB(black)**

<table>
 <tr><td>ESP32 Chip</td><td>GPIO26</td><td>GPIO36</td></tr>
 <tr><td>PortB</td><td>GPIO26(DAC)</td><td>GPIO36(ADC)</td></tr>
</table>

**HY2.0-4P-PortC(blue)**

<table>
 <tr><td>ESP32 Chip</td><td>GPIO13</td><td>GPIO14</td></tr>
 <tr><td>PortC</td><td>GPIO13(RXD2)</td><td>GPIO14(TXD2)</td></tr>
</table>

**M5GO-BOTTOM2-BUS**

<img src="assets/img/product_pics/base/m5go_bottom2/m5go_bottom2_bus.webp">

## Related Links

   - [SPM1423](https://m5stack.oss-cn-shenzhen.aliyuncs.com/resource/docs/datasheet/core/SPM1423HM4H-B_datasheet_en.pdf)
   - [MPU6886](https://m5stack.oss-cn-shenzhen.aliyuncs.com/resource/docs/datasheet/core/MPU-6886-000193%2Bv1.1_GHIC_en.pdf)


## Example

- **Arduino**

Use with Arduino, please click [here](https://github.com/m5stack/M5-ProductExampleCodes/tree/master/Base/M5GO_BOTTOM2)


## Schematic

<img src="assets/img/product_pics/base/m5go_bottom2/m5go_bottom2_sch.webp">

<script>

   anchor_search();
   scrollFunc();

</script>