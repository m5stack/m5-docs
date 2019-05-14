# M5Core Quick Start - UIFlow {docsify-ignore-all}

## Table of Contents

**[1. Install USB to Serial Driver](#_1-Install-USB-to-Serial-Driver)**

**[2. Download UIFlow Firmware](#_2-Burn-UIFlow-Firmware)**

**[3. Wi-Fi Configuration](#_3-Wi-Fi-Setting)**

**[4. Program](#_4-Program)**

**[5. Video Tutorial](#_5-Related-Video)**

## 1. Install USB to Serial Driver

Open up your browser, and visit the official website of M5Stack  https://m5stack.com/download

### (1)  Navigate to `Explore` `Download` `CP210X Driver` and based on your OS choose to download the installation package, unzip it then. 

<img src="assets/img/getting_started_pics/m5stack_core/get_started_with_arduino_m5core/windows/download_usb_driver_all_os_01.jpg">

### (2) Install the USB driver

#### 1. For Mac

- After unzipped this package, double click the disk image `SiLabsUSBDriverDisk.dmg` for installation

<img src="assets/img/getting_started_pics/establish_serial_connection/macOS_CP2104_dmg.png">

<img src="assets/img/getting_started_pics/establish_serial_connection/macOS_CP2104_pkg.png">

<img src="assets/img/getting_started_pics/establish_serial_connection/2.png">

<img src="assets/img/getting_started_pics/establish_serial_connection/3.png">

<img src="assets/img/getting_started_pics/establish_serial_connection/4.png">

<img src="assets/img/getting_started_pics/establish_serial_connection/5.png">

<img src="assets/img/getting_started_pics/establish_serial_connection/6.png">

<img src="assets/img/getting_started_pics/establish_serial_connection/7.png">

<img src="assets/img/getting_started_pics/establish_serial_connection/8.png">

<img src="assets/img/getting_started_pics/establish_serial_connection/9.png">

- Check the serial port number `/dev/tty.SLAB_USBtoUART`

To make sure if the Driver has installed on your MAC:

Open `Terminal`, connect `M5Core` with your MAC through USB Type-C cable, and type in the following command to view the available serial ports list.

<img src="assets/img/getting_started_pics/m5stack_core/get_started_with_arduino_m5core/mac/check_serial_port_mac_01.png">

<img src="assets/img/getting_started_pics/m5stack_core/get_started_with_arduino_m5core/mac/check_serial_port_mac_02.png">

Disconnect M5Core device, and type in the same command on `Terminal`  to see which port disappeared from the list. 
That how we identify the name of the serial device.

<img src="assets/img/getting_started_pics/m5stack_core/get_started_with_arduino_m5core/mac/check_serial_port_mac_03.png">

- The serial device name should be: `tty.SLAB_USBtoUART`



#### 2.
- Based on your windows system, please choose:
* 32-bit Windows operating system `CP210xVCPInstaller_x86_vx.x.x.x.exe`

* 64-bit Windows operating system `CP210xVCPInstaller_x64_vx.x.x.x.exe`

<img src="assets/img/getting_started_pics/establish_serial_connection/windows_install_usb_driver01.png">

- double click the executable file for installing.

<img src="assets/img/getting_started_pics/establish_serial_connection/windows_install_usb_driver02.png">

<img src="assets/img/getting_started_pics/establish_serial_connection/windows_install_usb_driver03.png">

- Check the serial port number `COMx`

Check the list of identified COM ports in the `Windows Device Manager`:

Connect the Core to the computer via a USB Type-C cable, open `Windows Device Manager`, click `Ports(COM & LPT)` if you see this `SiLicon Labs CP210x USB to UART Bridge(COMx) ` , means the driver installation is succeed and your PC is allowed to communicate with M5.

<img src="assets/img/getting_started_pics/m5stack_core/get_started_with_arduino_m5core/windows/check_serial_port_01.png">

## 2. Download UIFlow Firmware

### (1) Download M5Burner

Go to [M5Stack Official Website](http://www.m5stack.com/download), and download M5Burner

<img src="assets/img/getting_started_pics/how_to_burn_firmware/download_M5Burner.png" alt="Screenshot of coverpage" title="Cover page">

<img src="assets/img/getting_started_pics/how_to_burn_firmware/download_M5Burner_02.png" alt="Screenshot of coverpage" title="Cover page">

### (2) Flash the firmware

- Connect M5Core to your computer via the USB Type-C cable, unzip the M5Burner pakage,here appears a folder, open the folder and double-click the executable `M5Burner.exe`
<img src="assets/img/getting_started_pics/how_to_burn_firmware/m5burner_folder_01.jpg">

- Select the `serial number` and `921600 baud rate` that the board is connected to the computer, and select the latest version of UIFlow firmware.

<img src="assets/img/getting_started_pics/how_to_burn_firmware/m5burner_com_bandrate_01.jpg">

- Download UIFlow firmware from the cloud.
- 
<img src="assets/img/getting_started_pics/how_to_burn_firmware/M5burner_firmware_download_process_01.jpg"><img src="assets/img/getting_started_pics/how_to_burn_firmware/m5burner_choose_firmware_m5stack_01.jpg">

- Before Click `Burn` make sure you erase it first, and then make sure you choose the right firmware on the left list.

<img src="assets/img/getting_started_pics/how_to_burn_firmware/m5burner_choose_firmware_01.jpg">

-  Click `Burn` 


- If you see the following message, means the firmware has flash onto your M5Core.

<img src="assets/img/getting_started_pics/how_to_burn_firmware/m5burner_flash_finish_01.jpg">

## 3. Wi-Fi Setting

### (1) Press `SETUP` to enter the Wi-Fi config mode.

- Reboot the M5Core by press the red button on the side,the device will run the UIFlow firmware. 
- Click `SETUP` right after the screen light up. Please be quick.
- In this page, navigate to  `Link Server: Flow.m5stack.com` press the middle button to confirm.

<img src="assets/img/getting_started_pics/m5stack_core/get_started_with_uiflow/core_home_page_04.png">

### (2) Connect to AP

- Now the device is in Wi-Fi AP mode, use your phone to connect this AP. The AP name would start with "M5Stack-". 
- After connected to the AP, your phone and the device has established a Wi-Fi connection.
- Open up a broswer on your phone and type in `192.168.4.1` in the address bar. Here you will enter the Wi-Fi Config page.
- Choose the local Wi-Fi and type in the password to tell the device use that Wi-Fi to get access to the internet.

<img src="assets/img/getting_started_pics/m5stack_core/get_started_with_uiflow/core_home_page_05.png">

### (3) Display APIKEY

- After the M5Core connected to the internet, the device will restart and display the `APIKEY` and a QR code(UIFlow website). 

<img src="assets/img/getting_started_pics/m5stack_core/get_started_with_uiflow/core_home_page_06.png">

- The status of the small dot on the screen:

* Green means connected to UIFlow cloud.

* Red means disconnected to UIFlow cloud.

## 4. Program

### (1) Connect to UIFlow

- To get access to UIFlow program paltform, you can either scan the QR code on the M5Core with your tablet,or just visit `flow.m5stack.com` on your PC browser.

<img src="assets/img/getting_started_pics/m5stack_core/get_started_with_uiflow/webide.png">

- At top right coner, navigate to `setting`,here you will need to type in the `APIKEY` displayed on the screen, choose your `Language` and `Device`(core). Click `OK`. 
- The device will trying to connect with the UIFlow server. Once it connected, the small dot on the screen will turn green.

<img src="assets/img/getting_started_pics/m5stack_core/get_started_with_uiflow/click_for_apikey.png">

<img src="assets/img/getting_started_pics/m5stack_core/get_started_with_uiflow/input_apikey.png">

Now you can start programming with UIFlow!

### (2) Programming example

#### a. Draw a UI

- Drag and drop the icons on the top left corner to place a UI element onto the M5Core simmulator.
- Click `Run` on the top right corner, the triangle, to load the code onto M5Core. 
- As you can see it execute synchronously. 

<img src="assets/img/getting_started_pics/m5stack_core/get_started_with_uiflow/draw_ui.gif">

#### b. Write a Blockly program

- Drag the `Set emoji map in0` block from the `Emoji` category and attach it right underneath `Setup` 
- Draw a heart emoji. 
- hit `Run` 

<img src="assets/img/getting_started_pics/m5stack_core/get_started_with_uiflow/draw_heart.gif">


*Source codee link: https://github.com/m5stack/M5-ProductExampleCodes/blob/master/Core/M5_draw_heart.m5f*

#### c. Write a MicroPython program

Copy the following code into the Python editing area, then click `Run` 

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

In this case, 'Hello M5Stack` will be printed on the M5Core screen.

## 5. Related Video

- UIFlow Overview

<video width="500" controls>
    <source src="https://m5stack.oss-cn-shenzhen.aliyuncs.com/video/LukeVideo/UI%20Flow%20Overview.mp4" type="video/mp4">
</video>

- Video tutorial for developing M5Core in UIFlow

<video width="500" controls>
    <source src="https://m5stack.oss-cn-shenzhen.aliyuncs.com/video/%E6%95%99%E7%A8%8B/UIFlow%20Tutorials/A3%20-%20UIflow%E7%AE%80%E4%BB%8B.mp4" type="video/mp4">
</video>

<!-- ## Complete

?> *Absolutely, For being more familiar with M5, you can read [the tutorial documentation of UIFlow](https://m5stack.github.io/UIFlow_doc/cn/index.html).* -->