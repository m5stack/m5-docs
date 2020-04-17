# V-Training {docsify-ignore-all}


<img src="assets\img\related_documents\v-training\v_training.webp" width="100%">

目前V-Training提供了两种模型训练模式"Classification"（识别对象并返回其对应的分类）"Detection(采用Yolov3算法，识别对象位于图像中位置并绘制线框)"，用户可以根据自己的使用场景自由选择使用，下方将介绍这两种模式的模型训练方式。

## 烧录固件

已经烧录了M5StickV固件程序的设备请直接从步骤二开始，[未烧录固件的用户请单击此处查看固件烧录教程](zh_CN/quick_start/m5stickv/m5stickv_quick_start)

## 分类模式

### boot程序

> 拍摄训练素材需要使用到SD卡，用户需下载boot程序压缩包，并将压缩包内的所有文件解压放置到SD卡中（M5StickV对SD卡的选型有所要求，[点击此处查看支持类型](zh_CN/core/m5stickv?id=sd卡测试)）


<a href="https://m5stack.oss-cn-shenzhen.aliyuncs.com/resource/docs/VTraining-Client-VerA02B01.zip"><button type="button" class="btn btn-primary">点击下载boot程序压缩包</button></a>

<img src="assets\img\related_documents\v-training\1.webp" width="60%">


### 素材拍摄

>开机前插入SD卡，用于储存图片素材，长按左侧电源键进行开机，当屏幕出现，如下图Training字样时，则表示成功进入拍摄程序.

<img src="assets\img\related_documents\v-training\2.webp" width="60%">

>目前程序一共提供了10组Class供用户拍摄训练素材，每一组Class代表着一种识别对象.<mark>为了获得更好的训练效果，用户必须要拍摄3组以上的Class（三个以上的识别对象).</mark>

>屏幕上方的导航栏将实时显示当前的Class序号以及拍摄图片数量，按下HOME键进行图片拍摄，机身右侧的按键则用于切换Class序号.

<img src="assets\img\related_documents\v-training\3.webp" width="60%">


>在拍摄训练素材时，请尽可能保持素材拍摄的环境光线情况与实际识别应用场景一致，拍摄距离建议将识别对象刚好完整填入屏幕，且背景无其他杂物.

<img src="assets\img\related_documents\v-training\4.webp" width="100%">

<mark>注意：为了保证识别的准确率，每组Class拍摄素材张数需要超过35张，否则在进行云端训练时将不给予通过. 素材的数量越多，识别训练的效果越好，识别率越高</mark>

### 素材检查与压制

>素材拍摄完成后，将M5StickV关机，取出SD卡，通过读卡器将SD中的图片素材（"train"、"vaild"两个文件夹），复制至电脑端.

<img src="assets\img\related_documents\v-training\5.webp" width="60%">

>"train"、"vaild"两个文件夹中的Class序号文件夹目录是保持一致的，当切换Class并拍摄素材时，程序将会在"train"、"vaild"中同时创建Class序号一致的文件夹，并按照存放规则将所拍摄的图片分别存储到"train"、"vaild"各自目录下的Class文件夹中.

><mark>在压制打包前除了检查图片内容的正确性以外，必须确保"train"、"vaild"两个文件夹中同一Class序号目录里的素材图片总和大于35.数量总和小于35时的Class序号目录请自行删除或是备份处理.</mark>完成了检查工作，接下来要做就是素材文件的压制.将"train"、"vaild"两个文件夹通过压制工具压制为"zip"格式的压缩包.

### 数据上传云端

