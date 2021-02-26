# ATOM SPK

<el-tag effect="plain">SKU:K054</el-talg>

<div class="product_pic"><img src="assets/img/product_pics/atom_base/atom_spk/atom_spk_01.webp"><img src="assets/img/product_pics/atom_base/atom_spk/atom_spk_02.webp"><img src="assets/img/product_pics/atom_base/atom_spk/atom_spk_03.webp"></div>

## Description

**ATOM SPK** is an audio player that adapts to the ATOM master control, with built-in I2S digital audio interface power amplifier chip NS4168, with automatic sampling rate detection, adaptive functions, and can effectively prevent audio signal distortion. Integrated TFCard card slot is convenient for saving and reading audio files. Provide 3.5mm headphone jack and external speaker interface, users can play audio through external headphones or speakers.

?>ATOM SPK Some IO conflict with ATOM Matrix's built-in hardware, so ATOM SPK is only applicable to ATOM LITE

## Product Features

- Power amplifier chip NS4168
- I2S serial digital audio input interface
- Support a wide range of sampling rates: 8kHz~96kHz
- Automatic sampling rate detection, adaptive function
- TFCard slot
- Headphone jack
- Speaker interface

## Contains

- 1x ATOM Lite
- 1x ATOM SPK
- 1x 1W Speaker
- 1x M2 Allen key
- 1x M2*8 cup head machine screw
- 1x TYPE-C USB Cable(20cm)

## Application

- Audio player
- Bluetooth audio
- WiFi speaker

## Specifications

<table class="table-1">
    <thead>
    <tr>
        <th>Specifications</th>
        <th>Parameters</th>
    </tr>
    </thead>
    <tbody>
        <tr>
            <td>Power amplifier chip</td>
            <td>NS4168</td>
        </tr>
        <tr>
            <td>Amplifier output power</td>
            <td>1W(VDD=3.3V)</td>
        </tr>
        <tr>
            <td>Headphone jack</td>
            <td>3.5mm</td>
        </tr>
        <tr>
            <td>Speaker interface</td>
            <td>1.25mm-2P</td>
        </tr>
        <tr>
            <td>Speaker power</td>
            <td>1W</td>
        </tr>
        <tr>
            <td>Net weight</td>
            <td>18.6g</td>
        </tr>
        <tr>
            <td>Gross weight</td>
            <td>37g</td>
        </tr>
        <tr>
            <td>Product size</td>
            <td>24*48*18mm</td>
        </tr>
        <tr>
            <td>Package size</td>
            <td>54*54*20mm</td>
        </tr>
     </tbody>
</table>

<img src="assets/img/product_pics/atom_base/atom_spk/atom_spk_04.webp" width="30%">

## EasyLoader

>EasyLoader is a simple and fast program burner, which has a built-in product-related case program, which can be burned to the main control through simple steps to perform a series of functional verification.

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
            <p>Description:</p>
            <p>Press the middle button of ATOM to play a short audio.</p>
        </div>
    </div>
</div>


## Related Links

- **Datasheet**
    - [NS4168](https://m5stack.oss-cn-shenzhen.aliyuncs.com/resource/docs/datasheet/core/NS4168_CN_datasheet.pdf)

## Pin mapping

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


## Schematic

>NS4168 is a mono audio power amplifier(the right channel is used by default in the ATOM SPK hardware design)

<img src="assets/img/product_pics/atom_base/atom_spk/atom_spk_sch.webp">

## Example

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

?>Use ATOM SPK to play RawPCM files or MP3, the case is suitable for master: ATOM Lite.

```clike
AtomSPK.h - API

//Init I2S  param(__rate: I2S sampling rate)
bool begin(int __rate = 44100);

//Play RawPCM param(___audioPtr: audio data pointer, __size: data length, freeFlag: whether to release the memory, __ticksToWait: allow the maximum duration of blocked playback)
size_t playRAW( const uint8_t* __audioPtr, size_t __size, bool __modal = false, bool freeFlag = true,TickType_t __ticksToWait = portMAX_DELAY );

//play Beep param(__freq: frequency, __timems: play market, __maxval: maximum volume, __modal: asynchronous or not)
size_t playBeep( int __freq = 2000, int __timems = 200, int __maxval = 10000, bool __modal = false );

```

<script>

   var purchase_link = 'https://m5stack.com/products/atom-speaker-kit-ns4168';

   anchor_search(purchase_link);
   scrollFunc();

</script>
