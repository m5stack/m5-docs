# Unit FINGER {docsify-ignore-all}

<img src="assets/img/product_pics/unit/unit_finger_01.png" width="30%" height="30%"><img src="assets/img/product_pics/unit/unit_finger_02.png" width="30%" height="30%">



## 描述

**FINGER** 是一款指纹识别传感器. 内部集成 FPC1020A 电容式指纹识别模组,具备多指纹录入、图像处理、特征值提取、指纹比对、搜索等功能.

采用UART通信协议、紧凑的外观设计、与低功耗能带给项目可靠的安全级别的同时，提供最佳的用户便利性.如果你想要为你的项目添加生物指纹识别功能，并希望其具备稳定可靠的添加、验证、管理机制.**FINGER Unit** 是一个不错的解决方案.

**使用时，请将该 Unit 连接到 PORT C ，它将通过UART协议与M5Core进行通信**

UART 参数设置:
- 波特率(**默认: 19200bps**)
- 起始位(1 bit)
- 停止位(1 bit)
- 校验位(无)

## 产品特性

- 指纹容量:  150
- 采用电容式面阵式半导体指纹传感器
- 传感器每个像素拥有 256 灰度级的像素质量
- 最小存储条件下实现指纹数据的登记及比对：指纹模板为 193 字节
- 1:N 识别 及 1:1 验证功能
- 支持手指 360 旋转识别
- 可适当调节的安全等级 0-9，默认等级 5
- 输出格式:  用户名、图像、特征值
- 特征值大小: 193Byte
- 通讯接口:   UART
- 通讯波特率: 9600-115200（默认为19200）
- 工作温度:   -10° - 60°
- 相对湿度:   20% - 80%



## 包含

- 1x FINGER Unit
- 1x Grove 线

## 应用

- 指纹考勤机
- 指纹储物柜

## 相关链接

- 通信协议 **[FINGER 串口通信协议](https://github.com/m5stack/M5-Schematic/blob/master/Units/finger/biovo_fingerprint_Protocol_en.DOC)**

- 数据手册 **[FPC1020A](https://m5stack.oss-cn-shenzhen.aliyuncs.com/resource/docs/datasheet/hat/1020A_datasheet_cn.pdf)**

## EasyLoader

<img src="https://m5stack.oss-cn-shenzhen.aliyuncs.com/image/EasyLoader_logo.png" width="100px" style="margin-top:20px">

<a href="https://m5stack.oss-cn-shenzhen.aliyuncs.com/EasyLoader/Unit/EasyLoader_FINGER.exe"><button type="button" class="btn btn-primary">点击下载EasyLoader</button></a>

>1.EasyLoader是一个简洁快速的程序烧录器，每一个产品页面里的EasyLoader都提供了一个与产品相关的案例程序，通过简单步骤将其烧录至主控，能够进行一系列的功能验证.

>2.下载软件后，双击运行应用程序，将M5设备通过数据线连接至电脑,选择端口参数，点击 **"Burn"** 即可开始烧录.(**为M5StickC烧录时，请将波特率设置在750000或115200**)

?>3.目前EasyLoader仅适用于Windows操作系统、兼容M5体系采用ESP32作为控制核心的主机.在为M5Core烧录前需要安装CP210X驱动程序（使用M5StickC作为控制器的则无需安装）[点击此处查看驱动安装教程](zh_CN/related_documents/M5Burner#安装串口驱动)


## 案例程序

- **UIFlow**

*以下代码仅为片段，如需获取完整代码， [请点击此处](https://github.com/m5stack/M5-ProductExampleCodes/tree/master/Unit/FINGER/UIFlow).*

<img src="assets/img/product_pics/unit/fingerprint.png">

### Arduino IDE

*以下代码仅为片段，如需获取完整代码， [请点击此处](https://github.com/m5stack/M5-ProductExampleCodes/tree/master/Unit/FINGER/Arduino).*

```arduino
/*
    Connect to GRVOE C on M5Core
*/
#include <M5Stack.h>
#include "finger.h"

uint8_t userNum; //User number
uint8_t res1;

// result for "res1"
#define ACK_SUCCESS    0x00
#define ACK_FAIL       0x01
#define ACK_FULL       0x04
#define ACK_NOUSER     0x05
#define ACK_USER_EXIST 0x07
#define ACK_TIMEOUT    0x08

// initialization
M5.begin();
Serial2.begin(19200, SERIAL_8N1, 16, 17);
userNum = fpm_getUserNum();
M5.Lcd.print("userNum:");
M5.Lcd.println(userNum);

// add a new user
res1 = fpm_addUser(userNum,1); //get function result

// compare your finger
res1 = fpm_compareFinger();

// delete all user
res1 = fpm_deleteAllUser();
```

## 原理图

<img src="assets/img/product_pics/unit/finger_sch.JPG">

### 管脚映射

<table>
<tr><td>M5Core(GROVE C)</td><td>U2RXD</td><td>U2TXD</td><td>5V</td><td>GND</td></tr>
 <tr><td>FINGER Unit</td><td>TXD</td><td>RXD</td><td>5V</td><td>GND</td></tr>
</table>

## 相关视频

- **FINGER 的演示**

<video class="video_size" controls>
    <source src="https://m5stack.oss-cn-shenzhen.aliyuncs.com/video/Blog/Twitch201901/Fingerprint%20Unit.mp4" type="video/mp4">
</video>

<script>

   var purchase_link = 'https://m5stack.com/collections/m5-unit/products/finger-sensor-unit';


   anchor_search(purchase_link);
   scrollFunc();

</script>