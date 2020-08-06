<el-card class="box-card" style="margin-bottom:20px">
    <div slot="header" class="clearfix">
        <span>目录</span>
        <i class="el-icon-s-management" style="float: right;"></i>
    </div>
    <div style="margin: 0px 10px 10px 0px ;display:inline-block;">
        <el-tag onclick="page_move('remote')">Remote</el-tag>
        <el-tag onclick="page_move('esp-now')">ESP-NOW</el-tag>
        <el-tag onclick="page_move('mqtt-communication')">MQTT communication</el-tag>
        <el-tag onclick="page_move('wifi')">WiFi</el-tag>
        <el-tag onclick="page_move('p2p')">P2P</el-tag>
        <el-tag onclick="page_move('easy-io')">Easy-IO</el-tag>
        <el-tag onclick="page_move('pwm')">PWM</el-tag>
        <el-tag onclick="page_move('adc')">ADC</el-tag>
        <el-tag onclick="page_move('dac')">DAC</el-tag>
        <el-tag onclick="page_move('uart')">UART</el-tag>
        <el-tag onclick="page_move('i2c')">I2C</el-tag>
        <el-tag onclick="page_move('execute')">Execute</el-tag>
        <el-tag onclick="page_move('sdcard')">SDCard</el-tag>
        <el-tag onclick="page_move('http')">Http</el-tag>
        <el-tag onclick="page_move('eeprom')">EEPROM</el-tag>
        <el-tag onclick="page_move('modbus-master')">Modbus-Master</el-tag>
        <el-tag onclick="page_move('modbus-slave')">Modbus-Slave</el-tag>
        <el-tag onclick="page_move('ble-uartsupport-m5stack-fire-only')">BLE UART</el-tag>
        <el-tag onclick="page_move('blynksupport-m5Stack-fire-only')">Blynk</el-tag>
        <el-tag onclick="page_move('echo-stt')">Echo STT</el-tag>
    </div>
</el-card>

## Remote

#### 功能说明

>通过手机或电脑在网页端控制M5Stack设备

><img src="/image/Remote/Remote.webp" width="50%"> 

* __Set Title__
设置控制页面显示的标题内容.

* __Remote qrcode show in x y size__
生成网页的二维码展示位置与大小.

* __Add Remote Switch Button index__
添加切换开关按钮(0或1)，当点击时运行块内的程序.

* __Add Remote Button index__
添加按钮，当点击时运行块内的程序.

* __Add Remote Slider__
添加滑动条，使用前先添加变量，通过滑动条改变变量，执行块内的程序

* __Add Remote Label index interval__
通过添加标签显示数据，设定刷新时间间隔.

#### Instructions

>屏幕显示网页端二维码，扫码进入控制页面，通过按键和滑动条控制LED Bar，同时显示ENV模块的温度.

><img src="/image/Remote/Remote_user1.webp" width="50%">


## ESP-NOW

#### 功能说明

>ESP-NOW 是一种短程低功耗通信协议，可以使多个设备在没有或不使用 Wi-Fi 的情况下进行通信。这种协议类似常见于无线鼠标中的低功耗 2.4GHz 无线连接——设备在进行通信之前要进行配对。配对之后，设备之间的连接是持续的、点对点的，并且不需要握手协议.

><img src="image\ESP_now\esp_now_01.webp" width="50%">

* __Get mac addr__
获取本机的mac地址.

* __Add peer ff as id__
添加指定mac地址，并设置为id

* __Set pmk__
设置配对密钥

* __Broadcast data__
广播指定数据

* __Receive mac_addr data__
接收数据，获取发送者mac地址以及携带的数据内容

* __After send message flag__
发送回调函数，在执行发送信息后自动执行回调函数，并返回是否发送成功的标志位flag.成功为True，失败为False.

* __Send message id with data__
发送数据至指定的id的设备.

#### 使用方法

<h3><mark>接收端</mark></h3>

>将本机mac地址显示在屏幕上，使用数据接收块并创建两个变量用于接收发送者地址与数据内容.在接收块函数内部进行数据的处理，用作显示或是判断等其他操作.如下方程序通过判断接收数据是否为"1",控制LED灯的开关.

