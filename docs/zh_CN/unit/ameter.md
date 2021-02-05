# Ameter Unit{docsify-ignore-all}

<el-tag effect="plain">SKU:U086</el-tag>

<div class="product_pic"><img src="assets/img/product_pics/unit/a_meter/ameter.webp"></div>

## 描述

**Ameter Unit** 是一款电流计，可以对电流进行实时监测。内部采用16位ADC数模转换器ADS1115，通过I2C(0X48)进行通讯。为了保证测量精度，内置DC-DC隔离电源，同时I2C接口通过低功耗隔离器CA-IS3020S进行电气隔离，防止数据总线或其他电路上的噪声和浪涌进入本地接地端而干扰或损坏敏感电路。每个Unit在出厂时都单独进行校准，精度为满量程%1，±1位读数，分辨率为0.3mA，最大测量电流为±4A，内部集成4A熔断器，防止测量电流过大烧毁电路。

>? EEPROM(0x51)在出厂时内置了校准参数，请勿对EEPROM进行写操作，否则校准数据将被覆盖导致测量结果不准确。

## 产品特性

- ±4A量程
- 16位ADC转换
- 4A熔断器
- 精度为满量程%1，±1位读数
- 分辨率0.3mA
- LED电源指示灯
- 过流保护
- 免重新校准(EEPROM出厂写入)
- 内置 CA-IS3020S隔离芯片，抗干扰
- 隔离DC-DC
- 开发平台: Arduino, UIFlow(Blockly,Pyhton)
- 2x LEGO 兼容孔

## 包含

- 1x Ameter Unit
- 1x HY2.0-4P线缆(20cm)

## 应用

- 电流计

## 规格参数
 
<table>
   <tr style="font-weight:bold">
      <td>规格</td>
      <td>参数</td>
   </tr>
   <tr>
      <td>测量范围</td>
      <td>±4A</td>
   </tr>
   <tr>
      <td>通讯协议</td>
      <td>I2C</td>
   </tr>
   <tr>
   <td>净重</td>
      <td>9g</td>
   </tr>
   <tr>
      <td>毛重</td>
      <td>24g</td>
   </tr>
   <tr>
      <td>产品尺寸</td>
      <td>65*24*8mm</td>
   </tr>
   <tr>
      <td>包装尺寸</td>
      <td>67*53*12mm</td>
   </tr>
 </table>


## 测量范围增益设置

**不同的量程分辨率不同，获得的结果误差值不同，请根据需要设置合适的量程。请勿对EEPROM进行写操作，如果确实希望将自定义校准值保存至EEPROM，使用下列语句，一旦写入后出厂数据将丢失**

<!-- ```Arduino

bool Voltmeter::saveCalibration2EEPROM(voltmeterGain_t gain, int16_t hope, int16_t actual)

//@Parameter: voltmeterGarin_t gain 设置增益
###########################################
# // | PAG      | Max Input Voltage(V) |  #
# // | PAG_4096 |        64            |  #
# // | PAG_2048 |        32            |  #
# // | PAG_512  |        16            |  #
# // | PAG_256  |        8             |  #
###########################################
//@Parameter: int16_t hope 设置目标值
//@Parameter: int16_t actual ADC原始读数

``` -->

<!-- <table>
 <tr><td>ADC1115参考校准档位</td><td>校准电流(A)</td><td>期望读数(int16)</td></tr>
 <tr><td>PGA512(O.512)</td><td>2</td><td>6400</td></tr>
</table> -->

?>最大绝对值输入电流`6A`，严禁超过，否则将烧毁设备。

