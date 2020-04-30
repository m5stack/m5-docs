    # RELAY {docsify-ignore-all}

<div class="badge badge-pill badge-primary product_sku_tag">SKU:U023</div>

<div class="product_pic"><img src="assets/img/product_pics/unit/M5GO_Unit_relay.webp"></div>


## 描述

**RELAY**, 是一款继电器 Unit.能够控制DC/3A-30V或AC/3A-220V级别线路的通断.它实际上是用小电流去控制大电流运作的一种自动开关.故在电路中起着自动调节、安全保护、转换电路等作用.Unit提供3个引脚: ON、OFF、COM.通过编程GPIO输出高、低电平控制，公共端COM与ON、OFF其中之一连接.

## 产品特性

- 单总线控制
- 最高支持DC/3A-30V或AC/3A-220V
- 开发平台: Arduino, UIFlow(Blockly,Python)
- 2x LEGO 兼容孔

## 包含

- 1x RELAY Unit
- 1x Grove 线
- 1x 3.96 端子

## 应用

- 远程控制大功率电器，如冰箱，空调，电视等

## EasyLoader

>EasyLoader是一个简洁快速的程序烧录器，其内置了一个产品相关的案例程序，通过简单步骤将其烧录至主控，即可进行一系列的功能验证.**(程序烧录前，请根据设备类型安装相应驱动程序. M5Core型主机[请点击此处查看CP210X驱动安装教程](zh_CN/arduino/arduino_development?id=安装串口驱动)，M5StickC/V/T/ATOM系列可免驱动使用)**

<div class="easyloader-box">
    <div style="background-color:white;">
        <div><img src="https://m5stack.oss-cn-shenzhen.aliyuncs.com/image/easyloader_intro.webp"></div>
        <div class="easyloader-btn">
            <a href="https://m5stack.oss-cn-shenzhen.aliyuncs.com/EasyLoader/Windows/UNIT/For%20M5Core/EasyLoader_Relay_UNIT_With_M5Core.exe">Windows</a>
            <a href="https://m5stack.oss-cn-shenzhen.aliyuncs.com/EasyLoader/MacOS/UNIT/EasyLoader_Relay_UNIT_With_M5Core.dmg">MacOS</a>
            <!-- <a>Linux</a>
            <a>MacOS</a> -->
        </div>
    </div>
    <div>
        <video id="example_video" controls>
            <source src="https://m5stack.oss-cn-shenzhen.aliyuncs.com/video/Product_example_video/Unit/Relay_UNIT.mp4" type="video/mp4">
        </video>
        <div class="easyloader-mask">
        <a>
            <svg id="play-btn" t="1583228776634" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="4152" width="75" height="75"><path d="M512 0C229.216 0 0 229.216 0 512s229.216 512 512 512 512-229.216 512-512S794.784 0 512 0z m0 928C282.24 928 96 741.76 96 512S282.24 96 512 96s416 186.24 416 416-186.24 416-416 416zM384 288l384 224-384 224z" p-id="4153" fill="#007aff"></path></svg></a>
            <p>案例描述:</p>
            <p>继电器线圈循环通断，触点作为开关用于电路控制.</p>
        </div>
    </div>
</div>


## 案例程序

### 1. Arduino IDE

[请点击此处下载Arduino示例程序](https://github.com/m5stack/M5Stack/tree/master/examples/Unit/RELAY)

### 2. UIFlow

[请点击此处下载UIFlow示例](https://github.com/m5stack/M5-ProductExampleCodes/tree/master/Unit/RELAY/UIFlow)

<img src="assets/img/product_pics/unit/unit_example/RELAY/example_unit_relay_01.webp">

## 原理图

<img src="assets/img/product_pics/unit/relay_sch.JPG">

### 管脚映射

<table>
 <tr><td>M5Core(GROVE B)</td><td>GPIO36</td><td>GPIO26</td><td>5V</td><td>GND</td></tr>
 <tr><td>RELAY Unit</td><td>/</td><td>RELAY Controlling Pin</td><td>5V</td><td>GND</td></tr>
</table>

## 相关视频

- **用 UIFlow 和 RELAY Unit 控制 家庭灯**

<video class="video_size" controls>
    <source src="https://m5stack.oss-cn-shenzhen.aliyuncs.com/video/LukeVideo/Blinking%20a%20bulb%20with%20the%20M5%20Relay%20unit..mp4" type="video/mp4">
</video>


<script>

   var purchase_link = 'https://m5stack.com/collections/m5-unit/products/mini-3a-relay-unit';

   anchor_search(purchase_link);
   scrollFunc();

</script>