
1. [Flash UIFlow firmware](#Flash-UIFlow-firmware)

2. [Setup WIFI](#Setup-WIFI)

3. [Configure APIKey](#Configure-API-Key)

4. [UIFlow Quick Start](#UIFlow-Quick-Start)



# Flash UIFlow firmware

* __Downloading the driver__

><img src="/image/base/Windows_logo.png" width="50" height="50"> Go to [m5stack.com](http://m5stack.com/) and download Windows driver [CP210X Drivers](https://m5stack.oss-cn-shenzhen.aliyuncs.com/resource/drivers/CP210x_VCP_Windows.zip)

><img src="/image/base/MacOS_logo.png" width="50" height="50"> Go to [m5stack.com](http://m5stack.com/) and download MacOS driver [CP210X Drivers](https://m5stack.oss-cn-shenzhen.aliyuncs.com/resource/drivers/CP210x_VCP_MacOS.zip)

><img src="/image/base/Linux_logo.png" width="50" height="50">  Go to [m5stack.com](http://m5stack.com/) and download Linux driver [CP210X Drivers](https://m5stack.oss-cn-shenzhen.aliyuncs.com/resource/drivers/CP210x_VCP_Linux.zip)

* __Installing the driver__

> Extract the zip file and run the install package in the extracted folder

><img src="/image/base/CP210X_install.gif " width="50%">


* __Download M5Burner__

><img src="/image/base/Windows_logo.png" width="50" height="50"> Go to [flow.m5stack.com](http://flow.m5stack.com/) and download the latest firmware and [M5Burner(Windows)](https://m5stack.oss-cn-shenzhen.aliyuncs.com/resource/software/M5Burner.zip)

><img src="/image/base/MacOS_logo.png" width="50" height="50">  Go to [flow.m5stack.com](http://flow.m5stack.com/) and download the latest firmware and [M5Burner(MacOS)](https://m5stack.oss-cn-shenzhen.aliyuncs.com/resource/software/M5Burner_MacOS.zip)

><img src="/image/base/Linux_logo.png" width="50" height="50">  Go to [flow.m5stack.com](http://flow.m5stack.com/) and download the latest firmware and [M5Burner(Linux)](https://m5stack.oss-cn-shenzhen.aliyuncs.com/resource/software/M5Burner_Linux.zip)

><img src="/image/base/Burner_DL.png" width="50%">

* __Burning process__

> Extract the burner package and double click on the M5 Burner icon. Connect your M5Stack device and select its COM port from the list (Check Windows device manager if you are unsure of your COM port).Select the recommended baud rate 921600 and then select the firmware you wish to flash. Now press the burn button, your firmware will have flashed successfully once you see the message "leaving staying in bootloader". Reset your device to see the new firmware.

><img src="/image/base/Burner_user.gif " width="50%">


# Setup WIFI

* __M5GO__

>__*1.4.5 version and above can be configured directly through M5Bunner__

>1.Single press the red start button on the side of the M5GO, When the logo appears press the button-A quickly to enter the WiFi setup menu.Select change wi-fi connect and then connect to the M5GO's access point with your computer or mobile device (The access point will look something like "M5Stack-xxxx")

>2.Once you have connected to your M5GO's access point you can enter the wifi settings page by scanning the QR code or by entering __192.168.4.1__ into your browser. Then you have arrived at the page choose your home wifi network from the list, enter your password and click configure

><img src="/image/base/1.png" width="15%"> &nbsp;&nbsp;<img src="/image/base/2.png" width="60%">


* __M5StickC__

>__*1.4.5 version and above can be configured directly through M5Bunner__

>1.Single press the power button,then connect to the StickC's access point with your computer or mobile device (The access point will look something like "M5Stack-xxxx")

>2.Once you have connected to your StickC's access point you can enter the wifi settings page by entering __192.168.4.1__ into your browser. Then you have arrived at the page choose your home wifi network from the list, enter your password and click configure

><img src="/image/base/3.png" width="10%"> &nbsp;&nbsp; <img src="/image/base/4.png" width="12%"> 

* __Atom Matrix__ __&__ __Atom Lite__

>__*1.4.5 version and above can be configured directly through M5Bunner__

>1.After the device is powered on, press and hold the middle button, and release it when the LED turns to yellow breathing light, and the yellow light will always on,then connect to the Atom's access point with your computer or mobile device (The access point will look something like "M5Stack-xxxx")

>2.Once you have connected to your Atom's access point you can enter the wifi settings page by entering __192.168.4.1__ into your browser. Then you have arrived at the page choose your home wifi network from the list, enter your password and click configure

# Configure API Key

#### Entering Code Upload Mode

* __M5GO__

>After turning on the M5stack, select the Upload mode by pressing the left face button. Assuming you have already setup wifi on your device, the M5stack will connect to your network and once it is connected will display a QR code and a unique API Key. We can now start to program the device by scanning the M5stack with a mobile device or entering the url displayed at the top of the screen into your browser [flow.m5stack.com](http://flow.m5stack.com). In addition, the uiflow connection server can be changed through the setting page. The website of Singapore server is [flow01.m5stack.com](http://flow01.m5stack.com)

><img src="/image/base/APIkey_user.png"/>

* __M5StickC__

>After power on, wait for the earth indicator to turn red to green (this indicates that m5stickc has successfully connected to the network), and directly visit [flow.m5stack. com](http://flow.m5stack.com/) in the computer browser to enter the uiflow programming page

* __Atom Matrix__ __&__ __Atom Lite__

>After power on, wait for the LED indicator to turn red to green (this indicates that atom has successfully connected to the network), and directly visit [flow.m5stack. com](http://flow.m5stack.com/) in the computer browser to enter the uiflow programming page


# API Key

#### Entering Code Upload Mode

>After turning on the M5stack, select the Upload mode by pressing the left face button. Assuming you have already setup wifi on your device, the M5stack will connect to your network and once it is connected will display a QR code and a unique API Key. We can now start to program the device by scanning the M5stack with a mobile device or entering the url displayed at the top of the screen into your browser [flow.m5stack.com](http://flow.m5stack.com/)


><img src="/image/base/APIkey_user.png"/>

#### Connecting your device with API Key

>Once you have opened the UIflow website you can to connect to the web platform by clicking the gear icon in the top right corner, enter your API key and select your device and preferred language. Once you have entered the API Key click OK to confirm****  

><img src="/image/base/APIkey_userpair1.png" width="50%"><img src="/image/base/APIkey_userpair2.png" width="50%">


>The apikey of atom can be viewed through the web distribution network page or through the serial port tool

><img src="assets/img/product_pics/core/minicore/atom/apikey.png" width="50%"><img src="assets/img/product_pics/core/minicore/atom/serialtool.png" width="50%">

# UIFlow Quick Start

* [M5StickC getting started with the Internet of things](https://m5stack.oss-cn-shenzhen.aliyuncs.com/resource/docs/UIFlow-StickC-Book-English.pdf)

* [M5GO getting started with programming](https://m5stack.oss-cn-shenzhen.aliyuncs.com/resource/docs/M5GO_Guide_English.pdf)

<style>

.link a{

    padding-left: 13%;

}

</style>
