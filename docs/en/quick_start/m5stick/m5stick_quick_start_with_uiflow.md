# M5Stick Quick Start for UIFlow {docsify-ignore-all}

<img src="assets/img/getting_started_pics/m5stick/stick_01.png"><img src="assets/img/getting_started_pics/m5stick/stick_06.png">

1. **[Update firmware](#update-firmware)**

2. **[Power on](#power-on)**

3. **[Setting environment](#setting-environment)**

    - **[Step1. Setting WIFI](#step1-setting-wifi)**

    - **[Step2. Setting API Key](#step2-setting-api-key)**

4. **[Example](#example)**

5. **[Related Video](#Related-Video)**

6. **[UIFlow Tutorial](https://m5stack.github.io/UIFlow_doc/cn/index.html)**

## Update firmware

>Update the stick to the latest firmware version for a better experience.

*If you need to update or burn firmware by yourself, please click [here](en/related_documents/how_to_burn_firmware)*

<img src="assets/img/getting_started_pics/m5stick/stick_03.png">

## Power on

>The button located at the bottom left of stick is the power button, click to turn it on, press again to reset when running. If you want to let stick enter deep sleep status, you need to press the power button twice quickly.

>In addition to the power button, the stick also provides another button `A` for you to program.

<img src="assets/img/getting_started_pics/m5stick/stick_02.png" width="300" height="300">

## Setting environment

### Step1. Setting WIFI

When you turn on stick for the first time, it will enter the configuration page by default. And it's OLED screen will display it's own **AP name(SSID)** and **ap-setting address(192.168.4.1)**.

At this time, you can use the mobile phone to connect to this hotspot. After the connection is successful, use the browser to enter the network configuration address, enter the WIFI configuration page, enter the personal WIFI information, click `Save`, and wait for the connection to succeed.

<img src="assets/img/getting_started_pics/m5stick/stick_04.png">

## Step2. Setting API Key

After the WIFI is successfully configured, stick will automatically reset and enter the programming mode. When the screen displays “Done”, it indicates that the network has been successfully connected. Access our WebIDE [flow.m5stack.com](http://flow.m5stack.com/) for programming.

Click the `Settings` button at the top right of the [WebIDE](http://flow.m5stack.com/), enter the **API Key** displayed on the stick screen and click `Save`. Now, start programming.

<img src="assets/img/getting_started_pics/m5stack_core/get_started_with_m5stick/uiflow_setting.png">

<img src="assets/img/getting_started_pics/m5stick/stick_05.png">

## Supplement

>If clicked `Download`, stick will run the last downloaded program straight. In this case, if you want to enter programming mode, you need to press `A` button once the stick screen disappears `UIFlow` logo after it was reset.

<img src="assets/img/getting_started_pics/m5stack_core/get_started_with_m5stick/uiflow_download.png">

>If you want to configurate a new wifi for stick, you need to press and hold `A` button for more than one second and then release once the stick screen disappears `UIFlow` logo after it was reset.

## Example

>Click and download [example](https://github.com/m5stack/M5-ProductExampleCodes/tree/master/Core/M5Stick/UIFlow). And open this example code in UIFlow, then run it. Program phenomenon: White squares will scroll back and forth on the screen.

<img src="assets/img/product_pics/core/minicore/m5stick/example/example_core_m5stick_02.png" width=50% height=50%><img src="assets/img/product_pics/core/minicore/m5stick/example/example_core_m5stick_03.png" width=50% height=50%>

### Note

>the resolution of stick screen is **64x128**, so if you want to drag a graph at [WebIDE](http://flow.m5stack.com/) to display on stick screen, it's better for you to drag it within a certain range shown as following figure.(Currently only supports the display of rectangular patterns, as well as labels.)

<img src="assets/img/product_pics/core/minicore/m5stick/example/example_core_m5stick_01.png" width=50% height=50%>

## Related Video

**UIFlow introduce**

<video width="500" height="315" controls>
    <source src="https://m5stack.oss-cn-shenzhen.aliyuncs.com/video/%E6%95%99%E7%A8%8B/UIFlow%20Tutorials/A3%20-%20UIflow%E7%AE%80%E4%BB%8B.mp4" type="video/mp4">
</video>

**UIFlow quick start (Mac & Linux)**

<video width="500" height="315" controls>
    <source src="https://m5stack.oss-cn-shenzhen.aliyuncs.com/video/LukeVideo/Getting%20started%20with%20UI%20flow%20(Mac_Linux).mp4" type="video/mp4">
</video>