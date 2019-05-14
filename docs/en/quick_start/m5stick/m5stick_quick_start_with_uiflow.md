# M5Stick Quick Start - UIFlow {docsify-ignore-all}

<img src="assets/img/getting_started_pics/m5stick/stick_01.png"><img src="assets/img/getting_started_pics/m5stick/stick_06.png"><img src="assets/img/uiflow-logo.png">

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

*If you need to update or flash firmware, please click [here](en/related_documents/how_to_burn_firmware)*

<img src="assets/img/getting_started_pics/m5stick/stick_03.png">

## Power on

>The button located on the bottom left is the power button, single-click to  reboot. To enter deep sleep mode, double click this button

>In addition to the power button, M5Stick also provides another button, Button`A`.

<img src="assets/img/getting_started_pics/m5stick/stick_02.png" width="300" height="300">

## Set up environment

### Step1. Set up WIFI

- If you power on M5Stick for the very first time, it will enter the configuration page by default. And it's OLED screen will display an **AP name(SSID)** and **ap-setting address(192.168.4.1)**.

- In this case, you can use your phone to connect AP. 
- After connected, use a browser on your phone and type in 192.168.4.1 onto the address bar.
- Enter the WIFI configuration page, choose your local WIFI, and type in password, click `Save`, and hold on for the connection to be done.

<img src="assets/img/getting_started_pics/m5stick/stick_04.png">

## Step2. Setting API Key

- After connected with  Wi-Fi, M5Stick will  reset and enter the programming mode automatically. 
- When the screen displays “Done”, which means that the device has connected to the internet. 
- To get access to our WebIDE, please visit here [flow.m5stack.com](http://flow.m5stack.com/).

- On the webpage, top right, navigate to `Settings` ,type in  the **API Key** displayed on the M5stick screen and click `Save`. 
  
- After it was connected to the UIFlow, we can start programming

<img src="assets/img/getting_started_pics/m5stack_core/get_started_with_m5stick/uiflow_setting.png">

<img src="assets/img/getting_started_pics/m5stick/stick_05.png">

## Supplement

>If clicked `Download`, the device will downloaded the latest code, and after reboot the device will enter "execute" mode. In this case, if you want to go back to program mode, you will need to press `A` button right after it reset.

<img src="assets/img/getting_started_pics/m5stack_core/get_started_with_m5stick/uiflow_download.png">

>If you want to switchh to a new wifi for the device, you will need to reboot the device and press and hold `A` button for more than one second, and release once the stick screen sappears `UIFlow` logo.

## Related Video

**UIFlow introduction**

<video width="500" height="315" controls>
    <source src="https://m5stack.oss-cn-shenzhen.aliyuncs.com/video/%E6%95%99%E7%A8%8B/UIFlow%20Tutorials/A3%20-%20UIflow%20Tutorial%201.mp4" type="video/mp4">
</video>

**UIFlow quick start (Mac & Linux)**

<video width="500" height="315" controls>
    <source src="https://m5stack.oss-cn-shenzhen.aliyuncs.com/video/LukeVideo/Getting%20started%20with%20UI%20flow%20(Mac_Linux).mp4" type="video/mp4">
</video>