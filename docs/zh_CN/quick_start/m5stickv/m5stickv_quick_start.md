# M5StickV 上手指南 {docsify-ignore-all}

## 目录

**[1. 准备工作](#准备工作)**

**[2. 烧录固件](#烧录固件)**

**[3. 串口调试工具](#串口调试工具)**

**[4. Hello World](#Hello-World)**

**[5. 编辑与运行文件](#编辑与运行文件)**

**[6. 程序库](#程序库)**




## 准备工作

>1.下载固件文件，访问PASSSSSSS，根据你的需求下载相应的固件文件，下方为固件类型基本介绍.

<div class="container">
  <ul class="list-group">
    <li class="list-group-item list-group-item-light"><mark>maixpy_v*_no_lvgl.bin</mark>： MaixPy固件, 不带LVGL版本.(LVGL是嵌入式GUI框架, 写界面的时候需要用到)</li>
    <li class="list-group-item list-group-item-light"><mark>maixpy_v*_full.bin</mark>： 完整版的MaixPy固件(MicroPython + OpenMV API + lvgl )</li>
    <li class="list-group-item list-group-item-light"><mark>maixpy_v0.3.1_minimum.bin</mark>： MaixPy固件最小集合，不支持 MaixPy IDE， 不包含OpenMV的相关算法</li>
    <li class="list-group-item list-group-item-light"><mark>face_model_at_0x300000.kfpkg</mark>： 人脸模型，放置在地址位 0x300000， 可以和.bin分开多次下载，不冲突</li>
    <li class="list-group-item list-group-item-light"><mark>elf.7z</mark>： elf 文件，用于死机调试</li>
  </ul>
</div>

## 烧录固件


>1.下载固件烧录工具[Kflash_GUI](https://github.com/sipeed/kflash_gui/releases).

>2.将设备通过Tpye-C数据线连接至电脑，双击打开烧录工具**Kflash_GUI**应用程序,选择对应的设备端口、固件程序、波特率. 点击下载，开始烧录. （固件文件与模型文件可分开烧录，二者不冲突）

<img src="assets\img\getting_started_pics\m5stickv\kflash_gui_01.jpg">

### Kflash

>1.对于习惯使用命令行操作的用户来说还可以选择Kflash作为固件烧录工具.[点击此处查看详情](https://github.com/kendryte/kflash.py)


## 串口调试工具

### For Windows

>[点击此处](https://www.chiark.greenend.org.uk/~sgtatham/putty/latest.html)访问Putty资源页面，选择对应自己操作系统Putty进行下载，并安装.

<img src="assets\img\getting_started_pics\m5stickv\putty_01.jpg">

> MaixPy 的交互界面.

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

### 上传文件

>虽然 MaixPy 内置编辑器使得我们能够直接操作文件内容.但对于多文件的情况下，使用电脑的其他编辑器编写代码然后再将文件上传，将大大提升工作效率.

>[uPyLoader](https://github.com/BetaRavener/uPyLoader) 是一款开源软件，使用它可以方便地连接 MaixPy 并且上传、下载、执行文件，同时监控输出等等功能，功能比较完善

[下载uPyLoader](https://github.com/BetaRavener/uPyLoader/releases)

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




## 程序库

>1.[查看更多程序案例](https://github.com/sipeed/kflash_gui/releases).