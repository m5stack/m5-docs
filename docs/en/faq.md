# FAQ {docsify-ignore-all}

**[Core](#Core)**&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;**[Unit](#Unit)**

## Core

- **Q1: What's the difference between those Cores?**

    The main difference between these Cores is the internal hardware configuration and kit matching. From the basic version to the upgraded version, the attitude sensor MPU9250 is added and the RAM and FLASH are increased. For details, please visit [here](https://github.com/m5stack/M5-Schematic/blob/master/Core/hardware_difference_between_cores_zh_CN.md)。

    <img src="http://m5-docs.oss-cn-shenzhen.aliyuncs.com/assets/img/product_img/core/core_comparison_04_zh_CN.png">

    <img src="http://m5-docs.oss-cn-shenzhen.aliyuncs.com/assets/img/product_img/core/core_comparison_05_zh_CN.png">

- **Q2: How to turn off the speaker function of M5Core？**

    Add the following statement to functioin Setup(){}

    ```arduino
    dacWrite(M5STACKFIRE_SPEAKER_PIN, 0);
    ```

- **Q3: Some modules cannot be downloaded after stacking with M5Core, such as USB module and M5Core stacking.**

    Probably after the stack, the pins GPIO0 and M5Core on the M5-Bus bus are not very well connected.

    In this case, when downloading the program, GPIO0 should always remain low, but because the contact is not good, GPIO0 can not remain low all the time, so the download fails.

    **Solution:** Manually let GPIO0 connect to GND during the download process to ensure that it is pulled low enough。

- **Q4: After the [M5GO bottom](en/base/m5go_bottom) is stacked with the M5Core, the M5Core cannot be turned on, but the base battery in this M5GO bottom is fully charged.**

    It may be that after the stacking, the BATTERY of the lower left corner of the M5-Bus bus on the base is not well connected to the M5Core. This is caused by the deviation of the welding position during production. After the bus pin welding position is slightly biased, it is easy to see that the BATTERY pin is not in good contact with the M5Core.

    **Solution:** Re-soldering the M5-Bus bus header, the pin header must be strictly aligned with the pad position.

<!-- - **Q2: ESP32 有哪些特殊的 GPIO 管脚需要注意？**

    ESP32 有 34 个 GPIO 管脚，其中 GPIO 34-39 仅用作输入，不能作为输出，其他的既可以作为输入又可以作为输出管脚。 -->