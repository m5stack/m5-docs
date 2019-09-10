# FAQ {docsify-ignore-all}

**[M5CORE](#M5CORE-Question)**&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;**[UNIT](#UNIT-Question)**


## M5CORE Question

- **Q1: What's the difference between those Cores?**

<div class="container">
  <button type="button" class="btn btn-primary" data-toggle="collapse" data-target="#Q1">answer</button>
  <div id="Q1" class="collapse">
    The main difference between these Cores is the internal hardware configuration and kit matching. From the basic version to the upgraded version, the attitude sensor MPU9250 is added and the RAM and FLASH are increased. For details, please visit <a href="https://github.com/m5stack/M5-Schematic/blob/master/Core/hardware_difference_between_cores_en.md">here</a>

<img src="https://m5stack.oss-cn-shenzhen.aliyuncs.com/image/m5-docs_table/core_comparison/core_main_comparison_04_en.png">

<img src="https://m5stack.oss-cn-shenzhen.aliyuncs.com/image/m5-docs_table/core_comparison/core_main_comparison_05_en.png">
  </div>
</div>


- **Q2: How to turn off the speaker function of M5Core？**

<div class="container">
  <button type="button" class="btn btn-primary" data-toggle="collapse" data-target="#Q2">answer</button>
  <div id="Q2" class="collapse">
    Add the following statement to function Setup( ){ }

    ```arduino
    dacWrite(M5STACKFIRE_SPEAKER_PIN, 0);
    ```
  </div>
</div>


- **Q3: Some modules cannot be downloaded after stacking with M5Core, such as USB module and M5Core stacking.**

<div class="container">
  <button type="button" class="btn btn-primary" data-toggle="collapse" data-target="#Q3">answer</button>
  <div id="Q3" class="collapse">
    Probably after the stack, the pins GPIO0 and M5Core on the M5-Bus bus are not very well connected.

    In this case, when downloading the program, GPIO0 should always remain low, but because the contact is not good, GPIO0 can not remain low all the time, so the download fails.

    Solution: Manually let GPIO0 connect to GND during the download process to ensure that it is pulled low enough。
  </div>
</div>


- **Q4: After the [M5GO bottom](en/base/m5go_bottom) is stacked with the M5Core, the M5Core cannot be turned on, but the base battery in this M5GO bottom is fully charged.**

<div class="container">
  <button type="button" class="btn btn-primary" data-toggle="collapse" data-target="#Q4">answer</button>
  <div id="Q4" class="collapse">
    It may be that after the stacking, the BATTERY of the lower left corner of the M5-Bus bus on the base is not well connected to the M5Core. This is
     caused by the deviation of the welding position during production. After **the bus pin welding position is slightly biased**, it is easy to see that the BATTERY pin is not in good contact with the M5Core.

    Solution: Re-soldering the M5-Bus bus header, the pin header must be strictly aligned with the pad position.
  </div>
</div>


- **Q5: Some computers are connected to the main control, but still can't use Arduino IDE、 ESPFlashDownloadTool or M5Burner to burn the program. For example, the following figure using Arduino IDE.**

<div class="container">
  <button type="button" class="btn btn-primary" data-toggle="collapse" data-target="#Q5">answer</button>
  <div id="Q5" class="collapse">
    <img src="assets/img/faq/faq_03.png">


   Solution: you need to connect the capacitor between RST pin and GND pin in your Core (Capacitance value is more than 0.1 uF) or connect GPIO 0 with GND when downloading your firmware so that GPIO 0 keeps low level for an enough time as the third following picture shows.

<img src="assets/img/faq/faq_05.png" width="80%" height="80%">

<img src="assets/img/faq/faq_06.png" width="80%" height="80%">

<img src="assets/img/faq/faq_07.png" width="100%" height="100%">
  </div>
</div>


- **Q6: What special GPIO pins do you need to pay attention to in ESP32?**

<div class="container">
  <button type="button" class="btn btn-primary" data-toggle="collapse" data-target="#Q6">answer</button>
  <div id="Q6" class="collapse">
    The ESP32 has 34 GPIO pins, of which GPIO 34-39 is only used as an input and cannot be used as an output. Others can be used as both an input and an output pin.
  </div>
</div>


- **Q7: Why does the Stick with MPU9250 burn the factory firmware and press button A, the result shows "No", which means "No 9250"?**

<div class="container">
  <button type="button" class="btn btn-primary" data-toggle="collapse" data-target="#Q7">answer</button>
  <div id="Q7" class="collapse">
    Restart this Stick and then it can display correctly. Because the code to read the MPU9250 is placed in the setup() function which only was executed once when booting. So reboot and let the Stick detect MPU9250 again.
  </div>
</div>


- **Q8: After getting the FACES Kit or downloading the factory program of the FACES Kit, the following error is displayed on the screen. What happened?**

<div class="container">
  <button type="button" class="btn btn-primary" data-toggle="collapse" data-target="#Q8">answer</button>
  <div id="Q8" class="collapse">
    <img src="assets/img/faq/faq_08_01.png" width="100%" height="100%">

  </div>
</div>

- **Q9: I can't power on my M5stickC**

<div class="container">
  <button type="button" class="btn btn-primary" data-toggle="collapse" data-target="#Q9">answer</button>
  <div id="Q9" class="collapse">
    <img src="assets/img/faq/m5stickc_05.jpg" width="50%" height="50%">


  One issue commonly exists on M5Stick-C, which happens when the battery is at a low level. In this case, some of the devices will have problem powering on, this is probably caused by a chaos timing sequence of power-on of ESP32, some component is involved, such as AXP192, 552, ESP32

  There is one way to bring the device back to live: 1, Connect G0 to 3V3.  2. Plug in the USB cable. 3, The screen will light up and leave the USB to charge the device.  

  </div>
</div>


- **Q10: M5stickC does not recognize the port (COM)**

<div class="container">
  <button type="button" class="btn btn-primary" data-toggle="collapse" data-target="#Q10">answer</button>
  <div id="Q10" class="collapse">
  M5StickC only supports WIN10 & Linux & MAC free drive, the rest of the operating system requires users to install the driver.

  Installation steps: 1. Click the link below to download the driver installation package. 2. Connect the device and open the Computer Device Manager port option. 3. Right click on the unrecognized device and perform a manual update.

  <a href="https://www.ftdichip.com/Drivers/VCP.htm">Driver download Link</a>
  </div>
</div>

- **Q11: M5StickC Burning UIFlow Complete but screen has no display**

<div class="container">
  <button type="button" class="btn btn-primary" data-toggle="collapse" data-target="#U-Q11">answer</button>
  <div id="U-Q11" class="collapse">
    M5StickC does not automatically reset after the firmware is refreshed by default. You need to manually press the left power button. 

  </div>
</div>

- **Q12: UIFlow display has been uploaded or downloaded successfully, the program changed**

<div class="container">
  <button type="button" class="btn btn-primary" data-toggle="collapse" data-target="#U-Q12">answer</button>
  <div id="U-Q12" class="collapse">
     The connection between the network and the server may be unstable. It is recommended to restart the M5Stack, refresh the hardware connection status and do it again.

  </div>
</div>

- **Q13: What is the difference between M5StickC and M5StickC+**

<div class="container">
  <button type="button" class="btn btn-primary" data-toggle="collapse" data-target="#U-Q13">answer</button>
  <div id="U-Q13" class="collapse">
     M5StickC and M5StickC+ are identical in hardware configuration, but M5StickC+ adds several HATs, which is more cost-effective than purchasing separately.
  </div>
</div>

- **Q14: M5StickV can not mount TF card**

<div class="container">
  <button type="button" class="btn btn-primary" data-toggle="collapse" data-target="#U-Q14">answer</button>
  <div id="U-Q14" class="collapse">
    First, make sure that the format of the TF card is FAT32 and no partition. Some large-capacity SD cards are usually formatted as NTFS, you need to confirm. The following tests are performed on the compatibility of the TF card.

  <a href="https://docs.m5stack.com/#/zh_CN/core/m5stickv">TF card list</a>

  </div>
</div>

- **Q15: Send a zip to V-Training but the received e-mail does not contain a model file**

<div class="container">
  <button type="button" class="btn btn-primary" data-toggle="collapse" data-target="#U-Q15">answer</button>
  <div id="U-Q15" class="collapse">
    Carefully check the contents of the email. The training error will be indicated in the email. Only the specified two folders are allowed in the zip. The minimum number of photos and the classification are given. If there is a hidden file, the training will fail.

  <a href="https://docs.m5stack.com/#/en/related_documents/v-training">V-Training tutorial</a>

  </div>
</div>

- **Q16: The serial port is used in the Arduino program, but when  running, it is found that the screen is not lit or constantly restarted**

<div class="container">
  <button type="button" class="btn btn-primary" data-toggle="collapse" data-target="#U-Q16">answer</button>
  <div id="U-Q16" class="collapse">
     M5.begin()At the time of initialization, the serial port  baud rate is 115200 by default. Repeated definition will cause the program to be abnormal. If there is external serial port hardware, connect the hardware and then run.

  </div>
</div>

- **Q17: MD5 file error occurred while burning program**

<div class="container">
  <button type="button" class="btn btn-primary" data-toggle="collapse" data-target="#U-Q17">answer</button>
  <div id="U-Q17" class="collapse">
     First check your program carefully, confirm that there is no problem, then use M5Burner to erase, check whether it can be successfully cleared, and then burn FactoryTest.ino use arduino to check whether it can be burned. If it can be successfully operated, there is no problem. if MD5 file error occurs repeatedly, the probability that FLASH has been damaged.

  </div>
</div>

- **Q18: How to improve the battery of M5Stack and M5StickC**

<div class="container">
  <button type="button" class="btn btn-primary" data-toggle="collapse" data-target="#U-Q18">answer</button>
  <div id="U-Q18" class="collapse">
    First, optimize the program to reduce the number of unnecessary detections; secondly, by calling the sleep function, it is reasonable to sleep and wake up; in addition, the official battery base can be added.

  </div>
</div>

- **Q19: Is M5Stack Can connect 5G frequency band Wi-Fi**

<div class="container">
  <button type="button" class="btn btn-primary" data-toggle="collapse" data-target="#U-Q19">answer</button>
  <div id="U-Q19" class="collapse">
    ESP32 chip does not support WiFi in 5G band, only 2.4G can be connected.

  </div>
</div>

- **Q20: What is the difference between UIFlow's Micropython and the official Micropython**

<div class="container">
  <button type="button" class="btn btn-primary" data-toggle="collapse" data-target="#U-Q20">answer</button>
  <div id="U-Q20" class="collapse">
    UIFlow is based on the secondary package of the official Micropython, integrates a large number of M5 libraries, UIFlow is easier to understand and easy to use, and most of them are compatible with the official Micropython API.

  </div>
</div>

- **Q21: Some examples of Arduino are inconsistent with GitHub**

<div class="container">
  <button type="button" class="btn btn-primary" data-toggle="collapse" data-target="#U-Q21">answer</button>
  <div id="U-Q21" class="collapse">
    The examples in Arduino are used for the factory basic function test, the upgrade is slower, GitHub upgrade is faster, the code is more perfect, it is recommended to download directly from GitHub.

  </div>
</div>

- **Q22: Wether  BASIC can  use UIFlow and M5GO accessorie**

<div class="container">
  <button type="button" class="btn btn-primary" data-toggle="collapse" data-target="#U-Q22">answer</button>
  <div id="U-Q22" class="collapse">
    UIFlow is available, but some features are not available in the hardware part of UIFlow. M5GO accessories are compatible.

  </div>
</div>

- **Q23: Does it can display Chinese**

<div class="container">
  <button type="button" class="btn btn-primary" data-toggle="collapse" data-target="#U-Q23">answer</button>
  <div id="U-Q23" class="collapse">
    Support GB2312 code in Arduino , refer to hzk16 example . Micropython environment not supported yet, due to  limited by execution speed and UTF-8 file size.

  </div>
</div>

- **Q24: M5Stack BASIC has been in normal use and suddenly cannot be turned on even if USB is connected**

<div class="container">
  <button type="button" class="btn btn-primary" data-toggle="collapse" data-target="#U-Q24">answer</button>
  <div id="U-Q24" class="collapse">
    Remove the BASIC base and try again. It is most likely caused by poor contact between the base and the M-BUS.

  </div>
</div>

- **Q25: About M5StickV  tutorials**

<div class="container">
  <button type="button" class="btn btn-primary" data-toggle="collapse" data-target="#U-Q25">answer</button>
  <div id="U-Q25" class="collapse">
    M5StickV uses K210 chip compatible with Maixpy development environment, you can refer to Maixpy's official documentation.

  </div>
</div>

- **Q26: Some APIs are not found in the docs**

<div class="container">
  <button type="button" class="btn btn-primary" data-toggle="collapse" data-target="#U-Q26">answer</button>
  <div id="U-Q26" class="collapse">
    The reference API provided is the functions of the M5 hardware package. The application libraries such as WIFI, HTTP, etc.There are not included in the scope of provision. For reference, other ESP32 and Arduino libraries are used.

  </div>
</div>


- **Q27:  The button is used in the Arduino program, but it will not work after pressing it once**

<div class="container">
  <button type="button" class="btn btn-primary" data-toggle="collapse" data-target="#U-Q27">answer</button>
  <div id="U-Q27" class="collapse">
    Using buttons and speakers requires adding M5.update() after execution to respond.

  </div>
</div>

- **Q28: I want to use the official sensor accessories, but also want to connect my own sensor, how to stack**

<div class="container">
  <button type="button" class="btn btn-primary" data-toggle="collapse" data-target="#U-Q28">answer</button>
  <div id="U-Q28" class="collapse">
    It is recommended to use the base of PLUS module + CORE.

  </div>
</div>

- **Q29: After M5Camera writing the program, it was found that the screen was reversed**

<div class="container">
  <button type="button" class="btn btn-primary" data-toggle="collapse" data-target="#U-Q29">answer</button>
  <div id="U-Q29" class="collapse">
    Try this code.
    sensor_t *s = esp_camera_sensor_get();
    s->set_vflip(s, 1);
	  s->set_hmirror(s, 1);

  </div>
</div>

- **Q30: How to mount multiple sensors with the same I2C address**

<div class="container">
  <button type="button" class="btn btn-primary" data-toggle="collapse" data-target="#U-Q30">answer</button>
  <div id="U-Q30" class="collapse">
    Use Pa.HUB can connect 6 I2C devices.

  </div>
</div>



## UNIT Question

- **Q1: What is the difference between the various cameras of M5Stack?**

<div class="container">
  <button type="button" class="btn btn-primary" data-toggle="collapse" data-target="#U-Q1">answer</button>
  <div id="U-Q1" class="collapse">
    The main difference between these cameras is that some pins (OV2640-SIOD, OV2640-VSYNC, GROVE interface), lens type, and whether or not there is PSRAM. For specific differences, please visit<a href="https://shimo.im/sheets/gP96C8YTdyjGgKQC/e2041">here</a>

<img src="https://m5stack.oss-cn-shenzhen.aliyuncs.com/image/m5-docs_table/camera_comparison/camera_comparison_zh_CN.png">
  </div>
</div>


- **Q2: The camera transmits images to the mobile phone via WIFI, how far can it be transmitted?**

<div class="container">
  <button type="button" class="btn btn-primary" data-toggle="collapse" data-target="#U-Q2">answer</button>
  <div id="U-Q2" class="collapse">
    After testing, using M5Camera indoors can transmit about 20 meters.
  </div>
</div>


- **Q3: BettleC connected to the phone remote will sometimes fail to respond**

<div class="container">
  <button type="button" class="btn btn-primary" data-toggle="collapse" data-target="#U-Q3">answer</button>
  <div id="U-Q3" class="collapse">
    Most of them are caused by low battery power. If the battery is low, the signal quality will be seriously attenuated.
  </div>
</div>
