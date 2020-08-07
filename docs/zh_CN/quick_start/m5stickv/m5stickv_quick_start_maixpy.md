# M5StickV Maixpy上手指南

## EasyLoader

>EasyLoader是一个简洁快速的程序烧录器，其内置了一个产品相关的案例程序，通过简单步骤将其烧录至主控，即可进行一系列的功能验证.

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
            <p>案例描述:</p>
            <p>搭载Maixpy固件，测试摄像头，屏幕图形显示功能，单击HOME键可开关背部补光灯.</p>
        </div>
    </div>
</div>


## 烧录固件

> 需要指定烧录文件的用户可以选用**Kflash**进行固件烧录.

<a href="https://m5stack.oss-cn-shenzhen.aliyuncs.com/resource/docs/M5StickV_Firmware_v5.1.2.kfpkg"><button type="button" class="btn btn-primary">点击下载固件文件</button></a>

>1.点击下方对应自己操作系统的 Kflash_GUI烧录工具进行下载.

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


>2.将设备通过Tpye-C数据线连接至电脑，双击打开烧录工具**Kflash_GUI**应用程序,选择对应的设备端口、开发板类型(M5StickV)、固件程序、波特率. 点击下载，开始烧录 .

<img src="assets\img\getting_started_pics\m5stickv\kflash_gui_01.webp">

### Kflash

>3.对于习惯使用命令行操作的用户来说还可以选择Kflash作为固件烧录工具.[点击此处查看详情](https://github.com/kendryte/kflash.py)


## 串口调试工具

>1.编程M5StickV需要使用到串口调试工具，您可以使用Putty作为串口调试工具, [点击此处](https://www.chiark.greenend.org.uk/~sgtatham/putty/latest.html)访问Putty资源页面，选择对应自己操作系统Putty进行下载，并安装.

>2.运行Putty后，将M5StickV通过Tpye-C数据线连接至电脑端口，在Putty中设置相应的端口号与波特率，点击"open"，开始连接. （你可以通过查看设备管理器得到M5StickV所使用的端口号）

<img src="assets\img\getting_started_pics\m5stickv\putty_01.webp">

> 连接成功后，将自动进入，MaixPy 的交互界面. 此时设备正在运行着默认程序，您可以通过按下快捷键"Ctrl+C"中断其运行，并进入命令行.

<img src="assets\img\getting_started_pics\m5stickv\putty_02.webp">

## Hello World

>在命令行输入下方代码，M5StickV屏幕将显示"hello world".

```
import lcd

lcd.init()
lcd.draw_string(100, 100, "hello world", lcd.RED, lcd.BLACK)

```


## 编辑与运行文件

### 编辑文件

>在交互解释器（REPL）中，我们能够便捷的输入程序并马上得到运行结果，但这仅适合用作短程序的验证，在实际项目中，庞大代码量使得我们不得不将代码编辑成一个个的文件.

>在 MaixPy 中，内置了一款编开源编辑器 [Micropython Editor(pye)](https://github.com/robert-hh/Micropython-Editor)，这使得我们能够非常方便的修改程序文件.

使用 `os.listdir()` 可以查看当前目录下的文件，

使用 `pye("hello.py")` 可以创建文件并进入编辑模式(已存在同名文件，则仅进入编辑)， 快捷键等使用说明可以在[这里查看](https://github.com/robert-hh/Micropython-Editor/blob/master/Pyboard%20Editor.pdf)

在编辑器中完成编辑后，按 `Ctrl+S` > `Enter` 键进行保存， 按 `Ctrl+Q` 退出编辑

**注意**： 使用这款编辑器对使用的串口工具有一定要求， 必须将 `BackSpace` 按键设置为 `DEL` 功能， 否则按 `BackSpace` 调用的是 `Ctrl+H` 一样的功能（即字符替换）


### 运行文件

使用 `os.chdir()` 切换当前目录到文件的目录，比如 `os.chdir("/flash")`

#### 方法一： `import`

然后执行 `import hello`

即可看到输出 `hello maixpy`

使用此方法简单易用，但是需要注意的是， 目前 `import` 只能使用一次， 如果第二次 `import`， 则文件不会再执行， 如果需要多次执行，建议使用下面的方法

#### 方法二： `exec()`

使用 `exec()` 函数来执行

```python
with open("hello.py") as f:
    exec(f.read())

```

### 开机自动运行脚本

系统会在 `/flash` 或者 `/sd` 目录创建 `boot.py` 文件， 开机会自动先执行这个脚本， 编辑这个脚本的内容即可实现开机自启


## MaixPy IDE

#### 下载MaixPy IDE

MaixPy IDE能够便捷的实现脚本程序的实时编辑、上传、执行，以及实时监控摄像头图像，文件传输等功能.使用 MaixPy IDE 因为数据的压缩、传输需要耗费一部分资源，所以性能会有所降低，但对性能需求不苛刻，或处于调试阶段的开发者来说这会是一个很不错的开发工具.

<a href="http://dl.sipeed.com/MAIX/MaixPy/ide/"><el-button type="primary">MaixPy IDE</el-button></a>

#### 安装MaixPy IDE

Windows平台可直接双击exe文件，运行安装程序.

Linux命令行给运行权限然后,执行命令

`chmod +x maixpy-ide-linux-x86_64-0.2.2.run`

`./maixpy-ide-linux-x86_64-0.2.2.run`

#### 使用MaixPy IDE

>运行MaixPy IDE， 点击工具栏，选择开发板的型号.`Tool`-> `Select Board`-> `M5StickV` (工具->选择开发板)

<img src="assets\img\getting_started_pics\m5stickv\ide_01.webp" width="70%">

>点击左下角的连接按钮，并选择正确的连接端口，点击OK.

<img src="assets\img\getting_started_pics\m5stickv\ide_02.webp" width="70%">

>当连接按钮由绿色变为红色的时表示，已经连接成功，你可以在上方的编辑框进行代码编辑，点击左下角的运行按钮能够执行代码，进行验证.

<img src="assets\img\getting_started_pics\m5stickv\ide_03.webp" width="70%">


**视频教程** 

<video width="70%" controls>
    <source src="https://m5stack.oss-cn-shenzhen.aliyuncs.com/video/LukeVideo/M5StickV_setup.mp4" >
</video>


## WS2812

固件内置了WS2812 RGB LED驱动库，以下为参考例程：

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

## 案例程序

<a href="https://docs.m5stack.com/#/zh_CN/related_documents/M5StickV-Maixpy"><el-button type="primary">查看Maixpy案例</el-button></a>

<a href="https://maixpy.sipeed.com/zh/libs/standard/"><el-button type="primary">Maixpy docs</el-button></a>

<a href="https://github.com/sipeed/MaixPy/tree/master/projects/maixpy_m5stickv"><el-button type="primary">Github</el-button></a>


<script>
   anchor_search();
   scrollFunc();
</script>
