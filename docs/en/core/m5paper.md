# M5Paper

## Description

**M5Paper** is a touchable ink screen master control device launched by M5Stack. The controller adopts ESP32-D0WD. An electronic ink screen with a resolution of 540*960 @4.7" is embedded on the front, and it supports 16-level grayscale display. With GT911 capacitive touch panel, it supports two-point touch and a variety of gesture operations. Compared with ordinary LCD The screen, electronic ink screen can provide users with a better text reading experience, and at the same time have low power consumption, image retention when power off. Integrated dial wheel encoder, SHT30 temperature and humidity sensor, and physical buttons. SD reserved for data storage Card interface, and integrated FM24C02 storage chip (256KB-EEPROM) for power-off storage of user data. Built-in 1150mAh lithium battery, combined with internal RTC (BM8563) can achieve sleep and wake-up functions, which can provide strong battery life for the device Capability. Opened 3 sets of HY2.0-4P peripheral interfaces, which can expand various sensor devices and provide unlimited possibilities for subsequent application function development.

## Product Features

- Embedded ESP32, support WiFi, Bluetooth
- Built-in 16M Flash
- E-Ink low-power display panel
- Support two-point touch
- Nearly 180 degree viewing angle
- Built-in 1150mAh large capacity lithium battery
- HY2.0-4P peripheral interface*3

## Include

-  1x M5Paper

## Applications

- Internet of Things Controller
- E-book reader
- Industrial instrument display panel
- electronic label

## Specification

<table>
   <tr style="font-weight:bold">
      <td>Resources</td>
      <td>Parameter</td>
   </tr>
   <tr>
      <td>ESP32-D0WD</td>
      <td>240MHz dual core, 600 DMIPS, 520KB SRAM, Wi-Fi, dual mode Bluetooth</td>
   </tr>
   <tr>
      <td>Flash</td>
      <td>16MB</td>
   </tr>
   <tr>
      <td>PSRAM</td>
      <td>8MB</td>
   </tr>
   <tr>
      <td>Power Input</td>
      <td>5V @ 500mA</td>
   </tr>
   <tr>
      <td>Interface</td>
      <td>TypeC*1, HY2.0-4P*3 , SD Card</td>
   </tr>
   <tr>
      <td>E-Ink</td>
      <td>model：EPD_ED047TC1 | 540*960@4.7" | Grayscale : 16级 | Display area : 58.32*103.68mm | Display driver chip : IT8951</td>
   </tr>
   <tr>
      <td>Physical button</td>
      <td>Encoder*1 ， RST*1</td>
   </tr>
   <tr>
      <td>RTC</td>
      <td>BM8563</td>
   </tr>
   <tr>
      <td>Antenna</td>
      <td>2.4G 3D Antenna</td>
   </tr>
   <tr>
      <td>PIN OUT</td>
      <td>G25, G32, G26, G33, G18, G19</td>
   </tr>
   <tr>
      <td>Battery</td>
      <td>1150mAh@3.7V</td>
   </tr>
   <tr>
      <td>Operating temperature</td>
      <td>32°F to 104°F ( 0°C to 40°C )</td>
   </tr>
   <tr>
      <td>net weight</td>
      <td>86g</td>
   </tr>
   <tr>
      <td>Gross weight</td>
      <td>100g</td>
   </tr>
   <tr>
      <td>Product Size</td>
      <td>116*66x*10mm</td>
   </tr>
   <tr>
      <td>Package Size</td>
      <td>120*70x*14mm</td>
   </tr>
   <tr>
      <td>Case Material</td>
      <td>Plastic ( PC )</td>
   </tr>
</table>

## PinMap

**E-INK & SD Card**

Resolution：540*960
 
<table>
 <tr><td>ESP32 Chip</td><td>GPIO13</td><td>GPIO12</td><td>GPIO14</td><td>GPIO15</td><td>GPIO4</td></tr>
 <tr><td>IT8951</td><td>MISO</td><td>MOSI</td><td>SCK</td><td>CS</td><td>/</td></tr>
 <tr><td>SD Card</td><td>MISO</td><td>MOSI</td><td>SCK</td><td>/</td><td>CS</td></tr>
</table>


**Encoder**