<table>
 <tr><td>电流测量档位</td><td>最大输入电流(A)</td><td>功耗(W)</td><td>最小分辨率(mA)</td><td>增益系数</td></tr>
 <tr><td>PAG_4096(已校准)</td><td>±4</td><td>83.88</td><td>2.5</td><td>0.125</td></tr>
 <!-- <tr><td>2.048</td><td>20.48</td><td>20.97152</td><td>1.25</td><td>0.0625</td></tr>
 <tr><td>1.024</td><td>10.24</td><td>5.24288</td><td>0.625</td><td>0.03125</td></tr>
 <tr><td>0.512</td><td>5.12</td><td>1.31072</td><td>0.3125</td><td>0.015625</td></tr> -->
 <tr><td>PAG_256(已校准)</td><td>±2.56</td><td>0.32768</td><td>0.15626</td><td>0.007813</td></tr>
</table>


## EasyLoader

>EasyLoader是一个简洁快速的程序烧录器，其内置了一个产品相关的案例程序，通过简单步骤将其烧录至主控，即可进行一系列的功能验证.**(程序烧录前，请根据设备类型安装相应驱动程序. M5Core型主机[请点击此处查看CP210X驱动安装教程](zh_CN/arduino/arduino_development?id=安装串口驱动)，M5StickC/V/T/ATOM系列可免驱动使用)**

<div class="easyloader-box">
    <div style="background-color:white;">
        <div><img src="https://m5stack.oss-cn-shenzhen.aliyuncs.com/image/easyloader_intro.webp"></div>
        <div class="easyloader-btn">
            <a href="https://m5stack.oss-cn-shenzhen.aliyuncs.com/EasyLoader/Windows/UNIT/For%20M5Core/EasyLoader_A_Meter_Unit.exe">Windows</a>
            <a href="https://m5stack.oss-cn-shenzhen.aliyuncs.com/EasyLoader/MacOS/UNIT/EasyLoader_A_Meter_Unit_for_M5Core.dmg">MacOS</a>
        </div>
    </div>
    <div>
        <video id="example_video" controls>
            <source src="https://m5stack.oss-cn-shenzhen.aliyuncs.com/video/Product_example_video/Unit/AMeter.mp4" type="video/mp4">
        </video>
        <div class="easyloader-mask">
        <a>
            <svg id="play-btn" t="1583228776634" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="4152" width="75" height="75"><path d="M512 0C229.216 0 0 229.216 0 512s229.216 512 512 512 512-229.216 512-512S794.784 0 512 0z m0 928C282.24 928 96 741.76 96 512S282.24 96 512 96s416 186.24 416 416-186.24 416-416 416zM384 288l384 224-384 224z" p-id="4153" fill="#007aff"></path></svg></a>
            <p>案例描述:</p>
            <p>测量电流，档位0.512，最大输入电流5A，模拟指针表示范围2A</p>
        </div>
    </div>
</div>

## 相关链接

-  **Datasheet** 
    - [CA-IS3020S](https://m5stack.oss-cn-shenzhen.aliyuncs.com/resource/docs/datasheet/unit/CA-IS3020S.pdf)
    - [ADS1115](https://m5stack.oss-cn-shenzhen.aliyuncs.com/resource/docs/datasheet/unit/ADS1115.PDF)

## 原理图

<img src="assets/img/product_pics/unit/a_meter/a_meter_sch.webp" width="40%">

### 管脚映射

<table>
 <tr><td>M5Core(PORT A)</td><td>SDA(GPIO21)</td><td>SCL(GPIO22)</td><td>5V</td><td>GND</td></tr>
 <tr><td>A Meter Unit</td><td>SDA</td><td>SCL</td><td>5V</td><td>GND</td></tr>
</table>

## 案例程序

### 1. Arduino

- [请点击此处获取Arduino示例程序](https://github.com/m5stack/M5-ProductExampleCodes/tree/master/Unit/A_Meter_Unit)

### 2. UIFlow

- [请点击此处获取UIFlow示例](https://github.com/m5stack/M5-ProductExampleCodes/tree/master/Unit/A_Meter_Unit/UIFlow)

<img src="assets/img/product_pics/unit/a_meter/a_meter.webp">

<script>

   var purchase_link = 'https://m5stack.com/collections/m5-unit/products/ammeter-unit-ads1115';

   anchor_search(purchase_link);
   scrollFunc();

</script>