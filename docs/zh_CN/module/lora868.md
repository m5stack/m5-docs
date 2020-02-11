# Module LoRa868 {docsify-ignore-all}

<img src="assets/img/product_pics/module/module_lora868_01.jpg" width="30%" height="30%"> <img src="assets/img/product_pics/module/module_lora868_02.jpg" width="30%" height="30%">

***

:memo:**[描述](#描述)**&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;:octocat:**[例程](#例程)**&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;🛒**[购买链接](https://m5stack.com/collections/m5-module/products/lora868-module)**&nbsp;&nbsp;&nbsp;<img src="https://m5stack.oss-cn-shenzhen.aliyuncs.com/image/EasyLoader_logo-min.jpg">**[EasyLoader](#EasyLoader)**:clapper:**[Videos](#Videos)**

## 描述

**LoRa868** 是M5Stack堆叠模块系列中的一款，节点通信模块,工作频率806~930MHz.该模块集成了由Ai-Thinker设计和生产的Ra-01H模组，模块上保留了一定的拓展空间，以便你进行更多的功能设计.无论是进行基本的远距离通信或是有着更多定制化元素的项目，LoRa868模块都会是合适的选择.

LoRa能够实现低功耗的远距离通信（在乡村地区等较为空旷的地区，通信距离甚至能够超过10公里）.该技术由两部分组成：LoRa物理层和LoRaWAN（长距离广域网）上层.

LoRa和LoRaWAN允许与不同类型的物联网（IoT）设备，进行远程连接.

## 产品特性

-  LoRa 模块: Ra-01H (by Ai-Thinker)
-  串行通信协议: SPI
-  万能板
-  工作频率: 806~930 MHz
-  支持FSK，GFSK，MSK，GMSK，LoRa™和OOK调制模式
-  接收灵敏度：低至-141 dBm
-  可编程比特率高达300Kbps
-  内置柔性PCB天线
-  外部天线接口
-  开发平台: Arduino
-  产品尺寸：54.2mm x 54.2mm x 12.8mm
-  产品重量：14.5g

## 包含

-  1x M5Stack LoRa868 模块

## 应用

-  自动抄表系统
-  楼宇自动化
-  远程灌溉系统

## 相关链接

- **[LoRa模块信息](https://wiki.ai-thinker.com/_media/lora/docs/ra-01_datasheet_v1.1.pdf) (LoRa)**

- **[LoRaWAN 区域参数](https://m5stack.oss-cn-shenzhen.aliyuncs.com/resource/docs/datasheet/module/lorawantm_regional_parameters_v1.1rb_-_final.pdf)**


## EasyLoader

<img src="https://m5stack.oss-cn-shenzhen.aliyuncs.com/image/EasyLoader_logo.png" width="100px" style="margin-top:20px">

<a href="https://m5stack.oss-cn-shenzhen.aliyuncs.com/EasyLoader/Module/EasyLoader_LORA868_Duplex.exe"><button type="button" class="btn btn-primary">点击下载EasyLoader</button></a>

>1.EasyLoader是一个简洁快速的程序烧录器，每一个产品页面里的EasyLoader都提供了一个与产品相关的案例程序，通过简单步骤将其烧录至主控，能够进行一系列的功能验证.**(目前EasyLoader仅适用于Windows操作系统)**

>2.下载软件后，双击运行应用程序，将M5设备通过数据线连接至电脑,选择端口参数，点击 **"Burn"** 即可开始烧录

!>3.EasyLoader烧录前需要安装有CP210X（USB驱动程序），[点击此处查看驱动安装教程](zh_CN/related_documents/M5Burner#安装串口驱动)

## 例程

### Arduino IDE

在本案例中，将使用两个LoRa868模块分别进行发送与接收消息.实现点对点的通信功能.

* 蓝色字符串表示发送成功.

* 黄色字符串显示收到的消息.

* 红色字符串表示初始化失败.

*以下代码仅为片段，如需获取完整代码， [请点击此处.](https://github.com/m5stack/M5-ProductExampleCodes/tree/master/Module/LORA868/Arduino)*

```arduino
#include <M5Stack.h>
#include <M5LoRa.h>

//declaration
String outgoing;                     // outgoing message
byte msgCount = 0;                   // count of outgoing messages
byte localAddress = 0xBB;            // address of this device
byte destination = 0xFF;             // destination to send to

//initialization
M5.begin();
LoRa.setPins();                      // set CS, reset, IRQ pin
LoRa.begin(868E6);                   // initialize ratio at 868 MHz

//send message
void sendMessage(String outgoing) {
  LoRa.beginPacket();                // start packet
  LoRa.write(destination);           // add destination address
  LoRa.write(localAddress);          // add sender address
  LoRa.write(msgCount);              // add message ID
  LoRa.write(outgoing.length());     // add payload length
  LoRa.print(outgoing);              // add payload
  LoRa.endPacket();                  // finish packet and send it
  msgCount++;                        // increment message ID
}

//receive message
void onReceive(int packetSize) {
  if (packetSize == 0) return;       // if there's no packet, return
  int recipient = LoRa.read();       // recipient address
  byte sender = LoRa.read();         // sender address
  byte incomingMsgId = LoRa.read();  // incoming msg ID
  byte incomingLength = LoRa.read(); // incoming msg length

  String incoming = "";

  while (LoRa.available()) {
    incoming += (char)LoRa.read();
  }
}

onReceive(LoRa.parsePacket());
```

## Videos

<video class="video_size" controls>
    <source src="https://m5stack.oss-cn-shenzhen.aliyuncs.com/video/Product_example_video/Module/LoRa868.mp4" type="video/mp4">
</video>


<script>

   var purchase_link = 'https://m5stack.com/collections/m5-core/products/basic-core-iot-development-kit';


   anchor_search(purchase_link);
   scrollFunc();

</script>