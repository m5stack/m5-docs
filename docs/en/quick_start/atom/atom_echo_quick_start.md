# ATOM ECHO Quick Start {docsify-ignore-all}

## Factory Firmware Flash

The factory firmware is configured as a Bluetooth speaker by default. Users can connect devices such as mobile phones, tablets, PCs and so on with ATOM ECHO to output audio to ATOM ECHO for playback.To burn the firmware, download the corresponding easyloader according to the operating system.

<div class="easyloader-box">
    <div style="background-color:white;">
        <div><img src="https://m5stack.oss-cn-shenzhen.aliyuncs.com/image/easyloader_intro.webp"></div>
        <div class="easyloader-btn">
            <a href="https://m5stack.oss-cn-shenzhen.aliyuncs.com/EasyLoader/Windows/ATOM_BASE/EasyLoader_ECHO_Bluetooth_Speaker.exe">Windows</a>
            <a href="https://m5stack.oss-cn-shenzhen.aliyuncs.com/EasyLoader/MacOS/ATOM_BASE/EasyLoader_ECHO_Bluetooth_Speaker.dmg">MacOS</a>
            <!-- <a>Linux</a>
            <a>MacOS</a> -->
        </div>
    </div>
</div>

## Use of factory firmware

Turn on the power, and the indicator light is red. Turn on the Bluetooth device and search for nearby devices. The Bluetooth device with the name of M5_SPEAKER_T1 is ATOM ECHO. Click connect or pairing, ATOM ECHO will send Bluetooth pairing request, confirm pairing to establish Bluetooth connection, at this time, the indicator light turns green to indicate that the connection is normal. Once the connection is established successfully, atom echo can be used as an audio playback device. (currently, the firmware does not support answering and calling as a handsfree device)

As**G19/G22/G23/G33**is used as I2S, it can not be reused as other function pins, otherwise it will cause the risk of equipment damage.**G21/G25** is only used as a General I/O pin and cannot be mapped to I2C and UART. To use I2C or UART functions, please connect to the grove port.The firmware is compiled on the esp-idf platform, and ordinary users can directly download easyloader for burning.If senior users need to develop other functions by themselves, they can build according to the official documents of ESPRESSIF[ESP-IDF Software Development Environment](https://docs.espressif.com/projects/esp-idf/en/latest/esp32/get-started/index.html),Factory firmware source code and BIN file[Click here to download](https://github.com/m5stack/M5-ProductExampleCodes/tree/master/Core/Atom/AtomEcho/Factory_BT_SPEAKER_Firmware),where BIN file burning address is 0x0000.

## EchoSTT service

EchoSTT is a speech to text service, which sends the local speech to the cloud server through the network and returns the recognition results to the local device. Whether you use this service in UIFlow, you need to bind token through MAC address to obtain permission. The specific steps are as follows:

- Go to [Official website](https://m5stack.com/pages/download)to download latest version M5Burner(2.0.0 and above)

- Connect the ECHO to the USB port of the computer, select the corresponding COM port, the baud rate is 750000 by default, input your WiFi SSID and password, and click "Erase" to erase the flash.

- Find the **ATOM** option, select EchoSTT, click download to download the firmware, and select English firmware or Chinese firmware according to the language you want to recognition.

- Click "Burn" to flash firmware, and wait for the "COM Monitor" to display the burn completion prompt.

- Click "Get token" to get the token needed to connect to STT server, record the token, which will be used in your subsequent programming.

<img src="assets/img/product_pics/atom_base/echo/EchoSTT_burner.webp" width = "50%">

## UIFlow example for EchoSTT services

Before running this example, make sure that you have completed the above steps to get the token.

<img src="assets/img/product_pics/atom_base/echo/EchoSTT.webp" width = "50%">

## Arduino example for EchoSTT services

When using this example, you need to input WIFI SSID and PASSWORD，get token through M5Burner，then find rest.settoken("your_Token"); fill in the acquired token.

- [EchoSTT services](https://github.com/m5stack/M5-ProductExampleCodes/tree/master/Core/Atom/AtomEcho/Arduino/EchoSTT)

## Arduino Example

1. This example is used to test whether the LED, microphone and loudspeaker work normally. If you press the key when power is on, the music will play all the time. Otherwise, you will enter the test microphone link. You can check it through the serial monitor.

    - [FactoryTest](https://github.com/m5stack/M5-ProductExampleCodes/tree/master/Core/Atom/AtomEcho/Arduino/Factory_Test)

2. This is an example of recording and playback. When you press and hold the button, the recording starts. The recording time is no more than 6 seconds. When you release the key, the recorded content will be played back.

    - [Recoder&Replay](https://github.com/m5stack/M5-ProductExampleCodes/tree/master/Core/Atom/AtomEcho/Arduino/Repeater)

3. This example can play music through URL. Because the buffer memory is small, continuous noise will appear when the network condition is not good. Please choose the URL and your WiFi network reasonably.

    - [StreamHttpMP3](https://github.com/m5stack/M5-ProductExampleCodes/tree/master/Core/Atom/AtomEcho/Arduino/StreamHttpClient_ECHO)