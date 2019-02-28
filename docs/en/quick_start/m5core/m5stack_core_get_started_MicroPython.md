# UIFlow Quick Start(Blockly/MicroPython) {docsify-ignore-all}

:clapper: **[Video Tutorial](#Video-Tutorial)**&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;:memo: **[Text Tutorial](#Text-Tutorial)**

?> a. If your M5Stack Core was not burnt with a specific firmware named `UIFlow` in advance, please visit this article [How to burn firmware](/en/related_documents/how_to_burn_firmware) for burnning). b. If it's first time to use M5Stack Core or you want to change the networkable AP that means the Core can't access [flow.m5stack.com](http://flow.m5stack.com), you need visit this article for setting wifi [How to connect wifi using Core](/en/related_documents/how_to_connect_wifi_using_core).

By default, we account your M5Core has been connected with the networkable AP. And the screen shows like this figure below after you pressed the `UPLOAD` button on the left. After a few seconds if nothing is pressed the M5 will automatically run the code that was previously uploaded. If we want to upload new code we have to make sure we press the `upload` button on this menu before the M5 boots the code in it’s memory.

<figure>
    <img src="assets/img/getting_started_pics/m5stack_core/get_started_with_uiflow/apikey.jpg">
</figure>



## Text Tutorial

1. [Connect to UIFlow](#connect-to-uiflow)

2. [Program with Core](#program-with-core)

3. [Play a song now](#play-a-song-now)


## 1. Connect to UIFlow

1. Now you scan the QR code with your phone or tablet to start programming on your mobile device. If you want to program the M5 from your computer, enter the url shown at the top of the screen `flow.m5stack.com`. It will show as following figure.

<figure>
    <img src="assets/img/getting_started_pics/m5stack_core/get_started_with_uiflow/webide.png">
</figure>

2. Whenever we want to upload code to the M5 from UI flow we need to make sure the device is paired. So press the little gear in the top right corner of the screen and enter the `APIKEY` which shows on the screen of M5(Now, my APIKEY is `9C6469`) and click `SAVE`.

<figure>
    <img src="assets/img/getting_started_pics/m5stack_core/get_started_with_uiflow/enter_apikey.gif">
</figure>

Then UIFlow will connect with this Core.

At the moment, you can draw a UI or program it through Blockly(or Python) as shown below.

## 2. Program with Core

### a. Draw a UI

Drag 4 kinds of elements into `M5Stack Core` UI and click `Run` buttom on M5UI.Flow

<figure>
    <img src="assets/img/getting_started_pics/m5stack_core/get_started_with_uiflow/draw_ui.gif">
</figure>


### b. Program with Blockly

Drag a block named `Set emoji map in0` from `Emoji` class and click `Run` buttom on M5UI.Flow

<figure>
    <img src="assets/img/getting_started_pics/m5stack_core/get_started_with_uiflow/draw_heart.gif">
</figure>

*The source code of this demostration: https://github.com/m5stack/M5-ProductExampleCodes/blob/master/Core/M5_draw_heart.m5f*

### c. Program with MicroPython

Copy the following codes, and paste them to `Python coding area`, and click `Run` button.

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

At that moment, the screen of M5Core will display `Hello M5Stack`.

## 3. Play a song now

Now, let's make a music player and play a song in a few minutes using M5Stack Core.

Drag a `loop`, `music` and `timer` block into the coding area from the components section.

Then set parameters of `music block` and `timer block` as shown belown.

<figure>
    <img src="assets/img/getting_started_pics/m5stack_core/get_started_with_uiflow/play_a_song.gif">
</figure>

Now, run it and enjoy your musical work!

*The source code of this demostration: https://github.com/m5stack/M5-ProductExampleCodes/blob/master/Core/M5_play_a_song.m5f*

## Complete

?> *Absolutely, For being more familiar with M5, you can read [the tutorial documentation of UIFlow](https://m5stack.github.io/UIFlow_doc/cn/index.html).*

## Video Tutorial

**UIFlow Overview**

<iframe width="560" height="315" src="https://www.youtube.com/embed/rJwcCx1FnVY" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

**UIFlow Tutorial**

<iframe width="560" height="315" src="https://www.youtube.com/embed/rdz6hBoqamA" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

**Getting started with UIFlow (Mac & Linux) (This video is a little outdated now)**

<iframe width="560" height="315" src="https://www.youtube.com/embed/oEiFLsukAEE" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>