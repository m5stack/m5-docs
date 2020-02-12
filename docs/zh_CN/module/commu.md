# Module COMMU {docsify-ignore-all}

<img src="assets/img/product_pics/module/module_commu_01.png" width="30%" height="30%"> <img src="assets/img/product_pics/module/module_commu_02.png" width="30%" height="30%">



## 描述

**COMMU** 是M5Stack堆叠模块系列中的一款，通信转换模块.其内部集成了2个**I2C**接口、1个**TTL**接口、1个**CAN**接口、1个**RS485**接口.能够满足开发时遇到的各种通信转换需求.

默认连接:TTL  -  UART0，RS485  -  UART2.ESP32允许引脚映射重分配，所以你可以将TTL或是RS485接口重新定义到其他引脚.

## 产品特性

-  2x I2C 接口
-  1x CAN 接口
-  1x RS485 接口
-  1x TTL 接口
-  CAN 控制器: MCP2515-1/SO
-  RS485 收发器: SP3485EN-L/TR
-  产品尺寸：54.2mm x 54.2mm x 12.8mm
-  产品重量：13.5g

## 包含

-  1x M5Stack COMMU 通信转换模块

## 管脚分配

| *CAN*        | *ESP32 Chip*      |
| :----------: |:------------: |
| CAN_CS       | GPIO12         |
| CAN_INT      | GPIO15         |
| CAN_SCK      | GPIO18         |
| CAN_MISO     | GPIO19         |
| CAN_MOSI     | GPIO23         |


| *I2C Interface*   | *ESP32 Chip*      |
| :--------------:  |:------------: |
| IIC_SDA           | GPIO21         |
| IIC_SCL           | GPIO22         |

## 相关链接

- **数据手册**

    - [SP3485](https://m5stack.oss-cn-shenzhen.aliyuncs.com/resource/docs/datasheet/module/SP3485_en.pdf)
    - [MCP2515](https://m5stack.oss-cn-shenzhen.aliyuncs.com/resource/docs/datasheet/module/MCP2515_en.pdf)

## EasyLoader

<img src="https://m5stack.oss-cn-shenzhen.aliyuncs.com/image/EasyLoader_logo.png" width="100px" style="margin-top:20px">

<a href="https://m5stack.oss-cn-shenzhen.aliyuncs.com/EasyLoader/Module/EasyLoader_COMMU_Test_A.exe"><button type="button" class="btn btn-primary">点击下载EasyLoader</button></a>

>1.EasyLoader是一个简洁快速的程序烧录器，每一个产品页面里的EasyLoader都提供了一个与产品相关的案例程序，通过简单步骤将其烧录至主控，能够进行一系列的功能验证.**(目前EasyLoader仅适用于Windows操作系统)**

>2.下载软件后，双击运行应用程序，将M5设备通过数据线连接至电脑,选择端口参数，点击 **"Burn"** 即可开始烧录

!>3.EasyLoader烧录前需要安装有CP210X（USB驱动程序），[点击此处查看驱动安装教程](zh_CN/related_documents/M5Burner#安装串口驱动)

## 案例程序

### Arduino IDE

#### CAN通信

以下是使用两个COMMU模块进行CAN通信的应用案例.程序部分为发送端与接收端,当发送端按下按键A进行信息发送,接收端将接收信息并显示在屏幕上.

**步骤 1**:   复制库文件 [MCP_CAN_lib file](https://github.com/m5stack/M5-ProductExampleCodes/tree/master/Module/COMMU/Arduino/DependentLibrary/MCP_CAN_lib) 到Arduino的库管理文件目录 `C:\Users\<user_name>\Documents\Arduino\libraries` 中.
**步骤 2**: 分别打开项目文件 `commu_can_transmitter.ino`, 和 `commu_can_receiver.ino`
**步骤 3**: 将两个项目程序分别编译上传到两个M5Core上，用做发送端与接收端.

*以下代码仅为片段，如需获取完整代码， [请点击此处.](https://github.com/m5stack/M5-ProductExampleCodes/tree/master/Module/COMMU/Arduino/CAN).*

```arduino
/*
    commu_can_transmitter.ino
*/
#include <M5Stack.h>
#include <mcp_can.h>
#include "m5_logo.h"

#define CAN0_INT 15 // Set INT to pin 2
MCP_CAN CAN0(12);   // Set CS to pin 10

// declaration
byte data[8] = {0x00, 0x01, 0x02, 0x03, 0x04, 0x05, 0x06, 0x07};

// initialization
M5.begin();
CAN0.begin(MCP_ANY, CAN_1000KBPS, MCP_8MHZ);
/* Change to normal mode to allow messages tobe transmitted */
CAN0.setMode(MCP_NORMAL);

// send data
CAN0.sendMsgBuf(0x100, 0, 8, data);
```

```arduino
/*
    commu_can_receiver.ino
*/
#include <M5Stack.h>
#include <mcp_can.h>
#include "m5_logo.h"

#define CAN0_INT 15 // Set INT to pin 2
MCP_CAN CAN0(12);   // Set CS to pin 10

// declaration
byte data[8] = {0x00, 0x01, 0x02, 0x03, 0x04, 0x05, 0x06, 0x07};

// initialization
M5.begin();
/* Initialize MCP2515 running at 16MHz with a baudrate of 500kb/s */
/* and the masks and filters disabled. */
CAN0.begin(MCP_ANY, CAN_1000KBPS, MCP_8MHZ);
/* Set operation mode to normal so theMCP2515 sends acks to received data. */
CAN0.setMode(MCP_NORMAL);
pinMode(CAN0_INT, INPUT);// Configuring pin for /INT input

// read data
CAN0.readMsgBuf(&rxId, &len, rxBuf);
```

<img src="assets/img/product_pics/module/module_example/COMMU/example_module_commu_01.png" width="50%" height="50%">

#### RS485通信

这是两个M5Core之间通过RS485相互收发数据的例程。

分别下载[例程](https://github.com/m5stack/M5-ProductExampleCodes/tree/master/Module/COMMU/Arduino/RS485)到两个M5Core之后，按下按键A，然后两个core之间会相互发送数据。

<img src="assets/img/product_pics/module/module_example/COMMU/example_module_commu_02.png" width="50%" height="50%">

# 原理图

<img src="assets/img/product_pics/module/commu_sch.png">

<script>

   var purchase_link = 'https://m5stack.com/collections/m5-module/products/commu-module';

   anchor_search(purchase_link);
   scrollFunc();

</script>