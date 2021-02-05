# DAC - 数模转换

<el-tag effect="plain">SKU:U012</el-tag>

<div class="product_pic"><img src="assets/img/product_pics/unit/dac/unit_dac_01.webp"></div>

## 描述

**DAC**, 是一款高性能的数字/模拟信号转换器，其内置了**MCP4725**.具备低功耗，高精度，单通道，12位缓冲电压输出数模转换器（DAC），非易失性存储器（EEPROM）.

用户可以使用I2C接口命令将DAC输入和配置烧写到非易失性存储器（EEPROM）中，使得DAC在断电期间仍能保持代码，上电后即可直接使用,I2C地址为0x60.

## 产品特性

- HY2.0-4P 接口, 支持 [UIFlow](http://flow.m5stack.com) 、 [Arduino](http://www.arduino.cc).
- 2x LEGO 兼容孔

## 包含

- 1x DAC Unit
- 1x HY2.0-4P线缆

## 应用

-  MP3音频播放器
-  迷你示波器

## 规格参数

<table>
   <tr style="font-weight:bold">
      <td>规格</td>
      <td>参数</td>
   </tr>
   <tr>
      <td>分辨率</td>
      <td>12位</td>
   </tr>
   <tr>
      <td>电压范围</td>
      <td>0-3.3V</td>
   </tr>
   <tr>
      <td>通信协议</td>
      <td>I2C：0x60</td>
   </tr>
   <tr>
      <td>净重</td>
      <td>4g</td>
   </tr>
   <tr>
      <td>毛重</td>
      <td>19g</td>
   </tr>
   <tr>
      <td>产品尺寸</td>
      <td>32.2*24.2*10.3mm</td>
   </tr>
   <tr>
      <td>包装尺寸</td>
      <td>67*53*12mm</td>
   </tr>
</table>


## EasyLoader

<img src="https://m5stack.oss-cn-shenzhen.aliyuncs.com/image/EasyLoader_logo.webp" width="100px" style="margin-top:20px">

<a href="https://m5stack.oss-cn-shenzhen.aliyuncs.com/EasyLoader/Unit/EasyLoader_DAC.exe"><el-button type="primary">点击下载EasyLoader</el-button></a>

>1.EasyLoader是一个简洁快速的程序烧录器，每一个产品页面里的EasyLoader都提供了一个与产品相关的案例程序，通过简单步骤将其烧录至主控，能够进行一系列的功能验证.

>2.下载软件后，双击运行应用程序，将M5设备通过数据线连接至电脑,选择端口参数，点击 **"Burn"** 即可开始烧录.(**为M5StickC烧录时，请将波特率设置在750000或115200**)

?>3.目前EasyLoader仅适用于Windows操作系统、兼容M5体系采用ESP32作为控制核心的主机.在为M5Core烧录前需要安装CP210X驱动程序（使用M5StickC作为控制器的则无需安装）[点击此处查看驱动安装教程](zh_CN/related_documents/M5Burner#安装串口驱动)

### 管脚映射

<table>
 <tr><td>M5Core(PORT A)</td><td>GPIO22</td><td>GPIO21</td><td>5V</td><td>GND</td></tr>
 <tr><td>DAC Unit</td><td>SCL</td><td>SDA</td><td>5V</td><td>GND</td></tr>
</table>

## 原理图

<img src="assets/img/product_pics/unit/dac_sch.JPG">

## 相关链接

-  **Datasheet** - [MCP4725](https://m5stack.oss-cn-shenzhen.aliyuncs.com/resource/docs/datasheet/unit/MCP4725_en.pdf)

## 案例程序

### 1. Arduino

- [请点击此处获取Arduino示例程序](https://github.com/m5stack/M5Stack/tree/master/examples/Unit/DAC_MCP4725)

### 2. UIFlow

[点击这里获取UIFlow示例](https://github.com/m5stack/M5-ProductExampleCodes/tree/master/Unit/DAC/UIFlow)

<img src="assets/img/product_pics/unit/dac.webp">

<script>

   var purchase_link = 'https://m5stack.com/collections/m5-unit/products/dac-unit';

   anchor_search(purchase_link);
   scrollFunc();

</script>