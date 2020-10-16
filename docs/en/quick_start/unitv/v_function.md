# V-function

?>This tutorial applies to M5StickV/UnitV

<el-steps :active="5" simple>
  <el-step onclick="page_move('description')" title="Description" icon="el-icon-guide"></el-step>
  <el-step onclick="page_move('burn-firmware')" title="Burn firmware" icon="el-icon-download"></el-step>
  <el-step onclick="page_move('uiflow-usage')" title="UIFlow Usage" icon="el-icon-monitor"></el-step>
  <el-step onclick="page_move('example')" title="Example" icon="el-icon-s-promotion"></el-step>
  <el-step onclick="page_move('more-information')" title="More Information" icon="el-icon-tickets"></el-step>
</el-steps>


## Description

V-Function is a series of **visual recognition** functional firmware developed by the M5Stack team for V series devices. Based on different functional firmware (target trace, motion detection, etc.), users can quickly build visual recognition functions. This tutorial will show you how to burn firmware into your device and call it through UIFlow graphical programming.

<el-card class="box-card" style="margin-bottom:20px">
    <div slot="header" class="clearfix">
        <span>Firmware List</span>
        <i class="el-icon-s-management" style="float: right;"></i>
    </div>
    <div style="margin: 0px 10px 10px 0px ;display:inline-block;">
        <el-tag onclick="page_move('motion-detect')">Motion detect</el-tag>
        <el-tag onclick="page_move('target-trace')">Target Trace</el-tag>
        <el-tag onclick="page_move('color-trace')">Color Trace</el-tag>
        <el-tag onclick="page_move('face-detect')">Face detect</el-tag>
        <el-tag onclick="page_move('qrcode')">QRCODE</el-tag>
        <el-tag onclick="page_move('barcode')">BarCode</el-tag>
        <el-tag onclick="page_move('datamatrixcode')">DatamatrixCode</el-tag>
        <el-tag onclick="page_move('apriltagcode')">ApriltagCode</el-tag>
        <el-tag onclick="page_move('tag-reader')">Tag Reader</el-tag>
        <el-tag onclick="page_move('line-tracker')">Line Tracker</el-tag>
    </div>
</el-card>


## Burn firmware

>Please download the corresponding M5Burner firmware burning tool according to the operating system you are using. Unzip and open the application.

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

?>Note: After the installation of MacOS users, please put the application into the Application folder, as shown below.

><img src="/image/base/application.webp" width="70%"> 

?>Note: For Linux users, please switch to the decompressed file path and run `./M5Burner` in the terminal to run the application.


>Select the device as M5StickV/UnitV in the device bar on the left, and select the corresponding function firmware according to the usage requirements to download. Connect the device to the computer through the data cable, select the corresponding port, and click Burn to start burning.

<img src="assets\img\quick_start\v_function\v_function01.webp" width="80%"> 

> When the burning log prompts `Burn Successfully`, it means that the firmware has been burned.

<img src="assets\img\quick_start\v_function\v_function02.webp" width="80%"> 


## UIFlow Usage

### Usage

> The M5StickV/UnitV with the function firmware burned will be used as a slave device in the form of Unit, so users need to use other M5 host devices to interact with it. For the basic usage and operation of UIFlow of other master products, please visit the corresponding product documentation page to obtain it.

>Visit https://flow.m5stack.com/ to enter UIFlow. Click the Unit add button in the function panel on the right and select UnitV extension to add it. When adding, please configure according to the actual port used. Click ok to add.

<img src="assets\img\quick_start\v_function\v_function03.webp" width="100%"> 

>After the addition is complete, you can find the included function block in the Unit option in the function block menu. Drag and drop it to the programming area on the right to use it. For more details, please see the case program below.

<img src="assets\img\quick_start\v_function\v_function04.webp" width="80%"> 

### Precautions

>After using the slave device (M5StickV/UnitV) to connect to the main control, if there is a situation where the main control end cannot obtain data, please restart M5StickV/UnitV. Wait for the firmware to start successfully and try to connect again.

## Example


### Motion detect

>Detect the change of the picture on the view, and judge whether there is motion of the target in the detection area.

<img src="assets\img\quick_start\v_function\motion_detect.webp" width="50%"> 

>Program block introduction

- `init`
   + initialization

