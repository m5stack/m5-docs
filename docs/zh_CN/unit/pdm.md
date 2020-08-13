# PDM

<el-tag effect="plain">SKU:U089</el-tag>

<div class="product_pic"><img src="assets/img/product_pics/unit/pdm/pdm_mini_unit.webp"></div>

## 描述

**PDM mini Unit** 是一款基于PDM(脉冲密度调制)的数字式MEMS硅基麦克风，该麦克风具有高信噪比，高灵敏度，功耗低，抗射频干扰，频率响应平滑等特性，根据时钟频率自动切换麦克风状态(断电/激活/休眠)，可广泛用于可穿戴设备、智能数码设备的音频数据采集。

## 产品特性

- PDM信号输出(CLK/DAT)
- 高灵敏度、高信噪比
- 功耗低
- 抗射频干扰
- 兼容LEGO

## 包含

- 1x PDM unit
- 1x HY2.0 4P连接线(5CM)

## 应用

- 频谱仪
- 录音
- 响度计


## 规格参数

<table>
    <tr style="font-weight:bold">
        <td>规格</td>
        <td>参数</td>
    </tr>
    <tr>
        <td>灵敏度</td>
        <td>94dB SPL@1KHz 典型值:-22dBFS</td>
    </tr>
    <tr>
        <td>信噪比</td>
        <td>94dB SPL@1KHz,A加权 典型值:61.4dB</td>
    </tr>
    <tr>
        <td>总谐波失真</td>
        <td>100dB SPL@1KHz 典型值:1%</td>
    </tr>
    <tr>
        <td>工作电压范围</td>
        <td>1.6 V至3.6 V</td>
    </tr>
    <tr>
        <td>工作电流</td>
        <td>600µA</td>
    </tr>
    <tr>
      <td>净重</td>
      <td>4g</td>
   </tr>
      <tr>
      <td>毛重</td>
      <td>8g</td>
   </tr>
   <tr>
      <td>产品尺寸</td>
      <td>24*24*13mm</td>
   </tr>
   <tr>
      <td>包装尺寸</td>
      <td>35*36*18mm</td>
   </tr>
   <tr>
      <td>外壳材质</td>
      <td>Plastic ( PC )</td>
   </tr>
</table>


## 相关链接

-  **Datasheet** 
    - [SPM1423](https://m5stack.oss-cn-shenzhen.aliyuncs.com/resource/docs/datasheet/core/SPM1423HM4H-B_datasheet_en.pdf)

## EasyLoader

>EasyLoader是一个简洁快速的程序烧录器，其内置了一个产品相关的案例程序，通过简单步骤将其烧录至主控，即可进行一系列的功能验证.**(程序烧录前，请根据设备类型安装相应驱动程序. M5Core型主机[请点击此处查看CP210X驱动安装教程](zh_CN/arduino/arduino_development?id=安装串口驱动)，M5StickC/V/T/ATOM系列可免驱动使用)**

<div class="easyloader-box">
    <div style="background-color:white;">
        <div><img src="https://m5stack.oss-cn-shenzhen.aliyuncs.com/image/easyloader_intro.webp"></div>
        <div class="easyloader-btn">
            <a href="https://m5stack.oss-cn-shenzhen.aliyuncs.com/EasyLoader/Windows/UNIT/For%20M5Core/EasyLoader_PDM_Unit.exe">Windows</a>
            <a href="https://m5stack.oss-cn-shenzhen.aliyuncs.com/EasyLoader/MacOS/UNIT/EasyLoader_PDM_Unit_With_M5Core.dmg">MacOS</a>
        </div>
    </div>
    <div>
        <video id="example_video" controls>
            <source src="https://m5stack.oss-cn-shenzhen.aliyuncs.com/video/Product_example_video/Unit/PDM.mp4">
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

<img src="assets/img/product_pics/unit/pdm/pdm_sch.webp">

## 案例程序

### 1. Arduino IDE

[请点击此处获取Arduino代码](https://github.com/m5stack/M5-ProductExampleCodes/tree/master/Unit/PDM)


<script>

   var purchase_link = '';

   anchor_search(purchase_link);
   scrollFunc();

</script>