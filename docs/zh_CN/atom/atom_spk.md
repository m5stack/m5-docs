# ATOM SPK

<el-tag effect="plain">SKU:K054</el-talg>

<div class="product_pic"><img src="assets/img/product_pics/atom_base/atom_spk/atom_spk_01.webp"><img src="assets/img/product_pics/atom_base/atom_spk/atom_spk_02.webp"><img src="assets/img/product_pics/atom_base/atom_spk/atom_spk_03.webp"></div>

## 描述

**ATOM SPK** 是一款适配ATOM LITE主控的音频播放器, 内置I2S数字音频接口的功放芯片NS4168，具备自动采样率检测，自适应功能，并能够有效防止音频信号失真。集成TFCard卡槽，便于音频文件的保存与读取。提供3.5mm耳机接口与外部扬声器接口, 用户可通过外接耳机或是扬声器进行音频播放。

?>该模块的部分IO与ATOM Matrix的内置硬件存在冲突,以此ATOM SPK仅适用于ATOM LITE

## 产品特性

- 功放芯片NS4168
- I2S 串行数字音频输入接口
- 支持宽范围采样速率：8kHz~96kHz
- 自动采样率检测，自适应功能
- TFCard卡槽
- 耳机接口
- 扬声器接口

## 包含

- 1x ATOM Lite
- 1x ATOM SPK
- 1x 1W Speaker
- 1x M2内六角扳手
- 1x M2*8杯头机械牙螺丝
- 1x TYPE-C USB Cable(20cm)

## 应用

- 音频播放器
- 蓝牙音响
- WiFi 音响

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
            <td>功放芯片</td>
            <td>NS4168</td>
        </tr>
        <tr>
            <td>功放输出功率</td>
            <td>1W(VDD=3.3V)</td>
        </tr>
        <tr>
            <td>耳机接口</td>
            <td>3.5mm</td>
        </tr>
        <tr>
            <td>扬声器接口</td>
            <td>1.25mm-2P</td>
        </tr>
        <tr>
            <td>扬声器功率</td>
            <td>1W</td>
        </tr>
        <tr>
            <td>净重</td>
            <td>18.6g</td>
        </tr>
        <tr>
            <td>毛重</td>
            <td>37g</td>
        </tr>
        <tr>
            <td>产品尺寸</td>
            <td>24*48*18mm</td>
        </tr>
        <tr>
            <td>包装尺寸</td>
            <td>54*54*20mm</td>
        </tr>
     </tbody>
</table>

<img src="assets/img/product_pics/atom_base/atom_spk/atom_spk_04.webp" width="30%">

## EasyLoader

>EasyLoader是一个简洁快速的程序烧录器，其内置了一个产品相关的案例程序，通过简单步骤将其烧录至主控，即可进行一系列的功能验证。

<div class="easyloader-box">
    <div style="background-color:white;">
        <div><img src="https://m5stack.oss-cn-shenzhen.aliyuncs.com/image/easyloader_intro.webp"></div>
        <div class="easyloader-btn">
            <a href="https://m5stack.oss-cn-shenzhen.aliyuncs.com/EasyLoader/Windows/ATOM_BASE/EasyLoader_Atom_SPK.exe">Windows</a>
        </div>
    </div>
    <div>
        <video id="example_video" controls>
            <source src="https://m5stack.oss-cn-shenzhen.aliyuncs.com/video/Product_example_video/AtomBase/ATOM_SPK_VIDEO.mp4" type="video/mp4">
        </video>
        <div class="easyloader-mask">
        <a>
            <svg id="play-btn" t="1583228776634" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="4152" width="75" height="75"><path d="M512 0C229.216 0 0 229.216 0 512s229.216 512 512 512 512-229.216 512-512S794.784 0 512 0z m0 928C282.24 928 96 741.76 96 512S282.24 96 512 96s416 186.24 416 416-186.24 416-416 416zM384 288l384 224-384 224z" p-id="4153" fill="#007aff"></path></svg></a>
            <p>案例描述:</p>
            <p>按下ATOM中间按钮，播放一小段音频</p>
        </div>
    </div>
</div>

## 相关链接

-  **Datasheet** 
    - [NS4168](https://m5stack.oss-cn-shenzhen.aliyuncs.com/resource/docs/datasheet/core/NS4168_CN_datasheet.pdf)

## 管脚映射

- TFCard

<table>
 <tr><td>ATOM</td><td>G23</td><td>G33</td><td>G19</td></tr>
 <tr><td>TFCard</td><td>SCK</td><td>MISO</td><td>MOSI</td></tr>
</table>

- NS4168

<table>
 <tr><td>ATOM</td><td>G22</td><td>G21</td><td>G25</td></tr>
 <tr><td>NS4168</td><td>BLCK</td><td>LRCLK</td><td>DATA</td></tr>
</table>


## 原理图

>NS4168 为单声道音频功放(在ATOM SPK硬件设计中默认使用右声道)

<img src="assets/img/product_pics/atom_base/atom_spk/atom_spk_sch.webp">

## 案例程序

<el-card class="box-card" style="margin-bottom:20px">
   <div slot="header" class="clearfix">
   <span style="font-size: 22px; font-weight: bold;">Arduino</span>
   <i class="el-icon-s-management" style="float: right;"></i>
   </div>
   <div class="box-card-item">
   <a href='https://github.com/m5stack/M5Atom/tree/master/examples/ATOM_BASE/ATOM_SPK/PlayRawPCM'><el-tag>ATOM SPK Play RawPCM</el-tag></a>
   </div>
   <div class="box-card-item">
   <a href='https://github.com/m5stack/M5Atom/tree/master/examples/ATOM_BASE/ATOM_SPK/PlayMP3FromSD'><el-tag>ATOM SPK Play MP3 From TFCard</el-tag></a>
   </div>
</el-card>

?>使用ATOM SPK播放RawPCM文件或MP3, 案例适用主控: ATOM Lite。

```clike
AtomSPK.h - API

//初始化I2S  param(__rate：I2S采样率)
bool begin(int __rate = 44100);

//播放RawPCM  param(___audioPtr: 音频数据指针， __size：数据长度， freeFlag: 是否释放内存, __ticksToWait: 允许阻塞播放最大时长)
size_t playRAW( const uint8_t* __audioPtr, size_t __size, bool __modal = false, bool freeFlag = true,TickType_t __ticksToWait = portMAX_DELAY );

//播放音调  param(__freq: 频率， __timems：播放市场，__maxval:最大音量, __modal: 是否异步)
size_t playBeep( int __freq = 2000, int __timems = 200,int __maxval = 10000, bool __modal = false );

```

<script>

   var purchase_link = 'https://m5stack.com/products/atom-speaker-kit-ns4168';

   anchor_search(purchase_link);
   scrollFunc();

</script>
