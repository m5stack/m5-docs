# V-function

?>本教程适用于M5StickV/UnitV

<el-steps :active="5" simple>
  <el-step onclick="page_move('功能介绍')" title="功能介绍" icon="el-icon-guide"></el-step>
  <el-step onclick="page_move('烧录固件')" title="烧录固件" icon="el-icon-download"></el-step>
  <el-step onclick="page_move('uiflow引用')" title="UIFlow引用" icon="el-icon-monitor"></el-step>
  <el-step onclick="page_move('案例程序')" title="案例程序" icon="el-icon-s-promotion"></el-step>
  <el-step onclick="page_move('更多内容')" title="更多内容" icon="el-icon-tickets"></el-step>
</el-steps>


## 功能介绍

V-Function是由M5Stack团队针对V系列设备开发的多个**视觉识别**功能固件，基于不同的功能固件(对象追踪，移动检测等)，用户能够快速的进行视觉识别的功能的搭建。本教程将向你介绍，如何烧录固件至你的设备中，并通过UIFlow图形化编程进行调用。

<el-card class="box-card" style="margin-bottom:20px">
    <div slot="header" class="clearfix">
        <span>功能列表</span>
        <i class="el-icon-s-management" style="float: right;"></i>
    </div>
    <div style="margin: 0px 10px 10px 0px ;display:inline-block;">
        <el-tag onclick="page_move('运动目标检测')">运动目标检测</el-tag>
        <el-tag onclick="page_move('目标追踪')">目标追踪</el-tag>
        <el-tag onclick="page_move('颜色追踪')">颜色追踪</el-tag>
        <el-tag onclick="page_move('人脸识别')">人脸识别</el-tag>
        <el-tag onclick="page_move('二维码识别')">二维码识别</el-tag>
        <el-tag onclick="page_move('条形码识别')">条形码识别</el-tag>
        <el-tag onclick="page_move('datamatrix码识别')">Datamatrix码识别</el-tag>
        <el-tag onclick="page_move('apriltag码识别')">Apriltag码识别</el-tag>
    </div>
</el-card>


## 烧录固件

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


>左侧设备栏选择设备为M5StickV/UnitV, 根据使用需求选择对应的功能固件, 进行下载。 将设备通过数据线连接至电脑，选择其对应的端口，点击Burn开始烧录。

<img src="assets\img\quick_start\v_function\v_function01.webp" width="80%"> 

>当烧录日志提示`Burn Successfully`时，则表示固件已经烧录完成。

<img src="assets\img\quick_start\v_function\v_function02.webp" width="80%"> 


## UIFlow引用

### 引入拓展

>烧录完功能固件的M5StickV/UnitV将作为Unit形式的从设备进行使用，因此用户需要使用其他的M5主机设备来与其交互。关于其他主控产品的UIFlow基本使用与操作，请访问其对应的产品文档页面进行获取。

>访问https://flow.m5stack.com/ 进入UIFlow。 点右侧功能面板中的Unit添加按钮，选中UnitV拓展进行添加。添加时，请根据实际使用的端口，进行配置。点击ok进行添加。

<img src="assets\img\quick_start\v_function\v_function03.webp" width="100%"> 

>添加完成后，在功能块菜单中的Unit选项，即可找到包含的功能块。将其拖拽至右侧编程区域，即可进行使用。更多内容请查看下方案例程序。

<img src="assets\img\quick_start\v_function\v_function04.webp" width="80%"> 

### 注意事项

>使用将从设备(M5StickV/UnitV)连接至主控后，主控端若存在数据获取不正常情况，请重启M5StickV/UnitV。等待固件启动成功后重新尝试连接。

## 案例程序


### 运动目标检测

>检测当面画面的变化情况，判断检测区域内的物体是否存在运动。

<img src="assets\img\quick_start\v_function\motion_detect.webp" width="50%"> 

>程序块介绍

- `init`
   + 初始化

- `Set detect threshold`
   + 设置变化率阈值：当变化量小于该数值的像素，将不被认为发生了变化，其变化量则不纳入画面变量率中。

- `Set detect mode`
   + dynamic： 动态检测模式,配置后将不断拍摄图片，对比前后两帧之间的变化
   + static：静态检测模式，执行后将拍摄并保存一张基准图片，后续的画面将不断与该图片进行对比。若需要拍摄新的基准图片，需要先切换回动态检测模式，然后再次执行静态检测模式设置。

