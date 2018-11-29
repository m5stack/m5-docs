# Unit JOYSTICK

中文 | [English](/en/product_documents/units/unit_joystick) | [日本語](ja/product_documents/units/unit_joystick)

## 描述

<mark>Joystick</mark>是一款内置MEGA328芯片控制的摇杆模块，可以输出X-Y两个方向的摇杆偏移量，可以判断Z方向是否按下的。

内部电路里，摇杆的X方向与MEGA328的A0管脚相连，Y方向与MEGA328的A1管脚相连，Z方向与MEGA的A2管脚相连。

Joystick Unit同样也是与M5Core相连之后，通过PORT A(I2C)控制，其I2C地址是0x52。M5Core只需要读取0x52的I2C地址数据即可知道摇杆的偏移情况。

## 特性

-  GROVE接口，支持[M5Flow](http://flow.m5stack.com)编程，[Arduino](http://www.arduino.cc)编程
-  Unit内置两个Lego插件孔，方便与Lego件结合

## 相关链接

- **[例程](https://github.com/m5stack/M5Stack/tree/master/examples/Unit/Joystick)**
- **[购买链接](https://www.aliexpress.com/store/product/M5Stack-Official-New-Joystick-Unit-MEGA328P-I2C-Grove-Connector-Compatible-X-Y-Axis-Button-for-ESP32/3226069_32921785624.html?spm=a2g1x.12024536.productList_2187621.10)**

<figure>
    <img src="assets/img/product_pics/units/M5GO_Unit_joystick.png">
</figure>

<figure>
    <img src="assets/img/product_pics/units/M5GO_Unit_joystick_2.png">
</figure>

<figure>
    <img src="assets/img/product_pics/units/M5GO_Unit_joystick_3.png">
</figure>