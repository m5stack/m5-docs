# Atom UIFlow Quick Start {docsify-ignore-all}

## UIFlow Online Mode

1 . Download and Setup [M5Bunner](https://m5stack.com/pages/download) and flash UIFlow firmware referring to this instruction [UIFlow introduction](https://docs.m5stack.com/#/en/uiflow/introduction).


2 . Press and hold the middle button while powering on (or restarting), do not release it until the Yellow breathing light is displayed. At this time, yellow light is always on and the device has entered into WIFI configuration mode.

<img src="assets/img/product_pics/core/minicore/atom/configure_wifi.webp" width="60%" height="60%">

In WIFI configuration mode, the device will work as WIFI hotspot, such as M5Stack-XXXX. Connect to this WIFI, open the browser and enter to 192.168.4.1(WIFI setup page). (Pls record the letters M5FLOW-XXXXXXXX, which will be needed in next step). Enter SSID and password to connect to the network. LEDs would change from breathing red-light to breathing green-light, it indicates that both WIFI and UIFlow server is connected well.

<img src="assets/img/product_pics/core/minicore/atom/01light.webp" width="60%" height="60%">

If WIFI is connected but Atom can not access to UIFlow server (steady blue-light).

<img src="assets/img/product_pics/core/minicore/atom/02light.webp" width="60%" height="60%">

Or WIFI connection fails (steady red-light), please restart the device ;

<img src="assets/img/product_pics/core/minicore/atom/04light.webp" width="60%" height="60%">

<!--If still fails, you can try to manually enter WIFI Configuration mode. Press and hold the middle button while powering on (or restarting), do not release it until the Yellow breathing light is displayed. At this time, yellow light is always on and the device has entered into WIFI configuration mode.

<img src="assets/img/product_pics/core/minicore/atom/configure_wifi.webp" width="60%" height="60%">

In WIFI configuration mode, the device will work as WIFI hotspot, such as M5Stack-XXXX. Connect to this WIFI, open the browser and enter to 192.168.4.1(WIFI setup page). (Pls record the letters M5FLOW-XXXXXXXX, which will be needed in next step). Enter SSID and password to connect to the network. LEDs would change from breathing red-light to breathing green-light, it indicates that both WIFI and UIFlow server is connected well. -->

3 . Refer to [this page](https://docs.m5stack.com/#/en/uiflow/introduction) to configure APIKey of UIFlow , APIKey can be found on WIFI setup page or serial terminal such as [Putty](https://www.putty.org/)(Windows) or [Serial](https://apps.apple.com/cn/app/serial/id877615577?mt=12)(Mac).

<img src="assets/img/product_pics/core/minicore/atom/apikey.webp" width="50%" height="50%"><img src="assets/img/product_pics/core/minicore/atom/serialtool.webp" width="50%" height="50%">

4 . Now you can program in [UIFlow online mode](http://flow.m5stack.com).Refer to [this page](https://docs.m5stack.com/#/en/uiflow/uiflow_home_page) for the manual of UIFlow

<!-- ?> Meaning of light working status

- Breathing  red-light means the WIFI network is connecting

- Steady red-light means WIFI connection failed, short press the middle button to reconnect

- Breathing  green-light indicates that the UIFlow server is connected normally

- Steady blue-light means the UIFlow server is not connected properly

- Breathing  blue-light to indicate that USB mode has been entered

- Steady yellow-light indicates that WEB network configuration is required
-->


## UIFlow Desktop Mode

1 . Download and Setup [M5Bunner](https://m5stack.com/pages/download) and flash UIFlow firmware by referring to this instruction [UIFlow introduction](https://docs.m5stack.com/#/en/uiflow/introduction).


2 . Press and hold the middle button while powering on (or when restarting), and do not release it unit LED color change to blue. Now the device enters UIFlow desktop mode.Refer to [this page](https://docs.m5stack.com/#/en/uiflow/introduction) to use UIFlow desktop IDE mode.


<img src="assets/img/product_pics/core/minicore/atom/03light.webp" width="60%" height="60%">


## Menu option introduction

Press and hold the middle key to turn on the power will enter the menu. In this mode, LED will cyclically change the color. Different colors represent for different options.

<img src="assets/img/product_pics/core/minicore/atom/atom_00.webp" width="50%">

- GREEN Light   Enter UIFlow Online mode
- BLUE Light   Enter UIFlow desktop IDE Program
- YELLOW Light   Enter WIFI Configuration mode
- PURPLE Light   Run the Last Downloaded Program

### UIFlow Example

- [Atom Matrix Example](https://github.com/m5stack/M5-ProductExampleCodes/tree/master/Core/Atom/Atom%20Matrix)

<img src="assets/img/product_pics/core/minicore/atom/atom_matrix_example.webp" width="50%" height="50%">

- [Atom Lite Example](https://github.com/m5stack/M5-ProductExampleCodes/tree/master/Core/Atom/Atom%20Lite)

<img src="assets/img/product_pics/core/minicore/atom/atom_lite_example.webp" width="50%" height="50%">

<script>

   anchor_search();
   scrollFunc();

</script>