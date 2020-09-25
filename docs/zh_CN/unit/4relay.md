# 4-Relay {docsify-ignore-all}

<el-tag effect="plain">SKU:</el-tag>

<div class="product_pic"><img src=""></div>

## 描述

**4-Relay** 是一款集成4路继电器的Unit，通过IIC进行控制，继电器控制电压最高DC-28V或AC-250V，额定电流10A，瞬时电流可承受16A。每路继电器可单独控制，每路继电器都有一个可编程的状态指示灯。

## 产品特性

- 4路继电器
- 最高支持250V/16A
- 状态指示灯
- IIC通讯

## 包含

- 1x 4-Relay Unit
- 1x Grove 线(20cm)

## 应用

- 直流信号切换
- 数字设备电源通断

## 规格参数
 
<table>
   <tr style="font-weight:bold">
      <td>规格</td>
      <td>参数</td>
   </tr>
   <tr>
      <td>最大输入电压</td>
      <td>250V</td>
   </tr>
   <tr>
      <td>最大电流</td>
      <td>16A</td>
   </tr>
   <tr>
      <td>通讯方式</td>
      <td>IIC(0x26)</td>
   </tr>
   <tr>
   <td>净重</td>
      <td>g</td>
   </tr>
   <tr>
      <td>毛重</td>
      <td>g</td>
   </tr>
   <tr>
      <td>产品尺寸</td>
      <td>mm</td>
   </tr>
   <tr>
      <td>包装尺寸</td>
      <td>mm</td>
   </tr>
 </table>


## EasyLoader

>EasyLoader是一个简洁快速的程序烧录器，其内置了一个产品相关的案例程序，通过简单步骤将其烧录至主控，即可进行一系列的功能验证.**(程序烧录前，请根据设备类型安装相应驱动程序. M5Core型主机[请点击此处查看CP210X驱动安装教程](zh_CN/arduino/arduino_development?id=安装串口驱动)，M5StickC/V/T/ATOM系列可免驱动使用)**

<div class="easyloader-box">
    <div style="background-color:white;">
        <div><img src="https://m5stack.oss-cn-shenzhen.aliyuncs.com/image/easyloader_intro.webp"></div>
        <div class="easyloader-btn">
            <a href="">Windows</a>
            <a href="">MacOS</a>
        </div>
    </div>
    <div>
        <video id="example_video" controls>
            <source src="" type="video/mp4">
        </video>
        <div class="easyloader-mask">
        <a>
            <svg id="play-btn" t="1583228776634" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="4152" width="75" height="75"><path d="M512 0C229.216 0 0 229.216 0 512s229.216 512 512 512 512-229.216 512-512S794.784 0 512 0z m0 928C282.24 928 96 741.76 96 512S282.24 96 512 96s416 186.24 416 416-186.24 416-416 416zM384 288l384 224-384 224z" p-id="4153" fill="#007aff"></path></svg></a>
            <p>案例描述:</p>
            <p></p>
        </div>
    </div>
</div>

## 原理图

<img src="assets/img/product_pics/unit/4_relay/4-relay_sch.webp">

### 管脚映射

<table>
 <tr><td>M5Core(GROVE A)</td><td>SDA(GPIO21)</td><td>SCL(GPIO22)</td><td>5V</td><td>GND</td></tr>
 <tr><td>4-relay Unit</td><td>SDA</td><td>SCL</td><td>5V</td><td>GND</td></tr>
</table>

## 案例程序

### 1. Arduino IDE

[点击这里获取Arduino示例程序]()

<script>

   var purchase_link = 'https://m5stack.com/collections/m5-unit/products/ammeter-unit-ads1115';

   anchor_search(purchase_link);
   scrollFunc();

</script>