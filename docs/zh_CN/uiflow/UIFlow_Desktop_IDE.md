# UIFlow Desktop IDE 部署{docsify-ignore-all}

<!-- ### 1. 打开Arduino IDE，然后点击`Sketch`->`Include Library`->`Manage Libraries...`

### 2. 在搜索框输入`M5Stack`，并搜索

<figure class="thumbnails">
    <img src="assets/img/getting_started_pics/m5stack_core/get_started_with_arduino_m5core/mac/macOS_install_m5stack_lib.webp" alt="Screenshot of coverpage" title="Cover page">
</figure>

### 3. 如果显示如下，则点击`Update`.

**但是如果显示`Install`，这意味着您之前还没安装M5Stack库，所以点击`Install`进行安装。**

<figure class="thumbnails">
    <img src="assets/img/getting_started_pics/m5stack_core/get_started_with_arduino_m5core/mac/macOS_search_m5stack.webp" alt="Screenshot of coverpage" title="Cover page">
</figure> -->


1. [安装UIFlow-Desktop-IDE](#安装UIFlow-Desktop-IDE)

2. [基本配置](#基本配置)

3. [使用案例](#使用案例)

4. [附加功能](#附加功能)



## 安装UIFlow-Desktop-IDE

>点击下方对应自己操作系统的 **UIFlow-Desktop-IDE** 进行下载.

<div class="link">
 <h4><span>UIFlow Desktop IDE:</span></h4>
    <p>
    <a href="https://m5stack.oss-cn-shenzhen.aliyuncs.com/resource/software/UIFlow-Desktop-IDE.zip" target="_blank" rel="noopener noreferrer"><img src="https://cdn.shopify.com/s/files/1/0056/7689/2250/files/windows_89cc6ea0-2a3c-4327-97e5-8f51f448c38b_icon.webp?v=1557026574" alt="">Windows</a>
    <a href="https://m5stack.oss-cn-shenzhen.aliyuncs.com/resource/software/UIFlow-Desktop-IDE_MacOS.zip" target="_blank" rel="noopener noreferrer"><img src="https://cdn.shopify.com/s/files/1/0056/7689/2250/files/mac_large.webp?v=1557026570" alt="">MacOS</a>
    <a href="https://m5stack.oss-cn-shenzhen.aliyuncs.com/resource/software/UIFlow-Desktop-IDE_Linux.zip" target="_blank" rel="noopener noreferrer"><img src="https://cdn.shopify.com/s/files/1/0056/7689/2250/files/linux_icon.webp?v=1557026584" alt="">Linux</a>
    </p>
</div>

## 基本配置

>将下载好的UIFlow Desktop IDE压缩包解压，双击执行应用程序.

<img src="assets/img/related_documents/UIFlow_Desktop_IDE/Desktop_IDE_01.webp">

?>软件启动后，将自动检测你的电脑是否安装有USB驱动（CP210X），点击Install，根据提示，进行安装.

<img src="assets/img/related_documents/UIFlow_Desktop_IDE/Desktop_IDE_02.webp">

>驱动安装完成后，将自动进入UIFlow Desktop IDE并自动弹出配置框，此时将M5设备通过Tpye-C数据线连接至电脑.

<img src="assets/img/related_documents/UIFlow_Desktop_IDE/Desktop_IDE_03.webp">

!>使用UIFlow Desktop IDE需要M5设备搭载UIFlow固件且进入**USB编程模式**.

>单击设备左侧电源键重启，进入菜单后快速选择Setup，进入配置页面，选择**USB mode**.

<img src="assets/img/related_documents/UIFlow_Desktop_IDE/Desktop_IDE_04.webp">

>选择好对应的端口，与编程设备，点击OK进行连接.

<img src="assets/img/related_documents/UIFlow_Desktop_IDE/Desktop_IDE_05.webp">

!>如果你使用的是M5StickC请按以下说明操作

>长按机身左侧的电源键2秒进行开机，在出现UIFlow Logo后，快速单击Home键（中心M5按键），进入配罝页面。按机身右侧按键将选项切换至Setting，按下Home键确认。按右侧按键切换选项至USB mode,
按下Home键确认，进入USB编程模式.在IDE中选择相应的COM口与设备，点击连接。

<img src="assets/img/related_documents/UIFlow_Desktop_IDE/Desktop_IDE_00.webp">

## 使用案例

>完成连接后，就可以开始编程创作了，拖拽左侧的程序块列表中的程序块到编程区域，完成程序编辑后点击右上角的运行按钮，执行程序.

<img src="assets/img/related_documents/UIFlow_Desktop_IDE/Desktop_IDE_06.webp">

## 附加功能

!>UIFlow Desktop IDE除了是一个强大的程序编辑器以外，它同时还集成了**USB驱动**安装、**M5Burner**烧录工具等功能，无需另外下载其他的软件，一站式解决编程环境的部署需求.

>在IDE的上方菜单栏，能够找到对应的附加功能，点击即可打开使用，关于M5Burner的使用方式，详情可以参考我们的另一篇文档 ["烧录固件"](zh_CN/related_documents/M5Burner).

<img src="assets/img/related_documents/UIFlow_Desktop_IDE/Desktop_IDE_07.webp">

<style>

.link a{

    padding-left: 13%;

}

</style>

