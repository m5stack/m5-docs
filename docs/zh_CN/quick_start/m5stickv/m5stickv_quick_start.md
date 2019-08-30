# M5StickV 上手指南 {docsify-ignore-all}

## 目录

**[1. 下载固件](#下载固件)**

**[2. 烧录固件](#烧录固件)**

**[3. 串口调试工具](#串口调试工具)**

**[4. Hello World](#Hello-World)**

**[5. 编辑与运行文件](#编辑与运行文件)**

**[6. MaixPy IDE](#MaixPy-IDE)**

**[7. 程序库](#程序库)**

**[8. V-Training](#V-Training)**


## EasyLoader

<img src="https://m5stack.oss-cn-shenzhen.aliyuncs.com/image/EasyLoader_logo.png" width="100px" style="margin-top:20px">

<a href="https://m5stack.oss-cn-shenzhen.aliyuncs.com/EasyLoader/M5Core/M5StickV/EasyLoader_M5StickV_0830.exe"><button type="button" class="btn btn-primary">点击下载EasyLoader</button></a>

>1.EasyLoader是一个简洁快速的程序烧录器，每一个产品页面里的EasyLoader都提供了一个与产品相关的案例程序，对于不需要对固件进行定制或进行其他操作的用户，使用EasyLoader为M5StickV烧录固件，会是一个最简洁的方案（**目前EasyLoader仅适用于Windows操作系统**）.

>2.下载软件后，双击运行应用程序，将M5设备通过数据线连接至电脑,选择端口参数，点击 **"Burn"** 即可开始烧录


## 下载固件

> 需要指定烧录文件的用户可以选用**Kflash**进行固件烧录.

<a href="https://m5stack.oss-cn-shenzhen.aliyuncs.com/resource/docs/M5StickV_Firmware_0830_beta.kfpkg"><button type="button" class="btn btn-primary">点击下载固件文件</button></a>


## 烧录固件

>1.点击下方对应自己操作系统的 Kflash_GUI烧录工具进行下载.

<div class="link">
 <h4><span>Kflash_GUI:</span></h4>
    <p>
    <a href="https://github.com/sipeed/kflash_gui/releases/download/v1.5.3/kflash_gui_v1.5.3_windows.7z" target="_blank" rel="noopener noreferrer"><img src="https://cdn.shopify.com/s/files/1/0056/7689/2250/files/windows_89cc6ea0-2a3c-4327-97e5-8f51f448c38b_icon.png?v=1557026574" alt="">Windows</a>
    <a href="https://github.com/sipeed/kflash_gui/releases/download/v1.5.2/kflash_gui_v1.5.2_macOS.dmg" target="_blank" rel="noopener noreferrer"><img src="https://cdn.shopify.com/s/files/1/0056/7689/2250/files/mac_large.png?v=1557026570" alt="">MacOS</a>
    <a href="https://github.com/sipeed/kflash_gui/releases/download/v1.5.3/kflash_gui_v1.5.3_linux.tar.xz" target="_blank" rel="noopener noreferrer"><img src="https://cdn.shopify.com/s/files/1/0056/7689/2250/files/linux_icon.png?v=1557026584" alt="">Linux</a></p>
</div>

>2.将设备通过Tpye-C数据线连接至电脑，双击打开烧录工具**Kflash_GUI**应用程序,选择对应的设备端口、开发板类型(M5StickV)、固件程序、波特率. 点击下载，开始烧录 .

<img src="assets\img\getting_started_pics\m5stickv\kflash_gui_01.jpg">

### Kflash

>3.对于习惯使用命令行操作的用户来说还可以选择Kflash作为固件烧录工具.[点击此处查看详情](https://github.com/kendryte/kflash.py)


## 串口调试工具

>1.编程M5StickV需要使用到串口调试工具，您可以使用Putty作为串口调试工具, [点击此处](https://www.chiark.greenend.org.uk/~sgtatham/putty/latest.html)访问Putty资源页面，选择对应自己操作系统Putty进行下载，并安装.

>2.运行Putty后，将M5StickV通过Tpye-C数据线连接至电脑端口，在Putty中设置相应的端口号与波特率，点击"open"，开始连接. （你可以通过查看设备管理器得到M5StickV所使用的端口号）

<img src="assets\img\getting_started_pics\m5stickv\putty_01.jpg">

> 连接成功后，将自动进入，MaixPy 的交互界面. 此时设备正在运行着默认程序，您可以通过按下快捷键"Ctrl+C"中断其运行，并进入命令行.

<img src="assets\img\getting_started_pics\m5stickv\putty_02.jpg">


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

<div class="btn-group">
    <button type="button" class="btn btn-primary dropdown-toggle" data-toggle="dropdown">下载MaixPy IDE v0.2.4</button>
    <div class="dropdown-menu">
    <a class="dropdown-item" href="http://dl.cdn.sipeed.com/maixpy-ide-windows-0.2.4-installer-archive.7z">windows-0.2.4-installer-archive.7z</a>
    <a class="dropdown-item" href="http://dl.cdn.sipeed.com/maixpy-ide-windows-0.2.4.exe">windows-0.2.4.exe</a>
    <a class="dropdown-item" href="http://dl.cdn.sipeed.com/maixpy-ide-linux-x86_64-0.2.4-installer-archive.7z">linux-x86_64-0.2.4-installer-archive.7z</a>
    <a class="dropdown-item" href="http://dl.cdn.sipeed.com/maixpy-ide-linux-x86_64-0.2.4.run">linux-x86_64-0.2.4.run</a>
    </div>
</div>


#### 安装MaixPy IDE

Windows平台可直接双击exe文件，运行安装程序.

Linux命令行给运行权限然后,执行命令

`chmod +x maixpy-ide-linux-x86_64-0.2.2.run`

`./maixpy-ide-linux-x86_64-0.2.2.run`

#### 使用MaixPy IDE

>运行MaixPy IDE， 点击工具栏，选择开发板的型号.`Tool`-> `Select Board`-> `M5StickV` (工具->选择开发板)

<img src="assets\img\getting_started_pics\m5stickv\ide_01.jpg" width="70%">

>点击左下角的连接按钮，并选择正确的连接端口，点击OK.

<img src="assets\img\getting_started_pics\m5stickv\ide_02.jpg" width="70%">

>当连接按钮由绿色变为红色的时表示，已经连接成功，你可以在上方的编辑框进行代码编辑，点击左下角的运行按钮能够执行代码，进行验证.

<img src="assets\img\getting_started_pics\m5stickv\ide_03.jpg" width="70%">

**视频教程** 

<video width="70%" controls>
    <source src="https://m5stack.oss-cn-shenzhen.aliyuncs.com/video/Product_example_video/Core/M5StickV/M5StickV_IDE_Video.mp4" >
</video>


## 程序库


<a href="https://maixpy.sipeed.com/zh/libs/standard/"><button type="button" class="btn btn-primary">查看更多程序案例</button></a>


## V-Training

<a href="#zh_CN/related_documents/v-training"><button type="button" class="btn btn-primary">V-Training使用说明</button></a>

<style>

.link a{

    padding-left: 13%;

}

</style>