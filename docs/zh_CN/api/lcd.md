# LCD 屏幕

*屏幕像素为 320x240，以屏幕左上角为原点 (0,0)*

颜色代码是预定义的并且可以使用。

| 定义    | Value    | R  | G  | B   |
| ---           | ---      | -- | -- | --  |
|TFT_BLACK      | 0x0000   |   0|   0|   0 |
|TFT_NAVY       | 0x000F   |   0|   0| 128 |
|TFT_DARKGREEN  | 0x03E0   |   0| 128|   0 |
|TFT_MAROON     | 0x7800   | 128|   0|   0 |
|TFT_PURPLE     | 0x780F   | 128|   0| 128 |
|TFT_OLIVE      | 0x7BE0   | 128| 128|   0 |
|TFT_LIGHTGREY  | 0xC618   | 192| 192| 192 |
|TFT_DARKGREY   | 0x7BEF   | 128| 128| 128 |
|TFT_BLUE       | 0x001F   |   0|   0| 255 |
|TFT_GREENYELLOW| 0xB7E0   | 180| 255|   0 |
|TFT_GREEN      | 0x07E0   |   0| 255|   0 |
|TFT_YELLOW     | 0xFFE0   | 255| 255|   0 |
|TFT_ORANGE     | 0xFDA0   | 255| 180|   0 |
|TFT_PINK       | 0xFC9F   |255 | 255|  16 |
|TFT_CYAN       | 0x07FF   |   0| 255| 255 |
|TFT_DARKCYAN   | 0x03EF   |   0| 128| 128 |
|TFT_RED        | 0xF800   | 255|   0|   0 |
|TFT_MAGENTA    | 0xF81F   | 255|   0| 255 |
|TFT_WHITE      | 0xFFFF   | 255| 255| 255 |

## begin()

**功能:**

初始化以供使用。

**函数原型:**

`begin();`

**参数:**

无。

**返回值:**

无。

**使用注意事项:**

1）如果您不想使用M5.begin（）初始化LCD，请在使用显示器之前调用此功能。


## sleep()

**功能:**

将显示切换到节能模式

**函数原型:**

`sleep();`

**参数:**

无。

**返回值:**

无。

**使用注意事项:**

1）调用wakeup( )函数唤醒。

2）由于M5Stack的LCD背光是单独控制的，如有必要，请使用setBrightness( )函数进行调整。

**使用示例:**

```arduino
#include <M5Stack.h>

M5.Lcd.sleep();
M5.Lcd.setBrightness(0);
```

## alphaBlend()

**函数原型:**

设置透明度,混合前景和背景色.

**Syntax:**

`uint16_t alphaBlend(uint8_t alpha, uint16_t fgc, uint16_t bgc);`

**Function argument:**

| 参数 | 描述 | 类型 |
| --- | --- | -- |
| alpha | 透明度 | uint8_t |
| fgc | 前景色 | uint16_t |
| bgc | 背景色 | uint16_t |

**使用示例:**

```arduino
#include <M5Stack.h>

M5.begin();

int val = M5.Lcd.alphaBlend(128, 0X00FF00, 0XFF0000);

M5.Lcd.fillRect(0, 0, 320, 240, val);

M5.Lcd.print(val);
```


## wakeup()

**功能:**

从节能模式恢复显示

**函数原型:**

`wakeup();`

**参数:**

无。

**返回值:**

无。

**使用注意事项:**

1）由于M5Stack的LCD背光是单独控制的，如有必要，请使用setBrightness（）函数进行调整。

**使用示例:**

```arduino
#include <M5Stack.h>

M5.Lcd.wakeup();
M5.Lcd.setBrightness(200);
```

## setBrightness()

**功能:**

调整显示屏背光。

**函数原型:**

`setBrightness(uint8_t brightness);`

**参数:**


| 参数 | 类型 | 描述 |  
| --- | --- | -- |
| brightness | uint8_t | 亮度 (0: Off - 255:Full) |

**返回值:**

无。.

**使用注意事项:**

1）背光由PWM（44.1 KHz）控制。

2）背光对电池消耗有直接影响。

**使用示例:**

```arduino
#include <M5Stack.h>

M5.Lcd.setBrightness(200);
```

## progressBar()

**功能:**

显示显示进度的栏。

**函数原型:**

`progressBar(int x, int y, int w, int h, uint8_t val);`

**参数:**


| 参数 | 类型 | 描述 |  
| --- | --- | -- |
| x | int | 坐标 X(左上角)  |
| y | int | 坐标 Y(左上角)  |
| w  | int | width (px) |
| h  | int | height(px)  |
| val  | uint8_t | progress(0-100%)  |


**返回值:**

无。

**使用注意事项:**

1) The color is expressed in blue (0x09F1).

2) Please erase the background beforehand to draw only the additional amount.

