# Module LoRaWAN {docsify-ignore-all}

<img src="assets/img/product_pics/module/module_lorawan_01.png" width="30%" height="30%"> <img src="assets/img/product_pics/module/module_lorawan_02.png" width="30%" height="30%">

***

:memo:**[描述](#描述)**&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;:octocat:**[例程](#例程)**&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;:electric_plug:**[原理图](#原理图)**&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;🛒**[购买链接](https://item.taobao.com/item.htm?spm=a1z10.5-c.w4002-1172588093.61.6c2275f4nUJEfh&id=580998112819)**&nbsp;&nbsp;&nbsp;<img src="https://m5stack.oss-cn-shenzhen.aliyuncs.com/image/EasyLoader_logo-min.jpg">**[EasyLoader](#EasyLoader)**

## 描述

**LoRaWAN** 是M5Stack堆叠模块系列中的一款，节点通信模块.该模块集成了由Ai-Thinker设计的RHF76-052模组，它是LoRaWAN™UART调制解调器&兼容设备，支持LoRaWAN通信.你可以使用M5Core作为主机MCU，然后通过简单的AT指令或UART去控制这个调制解调器.

LoRaWAN基于LoRa远距离通信网络设计的一套通讯协议和系统架构.如果按协议分层来说LoRaWAN是媒体访问控制（MAC）层,LoRa是物理层.它是由LoRa联盟维护的路由协议，主要用作管理LPWAN网关和端节点设备之间的通信的网络协议.

利用 LoRa / LoRaWAN 远距离低功耗传输的特点，并将其应用到实际项目中去提高设备工作效率.


LoRaWAN默认的串口配置： 波特率为9600，8位数据位,无校验位,1位停止位.

*注意: 位于模块丝印"LoRaWAN"的下方，提供了5个穿孔用作LoRaWAN模块固件升级.*

## 产品特性

-  内置PCB天线
-  外部天线接口
-  产品尺寸：54.2mm x 54.2mm x 12.8mm
-  产品重量：17.5g

### LoRaWAN 模块规范

- 模组: RHF76-052
- 支持双频段 433/470MHz和868/915MHz
- Radio IC: Semtech SX1276
- 微处理器: STM32L052C8T6
- 封装: SMD-33
- 尺寸: 28 x 23 x 3 mm
- 重量: 3.2g
- 接口: UART
- 协议：AT命令
- 嵌入式LoRaWAN协议栈
- 频率：868/915 MHz
- TXOP: 20dBm @ 868MHz/915MHz
- 链路估算: 160dB
- 天线: 外部 (通过PCB焊盘)
- 电源电压范围：1.8~3.6V
- 基准电源电压: 3.3V
- 睡眠模式工作电流: 1.45uA
- 协议：LoRaWAN
- 工作温度：-40~ + 85℃
- 储存温度：-40~ + 90℃，<90％RH
- 认证: FCC, CE, IC, TELEC

## 包含

-  1x LoRaWAN Module

## 应用

-  自动远程抄表
-  智能交通智能停车场
-  远程灌溉及环境监测

## 管脚映射

| *RHF76-052_UART* | *ESP32 Chip* |
| :----------: |:------------: |
| RXD       | U2TXD(GPIO17)    |
| TXD      | U2RXD(GPIO16)     |

**M5Stack Fire** 中的 GPIO 16 / 17 默认与PSRAM连接，这使得 LoRaWAN 模块的TXD / RXD（GPIO16，GPIO17）与其产生冲突.因此，当你使用 M5Stack Fire 去驱动 LoRaWAN 模块时，你需要将 LoRaWAN 模块的 TXD 与 RXD 切断，然后通过飞线引至另一组 UART 引脚.

## 相关链接

- **[LoRaWAN 数据手册](https://m5stack.oss-cn-shenzhen.aliyuncs.com/resource/docs/datasheet/module/LoRa_rhf76-052datasheet_v0.2_cn.pdf) (LoRaWAN)**

- **[LoRaWAN 使用手册](https://m5stack.oss-cn-shenzhen.aliyuncs.com/resource/docs/datasheet/module/lorawan_modem_-_cn.pdf)**

- **[LoRaWAN 的 AT 指令集](https://m5stack.oss-cn-shenzhen.aliyuncs.com/resource/docs/datasheet/module/lorawan_class_ac_at_command_specification_-_v4.4.pdf)**

- **[LoRaWAN 区域参数](https://m5stack.oss-cn-shenzhen.aliyuncs.com/resource/docs/datasheet/module/lorawantm_regional_parameters_v1.1rb_-_final.pdf)**


## EasyLoader

<img src="https://m5stack.oss-cn-shenzhen.aliyuncs.com/image/EasyLoader_logo.png" width="100px" style="margin-top:20px">

<a href="https://m5stack.oss-cn-shenzhen.aliyuncs.com/EasyLoader/Module/EasyLoader_lorawan_receiver.exe"><button type="button" class="btn btn-primary">点击下载EasyLoader</button></a>

>1.EasyLoader是一个简洁快速的程序烧录器，每一个产品页面里的EasyLoader都提供了一个与产品相关的案例程序，通过简单步骤将其烧录至主控，能够进行一系列的功能验证.**(目前EasyLoader仅适用于Windows操作系统)**

>2.下载软件后，双击运行应用程序，将M5设备通过数据线连接至电脑,选择端口参数，点击 **"Burn"** 即可开始烧录

!>3.EasyLoader烧录前需要安装有CP210X（USB驱动程序），[点击此处查看驱动安装教程](zh_CN/related_documents/M5Burner#安装串口驱动)

## 例程

### Arduino IDE

本案例将使用两个LoRaWAN模块，实现P2P(点对点)通讯，详情请参考 [LoRaWAN使用手册](http://wiki.ai-thinker.com/_media/lora/docs/rhf76-052_ho_to_use_ai-thinker_s_lorawan_modem.pdf)的3.6.

**功能:**
按下按键B设置LoRaWAN工作频率为433MHz，并发送字符串"Hello World".
按下按键C设置LoRaWAN工作频率为868MHz，并发送字符串"Hello World".
按下按键A清除屏幕信息.

**注意:** 在编译该程序前，请将 `LoRaWan_for_M5Stack.rar` 解压缩到该路径`C:\Users\<user_name>\Documents\Arduino\libraries`.

*以下代码仅为片段，如需获取完整代码， [请点击此处](https://github.com/m5stack/M5-ProductExampleCodes/tree/master/Module/LORAWAN/Arduino).*

```arduino
/*
    device_A.ino
*/
#include <M5Stack.h>
#include <LoRaWan.h>

#define SerialUSB Serial

// declaration
M5.begin();
SerialUSB.begin(9600);
lora.init();
delay(2000); // must delay for lorawan power on

// 433MHz frequency initialization
lora.initP2PMode(433, SF12, BW500, 8, 8, 20);

// 868MHz frequency initialization
lora.initP2PMode(868, SF12, BW500, 8, 8, 20);

// send string
lora.transferPacketP2PMode("hello world");

// receive data
short length = 0;
short rssi = 0;
memset(buffer, 0, 128);
length = lora.receivePacketP2PMode(buffer, 128, &rssi, 1);
```

```arduino
/*
    device_B.ino
*/
#include <M5Stack.h>
#include <LoRaWan.h>

#define SerialUSB Serial

// declaration
M5.begin();
SerialUSB.begin(9600);
lora.init();
delay(2000); // must delay for lorawan power on

// 433MHz frequency initialization
lora.initP2PMode(433, SF12, BW500, 8, 8, 20);

// 868MHz frequency initialization
lora.initP2PMode(868, SF12, BW500, 8, 8, 20);

// send string
lora.transferPacketP2PMode("hello world");

// receive data
short length = 0;
short rssi = 0;
memset(buffer, 0, 128);
length = lora.receivePacketP2PMode(buffer, 128, &rssi, 1);
```

<img src="assets/img/product_pics/module/module_example/LORAWAN/example_module_lorawan_01.png">

## 原理图

<img src="assets/img/product_pics/module/lorawan_sch.png">


<script>

   var purchase_link = 'https://m5stack.com/collections/m5-core/products/basic-core-iot-development-kit';


   anchor_search(purchase_link);
   scrollFunc();

</script>