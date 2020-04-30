# ATOM ECHO Quick Start {docsify-ignore-all}

## Firmware Flash

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

## Usage

Turn on the power, and the indicator light is red. Turn on the Bluetooth device and search for nearby devices. The Bluetooth device with the name of M5_SPEAKER_T1 is ATOM ECHO. Click connect or pairing, ATOM ECHO will send Bluetooth pairing request, confirm pairing to establish Bluetooth connection, at this time, the indicator light turns green to indicate that the connection is normal. Once the connection is established successfully, atom echo can be used as an audio playback device. (currently, the firmware does not support answering and calling as a handsfree device)

As**G19/G22/G23/G33**is used as I2S, it can not be reused as other function pins, otherwise it will cause the risk of equipment damage.**G21/G25** is only used as a General I/O pin and cannot be mapped to I2C and UART. To use I2C or UART functions, please connect to the grove port.The firmware is compiled on the esp-idf platform, and ordinary users can directly download easyloader for burning.If senior users need to develop other functions by themselves, they can build according to the official documents of ESPRESSIF[ESP-IDF Software Development Environment](https://docs.espressif.com/projects/esp-idf/en/latest/esp32/get-started/index.html),Factory firmware source code and BIN file[Click here to download](https://github.com/m5stack/M5-ProductExampleCodes/tree/master/Core/Atom/AtomEcho/Factory_BT_SPEAKER_Firmware),where BIN file burning address is 0x0000.（For the ESP-IDF source code modified by users, m5stack does not provide technical support）

## Example

<script>

   anchor_search();
   scrollFunc();

</script>