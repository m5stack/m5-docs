# UnitV Quick Start {docsify-ignore-all}

## EasyLoader

<img src="https://m5stack.oss-cn-shenzhen.aliyuncs.com/image/EasyLoader_logo.webp" width="100px" style="margin-top:20px">

<a href="https://m5stack.oss-cn-shenzhen.aliyuncs.com/EasyLoader/Windows/CORE/EasyLoader_M5StickV_v5.1.2.exe"><button type="button" class="btn btn-primary">click to download EasyLoader</button></a>

>1.EasyLoader is a simple and fast program burner, and each product page has a product-related case program for EasyLoader.For users who don't need to customize the firmware or perform other operations, using EasyLoader to burn firmware for M5StickV is the simplest solution.(**Currently EasyLoader is only available for Windows OS**)

>2.After downloading the software, double-click to run the application, connect the M5 device to the computer via the data cable, select the port parameters, and click **"Burn"** to start burning.


## Firmware

> Users who use an operating system other than Windows or who need to specify a burning file can use **Kflash** for firmware burning. Click the link below to download the firmware.

<a href="https://m5stack.oss-cn-shenzhen.aliyuncs.com/resource/docs/M5StickV_Firmware_v5.1.2.kfpkg"><button type="button" class="btn btn-primary" target="view_window">click to download firmware </button></a>


>1. Flash tool Kflash_GUI.

<div class="files_download">
   <p class="item">
      <a href="https://github.com/sipeed/kflash_gui/releases/download/v1.5.3/kflash_gui_v1.5.3_windows.7z">
      <img src="/image/base/Windows_logo.webp" width="50">
      <span class="item-title">Windows10</span>
      </a>
   </p>

   <p class="item">
      <a href="https://github.com/sipeed/kflash_gui/releases/download/v1.5.2/kflash_gui_v1.5.2_macOS.dmg">
      <img src="/image/base/MacOS_logo.webp" width="50"> 
      <span class="item-title">MacOS</span>
      </a>
   </p>

   <p class="item">
      <a href="https://github.com/sipeed/kflash_gui/releases/download/v1.5.3/kflash_gui_v1.5.3_linux.tar.xz">
      <img src="/image/base/Linux_logo.webp" width="50"> 
      <span class="item-title">Linux</span>
      </a>
   </p>
</div>

>2. Connect the device to the computer through the Tpye-C data cable, double-click to open the burning tool**Kflash_GUI** application, select the corresponding device port, development board type (M5StickV), firmware program, baud rate. Click to download , start burning.

<img src="assets\img\getting_started_pics\m5stickv\kflash_gui_01.webp">

### Kflash

