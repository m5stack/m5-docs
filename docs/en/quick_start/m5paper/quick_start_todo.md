# M5Paper ToDo Guide

?>This tutorial is for M5Paper

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

>1. Double-click to open the Burner burning tool, ①Select the corresponding device type `M5Paper` in the left menu, select the `TODO` firmware, and click the download button to download.

<img src="assets\img\quick_start\m5paper\todo_01.webp">

>2. Then connect the M5 device to the computer through the Type-C data cable, select the corresponding COM port, the baud rate can use the default configuration in M5Burner, and click "Burn" to start burning. When the burning log prompts `Burn Successfully`, it means that the firmware has been burned.

<img src="assets\img\quick_start\coreink\uiflow_03.webp">

>3. After the burning is completed, the device will automatically restart. The first time it starts, the introduction page will be displayed, which contains the precautions. Click on the screen to enter the next language configuration. Both languages other than English need to load font files from the TF card (the font file name must be `Font.ttf`). [Example ttf file download address](https://m5stack.oss-cn-shenzhen.aliyuncs.com/resource/example/Font.ttf). Time zone configuration. Click `Exit` in the upper left corner to enter the next page. .

<img src="assets\img\quick_start\m5paper\todo_02.webp">

>4. Select the WiFi network to be connected and enter the password to connect. After the connection is successful, the device code will be automatically generated.

<img src="assets\img\quick_start\m5paper\todo_03.webp">

>5. Visit [mircrosoft.com/devicelogin](mircrosoft.com/devicelogin), fill in the device code and bind the personal Microsoft account, and wait for the binding to complete.

<img src="assets\img\quick_start\m5paper\todo_04.webp">
<img src="assets\img\quick_start\m5paper\todo_05.webp">

>6. After the binding is successful, you can add tasks through the official todo application of Microsoft, and synchronize them to M5Paper. (After M5Paper enters the list, press the center button of the trackwheel to refresh the list.)[Download Microsoft ToDo App](https://to-do.microsoft.com/tasks/)

<img src="assets\img\quick_start\m5paper\todo_06.webp">

## Code

- **Arduino** 
   - [M5EPD_Todo](https://github.com/m5stack/M5EPD_Todo)
   - [M5EPD-Lib](https://github.com/m5stack/M5EPD)

<script>

   anchor_search();
   scrollFunc();

</script>