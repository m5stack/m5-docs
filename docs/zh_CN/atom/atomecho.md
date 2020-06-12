# ATOM ECHO

<div class="badge badge-pill badge-primary product_sku_tag">SKU:C008-C</div>

<div class="product_pic"><img src="assets/img/product_pics/atom_base/echo/Echo.webp"></div>

## 描述

**ATOM ECHO**是一款基于ATOM设计的可编程智能音箱，它的体积非常小巧，只有24*24*17毫米，通过ESP32自带的蓝牙功能与手机、平板等进行连接即可播放音乐，也可以通过WIFI播放指定的流媒体音乐。为了方便用户使用语音功能，我们在ATOM ECHO内集成了STT(语音转文字)服务，您可以通过烧录指定固件开启该功能，通过语音下达指令完成多样化的操作。当然，您还可以通过自行编写代码接入AWS、GOOGLE等云平台，使用内置麦克风和扬声器进行语音交互，使得ATOM ECHO具备一定的AI能力，实现语音控制、智能对话、物联网等功能。音箱内嵌一颗RGB LED（SK6812)，可以直观的显示连接状态。除了可以作为智能音箱使用外，它依然具备了ATOM系列的控制能力，你可以通过GROVE接口连接外部设备，G21/G25仅能用于通用IO，不支持UART与I2C。其背面有一个M2螺丝孔，方便用户进行固定。

?> **注意：为了防止人为损坏ATOM echo，请在使用时避免以下操作。**
- 使用I2S通道输出DC信号
- 长时间播放白噪音
- 不要播放全幅方波音频

<img src="assets\img\product_pics\atom_base\echo\echo_attention.webp" width = "50%">

## 产品特性

- 轻便小巧
- 支持STT服务
- 基于ESP32,支持A2DP、BLE 4.0
- WIFI协议 IEEE 802.11b/g/n
- 内置麦克风与扬声器
- RGB LED状态显示
- GROVE扩展接口
- 录音与声音回放
- 独立可编程按键
- 编程平台:Arduino、ESP-IDF/ADF

## 包含

- 1x ATOM ECHO

## 应用

- 蓝牙音箱
- 语音控制
- 物联网

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
            <td>0.5W/NS4168 I2S</td>
        </tr>
        <tr>
            <td>MIC</td>
            <td>SPM1423 PDM</td>
        </tr>
        <tr>
            <td>净重</td>
            <td>5g</td>
        </tr>
        <tr>
            <td>毛重</td>
            <td>10g</td>
        </tr>
        <tr>
            <td>产品尺寸</td>
            <td>24*24*17mm</td>
        </tr>
        <tr>
            <td>包装尺寸</td>
            <td>63*63*12mm</td>
        </tr>
        <tr>
            <td>外壳材质</td>
            <td>Plastic ( PC )</td>
        </tr>
     </tbody>
</table>

> G19/G22/G23/G33已经被定义，请勿将以上引脚复用，否则将导致ATOM ECHO损坏。

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
            <source src="https://m5stack.oss-cn-shenzhen.aliyuncs.com/video/Product_example_video/Core/AtomEcho.mp4" type="video/mp4">
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
    - [NS4168](https://m5stack.oss-cn-shenzhen.aliyuncs.com/resource/docs/datasheet/core/NS4168_CN_datasheet.pdf)

### 管脚映射

<table>
 <tr><td>DataOut</td><td>BCLK</td><td>DataIn</td><td>LRCK</td><td>RGB</td><td>Btn</td></tr>
 <tr><td>G22</td><td>G19</td><td>G23</td><td>G33</td><td>G27</td><td>G39</td></tr>
</table>

## 原理图

<img src="assets/img/product_pics/atom_base/echo/echo_sch.webp" width = "40%">


## 使用方法

出厂默认固件为蓝牙音箱，采用A2DP协议传输音频数据（暂不支持接打电话）。通电后显示红色LED，当与蓝牙设备建立连接后LED变为绿色，此时可以将声音通过ATOM ECHO进行输出。断开连接后LED变回红色。该固件在ESP-IDF平台下进行编译，普通用户可直接通过下载EasyLoader进行烧录。高级用户如需自行开发其他功能，可根据乐鑫官方文档进行ESP-IDF环境搭建，出厂固件源码及BIN文件见以下链接,其中BIN文件烧录地址为0x0000。

[ECHO_Bluetooth_Speaker](https://github.com/m5stack/M5-ProductExampleCodes/tree/master/Core/Atom/AtomEcho/Factory_BT_SPEAKER_Firmware)

## 案例程序

### 1. Arduino

- [测试程序](https://github.com/m5stack/M5-ProductExampleCodes/tree/master/Core/Atom/AtomEcho/Arduino/Factory_Test)

- [录音回放](https://github.com/m5stack/M5-ProductExampleCodes/tree/master/Core/Atom/AtomEcho/Arduino/Repeater)

- [流媒体播放](https://github.com/m5stack/M5-ProductExampleCodes/tree/master/Core/Atom/AtomEcho/Arduino/StreamHttpClient_ECHO)

- [EchoSTT服务](https://github.com/m5stack/M5-ProductExampleCodes/tree/master/Core/Atom/AtomEcho/Arduino/EchoSTT)

## 相关视频

**以下视频为案例演示**

<video class="video_size" controls>
    <source src="https://m5stack.oss-cn-shenzhen.aliyuncs.com/video/Product_example_video/Core/ATOM_ECHO.mp4" type="video/mp4" >
</video>



<script>

   var purchase_link = 'https://m5stack.com/collections/m5-atom/products/atom-echo-esp32-development-kit';
   var quickstart_link = 'https://docs.m5stack.com/#/zh_CN/quick_start/atom/atom_echo_quick_start';

   anchor_search(purchase_link, quickstart_link);
   scrollFunc();

</script>