- `Set detect threshold`
   + Set the change rate threshold: When the pixel whose change is less than this value is not considered to have changed, its change is not included in the total rate of difference.

- `Set detect mode`
   + dynamic： Dynamic detection mode, after configuration will continuous to take pictures, compare the changes between the two frames before and after
   + static：In static detection mode, a reference picture will be taken and saved after execution, and subsequent pictures will be continuously compared with this picture. If you need to take a new reference picture, you need to switch back to the motion detection mode first, and then perform the static detection mode setting again.

- `Get rate of difference`
   + rate of difference : Detect the change amount of changed pixels between two frames before and after comparison. Assuming that 2 pixels have changed, pixel A has changed by 27, and pixel B has changed by 10, then the change value is 27+10=37. The sum of the differences of the R.G.B components of the two pixels is the amount of change.

- `Get max difference`
   + max difference: the amount of change in the pixel that changes most drastically. 

>Program case: Enable the dynamic detection mode, and determine whether there is movement of the target in the screen by reading the maximum change rate value of the screen. When the change rate value is greater than the expected value, "Moved" is displayed, otherwise "Not Move" is displayed. The screen displays the current maximum rate of change value.

<img src="assets\img\quick_start\v_function\motion_detect_example_01.webp" width="50%">

<img src="assets\img\quick_start\v_function\motion_detect_example_02.webp" width="50%">

### Motion detect Packet format

#### Receive JSON

```
{
    "FUNC": "MOTION DETECT V1.0",
    "DIFF TOTAL": 10000, //rate of difference
    "DIFF MAX": 75, // max difference
    "TOTAL": 3, //Number of bounding boxes
    "0": {
        "x": 45,
        "y": 18,
        "w": 126,
        "h": 72,
        "area": 342 //The number of changed pixels within the bounding box
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

#### Send JSON

```
{
    "MOTION DETECT": 1.0, //Function mark "required"
    "mode": "COMPUTE_MODE_STATIC", //"COMPUTE_MODE_STATIC" or "COMPUTE_MODE_DYNAMIC"
    "thr_w": 20, //Bounding box width threshold，[3,200]
    "thr_h": 20, //Bounding box length threshold，[3,200]
    "stepx": 1, //X Scan interval，[0, 40]，Set to 0 to turn off bounding box detection
    "stepy": 2, //Y Scan interval，[0, 40]，Set to 0 to turn off bounding box detection
    "delta": 20, //Rate of change threshold，[0, 99]
	 "merge": 10 //Bounding box merge threshold，[0, 40]
}

```

### Target Trace

>Set the tracking target to obtain the position information of the target target in the screen in real time.

<img src="assets\img\quick_start\v_function\target_detect.webp" width="50%">

>Program block introduction

- `init`
   + initialization

- `Set trace area`
   + Set the frame selection target, the parameter is the position of the current target on the image (select as far as possible the target with significant color characteristics)

- `Get trace area coordinate`
   + Read the coordinates of the image on which the marquee selection target is located, the return value is a list, which contains the coordinates of the upper left corner of the marquee x, y and the width and height of the marquee

- `Get trace area center coordinate`
   + Read the center coordinates of the image where the frame selection target is located, and the return value is in the form of a list, which contains the center coordinates x, y of the frame selection.

>Program case: Set the frame selection target by pressing button A, read the target coordinate value, used to control the movement of rectangular elements on the screen, and simulate the display of the target's trajectory

<img src="assets\img\quick_start\v_function\target_detect_example_01.webp" width="50%">

<img src="assets\img\quick_start\v_function\target_detect_example_02.webp" width="50%">


### Target Trace Packet format

#### Receive JSON

```
{
    "FUNC": "TARGET TRACKER V1.0",
    "x": 282,
    "y": 165,
    "w": 13,
    "h": 15
}

```

#### Send JSON

```
{
    "TARGET TRACKER": " V1.0",
    "x": 282, //xywh all "required"
    "y": 165,
    "w": 13,
    "h": 15
}

