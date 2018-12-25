# M5GO Base

## Description

<mark>M5GO Base</mark>is a base of [M5GO IOT Starter Kit](en/product_documents/m5stack-core/m5go_iot_starter_kit) or [M5Fire](en/product_documents/m5stack-core/m5core_fire).

M5GO Base is composed of battery(600mAh), M-Bus interface, charging indicator(red led), two RGB Bar, PORT B and PORT C.

The charging indicator light will blink when base is charging, but the light will keep on when charge completed.

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

| MIC Pin       | ESP32 Chip    |
| :----------:  |:------------: |
| MIC Pin           | GPIO34        |

**GROVE**

| PORT A(I2C)       | ESP32 Chip    |
| :----------:  |:------------: |
| SCL           | GPIO22        |
| SDA           | GPIO21        |
| 5V            | 5V            |
| GND           | GND           |

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

**M-Bus**

<figure>
  <img src="assets/img/product_pics/core/M-BUS.jpg" alt="M_BUS" width="500" height="500">
</figure>

## Related Link

- **[Schematic](https://github.com/m5stack/M5GO/blob/master/hardware/schematics/M5GO_Base.pdf)**
- **[M5GO IOT Starter Kit Purchase](https://www.aliexpress.com/store/product/M5Stack-Official-Stock-Offer-M5GO-IoT-Starter-Kit-ESP32-for-Arduino-MicroPython-Programming-Development-IR-MIC/3226069_32881911596.html?spm=2114.12010615.8148356.2.52385ab04i7vIu)**

<figure>
    <img src="assets/img/product_pics/bases/m5go_base_01.png" width="65%" height="65%">
</figure>

<figure>
    <img src="assets/img/product_pics/bases/m5go_base_02.png" width="65%" height="65%">
</figure>