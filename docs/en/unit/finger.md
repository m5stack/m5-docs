# FINGER {docsify-ignore-all}

<img src="assets/img/product_pics/unit/unit_finger_01.png" width="30%" height="30%"><img src="assets/img/product_pics/unit/unit_finger_02.png" width="30%" height="30%"><img src="assets/img/product_pics/unit/unit_finger_grove_c.png" width="30%" height="30%">

***

:memo:**[Description](#Description)**&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;:electric_plug:**[Schematic](#Schematic)**&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;🛒**[Purchase](https://pt.aliexpress.com/store/product/M5Stack-Official-Finger-Print-Unit-FPC1020A-Capacitive-Fingerprint-Identification-Module-Grove-Cable-UART-Interface-for-ESP32/3226069_32966642182.html?spm=a2g03.12010612.8148356.36.73ee56a05T9uR7)**&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;:clapper:**[Related Video](#Related-Video)**

<!-- :memo:**[Description](#Description)**&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;:octocat:**[Example](#Example)**&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;:electric_plug:**[Schematic](#Schematic)**&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;🛒**[Purchase](https://pt.aliexpress.com/store/product/M5Stack-Official-Finger-Print-Unit-FPC1020A-Capacitive-Fingerprint-Identification-Module-Grove-Cable-UART-Interface-for-ESP32/3226069_32966642182.html?spm=a2g03.12010612.8148356.36.73ee56a05T9uR7)**&nbsp;&nbsp;&nbsp;:clapper:**[Related Video](#Related-Video)** -->

## Description

**<mark>FINGER</mark>** is a fingerprint recognition unit. The unit integrates the **FPC1020A** capacitive fingerprint recognition module and Fingerprint recognition algorithm chip. It can realize fingerprint information entry,  fingerprint deletion, fingerprint search, feature extraction for multiple people and so on. The unit also can be set fingerprint recognition comparison level and different security level.

**It's serial communication(UART Interface) between FINGER and M5Core.**

The parameter of USART: Baudrate(**default: 19200bps**), Start bits(1 bit), Stop bits(1 bit), Parity(no)

## Feature

- Fingerprint recognition capacity: 150 pices
- Comparison mode: 1:N or 1:1
- Comparison level: 0 ~ 9(default: 5)
- Security level: 1 ~ 5(default: 3)
- Response time: fingerprint preprocessing < 0.45s
- Input voltage range: 3.3 ~ 6V
- Operating temperature and humidity: -10 ~ 60°, 20% ~ 80%

## Related Link

- **[Offical Video](https://www.youtube.com/channel/UCozgFVglWYQXbvTmGyS739w)**

- **[Forum](http://forum.m5stack.com/)**

## Schematic

<img src="assets/img/product_pics/unit/finger_sch.JPG">

### PinMap

<table>
<tr><td>M5Core(GROVE C)</td><td>U2RXD</td><td>U2TXD</td><td>5V</td><td>GND</td></tr>
 <tr><td>FINGER Unit</td><td>TXD</td><td>RXD</td><td>5V</td><td>GND</td></tr>
</table>

## Related Video

- **FINGER Application**

<iframe height=498 width=510 src="http://player.youku.com/embed/XMzk5NjU4NjM3Ng==" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>