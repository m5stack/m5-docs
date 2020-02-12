# Unit Dual-BUTTON {docsify-ignore-all}

<img src="assets/img/product_pics/unit/M5GO_Unit_dual_button.png" width="30%" height="30%">



## 描述

**Dual Button**, 是一款双按键 Unit ，提供了两个不同颜色的物理按键供你进行操作.通过检测不同按键输入引脚高/低电平变化，进而判断按键状态.

该 Unit 通过GROVE B端口与M5Core进行通信.

<img src="assets/img/product_pics/unit/dual_button/unit_dual_button_05.png" width="50%" height="50%">

**输出状态示意:**

<img src="assets/img/product_pics/unit/dual_button/unit_dual_button_08.png">

## 产品特性

- GROVE 接口, 支持 [UIFlow](http://flow.m5stack.com) 、 [Arduino](http://www.arduino.cc).
- 2x LEGO 兼容孔

## 包含

- 1x Dual BUTTON Unit
- 1x Grove 线

## 应用

- 游戏控制器
- 远程控制开关

## 相关链接

- **[官方频道视频](https://i.youku.com/i/UNjE1ODA2MzE0OA==?spm=a2hzp.8253869.0.0)**

- **[官方论坛](http://forum.m5stack.com/)**

### EasyLoader

<img src="https://m5stack.oss-cn-shenzhen.aliyuncs.com/image/EasyLoader_logo.png" width="100px" style="margin-top:20px">

<a href="https://m5stack.oss-cn-shenzhen.aliyuncs.com/EasyLoader/Unit/EasyLoader_Dual_Button.exe"><button type="button" class="btn btn-primary">点击下载EasyLoader</button></a>

>1.EasyLoader是一个简洁快速的程序烧录器，每一个产品页面里的EasyLoader都提供了一个与产品相关的案例程序，通过简单步骤将其烧录至主控，能够进行一系列的功能验证.

>2.下载软件后，双击运行应用程序，将M5设备通过数据线连接至电脑,选择端口参数，点击 **"Burn"** 即可开始烧录.(**为M5StickC烧录时，请将波特率设置在750000或115200**)

?>3.目前EasyLoader仅适用于Windows操作系统、兼容M5体系采用ESP32作为控制核心的主机.在为M5Core烧录前需要安装CP210X驱动程序（使用M5StickC作为控制器的则无需安装）[点击此处查看驱动安装教程](zh_CN/related_documents/M5Burner#安装串口驱动)

## 案例程序

### 1. Arduino IDE

*以下代码仅为片段，如需获取完整代码， [请点击此处](https://github.com/m5stack/M5-ProductExampleCodes/tree/master/Unit/DUAL_BUTTON/Arduino).*

```arduino
#include <M5Stack.h>

// declaration
int cur_value_red = 0;
int cur_value_blue = 0;

// initialization
M5.begin();
pinMode(26, INPUT);// Red Button Pin setting
pinMode(36, INPUT);// Blue Button Pin setting

// read data
cur_value_red = digitalRead(26);
cur_value_blue = digitalRead(36);
M5.update();
```

### 2. UIFlow

*以下代码仅为片段，如需获取完整代码， [请点击此处](https://github.com/m5stack/M5-ProductExampleCodes/tree/master/Unit/DUAL_BUTTON/UIFlow).*

<img src="assets/img/product_pics/unit/unit_example/DUAL_BUTTON/example_unit_dual_button_05.png">

## 原理图

<img src="assets/img/product_pics/unit/dual_button_sch.png">

### 管脚映射

<table>
 <tr><td>M5Core (GROVE B)</td><td>GPIO36</td><td>GPIO26</td><td>5V</td><td>GND</td></tr>
 <tr><td>DUAL_BUTTON Unit</td><td>Blue Button Pin</td><td>Red Button Pin</td><td>5V</td><td>GND</td></tr>
</table>

## 相关视频

**DUAL BUTTON 的演示 - 控制 VARIOUS2 游戏**

<video class="video_size" controls>
    <source src="https://m5stack.oss-cn-shenzhen.aliyuncs.com/video/Blog/Twitch201811/M5Game-VARIOUS2.mp4" type="video/mp4">
</video>

<script>

   var 购买链接 = 'https://m5stack.com/collections/m5-unit/products/mini-dual-button-unit';


   anchor_search(购买链接);
   scrollFunc();

</script>