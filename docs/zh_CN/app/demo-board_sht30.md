# Demo Board (SHT30 VERSION)

<el-tag effect="plain">SKU:K024-B</el-tag>

<div class="product_pic"><img src="https://m5stack.oss-cn-shenzhen.aliyuncs.com/image/m5-docs_homepage/app/app_DemoBoard_01.webp"> <img src="assets/img/product_pics/app/Demo-Board/Demo-Board_02.webp"></div>

## 教程&快速上手

<a href="https://m5stack.oss-cn-shenzhen.aliyuncs.com/resource/docs/Demo-Board_cn_sht30.pdf"><el-tag effect="plain">上手教程&PDF</el-tag></a>

## 描述

**Demo Board** 是一款学习开发板.采用M5Core作为控制核心，完全兼容模块堆叠与硬件拓展体系.

配备多组环境检测相关的传感器，提供摇杆、旋转编码、矩阵按键、无线射频识别等多种输入方式.

包含三种电机驱动方式（直流、步进、舵机），RGB LED灯板、集成多组继电器控制与ADC、DAC转换电路，支持RS485、RS232总线通信，并为每一个模块提供独立电源开关.

结合自带物联网属性的M5Core用作控制核心，板载模块涵盖了"声、光、电、力"学等多个方面，Demo Board会是你学习硬件、编程的一大利器.

## 产品特性

-  兼容Module堆叠、Unit拓展体系
-  Proto板、M5-BUS总线拓展
-  各模块带有独立电源开关
-  环境传感器系列（温度、湿度、气压、光线、麦克风）
-  摇杆输入
-  8路继电器输出
-  4路DAC，4路ADC
-  4x4按键矩阵
-  8x8 矩阵 RGB LED
-  旋转编码器
-  单路舵机
-  直流电机（带反馈）
-  四相五线制步进电机
-  无线射频识别读卡器
-  RS-485，RS232通信功能
 
<img src="assets/img/product_pics/app/Demo-Board/Demo-Board_03.webp" width="250" height="250">

## 包含

- 1x M5Stack Demo Board
- 1x DC 12V 电源适配器（5.5*2.1mm ）
- 1x RS232 连接线
- 1x RFID Card
- 1x ID Card
- 16x 面包线

<img src="assets/img/product_pics/app/Demo-Board/Demo-Board_04.webp" width="250" height="250">

## 规格参数

<table>
   <tr style="font-weight:bold">
      <td>规格</td>
      <td>参数</td>
   </tr>
   <tr>
      <td>净重</td>
      <td>1120g</td>
   </tr>
   <tr>
      <td>毛重</td>
      <td>1120g</td>
   </tr>
   <tr>
      <td>产品尺寸</td>
      <td>330*210*95mm</td>
   </tr>
   <tr>
      <td>包装尺寸</td>
      <td>330*210*95mm</td>
   </tr>
 </table>

## EasyLoader

<img src="https://m5stack.oss-cn-shenzhen.aliyuncs.com/image/EasyLoader_logo.webp" width="100px" style="margin-top:20px">

<a href="https://m5stack.oss-cn-shenzhen.aliyuncs.com/EasyLoader/Application/Demo%20Board/EasyLoader_APP_Demo_Board.exe"><el-button type="primary">点击下载EasyLoader</el-button></a>

>1.EasyLoader是一个简洁快速的程序烧录器，每一个产品页面里的EasyLoader都提供了一个与产品相关的案例程序.

>2.下载软件后，双击运行应用程序，将M5设备通过数据线连接至电脑,选择端口参数，点击 **"Burn"** 即可开始烧录

?>3.EasyLoader烧录前需要安装有CP210X（USB驱动程序），[点击此处查看驱动安装教程](zh_CN/related_documents/M5Burner#安装串口驱动)


## 模块参数

| **模块名称** | **工作电压**  |**相关参数** |
| :------: | :------: | :------: |
| ADC | 5V | 4通道ADC接口/内置ADS1115 |
| DAC | 5V | 4通道DAC接口/内置DAC6574 |
| Joystick | 3.3V | X/Y轴电位器输入,Z轴按键输入  |
| SHT30  | 3.3V | I2C地址0x44 |
| BMP280 | 3.3V | I2C地址0x76  |
| Light | 3.3V  | 支持模拟量/数字量采集/可调节阀值  |
| Microphone| 3.3V  | 支持模拟量/数字量采集/可调节阀值 |
| Relay	| 5V  | 8路控制/3A-220V-AC/3A-30V-DC  |
| RGB LED| 5V  | 8x8矩阵灯  |
| Servo  | 5V  |  10KG扭力 |
| DC-Motor | 5V  |  带反馈，集成LV8548MC|
| Stepmotor | 5V | 四相五线制 集成LV8548MC|
| RFID | 3.3V | 读写距离: < 8 cm/内置MFRC522 |
| RS485	| 5V  | 内置SP485EEN-L/TR |
| RS232| 5V  | 内置MAX232ESE |
| Encode |  | 旋转编码器/带按键输入|
| Proto |  | 板孔数量x170|
| Keyboard|   | 4x4按键矩阵  |

## 参考文档

**数据手册**

- [ADS1115](https://m5stack.oss-cn-shenzhen.aliyuncs.com/resource/docs/datasheet/application/ads1115_en.pdf)

- [DAC6574](https://m5stack.oss-cn-shenzhen.aliyuncs.com/resource/docs/datasheet/application/dac6574_en.pdf)

- [LV8548MC](https://m5stack.oss-cn-shenzhen.aliyuncs.com/resource/docs/datasheet/application/LV8548MC_en.pdf)

- [TPS54360](https://m5stack.oss-cn-shenzhen.aliyuncs.com/resource/docs/datasheet/application/tps54360_en.pdf)

- [MRC522](https://m5stack.oss-cn-shenzhen.aliyuncs.com/resource/docs/datasheet/module/MFRC522_en.pdf)

- [MAX232ESE](https://m5stack.oss-cn-shenzhen.aliyuncs.com/resource/docs/datasheet/application/MAX232ESE_en.pdf)

- [MAX4466](https://m5stack.oss-cn-shenzhen.aliyuncs.com/resource/docs/datasheet/application/MAX4466_datasheet_en.pdf)

- [SP485EEN](https://m5stack.oss-cn-shenzhen.aliyuncs.com/resource/docs/datasheet/hat/SP485EEN_en.pdf)

- [BMP280](https://m5stack.oss-cn-shenzhen.aliyuncs.com/resource/docs/datasheet/hat/BMP280-DS001-11_en.pdf)

- [SHT30](https://m5stack.oss-cn-shenzhen.aliyuncs.com/resource/docs/datasheet/unit/SHT3x_Datasheet_digital.pdf)

## 原理图

- [M5IoT-kit](https://github.com/m5stack/M5-Schematic/tree/master/Applications/M5IoT-kit)

### 案例程序

#### 1. Arduino

- 点击此处下载[示例程序](https://github.com/m5stack/DEMO-BOARD)

- [上手教程&PDF](https://m5stack.oss-cn-shenzhen.aliyuncs.com/resource/docs/Demo-Board_cn_sht30.pdf)

<script>

   var purchase_link = 'https://m5stack.com/collections/m5-application/products/iot-learning-kit';

   var quickstart_link = 'https://m5stack.oss-cn-shenzhen.aliyuncs.com/resource/docs/Demo-Board_cn.pdf';
   
   anchor_search(purchase_link,quickstart_link);
   scrollFunc();

</script>