<table>
 <tr><td>ESP32 Chip</td><td>GPIO37</td><td>GPIO38</td><td>GPIO39</td></tr>
 <tr><td>Encoder</td><td>Right</td><td>BTN/PWR</td><td>Left</td></tr>
</table>


**Internal I2C connection**

<table>
 <tr><td>ESP32 Chip</td><td>GPIO21</td><td>GPIO22</td><td>GPIO36</td></tr>
 <tr><td>GT911</td><td>SDA</td><td>SCL</td><td>INT</td></tr>
 <tr><td>SHT30</td><td>SDA</td><td>SCL</td><td>/</td></tr>
 <tr><td>BM8563</td><td>SDA</td><td>SCL</td><td>/</td></tr>
 <tr><td>FM24C02</td><td>SDA</td><td>SCL</td><td>/</td></tr>
</table>

**USB to TTL**

<table>
 <tr><td>ESP32 Chip</td><td>GPIO1</td><td>GPIO3</td></tr>
 <tr><td>CP2104</td><td>RXD</td><td>TXD</td></tr>
</table>

## M5Paper-HY2.0 4P

<table>
      <thead>
         <th>PORT</th>
         <th>PIN</th>
         <th>note:</th>
      </thead>
      <tbody>
      <tr>
         <td>PORT.A</td>
         <td>G25,G32</td>
         <td>I2C</td>
      </tr>
      <tr>
         <td>PORT.B</td>
         <td>G26,G33</td>
         <td>DAC/ADC</td>
      </tr>
      <tr>
         <td>PORT.C</td>
         <td>G18,G19</td>
         <td>UART</td>
      </tr>
    </tbody>
</table>

## ESP32 ADC/DAC

<table>
      <thead>
         <th>ADC1</th>
         <th>ADC2</th>
         <th>DAC1</th>
         <th>DAC2</th>
      </thead>
      <tbody>
      <tr>
         <td>8 channel</td>
         <td>10 channel</td>
         <td>2 channel</td>
         <td>2 channel</td>  
      </tr>
      <tr>
         <td>G32-39</td>
         <td>G0/2/4/12-15/25-27</td>
         <td>G25</td>
         <td>G26</td>
      </tr>
    </tbody>
</table>

For more information about Pin assignment and Pin Remapping, Please refer to [ESP32 Datasheet](https://m5stack.oss-cn-shenzhen.aliyuncs.com/resource/docs/datasheet/core/esp32_datasheet_en.pdf)

## Related Link

- **Datasheet** 
   - [ESP32](https://m5stack.oss-cn-shenzhen.aliyuncs.com/resource/docs/datasheet/core/esp32_datasheet_en.pdf)
   - [SHT30 Datasheet](https://m5stack.oss-cn-shenzhen.aliyuncs.com/resource/docs/datasheet/unit/SHT3x_Datasheet_digital.pdf)
   - [BM8563](https://m5stack.oss-cn-shenzhen.aliyuncs.com/resource/docs/datasheet/core/BM8563_V1.1_en.pdf)
   - [SY7088](https://m5stack.oss-cn-shenzhen.aliyuncs.com/resource/docs/datasheet/core/SY7088-Silergy.pdf)
   <!-- - [GT911编程指南](https://m5stack.oss-cn-shenzhen.aliyuncs.com/resource/docs/datasheet/core/m5paper/GT91XX_Programming%20Guide_2012102301.pdf) -->
   - [GT911-datasheet](https://m5stack.oss-cn-shenzhen.aliyuncs.com/resource/docs/datasheet/core/m5paper/gt911_datasheet.pdf)


## Schematic

   - [M5 PAPER Schematic](https://m5stack.oss-cn-shenzhen.aliyuncs.com/resource/docs/schematic/Core/m5paper/M5_PAPER_SCH.pdf)

<script>

   // var purchase_link = 'https://m5stack.com/collections/m5-core/products/m5stack-core2-esp32-iot-development-kit';

   // var quickstart_link = 'https://docs.m5stack.com/#/zh_CN/quick_start/core2/m5stack_core2_quick_start';

   // anchor_search(purchase_link,quickstart_link);
   anchor_search();
   scrollFunc();

</script>