# M5Paper

<el-tag effect="plain">SKU:K049</el-tag>

<div class="product_pic"><img class="pic" src="assets/img/product_pics/core/m5paper/m5paper_01.webp"></div>

## Tutorial&Quick-Start

Choose the development platform you want to use, view the corresponding tutorial&quick-Start.

<a href="/#/en/quick_start/m5paper/quick_start_arduino"><el-tag effect="plain">Arduino</el-tag></a>
<a href="/#/en/quick_start/m5paper/quick_start_todo"><el-tag effect="plain">ToDo List</el-tag></a>

## Description

**M5Paper** is M5Stacks latest core device with a touch enabled E-ink display. Powered by the ESP32-D0WDQ6-V3 this is our first device to integrate a super sized 540*960 @4.7" E-ink display，which supports 16 grayscale levels. The display is a GT911 capacitive touch screen，which supports two point touch and a variety of gesture controls . Compared to a regular LCD，E-ink displays are easier on the eyes, which makes them a great choice for reading or viewing for longer periods. Other benefits are the low power consumption and the ability to retain the image even if power to the display is terminated. Integrated in the CoreInk are an multi-function button for operation, SHT30 temperature and moisture sensor, physical buttons and an TF-card(microSD) port for data storage.

Additionally the FM24C02 internal eeprom chip provided 2K-bit(256x8)-EEPROM can be used to store vital data even when the device is off. A 1150mAh lipo battery keeps the device going for long periods and battery life can be further preserved by using the RTC(BM8563)to set the device into deep sleep and wake it up again when needed。Three HY2.0-4P expansion ports are included which allow for building complex projects using the existing sensors in the M5Stack ecosystem.

?>Warning: Do not expose to ultraviolet rays for a long time, otherwise it may cause irreversible damage to the E-ink screen. The low-power power management solution adopted by M5Paper is different from that of CORE and StickC devices. When in use, the PWR button is used as a power-on button(long press 2s). If you need to shut down the device, you need to use the software API or press the reset button on the back, when using USB power supply, it cannot be shut down.

## Product Features

- ESP32 Standard wireless functions WiFi、Bluetooth
- Internal 16M Flash
- Low Power Display
- Multi-Point touch screen
- 180 degree viewing angle
- Built-in Magnet
- Internal 1150mAh Battery
- Expandable - HY2.0-4P 3 x external expansion ports

## Include

-  1x M5Paper

## Applications

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
      <td>ESP32-D0WDQ6-V3</td>
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
      <td>Input Voltage</td>
      <td>5V @ 500mA</td>
   </tr>
   <tr>
      <td>Ports</td>
      <td>TypeC*1, HY2.0-4P*3 , TF-card(microSD) slot</td>
   </tr>
   <tr>
      <td>E-Ink Display</td>
      <td>Model Number：EPD_ED047TC1 | 540*960@4.7" | Grayscale : 16 Levels | Display area : 58.32*103.68mm | Display Driver : IT8951</td>
   </tr>
   <tr>
      <td>Physical Button</td>
      <td>Multi-function button*1 ， Reset Button*1</td>
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
      <td>PINS</td>
      <td>G25, G32, G26, G33, G18, G19</td>
   </tr>
   <tr>
      <td>Battery</td>
      <td>1150mAh@3.7V</td>
   </tr>
   <tr>
      <td>Working Temp</td>
      <td>32°F to 104°F ( 0°C to 40°C )</td>
   </tr>
   <tr>
      <td>Net Weight</td>
      <td>86g</td>
   </tr>
   <tr>
      <td>Gross Weight</td>
      <td>100g</td>
   </tr>
   <tr>
      <td>Product Dimension</td>
      <td>118*66x*10mm</td>
   </tr>
   <tr>
      <td>Packaging Dimension</td>
      <td>120*70x*14mm</td>
   </tr>
   <tr>
      <td>Casing Material</td>
      <td>Plastic ( PC )</td>
   </tr>
</table>

## EasyLoader

