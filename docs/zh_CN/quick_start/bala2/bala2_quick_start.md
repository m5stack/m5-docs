# BALA2 上手指南 {docsify-ignore-all}

?>M5Bala2在出厂时已做校准，如需重新校准按以下步骤进行。

1. 将BALA2放置水平桌面，保持关机状态。

2. 同时按住中间按键(ButtonB)和左侧红色按键，待屏幕亮起后立刻松手，此时会获取IMU数据，期间请勿触碰。

3. 数据获取完毕后自动进入校准模式界面，按下A/C键可对修正值增加或减小，当调整至满意值时，按下B键保存参数。

4. 重新开机，BALA2将已保存的参数运行。

## 开发环境

[Arduino IDE编辑](#Arduino-IDE编辑)

## Arduino IDE编辑

1. [Mac用户]参考此教程配置[Arduino IDE](zh_CN/arduino/arduino_development)
   [Windows用户]参考此教程[配置Arduino IDE](zh_CN/arduino/arduino_development)

2. [下载示例程序](https://github.com/m5stack/M5-ProductExampleCodes/tree/master/Application/Bala2)

3. 在Arduino中打开示例程序

3. 将BALA2连接至电脑.点击`Tools`->`Port`中选择设备使用的串行端口

4. 开发板`Board`选项选择`M5Stack-Core-ESP32`

5. 对代码编译上传

## 舵机使用

**Bala::SetServoAngle(uint8_t pos, uint8_t angle)**

uint8_t pos 舵机序号(1 - 8)，其中5 - 8号舵机在BALA底座内部

uint8_t angle 舵机角度

**Bala::SetServoPulse(uint8_t pos, uint16_t width)**

uint8_t pos 舵机序号(1 - 8)，其中5 - 8号舵机在BALA底座内部

uint16_t width 脉冲宽度

**关于M5Stack的使用请参考[M5Stack GRAY](https://docs.m5stack.com/#/zh_CN/core/gray)**