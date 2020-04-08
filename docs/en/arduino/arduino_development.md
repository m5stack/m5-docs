# Arduino IDE Development{docsify-ignore-all}

## USB Driver

> Before the program is burned, M5Core host (including BASIC / GRAY / M5GO / FIRE / FACES) users please download the corresponding CP210X driver package according to the operating system you are using, click the button below. After decompressing the compressed package, select the installation package corresponding to the operating system value for installation.

Note: M5StickC / V / T / ATOM series support can be used without driver, users can skip this driver installation step.

?> For Mac OS, make sure System preferences -> Security & Privacy -> General before installing, and allow the apps to be installed from the App Store and identified developers

><img src="/image/base/System_preferences.webp" width="50%">


*__Download CP2104 driver__

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

## Arduino-IDE

>[Click here to visit Arduino's official website](https://www.arduino.cc/en/Main/Software),Select the installation package for your own operating system to download.

<img src="assets/img/related_documents/Arduino_IDE/Arduino_install.webp">


## Boards Manager

>1.Open up Arduino IDE, navigate to `File`->`Peferences`->`Settings`

<img src="assets/img/related_documents/Arduino_IDE/Arduino_1.webp">

>2.Copy the following ESP32 Boards Manager url to `Additional Boards Manager URLs:`

**https://dl.espressif.com/dl/package_esp32_index.json**

<img src="assets/img/related_documents/Arduino_IDE/Arduino_2.webp">

>3.Navigate to `Tools`->`Board:`->`Boards Manager...`

<img src="assets/img/related_documents/Arduino_IDE/Arduino_3.webp">

>4.Search `ESP32` in the pop-up window, find it and  click `Install`

<img src="assets/img/related_documents/Arduino_IDE/Arduino_4.webp">

>5.select `Tools`->`Board:`->`ESP32`

### For M5Core and M5Stick

<img src="assets/img/related_documents/Arduino_IDE/Arduino_5.webp">

### For M5StickC

<img src="assets/img/related_documents/Arduino_IDE/Arduino_77.webp">

### For Atom Matrix/Lite

<img src="assets/img/related_documents/Arduino_IDE/Arduino_66.webp">

## M5Stack Library

>Different hardware devices, with different case libraries, please choose to download according to the device you use..Open Arduino IDE, then Select `Sketch`->`Include Library`->`Manage Libraries...`

<img src="assets/img/related_documents/Arduino_IDE/Arduino_6.webp">

### For M5Core and M5Stick

?>Search `M5Stack`  , find it and click `Install`

<img src="assets/img/related_documents/Arduino_IDE/Arduino_7.webp">

### For M5Stick-C

?>Search `M5StickC` , find it and click `Install`

<img src="assets/img/related_documents/Arduino_IDE/Arduino_8.webp">

### For Atom Matrix/Lite

?>Search `M5Atom` find it and click `Install`,to use LED,you may need to install FastLED library

<img src="assets/img/related_documents/Arduino_IDE/Arduino_9.webp">


<script>

   anchor_search();
   scrollFunc();

</script>