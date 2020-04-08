# Burn Firmware  {docsify-ignore-all}

:clapper: **[Video Tutorial](#Video-Tutorial)**&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;:memo: **[Text Tutorial](#Text-Tutorial)**

***

**This article will guide you how to burn a right firmware to your board via M5Burner.**

***

## Text Tutorial

**[1. related resources](#related-resources)**

**[2. Install USB Driver](#Install-USB-Driver)**

**[3. M5Burner](#M5Burner)**

**[4. Add custom firmware](#Add-custom-firmware)**

**[5. ESPTool](#ESPTool)**

## related resources

>1.Click on the M5Burner burning tool and CP210X driver for your operating system below to download.

<div class="link">
 <h4><span>M5Burner:</span></h4>
    <p>
    <a href="https://m5stack.oss-cn-shenzhen.aliyuncs.com/resource/software/M5Burner.zip" target="_blank" rel="noopener noreferrer"><img src="https://cdn.shopify.com/s/files/1/0056/7689/2250/files/windows_89cc6ea0-2a3c-4327-97e5-8f51f448c38b_icon.webp?v=1557026574" alt="">Windows</a>
    <a href="https://m5stack.oss-cn-shenzhen.aliyuncs.com/resource/software/M5Burner_MacOS.zip" target="_blank" rel="noopener noreferrer"><img src="https://cdn.shopify.com/s/files/1/0056/7689/2250/files/mac_large.webp?v=1557026570" alt="">MacOS</a>
    <a href="https://m5stack.oss-cn-shenzhen.aliyuncs.com/resource/software/M5Burner_Linux.zip" target="_blank" rel="noopener noreferrer"><img src="https://cdn.shopify.com/s/files/1/0056/7689/2250/files/linux_icon.webp?v=1557026584" alt="">Linux</a></p>

 <h4><span>CP210X Driver:</span></h4>
    <p>
    <a href="https://m5stack.oss-cn-shenzhen.aliyuncs.com/resource/drivers/CP210x_VCP_Windows.zip" target="_blank" rel="noopener noreferrer"><img src="https://cdn.shopify.com/s/files/1/0056/7689/2250/files/windows_89cc6ea0-2a3c-4327-97e5-8f51f448c38b_icon.webp?v=1557026574" alt="">Windows</a>
    <a href="https://m5stack.oss-cn-shenzhen.aliyuncs.com/resource/drivers/CP210x_VCP_MacOS.zip" target="_blank" rel="noopener noreferrer"><img src="https://cdn.shopify.com/s/files/1/0056/7689/2250/files/mac_large.webp?v=1557026570" alt="">MacOS</a>
    <a href="https://m5stack.oss-cn-shenzhen.aliyuncs.com/resource/drivers/CP210x_VCP_Linux.zip" target="_blank" rel="noopener noreferrer"><img src="https://cdn.shopify.com/s/files/1/0056/7689/2250/files/linux_icon.webp?v=1557026584" alt="">Linux</a>
    </p>
</div>

## Install USB Driver

### For Windows

>Decompress the downloaded CP210X driver package, select the installer for your operating system, and double-click to install.

<img src="assets/img/getting_started_pics/how_to_burn_firmware/M5Burner/CP210X_WIN.jpg">


### For Mac

>Unzip the downloaded CP210X driver package, install the program, double-click the image file to start the installation.

<img src="assets/img/getting_started_pics/how_to_burn_firmware/M5Burner/CP210X_MAC.webp">


## M5Burner

>1.Decompress the downloaded burning tool package.

<img src="assets/img/getting_started_pics/how_to_burn_firmware/M5Burner/M5Burner_01.jpg">

>2.Double-click to open the "M5Burner" application. The left side of the tool is the firmware version list. Click the download arrow in the list to download the corresponding firmware (gray stands for undownloaded, white stands for download).
>Click on the refresh button above to refresh the list and see if there is a new firmware release..

<img src="assets/img/getting_started_pics/how_to_burn_firmware/M5Burner/M5Burner_02.jpg">

>3.Select the firmware version you want to burn, connect the device to the computer via the Type-C cable, select the corresponding COM port and device type. Click "Burn" to start burning.

!>When burning for the first time, it is recommended to click "Erase" to clear the memory. In the subsequent firmware update, there is no need to clear it again, otherwise the saved Wi-Fi information will be deleted and the API Key will be refreshed.

<img src="assets/img/getting_started_pics/how_to_burn_firmware/M5Burner/M5Burner_03.jpg">


## Add custom firmware

>1.In addition to being able to burn the official firmware released by M5Stack, M5Burner also allows users to package the firmware and add it to the firmware list for burning.

<img src="assets/img/getting_started_pics/how_to_burn_firmware/M5Burner/M5Burner_04.jpg">


>2.When you package your own firmware, you need to follow the specified file directory rules, add the json configuration file, and finally package it into a "zip" format to add.

<img src="assets/img/getting_started_pics/how_to_burn_firmware/M5Burner/M5Burner_05.jpg">


>3.[Click to download the firmware package case](https://m5stack.oss-cn-shenzhen.aliyuncs.com/resource/docs/demo-firmware.zip).



## ESPTool

>1.For users who are accustomed to using command line operations, you can also choose ESPTool as a firmware burning tool.[Click here for details](https://github.com/espressif/esptool)


## Video Tutorial

**Windows M5Burne Tutorial**

<video width="500" height="315" controls>
    <source src="https://m5stack.oss-cn-shenzhen.aliyuncs.com/video/%E6%95%99%E7%A8%8B/Firmware%20Upgrade/A1%20-%20Firmware%20Upgrade.mp4" type="video/mp4">
</video>

<style>

.link a{

    padding-left: 13%;

}

</style>