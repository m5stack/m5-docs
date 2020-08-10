# UnitV Maixpy Quick Start

## EasyLoader

<img src="https://m5stack.oss-cn-shenzhen.aliyuncs.com/image/EasyLoader_logo.webp" width="100px" style="margin-top:20px">

<a href="https://m5stack.oss-cn-shenzhen.aliyuncs.com/EasyLoader/Windows/CORE/EasyLoader_M5StickV_v5.1.2.exe"><el-button type="primary">click to download EasyLoader</el-button></a>

>1.EasyLoader is a simple and fast program burner, and each product page has a product-related case program for EasyLoader.For users who don't need to customize the firmware or perform other operations, using EasyLoader to burn firmware for M5StickV is the simplest solution.(**Currently EasyLoader is only available for Windows OS**)

>2.After downloading the software, double-click to run the application, connect the M5 device to the computer via the data cable, select the port parameters, and click **"Burn"** to start burning.


## Firmware

> Users who use an operating system other than Windows or who need to specify a burning file can use **Kflash** for firmware burning. Click the link below to download the firmware.

<a href="https://m5stack.oss-cn-shenzhen.aliyuncs.com/resource/docs/M5StickV_Firmware_v5.1.2.kfpkg"><el-button type="primary">click to download firmware</el-button></a>


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

<a href="http://dl.sipeed.com/MAIX/MaixPy/ide/"><el-button type="primary">MaixPy IDE</el-button></a>

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

<a href="https://maixpy.sipeed.com/en/libs/standard/"><el-button type="primary">Maixpy docs</el-button></a>

<a href="https://github.com/sipeed/MaixPy/tree/master/projects/maixpy_m5stickv"><el-button type="primary">Github</el-button></a>


<script>
   anchor_search();
   scrollFunc();
</script>
