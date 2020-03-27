# Atom UIFlow Quick Start {docsify-ignore-all}

## UIFlow online mode

1. Download and Setup [M5Bunner](https://m5stack.com/pages/download) and flash UIFlow firmware referring to this instruction [UIFlow introduction](https://docs.m5stack.com/#/en/uiflow/introduction).

2. Once burning finished, the device will automatically connect to the WIFI you have set in M5Bunner. LED turns into a breathing green-light, and enter the UIFlow online programming mode, you can go to step 3.

<img src="assets/img/product_pics/core/minicore/atom/01light.jpg" width="60%" height="60%">

If WIFI connected but cant not connect to UIFlow server (steady blue-light),

<img src="assets/img/product_pics/core/minicore/atom/02light.jpg" width="60%" height="60%">

Or WIFI connection fails (steady red-light), please restart the device;

<img src="assets/img/product_pics/core/minicore/atom/04light.jpg" width="60%" height="60%">

If still fails, you can try to manually __enter WIFI Configuration mode__. Press and hold the middle button while powering on (or restarting), do not release it until the Yellow breathing light is displayed. At this time, yellow light is always on and the device has entered into WIFI configuration mode.

<img src="assets/img/product_pics/core/minicore/atom/configure_wifi.jpg" width="60%" height="60%">

In WIFI configuration mode, the device will work as WIFI hotspot, such as M5Stack-XXXX. Connect to this WIFI, open the browser and enter to 192.168.4.1 page. (Pls record the letters M5FLOW-**XXXXXXXX**, which will be needed in next step). Enter SSID and password to connect to the network. LEDs would change from breathing red-light to breathing green-light, it indicates that both WIFI and UIFlow server is connected well.


3. Refer to [this page](https://docs.m5stack.com/#/en/uiflow/introduction) to configure APIKey of UIFlow ,APIKey can be seen through web configuration page or serial port tool.

<img src="assets/img/product_pics/core/minicore/atom/apikey.png" width="50%" height="50%"><img src="assets/img/product_pics/core/minicore/atom/serialtool.png" width="50%" height="50%">

4. Now you can program in [UIFlow online mode](http://flow.m5stack.com).Refer to [this page](https://docs.m5stack.com/#/en/uiflow/uiflow_home_page) for the manual of UIFlow

<!-- ?> Meaning of light working status

- Breathing  red-light means the WIFI network is connecting

- Steady red-light means WIFI connection failed, short press the middle button to reconnect

- Breathing  green-light indicates that the UIFlow server is connected normally

- Steady blue-light means the UIFlow server is not connected properly

- Breathing  blue-light to indicate that USB mode has been entered

- Steady yellow-light indicates that WEB network configuration is required
-->


## UIFlow desktop mode

1. Download and Setup [M5Bunner](https://m5stack.com/pages/download) and flash UIFlow firmware referring to this instruction [UIFlow introduction](https://docs.m5stack.com/#/en/uiflow/introduction).


2. Press and hold the middle button while powering on (or when restarting), and do not release it unit LED color change to blue. Now the device enters UIFlow desktop mode.Refer to [this page](https://docs.m5stack.com/#/en/uiflow/introduction) to use UIFlow desktop IDE mode.


<img src="assets/img/product_pics/core/minicore/atom/03light.jpg" width="60%" height="60%">


## Menu option introduction

Press and hold the middle key to turn on the power will enter the menu. In this mode, LED will cyclically change the color. Different colors represents for different options.

<img src="assets/img/product_pics/core/minicore/atom/atom_00.jpg" width="50%">

- GREEN Light  **Enter UIFlow Online mode**
- BLUE Light  **Enter UIFlow desktop IDE Program**
- YELLOW Light  **Enter WIFI Configuration mode**
- PURPLE Light  **Run the Last Downloaded Program**

### UIFlow Example

- [Atom Matrix Example](https://github.com/m5stack/M5-ProductExampleCodes/tree/master/Core/Atom/Atom%20Matrix)

<img src="assets/img/product_pics/core/minicore/atom/atom_matrix_example.png" width="50%" height="50%">

- [Atom Lite Example](https://github.com/m5stack/M5-ProductExampleCodes/tree/master/Core/Atom/Atom%20Lite)

<img src="assets/img/product_pics/core/minicore/atom/atom_lite_example.png" width="50%" height="50%">

