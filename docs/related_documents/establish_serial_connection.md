# Establish Serial Connection

**This section provides guidance how to establish serial connection between your board and PC.**

## For MacOS

### 1. Install the USB driver

**[Download the SiLabs CP2104 Driver](https://www.silabs.com/documents/public/software/Mac_OSX_VCP_Driver.zip)**

**As the disk image SiLabsUSBDriverDisk.dmg is downloaded, mount it. Proceed according to the instructions OK.**

<figure>
    <img src="../assets/img/getting_started_pics/establish_serial_connection/macOS_CP2104_dmg.png">
</figure>

<figure>
    <img src="../assets/img/getting_started_pics/establish_serial_connection/macOS_CP2104_pkg.png">
</figure>

<figure>
    <img src="../assets/img/getting_started_pics/establish_serial_connection/2.png">
</figure>

<figure>
    <img src="../assets/img/getting_started_pics/establish_serial_connection/3.png">
</figure>

<figure>
    <img src="../assets/img/getting_started_pics/establish_serial_connection/4.png">
</figure>

<figure>
    <img src="../assets/img/getting_started_pics/establish_serial_connection/5.png">
</figure>

<figure>
    <img src="../assets/img/getting_started_pics/establish_serial_connection/6.png">
</figure>

<figure>
    <img src="../assets/img/getting_started_pics/establish_serial_connection/7.png">
</figure>

<figure>
    <img src="../assets/img/getting_started_pics/establish_serial_connection/8.png">
</figure>

<figure>
    <img src="../assets/img/getting_started_pics/establish_serial_connection/9.png">
</figure>

### 2. Check port on MacOS

**To check the device name for the serial port of your your board board (or external converter dongle), open terminal and run this command two times, first with the board / dongle unplugged, then with plugged in. The port which appears the second time is the one you need:**

**MacOS**

    ls /dev/cu.*



## For Windows

### 1.Install the USB driver

**Download the [SiLabs CP2104 Driver](https://www.silabs.com/products/development-tools/software/usb-to-uart-bridge-vcp-drivers)**

**Choice the version of USB driver according to your windows version(Windows7/8/10).**

<figure>
    <img src="../assets/img/getting_started_pics/establish_serial_connection/windows_download_CP2104_USB_driver.png">
</figure>

**Choice the right version installer(x64/x86), and install it.**

<figure>
    <img src="../assets/img/getting_started_pics/establish_serial_connection/windows_install_usb_driver01.png">
</figure>

<figure>
    <img src="../assets/img/getting_started_pics/establish_serial_connection/windows_install_usb_driver02.png">
</figure>

<figure>
    <img src="../assets/img/getting_started_pics/establish_serial_connection/windows_install_usb_driver03.png">
</figure>

### 2. Check port on Windows

**Check the list of identified COM ports in the Windows Device Manager. Disconnect your board and connect it back, to verify which port disappears from the list and then shows back again.**

**Figures below show serial port for M5Stack Core board**

<figure>
    <img src="../assets/img/getting_started_pics/establish_serial_connection/windows_m5stack_in_device_manager.png">
</figure>
