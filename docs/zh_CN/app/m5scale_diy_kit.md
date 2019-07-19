# M5SCALE DIY Kit {docsify-ignore-all}

<img src="assets\img\product_pics\app\m5scale_diy_kit\m5scale_diy_kit_01.jpg" width="30%" height="30%"> 

***

:memo:**[描述](#描述)**&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;🛒**[购买链接](https://m5stack.com/products/m5scale-diy-kit)**

## 描述

**M5SCALE DIY Kit** 是一款电子秤DIY工具包，采用M5StickC作为控制核心，搭配Weight称重Unit，与称重传感器构建功能核心电路. 

选用亚克力材料（丙烯酸材料）打造整体结构.

其内部的称重传感器用于检测由物体重量导致的秤上方弯曲，并进一步将其转换为电压信号输入至Weight传感器，最终由M5stickC捕获和读取数据.

套件中将提供一些可装配的小组件，面板上的LEGO孔使得用户能够进行额外的DIY设计

用作控制核心的M5StickC能够支持多个开发平台编程，并集成WIFI、蓝牙等功能模块，能够方便对该产品的功能进行二次设计.

<img src="assets\img\product_pics\app\m5scale_diy_kit\m5scale_diy_kit_02.jpg" width="30%" height="30%">

## 产品特性 

- 尺寸 ：
    - 整体：100mm * 100mm * 43mm
    - 模组：80mm * 12.7mm * 12.7mm
- DIY电子秤
- M5StickC + WEIGHT
- 测量范围：10KG（默认代码）
- 开源代码
- 兼容LEGO
- 亚克力结构（丙烯酸材料）
- 称重传感器技术参数：
    - 量程: 20kg
    - 输出灵敏度：1.0±0.1mV/V
    - 引线：电源线（红）、信号正（白）、信号负（绿）、接地线（黑）



## 包括

-  1x M5SCALE DIY Kit
-  1x 安装手册


<img src="assets\img\product_pics\app\m5scale_diy_kit\m5scale_diy_kit_03.jpg" width="30%" height="30%">

## 应用

-  高精度电子秤
-  小量程称重机器


## 相关链接

- **[M5StickC产品页](zh_CN/core/m5stickc)**

- **[Weight Unit产品页](zh_CN/unit/weight)**



## EasyLoader

<img src="https://m5stack.oss-cn-shenzhen.aliyuncs.com/image/EasyLoader_logo.png" width="100px" style="margin-top:20px">

<a href="https://m5stack.oss-cn-shenzhen.aliyuncs.com/EasyLoader/Application/M5SCALE_DIY_KIT/EasyLoader_APP_M5Scale_diy_kit.exe"><button type="button" class="btn btn-primary">点击下载EasyLoader</button></a>

>1.EasyLoader是一个简洁快速的程序烧录器，每一个产品页面里的EasyLoader都提供了一个与产品相关的案例程序.

>2.下载软件后，双击运行应用程序，将M5设备通过数据线连接至电脑,选择端口参数，点击 **"Burn"** 即可开始烧录    


## Code

### 1. Arduino IDE

*以下代码仅为片段，如需获取完整代码，[请点击此处.](https://github.com/m5stack/M5-ProductExampleCodes/tree/master/App/M5SCALE_DIY_kit/Arduino/M5SCALE_DIY_kit).*

```arduino
#include"HX711.h"
#include<M5StickC.h>

int Weight = 0;
void setup() {
  M5.begin();
  M5.Lcd.setRotation(1);
  M5.Lcd.setTextColor(TFT_GREEN, TFT_BLACK);
  M5.Lcd.setTextDatum(MC_DATUM);
  M5.Lcd.drawString("SCALE", 80, 0, 4);  
   Init_Hx711();
   Get_Gross();   //clear the weight
   M5.Lcd.setTextColor(TFT_RED, TFT_BLACK);  
   Serial.begin(115200);
     
}
 
void loop() {  
   M5.update(); 
//   if (M5.BtnA.wasReleased()) {
//      Get_Maopi();
//    }
     Weight = Get_Weight();
     M5.Lcd.setCursor(40,30,4);
     M5.Lcd.fillRect(0, 30, 160, 30, TFT_BLACK);
     M5.Lcd.printf("%d g", Weight);
     M5.Lcd.fillRect(0, 70, 160, 10, TFT_BLACK);
     M5.Lcd.fillRect(0, 70, Weight*0.016, 10, TFT_YELLOW);
     delay(100);  

}
```