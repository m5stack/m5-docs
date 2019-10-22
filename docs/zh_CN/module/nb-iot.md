# Module NB-IoT {docsify-ignore-all}

<img src="assets\img\product_pics\module\nb-iot\nb_iot_01.jpg" width="30%" height="30%">&nbsp;&nbsp;&nbsp;<img src="assets\img\product_pics\module\nb-iot\nb_iot_02.jpg" width="30%" height="30%">
<img src="assets/img/product_pics/module/nb-iot/NanoSIM.jpeg" width="60%" height="60%">

***

:memo:**[描述](#描述)**&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;:electric_plug:**[原理图](#原理图)**&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;🛒**[购买链接](https://m5stack.com/collections/m5-module/products/m5stack-nb-iot-module)**&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;:clapper:**[相关视频](#相关视频)**&nbsp;&nbsp;&nbsp;<img src="https://m5stack.oss-cn-shenzhen.aliyuncs.com/image/EasyLoader_logo-min.jpg">**[EasyLoader](#EasyLoader)**

## 描述

**NB-IoT** 是M5Stack堆叠模块系列中的一款，NB-IoT通信模块.内部集成高性能 NB-IoT 全网通无线通信模组**M5311**.低功耗设计可以帮助客户获得更长的终端使用寿命.M5311 提供丰富的外部接口和协议栈，支持外接传感器设备，为用户的产品开发提供了极大的便利.同时支持 OneNET 云平台协议，真正实现无缝对接，快速开发.

该模块特别适用于以超低功耗、超小尺寸为核心需求的智能表计、智能穿戴、智能停车、市政管理等loT行业

<img src="assets\img\product_pics\module\nb-iot\nb_iot_03.jpg" width="30%" height="30%"> <img src="assets\img\product_pics\module\nb-iot\nb_iot_04.jpg" width="30%" height="30%">

补充说明:

- GPIO2维持高电平2s开机 
- GPIO2维持高电平8s 关机
- 电源按钮长按2s开机
- 电源按钮长按8s关机
- GPIO26高电平模块复位


## 产品特性

- SIM卡类型: Nano
- 状态信号：两路LED指示灯
- 单路开关机按钮
- 板载天线可选：默认板载弹簧天线（或通过跳线切换至IPEX座）
- 串行通信：Uart2 16/17
- 工作温度范围：-40°C 至+ 85°C
- NB-IoT： 支持 LTE	Cat	NB2* 
- 频段:
    B3/B5/B8
- 数据传输:
    LTE Cat NB1速率(kbps):
        Single Tone 15.625(UL)/21.25(DL)
        Multi  Tone 62.5(UL)/21.25(DL)
    SMS： 支持 PDU/TEXT 模式
    SMS 支持 PDU/TEXT 模式
    网络协议 IPv4/IPv6/UDP/TCP/CoAP/LwM2M/HTTP/MQTT/TLS
- 电气特性：
    - 耗流:
        3uA@PSM
        0.4mA@ldle	mode(DRx=1.28S) 
        167mA@Tx(23dBm/15kHzST) 
        54mA@Rx
    - 输出功率: 23dBm±2dB
    - 灵敏度:
        -114dBm( 无重传 )	
        -130dBm( 开启重传 )
- 产品尺寸：54.2mm x 54.2mm x 12.8mm
- 产品重量：13.3g

## 包含

-  1x Nano IoT SIM卡
-  1x NB-IoT 模块





## 应用

-  智能表计
-  智能停车
-  市政管理

### 部分国家运营商频段

以下内容，仅供参考.

<table>
 <tr><td>North America</td><td>B4 (1700), B12 (700), B66 (1700), B71 (600), B26 (850) </td></tr>
 <tr><td>Asia Pacific</td><td>B1(2100), B3(1800), B5(850), B8(900), B18(850), B20(800), B26(850),B28(700)</td></tr>
 <tr><td>Europe:</td><td> B3 (1800), B8 (900) , B20 (800) </td></tr>
 <tr><td>Latin America</td><td>B2(1900), B3(1800), B5(850), B28(700) </td></tr>
 <tr><td>Commonwealth of Independent States</td><td>B3 (1800), B8 (900), B20 (800)</td></tr>
 <tr><td>Sub-Saharan Africa</td><td>B3(1800), B8(900) </td></tr>
 <tr><td>Middle East, North Africa</td><td>B8(900), B20(800)</td></tr>
</table>



<!-- North America: B4 (1700), B12 (700), B66 (1700), B71 (600), B26 (850) 
Asia Pacific: B1(2100), B3(1800), B5(850), B8(900), B18(850), B20(800), B26(850)
and B28(700); 
Europe: B3 (1800), B8 (900) and B20 (800); 
Latin America: B2(1900), B3(1800), B5(850) and B28(700) 
Commonwealth of Independent States: B3 (1800), B8 (900) and B20 (800); 
Sub-Saharan Africa: B3(1800) and B8(900); 
Middle East and North Africa: B8(900) and B20(800);  -->

## 相关链接

- **Datasheet** - [M5311](https://m5stack.oss-cn-shenzhen.aliyuncs.com/resource/docs/datasheet/module/M5311_cn.pdf)

-  **AT Command** - [M5311 AT指令表](https://m5stack.oss-cn-shenzhen.aliyuncs.com/resource/docs/datasheet/module/M5311_AT_Command_Interface_Specification_en.pdf)


## 原理图

-  **原理图** - [NB-IoT Module](https://github.com/m5stack/M5-Schematic/blob/master/Modules/module_nb_iot_sch.pdf)

## EasyLoader

<img src="https://m5stack.oss-cn-shenzhen.aliyuncs.com/image/EasyLoader_logo.png" width="100px" style="margin-top:20px">

<a href="https://m5stack.oss-cn-shenzhen.aliyuncs.com/EasyLoader/Module/EasyLoader_NBIOT_MODULE.exe"><button type="button" class="btn btn-primary">点击下载EasyLoader</button></a>

>1.EasyLoader是一个简洁快速的程序烧录器，每一个产品页面里的EasyLoader都提供了一个与产品相关的案例程序，通过简单步骤将其烧录至主控，能够进行一系列的功能验证.**(目前EasyLoader仅适用于Windows操作系统)**

>2.下载软件后，双击运行应用程序，将M5设备通过数据线连接至电脑,选择端口参数，点击 **"Burn"** 即可开始烧录

!>3.EasyLoader烧录前需要安装有CP210X（USB驱动程序），[点击此处查看驱动安装教程](zh_CN/related_documents/M5Burner#安装串口驱动)



## 例程

### Arduino IDE

*以下代码仅为片段，如需获取完整代码， [请点击此处.](https://github.com/m5stack/M5-ProductExampleCodes/tree/master/Module/NB_IOT/Arduino).*

```arduino
#include <M5Stack.h>

void IotWriteCommand(char cmd[],char date[]){
  char buf[256] = {0};

  if(cmd == NULL)
  sprintf(buf,"AT\r\n");
  else if(date == NULL)
  sprintf(buf,"AT+%s\r\n",cmd);
  else
  sprintf(buf,"AT+%s=%s\r\n",cmd,date);
  
  Serial2.write(buf);
}

void get_time(void){
  IotWriteCommand("CCLK?",NULL);
  while(Serial2.available()){
    uint8_t ch = Serial2.read();
    Serial.write(ch);
    M5.Lcd.write(ch);
  }
}

void setup() {
  M5.begin();

  Serial.begin(115200);
  Serial2.begin(115200, SERIAL_8N1, 16, 17);
  pinMode(5, OUTPUT);
  digitalWrite(5, 1);
}


void loop() {
 if(M5.BtnA.wasReleased()){
    M5.Lcd.fillScreen(TFT_BLACK); 
    M5.Lcd.setCursor(60,80,2);
    get_time();
  }
  M5.update();
}
```


### 管脚映射

<table>
 <tr><td>M5Stack</td><td>GPIO16</td><td>GPIO17</td><td>3.3V</td><td>GND</td></tr>
 <tr><td>Module NB-IoT</td><td>RX</td><td>TX</td><td>3.3V</td><td>GND</td></tr>
</table>
