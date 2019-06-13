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

> For a better developing experience, Please update your device to the newest firmware version.

*To update UIFlow firmware, please click [here](en/related_documents/how_to_burn_firmware)*

<img src="assets/img/getting_started_pics/m5stick/stick_03.png">

## Power on

>The button located on the bottom left is the power button, single-click to  reboot. To enter deep sleep mode, double click this button.

>In addition to the power button, M5Stick also provides another button, Button`A`.

<img src="assets/img/getting_started_pics/m5stick/stick_02.png" width="300" height="300">

## Set up environment

### Step1. Set up WIFI

- If you got M5Stick for the very first time, once it powered on, by default, it will enter the configuration page. The LED screen will display an **AP name(SSID)** and a **webpage address(192.168.4.1)**.

- You will need to use your phone to connect that AP. 
- Once it connected, you will need to visit this address (192.168.4.1) on your phone browser.
- Now that you have entered the WIFI configuration page, choose your local WIFI, and type in password, click `Save`, and hold on for the connection to be done.

<img src="assets/img/getting_started_pics/m5stick/stick_04.png">

## Step2. Setting API Key

- After connected with the local Wi-Fi(5G is not supported yet), M5Stick will reset and get into program mode automatically. 
- When a display on the screen shows “Done”, means that the device has connected to the internet.
- To get access to our WebIDE, please visit here [flow.m5stack.com](http://flow.m5stack.com/).

- On the webpage, top right, navigate to `Settings` ,type in the **API Key** on the screen and click `Save`. 
  
- Hold on untill the webpage shows "connected". 
- Now that the device has established a connection with the UIFlow server. we can start programming

<img src="assets/img/getting_started_pics/m5stack_core/get_started_with_m5stick/uiflow_setting.png">

<img src="assets/img/getting_started_pics/m5stick/stick_05.png">

## Supplement

> What gonna happen if you click `Download`?<br>
 You will have the current code downloading onto the device, it will reboot right away. Then, the device will enter "execute" mode back from the reboot. In this case, if you want to go back to program mode, you will need to press the power button to reboot the device and press button `A` right away.

<img src="assets/img/getting_started_pics/m5stack_core/get_started_with_m5stick/uiflow_download.png" width="50%" height="50%">

>How to switch to another Wi-Fi for the device?
- First, reboot the device,
- Right after the reboot, press and hold  button `A` for more than one second.
- Rrelease the button when `UIFlow` logo appears on the screen .

## Related Video

**UIFlow introduction**

<video width="500" height="315" controls>
    <source src="https://m5stack.oss-cn-shenzhen.aliyuncs.com/video/%E6%95%99%E7%A8%8B/UIFlow%20Tutorials/A3%20-%20UIflow%20Tutorial%201.mp4" type="video/mp4">
</video>

**UIFlow quick start (Mac & Linux)**

<video width="500" height="315" controls>
    <source src="https://m5stack.oss-cn-shenzhen.aliyuncs.com/video/LukeVideo/Getting%20started%20with%20UI%20flow%20(Mac_Linux).mp4" type="video/mp4">
</video>