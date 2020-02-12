# Module GSM {docsify-ignore-all}

<img src="assets\img\product_pics\module\gsm\gsm_01.jpg" width="30%" height="30%"> <img src="assets\img\product_pics\module\gsm\gsm_02.jpg" width="30%" height="30%">


## 描述

**GSM** 是M5Stack堆叠模块系列中的一款，GSM通信模块.内部集成**M6315** GSM/GPRS 工业级通信模组. 支持 GPRS class12 和 GPRS CS-1,CS-2,CS-3,CS-4 编码，兼备性价比与出色的抗干扰性，可向电力、石油、水务、燃气、 交通、金融等行业客户提供稳定的 M2M 通信功能.

<img src="assets\img\product_pics\module\gsm\gsm_03.jpg" width="30%" height="30%"> <img src="assets\img\product_pics\module\gsm\gsm_04.jpg" width="30%" height="30%">

!>**M5Stack Fire** 中的 GPIO 16 / 17 默认与PSRAM连接，这使得GSM模块的TXD / RXD（GPIO16，GPIO17）与其产生冲突.因此，当你使用 M5Stack Fire 去驱动 GSM 模块时，你需要将 GSM 模块的 TXD 与 RXD 切断，然后通过飞线引至另一组 UART 引脚.

## 产品特性

- SIM卡类型: Nano
- 状态信号：两路LED指示灯
- 板载麦克风
- 串行通信：Uart2 16/17
- 板载双路扬声器信号输出：
    SPK1扬声器信号输出接口
    SPK2扬声器信号输出到主机
- 工作温度范围：-40°C 至+ 85°C
- 频段（MHz）:
    850/900/1800/1900 
- 数据传输:
    速率 (kbps) 85.6(UL)/85.6(DL) 
    GPRS 多时隙 Class12
    SMS 支持 PDU/TEXT 模式
    网络协议 IPV4/IPV6*/TCP/UDP/PPP/HTTP/FTP/MQTT 
- 耗流:
    <2mA@DRX=5 
- 产品尺寸：54.2mm x 54.2mm x 12.8mm
- 产品重量：12.8g

- 补充说明：
    GPIO2维持高电平2s开机 
    GPIO2维持高电平8s 关机
    电源按钮长按2s开机 
    电源按钮长按8s关机
    GPIO26高电平模块复位

<!-- <a href="https://m5stack.oss-cn-shenzhen.aliyuncs.com/EasyLoader/Module/EasyLoader_SIM800L_at.exe"><button type="button" class="btn btn-primary">点击查看全球运营商频段列表</button></a> -->

## 包含

-  1x GSM 模块

## 应用

-  无线通信系统
-  M2M通信

## 相关链接

-  **Datasheet** - [MC6315](https://m5stack.oss-cn-shenzhen.aliyuncs.com/resource/docs/datasheet/module/M6315_cn.pdf)

-  **Datasheet** - [MC6315 AT指令表](https://m5stack.oss-cn-shenzhen.aliyuncs.com/resource/docs/datasheet/module/M6315%20AT_Command_Interface_Specification_cn.pdf)
  
## 原理图

- [GSM Module](https://github.com/m5stack/M5-Schematic/blob/master/Modules/module_gsm_sch.pdf)

## EasyLoader

<img src="https://m5stack.oss-cn-shenzhen.aliyuncs.com/image/EasyLoader_logo.png" width="100px" style="margin-top:20px">

<a href="https://m5stack.oss-cn-shenzhen.aliyuncs.com/EasyLoader/Module/EasyLoader_GSM_MODULE.exe"><button type="button" class="btn btn-primary">点击下载EasyLoader</button></a>

>1.EasyLoader是一个简洁快速的程序烧录器，每一个产品页面里的EasyLoader都提供了一个与产品相关的案例程序，通过简单步骤将其烧录至主控，能够进行一系列的功能验证.**(目前EasyLoader仅适用于Windows操作系统)**

>2.下载软件后，双击运行应用程序，将M5设备通过数据线连接至电脑,选择端口参数，点击 **"Burn"** 即可开始烧录

!>3.EasyLoader烧录前需要安装有CP210X（USB驱动程序），[点击此处查看驱动安装教程](zh_CN/related_documents/M5Burner#安装串口驱动)

## 案例程序

### Arduino IDE

*以下代码仅为片段，如需获取完整代码， [请点击此处.](https://github.com/m5stack/M5-ProductExampleCodes/tree/master/Module/GSM/Arduino).*

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
//AT+CSQ=?
void get_time(void){
  IotWriteCommand("CSQ=?",NULL);
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
  pinMode(2, OUTPUT);
  digitalWrite(2, 0);
  delay(3000);
  digitalWrite(2, 1);
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
 <tr><td>M5Stack</td><td>GPIO16</td><td>GPIO17</td><td>5V</td><td>GND</td></tr>
 <tr><td>Module GSM</td><td>RX</td><td>TX</td><td>5V</td><td>GND</td></tr>
</table>


<script>

   var 购买链接 = 'https://m5stack.com/collections/m5-module/products/m5stack-gsm-module';


   anchor_search(购买链接);
   scrollFunc();

</script>