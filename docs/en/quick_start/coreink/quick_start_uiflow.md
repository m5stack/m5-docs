# UIFlow Quick Start

?>This tutorial is for CoreInk

## USB Driver

>Before the program is burned, CoreInk users, please click the button below to download the corresponding CP210X driver compressed package according to your operating system. After decompressing the compressed package, select the installation package corresponding to the number of operating systems to install.

__Download CP210X USB Driver__

<div class="files_download">
   <p class="item">
      <a href="https://m5stack.oss-cn-shenzhen.aliyuncs.com/resource/drivers/CP210x_VCP_Windows.zip">
      <img src="/image/base/Windows_logo.webp" width="50">
      <span class="item-title">Windows10</span>
      </a>
   </p>

   <p class="item">
      <a href="https://m5stack.oss-cn-shenzhen.aliyuncs.com/resource/drivers/CP210x_VCP_MacOS.zip">
      <img src="/image/base/MacOS_logo.webp" width="50"> 
      <span class="item-title">MacOS</span>
      </a>
   </p>

   <p class="item">
      <a href="https://m5stack.oss-cn-shenzhen.aliyuncs.com/resource/drivers/CP210x_VCP_Linux.zip">
      <img src="/image/base/Linux_logo.webp" width="50"> 
      <span class="item-title">Linux</span>
      </a>
   </p>
</div>

><img src="/image/base/CP210X_install.gif " width="70%">


## Burning tool

>Please click the button below to download the corresponding M5Burner firmware burning tool according to the operating system you are using. Unzip and open the application.

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

<img src="assets/img/getting_started_pics/how_to_burn_firmware/M5Burner/M5Burner_01.webp">

?>Note: After installation for MacOS users, please put the application into the Application folder, as shown in the figure below.

><img src="/image/base/application.webp" width="70%"> 

?>Note: For Linux users, please switch to the decompressed file path and run `./M5Burner` in the terminal to run the application.

## Firmware burning

>1. Double-click to open the Burner burning tool, ①Select the corresponding device type `CoreInk` in the left menu, select the firmware version you need, and click the download button to download.

<img src="assets\img\quick_start\coreink\uiflow_01.webp" width="70%">

>2. Then connect the M5 device to the computer through the Type-C data cable, select the corresponding COM port, the baud rate can use the default configuration in M5Burner, click "Burn" to start burning, and fill in WIFI when burning Configuration information.

<img src="assets\img\quick_start\coreink\uiflow_02.webp" width="70%">

>3. When the burning log prompts `Burn Successfully`, it means that the firmware has been burned.

<img src="assets\img\quick_start\coreink\uiflow_03.webp" width="70%">

?>When burning for the first time or the firmware program runs abnormally, you can click "Erase" in the upper right corner to erase the flash memory. In the subsequent firmware update, there is no need to erase again, otherwise the saved Wi-Fi information will be deleted and refreshed API Key.

## Configure WIFI

>UIFlow provides offline and web version programmers. When using web version of UIFlow, we need to configure WiFi connection for the device. The following introduces two ways to configure WiFi connection for the device (burning configuration and AP hotspot configuration).

### Burn and configure WiFi (recommended)

?>M5Burner supports the pre-burning configuration of WiFi connection. Users only need to fill in the WiFi information into the WiFi configuration box before the firmware is burned. The filled WiFi information will be burned and saved to the M5 device along with the firmware, as shown in the tutorial above .

### AP hotspot configuration WiFi

>1. Press and hold the power button on the right side of the device for 2s to turn it on. When the UIFlow Logo appears on the screen, wait for it to enter the main page and use the dial switch to select the "Setup" option. Dial down to switch to the config Wi-Fi option and press the dial switch inward, and the device will automatically restart. Secelt Wi-Fi is the last connected WiFi. After the device jumps, the WiFi Config page will be displayed. Follow the prompts to connect to the SSID hotspot through the WiFi of the mobile phone or computer, open the browser to access __192.168.4.1__, and enter the WiFi information in the pop-up page to configure the network successfully. After the configuration is successful, the device will automatically restart. And enter programming mode。

<img src="assets\img\quick_start\coreink\uiflow_04.webp" width="100%">

?>Note: Special characters such as "space" are not allowed in the configured WiFi information.

<img src="assets\img\getting_started_pics\m5stack_core\get_started_with_uiflow\uiflow_wifi_setup2.webp">
 

## Network programming mode and API KEY

#### Enter network programming mode

?>Network programming mode is a docking mode between M5 device and UIFlow web programming platform, the screen will display the current network connection status of the device. When the WiFi and cloud connection indicator in the upper left corner of the page does not show `x`, it means that you can receive program pushes at any time. By default, after the first WiFi network configuration is successful, the device will automatically restart and enter the network programming mode. If you do not know how to re-enter the programming mode after running other applications, you can refer to the following operations.

>After booting, after the menu appears on the screen, quickly press the Flow button in the middle of the screen to enter the API KEY page, and use a computer browser to visit [flow.m5stack.com](http://flow.m5stack.com/) to enter the UIFlow programming page.

<img src="assets\img\quick_start\coreink\uiflow_07.webp" width="100%">

#### API KEY pairing

>API KEY is the communication credential when M5 device uses UIFlow web programming. By configuring the corresponding API KEY on the UIFlow side, the program can be pushed for the specified device. Users need to visit [flow.m5stack.com](http://flow.m5stack.com/) in the computer browser to enter the UIFlow programming page, click the setting button in the menu bar at the upper right corner of the page, and enter the API on the corresponding device Key, select the device type to be used, click OK to save, and wait for the prompt that the connection is successful.

<img src="assets/img/quick_start/core2/uiflow_apikey.webp">

## Hello M5

>After completing the above steps, you can start programming with UIFlow. (1. Place the label 2. Add the label block. 3 Click the run button in the upper right corner)

<img src="assets\img\quick_start\coreink\uiflow_05.webp" width="70%">

## Desktop IDE

>When using UIFlow Desktop IDE, you need to switch the CoreInk device to USB mode. After starting the device, enter the `Setup` page for configuration

<img src="assets\img\quick_start\coreink\uiflow_06.webp" width="100%">

<script>
   anchor_search();
   scrollFunc();
</script>
