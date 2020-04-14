# LIGHT {docsify-ignore-all}

<div class="badge badge-pill badge-primary product_sku_tag">SKU:U021</div>

<div class="product_pic"><img src="assets/img/product_pics/unit/M5GO_Unit_light.webp"></div>

## 描述

**LIGHT** 是一款光强度检测传感器.集成光敏电阻与 10K 可调电阻，能够对光照强度进行检测并设定光强门槛值.光敏电阻的阻值会随着入射光强度的增加而降低，依此检测其电压的变化，通过AD转换得到光强数据信息.

为获得更精准的光强度检测数据，该 Unit 还采用**LM393**双差分比较器,用作比较光敏电阻和压敏电阻之间的差分电压.

## 产品特性

- 差分电压设计
- 模拟数字输出
- 开发平台: Arduino, UIFlow(Blocky,Python)
- 2x LEGO 兼容孔

## 包含

- 1x LIGHT Unit
- 1x Grove 线

## 应用

- 光控开关
- 太阳能庭院灯
- 红外监控摄像头

## 规格参数

<table>
   <tr style="font-weight:bold">
      <td>规格</td>
      <td>参数</td>
   </tr>
   <tr>
      <td>可调电阻</td>
      <td>10K</td>
   </tr>
   <tr>
      <td>尺寸</td>
      <td>32.2mm x 24.2mm x 8.5mm</td>
   </tr>
   <tr>
      <td>重量</td>
      <td>8.8g</td>
   </tr>
</table>

## EasyLoader

>EasyLoader是一个简洁快速的程序烧录器，其内置了一个产品相关的案例程序，通过简单步骤将其烧录至主控，即可进行一系列的功能验证.**(程序烧录前，请根据设备类型安装相应驱动程序. M5Core型主机[请点击此处查看CP210X驱动安装教程](zh_CN/arduino/arduino_development?id=安装串口驱动)，M5StickC/V/T/ATOM系列可免驱动使用)**

<div class="easyloader-box">
    <div style="background-color:white;">
        <div><img src="https://m5stack.oss-cn-shenzhen.aliyuncs.com/image/easyloader_intro.webp"></div>
        <div class="easyloader-btn">
            <a href="https://m5stack.oss-cn-shenzhen.aliyuncs.com/EasyLoader/Windows/UNIT/For%20M5Core/EasyLoader_Light_UNIT_With_M5Core.exe">Windows</a>
            <a href="https://m5stack.oss-cn-shenzhen.aliyuncs.com/EasyLoader/MacOS/UNIT/EasyLoader_Light_UNIT_With_M5Core.dmg">MacOS</a>
            <!-- <a>Linux</a>
            <a>MacOS</a> -->
        </div>
    </div>
    <div>
        <video id="example_video" controls>
            <source src="https://m5stack.oss-cn-shenzhen.aliyuncs.com/video/Product_example_video/Unit/Light_UNIT.mp4" type="video/mp4">
        </video>
        <div class="easyloader-mask">
        <a>
            <svg id="play-btn" t="1583228776634" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="4152" width="75" height="75"><path d="M512 0C229.216 0 0 229.216 0 512s229.216 512 512 512 512-229.216 512-512S794.784 0 512 0z m0 928C282.24 928 96 741.76 96 512S282.24 96 512 96s416 186.24 416 416-186.24 416-416 416zM384 288l384 224-384 224z" p-id="4153" fill="#007aff"></path></svg></a>
            <p>案例描述:</p>
            <p>屏幕显示当前环境光照值.</p>
        </div>
    </div>
</div>

### 管脚映射

<table>
 <tr><td>M5Core(GROVE B)</td><td>GPIO36</td><td>GPIO26</td><td>5V</td><td>GND</td></tr>
 <tr><td>LIGHT Unit</td><td>AnalogSignal Pin</td><td>DigitalSignal Pin</td><td>5V</td><td>GND</td></tr>
</table>

## 原理图

<img src="assets/img/product_pics/unit/light_sch.JPG">

## 案例程序

### 1. Arduino IDE

- [请点击此处下载Arduino示例代码](https://github.com/m5stack/M5-ProductExampleCodes/tree/master/Unit/LIGHT/Arduino)

<img src="assets/img/product_pics/unit/unit_example/LIGHT/example_unit_light_04.webp">

### 2. UIFlow

- [请点击此处下载UIFlow示例](https://github.com/m5stack/M5-ProductExampleCodes/tree/master/Unit/LIGHT/UIFlow)

<img src="assets/img/product_pics/unit/unit_example/LIGHT/example_unit_light_03.webp">


## 相关视频

**LIGHT 的教程**

<video class="video_size" controls>
    <source src="https://m5stack.oss-cn-shenzhen.aliyuncs.com/video/LukeVideo/m5stack%20iot%20lighting%20part%202%20-%20light%20sensor%20control.mp4" type="video/mp4">
</video>

<script>

   var purchase_link = 'https://m5stack.com/collections/m5-unit/products/light-sensor-unit';

   anchor_search(purchase_link);
   scrollFunc();

</script>