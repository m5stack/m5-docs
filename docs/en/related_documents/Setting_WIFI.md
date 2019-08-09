# 配置Wi-Fi连接 {docsify-ignore-all}


:clapper: **[Video Tutorial](#Video-Tutorial)**&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;:memo: **[Text Tutorial](#Text-Tutorial)**


?>**Please click the anchor point below to view the corresponding Wi-Fi configuration tutorial according to the device type. The following content is only applicable to the M5Core device that has programmed the UIFlow firmware. If your device does not have the UIFlow firmware installed,[Please click here to view the firmware burning Tutorial](zh_CN/related_documents/M5Burner)**


## Notice

The information content of the configured WIFI is not allowed to use Chinese and special symbols.

## Text Tutorial

**[For M5Core](#For-M5Core)**

**[For M5Stick](#For-M5Stick)**

**[For M5StickC](#For-M5StickC)**

## For M5Core

>1. Click on the left side of the fuselage **red power button** power on, after the main menu is displayed on the screen, press the button C to select the Setup option, enter the settings page and select "change WiFi connect" to enter the WiFi configuration mode (at this time M5Core will As an AP hotspot, the hotspot name will be displayed on the screen).

?> The settings page will store each of the WiFi information you added later, and you can switch between the connection mode and the default WiFi on this page.

<img src="assets/img/related_documents/Setting_WiFi/M5Core/Setting_01.jpg">

>2. Connect to the hotspot using your mobile phone or other terminal device (when the connection is successful, the M5Core screen will jump to the QR code page), then open the browser to access **192.168.4.1** (or scan the QR code on the screen) Go to the WiFi configuration page.

<img src="assets/img/related_documents/Setting_WiFi/M5Core/Setting_02.jpg">

>3. In the configuration page, fill in the WiFi information you want to connect to, click "Configure", and wait for the configuration to complete.

!>.During the process of configuring WiFi, please keep the mobile phone (terminal) connected to the M5Core AP hotspot.

<img src="assets/img/related_documents/Setting_WiFi/M5Core/Setting_03.jpg">

>4. 配置完成后，将默认重启设备.在进入主菜单时，按下按键A选择"PROGRAM",设备将自动连接设定的WiFi并进入编程模式.

?> The programming mode page shows you a few key pieces of information. 1. The QR code and the top bar URL point to [UIFlow web IDE](http://flow.m5stack.com/)，2. When the upper right corner is instructed When the light changes from red to green, the device has successfully connected to the network. 3. The API Key is a certificate of the UIFlow remote push program, and UIFlow will push the program to the corresponding device according to the serial number.

<img src="assets/img/related_documents/Setting_WiFi/M5Core/Setting_04.jpg">

## For M5Stick

>1. Click the power button on the left side of the camera to turn it on. After the first boot, it will enter the WiFi configuration mode by default. The AP hotspot name and configuration page address will be displayed on the screen.

<img src="assets/img/related_documents/Setting_WiFi/M5Stick/Setting_01.png" width="120px" style="margin-left:25%"> <img src="assets/img/related_documents/Setting_WiFi/M5Stick/Setting_02.png" width=120px style="margin-left:20%">

>2. Use your mobile phone or other terminal device to open the WiFi connection to the hotspot. After waiting for the connection to succeed, use the browser to access the configuration page address 192.168.4.1, fill in the WiFi information to be connected, and click Configure Connection.

<img src="assets/img/related_documents/Setting_WiFi/M5Stick/Setting_03.jpg" width=50% ><img src="assets/img/related_documents/Setting_WiFi/M5Stick/Setting_04.jpg" width=50% >

>3. After the configuration is completed, M5Stick will automatically restart and enter the network programming mode. When the cloud prompts "done", it indicates that the network has been successfully connected. The API Key displayed on the screen will be used with[UIFlow web IDE](http://flow.m5stack.com/) Pairing.


!>. During the process of configuring WiFi, please keep the mobile phone (terminal) connected to the M5Stick AP hotspot.

<img src="assets/img/related_documents/Setting_WiFi/M5Stick/Setting_05.png" width=120px style="margin-left:40%" >


## For M5StickC

>1. Press and hold the power button on the left side of the camera for about 2 seconds to boot. After the first boot, it will enter the WiFi configuration mode by default. The AP hotspot name and configuration page address will be displayed on the screen.

<img src="assets/img/related_documents/Setting_WiFi/M5StickC/Setting_01.jpg" width=50% ><img src="assets/img/related_documents/Setting_WiFi/M5StickC/Setting_02.jpg" width=50% >

>2. Use your mobile phone or other terminal device to open the WiFi connection to the hotspot. After waiting for the connection to succeed, use the browser to access the configuration page address 192.168.4.1, fill in the WiFi information to be connected, and click Configure Connection.
<img src="assets/img/related_documents/Setting_WiFi/M5StickC/Setting_03.jpg" width=50% ><img src="assets/img/related_documents/Setting_WiFi/M5StickC/Setting_04.jpg" width=50% >

>3. After the configuration is completed, M5StickC will automatically restart and enter the network programming mode. When the network logo changes from red to green, it indicates that the network has been successfully connected. The API Key displayed on the screen will be used with[UIFlow web IDE](http://flow.m5stack.com/) Pairing.

!>. During the process of configuring WiFi, please keep the mobile phone (terminal) connected to the AP hotspot of M5StickC.

<img src="assets/img/related_documents/Setting_WiFi/M5StickC/Setting_05.jpg" width=50% >


## Video Tutorial

**[WIFI Configuration](https://v.youku.com/v_show/id_XNDAxOTEyNTQ2NA==.html?spm=a2hzp.8253869.0.0)**

<video width="500" height="315" controls>
    <source src="https://m5stack.oss-cn-shenzhen.aliyuncs.com/video/%E6%95%99%E7%A8%8B/WiFi%20Configuration/A2%20-%20WIFI%20Configuration.mp4" type="video/mp4">
</video>
