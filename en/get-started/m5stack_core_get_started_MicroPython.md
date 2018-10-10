# M5Stack Core Get Started(Blockly/MicroPython)

**This article will guide you for getting started with Blockly(or MicroPython) through [UIFlow](flow.m5stack.com). (If your M5Stack Core was not burnt with a firmware named `M5Flow` in advance, please visit this article `How to burn firmware` for burnning)**

**First we need to know how to upload code onto the M5. After powering on Core and pressing the red button on the left hand side of the M5，you will be greeted by this screen.**

![image](../../_static/getting_started_pics/m5stack_core/get_started_with_uiflow/core_home_page.png)

**After pressing the upload button you will arrive at a screen with a QR code which you scan with your phone or tablet to start programming on your mobile device. If you want to program the M5 from your computer, enter the url shown at the top of the screen `flow.m5stack.com`**

![image](../../_static/getting_started_pics/m5stack_core/get_started_with_uiflow/apikey.jpg)

*After a few seconds if nothing is pressed the M5 will automatically run the code that was previously uploaded. If we want to upload new code we have to make sure we press the A button which is the upload button on this menu before the M5 boots the code in it’s memory.*

***Note:***
***But if it's first time to use M5Stack Core or you want to change the networkable AP that means the Core can't access `flow.m5stack.com`, you need visit this article for setting wifi `How to connect wifi using Core`.***


### Program with Core

Visit the [WebIDE](flow.m5stack.com), it will show as following figure.

![image](../../_static/getting_started_pics/m5stack_core/get_started_with_uiflow/webide.png)

Whenever we want to upload code to the M5 from UI flow we need to make sure the device is paired.

So press the little gear in the top right corner of the screen and enter the `APIKEY` which shows on the screen of M5(Now, my APIKEY is `9C6469`) and click `SAVE`.

![image](../../_static/getting_started_pics/m5stack_core/get_started_with_uiflow/click_for_apikey.png)

![image](../../_static/getting_started_pics/m5stack_core/get_started_with_uiflow/input_apikey.png)

Then M5Flow will connect with this Core.

At the moment, you can draw a UI or program it through Blockly(or Python) as shown below.

***Note:***
Once you've run a program,

**1. Draw a UI**

Drag 4 kinds of elements into `M5Stack Core` UI and click `Run` buttom on M5UI.Flow

![image](../../_static/getting_started_pics/m5stack_core/get_started_with_uiflow/draw_ui.png)

![image](../../_static/getting_started_pics/m5stack_core/get_started_with_uiflow/run_and_upload.png)

**2. Program with Blockly**

Drag a block named `Set emoji map in0` from `Emoji` class and click `Run` buttom on M5UI.Flow

![image](../../_static/getting_started_pics/m5stack_core/get_started_with_uiflow/draw_heart.png)

![image](../../_static/getting_started_pics/m5stack_core/get_started_with_uiflow/run_and_upload.png)

**3. Program with MicroPython**



### Play a song now

Now, let's make a music player and play a song in a few minutes using M5Stack Core.

Drag a loop, music and timer block into the coding area from the components section.

![image](../../_static/getting_started_pics/m5stack_core/get_started_with_uiflow/drag_loop_block.png)

![image](../../_static/getting_started_pics/m5stack_core/get_started_with_uiflow/drag_music_block.png)

![image](../../_static/getting_started_pics/m5stack_core/get_started_with_uiflow/drag_timer_block.png)

Then set parameters of `music block` and `timer block` as shown belown.

![image](../../_static/getting_started_pics/m5stack_core/get_started_with_uiflow/whole_program.png)

Now, run it and enjoy your musical work!

##### Also, here some simple pratices and a workshop for you being familiar with M5.
* Blockly
https://m5stack.readthedocs.io/en/latest/get-started/practices_blockly.html
* MicroPython
https://m5stack.readthedocs.io/en/latest/get-started/practices_micropython.html
* WorkShop