**使用示例:**

```arduino
#include <M5Stack.h>

  M5.Lcd.fillRect(0,0,240,20,0);
  M5.Lcd.progressBar(0,0,240,20, 20);
```

## qrcode()

**功能:**

Generate a QR code.

**函数原型:**

`qrcode(const char *string, uint16_t x, uint16_t y, uint8_t width, uint8_t version);`

`qrcode(const String &string, uint16_t x, uint16_t y, uint8_t width, uint8_t version);`

**参数:**


| 参数 | 类型 | 描述 |  
| --- | --- | -- |
| val  | string / String& | 要嵌入QR的字符串 |
| x | uint16_t | 坐标 X(左上角)  |
| y | uint16_t | 坐标 Y(左上角)  |
| width  | uint8_t | 宽度 (px) |
| version  | uint8_t | 二维码版本  |


**返回值:**

无。

**使用注意事项:**

1）请根据字符数指示适当的QR码版本。

**使用示例:**

```arduino
#include <M5Stack.h>

  M5.Lcd.qrcode("http://www.m5stack.com",50,10,220,6);

```

## drawBitmap()

**功能:**

绘制位图

**函数原型:**

`drawBitmap(int16_t x0, int16_t y0, int16_t w, int16_t h, const uint16_t *data);`

`drawBitmap(int16_t x0, int16_t y0, int16_t w, int16_t h, uint16_t *data);`

`drawBitmap(int16_t x0, int16_t y0, int16_t w, int16_t h, const uint16_t *data, uint16_t transparent);`

`drawBitmap(int16_t x0, int16_t y0, int16_t w, int16_t h, const uint8_t *data);`

`drawBitmap(int16_t x0, int16_t y0, int16_t w, int16_t h, uint8_t *data);`

**参数:**


| 参数 | 类型 | 描述 |  
| --- | --- | -- |
| x0 | uint16_t | 坐标 X(左上角)  |
| y0 | uint16_t | 坐标 Y(左上角)  |
| w  | int16_t | 宽度 (px) |
| h  | int16_t | 高度 (px) |
| data  | uint16_t* / uint8_t*| 图像数量 |
| transparent  | uint16_t | 透明色码 |

**返回值:**

无。

**使用注意事项:**

1）颜色代码由总共16位表示：红色5位，绿色6位，顶部蓝色5位。

**使用示例:**

见样品 sketch:M5Stack->Advanced->drawXBitmap

## drawChar()

**功能:**

显示字符

**函数原型:**

`drawChar(int16_t uniCode, int32_t x, uint16_t y, uint8_t font);`

**函数参数:**

| 参数 | 类型 | 描述 |  
| ---  | ---      | -- |
| uniCode | int32_t  | 字符 |
| x   | int32_t  | X坐标  |
| y    | uint16_t | Y坐标 |
| font | uint32_t | 字体 |

**使用示例:**

```arduino
#include <M5Stack.h>

	M5.begin();
	M5.Lcd.drawChar('A', 160, 120, 2);
```

## drawBmpFile()

**功能:**

从文件中读取位图并绘制它。

**函数原型:**

`drawBmpFile(fs::FS &fs, const char *path, uint16_t x, uint16_t y);`


**参数:**


| 参数 | 类型 | 描述 |  
| --- | --- | -- |
| fs | fs::FS | 文件流 |
| path  | const char * | 文件路径  |
| x | int16_t | 坐标 X(左上角)  |
| y | int16_t | 坐标 Y(左上角)  |

**返回值:**

无。

**使用注意事项:**

1）根据大小和位数可能无法扩展。

**使用示例:**

```arduino
#include <M5Stack.h>
  M5.Lcd.drawBmpFile(SD, "/p2.bmp",0,0);
```

