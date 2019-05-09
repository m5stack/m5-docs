# Application PIANO {docsify-ignore-all}

<img src="assets/img/product_pics/app/app_piano_01.png" width="30%" height="30%">

***

:memo:**[Description](#Description)**&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;:electric_plug:**[PinMap](#PinMap)**&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;🛒**[Purchase](https://item.taobao.com/item.htm?id=584647000573)**

## Description

**PIANO** is a application base related to music or sound performing. Comes with two touch sensors(TS20) which communicate with M5 core via I2C protocol.

I2C address is 0x6A and 0x7A.

<img src="assets/img/product_pics/app/app_piano_02.png">

## Include

- 1x PIANO

## Example

- https://github.com/m5stack/M5-ProductExampleCodes/blob/master/App/PIANO/Arduino/M5PIANO/M5PIANO.ino

## PinMap

**Touch Sensor (TS20) & LED**

<table>
 <tr><td>ESP32 Chip</td><td>GPIO7</td><td>GPIO6</td><td>GPIO5</td><td>GPIO26</td><td>GPIO2</td></tr>
 <tr><td>TS20</td><td>RESET</td><td>EN</td><td>SCL</td><td>SDA</td></tr>
 <tr><td>RGB LED</td><td> </td><td> </td><td> </td><td> </td><td>Signal Pin</td></tr>
</table>
