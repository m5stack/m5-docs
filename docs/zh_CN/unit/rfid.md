# RFID {docsify-ignore-all}

<el-tag effect="plain">SKU:U031</el-tag>

<div class="product_pic"><img src="assets/img/product_pics/unit/unit_rfid_01.webp"><img src="assets/img/product_pics/unit/unit_rfid_02.webp"></div>

## 描述

**RFID** 是一款射频识别 Unit.内置**MFRC522**芯片，工作频率为13.56MHz.支持读卡、写卡、识别、记录、对RF卡进行编码和授权等多个功能.利用磁场感应技术，实现进行非接触式双向信息交互，读取感应卡的信息并验证.能够运用在门禁系统、打卡系统、仓库货物进存和小区车辆出入登记等需要进行信息验证的应用场景.

该 Unit 通过PORT A I2C（0x28）与M5Core连接.

## 产品特性

- 工作频率: 13.56 MHz
- I2C 数据速率: 快速模式: 最高400 Kbit/s; 高速模式: 最高3400 Kbit/s
- RC522 收发器缓冲器: 64 bytes
- 支持的协议: ISO14443A, MIFARE and NTAG
- 工作温度: -20℃-85℃
- 数据保存: > 10 年
- 读写距离: < 20 mm
- 开发平台: Arduino, UIFlow(Blockly, Python)
- 2x LEGO 兼容孔

## 包含

- 1x RFID Unit
- 1x HY2.0-4P线缆

## 规格参数

<table>
   <tr style="font-weight:bold">
      <td>规格</td>
      <td>参数</td>
   </tr>
   <tr>
      <td>净重</td>
      <td>6g</td>
   </tr>
   <tr>
      <td>毛重</td>
      <td>21g</td>
   </tr>
   <tr>
      <td>产品尺寸</td>
      <td>48*24*8mm</td>
   </tr>
   <tr>
      <td>包装尺寸</td>
      <td>67*53*12mm</td>
   </tr>
 </table>

## 应用

-  智能家居门禁系统
-  车辆管理
-  智能交通
-  智能书架

## 相关链接

- Datasheet **[MFRC522](https://m5stack.oss-cn-shenzhen.aliyuncs.com/resource/docs/datasheet/module/MFRC522_en.pdf)**

## EasyLoader

<img src="https://m5stack.oss-cn-shenzhen.aliyuncs.com/image/EasyLoader_logo.webp" width="100px" style="margin-top:20px">

<a href="https://m5stack.oss-cn-shenzhen.aliyuncs.com/EasyLoader/Unit/EasyLoader_RFID.exe"><el-button type="primary">点击下载EasyLoader</el-button></a>

>1.EasyLoader是一个简洁快速的程序烧录器，每一个产品页面里的EasyLoader都提供了一个与产品相关的案例程序，通过简单步骤将其烧录至主控，能够进行一系列的功能验证.

>2.下载软件后，双击运行应用程序，将M5设备通过数据线连接至电脑,选择端口参数，点击 **"Burn"** 即可开始烧录.(**为M5StickC烧录时，请将波特率设置在750000或115200**)

?>3.目前EasyLoader仅适用于Windows操作系统、兼容M5体系采用ESP32作为控制核心的主机.在为M5Core烧录前需要安装CP210X驱动程序（使用M5StickC作为控制器的则无需安装）[点击此处查看驱动安装教程](zh_CN/related_documents/M5Burner#安装串口驱动)

## 案例程序

### 1. Arduino

[请点击此处下载Arduino示例](https://github.com/m5stack/M5Stack/tree/master/examples/Unit/RFID_RC522)

烧录例程 RFID.ino 后，当设备运行. 使用IC卡或手机NFC放置在 RFID Unit 上.M5Core屏幕上将打印出其ID信息.

<img src="assets/img/product_pics/unit/unit_example/RFID/example_unit_rfid_01.webp" width="50%">

### 2. UIFlow

[请点击此处下载UIFlow](https://github.com/m5stack/M5-ProductExampleCodes/tree/master/Unit/RFID/UIFlow)

使用[UIFlow](http://flow.m5stack.com)下载该案例程序到M5Core中后将感应卡放置在 RFID Unit 上.M5Core屏幕将显示打印其对应的ID信息.

<img src="assets/img/product_pics/unit/unit_example/RFID/example_unit_rfid_02.webp">

## 原理图

<img src="assets/img/product_pics/unit/rfid_sch.JPG">

### 管脚映射

<table>
<tr><td>M5Core ( PORT A )</td><td>GPIO22</td><td>GPIO21</td><td>5V</td><td>GND</td></tr>
 <tr><td>RFID Unit</td><td>SCL</td><td>SDA</td><td>5V</td><td>GND</td></tr>
</table>


<script>

   var purchase_link = 'https://m5stack.com/collections/m5-unit/products/rfid-sensor-unit';

   anchor_search(purchase_link);
   scrollFunc();

</script>