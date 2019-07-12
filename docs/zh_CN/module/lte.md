# Module LTE {docsify-ignore-all}

<img src="assets\img\product_pics\module\lte\lte_01.jpg" width="30%" height="30%"> <img src="assets\img\product_pics\module\lte\lte_02.jpg" width="30%" height="30%">

***

:memo:**[描述](#描述)**&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;:electric_plug:**[原理图](#原理图)**&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;🛒**[购买链接](https://m5stack.com/collections/m5-module/products/m5stack-lte-module)**&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;:clapper:**[相关视频](#相关视频)**&nbsp;&nbsp;&nbsp;<img src="https://m5stack.oss-cn-shenzhen.aliyuncs.com/image/EasyLoader_logo-min.jpg">**[EasyLoader](#EasyLoader)**

## 描述

**LTE** 是M5Stack堆叠模块系列中的一款，LTE通信模块.内部集成**M8321** LTE工业级通信模组. 提供 TD-LTE/FDD-LTE/WCDMA/TDSCDMA/GSM/GPRS/EDGE 的频段.丰富的 Internet 协议、行业标准接口和功能,支持多种操作系统的USB驱动程序，能够给用户带来快速且稳定的通信体验.



 <img src="assets\img\product_pics\module\lte\lte_03.jpg" width="30%" height="30%">

## 产品特性

- SIM卡类型: Nano
- 状态信号：三路LED指示灯
- 板载麦克风
- 板载扬声器信号输出接口
- 板载USB测试点
- 单路开关机按钮
- 工作温度范围：-40°C 至+ 85°C
- 频段:
    LTE-TDD：B38/B39/B40/B41 
    LTE-FDD：B1/B3/B8△ 
    TD-SCDMA：B34/B39△ 
    WCDMA：B1/B8△ 
    GSM(MHz)：900/1800
- 数据传输:
    LTE 速率 (Mbps) LTE-FDD 50(UL)/150(DL)△　LTE-TDD 50(UL)/100(DL)
    HSPA+ 速率 (Mbps) 5.76(UL)/21.6(DL)△
    TD-SCDMA 速率 (Mbps) 2.2(UL)/2.8(DL)△
    EDGE 速率 (Kbps) 384(UL)/384(DL)
    GPRS 速率 (Kbps) 85.6(UL)/85.6(DL)
    SMS 支持 PDU/TEXT 模式
    网络协议 IPV4/IPV6/TCP/PPP/UDP/FTP/HTTP/NTP
- 耗流:
    17uA@Poweroff 
    3mA@Sleep 
    45mA@Idle


<!-- <a href="https://m5stack.oss-cn-shenzhen.aliyuncs.com/EasyLoader/Module/EasyLoader_SIM800L_at.exe"><button type="button" class="btn btn-primary">点击查看全球运营商频段列表</button></a> -->


## 包含

-  1x 天线
-  1x LTE 模块


## 应用

-  安防路由
-  车载后装
-  视频监控
-  POC



## 相关链接

-  **Datasheet** - [M8321](http://iot.10086.cn/Uploads/file/product/20190216/M8321_%E4%BA%A7%E5%93%81%E6%89%8B%E5%86%8C_20190216184322_87691.pdf)

-  **Datasheet** - [TXS0104E](http://iot.10086.cn/Uploads/file/product/20190216/M5311_AT_Command_Interface_Specification_v2_20190216181452_37713.pdf)
  
## 原理图

-  **原理图** - [GSM Module](https://github.com/m5stack/M5-Schematic/blob/master/Modules/module_lte_sch.pdf)


## EasyLoader

<img src="https://m5stack.oss-cn-shenzhen.aliyuncs.com/image/EasyLoader_logo.png" width="100px" style="margin-top:20px">

<a href="https://m5stack.oss-cn-shenzhen.aliyuncs.com/EasyLoader/Module/EasyLoader_LTE_MODULE.exe"><button type="button" class="btn btn-primary">点击下载EasyLoader</button></a>

>1.EasyLoader是一个简洁快速的程序烧录器，每一个产品页面里的EasyLoader都提供了一个与产品相关的案例程序.

>2.下载软件后，双击运行应用程序，将M5设备通过数据线连接至电脑,选择端口参数，点击 **"Burn"** 即可开始烧录

!>3.EasyLoader烧录前需要安装有CP210X（USB驱动程序），[点击此处查看驱动安装教程](zh_CN/related_documents/M5Burner#安装串口驱动)



## 例程

### Arduino IDE

*以下代码仅为片段，如需获取完整代码， [请点击此处.](https://github.com/m5stack/M5-ProductExampleCodes/tree/master/Module/LTE/Arduino).*

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
  IotWriteCommand(NULL,NULL);
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
 <tr><td>M5StickC</td><td>GPIO16</td><td>GPIO17</td><td>5V</td><td>GND</td></tr>
 <tr><td>HAT ADC</td><td>RX</td><td>TX</td><td>5V</td><td>GND</td></tr>
</table>
