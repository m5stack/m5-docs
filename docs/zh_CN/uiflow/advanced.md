# 远程控制
__________________________

#### 功能说明

>通过手机或电脑等设备进行远程控制M5GO

><img src="/image/Remote/Remote.jpg" width="70%"> 

>* __Remote QRcode__
生成一个可以访问控制页面的二维码，并显示在屏幕上

>* __Remote Switch__
远程开关控制，使用前请点击Block上的齿轮按钮添加一个变量X，当控制时，闭合X传入1，断开X传入0

>* __Remote Button__
远程按钮控制，每点击一次按钮，则执行一次Block里的程序

>* __Remote Slider__
滑动条控制（使用前请点击Block上的齿轮按钮添加一个变量X，随着滑动X传入0~100的整数）

>* __Remote Label__
显示信息，可以选择一些内置提供的标签类型，或是输入自定义的文本

#### 使用方法

>添加一个二维码生成Block到程序中，添加Remote Button，放置要运行的程序到块中，运行程序

><img src="/image/Remote/Remote_user1.gif" width="70%"> 

#### 控制页面

>扫描M5GO屏幕上的二维码，或在UIFlow页面右上角的二维码选项下复制链接，访问控制页面


><img src="/image/Remote/Remote_Phone.png" width="30%"> 


# MQTT通讯
__________________________

#### 什么是MQTT？

>MQTT（Message Queuing Telemetry Transport，消息队列遥测传输协议），是一种基于发布/订阅（publish/subscribe）模式的"轻量级"通讯协议

>该协议构建于TCP/IP协议上，由IBM在1999年发布。

>MQTT最大优点在于，可以以极少的代码和有限的带宽，为连接远程设备提供实时可靠的消息服务。

>作为一种低开销、低带宽占用的即时通讯协议，使其在物联网、小型设备、移动应用等方面有较广泛的应用。

#### UIFlow与MQTT

>在UIFlow中，我们可以使用MQTT功能实现两个或是多个CORE之间的通讯与交互，从而实现强大的远程控制功能

><img src="/image/MQTT/MQTT.jpg" width="70%"> 


# MQTT服务器
_________________________________

* __选择MQTT服务__

>要使用MQTT协议进行数据交互，需要服务器的支持，有很多第三方的服务器平台可以选择，在这里我们演示的平台为CloudMQTT

>当你在平台已经创建好了服务支持，你会得到一些配置信息，如服务器地址，用户名，密码等，在UIFlow的MQTT块中将使用这些信息

><img src="/image/MQTT/info.jpg" width="70%"> 



* __MQTT功能__

>在UIFlow的高级功能中，可以找到MQTT功能块，我们可以把MQTT协议简单的理解为两个环节,"发布"(Publish) 与 "订阅"(Subscribe)

>当发布者发布消息后，订阅者将获取这一信息，从而实现设备之间的通讯

><img src="/image/MQTT/UIFlow_MQTT1.jpg" width="365" />  <img src="/image/MQTT/UIFlow_MQTT2.jpg" width="365"/>



# 初始化程序
__________________________

* __MQTT配置块__

>添加一个MQTT配置块，并连接到Setup块上

><img src="/image/MQTT/MQTT_Start1.jpg" width="70%"> 

* __信息填写__

>填写你个人或是第三方服务器平台上的服务器信息，为接下来的连接做准备

# 注意

* 当你有多个设备同时使用时，ID名称（下图的ID为"M5stack"）不允许与配置信息中的其他选项重复，同时不允许与其他设备的ID重复，同一时间里，同一服务器中，同一ID名称的设备只允许有一个在线

* MQTT程序必须Download才能使用！

><img src="/image/MQTT/MQTT_Start2.jpg" width="70%"> 



* __MQTT Start__

>在MQTT配置块下方添加Start块，这表示，当配置信息后则开始运行

><img src="/image/MQTT/MQTT_Start3.jpg" width="70%"> 



# Publish发布
__________________________

#### 功能说明

>Publish发布指的是，通讯中发布数据的环节，为发布内容包含两个部分 “主题”（topic），“内容”（msg）

><img src="/image/MQTT/Publish1.jpg" width="70%"> 

* __Publish “主题”（topic）__

>设定一个发布主题，当其他设备想要获取该主题下的内容信息时，则需要订阅相匹配的主题名

* __Publish “内容”（msg）__

>设定要发布的内容信息

#### 使用方法

>当程序运行到Publish发布块时，进行消息发布。例：
>当按下A按钮时，进行消息发布（主题为"RGB",内容为"open"）
>当按下B按钮时，进行消息发布（主题为"RGB",内容为"close"）

><img src="/image/MQTT/Publish2.jpg" width="70%"> 


# Subscribe订阅
__________________________

#### 功能说明

>Subscribe订阅指的是，通讯中接收数据的环节，当发布者发布了信息后，订阅者将自动接收已订阅的主题（topic），消息内容（msg）

* __Subscribe “主题”（topic）__

><img src="/image/MQTT/Subscribe1.jpg" width="70%"> 

>设定要订阅的主题

* __Get topic data “内容”（msg）__

><img src="/image/MQTT/Subscribe2.jpg" width="70%"> 

>获取该订阅下的消息内容

#### 使用方法

>添加Subscribe块，并填写要订阅的主题（topic），使用Get topic data块获取，并处理分析，例：

>当从Publish那获取了一个"open"，点亮RGB bar，当获取到"close"，则熄灭RGB bar

><img src="/image/MQTT/Subscribe3.jpg" width="70%"> 


# 使用案例
__________________________

#### 实现功能

>用一个CORE编程一个简单的使用案例来验证功能，它即使发布者（Publish）,也是订阅者(Subscribe)

* __完整程序__

><img src="/image/MQTT/Example1.jpg" width="70%"> 

#### 使用方法

>当按下A按钮时，进行消息发布（主题为"RGB",内容为"open"），RGB bar点亮

>当按下B按钮时，进行消息发布（主题为"RGB",内容为"close"）, RGB bar熄灭



