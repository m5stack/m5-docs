# UIFlow-接入-腾讯云

## 概述

>本教程将以搭建温湿度采集节点为案例，演示如何通过UIFlow编程设备接入腾讯云平台。

## 创建项目

>开始接入前，注册并登录[腾讯云-物联网开发平台](https://console.cloud.tencent.com/iotexplorer)，点击`公共实例`->`新建项目`->`填写项目名称/描述`->`保存`

<img src="/image/iotcloud/tencent/create_project_01.webp" width="70%">
<img src="/image/iotcloud/tencent/create_project_02.webp">

## 创建产品

>产品可以理解为某一类设备的集合，用户通过产品管理其下的所有设备。`单击上一步已经创建的项目`->`进入产品开发中心`->`新建产品`->`定义您的产品`->`填写产品基本信息`->`保存`。

<img src="/image/iotcloud/tencent/create_project_03.webp" width="45%">

?>产品基本信息设置如图中所示，其中名称可以自定义， 其它建议保持一致。

## 数据模板

>数据模板通过将物理实体设备进行数字化描述，构建其数字模型。在物联网开发平台定义数据模板即定义产品功能。完成功能定义后，系统将自动生成该产品的数据模板，由于我们选择的是自定义产品，所以是没有标准功能的，我们需要自己定义功能。`单击已创建的产品`->`新建功能`。

<img src="/image/iotcloud/tencent/create_project_04.webp" width="70%">


>如下图所示，分别定义温度与湿度功能。实际应用时，您还可以根据自己的需求添加更多的功能定义

<img src="/image/iotcloud/tencent/create_project_05.webp" width="45%">

<img src="/image/iotcloud/tencent/create_project_06.webp" width="45%">

<img src="/image/iotcloud/tencent/create_project_07.webp" width="70%">

## 新建设备

>完成功能定义，点击上方步骤`设备调试`->`点击新建设备`->`填写设备名称`->`保存`。 点击已经创建成功的设备，查看详情页。(其中将包含UIFlow连接时所需要的密钥及设备相关信息)

<img src="/image/iotcloud/tencent/create_project_08.webp">

-----------------------------------------------------------

<img src="/image/iotcloud/tencent/create_project_09.webp" width="70%">


## 烧录固件

>为你的设备烧录UIFlow固件(固件要求v1.7.3及以上版本)，点击下方对应文档链接，可查看详细烧录步骤。

[UIFlow固件烧录步骤](/zh_CN/quick_start/m5core/m5stack_core_get_started_MicroPython)

## 编写程序

- [点击下载案例程序m5f文件](https://m5stack.oss-cn-shenzhen.aliyuncs.com/resource/docs/m5f/UIFlow-Tencent-Core2.m5f)，在UiFlow中打开文件，也可以按照下图拖拽代码块。

```clike
	product id：产品ID，可以在设备信息界面查看
	device name: 设备名称，同上
	device sceret：设备秘钥，同上
	keepalive：心跳时间 0 ~ 120(秒)
```

<img src="/image/iotcloud/tencent/block_example.webp">

- Micropython API

```clike

from IoTcloud.Tencent import Tencent

//初始化连接
tencent = Tencent(
	product_id='XXXXXXXXXXX', 
	device_name='XXXXXXX', 
	username='XXXXXXXXXXXXXXXXXX;12010126;B335D;1702277766',
	password='e822dc0027a1b363f9ed1a23fb77860c0b707d7d;hmacsha1',
	port=1883,
	keepalive=30
)

//上传数据
tencent.publish_property_msg(temperature=temp,humidity=humid)


//下行数据回调
def tencent_fun(property_data):
  print(property_data)

//订阅平台下发消息
tencent.subscribe_property_msg(tencent_fun)

```

## 后台查看数据

>下方的代码块用于推送数据至云平台，数据以`key-value`形式发送，其中`key`值需要与自定义功能中的`标识符`保持一致。设备运行时，用户可以设备日志中，查看设备的上行数据。

<img src="/image/iotcloud/tencent/publish_block.webp" width="45%">

<img src="/image/iotcloud/tencent/device_upload_log.webp">

## 小程序查看数据

>腾讯云服务与小程序`腾讯连连`集成对接，用户可以非常方便的通过小程序查看设备的上报数据。`设备列表`->`设备二维码`。(打开微信小程序`腾讯连连`，点击`+`号扫码绑定设备)。

<img src="/image/iotcloud/tencent/device_qrcode.webp">

<img src="/image/iotcloud/tencent/wechat_applets.webp" width="35%">

<script>

   anchor_search();
   scrollFunc();

</script>