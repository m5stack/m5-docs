# ATOM STEPMOTOR Kit

<el-tag effect="plain">SKU:K047</el-tag>

<div class="product_pic"><img src="assets/img/product_pics/atom_base/atomStepMotor/atom_stepmotor.webp"></div>

## 描述

**ATOM STEPMOTOR** 是一款适用于ATOM Lite的步进电机驱动模块，内置DRV8825驱动芯片，可用于驱动步进电机，通过调整可变电阻，最高可提供1.2A的驱动能力,芯片自带过流保护功能。板载一个拨码开关，可灵活调整步进细分数。内置DC-DC芯片可通过外部电源为ATOM供电，在使用步进电机时需要提供外部电源供电(9-18V)。

## 产品特性

- 只适用于ATOM Lite
- 内置DC-DC外部电源可为ATOM供电
- 最高32细分
- 最高1.2A驱动电流
- 工作状态指示灯

## 包含

- 1x ATOM Lite
- 1x Atom StepMotor
- 1x Type-C 数据线(20cm)
- 1x M2*8螺丝
- 1x 内六角扳手

## 应用

- 步进电机控制器

## 规格参数

<table>
   <tr style="font-weight:bold">
      <td>规格</td>
      <td>参数</td>
   </tr>
   <tr>
      <td>细分数</td>
      <td>最高1/32</td>
   </tr>
   <tr>
      <td>输出电流</td>
      <td>最高1.2A</td>
   </tr>
   <tr>
      <td>供电电压</td>
      <td>9V-18V</td>
   </tr>
   <tr>
      <td>接口</td>
      <td>KF128L 2.54 6P</td>
   </tr>
   <tr>
      <td>净重</td>
      <td>17g</td>
   </tr>
   <tr>
      <td>毛重</td>
      <td>53g</td>
   </tr>
   <tr>
      <td>产品尺寸</td>
      <td>48*24*18mm</td>
   </tr>
   <tr>
      <td>包装尺寸</td>
      <td>55*55*20mm</td>
   </tr>
   <tr>
      <td>外壳材质</td>
      <td>Plastic ( PC )</td>
   </tr>
 </table>

## EasyLoader

>EasyLoader是一个简洁快速的程序烧录器，其内置了一个产品相关的案例程序，通过简单步骤将其烧录至主控，即可进行一系列的功能验证.**(程序烧录前，请根据设备类型安装相应驱动程序. M5Core型主机[请点击此处查看CP210X驱动安装教程](zh_CN/arduino/arduino_development?id=安装串口驱动)，M5StickC/V/T/ATOM系列可免驱动使用)**

<div class="easyloader-box">
    <div style="background-color:white;">
        <div><img src="https://m5stack.oss-cn-shenzhen.aliyuncs.com/image/easyloader_intro.webp"></div>
        <div class="easyloader-btn">
            <a href="https://m5stack.oss-cn-shenzhen.aliyuncs.com/EasyLoader/Windows/ATOM_BASE/Easyloader_ATOMIC_StepMotor.exe">Windows</a>
            <a href="https://m5stack.oss-cn-shenzhen.aliyuncs.com/EasyLoader/MacOS/ATOM_BASE/Easyloader_ATOMIC_StepMotor.dmg">MacOS</a>
        </div>
    </div>
    <div>
        <video id="example_video" controls>
            <source src="https://m5stack.oss-cn-shenzhen.aliyuncs.com/video/Product_example_video/AtomBase/AtomStepMotor.mp4" type="video/mp4">
        </video>
        <div class="easyloader-mask">
        <a>
            <svg id="play-btn" t="1583228776634" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="4152" width="75" height="75"><path d="M512 0C229.216 0 0 229.216 0 512s229.216 512 512 512 512-229.216 512-512S794.784 0 512 0z m0 928C282.24 928 96 741.76 96 512S282.24 96 512 96s416 186.24 416 416-186.24 416-416 416zM384 288l384 224-384 224z" p-id="4153" fill="#007aff"></path></svg></a>
            <p>案例描述:</p>
            <p>按下中间按键正转5000步，反转5000步</p>
        </div>
    </div>
</div>

## 相关链接

-  **Datasheet** 
    - [DRV8825](https://m5stack.oss-cn-shenzhen.aliyuncs.com/resource/docs/datasheet/module/DRV8825_en.pdf)

### 管脚映射

<table>
 <tr><td>ATOM Pin</td><td>G25</td><td>G21</td><td>G22</td><td>G19</td><td>G23</td></tr>
 <tr><td>ATOMIC StepMotor</td><td>FLT</td><td>RST</td><td>EN</td><td>STP</td><td>DIR</td></tr>
</table>

### 细分设置

<table>
 <tr><td>拨码开关</td><td>1</td><td>2</td><td>3</td></tr>
 <tr><td>Full-step</td><td>Off</td><td>Off</td><td>Off</td></tr>
 <tr><td>Half-step</td><td>On</td><td>Off</td><td>Off</td></tr>
 <tr><td>1/4 step</td><td>Off</td><td>On</td><td>Off</td></tr>
 <tr><td>1/8 step</td><td>On</td><td>On</td><td>Off</td></tr>
 <tr><td>1/16 step</td><td>Off</td><td>Off</td><td>On</td></tr>
 <tr><td>1/32 step</td><td>On</td><td>Off</td><td>On</td></tr>
 <tr><td>1/32 step</td><td>Off</td><td>On</td><td>On</td></tr>
 <tr><td>1/32 step</td><td>On</td><td>On</td><td>On</td></tr>
</table>

### Decay mode

<table>
 <tr><td>拨码开关</td><td>4</td></tr>
 <tr><td>缓慢衰减</td><td>Off</td></tr>
 <tr><td>快速衰减</td><td>On</td></tr>
</table>

## 原理图

<img src="assets/img/product_pics/atom_base/atomStepMotor/AtomicStepMotor_sch.webp">

## 案例程序

### 1. Arduino

- [请点击此处获取Arduino示例程序](https://github.com/m5stack/M5-ProductExampleCodes/tree/master/AtomBase/Atomic_StepMotor/Atomic_StepMotor)

### 2. UIFlow

- [请点击此处获取UIFlow示例](https://github.com/m5stack/M5-ProductExampleCodes/tree/master/AtomBase/Atomic_StepMotor/UIFlow)

<img src="assets/img/product_pics/atom_base/atomStepMotor/UIFlowatom_stepmotor.webp" width="60%" height="60%">

<script>

   var purchase_link = '';

   anchor_search(purchase_link);
   scrollFunc();

</script>