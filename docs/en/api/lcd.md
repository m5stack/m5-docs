# LCD

*The screen pixel is 320x240, with the top left corner of the screen as the origin (0,0)*

Color codes are predefined and can be used.

| Definition    | Value    | R  | G  | B   |
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

**Description:**

Initialize it for use.

**Syntax:**

<mark>begin();</mark>

**Function argument:**

None

**Function return value:**

None

**Note:**

1)If you do not want to initialize the LCD with M5.begin( ), call this function before using the display.


## sleep()

**Description:**

Switch the display to energy saving mode

**Syntax:**

<mark>sleep();</mark>

**Function argument:**

None

**Function return value:**

None

**Note:**

1) Call wakeup () function to wake up.

2) Since the LCD backlight of M5Stack is controlled separately, please adjust it with the setBrightness () function if necessary.

**Example of use:**

```arduino
#include <M5Stack.h>

M5.Lcd.sleep();
M5.Lcd.setBrightness(0);
```

## wakeup()

**Description:**

Restore the display from energy saving mode

**Syntax:**

<mark>wakeup();</mark>

**Function argument:**

None

**Function return value:**

None

**Note:**

1) Since the LCD backlight of M5Stack is controlled separately, please adjust it with the setBrightness () function if necessary.

**Example of use:**

```arduino
#include <M5Stack.h>

M5.Lcd.wakeup();
M5.Lcd.setBrightness(200);
```

## setBrightness()

**Description:**

Adjust the display backlight.

**Syntax:**

<mark>setBrightness(uint8_t brightness);</mark>

**Function argument:**


| argument | type | Description |  
| --- | --- | -- |
| brightness | uint8_t | Brightness (0: Off - 255:Full) |

**Function return value:**

None.

**Note:**

1) The backlight is controlled by PWM (44.1 KHz).

2) Many backlights have a direct effect on battery consumption.

**Example of use:**

```arduino
#include <M5Stack.h>

M5.Lcd.setBrightness(200);
```

## progressBar()

**Description:**

Display a bar that shows the progress.

**Syntax:**

<mark>progressBar(int x, int y, int w, int h, uint8_t val);</mark>

**Function argument:**


| argument | type | Description |  
| --- | --- | -- |
| x | int | Coordinate X(left corner)  |
| y | int | Coordinate Y(left corner)  |
| w  | int | width (px) |
| h  | int | height(px)  |
| val  | uint8_t | progress(0-100%)  |


**Function return value:**

None

**Note:**

1) The color is expressed in blue (0x09F1).

2) Please erase the background beforehand to draw only the additional amount.

**Example of use:**

```arduino
#include <M5Stack.h>

  M5.Lcd.fillRect(0,0,240,20,0);
  M5.Lcd.progressBar(0,0,240,20, 20);
```

## qrcode()

**Description:**

Generate a QR code.

**Syntax:**

<mark>qrcode(const char *string, uint16_t x, uint16_t y, uint8_t width, uint8_t version);</mark>

<mark>qrcode(const String &string, uint16_t x, uint16_t y, uint8_t width, uint8_t version);</mark>

**Function argument:**


| argument | type | Description |  
| --- | --- | -- |
| val  | string / String& | String to embed in QR  |
| x | uint16_t | Coordinate X(left corner)  |
| y | uint16_t | Coordinate Y(left corner)  |
| width  | uint8_t | width (px) |
| version  | uint8_t | QR code version  |


**Function return value:**

None

**Note:**

1) Please indicate the appropriate QR code version according to the number of characters.

**Example of use:**

```arduino
#include <M5Stack.h>

  M5.Lcd.qrcode("http://www.m5stack.com",50,10,220,6);

```

## drawBitmap()

**Description:**

Draw a bitmap

**Syntax:**

<mark>drawBitmap(int16_t x0, int16_t y0, int16_t w, int16_t h, const uint16_t *data);</mark>

<mark>drawBitmap(int16_t x0, int16_t y0, int16_t w, int16_t h, uint16_t *data);</mark>

<mark>drawBitmap(int16_t x0, int16_t y0, int16_t w, int16_t h, const uint16_t *data, uint16_t transparent);</mark>

<mark>drawBitmap(int16_t x0, int16_t y0, int16_t w, int16_t h, const uint8_t *data);</mark>

<mark>drawBitmap(int16_t x0, int16_t y0, int16_t w, int16_t h, uint8_t *data);</mark>

**Function argument:**


