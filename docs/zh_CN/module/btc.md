# BTC底座

<img src="assets/img/product_pics/module/module_btc_01.png" width="30%" height="30%"> <img src="assets/img/product_pics/module/module_btc_02.png" width="30%" height="30%"> <img src="assets/img/product_pics/module/module_btc_03.png" width="30%" height="30%"> <img src="assets/img/product_pics/module/module_btc_04.png" width="30%" height="30%">

<!-- <img src="assets/img/product_pics/module/module_btc_04.png" width="30%" height="30%"> -->

***

:memo:**[描述](#描述)**&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;:octocat:**[例程](#例程)**&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;:electric_plug:**[原理图](#原理图)**&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;🛒**[购买链接](https://item.taobao.com/item.htm?spm=a1z10.3-c.w4002-1172588106.10.69f6425e8Agsbh&id=559647865340)**

# 描述

BTC模块是一款包含DHT12(温湿度)传感器的底座。有了BTC底座之后，可以方便给M5Core充电。

#  特性

-  内置DHT12

#  包含

-  Type-C USB线
-  M3 x 16
-  Tools

#  管脚映射

**DHT12**

| DHT12        | ESP32      |
| :----------:  |:------------:|
| SCL          | G22 |
| GND          | GND |
| SDA          | G21 |
| 3V3          | 3V3 |

<img src="assets/img/product_pics/module/module_btc_dht12_pinmap.png">

## 相关链接

- **[官方频道视频](https://i.youku.com/i/UNjE1ODA2MzE0OA==?spm=a2hzp.8253869.0.0)**

- **[官方论坛](http://forum.m5stack.com/)**

## 例程

### 1. Arduino IDE

```c++
float tmp = dht12.readTemperature();//temperature
float hum = dht12.readHumidity();//humidity
```

具体例程请点击[这里](https://github.com/m5stack/M5-ProductExampleCodes/tree/master/Unit/ENV/Arduino)。

## 原理图