> 3. For users who are used to command line operation, [can also choose Kflash as the firmware burning tool.](https://github.com/kendryte/kflash.py)


### Serial-Tool

>1. You will need a serial debugging tool for programming M5StickV, you can use Putty [in here](https://www.chiark.greenend.org.uk/~sgtatham/putty/latest.html),for download and information.

>2. Run Putty, connect M5StickV to your PC, in Putty, set com number, baudrate, click "open", by now the connect process should started.(you can check the com number in device manager on your PC)

<img src="assets\img\getting_started_pics\m5stickv\putty_01.webp">

> When connected, it will automatically enter Maixpy UI. Now the device is runing the default code, you can terminate it by "Ctrl+C".

<img src="assets\img\getting_started_pics\m5stickv\putty_02.webp">


## Edit and Run the Code

### Editting


> The language shell programm(REPL) is good for instant code validatation, it can be used at short code programming and validation. In real project where we will have massive amount of code, in that case we will need a Code Editor for better orgnization of the code files.


>Inside MaixPy，integrates a open source Editor [Micropython Editor(pye)](https://github.com/robert-hh/Micropython-Editor)，which is convenient for us to manage the code.

function `os.listdir()`  is for checking the files in current directory.


With function `pye("hello.py")`, you can create new files and enter editing mode(if file exist, only enter editting mode)[click for more](https://github.com/robert-hh/Micropython-Editor/blob/master/Pyboard%20Editor.pdf)

If editing finished, you can do  `Ctrl+S` > `Enter` to save the script. `Ctrl+Q` to exit edit mode.


**Notice**： This editor have some requiremnt on the Serial tool,  KEY `BackSpace` have to set as `DEL` function，or `BackSpace` will implement the same function as  `Ctrl+H`(charater replacement)


### File Execution

Function `os.chdir()` is used for switch current directory to a certain directory, for example `os.chdir("/flash")`

#### Solution 1： `import`

Run  `import hello`

You can see the output: `hello maixpy`

In this way, it is simple and handy, but thers something worth your attention, `import` can only be utilized once, the second time `import` won't work. If you need to use `import` mutiple times, please refers to solution 2 below

#### Solution 2： `exec()`

Use `exec()` function: 

```python
with open("hello.py") as f:
    exec(f.read())

```

### AutoRun after Power On 


System will create a `boot.py` file at directory `/flash` or  `/sd` , it will run this script after power on, modify this file will realize the AutoRun.

## MaixPy IDE


#### Download MaixPy IDE

MaixPy IDE can easily realize real-time editing, uploading, execution, and real-time monitoring of camera images, file transfer and other functions. Using MaixPy IDE, because data compression and transmission require a part of resources, performance will be reduced, but This is a great development tool for developers who are not demanding in performance or who are in the debugging phase.

<div class="btn-group">
    <button type="button" class="btn btn-primary dropdown-toggle" data-toggle="dropdown">Download MaixPy IDE v0.2.4</button>
    <div class="dropdown-menu">
    <a class="dropdown-item" href="http://dl.cdn.sipeed.com/maixpy-ide-windows-0.2.4-installer-archive.7z">windows-0.2.4-installer-archive.7z</a>
    <a class="dropdown-item" href="http://dl.cdn.sipeed.com/maixpy-ide-windows-0.2.4.exe">windows-0.2.4.exe</a>
    <a class="dropdown-item" href="http://dl.cdn.sipeed.com/maixpy-ide-linux-x86_64-0.2.4-installer-archive.7z">linux-x86_64-0.2.4-installer-archive.7z</a>
    <a class="dropdown-item" href="http://dl.cdn.sipeed.com/maixpy-ide-linux-x86_64-0.2.4.run">linux-x86_64-0.2.4.run</a>
    </div>
</div>


#### Install MaixPy IDE

Windows platform can directly double-click the exe file to run the installer.

Linux command line to run permissions, then execute commands

`chmod +x maixpy-ide-linux-x86_64-0.2.2.run`

`./maixpy-ide-linux-x86_64-0.2.2.run`

#### Use MaixPy IDE

>Run the MaixPy IDE, click on the toolbar, select the model of the development board. `Tool`-> `Select Board`-> `M5StickV` (Tools -> Select Development Board)

<img src="assets\img\getting_started_pics\m5stickv\ide_01.webp" width="70%">

>Click the Connect button in the lower left corner and select the correct connection port, click OK.

<img src="assets\img\getting_started_pics\m5stickv\ide_02.webp" width="70%">

>When the connection button changes from green to red, it has been connected successfully. You can edit the code in the edit box above. Click the Run button in the lower left corner to execute the code and verify it.

<img src="assets\img\getting_started_pics\m5stickv\ide_03.webp" width="70%">


## V-Training

V-Training is an online recognition model training service customized for K210 series products launched by M5Stack.


### boot program

>The boot program is a picture material shooting program suitable for UnitV, which is used for material collection in the early stage of model training.

<a href="https://m5stack.oss-cn-shenzhen.aliyuncs.com/resource/docs/UnitV_boot_v1220.py"><button type="button" class="btn btn-primary">Click to download the boot program</button></a>

>The training materials will be saved to the SD card by default, so please insert the SD card into the UnitV card slot before running the boot program. (Note: UnitV has requirements for the selection of SD cards, [click here to see the type of support](en/unit/unitv?id=sd-card-test)）


>Run the MaixPy IDE and connect to the UnitV device. Click the "Open File" option, open the downloaded boot.py file, and click the Run button. After running successfully, the camera image will be monitored in real time in the upper right corner of MaixPy IDE

>Match the camera screen on the IDE for shooting operations. Press the A button to take a picture. The B button is used to switch the class number. The output log will correspond to the class number of each operation and the number of pictures taken. Click "Serial Port Monitor" below to see the log output.

<img src="assets\img\getting_started_pics\unitv\unitv_qs1.webp" width="60%">

>At present, the program provides a total of 10 groups of classes for users to shoot training materials, each group represents a kind of recognition object. <mark> In order to obtain better training results, users must shoot more than 3 groups of Class Recognition object). In order to ensure the accuracy of recognition, the number of Class shooting materials in each group needs to exceed 35, otherwise it will not be passed during cloud training. The greater the number of materials, the better the recognition training effect and the higher the recognition rate high</mark>

<img src="assets\img\getting_started_pics\unitv\unitv_qs2.webp" width="60%">

>When shooting training materials, please try to keep the ambient light conditions of the material shooting consistent with the actual recognition application scene. The shooting distance is recommended to fill the screen with the recognition object completely and there is no other debris in the background.


### Material inspection and suppression

>After shooting the materials, click the disconnect option in the IDE, remove the SD card, and copy the image materials ("train" and "vaild" folders) in the SD to the computer through a card reader.


<img src="assets\img\getting_started_pics\unitv\unitv_qs3.webp" width="60%">

>The "Class" and "vaild" folders have the same Class number folder directory. When you switch between Classes and shoot material, the program will create files with the same Class number in "train" and "vaild" at the same time. Folder, and store the captured pictures into the Class folder under the respective directories of "train" and "vaild" according to the storage rules.

><mark>In addition to checking the correctness of the picture content before suppressing the packaging, you must ensure that the sum of the material pictures in the same Class serial number directory in the two folders of "train" and "vaild" is greater than 35. The class serial number catalog when the total number is less than 35 please Delete or backup. </mark> After completing the inspection, the next thing to do is to suppress the material files. Press the "train" and "vaild" folders into a "zip" format compressed package.

## Upload Data to Cloud

>[Click to visit upload page](http://v-training.m5stack.com/)，type in your personal information（upload file should under 200MB, and had to be ZIP format）

<img src="assets\img\related_documents\v-training\6.webp" width="60%">

> After the Upload is done, file will enter request queue. At bottom left corner will show the current queue status.

<img src="assets\img\related_documents\v-training\7.webp" width="60%">


## Download Model

>After training accomplished, code file will sent to your personal e-mail, copy the download link to download the file to your computer.Unzip the file, copy it to SD card, keep the SD card in the M5StickV

<img src="assets\img\related_documents\v-training\8.webp" width="60%">

<img src="assets\img\related_documents\v-training\9.webp" width="60%">

## Program modification

>The guidance program returned after training is only provided with the object recognition function, but it is the output of the designated recognition or unrecognition state, so the user can modify it according to the existing program according to his own needs. To realize the output of identification data, or the corresponding execution function after the identification is successful. For example, the identification information is printed out serially.

**The following is the boot program with serial port printing program added. It is only a partial comment and is not a complete program. Please use the boot program file returned by training to modify it.**

```
    ...
    
    task = kpu.load("/sd/c33723fb62faf1be_mbnet10_quant.kmodel")//载入模型文件

    labels=["1","2","3","4","5","6"] #The list corresponds to the Class order of the training material, and corresponds to each identifier. You can also modify the elements in the list into other string fields.


    while(True):
        img = sensor.snapshot()
        fmap = kpu.forward(task, img)
        plist=fmap[:]
        pmax=max(plist)
        max_index=plist.index(pmax)
        a = lcd.display(img)
        if pmax > 0.95://Determine whether the recognition rate of the object is greater than 95%
            lcd.draw_string(40, 60, "Accu:%.2f Type:%s"%(pmax, labels[max_index].strip()))
            print(labels[max_index])//Print the identified object name through the serial port.
    
    ....
```

>After the UnitV is powered, it will run the boot program in SD by default to automatically recognize it. After adding the serial printing program, you can use the serial debugging tool to check the identification information.

<img src="assets\img\getting_started_pics\unitv\unitv_qs4.webp" width="60%">

## WS2812

The firmware has a built-in WS2812 RGB LED driver library. The following is a reference routine. Note: Since the expansion port of UnitV does not have a driving load function, this program is only suitable for driving the built-in RGB LED:

```
from modules import ws2812
from fpioa_manager import *
fm.register(8)
class_ws2812 = ws2812(8,100)
r=0
dir = True
while True:
    if dir:
        r += 5
    else:
        r -= 5
    if r>=255:
        r = 255
        dir = False
    elif r<0:
        r = 0
        dir = True
    for i in range(100):
        a = class_ws2812.set_led(i,(0,0,r))
    a=class_ws2812.display()
```

## Library

In the library documentation, you can find more APIs to help you build a variety of applications。

<a href="https://maixpy.sipeed.com/en/libs/standard/"><button type="button" class="btn btn-primary">See more program examples</button></a>

<a href="https://github.com/sipeed/MaixPy/tree/master/projects/maixpy_m5stickv"><button type="button" class="btn btn-primary">Github</button></a>


<a href="#/en/quick_start/unitv/v_function"><h2>V-Function</h2></a>

V-Function is a series of **visual recognition** function firmware developed by the M5Stack team for V series devices. Click the V-Funciton title to view the instructions.


<script>
   anchor_search();
   scrollFunc();
</script>
