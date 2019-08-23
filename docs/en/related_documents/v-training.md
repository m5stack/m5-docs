# V-Training {docsify-ignore-all}


**[1. Download Firmware](#Download-Firmware)**

**[2. Flash Firmware](#Flash-Firmware)**

**[3. Material Training](#Material-Training)**

**[4. Upload Data  to Cloud](#Upload-Data-to-Cloud)**

**[5. Run Recognition Program](#Run-Recognition-Program)**


## EasyLoader

<img src="https://m5stack.oss-cn-shenzhen.aliyuncs.com/image/EasyLoader_logo.png" width="100px" style="margin-top:20px">

<a href="https://m5stack.oss-cn-shenzhen.aliyuncs.com/EasyLoader/M5Core/M5StickV/EasyLoader_M5StickV_0813.exe"><button type="button" class="btn btn-primary">Download EasyLoader</button></a>

>1, EasyLoader is a consice and effictive firmware flashing tool, each product page will packed with a EasyLoader for users to flash product related application example. For those who need none-customized firmware, using EasyLoader can offer you a default firmware,(Only Windows computer supported)  

>2, After downloaded , double click to run the app,  connect the device to computer via USB cable, select the com port number, then click "Burn" to start it.

## Download Firmware

> EasyLoader is only Window-supported.  If you don't have a Windows computer or you would like to download specific file to flash , please use "Kflash, download firmware below "

<a href="https://m5stack.oss-cn-shenzhen.aliyuncs.com/resource/docs/M5StickV_Firmware_0813.kfpkg"><button type="button" class="btn btn-primary">click to download firmware file</button></a>


## Flash Firmware

>1, Select Kflash_GUI flash tool for your computer OS.

<div class="link">
 <h4><span>Kflash_GUI:</span></h4>
    <p>
    <a href="https://github.com/sipeed/kflash_gui/releases/download/v1.5.3/kflash_gui_v1.5.3_windows.7z" target="_blank" rel="noopener noreferrer"><img src="https://cdn.shopify.com/s/files/1/0056/7689/2250/files/windows_89cc6ea0-2a3c-4327-97e5-8f51f448c38b_icon.png?v=1557026574" alt="">Windows</a>
    <a href="https://github.com/sipeed/kflash_gui/releases/download/v1.5.2/kflash_gui_v1.5.2_macOS.dmg" target="_blank" rel="noopener noreferrer"><img src="https://cdn.shopify.com/s/files/1/0056/7689/2250/files/mac_large.png?v=1557026570" alt="">MacOS</a>
    <a href="https://github.com/sipeed/kflash_gui/releases/download/v1.5.3/kflash_gui_v1.5.3_linux.tar.xz" target="_blank" rel="noopener noreferrer"><img src="https://cdn.shopify.com/s/files/1/0056/7689/2250/files/linux_icon.png?v=1557026584" alt="">Linux</a></p>
</div>

>2, Connect the device to computer via Type-C cable, double click to open the **Kflash_GUI** app, choose the right com port , developement board type, firmware file, baud rate, click download to start the process.

<img src="assets\img\getting_started_pics\m5stickv\kflash_gui_01.jpg">

### Kflash

>3, For people who are used to use command line, Kflash could be an alternative option.[Click here for details](https://github.com/kendryte/kflash.py)

## Material Training


### boot code

> Material Training requires SD cards, users could downloade boot code zip files, unzip the files to SD card.(M5StickC only recognized certain type of SD card , [click to see the supported type](en/core/m5stickv?id=sd-card-test))

<a href="https://m5stack.oss-cn-shenzhen.aliyuncs.com/resource/docs/V-Training_boot_0823.zip"><button type="button" class="btn btn-primary">Click here download boot zip</button></a>

<img src="assets\img\related_documents\v-training\1.jpg" width="60%">

### Footage Shooting 

> Load the SD card before power on the device. SD card is used for saving the footage. Long press left button to power on, if the screen show a display  Training like below, means it entered shooting program. 

<img src="assets\img\related_documents\v-training\2.jpg" width="60%">

> By default, the code provided 10 set of Class for you to shooting the training material, each class represent a recognition object. <mark>For better result, we recommend to shoot more than 3 Class (More than 3 recognition object )</mark>

>Navigate bar on top of the screen would display instant Class number and picture amount. Press HOME button to start  shooting, right side button is to switch between Classes.

<img src="assets\img\related_documents\v-training\3.jpg" width="60%">

>During shooting, plase try to keep the shooting picture as close to the reality scene as possible, such as light intensity. Regars to the shooting distance,  better keep it just enough to fill the recgnition object into the screen, not much choas on the background.

<img src="assets\img\related_documents\v-training\4.jpg" width="100%">

<mark>note：In order to reach a certain accuracy, each Class should contains at least 120 pictures, or the Could Training would give out a rejection</mark>

## Material Checking and Compress

>After finish the shooting, shut down the device, take out SD card, put the photos materials into "train" and "vaild" folder. Copy to your computer.

<img src="assets\img\related_documents\v-training\5.jpg" width="60%">

> Inside folder "train","vaild", they share exact the same folder directory, when we switch Class, the program will generate the same folder (with a name of Class number) in both "train" and "vaild". The phtotos will placed either in "train" or "vaild",  underneath the coorespondent Class folder.

> Before we compress the package, we should check the photo and photo number, make sure for the same Class, the number of photos in the coorespondent Class Folder in  
<mark>"train" and "vaild"  should add up over 120. (like n1-n100 in train, n100-n120 in vaild). If any Class photos total amount were under 120, please either delete it or copy for back up. After finish the checking, let's compress the "train" and "vaild" to ZIP.
</mark>

## Upload Data to Cloud

>[Click to visit upload page](http://v-training.m5stack.com/)，type in your personal information（upload file should under 200MB, and had to be ZIP format）

<img src="assets\img\related_documents\v-training\6.jpg" width="60%">

> After the Upload is done, file will enter request queue. At bottom left corner will show the current queue status.

<img src="assets\img\related_documents\v-training\7.jpg" width="60%">

>After training accomplished, code file will sent to your personal e-mail, copy the download link to download the file to your computer.

<img src="assets\img\related_documents\v-training\8.jpg" width="60%">

## Run Recognition Program

>Unzip the file, copy it to SD card, keep the SD card in the M5StickV, power on to run the progarm automatically.

<img src="assets\img\related_documents\v-training\9.jpg" width="60%">

<img src="assets\img\related_documents\v-training\10.jpg" width="60%">

>Default program will do the recognition according to the order of the Class, and will display on the screen. Users can change the boot.py file to modify the display information.

<img src="assets\img\related_documents\v-training\11.jpg" width="60%">


<style>

.link a{

    padding-left: 13%;

}

</style>
