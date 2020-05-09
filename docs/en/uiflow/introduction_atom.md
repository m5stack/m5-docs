
## Flash UIFlow 

* __Download the driver__

?> ATOM only supports WIN10 & Linux & MAC free from installing drive, while the other operating systems require users to install the driver

<a href="https://www.ftdichip.com/Drivers/VCP.htm">Driver download Link</a>

* __Installing the driver__

> Extract the zip file and run the install package in the extracted folder

?> For Mac OS, make sure System preferences - > Security & Privacy - > General before installing, and allow the apps to be installed from the App Store and ident
ified developers

><img src="/image/base/System_preferences.webp" width="50%">

* __Download M5Burner__

><img src="/image/base/Windows_logo.webp" width="50" height="50"> Go to [flow.m5stack.com](http://flow.m5stack.com/) and download the latest firmware and [M5Burner(Windows)](https://m5stack.oss-cn-shenzhen.aliyuncs.com/resource/software/M5Burner-Beta.zip)

><img src="/image/base/MacOS_logo.webp" width="50" height="50">  Go to [flow.m5stack.com](http://flow.m5stack.com/) and download the latest firmware and [M5Burner(MacOS)](https://m5stack.oss-cn-shenzhen.aliyuncs.com/resource/software/M5Burner-Beta-Mac.zip)

><img src="/image/base/Linux_logo.webp" width="50" height="50">  Go to [flow.m5stack.com](http://flow.m5stack.com/) and download the latest firmware and [M5Burner(Linux)](https://m5stack.oss-cn-shenzhen.aliyuncs.com/resource/software/M5Burner-Beta-Linux.zip)

?> Mac OS users need to put M5Burner in the Application folder

><img src="/image/base/application.webp" width="50%" height="50%"> 


* __Download firmware__

>Click ATOM icon to select the appropriate firmware version and download

><img src="/image/base/download_atom_firmware.webp" width="50%" height="50%">

* __Burning process__

>Connect your ATOM device and select its COM port from the list (Check Windows device manager if you are unsure of your COM port).Select the recommended baud rate 750000,input your SSID and Password and then click "Erase", if you finished then select the firmware you wish to flash. Now press the "Burn" button, your firmware will have flashed successfully once you see the message "Burn Successfully". 

><img src="/image/base/Burner_user1.webp " width="50%"><img src="/image/base/Burner_user2.webp " width="50%">

## API Key

* __GET API KEY__

>Make sure COM port has connected,click "COM Monitor" button to open com monitor, then press the reset button on the left of ATOM, you will see com monitor printing information , API KEY is displayed at the end.

><img src="/image/base/APIKEY.webp " width="50%">

#### Connecting your device with API Key

>Once you have opened the UIflow website you can to connect to the web platform by clicking the gear icon in the top right corner, enter your API key and select your device and preferred language. Once you have entered the API Key click OK to confirm****

><img src="/image/base/APIkey_userpair1.webp" width="50%"><img src="/image/base/APIkey_userpair2.webp" width="50%">

## UIFlow-IDE

>If you want to use UIFlow offline，click **UIFlow-Desktop-IDE** for your operating system below to download.

<div class="link">
 <h4><span>Download UIFlow Desktop IDE:</span></h4>
    <p>
    <a href="https://m5stack.oss-cn-shenzhen.aliyuncs.com/resource/software/UIFlow-Desktop-IDE.zip" target="_blank" rel="noopener noreferrer"><img src="https://cdn.shopify.com/s/files/1/0056/7689/2250/files/windows_89cc6ea0-2a3c-4327-97e5-8f51f448c38b_icon.webp?v=1557026574" alt="">Windows</a>
    <a href="https://m5stack.oss-cn-shenzhen.aliyuncs.com/resource/software/UIFlow-Desktop-IDE_MacOS.zip" target="_blank" rel="noopener noreferrer"><img src="https://cdn.shopify.com/s/files/1/0056/7689/2250/files/mac_large.webp?v=1557026570" alt="">MacOS</a>
    <a href="https://m5stack.oss-cn-shenzhen.aliyuncs.com/resource/software/UIFlow-Desktop-IDE_Linux.zip" target="_blank" rel="noopener noreferrer"><img src="https://cdn.shopify.com/s/files/1/0056/7689/2250/files/linux_icon.webp?v=1557026584" alt="">Linux</a>
    </p>
</div>

#### configuration

>Unzip the downloaded UIFlow Desktop IDE archive and double-click to execute the application.

<img src="assets/img/related_documents/UIFlow_Desktop_IDE/Desktop_IDE_01.webp">

>Enter the UIFlow Desktop IDE and automatically pop up the configuration box. At this time, connect the M5 device to the computer through the Tpye-C data cable.

<img src="assets/img/related_documents/UIFlow_Desktop_IDE/Desktop_IDE_03.webp">

!>Connect via USB mode of ATOM menu

>When the ATOM device is powered on or restarted, press and hold the middle button until it is released when the blue-light breathing is displayed, and then enter USB mode.（For more information, refer to https://docs.m5stack.com/#/zh_CN/quick_start/atom/atom_quick_start）

><img src="/image/base/usbmode.webp" width="50%" height="50%">

## Toturial

* [M5StickC getting started with the Internet of things](https://m5stack.oss-cn-shenzhen.aliyuncs.com/resource/docs/UIFlow-StickC-Book-English.pdf)

* [M5GO getting started with programming](https://m5stack.oss-cn-shenzhen.aliyuncs.com/resource/docs/M5GO_Guide_English.pdf)

<script>

   anchor_search();
   scrollFunc();

</script>
