# UIFlow Quick Start

?> This tutorial applies to M5Core2

## Burning tool

> Please click the button below to download the corresponding M5Burner firmware burning tool according to your operating system. Unzip and open the application.

<div class="files_download">
   <p class="item">
      <a href="https://m5stack.oss-cn-shenzhen.aliyuncs.com/resource/software/M5Burner.zip">
      <img src="/image/base/Windows_logo.webp" width="50">
      <span class="item-title">Windows10</span>
      </a>
   </p>

   <p class="item">
      <a href="https://m5stack.oss-cn-shenzhen.aliyuncs.com/resource/software/M5Burner_MacOS.zip">
      <img src="/image/base/MacOS_logo.webp" width="50"> 
      <span class="item-title">MacOS</span>
      </a>
   </p>

   <p class="item">
      <a href="https://m5stack.oss-cn-shenzhen.aliyuncs.com/resource/software/M5Burner_Linux.zip">
      <img src="/image/base/Linux_logo.webp" width="50"> 
      <span class="item-title">Linux</span>
      </a>
   </p>
</div>

><img src="/image/base/CP210X_install.gif " width="70%">

?> Note: After the installation of MacOS users, please put the application in the Application folder, as shown in the figure below.

><img src="/image/base/application.webp" width="70%"> 


## Firmware burning

>1.Double-click to open the M5Burner, ①Select the corresponding device type in the left menu, ②Select the firmware version you want, ③Click the download button to download.

<img src="assets\img\quick_start\core2\burner_m5core01.webp" width="70%">

>2.Then connect the M5 device to the computer through the Type-C cable, select the corresponding COM port, the baud rate can use the default configuration in M5Burner, ④Click Erase on the right to erase Flash, close the current page when finished. ⑤Click "Burn" to start burning, you can input WIFI configuration information during burning.

<img src="assets\img\quick_start\core2\burner_m5core02.webp" width="70%">

>3.When the burning log prompts `Burn Successfully`, it means that the firmware has been burned.

<img src="assets\img\quick_start\core2\burner_m5core04.webp" width="70%">

>4. If you need to change the configuration, you can ⑥click configuration to setup.

<img src="assets\img\quick_start\core2\burner_m5core05.webp" width="70%">

?> When first burning or the firmware program runs abnormally, you can click "Erase" to erase the flash memory. In the subsequent firmware update, there is no need to erase again, otherwise the saved Wi-Fi information will be deleted and the API Key will be refreshed.


## Configure WIFI

> UIFlow provides both offline and web version of the programmer. When using the web version, we need to configure a WiFi connection for the device. The following describes two ways to configure WiFi connection for the device (Burn configuration and AP hotspot configuration).

### Burn configuration WiFi(recommend)

?> UIFlow-1.6.2 and versions above can write WiFi information directly through M5Burner.

<img src="assets/img/quick_start/core2/burner_wifi.webp" width="70%">

### AP hotspot configuration WiFi

> 1. Click the power button on the left side of the device to turn it on. The UIFlow Logo appears on the screen. After entering the main page, press the `Setup` button on the screen. In the `WiFi` option, press the start button of the config Wi-Fi by web option, and the device will automatically restart, where Secelt Wi-Fi is the last connected WiFi. After the device jumps, the WiFi Config page will be displayed. Follow the prompts to connect to the SSID hotspot through the WiFi of the mobile phone or computer, open the browser to visit __192.168.4.1__, and enter the WiFi information in the pop-up page to configure the network successfully. After the configuration is successful, the device will automatically restart. And enter the programming mode.

<img src="assets\img\quick_start\core2\core_ap_setup.webp">

?> Note: Special characters such as "space" are not allowed in the configured WiFi information.

<img src="assets\img\getting_started_pics\m5stack_core\get_started_with_uiflow\uiflow_wifi_setup2.webp ">


## Network Programming Mode and API KEY

#### Enter network programming mode

?> Network programming mode is a docking mode between M5 device and UIFlow web programming platform. The screen will show the current network connection status of the device. When the indicator is green, it means that you can receive program push at any time. Under default situation, after the first successful WiFi network configuration, the device will automatically restart and enter the network programming mode. If you do not know how to re-enter the programming mode after running other applications, you can refer to the following operations.

> After powering on, after the menu appears on the screen, quickly press the `Flow` button in the middle of the screen to enter the API KEY page. Access UIFlow programming page by visiting [flow.m5stack.com](http://flow.m5stack.com/) on a computer browser.

<img src="assets\img\quick_start\core2\core_wifi_mode.webp">

#### API KEY Pairing

> API KEY is the communication credential for M5 devices when using UIFlow web programming. By configuring the corresponding API KEY on the UIFlow side, the program can be pushed for the specific device. The user needs to visit [flow.m5stack.com](http://flow.m5stack.com/) in the computer web browser to enter the UIFlow programming page. Click the setting button in the menu bar at the upper right corner of the page, enter the API Key on the corresponding device, select the hardware used, click OK to save and wait till it prompts successfully connecting.

<img src="assets/img/quick_start/core2/uiflow_use.gif">

<!---

## UIFlow Desktop IDE

> UIFlow Desktop IDE is an offline version of UIFlow programmer which does not require network connection, and can provide you with responsive program push experience. Please click the corresponding version of **UIFlow-Desktop-IDE** to download according to your operating system .

<div class="files_download">
   <p class="item">
      <a href="https://m5stack.oss-cn-shenzhen.aliyuncs.com/resource/software/UIFlow-Desktop-IDE.zip">
      <img src="/image/base/Windows_logo.webp" width="50">
      <span class="item-title">Windows10</span>
      </a>
   </p>

   <p class="item">
      <a href="https://m5stack.oss-cn-shenzhen.aliyuncs.com/resource/software/UIFlow-Desktop-IDE_MacOS.zip">
      <img src="/image/base/MacOS_logo.webp" width="50"> 
      <span class="item-title">MacOS</span>
      </a>
   </p>

   <p class="item">
      <a href="https://m5stack.oss-cn-shenzhen.aliyuncs.com/resource/software/UIFlow-Desktop-IDE_Linux.zip">
      <img src="/image/base/Linux_logo.webp" width="50"> 
      <span class="item-title">Linux</span>
      </a>
   </p>
</div>


#### USB programming mode

> Unzip the downloaded UIFlow Desktop IDE archive and double-click to run the application.

<img src="assets/img/quick_start/core2/IDE1.jpg">

?> After the app starts, it will automatically detect whether your computer has a USB driver (CP210X), click Install, and follow the prompts to finish installation.

<img src="assets/img/quick_start/core2/IDE2.jpg">

> After the driver installation is complete, it will automatically enter the UIFlow Desktop IDE and automatically pop up the configuration box. At this time, connect the M5 device to the computer through the Tpye-C data cable.

<img src="assets/img/quick_start/core2/usb_connect.jpg">

!> Using UIFlow Desktop IDE requires M5 device with UIFlow firmware and enter ** USB programming mode **.

> Click the power button on the left side of the device to restart, after entering the menu, quickly click the right button to select **USB mode**.

<img src="assets/img/quick_start/core2/usb_mode.jpg">

> Select the corresponding port, and the programming device, click OK to connect.

<img src="assets/img/quick_start/core2/desktop.jpg">


--->

## Related Links

* [UIFlow Block introduction](en/uiflow/uiflow_home_page)


<script>
   anchor_search();
   scrollFunc();
</script>
