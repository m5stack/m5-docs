# Unit ADC

## 描述 DESCRIPTION

这是带EEPROM存储的12位数字模拟转换unit，相比ESP32芯片自带的DAC（8位）功能分辨率高了不少，可以将输入的数字信号转换成模拟信号如电压、声音等输出。unit集成的DAC芯片是单通道采集，通过I2C接口与M5的主控通讯，你还可以将输入端的数字量和配置数据都保存到EEPROM中，这样在上电之后，能够立马将本来保存的数字量转换成模拟信号输出。

## 特性 FEATURES

-  DAC有12位分辨率
-  乐高孔接口

## 应用 APPLICATION

-  MP3音频播放器
-  mini示波器

## 文档 DOCUMENTS

-  GitHub

   - [Arduino](https://github.com/m5stack/M5Stack)

-  Datasheet

   - [MCP4725](http://pdf1.alldatasheet.com/datasheet-pdf/view/233449/MICROCHIP/MCP4725.html)

-  [Purchase]()

<figure>
    <img src="assets/img/product_pics/units/M5GO_Unit_dac.png" height="300" width="300">
</figure>
