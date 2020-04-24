# Module LoRa868

<div class="badge badge-pill badge-primary product_sku_tag">SKU:M029</div>

<div class="product_pic"><img src="assets/img/product_pics/module/module_lora868_01.webp"><img src="assets/img/product_pics/module/module_lora868_02.webp"></div>

## Description

**LoRa868** is integrated with the LoRa Module Ra-01H which is designed and produced by Ai-Thinker.The board has some extra space left over, so we give you a prototyping area great for adding on your own customized circuit working with the LoRa868 Module.

LoRa enables long-range transmissions (more than 10 km in some areas) with low power consumption.The technology is presented in two parts: LoRa, the physical layer and LoRaWAN (Long Range Wide Area Network), the communication layers simillar to the OSI model.

LoRa and LoRaWAN permit long-range connectivity for Internet of Things (IoT) devices in various industrial applications.

## Product Features

-  LoRa Module:  Ra-01H (by Ai-Thinker)
-  Communication Protocol: SPI
-  Universal Perfboard
-  Working Frequency: 803~930 MHz
-  Supports FSK, GFSK, MSK, GMSK, LoRa ™ and OOK modulation modes
-  Receive sensitivity: lowest to -141 dBm
-  Programmable bit rate up to 300Kbps
-  Built-in FPC Antenna
-  External IPX Antenna connector
-  Program platform: Arduino
-  Product Size：54.2mm x 54.2mm x 12.8mm
-  Product weight：14.5g

## Include

-  1x M5Stack LoRa868 Module

## Applications

-  Remote electricity meter reading
-  Home automation
-  Remote irrigation system

## Related Link

- **[LoRa Info](https://wiki.ai-thinker.com/_media/lora/docs/c047ps01a1_ra-01_product_specification_v1.1.pdf) (LoRa)**

- **[LoRaWAN Regional Parameters](https://m5stack.oss-cn-shenzhen.aliyuncs.com/resource/docs/datasheet/module/lorawantm_regional_parameters_v1.1rb_-_final.pdf)**

## EasyLoader

>EasyLoader is a concise and fast program writer, which has a built-in case program related to the product. It can be burned to the main control by simple steps to perform a series of function verification. Please install the corresponding driver according to the device type. M5Core host [Please click here to view the CP210X driver installation tutorial](en/arduino/arduino_development), M5StickC/V/T/ATOM series can be used without driver)

<div class="easyloader-box">
    <div style="background-color:white;">
        <div><img src="https://m5stack.oss-cn-shenzhen.aliyuncs.com/image/easyloader_intro.webp"></div>
        <div class="easyloader-btn">
            <a href="https://m5stack.oss-cn-shenzhen.aliyuncs.com/EasyLoader/Windows/MODULE/EasyLoader_LoRa868_MODULE.exe">Windows</a>
            <a href="https://m5stack.oss-cn-shenzhen.aliyuncs.com/EasyLoader/MacOS/MODULE/EasyLoader_LoRa868_MODULE.dmg">MacOS</a>
            <!-- <a>Linux</a>
            <a>MacOS</a> -->
        </div>
    </div>
    <div>
        <video id="example_video" controls>
            <source src="https://m5stack.oss-cn-shenzhen.aliyuncs.com/video/Product_example_video/Module/LoRa868.mp4" type="video/mp4">
        </video>
        <div class="easyloader-mask">
        <a>
            <svg id="play-btn" t="1583228776634" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="4152" width="75" height="75"><path d="M512 0C229.216 0 0 229.216 0 512s229.216 512 512 512 512-229.216 512-512S794.784 0 512 0z m0 928C282.24 928 96 741.76 96 512S282.24 96 512 96s416 186.24 416 416-186.24 416-416 416zM384 288l384 224-384 224z" p-id="4153" fill="#007aff"></path></svg></a>
            <p>Description:</p>
            <p>Two devices will send and receive messages from each other.</p>
        </div>
    </div>
</div>

## Example

### 1. Arduino IDE

These are the point-to-point communication [examples](https://github.com/m5stack/M5-ProductExampleCodes/tree/master/Module/LORA868/Arduino) between two LORA868 modules. The LoRa nodes send and receive messages.

* Blue string indicates sending succeed.

* Yellow string display the received messages.

* Red string indicates initialization failed.

<script>

   var purchase_link = 'https://m5stack.com/collections/m5-module/products/lora-module-868mhz';

   anchor_search(purchase_link);
   scrollFunc();

</script>