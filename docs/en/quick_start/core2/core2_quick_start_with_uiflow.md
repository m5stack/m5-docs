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

<img src="assets/img/quick_start/core2/burn2.jpg">

?> Note: After the installation of MacOS users, please put the application in the Application folder, as shown in the figure below.

><img src="/image/base/application.webp" width="70%"> 


## Firmware burning

>1.Double-click to open the Burner burning tool, select the corresponding device type in the left menu, select the firmware version you need, and click the download button to download.

<img src="assets/img/quick_start/core2/burn_core2_01.jpg" width="70%"> 

>2.Then connect the M5 device to the computer through the Type-C cable, select the corresponding COM port, the baud rate can use the default configuration in M5Burner, in addition, you can also fill in the WIFI that the device will be connected to during the firmware burning stage information. After configuration, click "Burn" to start burning.

<img src="assets/img/quick_start/core2/burn_core2_02.jpg" width="70%"> 

>3.When the burning log prompts `Burn Successfully`, it means that the firmware has been burned.

<img src="assets/img/quick_start/m5stickcplus/burn_done.webp" width="70%">

?> When first burning or the firmware program runs abnormally, you can click "Erase" to erase the flash memory. In the subsequent firmware update, there is no need to erase again, otherwise the saved Wi-Fi information will be deleted and the API Key will be refreshed.


## Configure WIFI

> UIFlow provides both offline and web version of the programmer. When using the web version, we need to configure a WiFi connection for the device. The following describes two ways to configure WiFi connection for the device (Burn configuration and AP hotspot configuration).

### Burn configuration WiFi(recommend)

?> UIFlow-1.5.4 and versions above can write WiFi information directly through M5Burner.

<img src="assets/img/quick_start/m5stickcplus/burner_wifi.webp" width="70%">

### AP hotspot configuration WiFi

> 1. Press and hold the power button on the left to turn on the machine. If WiFi is not configured, the system will automatically enter the network configuration mode when it is turned on for the first time. Suppose you want to re-enter the network configuration mode after running other programs, you can refer to the operation below. After the UIFlow Logo appears at startup, quickly click the Home button (center M5 button) to enter the configuration page. Press the button on the right side of the fuselage to switch the option to Setting, and press the Home button to confirm. Press the right button to switch the option to WiFi Setting, press the Home button to confirm, and start the configuration.

<img src="assets/img/quick_start/core2/wifi_ap.jpg">

> 2. After successfully connecting to the hotspot with your mobile phone, open the mobile phone browser to scan the QR code on the screen or directly access __192.168.4.1__, enter the page to fill in your personal WIFI information, and click Configure to record your WiFi information. The device will restart automatically after successfully configuring and enter programming mode.

?> Note: Special characters such as "space" are not allowed in the configured WiFi information.

<img src="assets\img\getting_started_pics\m5stack_core\get_started_with_uiflow\uiflow_wifi_setup2.webp ">


## Network Programming Mode and API KEY

#### Enter network programming mode

?> Network programming mode is a docking mode between M5 device and UIFlow web programming platform. The screen will show the current network connection status of the device. When the indicator is green, it means that you can receive program push at any time. Under default situation, after the first successful WiFi network configuration, the device will automatically restart and enter the network programming mode. If you do not know how to re-enter the programming mode after running other applications, you can refer to the following operations.

> restarting, press button A in the main menu interface to select the programming mode and wait till the right indicator of the network indicator to turn green in the programming mode page. Access UIFlow programming page by visiting [flow.m5stack.com](http://flow.m5stack.com/) on a computer browser.

<img src="assets/img/quick_start/core2/wifi_mode.jpg">

#### API KEY Pairing

> API KEY is the communication credential for M5 devices when using UIFlow web programming. By configuring the corresponding API KEY on the UIFlow side, the program can be pushed for the specific device. The user needs to visit [flow.m5stack.com](http://flow.m5stack.com/) in the computer web browser to enter the UIFlow programming page. Click the setting button in the menu bar at the upper right corner of the page, enter the API Key on the corresponding device, select the hardware used, click OK to save and wait till it prompts successfully connecting.

<img src="assets/img/quick_start/core2/api.jpg">

## HTTP
 
> Complete the above steps, then you can start programming with UIFlow. For example:Access Baidu via HTTP

<img src="assets/img/quick_start/core2/example.jpg" width="40%">

## BLE UART 

#### Function Description

>Establish Bluetooth connection and enable Bluetooth passthrough service.

><img src="/image/Advanced module/ble_uart.webp" width="40%"> 

* __Init ble uart name__
Initialize settings, configure Bluetooth device name.

* __BLE UART Writre__
Send data using BLE UART.

* __BLE UART remain cache__
Check the number of bytes of BLE UART data.

* __BLE UART read all__
Read all data in BLE UART cache.

* __BLE UART read characters__
Read n data in BLE UART cache.

#### Instructions

>Establish Bluetooth passthrough connection and send on / off control LED.

><img src="/image/Advanced module/ble_uart_user.webp" width="70%">


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


## Related Links

* [UIFlow Block introduction](zh_CN/uiflow/uiflow_home_page)


<script>
   anchor_search();
   scrollFunc();
</script>
