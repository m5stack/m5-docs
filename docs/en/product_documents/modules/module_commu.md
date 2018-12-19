# COMMU

[中文](/zh_CN/product_documents/modules/module_commu) | English | [日本語](ja/product_documents/modules/module_commu)

## DESCRIPTION

<mark>COMMU</mark> is a communication interface converter which can meet most of the application design. Now, COMMU owns two I2C interfaces, one CAN interface and one RS485 interface. Simultaneously, COMMU also owns a TTL level interface. It means you just need to stack it underneath M5Core when you want to control a CAN device or RS485 device.

Be care about TTL Interface. It is a UART Interface actually by default. But you can switch it to connect with UART2 after changed those jumpers(J6, J7, J9, J10).

## FEATURES

-  2x I2C Interface
-  1x CAN Interface
-  1x RS485 Interface
-  1x TTL Interface

## INCLUDES

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


## DOCUMENTS

- **[Schematic](https://github.com/m5stack/M5-Schematic/blob/master/Modules/COMMU.pdf)**
- **[Purchase](https://www.aliexpress.com/store/product/M5Stack-New-COMMU-Module-Extend-RS485-TTL-CAN-I2C-Port-with-MCP2515-TJA1051-SP3485-Development-Board/3226069_32954475633.html?spm=a2g1y.12024536.productList_5885013.subject_2)**

<figure>
    <img src="assets/img/product_pics/modules/module_commu_01.png" height="300" width="300">
</figure>

<figure>
    <img src="assets/img/product_pics/modules/module_commu_02.png" height="300" width="300">
</figure>
