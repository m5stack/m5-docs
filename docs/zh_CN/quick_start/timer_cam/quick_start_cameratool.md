# Camera-Tool上手指南

## 软件介绍

>Camera-Tool用于控制Timer-CAM摄像头进行图片拍摄，目前支持串口与WiFi两种设备连接模式。

## 下载软件

>点击下方图标下载Camera-Tool（目前仅提供windows10版本）

<div class="files_download">
   <p class="item">
      <a href="https://m5stack.oss-cn-shenzhen.aliyuncs.com/resource/software/cameraTools_V0.01.exe">
      <img src="/image/base/Windows_logo.webp" width="50">
      <span class="item-title">Windows10</span>
      </a>
   </p>
</div>

## 烧录固件

>`打开上位机软件`-->`将设备连接至电脑`-->`选择对应的端口`-->点击`Burner`进行烧录-->等待弹窗`successful`则表示烧录完成

<img src="assets\img\quick_start\timer_cam\camera_tool_01.webp" width="550px">
<img src="assets\img\quick_start\timer_cam\camera_tool_02.webp" width="550px">

## 串口模式

>串口模式下，设备通过USB连接至电脑，并通过Camera-Tool访问设备串口/获取图像。 

<img src="assets\img\quick_start\timer_cam\camera_tool_03.webp">

## WIFI模式

>切换至`HTTP`页签 将模式切换为`WiFi-HTTP`. 在弹出的配置框中填入`WiFi信息`，点击`ok`。等待配置完成后，上位机的HTTP页签下将会显示当前摄像头的IP地址，并以WiFi模式连接至摄像头。

<img src="assets\img\quick_start\timer_cam\camera_tool_04.webp">

?>处于WiFi模式下，与设备处于同一局域网的设备可以通过上位机软件填写设备IP/获取图像. 同一时间，仅允许有一个上位机连接。IP地址在串口模式连接后，将会显示在IP输入框中，你也可以通过串口工具进行查看。

<img src="assets\img\quick_start\timer_cam\camera_tool_05.webp">


## 拍摄图片

>点击折叠开关，能够展开拍摄操作菜单。操作栏中提供`拍摄`、`延时拍摄`、`设置图片保存路径`功能

<img src="assets\img\quick_start\timer_cam\camera_tool_06.webp">


## 参数调整

>左侧的配置菜单中提供了一系列的图像参数设置，用于调整图片的成像效果。

<img src="assets\img\quick_start\timer_cam\camera_tool_07.webp">


## 手机版APP

>网络模式下，还可以使用手机版APP进行图片拍摄与查看监控

<div class="files_download">
   <p class="item">
      <a href="https://m5stack.oss-cn-shenzhen.aliyuncs.com/resource/software/TimerCAM-App-Android.apk">
      <img src="/image/base/Windows_logo.webp" width="50">
      <span class="item-title">Android</span>
      </a>
   </p>
</div>

<script>
   anchor_search();
   scrollFunc();
</script>
