# ATOM HUB SWITCH D

<el-tag effect="plain">SKU:K042-D</el-tag>

<div class="product_pic"><img src="assets/img/product_pics/atom_base/atomhub_switch_d/atom_switch_d_01.webp"><img src="assets/img/product_pics/atom_base/atomhub_switch_d/atom_switch_d_02.webp"></div>

## 描述

**ATOM HUB SWITCH D** 是一款专为ATOM主控适配的双路继电器电源控制开关，其中D表示着Directly(直接), 在设计上Switch D采用了电源输入直连继电器的方案。交流电源直接流向两路继电器的NO(常开)触点，由ATOM进行通断控制。使用时，用户只需要将用电负载接入继电器既可，无需另外连接电源线路。与以往的继电器控制方案相比，这一款模块在控制用电负载上，会更加的简洁高效。

输入电源除了用于继电器负载供电，同时还将经过内置降压模块可为ATOM提供5V/1A的直流电源，为了保障使用安全，该电源输入电路具备过热与短路保护功能，当电流过大或发生短路时能有效断开电路，防止元器件损坏。内置SP485EE电平转换芯片，提供RS485通信接口支持多设备挂载通信，集成9-24V降压5V电路适应工业场景上的取电需求，拓展供电能力。引出了一组HY2.0-4P接口用于连接I2C外设或通用I/O设备。结合ATOM自带蓝牙与WIFI功能，ATOM HUB SWITCH D可以快速搭建远程设备开关应用。

## 产品特性

- 适配ATOM Matrix/ATOM Lite
- 内置AC-DC电路供电
- 2路继电器
- 内置RS485电平转换，支持Modbus
- HY2.0-4P扩展接口
- 短路过热保护
- 可通过蓝牙、WIFI、RS485进行控制

## 包含

- 1x ATOM HUB SWITCH D
- 1x ATOM Lite
- 4x 强力磁铁 
- 1x 双面胶
- 1x 轨道夹具
- 1x 3.96*4P 公头
- 3x 3.96*2P 公头
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
      <td>AC 250V/5A</td>
   </tr>
   <tr>
      <td>Switch电源(AC-DC)</td>
      <td>AC 110~250V -> DC 5V</td>
   </tr>
   <tr>
      <td>RS485供电电压</td>
      <td>9V-24V</td>
   </tr>
   <tr>
      <td>接口</td>
      <td>1x HY2.0(PORT A),  1x HT3.96R 4P(RS485), 2x HT3.96R 2P(Relay), 1x HT3.96R 2P(AC/DC IN)</td>
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

- **Windows** 
   - [FactoryTest](https://m5stack.oss-cn-shenzhen.aliyuncs.com/EasyLoader/Windows/CORE/EasyLoader_M5Paper_FactoryTest.exe)

## 相关链接

-  **Datasheet** 
    - [SP485EE](https://m5stack.oss-cn-shenzhen.aliyuncs.com/resource/docs/datasheet/hat/SP485EEN_en.pdf)

### 管脚映射

<table>
 <tr><td>ATOM</td><td>22</td><td>19</td><td>33</td><td>23</td><td>25</td><td>21</td></tr>
 <tr><td>ATOM HUB SWITCH D</td><td>Relay1</td><td>Relay2</td><td>RX</td><td>TX</td><td>SDA</td><td>SCL</td></tr>
</table>

## 原理图

<img src="assets/img/product_pics/atom_base/atomhub_switch_d/atom_switch_d_03.webp">

## 案例程序

- Arduino代码示例 [点击这里](https://github.com/m5stack/M5-ProductExampleCodes/tree/master/AtomBase/AtomHubSwitch/AtomHubSwitch)

- UIFlow代码示例 [点击这里](https://github.com/m5stack/M5-ProductExampleCodes/tree/master/AtomBase/AtomHubSwitch/UIFlow)

## 相关视频

<video class="video_size" controls>
    <source src="https://m5stack.oss-cn-shenzhen.aliyuncs.com/video/Product_example_video/AtomBase/ATOM_SWITCH_D.mp4" type="video/mp4">
</video>

<script>

   var purchase_link = 'https://m5stack.com/products/atom-hub-switchd-2-relay-kit';

   anchor_search(purchase_link);
   scrollFunc();

</script>