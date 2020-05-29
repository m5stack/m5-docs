# ATOM QR-CODE

<div class="badge badge-pill badge-primary product_sku_tag">SKU:K041</div>

<div class="product_pic"><img src="assets/img/product_pics/atom_base/atom_qr/atomic_qr_01.webp"></div>

## 描述

**ATOM QR-CODE** 是一款识别读取一维/二维码扫描模组套件，内含M5Atom Lite主机，支持6类二维码和19类一维码，内置照明LED，即使黑暗环境也能轻松识别，绿色LED方便对焦与瞄准，高分辨率CMOS成像有效识别精度达到5mil，同时具备多种识读模式，您可以根据需要调整为自动连续触发或手动触发。模块自带蜂鸣器，在不同状态下有不同的提示音效。此外模块支持数据添加自定义前缀后缀，定义多国键盘、数据编辑等众多功能。该模块采用TTL-232进行通讯，可以方便的使用串口进行数据传输，无论使用Arduino还是UIFlow编程都能轻松上手，您可通过M5Atom Lite内置的ESP32将扫描得到的数据以有线或无线的方式发送至接收端进行处理。

## 产品特性

- 基于ESP32,支持蓝牙、WIFI
- 兼容Atom Matrix/Atom Lite
- 支持Arduino、UIFlow、Micropython
- 自带照明与对焦LED
- UART/TTL通讯
- 手动、自动扫描模式
- 灯光、声音提醒
- 多种输出格式
- 数据可预编辑和隐藏
- 丰富的自定义指令
- 支持原始数据/GBK/Unicode编码方式
- 二维码：QR Code,Mrico QR, Data Matrix, PDF417,Mrico PDF417，Aztec
- 一维码：EAN,UPC,Code 39,Code 93,Code 128,UCC/EAN 128, Codabar，Interleaved 2 of 5, ITF-6,ITF-14,ISBN,ISSN, MSI-Plessey,GS1 Databar,Code 11,Industrial 25，Standard 25,Plessey, Matrix 2 of 5



## 包含

-  1x ATOMIC QR-CODE
-  1x M5Atom Lite
-  1x M2内六角扳手
-  1x M2*8杯头机械牙螺丝
-  1x TYPE-C USB Cable（20cm)

## 应用

- 收银扫描
- 条码录入
- 仓库盘点


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
            <td>传感器</td>
            <td>640x480 CMOS</td>
        </tr>
        <tr>
            <td>照明</td>
            <td>白光LED</td>
        </tr>
        <tr>
            <td>对焦瞄准</td>
            <td>绿光LED</td>
        </tr>
        <tr>
            <td>识读二维码类型</td>
            <td>QR Code,Mrico QR, Data Matrix, PDF417,Mrico PDF417，Aztec</td>
        </tr>
        <tr>
            <td>识读一维码类型</td>
            <td>EAN,UPC,Code 39,Code 93,Code 128,UCC/EAN 128, Codabar，Interleaved 2 of 5, ITF-6,ITF-14,ISBN,ISSN, MSI-Plessey, GS1 Databar,Code 11,Industrial 25, Standard 2 of 5,Plessey, Matrix 2 of 5</td>
        </tr>
        <tr>
            <td>识别读取精度</td>
            <td>≥5mil</td>
        </tr>
        <tr>
            <td>精神范围</td>
            <td>EAN-13: 50-200mm(13mil), Code39: 40-90mm(5mil 10字节), QR Code: 25-240mm(20mil 16字节), Data Matrix: 50-90mm(10mil 20字节), PDF 417: 30-130mm(6.67mil 7字节)</td>
        </tr>
        <tr>
            <td>对比度</td>
            <td>≥25%</td>
        </tr>
        <tr>
            <td>扫描角度</td>
            <td>转角360°， 仰角±55°， 偏角±55°</td>
        </tr>
        <tr>
            <td>视场角</td>
            <td>水平34°，垂直28°</td>
        </tr>
        <tr>
            <td>通讯接口</td>
            <td>UART/TTL</td>
        </tr>
        <tr>
            <td>电压电流</td>
            <td>DC 3.3V/170mA，待机10mA</td>
        </tr>
         <tr>
            <td>净重</td>
            <td>17g</td>
        </tr>
        <tr>
            <td>毛重</td>
            <td>37g</td>
        </tr>
        <tr>
            <td>产品尺寸</td>
            <td>48*24*18mm</td>
        </tr>
        <tr>
            <td>包装尺寸</td>
            <td>55*55*20mm</td>
        </tr>
        <tr>
            <td>外壳材质</td>
            <td>Plastic ( PC )</td>
        </tr>
     </tbody>