- **Windows** 
   - [FactoryTest](https://m5stack.oss-cn-shenzhen.aliyuncs.com/EasyLoader/Windows/CORE/EasyLoader_M5Paper_FactoryTest.exe)
   - [ToDo](https://m5stack.oss-cn-shenzhen.aliyuncs.com/EasyLoader/Windows/CORE/EasyLoader_M5Paper_Todo.exe)
   - [Calculator](https://m5stack.oss-cn-shenzhen.aliyuncs.com/EasyLoader/Windows/CORE/EasyLoader_M5Paper_Calculator.exe)

- **MacOS** 
   - [FactoryTest](https://m5stack.oss-cn-shenzhen.aliyuncs.com/EasyLoader/MacOS/CORE/EasyLoader_M5Paper_FactoryTest.dmg)
   - [ToDo](https://m5stack.oss-cn-shenzhen.aliyuncs.com/EasyLoader/MacOS/CORE/EasyLoader_M5Paper_Todo.dmg)
   - [Calculator](https://m5stack.oss-cn-shenzhen.aliyuncs.com/EasyLoader/MacOS/CORE/EasyLoader_M5Paper_Calculator.dmg)

## PinMap

**E-INK & TF-card(microSD)**

Resolution：540*960

<table>
 <tr><td>ESP32 Chip</td><td>GPIO13</td><td>GPIO12</td><td>GPIO14</td><td>GPIO15</td><td>GPIO4</td></tr>
 <tr><td>IT8951</td><td>MISO</td><td>MOSI</td><td>SCK</td><td>CS</td><td>/</td></tr>
 <tr><td>TF-card(microSD)</td><td>MISO</td><td>MOSI</td><td>SCK</td><td>/</td><td>CS</td></tr>
</table>


**Multi-function button & PWR**

<table>
 <tr><td>ESP32 Chip</td><td>GPIO37</td><td>GPIO38</td><td>GPIO39</td><td>GPIO2</td></tr>
 <tr><td>Multi-function button</td><td>Right</td><td>BTN/PWR</td><td>Left</td><td>/</td></tr>
 <tr><td>Power Control</td><td>/</td><td>/</td><td>/</td><td>MOS</td></tr>
</table>


**Internal I2C Connection**

<table>
 <tr><td>ESP32 Chip</td><td>GPIO21</td><td>GPIO22</td><td>GPIO36</td></tr>
 <tr><td>GT911</td><td>SDA</td><td>SCL</td><td>INT</td></tr>
 <tr><td>SHT30</td><td>SDA</td><td>SCL</td><td>/</td></tr>
 <tr><td>BM8563</td><td>SDA</td><td>SCL</td><td>/</td></tr>
 <tr><td>FM24C02</td><td>SDA</td><td>SCL</td><td>/</td></tr>
</table>

**USB Serial**

<table>
 <tr><td>ESP32 Chip</td><td>GPIO1</td><td>GPIO3</td></tr>
 <tr><td>CP2104</td><td>RXD</td><td>TXD</td></tr>
</table>

## M5Paper-HY2.0 4P Port

<table>
      <thead>
         <th>PORT</th>
         <th>PIN</th>
         <th>Protocol:</th>
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

For more info on specific pin functions refer to the official ESP32 Docs[ESP32 datasheet](https://m5stack.oss-cn-shenzhen.aliyuncs.com/resource/docs/datasheet/core/esp32_datasheet_en.pdf)

## Related Link

- **Datasheet** 
   - [ESP32](https://m5stack.oss-cn-shenzhen.aliyuncs.com/resource/docs/datasheet/core/esp32_datasheet_en.pdf)
   - [SHT30 Datasheet](https://m5stack.oss-cn-shenzhen.aliyuncs.com/resource/docs/datasheet/unit/SHT3x_Datasheet_digital.pdf)
   - [BM8563](https://m5stack.oss-cn-shenzhen.aliyuncs.com/resource/docs/datasheet/core/BM8563_V1.1_cn.pdf)
   - [SY7088](https://m5stack.oss-cn-shenzhen.aliyuncs.com/resource/docs/datasheet/core/SY7088-Silergy.pdf)
   - [GT911-datasheet](https://m5stack.oss-cn-shenzhen.aliyuncs.com/resource/docs/datasheet/core/m5paper/gt911_datasheet.pdf)

-  **API**

   - [Arduino API](en/arduino/arduino_home_page?id=m5paper_api)

## Example

- **Arduino** 

   - [FactoryTest](https://github.com/m5stack/M5Paper_FactoryTest)
   - [M5EPD_Todo](https://github.com/m5stack/M5EPD_Todo)
   - [M5EPD_Calculator](https://github.com/m5stack/M5EPD_Calculator)
   - [M5EPD_TTFExample](https://github.com/m5stack/M5EPD_TTFExample)
   - [M5EPD-Lib](https://github.com/m5stack/M5EPD)

>When using FactoryTest to load special characters (such as Chinese, Japanese), please put the font file into the TF card and name it as `font.ttf`.[download ttf file](https://m5stack.oss-cn-shenzhen.aliyuncs.com/resource/example/Font.ttf)

## Schematic

   - [M5 PAPER Schematic](https://m5stack.oss-cn-shenzhen.aliyuncs.com/resource/docs/schematic/Core/m5paper/M5_PAPER_SCH.pdf)

## Video

- Product Introduce

<video class="video_size" controls>
    <source src="https://m5stack.oss-cn-shenzhen.aliyuncs.com/video/Product_example_video/Core/M5PAPER.mp4" type="video/mp4">
</video>

- How to open the M5Paper shell?

<video class="video_size" controls>
    <source src="https://m5stack.oss-cn-shenzhen.aliyuncs.com/video/Product_example_video/Core/paper_open_shell.mp4" type="video/mp4">
</video>

<script>

   var purchase_link = 'https://m5stack.com/collections/black-friday/products/m5paper-esp32-development-kit-960x540-4-7-eink-display-235-ppi';

   var quickstart_link = '/#/en/quick_start/m5paper/quick_start_arduino';

   anchor_search(purchase_link,quickstart_link);
   scrollFunc();

</script>