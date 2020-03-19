# FAN-UNIT  {docsify-ignore-all}

<div class="badge badge-pill badge-primary product_sku_tag">SKU:U063</div>

<img src="assets/img/product_pics/unit/Fan/unit_fan_01.jpg" width="30%" height="30%"><img src="assets/img/product_pics/unit/Fan/unit_fan_02.jpg" width="30%" height="30%">



## 描述

**FAN** 是一款直流电机的Unit, 采用N20直流电机制作， 输出轴的转速为8800 RPM（无负载）. 利用其单向旋转的特性，可以将其运用在一些需要进行运动控制的结构中充当动力源. 例如，控制车轮转动.

<img src="assets/img/product_pics/unit/Fan/unit_fan_03.jpg" width="30%" height="30%">

## 产品特性

- 单向旋转
- DC-5V供电

## 套件清单

- 1x FAN unit
- 1x GROVE 线
- 2x 螺旋桨

## 尺寸重量

- 包装尺寸:60mm x 57mm x 17mm
- 包装重量:24g

## 应用

- 运动控制

## 原理图

<img src="assets/img/product_pics/unit/Fan/unit_fan_04.jpg" width="50%" height="50%">

## EasyLoader

<img src="https://m5stack.oss-cn-shenzhen.aliyuncs.com/image/EasyLoader_logo.png" width="100px" style="margin-top:20px">

<a href="https://m5stack.oss-cn-shenzhen.aliyuncs.com/EasyLoader/Unit/EasyLoader_FAN.exe"><button type="button" class="btn btn-primary">点击下载EasyLoader</button></a>

>1.EasyLoader是一个简洁快速的程序烧录器，每一个产品页面里的EasyLoader都提供了一个与产品相关的案例程序，通过简单步骤将其烧录至主控，能够进行一系列的功能验证.

>2.下载软件后，双击运行应用程序，将M5设备通过数据线连接至电脑,选择端口参数，点击 **"Burn"** 即可开始烧录.(**为M5StickC烧录时，请将波特率设置在750000或115200**)

?>3.目前EasyLoader仅适用于Windows操作系统、兼容M5体系采用ESP32作为控制核心的主机.在为M5Core烧录前需要安装CP210X驱动程序（使用M5StickC作为控制器的则无需安装）[点击此处查看驱动安装教程](zh_CN/related_documents/M5Burner#安装串口驱动)

## 案例程序

### 1. Arduino IDE

*To get complete code, please click [here](https://github.com/m5stack/M5-ProductExampleCodes/tree/master/Unit/FAN).*

```arduino
#include <M5Stack.h>

const int motor_pin = 21;
int freq = 10000;
int ledChannel = 0;
int resolution = 10;
void setup() {
  // put your setup code here, to run once:
  M5.begin();
  M5.Lcd.setCursor(120, 110, 4);
  M5.Lcd.println("MOTOR");
  ledcSetup(ledChannel, freq, resolution);
  ledcAttachPin(motor_pin, ledChannel);

}
// 0 - 1024 
void loop() {
  // put your main code here, to run repeatedly:
    ledcWrite(ledChannel, 512);//0°
    delay(1000);
    ledcWrite(ledChannel, 0);//90°
    delay(1000);
    //ledcWrite(ledChannel, 30);//180°
    //delay(1000);

}
```

### 2. UIFlow

<img src="assets/img/product_pics/unit/Fan/fan.png" width="50%" height="50%">

- [点击此处，获取案例程序](https://github.com/m5stack/M5-ProductExampleCodes/tree/master/Unit/FAN).


<script>

   var purchase_link = 'https://m5stack.com/collections/m5-unit/products/mini-fan-unit?variant=17365249785946';

   anchor_search(purchase_link);
   scrollFunc();

</script>