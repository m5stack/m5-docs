# Unit IR {docsify-ignore-all}

<img src="assets/img/product_pics/unit/M5GO_Unit_ir.png" width="30%" height="30%">

***

:memo:**[描述](#描述)**&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;:octocat:**[例程](#例程)**&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; :electric_plug:**[原理图](#原理图)** &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;🛒**[购买链接](https://m5stack.com/collections/m5-unit/products/ir-unit)**&nbsp;&nbsp;&nbsp;<img src="https://m5stack.oss-cn-shenzhen.aliyuncs.com/image/EasyLoader_logo-min.jpg">**[EasyLoader](#EasyLoader)**

## 描述

**IR** 是一款红外光电对管 Unit，集成了红外发射、接收管.通过GROVE接口与M5Core进行连接并控制红外发射、接收.支持红外编码、红外解码.

基于它可靠的短距离传输特性，在日常生活中，红外遥控广泛应用家电与消费类电子产品.

## 产品特性

- 1x 红外发射器
- 1x 红外接收器
- 距离范围: < 5m
- 开发平台: Arduino, UIFlow(Blockly,Python)
- 2x LEGO 兼容孔

## 包含

- 1x IR Unit
- 1x Grove 线

## 相关链接

- **[官方频道视频](https://i.youku.com/i/UNjE1ODA2MzE0OA==?spm=a2hzp.8253869.0.0)**

- **[官方论坛](http://forum.m5stack.com/)**


## EasyLoader

<img src="https://m5stack.oss-cn-shenzhen.aliyuncs.com/image/EasyLoader_logo.png" width="100px" style="margin-top:20px">

<a href="https://m5stack.oss-cn-shenzhen.aliyuncs.com/EasyLoader/Unit/EasyLoader_IR.exe"><button type="button" class="btn btn-primary">点击下载EasyLoader</button></a>

>1.EasyLoader是一个简洁快速的程序烧录器，每一个产品页面里的EasyLoader都提供了一个与产品相关的案例程序，通过简单步骤将其烧录至主控，能够进行一系列的功能验证.

>2.下载软件后，双击运行应用程序，将M5设备通过数据线连接至电脑,选择端口参数，点击 **"Burn"** 即可开始烧录.(**为M5StickC烧录时，请将波特率设置在750000或115200**)

?>3.目前EasyLoader仅适用于Windows操作系统、兼容M5体系采用ESP32作为控制核心的主机.在为M5Core烧录前需要安装CP210X驱动程序（使用M5StickC作为控制器的则无需安装）[点击此处查看驱动安装教程](zh_CN/related_documents/M5Burner#安装串口驱动)

## 例程

### 1. Arduino IDE

*以下代码仅为片段，如需获取完整代码， [请点击此处](https://github.com/m5stack/M5-ProductExampleCodes/tree/master/Unit/IR/Arduino).*

```arduino
#include <M5Stack.h>

// declaration
int cur_recv_value = 0;

// initialization
M5.begin();
pinMode(ir_recv_pin, INPUT);// receiver pin
pinMode(ir_send_pin, OUTPUT);// transmitter pin
digitalWrite(ir_send_pin, 1);// send infrared light

// read data
cur_recv_value = digitalRead(ir_recv_pin);// read the status of receiver
```

### 2. UIFlow

*以下代码仅为片段，如需获取完整代码， [请点击此处](https://github.com/m5stack/M5-ProductExampleCodes/tree/master/Unit/IR/UIFlow).*

<img src="assets/img/product_pics/unit/unit_example/IR/example_unit_ir_03.png">

## 原理图

<img src="assets/img/product_pics/unit/ir_sch.JPG">

### 管脚映射

<table>
 <tr><td>M5Core(GROVE B)</td><td>GPIO36</td><td>GPIO26</td><td>5V</td><td>GND</td></tr>
 <tr><td>IR Unit</td><td>Receiver Pin</td><td>Transmitter Pin</td><td>5V</td><td>GND</td></tr>
</table>