# ADC

<el-tag effect="plain">SKU:U013</el-tag>

<div class="product_pic"><img src="assets/img/product_pics/unit/adc/unit_adc_01.webp"></div>

## 描述

**ADC** 是一款A/D转换器，其内置了16位自校准模数转换器ADS1100.通过I2C通信协议，ADS1100可每秒采样8、16、32、或128次进行转换，
片内可编程的增益放大器（PGA）提供高达8倍的增益，对于需要高分辨率A/D转换采集的应用场景,ADC Unit是完美解决方案,其 I2C 地址是 0x48.

 
## 产品特性

- 完整的数据采集系统
- 封装：TINY SOT23-6
- 16位无漏失码
- 连续自校准
- 单循环转换
- 内部系统时钟
- I2C 接口
- 提供 8 个不同的地址
- 2x LEGO 兼容孔

## 包含

- 1x ADC unit
- 1x GROVE 线
- 1x HT3.96 Male Socket(2 pins)

## 应用

- 心电信号采集
- 血压测量
- 测力计


## 规格参数

<table>
    <tr style="font-weight:bold">
        <td>规格</td>
        <td>参数</td>
    </tr>
    <tr>
        <td>INL</td>
        <td>满标度是量程的0.0125%(最大值)</td>
    </tr>
    <tr>
        <td>增益倍数</td>
        <td>1，2， 4， 8</td>
    </tr>
    <tr>
        <td>编程速率</td>
        <td>8SPS至128SPS</td>
    </tr>
    <tr>
        <td>工作电压范围</td>
        <td>2.7 V至5.5 V</td>
    </tr>
    <tr>
        <td>电流</td>
        <td>90µA</td>
    </tr>
    <tr>
        <td>噪声</td>
        <td>4μVp-p</td>
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
      <td>32*24*10mm</td>
   </tr>
   <tr>
      <td>包装尺寸</td>
      <td>67*53*12mm</td>
   </tr>
</table>


## 相关链接

-  **Datasheet** - [ADS1100](https://m5stack.oss-cn-shenzhen.aliyuncs.com/resource/docs/datasheet/unit/ADS1100_en.pdf)

## EasyLoader

<img src="https://m5stack.oss-cn-shenzhen.aliyuncs.com/image/EasyLoader_logo.webp" width="100px" style="margin-top:20px">

<a href="https://m5stack.oss-cn-shenzhen.aliyuncs.com/EasyLoader/Unit/EasyLoader_ADC.exe"><el-button type="primary">点击下载EasyLoader</el-button></a>

>1.EasyLoader是一个简洁快速的程序烧录器，每一个产品页面里的EasyLoader都提供了一个与产品相关的案例程序，通过简单步骤将其烧录至主控，能够进行一系列的功能验证.

>2.下载软件后，双击运行应用程序，将M5设备通过数据线连接至电脑,选择端口参数，点击 **"Burn"** 即可开始烧录.(**为M5StickC烧录时，请将波特率设置在750000或115200**)

?>3.目前EasyLoader仅适用于Windows操作系统、兼容M5体系采用ESP32作为控制核心的主机.在为M5Core烧录前需要安装CP210X驱动程序（使用M5StickC作为控制器的则无需安装）[点击此处查看驱动安装教程](zh_CN/related_documents/M5Burner#安装串口驱动)

### 管脚映射

<table>
 <tr><td>M5Core ( GROVE A )</td><td>GPIO22</td><td>GPIO21</td><td>5V</td><td>GND</td></tr>
 <tr><td>ADC Unit</td><td>SCL</td><td>SDA</td><td>5V</td><td>GND</td></tr>
</table>

## 原理图

<img src="assets/img/product_pics/unit/adc_sch.JPG">

## 案例程序

### 1. Arduino IDE

[请点击此处获取Arduino代码](https://github.com/m5stack/M5Stack/tree/master/examples/Unit/ADC_ADS1100)

### 2. UIFlow

[请点击此处获取UIFlow](https://github.com/m5stack/M5-ProductExampleCodes/tree/master/Unit/ADC/UIFlow)

<img src="assets/img/product_pics/unit/unit_example/ADC/example_unit_adc_01.webp">


<script>

   var purchase_link = 'https://m5stack.com/collections/m5-unit/products/adc-unit';

   anchor_search(purchase_link);
   scrollFunc();

</script>