?>我们提供一个可以用来转换`jpg`图像->`.c`文件的脚本，你可以使用它来转换一些个人图片，并使用下面的API将图像绘制到屏幕上。[bin2code.py](https://github.com/m5stack/M5Stack/tree/master/tools)

## drawJpg()

**功能:**

从内存中读取JPEG数据并绘制它。

**函数原型:**

`void drawJpg(const uint8_t *jpg_data, size_t jpg_len, uint16_t x = 0,
                  uint16_t y = 0, uint16_t maxWidth = 0, uint16_t maxHeight = 0,
                  uint16_t offX = 0, uint16_t offY = 0,
                  jpeg_div_t scale = JPEG_DIV_NONE。);`


**参数:**


| 参数 | 类型 | 描述 |  
| --- | --- | -- |
| jpg_data |uint8_t * | 数据顶部 |
| jpg_len  | size_t | 数据长度  |
| x | uint16_t | 坐标 X (左上角)  |
| y | uint16_t | 坐标 Y (左上角)  |
|maxWidth | uint16_t | 最大宽度 (px)  |
|maxHeight | uint16_t | 最大高度 (px)  |
| offX | uint16_t |抵消 X (px)  |
| offY | uint16_t |抵消 Y (px)  |
| scale | jpeg_div_t | 规模  |


规模 (jpeg_div_t)：

| 定义 |功能 |  
| --- | -- |
| JPEG_DIV_NONE|no care.|
| JPEG_DIV_2   |1/2|
| JPEG_DIV_4   |1/4|
| JPEG_DIV_8   |1/8|
| JPEG_DIV_MAX |MAX|


**返回值:**

无。

**使用注意事项:**

1）根据大小，位数和格式（渐进等），可能无法扩展。

## drawJpgFile()

**功能:**

从文件中读取JPEG数据并绘制它。

**函数原型:**

`void drawJpgFile(fs::FS &fs, const char *path, uint16_t x = 0, uint16_t y = 0,
                    uint16_t maxWidth = 0, uint16_t maxHeight = 0,
                    uint16_t offX = 0, uint16_t offY = 0,
                    jpeg_div_t scale = JPEG_DIV_NONE);`


**参数:**

| 参数 | 类型 | 描述 |  
| --- | --- | -- |
| fs | fs::FS | 文件流 |
| path  | const char * | 文件路径  |
| x | uint16_t | 坐标 X(左上角)  |
| y | uint16_t | 坐标 Y(左上角)  |
|maxWidth | uint16_t | Max Width (px)  |
|maxHeight | uint16_t | Max Height (px)  |
| offX | uint16_t | 抵消X (px)  |
| offY | uint16_t | 抵消Y (px)  |
| scale | jpeg_div_t | 规模  |


规模(jpeg_div_t)：

| 定义 |功能 |  
| --- | -- |
| JPEG_DIV_NONE|no care.|
| JPEG_DIV_2   |1/2|
| JPEG_DIV_4   |1/4|
| JPEG_DIV_8   |1/8|
| JPEG_DIV_MAX |MAX|


**返回值:**

无。

**使用注意事项:**

1）根据尺寸和格式（渐进等），可能无法扩展。


## fillScreen()

**函数原型：**

`fillScreen(uint16_t color);`

<!-- `fillScreen(color)` # for micropython -->

**功能：以指定的颜色填充整个屏幕。**

| 参数 | 描述 |
| --- | --- |
| color | 颜色值 |

**例程：**
```arduino
#include <M5Stack.h>

M5.begin();

M5.Lcd.fillScreen(RED);
```
<!-- ```python
# MicroPython
from m5stack import *
from m5ui import *

lcd.fillScreen(lcd.RED)
``` -->

* * *

<!-- ## `lcd.setRotation(degree)`

**例程：**
```arduino
// Arduino
lcd.setRotation(90)
```
```python
# MicroPython
lcd.setRotation(90)
```

**设置整个屏幕显示的旋转角度。**

| 参数 | 描述 |
| --- | --- |
| degree | 旋转的角度 |

* * * -->

<!-- ## `lcd.setColor(color [, background_color])` -->
## setTextColor()

**函数原型：**

`setTextColor(uint16_t color, uint16_t backgroundcolor);`

<!-- `setTextColor(color, backgroundcolor)` # for micropython -->

**功能：设置显示文本的前景颜色和背景颜色。**

| 参数 | 描述 |
| --- | --- |
| color | 文本的前景颜色 |
| backgroundcolor| 文本的背景颜色 |

*如果函数的 backgroundcolor 值没给出，则使用当前的背景颜色。*

**例程：**
```arduino
#include <M5Stack.h>

M5.begin();

M5.Lcd.setTextColor(RED);
```
<!-- ```python
# MicroPython
from m5stack import *
from m5ui import *

lcd.setTextColor(lcd.RED)
lcd.setTextColor(lcd.ORANGE, lcd.DARKCYAN)
``` -->

* * *

## setCursor()

**函数原型：**

`setCursor(uint16_t x0, uint16_t y0);`

<!-- `setCursor(x0, y0)` # for micropython -->

**功能：移动光标位置到 (x0, y0) 处。**

**例程：**
```arduino
#include <M5Stack.h>

M5.begin();

M5.Lcd.setCursor(100,100);
M5.Lcd.print("Hello");
```
<!-- ```python
# MicroPython
from m5stack import *
from m5ui import *

lcd.drawPixel(22,22,lcd.RED)
``` -->

* * *

## drawPixel()

**函数原型：**

`drawPixel(int16_t x, int16_t y, uint16_t color);`

**功能：在位置(x,y)处画点。**

| 参数 | 描述 |
| --- | --- |
| color | 颜色值 |

*如果函数的 color 值没给出，则使用当前的背景颜色。*

**例程：**
```arduino
#include <M5Stack.h>

M5.begin();

M5.Lcd.drawPixel(22,22,RED);
```
<!-- ```python
# MicroPython
from m5stack import *
from m5ui import *

lcd.drawPixel(22,22,lcd.RED)
``` -->

* * *


## drawChar()

**功能:**

从指定的起点到终点绘制指定颜色的直线。

**函数原型:**

`drawChar(int32_t x, int32_t y, uint16_t c, uint32_t color, uint32_t bg, uint8_t size);`

**参数:**

| 引数 | 型 | 説明 |  
| --- | --- | -- |
| x | int32_t | 坐标 X（左上角)  |
| y | int32_t | 座標 Y（左上角)  |
| c | uint16_t | 颜色代码  |
| color | uint32_t | 绘图颜色  |
| bg | uint32_t | 背景颜色  |
| size | uint8_t | 文字大小  |

