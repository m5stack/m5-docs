# UIFlow-Access-Azure

## Overview

>This tutorial will take building a temperature and humidity collection node as an example to demonstrate how to access the Azure IoT cloud service platform through a UIFlow programming device.

## Create project

>Before accessing, you need to create an IoT center through the Azure portal and register a new device. [Click here to visit Azure official documentation for details](https://docs.microsoft.com/zh-cn/azure/iot-hub/iot-hub-create-through-portal)

<img src="/image/iotcloud/azure/azure_docs.webp" width="70%">

## Connection information

>After creating the device according to the official Azure documentation, before connecting to Azure IoT, we need to obtain two strings, namely `Primary Connection String` and `SAS Token`.

- Among them, `Primary Connection String`, we can directly see the device property interface (as shown in the figure below).

<img src="/image/iotcloud/azure/primary_connection_string.webp">

- [Click the link to see how to obtain SAS Token](https://docs.microsoft.com/zh-cn/azure/iot-hub/iot-hub-devguide-security#protocol-specifics)


## Burn firmware

>Burn UIFlow firmware for your device (firmware requires v1.7.3 and above), click the corresponding document link below to view the detailed programming steps.

[UIFlow firmware burning steps](/zh_CN/quick_start/m5core/m5stack_core_get_started_MicroPython)

## Programming

- [Click to download the case program m5f file](https://m5stack.oss-cn-shenzhen.aliyuncs.com/resource/docs/m5f/UIFlow-Azure-Core2.m5f), open the file in UiFlow, or follow Drag and drop the code block in the figure below.

>The data format uploaded in the case program is `JSON`, which can facilitate the subsequent expansion and transmission of data, such as extension to Power BI and other applications.

<img src="/image/iotcloud/azure/block_example.webp">


```clike
Connection String: "Primary Connection String"
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


## View device upload data

>After pushing the code to Core2, the device will start uploading data according to the content of the program. The way to view the data is not unique. This case will demonstrate the viewing of uploaded data through the Azure plug-in of VSCode. [Click to visit the VSCode download page](https://code.visualstudio.com/)

- Install Azure Tools plugin

<img src="/image/iotcloud/azure/azure_vscode_tool.webp">

- Install Azure IoT Hub plugin

<img src="/image/iotcloud/azure/azure_vscode_hub.webp">


>After the installation is complete, press the shortcut key `shift`+`ctrl`+`p`, call the command line, call the command `Start Monitoring Built-in Event Endpoint` function, enter the corresponding key and confirm (the incoming password The key string can be in the Azure portal, `Iot Center`-`Settings`-`Built-in Endpoints`-`Event Center-Compatible Endpoints` ). You can see the temperature and humidity data uploaded by the device to the platform.

<img src="/image/iotcloud/azure/azure_vscode_endpoint.webp">

<img src="/image/iotcloud/azure/azure_vscode_endpoint_key.webp">

<img src="/image/iotcloud/azure/azure_vscode_start.webp">

## Send message to device

>Call the command line, call the command `Azure IoT Hub: Send C2D Message to Device`, and enter the `Primary Connection String` seen in the device properties interface (refer to the steps above).

<img src="/image/iotcloud/azure/azure_vscode_send.webp">

<img src="/image/iotcloud/azure/azure_vscode_key.webp">

>Select the **Device ID** of the device to be sent, and then enter the message to be sent, and the message can be sent to the device.

<img src="/image/iotcloud/azure/azure_vscode_device.webp">

<script>

   anchor_search();
   scrollFunc();

</script>
