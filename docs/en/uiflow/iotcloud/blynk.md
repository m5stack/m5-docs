# UIFlow-Access-Blynk

## Overview

>This tutorial will take building a temperature and humidity collection node as an example to demonstrate how to access the Blynk cloud service platform through the UIFlow programming device. And realize simple remote control function through Blynk APP.

## Create project

>Before accessing, you need to register an account through the Blynk APP and log in to create an application instance to obtain the corresponding Auth Token. [Click here to visit Blynk official website and install Blynk APP](https://blynk.io/en/getting-started).

> Click the `+`Add button above the APP, `Create project`->The device type is `ESP32 Dev Board`, and the connection mode is `WiFi`. After the project is successfully created, the Blynk service will generate a unique `Auth Token` for the project and send it to your registered mailbox. We will use this key in the subsequent steps.

<img src="/image/iotcloud/blynk/blynk_01.webp" width="25%">

<img src="/image/iotcloud/blynk/blynk_02.webp" width="25%">

<img  src="/image/iotcloud/blynk/blynk_03.webp" width="30%">

>完成项目创建后，将进入控制面板，通过侧边栏可自定义添加控件。该案例将添加两个`Labeled Value`用于显示温湿度数据(设置刷新时间为1s)，添加一个`Button`用于控制Speaker发声。

>After completing the project creation, you will enter the control panel, and you can customize and add controls through the sidebar. This case will add two `Labeled Value` to display temperature and humidity data (set the refresh time to 1s), and add a `Button` to control the speaker's sound.

?> The "real pins" and "virtual pins" are used in `Blynk`. The actual pin refers to that the level control made in the App will actually be applied to the corresponding pin number on the hardware device. Virtual pin is a virtual pin, we can understand it as an identifier, APP and device program will use this identifier to transfer information, and customize the processing program. The following application case will use virtual pins for configuration.

<img src="/image/iotcloud/blynk/blynk_04.webp" width="25%">

<img src="/image/iotcloud/blynk/blynk_05.webp" width="25%">

<img src="/image/iotcloud/blynk/blynk_06.webp" width="25%">


## Burn firmware

>Burn UIFlow firmware for your device (firmware requires v1.7.4 and above), click the corresponding document link below to view the detailed programming steps.

[UIFlow firmware burning steps](/zh_CN/quick_start/m5core/m5stack_core_get_started_MicroPython)

## Programming

-[Click to download the case program m5f file](https://m5stack.oss-cn-shenzhen.aliyuncs.com/resource/docs/m5f/UIFlow-Blynk.m5f), open the file in UiFlow, or follow the picture below Drag and drop code blocks.

>In the case program, the data is pushed to the APP display panel via the Blynk server by monitoring the data refresh request

<img src="/image/iotcloud/blynk/blynk_block_example.webp">

>UIFlow also supports user-defined configuration of the connected Blynk server. It is only necessary to pass in the server IP and port parameters during the initialization phase of the program.

<img src="/image/iotcloud/blynk/blynk_07.webp">

- Micropython API

```clike

from IoTcloud import blynk

blynk1.disconnect()

blynk1.email('', '', '')

blynk1.tweet('')

blynk1.notify('')

blynk1.set_property(0, '', '')

blynk1.virtual_sync(0)

blynk1 = blynk.Blynk(token='xxxxxxxxxxxxxxxxxxxxxxxxxx')

def blynk_read_v3(v_pin,value):
  print(value)
  blynk1.virtual_write(v_pin, "Hello!")

blynk1.handle_event('read v3', blynk_read_v3)

while True:
  blynk1.run()

```

## APP data acquisition and control

>After the device is successfully connected to the network and running the code, click the run button in the upper right corner of the APP project page to realize cloud connection and obtain real-time temperature and humidity data. Click the SPK control button to drive the device speaker to sound.

[Check Blynk official documentation for more control related content](https://blynk.io/)

<script>

   anchor_search();
   scrollFunc();

</script>
