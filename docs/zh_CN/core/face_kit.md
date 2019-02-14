# FACES Kit {docsify-ignore-all}

**[GameBoy Keyboard](#gameBoy-keyboard)**&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;**[Calculator Keyboard](#calculator-keyboard)**&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;**[QWERTY Keyboard](#qeerty-keyboard)**&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;**[FACES Charger 充电座](#faces-charger-充电座)**&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;🛒**[购买链接](https://item.taobao.com/item.htm?spm=a1z10.3-c.w4002-1172588106.15.686c425eRw6D4J&id=562810115476)**

**FACES Kit** 是有 M5Core 、功能面板、FACES Base 、充电底座 FACES Charger 和其他配件(杜邦线、FACES Kit挂绳、M3固定螺丝等等)组成的套件。目前功能面板有 GameBoy 、Calculator 和 QWERTY 三种，以后会继续增加。可以通过 Arduino IDE 或者 M5Cloud 对套件编程，在不同的应用场景下，堆叠不一样的功能面板，烧录对应固件到 M5Core，实现对应的功能。其中 FACES 底座的电池是 650mAh。而关于 FACES 底座的详情欢迎阅读介绍 [FACES Base](zh_CN/base/face_base) 的介绍。

*每个功能面板都集成了 **MEGA328** 芯片，在按下每个独立按键都可以返回唯一的键值。功能面板与 M5Core 之间通过 **I2C** 通信，而从机(即功能面板)的 I2C 地址为 0x08。*


下图是整个套件的内容

<figure>
    <img src="assets/img/product_pics/core/faces_kit/faces_kit.png">
</figure>

### GameBoy Keyboard

在做游戏娱乐时，需要GameBoy键盘。
M5Core和FACE底板，再加上GameBoy键盘之后，点击[这里](zh_CN/quick_start/faces/gameboy_burn_a_nes_game)烧录游戏模拟器，然后能玩多款经典的电子游戏。

GameBoy游戏烧录方法：[下载游戏](zh_CN/quick_start/faces/gameboy_burn_a_nes_game)

<figure>
    <img src="assets/img/product_pics/core/faces_kit/gameboy_01.png">
</figure>

### Calculator Keyboard

在做计算器，需要Calculator键盘。
M5Core和FACE底板，再加上Calculator键盘之后，烧录你的固件到M5Core，固件里读取所按下按键的键值，并执行该按键触发的事件，就可以Calculator键盘功能。

<figure>
    <img src="assets/img/product_pics/core/faces_kit/calculator.png">
</figure>

### QWERTY Keyboard

在你做以M5Core为主控的终端需要全键盘输入时，堆叠QWERTY模块，烧录对应固件到M5Core，固件里读取所按下按键的键值，并执行该按键触发的事件，。


烧录如下例程(例程功能: M5Core显示屏和串口终端打印按下的按键)

-  **例程文件** - a. [Arduino](https://github.com/m5stack/M5Stack/tree/master/examples/Modules/FACES) - b. [MicroPython](https://github.com/m5stack/M5Cloud/tree/master/examples/FACES)(for M5Cloud)

-  **M5Cloud使用方法** - [MicroPython(M5Cloud)](zh_CN/quick_start/m5core/m5stack_core_get_started_MicroPython_m5cloud)

<figure>
    <img src="assets/img/product_pics/core/faces_kit/qwerty.png">
</figure>


### FACES Charger 充电座

**FACES Charger 充电座**内置磁铁，充电时，能稳定地吸附FACES主机，并与FACES主机之间通过PIGO Pin连接。

<figure>
    <img src="assets/img/product_pics/core/faces_kit/charger.png">
</figure>

### 相关链接

- **[购买链接](https://item.taobao.com/item.htm?spm=a1z10.3-c.w4002-1172588106.15.686c425eRw6D4J&id=562810115476)**

### 注意：

*FACES Kit 中配置了[灰色版本](zh_CN/core/gray)的 Core，而我们的 Core 有几个版本，同样可以将其他版本的 Core 堆叠到 FACES 的底座上用。下图是它们主要区别的比较，方便您使用。如果想查看详细的资源对比，请点击[这里](https://github.com/m5stack/M5-Schematic/blob/master/Core/hardware_difference_between_cores_zh_CN.md)。*

<img src="assets/img/product_pics/core/core_comparison_04_zh_CN.png">
