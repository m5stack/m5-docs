# UiFlow 上手指南(Blockly/MicroPython)

中文 | [English](en/quick_start/m5core/m5stack_core_get_started_MicroPython) | [日本語](ja/quick_start/m5core/m5stack_core_get_started_MicroPython)

?> a. 如果你的设备还没烧录UiFlow固件的话，请参考这篇文档[如果使用M5Burner烧录固件](/zh_CN/related_documents/how_to_burn_firmware). b. 如果你是第一次使用这个Core或者想Core连接其他可联网的热点AP的话，请参考这篇文档[如果使用Core连接WIFI和UiFlow](/zh_CN/related_documents/how_to_connect_wifi_using_core)。

这时候，你的M5Core已经连接到了可联网WIFI热点，如果按下Core上左边的按键`UPLOAD`的话，会如下图显示。如果M5Core开机之后，两三秒内没做操作的话，会自动地显示预置的程序界面。所以最好开机之后，立马按下`upload`按键。

<figure>
    <img src="assets/img/getting_started_pics/m5stack_core/get_started_with_uiflow/apikey.jpg">
</figure>


## 目录

1. [连接到UiFlow](#connect-to-uiflow)

2. [编程Core](#program-with-core)

3. [音乐例程](#play-a-song-now)


## 1. 连接到UiFlow

1. 现在用手机或者平板扫描M5Core上的二维码，或者你使用PC编程的话，在PC的浏览器上输入网址`flow.m5stack.com`。

<figure>
    <img src="assets/img/getting_started_pics/m5stack_core/get_started_with_uiflow/webide.png">
</figure>

2. 因为每次上传代码到M5Core之前都要确保UiFlow正与手上的M5Core连接，而不是其他M5Core，所以需要点击UiFlow IDE页面右上角的齿轮，并在弹出的对话框内输入手上M5Core屏幕上显示的`APIKEY`，最后点击保存。

<figure>
    <img src="assets/img/getting_started_pics/m5stack_core/get_started_with_uiflow/enter_apikey.gif">
</figure>

然后UiFlow就会连接到M5Core，此时M5Core屏幕右上角的小圆点就会变成绿色，不然会是一直红色。

现在，可以继续下面的步骤，开始M5Core编程啦！

## 2. 编程Core

### a. 画一个UI

拖拽UiFlow IDE左上角的4种控件到`M5Stack Core`的UI界面，并点击页面右上角的`Run`按钮，执行效果。

<figure>
    <img src="assets/img/getting_started_pics/m5stack_core/get_started_with_uiflow/draw_ui.gif">
</figure>

### b. 编写Blockly程序

从左边的`Emoji`分类里拖拽`Set emoji map in0`程序块到到`Blockly`的编码区域上，然后点击`Run`按钮。

<figure>
    <img src="assets/img/getting_started_pics/m5stack_core/get_started_with_uiflow/draw_heart.gif">
</figure>

*The source code of this demostration: https://tower.im/projects/65b1c6743d194d22a801ed916832eb2b/uploads/fd59d8000b541c346d6c6d18291c29bb?version=1*


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

## 3. 编写音乐例程

下面，让我们在一两分钟内编写一个音乐例程。

拖拽`loop`, `music`和`timer`这几个程序块到`Blockly`编码区域。

然后设置`music block`和`timer block`的相关参数，如下图所示。

<figure>
    <img src="assets/img/getting_started_pics/m5stack_core/get_started_with_uiflow/play_a_song.gif">
</figure>

现在，点击`Run`就可以运行音乐程序啦!

*The source code of this demostration: https://tower.im/projects/65b1c6743d194d22a801ed916832eb2b/uploads/9062b4bc81b3dc9be74f92be510a81d0?version=1*

## 最后

?> *如果你想了解更多UiFlow方面的编程的话，可以给我们发邮件，报名我们的课程<support@m5stack.com>.*
