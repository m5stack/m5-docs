# How to Connect WIFI (For M5Cloud)

[中文](/zh_CN/related_documents/how_to_connect_wifi_using_core_with_m5cloud) | English | [日本語](ja/related_documents/how_to_connect_wifi_using_core_with_m5cloud)

?> **Tip** *If your M5Stack Core was not burnt with a specific firmware named `M5Cloud` in advance, please visit this article [How to burn firmware](en/related_documents/how_to_burn_firmware) for burnning)*

**After powering on Core，you will be greeted by this screen. Let's connect to networkable AP.**

<figure>
    <img src="assets/img/related_documents/how_to_connect_wifi_with_m5cloud/m5stack_connet_wifi.png">
</figure>

## CONTENT

1. [Connect to M5Core AP](#connect-to-m5Core-AP)

2. [Select Networkable AP](#select-networkable-ap)

3. [Reset Your Device](#reset-your-device)

## 1. Connect to M5Core AP

**Use Mobile Phone or PC for connectting to M5Core AP(like `M5Stack-a67c`)**

## 2. Select Networkable AP

**Then open brower to login 192.168.4.1 for setting your networkable WIFI name and password. (Now, my networkable wifi is named `MasterHax_5G`)**

<figure>
    <img src="assets/img/related_documents/how_to_connect_wifi_with_m5cloud/wifisetup.png">
</figure>

<figure>
    <img src="assets/img/related_documents/how_to_connect_wifi_with_m5cloud/wifi_connect_successfully.png">
</figure>

?> **Note** If you connect wifi unsuccessfully, repeat it again please.

## 3. Reset Your Device

**After connected wifi successfully, reset your core according to the prompt on `192.168.4.1`**

<figure>
    <img src="assets/img/related_documents/how_to_connect_wifi_with_m5cloud/check_code_on_m5stack.png">
</figure>

?> **Note** If your device has been bound to M5Cloud's account before(means you have entered the check code on [M5Cloud](http://cloud.m5stack.com)), the screen will display as below
<figure>
    <img src="assets/img/related_documents/how_to_connect_wifi_with_m5cloud/connected_wifi_m5cloud_been_bound.png">
</figure>

## Complete

Now, you can try to program with your core following this article [Quick Start with M5Cloud](en/quick_start/m5core/m5stack_core_get_started_MicroPython_m5cloud)
