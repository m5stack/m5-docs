# CoreInk

<!-- <el-tag effect="plain">SKU:K010</el-tag> -->

<!-- <div class="product_pic"><img class="pic" src="assets/img/product_pics/core/core2/core2_01.webp"><img class="pic" src="assets/img/product_pics/core/core2/core2_02.webp"></div> -->

## Description

**CoreInk** is a brand new E-ink display in the M5Stack cores range. Controlled by the ESP32-PICO-D4 This new device includes a 200x200 1.54" Black and White E-Ink Display. Compared to a regular LCD，E-ink displays are easier on the eyes, which makes them a great choice for reading or viewing for longer periods. Other benefits are the low power consumption and the ability to retain the image even if power to the display is terminated。For control the CoreInk integrates an multi-function button,A physical button, integrated status LED and buzzer.The device also includes a 390mAh Lipo，RTC(BM8563)for controlling accurate timing and deep sleep funcionality. CoreInk features independent reset and power buttons，expansion ports(HY2.0-4P、M-BUS、HAT expansion)for attaching external sensors to expand functionailty，for unlimited possibilities。

?>Warning: Please avoid using high refresh rates，reccommended refresh rate is(15s/per refresh), Do not expose to ultraviolet rays for a long time, otherwise it may cause irreversible damage to the ink screen.

## Product Features

- ESP32 Standard wireless functions WiFi、Bluetooth
- Internal 4M Flash
- Low Power Display
- 180 degree viewing angle
- Expansion ports
- Internal Battery
- Expandable

## Includes

- 1x CoreInk
- 1x Type-C USB(20cm)

## Application

- IoT Terminal
- E-Book
- Industrial Control Panel
- Smart Home Panel

## Specification

<table>
   <tr style="font-weight:bold">
      <td>Resource</td>
      <td>Parameter</td>
   </tr>
   <tr>
      <td>ESP32-PICO-D4</td>
      <td>240MHz dual core, 600 DMIPS, 520KB SRAM, Wi-Fi, dual mode Bluetooth</td>
   </tr>
   <tr>
      <td>Flash</td>
      <td>4MB Flash</td>
   </tr>
   <tr>
      <td>Input Voltage</td>
      <td>5V @ 500mA</td>
   </tr>
   <tr>
      <td>Ports</td>
      <td>TypeC*1, HY2.0-4P*1 , M-BUS Female Connector，Pin Array/ Hat Expansion</td>
   </tr>
   <tr>
      <td>Screen</td>
      <td>GDEW0154M09 | SPI Port | 200*200@1.54" | Dpi:184 | 1-bit Black & White(Grayscale：2) |<br>
         Viewing Area(mm)：27.6x27.6 | 点间距(mm)	0.138x0.138 | Refresh Time（s）	0.82 /局刷时间（s）	0.24
      </td>
   </tr>
   <tr>
      <td>Physical Buttons</td>
      <td>Programmable *1 ， Reset *1， Power *1</td>
   </tr>
   <tr>
      <td>LED</td>
      <td>Green LED x 1</td>
   </tr>
   <tr>
      <td>RTC</td>
      <td>BM8563</td>
   </tr>   
   <tr>
      <td>Buzzer</td>
      <td>Passive Buzzer*1</td>
   </tr>   
   <tr>
      <td>Wifi</td>
      <td>2.4G 3D Antenna</td>
   </tr>
   <tr>
      <td>PINS</td>
      <td>G25, G26, G36, G23, G34, G18, G21, G22, G14, G13</td>
   </tr>
   <tr>
      <td>Battery</td>
      <td>390mAh@3.7V</td>
   </tr>
   <tr>
      <td>Working Temp</td>
      <td>32°F to 104°F ( 0°C to 40°C )</td>
   </tr>
   <tr>
      <td>Net Weight</td>
      <td>xxg</td>
   </tr>
   <tr>
      <td>Gross Weight</td>
      <td>xxg</td>
   </tr>
   <tr>
      <td>Dimensions</td>
      <td>x*x*xmm</td>
   </tr>
   <tr>
      <td>Package Size</td>
      <td>x*x*xmm</td>
   </tr>
   <tr>
      <td>Case Material</td>
      <td>Plastic ( PC )</td>·
   </tr>
</table>

## Pin Mapping

**E-Ink Display**

