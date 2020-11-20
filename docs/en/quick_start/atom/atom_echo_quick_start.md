# ATOM ECHO Quick Start

## Bluetooth Speaker

The factory firmware is configured as a Bluetooth speaker by default. Users can connect devices such as mobile phones, tablets, PCs and so on with ATOM ECHO to output audio to ATOM ECHO for playback.

### Firmware

?>To burn the firmware, download the corresponding easyloader according to the operating system.

<div class="files_download">
   <p class="item">
      <a href="https://m5stack.oss-cn-shenzhen.aliyuncs.com/EasyLoader/Windows/ATOM_BASE/EasyLoader_ECHO_Bluetooth_Speaker.exe">
      <img src="/image/base/Windows_logo.webp" width="50">
      <span class="item-title">Windows10</span>
      </a>
   </p>
   <p class="item">
      <a href="https://m5stack.oss-cn-shenzhen.aliyuncs.com/EasyLoader/MacOS/ATOM_BASE/EasyLoader_ECHO_Bluetooth_Speaker.dmg">
      <img src="/image/base/MacOS_logo.webp" width="50"> 
      <span class="item-title">MacOS</span>
      </a>
   </p>
</div>

### How to use Bluetooth speakers

Turn on the power, the indicator light is red at this time, turn on the device Bluetooth, search for nearby devices, the Bluetooth device named M5_SPEAKER_T1 is ATOM ECHO. After clicking connect or pairing, ATOM ECHO will send out a Bluetooth pairing request. Confirm pairing to establish a Bluetooth connection. At this time, the indicator light turns green to indicate that the connection is normal. Once the connection is established, ATOM ECHO can be used as an audio playback device. (Currently the firmware does not support making and receiving calls as a hands-free device)

<img src="assets\img\quick_start\echo\echo_bluetooth.webp" width="300px">


Since **G19/G22/G23/G33** are used as I2S, they cannot be reused as other functional pins, otherwise there will be a risk of equipment damage. The firmware is compiled under the ESP-IDF platform, and ordinary users can directly download EasyLoader to burn. If advanced users need to develop other functions by themselves, they can perform [ESP-IDF environment setup](https://docs.espressif.com/projects/esp-idf/zh_CN/latest/esp32/get-started/index.html#id2), factory firmware source code and BIN file [click here to download](https://github.com/m5stack/M5-ProductExampleCodes/tree/master/Core/Atom/AtomEcho/Factory_BT_SPEAKER_Firmware), including the BIN file The programming address is `0x0000`.

## EchoSTT

EchoSTT is a voice-to-text service that sends local voice to a cloud server through the network, and returns the recognition result to the machine or other M5 devices. Whether you use the service in UIFlow or Arduino, you need to bind the Token with the MAC address to obtain the permission. The specific steps are as follows:

?>The following tutorial will show you how to use other M5 devices to obtain Echo voice recognition results in UIFlow.

### Firmware&Token

#### Burn Firmware

>Please click the button below to download the corresponding M5Burner firmware burning tool according to your operating system. Unzip and open the application.

<div class="files_download">
   <p class="item">
      <a href="https://m5stack.oss-cn-shenzhen.aliyuncs.com/resource/software/M5Burner.zip">
      <img src="/image/base/Windows_logo.webp" width="50">
      <span class="item-title">Windows10</span>
      </a>
   </p>

   <p class="item">
      <a href="https://m5stack.oss-cn-shenzhen.aliyuncs.com/resource/software/M5Burner_MacOS.zip">
      <img src="/image/base/MacOS_logo.webp" width="50"> 
      <span class="item-title">MacOS</span>
      </a>
   </p>

   <p class="item">
      <a href="https://m5stack.oss-cn-shenzhen.aliyuncs.com/resource/software/M5Burner_Linux.zip">
      <img src="/image/base/Linux_logo.webp" width="50"> 
      <span class="item-title">Linux</span>
      </a>
   </p>
</div>

<img src="assets/img/getting_started_pics/how_to_burn_firmware/M5Burner/M5Burner_01.webp">

?>Note: After installation for MacOS users, please put the application into the Application folder, as shown in the figure below.

><img src="/image/base/application.webp" width="70%"> 

?>Note: For Linux users, please switch to the decompressed file path and run `./M5Burner` in the terminal to run the application.

#### Token

- Find the **ATOM** option, select EchoSTT and click download to download the firmware, select English firmware or Chinese firmware according to the language you want to recognize. Connect ECHO to the computer USB port, select the corresponding COM port, click burn to burn, and wait for the serial port The monitor shows a prompt that the programming is complete.

<img src="assets\img\quick_start\echo\echo_firmware_01.webp" width="600px">

- Click Get Token to get the Token needed to connect to the STT server, record this Token, it will be used in your subsequent programming

<img src="assets\img\quick_start\echo\echo_firmware_02.webp" width="600px">

#### UIFlow case program for EchoSTT service

Configure other M5 devices in WIFI programming mode and connect to UIFlow Web IDE (for related configuration tutorials, please refer to the UIFlow manual of the master you are using). Fill in the Token obtained in the above steps before running this example. During configuration, run the program.

After completing the above steps, press the middle button of Echo to start voice recording. After release, the voice will be automatically uploaded to the cloud for recognition, and the M5 device will automatically obtain the recognition result for display.

<img src="assets/img/product_pics/atom_base/echo/EchoSTT.webp" width = "50%">

### Arduino example program for EchoSTT service

**LED description**

1. The red status light after booting means that the network is not connected

2. The green status light after booting means that it is connected to the network

3. Press the button and the status light turns yellow

4. The recognition result recognition status light is red

5. The successful status light of the recognition result is green

When using this case, you need to click to obtain Token through M5Burner, fill in the SSID and WIFI password in the example, and find rest.settoken("your_token"); fill in the obtained Token in it

- [EchoSTT-Arduino](https://github.com/m5stack/M5-ProductExampleCodes/tree/master/Core/Atom/AtomEcho/Arduino/EchoSTT)

### Arduino sample program

1. This example is used to test whether the LED, microphone, and speaker work normally. If you press the button while power is on, the speaker will always play music, otherwise it will only play once and then enter the test microphone link. You can check it through the serial monitor.

    - [FactoryTest](https://github.com/m5stack/M5-ProductExampleCodes/tree/master/Core/Atom/AtomEcho/Arduino/Factory_Test)

2. This is an example of recording and playback. Recording starts when you press and hold the button. The recording time is no more than 6 seconds. After you release the button, the recorded content will be played.

    - [Recoder&Replay](https://github.com/m5stack/M5-ProductExampleCodes/tree/master/Core/Atom/AtomEcho/Arduino/Repeater)

3. In this example, you can play music through url. Because the buffer memory is small, continuous noise will occur when the network is in a bad condition. Please choose the url link and your wifi network reasonably.

    - [StreamHttpMP3](https://github.com/m5stack/M5-ProductExampleCodes/tree/master/Core/Atom/AtomEcho/Arduino/StreamHttpClient_ECHO)

<script>

   anchor_search();
   scrollFunc();

</script>