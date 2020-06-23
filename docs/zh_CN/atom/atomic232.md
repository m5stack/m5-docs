# ATOM RS-232 Kit

<div class="badge badge-pill badge-primary product_sku_tag">SKU:K046</div>

<div class="product_pic"><img src="assets/img/product_pics/atom_base/atomicRS232/atom232.webp"></div>

## 描述

**ATOM RS-232** 是一款基于Atomic设计的TTL-RS232电平转换器。RS232是一种全双工通信协议标准，定义了串行通信系统的电气特性，在工业控制领域是一种应用广泛的通讯协议。模块采用MAX232芯片，支持TTL电平与RS232电平的双向转换,同时内置DC-DC降压稳压芯片，可以直接通过RS232的12V电平为ATOM供电。

## 产品特性

- 适配ATOM Matrix/ATOM Lite
- 全双工通讯
- 内置DC-DC

## 包含

- 1x ATOM RS-232
- 1x ATOM Lite
- 1x M2内六角扳手
- 1x M2*8mm杯头机械牙螺丝
- 1x 18cm TYPE-C数据线

## 应用

- RS232通讯
- 工业控制节点

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
            <td>电平转换芯片</td>
            <td>MAX232</td>
        </tr>
        <tr>
            <td>DC-DC</td>
            <td>A0Z1282CI</td>
        </tr>
        <tr>
            <td>净重</td>
            <td>26g</td>
        </tr>
        <tr>
            <td>毛重</td>
            <td>36g</td>
        </tr>
        <tr>
            <td>产品尺寸</td>
            <td>24*24*18mm</td>
        </tr>
        <tr>
            <td>包装尺寸</td>
            <td>54*54*20mm</td>
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
            <a href="https://m5stack.oss-cn-shenzhen.aliyuncs.com/EasyLoader/Windows/ATOM_BASE/EasyLoader_ATOM_RS232.exe">Windows</a>
            <a href="https://m5stack.oss-cn-shenzhen.aliyuncs.com/EasyLoader/MacOS/ATOM_BASE/EasyLoader_ATOM_RS232.dmg">MacOS</a>
            <!-- <a>Linux</a>
            <a>MacOS</a> -->
        </div>
    </div>
    <div>
        <video id="example_video" controls>
            <source src="https://m5stack.oss-cn-shenzhen.aliyuncs.com/video/Product_example_video/AtomBase/AtomicRS232.mp4" type="video/mp4">
        </video>
        <div class="easyloader-mask">
        <a>
            <svg id="play-btn" t="1583228776634" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="4152" width="75" height="75"><path d="M512 0C229.216 0 0 229.216 0 512s229.216 512 512 512 512-229.216 512-512S794.784 0 512 0z m0 928C282.24 928 96 741.76 96 512S282.24 96 512 96s416 186.24 416 416-186.24 416-416 416zM384 288l384 224-384 224z" p-id="4153" fill="#007aff"></path></svg></a>
            <p>案例描述:</p>
            <p>通过RS485收发到消息LED亮起，按下按键发送消息</p>
        </div>
    </div>
</div>

## 相关链接

-  **Datasheet** 
    - [MAX232](hhttps://m5stack.oss-cn-shenzhen.aliyuncs.com/resource/docs/datasheet/atombase/AtomicRS232/MAX232.pdf)
    - [AOZ1282CI](https://m5stack.oss-cn-shenzhen.aliyuncs.com/resource/docs/datasheet/atombase/tail485/AOZ1282CI-datasheet.pdf)


### 管脚映射

<table>
 <tr><td>ATOM</td><td>GPIO22</td><td>GPIO19</td><td>5V</td><td>GND</td></tr>
 <tr><td>ATOM RS-232</td><td>RX</td><td>TX</td><td>5V</td><td>GND</td></tr>
</table>

## 原理图

<img src="assets/img/product_pics/atom_base/atomicRS232/atomic_rs232_sch.webp">


## 案例程序

### 1. Arduino IDE

[点击这里获取Arduino示例程序](https://github.com/m5stack/M5-ProductExampleCodes/tree/master/AtomBase/AtomicRS232/Arduino/AtomicRS232)

### 2. UIFlow

[点击这里获取UIFlow示例程序](https://github.com/m5stack/M5-ProductExampleCodes/tree/master/AtomBase/AtomicRS232/UIFlow)

<script>

   var purchase_link = 'https://m5stack.com/collections/m5-atom/products/atom-rs232-kit';

   anchor_search(purchase_link);
   scrollFunc();

</script>
