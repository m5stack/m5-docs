# M5Paper ToDo 使用教程

?>本教程适用于M5Paper

## 驱动安装

>程序烧录前，M5Paper用户请根据您使用的操作系统，点击下方按钮下载相应的CP210X驱动程序压缩包.在解压压缩包后，选择对应操作系统位数的安装包进行安装。

__下载CP210X驱动程序__

<div class="files_download">
   <p class="item">
      <a href="https://m5stack.oss-cn-shenzhen.aliyuncs.com/resource/drivers/CP210x_VCP_Windows.zip">
      <img src="/image/base/Windows_logo.webp" width="50">
      <span class="item-title">Windows10</span>
      </a>
   </p>

   <p class="item">
      <a href="https://m5stack.oss-cn-shenzhen.aliyuncs.com/resource/drivers/CP210x_VCP_MacOS.zip">
      <img src="/image/base/MacOS_logo.webp" width="50"> 
      <span class="item-title">MacOS</span>
      </a>
   </p>

   <p class="item">
      <a href="https://m5stack.oss-cn-shenzhen.aliyuncs.com/resource/drivers/CP210x_VCP_Linux.zip">
      <img src="/image/base/Linux_logo.webp" width="50"> 
      <span class="item-title">Linux</span>
      </a>
   </p>
</div>

><img src="/image/base/CP210X_install.gif " width="70%">


## 烧录工具

>请根据您所使用的操作系统，点击下方按钮下载相应的M5Burner固件烧录工具.解压打开应用程序。

<div class="files_download">
   <p class="item">
      <a href="https://m5stack.oss-cn-shenzhen.aliyuncs.com/resource/software/M5Burner.zip">
      <img src="/image/base/Windows_logo.webp" width="50">
      <span class="item-title">Windows10</span>
      </a>
   </p>

   <p class="item">
      <a href="https://m5stack.oss-cn-shenzhen.aliyuncs.com/resource/software/M5Burner_MacOS.zip">
      <img src="/image/base/MacOS_logo.webp" width="50"> 
      <span class="item-title">MacOS</span>
      </a>
   </p>

   <p class="item">
      <a href="https://m5stack.oss-cn-shenzhen.aliyuncs.com/resource/software/M5Burner_Linux.zip">
      <img src="/image/base/Linux_logo.webp" width="50"> 
      <span class="item-title">Linux</span>
      </a>
   </p>
</div>

<img src="assets/img/getting_started_pics/how_to_burn_firmware/M5Burner/M5Burner_01.webp">

?>注意：MacOS用户安装完成后请将应用放入Application文件夹内，如下图所示。

><img src="/image/base/application.webp" width="70%"> 

?>注意：Linux用户请切换至解压文件路径下，在终端中运行`./M5Burner`, 运行应用。

## 固件烧录

>1.双击打开Burner烧录工具，①在左侧菜单中选择对应的设备类型`M5Paper`，选择`TODO`固件，点击下载按钮进行下载。

<img src="assets\img\quick_start\m5paper\todo_01.webp">

>2.然后将M5设备通过Type-C数据线连接到电脑，选择对应的COM口，波特率可使用M5Burner中的默认配置，点击"Burn"开始烧录。当烧录日志提示`Burn Successfully`时，则表示固件已经烧录完成。

<img src="assets\img\quick_start\coreink\uiflow_03.webp">

>3.烧录完成后，设备将自动重启。首次启动，将会显示介绍页面，其中包含的注意事项。 点击屏幕进入下一步语言配置, 除了英文以外的两种语言均需要从TF卡加载字体文件(字体文件命名必须为`Font.ttf`)。 [示例ttf文件下载地址](https://m5stack.oss-cn-shenzhen.aliyuncs.com/resource/example/Font.ttf). 时区配置。点击左上角`Exit`进入下一页。。

<img src="assets\img\quick_start\m5paper\todo_02.webp">

>4.选择将要连接的WiFi网络，输入密码进行连接。连接成功后，将会自动生成设备码。 

<img src="assets\img\quick_start\m5paper\todo_03.webp">

>5.扫码M5Paper屏幕上显示的二维码, 进入设备绑定页面，填入设备码并绑定个人microsoft账号，等待绑定完成。

<img src="assets\img\quick_start\m5paper\todo_04.webp">
<img src="assets\img\quick_start\m5paper\todo_05.webp">

>6.绑定成功后，就可以通过microsoft官方todo应用添加任务，并同步到M5Paper上显示了。(M5Paper进入列表后，按下拨轮中心按钮，可刷新列表。)  [下载Microsoft ToDo App](https://to-do.microsoft.com/tasks/)

<img src="assets\img\quick_start\m5paper\todo_06.webp">

## Code

- **Arduino** 
   - [M5EPD_Todo](https://github.com/m5stack/M5EPD_Todo)
   - [M5EPD-Lib](https://github.com/m5stack/M5EPD)

<script>

   anchor_search();
   scrollFunc();

</script>