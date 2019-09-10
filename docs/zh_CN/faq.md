# 常见问题解答 {docsify-ignore-all}

**[M5CORE](#M5CORE-Question)**&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;**[UNIT](#UNIT-Question)**

<!-- **[主控](#主控)**&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;**[模块](#模块)**&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;**[底座](#底座)**&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;**[单元](#单元)** -->


## M5CORE 相关问题

- **Q1: 不同的M5主机之间有什么区别？**

<div class="container">
  <button type="button" class="btn btn-primary" data-toggle="collapse" data-target="#Q1">查看解答</button>
  <div id="Q1" class="collapse">
    这些主控主要区别在内部硬件配置和套件搭配上，从基础版到升级版，分别是增加了姿态传感器 MPU9250和加大了 RAM 和 FLASH，具体区别请访问<a href="https://github.com/m5stack/M5-Schematic/blob/master/Core/hardware_difference_between_cores_zh_CN.md">这里</a>

<img src="https://m5stack.oss-cn-shenzhen.aliyuncs.com/image/m5-docs_table/core_comparison/core_main_comparison_04_zh_CN.png">

<img src="https://m5stack.oss-cn-shenzhen.aliyuncs.com/image/m5-docs_table/core_comparison/core_main_comparison_05_zh_CN.png">
  </div>
</div>


- **Q2: 如何关闭 M5Core 的喇叭功能？**

<div class="container">
  <button type="button" class="btn btn-primary" data-toggle="collapse" data-target="#Q2">查看解答</button>
  <div id="Q2" class="collapse">
    在 Arduino 程序的 Setup(){} 中执行以下语句

    ```arduino
    dacWrite(M5STACKFIRE_SPEAKER_PIN, 0);
    ```
  </div>
</div>

- **Q3: 有些模块与 M5Core 堆叠之后不能下载程序，比如 USB 模块与 M5Core 堆叠**

<div class="container">
  <button type="button" class="btn btn-primary" data-toggle="collapse" data-target="#Q3">查看解答</button>
  <div id="Q3" class="collapse">
    可能是堆叠之后，M5-Bus 总线上的引脚 GPIO0 与 M5Core 接触不太好。这种情况下，在下载程序的时候，GPIO0 理应会一直保持低电平的，可是因为接触不好，GPIO0 不能一直保持低电平，所以下载失败。

    解决方案：在下载过程中，手动让 GPIO0 连接 GND，保证足够长时间拉低。
  </div>
</div>


- **Q4: M5GO 底座堆叠了 M5Core 之后，M5Core 不能开机，可是测试了底座电池满电。**

<div class="container">
  <button type="button" class="btn btn-primary" data-toggle="collapse" data-target="#Q4">查看解答</button>
  <div id="Q4" class="collapse">
    可能是堆叠之后，底座上的 M5-Bus 总线上的左下角的引脚 BATTERY 与 M5Core 接触不太好，这是生产时焊接位置偏了导致的。总线排针焊接位置稍微偏了一些之后，容易出现 BATTERY 引脚与 M5Core 接触不好。

    解决方案：重新焊接 M5-Bus 总线排针，排针位置必须严格与焊盘位置吻合。
  </div>
</div>

- **Q5: 有的电脑虽然连接上了主控，可是仍然无法使用 Arduino IDE、ESPFlashDownloadTool 或 M5Burner 来烧录程序。例如下图使用 Arduino IDE 的时候的情况。**

<div class="container">
  <button type="button" class="btn btn-primary" data-toggle="collapse" data-target="#Q5">查看解答</button>
  <div id="Q5" class="collapse">
<img src="assets/img/faq/faq_03.png">

原因和解决方案：可能是因为这些串口的供电电流不够大，需要在主控中的 RST 引脚和 GND 引脚之间接入电容 ( 电容值是比0.1uF大的 )，或者在下载程序的时候，将 GPIO 0 连接到 GND，使得 GPIO 0 能持续足够的低电平。

<img src="assets/img/faq/faq_05.png" width="80%" height="80%">

<img src="assets/img/faq/faq_06.png" width="80%" height="80%">

<img src="assets/img/faq/faq_07.png" width="100%" height="100%">
  </div>
</div>

- **Q6: ESP32 有哪些特殊的 GPIO 管脚需要注意？**

<div class="container">
  <button type="button" class="btn btn-primary" data-toggle="collapse" data-target="#Q6">查看解答</button>
  <div id="Q6" class="collapse">
    ESP32 有 34 个 GPIO 管脚，其中 GPIO 34-39 仅用作输入，不能作为输出，其他的既可以作为输入又可以作为输出管脚。
  </div>
</div>


- **Q7: 为什么带 MPU9250 的 Stick 烧录了出厂固件之后，按按键 A，结果显示 "No"，即 "不存在9250"。**

<div class="container">
  <button type="button" class="btn btn-primary" data-toggle="collapse" data-target="#Q7">查看解答</button>
  <div id="Q7" class="collapse">
    重启这个 Stick，就可以显示。因为读取 MPU9250 的代码放置在出厂程序的 setup() 函数中，开机只执行一次，所以重启，让 Stick 再检测一次 MPU9250。
  </div>
</div>

- **Q8: 烧录FACES Kit 出厂程序后，屏幕上显示如下的错误**

<div class="container">
  <button type="button" class="btn btn-primary" data-toggle="collapse" data-target="#Q8">查看解答</button>
  <div id="Q8" class="collapse">
    <img src="assets/img/faq/faq_08_01.png" width="100%" height="100%">
    这是正常现象，因为程序里面有没main.py文件，所以才有这个警告。    
  </div>
</div>

- **Q9: M5stickC 无法开机.**

<div class="container">
  <button type="button" class="btn btn-primary" data-toggle="collapse" data-target="#Q9">查看解答</button>
  <div id="Q9" class="collapse">
    <img src="assets/img/faq/m5stickc_05.jpg" width="50%" height="50%">

  M5StickC存在一个问题，即电池处于低电量情况下，容易发生无法开机的现象。

  以下操作能够使设备恢复正常：1，将G0短接到3V3。 2.插入USB线。 3，屏幕亮起后停止短接，USB继续为设备充电。 
  </div>
</div>


- **Q10: M5stickC 无法识别端口(COM)**

<div class="container">
  <button type="button" class="btn btn-primary" data-toggle="collapse" data-target="#Q10">查看解答</button>
  <div id="Q10" class="collapse">

  M5StickC仅支持WIN10&Linux&MAC免驱，其余操作系统则需要用户自行安装驱动程序。

  安装步骤：1，点击下方链接，下载驱动安装包. 2.连接设备，并打开电脑设备管理器端口选项。 3，右键点击未能识别的设备，进行手动更新。

  <a href="https://www.ftdichip.com/Drivers/VCP.htm">驱动下载连接</a>
  </div>
</div>

- **Q11: M5StickC 烧录UIFlow完成 没有显示**

<div class="container">
  <button type="button" class="btn btn-primary" data-toggle="collapse" data-target="#U-Q11">查看解答</button>
  <div id="U-Q11" class="collapse">
    M5StickC默认刷新完固件后不会自动复位，需要手动按左侧开机键。
  </div>
</div>

- **Q12: UIFlow显示已经上传或者下载成功，但是并没有看到程序有所改变**

<div class="container">
  <button type="button" class="btn btn-primary" data-toggle="collapse" data-target="#U-Q12">查看解答</button>
  <div id="U-Q12" class="collapse">
    可能是网络与服务器连接不稳定导致的，建议重启M5Stack，多刷新几次硬件连接状态再执行上传下载操作。
  </div>
</div>

- **Q13: M5StickC 和 M5StickC+ 有什么区别**

<div class="container">
  <button type="button" class="btn btn-primary" data-toggle="collapse" data-target="#U-Q13">查看解答</button>
  <div id="U-Q13" class="collapse">
    M5StickC与M5StickC+在硬件配置上完全一致，只是M5StickC+增加了几个HAT，比单独购买合算一些。
  </div>
</div>

- **Q14: M5StickV 加载不了SD卡**

<div class="container">
  <button type="button" class="btn btn-primary" data-toggle="collapse" data-target="#U-Q14">查看解答</button>
  <div id="U-Q14" class="collapse">
    首先要确认SD卡的格式是否为FAT32，不可以存在分区，一些大容量SD卡通常被格式化为NTFS类型，对SD卡的兼容度做了以下测试。

  <a href="https://docs.m5stack.com/#/zh_CN/core/m5stickv">SD卡兼容性列表</a>
  </div>
</div>

- **Q15: 向V-Training发送照片但是接收的邮件并未包含模型文件**

<div class="container">
  <button type="button" class="btn btn-primary" data-toggle="collapse" data-target="#U-Q15">查看解答</button>
  <div id="U-Q15" class="collapse">
    仔细检查邮件中的内容，训练错误将在邮件中指出，发送的照片中只允许包含指定的两个文件夹，照片的最低数量和分类有要求，如果存在隐藏文件会导致训练失败。

  <a href="https://docs.m5stack.com/#/zh_CN/related_documents/v-training"> V-Training详细使用教程 </a>
  </div>
</div>

- **Q16: Arduino程序中开启了串口，但是下载运行后发现屏幕不亮或者不断重启**

<div class="container">
  <button type="button" class="btn btn-primary" data-toggle="collapse" data-target="#U-Q16">查看解答</button>
  <div id="U-Q16" class="collapse">
    M5.begin()在初始化时已经默认开启串口波特率为115200，重复定义会导致程序不正常，如果有外接串口硬件，接好硬件后再开机。
  </div>
</div>

- **Q17: 烧录程序时出现MD5文件错误**

<div class="container">
  <button type="button" class="btn btn-primary" data-toggle="collapse" data-target="#U-Q17">查看解答</button>
  <div id="U-Q17" class="collapse">
    首先仔细检查你的程序，确认没有任何问题，其次使用M5Burner进行擦除，检查是否可以清除成功，再次烧录FactoryTest检查是否可以烧录，如果能成功操作，说明没有问题，如果重复出现MD5文件错误则很大概率FLASH已经损坏。
  </div>
</div>

- **Q18: 如何提高M5Stack和M5StickC续航时间**

<div class="container">
  <button type="button" class="btn btn-primary" data-toggle="collapse" data-target="#U-Q18">查看解答</button>
  <div id="U-Q18" class="collapse">
    首先在程序上进行优化，减少不必要的检测次数；其次通过调用休眠功能，合理的进行休眠和唤醒；此外官方有配套的电池底座可以添加。
  </div>
</div>

- **Q19: 能否连接5G频段的Wi-Fi**

<div class="container">
  <button type="button" class="btn btn-primary" data-toggle="collapse" data-target="#U-Q19">查看解答</button>
  <div id="U-Q19" class="collapse">
    ESP32芯片不支持5G频段的WiFi，只可以连接2.4G。
  </div>
</div>

- **Q20: UIFlow的Micropython与官方主线Micropython有什么区别**

<div class="container">
  <button type="button" class="btn btn-primary" data-toggle="collapse" data-target="#U-Q20">查看解答</button>
  <div id="U-Q20" class="collapse">
    UIFlow是基于主线Micropython的二次封装，集成了大量M5Stack官方库，在使用上UIFlow更加简单容易理解，同时也大部分兼容主线的API写法。
  </div>
</div>

- **Q21: Arduino的部分实例与GitHub不一致**

<div class="container">
  <button type="button" class="btn btn-primary" data-toggle="collapse" data-target="#U-Q21">查看解答</button>
  <div id="U-Q21" class="collapse">
    Arduino中的实例用于出厂基础功能测试，更新速度较慢，GitHub更新较快，代码比较完善，建议直接从GitHub下载。
  </div>
</div>

- **Q22: BASIC可以使用UIFlow和M5GO的配件吗**

<div class="container">
  <button type="button" class="btn btn-primary" data-toggle="collapse" data-target="#U-Q22">查看解答</button>
  <div id="U-Q22" class="collapse">
    UIFlow是可以使用的，只是UIFlow中硬件部分有部分功能不可用，M5GO的配件是兼容的。
  </div>
</div>

- **Q23: 支持中文显示吗**

<div class="container">
  <button type="button" class="btn btn-primary" data-toggle="collapse" data-target="#U-Q23">查看解答</button>
  <div id="U-Q23" class="collapse">
    在Arduino环境中支持GB2312编码显示，参考Display中的hzk16示例，在Micropython环境下受限于执行速度和UTF-8文件大小，暂不支持。
  </div>
</div>

- **Q24: M5Stack BASIC一直正常使用，突然无法开机了，即使连接了USB**

<div class="container">
  <button type="button" class="btn btn-primary" data-toggle="collapse" data-target="#U-Q24">查看解答</button>
  <div id="U-Q24" class="collapse">
    将BASIC底座去掉，尝试开机可以启动，很大可能是底座与M-BUS接触不良导致的。
  </div>
</div>

- **Q25: M5StickV有没有相关的教程可以参考**

<div class="container">
  <button type="button" class="btn btn-primary" data-toggle="collapse" data-target="#U-Q25">查看解答</button>
  <div id="U-Q25" class="collapse">
    M5StickV采用K210芯片兼容Maixpy的开发环境，可以参考Maixpy的官方文档进行学习。
  </div>
</div>

- **Q26: 有些API为什么在资料里查不到**

<div class="container">
  <button type="button" class="btn btn-primary" data-toggle="collapse" data-target="#U-Q26">查看解答</button>
  <div id="U-Q26" class="collapse">
    提供的参考API仅限于M5硬件封装的功能，软件应用的库比如WIFI，HTTP等不属于提供的范畴，可参考其他ESP32和Arduino库，使用上是通用的。
  </div>
</div>


- **Q27: 编写的程序里用到了按键，但是按过一次之后就再也不起作用**

<div class="container">
  <button type="button" class="btn btn-primary" data-toggle="collapse" data-target="#U-Q27">查看解答</button>
  <div id="U-Q27" class="collapse">
    使用按键和喇叭需要在执行后添加M5.update()来重新响应。
  </div>
</div>

- **Q28: 想用官方的传感器配件，又想外接自己的传感器，该如何堆叠**

<div class="container">
  <button type="button" class="btn btn-primary" data-toggle="collapse" data-target="#U-Q28">查看解答</button>
  <div id="U-Q28" class="collapse">
    建议使用PLUS模块+CORE的底座实现。
  </div>
</div>

- **Q29: M5Camera写完程序以后运行发现画面是反的**

<div class="container">
  <button type="button" class="btn btn-primary" data-toggle="collapse" data-target="#U-Q29">查看解答</button>
  <div id="U-Q29" class="collapse">
    尝试添加以下代码来解决。
    sensor_t *s = esp_camera_sensor_get();
    s->set_vflip(s, 1);
	  s->set_hmirror(s, 1);
  </div>
</div>

- **Q30: 如何挂载多个相同I2C地址的传感器**

<div class="container">
  <button type="button" class="btn btn-primary" data-toggle="collapse" data-target="#U-Q30">查看解答</button>
  <div id="U-Q30" class="collapse">
    可以使用Pa.HUB配件外接6个I2C设备。
  </div>
</div>



## UNIT 相关问题

- **Q1: M5Stack 的多款摄像头 Unit 之间有什么区别？**

<div class="container">
  <button type="button" class="btn btn-primary" data-toggle="collapse" data-target="#U-Q1">查看解答</button>
  <div id="U-Q1" class="collapse">
    这些摄像头主要区别在于一些管脚 (OV2640-SIOD、OV2640-VSYNC、GROVE 接口)、镜头类型、有无 PSRAM，具体区别请访问<a href="https://shimo.im/sheets/gP96C8YTdyjGgKQC/e2041">这里</a>

<img src="https://m5stack.oss-cn-shenzhen.aliyuncs.com/image/m5-docs_table/camera_comparison/camera_comparison_zh_CN.png">
  </div>
</div>


- **Q2: 摄像头通过 WIFI 传输图像给手机，能传输多远？**

<div class="container">
  <button type="button" class="btn btn-primary" data-toggle="collapse" data-target="#U-Q2">查看解答</button>
  <div id="U-Q2" class="collapse">
    经过测试，在室内使用 M5Camera 能传输 20 米左右。
  </div>
</div>

- **Q3: BettleC连接手机遥控有时会无法响应**

<div class="container">
  <button type="button" class="btn btn-primary" data-toggle="collapse" data-target="#U-Q3">查看解答</button>
  <div id="U-Q3" class="collapse">
    大部分是由于电池电量过低引起的，如果电池电量不足会导致信号质量严重衰减。
  </div>
</div>