__注意：创建的变量名称不允许与形参名称一致，即不允许使用名称为"addr"、"data"的变量用作数据获取__

><img src="image\ESP_now\esp_now_02.webp" width="40%">

<h3><mark>发送端</mark></h3>

>添加接收端设备的mac地址，在发送程序中填写发送的数据内容、选择接收的设备的id.使用按键程序去控制数据的发送.使用回调函数能够帮助我们判断数据是否成功从本机发送出去.我们需要用一个变量去获取它的返回结果.

__注意：创建的变量名称不允许与形参名称一致，即不允许使用名称为"flag"的变量用作数据获取__

><img src="image\ESP_now\esp_now_03.webp" width="40%">

>完成程序编辑，分别运行接收端与发射端程序，即可实现ESP-NOW短程无线通信.

## MQTT communication

#### 什么是MQTT？

>MQTT（Message Queuing Telemetry Transport，消息队列遥测传输协议），是一种基于发布/订阅（publish/subscribe）模式的"轻量级"通讯协议

>该协议构建于TCP/IP协议上，由IBM在1999年发布。

>MQTT最大优点在于，可以以极少的代码和有限的带宽，为连接远程设备提供实时可靠的消息服务。

>作为一种低开销、低带宽占用的即时通讯协议，使其在物联网、小型设备、移动应用等方面有较广泛的应用。

#### UIFlow与MQTT

>在UIFlow中，我们可以使用MQTT功能实现两个或是多个CORE之间的通讯与交互，从而实现强大的远程控制功能

><img src="/image/MQTT/MQTT.webp" width="50%"> 


## MQTT server

* __选择MQTT服务__

>要使用MQTT协议进行数据交互，需要服务器的支持，有很多第三方的服务器平台可以选择，在这里我们演示的平台为CloudMQTT

>当你在平台已经创建好了服务支持，你会得到一些配置信息，如服务器地址，用户名，密码等，在UIFlow的MQTT块中将使用这些信息

><img src="/image/MQTT/info.webp" width="50%"> 

* __MQTT功能__

>在UIFlow的高级功能中，可以找到MQTT功能块，我们可以把MQTT协议简单的理解为两个环节,"发布"(Publish) 与 "订阅"(Subscribe)

>当发布者发布消息后，订阅者将获取这一信息，从而实现设备之间的通讯

<img src="/image/MQTT/UIFlow_MQTT.webp" width="50%">



# 初始化程序

* __MQTT配置块__

>添加一个MQTT配置块，并连接到Setup块上

><img src="/image/MQTT/MQTT_Start1.webp" width="50%"> 

* __信息填写__

>填写你个人或是第三方服务器平台上的服务器信息，为接下来的连接做准备

## 注意

* 当你有多个设备同时使用时，ID名称（下图的ID为"M5stack"）不允许与配置信息中的其他选项重复，同时不允许与其他设备的ID重复，同一时间里，同一服务器中，同一ID名称的设备只允许有一个在线

* MQTT程序必须Download才能使用！

><img src="/image/MQTT/MQTT_Start2.webp" width="50%"> 



* __MQTT Start__

>在MQTT配置块下方添加Start块，这表示，当配置信息后则开始运行

><img src="/image/MQTT/MQTT_Start3.webp" width="50%"> 



## Publish发布

#### 功能说明

>Publish发布指的是，通讯中发布数据的环节，为发布内容包含两个部分 “主题”（topic），“内容”（msg）

><img src="/image/MQTT/Publish1.webp" width="50%"> 

* __Publish “主题”（topic）__

>设定一个发布主题，当其他设备想要获取该主题下的内容信息时，则需要订阅相匹配的主题名

* __Publish “内容”（msg）__

>设定要发布的内容信息

#### 使用方法

>当程序运行到Publish发布块时，进行消息发布。例：
>当按下A按钮时，进行消息发布（主题为"RGB",内容为"open"）
>当按下B按钮时，进行消息发布（主题为"RGB",内容为"close"）

><img src="/image/MQTT/Publish2.webp" width="50%"> 


## Subscribe订阅

#### 功能说明

>Subscribe订阅指的是，通讯中接收数据的环节，当发布者发布了信息后，订阅者将自动接收已订阅的主题（topic），消息内容（msg）

