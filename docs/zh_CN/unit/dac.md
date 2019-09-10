# DAC - 数模转换Unit {docsify-ignore-all}

<img src="assets/img/product_pics/unit/M5GO_Unit_dac.png" width="30%" height="30%">

***

:memo:**[描述](#描述)**&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;:octocat:**[例程](#例程)**&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;🛒**[购买链接](https://m5stack.com/collections/m5-unit/products/dac-unit)**&nbsp;&nbsp;&nbsp;<img src="https://m5stack.oss-cn-shenzhen.aliyuncs.com/image/EasyLoader_logo-min.jpg">**[EasyLoader](#EasyLoader)**

## 描述

**DAC**, 是一款高性能的数字/模拟信号转换器，其内置了**MCP4725**.具备低功耗，高精度，单通道，12位缓冲电压输出数模转换器（DAC），非易失性存储器（EEPROM）.

用户可以使用I2C接口命令将DAC输入和配置烧写到非易失性存储器（EEPROM）中，使得DAC在断电期间仍能保持代码，上电后即可直接使用,I2C地址为0x60.

## 产品特性

- 最高12位分辨率
- 电压输出范围 0~3.3V
- GROVE 接口, 支持 [UIFlow](http://flow.m5stack.com) 、 [Arduino](http://www.arduino.cc).
- 2x LEGO 兼容孔

## 包含

- 1x DAC Unit
- 1x Grove 线

## 应用

-  MP3音频播放器
-  迷你示波器

## 相关链接

- **[官方频道视频](https://i.youku.com/i/UNjE1ODA2MzE0OA==?spm=a2hzp.8253869.0.0)**

- **[官方论坛](http://forum.m5stack.com/)**

-  **数据手册** - [MCP4725](http://pdf1.alldatasheet.com/datasheet-pdf/view/233449/MICROCHIP/MCP4725.html)

## EasyLoader

<img src="https://m5stack.oss-cn-shenzhen.aliyuncs.com/image/EasyLoader_logo.png" width="100px" style="margin-top:20px">

<a href="https://m5stack.oss-cn-shenzhen.aliyuncs.com/EasyLoader/Unit/EasyLoader_DAC.exe"><button type="button" class="btn btn-primary">点击下载EasyLoader</button></a>

>1.EasyLoader是一个简洁快速的程序烧录器，每一个产品页面里的EasyLoader都提供了一个与产品相关的案例程序，通过简单步骤将其烧录至主控，能够进行一系列的功能验证.

>2.下载软件后，双击运行应用程序，将M5设备通过数据线连接至电脑,选择端口参数，点击 **"Burn"** 即可开始烧录.(**为M5StickC烧录时，请将波特率设置在750000或115200**)

?>3.目前EasyLoader仅适用于Windows操作系统、兼容M5体系采用ESP32作为控制核心的主机.在为M5Core烧录前需要安装CP210X驱动程序（使用M5StickC作为控制器的则无需安装）[点击此处查看驱动安装教程](zh_CN/related_documents/M5Burner#安装串口驱动)

## 例程

### 1. Arduino IDE

*以下代码仅为片段，如需获取完整代码， [请点击此处](https://github.com/m5stack/M5-ProductExampleCodes/tree/master/Unit/DAC/Arduino).*

```arduino
/*
    hardware : m5stack uint dac
    please install adafruit MCP4725 lib
*/
#include <Wire.h>
#include <Adafruit_MCP4725.h>

// new a object
Adafruit_MCP4725 dac;

// initialization
dac.begin(0x60);
dac.setVoltage(2048, false);

// 12bit value , false mean not write EEPROM
dac.setVoltage(1024, false);// input digital value "1024" to unit
delay(1000);
dac.setVoltage(2048, false);// input digital value "2048" to unit
delay(1000);
```

<!-- ### 2. UIFlow -->

<!-- <img src="assets/img/product_pics/unit/unit_example/example_unit_dac_01.png" width="30%" height="30%"> <img src="assets/img/product_pics/unit/unit_example/example_unit_dac_02.png" width="55%" height="55%">

具体例程请点击[这里](https://github.com/m5stack/M5-ProductExampleCodes/tree/master/Unit/DAC/UIFlow)。 -->

## 原理图

<img src="assets/img/product_pics/unit/dac_sch.JPG">

### 管脚映射

<table>
 <tr><td>M5Core(GROVE A)</td><td>GPIO22</td><td>GPIO21</td><td>5V</td><td>GND</td></tr>
 <tr><td>DAC Unit</td><td>SCL</td><td>SDA</td><td>5V</td><td>GND</td></tr>
</table>