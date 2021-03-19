# UIFlow-接入-Azure

## 概述

>本教程将以搭建温湿度采集节点为案例，演示如何通过UIFlow编程设备接入Azure IoT云服务平台。

## 创建项目

>接入前，需要先通过Azure门户创建IoT中心并注册新设备。[点击此处访问Azure官方文档查看详情](https://docs.microsoft.com/zh-cn/azure/iot-hub/iot-hub-create-through-portal)

<img src="/image/iotcloud/azure/azure_docs.webp" width="70%">

## 连接信息

>根据Azure官方文档完成设备创建后，连接Azure IoT前，我们需要获取到两个字符串，分别是`Primary Connection String` 和 `SAS Token`。

- 其中`Primary Connection String`，我们可以设备属性界面直接看到(如下图)。

<img src="/image/iotcloud/azure/primary_connection_string.webp">

- [点击链接查看如何获取SAS Token](https://docs.microsoft.com/zh-cn/azure/iot-hub/iot-hub-devguide-security#protocol-specifics)


## 烧录固件

>为你的设备烧录UIFlow固件(固件要求v1.7.3及以上版本)，点击下方对应文档链接，可查看详细烧录步骤。

[UIFlow固件烧录步骤](/zh_CN/quick_start/m5core/m5stack_core_get_started_MicroPython)

## 编写程序

- [点击下载案例程序m5f文件](https://m5stack.oss-cn-shenzhen.aliyuncs.com/resource/docs/m5f/UIFlow-Azure-Core2.m5f)，在UiFlow中打开文件，也可以按照下图拖拽代码块。

>案例程序中上传的数据格式为`JSON`，能够便于数据后续的拓展与传递，如往Power BI等应用中扩展。

<img src="/image/iotcloud/azure/block_example.webp">


```clike
	Connection String："Primary Connection String"
	SAS Token: "SAS Token"

```

- Micropython API

```clike

from IoTcloud.Azure import Azure

def azure_fun(msg_data):
  global msg_count, temp, humid, up_msg, up_msg_str
  c2d_msg.set_text(str(msg_data))
  pass

azure = Azure(connection_string='xxxxxxx', sas_token='xxxxxxx')
azure.subscribe(azure_fun)
azure.start()

up_msg = {'messageId':msg_count,'deviceId':'UIFlow-Azure-Core2-Temp-Humid','Temperature':temp,'Humidity':humid}
up_msg_str = json.dumps(up_msg)
azure.publish(str(up_msg_str))

```


## 查看设备上传数据

>将代码推送至Core2后，设备将根据程序内容开始上传数据。查看数据的方式并不唯一，该案例将演示通过VSCode的Azure插件，对上传数据进行查看。[点击访问VSCode下载页面](https://code.visualstudio.com/)

- 安装Azure Tools插件

<img src="/image/iotcloud/azure/azure_vscode_tool.webp">

- 安装Azure IoT Hub插件

<img src="/image/iotcloud/azure/azure_vscode_hub.webp">


>安装完成后，按下快捷键`shift`+`ctrl`+`p`，调用命令行，调用指令`Start Monitoring Built-in Event Endpoint`功能, 输入相应的密钥后确认(传入的密钥字符串可以在，Azure门户中的`Iot中心`- `设置`- `内置终结点`-`事件中心-兼容终结点` )。就可以看到设备上传到平台的温湿度数据了。

<img src="/image/iotcloud/azure/azure_vscode_endpoint.webp">

<img src="/image/iotcloud/azure/azure_vscode_endpoint_key.webp">

<img src="/image/iotcloud/azure/azure_vscode_start.webp">

## 发送消息到设备

>调用命令行，调用指令`Azure IoT Hub:Send C2D Message to Device`, 并输入在设备属性界面看到的 `Primary Connection String`(参考上方步骤)。

<img src="/image/iotcloud/azure/azure_vscode_send.webp">

<img src="/image/iotcloud/azure/azure_vscode_key.webp">

>选择要发送设备的**Device ID**，然后输入要发送的消息，就可以发送消息到设备了。

<img src="/image/iotcloud/azure/azure_vscode_device.webp">

<script>

   anchor_search();
   scrollFunc();

</script>