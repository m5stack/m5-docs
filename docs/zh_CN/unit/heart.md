# HEART {docsify-ignore-all}

<img src="assets/img/product_pics/unit/unit_heart_01.png" width="30%" height="30%"> <img src="assets/img/product_pics/unit/unit_heart_02.png" width="30%" height="30%">


## 描述

**HEART** 是一款血氧心率传感器.集成**MAX30100**，提供完整的脉搏血氧仪和心率传感器系统解决方案.这是一款非插入式的血氧心率传感器,集成了两个红外发光二极管和一个光检测器.其检测原理是通过红外 led 灯照射，检测携带氧气和非携带氧气的红血球数量比例，从而得到血氧含量.

**测试方式: 程序运行后，将手指放置在检测区域.**

**Heart Unit 通过 I2C 协议与 M5Core 进行通信 I2C地址:0x57**

## 产品特性

- 可编程采样率和LED电流，以节省功耗
- 超低关断电流 (0.7µA, 典型值)
- 高测量性能
- 高采样率
- 快速数据输出
- GROVE 接口
- 软件开发平台: Arduino
- 2x LEGO 兼容孔

## 包含

- 1x HEART Unit
- 1x Grove 线

## 相关链接

- **Datasheet** - [MAX30100](https://m5stack.oss-cn-shenzhen.aliyuncs.com/resource/docs/datasheet/unit/MAX30110_en.pdf)

- **[MAX30100 lib](https://github.com/oxullo/Arduino-MAX30100)**

## EasyLoader

<img src="https://m5stack.oss-cn-shenzhen.aliyuncs.com/image/EasyLoader_logo.png" width="100px" style="margin-top:20px">

<a href="https://m5stack.oss-cn-shenzhen.aliyuncs.com/EasyLoader/Unit/EasyLoader_HEART.exe"><button type="button" class="btn btn-primary">点击下载EasyLoader</button></a>

>1.EasyLoader是一个简洁快速的程序烧录器，每一个产品页面里的EasyLoader都提供了一个与产品相关的案例程序，通过简单步骤将其烧录至主控，能够进行一系列的功能验证.

>2.下载软件后，双击运行应用程序，将M5设备通过数据线连接至电脑,选择端口参数，点击 **"Burn"** 即可开始烧录.(**为M5StickC烧录时，请将波特率设置在750000或115200**)

?>3.目前EasyLoader仅适用于Windows操作系统、兼容M5体系采用ESP32作为控制核心的主机.在为M5Core烧录前需要安装CP210X驱动程序（使用M5StickC作为控制器的则无需安装）[点击此处查看驱动安装教程](zh_CN/related_documents/M5Burner#安装串口驱动)

## 案例程序

### Arduino IDE

*以下代码仅为片段，如需获取完整代码， [请点击此处](https://github.com/m5stack/M5-ProductExampleCodes/tree/master/Unit/HEART/Arduino).*

```arduino
/*
    Install MAX30100lib Library first.

    MAX30100_RawData.ino
*/
#include <Wire.h>
#include "MAX30100.h"

#define SAMPLING_RATE   MAX30100_SAMPRATE_100HZ
#define IR_LED_CURRENT  MAX30100_LED_CURR_50MA
#define RED_LED_CURRENT MAX30100_LED_CURR_27_1MA
// set HIGHRES_MODE to true only
// when setting PULSE_WIDTH to MAX30100_SPC_PW_1600US_16BITS
#define PULSE_WIDTH MAX30100_SPC_PW_1600US_16BITS
#define HIGHRES_MODE    true

// new a object
MAX30100 sensor;

void setup()
{
    Serial.begin(115200);
    Serial.print("Initializing MAX30100..");
    if (!sensor.begin()) {
        Serial.println("FAILED");
        for(;;);
    } else {
        Serial.println("SUCCESS");
    }
    sensor.setMode(MAX30100_MODE_SPO2_HR);
    sensor.setLedsCurrent(IR_LED_CURRENT, RED_LED_CURRENT);
    sensor.setLedsPulseWidth(PULSE_WIDTH);
    sensor.setSamplingRate(SAMPLING_RATE);
    sensor.setHighresModeEnabled(HIGHRES_MODE);
}

void loop()
{
    uint16_t ir, red;
    sensor.update();
    while (sensor.getRawValues(&ir, &red)) {
        Serial.print(ir);
        Serial.print('\t');
        Serial.println(red);
    }
}
```

<img src="assets/img/product_pics/unit/unit_example/HEART/example_unit_heart_01.png">

## 原理图

<img src="assets/img/product_pics/unit/heart_sch.JPG">

### 管脚映射

<table>
<tr><td>M5Core(GROVE A)</td><td>GPIO22</td><td>GPIO21</td><td>5V</td><td>GND</td></tr>
 <tr><td>HEART Unit</td><td>SCL</td><td>SDA</td><td>5V</td><td>GND</td></tr>
</table>


<script>

   var purchase_link = 'https://m5stack.com/collections/m5-unit/products/mini-heart-unit';


   anchor_search(purchase_link);
   scrollFunc();

</script>