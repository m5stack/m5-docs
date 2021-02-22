# COM.LoRaWAN915

<el-tag effect="plain">SKU:M031-C</el-tag>

<div class="product_pic"><img src="assets/img/product_pics/module/com_lorawan915/com.lorawan915_01.webp"></div>

## 描述

**COM.LoRaWAN915** 是M5Stack推出的适用于915MHz频率的LoRaWAN通讯模块。模块采用Ai-Thinker Ra-07H模组方案，支持远距离通信的同时兼具超低功耗与高灵敏度特性。模组集成LoRaWAN协议栈，采用串口通信接口(使用AT指令集进行控制)，使用时可作为采集节点大量接入网关进行数据收集管理。广泛应用于各种物联网场合，如环境监测节点部署等。

## 产品特性

-  Ai-Thinker Ra-07H模组方案
-  工作频率:915MHz
-  SMA天线
-  通信接口: UART
-  指令协议：AT命令

## 包含

-  1x LoRaWAN915 Module
-  1x SMA天线

## 应用

-  自动远程抄表
-  智能交通智能停车场
-  远程灌溉及环境监测

## AU915支持的主要国家及地区

**阿根廷/澳大利亚/玻利维亚/巴西/加拿大/智利/哥伦比亚/多米尼加共和国/厄瓜多尔/希腊危地马拉/洪都拉斯/牙买加/墨西哥/新西兰/尼加拉瓜/巴拿马/巴拿马/巴拉圭/秘鲁/巴布亚新几内亚/萨尔瓦多/美国 /乌拉圭**

## 规格参数

<table>
   <tr style="font-weight:bold">
      <td>规格</td>
      <td>参数</td>
   </tr>
   <tr>
      <td>UART波特率</td>
      <td>115200</td>
   </tr>
   <tr>
      <td>净重</td>
      <td>35g</td>
   </tr>
   <tr>
      <td>毛重</td>
      <td>72g</td>
   </tr>
   <tr>
      <td>产品尺寸</td>
      <td>54.2*54.2*13.2mm</td>
   </tr>
   <tr>
      <td>包装尺寸</td>
      <td>165*60*36mm</td>
   </tr>
 </table>

## 管脚映射

<table>
 <tr><td>CORE</td><td>RX</td><td>TX</td></tr>
 <tr><td>SW DIP-6拨码开关</td><td>G17/G0/G13</td><td>G16/G5/G15</td></tr>
</table>

?>**M5Stack FIRE** 中的 GPIO 16 / 17 默认与PSRAM连接，若该模块的TXD/RXD使用GPIO16，GPIO17将与其产生冲突。因此，当使用**M5Stack FIRE**去驱动该模块时，你需要将拨码开关拨至剩余两组引脚中的任意一组.

<img src="assets/img/product_pics/module/com_lorawan915/com.lorawan915_02.webp">

## 相关链接

- **[COM.LoRaWAN915 AT指令集](https://m5stack.oss-cn-shenzhen.aliyuncs.com/resource/docs/datasheet/module/COM.LoRaWAN915.asr6501-asr6502-at-commands-introduction-v4.3.pdf)**

- **[LoRaWAN 区域参数](https://m5stack.oss-cn-shenzhen.aliyuncs.com/resource/docs/datasheet/module/lorawantm_regional_parameters_v1.1rb_-_final.pdf)**

## 原理图

- 模块插接底板

<img src="assets/img/product_pics/module/com_lorawan/com.lorawan_sch.webp">

## 案例程序

- [请点击此处获取Arduino示例程序](https://github.com/m5stack/M5Atom/tree/master/examples/ATOM_BASE/ATOM_Socket)

<script>

   var purchase_link = 'https://m5stack.com/products/atom-motion-kit-with-motor-and-servo-driver-stm32f0';

   anchor_search();
   scrollFunc();

</script>


