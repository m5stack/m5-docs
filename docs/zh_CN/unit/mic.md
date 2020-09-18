# MIC Unit{docsify-ignore-all}

<el-tag effect="plain">SKU:U096</el-tag>

<div class="product_pic"><img src="assets/img/product_pics/unit/mic/mic.webp"></div>

## 描述

**MIC Unit** 是一款声音传感器，内置全指向型驻极体麦克风，通过麦克风前置放大器MAX4466对信号进行放大输出，该放大器能有效抑制电源噪声与共模噪声，输出信号声音还原度高，可在嘈杂环境中使用。该Unit不仅可以输出模拟信号，也可以输出数字电平信号，内置LM393双电压比较器，可通过调节10K可调电阻，设定比较电压阈值。该传感器非常适用于声电转换，声控开关等项目。

## 产品特性

- 声音采样/音频录制
- 内置麦克风前置放大器MAX4466
- 全指向，52dB灵敏度
- 模拟与数字信号输出
- 内置电压比较器与可调电阻，阈值可调
- 开发平台: Arduino, UIFlow(Blockly,Python)
- HY2.0-4P 接口
- 2x LEGO 兼容孔

## 包含

- 1x MIC Unit
- 1x Grove 连接线

## 应用

- 声电转换
- 声控开关

## 规格参数
 
<table>
   <tr style="font-weight:bold">
      <td>规格</td>
      <td>参数</td>
   </tr>
   <tr>
      <td>麦克风灵敏度/信噪比</td>
      <td>52dB/40dB</td>
   </tr>
   <tr>
      <td>输出信号</td>
      <td>模拟/数字</td>
   </tr>
   <tr>
      <td>工作电压</td>
      <td>3.3V</td>
   </tr>
   <tr>
   <td>净重</td>
      <td>5g</td>
   </tr>
   <tr>
      <td>毛重</td>
      <td>16g</td>
   </tr>
   <tr>
      <td>产品尺寸</td>
      <td>32*24*8mm</td>
   </tr>
   <tr>
      <td>包装尺寸</td>
      <td>67*53*12mm</td>
   </tr>
 </table>

## EasyLoader

>EasyLoader是一个简洁快速的程序烧录器，其内置了一个产品相关的案例程序，通过简单步骤将其烧录至主控，即可进行一系列的功能验证.**(程序烧录前，请根据设备类型安装相应驱动程序. M5Core型主机[请点击此处查看CP210X驱动安装教程](zh_CN/arduino/arduino_development?id=安装串口驱动)，M5StickC/V/T/ATOM系列可免驱动使用)**

<div class="easyloader-box">
    <div style="background-color:white;">
        <div><img src="https://m5stack.oss-cn-shenzhen.aliyuncs.com/image/easyloader_intro.webp"></div>
        <div class="easyloader-btn">
            <a href="https://m5stack.oss-cn-shenzhen.aliyuncs.com/EasyLoader/Windows/UNIT/For%20M5Core/EasyLoader_MIC_Unit_With_M5Core.exe">Windows</a>
            <a href="https://m5stack.oss-cn-shenzhen.aliyuncs.com/EasyLoader/MacOS/UNIT/EasyLoader_MIC_Unit_for_M5Core.dmg">MacOS</a>
        </div>
    </div>
    <div>
        <video id="example_video" controls>
            <source src="https://m5stack.oss-cn-shenzhen.aliyuncs.com/video/Product_example_video/Unit/MIC.mp4">
        </video>
        <div class="easyloader-mask">
        <a>
            <svg id="play-btn" t="1583228776634" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="4152" width="75" height="75"><path d="M512 0C229.216 0 0 229.216 0 512s229.216 512 512 512 512-229.216 512-512S794.784 0 512 0z m0 928C282.24 928 96 741.76 96 512S282.24 96 512 96s416 186.24 416 416-186.24 416-416 416zM384 288l384 224-384 224z" p-id="4153" fill="#007aff"></path></svg></a>
            <p>案例描述:</p>
            <p>显示麦克风采集AD值</p>
        </div>
    </div>
</div>

## 相关链接

-  **Datasheet** 
    - [MAX4466](https://m5stack.oss-cn-shenzhen.aliyuncs.com/resource/docs/datasheet/unit/MAX4466_V2.PDF)
    - [LM393](https://m5stack.oss-cn-shenzhen.aliyuncs.com/resource/docs/datasheet/unit/LM393.PDF)

## 原理图

<img src="assets/img/product_pics/unit/mic/mic_unit_sch.webp" width="40%">

### 管脚映射

<table>
 <tr><td>M5Core(PORT B</td><td>GPIO26</td><td>GPIO36</td><td>5V</td><td>GND</td></tr>
 <tr><td>Mic Unit</td><td>26</td><td>36</td><td>5V</td><td>GND</td></tr>
</table>

## 案例程序

### 1. Arduino IDE

[点击这里获取Arduino示例程序](https://github.com/m5stack/M5-ProductExampleCodes/tree/master/Unit/MIC_Unit)

<script>

   var purchase_link = '';

   anchor_search(purchase_link);
   scrollFunc();

</script>