# ATOM ECHO 快速上手 {docsify-ignore-all}

## 固件烧录

出厂固件默认配置为蓝牙音箱，用户可将手机、平板电脑、PC等设备与ATOM ECHO进行连接，将音频输出至ATOM ECHO播放。

如需重新烧录固件，根据操作系统下载对应的EasyLoader进行烧录。

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
</div>

## 使用方法

接通电源，此时指示灯为红色，打开设备蓝牙，搜索附近设备，名称为M5_SPEAKER_T1的蓝牙设备即为ATOM ECHO。点击连接或配对后，ATOM ECHO会发出蓝牙配对请求，确认配对即可建立蓝牙连接，此时指示灯变为绿色表示连接正常。一旦建立连接成功，ATOM ECHO就可以作为音频播放设备来使用。(目前固件暂不支持作为免提设备接打电话)

由于**G19/G22/G23/G33**被用作I2S，不可作为其他功能引脚复用，否则将产生设备损坏的风险。**G21/G25**仅作为通用I/O引脚使用，无法映射为I2C与UART,如需使用I2C或UART功能，请连接至GROVE端口。该固件在ESP-IDF平台下进行编译，普通用户可直接通过下载EasyLoader进行烧录。高级用户如需自行开发其他功能，可根据乐鑫官方文档进行[ESP-IDF环境搭建](https://docs.espressif.com/projects/esp-idf/zh_CN/latest/esp32/get-started/index.html#id2)，出厂固件源码及BIN文件[点击此处下载](https://github.com/m5stack/M5-ProductExampleCodes/tree/master/Core/Atom/AtomEcho/Factory_BT_SPEAKER_Firmware),其中BIN文件烧录地址为0x0000。（对于用户自行修改的ESP-IDF源码，M5Stack不做技术支持）

## 案例程序

<script>

   anchor_search();
   scrollFunc();

</script>