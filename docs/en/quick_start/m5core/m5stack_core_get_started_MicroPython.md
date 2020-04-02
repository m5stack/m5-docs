# UIFlow Quick Start

?>This tutorial applies to BASIC / GRAY / M5GO / FIRE / FACES kit

## Driver Installation

> Before the program is burned, M5Core host (including BASIC / GRAY / M5GO / FIRE / FACES) users please download the corresponding CP210X driver package according to the operating system you use. After decompressing the package, select the corresponding package The installation package of the operating system digits.

* __Download CP2104 driver__

<div class="files_download">
   <p class="item">
      <a href="https://m5stack.oss-cn-shenzhen.aliyuncs.com/resource/drivers/CP210x_VCP_Windows.zip">
      <img src="/image/base/Windows_logo.png" width="50">
      <span class="item-title">Windows10</span>
      </a>
   </p>

   <p class="item">
      <a href="https://m5stack.oss-cn-shenzhen.aliyuncs.com/resource/drivers/CP210x_VCP_MacOS.zip">
      <img src="/image/base/MacOS_logo.png" width="50"> 
      <span class="item-title">MacOS</span>
      </a>
   </p>

   <p class="item">
      <a href="https://m5stack.oss-cn-shenzhen.aliyuncs.com/resource/drivers/CP210x_VCP_Linux.zip">
      <img src="/image/base/Linux_logo.png" width="50"> 
      <span class="item-title">Linux</span>
      </a>
   </p>
</div>

><img src="/image/base/CP210X_install.gif " width="70%">


## M5Burner

> Please click the button below to download the corresponding M5Burner firmware burning tool according to your operating system. Unzip and open the application.

<div class="files_download">
   <p class="item">
      <a href="https://m5stack.oss-cn-shenzhen.aliyuncs.com/resource/software/M5Burner.zip">
      <img src="/image/base/Windows_logo.png" width="50">
      <span class="item-title">Windows10</span>
      </a>
   </p>

   <p class="item">
      <a href="https://m5stack.oss-cn-shenzhen.aliyuncs.com/resource/software/M5Burner_MacOS.zip">
      <img src="/image/base/MacOS_logo.png" width="50"> 
      <span class="item-title">MacOS</span>
      </a>
   </p>

   <p class="item">
      <a href="https://m5stack.oss-cn-shenzhen.aliyuncs.com/resource/software/M5Burner_Linux.zip">
      <img src="/image/base/Linux_logo.png" width="50"> 
      <span class="item-title">Linux</span>
      </a>
   </p>
</div>


<img src="assets/img/getting_started_pics/how_to_burn_firmware/M5Burner/M5Burner_01.jpg">

?>Note: After the installation of MacOS users, please put the application in the Application folder, as shown in the figure below.

><img src="/image/base/application.png" width="70%"> 


## Firmware burning

> 1. Double-click the Burner burning tool, click the download button in the left menu, download the firmware version you need, and then connect the M5 device to the computer through a Type-C data cable, select the corresponding COM port, and the baud rate , And the type of programming device.

?>Note: M5Burner includes UIFlow firmware versions for many M5Stack products. Therefore, you need to select the correct device type before proceeding with the burning process to obtain the firmware that matches the device, as shown in the figure below. (The burning rate can use the default configuration of the burner. In special cases, you can try to reduce it to 115200).

<img src="/image/base/device_select.jpg" width="70%"> 

> 2. Select the firmware version you want to burn, connect the device to the computer via Type-C data cable, select the corresponding COM port and device type. Click "Burn" to start burning.

?> When first burning or the firmware program runs abnormally, you can click "Erase" to erase the flash memory. In the subsequent firmware update, there is no need to erase again, otherwise the saved Wi-Fi information will be deleted and the API Key will be refreshed.

<img src="/image/base/Burner_user.gif " width="70%">

## Configure WIFI

> UIFlow provides an offline and web version of the programmer. When using the web version of UIFlow, we need to configure a WiFi connection for the device. The following describes two ways to configure WiFi connection for the device (flash configuration and AP hotspot configuration).

### Burn configuration WiFi

?> UIFlow-1.4.5 and above can write WiFi information directly through M5Burner.

<img src="assets\img\getting_started_pics\m5stack_core\get_started_with_uiflow\m5burner_wifi.jpg " width="70%">

### AP hotspot configuration WiFi

> 1. Click the red power button on the left side of the device to turn it on, press button A quickly after the UIFlow Logo appears on the screen, and use a mobile phone to connect to the wifi hotspot displayed on the device screen

<img src="assets\img\getting_started_pics\m5stack_core\get_started_with_uiflow\uiflow_wifi_setup1.jpg ">

> 2. After successfully connecting to the hotspot with your mobile phone, open the mobile phone browser to scan the QR code on the screen, or directly access __192.168.4.1__, enter the page to fill in your personal WIFI information, and click Configure to make the device record your WiFi information. The device will restart automatically after successful configuration. And enter programming mode.

?> Note: Special characters such as "space" are not allowed in the configured WiFi information.

<img src="assets\img\getting_started_pics\m5stack_core\get_started_with_uiflow\uiflow_wifi_setup2.jpg ">