</table>

### 管脚映射

<table>
 <tr><td>M5Atom</td><td>GPIO23</td><td>GPIO33</td><td>3.3V</td><td>GND</td></tr>
 <tr><td>QR-CODE READER</td><td>TRIG</td><td>DLED</td><td>3.3V</td><td>GND</td></tr>
</table>


## 使用说明

扫码模块在出厂时已经进行了配置，M5Atom Lite未内置程序，您需要在M5Atom Lite中烧录以下示例程序。如果您需要更改配置，请参照用户手册扫描二维码进行配置，如果您恢复了出厂设置，请务必扫描确认您处于TTL通讯模式下,并且波特率设置正确。部分一维码和二维码的识读需要扫描二维码配置使能。

## EasyLoader

>EasyLoader是一个简洁快速的程序烧录器，其内置了一个产品相关的案例程序，通过简单步骤将其烧录至主控，即可进行一系列的功能验证。

<div class="easyloader-box">
    <div style="background-color:white;">
        <div><img src="https://m5stack.oss-cn-shenzhen.aliyuncs.com/image/easyloader_intro.webp"></div>
        <div class="easyloader-btn">
            <a href="https://m5stack.oss-cn-shenzhen.aliyuncs.com/EasyLoader/Windows/ATOM_BASE/EasyLoader_QRCODE_ATOM_BASE.exe">Windows</a>
            <a href="https://m5stack.oss-cn-shenzhen.aliyuncs.com/EasyLoader/MacOS/ATOM_BASE/EasyLoader_QRCODE_ATOM_BASE.dmg">MacOS</a>
            <!-- <a>Linux</a>
            <a>MacOS</a> -->
        </div>
    </div>
    <div>
        <video id="example_video" controls>
            <source src="https://m5stack.oss-cn-shenzhen.aliyuncs.com/video/Product_example_video/AtomBase/Atomic_QR.mp4" type="video/mp4">
        </video>
        <div class="easyloader-mask">
        <a>
            <svg id="play-btn" t="1583228776634" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="4152" width="75" height="75"><path d="M512 0C229.216 0 0 229.216 0 512s229.216 512 512 512 512-229.216 512-512S794.784 0 512 0z m0 928C282.24 928 96 741.76 96 512S282.24 96 512 96s416 186.24 416 416-186.24 416-416 416zM384 288l384 224-384 224z" p-id="4153" fill="#007aff"></path></svg></a>
            <p>案例描述:</p>
            <p>按下按键开始扫描，串口打印扫描信息</p>
        </div>
    </div>
</div>

## 扫描值-键盘值

<img src="assets/img/product_pics/atom_base/atom_qr/atomic_qr_encode.webp" width = "50%">

## 案例程序

- **UIFlow** 

点击 [此处](https://github.com/m5stack/M5-ProductExampleCodes/tree/master/AtomBase/AtomicQR/UIFlow) 查看完整示例。

<img src="assets/img/product_pics/atom_base/atom_qr/atomic_qr_uiflow.webp" width = "50%">

- **Arduino**

点击 [此处](https://github.com/m5stack/M5-ProductExampleCodes/tree/master/AtomBase/AtomicQR/AtomicQR) 查看完整示例。

## 相关链接

- **[用户手册QR模块二维码指令说明](https://m5stack.oss-cn-shenzhen.aliyuncs.com/resource/docs/datasheet/atombase/AtomicQR/AtomicQR_Reader%E7%94%A8%E6%88%B7%E6%89%8B%E5%86%8C.docx)**

## 相关视频

<video class="video_size" controls>
    <source src="https://m5stack.oss-cn-shenzhen.aliyuncs.com/video/Product_example_video/AtomBase/Atomic_QR.mp4" type="video/mp4" >
</video>


<script>

   var purchase_link = 'https://m5stack.com/collections/all/products/atomic_qr_kit';


   var quickstart_link = '';

   anchor_search(purchase_link);
   scrollFunc();

</script>

