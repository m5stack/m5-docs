# Tail485

<el-tag effect="plain">SKU:T002</el-tag>

<div class="product_pic"><img src="assets/img/product_pics/atom_base/tail485/tail485_01.webp"></div>

## 描述

**Tail485** 是一款为ATOM设计的TTL-RS485转换器，用于TTL电平与RS485电平转换。RS485是一种通信协议标准，用于定义串行通信系统的驱动器和接收器的电气特性,支持多点系统，广泛应用于工业领域。当项目设备需要通过RS485进行通信控制时，使用 Tail485进行接口类型转接会是一个不错的选择。在Tail485的内部集成有DC/DC降压稳压芯片，可以直接将RS485的12V电压转为5V为TypeC接口供电，免去了单独供电的烦恼。

## 产品特性

- 适配Atom
- 内置DC/DC
- SP485EEN-L

## 包含

- 1x Tail485

## 应用

- RS485多点通讯

## 规格参数

<table class="table-1">
    <thead>
    <tr>
        <th>规格</th>
        <th>参数</th>
    </tr>
    </thead>
    <tbody>
        <tr>
            <td>外接端口</td>
            <td>VH-3.96 4P</td>
        </tr>
        <tr>
            <td>转换电平</td>
            <td>5V<->12V</td>
        </tr>
        <tr>
            <td>电平转换IC</td>
            <td>SP485EEN-L</td>
        </tr>
        <tr>
            <td>稳压降压IC</td>
            <td>AOZ1282CI</td>
        </tr>
        <tr>
            <td>净重</td>
            <td>9g</td>
        </tr>
        <tr>
            <td>毛重</td>
            <td>9g</td>
        </tr>
        <tr>
            <td>产品尺寸</td>
            <td>54*96*10mm</td>
        </tr>
        <tr>
            <td>包装尺寸</td>
            <td>100*60*10mm</td>
        </tr>
        <tr>
            <td>外壳材质</td>
            <td>Plastic ( PC )</td>
        </tr>
     </tbody>
</table>

## EasyLoader

>EasyLoader是一个简洁快速的程序烧录器，其内置了一个产品相关的案例程序，通过简单步骤将其烧录至主控，即可进行一系列的功能验证.

<div class="easyloader-box">
    <div style="background-color:white;">
        <div><img src="https://m5stack.oss-cn-shenzhen.aliyuncs.com/image/easyloader_intro.webp"></div>
        <div class="easyloader-btn">
            <a href="https://m5stack.oss-cn-shenzhen.aliyuncs.com/EasyLoader/Windows/ATOM_BASE/EasyLoader_TAIL485_ATOM_BASE.exe">Windows</a>
            <a href="https://m5stack.oss-cn-shenzhen.aliyuncs.com/EasyLoader/MacOS/ATOM_BASE/EasyLoader_TAIL485_ATOM_BASE.dmg">MacOS</a>
            <!-- <a>Linux</a>
            <a>MacOS</a> -->
        </div>
    </div>
    <div>
        <video id="example_video" controls>
            <source src="https://m5stack.oss-cn-shenzhen.aliyuncs.com/video/Product_example_video/AtomBase/Tail485.mp4" type="video/mp4">
        </video>
        <div class="easyloader-mask">
        <a>
            <svg id="play-btn" t="1583228776634" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="4152" width="75" height="75"><path d="M512 0C229.216 0 0 229.216 0 512s229.216 512 512 512 512-229.216 512-512S794.784 0 512 0z m0 928C282.24 928 96 741.76 96 512S282.24 96 512 96s416 186.24 416 416-186.24 416-416 416zM384 288l384 224-384 224z" p-id="4153" fill="#007aff"></path></svg></a>
            <p>案例描述:</p>
            <p>按下按键发送"hello"，接收到消息led闪烁.</p>
        </div>
    </div>
</div>

## 相关链接

-  **Datasheet** 
    - [SP485EEN](https://m5stack.oss-cn-shenzhen.aliyuncs.com/resource/docs/datasheet/hat/SP485EEN_en.pdf)
    - [AOZ1282CI](https://m5stack.oss-cn-shenzhen.aliyuncs.com/resource/docs/datasheet/atombase/tail485/AOZ1282CI-datasheet.pdf)

### 管脚映射

<table>
 <tr><td>ATOM</td><td>GPIO26</td><td>GPIO32</td><td>5V</td><td>GND</td></tr>
 <tr><td>Tail485</td><td>TX</td><td>RX</td><td>5V</td><td>GND</td></tr>
</table>

## 原理图

<img src="assets/img/product_pics/atom_base/tail485/tail485_08.webp">


## 案例程序

### 1. Arduino

[点击这里获取Arduino示例程序](https://github.com/m5stack/M5-ProductExampleCodes/tree/master/AtomBase/Tail485/Tail485)

### 2. UIFlow

[点击这里获取UIFlow示例程序](https://github.com/m5stack/M5-ProductExampleCodes/tree/master/AtomBase/Tail485/UIFlow)

<img src="assets/img/product_pics/atom_base/tail485/tail485_09.webp" width = "50%">

<script>

   var purchase_link = 'https://m5stack.com/collections/all/products/atom-tail485';

   anchor_search(purchase_link);
   scrollFunc();

</script>
