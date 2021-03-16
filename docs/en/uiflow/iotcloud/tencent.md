# UIFlow Tencent Cloud access

## Overview

>This tutorial will take the building of temperature and humidity collection nodes as an example to demonstrate how to access the Tencent Cloud platform through the UIFlow programming device.

## Create project

>Before accessing, register and log in to [Tencent Cloud-IoT Development Platform](https://console.cloud.tencent.com/iotexplorer), click `Public instance`->`New project`->` to fill in the project Name/Description`->`Save`

<img src="/image/iotcloud/tencent/create_project_01.webp" width="70%">
<img src="/image/iotcloud/tencent/create_project_02.webp">

## Create a product

>The product can be understood as a collection of a certain type of equipment, and the user manages all the equipment under it through the product. `Click the item created in the previous step`->`Enter the product development center`->`New product`->`Define your product`->`Fill in the basic product information`->`Save`.

<img src="/image/iotcloud/tencent/create_project_03.webp" width="45%">

?>The basic product information settings are shown in the figure, where the name can be customized, and other suggestions are consistent.

## Data Template

>The data template constructs its digital model by digitally describing the physical entity equipment. Defining data templates on the IoT development platform means defining product functions. After the function definition is completed, the system will automatically generate the data template of the product. Since we choose a custom product, there is no standard function. We need to define the function ourselves. `Click on the created product`->`New function`.

<img src="/image/iotcloud/tencent/create_project_04.webp" width="70%">


>As shown in the figure below, define the temperature and humidity functions separately. In actual application, you can also add more function definitions according to your needs

<img src="/image/iotcloud/tencent/create_project_05.webp" width="45%">

<img src="/image/iotcloud/tencent/create_project_06.webp" width="45%">

<img src="/image/iotcloud/tencent/create_project_07.webp" width="70%">

## New device

>Complete the function definition, click the above steps `Device debugging`->`Click New Device`->`Fill in the device name`->`Save`. Click on the successfully created device to view the details page. (It will contain the key and device-related information needed for UIFlow connection)

<img src="/image/iotcloud/tencent/create_project_08.webp">

-------------------------------------------------- ---------

<img src="/image/iotcloud/tencent/create_project_09.webp" width="70%">


## Burn firmware

>Burn UIFlow firmware for your device (firmware requires v1.7.3 and above), click the corresponding document link below to view the detailed programming steps.

[UIFlow firmware burning steps](/zh_CN/quick_start/m5core/m5stack_core_get_started_MicroPython)

## Programming

-[Click to download the case program m5f file](https://m5stack.oss-cn-shenzhen.aliyuncs.com/resource/docs/m5f/UIFlow-Tencent-Core2.m5f), open the file in UiFlow, or follow Drag and drop the code block in the figure below.

```clike
product id: Product ID, which can be viewed on the device information interface
device name: device name, same as above
device sceret: device secret key, same as above
keepalive: heartbeat time 0 ~ 120 (seconds)
```

<img src="/image/iotcloud/tencent/block_example.webp">

- Micropython API

```clike

from IoTcloud.Tencent import Tencent

//Initialize connection
tencent = Tencent(
product_id='XXXXXXXXXXX',
device_name='XXXXXXX',
username='XXXXXXXXXXXXXXXXXX;12010126;B335D;1702277766',
password='e822dc0027a1b363f9ed1a23fb77860c0b707d7d;hmacsha1',
port=1883,
keepalive=30
)

//upload data
tencent.publish_property_msg(temperature=temp,humidity=humid)


//Downstream data callback
def tencent_fun(property_data):
  print(property_data)

//Subscribe to the platform to send messages
tencent.subscribe_property_msg(tencent_fun)

```

## View data in the background

>The code block below is used to push data to the cloud platform, and the data is sent in the form of `key-value`, where the `key` value needs to be consistent with the `identifier` in the custom function. When the device is running, the user can view the upstream data of the device in the device log.

<img src="/image/iotcloud/tencent/publish_block.webp" width="45%">

<img src="/image/iotcloud/tencent/device_upload_log.webp">

## Mini Program to view data

>Tencent Cloud Service is integrated and docked with the small program `Tencent Lianlian`, and users can easily view the reported data of the device through the small program. `Device List`->`Device QR Code`. (Open the WeChat applet `Tencent Lianlian`, click on the `+` number to scan the code to bind the device).

<img src="/image/iotcloud/tencent/device_qrcode.webp">

<img src="/image/iotcloud/tencent/wechat_applets.webp" width="35%">

<script>

   anchor_search();
   scrollFunc();

</script>
