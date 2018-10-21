# M5Flow Quick Start(Blockly/MicroPython)

!> **Note** *If it's first time to use M5Stack Core or you want to change the networkable AP that means the Core can't access [flow.m5stack.com](flow.m5stack.com), you need visit this article for setting wifi [How to connect wifi using Core](../related_documents/how_to_connect_wifi_using_core).*

### **By default, we account your M5Core has been connected with the networkable AP. And the screen shows like this figure below after you pressed the `UPLOAD` button on the left.**

<figure>
    <img src="assets/img/getting_started_pics/m5stack_core/get_started_with_uiflow/apikey.jpg">
</figure>

?> **Note** *After a few seconds if nothing is pressed the M5 will automatically run the code that was previously uploaded. If we want to upload new code we have to make sure we press the `upload` button on this menu before the M5 boots the code in it’s memory.*

## CONTENT 

1. [Connect to M5Flow](#connect-to-m5flow)

2. [Program with Core](#program-with-core)

3. [Play a song now](#play-a-song-now)


## 1. Connect to M5Flow

1. Now you scan the QR code with your phone or tablet to start programming on your mobile device. If you want to program the M5 from your computer, enter the url shown at the top of the screen `flow.m5stack.com`

It will show as following figure.

<figure>
    <img src="assets/img/getting_started_pics/m5stack_core/get_started_with_uiflow/webide.png">
</figure>

2. Whenever we want to upload code to the M5 from UI flow we need to make sure the device is paired.

So press the little gear in the top right corner of the screen and enter the `APIKEY` which shows on the screen of M5(Now, my APIKEY is `9C6469`) and click `SAVE`.

<figure>
    <img src="assets/img/getting_started_pics/m5stack_core/get_started_with_uiflow/click_for_apikey.png">
</figure>

<figure>
    <img src="assets/img/getting_started_pics/m5stack_core/get_started_with_uiflow/input_apikey.png">
</figure>

Then M5Flow will connect with this Core.

At the moment, you can draw a UI or program it through Blockly(or Python) as shown below.

## 2. Program with Core

### a. Draw a UI

Drag 4 kinds of elements into `M5Stack Core` UI and click `Run` buttom on M5UI.Flow

<figure>
    <img src="assets/img/getting_started_pics/m5stack_core/get_started_with_uiflow/draw_ui.png">
</figure>

<figure>
    <img src="assets/img/getting_started_pics/m5stack_core/get_started_with_uiflow/run_and_upload.png">
</figure>

### b. Program with Blockly

Drag a block named `Set emoji map in0` from `Emoji` class and click `Run` buttom on M5UI.Flow

<figure>
    <img src="assets/img/getting_started_pics/m5stack_core/get_started_with_uiflow/draw_heart.png">
</figure>

<figure>
    <img src="assets/img/getting_started_pics/m5stack_core/get_started_with_uiflow/run_and_upload.png">
</figure>

### c. Program with MicroPython



## 3. Play a song now

Now, let's make a music player and play a song in a few minutes using M5Stack Core.

Drag a `loop`, `music` and `timer` block into the coding area from the components section.

<figure>
    <img src="assets/img/getting_started_pics/m5stack_core/get_started_with_uiflow/drag_loop_block.png">
</figure>

<figure>
    <img src="assets/img/getting_started_pics/m5stack_core/get_started_with_uiflow/drag_music_block.png">
</figure>

<figure>
    <img src="assets/img/getting_started_pics/m5stack_core/get_started_with_uiflow/drag_timer_block.png">
</figure>

Then set parameters of `music block` and `timer block` as shown belown.

<figure>
    <img src="assets/img/getting_started_pics/m5stack_core/get_started_with_uiflow/whole_program.png">
</figure>

Now, run it and enjoy your musical work!

## Complete

?> **Note** *Also, For being more familiar with M5, here some simple pratices ([M5Flow Practices about Blockly](../practice/practice_blockly) and [M5Flow Practices about Blockly](../practice/practice_micropython)) for you or you can contact us for a [WorkShop](support@m5stack.com).*