- `Get rate of difference`
   + 画面变化率： 检测比较前后两帧之间变化像素的变化量。假设有2个像素发生了变化，像素A变化了27，像素B变化了10，则改数值为27+10=37。将两个像素点的R.G.B分量的差求值和即为变化量。

- `Get max difference`
   + 最高变化率：变化最剧烈的像素的变化量。 

>程序案例：启用动态检测模式，通过读取画面的最高变化率数值大小，判断画面内目标是否存在运动情况。当变化率数值大于预期值时，显示"Moved"，否则显示"Not Move"。屏幕显示当前的最高变化率数值。

<img src="assets\img\quick_start\v_function\motion_detect_example_01.webp" width="50%">

<img src="assets\img\quick_start\v_function\motion_detect_example_02.webp" width="50%">


### 运动目标检测-数据包格式

#### 回传JSON

```
{
    "FUNC": "MOTION DETECT V1.0",
    "DIFF TOTAL": 10000, //画面变动率
    "DIFF MAX": 75, // 最高变化率
    "TOTAL": 3, //边界框数量
    "0": {
        "x": 45,
        "y": 18,
        "w": 126,
        "h": 72,
        "area": 342 //该边界框内变化像素的数量
    },
    "1": {
        "x": 0,
        "y": 169,
        "w": 130,
        "h": 24,
        "area": 173
    },
    "2": {
        "x": 39,
        "y": 204,
        "w": 276,
        "h": 34,
        "area": 141
    }
}

```

#### 设置JSON

```
{
    "MOTION DETECT": 1.0, //功能标记，不可缺省
    "mode": "COMPUTE_MODE_STATIC", //可缺省 "COMPUTE_MODE_STATIC" 静态检测模式 or "COMPUTE_MODE_DYNAMIC" 动态检测模式
    "thr_w": 20, //可缺省 边界框宽阈值，[3,200]
    "thr_h": 20, //可缺省 边界框长阈值，[3,200]
    "stepx": 1, //可缺省 X扫描间隔，[0, 40]，设置为0则关闭边界框检测
    "stepy": 2, //可缺省 Y扫描间隔，[0, 40]，设置为0则关闭边界框检测
    "delta": 20, //可缺省 变化率阈值，[0, 99]
	 "merge": 10 //可缺省 边界框合并阈值，[0, 40]
}

```

### 目标追踪

>设置追踪目标，实时获取目标对象处于画面中位置信息。

<img src="assets\img\quick_start\v_function\target_detect.webp" width="50%">

>程序块介绍

- `init`
   + 初始化

- `Set trace area`
   + 设置框选目标，参数为当前目标所在图像上的位置 (尽可能选取具有显著颜色特征的目标)

- `Get trace area coordinate`
   + 读取框选目标所在图像上的坐标，返回值为列表形式，其中包含选框的左上角坐标x,y以及选框的宽度，高度

- `Get trace area center coordinate`
   + 读取框选目标所在图像上的中心坐标，返回值为列表形式，其中包含选框的中心坐标x,y

>程序案例：通过按键A设置框选目标，读取目标坐标值，用于控制屏幕上的矩形元素移动，模拟显示物体的运动轨迹。

<img src="assets\img\quick_start\v_function\target_detect_example_01.webp" width="50%">

<img src="assets\img\quick_start\v_function\target_detect_example_02.webp" width="50%">

### 目标追踪-数据包格式

#### 回传JSON

```
{
    "FUNC": "TARGET TRACKER V1.0",
    "x": 282,
    "y": 165,
    "w": 13,
    "h": 15
}

```
#### 设置JSON

```
{
    "TARGET TRACKER": " V1.0",
    "x": 282, //xywh均不可缺省
    "y": 165,
    "w": 13,
    "h": 15
}

```


### 颜色追踪

>设置LAB颜色阈值，追踪画面中符合阈值目标，并实时获取目标对象处于画面中位置信息。

<img src="assets\img\quick_start\v_function\color_trace.webp" width="50%">

>程序块介绍

- `init`
   + 初始化

- `Set color by L-min L-max A-min A-max B-min B-max`
   + 设置追踪的LAB阈值(LAB颜色空间的颜色值，在该范围外的颜色将会被过滤)

- `Get area pixel number`
   + 读取框选目标中符合LAB阈值的像素数量

- `Get area x coordinate`
   + 读取框选目标的左上角坐标x

- `Get area Y coordinate`
   + 读取框选目标的左上角坐标y
   
- `Get area width`
   + 读取框选对象的宽度

- `Get area height`
   + 读取框选对象的高度


