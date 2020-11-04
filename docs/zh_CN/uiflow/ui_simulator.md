<el-card class="box-card" style="margin-bottom:20px">
    <div slot="header" class="clearfix">
        <span>目录</span>
        <i class="el-icon-s-management" style="float: right;"></i>
    </div>
    <div style="margin: 0px 10px 10px 0px ;display:inline-block;">
        <el-tag onclick="page_move('ui-elements')">UI元素</el-tag>
        <el-tag onclick="page_move('unicode')">Unicode</el-tag>
        <el-tag onclick="page_move('emoji')">Emoji</el-tag>
        <el-tag onclick="page_move('graphic')">Graphic</el-tag>
        <el-tag onclick="page_move('displaying-images')">图像显示</el-tag>
        <el-tag onclick="page_move('screen')">屏幕控制</el-tag>
    </div>
</el-card>

## UI Elements

#### 功能说明

>UIFlow提供了几种可编辑的UI元素，可以用它们去绘制一些图案或是显示文本

><img src="/image/Display/UI.webp" width="30%">

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


## Unicode

>UIFlow固件中集成了Unicode中的一些常用字符库，因此你可以在编辑文字直接输入进行使用。

><img src="/image/Display/unicode.webp" width="50%"> 

>以下为UIFlow定制字库中不同字符对应的地址。


<table class="table-1">
      <thead>
      <tr>
         <th>开始地址</th>
         <th>结束地址</th>
         <th>描述</th>
         <th>字符参考</th> 
      </tr>
      </thead>
      <tbody>
      <tr>
         <td>0x3040</td>
         <td>0x30FF</td>
         <td>平假名和片假名</td>
         <td>/</td>
      </tr>
      <tr>
         <td>0x0400</td>
         <td>0x04FF</td>
         <td>俄文（西里尔字母）</td>
         <td>/</td>
      </tr>
      <tr>
         <td>0x0020</td>
         <td>0x007F</td>
         <td>基本拉丁字母</td>
         <td>/</td>
      </tr>
      <tr>
         <td>0x2100</td>
         <td>0x214F</td>
         <td>字母式符号</td>
         <td><a href="https://unicode-table.com/en/blocks/letterlike-symbols/">点击查看详情</a></td>
      </tr>
      <tr>
         <td>0x2150</td>
         <td>0x218F</td>
         <td>数字形式</td>
         <td><a href="https://unicode-table.com/en/blocks/number-forms/">点击查看详情</a></td>
      </tr>
      <tr>
         <td>0x2190</td>
         <td>0x21FF</td>
         <td>箭头</td>
         <td><a href="https://unicode-table.com/en/blocks/arrows/">点击查看详情</a></td>
      </tr>
      <tr> 
         <td>0x2200</td>
         <td>0x23f0</td>
         <td>数学运算符<br>杂项工业符号</td>
         <td><a href="https://unicode-table.com/en/blocks/mathematical-operators/
https://unicode-table.com/en/blocks/miscellaneous-technical/">点击查看详情</a></td>
      </tr>
      <tr>
         <td>0x2460</td>
         <td>0x24FF</td>
         <td>带圈或括号的字母数字</td>
         <td><a href="https://unicode-table.com/en/blocks/enclosed-alphanumerics/">点击查看详情</a></td>
      </tr>
      <tr>
         <td>0x2500</td>
         <td>0x257F</td>
         <td>制表符</td>
         <td><a href="https://unicode-table.com/en/blocks/box-drawing/">点击查看详情</a></td>
      </tr>
      <tr>
         <td>0x2580</td>
         <td>0x259F</td>
         <td>方块元素</td>
         <td><a href="https://unicode-table.com/en/blocks/block-elements/">点击查看详情</a></td>
      </tr>
      <tr>
         <td>0x2600</td>
         <td>0x27BF</td>
         <td>杂项符号</td>
         <td><a href="https://unicode-table.com/en/blocks/miscellaneous-symbols/">点击查看详情</a></td>
      </tr>
      <tr>
         <td>0xFF00</td>
         <td>0xFFEF</td>
         <td>半角及全角形式</td>
         <td><a href="https://unicode-table.com/en/blocks/halfwidth-and-fullwidth-forms/">点击查看详情</a></td>
      </tr>
      <tr>
         <td>0x25A0</td>
         <td>0x25FF</td>
         <td>几何图形</td>
         <td><a href="https://unicode-table.com/en/blocks/geometric-shapes/">点击查看详情</a></td>
      </tr>
      <tr>
         <td>0x2000</td>
         <td>0x206F</td>
         <td>常用标点</td>
         <td><a href="https://unicode-table.com/en/blocks/general-punctuation/">点击查看详情</a></td>
      </tr>
      <tr>
         <td>0x0370</td>
         <td>0x03FF</td>
         <td>希腊字母和古埃及语(科普特语)</td>
         <td><a href="https://unicode-table.com/en/blocks/greek-coptic/">点击查看详情</a></td>
      </tr>
      <tr>
         <td>0x0080</td>
         <td>0x00FF</td>
         <td>拉丁文补充1</td>
         <td><a href="https://unicode-table.com/en/blocks/latin-1-supplement/">点击查看详情</a></td>
      </tr>
      <tr>
         <td>0xFF00</td>
         <td>0xFFEF</td>
         <td>半角及全角形式</td>
         <td><a href="https://unicode-table.com/cn/blocks/halfwidth-and-fullwidth-forms/">点击查看详情</a></td>
      </tr>
      <tr>
         <td colspan = "4" style="text-align:center">中文GB2312 + 常用日文汉字  共计7857字</td>
      </tr>
    </tbody>
</table>


## Emoji

#### 功能说明

>UIFlow提供可以快速绘制图案的像素点编辑Block，通过拼凑像素点的形式可以绘制各种各样的图案


><img src="/image/Display/Emoji.webp" width="30%"> 
* __Set emoji map in__
设置方阵像素点，勾选方阵中的小方格对应显示对应的像素点

* __Set line x row x in__
设置单个像素点，选择行与列，对应显示对应的单个像素点


#### 使用方法

>将Emoji Block添加到程序中，勾选小方格激活像素点

><img src="/image/Display/Emoji_user.gif" width="50%"> 


## Graphic

#### 功能说明

>除了几种可以直接使用的几何图形，还可以使用Graphic绘制一些复杂的图形

><img src="/image/Display/Graphic_Block.webp" width="50%"> 


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


## Displaying images

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


## SCREEN

#### 功能说明

>对屏幕显示进行操作如调节亮度，改变背景色，旋转屏幕等。

#### 设置屏幕背景颜色

>设置屏幕的背景颜色，可以与UI模拟器一同使用

><img src="/image/Display/Screen.webp" width="30%">

* __Set Screen backgroundColor__
设置屏幕背景颜色

* __Set screen rotate mode__
设置屏幕旋转角度,默认值为1，如果修改为其他值，屏幕将逆时针旋转

* __Set screen brightness__
设置屏幕亮度