```


### Color Trace

>Set the LAB color threshold, track the target that meets the threshold in the screen, and obtain the position information of the target object in the screen in real time.

<img src="assets\img\quick_start\v_function\color_trace.webp" width="50%">

>Program block introduction

- `init`
   + initialization

- `Set color by L-min L-max A-min A-max B-min B-max`
   + Set the LAB threshold for tracking

- `Get area pixel number`
   + Read the number of pixels that meet the LAB threshold in the frame target

- `Get area x coordinate`
   + Read the coordinate x of the upper left corner of the frame target

- `Get area Y coordinate`
   + Read the coordinate y of the upper left corner of the target
   
- `Get area width`
   + Read the width of the target object

- `Get area height`
   + Read the height of the target object


#### Set LAB threshold

> Click the button below to download the LAB color picking tool. (Currently only supports windows system)

<a href="https://m5stack.oss-cn-shenzhen.aliyuncs.com/resource/software/LAB-Color-Tool.exe"><el-button type="primary">下载LAB取色工具</el-button></a>

>Use a mobile phone or other device to take a sample picture, double-click to open the application, and click `open`-->`image` to import the image.

<img src="assets\img\quick_start\v_function\lab_color_tool_01.webp" width="50%">


> Click the object you want to use for color recognition, record the LAB value generated below, and configure it for use in UIFlow. Supplement: Drag the interval bar of the LAB value, which can be used to customize the LAB value.


<img src="assets\img\quick_start\v_function\lab_color_tool_02.webp" width="50%">


>Program case: Set the LAB threshold for recognition, realize the color tracking effect, and obtain the coordinate data of the tracked object in the screen, and the number of pixels that meet the threshold.

<img src="assets\img\quick_start\v_function\color_trace_example_01.webp" width="50%">

<img src="assets\img\quick_start\v_function\color_trace_example_02.webp" width="50%">


### Color Trace Packet format

#### Receive JSON

```
{
    "FUNC": "COLOR TRACKER V1.0",
    "TOTAL": 3, //Number of bounding boxes
    "0": {
        "x": 45,
        "y": 18,
        "w": 126,
        "h": 72,
        "area": 342 //The number of changed pixels within the bounding box
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

#### Send JSON

```
{
    "COLOR TRACKER": 1.0, //Function mark "required"
    "thr_w": 20, //Bounding box width threshold，[3,200]
    "thr_h": 20, //Bounding box length threshold，[3,200]
    "stepx": 1, //X Scan interval，[0, 40]，Set to 0 to turn off bounding box detection
    "stepy": 2, //Y Scan interval，[0, 40]，Set to 0 to turn off bounding box detection
    "merge": 10, //Bounding box merge threshold，[0, 40]
    "Lmin": 0, //L Lower threshold [0, 100]
    "Lmax": 0, //L Upper threshold [0, 100]
    "Amin": 0, //A Lower threshold [0, 255]
    "Amax": 0, //A Upper threshold [0, 255]
    "Bmin": 0, //B Lower threshold [0, 255]
    "Bmax": 0, //B Upper threshold [0, 255]
}

```


### Face detect

>Recognize the face information in the screen, and return the number of successful recognitions, object coordinates, and confidence rate.

<img src="assets\img\quick_start\v_function\face_detect.webp" width="30%">

>Program block introduction

- `init`
   + initialization

- `Get face numbers`
   + Read the number of recognized faces

- `Get number N face detail`
   + Read the face detail data of the specified number, and the return format is a list, which includes the face frame selection coordinates, length, and placement confidence rate

>Program case: Read the face recognition results in the screen and the confidence rate.

<img src="assets\img\quick_start\v_function\face_detect_example_01.webp" width="50%">

<img src="assets\img\quick_start\v_function\target_detect_example_02.webp" width="40%">

### Face detect Packet format

#### Receive JSON

```
{
   "FUNC": "FACE DETECT",  // Function Description
   "count": 3,   //  Number of recognized faces
   "2": {  // Face number
      "x": 97,    // ROI
      "y": 26,
      "w": 64,
      "h": 86,
      "value": 0.859508,  // Confidence rate
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


## QRCode

>Recognize the QR code on the screen and return the recognition result and version.

<img src="assets\img\quick_start\v_function\qr_code.webp" width="30%">

>Program block introduction

- `init`
   + initialization

- `Get QR code text`
   + Get the content of the identified QR code

- `Get QR code version`
   + Get the identified QR code version

#### Receive JSON

```
{
   "count": 1,
   "FUNC": "FIND QRCODE",
   "0": {
      "x": 57,
      "y": 16,
      "w": 197,
      "h": 198,
      "payload": "m5stack",	//QR code data
      "version": 1,
      "ecc_level": 1,
      "mask": 2,	//QR code mask
      "data_type": 4,
      "eci": 0	//
   }
}

```

## BarCode

>Recognize the barcode on the screen and return the recognition result and version.

<img src="assets\img\quick_start\v_function\bar_code.webp" width="30%">

>Program block introduction

- `init`
   + initialization

- `Get bar code text`
   + Get the barcode content

- `Get bar code rotation`
   + Get the recognized bar code rotation angle

- `Get bar code type`
   + Get the recognized barcode category

- `Get bar code location`
   + Get the frame selection coordinates, length and width of the recognized barcode, the return value is a list

#### Receive JSON

```
{
    "0": {
        "x": 62,
        "y": 90,
        "w": 100,
        "h": 45,
        "payload": "123", //BarCode data
        "type": 15,
        "rotation": 0.000000, //Barcode rotation angle
        "quality": 28 //The number of times the barcode is scanned in the image
    },
    "count": 1,
    "FUNC": "FIND BARCODE"
}

```

## DatamatrixCode

>Identify the Datamatrix code in the screen, and return the recognition result, the code rotation angle, and the coordinate data.

<img src="assets\img\quick_start\v_function\datamatrix_code.webp" width="30%">

>Program block introduction

- `init`
   + initialization

- `Get datamatrix code text`
   + Get the recognized Datamatrix code content

- `Get bar code rotation`
   + Get the recognized rotation angle of Datamatrix code

- `Get bar code location`
   + Get the frame selection coordinates, length and width of the recognized Datamatrix code, and the return value is a list

#### Receive JSON

```
{
    "0": {
        "x": 20,
        "y": 116,
        "w": 96,
        "h": 96,
        "payload": "m5stack",
        "rotation": 1.588250, //DM code rotation angle
        "rows": 16, //DM code lines
        "columns": 16, //Number of DM code columns
        "capacity": 12, //DM code capacity (bytes)
        "padding": 1 //DM code remaining capacity (bytes)
    },
    "count": 1,
    "FUNC": "FIND DATAMATRIX"
}

```


## ApriltagCode

>Identify the Apriltag code in the screen and get its position offset.

<img src="assets\img\quick_start\v_function\apriltag_code.webp" width="30%">

>Program block introduction

- `init`
   + initialization

- `Get AprilTag Translation`
   + Read the position offset of Apriltag code

- `Get AprilTag rotation`
   + Returns the curl of AprilTag in radians (int)

- `Get AprilTag location`
   + Read the frame selection coordinates, center coordinates, length and width of the recognized Datamatrix code, the return value is a list

#### Receive JSON

```
{
    "0": {
        "x": 71,
        "y": 5,
        "w": 85,
        "h": 88,
        "id": 1,
        "family": 16,// AprilTag family
        "cx": 115,
        "cy": 49,
        "rotation": 6.219228,// Returns the curl of AprilTag in radians (int).
        "decision_margin": 0.451959,// AprilTag matching color saturation (value 0.0-1.0), where 1.0 is the best.
        "hamming": 0,// Acceptable digital error value of AprilTag
        "goodness": 0.000000, //AprilTag The color saturation of the image
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
#### Recognition mode setting JSON

>The above multiple identification code functions are all implemented using the same firmware. Users can configure mode switching by sending the JSON data below.

```

{
    "FIND CODE": 1.0,
    "mode":"DATAMATRIX" //Recognition mode option: QRCODE，APRILTAG，DATAMATRIX,BARCODE
}
```



### Tag Reader

>Detect the tag card in the screen and return to the binary sequence. Note: Only the fixed label card format is recognized, please refer to the picture below

<img src="assets\img\quick_start\v_function\tag_reader.webp" width="30%"> 

>Program block introduction

- `init`
   + initialization

- `Get total number`
   + Number of tag cards recognized on the current screen

- `Get binstr`
   + The binary data string of the recognition result. When there are multiple cards, the predetermined subscript replaces the different card content.

- `Get code`
   + The content binary code of the uint64_t type, the maximum encoding of this key is 64-bit (8 x 8) TAG.

- `Get tag location
   + Coordinates and length and width information of the label card

<img src="assets\img\quick_start\v_function\tag_reader_sample.webp" width="60%"> 

```
00000000      00000000              
00111100      00@@@@00        @@@@  
01000010      0@0000@0       @    @ 
01000010  ->  0@0000@0  ->   @    @ 
01011010      0@0@@0@0       @ @@ @ 
01000010      0@0000@0       @    @ 
01000010      0@0000@0       @    @ 
00000000      00000000              

```


>Program example: Identify card information and display it on the screen

<img src="assets\img\quick_start\v_function\tag_reader_example_01.webp" width="50%">


### Tag Reader-Packet format

#### Receive JSON

```
{
    "FUNC": "TAG READER V2.0",
    "TOTAL": 1,
    "0": {
        "x": 113,
        "y": 65,
        "w": 117,
        "h": 105,
        "p0x": 113, // p0x ~ p3y: TAG Coordinates of 4 vertices
        "p0y": 77,
        "p1x": 211,
        "p1y": 65,
        "p2x": 230,
        "p2y": 156,
        "p3x": 127,
        "p3y": 170,
        "rotation": 8, // Relative rotation angle of TAG
        "rows": 8, // Number of TAG lines (this value does not include positioning boxes)
        "columns": 8, // The number of TAG columns (this value does not include the positioning box)
        "size": 64, // TAG data length of the actual content, the value = the number of rows of the content * the number of columns of the content = (rows) * (columns)
        "code": "0x003C42425A424200", // The content binary code of uint64_t type, the maximum encoding of this key is 64-bit (8 x 8) TAG
        "binstr": "0000000000111100010000100100001001011010010000100100001000000000" //The string form of binary data, this key value can encode TAG of any length and width
    }
}


```

### Line Tracker

>Detect the specified color line in the screen and return the offset angle.

<img src="assets\img\quick_start\v_function\line_tracker.webp" width="30%"> 

>Program block introduction

- `init`
   + initialization

- `Get angle`
   + Get line offset angle

- `Set color by L-min L-max A-min A-max B-min B-max`
   + Set the LAB threshold for tracking (the color value of the LAB color space, colors outside this range will be filtered)

- `Get code`
   + The content binary code of the uint64_t type, the maximum encoding of this key is 64-bit (8 x 8) TAG.

- `Set line area weight0 weight1 weight2`
   + Set the weight of the line area: the three weights correspond to the contribution of the three areas in the figure to the angle. For example, if the value of weight_2 is set larger, the angle will change more drastically when turning.

<img src="assets\img\quick_start\v_function\line_tracker_03.webp"> 

#### Set LAB threshold

>Refer to the method of using the LAB color picking tool in the `color tracking` function above, shoot the lines and scenes that need to be tracked, and record the LAB values ​​generated below, and configure and use them in UIFlow.

<img src="assets\img\quick_start\v_function\line_tracker_02.webp" width="50%">

>Program example: Obtain the line offset angle and display it on the screen

<img src="assets\img\quick_start\v_function\line_tracker_example_01.webp" width="50%">

<img src="assets\img\quick_start\v_function\line_tracker_example_02.webp" width="50%">


### Line Tracker-Packet format

#### Receive JSON

```
{
    "FUNC": "LINE TRACKER V1.0",
    "angle": 3.8593475818634033 //Angle of car turning
}

```

#### Send JSON

```
{
    "LINE  TRACKER": 1.0, //Function mark, not default
    "thr_w": 20, //Can be default bounding box width threshold，[3,200]
    "thr_h": 20, //Can be the default bounding box length threshold, [3,200]
    "stepx": 1, //can default X scan interval, [0, 40], set to 0 to turn off bounding box detection
    "stepy": 2, //Y scan interval can be defaulted, [0, 40], set to 0 to turn off bounding box detection
    "merge": 10, //default bounding box merge threshold, [0, 40]
    "Lmin": 0, //The lower limit of L threshold can be defaulted [0, 100]
    "Lmax": 0, //The upper limit of L threshold can be defaulted [0, 100]
    "Amin": 0, //The lower limit of A threshold can be defaulted [0, 255]
    "Amax": 0, //The upper limit of A threshold can be defaulted [0, 255]
    "Bmin": 0, //Default B threshold lower limit [0, 255]
    "Bmax": 0, //The upper limit of B threshold can be defaulted [0, 255]
    "weight_0": 0.1, // default weight
    "weight_1": 0.3, // default weight
    "weight_2": 0.7 // Default weight
}

```


## More Information

<a href="https://github.com/m5stack/Vfunction"><el-button type="primary">Github</el-button></a>