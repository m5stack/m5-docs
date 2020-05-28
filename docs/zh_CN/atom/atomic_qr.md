# ATOMIC QR-CODE READER

<div class="badge badge-pill badge-primary product_sku_tag">SKU:A</div>

<div class="product_pic"><img src="assets/img/product_pics/atom_base/atomic/atomic_qr_01.webp"></div>

## 描述

**ATOMIC QR-CODE READER** 是一款识别读取一维/二维码扫描模组套件，内含M5Atom Lite主机，支持6类二维码和19类一维码，内置照明LED，即使黑暗环境也能轻松识别，绿色LED方便对焦与瞄准，高分辨率CMOS成像有效识别精度达到5mil，同时具备多种识读模式，您可以根据需要调整为自动连续触发或手动触发。模块自带蜂鸣器，在不同状态下有不同的提示音效。此外模块支持数据添加自定义前缀后缀，定义多国键盘、数据编辑等众多功能。您可通过M5Atom Lite将扫描得到的数据以有线或无线的方式发送至接收端进行处理。

## 产品特性

- 兼容Atom Matrix/Atom Lite
- 自带照明与对焦LED
- TTL-232通讯
- 手动、自动扫描模式
- 灯光、声音提醒
- 多种输出格式
- 数据可预编辑和隐藏
- 丰富的自定义指令
- 二维码：QR Code,Mrico QR, Data Matrix, PDF417,Mrico PDF417，Aztec
- 一维码：EAN,UPC,Code 39,Code 93,Code 128,UCC/EAN 128, Codabar，Interleaved 2 of 5, ITF-6,ITF-14,ISBN,ISSN, MSI-Plessey,GS1 Databar,Code 11,Industrial 25，Standard 25,Plessey, Matrix 2 of 5



## 包含

-  1x ATOMIC QR-CODE READER
-  1x M5Atom Lite
-  1x TYPE-C USB Cable（20cm)

## 应用

- 收银扫描
- 条码录入
- 仓库盘点

<img src="assets/img/product_pics/atom_base/atomic/ATOMIC.gif" width = 30%>

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
            <td>EAN,UPC,Code 39,Code 93,Code 128,UCC/EAN 128, Codabar，Interleaved 2 of 5, ITF-6,ITF-14,ISBN,ISSN, MSI-Plessey, GS1 Databar,Code 11,Industrial 25, Standard 25,Plessey, Matrix 2 of 5</td>
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
            <td>TTL-232</td>
        </tr>
        <tr>
            <td>电压电流</td>
            <td>DC 3.3V/170mA，待机10mA</td>
        </tr>
         <tr>
            <td>净重</td>
            <td>g</td>
        </tr>
        <tr>
            <td>毛重</td>
            <td> g</td>
        </tr>
        <tr>
            <td>产品尺寸</td>
            <td>50*24*17mm</td>
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


## 原理图

<img src="assets/img/product_pics/hat/finger_hat/finger_hat_04.webp" width="50%" height="50%">


## 使用说明

扫码模块在出厂时已经进行了配置，如果您需要更改配置，请参照用户手册扫描二维码进行配置，如果您恢复了出厂设置，请务必扫描确认您处于TTL通讯模式下,并且波特率设置正确。


## EasyLoader

<img src="https://m5stack.oss-cn-shenzhen.aliyuncs.com/image/EasyLoader_M5StickC_logo.webp" width="100px" style="margin-top:20px">

<a href="https://m5stack.oss-cn-shenzhen.aliyuncs.com/EasyLoader/HAT/FINGER/EasyLoader_StickC_HAT_FINGER.exe"><button type="button" class="btn btn-primary">点击下载EasyLoader</button></a>

>1.EasyLoader是一个简洁快速的程序烧录器，每一个产品页面里的EasyLoader都提供了一个与产品相关的案例程序，通过简单步骤将其烧录至主控，能够进行一系列的功能验证.**(目前EasyLoader仅适用于Windows操作系统)**

>2.下载软件后，双击运行应用程序，将M5设备通过数据线连接至电脑,选择端口参数，点击 **"Burn"** 即可开始烧录.(**为M5StickC烧录时，请将波特率设置在750000或115200**)

## 案例程序

- **UIFlow**

打开 http://flow.m5stack.com 点击Demo载入UIFlow例程

<img src="assets/img/product_pics/atom_base/atomic_qr/atomic_qr.webp">

- **Arduino**

点击[此处](https://github.com/m5stack/M5-ProductExampleCodes/tree/master/AtomBase/AtomicQR/Arduino/AtomicQR)查看完整示例

## 相关链接

- **[QR模块二维码指令说明](https://m5stack.oss-cn-shenzhen.aliyuncs.com/resource/docs/datasheet/atombase/AtomicQR/AtomicQR_Reader%E7%94%A8%E6%88%B7%E6%89%8B%E5%86%8C.docx)**

## 相关视频

<video class="video_size" controls>
    <source src="https://m5stack.oss-cn-shenzhen.aliyuncs.com/video/Product_example_video/AtomBase/AtomicQR.mp4" type="video/mp4" >
</video>


<script>

   var purchase_link = 'https://m5stack.com/collections/all/products/atomic_qr_kit';


   var quickstart_link = '';

   anchor_search(purchase_link);
   scrollFunc();

</script>