**使用示例:**

```arduino
#include <M5Stack.h>

	M5.begin();
	M5.Lcd.drawChar(0,0,'A',TFT_GREEN,TFT_BLACK,3);
```


## drawFastVLine()

**功能:**

画一条从X到Y的垂直线。

**函数原型:**

`drawFastVLine(int32_t x, int32_t y, int32_t h, uint32_t color);`

**参数:**

| 参数 |  型 |功能 |
| --- | --- | -- |
| x | uint16_t | 坐标 X (左上角)  |
| y | uint16_t | 坐标 Y (左上角)  |
| h |  int16_t | 高度 |
| color |  uint32_t |线条颜色（可选） |

**使用示例:**

```arduino
#include <M5Stack.h>

M5.Lcd.drawFastHLine(0, 0, 12, TFT_GREEN);
```

## drawFastHLine()

**功能:**

画一条从X到Y的水平线。

**函数原型:**

`drawFastHLine(int32_t x, int32_t y, int32_t w, uint32_t color);`

**参数:**

| 参数 |  型 |功能 |
| --- | --- | -- |
| x | uint16_t | 坐标 X (左上角)  |
| y | uint16_t | 坐标 Y (左上角)  |
| w |  int16_t | 宽度 |
| color |  uint32_t |线条颜色（可选） |

**使用示例:**

```arduino
#include <M5Stack.h>

M5.Lcd.drawFastHLine(0, 0, 12, TFT_GREEN);
```

## drawNumber()

**功能:**

显示整数.

**函数原型:**

`drawNumber(long long_num, int32_t poX, int32_t poY);`

**Function argument:**

| 参数 | 类型 | 描述 |
| --- | ---      | --- |
| long_num | long | 数字 |
| poX | int32_t | X坐标 |
| poY | int32_t | Y坐标Y |

**Example of use:**

```arduino
#include <M5Stack.h>

M5.Lcd.drawNumber(12345, 160, 120);
```

## drawLine()

**函数原型：**

`drawLine(int16_t x0, int16_t y0, int16_t x1, int16_t y1, uint16_t color);`

**功能：以指定的颜色从点(x,y)到点(x1,y1)画直线。**

| 参数 | 描述 |
| --- | --- |
| color | 颜色值 |

*如果函数的 color 值没给出，则使用当前的背景颜色。*

**例程：**
```arduino
#include <M5Stack.h>

M5.begin();

M5.Lcd.drawLine(0,0,12,12,WHITE);
```
<!-- ```python
# MicroPython
from m5stack import *
from m5ui import *

lcd.drawLine(0,0,12,12,lcd.WHITE)
``` -->

* * *

## drawTriangle()

**函数原型：**

`drawTriangle(int16_t x0, int16_t y0, int16_t x1, int16_t y1, int16_t x2, int16_t y2, uint16_t color);`

**功能：以指定颜色画三角形，顶点分别为(x,y)，(x1,y1)和(x2,y2)。**

| 参数 | 描述 |
| --- | --- |
| color | 颜色值 |

*如果函数的 color 值没给出，则使用当前的背景颜色。*

**例程：**
```arduino
#include <M5Stack.h>

M5.begin();

M5.Lcd.drawTriangle(22,22,69,98,51,22,RED);
```
<!-- ```python
# MicroPython
from m5stack import *
from m5ui import *

lcd.drawLine(0,0,12,12,lcd.WHITE)
``` -->

* * *

## fillTriangle()

**函数原型：**

`fillTriangle(int16_t x0, int16_t y0, int16_t x1, int16_t y1, int16_t x2, int16_t y2, uint16_t color);`

**功能：以指定颜色画`填充形式`的三角形，顶点分别为(x,y)，(x1,y1)和(x2,y2)。**

| 参数 | 描述 |
| --- | --- |
| color | 颜色值 |

*如果函数的 color 值没给出，则使用当前的背景颜色。*

