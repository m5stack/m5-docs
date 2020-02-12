# Unit EXT.IO {docsify-ignore-all}

<img src="assets/img/product_pics/unit/unit_extio_01.png" width="30%" height="30%"><img src="assets/img/product_pics/unit/unit_extio_02.png" width="30%" height="30%">



## 描述

**EXT.IO** 是一款并行端口拓展器.集成了IO拓展芯片PCA9554PW,支持拓展至8个GPIO，能够用于用于2.3~5.5V VCC、开漏、上拉、中断输出操作.通过I2C接口（串行时钟SCL,串行数据SDA）辅助多数的微控制器提供I/0拓展,对于I/O引脚紧缺，又不想浪费资源添加额外控制器的开发者来说,EXT.IO会是一个不错辅助 Unit.

IIC 地址: 0x27.

### 产品描述

- 拓展 I/O 个数: 8
- GROVE 接口, 支持 [UIFlow](http://flow.m5stack.com) 、 [Arduino](http://www.arduino.cc).
- 2x LEGO 兼容孔

## 包含

- 1x EXT.IO Unit
- 1x Grove 线

## 相关链接

- Datasheet - **[PCA9554PW](https://m5stack.oss-cn-shenzhen.aliyuncs.com/resource/docs/datasheet/unit/PCA9554PW_en.pdf)**


### EasyLoader

<img src="https://m5stack.oss-cn-shenzhen.aliyuncs.com/image/EasyLoader_logo.png" width="100px" style="margin-top:20px">

<a href="https://m5stack.oss-cn-shenzhen.aliyuncs.com/EasyLoader/Unit/EasyLoader_EXT_IO.exe"><button type="button" class="btn btn-primary">点击下载EasyLoader</button></a>

>1.EasyLoader是一个简洁快速的程序烧录器，每一个产品页面里的EasyLoader都提供了一个与产品相关的案例程序，通过简单步骤将其烧录至主控，能够进行一系列的功能验证.

>2.下载软件后，双击运行应用程序，将M5设备通过数据线连接至电脑,选择端口参数，点击 **"Burn"** 即可开始烧录.(**为M5StickC烧录时，请将波特率设置在750000或115200**)

?>3.目前EasyLoader仅适用于Windows操作系统、兼容M5体系采用ESP32作为控制核心的主机.在为M5Core烧录前需要安装CP210X驱动程序（使用M5StickC作为控制器的则无需安装）[点击此处查看驱动安装教程](zh_CN/related_documents/M5Burner#安装串口驱动)

## 案例程序

### 1. Arduino IDE

*以下代码仅为片段，如需获取完整代码， [请点击此处](https://github.com/m5stack/M5-ProductExampleCodes/tree/master/Unit/EXTIO/Arduino)。*

```arduino
/*
    Connect to GRVOE A on M5Core
*/
#include <M5Stack.h>
#include "PCA9554.h" // Load the PCA9554 Library

// new a object
PCA9554 ioCon1(0x27);

uint8_t res;

// initialization

M5.begin();
Wire.begin();
ioCon1.twiWrite(21, 22); // GROVE A
delay(10);
res = 1;
ioCon1.twiRead(res);
Serial.printf("res:%d\r\n", res);
ioCon1.portMode0(ALLOUTPUT); //Set the port as all output

// set the specific pin
ioCon1.digitalWrite0(0, HIGH);
ioCon1.digitalWrite0(1, HIGH);
ioCon1.digitalWrite0(2, HIGH);
ioCon1.digitalWrite0(3, HIGH);
ioCon1.digitalWrite0(4, HIGH);
ioCon1.digitalWrite0(5, HIGH);
ioCon1.digitalWrite0(6, HIGH);
ioCon1.digitalWrite0(7, HIGH);

// write 0-7 HIGHT
Serial.println(ioCon1.digitalWritePort0(0xff));

// write 0-7 LOW
Serial.println(ioCon1.digitalWritePort0(0x00));
```
<img src="assets/img/product_pics/unit/unit_extio_03.png">

### 2. UIFlow

*以下代码仅为片段，如需获取完整代码， [请点击此处](https://github.com/m5stack/M5-ProductExampleCodes/tree/master/Unit/EXTIO/UIFlow).*

<img src="assets/img/product_pics/unit/unit_example/EXTIO/example_unit_extio_01.png">

### 管脚映射

<table>
 <tr><td>M5Core(GROVE A)</td><td>GPIO22</td><td>GPIO21</td><td>5V</td><td>GND</td></tr>
 <tr><td>EXT.IO Unit</td><td>SCL</td><td>SDA</td><td>5V</td><td>GND</td></tr>
</table>

<script>

   var purchase_link = 'https://m5stack.com/collections/m5-unit/products/official-extend-serial-i-o-unit';


   anchor_search(purchase_link);
   scrollFunc();

</script>