>[点击此处访问数据上传页面](http://v-training.m5stack.com/)，按照信息提示填写个人邮箱，点击上传文件（上传文件大小控制在200MB以内，且必须为zip格式.）

<img src="assets\img\related_documents\v-training\6.webp" width="60%">

>上传成功后，文件将会进入请求队列，页面的左下方的表格将会显示出当前的队列情况.

<img src="assets\img\related_documents\v-training\7.webp" width="60%">


### 下载识别模型

>等待训练完成，程序文件下载地址将会以邮件的形式发送到上传文件时预留的邮箱中去.复制邮件中的下载地址，下载程序文件到本地进行解压，并复制到SD卡中去.

<img src="assets\img\related_documents\v-training\8.webp" width="60%">

<img src="assets\img\related_documents\v-training\9.webp" width="60%">

### 运行识别程序

>最后将SD卡插入M5StickV，开机即可自动运行程序.


<img src="assets\img\related_documents\v-training\10.webp" width="60%">

>默认程序将把物体按照Class序号进行识别，并显示在屏幕上，用户可以通过修改boot.py文件，修改显示的信息.

<img src="assets\img\related_documents\v-training\11.webp" width="60%">

## 检测模式(Yolov3)

### 素材拍摄

>与上方分类模式训练的方法类似，在检测模式（Yolov3）中我们仍需要使用摄像头拍摄素材(这里可以继续沿用分类模式中的拍摄程序)。不同的地方在于，在该训练模式下，同一个图像画面中允许出现多个识别对象。因此，拍摄多个对象时则无需分组拍摄。<mark>拍摄的素材总量需要大于100。</mark>

### LabelIMG素材标记

>拍摄完成后,我们借助标注工具LabelIMG对素材中的识别对象进行标记，并生成标记文件。用户可自行安装Python环境，在命令行中运行下方指令，通过其自带的pip包管理工具安装LabelIMG。

```
pip install LabelIMG
```

>安装完成后，命令行运行"LabelIMG"既可打开标记工具。

```
LabelIMG
```

>1.将标记工具切换为Yolo模式--->2.打开图片存放目录--->3.选择标记文件存放目录--->设置自动保存模式。

<img src="assets\img\related_documents\v-training\yolov3_01.webp">

>按下"W"键，开始绘制对象边框，并为对象命名。(添加命名后，将记录添加到列表中，在之后的标记中可直接选择使用，无需重复输入)，点击下一个按钮，切换图片，直到将素材全部标记完成。

<img src="assets\img\related_documents\v-training\yolov3_02.webp">

>除了添加标记文件以外，我们还需要手动添加一个v-training.config配置文件，用来告诉训练服务，我们这次的训练中包含了多少个识别对象。（如上方图案例中标记两个识别对象，我们则需要在配置文件中填写类目数量为2，格式如下）

```
{
    "classes":2
}
```
>完成以上操作，将所有素材放置至同一个文件夹，参考下方目录结构。全选所有文件，压缩成zip格式的压缩包，用于上传训练。

```
folder----------------------
        |--v-training.config
        |--1.jpg
        |--1.txt
        |--2.jpg
        |--2.txt
        .....
```

>完成以上操作，将所有素材放置至同一个文件夹，参考下方目录结构。全选所有文件，压缩成zip格式的压缩包，用于上传训练。

>素材压缩包上传及模型下载方式，可参照上方分类模式训练的操作。检测模式训练完后将返回`boot.py`,和`xxxx.model`文件。将其复制到SD卡中，然后将SD卡插入设备，开机既可以运行识别程序。

## 操作建议

>1. 如果您的损失曲线如下所示，则说明您的数据集有问题，您需要清除它或添加更多图片。如果一切正常，并且添加更多图片无济于事，则我们的网络结构可能无法解决您的问题。

<img src="assets\img\related_documents\v-training\12.webp" width="40%">


<img src="assets\img\related_documents\v-training\13.webp" width="40%">

>2. 如果您的损失曲线如下所示，则似乎卷积神经网络根本没有收敛。您的数据集中可能存在一些严重问题，请检查数据集。如果一切正常，并且添加更多图片没有帮助，则我们的网络结构可能无法解决您的问题。

<img src="assets\img\related_documents\v-training\14.webp" width="40%">

>3. 如果您的损失曲线如下所示，但是识别结果仍然不好，则可能需要添加更多图片，然后重试；如果一切正常，并且添加更多图片没有帮助，则我们的网络结构可能无法解决您的问题。

<img src="assets\img\related_documents\v-training\15.webp" width="40%">

>4. 如果您得到的结果不是很理想，则可能需要尝试再添加几张图片并再次进行训练。这次网络可能会融合得更好。

### 常见问题（FAQ）：

>1. “CONTENT: Number of Classes presented in Train and Vaild dataset is not equal.”
Or
“CONTENT: Train or Valid folder not found. If you are using the M5StickV software, make sure you reach enough image counts of 35 per class.”
Or
“CONTENT: Number of Classes presented in Train and Vaild dataset is not equal.”

解答: 你的zip压缩文件内应该只包含两个文件夹，名字为train和valid（vaild也是可以的）
<img src="assets\img\related_documents\v-training\16.webp" >
在每个文件夹中，您都有几个按类命名的文件夹（类只能是1到10之间的数字）。train和valid文件夹内的文件夹数量应该相同。文件夹的名称也是对应的，从1开始。
<img src="assets\img\related_documents\v-training\17.webp" >

>2. “CONTENT: Lake of Enough Valid Dataset, Only 16 pictures found, but you need 20 in total.”
Or
“CNTENT: Lake of Enough Train Dataset, Only 43 pictures found, but you need 45 in total.”

解答: 你的train或valid文件夹中没有足够的照片。您需要添加更多照片。或者您不小心添加了一个额外的类。

>3. “CONTENT: Number of Classes should larger or equal to two.”

解答: 抱歉，不支持单个类，您的train和valid文件夹中至少需要有两个或多个类文件夹。

>4. “CONTENT: Unexpected error happened during checking dataset, cannot identify image file 'dataset_tmp/xxxxxxxx_dataset/train/2/1.webp'”

解答: 系统在处理图像时无法读取图像。您可能需要替换这张图片。


<script>
   anchor_search();
   scrollFunc();
</script>