* __Subscribe “主题”（topic）__

><img src="/image/MQTT/Subscribe1.webp" width="50%"> 

>设定要订阅的主题

* __Get topic data “内容”（msg）__

><img src="/image/MQTT/Subscribe2.webp" width="50%"> 

>获取该订阅下的消息内容

#### 使用方法

>添加Subscribe块，并填写要订阅的主题（topic），使用Get topic data块获取，并处理分析，例：

>当从Publish那获取了一个"open"，点亮RGB bar，当获取到"close"，则熄灭RGB bar

><img src="/image/MQTT/Subscribe3.webp" width="50%"> 


## 使用案例

#### 实现功能

>用一个CORE编程一个简单的使用案例来验证功能，它即使发布者（Publish）,也是订阅者(Subscribe)

* __完整程序__

><img src="/image/MQTT/Example1.webp" width="50%"> 

#### 使用方法

>当按下A按钮时，进行消息发布（主题为"RGB",内容为"open"），RGB bar点亮

>当按下B按钮时，进行消息发布（主题为"RGB",内容为"close"）, RGB bar熄灭

## WiFi

#### 功能说明

>设置wifi网络

><img src="/image/Network/network.webp" width="50%"> 

* __wifi connect__
建立wifi网络

* __wifi reconnect__
wifi重新连接

* __wifi is connect__
返回wifi连接状态

* __Connect to Wi-Fi SSID PASSWORD__
设置SSID和密码

### 使用方法

>wifi连接指定的SSID

><img src="/image/Network/wifi_user.gif" width="50%"> 

## P2P

#### 功能说明

>设置点对点通信

* __P2P Send To APIKey Msg__
通过MQTT服务器验证APIKey发送消息实现点对点远程控制

* __P2P Read__
读取远程P2P发送的数据

#### 使用方法

>建立P2P并发送消息.

><img src="/image/Network/P2PSend_user.gif" width="50%"> 

## Easy IO

#### 功能说明

>I/O引脚配置

><img src="/image/Advanced module/EasyIO.webp" width="50%"> 

* __analog read pin__
读取引脚模拟量

* __analog write pin duty__
设置引脚占空比

* __digital read Value__
读取引脚数字量

* __digital toggle pin__
切换引脚值

* __map from low from high to low to high__
将值进行区间映射

#### Instructions

>将温度传感器的值映射到0-100区间

><img src="/image/Advanced module/EasyIO_user.gif" width="50%"> 


## PIN

#### 功能说明

>引脚自定义配置

><img src="/image/Advanced module/PIN.webp" width="50%"> 

* __Init Pin mode Pull__
设置引脚模式

* __set HIGH__
设置引脚高电平

* __set LOW__
设置引脚低电平

* __Get Value__
获取引脚值

* __Set Value__
设置引脚值

#### Instructions

>设置引脚5上拉输出高电平

><img src="/image/Advanced module/PIN_user.gif" width="50%"> 

## PWM

#### 功能说明

>PWM功能设置

><img src="/image/Advanced module/PWM.webp" width="50%"> 

* __Init in Pin freq duty use timer__
设置通道引脚频率、占空比和定时器

* __set freq to__
改变频率

* __set duty to__
改变占空比

* __Pause__
禁用PWM功能

* __Resume__
重新启用PWM功能



#### 使用说明

>使用0号定时器设置PWM0引脚25频率500占空比50

><img src="/image/Advanced module/PWM_user.gif" width="50%"> 


## ADC

#### 功能说明

>模数转换

><img src="/image/Advanced module/ADC.webp" width="50%"> 

* __Init in Pin__
设置采样通道引脚

* __set width__
设置采样宽度

* __set atten__
设置增益

* __read value__
读取adc


#### 使用说明

>使用adc0通道在36引脚进行采样，读取数值

><img src="/image/Advanced module/ADC_user.gif" width="50%"> 

## DAC

#### 功能说明

>数模转换

><img src="/image/Advanced module/DAC.webp" width="50%"> 

* __Init in Pin__
设置转换通道

* __write value__
写入da值

* __beep with freq duration scale__
设置蜂鸣器频率，时间和振幅

