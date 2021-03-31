# UIFlow-接入-Blynk

## 概述

>本教程将以搭建温湿度采集节点为案例,演示如何通过UIFlow编程设备接入Blynk云服务平台。并通过Blynk APP实现简单的远程控制功能。

## 创建项目

>接入前,需要先通过Blynk APP注册账号并登录创建应用实例,获取相应的Auth Token。[点击此处访问Blynk官方,安装Blynk APP](https://blynk.io/en/getting-started)。

>点击APP上方的`+`添加按钮,`创建项目`->设备类型为`ESP32 Dev Board`，连接模式为`WiFi`。 成功创建项目后，Blynk服务将为该项目生成唯一的`Auth Token`并发送到你的注册邮箱中，在后续的步骤中，我们将使用到该密钥。

<img src="/image/iotcloud/blynk/blynk_01.webp" width="25%">

<img src="/image/iotcloud/blynk/blynk_02.webp" width="25%">

<img  src="/image/iotcloud/blynk/blynk_03.webp" width="30%">

>完成项目创建后，将进入控制面板，通过侧边栏可自定义添加控件。该案例将添加两个`Labeled Value`用于显示温湿度数据(设置刷新时间为1s)，添加一个`Button`用于控制Speaker发声。

?>`Blynk`中用到了"实际引脚"与"虚拟引脚"。实际引脚指的是，App中所作的电平控制将实际应用到硬件设备上相对应的引脚号上。虚拟引脚是一个虚拟的引脚，我们能够将其理解为一个标识符，APP与设备程序将通过这个标识符进行信息的传递，并自定义处理程序。下面的应用案例将使用虚拟引脚进行配置。

<img src="/image/iotcloud/blynk/blynk_04.webp" width="25%">

<img src="/image/iotcloud/blynk/blynk_05.webp" width="25%">

<img src="/image/iotcloud/blynk/blynk_06.webp" width="25%">


## 烧录固件

>为你的设备烧录UIFlow固件(固件要求v1.7.4及以上版本),点击下方对应文档链接,可查看详细烧录步骤。

[UIFlow固件烧录步骤](/zh_CN/quick_start/m5core/m5stack_core_get_started_MicroPython)

## 编写程序

- [点击下载案例程序m5f文件](https://m5stack.oss-cn-shenzhen.aliyuncs.com/resource/docs/m5f/UIFlow-Blynk.m5f),在UiFlow中打开文件,也可以按照下图拖拽代码块。

>案例程序中通过监听数据刷新请求，将数据经由Blynk服务器推送至APP显示面板

<img src="/image/iotcloud/blynk/blynk_block_example.webp">

>UIFlow还支持用户自定义配置连接的Blynk服务器，只需要在程序初始化阶段，将服务器IP与端口等参数传入即可。

<img src="/image/iotcloud/blynk/blynk_07.webp">

- Micropython API

```clike

from IoTcloud import blynk

//断开连接
blynk1.disconnect()

//发送邮件
blynk1.email('', '', '')

//发送通知
blynk1.tweet('')

//发送通知
blynk1.notify('')

//配置控件属性参数
blynk1.set_property(0, '', '')

//同步虚拟引脚状态
blynk1.virtual_sync(0)

//初始化连接
blynk1 = blynk.Blynk(token='xxxxxxxxxxxxxxxxxxxxxxxxxx')

//响应callback
def blynk_read_v3(v_pin,value):
  print(value)
  //响应数据到指定VPIN
  blynk1.virtual_write(v_pin, "Hello!")

//绑定虚拟引脚响应callback
blynk1.handle_event('read v3', blynk_read_v3)

while True:
  blynk1.run()

```

## APP数据获取与控制

>当设备端成功连接网络并运行代码后，点击APP项目页面右上角的运行按钮，既可实现云端连接，并实时获取温湿度数据。点击SPK控制按钮，即可驱动设备扬声器发声。

[查看Blynk官方文档，获取更多控件相关内容](https://blynk.io/)

<script>

   anchor_search();
   scrollFunc();

</script>