| argument | type | Description |  
| --- | --- | -- |
| x0 | uint16_t | Coordinate X(left corner)  |
| y0 | uint16_t | Coordinate Y(left corner)  |
| w  | int16_t | width (px) |
| h  | int16_t | height(px)  |
| data  | uint16_t* / uint8_t*| image data  |
| transparent  | uint16_t | Transparent color code  |

**Function return value:**

None

**Note:**

1) The color code is expressed by a total of 16 bits: red 5 bits, green 6 bits and blue 5 bits from the top.

**Example of use:**

See sample sketch:M5Stack->Advanced->drawXBitmap


## drawBmpFile()

**Description:**

Read a bitmap from a file and draw it.

**Syntax:**

<mark>drawBmpFile(fs::FS &fs, const char *path, uint16_t x, uint16_t y);</mark>


**Function argument:**


| argument | type | Description |  
| --- | --- | -- |
| fs | fs::FS | File stream |
| path  | const char * | file path  |
| x | int16_t | Coordinate X(left corner)  |
| y | int16_t | Coordinate Y(left corner)  |

**Function return value:**

None

**Note:**

1) It may not be possible to expand depending on the size and the number of bits.

**Example of use:**

```arduino
#include <M5Stack.h>
  M5.Lcd.drawBmpFile(SD, "/p2.bmp",0,0);
```


## drawJpg()

**Description:**

Read JPEG data from memory and draw it.

**Syntax:**

<mark>void drawJpg(const uint8_t *jpg_data, size_t jpg_len, uint16_t x = 0,
                  uint16_t y = 0, uint16_t maxWidth = 0, uint16_t maxHeight = 0,
                  uint16_t offX = 0, uint16_t offY = 0,
                  jpeg_div_t scale = JPEG_DIV_NONE);</mark>


**Function argument:**


| argument | type | Description |  
| --- | --- | -- |
| jpg_data |uint8_t * | top of data |
| jpg_len  | size_t | data length  |
| x | uint16_t | Coordinate X (left corner)  |
| y | uint16_t | Coordinate Y (left corner)  |
|maxWidth | uint16_t | Maximum width (px)  |
|maxHeight | uint16_t | Maximum height (px)  |
| offX | uint16_t |offset X (px)  |
| offY | uint16_t |offset Y (px)  |
| scale | jpeg_div_t | scale  |


scale (jpeg_div_t)：

| Definition |Description |  
| --- | -- |
| JPEG_DIV_NONE|no care.|
| JPEG_DIV_2   |1/2|
| JPEG_DIV_4   |1/4|
| JPEG_DIV_8   |1/8|
| JPEG_DIV_MAX |MAX|


**Function return value:**

None

**Note:**

1) Depending on the size, the number of bits and the format (progressive etc.), it may not be possible to expand.

## drawJpgFile()

**Description:**

Read JPEG data from a file and draw it.

**Syntax:**

<mark>void drawJpgFile(fs::FS &fs, const char *path, uint16_t x = 0, uint16_t y = 0,
                    uint16_t maxWidth = 0, uint16_t maxHeight = 0,
                    uint16_t offX = 0, uint16_t offY = 0,
                    jpeg_div_t scale = JPEG_DIV_NONE);</mark>


**Function argument:**

| argument | type | Description |  
| --- | --- | -- |
| fs |fs::FS &| file stream  |
| path  | const char * | file path |
| x | uint16_t | Coordinate X(left corner)  |
| y | uint16_t | Coordinate Y(left corner)  |
|maxWidth | uint16_t | Max Width (px)  |
|maxHeight | uint16_t | Max Height (px)  |
| offX | uint16_t | Offset X (px)  |
| offY | uint16_t | Offset Y (px)  |
| scale | jpeg_div_t | Scale  |


Scale(jpeg_div_t)：

| Definition |Description |  
| --- | -- |
| JPEG_DIV_NONE|no care.|
| JPEG_DIV_2   |1/2|
| JPEG_DIV_4   |1/4|
| JPEG_DIV_8   |1/8|
| JPEG_DIV_MAX |MAX|


**Function return value:**

None

**Note:**

1) Depending on the size and format (progressive etc.), it may not be possible to expand.


## fillScreen()

**Syntax:**

<mark>fillScreen(uint16_t color);</mark>

**Function: Fill the entire screen with the specified color.**

| Param | Description |
| --- | --- |
| color | the color to be filled |

**Example:**

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

<!-- ### ```arduinolcd.setColor(color [, background_color])</mark> -->

## setTextColor()

**Syntax:**

