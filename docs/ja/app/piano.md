# PIANO {docsify-ignore-all}

<img src="assets/img/product_pics/app/app_piano_01.png" width="30%" height="30%">

***

:memo:**[概要](#概要)**&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;:electric_plug:**[ピンマップ](#ピンマップ)**&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;🛒**[購入リンク](https://item.taobao.com/item.htm?id=584647000573)**

## 概要

**<mark>PIANO</mark>**はピアノ型モジュールです。[サンプルコード](https://github.com/m5stack/M5-ProductExampleCodes/blob/master/App/PIANO/Arduino/M5PIANO/M5PIANO.ino)をダウンロードし、M5Coreと[M5Core Bottom](ja/base/core_bottom)に接続し、すぐに演奏することができます。

PIANOはTS20というタッチセンサを2つ搭載しており、タッチセンサチップとM5CoreはI2Cで通信します。I2Cアドレスは**0x6A**と**0x7A**です。

PIANO は[M5Core Bottom](ja/base/core_bottom)に接続する必要があります。接続を以下に示します。

<img src="assets/img/product_pics/app/app_piano_02.png">

## ピンマップ

**タッチセンサチップ TS20 & LED**

<table>
 <tr><td>ESP32</td><td>GPIO7</td><td>GPIO6</td><td>GPIO5</td><td>GPIO26</td><td>GPIO2</td></tr>
 <tr><td>TS20</td><td>RESET</td><td>EN</td><td>SCL</td><td>SDA</td></tr>
 <tr><td>RGB LED</td><td> </td><td> </td><td> </td><td> </td><td>シグナルピン</td></tr>
</table>

<!-- ## 関連情報

- データシート
  - [TS20](http://www.touchsemi.com/Pages/30_I2C_e/TS20_%2820CH_Sensor_I2C%29_e/TS20.pdf) -->