Screen Resolution：200x200

<table>
 <tr><td>ESP32 Chip</td><td>GPIO4</td><td>GPIO0</td><td>GPIO15</td><td>GPIO9</td><td>GPIO18</td><td>GPIO23</td></tr>
 <tr><td>GDEW0154M09</td><td>BUSY</td><td>RST</td><td>D/C</td><td>CS</td><td>SCK</td><td>MOSI</td></tr>
</table>

**Multi-function button & Physical Button & LED & Buzzer**

<table>
 <tr><td>ESP32 Chip</td><td>GPIO37</td><td>GPIO38</td><td>GPIO39</td><td>GPIO5</td><td>GPIO10</td><td>GPIO2</td></tr>
 <tr><td>Multi-function button</td><td>Left position</td><td>Button press</td><td>Right position</td><td>/</td><td>/</td><td>/</td></tr>
 <tr><td>Physical Button</td><td>/</td><td>/</td><td>/</td><td>Physical Button</td><td>/</td><td>/</td></tr>
 <tr><td>LED</td><td>/</td><td>/</td><td>/</td><td>/</td><td>LED</td><td>/</td></tr>
 <tr><td>Buzzer</td><td>/</td><td>/</td><td>/</td><td>/</td><td>/</td><td>Buzzer</td></tr>
</table>

**USB Serial**

<table>
 <tr><td>ESP32 Chip</td><td>GPIO1</td><td>GPIO3</td></tr>
 <tr><td>CP2104</td><td>RXD</td><td>TXD</td></tr>
</table>


**Internal I2C Connection**

<table>
 <tr><td>ESP32 Chip</td><td>GPIO21</td><td>GPIO22</td></tr>
 <tr><td>BM8563</td><td>SDA</td><td>SCL</td></tr>
</table>

## Coreink M-BUS Schematic

<!-- <img class="pic" src="assets/img/product_pics/core/core2/core2_mbus.webp" width = "50%"> -->

## Coreink-HY2.0 4P Port

<table>
      <thead>
         <th>PORT</th>
         <th>PIN</th>
         <th>Protocol:</th>
      </thead>
      <tbody>
      <tr>
         <td>EXT-PORT</td>
         <td>G32/33</td>
         <td>I2C</td>
      </tr>
    </tbody>
</table>

## ESP32 ADC/DAC Mappable Pins

<table>
      <thead>
         <th>ADC1</th>
         <th>ADC2</th>
         <th>DAC1</th>
         <th>DAC2</th>
      </thead>
      <tbody>
      <tr>
         <td>8 Channel</td>
         <td>10 Channel</td>
         <td>2 Channel</td>
         <td>2 Channel</td>  
      </tr>
      <tr>
         <td>G32-39</td>
         <td>G0/2/4/12-15/25-27</td>
         <td>G25</td>
         <td>G26</td>
      </tr>
    </tbody>
</table>

For more info on specific pin functions refer to the official ESP32 Docs[ESP32 datasheet](https://m5stack.oss-cn-shenzhen.aliyuncs.com/resource/docs/datasheet/core/esp32_datasheet_cn.pdf)


## Related Link

- **Datasheet** 
   - [ESP32](https://m5stack.oss-cn-shenzhen.aliyuncs.com/resource/docs/datasheet/core/esp32_datasheet_cn.pdf)
   - [BM8563](https://m5stack.oss-cn-shenzhen.aliyuncs.com/resource/docs/datasheet/core/BM8563_V1.1_cn.pdf)
   - [SY7088](https://m5stack.oss-cn-shenzhen.aliyuncs.com/resource/docs/datasheet/core/SY7088-Silergy.pdf)
   - [GDEW0154M09](https://m5stack.oss-cn-shenzhen.aliyuncs.com/resource/docs/datasheet/core/CoreInk-K048-GDEW0154M09%20V2.0%20Specification.pdf)


## Schematic

<img src="assets/img/product_pics/core/coreink/coreink_sch1.webp">


<script>

   var purchase_link = 'https://m5stack.com/collections/m5-core/products/m5stack-core2-esp32-iot-development-kit';

   var quickstart_link = 'https://docs.m5stack.com/#/zh_CN/quick_start/core2/m5stack_core2_quick_start';

   anchor_search(purchase_link,quickstart_link);
   scrollFunc();

</script>