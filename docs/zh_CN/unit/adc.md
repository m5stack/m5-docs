# ADC {docsify-ignore-all}

<img src="assets/img/product_pics/unit/M5GO_Unit_adc.png" width="30%" height="30%">



## 描述

**ADC** 是一款A/D转换器，其内置了16位自校准模数转换器ADS1100.通过I2C通信协议，ADS1100可每秒采样8、16、32、或128次进行转换，
片内可编程的增益放大器（PGA）提供高达8倍的增益，对于需要高分辨率A/D转换采集的应用场景,ADC Unit是完美解决方案.

其 I2C 地址是 0x48.

## 产品特性

- 完整的数据采集系统
- 封装：TINY SOT23-6
- 16位无漏失码
- INL: 满标度是量程的0.0125%(最大值)
- 连续自校准
- 单循环转换
- 内置可编程增益放大器（增益倍数 = 1, 2, 4, 8）
- 低噪声：4μVp-p
- 可编程数据速率：8SPS至128SPS
- 内部系统时钟
- I2C 接口
- 电源电压: 2.7V 至 5.5V
- 低电流消耗: 90µA
- 提供 8 个不同的地址
- 2x LEGO 兼容孔

## 包含

- 1x ADC unit
- 1x GROVE 线
- 1x HT3.96 Male Socket(2 pins)

## 尺寸重量

- 包装尺寸:67mm x 53mm x 12mm
- 包装重量:19g

## 应用

- 心电信号采集
- 血压测量
- 测力计

## 相关链接

-  **Datasheet** - [ADS1100](https://m5stack.oss-cn-shenzhen.aliyuncs.com/resource/docs/datasheet/unit/ADS1100_en.pdf)

## EasyLoader

<img src="https://m5stack.oss-cn-shenzhen.aliyuncs.com/image/EasyLoader_logo.png" width="100px" style="margin-top:20px">

<a href="https://m5stack.oss-cn-shenzhen.aliyuncs.com/EasyLoader/Unit/EasyLoader_ADC.exe"><button type="button" class="btn btn-primary">点击下载EasyLoader</button></a>

>1.EasyLoader是一个简洁快速的程序烧录器，每一个产品页面里的EasyLoader都提供了一个与产品相关的案例程序，通过简单步骤将其烧录至主控，能够进行一系列的功能验证.

>2.下载软件后，双击运行应用程序，将M5设备通过数据线连接至电脑,选择端口参数，点击 **"Burn"** 即可开始烧录.(**为M5StickC烧录时，请将波特率设置在750000或115200**)

?>3.目前EasyLoader仅适用于Windows操作系统、兼容M5体系采用ESP32作为控制核心的主机.在为M5Core烧录前需要安装CP210X驱动程序（使用M5StickC作为控制器的则无需安装）[点击此处查看驱动安装教程](zh_CN/related_documents/M5Burner#安装串口驱动)

## 案例程序

### 1. Arduino IDE

*以下代码仅为片段，如需获取完整代码， [请点击此处](https://github.com/m5stack/M5-ProductExampleCodes/tree/master/Unit/ADC/Arduino/ADC_ADS1100).*

```arduino
#include <M5Stack.h>
#include <Wire.h>
#include "ADS1100.h"

#define ADS1100_DEFAULT_ADDRESS 0x48

// declaration
byte error;
int8_t address;

//new a object
ADS1100 ads;

// initialization
M5.begin(true, false, false);
ads.getAddr_ADS1100(ADS1100_DEFAULT_ADDRESS);// 0x48, 1001 000 (ADDR = GND)
ads.setGain(GAIN_ONE);          // 1x gain(default)
ads.setMode(MODE_CONTIN);       // Continuous conversion mode (default)
ads.setRate(RATE_8);            // 8SPS (default)
ads.setOSMode(OSMODE_SINGLE);   // Set to start a single-conversion
ads.begin();

// read data
address = ads.ads_i2cAddress;
Wire.beginTransmission(address);
Wire.endTransmission();
ads.Measure_Differential();
```

### 2. UIFlow

*以下代码仅为片段，如需获取完整代码， [请点击此处](https://github.com/m5stack/M5-ProductExampleCodes/tree/master/Unit/ADC/UIFlow).*

<img src="assets/img/product_pics/unit/unit_example/ADC/example_unit_adc_01.png">

## 原理图

<img src="assets/img/product_pics/unit/adc_sch.JPG">

### 管脚映射

<table>
 <tr><td>M5Core ( GROVE A )</td><td>GPIO22</td><td>GPIO21</td><td>5V</td><td>GND</td></tr>
 <tr><td>ADC Unit</td><td>SCL</td><td>SDA</td><td>5V</td><td>GND</td></tr>
</table>

<script>

   var purchase_link = 'https://m5stack.com/collections/m5-unit/products/adc-unit';


   anchor_search(purchase_link);
   scrollFunc();

</script>