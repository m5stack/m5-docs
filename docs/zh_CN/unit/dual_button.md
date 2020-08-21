# Dual-BUTTON

<el-tag effect="plain">SKU:U025</el-tag>

<div class="product_pic"><img src="assets/img/product_pics/unit/M5GO_Unit_dual_button.webp"></div>

## 描述

**Dual Button**, 是一款双按键 Unit ，提供了两个不同颜色的物理按键供你进行操作.通过检测不同按键输入引脚高/低电平变化，进而判断按键状态.该 Unit 通过GROVE B端口与M5Core进行通信.


## 产品特性

- GROVE 接口
- 支持 [UIFlow](http://flow.m5stack.com) 、 [Arduino](http://www.arduino.cc)
- 2x LEGO 兼容孔

## 包含

- 1x Dual BUTTON Unit
- 1x Grove 线

## 应用

- 游戏控制器
- 远程控制开关

## 规格参数

<table>
   <tr style="font-weight:bold">
      <td>规格</td>
      <td>参数</td>
   </tr>
   <tr>
      <td>RGB LED</td>
      <td>WS2812 x 37</td>
   </tr>
   <tr>
      <td>净重</td>
      <td>8g</td>
   </tr>
      <tr>
      <td>毛重</td>
      <td>22g</td>
   </tr>
   <tr>
      <td>产品尺寸</td>
      <td>48*24*8mm</td>
   </tr>
   <tr>
      <td>包装尺寸</td>
      <td>60*57*17mm</td>
   </tr>
</table>

### EasyLoader

<img src="https://m5stack.oss-cn-shenzhen.aliyuncs.com/image/EasyLoader_logo.webp" width="100px" style="margin-top:20px">

<a href="https://m5stack.oss-cn-shenzhen.aliyuncs.com/EasyLoader/Unit/EasyLoader_Dual_Button.exe"><el-button type="primary">点击下载EasyLoader</el-button></a>

>1.EasyLoader是一个简洁快速的程序烧录器，每一个产品页面里的EasyLoader都提供了一个与产品相关的案例程序，通过简单步骤将其烧录至主控，能够进行一系列的功能验证.

>2.下载软件后，双击运行应用程序，将M5设备通过数据线连接至电脑,选择端口参数，点击 **"Burn"** 即可开始烧录.(**为M5StickC烧录时，请将波特率设置在750000或115200**)

?>3.目前EasyLoader仅适用于Windows操作系统、兼容M5体系采用ESP32作为控制核心的主机.在为M5Core烧录前需要安装CP210X驱动程序（使用M5StickC作为控制器的则无需安装）[点击此处查看驱动安装教程](zh_CN/related_documents/M5Burner#安装串口驱动)

### 管脚映射

<table>
 <tr><td>M5Core (GROVE B)</td><td>GPIO36</td><td>GPIO26</td><td>5V</td><td>GND</td></tr>
 <tr><td>DUAL_BUTTON Unit</td><td>Blue Button Pin</td><td>Red Button Pin</td><td>5V</td><td>GND</td></tr>
</table>

## 原理图

<img src="assets/img/product_pics/unit/dual_button_sch.webp">

## 案例程序

### 1. Arduino IDE

[请点击此处获取Arduino示例程序](https://github.com/m5stack/M5Stack/tree/master/examples/Unit/DUAL_BUTTON)

### 2. UIFlow

[请点击此处获取UIFlow示例](https://github.com/m5stack/M5-ProductExampleCodes/tree/master/Unit/DUAL_BUTTON/UIFlow)

<img src="assets/img/product_pics/unit/unit_example/DUAL_BUTTON/example_unit_dual_button_05.webp">

<script>

   var purchase_link = 'https://m5stack.com/collections/m5-unit/products/mini-dual-button-unit';


   anchor_search(purchase_link);
   scrollFunc();

</script>