# Base M5GO RFID

<el-tag effect="plain">SKU:A014-B</el-tag>

<div class="product_pic"><img src="assets/img/product_pics/base/m5go_base_03.webp"></div>

## Description

**M5GO RFID** is a upgraded version base of [M5GO BOTTOM](en/base/m5go_bottom). Comparing to the normal version ([M5GO Bottom](en/base/m5go_bottom)), M5GO RFID owns **RFID function** and **IR transmitter**, **miss magnet**. And it's battery capacity is only **330 mAh**.M5GO Base is composed of battery(330mAh), M-Bus interface, charging indicator(red led), **RFID coil**, **IR transmitter**, two RGB Bar, PORT B and PORT C.

<img src="assets/img/product_pics/base/m5go_rfid_02.webp" width="30%" height="30%">

<img src="assets/img/product_pics/base/m5go_rfid_03.webp" width="30%" height="30%">

## Include
- 1x M5GO RFID

## PinMap

**POGO Pin**

| POGO Pin       | ESP32 Chip    |
| :----------:  |:------------: |
| SCL           | GPIO22        |
| SDA           | GPIO21        |

**LED Bar**

*There are 10 RGB Leds built in M5GO Base*

| LED Pin       | ESP32 Chip    |
| :----------:  |:------------: |
| LED Pin           | GPIO15        |

**MIC**

Analog Microphone 

| MIC Pin       | ESP32 Chip    |
| :----------:  |:------------: |
| MIC Pin           | GPIO34        |

**GROVE**

| PORT B(I/O)       | ESP32 Chip    |
| :----------:  |:------------: |
| G36           | GPIO36        |
| G26           | GPIO26        |
| 5V            | 5V            |
| GND           | GND           |

| PORT C(UART2)       | ESP32 Chip    |
| :----------:  |:------------: |
| RXD           | GPIO16        |
| TXD           | GPIO17        |
| 5V            | 5V            |
| GND           | GND           |

<!-- **RFID**

| MIC Pin       | ESP32 Chip    |
| :----------:  |:------------: |
| MIC Pin           | GPIO34        | -->

**IR transmitter**

| IR Transmitter       | ESP32 Chip    |
| :----------:  |:------------: |
| IR Transmitter           | GPIO13        |

**M-Bus**

<img src="assets/img/product_pics/core/M-BUS.webp">

## Related Link

- **[MFRC522](https://m5stack.oss-cn-shenzhen.aliyuncs.com/resource/docs/datasheet/base/RC522_EN.pdf)**

<!-- ## 原理图

<img src="assets/img/product_pics/base/m5go_base_sch.webp"> -->

<script>

   var purchase_link =;

   anchor_search(purchase_link);
   scrollFunc();

</script>