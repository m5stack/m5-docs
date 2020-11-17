# ATOM ECHO 快速上手 {docsify-ignore-all}

## 蓝牙音箱

ECHO的出厂固件默认配置为蓝牙音箱，用户可将手机、平板电脑、PC等设备与ATOM ECHO进行连接，将音频输出至ATOM ECHO播放。

### 固件烧录

?>如需重新烧录出厂固件，根据操作系统下载对应的EasyLoader进行烧录。

<div class="files_download">
   <p class="item">
      <a href="https://m5stack.oss-cn-shenzhen.aliyuncs.com/EasyLoader/Windows/ATOM_BASE/EasyLoader_ECHO_Bluetooth_Speaker.exe">
      <img src="/image/base/Windows_logo.webp" width="50">
      <span class="item-title">Windows10</span>
      </a>
   </p>
   <p class="item">
      <a href="https://m5stack.oss-cn-shenzhen.aliyuncs.com/EasyLoader/MacOS/ATOM_BASE/EasyLoader_ECHO_Bluetooth_Speaker.dmg">
      <img src="/image/base/MacOS_logo.webp" width="50"> 
      <span class="item-title">MacOS</span>
      </a>
   </p>
</div>

### 蓝牙音箱使用方法

接通电源，此时指示灯为红色，打开设备蓝牙，搜索附近设备，名称为M5_SPEAKER_T1的蓝牙设备即为ATOM ECHO。点击连接或配对后，ATOM ECHO会发出蓝牙配对请求，确认配对即可建立蓝牙连接，此时指示灯变为绿色表示连接正常。一旦建立连接成功，ATOM ECHO就可以作为音频播放设备来使用。(目前固件暂不支持作为免提设备接打电话)

<img src="assets\img\quick_start\echo\echo_bluetooth.webp" width="300px">


由于**G19/G22/G23/G33**被用作I2S，不可作为其他功能引脚复用，否则将产生设备损坏的风险。该固件在ESP-IDF平台下进行编译，普通用户可直接通过下载EasyLoader进行烧录。高级用户如需自行开发其他功能，可根据乐鑫官方文档进行[ESP-IDF环境搭建](https://docs.espressif.com/projects/esp-idf/zh_CN/latest/esp32/get-started/index.html#id2)，出厂固件源码及BIN文件[点击此处下载](https://github.com/m5stack/M5-ProductExampleCodes/tree/master/Core/Atom/AtomEcho/Factory_BT_SPEAKER_Firmware),其中BIN文件烧录地址为0x0000。

## EchoSTT

EchoSTT是一个语音转文字服务，通过网络将本地语音发送至云服务器，并将识别结果返回至本机或是其他M5设备。无论您在UIFlow或Arduino中使用该服务都需要通过MAC地址绑定Token，以获得使用权限，具体操作步骤如下:

### 固件&Token

#### 烧录固件

>请根据您所使用的操作系统，点击下方按钮下载相应的M5Burner固件烧录工具.解压打开应用程序。

<div class="files_download">
   <p class="item">
      <a href="https://m5stack.oss-cn-shenzhen.aliyuncs.com/resource/software/M5Burner.zip">
      <img src="/image/base/Windows_logo.webp" width="50">
      <span class="item-title">Windows10</span>
      </a>
   </p>

   <p class="item">
      <a href="https://m5stack.oss-cn-shenzhen.aliyuncs.com/resource/software/M5Burner_MacOS.zip">
      <img src="/image/base/MacOS_logo.webp" width="50"> 
      <span class="item-title">MacOS</span>
      </a>
   </p>

   <p class="item">
      <a href="https://m5stack.oss-cn-shenzhen.aliyuncs.com/resource/software/M5Burner_Linux.zip">
      <img src="/image/base/Linux_logo.webp" width="50"> 
      <span class="item-title">Linux</span>
      </a>
   </p>
</div>

<img src="assets/img/getting_started_pics/how_to_burn_firmware/M5Burner/M5Burner_01.webp">

?>注意：MacOS用户安装完成后请将应用放入Application文件夹内，如下图所示。

><img src="/image/base/application.webp" width="70%"> 

?>注意：Linux用户请切换至解压文件路径下，在终端中运行`./M5Burner`, 运行应用。

#### 获取Token

- 找到**ATOM**选项，选择EchoSTT点击download下载固件，根据您想识别的语言选择英文固件或中文固件

- 将ECHO连接电脑USB端口，选择对应的COM端口，

- 点击burn进行烧录，等待串口监视器出现烧录完成提示

- 点击Get Token获取连接STT服务器所需要的Token，记录此Token，它将在您的后续编程中会用到

<img src="assets/img/product_pics/atom_base/echo/EchoSTT_burner.webp" width = "50%">

#### EchoSTT服务的UIFlow案例程序

在运行此示例前确保您已通过上述步骤完成Token的获取

<img src="assets/img/product_pics/atom_base/echo/EchoSTT.webp" width = "50%">

### EchoSTT服务的Arduino案例程序

**指示灯说明**

1.开机后红色状态灯表示网络未连接

2.开机后绿色状态灯表示已连接网络

3.按下按键状态灯变为黄色

4.识别结果识别状态灯为红色

5.识别结果成功状态灯为绿色

使用该案例时您需要通过M5Burner点击获取Token，在示例中填入SSID和WIFI密码，找到rest.settoken("your_token");在其中填入获取的Token

- [EchoSTT服务](https://github.com/m5stack/M5-ProductExampleCodes/tree/master/Core/Atom/AtomEcho/Arduino/EchoSTT)

### Arduino示例程序

1. 这个示例用于测试LED、麦克风和扬声器是否正常工作，如果在通电同时按下按键，则扬声器会一直播放音乐，否则只播放一次然后进入测试麦克风环节，您可以通过串口监视器查看。

    - [FactoryTest](https://github.com/m5stack/M5-ProductExampleCodes/tree/master/Core/Atom/AtomEcho/Arduino/Factory_Test)

2. 这是一个录音与回放的示例，当您按住按键时开始录音，录音时间不多于6秒，松开按键后将播放您录制的内容。

    - [Recoder&Replay](https://github.com/m5stack/M5-ProductExampleCodes/tree/master/Core/Atom/AtomEcho/Arduino/Repeater)

3. 这个示例可以通过url播放音乐，由于缓冲区内存较小，因此网络状况不好的情况下会出现持续性的噪声，请合理选择url链接与您的wifi网络。

    - [StreamHttpMP3](https://github.com/m5stack/M5-ProductExampleCodes/tree/master/Core/Atom/AtomEcho/Arduino/StreamHttpClient_ECHO)


<script>

   anchor_search();
   scrollFunc();

</script>