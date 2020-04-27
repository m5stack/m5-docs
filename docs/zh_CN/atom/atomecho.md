# ATOM ECHO

<div class="badge badge-pill badge-primary product_sku_tag">SKU:E001</div>

<div class="product_pic"><img src="assets\image.webp"></div>

## 描述

**ATOM ECHO**是一款基于ATOM设计的蓝牙音箱，它的体积非常小巧，只有24*24*17毫米，通过ESP32自带的蓝牙功能与手机、平板等进行连接即可播放音乐。当然，你可以通过编写代码接入AWS、百度等云平台，使用内置麦克风和扬声器进行语音交互，使得ATOM ECHO具备一定的AI能力，实现语音控制、讲故事、物联网等功能。音箱内嵌一颗RGB LED（SK6812)，可以直观的显示连接状态。除了可以作为蓝牙音箱使用外，它依然具备了ATOM系列的控制能力，你可以通过GROVE接口及背部的GPIO连接设备。

## 产品特性

- 基于ESP32,支持A2DP、BLE 4.0
- IEEE 802.11b/g/n
- 内置麦克风与扬声器
- RGB LED状态显示

## 包含

- 1x ATOM ECHO

## 应用

- 蓝牙音箱
- 语音控制

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
            <td>SoC</td>
            <td>ESP-PICO-D4,240MHz,Dual Core,BLE,Wi-Fi</td>
        </tr>
        <tr>
            <td>Flash</td>
            <td>4MB</td>
        </tr>
        <tr>
            <td>Interface</td>
            <td>1x IR-TX,1x Function Button,1x Reset Button</td>
        </tr>
        <tr>
            <td>PinOut</td>
            <td>G21/G25/5V/GND, 3V3/G22/G19/G23/G33</td>
        </tr>
        <tr>
            <td>RGB LED</td>
            <td>SK6812</td>
        </tr>
        <tr>
            <td>SPEAKER</td>
            <td>1W/NS4168 I2S</td>
        </tr>
        <tr>
            <td>MIC</td>
            <td>SPM1423 PDM</td>
        </tr>
        <tr>
            <td>尺寸</td>
            <td>24 x 24 x 17mm</td>
        </tr>
        <tr>
            <td>重量</td>
            <td>10g</td>
        </tr>
        <tr>
            <td>外壳材质</td>
            <td>Plastic ( PC )</td>
        </tr>
     </tbody>
</table>

>? G19/G22/G23/G33已经被定义，请勿将以上引脚复用，否则将导致ATOM ECHO损坏。

## EasyLoader

>EasyLoader是一个简洁快速的程序烧录器，其内置了一个产品相关的案例程序，通过简单步骤将其烧录至主控，即可进行一系列的功能验证.

<div class="easyloader-box">
    <div style="background-color:white;">
        <div><img src="https://m5stack.oss-cn-shenzhen.aliyuncs.com/image/easyloader_intro.webp"></div>
        <div class="easyloader-btn">
            <a href="https://m5stack.oss-cn-shenzhen.aliyuncs.com/EasyLoader/Windows/ATOM_BASE/EasyLoader_ECHO_Bluetooth_Speaker.exe">Windows</a>
            <a href="https://m5stack.oss-cn-shenzhen.aliyuncs.com/EasyLoader/MacOS/ATOM_BASE/EasyLoader_ECHO_Bluetooth_Speaker.dmg">MacOS</a>
            <!-- <a>Linux</a>
            <a>MacOS</a> -->
        </div>
    </div>
    <div>
        <video id="example_video" controls>
            <source src="https://m5stack.oss-cn-shenzhen.aliyuncs.com/video/Product_example_video/.mp4" type="video/mp4">
        </video>
        <div class="easyloader-mask">
        <a>
            <svg id="play-btn" t="1583228776634" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="4152" width="75" height="75"><path d="M512 0C229.216 0 0 229.216 0 512s229.216 512 512 512 512-229.216 512-512S794.784 0 512 0z m0 928C282.24 928 96 741.76 96 512S282.24 96 512 96s416 186.24 416 416-186.24 416-416 416zM384 288l384 224-384 224z" p-id="4153" fill="#007aff"></path></svg></a>
            <p>案例描述:</p>
            <p>作为蓝牙音箱使用，连接后LED变绿色，打开手机播放音乐</p>
        </div>
    </div>
</div>

## 相关链接

-  **Datasheet**
    - [SPM1423](https://m5stack.oss-cn-shenzhen.aliyuncs.com/resource/docs/datasheet/core/SPM1423HM4H-B_datasheet_en.pdf)
    - [ESP32-PICO-D4](https://m5stack.oss-cn-shenzhen.aliyuncs.com/resource/docs/datasheet/core/esp32-pico-d4_datasheet_en.pdf)

### 管脚映射

<table>
 <tr><td>DataOut</td><td>BCLK</td><td>DataIn</td><td>LRCK</td><td>RGB</td><td>Btn</td></tr>
 <tr><td>G22</td><td>G19</td><td>G23</td><td>G33</td><td>G27</td><td>G39</td></tr>
</table>

## 原理图

<img src="assets/img/product_pics/.webp">


## 使用方法

出厂默认固件为蓝牙音箱，采用A2DP协议传输音频数据。通电后显示红色LED，当与蓝牙设备建立连接后LED变为绿色，此时可以将声音通过ATOM ECHO进行输出。断开连接后LED变回红色。该固件在ESP-IDF平台下进行编译，高级用户如需自行开发其他功能，可根据乐鑫官方文档进行环境搭建，出厂固件源码及BIN文件见以下链接,其中BIN文件烧录地址位0x0000。（对于用户自行修改的ESP-IDF源码，M5Stack不做技术支持）

[ECHO_Bluetooth_Speaker]https://github.com/m5stack/M5-ProductExampleCodes/tree/master/Core/Atom/AtomEcho

## 案例程序

### 1. Arduino

[点击此处](https://)获取完整代码

## 相关视频

**Demo**

<video class="video_size" controls>
    <source src="https://m5stack.oss-cn-shenzhen.aliyuncs.com/video/Product_example_video/.mp4" type="video/mp4" >
</video>



<script>

   var purchase_link = 'https://m5stack.com/products/';
   anchor_search(purchase_link);
   scrollFunc();

</script>


