# Unit RELAY {docsify-ignore-all}

<img src="assets/img/product_pics/unit/M5GO_Unit_relay.png" width="30%" height="30%"><img src="assets/img/product_pics/unit/unit_relay_grove_b.png" width="30%" height="30%">

***

:clapper: **[视频教程](#视频教程)**&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;:memo:**[描述](#描述)**&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;:octocat:**[例程](#例程)**&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;:electric_plug:**[原理图](#原理图)**&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;🛒**[购买链接](https://item.taobao.com/item.htm?spm=a1z10.3-c.w4002-1172588106.55.3a93425e5PQbBs&id=577469172757)**&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;:clapper:**[相关视频](#相关视频)**

## 描述

**RELAY**, 是一款继电器 Unit.能够控制DC/3A-30V或AC/3A-220V级别线路的通断.它实际上是用小电流去控制大电流运作的一种自动开关.故在电路中起着自动调节、安全保护、转换电路等作用.Unit提供3个引脚: ON、OFF、COM.通过编程GPIO输出高、低电平控制，公共端COM与ON、OFF其中之一连接.

## 产品特性

- 单总线控制
- 最高支持DC/3A-30V或AC/3A-220V
- 开发平台: Arduino, UIFlow(Blockly,Python)
- 2x LEGO 兼容孔

## 包含

- 1x RELAY Unit
- 1x Grove 线
- 1x 3.96 端子

## 应用

- 远程控制大功率电器，如冰箱，空调，电视等


## 相关链接

- **[官方频道视频](https://i.youku.com/i/UNjE1ODA2MzE0OA==?spm=a2hzp.8253869.0.0)**

- **[官方论坛](http://forum.m5stack.com/)**

## 例程

### Mini Burner

>1.Mini Burner是一个简洁快速的程序烧录器，每一个产品页面里的Mini Burner都提供了一个与产品相关的案例程序.
[点击此处下载](https://m5stack.oss-cn-shenzhen.aliyuncs.com/MiniBurner/Unit/MiniBurner_Relay.exe)

>2.下载软件后，双击运行应用程序，将M5设备通过数据线连接至电脑,选择端口参数，点击 **"Burn"** 即可开始烧录

!>3.Mini Burner烧录前需要安装有CP210X（USB驱动程序），[点击此处查看驱动安装教程](zh_CN/related_documents/M5Burner#安装串口驱动)

### 1. Arduino IDE

*以下代码仅为片段，如需获取完整代码， [请点击此处](https://github.com/m5stack/M5-ProductExampleCodes/tree/master/Unit/RELAY/Arduino).*

```arduino
#include <M5Stack.h>

void setup() {
  M5.begin();
  M5.Lcd.clear(BLACK);
  M5.Lcd.setTextFont(4);
  M5.Lcd.setTextColor(YELLOW, BLACK);
  //disable the speak noise
  dacWrite(25, 0);
  pinMode(26, OUTPUT);// RELAY Pin setting
}

void loop(void) {
  digitalWrite(26, HIGH);// RELAY Unit work
  delay(500);
  digitalWrite(26, LOW);// RELAY Unit stop work
  delay(500);
}
```

### 2. UIFlow

*以下代码仅为片段，如需获取完整代码， [请点击此处](https://github.com/m5stack/M5-ProductExampleCodes/tree/master/Unit/RELAY/UIFlow).*

<img src="assets/img/product_pics/unit/unit_example/RELAY/example_unit_relay_01.png">

## 原理图

<img src="assets/img/product_pics/unit/relay_sch.JPG">

### 管脚映射

<table>
 <tr><td>M5Core(GROVE B)</td><td>GPIO36</td><td>GPIO26</td><td>5V</td><td>GND</td></tr>
 <tr><td>RELAY Unit</td><td>/</td><td>RELAY Controlling Pin</td><td>5V</td><td>GND</td></tr>
</table>

## 视频教程

- **用 UIFlow 和 RELAY Unit 控制 家庭灯**

<video width="500" height="315" controls>
    <source src="https://m5stack.oss-cn-shenzhen.aliyuncs.com/video/LukeVideo/Blinking%20a%20bulb%20with%20the%20M5%20Relay%20unit..mp4" type="video/mp4">
</video>
