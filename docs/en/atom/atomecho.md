# M5AtomECHO

<div class="badge badge-pill badge-primary product_sku_tag">SKU:E001</div>

<div class="product_pic"><img src="assets/img/product_pics/.webp"></div>

## Description

**M5AtomECHO** is a Programmable Smart Speaker designed based on ATOM. Its volume is very small, only 24 * 24 * 17 mm. Music can be played by bluetooth of ESP32 with mobile phones and tablets. Of course, you can access AWS, Baidu and other cloud platforms by writing code, and use built-in microphone and speaker for voice interaction, so that M5AtomECHO has certain AI capabilities, realizing voice control, story telling, Internet of things and other functions. The speaker is embedded with an RGB LED (SK6812), which can visually display the connection status. In addition to being used as a Bluetooth speaker, it still has the control ability of Atom series. You can connect devices through the grove interface, G21 / G25 can only be used for general I/O, they do not support I2C and UART.Screw hole on the back is convenient for users to fix.

?> **Note: the product can not be used for a long time. It is recommended to play music for about 1 hour. It is not allowed to play low-frequency and heavy music, otherwise the speaker will be damaged.**

## Product Features

- Light and small
- Based on esp32, Support A2DP, BLE 4.0
- 2.4G WiFi IEEE 802.11b/g/n
- Built-in microphone and speaker
- RGB LED status display  indication
- GROVE extension interface
- Record and playback
- Programmable key

## Include

- 1x ATOM ECHO

## Applications

- Bluetooth Speaker
- Voice control
- IoT

## Specification

<table class="table-1">
      <thead>
         <th>Resources</th>
         <th>Parameter</th>
      </thead>
      <tbody>
        <tr>
            <td>SoC</td>
            <td>ESP-PICO-D4,240MHz,Dual Core,BLE,Wi-Fi</td>
        </tr>
        <tr>
            <td>Flash</td>
            <td>4MB</td>
        </tr>
        <tr>
            <td>Interface</td>
            <td>1x IR-TX,1x Function Button,1x Reset Button</td>
        </tr>
        <tr>
            <td>PinOut</td>
            <td>G21/G25/5V/GND, 3V3/G22/G19/G23/G33</td>
        </tr>
        <tr>
            <td>RGB LED</td>
            <td>SK6812</td>
        </tr>
        <tr>
            <td>Speaker</td>
            <td>0.5W/NS4168 I2S</td>
        </tr>
        <tr>
            <td>Micphone</td>
            <td>SPM1423 PDM</td>
        </tr>
        <tr>
            <td>Size</td>
            <td>24 x 24 x 17mm</td>
        </tr>
        <tr>
            <td>Weight</td>
            <td>10g</td>
        </tr>
        <tr>
            <td>Case Material</td>
            <td>Plastic ( PC )</td>
        </tr>
     </tbody>
</table>

>G19 / G22 / G23 / G33 has been defined, please do not reuse the above pins, otherwise ATOM ECHO will be damaged.

## EasyLoader

>EasyLoader is a concise and fast program writer, which has a built-in case program related to the product. It can be burned to the main control by simple steps to perform a series of function verification. Please install the corresponding driver according to the device type. M5Core host [Please click here to view the CP210X driver installation tutorial](en/arduino/arduino_development), M5StickC/V/T/ATOM series can be used without driver)

<div class="easyloader-box">
    <div style="background-color:white;">
        <div><img src="https://m5stack.oss-cn-shenzhen.aliyuncs.com/image/easyloader_intro.webp"></div>
        <div class="easyloader-btn">
            <a href="https://m5stack.oss-cn-shenzhen.aliyuncs.com/EasyLoader/Windows/ATOM_BASE/EasyLoader_ECHO_Bluetooth_Speaker.exe">Windows</a>
            <a href="https://m5stack.oss-cn-shenzhen.aliyuncs.com/EasyLoader/MacOS/ATOM_BASE/EasyLoader_ECHO_Bluetooth_Speaker.dmg">MacOS</a>
            <!-- <a>Linux</a>
            <a>MacOS</a> -->
        </div>
    </div>
    <div>
        <video id="example_video" controls>
            <source src="https://m5stack.oss-cn-shenzhen.aliyuncs.com/video/Product_example_video/.mp4" type="video/mp4">
        </video>
        <div class="easyloader-mask">
        <a>
            <svg id="play-btn" t="1583228776634" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="4152" width="75" height="75"><path d="M512 0C229.216 0 0 229.216 0 512s229.216 512 512 512 512-229.216 512-512S794.784 0 512 0z m0 928C282.24 928 96 741.76 96 512S282.24 96 512 96s416 186.24 416 416-186.24 416-416 416zM384 288l384 224-384 224z" p-id="4153" fill="#007aff"></path></svg></a>
            <p>Description:</p>
            <p>Used as a Bluetooth speaker, the LED turns green after connection, and the phone is turned on to play music</p>
        </div>
    </div>
</div>

## Peripherals Pin Map

<table class="table-1">
      <thead>
         <th>DataOut</th>
         <th>BCLK</th>
         <th>DataIn</th>
         <th>LRCK</th>
         <th>RGB</th>
         <th>Btn</th>
      </thead>
      <tbody>
         <tr>
            <td>G22</td>
            <td>G19</td>
            <td>G23</td>
            <td>G33</td>
            <td>G27</td>
            <td>G39</td>
         </tr>
    </tbody>
</table>


## Links

-  **Datasheet**
    - [SPM1423](https://m5stack.oss-cn-shenzhen.aliyuncs.com/resource/docs/datasheet/core/SPM1423HM4H-B_datasheet_en.pdf)
    - [ESP32-PICO-D4](https://m5stack.oss-cn-shenzhen.aliyuncs.com/resource/docs/datasheet/core/esp32-pico-d4_datasheet_en.pdf)

## Schematic

- [BASIC](https://)

## Usage

The factory default firmware is Bluetooth speaker, which uses A2DP protocol to transmit audio data（call reception is not supported). After power on, the red LED will be displayed. When the connection with Bluetooth device is established, the LED will turn green. At this time, the sound can be output through atom echo. The LED turns red when disconnected. The firmware is compiled on the esp-idf platform. If senior users need to develop other functions by themselves, they can build the environment according to the official documents of Lexin. See the following links for the source code of factory firmware and bin file, where the BIN file burning address is 0x0000. (for the esp-idf source code modified by the user, m5stack does not provide technical support.)

## Example

### 1. Arduino IDE

- [FactoryTest](https://github.com/m5stack/M5-ProductExampleCodes/tree/master/Core/Atom/AtomEcho/Arduino/Factory_Test)

- [Recoder&Replay](https://github.com/m5stack/M5-ProductExampleCodes/tree/master/Core/Atom/AtomEcho/Arduino/Repeater)

- [StreamHttpMP3](https://github.com/m5stack/M5-ProductExampleCodes/tree/master/Core/Atom/AtomEcho/Arduino/StreamHttpClient_ECHO)

## Video

<video class="video_size" controls>
    <source src="https://m5stack.oss-cn-shenzhen.aliyuncs.com/video/Product_example_video/Core/ATOM_ECHO.mp4" type="video/mp4">
</video>

<script>

   var purchase_link = 'https://m5stack.com/collections/m5-core/products/basic-core-iot-development-kit';

   anchor_search(purchase_link);
   scrollFunc();

</script>
