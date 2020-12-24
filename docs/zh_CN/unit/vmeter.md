# Voltmeter Unit{docsify-ignore-all}

<el-tag effect="plain">SKU:U087</el-tag>

<div class="product_pic"><img src="assets/img/product_pics/unit/v_meter/vmeter.webp"></div>

## 描述

**Voltmeter Unit** 是一款电压传感器，可以对电压进行实时监测。内部采用16位ADC数模转换器ADS1115，通过I2C(0X49)进行通讯。为了保证测量精度，内置DC-DC隔离电源，同时I2C接口通过低功耗隔离器CA-IS3020S进行电气隔离，防止数据总线或其他电路上的噪声和浪涌进入本地接地端而干扰或损坏敏感电路。每个Unit在出厂时都单独进行校准，最大测量电压为±36V，精度为满量程的1%，±1位读数。

?>EEPROM(0x53)在出厂时内置了校准参数，请勿对EEPROM进行写操作，否则校准数据将被覆盖导致测量结果不准确。

## 产品特性

- ±36V量程
- 16位ADC转换
- 分辨率：16V以下(含16V)为1mV，16V以上为7.9mV
- 精度为满量程的1%，±1位读数
- LED电源指示灯
- 免重新校准(EEPROM出厂写入)
- 内置 CA-IS3020S隔离芯片，抗干扰
- 隔离DC-DC
- 高达 1000 VRMS 隔离耐压
- 开发平台: Arduino, UIFlow(Blockly,Python)
- 2x LEGO 兼容孔

## 包含

- 1x Voltmeter Unit
- 1x HY2.0-4P线缆(20cm)

## 应用

- 电压表

## 规格参数
 
<table>
   <tr style="font-weight:bold">
      <td>规格</td>
      <td>参数</td>
   </tr>
   <tr>
      <td>分辨率</td>
      <td>读数<=16V为1mV，读数>16V为7.9mV</td>
   </tr>
   <tr>
      <td>测量范围</td>
      <td>±36V</td>
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

```Arduino

bool Voltmeter::saveCalibration2EEPROM(voltmeterGain_t gain, int16_t hope, int16_t actual)

//@Parameter: voltmeterGarin_t gain 设置增益
###########################################
# // | PAG      | Max Input Voltage(V) |  #
# // | PAG_4096 |        128            |  #
# // | PAG_2048 |        64            |  #
# // | PAG_1024 |        32            |  #
# // | PAG_512  |        16            |  #
# // | PAG_256  |        8             |  #
###########################################
//@Parameter: int16_t hope 设置目标值
//@Parameter: int16_t actual ADC原始读数

```

<!-- <table>
 <tr><td>ADC1115参考ADC校准满幅度</td><td>校准电压(V)</td><td>期望读数(int16)</td></tr>
 <tr><td>PGA4096(4.096)</td><td>60</td><td>7641</td></tr>
 <tr><td>PGA512(0.512)</td><td>5</td><td>5094</td></tr>
</table> -->

<table>
 <tr><td>电压测量档位</td><td>输入电压(V)满幅度</td><td>最小分辨率(mV)</td><td>增益系数</td></tr>
 <tr><td>4.096</td><td>128</td><td>7.85</td><td>0.125</td></tr>
 <!-- <tr><td>2.048</td><td>64.32581818</td><td>3.926136364</td><td>0.0625</td></tr>
 <tr><td>1.024</td><td>32.16290909</td><td>1.963068182</td><td>0.03125</td></tr>
 <tr><td>0.512</td><td>16.08145455</td><td>0.981534091</td><td>0.015625</td></tr> -->
 <tr><td>0.256</td><td>8</td><td>0.49</td><td>0.007813</td></tr>
</table>

## EasyLoader

>EasyLoader是一个简洁快速的程序烧录器，其内置了一个产品相关的案例程序，通过简单步骤将其烧录至主控，即可进行一系列的功能验证.**(程序烧录前，请根据设备类型安装相应驱动程序. M5Core型主机[请点击此处查看CP210X驱动安装教程](zh_CN/arduino/arduino_development?id=安装串口驱动)，M5StickC/V/T/ATOM系列可免驱动使用)**

<div class="easyloader-box">
    <div style="background-color:white;">
        <div><img src="https://m5stack.oss-cn-shenzhen.aliyuncs.com/image/easyloader_intro.webp"></div>
        <div class="easyloader-btn">
            <a href="https://m5stack.oss-cn-shenzhen.aliyuncs.com/EasyLoader/Windows/UNIT/For%20M5Core/EasyLoader_V_Meter_Unit.exe">Windows</a>
            <a href="https://m5stack.oss-cn-shenzhen.aliyuncs.com/EasyLoader/MacOS/UNIT/EasyLoader_V_Meter_Unit_for_M5Core.dmg">MacOS</a>
        </div>
    </div>
    <div>
        <video id="example_video" controls>
            <source src="https://m5stack.oss-cn-shenzhen.aliyuncs.com/video/Product_example_video/Unit/VMeter.mp4" type="video/mp4">
        </video>
        <div class="easyloader-mask">
        <a>
            <svg id="play-btn" t="1583228776634" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="4152" width="75" height="75"><path d="M512 0C229.216 0 0 229.216 0 512s229.216 512 512 512 512-229.216 512-512S794.784 0 512 0z m0 928C282.24 928 96 741.76 96 512S282.24 96 512 96s416 186.24 416 416-186.24 416-416 416zM384 288l384 224-384 224z" p-id="4153" fill="#007aff"></path></svg></a>
            <p>案例描述:</p>
            <p>测量电压，档位0.512，最大测量电压16V，模拟指针表示范围5V</p>
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
 <tr><td>V Meter Unit</td><td>SDA</td><td>SCL</td><td>5V</td><td>GND</td></tr>
</table>

## 案例程序

### 1. Arduino IDE


[点击这里获取Arduino示例程序](https://github.com/m5stack/M5-ProductExampleCodes/tree/master/Unit/V_Meter_Unit)

<script>

   var purchase_link = 'https://m5stack.com/collections/m5-unit/products/voltmeter-unit-ads1115';

   anchor_search(purchase_link);
   scrollFunc();

</script>