<mark>setTextColor(uint16_t color, uint16_t </mark>backgroundcolor);

**Function: Set the foreground color and background color of the displayed text.**

| Param | Description |
| --- | --- |
| color | the color of text |
| backgroundcolor| the background color of text |

*If backgroundcolor is not given, current background color is used*

**Example:**

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

## setCursor()

**Syntax:**

<mark>setCursor(uint16_t x0, uint16_t y0);</mark>



**Function: Move the cursor to (x0, y0).**

**Example:**

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

## getCursorX()

**Syntax:**

<mark>uint16_t getCursorX(void);</mark>

<!-- ```arduinosetCursor(x0, y0)</mark> # for micropython -->

**Function: get the cursor of x.**

**Example:**

```arduino
#include <M5Stack.h>

M5.begin();

M5.Lcd.print("Hello   ");

int X = M5.Lcd.getCursorX();

M5.Lcd.print(X);
```

## getCursorY()

**Syntax:**

<mark>uint16_t getCursorY(void);</mark>

<!-- ```arduinosetCursor(x0, y0)</mark> # for micropython -->

**Function: get the cursor of y.**

**Example:**

```arduino
#include <M5Stack.h>

M5.begin();

M5.Lcd.setCursor(0, 20);
M5.Lcd.print("Hello   ");

int Y = M5.Lcd.getCursorY();

M5.Lcd.print(Y);
```

##setTextSize()

**Syntax:**

<mark>setTextSize(uint8_t);</mark>

<!-- ```arduinosetCursor(x0, y0)</mark> # for micropython -->

**Function: set the Size of Text.**

**Example:**

```arduino
#include <M5Stack.h>

M5.begin();

M5.Lcd.setTextSize(7);

M5.Lcd.print("Hello");
```

##clear()

**Syntax:**

<mark>void clear(uint16_t color);</mark>

<!-- ```arduinosetCursor(x0, y0)</mark> # for micropython -->

**Function:  fill color use of clear screen.**

**Example:**

```arduino
#include <M5Stack.h>

M5.begin();

M5.Lcd.print("Hello");

delay(2000);

M5.Lcd.clear(BLACK);
```

## drawPixel()

**Syntax:**

<mark>drawPixel(int16_t x, int16_t y, uint16_t color);</mark>

**Function: Draw a point at position (x, y).**

| Param | Description |
| --- | --- |
| color | color value |

*If color is not given, current background color is used*

**Example:**

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


## alphaBlend()

**Description:**

Blend foreground and background and return new colour.

**Syntax:**

<mark>uint16_t alphaBlend(uint8_t alpha, uint16_t fgc, uint16_t bgc);</mark>

**Function argument:**

| argument | Description | type |
| --- | --- | -- |
| alpha | transparency | uint8_t |
| fgc | Foreground color | uint16_t |
| bgc | Background color | uint16_t |

**Example of use:**

```arduino
#include <M5Stack.h>

M5.begin();

int val = M5.Lcd.alphaBlend(128, 0X00FF00, 0XFF0000);

M5.Lcd.fillRect(0, 0, 320, 240, val);

M5.Lcd.print(val);
```

## drawChar()

**Description:**

Draws a straight line of the specified color from the specified start point to the end point.

**Syntax:**

<mark>drawChar(int32_t x, int32_t y, uint16_t c, uint32_t color, uint32_t bg, uint8_t size);</mark>

**Function argument:**

| argument | type       | Description |  
| ---  | ---      | -- |
| x    | int32_t  | Coordinate X (upper left) |
| y    | int32_t  | Coordinate Y (upper left) |
| c    | uint16_t | Character code |
|color | uint32_t | Drawing color |
|bg    | uint32_t | Background color |
|size  | uint8_t  | Character size |

**Example of use:**

```arduino
#include <M5Stack.h>

	M5.begin();
	M5.Lcd.drawChar(0,0,'A',TFT_GREEN,TFT_BLACK,3);
```

## drawChar()

**Description:**

Draws a straight line of  the specified start point to the end point.

**Syntax:**

<mark>drawChar(int16_t uniCode, int32_t x, uint16_t y, uint8_t font);</mark>

**Function argument:**

| argument | type       | Description |  
| ---  | ---      | -- |
| uniCode | int32_t  | char |
| x   | int32_t  | Coordinate X  |
| y    | uint16_t | coordinate Y |
| font | uint32_t | font |

**Example of use:**

```arduino
#include <M5Stack.h>

	M5.begin();
	M5.Lcd.drawChar('A', 160, 120, 2);
```

