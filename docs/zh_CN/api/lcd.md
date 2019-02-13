# LCD

*屏幕像素为 320x240，以屏幕左上角为原点 (0,0)*

### fillScreen()

**函数原型：**

<mark>fillScreen(uint16_t color);</mark> // for arduino

<!-- <mark>fillScreen(color)</mark> # for micropython -->

**功能：以指定的颜色填充整个屏幕。**

| 参数 | 描述 |
| --- | --- |
| color | 颜色值 |

**例程**
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

<!-- ### <mark>lcd.setRotation(degree)</mark>

**例程**
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

<!-- ### <mark>lcd.setColor(color [, background_color])</mark> -->
### setTextColor()

**函数原型：**

<mark>setTextColor(uint16_t color, uint16_t backgroundcolor);</mark> // for arduino

<!-- <mark>setTextColor(color, backgroundcolor)</mark> # for micropython -->

**功能：设置显示文本的前景颜色和背景颜色。**

| 参数 | 描述 |
| --- | --- |
| color | 文本的前景颜色 |
| background_color| 文本的背景颜色 |

*如果函数的 background_color 值没给出，则使用当前的背景颜色。*

**例程**
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

### setCursor()

**函数原型：**

<mark>setCursor(uint16_t x0, uint16_t y0);</mark> // for arduino

<!-- <mark>setCursor(x0, y0)</mark> # for micropython -->

**功能：移动光标位置到 (x0, y0) 处。**

**例程**
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

### drawPixel()

**函数原型：**

<mark>drawPixel(int16_t x, int16_t y, uint16_t color);</mark> // for arduino

**功能：在位置(x,y)处画点。**

| 参数 | 描述 |
| --- | --- |
| color | 颜色值 |

*如果函数的 color 值没给出，则使用当前的背景颜色。*

**例程**
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

### drawLine()

**函数原型：**

<mark>drawLine(int16_t x0, int16_t y0, int16_t x1, int16_t y1, uint16_t color);</mark> // for arduino

**功能：以指定的颜色从点(x,y)到点(x1,y1)画直线。**

| 参数 | 描述 |
| --- | --- |
| color | 颜色值 |

*如果函数的 color 值没给出，则使用当前的背景颜色。*

**例程**
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

### drawTriangle()

**函数原型：**

<mark>drawTriangle(int16_t x0, int16_t y0, int16_t x1, int16_t y1, int16_t x2, int16_t y2, uint16_t color);</mark> // for arduino

**功能：以指定颜色画三角形，顶点分别为(x,y)，(x1,y1)和(x2,y2)。**

| 参数 | 描述 |
| --- | --- |
| color | 颜色值 |

*如果函数的 color 值没给出，则使用当前的背景颜色。*

**例程**
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

### fillTriangle()

**函数原型：**

<mark>fillTriangle(int16_t x0, int16_t y0, int16_t x1, int16_t y1, int16_t x2, int16_t y2, uint16_t color);</mark> // for arduino

**功能：以指定颜色画<mark>填充形式</mark>的三角形，顶点分别为(x,y)，(x1,y1)和(x2,y2)。**

| 参数 | 描述 |
| --- | --- |
| color | 颜色值 |

*如果函数的 color 值没给出，则使用当前的背景颜色。*

**例程**
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

### drawRect()

**函数原型：**

<mark>drawRect(int16_t x, int16_t y, int16_t w, int16_t h, uint16_t color);</mark> // for arduino

**功能：以指定颜色画矩形，其中矩形左上角坐标为(x,y)，宽高分别为width和height。**

| 参数 | 描述 |
| --- | --- |
| w | 图形宽(单位: 像素) |
| h | 图形高(单位: 像素) |
| color | 颜色值 |

*如果函数的 color 值没给出，则使用当前的背景颜色。*

**例程**
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

### fillRect()

**函数原型：**

<mark>fillRect(int16_t x, int16_t y, int16_t w, int16_t h, uint16_t color);</mark> // for arduino

**功能：以指定颜色画<mark>填充形式</mark>的矩形，其左上角坐标为(x,y)，宽高分别为width和height。**

| 参数 | 描述 |
| --- | --- |
| w | 图形宽(单位: 像素) |
| h | 图形高(单位: 像素) |
| color | 颜色值 |

*如果函数的 color 值没给出，则使用当前的背景颜色。*

**例程**
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

### drawRoundRect()

**函数原型：**

<mark>drawRoundRect(int16_t x0, int16_t y0, int16_t w, int16_t h, int16_t radius, uint16_t color);</mark> // for arduino

**功能：以指定颜色画<mark>圆角</mark>矩形，其中矩形左上角坐标为(x,y)，宽高分别为width和height，圆角半径为radius。**

| 参数 | 描述 |
| --- | --- |
| w | 图形宽(单位: 像素) |
| h | 图形高(单位: 像素) |
| radius | 圆角半径 |
| color | 颜色值 |

*如果函数的 color 值没给出，则使用当前的背景颜色。*

**例程**
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

### print()

**函数原型：**

<mark>print();</mark> // for arduino

**功能：在屏幕的当前位置开始打印文本(字符串)text。**

| 参数 | 描述 |
| --- | --- |
| text | 要打印的内容 |

*默认以前景颜色打印指定的内容*

**例程**
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

* * *

<!-- ### <mark>lcd.clear([color])</mark>

**例程**
```python
lcd.clear()
```

**清屏(即以当前的背景颜色填充整个屏幕)。**
 -->

<!-- * * * -->

### Usage {docsify-ignore}

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
