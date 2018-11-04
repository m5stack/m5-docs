# M5Core 快速上手(macOS, Arudino)

?> **提示** 如果你的操作系统是Windows，请点击[这里](zh_CN/quick_start/m5core/m5stack_core_get_started_Arduino_Windows)。

## 目录

1. [配置环境](#setting-environment)

    - [Step1. 安装 Arduino IDE](#step1-install-arduino-ide)

    - [Step2. 安装ESP32的支持包](#step2-esp32-board-support)

    - [Step3. 安装Arduino-M5Stack库](#step3-install-m5stack-lib)

2. [示例](#example)

!> **注意** *在配置环境之前，先确保你已经安装了USB驱动，并且M5Core能通过串口与PC通信。 如果还没的话，看这篇文章[如何建立串口连接](/en/related_documents/establish_serial_connection).*

## 配置环境

### Step1. 安装`Arduino IDE`

首先，如果Arduino IDE还没安装的话，先安装它。 这是下载地址 *download address* https://www.arduino.cc/en/Main/Software

<figure>
    <img src="assets/img/getting_started_pics/m5stack_core/get_started_with_arduino_m5core/mac/macOS_download_arduino_ide.png">
</figure>

### Step2. 安装ESP32的支持包

打开终端Terminal执行以下命令 (复制以下命令到Terminal，然后回车):

```

mkdir -p ~/Documents/Arduino/hardware/espressif && \
cd ~/Documents/Arduino/hardware/espressif && \
git clone https://github.com/espressif/arduino-esp32.git esp32 && \
cd esp32 && \
git submodule update --init --recursive && \
cd tools && \
python get.py

```

Where ~/Documents/Arduino represents your sketch book location as per "Arduino" > "Preferences" > "Sketchbook location" (in the IDE once started). Adjust the command above accordingly if necessary!

Where ~/Documents/Arduino represents your default sketch book location. If you encounter any problems it could be that your Arduino sketchbook folder is in a different location. This can be found by running arduino and navigating through the menu to "Arduino" > "Preferences" > "Sketchbook location". Adjust the command above accordingly if necessary!

?> **Tip** If you get the error below: `xcrun: error: invalid active developer path (/Library/Developer/CommandLineTools),`
`missing xcrun at: /Library/Developer/CommandLineTools/usr/bin/xcrun`, install the command line dev tools by typing `xcode-select --install` into the terminal and hit enter. once installed try the command above again and restart the Arduino IDE.

?> **Tip** If you get the error: `IOError: [Errno socket error] [SSL: TLSV1_ALERT_PROTOCOL_VERSION] tlsv1 alert protocol` `version (_ssl.c:590) when running python get.py`, try `python3` instead of `python` and restart the Arduino IDE.



### Step3. Install M5Stack Lib

Start up Arduino IDE, then Select `Sketch`->`Include Library`->`Manage Libraries...`

Type `M5Stack` into the search box, search it and install.

<figure>
    <img src="assets/img/getting_started_pics/m5stack_core/get_started_with_arduino_m5core/mac/macOS_install_m5stack_lib.png">
</figure>


<figure>
    <img src="assets/img/getting_started_pics/m5stack_core/get_started_with_arduino_m5core/mac/macOS_search_m5stack.png">
</figure>



## Example

The USB cable connects to M5Stack Core, then select your serial port which is connected M5Stack Core.
Select a demo example, compile and upload

### 1. Select your board and the serial port

Start up Arduino IDE, and click `Tools -> Boards -> M5Stack-Core-ESP32` to select your board

<figure>
    <img src="assets/img/getting_started_pics/m5stack_core/get_started_with_arduino_m5core/mac/macOS_select_board.png">
</figure>


Click `Tools -> Ports ->` to select the serial port which is connected with M5Stack Core

<figure>
    <img src="assets/img/getting_started_pics/m5stack_core/get_started_with_arduino_m5core/mac/macOS_select_serial_port.png">
</figure>


### 2. Select an example

Click `File-> Examples`. Here are some test programs in `M5Stack->`

Try to open a sketch called `HelloWorld` inside Basics.


<figure>
    <img src="assets/img/getting_started_pics/m5stack_core/get_started_with_arduino_m5core/mac/macOS_select_example.png">
</figure>



Compile it and upload, the M5Stack screen will show "Hello World!"

<figure>
    <img src="assets/img/getting_started_pics/m5stack_core/get_started_with_arduino_m5core/mac/display_hello_world.png">
</figure>



## Note

Although most versions of MacOS have no problem with detecting the COM port, on some newer versions of High Sierra sometimes Slab\_USBtoUART does not appear. If this is the case, after you connect the M5 open `security and privacy` in the system preferences and set it to `permit`.

<figure>
    <img src="assets/img/getting_started_pics/m5stack_core/get_started_with_arduino_m5core/mac/macOS_security_and_privacy.png">
</figure>


<figure>
    <img src="assets/img/getting_started_pics/m5stack_core/get_started_with_arduino_m5core/mac/macOS_security_and_privacy_01.png">
</figure>


<figure>
    <img src="assets/img/getting_started_pics/m5stack_core/get_started_with_arduino_m5core/mac/macOS_security_and_privacy_02.png">
</figure>

?> **Tip** **If you want to read more the permission about the CP2104 USB driver, visit the below link please.** https://developer.apple.com/library/archive/technotes/tn2459/\_index.html