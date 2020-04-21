# BalaC

<div class="badge badge-pill badge-primary product_sku_tag">SKU:K038</div>

<div class="product_pic"><img src="assets/img/product_pics/app/BalaC/balac_01.webp"></div>

## Description

**BalaC** is a DIY dual wheel balancing car kit. BalaC uses the STM32 series chip, two motor driver ICs, and is also equipped with a rechargable replaceable battery. It incorporates a light-weight design with 360° servos. It's possible to use the UIFlow graphic interface to program the balancing car. An M5StickC is included in the package. The BalaC maintains its balance with the help of mpu6886. The real-time compensation of the servos are controlled by calculating the offset value to achieve the purpose of balancing. A LEGO compatible design allows you to change different tires. If you want to learn about PID or need an interesting programming toy product, BalaC will be a good choice

**At present, there is no stock program, you will need to write the PID code by yourself.**

## Product Features

- Based on ESP32 + STM32
- Personality DIY
- Detachable Design
- Two wheel Drive
- Replaceable battery
- Program Platform：[UIFlow](http://flow.m5stack.com), [MicroPython](http://micropython.org/), [Arduino](http://www.arduino.cc)

## Include

- 1x M5StickC
- 1x BalaC Base
- 2x Wheels
- 2x Wheel Connectors
- 2x 9G Servos
- 2x Elastics
- 2x Screws
- 1x Hex key
- 1x 16340 Battery
- 1x 10cm Type-C Cable

## Application

- Balancing car

## Specification

<table class="table-1">
    <thead>
    <tr>
        <th>Specification</th>
        <th>Parameter</th>
    </tr>
    </thead>
    <tbody>
        <tr>
            <td>ESP32-Pico-D4</td>
            <td>240MHz dual core, 600 DMIPS, 520KB SRAM, Wi-Fi, dual mode Bluetooth</td>
        </tr>
        <tr>
            <td>Servo</td>
            <td>Rotation angle: 360 °; no load speed: 0.12 seconds / 60 degrees (4.8V)</td>
        </tr>
        <tr>
            <td>Driver</td>
            <td>L9110S</td>
        </tr>
        <tr>
            <td>Slave</td>
            <td>STM32F030F4P6</td>
        </tr>
        <tr>
            <td>Communication protocol</td>
            <td>IIC: 0x38</td>
        </tr>
        <tr>
            <td>Battery</td>
            <td>16340, 3.7V, 700mAh, Li-ions rechargeable</td>
        </tr>
        <tr>
            <td>Size</td>
            <td>30 x 100 x 105mm</td>
        </tr>
        <tr>
            <td>Weight</td>
            <td>162g</td>
        </tr>
     </tbody>
</table>


<!-- ## EasyLoader

<img src="https://m5stack.oss-cn-shenzhen.aliyuncs.com/image/EasyLoader_logo.webp" width="100px" style="margin-top:20px">

<a href="https://m5stack.oss-cn-shenzhen.aliyuncs.com/EasyLoader/Module/EasyLoader_LORA_Duplex.exe"><button type="button" class="btn btn-primary">click to download EasyLoader</button></a>

>1.EasyLoader is a simple and fast program burner. Every product page in EasyLoader provides a product-related case program. It can be burned to the master through simple steps, and a series of function verification can be performed.(**Currently EasyLoader is only available for Windows OS**)

>2.After downloading the software, double-click to run the application, connect the M5 device to the computer via the data cable, select the port parameters, and click **"Burn"** to start burning.

!>3.The CP210X (USB driver) needs to be installed before the EasyLoader is burned. [Click here to view the driver installation tutorial](en/related_documents/M5Burner#install-usb-driver) -->

## Example

<!-- ### Arduino IDE

Click here to download [examples](https://github.com/m5stack/M5-ProductExampleCodes/tree/master/App/BalaC/Arduino). -->

### UIFlow

(Not actual code for reference only) [Click here to download UIFlow](https://github.com/m5stack/M5-ProductExampleCodes/tree/master/App/BalaC/UIFlow)

<img src="assets/img/product_pics/app/BalaC/balac_05.webp">


## Video

<video class="video_size" controls>
    <source src="https://m5stack.oss-cn-shenzhen.aliyuncs.com/video/Product_example_video/App/BalaC.mp4" type="video/mp4">
</video>


<script>

   var purchase_link = 'https://m5stack.com/collections/all/products/bala-c-esp32-development-mini-self-balancing-car';

   anchor_search(purchase_link);
   scrollFunc();

</script>

