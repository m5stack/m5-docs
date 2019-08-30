# V-Training {docsify-ignore-all}


<img src="assets\img\related_documents\v-training\v_training.png" width="100%">

**[1. 烧录固件](#烧录固件)**

**[2. 插入SD卡](#使用SD卡)**

**[3. 训练素材拍摄](#训练素材拍摄)**

**[4. 数据上传云端](#数据上传云端)**

**[5. 下载识别模型](#下载识别模型)**

**[6. 运行识别程序](#运行识别程序)**


## 烧录固件

<h4><mark>已经烧录了固件程序的用户请直接从第二步开始</mark></h4>

### EasyLoader <span class="badge badge-secondary">可选</span>

<img src="https://m5stack.oss-cn-shenzhen.aliyuncs.com/image/EasyLoader_logo.png" width="100px" style="margin-top:20px">

<a href="https://m5stack.oss-cn-shenzhen.aliyuncs.com/EasyLoader/M5Core/M5StickV/EasyLoader_M5StickV_0830.exe"><button type="button" class="btn btn-primary">点击下载EasyLoader</button></a>

>1.EasyLoader是一个简洁快速的程序烧录器，每一个产品页面里的EasyLoader都提供了一个与产品相关的案例程序，对于不需要对固件进行定制或进行其他操作的用户，使用EasyLoader为M5StickV烧录固件，会是一个最简洁的方案（**目前EasyLoader仅适用于Windows操作系统**）.

>2.下载软件后，双击运行应用程序，将M5设备通过数据线连接至电脑,选择端口参数，点击 **"Burn"** 即可开始烧录

### 下载固件

> 需要指定烧录文件的用户可以选用**Kflash**进行固件烧录.

<a href="https://m5stack.oss-cn-shenzhen.aliyuncs.com/resource/docs/M5StickV_Firmware_0830_beta.kfpkg"><button type="button" class="btn btn-primary">点击下载固件文件</button></a>

### Kflash GUI

>1.点击下方对应自己操作系统的 Kflash_GUI烧录工具进行下载.

<div class="link">
 <h4><span>Kflash_GUI:</span></h4>
    <p>
    <a href="https://github.com/sipeed/kflash_gui/releases/download/v1.5.3/kflash_gui_v1.5.3_windows.7z" target="_blank" rel="noopener noreferrer"><img src="https://cdn.shopify.com/s/files/1/0056/7689/2250/files/windows_89cc6ea0-2a3c-4327-97e5-8f51f448c38b_icon.png?v=1557026574" alt="">Windows</a>
    <a href="https://github.com/sipeed/kflash_gui/releases/download/v1.5.2/kflash_gui_v1.5.2_macOS.dmg" target="_blank" rel="noopener noreferrer"><img src="https://cdn.shopify.com/s/files/1/0056/7689/2250/files/mac_large.png?v=1557026570" alt="">MacOS</a>
    <a href="https://github.com/sipeed/kflash_gui/releases/download/v1.5.3/kflash_gui_v1.5.3_linux.tar.xz" target="_blank" rel="noopener noreferrer"><img src="https://cdn.shopify.com/s/files/1/0056/7689/2250/files/linux_icon.png?v=1557026584" alt="">Linux</a></p>
</div>

>2.将设备通过Tpye-C数据线连接至电脑，双击打开**Kflash_GUI**应用程序,选择对应的设备端口、开发板类型(M5StickV)、固件程序、波特率. 点击下载，开始烧录 .

<img src="assets\img\getting_started_pics\m5stickv\kflash_gui_01.jpg">

### Kflash

>3.对于习惯使用命令行操作的用户来说还可以选择Kflash作为固件烧录工具.[点击此处查看详情](https://github.com/kendryte/kflash.py)

## 插入SD卡

### boot程序

> 拍摄训练素材需要使用到SD卡，用户需下载boot程序压缩包，并将压缩包内的所有文件解压放置到SD卡中（M5StickV对SD卡的选型有所要求，[点击此处查看支持类型](zh_CN/core/m5stickv?id=sd卡测试)）


<a href="http://m5trainer-container.oss-cn-shenzhen.aliyuncs.com/VTraining-Client-VerA02B01.zip"><button type="button" class="btn btn-primary">点击下载boot程序压缩包</button></a>

<img src="assets\img\related_documents\v-training\1.jpg" width="60%">


## 训练素材拍摄

### 素材拍摄

>开机前插入SD卡，用于储存图片素材，长按左侧电源键进行开机，当屏幕出现，如下图Training字样时，则表示成功进入拍摄程序.

<img src="assets\img\related_documents\v-training\2.jpg" width="60%">

>目前程序一共提供了10组Class供用户拍摄训练素材，每一组Class代表着一种识别对象.<mark>为了获得更好的训练效果，用户必须要拍摄3组以上的Class（三个以上的识别对象).</mark>

>屏幕上方的导航栏将实时显示当前的Class序号以及拍摄图片数量，按下HOME键进行图片拍摄，机身右侧的按键则用于切换Class序号.

<img src="assets\img\related_documents\v-training\3.jpg" width="60%">


>在拍摄训练素材时，请尽可能保持素材拍摄的环境光线情况与实际识别应用场景一致，拍摄距离建议将识别对象刚好完整填入屏幕，且背景无其他杂物.

<img src="assets\img\related_documents\v-training\4.jpg" width="100%">

<mark>注意：为了保证识别的准确率，每组Class拍摄素材张数需要超过35张，否则在进行云端训练时将不给予通过. 素材的数量越多，识别训练的效果越好，识别率越高</mark>

### 素材检查与压制

>素材拍摄完成后，将M5StickV关机，取出SD卡，通过读卡器将SD中的图片素材（"train"、"vaild"两个文件夹），复制至电脑端.

<img src="assets\img\related_documents\v-training\5.jpg" width="60%">

>"train"、"vaild"两个文件夹中的Class序号文件夹目录是保持一致的，当切换Class并拍摄素材时，程序将会在"train"、"vaild"中同时创建Class序号一致的文件夹，并按照存放规则将所拍摄的图片分别存储到"train"、"vaild"各自目录下的Class文件夹中.

><mark>在压制打包前除了检查图片内容的正确性以外，必须确保"train"、"vaild"两个文件夹中同一Class序号目录里的素材图片总和大于35.数量总和小于35时的Class序号目录请自行删除或是备份处理.</mark>完成了检查工作，接下来要做就是素材文件的压制.将"train"、"vaild"两个文件夹通过压制工具压制为"zip"格式的压缩包.

## 数据上传云端

>[点击此处访问数据上传页面](http://v-training.m5stack.com/)，按照信息提示填写个人邮箱，点击上传文件（上传文件大小控制在200MB以内，且必须为zip格式.）

<img src="assets\img\related_documents\v-training\6.jpg" width="60%">

>上传成功后，文件将会进入请求队列，页面的左下方的表格将会显示出当前的队列情况.

<img src="assets\img\related_documents\v-training\7.jpg" width="60%">


## 下载识别模型

>等待训练完成，程序文件下载地址将会以邮件的形式发送到上传文件时预留的邮箱中去.复制邮件中的下载地址，下载程序文件到本地进行解压，并复制到SD卡中去.

<img src="assets\img\related_documents\v-training\8.jpg" width="60%">

<img src="assets\img\related_documents\v-training\9.jpg" width="60%">

## 运行识别程序

>最后将SD卡插入M5StickV，开机即可自动运行程序.


<img src="assets\img\related_documents\v-training\10.jpg" width="60%">

>默认程序将把物体按照Class序号进行识别，并显示在屏幕上，用户可以通过修改boot.py文件，修改显示的信息.

<img src="assets\img\related_documents\v-training\11.jpg" width="60%">


<style>

.link a{

    padding-left: 13%;

}

</style>
