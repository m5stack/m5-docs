# LCD

*The screen pixel is 320x240, with the top left corner of the screen as the origin (0,0)*

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

<!-- ```arduinosetCursor(x0, y0)</mark> # for micropython -->

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

## drawLine()

**Syntax:**

<mark>drawLine(int16_t x0, int16_t y0, int16_t x1, int16_t </mark>y1, uint16_t color);

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

## drawTriangle()

**Syntax:**

<mark>drawTriangle(int16_t x0, int16_t y0, int16_t x1, </mark>int16_t y1, int16_t x2, int16_t y2, uint16_t color);

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

<mark>fillTriangle(int16_t x0, int16_t y0, int16_t x1, </mark>int16_t y1, int16_t x2, int16_t y2, uint16_t color);

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

<mark>drawRect(int16_t x, int16_t y, int16_t w, int16_t h, </mark>uint16_t color);

**Function: Draw the rectangle from the upper left point at (x,y) and width and height.**

| Param | Description |
| --- | --- |
| w | display phisical width in pixels (display’s smaller dimension) |
| h | display phisical height in pixels (display’s larger dimension) |
| color | color value |

*If color is not given, current background color is used*

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

<mark>fillRect(int16_t x, int16_t y, int16_t w, int16_t h, </mark>uint16_t color);

**Function: Fill the rectangle from the upper left point at (x,y) and width and height.**

| Param | Description |
| --- | --- |
| w | display phisical width in pixels (display’s smaller dimension) |
| h | display phisical height in pixels (display’s larger dimension) |
| color | color value |

*If color is not given, current background color is used*

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

<mark>drawRoundRect(int16_t x0, int16_t y0, int16_t w, </mark>int16_t h, int16_t radius, uint16_t color);

**Function: Draw the rectangle with rounded corners from the upper left point at (x,y) and width and height. Corner radius is given by radius argument.**

| Param | Description |
| --- | --- |
| w | display phisical width in pixels (display’s smaller dimension) |
| h | display phisical height in pixels (display’s larger dimension) |
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
