# 如何安装USB驱动并建立与PC的串口通讯

中文 | [English](/en/related_documents/establish_serial_connection) | [日本語](ja/related_documents/establish_serial_connection)

**这个文档会介绍如何安装USB驱动，并与PC建立串口通信.**

## For MacOS

### 1. 安装USB驱动

**[下载SiLabs CP2104驱动](https://www.silabs.com/documents/public/software/Mac_OSX_VCP_Driver.zip)**

**如果镜像文件SiLabsUSBDriverDisk.dmg已经下载了, 挂载它, 根据以下图片显示的步骤来安装.**

<figure>
    <img src="assets/img/getting_started_pics/establish_serial_connection/macOS_CP2104_dmg.png">
</figure>

<figure>
    <img src="assets/img/getting_started_pics/establish_serial_connection/macOS_CP2104_pkg.png">
</figure>

<figure>
    <img src="assets/img/getting_started_pics/establish_serial_connection/2.png">
</figure>

<figure>
    <img src="assets/img/getting_started_pics/establish_serial_connection/3.png">
</figure>

<figure>
    <img src="assets/img/getting_started_pics/establish_serial_connection/4.png">
</figure>

<figure>
    <img src="assets/img/getting_started_pics/establish_serial_connection/5.png">
</figure>

<figure>
    <img src="assets/img/getting_started_pics/establish_serial_connection/6.png">
</figure>

<figure>
    <img src="assets/img/getting_started_pics/establish_serial_connection/7.png">
</figure>

<figure>
    <img src="assets/img/getting_started_pics/establish_serial_connection/8.png">
</figure>

<figure>
    <img src="assets/img/getting_started_pics/establish_serial_connection/9.png">
</figure>

### 2. 在MacOS上检查确认COM串口号

**打开终端terminal并执行以下命令两次, 第一次在板子或者dongle还未插入PC的时候, 然后把板子或者dongle插入执行第二次. 这时候，在执行第二次命令之后，出现的串口号就是此时板子与PC相连的串口号**

**MacOS**

    ls /dev/cu.*



## For Windows

### 1. 安装USB驱动

**下载[SiLabs CP2104驱动](https://www.silabs.com/products/development-tools/software/usb-to-uart-bridge-vcp-drivers)**

**根据你windows版本来下载对应版本的USB驱动(Windows7/8/10).**

<figure>
    <img src="assets/img/getting_started_pics/establish_serial_connection/windows_download_CP2104_USB_driver.png">
</figure>

**选择正确的版本来安装，如果电脑系统是32位，则下载符合Windows版本的X86版本USB驱动，如果电脑系统是64位，则下载符合Windows版本的X64版本USB驱动, 然后安装驱动.**

<figure>
    <img src="assets/img/getting_started_pics/establish_serial_connection/windows_install_usb_driver01.png">
</figure>

<figure>
    <img src="assets/img/getting_started_pics/establish_serial_connection/windows_install_usb_driver02.png">
</figure>

<figure>
    <img src="assets/img/getting_started_pics/establish_serial_connection/windows_install_usb_driver03.png">
</figure>

### 2. 在Windows上检查确认COM串口号

**在Windows的设备管理器上查看COM串口号. 插上板子或者dongle之后，查看显示的COM口，再拔掉，此时消失的COM口就是该板子或dongle对应的COM口.**

**下图显示了M5Core板子与PC通信的COM串口号**

<figure>
    <img src="assets/img/getting_started_pics/establish_serial_connection/windows_m5stack_in_device_manager.png">
</figure>
