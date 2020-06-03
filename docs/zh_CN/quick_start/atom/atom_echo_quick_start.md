# ATOM ECHO 快速上手 {docsify-ignore-all}

## 出厂固件烧录

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

## 出厂固件使用方法

接通电源，此时指示灯为红色，打开设备蓝牙，搜索附近设备，名称为M5_SPEAKER_T1的蓝牙设备即为ATOM ECHO。点击连接或配对后，ATOM ECHO会发出蓝牙配对请求，确认配对即可建立蓝牙连接，此时指示灯变为绿色表示连接正常。一旦建立连接成功，ATOM ECHO就可以作为音频播放设备来使用。(目前固件暂不支持作为免提设备接打电话)

由于**G19/G22/G23/G33**被用作I2S，不可作为其他功能引脚复用，否则将产生设备损坏的风险。**G21/G25**仅作为通用I/O引脚使用，无法映射为I2C与UART,如需使用I2C或UART功能，请连接至GROVE端口。该固件在ESP-IDF平台下进行编译，普通用户可直接通过下载EasyLoader进行烧录。高级用户如需自行开发其他功能，可根据乐鑫官方文档进行[ESP-IDF环境搭建](https://docs.espressif.com/projects/esp-idf/zh_CN/latest/esp32/get-started/index.html#id2)，出厂固件源码及BIN文件[点击此处下载](https://github.com/m5stack/M5-ProductExampleCodes/tree/master/Core/Atom/AtomEcho/Factory_BT_SPEAKER_Firmware),其中BIN文件烧录地址为0x0000。

## EchoSTT服务Token获取步骤

EchoSTT是一个语音转文字服务，通过网络将本地语音发送至云服务器，并将识别结果返回至本机。无论您在UIFlow或Arduino中使用该服务都需要通过MAC地址绑定Token，以获得使用权限，具体操作步骤如下:

- [官网](https://m5stack.com/pages/download)下载最新版本M5Burner(2.0.0及以上)

- 将ECHO连接电脑USB端口，选择对应的COM端口，波特率默认选择750000，填写您的WiFi SSID和密码，点击Erase擦除原有固件

- 找到**ATOM**选项，选择EchoSTT点击download下载固件，根据您想识别的语言选择英文固件或中文固件

- 点击burn进行烧录，等待串口监视器出现烧录完成提示

- 点击Get Token获取连接STT服务器所需要的Token，记录此Token，它将在您的后续编程中会用到

<img src="assets/img/product_pics/atom_base/echo/EchoSTT_burner.webp">

## EchoSTT服务的UIFlow案例程序

在运行此示例前确保您已通过上述步骤完成Token的获取

<img src="assets/img/product_pics/atom_base/echo/EchoSTT.webp">

## EchoSTT服务的Arduino案例程序

使用该案例时您需要在rest.settoken("your_token");中填入获取的Token

- [EchoSTT服务](https://github.com/m5stack/M5-ProductExampleCodes/tree/master/Core/Atom/AtomEcho/Arduino/EchoSTT)

## Arduino示例程序

1. 这个示例用于测试LED、麦克风和扬声器是否正常工作，如果在通电同时按下按键，则扬声器会一直播放音乐，否则只播放一次然后进入测试麦克风环节，您可以通过串口监视器查看。

- [FactoryTest](https://github.com/m5stack/M5-ProductExampleCodes/tree/master/Core/Atom/AtomEcho/Arduino/Factory_Test)

2. 这是一个录音与回放的示例，当您按住按键时开始录音，录音时间不多于6秒，松开按键后将播放您录制的内容。

- [Recoder&Replay](https://github.com/m5stack/M5-ProductExampleCodes/tree/master/Core/Atom/AtomEcho/Arduino/Repeater)

3. 这个示例可以通过url播放音乐，由于缓冲区内存较小，因此网络状况不好的情况下会出现持续性的噪声，请合理选择url链接与您的wifi网络。

- [StreamHttpMP3](https://github.com/m5stack/M5-ProductExampleCodes/tree/master/Core/Atom/AtomEcho/Arduino/StreamHttpClient_ECHO)