## drawNumber()

**Description:**

draw a long integer.

**Syntax:**

<mark>drawNumber(long long_num, int32_t poX, int32_t poY);</mark>

**Function argument:**

| Argument | Type | Description |
| --- | ---      | --- |
| long_num | long | number |
| poX | int32_t | coordinate of X |
| poY | int32_t | coordinate of Y |

**Example of use:**

```arduino
#include <M5Stack.h>

M5.Lcd.drawNumber(12345, 160, 120);
```

## drawFloat()

**Description:**

drawFloat, prints 7 non zero digits maximum

**Syntax:**

<mark>int16_t drawFloat(float floatNumber, uint8_t dp, int32_t poX, int32_t poY);</mark>

**Function argument:**

| Argument | Type | Description |
| --- | ---      | --- |
| floatNumber | float | number |
| dp | uint8_t | Within seven decimal places |
| poX | int32_t | coordinate of Y |
| poY | int32_t | coordinate of Y |

**Example of use:**

```arduino
#include <M5Stack.h>

M5.Lcd.drawFloat(12.345, 3, 160, 120);
```

## drawFastVLine()

**Description:**

Draw a vertical line from X to Y.

**Syntax:**

<mark>drawFastVLine(int32_t x, int32_t y, int32_t h, uint32_t color);</mark>

**Function argument:**

| Argument | Type | Description |
| --- | ---      | --- |
| x   | int16_t  | x position of start point |
| y   | int16_t  | y position of start point |
| h   | int16_t  | line length |
|color| uint32_t | Line color (optional) |

**Example of use:**

```arduino
#include <M5Stack.h>

M5.Lcd.drawFastHLine(0, 0, 12, TFT_GREEN);
```

## drawFastVLine()

**Description:**

Draw a horizontal line from X to Y.

**Syntax:**

<mark>drawFastHLine(int32_t x, int32_t y, int32_t w, uint32_t color);</mark>

**Function argument:**

| Argument | Type | Description |
| --- | ---      | --- |
| x   | int16_t  | x position of start point |
| y   | int16_t  | y position of start point |
| h   | int16_t  | line length |
|color| uint32_t | Line color (optional) |

**Example of use:**

```arduino
#include <M5Stack.h>

M5.Lcd.drawFastHLine(0, 0, 12, TFT_GREEN);
```


## drawLine()

**Syntax:**

<mark>drawLine(int16_t x0, int16_t y0, int16_t x1, int16_t y1, uint16_t color); </mark>

**Function: Draw the line from point (x,y) to point (x1,y1).**

| Param | Description |
| --- | --- |
| color | color value |

*If color is not given, current background color is used*

**Example:**

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

## drawCircleHelper()							

**Syntax:**

<mark>drawCircleHelper( int32_t x0, int32_t y0, int32_t r, uint8_t cornername, uint32_t color);</mark>							

**Function: Draw a quarter circle with the center at the point x0 and y0, with radius r, and a quarter C, and a color from 0 to 65535**

| Argument | Type | Description |
| --- | ---      | --- |
| x0   | int32_t  | x0 position of center point |
| y0   | int32_t  | y0 position of center point |
| r   | int32_t  | radius |
| cornername| int32_t | quarter corn |
|color| uint32_t |  color  0~65535 |

**Example:**

```arduino
#include <M5Stack.h>

M5.begin();

M5.Lcd.drawCircleHelper(160, 120, 30, 4, 0XFF00FF);
```

<!-- ```python
# MicroPython
from m5stack import *
from m5ui import *

lcd.drawLine(0,0,12,12,lcd.WHITE)
``` -->

## drawCircle()							

**Syntax:**

<mark>drawCircle(int32_t x0, int32_t y0, int32_t r, uint32_t color);</mark>							

**Function: Draw a circle on point(x0, y0), Radis is r with color**

| Argument | Type | Description |
| --- | ---      | --- |
| x0   | int32_t  | x0 position of center point |
| y0   | int32_t  | y0 position of center point |
| r   | int32_t  | radius |
|color| uint32_t |  color  0~65535 |

**Example:**

```arduino
#include <M5Stack.h>

M5.begin();

M5.Lcd.drawCircle(160, 120, 30, 0XFF00FF);
```

## fillCircle()							

**Syntax:**

<mark>fillCircle(int32_t x0, int32_t y0, int32_t r, uint32_t color);</mark>							

**Function: Draw a filled circle on point(x0, y0), Radis is r with color**