**例程：**
```arduino
#include <M5Stack.h>

M5.begin();

M5.Lcd.fillTriangle(22,22,69,98,51,22,RED);
```
<!-- ```python
# MicroPython
from m5stack import *
from m5ui import *

lcd.drawLine(0,0,12,12,lcd.WHITE)
``` -->

* * *

## fillCircle()							

**函数原型:**

`fillCircle(int32_t x0, int32_t y0, int32_t r, uint32_t color);`							

**功能: Draw a filled circle on point(x0, y0), Radis is r with color**

| 参数 | 类型 | ,描述 |
| --- | ---      | --- |
| x0   | int32_t  | 中心点X坐标 |
| y0   | int32_t  | 中心点y坐标 |
| r   | int32_t  | 半径 |
|color| uint32_t |  颜色  0~65535 |

**例程:**

```arduino
#include <M5Stack.h>

M5.begin();

M5.Lcd.fillCircle(160, 120, 30, 0XFF00FF);
```

* * *

## fillSprite()

**功能:**

将精灵填充指定颜色

**函数原型:**

`void fillSprite(uint32_t color)`

**函数参数:**

| 参数 | 类型 | 描述 |  
| ---    | --- | -- |
| color | int32_t | filled color |

**例程:**

```arduino
#include <M5Stack.h>

M5.begin();

TFT_eSprite img = TFT_eSprite(&M5.Lcd);

img.createSprite(70, 80); 

img.fillSprite(WHITE);
```

* * *

## getCursorX()

**函数原型:**

`uint16_t getCursorX(void);`

<!-- ```arduinosetCursor(x0, y0)` # for micropython -->

**功能: 获取x坐标.**

**例程:**

```arduino
#include <M5Stack.h>

M5.begin();

M5.Lcd.print("Hello   ");

int X = M5.Lcd.getCursorX();

M5.Lcd.print(X);
```

## getCursorY()

**函数原型:**

`uint16_t getCursorY(void);`

<!-- ```arduinosetCursor(x0, y0)` # for micropython -->

**功能: 获取y坐标.**

**Example:**

```arduino
#include <M5Stack.h>

M5.begin();

M5.Lcd.setCursor(0, 20);
M5.Lcd.print("Hello   ");

int Y = M5.Lcd.getCursorY();

M5.Lcd.print(Y);
```

* * *

## drawRect()

**函数原型：**

`drawRect(int16_t x, int16_t y, int16_t w, int16_t h, uint16_t color);`

**功能：以指定颜色画矩形，其中矩形左上角坐标为(x,y)，宽高分别为width和height。**

| 参数 | 描述 |
| --- | --- |
| w | 图形宽(单位: 像素) |
| h | 图形高(单位: 像素) |
| color | 颜色值 |

*如果函数的 color 值没给出，则使用当前的背景颜色。*

**例程：**
```arduino
#include <M5Stack.h>

M5.begin();

M5.Lcd.drawRect(180, 12, 122, 10, BLUE);
```
<!-- ```python
# MicroPython
from m5stack import *
from m5ui import *

lcd.drawLine(0,0,12,12,lcd.WHITE)
``` -->

* * *

## fillRect()

**函数原型：**

`fillRect(int16_t x, int16_t y, int16_t w, int16_t h, uint16_t color);`

**功能：以指定颜色画`填充形式`的矩形，其左上角坐标为(x,y)，宽高分别为width和height。**

| 参数 | 描述 |
| --- | --- |
| w | 图形宽(单位: 像素) |
| h | 图形高(单位: 像素) |
| color | 颜色值 |

*如果函数的 color 值没给出，则使用当前的背景颜色。*

**例程：**
```arduino
#include <M5Stack.h>

M5.begin();

M5.Lcd.fillRect(180, 12, 122, 10, BLUE);
```
<!-- ```python
# MicroPython
from m5stack import *
from m5ui import *

lcd.drawLine(0,0,12,12,lcd.WHITE)
``` -->


* * *

## getRotation()

**功能:**

返回屏幕旋转方向

**函数原型:**

`uint8_t getRotation(void)`

**Function argument:**

None

**Example of use:**

```arduino
#include <M5Stack.h>

M5.begin();

M5.Lcd.print(M5.Lcd.getRotation());
```

* * *
## textWidth()

**功能:**

返回文本所占像素宽度

**函数原型:**

`int16_t textWidth(const String& string)`

**函数参数:**

| 参数 | 类型 | 描述 |
| --- | --- | --- |
| string | const String& | text String |

**例程:**

```arduino
#include <M5Stack.h>

M5.begin();

String text = "hello  ";

M5.Lcd.print(text);

M5.Lcd.print(M5.Lcd.textWidth(text));
```

* * *

## getTextDatum()

**功能:**

返回文字对齐方式 

**函数原型:**

`uint8_t setRotation(void)`

**函数参数:**

None

**例程:**

