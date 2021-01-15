# Network Over COM.LTE tutorial

>Network Over COM.LTE mode enables all network data to be sent via LTE when the device uses UIFlow.

>Note: When `CORE2` uses `Network Over COM.LTE mode`, the 5V power supply of the M-BUS will be switched to input mode, please directly input 5V power to M-BUS or use a DC adapter to connect to LTE The module supplies power.

## Pre-requirements

### Driver Installation

>Before we start programming, users of M5Core type host (including BASIC/GRAY/M5GO/FIRE/FACES/CORE2) should download the corresponding CP210X driver compressed package according to the operating system you are using. After decompressing the package, Select the installation package corresponding to the number of operating systems to install.

* __Download CP210X driver__

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

<img src="/image/base/CP210X_install.gif "width="80%">


### Burning tool

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

<img src="/image/base/application.webp" width="80%">

?>Note: For Linux users, please switch to the decompressed file path and run `./M5Burner` in the terminal to run the application.

### Firmware burning

>1. Double-click to open the Burner burning tool, select the corresponding device type in the left menu, select the firmware version you need, and click the download button to download.

<img src="assets/img/quick_start/core/burner_m5core01.webp" width="80%">

>2. Then connect the M5 device to the computer through the Type-C data cable, select the corresponding COM port, and click "Burn" to start burning.

<img src="assets/img/quick_start/core/burner_m5core02.webp" width="80%">

>3. When the burning log prompts `Burn Successfully`, it means that the firmware has been burned.

<img src="assets/img/quick_start/core/burner_done.webp" width="80%">

### LTE module

>1. Insert the MicroSIM card into the module card slot, adjust the DIP switch, `enable pins 13,5`, and connect the external antenna.

?>When using the CORE1 device, please adjust the DIP switch to `pin 13,5`, and CORE2 adjust the DIP switch to `pin 16,17`

<img src="assets/img/quick_start/comx_lte/lte_network_over_com_01.webp" width="80%">

## Set APN/Switch Mode

>1. Click `Configuration`, the software will start to read the configuration information of the current device. In the pop-up configuration box, you can reconfigure the APN according to the operator you are using. (The default APN is CMNET)

<img src="assets/img/quick_start/comx_lte/configuration.webp" width="80%">

<img src="assets/img/quick_start/comx_lte/config_window.webp" width="80%">

>2. Switch the device to COM.LTE working mode, you can set the `COM.X` option in the configuration box to `True`, or after the device is started, enter the Setup configuration page to switch modes.

<img src="assets/img/quick_start/comx_lte/lte_network_over_com_02.webp" width="80%">


## start using

>1. After the configuration is completed, it will be automatically activated after booting, and the inspection will begin. After passing the test, you will enter the programming mode page.

>2. Refer to the following case and request the URL `https://httpbin.org/ip` through http to obtain the current IP of the machine.

<img src="assets/img/quick_start/comx_lte/http_get_ip.webp" width="80%">

<script>
   anchor_search();
   scrollFunc();
</script>
