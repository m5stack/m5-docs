# UnitV 上手指南 {docsify-ignore-all}

## 目录

**[1. 下载固件](#下载固件)**

**[2. 烧录固件](#烧录固件)**

**[3. 串口调试工具](#串口调试工具)**

**[4. 编辑与运行文件](#编辑与运行文件)**

**[5. MaixPy IDE](#MaixPy-IDE)**

**[6. V-Training](#V-Training)**

**[7. 程序库](#程序库)**


## EasyLoader

<img src="https://m5stack.oss-cn-shenzhen.aliyuncs.com/image/EasyLoader_logo.png" width="100px" style="margin-top:20px">

<a href="https://m5stack.oss-cn-shenzhen.aliyuncs.com/EasyLoader/M5Core/M5StickV/EasyLoader_M5StickV_1022_beta.exe"><button type="button" class="btn btn-primary">点击下载EasyLoader</button></a>

>1.EasyLoader是一个简洁快速的程序烧录器，每一个产品页面里的EasyLoader都提供了一个与产品相关的案例程序，对于不需要对固件进行定制或进行其他操作的用户，使用EasyLoader为UnitV烧录固件，会是一个最简洁的方案（**目前EasyLoader仅适用于Windows操作系统**）.

>2.下载软件后，双击运行应用程序，将M5设备通过数据线连接至电脑,选择端口参数，点击 **"Burn"** 即可开始烧录


## 下载固件

> 需要指定烧录文件的用户可以选用**Kflash**进行固件烧录.

<a href="https://m5stack.oss-cn-shenzhen.aliyuncs.com/resource/docs/M5StickV_Firmware_1022_beta.kfpkg"><button type="button" class="btn btn-primary">点击下载固件文件</button></a>


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

>1.编程UnitV需要使用到串口调试工具，您可以使用Putty作为串口调试工具, [点击此处](https://www.chiark.greenend.org.uk/~sgtatham/putty/latest.html)访问Putty资源页面，选择对应自己操作系统Putty进行下载，并安装.

>2.运行Putty后，将UnitV通过Tpye-C数据线连接至电脑端口，在Putty中设置相应的端口号与波特率，点击"open"，开始连接. （你可以通过查看设备管理器得到UnitV所使用的端口号）

<img src="assets\img\getting_started_pics\m5stickv\putty_01.jpg">

> 连接成功后，将自动进入，MaixPy 的交互界面. 此时设备正在运行着默认程序，您可以通过按下快捷键"Ctrl+C"中断其运行，并进入命令行.

<img src="assets\img\getting_started_pics\m5stickv\putty_02.jpg">



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


## V-Training

V-Training 是由M5Stack推出的一个针对K210系列产品而定制的在线识别模型训练服务，以下为使用步骤。


### boot程序

> boot程序是适用于UnitV的一个图片素材拍摄程序，用于模型训练前期的素材收集。

<a href="https://m5stack.oss-cn-shenzhen.aliyuncs.com/resource/docs/UnitV_boot_v1220.py"><button type="button" class="btn btn-primary">点击下载boot程序</button></a>

>拍摄的训练素材将默认储存到SD卡，因此在运行boot程序前请将SD卡插入UnitV的卡槽。（注意：UnitV对SD卡的选型有所要求，[点击此处查看支持类型](zh_CN/unit/unitv?id=sd卡测试)）


>运行MaixPy IDE，连接UnitV设备.点击"打开文件"选项，打开已经下载的boot.py文件，点击运行按钮。运行成功后，在MaixPy IDE的右上角将实时监视摄像头画面

>配合IDE上的摄像头画面进行拍摄操作，按下A键进行图片拍摄，B键按键则用于切换Class序号.输出日志将对应每一次操作的Class序号以及拍摄图片数量。点击下方的"串口监视器"，查看日志输出。

<img src="assets\img\getting_started_pics\unitv\unitv_qs1.jpg" width="60%">

>目前程序一共提供了10组Class供用户拍摄训练素材，每一组Class代表着一种识别对象.<mark>为了获得更好的训练效果，用户必须要拍摄3组以上的Class（三个以上的识别对象).为了保证识别的准确率，每组Class拍摄素材张数需要超过35张，否则在进行云端训练时将不给予通过. 素材的数量越多，识别训练的效果越好，识别率越高</mark>

<img src="assets\img\getting_started_pics\unitv\unitv_qs2.jpg" width="60%">

>在拍摄训练素材时，请尽可能保持素材拍摄的环境光线情况与实际识别应用场景一致，拍摄距离建议将识别对象刚好完整填入屏幕，且背景无其他杂物.


### 素材检查与压制

>素材拍摄完成后，点击IDE中的断开连接选项，取出SD卡，通过读卡器将SD中的图片素材（"train"、"vaild"两个文件夹），复制至电脑端.


<img src="assets\img\getting_started_pics\unitv\unitv_qs3.jpg" width="60%">

>"train"、"vaild"两个文件夹中的Class序号文件夹目录是保持一致的，当切换Class并拍摄素材时，程序将会在"train"、"vaild"中同时创建Class序号一致的文件夹，并按照存放规则将所拍摄的图片分别存储到"train"、"vaild"各自目录下的Class文件夹中.

><mark>在压制打包前除了检查图片内容的正确性以外，必须确保"train"、"vaild"两个文件夹中同一Class序号目录里的素材图片总和大于35.数量总和小于35时的Class序号目录请自行删除或是备份处理.</mark>完成了检查工作，接下来要做就是素材文件的压制.将"train"、"vaild"两个文件夹通过压制工具压制为"zip"格式的压缩包.

## 数据上传云端

>[点击此处访问数据上传页面](http://v-training.m5stack.com/)，按照信息提示填写个人邮箱，点击上传文件（上传文件大小控制在200MB以内，且必须为zip格式.）

<img src="assets\img\related_documents\v-training\6.jpg" width="60%">

>上传成功后，文件将会进入请求队列，页面的左下方的表格将会显示出当前的队列情况.

<img src="assets\img\related_documents\v-training\7.jpg" width="60%">


## 下载识别模型

>等待训练完成，程序文件下载地址将会以邮件的形式发送到上传文件时预留的邮箱中去.复制邮件中的下载地址，下载程序文件到本地进行解压，并复制到SD卡中去.

<img src="assets\img\related_documents\v-training\8.jpg" width="60%">

<img src="assets\img\related_documents\v-training\9.jpg" width="60%">

## 程序修改

>训练完成后的返回的boot程序仅提供物体识别功能，但并为指定识别或未识别状态的输出内容，因此用户可以根据自己的需求，基于现有程序进行修改。实现识别数据的输出，或是识别成功后相应的执行功能。例如将识别信息通过串口打印出来。

**以下为添加了串口打印程序的boot程序，仅作部分内容注释，并非完整程序，实际使用请基于训练返回的boot程序文件修改**

```
    ...
    
    task = kpu.load("/sd/c33723fb62faf1be_mbnet10_quant.kmodel")//载入模型文件

    labels=["1","2","3","4","5","6"] #该列表对应训练素材时的Class顺序，分别对应每一个识别物，你也可以将列表内的元素，修改成其他字符串字段.


    while(True):
        img = sensor.snapshot()
        fmap = kpu.forward(task, img)
        plist=fmap[:]
        pmax=max(plist)
        max_index=plist.index(pmax)
        a = lcd.display(img)
        if pmax > 0.95://判断对象的识别率是否大于95%
            lcd.draw_string(40, 60, "Accu:%.2f Type:%s"%(pmax, labels[max_index].strip()))
            print(labels[max_index])//将所识别的对象名称通过串口打印出来。
    
    ....
```

>UnitV在供电后，会默认运行SD中的boot程序，自动进行识别。添加了串口打印程序后，你可以使用串口调试工具，进行识别信息查看。


<img src="assets\img\getting_started_pics\unitv\unitv_qs4.jpg" width="60%">

## 程序库   

在程序库文档中，你可以找到更多的API，方便你搭建各式各样的应用。

<a href="https://maixpy.sipeed.com/zh/libs/standard/"><button type="button" class="btn btn-primary">查看更多程序案例</button></a>

<a href="https://github.com/sipeed/MaixPy/tree/master/projects/maixpy_m5stickv"><button type="button" class="btn btn-primary">Github</button></a>



<style>

.link a{

    padding-left: 13%;

}

</style>