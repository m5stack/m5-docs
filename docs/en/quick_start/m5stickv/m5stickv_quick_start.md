# M5StickV Quick Start {docsify-ignore-all}

## EasyLoader

>EasyLoader is a concise and fast program writer, which has a built-in case program related to the product. It can be burned to the main control by simple steps to perform a series of function verification.

<div class="easyloader-box">
    <div style="background-color:white;">
        <div><img src="https://m5stack.oss-cn-shenzhen.aliyuncs.com/image/easyloader_intro.webp"></div>
        <div class="easyloader-btn">
            <a href="https://m5stack.oss-cn-shenzhen.aliyuncs.com/EasyLoader/Windows/CORE/EasyLoader_M5StickV_v5.1.2.exe">Windows</a>
            <!-- <a>Linux</a>
            <a>MacOS</a> -->
        </div>
    </div>
    <div>
        <video id="example_video" controls>
            <source src="https://m5stack.oss-cn-shenzhen.aliyuncs.com/video/Product_example_video/Core/M5StickV.mp4" type="video/mp4">
        </video>
        <div class="easyloader-mask">
        <a>
            <svg id="play-btn" t="1583228776634" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="4152" width="75" height="75"><path d="M512 0C229.216 0 0 229.216 0 512s229.216 512 512 512 512-229.216 512-512S794.784 0 512 0z m0 928C282.24 928 96 741.76 96 512S282.24 96 512 96s416 186.24 416 416-186.24 416-416 416zM384 288l384 224-384 224z" p-id="4153" fill="#007aff"></path></svg></a>
            <p>Description:</p>
            <p>Equipped with Maixpy firmware, test camera, screen graphics display function, and then press the HOME button to turn on the rear fill light.</p>
        </div>
    </div>
</div>

## Download

> Users who use an operating system other than Windows or who need to specify a burning file can use **Kflash** for firmware burning. Click the link below to download the firmware.

<a href="https://m5stack.oss-cn-shenzhen.aliyuncs.com/resource/docs/M5StickV_Firmware_v5.1.2.kfpkg"><button type="button" class="btn btn-primary" target="view_window">click to download firmware </button></a>


## Flash

>1. Click and download the right Kflash_GUI burning tool base on your operating system.

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

>2. Connect the device to the computer through the Type-C data cable, double-click to open the burning tool **Kflash_GUI** application, select the corresponding device port, development board type (M5StickV), firmware program, baud rate. Click to download , start burning.


<img src="assets\img\getting_started_pics\m5stickv\kflash_gui_01.webp">

### Kflash

>3.For people who used to operate by using shell command, you can choose Kflash as your firmware burning tool.[Click for more detail](https://github.com/kendryte/kflash.py)


## Serial-Tool

>1. You will need a serial debugging tool for programming M5StickV, you can use Putty [in here](https://www.chiark.greenend.org.uk/~sgtatham/putty/latest.html), to be your serial debugging tool, click here to visit Putty resource page, download and install the exact Putty base on your operating system.

>2. Run Putty, connect M5StickV to your PC, in Putty, set COM number, baud rate, click "open", by now the connect process should start.(you can check the COM number in device manager on your PC)




<img src="assets\img\getting_started_pics\m5stickv\putty_01.webp">

> When connected, it will automatically enter Maixpy UI. Now the device is runing the default code, you can terminate it by "Ctrl+C".

<img src="assets\img\getting_started_pics\m5stickv\putty_02.webp">


## Hello World

>Type in the following code, a display "hello world" will show on the screen .

```
import lcd

lcd.init()
lcd.draw_string(100, 100, "hello world", lcd.RED, lcd.BLACK)

```


## Edit and Run the Code

### Editting


> The language shell programm(REPL) is good for instant code validatation, it can be used at short code programming and validation. In real project where we will have massive amount of code, in that case we will need a Code Editor for better orgnization of the code files.


>An open source Editor [Micropython Editor(pye)](https://github.com/robert-hh/Micropython-Editor) is integrated inside MaixPy，which is convenient for us to manage the code.


function `os.listdir()`  is for checking the files in current directory.

With function pye("hello.py"), you can create new files and enter editing mode(if file exists, it will only enter editing mode). [Click for more](https://github.com/robert-hh/Micropython-Editor/blob/master/Pyboard%20Editor.pdf)


If editing finished, you can do  `Ctrl+S` > `Enter` to save the script. `Ctrl+Q` to exit edit mode.


**Notice**：This editor has some requirements on the serial tool, key BackSpace has to be set as DEL function，or BackSpace will implement the same function as Ctrl+H(character replacement)


### File Execution

Function `os.chdir()` is used for switching current directory to a certain directory, such as `os.chdir("/flash")`

#### Solution 1： `import`

Run  `import hello`

You can see the output: `hello maixpy`

In this way, it is simple and handy, but there is something worth your attention, `import` can only be utilized once, the second time `import` won't work. If you need to use `import` mutiple times, please refer to solution 2 below

#### Solution 2： `exec()`

Use `exec()` function: 

```python
with open("hello.py") as f:
    exec(f.read())

```

### Auto Run after Power On

System will create a `boot.py`  file at directory `/flash` or  `/sd`  , it will run this script after power on. Modifying this file will make the sustem run automatically.

## MaixPy IDE


#### Download MaixPy IDE

MaixPy IDE can easily realize real-time editing, uploading, execution, and real-time monitoring of camera images, file transfer and other functions. Use MaixPy IDE, because data compression and transmission require a part of resources, performance will be reduced, but this is a great development tool for developers who are not demanding in performance or who are in the debugging phase.


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

Windows users can directly double-click the exe file to run the installer.

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

## V-Training Document

<a href="#/en/related_documents/v-training"><button type="button" class="btn btn-primary">V-Training Document</button></a>


<a href="#/en/quick_start/unitv/v_function"><h2>V-Function</h2></a>

V-Function is a series of **visual recognition** function firmware developed by the M5Stack team for V series devices. Click the V-Funciton title to view the instructions.


**Video Tutorial**

<video width="70%" controls>
    <source src="https://m5stack.oss-cn-shenzhen.aliyuncs.com/video/LukeVideo/M5StickV_setup.mp4">
</video>


## WS2812

The firmware has a built-in WS2812 RGB LED driver library. The following is a reference routine:

```
from modules import ws2812
from fpioa_manager import *
fm.register(board_info.CONNEXT_A)
class_ws2812 = ws2812(board_info.CONNEXT_A,130)
r=0
dir = True
while True:
    if dir:
        r += 1
    else:
        r -= 1
    if r>=255:
        r = 255
        dir = False
    elif r<0:
        r = 0
        dir = True
    for i in range(130):
        a = class_ws2812.set_led(i,(0,0,r))
    a=class_ws2812.display()
```


## Example

<a href="https://docs.m5stack.com/#/en/related_documents/M5StickV-Maixpy"><button type="button" class="btn btn-primary">get Maixpy examples</button></a>

<a href="https://maixpy.sipeed.com/zh/libs/standard/"><button type="button" class="btn btn-primary">get more examples</button></a>

<a href="https://github.com/sipeed/MaixPy/tree/master/projects/maixpy_m5stickv"><button type="button" class="btn btn-primary">Github</button></a>


<script>
   anchor_search();
   scrollFunc();
</script>
