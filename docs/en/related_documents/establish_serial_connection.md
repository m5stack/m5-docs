# Establish Serial Connection {docsify-ignore-all}

**[MacOS](#for-macOS)**&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;**[Windows](#for-windows)**

**This section provides guidance how to establish serial connection between your board and PC.**

## For MacOS

### 1. Install the USB driver

**[Download the SiLabs CP2104 Driver](https://m5stack.oss-cn-shenzhen.aliyuncs.com/resource/drivers/CP210x_VCP_MacOS.zip)**

**After the disk image `SiLabsUSBDriverDisk.dmg` was downloaded, mount it.**

**And install this USB driver following those screenshots.**

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

### 2. Check port on MacOS

**To check the device name for the serial port of your your board board (or external converter dongle), open terminal and run this command two times, first with the board / dongle unplugged, then with plugged in. The port which appears the second time is the one you need:**

**MacOS**

    ls /dev/cu.*



## For Windows

### 1.Install the USB driver

**Download the [SiLabs CP2104 Driver](https://www.silabs.com/products/development-tools/software/usb-to-uart-bridge-vcp-drivers)**

**Choice the version of USB driver according to your windows version(Windows7/8/10).**

<img src="assets/img/getting_started_pics/establish_serial_connection/windows_download_CP2104_USB_driver.png">

**Choice the right version installer(x64/x86), and install it.**

<img src="assets/img/getting_started_pics/establish_serial_connection/windows_install_usb_driver01.png">

<img src="assets/img/getting_started_pics/establish_serial_connection/windows_install_usb_driver02.png">

<img src="assets/img/getting_started_pics/establish_serial_connection/windows_install_usb_driver03.png">

### 2. Check port on Windows

**Check the list of identified COM ports in the Windows Device Manager. Disconnect your board and connect it back, to verify which port disappears from the list and then shows back again.**

**Figures below show serial port for M5Stack Core board**

<img src="assets/img/getting_started_pics/establish_serial_connection/windows_m5stack_in_device_manager.png">