```arduino
#include <M5Stack.h>

M5.begin();

M5.Lcd.setTextDatum(MC_DATUM);

M5.Lcd.print(M5.Lcd.getTextDatum());
```

* * *

## setTextDatum()

**功能:**

设置文本对齐方式

**函数原型:**

`setTextDatum(uint8_t datum)`

**函数参数:**

| 参数 | 类型 | 描述 |
| --- | --- | --- |
| TL_DATUM | uint8_t | 左上角对齐 |
| TC_DATUM | uint8_t | 居中向上对齐 |
| TR_DATUM | uint8_t | 右上角对齐 |
| ML_DATUM | uint8_t | 中部左对齐 |
| MC_DATUM | uint8_t | 中心对齐 |
| MR_DATUM | uint8_t | 中部右对齐 |
| BL_DATUM | uint8_t | 左下角对齐 |
| BC_DATUM | uint8_t | 居中底部对齐 |
| BR_DATUM | uint8_t | 右下角对齐 |

**例程:**

```arduino
#include <M5Stack.h>

M5.begin();

M5.Lcd.setTextDatum(MC_DATUM);

M5.Lcd.drawString("hello", 160, 120, 2);
```

* * *

## height()

**功能:**

返回精灵高度

**函数原型:**

`int16_t  height(void)`

**函数参数:**

None

**例程:**

```arduino
#include <M5Stack.h>

M5.begin();

TFT_eSprite img = TFT_eSprite(&M5.Lcd);

img.createSprite(70, 80); 

M5.Lcd.print(img.height());
```

* * *

## setTextPadding()

**功能:**

覆盖文本重新分配显示区域

**函数原型:**

`setTextPadding(uint16_t x_width)`

**Function argument:**

| 参数 | 类型 | 描述 |
| --- | --- | --- |
| x_width | uint16_t | 空白区域宽度 |

**示例:**

```arduino
#include <M5Stack.h>

M5.begin();

M5.Lcd.drawString("Orbitron 32", 160, 60,2);

delay(2000);

M5.Lcd.setTextPadding(M5.Lcd.width() - 20);

M5.Lcd.drawString("Orbitron 32 with padding", 160, 60, 2);
```

* * *

## setTextWrap()

**功能:**

是否自动换行

**函数原型:**

`setTextWrap(boolean wrapX, boolean wrapY)`

**函数参数:**

| 参数 | 类型 | 描述 |
| --- | --- | --- |
| wrapX | boolean | X 方向  |
| wrapY | boolean | Y 方向 |

**例程:**

```arduino
#include <M5Stack.h>

M5.Lcd.setTextWrap(ture, true);
```
* * *

## hight()

**功能:**

返回屏幕高度

**函数原型:**

`int16_t height(void)`

**函数参数:**

None

**例程:**

```arduino
#include <M5Stack.h>

M5.begin();

M5.Lcd.print(M5.Lcd.height());
```

* * *

## pushSprite()

**功能:**

推送精灵到指定坐标 可以设置透明色

**函数原型:**

`void pushSprite(int32_t x, int32_t y, uint16_t transparent)`

**函数参数:**

| 参数  | 类型 | 描述 |  
| ---    | --- | -- |
| x | int32_t | X坐标 |
| y | int32_t | Y坐标 |
| transparent | int16_t | 透明色 可选 |


**Example of use:**

```arduino
#include <M5Stack.h>

M5.begin();

TFT_eSprite img = TFT_eSprite(&M5.Lcd);

img.createSprite(70, 80); 

img.pushSprite(35, 40, WHITE);
```

* * *

## drawRoundRect()

**函数原型：**

`drawRoundRect(int16_t x0, int16_t y0, int16_t w, int16_t h, int16_t radius, uint16_t color);`

**功能：以指定颜色画`圆角`矩形，其中矩形左上角坐标为(x,y)，宽高分别为width和height，圆角半径为radius。**

| 参数 | 描述 |
| --- | --- |
| w | 图形宽(单位: 像素) |
| h | 图形高(单位: 像素) |
| radius | 圆角半径 |
| color | 颜色值 |

*如果函数的 color 值没给出，则使用当前的背景颜色。*

**例程：**
```arduino
#include <M5Stack.h>

M5.begin();

M5.Lcd.fillRoundRect(180,70,122,10,4,BLUE);
```
<!-- ```python
# MicroPython
from m5stack import *
from m5ui import *

lcd.drawLine(0,0,12,12,lcd.WHITE)
``` -->

* * *

## width()

**功能:**

返回屏幕像素宽度

**函数原型:**

`int16_t width(void)`

**函数参数:**

None

**例程:**

```arduino
#include <M5Stack.h>

M5.begin();

M5.Lcd.print(M5.Lcd.width());
```

* * *

## fillRoundRect()

**功能:**

