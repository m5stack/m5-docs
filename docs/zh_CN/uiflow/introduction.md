# 更新固件
_________________________________

><img src="/image/base/windows_logo.png" width="100" height="100">
### For Windows

* __下载驱动程序__

>访问[m5stack.com](http://m5stack.com/)下载与自己操作系统对应的[CP210X驱动程序](http://m5stack.com/download/Driver/CP210x_VCP_Windows.zip)

><img src="/image/base/CP210X_DL.gif" width="50%">


* __安装驱动程序__

> 解压压缩包后，选择对应操作系统位数的安装包进行安装

><img src="/image/base/CP210X_install.gif " width="50%">

—————————————————————————————————

* __下载M5Burner__

>访问[flow.m5stack.com](http://flow.m5stack.com/)下载最新的固件包和[M5Burner烧录工具](http://flow.m5stack.com/download/M5Burner-flow-only.zip)

><img src="/image/base/Burner_DL.png" width="50%">

* __开始烧录__

> 解压压缩包后，双击打开Burner烧录工具，将M5设备通过Type-C数据线连接到电脑，选择对应的COM口，波特率（烧录的速率建议921600或115200），以及你想更新的固件版本
>__首次烧录需点击Erase进行一次擦除（在往后的更新中则无需再次擦除，否则将清除已保存的WIFI信息，以及刷新API Key），擦除完成后点击Burn开始烧录__

><img src="/image/base/Burner_user.gif " width="50%">



# 配置WIFI
____________________________________

__UIFlow与M5GO是两个独立单元，想要通过UIFlow编写程序并发送到M5GO上，就需要为它们之间建立起连接__
#### 开机选择配置WIFI

>单击设备的电源键开机，在屏幕出现Logo后选择配置，点击更改WIFI，然后用手机连接屏幕上显示的热点


><img src="/image/base/1.png" width="50%">


#### 填写个人WIFI信息

>用手机连接热点成功后，打开手机浏览器扫描屏幕上的二维码，或是直接访问 __192.168.4.1__，进入页面填写个人的WIFI信息，使得M5GO连接上你的个人网络

><img src="/image/base/2.png" width="50%">



# 配置API Key
______________________

#### 进入编程模式

>开机后，在主菜单选择编程模式,等待信号指示灯右红变成绿色（这表示M5GO连接网络成功），用平板扫描屏幕上的二维码，或是在电脑浏览器直接访问[flow.m5stack.com](http://flow.m5stack.com/)进入UIFlow编程页面

><img src="/image/base/APIkey_user.png"/>

#### 填写API Key

>进入UIFlow后，点击页面右上角的菜单栏中的设置按钮，输入对应M5GO上的API Key，点击OK保存，等待提示连接成功

><img src="/image/base/APIKey_userpair1.png" width="50%">
><img src="/image/base/APIKey_userpair2.png" width="50%">

# 运行，下载程序
______________________

#### 运行程序

>在编程区域，编辑好程序后，点击页面右上角的运行按钮，M5GO就会接收推送，开始执行程序

><img src="/image/base/Run_program.gif" width="50%">

#### 下载程序

>下载程序与运行程序的区别在于，下载会将程序保存到M5GO的程序库中，并且在开机时默认运行，而运行程序只是单次，一旦重启就没有了，就像是一次测试，在实际编程中，会经常使用运行来检测的程序的效果

><img src="/image/base/DL_program.png" width="50%">

# UIFlow布局
_______________________________________

### UIFlow的布局主要分为5大版块


><img src="/image/base/UIFLOW_interface.png" width="50%">

* __编程区域__
>拖动列表里的Block到右边区域中进行拼接，即可搭建程序

* __菜单栏__
>菜单栏中放置了一些基本操作选项（Example例程库，撤销操作，恢复，运行，下载程序，远程二维码等）

* __Blockly</>Python__
>将Blockly程序切换成Python代码

* __UI模拟器__
>拖动左上角元素选项到屏幕上，快速绘制图形

* __Units__
>拓展Unit模块来丰富程序的功能


# 程序的结构
____________________________________

#### Setup块

>当打开UIFlow的时候，你会发现最开始就已经有一个Setup块，每个程序都必须有一个Setup块，程序是从Setup块开始运行的，并且只会运行一次，你可以把它看作一个程序的的初始化块


><img src="/image/Program_structure/Setup.png" width="20%">


#### Loop块

>Loop是一个无限循环块，当执行到它时，它会无限循环执行包含在块中的程序，直到发生一些事件使他停止，例如M5GO关机，程序中它不是必须存在的，但为了让程序持续的运行，或是实现某些功能时，你可以添加它

><img src="/image/Program_structure/Loop.png" width="20%">


#### 程序连接

>程序块之间可以通过块上的嵌口进行连接，就像拼图一样的操作方式

><img src="/image/Program_structure/Block_connect.gif" width="50%">

#### 程序执行顺序

>程序是由上往下执行，当程序开始运行，首先进入Setup单次执行初始化程序，然后进入Loop中不断循环主程序


><img src="/image/Program_structure/Process.png">

# Button
_____________________________

#### 功能说明

>M5GO提供了三个面板按钮（A,B,C），通过Button Block，我们可以使用这三个按钮去实现控制

><img src="/image/Program_structure/Button.png" width="40%">


* __主动Button__
由M5GO面板上的物理按键直接控制

* __被动Button__
当按键被按下时改块为True,否则为False，配合主动Button使用可以实现更多功能

#### 使用方法

>将按下按钮后需要运行的程序，放到Button Block中，修改对应的按键位

><img src="/image/Program_structure/Button_connect.gif" width="50%">

# Wait
_____________________________

#### 功能说明

>Wait是Timer选项中的一个延时Block，可以设定Wait执行的时间，并根据需求添加到程序中

><img src="/image/Program_structure/Wait.png" width="20%">

* __Wait__
修改数据框中的数字，更改Wait延时的时间

* __Get ticks ms__
获取系统运行时间

#### 使用方法

>将Wait Block添加到需要延时的程序之间并设定时间，在程序执行到它时，就会发挥延时作用 

><img src="/image/Program_structure/Wait_user.gif" width="50%">


# Timer
_____________________________

#### 功能说明

>Timer是一个定时器函数，可以定期进入程序块运行

><img src="/image/Program_structure/Timer.png" width="20%">

* __Timer callback__
定时器回调函数，定期执行

* __Start period ms mode__
开启定时器以指定的时间间隔运行，设置模式有两种，One_shot为执行一次，periodic为周期执行

* __Set period ms mode__
修改指定定时器的时间参数和运行模式

* __Stop__
终止定时器

#### 使用方法

>添加两个定时器，依据时间参数分别计数

><img src="/image/Program_structure/Timer_user.gif" width="50%">