| Argument | Type | Description |
| --- | ---      | --- |
| x0   | int32_t  | x0 position of center point |
| y0   | int32_t  | y0 position of center point |
| r   | int32_t  | radius |
|color| uint32_t |  color  0~65535 |

**Example:**

```arduino
#include <M5Stack.h>

M5.begin();

M5.Lcd.fillCircle(160, 120, 30, 0XFF00FF);
```

## drawTriangle()

**Syntax:**

<mark>drawTriangle(int16_t x0, int16_t y0, int16_t x1, int16_t y1, int16_t x2, int16_t y2, uint16_t color); </mark>

**Function: Draw the triangel between points (x,y), (x1,y1) and (x2,y2).**

| Param | Description |
| --- | --- |
| color | color value |

*If color is not given, current background color is used*

**Example:**

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

## fillTriangle()

**Syntax:**

<mark>fillTriangle(int16_t x0, int16_t y0, int16_t x1, int16_t y1, int16_t x2, int16_t y2, uint16_t color); </mark>

**Function: Fill the triangel between points (x,y), (x1,y1) and (x2,y2).**

| Param | Description |
| --- | --- |
| color | color value |

*If color is not given, current background color is used*

**Example:**

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

## drawRect()

**Syntax:**

<mark>drawRect(int16_t x, int16_t y, int16_t w, int16_t h, uint16_t color); </mark>

**Function: Draw the rectangle from the upper left point at (x,y) and width and height.**

| Param | Description |
| --- | --- |
| x     | position of point | int16_t |
| y     | position of point | int16_t |
| w     | width of rectangle | int16_t |
| h     | height of rectangle | int16_t |
| color | Line color.(Optional.) | uint16_t |

**Example:**

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

## fillRect()

**Syntax:**

<mark>fillRect(int16_t x, int16_t y, int16_t w, int16_t h,uint16_t color); </mark>

**Function: Fill the rectangle from the upper left point at (x,y) and width and height.**

| Param | Description |
| --- | --- |
| x     | position of point | int16_t |
| y     | position of point | int16_t |
| w     | width of rectangle | int16_t |
| h     | height of rectangle | int16_t |
| color | Line color.(Optional.) | uint16_t |

**Example:**

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

## drawRoundRect()

**Syntax:**

<mark>drawRoundRect(int16_t x0, int16_t y0, int16_t w,int16_t h, int16_t radius, uint16_t color); </mark>

**Function: Draw the rectangle with rounded corners from the upper left point at (x,y) and width and height. Corner radius is given by radius argument.**

| Param | Description |
| --- | --- |
| x     | position of point | int16_t |
| y     | position of point | int16_t |
| w     | width of circle | int16_t |
| h     | height of circle | int16_t |
| radius | the radius of circle |
| color | color value |

*If color is not given, current background color is used*

**Example:**

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

## fillRoundRect()

**Description:**

Draw a filled square with the upper left point (x, y) and width and height.

**Syntax:**

<mark>fillRoundRect(int16_t x, int16_t y, int16_t w, int16_t h, int16_t r, [uint16_t color]);</mark>

**Function argument:**

| argument  | Description | type |
| ---   | --- | -- |
|  x    |coordinate of the top left corner of the rectangle | int16_t |
|  y    |coordinate of the top left corner of the rectangle | int16_t |
|  w    | width of rectangle | int16_t |
|  h    | height of rectangle | int16_t |
|  r    | corner radius | int16_t |
| color | Color of the square line. Optional. | uint16_t |

**Example of use:**

```arduino
#include <M5Stack.h>

M5.begin();
M5.Lcd.fillRoundRect(180, 70, 122, 10, 4, BLUE);
```


## drawEllipse()

**Description:**

Draw an ellipse with the top left point (x, y) and the width and height.

**Syntax:**

<mark>drawEllipse(int16_t x0, int16_t y0, int32_t rx, int32_t ry, uint16_t color);</mark>

**Function argument:**

| argument | Description | type |
| ---  | --- | -- |
| x0   | Center X coordinate of the ellipse | int16_t |
| y0   | Center Y coordinate of the ellipse | int16_t |
| rx   | Width of circle | int16_t |
| ry   | Height of circle | int16_t |
|color | circle color | uint16_t |

**Example of use:**

```arduino
#include <M5Stack.h>

M5.Lcd.drawEllipse(100,100,20,30, TFT_GREEN);
```

## fillEllipse()

**Description:**

Draw a filled ellipse, specifying the top left point (x, y) and the width and height.

**Syntax:**

