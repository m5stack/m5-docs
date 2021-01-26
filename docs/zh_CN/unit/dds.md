# DDS

<el-tag effect="plain">SKU:U100</el-tag>

<div class="product_pic"><img src="assets/img/product_pics/unit/dds/dds_01.webp"><img src="assets/img/product_pics/unit/dds/dds_02.webp"></div>

## 描述

**DDS** 是一款信号源Unit. 

内部集成AD9833可编程波形发生器。

集成STM32F0控制方案

I2C通信方式

能够产生正弦波、三角波、方波输出、锯齿波输出。

能够非常方便的控制输出波形，与调整频率、相位

支持休眠策略


## 产品特性

- 数字可编程频率和相位
- 信号输出幅值0-0.6V
- 正弦波/三角波/方波输出/锯齿波/DC输出

## 包含

- 1x DDS Unit
- 1x HY2.0-4P线缆

## 应用

- 频率刺激/波形发生
- 液流和气流测量
- 传感器应用：接近度、运动和缺陷检测
- 线路损耗/衰减
- 测试与医疗设备 
- 扫描/时钟发生器
- 时域反射(TDR)应用

## 规格参数

<table>
   <tr style="font-weight:bold">
      <td>规格</td>
      <td>参数</td>
   </tr>
   <tr>
      <td>净重</td>
      <td>7g</td>
   </tr>
   <tr>
      <td>毛重</td>
      <td>19g</td>
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

## 相关链接

- **[AD9833](https://m5stack.oss-cn-shenzhen.aliyuncs.com/resource/docs/datasheet/unit/dds/ad9833.pdf)**

## EasyLoader


## 案例程序

### Arduino IDE

- [Arduino示例程序](https://github.com/m5stack/M5Stack/blob/master/examples/Unit/DDS_AD9833/DDS_AD9833.ino)


## 原理图

<img src="assets/img/product_pics/unit/dds/dds_sch.webp">

## 管脚映射

<table>
 <tr><td>M5Core</td><td>SCL</td><td>SDA</td><td>5V</td><td>GND</td></tr>
 <tr><td>DDS Unit</td><td>GPIO22</td><td>GPIO21</td><td>5V</td><td>GND</td></tr>
</table>

## I2C寄存器

- I2C Address: **0x31**                                       


<script>

   var purchase_link = 'https://m5stack.com/products/ultra-wideband-uwb-unit-indoor-positioning-module-dw1000';
   
   anchor_search(purchase_link);
   scrollFunc();

</script>