* __waveform with freq type duration scale offset invert__
设置波形频率振幅偏移量

* __stop wave__
停止输出

* __set freq__
设置频率

#### 使用说明

>使用dac0通道在25引脚输出波形

><img src="/image/Advanced module/DAC_user.gif" width="50%"> 

## UART

#### 功能说明

>串口数据收发

><img src="/image/Advanced module/UART.webp" width="50%"> 

* __set tx rx baud use uart__
设置串口引脚和波特率

* __read all__
一次性读取串口全部数据

* __read characters__
读取指定数量的数据

* __read line__
读取\n前的数据

* __remain cache__
读取缓冲区剩余数据

* __write number in__
向串口写数字

* __write a line in__
向串口写一行字符串

* __write in__
向串口写字符串

* __write raw date in__
向串口写入原始数据(形如 **b"\xff\xab"**)

#### 使用说明

>读取串口数据并向串口发送数据

><img src="/image/Advanced module/UART_user.gif" width="50%"> 



## DAC

#### 功能说明

>数模转换

><img src="/image/Advanced module/DAC.webp" width="50%"> 

* __Init in Pin__
设置转换通道

* __write value__
写入da值

* __beep with freq duration scale__
设置蜂鸣器频率，时间和振幅

* __waveform with freq type duration scale offset invert__
设置波形频率振幅偏移量

* __stop wave__
停止输出

* __set freq__
设置频率

#### 使用说明

>使用dac0通道在25引脚输出波形

><img src="/image/Advanced module/DAC_user.gif" width="50%"> 



## I2C

#### 功能说明

>I2C接口设置

><img src="/image/Advanced module/I2C.webp" width="50%"> 

* __Master slave addr__
设置主机接口与从机地址

* __Set at sda scl slave addr__
自定义SDA SCL与从机地址

* __Write reg one byte__
向寄存器地址写1个字节数据

* __Write reg one short With encode__
大端模式向寄存器地址写两个字节

* __Read reg one byte__
从寄存器地址读取一个字节

* __Read reg one short with decode__
大端模式从寄存器地址读取两个字节

* __Read reg Read byte__
从寄存器地址读取若干字节

* __Read byte__
读取字节

* __Available I2C address in list__
检查I2C地址是否可用

* __Scan I2C device__
扫描I2C设备


#### 使用说明

>从I2C读取数据

><img src="/image/Advanced module/I2C_user.gif" width="50%">

><img src="/image/Advanced module/I2C_02.webp" width="50%">

* __Write mem data reg date type__
向寄存器地址写入指定类型的数据

* __Write data type__
向I2C总线写指定类型数据

* __Read mem data reg date type__
从寄存器地址读取指定类型的数据

* __Read data num type__
从I2C总线读取指定类型的数据

* __In data get index__
从返回的数据列表中提取一个数据

>向I2C写数据

><img src="/image/Advanced module/I2C_Write.gif" width="50%">

>从I2C读数据

><img src="/image/Advanced module/I2C_Read.webp" width="80%">


## Execute

#### 功能说明

>执行外部程序

><img src="/image/Advanced module/Execute.webp" width="50%"> 


#### 使用方法

>导入库

><img src="/image/Advanced module/Execute_user.gif" width="50%"> 


## SDCard

#### 功能说明

>SD卡读写操作

><img src="/image/Advanced module/SDCard.webp" width="40%"> 

* __open sdcard file mode__
打开指定文件并执行读或写操作，r和r+状态下必须存在此文件，否则报错。a、w和w+模式如果不存在文件会自动创建。

* __file read all__
读取文件内所有内容

* __file read bytes__
读取指定字节数

* __file read line__
读取一行内容

* __file write__
向文件内写入内容

* __file set seek__
设置读取的偏移位置

* __file get seek__
获取当前的偏移位置

* __sdcard listdir__
列出指定目录文件

* __file mkdir__
设置读取的偏移位置

* __sdcard remove__
删除指定文件

* __sdcard rmdir__
删除指定目录

* __sdcard rename__
文件重命名

#### 使用说明

>创建test文件夹，建立名为TEST.text的文件，写入helloM5Stack，并读取M5Stack

><img src="/image/Advanced module/SDCard_user.gif" width="50%"> 

## Http

