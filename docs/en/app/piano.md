# PIANO {docsify-ignore-all}

<img src="assets/img/product_pics/app/app_piano_01.png" width="30%" height="30%">

***

:memo:**[Description](#Description)**&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;:electric_plug:**[PinMap](#PinMap)**&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;🛒**[Purchase](https://item.taobao.com/item.htm?id=584647000573)**

<!-- :memo:**[Description](#描述)**&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;:octocat:**[例程](#例程)**&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;:electric_plug:**[PinMap](#PinMap)**&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;🛒**[Purchase](https://item.taobao.com/item.htm?id=584647000573)** -->

## Description

**<mark>PIANO</mark>** is a piano application. After Downloaded [example](https://github.com/m5stack/M5-ProductExampleCodes/blob/master/App/PIANO/Arduino/M5PIANO/M5PIANO.ino) to M5Core, and PIANO was attatched to [M5Core bottom](en/base/core_bottom), you can play this PIANO immediately.

The touch sensor (**TS20**) built in PIANO communicates with M5Core through IIC. There are two TS20 built in PIANO and their IIC addresses are 0x6A and 0x7A.

PIANO needs access to the [base](en/base/core_bottom) of the M5Core as shown below.

<img src="assets/img/product_pics/app/app_piano_02.png">

## Example

- https://github.com/m5stack/M5-ProductExampleCodes/blob/master/App/PIANO/Arduino/M5PIANO/M5PIANO.ino

## PinMap

**Touch Sensor (TS20) & LED**

<table>
 <tr><td>ESP32 Chip</td><td>GPIO7</td><td>GPIO6</td><td>GPIO5</td><td>GPIO26</td><td>GPIO2</td></tr>
 <tr><td>TS20</td><td>RESET</td><td>EN</td><td>SCL</td><td>SDA</td></tr>
 <tr><td>RGB LED</td><td> </td><td> </td><td> </td><td> </td><td>Signal Pin</td></tr>
</table>