<mark>fillEllipse(int16_t x0, int16_t y0, int32_t rx, int32_t ry, uint16_t color);</mark>

**Function argument:**

| argument | Description | type |
| ---  | --- | -- |
| x0   | Center X coordinate of the ellipse | int16_t |
| y0   | Center Y coordinate of the ellipse | int16_t |
| rx   | Width of circle | int16_t |
| ry   | Height of circle | int16_t |
|color | circle color | uint16_t |

**Example of use:**

```arduino
#include <M5Stack.h>

M5.Lcd.drawEllipse(100,100,20,30, TFT_GREEN);
```


## color565()

**Description:**

Change to the color code (rgb 565) used in the function.

**Syntax:**

<mark>color565(uint8_t red, uint8_t green, uint8_t blue);</mark>

**Function argument:**

| Argument | Description | Type |
| --- | --- | --- |
| red | red | int8_t |
| green | green | int8_t |
| blue | blue | int8_t |


**Function return value:**

None

**Example of use:**

```arduino
#include <M5Stack.h>

    uint16_t colorvalue=0;
    colorvalue=color565(255,255,255);

```

## setRotation()

**Description:**

Rotate the screen.

**Syntax:**

<mark>setRotation(uint8_t r);</mark>

**Function argument:**

| argument |  type | Description | 
| --- | --- | -- |
| r | uint8_t | Rotation angle r (unit:90 deg) |


**Example of use:**

```arduino
#include <M5Stack.h>

	M5.begin();
	M5.Lcd.setRotation(1);
```
**Note:**

1) The display control of M5Stack is rotated by 90 °, and setRotation (1) is executed in M5.Lcd.begin ().

2) 0 to 3 rotate, 4 to 7 reverse and rotate.


## invertDisplay()

**Description:**

Reverse the screen color in negative / positive.

**Syntax:**

<mark>invertDisplay(boolean i);</mark>

**Function argument:**

| Argument | Type | Description |
| --- | --- |--- |
| i | boolean | true : inverted |


**Example of use:**

```arduino
#include <M5Stack.h>

	M5.begin();
	M5.Lcd.invertDisplay(true);
```


## loadFont()

**Description:**

Load a font

**Syntax:**

<mark>loadFont(String fontName, fs::FS &ffs);</mark>

**Function argument:**

| argument | type | Description |
| --- | --- | --- |
| fontName | String | font filepath  |
| ffs | fs::FS | file stream |

**Example of use:**

```arduino
#include <M5Stack.h>

M5.Lcd.loadFont("filename", SD);
```

## setTextWrap()

**Description:**

Whether to automatically wrap the display

**Syntax:**

<mark>setTextWrap(boolean wrapX, boolean wrapY)</mark>

**Function argument:**

| argument | type | Description |
| --- | --- | --- |
| wrapX | boolean | X direction  |
| wrapY | boolean | Y direction |

**Example of use:**

```arduino
#include <M5Stack.h>

M5.Lcd.setTextWrap(ture, true);
```

## setTextDatum()

**Description:**

Set the text position reference datum

**Syntax:**

<mark>setTextDatum(uint8_t datum)</mark>

**Function argument:**

| argument | type | Description |
| --- | --- | --- |
| TL_DATUM | uint8_t | Top left (default) |
| TC_DATUM | uint8_t | Top centre |
| TR_DATUM | uint8_t | Top right |
| ML_DATUM | uint8_t | Middle left |
| MC_DATUM | uint8_t | Middle centre |
| MR_DATUM | uint8_t | Middle right |
| BL_DATUM | uint8_t | Bottom left |
| BC_DATUM | uint8_t | Bottom centre |
| BR_DATUM | uint8_t | Bottom right |

**Example of use:**

```arduino
#include <M5Stack.h>

M5.begin();

M5.Lcd.setTextDatum(MC_DATUM);

M5.Lcd.drawString("hello", 160, 120, 2);
```

## setTextPadding()

**Description:**

text background padding some pixel to over-write the old text

**Syntax:**

<mark>setTextPadding(uint16_t x_width)</mark>

**Function argument:**

| argument | type | Description |
| --- | --- | --- |
| x_width | uint16_t | Blanked area will be width of pixels |

**Example of use:**

```arduino
#include <M5Stack.h>

M5.begin();

M5.Lcd.drawString("Orbitron 32", 160, 60,2);

delay(2000);

M5.Lcd.setTextPadding(M5.Lcd.width() - 20);

M5.Lcd.drawString("Orbitron 32 with padding", 160, 60, 2);
```

