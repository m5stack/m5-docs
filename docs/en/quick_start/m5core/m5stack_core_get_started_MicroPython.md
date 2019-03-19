# UIFlow Quick Start(Blockly/MicroPython) {docsify-ignore-all}

:clapper: **[Video Tutorial](#Video-Tutorial)**&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;:memo: **[Text Tutorial](#Table-of-Contents)**

<!-- ?> a. If your M5Stack Core was not burnt with a specific firmware named `UIFlow` in advance, please visit this article [How to burn firmware](/en/related_documents/how_to_burn_firmware) for burnning). b. If it's first time to use M5Stack Core or you want to change the networkable AP that means the Core can't access [flow.m5stack.com](http://flow.m5stack.com), you need visit this article for setting wifi [How to connect wifi using Core](/en/related_documents/how_to_connect_wifi_using_core).

By default, we account your M5Core has been connected with the networkable AP. And the screen shows like this figure below after you pressed the `UPLOAD` button on the left. After a few seconds if nothing is pressed the M5 will automatically run the code that was previously uploaded. If we want to upload new code we have to make sure we press the `upload` button on this menu before the M5 boots the code in it’s memory. -->

<!-- <figure>
    <img src="assets/img/getting_started_pics/m5stack_core/get_started_with_uiflow/apikey.jpg">
</figure> -->

## Table of Contents

**[1. Install USB to Serial Driver](#_1-Install-USB-to-Serial-Driver)**

**[2. Burn UIFlow Firmware](#_2-Burn-UIFlow-Firmware)**

**[3. Wi-Fi Setting](#_3-Wi-Fi-Setting)**

**[4. Program](#_4-Program)**


<!-- ## Text Tutorial

1. [Connect to UIFlow](#connect-to-uiflow)

2. [Program with Core](#program-with-core)

3. [Play a song now](#play-a-song-now) -->


## 1. Install USB to Serial Driver

Open your browser, enter the official website of M5Stack  https://m5stack.com/download

#### (1) click `Windows` for downloading this installation package and then unzip this package.

<img src="assets/img/getting_started_pics/m5stack_core/get_started_with_arduino_m5core/windows/download_usb_driver_win_01.png">

#### (2) According to your Windows operating system type, select the corresponding driver installation package

* 32-bit Windows operating system, choose `CP210xVCPInstaller_x86_vx.x.x.x.exe`

* 64-bit Windows operating system, choose `CP210xVCPInstaller_x64_vx.x.x.x.exe`

<img src="assets/img/getting_started_pics/establish_serial_connection/windows_install_usb_driver01.png">

#### (3) double click the executable file for installing.

<img src="assets/img/getting_started_pics/establish_serial_connection/windows_install_usb_driver02.png">

<img src="assets/img/getting_started_pics/establish_serial_connection/windows_install_usb_driver03.png">

#### (4) Check the serial port number `COMx`

To comfirm if the USB to Serial Driver was successfully installed already, Check the list of identified COM ports in the `Windows Device Manager`:

Connect the Core to the computer via a USB Type-C cable, open `Windows Device Manager`, click `Ports(COM & LPT)` for checking the list of identified COM ports.

Disconnect M5Core device and connect it back, to verify which port disappears from the list and then shows back again.

<img src="assets/img/getting_started_pics/m5stack_core/get_started_with_arduino_m5core/windows/check_serial_port_01.png">

## 2. Burn UIFlow Firmware

#### (1) Download M5Burner

Access [M5Stack Official Website](http://www.m5stack.com/download), and download M5Burner

<img src="assets/img/getting_started_pics/how_to_burn_firmware/download_M5Burner.png" alt="Screenshot of coverpage" title="Cover page">

<img src="assets/img/getting_started_pics/how_to_burn_firmware/download_M5Burner_02.png" alt="Screenshot of coverpage" title="Cover page">

#### (2) Burn the firmware

Connect M5Core to the computer via the USB Type-C cable, unzip the M5Burner archive you just downloaded, and double-click the executable `M5Burner.exe`

Select the `serial number` and `921600 baud rate` that the board is connected to the computer, and select the latest version of UIFlow firmware.

<img src="assets/img/getting_started_pics/how_to_burn_firmware/burn_firmware_02.png">

Click `Burn` for downloading UIFlow firmware

<img src="assets/img/getting_started_pics/how_to_burn_firmware/burn_firmware_06_02.png">

The following interface appears, indicating that the firmware is successfully burned.

<img src="assets/img/getting_started_pics/how_to_burn_firmware/burn_firmware_05.png">

## 3. Wi-Fi Setting

#### (1) Select `SETUP`

After successfully burning the UIFlow firmware, click the red button in the upper left corner of the Core to restart the device. Once the Core is powered on, immediately click the `C button` that indicates you select the `SETUP` option on the screen for the network configuration. Then click on the middle button and select `Link Server: Flow.m5stack.com`.

<img src="assets/img/getting_started_pics/m5stack_core/get_started_with_uiflow/core_home_page_04.png">

#### (2) Connect to AP

Turn on Wi-Fi on your phone or computer, then connect to the M5Core hotspot `AP` displayed on the screen ( For example, the M5Stack-0d60 is now displayed ). After the connection is successful, open a browser and enter the URL `192.168.4.1`, then select Wi-Fi that can be connected to the network, enter the Wi-Fi password. ( Now, the networkable Wi-Fi is M5 )

<img src="assets/img/getting_started_pics/m5stack_core/get_started_with_uiflow/core_home_page_05.png">

#### (3) Connect to Wi-Fi

After M5Core successfully connects to a networkable Wi-Fi (here M5), the screen will display `APIKEY` and the QR code that can access the UIFlow webpage.

*Description of APIKEY: APIKEY is the device unique identifier. As long as the current UIFlow is connected to which device's APIKEY, The programming code will be downloaded to that device.*

<img src="assets/img/getting_started_pics/m5stack_core/get_started_with_uiflow/core_home_page_06.png">

The status of the small dot on the screen:

* Green means M5Core successfully connected to M5Stack Server, that is online status

* Red means be offline status

## 4. Program

#### (1) Connect to UIFlow

Now scan the QR code on the M5Core with your phone or tablet, or if you are programming with a computer, enter the URL `flow.m5stack.com` on your computer's browser

<img src="assets/img/getting_started_pics/m5stack_core/get_started_with_uiflow/webide.png">

Every time before you upload the code to M5Core through UIFlow, make sure that UIFlow is connected to the M5Core you want to program.

So you need to click on the gear in the upper right corner of the UIFlow IDE page and enter APIKEY on your M5Core screen in the pop-up dialog box. Click `Save`, then UIFlow will connect to M5Core.

<img src="assets/img/getting_started_pics/m5stack_core/get_started_with_uiflow/click_for_apikey.png">

<img src="assets/img/getting_started_pics/m5stack_core/get_started_with_uiflow/input_apikey.png">

Now you can start programming with UIFlow!

#### (2) Programming example

#### a. draw a UI

Drag and drop the 4 controls in the upper left corner of the UIFlow IDE to the UI interface of `M5Stack Core` and click the `Run` button in the upper right corner of the page to execute the effect.

<img src="assets/img/getting_started_pics/m5stack_core/get_started_with_uiflow/draw_ui.gif">

#### b. writing a Blockly program

Drag the `Set emoji map in0` block from the `Emoji` category on the left to the code area of `Blockly` and click the `Run` button.

<img src="assets/img/getting_started_pics/m5stack_core/get_started_with_uiflow/draw_heart.gif">


*The link of source coce: https://github.com/m5stack/M5-ProductExampleCodes/blob/master/Core/M5_draw_heart.m5f*

#### c. writing a MicroPython program

Copy the following code into the Python editing area, then click `Run` in the top right corner to execute the code.

```Python
from m5stack import *
from m5ui import *
clear_bg(0x111111)


btnA = M5Button(name='ButtonA', text='ButtonA', visibility=False)
btnB = M5Button(name='ButtonB', text='ButtonB', visibility=False)
btnC = M5Button(name='ButtonC', text='ButtonC', visibility=False)


lcd.print("Hello M5Stack")
```

<img src="assets/img/getting_started_pics/m5stack_core/get_started_with_uiflow/program_with_micropython.png">

At this time, the word 'Hello M5Stack` will be printed on the M5Core screen.

## Video Tutorial

**UIFlow Overview**

<video width="500" controls>
    <source src="https://m5stack.oss-cn-shenzhen.aliyuncs.com/video/LukeVideo/UI%20Flow%20Overview.mp4" type="video/mp4">
</video>

**UIFlow Tutorial**

<video width="500" controls>
    <source src="https://m5stack.oss-cn-shenzhen.aliyuncs.com/video/%E6%95%99%E7%A8%8B/UIFlow%20Tutorials/A3%20-%20UIflow%E7%AE%80%E4%BB%8B.mp4" type="video/mp4">
</video>

<!-- ## Complete

?> *Absolutely, For being more familiar with M5, you can read [the tutorial documentation of UIFlow](https://m5stack.github.io/UIFlow_doc/cn/index.html).* -->