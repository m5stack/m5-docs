# Hat DAC {docsify-ignore-all}

<img src="assets\img\product_pics\hat\dac_hat\dac_hat_01.jpg" width="30%" height="30%"><img src="assets\img\product_pics\hat\dac_hat\dac_hat_02.jpg" width="30%" height="30%"><img src="assets\img\product_pics\hat\dac_hat\dac_hat_03.jpg" width="30%" height="30%">

***

:memo:**[描述](#描述)**&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;:electric_plug:**[原理图](#原理图)**&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;🛒**[购买链接](https://m5stack.com/collections/m5-unit/products/m5stickc-env-hat)**&nbsp;&nbsp;&nbsp;<img src="https://m5stack.oss-cn-shenzhen.aliyuncs.com/image/EasyLoader_logo-min.jpg">**[EasyLoader](#EasyLoader)**



## 描述

**DAC Hat**是一款兼容M5SticKC的DA转换模块，内部集成DAC转换芯片MCP4725，具备低功耗，高精度，单通道，12位缓冲电压输出数模转换器（DAC），非易失性存储器（EEPROM）.其片上精密输出放大器使其能够达到轨到轨模拟输出摆幅.用户可以使用I2C接口命令将DAC输入和配置烧写到非易失性存储器（EEPROM）中，使得DAC在断电期间仍能保持代码，上电后即可直接使用,I2C地址为0x60.




## 产品特性

- 兼容M5StickC
- 输出电压: 0-3.3V
- 开发平台: Arduino, UIFlow(Blockly, MicroPython)
- MCP4725: 
    - 12位分辨率
    - 外部A0地址引脚
    - 正常或关断模式
    - 快速稳定时间为6μs（典型值）
    - 外部电压参考（VDD）
    - 轨到轨输出
    - 低功耗
    - 单电源工作：2.7V至5.5V
    - 外部电压参考（VDD）
    - I2C 接口
    - 扩展级温度范围：-40°C至+ 125°C

## 包含

- 1x DAC HAT

## 应用

- 设定点或失调微调
- 传感器校准
- 闭环伺服控制
- 低功耗便携式仪表
- PC外设
- 数据采集系统




## 原理图

<img src="assets/img/product_pics/hat/dac_hat/dac_hat_04.jpg" width="50%" height="50%">




## EasyLoader

<img src="https://m5stack.oss-cn-shenzhen.aliyuncs.com/image/EasyLoader_logo.png" width="100px" style="margin-top:20px">

<a href="https://m5stack.oss-cn-shenzhen.aliyuncs.com/EasyLoader/HAT/ENV/EasyLoader_StickC_HAT_ENV.exe"><button type="button" class="btn btn-primary">点击下载EasyLoader</button></a>

>1.EasyLoader是一个简洁快速的程序烧录器，每一个产品页面里的EasyLoader都提供了一个与产品相关的案例程序.

>2.下载软件后，双击运行应用程序，将M5设备通过数据线连接至电脑,选择端口参数，点击 **"Burn"** 即可开始烧录


## 相关链接

-  **Datasheet** - [MCP4725](http://pdf1.alldatasheet.com/datasheet-pdf/view/233449/MICROCHIP/MCP4725.html)


## Video
**Demo** 

<video width="500" height="500" controls>
    <source src="https://m5stack.oss-cn-shenzhen.aliyuncs.com/video/Product_example_video/HAT/ADC-DAC-HAT.mp4" type="video/mp4" >
</video>