## getRotation()

**Description:**

Return the rotation value (as used by setRotation())

**Syntax:**

<mark>uint8_t getRotation(void)</mark>

**Function argument:**

None

**Example of use:**

```arduino
#include <M5Stack.h>

M5.begin();

M5.Lcd.print(M5.Lcd.getRotation());
```

## width()

**Description:**

Return the pixel width of display (per current rotation)

**Syntax:**

<mark>int16_t width(void)</mark>

**Function argument:**

None

**Example of use:**

```arduino
#include <M5Stack.h>

M5.begin();

M5.Lcd.print(M5.Lcd.width());
```

## hight()

**Description:**

Return the pixel height of display (per current rotation)

**Syntax:**

<mark>int16_t height(void)</mark>

**Function argument:**

None

**Example of use:**

```arduino
#include <M5Stack.h>

M5.begin();

M5.Lcd.print(M5.Lcd.height());
```

## textWidth()

**Description:**

Return the width in pixels of a string in a given font

**Syntax:**

<mark>int16_t textWidth(const String& string)</mark>

**Function argument:**

| argument | type | Description |
| --- | --- | --- |
| string | const String& | text String |

**Example of use:**

```arduino
#include <M5Stack.h>

M5.begin();

String text = "hello  ";

M5.Lcd.print(text);

M5.Lcd.print(M5.Lcd.textWidth(text));
```

## getTextDatum()

**Description:**

Return the text datum value (as used by setTextDatum()) 

**Syntax:**

<mark>uint8_t setRotation(void)</mark>

**Function argument:**

None

**Example of use:**

```arduino
#include <M5Stack.h>

M5.begin();

M5.Lcd.setTextDatum(MC_DATUM);

M5.Lcd.print(M5.Lcd.getTextDatum());
```

##int16_t fontHeight()

**Description:**

rn the height of a font (yAdvance for free fonts)

**Syntax:**

<mark>int16_t fontHeight(void)</mark>

**Function argument:**

None

**Example of use:**

```arduino
#include <M5Stack.h>

M5.begin();

M5.Lcd.print(M5.Lcd.fontHeight());
```

##drawCentreString()

**Description:**

draw string centred on dX

**Syntax:**

<mark>int16_t drawCentreString(const String& string, int32_t dX, int32_t poY, uint8_t font)</mark>

**Function argument:**

| argument | type | Description |
| --- | --- | --- |
| string | const String& | text String |
| dX | int32_t | center point on dX |
| poY | int32_t | coordinate Y |
| font | uint8_t | font name |

**Example of use:**

```arduino
#include <M5Stack.h>

M5.begin();

M5.Lcd.drawCentreString("hello", 160, 0, 2);
```

##drawRightString()

**Description:**

draw string right justified to dX,deprecated, use setTextDatum()

**Syntax:**

<mark>int16_t drawRightString(const String& string, int32_t dX, int32_t poY, uint8_t font)</mark>

**Function argument:**

| argument | type | Description |
| --- | --- | --- |
| string | const String& | text String |
| dX | int32_t | Right eage on dX |
| poY | int32_t | coordinate Y |
| font | uint8_t | font name |

**Example of use:**

```arduino
#include <M5Stack.h>

M5.begin();

M5.Lcd.drawRightString("hello", 160, 0, 2);
```

##int16_t fontHeight()

**Description:**

rn the height of a font (yAdvance for free fonts)

**Syntax:**

<mark>int16_t fontHeight(void)</mark>

**Function argument:**

None

**Example of use:**

```arduino
#include <M5Stack.h>

M5.begin();

M5.Lcd.print(M5.Lcd.fontHeight());
```

## unloadFont()

**Description:**

Finish using a font

**Syntax:**

<mark>unloadFont();</mark>

**Function argument:**

None

**Example of use:**

```arduino
#include <M5Stack.h>

M5.Lcd.unloadFont();
```

## fontsLoaded()

**Description:**

Returns whether you are loading a font

**Syntax:**

<mark>fontsLoaded();</mark>

**Function argument:**

None

**Function return value:**

|値   |Description        |
|--   |--          |
| true | loaded |
| false | Unread |

**Example of use:**

```arduino
#include <M5Stack.h>

if(M5.Lcd.unloadFont()){
	M5.Lcd.unloadFont();
}
```



## print()

**Syntax:**

<mark>print();</mark>

**Function: Start printing text at the current position of the screen.**

*The specified content is printed in the foreground color by default.*

**Example:**

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

