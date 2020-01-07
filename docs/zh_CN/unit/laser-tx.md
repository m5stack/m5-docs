# Unit LASER.TX {docsify-ignore-all}

<img src="assets\img\product_pics\unit\laser_tx\unit_laser_tx_01.jpg" width="30%" height="30%">
<img src="assets\img\product_pics\unit\laser_tx\unit_laser_tx_02.jpg" width="30%" height="30%">

***

:memo:**[描述](#描述)**&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;:electric_plug:**[原理图](#原理图)**&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;:octocat:**[Code](#Code)**&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<img src="https://m5stack.oss-cn-shenzhen.aliyuncs.com/image/EasyLoader_logo-min.jpg">**[EasyLoader](#EasyLoader)** &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;🛒**[购买链接](https://m5stack.com/collections/m5-unit/products/laser-tx-unit)**

## 描述

**LASER.TX** 是一款焦距可调的激光发射器Unit,内部主要由激光二极管构成.
激光通信设备通过大气的无线连接。 除了光束通过自由空间传输外，它们的工作方式类似于光纤链路。 虽然发射器和接收器必须要求视距条件，但它们的好处是不需要广播权和埋地电缆。 因其小巧，低功率并且不需要任何无线电干扰研究的特点，激光通信系统可以很容易地部署到各个位置.  
该Unit使用的端口类型为 PORTB.

!>警告： 激光会对人体造成伤害，因此在使用该产品时，请勿将其对准人体，防止激光光束进入眼睛，造成伤害.

## 产品特性

- 激光发射
- 可调焦距
- 工作电压: 5V
- 配对 LASER.RX 
- 2x LEGO 兼容孔
- 开发平台: Arduino, UIFlow(Blockly, Python)

## 包含

- 1x LASER.TX unit
- 1x CONNEXT cable

## 应用

- 空间激光通信系统. 

## 原理图

<img src="assets/img/product_pics/unit/laser_tx/unit_laser_tx_04.jpg" width="50%" height="50%">

## EasyLoader

<img src="https://m5stack.oss-cn-shenzhen.aliyuncs.com/image/EasyLoader_logo.png" width="100px" style="margin-top:20px">

<a href="https://m5stack.oss-cn-shenzhen.aliyuncs.com/EasyLoader/Unit/LASER/EasyLoader_LASER_TX.exe"><button type="button" class="btn btn-primary">点击下载EasyLoader</button></a>

>1.EasyLoader是一个简洁快速的程序烧录器，每一个产品页面里的EasyLoader都提供了一个与产品相关的案例程序，通过简单步骤将其烧录至主控，能够进行一系列的功能验证.

>2.下载软件后，双击运行应用程序，将M5设备通过数据线连接至电脑,选择端口参数，点击 **"Burn"** 即可开始烧录.(**为M5StickC烧录时，请将波特率设置在750000或115200**)

?>3.目前EasyLoader仅适用于Windows操作系统、兼容M5体系采用ESP32作为控制核心的主机.在为M5Core烧录前需要安装CP210X驱动程序（使用M5StickC作为控制器的则无需安装）[点击此处查看驱动安装教程](zh_CN/related_documents/M5Burner#安装串口驱动)

## Code

- **UIFlow**

<img src="assets\img\product_pics\unit\laser_tx\laser-tx.png" width="60%" height="80%">

### Arduino IDE

*以下代码仅为片段，如需获取完整代码，[请点击此处.](https://github.com/m5stack/M5Stack/tree/master/examples/Unit/LASER).*

```arduino
/* This demo is for LASER.TX and LASER.RX, utilized UART for transmittion and reception of
 laser signals. In order to get the result of this demo, you will need to connect LASER.TX 
 and LASER.RX with PORTC(blue) respectively onto two different M5Cores with M5GO bases on
  bottom. Then flash the demo into both M5Core device. 
  When testing the demo, you need to point the TX unit to RX, and press the button TX connected 
  device. RX connected device will reponse with a display,and will show what is received . 
  See this link for more detals: https://m5stack.oss-cn-shenzhen.aliyuncs.com/EasyLoader/Unit/LASER/EasyLoader_LASER_RX.exe
 */

#include <M5Stack.h>

char ch;
// serial 2 write and read
//#define RX 
void setup() {
  M5.begin();
  Serial.begin(115200);
  // Serial2.begin(unsigned long baud, uint32_t config, int8_t rxPin, int8_t txPin, bool invert)
  Serial2.begin(9600, SERIAL_8N1, 16, 17);

}

void loop() {
M5.update();

  if (M5.BtnA.wasReleased()) {
    ch = 'A';
    Serial2.write(ch);
  } else if (M5.BtnB.wasReleased()) {
    ch = 'B';
    Serial2.write(ch);
  } else if (M5.BtnC.wasReleased()) {
    ch = 'C';
    Serial2.write(ch);
  }
  M5.update();
 if(Serial2.available()) {
    char ch = Serial2.read();
    M5.Lcd.print(ch);
 }
}
```

### 管脚映射

<table>
 <tr><td>M5 PORTB</td><td>GPIO36</td><td>GPIO26</td><td>5V</td><td>GND</td></tr>
 <tr><td>LASER_TX</td><td>/</td><td>TX</td><td>5V</td><td>GND</td></tr>
</table>


## 相关视频
**Demo** 

<video class="video_size" controls>
    <source src="https://m5stack.oss-cn-shenzhen.aliyuncs.com/video/Product_example_video/Unit/LASER-TX-RX.mp4" type="video/mp4" >
</video>




















