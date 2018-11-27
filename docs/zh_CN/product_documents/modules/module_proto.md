# PROTO模块

中文 | [English](/en/product_documents/modules/module_proto)
<!-- | [日本語](ja/product_documents/modules/module_proto) -->

## 描述

PROTO模块是一款可以自由焊接元器件的洞洞板模块。如果你需要实现什么M5Stack模块体系没有的电路，可以自行在PROTO模块上焊接相关的元器件，最后还是可以通过堆叠在M5Core主控上，方便控制和打造产品。

## 特性

-  自由定义的洞洞板
-  适配M5Core主板

## 接口

| LINE0             | LINE1            |
|:---:|:---:|
| GND               | IO35(ADC1)       |
| GND               | IO36(ADC2)       |
| GND               | EN               |
| IO23(MOSI)        | IO25(DAC0)       |
| IO19(MISO)        | IO26(DAC1)       |
| IO18(EXT\_SCK)    | 3V3              |
| IO3(U1\_RX)       | IO1(U1\_TX)      |
| IO16(U1\_RX)      | IO17(U2\_TX)     |
| IO21(I2C\_SDA)    | IO22(I2C\_SCL)   |
| IO2               | IO5              |
| IO12(I2S\_SCLK)   | IO13             |
| IO15(I2S\_OUT)    | IO0              |
| HPOWR             | IO34             |
| HPOWR             | 5V               |
| HPOWR             | BAT              |

## 包含

-  1x PROTO模块
-  1x Bus Socket
-  1x GROVE线
-  1x 包装盒
-  用户手册

## 相关链接

-  **[GitHub](https://github.com/m5stack/M5Stack)**

- **[购买链接](https://www.aliexpress.com/store/product/M5Stack-Official-Stock-Offer-Proto-Module-Proto-Board-with-Extension-Bus-Socket-for-Arduino-ESP32-Development/3226069_32843231933.html?spm=2114.12010610.8148356.4.7b26c4a1MZw8Xy.html)**
