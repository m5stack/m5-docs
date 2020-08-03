# Hall effect Unit

<el-tag effect="plain">SKU:U084</el-tag>

<div class="product_pic"><img src="assets/img/product_pics/unit/hall/hall_unit.webp">

## 描述

**Hall effect Unit** 是一款霍尔传感器. 内部集成3个A3144E霍尔感应开关，通过74系列门集成电路进行逻辑处理，当有S磁极物体靠近hall正面或N磁极靠近hall背面时可以产生低电平信号，同时内部的LED指示灯会点亮。霍尔传感器广泛应用于门磁报警、接近感应、转速测量等场景。

## 产品特性

- 单极霍尔开关量感应
- 响应速度快，灵敏度高
- 带状态指示灯
- 低电平输出
- 可与积木搭配使用

## 套件清单

- 1x Hall effect Unit
- 1x GROVE 线(20CM)
- 1x 磁铁

## 应用

-  门磁报警
-  磁场接近感应
-  转速测量

## 规格参数

<table>
    <tr style="font-weight:bold">
        <td>规格</td>
        <td>参数</td>
    </tr>
    <tr>
        <td>霍尔传感器</td>
        <td>A3144E * 3</td>
    </tr>
    <tr>
        <td>逻辑处理IC</td>
        <td>74HC08D</td>
    </tr>
    <tr>
        <td>状态指示</td>
        <td>红色LED</td>
    </tr>
    <tr>
        <td>输出电平</td>
        <td>低电平有效</td>
    </tr>
    <tr>
      <td>净重</td>
      <td>4g</td>
   </tr>
      <tr>
      <td>毛重</td>
      <td>17g</td>
   </tr>
   <tr>
      <td>产品尺寸</td>
      <td>24*32*8mm</td>
   </tr>
   <tr>
      <td>包装尺寸</td>
      <td>67*52*11mm</td>
   </tr>
</table>

## EasyLoader


>EasyLoader是一个简洁快速的程序烧录器，其内置了一个产品相关的案例程序，通过简单步骤将其烧录至主控，即可进行一系列的功能验证.**(程序烧录前，请根据设备类型安装相应驱动程序. M5Core型主机[请点击此处查看CP210X驱动安装教程](zh_CN/arduino/arduino_development?id=安装串口驱动)，M5StickC/V/T/ATOM系列可免驱动使用)**

<div class="easyloader-box">
    <div style="background-color:white;">
        <div><img src="https://m5stack.oss-cn-shenzhen.aliyuncs.com/image/easyloader_intro.webp"></div>
        <div class="easyloader-btn">
            <a href="https://m5stack.oss-cn-shenzhen.aliyuncs.com/EasyLoader/Windows/UNIT/For%20M5Core/EasyLoader_HALL_UNIT_With_M5Core.exe">Windows</a>
            <a href="https://m5stack.oss-cn-shenzhen.aliyuncs.com/EasyLoader/MacOS/UNIT/EasyLoader_HALL_UNIT_With_M5Core.dmg">MacOS</a>
            <!-- <a>Linux</a>
            <a>MacOS</a> -->
        </div>
    </div>
    <div>
        <video id="example_video" controls>
            <source src="https://m5stack.oss-cn-shenzhen.aliyuncs.com/video/Product_example_video/Unit/HALL_Unit.mp4" type="video/mp4">
        </video>
        <div class="easyloader-mask">
        <a>
            <svg id="play-btn" t="1583228776634" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="4152" width="75" height="75"><path d="M512 0C229.216 0 0 229.216 0 512s229.216 512 512 512 512-229.216 512-512S794.784 0 512 0z m0 928C282.24 928 96 741.76 96 512S282.24 96 512 96s416 186.24 416 416-186.24 416-416 416zM384 288l384 224-384 224z" p-id="4153" fill="#007aff"></path></svg></a>
            <p>案例描述:</p>
            <p>屏幕显示磁感状态，低电平有效</p>
        </div>
    </div>
</div>

### 管脚映射

<table>
 <tr><td>M5Core ( PORT B )</td><td>GPIO26</td><td>GPIO36</td><td>5V</td><td>GND</td></tr>
 <tr><td>Hall effect Unit</td><td> </td><td>INPUT</td><td>5V</td><td>GND</td></tr>
</table>

## 相关链接

- **Datasheet**
    - [A3144E](https://m5stack.oss-cn-shenzhen.aliyuncs.com/resource/docs/datasheet/unit/3141Thru3144E_HALL.PDF)

## 原理图

<img src= "assets/img/product_pics/unit/hall/hall_unit_sch.webp">

## 案例程序

### Arduino

- [点击此处获取Arduino案例程序](https://github.com/m5stack/M5-ProductExampleCodes/tree/master/Unit/HALL/HALL).

## UIFlow

- [点击此处获取UIFlow案例程序](https://github.com/m5stack/M5-ProductExampleCodes/tree/master/Unit/HALL/UIFlow). 

<img src= "assets/img/product_pics/unit/hall/hall_unit_uiflow.webp">

<script>

   var purchase_link = '';


   anchor_search(purchase_link);
   scrollFunc();

</script>