#### 功能说明

>发送HTTP协议

><img src="/image/Advanced module/Http.webp" width="40%"> 

* __Http Request__
创建Http访问请求，方法为GET、POST、DELET、PUT、PATCH,URL为完整HTTP连接地址，以字典的形式创建数据头Headers，Data数据，发送成功执行Success，发送失败执行Fail。

* __Get Status Code__
返回状态码

* __Get Data__
返回请求数据

#### 使用说明

>向百度发送GET请求，返回数据并打印

><img src="/image/Advanced module/Http_user.gif" width="50%"> 


## EEPROM

#### 功能说明

>将重要数据以键值对的形式保存至NVS分区，防止关机后数据丢失（为防止程序处理被阻塞，5秒后数据被真正写入)，请不要将数据随意反复写入NVS分区，否则将影响Flash寿命导致损坏。

><img src="/image/Advanced module/EEPROM.webp" width="40%">

* __EEPROM write key value__
创建一个键值对将数据保存到EEPROM中

* __EEPROM read key__
读出关键字对应的数据内容

* __EEPROM read key to int__ 
读出关键字对应的数据内容并转为整形数据

#### 使用说明

>创建键值对写入到NVS分区，并读取数据

><img src="/image/Advanced module/EEPROM_user.webp" width="70%">

## Modbus Master

#### 功能说明

>创建一个Modbus主机，利用ModBus协议封装数据，通过串行通讯将数据下发至从机，数据取值范围0-65535。

><img src="/image/Advanced module/modbus_master.webp" width="40%">

* __Init baud tx rx in uart crc__
对通讯接口进行初始化操作，可指定波特率、发送引脚、接收引脚、串口号及CRC校验大小端模式

* __Send addr function reg addr value__
向指定的从机地址发送数据包，addr为从机地址，function为功能码，reg addr为寄存器地址，value为用户数据

* __Rx buffer cache number__ 
从缓冲区读取的字节数

* __Read rx data__ 
读取接收的数据包，适用于自定义处理

* __Get rx addr function data__ 
用回调的方式接收数据包，通过变量接收参数，参数自动更新

#### 使用说明

>主要功能：(从机代码见下方说明）连接两台M5Stack，通过Modbus建立主机和从机，主机按下A/B按键下发数据，并接收从机返回的数据包（接收功能码2），数据包处理方式有以下两种:

>1.通过LOOP处理从机返回的数据包，在屏幕上显示。

根据Modbus协议定义，从机返回数据包至少包含3个有效数据（地址、功能码、数据)，因此大于3字节视为有效数据，通过列表对数据进行解析处理

><img src="/image/Advanced module/modbus_loop_master_user.webp" width="100%">

>2. 通过回调函数处理返回的数据包，当使用回调函数时不得使用LOOP否则会阻塞回调。

设置三个变量分别接收从机返回的地址、功能码、数据

><img src="/image/Advanced module/modbus_callback_master_user.webp" width="100%">


## Modbus Slave

#### 功能说明

>创建一个Modbus从机，接收ModBus封装的数据包，通过串行接口与主机通讯，数据取值范围0-65535。

><img src="/image/Advanced module/modbus_slave.webp" width="40%">

* __Init addr baud tx rx in uart__
对通讯接口进行初始化操作，可指定从机地址、波特率、发送引脚、接收引脚、串口号，CRC校验为大端模式

* __Init function reg addr value method__
定义Modbus数据操作格式，function为功能码，reg addr为寄存器地址， value为初始默认值， method为读或写操作模式

* __Update function reg addr value__ 
按功能码对指定的寄存器地址内数据进行更新

* __Get rx buffer data__ 
读取缓冲区数据