#### 设置LAB阈值

>点击下方按钮，下载LAB取色工具。(目前仅支持windows系统)

<a href="https://m5stack.oss-cn-shenzhen.aliyuncs.com/resource/software/LAB-Color-Tool.exe"><el-button type="primary">下载LAB取色工具</el-button></a>

>使用手机或者是其他设备拍摄样本图片，双击打开应用，点击`open`-->`image`导入图片。

<img src="assets\img\quick_start\v_function\lab_color_tool_01.webp" width="50%">


>点击想要用作颜色识别的物体，记录下方生成的LAB数值，在UIFlow中配置使用。补充：拖动LAB数值的区间条，可以用于自定义LAB数值。


<img src="assets\img\quick_start\v_function\lab_color_tool_02.webp" width="50%">


>程序案例：设置识别的LAB阈值，实现颜色追踪效果，并获取被追踪对象在画面中的坐标数据，符合阈值的像素数量。

<img src="assets\img\quick_start\v_function\color_trace_example_01.webp" width="50%">

<img src="assets\img\quick_start\v_function\color_trace_example_02.webp" width="50%">


### 颜色追踪-数据包格式

#### 回传JSON

```
{
    "FUNC": "COLOR TRACKER V1.0",
    "TOTAL": 3, //边界框数量
    "0": {
        "x": 45,
        "y": 18,
        "w": 126,
        "h": 72,
        "area": 342 //该边界框内变化像素的数量
    },
    "1": {
        "x": 0,
        "y": 169,
        "w": 130,
        "h": 24,
        "area": 173
    },
    "2": {
        "x": 39,
        "y": 204,
        "w": 276,
        "h": 34,
        "area": 141
    }
}

```
#### 设置JSON

```
{
    "COLOR TRACKER": 1.0, //功能标记，不可缺省
    "thr_w": 20, //可缺省 边界框宽阈值，[3,200]
    "thr_h": 20, //可缺省 边界框长阈值，[3,200]
    "stepx": 1, //可缺省 X扫描间隔，[0, 40]，设置为0则关闭边界框检测
    "stepy": 2, //可缺省 Y扫描间隔，[0, 40]，设置为0则关闭边界框检测
    "merge": 10, //可缺省 边界框合并阈值，[0, 40]
    "Lmin": 0, //可缺省 L阈值下限 [0, 100]
    "Lmax": 0, //可缺省 L阈值上限 [0, 100]
    "Amin": 0, //可缺省 A阈值下限 [0, 255]
    "Amax": 0, //可缺省 A阈值上限 [0, 255]
    "Bmin": 0, //可缺省 B阈值下限 [0, 255]
    "Bmax": 0, //可缺省 B阈值上限 [0, 255]
}

```


### 人脸识别

>识别画面中的人脸信息，并返回识别个数，对象坐标，置信率。

<img src="assets\img\quick_start\v_function\face_detect.webp" width="30%">

>程序块介绍

- `init`
   + 初始化

- `Get face numbers`
   + 读取识别到的人脸数量

- `Get number N face detail`
   + 读取指定编号的人脸详情数据，返回格式为列表，其中包含人脸框选坐标，长度宽度，以及置信率

>程序案例：读取画面中人脸识别结果，以及置信率。

<img src="assets\img\quick_start\v_function\face_detect_example_01.webp" width="50%">

<img src="assets\img\quick_start\v_function\face_detect_example_02.webp" width="50%">

### 人脸识别-数据包格式

#### 回传JSON

```
{
   "FUNC": "FACE DETECT",  // 功能说明
   "count": 3,   // 识别到的人脸数量
   "2": {  // 人脸编号
      "x": 97,    // ROI
      "y": 26,
      "w": 64,
      "h": 86,
      "value": 0.859508,  // 置信率
	   "classid": 0,  
	   "index": 2,
	   "objnum": 3
	    },
	"1": {
	   "x": 70,
	   "y": 157,
	   "w": 38,
	   "h": 63,
	   "value": 0.712100,
	   "classid": 0,
	   "index": 1,
	   "objnum": 3
	   },
	"0": {
	   "x": 199,
	   "y": 145,
	   "w": 31,
	   "h": 40,
	   "value": 0.859508,
	   "classid": 0,
	   "index": 0,
	   "objnum": 3
	   }
	}


```


## 二维码识别

>识别画面中的二维码，并返回识别结果，以及版本。

<img src="assets\img\quick_start\v_function\qr_code.webp" width="30%">

