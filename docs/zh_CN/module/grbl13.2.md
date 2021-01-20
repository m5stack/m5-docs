# GRBL 13.2

<el-tag effect="plain">SKU:M035</el-tag>

<div class="product_pic"><img src="assets/img/product_pics/module/proto_13.2/proto_13.2.webp"></div>

## 描述

**GRBL 13.2** 是M5Stack堆叠模块系列中的一款三轴步进电机驱动模块，

采用MEGA238PI2C搭配3*DRV8825步进电机驱动芯片控制方案，能够同时驱动三台双极步进电机联动。

提供I2C通信接口(addr:0x70)并集成拨码开关用于调节电机步进细分(最大支持1/32步进细分)与I2C地址调节，这意味着你可以通过堆叠两块**GRBL 13.2**模块实现六轴控制

9-24V/DC电源输入接口，电机驱动电流可达2.5A, 

开放三组限位开关信号接口，能够用于外接限位开关实现电机制动功能

## 产品特性

- 三轴DRV8825步进电机驱动器
- 驱动电流可达2.5A
- 驱动双极步进电机
- 最大1/32模式STEP细分

## 包含

- GRBL 13.2 Module

## 应用

- 打印机
- 扫描仪
- 办公自动化机器
- 游戏机
- 工厂自动化
- 机器人技术


## 规格参数

<table>
   <tr style="font-weight:bold">
      <td>规格</td>
      <td>参数</td>
   </tr>
   <tr>
      <td>净重</td>
      <td>22.5g</td>
   </tr>
   <tr>
      <td>毛重</td>
      <td>49g</td>
   </tr>
   <tr>
      <td>产品尺寸</td>
      <td>54.2*54.2*13.2mm</td>
   </tr>
   <tr>
      <td>包装尺寸</td>
      <td>93*64*20mm</td>
   </tr>
 </table>


## 相关链接

- [DRV8825 Datasheet](https://m5stack.oss-cn-shenzhen.aliyuncs.com/resource/docs/datasheet/module/DRV8825_en.pdf)


## 管脚映射

<table>
 <tr><td>M5Stack</td><td>GPIO21</td><td>GPIO22</td><td>5V</td><td>GND</td></tr>
 <tr><td>GRBL 13.2</td><td>SDA</td><td>SCL</td><td>VCC</td><td>GND</td></tr>
</table>


## 原理图

<img src="assets/img/product_pics/module/grbl13.2/grbl13.2_sch.webp"/>


## 步进细分调节

<table>
 <tr><td>MODE2</td><td>MODE1</td><td>MODE0</td><td>STEP MODE</td></tr>
 <tr><td>0</td><td>0</td><td>0</td><td>Full step (2-phase excitation) with 71% current</td></tr>
 <tr><td>0</td><td>0</td><td>1</td><td>1/2 step (1-2 phase excitation)</td></tr>
 <tr><td>0</td><td>1</td><td>0</td><td>1/4 step (W1-2 phase excitation)</td></tr>
 <tr><td>0</td><td>1</td><td>1</td><td>1/8 step</td></tr>
 <tr><td>1</td><td>0</td><td>0</td><td>1/16 step</td></tr>
 <tr><td>1</td><td>0</td><td>1</td><td>1/32 step</td></tr>
 <tr><td>1</td><td>1</td><td>0</td><td>1/32 step</td></tr>
 <tr><td>1</td><td>1</td><td>1</td><td>1/32 step</td></tr>
</table>

## I2C地址调节

<table>
 <tr><td>switch</td><td>Address</td></tr>
 <tr>><td>0</td><td>0x70</td></tr>
 <tr><td>1</td><td>0x71</td></tr>
</table>

## 案例程序

- [Arduino Example Code](https://github.com/m5stack/M5Atom/tree/master/examples/ATOM_BASE/ATOM_Motion)

- [Firmware源码]()

<script>

   var purchase_link = 'https://m5stack.com/products/atom-motion-kit-with-motor-and-servo-driver-stm32f0';

   anchor_search(purchase_link);
   scrollFunc();

</script>