* __Get reg write function reg addr value__ 
用回调的方式获取主机发来的数据包(功能码、寄存器地址、数据），通过变量进行接收，需要自行处理

* __Get function reg addr value__ 
获取指定的主机数据包内容，通过功能码、寄存器地址进行指定

* __send addr function reg addr value__ 
接收到主机数据包后向主机回应发送的数据包内容

#### 使用说明

>主要功能：(主机代码见上方说明)连接两台M5Stack，通过Modbus建立主机和从机，从机接收到地址码1，功能码1，寄存器地址1的数据包后解析数据，数据为1点亮LED Bar，数据为2熄灭LED Bar，同时从机实时更新自身相应数据，并对主机做出回应（通过功能码2），从机自身通过A/B按键操作也会实时将数据上报给主机。实现方式有以下两种:

>1.通过LOOP处理从机返回的数据包，及时更新数据在屏幕上显示，并进行响应。

接收指定的数据包并解析数据，判断数据做出响应并上报主机(通过功能码2)，按A/B键对自身响应，并向主机发送数据包报告状态（通过功能码2）

><img src="/image/Advanced module/modbus_loop_slave_user.webp" width="100%">

>2. 通过回调函数处理返回的数据，指定数据包要对fun和reg_addr加入判断处理，当使用回调函数时不得使用LOOP否则会阻塞回调。

设置三个变量分别接收主机发送的地址、功能码、数据，使用列表获取数据，对数据进行判断处理，同时将状态通过（功能码2）上报主机。手动按A/B键在自身响应的同时也会上报主机(通过功能码2).

><img src="/image/Advanced module/modbus_callback_slave_user.webp" width="100%">


## BLE UART(support M5Stack Fire only)

#### 功能说明

>建立蓝牙连接，开启蓝牙透传服务(仅支持M5Stack Fire)

><img src="/image/Advanced module/ble_uart.webp" width="40%"> 

* __Init ble uart name__
初始化设置，配置蓝牙设备名称

* __BLE UART Writre__
使用蓝牙发送数据

* __BLE UART remain cache__
检查蓝牙串口缓存数据字节数

* __BLE UART read all__
读取蓝牙串口缓存中所有数据

* __BLE UART read characters__
读取蓝牙串口缓存中n个数据

#### 使用说明

>建立蓝牙透传连接，发送on/off控制LED

><img src="/image/Advanced module/ble_uart_user.webp" width="70%">

## Blynk(support M5Stack Fire only)

>与Blynk服务器连接，使用BLE连接Blynk App，实现手机端控制M5Stack Fire (仅支持M5Stack Fire)

><img src="/image/Advanced module/blynk.webp" width="40%"> 

* __Init blynk name token type BLE__
初始化blynk配置，输入设备名称与App端的token.

* __Virtual write number data__
向虚拟端口号写入数据

* __Notify message__
向App发送系统级消息通知

* __Tweet message__
向Twitter客户端发送消息通知

* __On event write get number message__
从App端接收即将写入的指定虚拟端口的数据，如果不指定设为V*

* __On event read get number__
读取App端指定的虚拟端口号

* __On event__
蓝牙连接/断开时的回调函数

#### 使用说明

>使用Blynk控制M5StackFire的RGB灯条颜色和亮度，并在屏幕上实时显示

1.下载移动端Blynk，注册账号，您可以选择使用Blynk官方服务器，或自行搭建服务器，这里我们提供一个免费服务器供您测试(120.24.58.30:9443)。

2.使用邮箱注册Blynk账号，注册成功后使用该账号登录。

3.创建新工程，选择ESP32 Dev Board，接入方式选择BLE，同时记录下AUTH TOKEN。

4.按照下图步骤添加组件，其中BLE连接为必要组件。

><img src="/image/Advanced module/blynk_app_user1.webp" width="20%"><img src="/image/Advanced module/blynk_app_user2.webp" width="20%"><img src="/image/Advanced module/blynk_app_user3.webp" width="20%"><img src="/image/Advanced module/blynk_app_user4.webp" width="20%"><img src="/image/Advanced module/blynk_app_user5.webp" width="20%">

><img src="/image/Advanced module/blynk_user.webp" width="100%">

## Echo STT

>通过ATOM Echo发送语音，获取经过转换后的文字

><img src="/image/Advanced module/echo_stt.webp" width="50%"> 

* __Init echo speech recognition token__
填写Token，初始化语音服务.

* __Recv echo data__
回调函数接收语音识别返回的数据

* __Get recv text__
接收语音识别返回的数据

#### 使用说明

>ATOM Echo烧录ECHO STT相关固件，通过语音识别控制M5StackFire的LED

><img src="/image/Advanced module/EchoSTT.webp" width="50%">