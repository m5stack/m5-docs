# WEIGHT {docsify-ignore-all}

<div class="badge badge-pill badge-primary product_sku_tag">SKU:U030</div>

<img src="assets/img/product_pics/unit/unit_weight_01.png" width="30%" height="30%">


## 描述

**WEIGHT** 是一款计重 Unit.集成专为高精度电子秤而设计的24位A/D转换器芯片**HX711**.输入选择开关可任意选取通道A 或通道B，与其内部的低噪声可编程放大器（PGA）相连.通道A 的可编程增益为128 或64，对应的满额度差分输入信号幅值分别为±20mV或±40mV.通道B 则为固定的32 增益,所有控制信号由管脚驱动，无需对芯片内部的寄存器编程.

在测试中，我们将使用 WEIGHT Unit 连接压力传感器，并通过M5Core显示重量测量数据

<img src="assets/img/product_pics/unit/unit_weight_04.png">

<img src="assets/img/product_pics/unit/unit_weight_03.png">

### 产品特性

- 两路可选差分输入通道
- 片内低噪声可编程放大器，可选增益32, 64 and 128
- 片内稳压电路可直接向外部传感器芯片内A/D转换器提供电源
- 片内时钟振荡器无需外接器件，必要时也可使用外接晶振或时钟
- 上电自动复位电路
- 简单的数字控制和串口通讯:所有控制由管脚输入，芯片内寄存器无需编程
- 可选择10SPS或80SPS输出数据速率
- 同时抑制50和60Hz的电源干扰
- 电流消耗（含稳压电源电路）
电源调节器:
- 典型工作电流 < 1.5mA, 断电电流 < 1uA
- 工作电压范围: 2.6 ~ 5.5V
- 工作温度范围: -40 ~ +85℃
- 16 pin SOP-16 封装
- 开发平台: Arduino, UIFlow(Blockly, Python)
- 2x LEGO 兼容孔

## 套件清单

- 1x WEIGHT Unit
- 1x Grove 线

## 尺寸重量

- 包装尺寸:67mm x 53mm x 12mm
- 包装重量:20g

### 应用

- 微型重量计
- 厨房秤

## 相关链接

-  **Datasheet** - [HX711](https://m5stack.oss-cn-shenzhen.aliyuncs.com/resource/docs/datasheet/unit/HX711_en.pdf)


## EasyLoader

<img src="https://m5stack.oss-cn-shenzhen.aliyuncs.com/image/EasyLoader_logo.png" width="100px" style="margin-top:20px">

<a href="https://m5stack.oss-cn-shenzhen.aliyuncs.com/EasyLoader/Unit/EasyLoader_WEIGHT.exe"><button type="button" class="btn btn-primary">点击下载EasyLoader</button></a>

>1.EasyLoader是一个简洁快速的程序烧录器，每一个产品页面里的EasyLoader都提供了一个与产品相关的案例程序，通过简单步骤将其烧录至主控，能够进行一系列的功能验证.

>2.下载软件后，双击运行应用程序，将M5设备通过数据线连接至电脑,选择端口参数，点击 **"Burn"** 即可开始烧录.(**为M5StickC烧录时，请将波特率设置在750000或115200**)

?>3.目前EasyLoader仅适用于Windows操作系统、兼容M5体系采用ESP32作为控制核心的主机.在为M5Core烧录前需要安装CP210X驱动程序（使用M5StickC作为控制器的则无需安装）[点击此处查看驱动安装教程](zh_CN/related_documents/M5Burner#安装串口驱动)

## 案例程序

### 1. Arduino IDE

该案例使用10Kg量程的传感器.(单位:克)

*以下代码仅为片段，如需获取完整代码， [请点击此处](https://github.com/m5stack/M5-ProductExampleCodes/tree/master/Unit/WEIGHT/Arduino/weight)。*

```arduino
/*
  This Unit connects to GRVOE B on M5Core.
*/

#include <M5Stack.h>
#include "hx711.h"

HX711 scale(36, 26);// GROVE B

void setup() {
  M5.begin();
  M5.Lcd.clear(BLACK);
  M5.Lcd.setTextSize(2);
  M5.Lcd.setTextColor(YELLOW);
  M5.Lcd.setCursor(50, 10);
  M5.Lcd.print("UNIT_WEIGHT EXAMPLE\n");
  M5.Lcd.setCursor(15, 50);
  M5.Lcd.print("Connect Unit to GROVE B");
  Serial.begin(115200);

  scale.setOffset(125184);
  scale.setScale(67.4);

  M5.Lcd.setCursor(0, 90);
  M5.Lcd.print("The weight: ");
}

void loop(){
  // Serial.println(scale.averageValue());
  float weight;
  weight = ((float)((int)((scale.getGram()+0.005)*100)))/100;
  // sprintf(&weight, "%0.2f", scale.getGram());
  Serial.print("The weight: ");
  Serial.print(weight);
  M5.Lcd.fillRect(150, 90, 100, 20, BLACK);
  M5.Lcd.setCursor(150, 90);
  M5.Lcd.print(weight);
  Serial.println(" g");
  delay(100);
}
```

### 2. UIFlow

每次下载程序后，需要先按下按键A进行校准.然后放置测量对象进行测量，在M5Core的屏幕上将会显示其重量.（单位:克）

*以下代码仅为片段，如需获取完整代码， [请点击此处](https://github.com/m5stack/M5-ProductExampleCodes/tree/master/Unit/WEIGHT/UIFlow)。*

<img src="assets/img/product_pics/unit/unit_example/WEIGHT/example_unit_weight_01.png">

## 原理图

<img src="assets/img/product_pics/unit/weight_sch.png">

### 管脚映射

**WEIGHT 连接到 GROVE A**

<table>
 <tr><td>M5Core(GROVE A)</td><td>GPIO22</td><td>GPIO21</td><td>5V</td><td>GND</td></tr>
 <tr><td>WEIGHT Unit</td><td>DATA Pin (DAT)</td><td>CLOCK Pin (CLK)</td><td>5V</td><td>GND</td></tr>
</table>

**WEIGHT 连接到  GROVE B**

<table>
<tr><td>M5Core(GROVE B)</td><td>GPIO36</td><td>GPIO26</td><td>5V</td><td>GND</td></tr>
 <tr><td>WEIGHT Unit</td><td>DATA Pin (DAT)</td><td>CLOCK Pin (CLK)</td><td>5V</td><td>GND</td></tr>
</table>

**WEIGHT 连接到 GROVE C**

<table>
<tr><td>M5Core(GROVE C)</td><td>GPIO16</td><td>GPIO17</td><td>5V</td><td>GND</td></tr>
 <tr><td>WEIGHT Unit</td><td>DATA Pin (DAT)</td><td>CLOCK Pin (CLK)</td><td>5V</td><td>GND</td></tr>
</table>

<script>

   var purchase_link = 'https://m5stack.com/collections/m5-unit/products/weight-sensor-unit';

   anchor_search(purchase_link);
   scrollFunc();

</script>