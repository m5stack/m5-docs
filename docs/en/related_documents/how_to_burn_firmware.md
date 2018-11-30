# How to Burn Firmware

[中文](/zh_CN/related_documents/how_to_burn_firmware) | English | [日本語](ja/related_documents/how_to_burn_firmware)

**This article will guide you how to burn a right firmware to your board via M5Burner.**

## For MacOS

***(Coming soon...)***

## For Windows

### 1. Download M5Burner

For downloading M5Burner, visit the [M5Stack Website](http://www.m5stack.com) please.

<figure class="thumbnails">
    <img src="assets/img/getting_started_pics/how_to_burn_firmware/download_M5Burner.png">
</figure>

### 2. Burn the firmware

Unzip the M5Burner tool which you donwloaded for official website just now, then double click `M5Burner.exe`.

**Then choice the `serial port` which is connected with your board and the `Baud` which is 921600 following below steps. Choice a right firmware, click `Erase` and then click `Burn`.**

?> **Tip**  **a.** If you want to program with [M5Flow](http://flow.m5stack.com)(/[M5Cloud](http://cloud.m5stack.com)), select `M5Flow-vx.x`(/`M5Cloud-vx.x.x`) option(the lastest version). **b.** If you own a ESP32CAM (/ M5CAMERA), select `M5Cam-vx.x (/M5Cam-psram)` option

<figure class="thumbnails">
    <img src="assets/img/getting_started_pics/how_to_burn_firmware/burn_flow_firmware.gif">
</figure>

!> **Notice** If it does not display any ``COMx`` port or only ``COM1`` exists at the option, you need to visit this article [establish_serial_connection](/en/related_documents/establish_serial_connection) and reinstall the USB driver.

<figure class="thumbnails">
    <img src="assets/img/getting_started_pics/how_to_burn_firmware/burn_firmware_01.png" alt="Screenshot of coverpage" title="Cover page">
</figure>

*If M5Burner shows the information `Hard resetting via RTS pin...` below, it means chip has been erased successfully.*

<figure class="thumbnails">
    <img src="assets/img/getting_started_pics/how_to_burn_firmware/burn_firmware_04.png" alt="Screenshot of coverpage" title="Cover page">
</figure>

*If M5Burner shows the information `Leaving... Staying in bootloader.` below, it means chip has been burnt successfully.*

<figure class="thumbnails">
    <img src="assets/img/getting_started_pics/how_to_burn_firmware/burn_firmware_05.png" alt="Screenshot of coverpage" title="Cover page">
</figure>

### 3. Then reset your board

?> **Tip**
If M5Burner means be busy after clicking `Burn`, please wait for a few minutes. It'll be normal after the firmware has been burnt successfully.

?> **Tip** If the burning procedure has been interrupted(like `M5Burner has been closed suddenly...`), it's better to burn your board again.