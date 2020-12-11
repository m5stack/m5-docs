# ATOM HUB SWITCH

<el-tag effect="plain">SKU:K042</el-tag>

<div class="product_pic"><img src="assets/img/product_pics/atom_base/atomhub_switch/atomswitch.webp"><img src="assets/img/product_pics/atom_base/atomhub_switch/atomswitch_02.webp"></div>

## 描述

**ATOM HUB SWITCH** 是一款支持ATOM的双路控制可编程开关，可同时接入两路交流/直流电路进行通断控制。内置降压模块可为ATOM提供5V/1A的直流电源，板载继电器最高支持250V/10A市电（16A瞬时电流），为了保障使用安全，其直流电路具备过热与短路保护功能，当电流过大或发生短路时能有效断开电路。为了方便用户在工业场景中使用，我们内置了一颗SP485EE电平转换芯片，提供一组RS485接口供用户连接RS485设备，RS485具备为ATOM供电的能力，支持电压为9-24V。此外还提供了一组HY2.0接口用于连接I2C外设或通用I/O设备。借助于ATOM的蓝牙与WIFI功能，您可以轻松实现远程遥控开关设备，如果您有多个ATOM HUB SWITCH，可以通过RS485接口进行并联。

## 产品特性

- 适配ATOM Matrix/ATOM Lite
- 内置AC-DC电路供电
- 2路继电器
- 内置RS485电平转换，支持Modbus
- HY2.0扩展
- 短路过热保护
- 可通过蓝牙、WIFI、RS485进行遥控

## 包含

- 1x ATOM HUB SWITCH
- 1x ATOM Lite
- 4x 强力磁铁 
- 1x 双面胶
- 1x 轨道夹具
- 1x 3.96*4P 公头
- 3x 3.96*3P 公头
- 1x M4内六角扳手
- 1x M2内六角扳手
- 2x M4*10mm 内六角沉头螺丝
- 1x M2*20mm 内六角杯头机械牙螺丝

## 应用

- 智能开关

## Switch & Switch-D 对比

<table>
   <tr style="font-weight:bold">
      <td>/</td>
      <td>Switch</td>
      <td>Switch-D</td>
   </tr>
   <tr>
      <td>继电器电流</td>
      <td>AC 250V/10A</td>
      <td>AC 250V/5A</td>
   </tr>
   <tr>
      <td>电源输入接口</td>
      <td>HT3.96R 2P</td>
      <td>HT3.96R 3P</td>
   </tr>
   <tr>
      <td>继电器接口</td>
      <td>(NO,NC,COM) x2</td>
      <td>(<mark>NO(直连AC电源L线)</mark>, <mark>COM(直连AC电源N线)</mark>) x2</td>
   </tr>
 </table>

?>详情请参考下图

<img src="assets/img/product_pics/atom_base/atomhub_switch_d/atom_switch_d_04.webp">

## 规格参数

<table>
   <tr style="font-weight:bold">
      <td>规格</td>
      <td>参数</td>
   </tr>
   <tr>
      <td>继电器参数</td>
      <td>AC 250V/10A(瞬时16A)</td>
   </tr>
   <tr>
      <td>Switch电源(AC-DC)</td>
      <td>AC 250V-DC 5V</td>
   </tr>
   <tr>
      <td>RS485供电电压</td>
      <td>9V-24V</td>
   </tr>
   <tr>
      <td>接口</td>
      <td>1x HY2.0(PORT A)， 1x HT3.96R 4P(RS485), 2x HT3.96R 3P(Relay), 1x HT3.96R 3P(AC/DC IN)</td>
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

## 原理图

<img src="assets/img/product_pics/atom_base/atomhub_switch/atomswitch_sch.webp">

## 案例程序

- Arduino代码示例 [点击这里](https://github.com/m5stack/M5-ProductExampleCodes/tree/master/AtomBase/AtomHubSwitch/AtomHubSwitch)

- UIFlow代码示例 [点击这里](https://github.com/m5stack/M5-ProductExampleCodes/tree/master/AtomBase/AtomHubSwitch/UIFlow)

<img src="assets/img/product_pics/atom_base/atomhub_switch/uiflow_atomswitch.webp" width = "50%">

<script>

   var purchase_link = 'https://m5stack.com/collections/m5-atom/products/atom-hub-switch-kit';

   anchor_search(purchase_link);
   scrollFunc();

</script>