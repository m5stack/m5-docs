# M5Core Quick Start - UIFlow {docsify-ignore-all}

## Table of Contents

**[1. Install Driver and Tools](#_1-Install-USB-to-Serial-Driver)**

**[2. CP210X Driver](#_1-Install-USB-to-Serial-Driver)**

**[3. M5Burner](#_2-M5Burner)**

**[4. Wi-Fi Configuration](#_3-Wi-Fi-Setting)**

**[5. Program](#_4-Program)**

**[6. Video Tutorial](#_5-Related-Video)**

## 1. Install USB to Serial Driver  

>1.Click on the M5Burner burning tool and CP210X driver for your operating system below to download.

<div class="link">
 <h4><span>M5Burner:</span></h4>
    <p>
    <a href="https://m5stack.oss-cn-shenzhen.aliyuncs.com/resource/software/M5Burner.zip" target="_blank" rel="noopener noreferrer"><img src="https://cdn.shopify.com/s/files/1/0056/7689/2250/files/windows_89cc6ea0-2a3c-4327-97e5-8f51f448c38b_icon.png?v=1557026574" alt="">Windows</a>
    <a href="https://m5stack.oss-cn-shenzhen.aliyuncs.com/resource/software/M5Burner_MacOS.zip" target="_blank" rel="noopener noreferrer"><img src="https://cdn.shopify.com/s/files/1/0056/7689/2250/files/mac_large.png?v=1557026570" alt="">MacOS</a>
    <a href="https://m5stack.oss-cn-shenzhen.aliyuncs.com/resource/software/M5Burner_Linux.zip" target="_blank" rel="noopener noreferrer"><img src="https://cdn.shopify.com/s/files/1/0056/7689/2250/files/linux_icon.png?v=1557026584" alt="">Linux</a></p>

 <h4><span>CP210X Driver:</span></h4>
    <p>
    <a href="https://m5stack.oss-cn-shenzhen.aliyuncs.com/resource/drivers/CP210x_VCP_Windows.zip" target="_blank" rel="noopener noreferrer"><img src="https://cdn.shopify.com/s/files/1/0056/7689/2250/files/windows_89cc6ea0-2a3c-4327-97e5-8f51f448c38b_icon.png?v=1557026574" alt="">Windows</a>
    <a href="https://m5stack.oss-cn-shenzhen.aliyuncs.com/resource/drivers/CP210x_VCP_MacOS.zip" target="_blank" rel="noopener noreferrer"><img src="https://cdn.shopify.com/s/files/1/0056/7689/2250/files/mac_large.png?v=1557026570" alt="">MacOS</a>
    <a href="https://m5stack.oss-cn-shenzhen.aliyuncs.com/resource/drivers/CP210x_VCP_Linux.zip" target="_blank" rel="noopener noreferrer"><img src="https://cdn.shopify.com/s/files/1/0056/7689/2250/files/linux_icon.png?v=1557026584" alt="">Linux</a>
    </p>
</div>

### (2) Install the USB driver

#### 1. For Mac

-  Double click the disk image `SiLabsUSBDriverDisk.dmg` for installation

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

To make sure if the Driver is installed on your MAC:

Open `Terminal`, connect `M5Core` with your MAC through USB Type-C cable, and type in the command `ls .dev.tty*` to view the available serial ports list.

<img src="assets/img/getting_started_pics/m5stack_core/get_started_with_arduino_m5core/mac/check_serial_port_mac_01.png">

<img src="assets/img/getting_started_pics/m5stack_core/get_started_with_arduino_m5core/mac/check_serial_port_mac_02.png">

Disconnect M5Core device, and type in the same command to see which port disappeared from the list. 
That how we identify the name of the current serial port device.

<img src="assets/img/getting_started_pics/m5stack_core/get_started_with_arduino_m5core/mac/check_serial_port_mac_03.png">

- The serial device name should be: `tty.SLAB_USBtoUART`



#### 2. For Windows 
- Based on your windows system, please choose:
    - 32-bit  `CP210xVCPInstaller_x86_vx.x.x.x.exe`

    - 64-bit  `CP210xVCPInstaller_x64_vx.x.x.x.exe`

<img src="assets/img/getting_started_pics/establish_serial_connection/windows_install_usb_driver01.png">

- double click the executable file for installing.

<img src="assets/img/getting_started_pics/establish_serial_connection/windows_install_usb_driver02.png">

<img src="assets/img/getting_started_pics/establish_serial_connection/windows_install_usb_driver03.png">

- Check the serial port number `COMx`

Check identified COM port list in the `Windows Device Manager`:

Connect the device to your computer via a USB Type-C cable, open `Windows Device Manager`, click `Ports(COM & LPT)` if you see this `SiLicon Labs CP210x USB to UART Bridge(COMx) ` , means the driver installation succeed and your PC is allowed to communicate with M5.

<img src="assets/img/getting_started_pics/m5stack_core/get_started_with_arduino_m5core/windows/check_serial_port_01.png">

## 2. M5Burner

### (1) Flash the firmware

- Connect M5Core to your computer via the USB Type-C cable, unzip the M5Burner pakage.
- Here appears a folder, open it and double-click the executable `M5Burner.exe`
<img src="assets/img/getting_started_pics/how_to_burn_firmware/m5burner_folder_01.jpg">

- Select the `serial number` and `921600 baud rate` , and select the latest version of UIFlow firmware.

<img src="assets/img/getting_started_pics/how_to_burn_firmware/m5buner_com_bandrate_01.jpg">

- Download UIFlow firmware from the cloud.

<img src="assets/img/getting_started_pics/how_to_burn_firmware/M5burner_firmware_download_process_01.jpg">

- Before Click `Burn` make sure you click erase first, and then make sure you choose the right firmware on the left list.
<img src="assets/img/getting_started_pics/how_to_burn_firmware/m5burner_choose_firmware_m5stack_01.jpg">

-  Click `Burn` 


- If you see the following message, means you have the firmware flashed onto your M5Core.

<img src="assets/img/getting_started_pics/how_to_burn_firmware/m5burner_flash_finish_01.jpg">

## 3. Wi-Fi Setting

### (1) Enter the Wi-Fi config mode.

- Reboot the M5Core by press the red button on the side, then the device will run the UIFlow firmware we just downloaded. 
- Click `SETUP` right after the screen light up. Please be quick. If you miss it, repeat the process.
- In the `SETUP` page, choose  `Link Server: Flow.m5stack.com` and press the middle button to confirm.

<img src="assets/img/getting_started_pics/m5stack_core/get_started_with_uiflow/core_home_page_04.png">

### (2) Connect to AP

- Now the device is in Wi-Fi AP mode, use your phone to connect this AP. The AP name would start with "M5Stack-".
- After connected to the AP, your phone and the device has established a Wi-Fi connection.
- Then you will need to visit this address `192.168.4.1` on your phone browser. Here you will enter the Wi-Fi config page.
- Choose the local Wi-Fi (5G is not supported yet), type in the password. Then click `Configure`. By this way, you can tell the device to use the chosen Wi-Fi to get access to the internet.

<img src="assets/img/getting_started_pics/m5stack_core/get_started_with_uiflow/core_home_page_05.png">

### (3) Display APIKEY

- After the M5Core connected to the internet, the device will restart and display the `APIKEY` and a QR code(UIFlow website). 

<img src="assets/img/getting_started_pics/m5stack_core/get_started_with_uiflow/core_home_page_06.png">

- The small dot(top right) on the screen indicates the connection status with UIFlow server:

    - Green: connected

    - Red : disconnected.

## 4. Program

### (1) Connect to UIFlow

- To get access to UIFlow program paltform, you can either scan the QR code on the M5Core with your tablet,or just visit `flow.m5stack.com` on your PC browser.

<img src="assets/img/getting_started_pics/m5stack_core/get_started_with_uiflow/webide.png">

- At top right coner, navigate to `setting`, here you will need to type in the `APIKEY` displayed on the screen, choose your `Language` and `Device`(core). Click `OK`. 
- Hold on untill the webpage shows "connected". 
- Now that the device has established a connection with the UIFlow server. we can start programming

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

## Supplement

> What gonna happen if you click `Download`?<br>
 You will have the current code downloading onto the device, it will reboot right away. Then, the device will enter "execute" mode back from the reboot. In this case, if you want to go back to program mode, you will need to press the power button to reboot the device and press button `A` right away.

<img src="assets/img/getting_started_pics/m5stack_core/get_started_with_m5stick/uiflow_download.png" width="50%" height="50%">

>How to switch to another Wi-Fi for the device?
- First, reboot the device,
- Right after the reboot, press button `Upload` to the left.
- You will see M5Core connecting the local Wi-Fi and going back to program mode.

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


<style>

.link a{

    padding-left: 13%;

}

</style>