## Network Programming Mode and API KEY

#### Enter network programming mode

?> Network programming mode is a docking mode between M5 device and UIFlow web programming platform. The screen will show the current network connection status of the device. When the indicator is green, it means that you can receive program push at any time. By default, after the first successful WiFi network configuration, the device will automatically restart and enter the network programming mode. If you do not know how to re-enter the programming mode after running other applications, you can refer to the following operations.

> After powering on, press button A in the main menu interface to select the programming mode. Wait for the right indicator light to turn green in the programming mode page, scan the QR code on the screen with a tablet, or directly access it in a computer browser.[flow.m5stack.com](http://flow.m5stack.com/)Enter the UIFlow programming page.

<img src="assets\img\getting_started_pics\m5stack_core\get_started_with_uiflow\uiflow_program_mode.jpg ">


#### API KEY

> API KEY is the communication credentials for M5 devices when using UIFlow web programming. By configuring the corresponding API KEY on the UIFlow side, the program can be pushed for the specified device. The user needs to visit in the computer browser[flow.m5stack.com](http://flow.m5stack.com/)Enter the UIFlow programming page, click the setting button in the menu bar at the upper right corner of the page, enter the API Key on the corresponding device, select the hardware used, click OK to save, and wait for the prompt to connect successfully.

<img src="assets\img\getting_started_pics\m5stack_core\get_started_with_uiflow\uiflow_apikey.jpg ">


## Hello M5
 
> Complete the above steps, you can start programming with UIFlow. The following will show you a simple program that drives the screen to display "Hello M5". (1. Place a label 2. Add a label program block .3 Click the run button in the upper right corner)

<img src="assets\img\getting_started_pics\m5stack_core\get_started_with_uiflow\hello_m5.gif ">


## UIFlow Desktop IDE

> UIFlow Desktop IDE is an offline version of UIFlow programmer, which does not require network dependencies, and can provide a responsive program push experience. Please click the corresponding version of **UIFlow-Desktop-IDE** to download according to your operating system .

<div class="files_download">
   <p class="item">
      <a href="https://m5stack.oss-cn-shenzhen.aliyuncs.com/resource/software/UIFlow-Desktop-IDE.zip">
      <img src="/image/base/Windows_logo.png" width="50">
      <span class="item-title">Windows10</span>
      </a>
   </p>

   <p class="item">
      <a href="https://m5stack.oss-cn-shenzhen.aliyuncs.com/resource/software/UIFlow-Desktop-IDE_MacOS.zip">
      <img src="/image/base/MacOS_logo.png" width="50"> 
      <span class="item-title">MacOS</span>
      </a>
   </p>

   <p class="item">
      <a href="https://m5stack.oss-cn-shenzhen.aliyuncs.com/resource/software/UIFlow-Desktop-IDE_Linux.zip">
      <img src="/image/base/Linux_logo.png" width="50"> 
      <span class="item-title">Linux</span>
      </a>
   </p>
</div>


#### USB programming mode

> Unzip the downloaded UIFlow Desktop IDE archive, and double-click to execute the application.

<img src="assets/img/related_documents/UIFlow_Desktop_IDE/Desktop_IDE_01.jpg">

?> After the software starts, it will automatically detect whether your computer has a USB driver (CP210X) installed, click Install, and follow the prompts to install it.

<img src="assets/img/related_documents/UIFlow_Desktop_IDE/Desktop_IDE_02.png">

> After the driver installation is complete, it will automatically enter the UIFlow Desktop IDE and automatically pop up the configuration box. At this time, connect the M5 device to the computer through the Tpye-C data cable.

<img src="assets/img/related_documents/UIFlow_Desktop_IDE/Desktop_IDE_03.png">

!> Using UIFlow Desktop IDE requires M5 device with UIFlow firmware and enter ** USB programming mode **.

> Click the power button on the left side of the device to restart. Quickly select Setup after entering the menu, enter the configuration page, and select ** USB mode **.

<img src="assets/img/related_documents/UIFlow_Desktop_IDE/Desktop_IDE_04.png">

> Select the corresponding port, and the programming device, click OK to connect.

<img src="assets/img/related_documents/UIFlow_Desktop_IDE/Desktop_IDE_05.jpg">


## Related Videos

-Introduction to UIFlow

<video width="500" controls>
    <source src="https://m5stack.oss-cn-shenzhen.aliyuncs.com/video/LukeVideo/UI%20Flow%20Overview.mp4" type="video/mp4">
</video>

-Video tutorial for developing M5Core in UIFlow

<video width="500" controls>
    <source src="https://m5stack.oss-cn-shenzhen.aliyuncs.com/video/%E6%95%99%E7%A8%8B/UIFlow%20Tutorials/A3%20-%20UIflow%E7%AE%80%E4%BB%8B.mp4" type="video/mp4">
</video>


## Related Links

* [M5GO Programming Tutorial](https://m5stack.oss-cn-shenzhen.aliyuncs.com/resource/docs/UIFlow-Book-zh_cn.pdf)
* [UIFlow Block introduction](en/uiflow/uiflow_home_page)


<script>
   anchor_search();
   scrollFunc();
</script>
