# 几何图形
__________________________

#### 功能说明

>UIFlow提供了几种可编辑的几何图形，可以用它们去绘制一些图案

><img src="/image/Display/UI.jpg" width="30%">

* __Title__
显示一个标题栏

* __Label__
显示一个文本框

* __Rect__
显示一个矩形

* __Circle__
显示一个圆形

* __image__
显示一张图片


#### 添加与删除

>添加元素

><img src="/image/Display/UI_user1.gif" width="30%">

>删除元素

><img src="/image/Display/UI_user2.gif" width="30%">

#### 编辑元素

>方法一：在往屏幕中添加元素后，单击元素，在弹出的属性框中，可以设定初始参数（坐标，颜色，长宽等）

><img src="/image/Display/UI_user3.gif" width="30%">

>方法二：在往屏幕中添加元素后，点击UI选项，使用对应的程序Block，可以在程序中对元素进行操作

><img src="/image/Display/UI_user4.gif" width="50%"> 

# Emoji
__________________________

#### 功能说明

>UIFlow提供可以快速绘制图案的像素点编辑Block，通过拼凑像素点的形式可以绘制各种各样的图案


><img src="/image/Display/Emoji.png" width="30%"> 
* __Set emoji map in__
设置方阵像素点，勾选方阵中的小方格对应显示对应的像素点

* __Set line x row x in__
设置单个像素点，选择行与列，对应显示对应的单个像素点


#### 使用方法

>将Emoji Block添加到程序中，勾选小方格激活像素点

><img src="/image/Display/Emoji_user.gif" width="50%"> 


# Graphic绘图
__________________________

#### 功能说明

>除了几种可以直接使用的几何图形，还可以使用Graphic绘制一些复杂的图形

><img src="/image/Display/Graphic_Block.png" width="50%"> 


* __LCD clear__
清除屏幕内容

* __LCD fill__
设置屏幕底色

* __LCD print x,y__
在屏幕指定位置打印文本

* __Font__
设置文本的字体

* __LCD pixel__
在屏幕指定位置绘制一个像素点

* __line__
绘制直线

* __rect__
绘制矩形

#### 注意
>M5GO的屏幕分辨率为320X240


#### 使用案例

>使用Graphic功能，绘制一个三角形,并修改颜色为红色

><img src="/image/Display/Graphic_user.gif" width="50%"> 


# image图片显示
__________________________

#### 功能说明

>添加一些本地图片，到屏幕上显示（添加要求：大小为25K以下，格式为jpg或bmp）

#### 添加图片

>首先用APIKey建立起设备与UIFlow的连接，点击页面右上角的云保存按钮，点击image选项，点击Add image从本地添加图片，等待图片上传完成

><img src="/image/Display/image_user1.gif" width="50%"> 

#### 显示图片

>拖动一个image元素到屏幕上，单击元素，在弹出的属性框中选择显示的图片

><img src="/image/Display/image_user2.gif" width="50%"> 

#### 图片操作

>除了在属性框中对image进行编辑以外，可以添加UI选项中的image Block在程序中进行操作

><img src="/image/Display/image_user3.gif" width="50%"> 