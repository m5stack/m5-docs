**[远程控制](#远程控制)**

**[数据面板](#数据面板)**

**[ESP-NOW](#ESP-NOW)**

**[MQTT通讯](#MQTT通讯)**

**[WiFi](#WiFi)**

**[P2P](#P2P)**

**[Easy IO](#Easy-IO)**

**[PWM](#PWM)**

**[ADC/DAC](#ADC/DAC)**

**[UART](#UART)**

**[I2C](#I2C)**

**[Execute](#Execute)**

**[SDCard](#SDCard)**

**[Http](#Http)**

**[EEPROM](#EEPROM)**

# 远程控制

#### 功能说明

>通过手机或电脑等设备进行远程控制M5GO

><img src="/image/Remote/Remote.webp" width="50%"> 

* __Remote QRcode__
生成一个可以访问控制页面的二维码，并显示在屏幕上

* __Remote Switch__
远程开关控制，使用前请点击Block上的齿轮按钮添加一个变量X，当控制时，闭合X传入1，断开X传入0

* __Remote Button__
远程按钮控制，每点击一次按钮，则执行一次Block里的程序

* __Remote Slider__
滑动条控制（使用前请点击Block上的齿轮按钮添加一个变量X，随着滑动X传入0~100的整数）

* __Remote Label__
显示信息，可以选择一些内置提供的标签类型，或是输入自定义的文本

<mark>注意：为程序块命名时，应避免使用空格以及特殊符号</mark>

#### 使用方法

>添加一个二维码生成Block到程序中，添加Remote Button，放置要运行的程序到块中，运行程序

><img src="/image/Remote/Remote_user1.gif" width="50%"> 

#### 控制页面

>扫描M5GO屏幕上的二维码，或在UIFlow页面右上角的二维码选项下复制链接，访问控制页面


><img src="/image/Remote/Remote_Phone.webp" width="30%"> 

# 数据面板

#### 功能说明

>除了拥有的与Remote一致的远程控制功能以外，Remote-Beta提供了更为强大的数据面板功能.目前支持折线/柱形两种数据图表样式，页面的布局样式可进行自由调整，并会根据用户API Key进行保存，实现布局样式的持久化.

><img src="image\Remote_beta\remote_beta_01.webp" width="60%">

* __Create Chart__
数据图表程序，将数据生成指定的图表样式.

* __Remote Button__
远程按钮控制，每点击一次按钮，则执行一次Block里的程序

* __Remote Slider__
滑动条控制（使用前请点击Block上的齿轮按钮添加一个变量X，随着滑动X传入0~100的整数）

* __Remote Switch__
远程开关控制，使用前请点击Block上的齿轮按钮添加一个变量X，当控制时，闭合X传入1，断开X传入0

<mark>注意：为程序块命名时，应避免使用空格以及特殊符号</mark>

#### 使用方法

>拖动数据图表程序到编程区域，在选项框内填写图表的相关信息.（Name:图表名称、ChartType:折线/柱形、DataType:图表的数据类型，暂时仅支持数字、key:数据的关键字、Value:数据来源、Interval:间隔刷新时间）

__注意：一个的表格只能使用一个数据来源，若是出现多个相同名称的表格，其数据来源将按照程序执行顺序使用最后一个数据__

><img src="image\Remote_beta\remote_beta_02.webp" width="60%">

>按键、滑动条、开关的使用方式与Remote功能完全一致，详情可查看上方程序块功能介绍，完成编辑后，点击运行程序.单击页面右侧的二维码选项，扫描或复制数据页面的链接，使用浏览器进行访问.

><img src="image\Remote_beta\remote_beta_03.webp" width="60%">


>进入控制页面后，保持M5设备的正常运行，就能看到图表中的数据按照我们所配置的间隔时间不断刷新，拖动图表右下角箭头能够实现整个图表缩放.点击左上角能够打开侧边导航，提供深浅主题色切换以及布局开关.（打开布局开关后，用户即可自由的修改图表及其他元素在页面中所摆放的位置）

><img src="image\Remote_beta\remote_beta_04.webp" width="60%">
><img src="image\Remote_beta\remote_beta_05.webp" width="60%">

# ESP-NOW

#### 功能说明

>ESP-NOW 是一种短程低功耗通信协议，可以使多个设备在没有或不使用 Wi-Fi 的情况下进行通信。这种协议类似常见于无线鼠标中的低功耗 2.4GHz 无线连接——设备在进行通信之前要进行配对。配对之后，设备之间的连接是持续的、点对点的，并且不需要握手协议.

><img src="image\ESP_now\esp_now_01.webp" width="60%">

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

# MQTT通讯

#### 什么是MQTT？

>MQTT（Message Queuing Telemetry Transport，消息队列遥测传输协议），是一种基于发布/订阅（publish/subscribe）模式的"轻量级"通讯协议

>该协议构建于TCP/IP协议上，由IBM在1999年发布。

>MQTT最大优点在于，可以以极少的代码和有限的带宽，为连接远程设备提供实时可靠的消息服务。

>作为一种低开销、低带宽占用的即时通讯协议，使其在物联网、小型设备、移动应用等方面有较广泛的应用。

#### UIFlow与MQTT

>在UIFlow中，我们可以使用MQTT功能实现两个或是多个CORE之间的通讯与交互，从而实现强大的远程控制功能

><img src="/image/MQTT/MQTT.webp" width="50%"> 


# MQTT服务器

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

# 注意

* 当你有多个设备同时使用时，ID名称（下图的ID为"M5stack"）不允许与配置信息中的其他选项重复，同时不允许与其他设备的ID重复，同一时间里，同一服务器中，同一ID名称的设备只允许有一个在线

* MQTT程序必须Download才能使用！

><img src="/image/MQTT/MQTT_Start2.webp" width="50%"> 



* __MQTT Start__

>在MQTT配置块下方添加Start块，这表示，当配置信息后则开始运行

><img src="/image/MQTT/MQTT_Start3.webp" width="50%"> 



# Publish发布

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


# Subscribe订阅

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


# 使用案例

#### 实现功能

>用一个CORE编程一个简单的使用案例来验证功能，它即使发布者（Publish）,也是订阅者(Subscribe)

* __完整程序__

><img src="/image/MQTT/Example1.webp" width="50%"> 

#### 使用方法

>当按下A按钮时，进行消息发布（主题为"RGB",内容为"open"），RGB bar点亮

>当按下B按钮时，进行消息发布（主题为"RGB",内容为"close"）, RGB bar熄灭

# WiFi

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

# P2P

#### 功能说明

>设置点对点通信

* __P2P Send To APIKey Msg__
通过MQTT服务器验证APIKey发送消息实现点对点远程控制

* __P2P Read__
读取远程P2P发送的数据

#### 使用方法

>建立P2P并发送消息.

><img src="/image/Network/P2PSend_user.gif" width="50%"> 

# Easy IO

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


# PIN

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

# PWM

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


# ADC

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

# DAC

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

# UART

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



#### 使用说明

>读取串口数据并向串口发送数据

><img src="/image/Advanced module/UART_user.gif" width="50%"> 



# DAC

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



# I2C

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


# Execute

#### 功能说明

>执行外部程序

><img src="/image/Advanced module/Execute.webp" width="50%"> 


#### 使用方法

>导入库

><img src="/image/Advanced module/Execute_user.gif" width="50%"> 


# SDCard

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

# Http

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


# EEPROM

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