# CAN Unit

<el-tag effect="plain">SKU:</el-tag>

<div class="product_pic"><img src="assets/img/product_pics/unit/tvoc/tvoc.webp"></div>

## 描述

**CAN单元**是一个独立的控制器区域网络（CAN）收发器单元，可用于构建复杂的CAN通信网络。内置的DC-DC隔离电源芯片可以隔离噪音和干扰，防止损坏敏感电路。隔离的CAN收发器的型号是CA-IS3050G，它可以提供差分接收和差分传输能力。该总线可支持多达110个节点，信号传输速率可达1Mbps。具有限流、过压、接地损耗保护（-40V～40V）和热关断功能，能防止输出短路，符合ISO11898-2标准的技术规范。CAN是ISO国际标准串行通信协议。CAN属于现场总线类别。它是一种能够有效支持分布式控制或实时控制的串行通信网络。
基于CAN总线的分布式控制系统采用多主机竞争仲裁方式通讯，具有多主机操作、分散仲裁和广播通信的特点。它在以下几个方面具有明显的优势：网络中节点间的数据通信速度快、故障率低。同一优先级的同一线路，同一优先级的多个节点通信时，同一优先级的多个节点间的通信将避免发生拥塞。通信距离可达10km（速率小于5Kbps），速率可达1Mbps（通信距离小于40m）。

## 产品特性

- 高达5000v的隔离和耐压
- 内置隔离DC-DC
- 信号速率高达1Mbps
- 保护功能：信号隔离、限流、过压保护、热关机
- 2个乐高兼容孔
- HY2.0 4P接口

## 包含

- 1x CAN Unit
- 1x HY2.0 线缆(5CM)

## 应用

- CAN总线通信
- 工业现场控制
- 安全系统

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
            <td>隔离耐压值</td>
            <td>5000V</td>
        </tr>
        <tr>
            <td>最高速率</td>
            <td>1Mbps</td>
        </tr>
        <tr>
            <td>支持节点数</td>
            <td>110</td>
        </tr>
        <tr>
            <td>低环路延迟</td>
            <td>-150ns</td>
        </tr>
        <tr>
            <td>共模电压</td>
            <td>-12V ~ 12V</td>
        </tr>
        <tr>
            <td>保护功能</td>
            <td>限流, 过压, 主动态超时, 热关断</td>
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
        <tr>
            <td>外壳材料</td>
            <td>PC</td>
        </tr>
     </tbody>
</table>

## EasyLoader

>EasyLoader是一个简洁快速的程序烧录器，其内置了一个产品相关的案例程序，通过简单步骤将其烧录至主控，即可进行一系列的功能验证.**(程序烧录前，请根据设备类型安装相应驱动程序. M5Core型主机[请点击此处查看CP210X驱动安装教程](zh_CN/arduino/arduino_development?id=安装串口驱动)，M5StickC/V/T/ATOM系列可免驱动使用)**

<div class="easyloader-box">
    <div style="background-color:white;">
        <div><img src="https://m5stack.oss-cn-shenzhen.aliyuncs.com/image/easyloader_intro.webp"></div>
        <div class="easyloader-btn">
            <a href="https://m5stack.oss-cn-shenzhen.aliyuncs.com/EasyLoader/Windows/MODULE/EasyLoader_LoRa868_MODULE.exe">Windows</a>
            <a href="https://m5stack.oss-cn-shenzhen.aliyuncs.com/EasyLoader/MacOS/MODULE/EasyLoader_LoRa868_MODULE.dmg">MacOS</a>
        </div>
    </div>
    <div>
        <video id="example_video" controls>
            <source src="https://m5stack.oss-cn-shenzhen.aliyuncs.com/video/Product_example_video/Module/LoRa868.mp4" type="video/mp4">
        </video>
        <div class="easyloader-mask">
        <a>
            <svg id="play-btn" t="1583228776634" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="4152" width="75" height="75"><path d="M512 0C229.216 0 0 229.216 0 512s229.216 512 512 512 512-229.216 512-512S794.784 0 512 0z m0 928C282.24 928 96 741.76 96 512S282.24 96 512 96s416 186.24 416 416-186.24 416-416 416zM384 288l384 224-384 224z" p-id="4153" fill="#007aff"></path></svg></a>
            <p>案例描述:</p>
            <p>该案例中两台设备将互相收发消息在屏幕上进行显示.</p>
        </div>
    </div>
</div>

### 引脚映射

<table>
 <tr><td>M5Core(GROVE A)</td><td>GPIO22</td><td>GPIO21</td><td>5V</td><td>GND</td></tr>
 <tr><td>CAN Unit</td><td>SCL</td><td>SDA</td><td>5V</td><td>GND</td></tr>
</table>

## 原理图

<img src="">


## 相关链接

-  **Datasheet** 

   - [CA-IS3050G](https://m5stack.oss-cn-shenzhen.aliyuncs.com/resource/docs/datasheet/unit/CA-IS3050G.pdf)

## 案例程序

### 1. Arduino IDE

[Click here to download Example]()

<script>

   var purchase_link = '';

   anchor_search(purchase_link);
   scrollFunc();

</script>