>程序块介绍

- `init`
   + 初始化

- `Get QR code text`
   + 读取识别到的二维码内容

- `Get QR code version`
   + 读取识别到的二维码版本

#### 回传JSON

```
{
   "count": 1,
   "FUNC": "FIND QRCODE",
   "0": {
      "x": 57,
      "y": 16,
      "w": 197,
      "h": 198,
      "payload": "m5stack",	//二维码数据
      "version": 1,	//二维码版本
      "ecc_level": 1,	//二维码ECC水平
      "mask": 2,	//二维码掩码
      "data_type": 4,	//二维码数据类型
      "eci": 0	//返回二维码的ECI。
   }
}

```

## 条形码识别

>识别画面中的条形码，并返回识别结果，以及版本。

<img src="assets\img\quick_start\v_function\bar_code.webp" width="30%">

>程序块介绍

- `init`
   + 初始化

- `Get bar code text`
   + 读取识别到的条形码内容

- `Get bar code rotation`
   + 读取识别到的条码旋转角度

- `Get bar code type`
   + 读取识别到的条码类别

- `Get bar code location`
   + 读取识别到的条码的框选坐标，长度宽度，返回值为列表

#### 回传JSON

```
{
    "0": {
        "x": 62,
        "y": 90,
        "w": 100,
        "h": 45,
        "payload": "123", //数据
        "type": 15, //条码类别
        "rotation": 0.000000, //条码旋转角度
        "quality": 28 //条码在图像中被扫描的次数
    },
    "count": 1,
    "FUNC": "FIND BARCODE"
}

```

## Datamatrix码识别

>识别画面中的Datamatrix码，并返回识别结果，以及码旋转角度，坐标数据。

<img src="assets\img\quick_start\v_function\datamatrix_code.webp" width="30%">

>程序块介绍

- `init`
   + 初始化

- `Get datamatrix code text`
   + 读取识别到的Datamatrix码内容

- `Get bar code rotation`
   + 读取识别到的Datamatrix码旋转角度

- `Get bar code location`
   + 读取识别到的Datamatrix码的框选坐标，长度宽度，返回值为列表

#### 回传JSON

```
{
    "0": {
        "x": 20,
        "y": 116,
        "w": 96,
        "h": 96,
        "payload": "m5stack",
        "rotation": 1.588250, //DM码旋转角度
        "rows": 16, //DM码行数
        "columns": 16, //DM码列数
        "capacity": 12, //DM码容量（字节）
        "padding": 1 //DM码剩余容量（字节）
    },
    "count": 1,
    "FUNC": "FIND DATAMATRIX"
}

```


## Apriltag码识别

>识别画面中的Apriltag码，并获取其位置的偏移。

<img src="assets\img\quick_start\v_function\apriltag_code.webp" width="30%">

>程序块介绍

- `init`
   + 初始化

- `Get AprilTag Translation`
   + 读取Apriltag码的位置偏移

- `Get AprilTag rotation`
   + 返回以弧度计的AprilTag的旋度(int)

- `Get AprilTag location`
   + 读取识别到的Datamatrix码的框选坐标,中心坐标，长度宽度，返回值为列表

#### 回传JSON

```
{
    "0": {
        "x": 71,
        "y": 5,
        "w": 85,
        "h": 88,
        "id": 1,
        "family": 16,// AprilTag的类别
        "cx": 115,
        "cy": 49,
        "rotation": 6.219228,// 返回以弧度计的AprilTag的旋度(int)。
        "decision_margin": 0.451959,// AprilTag匹配的色饱和度（取值0.0 - 1.0），其中1.0为最佳。
        "hamming": 0,// AprilTag的可接受的数位误差数值
        "goodness": 0.000000, //AprilTag图像的色饱和度
        "x_translation": 0.868200,
        "y_translation": 0.245313,
        "z_translation": -2.725188,
        "x_rotation": 3.093776,
        "y_rotation": 0.065489,
        "z_rotation": 6.219228
    },
    "count": 1,
    "FUNC": "FIND APRILTAG"
}

```
#### 识别模式设置JSON

>以上多个识别码功能，均使用同一个固件实现，用户可以通过发送下方JSON数据，配置模式切换。

```

{
    "FIND CODE": 1.0,
    "mode":"DATAMATRIX" //识别模式，可选QRCODE，APRILTAG，DATAMATRIX,BARCODE
}
```

## 更多内容

<a href="https://github.com/m5stack/Vfunction"><el-button type="primary">Github</el-button></a>
