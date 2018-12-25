# M5GO底座

## 描述

<mark>M5GO底座</mark>是[M5GO IOT Starter Kit](zh_CN/product_documents/m5stack-core/m5go_iot_starter_kit)套件中的底座，[M5Fire](zh_CN/product_documents/m5stack-core/m5core_fire)的套件中也配套了这个底座。

M5GO底座由600mAh的电池、M-Bus总线接口、麦克风、红色的充电指示LED、2条RGB灯条(10颗)、PORT B和PORT C组成。

M5GO底座在充电过程中，红色LED闪烁，充满了常亮。

## 管脚映射

**POGO Pin**

| POGO Pin       | ESP32 Chip    |
| :----------:  |:------------: |
| SCL           | GPIO22        |
| SDA           | GPIO21        |

**LED Bar**

*有10颗RGB灯，左右各5颗*

| LED Pin       | ESP32 Chip    |
| :----------:  |:------------: |
| LED Pin           | GPIO15        |

**麦克风MIC**

| MIC Pin       | ESP32 Chip    |
| :----------:  |:------------: |
| MIC Pin           | GPIO34        |

**GROVE接口**

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

## 相关链接

- **[原理图](https://github.com/m5stack/M5GO/blob/master/hardware/schematics/M5GO_Base.pdf)**
- **[M5GO IOT Starter Kit购买链接](https://item.taobao.com/item.htm?spm=a1z10.3-c.w4002-1172588106.10.690a425eFsoYVX&id=568283585553)**

- **[购买链接](https://item.taobao.com/item.htm?spm=a1z10.3-c.w4002-1172588106.13.690a425eFsoYVX&id=584136175270)**

<figure>
    <img src="assets/img/product_pics/bases/m5go_base_01.png" width="65%" height="65%">
</figure>

<figure>
    <img src="assets/img/product_pics/bases/m5go_base_02.png" width="65%" height="65%">
</figure>