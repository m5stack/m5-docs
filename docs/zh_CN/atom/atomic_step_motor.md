# ATOMIC STEP MOTOR

<el-tag effect="plain">SKU:K042</el-tag>

<div class="product_pic"><img src="assets/img/product_pics/atom_base/atomhub_switch/atomswitch.webp"><img src="assets/img/product_pics/atom_base/atomhub_switch/atomswitch_02.webp"></div>

## 描述

**ATOMIC STEP MOTOR** 是一款适用于ATOM Matrix/ATOM Lite的步进电机驱动模块，内置DRV8825驱动芯片，可用于驱动步进电机，通过调整可变电阻，最高可提供2.5A(24V 25℃条件下)的驱动能力,峰值输出电流3A。板载一个拨码开关，可灵活调整步进细分数。在使用时需要提供外部电源供电。

## 产品特性

- 适用于ATOM Lite/ATOM Matrix
- 最高32细分
- 最高2.5A驱动电流
- 工作状态指示灯


## 包含

- 1x Atomic Step Motor


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
      <td>最高2.5A，峰值3A</td>
   </tr>
   <tr>
      <td>供电电压</td>
      <td>9V-24V</td>
   </tr>
   <tr>
      <td>接口</td>
      <td></td>
   </tr>
   <tr>
      <td>净重</td>
      <td>134g</td>
   </tr>
   <tr>
      <td>毛重</td>
      <td>158g</td>
   </tr>
   <tr>
      <td>产品尺寸</td>
      <td>72*40*30mm</td>
   </tr>
   <tr>
      <td>包装尺寸</td>
      <td>104*77*35mm</td>
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
            <a href="https://m5stack.oss-cn-shenzhen.aliyuncs.com/EasyLoader/Windows/ATOM_BASE/EasyLoader_AtomHubSwitch.exe">Windows</a>
            <a href="https://m5stack.oss-cn-shenzhen.aliyuncs.com/EasyLoader/MacOS/ATOM_BASE/EasyLoader_AtomHubSwitch.dmg">MacOS</a>
        </div>
    </div>
    <div>
        <video id="example_video" controls>
            <source src="https://m5stack.oss-cn-shenzhen.aliyuncs.com/video/Product_example_video/AtomBase/AtomSwitch.mp4" type="video/mp4">
        </video>
        <div class="easyloader-mask">
        <a>
            <svg id="play-btn" t="1583228776634" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="4152" width="75" height="75"><path d="M512 0C229.216 0 0 229.216 0 512s229.216 512 512 512 512-229.216 512-512S794.784 0 512 0z m0 928C282.24 928 96 741.76 96 512S282.24 96 512 96s416 186.24 416 416-186.24 416-416 416zM384 288l384 224-384 224z" p-id="4153" fill="#007aff"></path></svg></a>
            <p>案例描述:</p>
            <p>按键控制开关，呼吸灯状态表示继电器序号及开关状态，当红灯或绿灯亮起时按下按键切换状态</p>
        </div>
    </div>
</div>

## 相关链接

-  **Datasheet** 
    - [SP485EE](https://m5stack.oss-cn-shenzhen.aliyuncs.com/resource/docs/datasheet/hat/SP485EEN_en.pdf)

### 管脚映射

<table>
 <tr><td>ATOM</td><td>22</td><td>19</td><td>33</td><td>23</td><td>25</td><td>21</td></tr>
 <tr><td>ATOM HUB SWITCH</td><td>Relay1</td><td>Relay2</td><td>RX</td><td>TX</td><td>SDA</td><td>SCL</td></tr>
</table>

### 细分设置

<table>
 <tr><td>拨码开关</td><td>1</td><td>2</td><td>3</td><td>4</td></tr>
 <tr><td>Full-step</td><td>Low</td><td>Low</td><td>Low</td><td>High</td></tr>
 <tr><td>Half-step</td><td>High</td><td>LoW</td><td>LoW</td><td>High</td></tr>
 <tr><td>1/4 step</td><td>Low</td><td>High</td><td>Low</td><td>High</td></tr>
 <tr><td>1/8 step</td><td>High</td><td>High</td><td>Low</td><td>High</td></tr>
 <tr><td>1/16 step</td><td>Low</td><td>Low</td><td>High</td><td>High</td></tr>
 <tr><td>1/32 step</td><td>Hight</td><td>Low</td><td>High</td><td>High</td></tr>
 <tr><td>1/32 step</td><td>Low</td><td>High</td><td>High</td><td>High</td></tr>
 <tr><td>1/32 step</td><td>High</td><td>High</td><td>High</td><td>High</td></tr>
</table>

## 原理图

<img src="assets/img/product_pics/atom_base/atomStepMotor/AtomicStepMotor_sch.webp">

## 案例程序

- Arduino代码示例 [点击这里](https://github.com/m5stack/M5-ProductExampleCodes/tree/master/AtomBase/AtomHubSwitch/AtomHubSwitch)

- UIFlow代码示例 [点击这里](https://github.com/m5stack/M5-ProductExampleCodes/tree/master/AtomBase/AtomHubSwitch/UIFlow)

<img src="assets/img/product_pics/atom_base/atomhub_switch/uiflow_atomswitch.webp" width = "50%">

<script>

   var purchase_link = 'https://m5stack.com/collections/m5-atom/products/atom-hub-switch-kit';

   anchor_search(purchase_link);
   scrollFunc();

</script>