**Description:**

Draw a character

**Syntax:**

<mark>drawString(const char *string, int32_t poX, int32_t poY, uint8_t font);</mark>

<mark>drawString(const char *string, int32_t poX, int32_t poY);</mark>

<mark>drawString(const String& string, int32_t poX, int32_t poY, uint8_t font);</mark>

<mark>drawString(const String& string, int32_t poX, int32_t poY);</mark>


**Function argument:**


| argument   | type | Description |  
| ---    | --- | -- |
| poX    | int32_t | Coordinate X (upper left) |
| poY    | int32_t | Coordinate Y (upper left) |
| string | const char * / String & | String |
| font   | uint8_t | 1: If use the loaded font  |

**Function return value:**

None



## printf()

**Description:**

Draw the specified string.

**Syntax:**

<mark>printf("Format specification",arg1...);</mark>

**Note:**

The format specification can be specified according to the usual C language format.

**Example of use:**

```arduino
#include <M5Stack.h>

int a=1;
M5.begin();
M5.Lcd.printf("A=%d",a);
```

##createSprite()

**Description:**

 Create a sprite of width x height pixels, return a pointer to the RAM area

**Syntax:**

<mark>void* createSprite(int16_t w, int16_t h)</mark>

**Function argument:**

| argument   | type | Description |  
| ---    | --- | -- |
| w | int16_t | create sprite width |
| h | int16_t | create sprite height |

**Example of use:**

```arduino
#include <M5Stack.h>

M5.begin();

TFT_eSprite img = TFT_eSprite(&M5.Lcd);

img.createSprite(70, 80); 
```

## deleteSprite()

**Description:**

 Delete the sprite to free up memory (RAM)

**Syntax:**

<mark>deleteSprite(void)</mark>

**Function argument:**

None

**Example of use:**

```arduino
#include <M5Stack.h>

M5.begin();

TFT_eSprite img = TFT_eSprite(&M5.Lcd);

img.createSprite(70, 80); 

img.deleteSprite();
```

## setColorDepth()

**Description:**

 set the colour depth to 1, 8 or 16 bits,Can be used to change depth an existing sprite

**Syntax:**

<mark>void setColorDepth(int8_t bit)</mark>

**Function argument:**

| argument   | type | Description |  
| ---    | --- | -- |
| bit | int8_t | color depth bits |

**Example of use:**

```arduino
#include <M5Stack.h>

M5.begin();

TFT_eSprite img = TFT_eSprite(&M5.Lcd);

img.setColorDepth(8);

img.createSprite(70, 80); 
```

## fillSprite()

**Description:**

Fill the whole sprite with defined colour

**Syntax:**

<mark>void fillSprite(uint32_t color)</mark>

**Function argument:**

| argument   | type | Description |  
| ---    | --- | -- |
| color | int32_t | filled color |

**Example of use:**

```arduino
#include <M5Stack.h>

M5.begin();

TFT_eSprite img = TFT_eSprite(&M5.Lcd);

img.createSprite(70, 80); 

img.fillSprite(WHITE);
```

## pushSprite()

**Description:**

Push the sprite to the TFT at x, y,Optionally a "transparent" colour can be defined, pixels of that colour will not be rendered

**Syntax:**

<mark>void pushSprite(int32_t x, int32_t y, uint16_t transparent)</mark>

**Function argument:**

| argument   | type | Description |  
| ---    | --- | -- |
| x | int32_t | coordinate x |
| y | int32_t | coordinate y |
| transparent | int16_t | optional |


**Example of use:**

```arduino
#include <M5Stack.h>

M5.begin();

TFT_eSprite img = TFT_eSprite(&M5.Lcd);

img.createSprite(70, 80); 

img.pushSprite(35, 40, WHITE);
```

## width()

**Description:**

Return the width of the sprite

**Syntax:**

<mark>int16_t  width(void)</mark>

**Function argument:**

None

**Example of use:**

```arduino
#include <M5Stack.h>

M5.begin();

TFT_eSprite img = TFT_eSprite(&M5.Lcd);

img.createSprite(70, 80); 

M5.Lcd.print(img.width());
```

## height()

**Description:**

Return the height of the sprite

**Syntax:**

<mark>int16_t  height(void)</mark>

**Function argument:**

None

**Example of use:**

```arduino
#include <M5Stack.h>

M5.begin();

TFT_eSprite img = TFT_eSprite(&M5.Lcd);

img.createSprite(70, 80); 

M5.Lcd.print(img.height());
```

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
