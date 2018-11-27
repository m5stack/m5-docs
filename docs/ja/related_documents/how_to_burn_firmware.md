# How to Burn Firmware

**This article will guide you how to burn a right firmware to your board via M5Burner.**

## For MacOS

***(Coming soon...)***

## For Windows

### 1. Download M5Burner

For downloading M5Burner, visit the [offical website](http://www.m5stack.com) please.

<figure class="thumbnails">
    <img src="assets/img/getting_started_pics/how_to_burn_firmware/download_M5Burner.png" alt="Screenshot of coverpage" title="Cover page">
</figure>

### 2. Burn the firmware

Unzip the M5Burner tool which you donwloaded for official website just now, then double click `M5Burner.exe`.

<figure class="thumbnails">
    <img src="assets/img/getting_started_pics/how_to_burn_firmware/burn_firmware_01.png" alt="Screenshot of coverpage" title="Cover page">
</figure>


**Then choice the `serial port` which is connected with your board and the `Baud` which is 921600 following below steps.**

<figure class="thumbnails">
    <img src="assets/img/getting_started_pics/how_to_burn_firmware/burn_firmware_02.png" alt="Screenshot of coverpage" title="Cover page">
</figure>

!> **Notice** If it does not display any ``COMx`` port or only ``COM1`` exists at the option, you need to visit this article [establish_serial_connection](/en/related_documents/establish_serial_connection) and reinstall the USB driver.

**a. Choice a right firmware**

a. select `M5Flow-vx.x` option(the lastest version), if you want to program with [M5Flow](http://flow.m5stack.com)

b. select `M5Cam-vx.x (/M5Cam-psram)` option, if you own a ESP32CAM (/ M5CAMERA)

**b. Click `Erase`**

<figure class="thumbnails">
    <img src="assets/img/getting_started_pics/how_to_burn_firmware/burn_firmware_06.png" alt="Screenshot of coverpage" title="Cover page">
</figure>

*If M5Burner shows the information `Hard resetting via RTS pin...` below, it means chip has been erased successfully.*

<figure class="thumbnails">
    <img src="assets/img/getting_started_pics/how_to_burn_firmware/burn_firmware_04.png" alt="Screenshot of coverpage" title="Cover page">
</figure>

**c. Click `Burn`**

<figure class="thumbnails">
    <img src="assets/img/getting_started_pics/how_to_burn_firmware/burn_firmware_03.png" alt="Screenshot of coverpage" title="Cover page">
</figure>

*If M5Burner shows the information `Leaving... Staying in bootloader.` below, it means chip has been burnt successfully.*

<figure class="thumbnails">
    <img src="assets/img/getting_started_pics/how_to_burn_firmware/burn_firmware_05.png" alt="Screenshot of coverpage" title="Cover page">
</figure>

### 3. Then reset your board

?> **Tip**
If M5Burner means be busy after clicking `Burn`, please wait for a few minutes. It'll be normal after the firmware has been burnt successfully.

?> **Tip** If the burning procedure has been interrupted(like `M5Burner has been closed suddenly...`), it's better to burn your board again.