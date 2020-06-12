# Module COMMU

<div class="badge badge-pill badge-primary product_sku_tag">SKU:M011</div>

<div class="product_pic"><img src="assets/img/product_pics/module/module_commu_01.webp"><img src="assets/img/product_pics/module/module_commu_02.webp"></div>

## Description

**COMMU** is a Muti-Communication-Interface-Converter. Integrated with 2*IIC, 1*TTL, 1*CAN, 1*RS485. Apparently COMMU has packed with most of series communications.

Default connection: TTL - UART0, RS485 - UART2. Since ESP32 pin map is allowed for re-assign, you can re-assign or re-mapping the TTL or RS485 interface to other pins.

Be care about TTL Interface. It is a UART Interface actually by default. But you can switch it to connect with UART2 after changed those jumpers(J6, J7, J9, J10).

## Product Features

-  2x I2C Interface
-  1x CAN Interface
-  1x RS485 Interface
-  1x TTL Interface
-  CAN controller: MCP2515-1/SO
-  RS485 Transceiver: SP3485EN-L/TR


## Include

-  1x M5Stack COMMU Module


## Specification

<table>
   <tr style="font-weight:bold">
      <td>Resources</td>
      <td>Parameter</td>
   </tr>
   <tr>
      <td>Interface</td>
      <td>I2C x2, CAN x1, RS485 x1, TTL x1</td>
   </tr>
   <tr>
      <td>CAN Controller</td>
      <td>MCP2515-1/SO</td>
   </tr>
   <tr>
      <td>RS485 transceiver</td>
      <td>SP3485EN-L/TR</td>
   </tr>
   <tr>
      <td>net weight</td>
      <td>13.5g</td>
   </tr>
   <tr>
      <td>Gross weight</td>
      <td>24g</td>
   </tr>
   <tr>
      <td>Product Size</td>
      <td>54.2*54.2*13mm</td>
   </tr>
   <tr>
      <td>Package Size</td>
      <td>60*57*17mm</td>
   </tr>
   <tr>
      <td>Material</td>
      <td>Plastic ( PC )</td>
   </tr>
</table>

## PinMap

| *CAN*        | *ESP32 Chip*      |
| :----------: |:------------: |
| CAN_CS       | GPIO12         |
| CAN_INT      | GPIO15         |
| CAN_SCK      | GPIO18         |
| CAN_MISO     | GPIO19         |
| CAN_MOSI     | GPIO23         |


| *I2C Interface*   | *ESP32 Chip*      |
| :--------------:  |:------------: |
| IIC_SDA           | GPIO21         |
| IIC_SCL           | GPIO22         |


## Related Link

- **Datasheet**

    - [SP3485](https://m5stack.oss-cn-shenzhen.aliyuncs.com/resource/docs/datasheet/module/SP3485_en.pdf)
    - [MCP2515](https://m5stack.oss-cn-shenzhen.aliyuncs.com/resource/docs/datasheet/module/MCP2515_en.pdf)

## EasyLoader

>EasyLoader is a concise and fast program writer, which has a built-in case program related to the product. It can be burned to the main control by simple steps to perform a series of function verification. Please install the corresponding driver according to the device type. M5Core host [Please click here to view the CP210X driver installation tutorial](en/arduino/arduino_development), M5StickC/V/T/ATOM series can be used without driver)

<div class="easyloader-box">
    <div style="background-color:white;">
        <div><img src="https://m5stack.oss-cn-shenzhen.aliyuncs.com/image/easyloader_intro.webp"></div>
        <div class="easyloader-btn">
            <a href="https://m5stack.oss-cn-shenzhen.aliyuncs.com/EasyLoader/Windows/MODULE/EasyLoader_COMMU_MODULE.exe">Windows</a>
            <a href="https://m5stack.oss-cn-shenzhen.aliyuncs.com/EasyLoader/MacOS/MODULE/EasyLoader_COMMU_MODULE.dmg">MacOS</a>
            <!-- <a>Linux</a>
            <a>MacOS</a> -->
        </div>
    </div>
    <div>
        <video id="example_video" controls>
            <source src="https://m5stack.oss-cn-shenzhen.aliyuncs.com/video/Product_example_video/Module/COMMU.mp4" type="video/mp4">
        </video>
        <div class="easyloader-mask">
        <a>
            <svg id="play-btn" t="1583228776634" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="4152" width="75" height="75"><path d="M512 0C229.216 0 0 229.216 0 512s229.216 512 512 512 512-229.216 512-512S794.784 0 512 0z m0 928C282.24 928 96 741.76 96 512S282.24 96 512 96s416 186.24 416 416-186.24 416-416 416zM384 288l384 224-384 224z" p-id="4153" fill="#007aff"></path></svg></a>
            <p>Description:</p>
            <p>Communicate through RS485 and send data.</p>
        </div>
    </div>
</div>

## Example

### 1. Arduino IDE

If you want the complete code `faces_encoder.ino`, please click [here](https://github.com/m5stack/M5Stack/tree/master/examples/Modules/COMMU)


<img src="assets/img/product_pics/module/module_example/COMMU/example_module_commu_02.webp" width="50%" height="50%">

## Schematic

<img src="assets/img/product_pics/module/commu_sch.webp">

<script>

   var purchase_link = 'https://m5stack.com/collections/m5-module/products/commu-module';

   anchor_search(purchase_link);
   scrollFunc();

</script>