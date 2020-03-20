# Module COMMU

<div class="badge badge-pill badge-primary product_sku_tag">SKU:M011</div>

<div class="product_pic"><img src="assets/img/product_pics/module/module_commu_01.png"><img src="assets/img/product_pics/module/module_commu_02.png"></div>

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
-  Product Size：54.2mm x 54.2mm x 12.8mm
-  Product weight：13.5g

## Include

-  1x M5Stack COMMU Module

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

<img src="https://m5stack.oss-cn-shenzhen.aliyuncs.com/image/EasyLoader_logo.png" width="100px" style="margin-top:20px">

<a href="https://m5stack.oss-cn-shenzhen.aliyuncs.com/EasyLoader/Module/EasyLoader_COMMU_Test_A.exe"><button type="button" class="btn btn-primary">click to download EasyLoader</button></a>

>1.EasyLoader is a simple and fast program burner. Every product page in EasyLoader provides a product-related case program. It can be burned to the master through simple steps, and a series of function verification can be performed.(**Currently EasyLoader is only available for Windows OS**)

>2.After downloading the software, double-click to run the application, connect the M5 device to the computer via the data cable, select the port parameters, and click **"Burn"** to start burning.

!>3.The CP210X (USB driver) needs to be installed before the EasyLoader is burned. [Click here to view the driver installation tutorial](en/related_documents/M5Burner#install-usb-driver)

## Example

### Arduino IDE

#### CAN communication

These are two COMMU examples for CAN communication, tansmitter and receiver. Press Button A to sent the message, and display the received message on the screen.

**Step 1**:   Copy [MCP_CAN_lib file](https://github.com/m5stack/M5-ProductExampleCodes/tree/master/Module/COMMU/Arduino/DependentLibrary/MCP_CAN_lib) to `C:\Users\<user_name>\Documents\Arduino\libraries`,
**Step 2**: Open project file `commu_can_transmitter.ino`, and `commu_can_receiver.ino`
**Step 3**: Compile and upload the two project to two M5Cores separatly.

The below code is incomplete(just for usage). If you want the complete code, please click [here](https://github.com/m5stack/M5-ProductExampleCodes/tree/master/Module/COMMU/Arduino/CAN)

<img src="assets/img/product_pics/module/module_example/COMMU/example_module_commu_01.png" width="50%" height="50%">

#### RS485 communication

This is a COMMU example for RS485 communication.

Burn [example](https://github.com/m5stack/M5-ProductExampleCodes/tree/master/Module/COMMU/Arduino/RS485) to two M5Cores. Then after pressed Button A, this two cores will send message to each other and receive data.

<img src="assets/img/product_pics/module/module_example/COMMU/example_module_commu_02.png" width="50%" height="50%">

## Schematic

<img src="assets/img/product_pics/module/commu_sch.png">

<script>

   var purchase_link = 'https://m5stack.com/collections/m5-module/products/commu-module';

   anchor_search(purchase_link);
   scrollFunc();

</script>