# How to Burn Firmware

**[Windows](#Windows)**&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;**[MacOS](#MacOS)**&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;**[Linux](#Linux)**

&nbsp;

**This article will guide you how to burn a right firmware to your board via M5Burner.**

## Windows

### 1. Download M5Burner

For downloading M5Burner, visit the [M5Stack Website](http://www.m5stack.com) please.


<img src="assets/img/getting_started_pics/how_to_burn_firmware/download_M5Burner.png">

### 2. Burn the firmware

Unzip the M5Burner tool which you donwloaded for official website just now, then double click `M5Burner.exe`.

**Then choice the `serial port` which is connected with your board and the `Baud` which is 921600 following below steps. Choice a right firmware, click `Erase` and then click `Burn`.**

- If you want to program with [UiFlow](http://flow.m5stack.com)(/[M5Cloud](http://cloud.m5stack.com)), select `M5Flow-vx.x`(/`M5Cloud-vx.x.x`) option(the lastest version).

- If you own a ESP32CAM (/ M5CAMERA), select `M5Cam-vx.x (/M5Cam-psram)` option


<img src="assets/img/getting_started_pics/how_to_burn_firmware/burn_flow_firmware.gif">

!> **Notice** If it does not display any ``COMx`` port or only ``COM1`` exists at the option, you need to visit this article [establish_serial_connection](/en/related_documents/establish_serial_connection) and reinstall the USB driver.

**a. Choice a right firmware**

a. select `M5Flow-vx.x` option(the lastest version), if you want to program with [UiFlow](http://flow.m5stack.com)

b. select `M5Cam-vx.x (/M5Cam-psram)` option, if you own a ESP32CAM (/ M5CAMERA)

**b. Click `Erase`**


<img src="assets/img/getting_started_pics/how_to_burn_firmware/burn_firmware_01.png" alt="Screenshot of coverpage" title="Cover page">

*If M5Burner shows the information `Hard resetting via RTS pin...` below, it means chip has been erased successfully.*


<img src="assets/img/getting_started_pics/how_to_burn_firmware/burn_firmware_04.png" alt="Screenshot of coverpage" title="Cover page">

*If M5Burner shows the information `Leaving... Staying in bootloader.` below, it means chip has been burnt successfully.*


<img src="assets/img/getting_started_pics/how_to_burn_firmware/burn_firmware_05.png" alt="Screenshot of coverpage" title="Cover page">

### 3. Then reset your board

?> **Tip**
If M5Burner means be busy after clicking `Burn`, please wait for a few minutes. It'll be normal after the firmware has been burnt successfully.

?> **Tip** If the burning procedure has been interrupted(like `M5Burner has been closed suddenly...`), it's better to burn your board again.

## MacOS

***(Coming soon...)***

## Linux

### 1. Install pip and esptool

Open the terminal, enter the following command according to your system version for installing Python package management tool `pip`.

* Centos7:

```shell
sudo yum install python-pip
```

* Ubuntu and Debian:

```shell
sudo apt-get install python-pip
```

* Arch:

```shell
sudo pacman -S --needed python-pip
```

After installing `pip` successfully, enter `sudo pip install esptool` for installing `esptool`.

<img src="assets/img/getting_started_pics/how_to_burn_firmware/burn_firmware_11.png">

### 2. Download the last version of M5Burner

Access [UIFlow](http://www.m5stack.com), download the MacOS version installer `M5Burner-Flow-For-MacOS`, and unzip it.

<img src="assets/img/getting_started_pics/how_to_burn_firmware/burn_firmware_10.png">

### 3. Execute

Creat a new folder `M5burner`, and copy `M5Burner_MacOS/M5Burner_MacOS.app/Contents/Resources/firmware/M5Flow/` to `~/M5burner`

If you want to bun v1.1.1 version firmware, switch the current directory to the corresponding directory e.g. `cd ~/M5burner/M5Flow/v1.1.1-en`

<img src="assets/img/getting_started_pics/how_to_burn_firmware/burn_firmware_13.png">

Plug the M5Core in, and enter `sudo chmod +x *.sh` for granting `root` authority, and run `sudo ./flash.sh`

<img src="assets/img/getting_started_pics/how_to_burn_firmware/burn_firmware_12.png">