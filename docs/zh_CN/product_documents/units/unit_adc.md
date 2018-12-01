# Unit ADC

中文 | [English](/en/product_documents/units/unit_adc) | [日本語](ja/product_documents/units/unit_adc)


## 描述

这是带自校准功能的16位模拟数字转换unit，相比ESP32芯片自带的ADC（12位）功能分辨率高了不少，意味着你可以测量更小幅值的电压等模拟量，也就是能测量更细微一倍的模拟量，比如采集心电电压做心电监护项目、做血压监测项目、高精度电压监控项目等等。unit集成的ADC芯片通过I2C接口与M5的主控通讯，可以设置成单周期转换和连续转换方式。

## 特性

-  ADC有16位分辨率，可以设置每秒采样8、16、32、128次以进行A/D转换
-  ADC芯片内部可以产生高达8倍的放大，从而可以采集幅值更小的模拟信号
-  能测量0~12V的电压输入
-  GROVE接口，支持[UiFlow](http://flow.m5stack.com)编程，[Arduino](http://www.arduino.cc)编程
-  Unit内置两个Lego插件孔，方便与Lego件结合

## 应用

-  心电信号采集
-  血压测量
-  测力计

## 文档

-  **例程** - [Arduino](https://github.com/m5stack/M5Stack/tree/master/examples/Unit/ADC_ADS1100)

-  **数据手册** - [ADS1100](http://pdf1.alldatasheet.com/datasheet-pdf/view/619024/TI1/ADS1100.html)

-  **[购买链接](https://www.aliexpress.com/store/product/M5Stack-Official-ADC-Unit-16-Bit-I2C-GROVE-ADS1100-Module-0V-to-12V-analog-to-digital/3226069_32946953374.html?spm=a2g1x.12024536.productList_5885013.pic_7)**

<figure>
    <img src="assets/img/product_pics/units/M5GO_Unit_adc.png" height="300" width="300">
</figure>