用左上角（x，y）和宽度和高度绘制一个填充的正方形。

**函数原型:**

`fillRoundRect(int16_t x, int16_t y, int16_t w, int16_t h, int16_t r, [uint16_t color]);`

**参数:**

| 参数 | 描述 | 型 |
| --- | --- | -- |
| x |矩形左上角的x坐标| int16_t |
| y |矩形左上角的Y坐标| int16_t |
| w |矩形宽度| int16_t |
| h |矩形的高度| int16_t |
| r |转角半径| int16_t |
|color|方线的颜色。可选。 | uint16_t |

**使用示例:**

```arduino
#include <M5Stack.h>

M5.begin();
M5.Lcd.fillRoundRect(180, 70, 122, 10, 4, BLUE);
```
* * *

## width()

**功能:**

返回精灵宽度

**函数原型:**

`int16_t  width(void)`

**函数参数:**

None

**例程:**

```arduino
#include <M5Stack.h>

M5.begin();

TFT_eSprite img = TFT_eSprite(&M5.Lcd);

img.createSprite(70, 80); 

M5.Lcd.print(img.width());
```

## drawFloat()

**功能:**

显示小数,最多小数点后7位

**函数原型:**

`int16_t drawFloat(float floatNumber, uint8_t dp, int32_t poX, int32_t poY);`

**函数参数:**

| 参数 | 类型 | 描述 |
| --- | ---      | --- |
| floatNumber | float | number |
| dp | uint8_t | Within seven decimal places |
| poX | int32_t | coordinate of Y |
| poY | int32_t | coordinate of Y |

**使用示例:**

```arduino
#include <M5Stack.h>

M5.Lcd.drawFloat(12.345, 3, 160, 120);
```

## drawEllipse()

**功能:**

用左上角（x，y）和宽度和高度绘制一个椭圆。

**函数原型:**

`drawEllipse(int16_t x0, int16_t y0, int32_t rx, int32_t ry, uint16_t color);`

**参数:**

| 参数 | 描述 | 型 |
| --- | --- | -- |
| x0  |椭圆的中心X坐标| int16_t |
| y0  |椭圆的中心Y坐标| int16_t |
| rx  |圆的宽度| int16_t |
| ry  |圆的高度| int16_t |
|color|圆形颜色| uint16_t |

**使用示例:**

```arduino
#include <M5Stack.h>

M5.Lcd.drawEllipse(100,100,20,30, TFT_GREEN);
```

## fillEllipse()

**功能:**

绘制一个填充的椭圆，指定左上角（x，y）以及宽度和高度。

**函数原型:**

`fillEllipse(int16_t x0, int16_t y0, int32_t rx, int32_t ry, uint16_t color);`

**参数:**

| 参数 | 描述 | 型 |
| --- | --- | --- |
| x0  |椭圆的中心X坐标| int16_t |
| y0  |椭圆的中心Y坐标| int16_t |
| rx  |圆的宽度| int16_t |
| ry  |圆的高度| int16_t |
|color|圆形颜色| uint16_t |


**使用示例:**

```arduino
#include <M5Stack.h>

M5.Lcd.drawEllipse(100,100,20,30, TFT_GREEN);
```


## color565()

**功能:**

更改为函数中使用的颜色代码（rgb 565）。

**函数原型:**

`color565(uint8_t red, uint8_t green, uint8_t blue);`

**参数:**

|参数|描述|类型|
| --- | --- |  ---  |
|red  | 红  | int8_t |
|green| 绿  | int8_t |
|blue | 蓝  | int8_t |


**返回值:**

无。  

**使用示例:**

```arduino
#include <M5Stack.h>

    uint16_t colorvalue=0;
    colorvalue=color565(255,255,255);

```

## deleteSprite()

**功能:**

 从内存删除精灵

**函数原型:**

`deleteSprite(void)`

**函数参数:**

None

**使用示例:**

```arduino
#include <M5Stack.h>

M5.begin();

TFT_eSprite img = TFT_eSprite(&M5.Lcd);

img.createSprite(70, 80); 

img.deleteSprite();
```

## setRotation()

**功能:**

旋转屏幕。

**函数原型:**

`setRotation(uint8_t r);`

**参数:**

|参数|描述|类型|
| --- | --- | -- |
| r | uint8_t | 旋转角度 r (x 90°)|


**使用示例:**

```arduino
#include <M5Stack.h>

	M5.begin();
	M5.Lcd.setRotation(1);
```
**情報:**

1）M5Stack的显示控制旋转90°，并在M5.Lcd.begin（）中执行setRotation（1）。

2）0至3旋转，4至7反向旋转。

## invertDisplay()

**功能:**

以负/正方式反转屏幕颜色。

**函数原型:**

`invertDisplay(boolean i);`

**参数:**

