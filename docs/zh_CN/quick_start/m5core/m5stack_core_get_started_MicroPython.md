# UIFlow 上手指南(Blockly/MicroPython) {docsify-ignore-all}

:clapper: **[相关视频](#相关视频)**

?> a. 如果您的设备还没烧录UIFlow固件的话，请参考这篇文档[如果使用M5Burner烧录固件](/zh_CN/related_documents/how_to_burn_firmware). b. 如果您是第一次使用这个Core或者想Core连接其他可联网的热点AP的话，请参考这篇文档[如果使用Core连接WIFI和UIFlow](/zh_CN/related_documents/how_to_connect_wifi_using_core)。

这时候，您的M5Core已经连接到了可联网WIFI热点，如果按下Core上左边的按键`UPLOAD`的话，会如下图显示。如果M5Core开机之后，两三秒内没做操作的话，会自动地显示预置的程序界面。所以最好开机之后，立马按下`upload`按键。

<figure>
    <img src="assets/img/getting_started_pics/m5stack_core/get_started_with_uiflow/apikey.jpg">
</figure>


## 目录

1. [连接到UIFlow](#连接到UIFlow)

2. [编程Core](#编程Core)

3. [音乐例程](#音乐例程)


## 连接到UIFlow

1. 现在用手机或者平板扫描M5Core上的二维码，或者您使用PC编程的话，在PC的浏览器上输入网址`flow.m5stack.com`。

<figure>
    <img src="assets/img/getting_started_pics/m5stack_core/get_started_with_uiflow/webide.png">
</figure>

2. 因为每次上传代码到M5Core之前都要确保UIFlow正与手上的M5Core连接，而不是其他M5Core，所以需要点击UIFlow IDE页面右上角的齿轮，并在弹出的对话框内输入手上M5Core屏幕上显示的`APIKEY`，最后点击保存。

<figure>
    <img src="assets/img/getting_started_pics/m5stack_core/get_started_with_uiflow/enter_apikey.gif">
</figure>

然后UIFlow就会连接到M5Core，此时M5Core屏幕右上角的小圆点就会变成绿色，不然会是一直红色。

现在，可以继续下面的步骤，开始M5Core编程啦！

## 编程Core

### a. 画一个UI

拖拽UIFlow IDE左上角的4种控件到`M5Stack Core`的UI界面，并点击页面右上角的`Run`按钮，执行效果。

<figure>
    <img src="assets/img/getting_started_pics/m5stack_core/get_started_with_uiflow/draw_ui.gif">
</figure>

### b. 编写Blockly程序

从左边的`Emoji`分类里拖拽`Set emoji map in0`程序块到到`Blockly`的编码区域上，然后点击`Run`按钮。

<figure>
    <img src="assets/img/getting_started_pics/m5stack_core/get_started_with_uiflow/draw_heart.gif">
</figure>

*例程源码地址: https://github.com/m5stack/M5-ProductExampleCodes/blob/master/Core/M5_draw_heart.m5f*


### c. 编写MicroPython程序

复制以下代码到Python编辑区，然后点击右上角的`Run`执行代码
```Python
from m5stack import *
from m5ui import *
clear_bg(0x111111)


btnA = M5Button(name='ButtonA', text='ButtonA', visibility=False)
btnB = M5Button(name='ButtonB', text='ButtonB', visibility=False)
btnC = M5Button(name='ButtonC', text='ButtonC', visibility=False)


lcd.print("Hello M5Stack")
```

<figure>
    <img src="assets/img/getting_started_pics/m5stack_core/get_started_with_uiflow/program_with_micropython.png">
</figure>

这时候，M5Core屏幕上会打印出`Hello M5Stack`字样。

## 音乐例程

下面，让我们在一两分钟内编写一个音乐例程。

拖拽`loop`, `music`和`timer`这几个程序块到`Blockly`编码区域。

然后设置`music block`和`timer block`的相关参数，如下图所示。

<img src="assets/img/getting_started_pics/m5stack_core/get_started_with_uiflow/play_a_song.gif">

现在，点击`Run`就可以运行音乐程序啦!

*例程源码地址: https://github.com/m5stack/M5-ProductExampleCodes/blob/master/Core/M5_play_a_song.m5f*

## 相关视频

**UIFlow的简介**

<iframe height=498 width=510 src='https://player.youku.com/embed/XMzkzNTY1ODE4MA==' frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

**UIFlow的快速指南**

<iframe height=498 width=510 src='https://m5stack.oss-cn-shenzhen.aliyuncs.com/video/%E6%95%99%E7%A8%8B/UIFlow%20Tutorials/A3%20-%20UIflow%E7%AE%80%E4%BB%8B.mp4' frameborder="0" allow="accelerometer; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

<!-- <iframe height=498 width=510 src='https://player.youku.com/embed/XMzgzMjQzNjIzMg==' frameborder="0" allow="accelerometer; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe> -->

## 最后

?> *如果您想了解学习UIFlow方面的编程的话，阅读 [UIFlow 的教程文档](https://m5stack.github.io/UIFlow_doc/cn/index.html).*
