# DDS

<el-tag effect="plain">SKU:U105</el-tag>

<div class="product_pic"><img src="assets/img/product_pics/unit/dds/dds_01.webp"><img src="assets/img/product_pics/unit/dds/dds_02.webp"></div>

## 描述

**DDS** 是一款信号源Unit. 采用AD9833可编程波形发生器+STM32F0控制方案。提供I2C通信接口(addr:0x31)，实际使用时以配置寄存器的方式进行操作。能够非常方便的控制该信号源输出多种波形(正弦波、三角波、方波输出、锯齿波，信号输出幅值0-0.6V)，与调整频率、相位。并且支持休眠策略，空闲状态时能够进一步减小电能损耗。该Unit适用于各种测试仪器的电子线路原型设计中充当信号源。

## 产品特性

- 数字可编程频率和相位
- 信号输出幅值0-0.6V
- 正弦波/三角波/方波/锯齿波(固定频率:13.6KHz)/DC输出
- 输出频率范围：0MHz至1MHz(10MHz基准时钟)
- 28bit频率分辨率
- 11bit相位分辨率

## 包含

- 1x DDS Unit
- 1x HY2.0-4P线缆
- 1x SMA-2.54mm线缆

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
      <td>支持波形</td>
      <td>正弦波/三角波/方波/锯齿波(固定频率:13.6KHz)/DC输出</td>
   </tr>
   <tr>
      <td>信号输出幅值</td>
      <td>0-0.6V</td>
   </tr>
   <tr>
      <td>输出频率范围</td>
      <td>0 MHz至1MHz(10 MHz基准时钟)</td>
   </tr>
   <tr>
      <td>频率分辨率</td>
      <td>28bit</td>
   </tr>
   <tr>
      <td>相位分辨率</td>
      <td>11bit</td>
   </tr>
   <tr>
      <td>净重</td>
      <td>11.1g</td>
   </tr>
   <tr>
      <td>毛重</td>
      <td>34.7g</td>
   </tr>
   <tr>
      <td>产品尺寸</td>
      <td>71*24*8mm</td>
   </tr>
   <tr>
      <td>包装尺寸</td>
      <td>88.5*60*21mm</td>
   </tr>
 </table>

## 相关链接

- **[AD9833](https://m5stack.oss-cn-shenzhen.aliyuncs.com/resource/docs/datasheet/unit/dds/ad9833.pdf)**

## EasyLoader


## 案例程序

### Arduino IDE

- [Arduino示例程序](https://github.com/m5stack/M5Stack/tree/master/examples/Unit/DDS_AD9833)


## 原理图

<img src="assets/img/product_pics/unit/dds/dds_sch.webp">

## 管脚映射

<table>
 <tr><td>M5Core</td><td>SCL</td><td>SDA</td><td>5V</td><td>GND</td></tr>
 <tr><td>DDS Unit</td><td>GPIO22</td><td>GPIO21</td><td>5V</td><td>GND</td></tr>
</table>

## I2C寄存器

- I2C Address: **0x31**                                       

>写寄存器时，需要将最高位置1。mclk置1将保持输出最后一个信号幅值，DAC置1将停止Unit输出。

```
/*--------------------------------------------------------------------------------------------------*/
//  | DDS CTRL REG       | 0x20
//  | ------------------------------------------------------------------------------------------------
//  | dds_ctrl_reg[0]  |  R/W  | System control
//                             | 7 | 6 | 5 | 4 | 3 | 2 | 1 | 0 |
//                             | W | R | R | R | R |    MODE   |
//                             
//                             | -MODE: 000 Reserved
//                             |        001 SINUS
//                             |        010 TRIANGLE
//                             |        011 SQUARE
//                             |        100 SAWTOOTH
//                             |        101 DC
//
//  | dds_ctrl_reg[1]  |  R/W  | System control
//                             | 7 | 6       | 5       |  4  |  3  |  2   | 1 | 0 | 
//                             | W | FSELECT | PSELECT | S01 | S12 | RSET | R | R |
//                             
//                             | -FSELECT: 0 Used FREQ0
//                                         1 Used FREQ1
//                             | -PSELECT: 0 Used PHASE0
//                                         1 Used PHASE1
//                             | -SLEEP01: 1 Disenable mclk
//                             | -SLEEP12: 1 Disenable DAC
/*----------------------------------------------------------------------------------------------------

/*--------------------------------------------------------------------------------------------------*/
//  | DDS FREQ PHASE REG       | 0x30
//  | ------------------------------------------------------------------------------------------------
    //  | dds_freq_phase_reg[0:3]  |  R/W  | FREQ(28bit)
    //                                     | 31 | 30 | 29:28 | 27:0       |
    //                                     | W  | N  |   R   | freq reg 0 |
    //
    //  | dds_freq_phase_reg[4:5]  |  R/W  | PHASE(12bit)
    //                                     | 15 | 14 | 13:12 | 11:0        |
    //                                     | W  | N  |   R   | phase reg 1 |
//
/*---------------------------------------------------------------------------------------------------*/


```

<script>

   var purchase_link = 'https://m5stack.com/products/ultra-wideband-uwb-unit-indoor-positioning-module-dw1000';
   
   anchor_search(purchase_link);
   scrollFunc();

</script>