| 引数 |  型 | 説明 | 
| --- | --- | -- |
|  i|boolean | 如果翻转，则为 true|


**使用示例:**

```arduino
#include <M5Stack.h>

	M5.begin();
	M5.Lcd.invertDisplay(true);
```


## loadFont()

**功能:**

加载字体

**函数原型:**

`loadFont(String fontName, fs::FS &ffs);`

**参数:**

| 引数 | 型 || 説明 
| --- | --- | -- |
| fontName | String |字体文件名|
| ffs | fs :: FS |文件设备|

**使用示例:**

```arduino
#include <M5Stack.h>

M5.Lcd.loadFont("filename", SD);
```

## unloadFont()

**功能:**

卸载字体

**函数原型:**

`unloadFont();`

**参数:**

无。  

**使用示例:**

```arduino
#include <M5Stack.h>

M5.Lcd.unloadFont();
```

## fontsLoaded()

**功能:**

返回是否加载自己的字体

**函数原型:**

`fontsLoaded();`

**参数:**

无。  

**返回值:**

|值|描述|
|  ---  |  ---  |
| true |已加载|
| false |未读|

**使用示例:**

```arduino
#include <M5Stack.h>

if(M5.Lcd.unloadFont()){
	M5.Lcd.unloadFont();
}
```


## print()

**函数原型：**

`print();`

**功能：在屏幕的当前位置开始打印文本(字符串)text。**

*默认以前景颜色打印指定的内容。*

**例程：**
```arduino
#include <M5Stack.h>

M5.begin();

M5.Lcd.print("this is a print text function");
```
<!-- ```python
# MicroPython
from m5stack import *
from m5ui import *

lcd.drawLine(0,0,12,12,lcd.WHITE)
``` -->


## drawString()

**功能:**

绘制字符串

**函数原型:**

`drawString(const char *string, int32_t poX, int32_t poY, uint8_t font);`

`drawString(const char *string, int32_t poX, int32_t poY);`

`drawString(const String& string, int32_t poX, int32_t poY, uint8_t font);`

`drawString(const String& string, int32_t poX, int32_t poY);`


**参数:**


| 引数 | 型 | 説明 |  
| --- | --- | -- |
| poX | int32_t | 坐标X（左上角)  |
| poY | int32_t | 坐标Y（左上角)  |
| string | const char * /  String &| 一个字符串 |
| font  | uint8_t | 如果使用导入的字体 1   |

**返回值:**

无。  



## printf()

**功能:**

绘制指定的字符串。

**函数原型:**

`printf("格式规范",arg1...);`

**情報:**

格式规范可以根据通常的C语言格式指定。

**使用示例:**

```arduino
#include <M5Stack.h>

int a=1;
M5.begin();
M5.Lcd.printf("A=%d",a);
```


* * *

<!-- ## `lcd.clear([color])`

**例程：**
```python
lcd.clear()
```

**清屏(即以当前的背景颜色填充整个屏幕)。**
 -->

<!-- * * * -->

## Usage {docsify-ignore}

```arduino
#include <M5Stack.h>

M5.begin();

M5.Lcd.fillScreen(BLACK) #set the default background color
M5.Lcd.drawLine(0, 0, WHITE);
M5.Lcd.drawTriangle(22, 22, 69, 98, 51, 22, RED);
M5.Lcd.fillTriangle(122, 122, 169, 198, 151, 182, RED);
M5.Lcd.drawRect(180, 12, 122, 10, BLUE);
M5.Lcd.fillRect(180, 30, 122, 10, BLUE);
M5.Lcd.drawRoundRect(180, 50, 122, 10, 4, BLUE);
M5.Lcd.fillRoundRect(180, 70, 122, 10, 4, BLUE);
M5.Lcd.print("this is a print text function");
```

<!-- ```python
from machine import SPI, Pin
from display import LCD

spi = SPI(1, baudrate=32000000, mosi=Pin(23), miso=Pin(19), sck=Pin(18))

lcd = LCD(spi = spi) #lcd init
lcd.fillScreen(lcd.BLACK) #set the default background color

lcd.drawLine(0, 0, lcd.WHITE)
lcd.drawTriangle(22, 22, 69, 98, 51, 22, lcd.RED)
lcd.fillTriangle(122, 122, 169, 198, 151, 182, lcd.RED)
lcd.drawCircle(180, 180, 10, lcd.BLUE)
lcd.fillcircle(100, 100, 10, lcd.BLUE)
lcd.drawRect(180, 12, 122, 10, lcd.BLUE)
lcd.fillRect(180, 30, 122, 10, lcd.BLUE)
lcd.drawRoundRect(180, 50, 122, 10, 4, lcd.BLUE)
lcd.fillRoundRect(180, 70, 122, 10, 4, lcd.BLUE)
lcd.print('this is a print text function', 80, 80)
``` -->
