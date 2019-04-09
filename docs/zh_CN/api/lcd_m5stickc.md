# TFT 屏幕

*M5StickC 屏幕像素为 **80x160**，以屏幕左上角为原点 (0,0)*

## ScreenBreath()

**函数原型：**

<mark>void ScreenBreath(uint8_t brightness);</mark>

**功能：调节屏幕背光亮度。**

| 参数 | 描述 |
| --- | --- |
| brightness | 背光值 ( 值: 7 - 16 ) |

**例程：**
```arduino
#include <M5StackC.h>

M5.begin();
M5.Lcd.fillScreen(WHITE);

M5.Axp.ScreenBreath(7);
delay(2000);
M5.Axp.ScreenBreath(16);
```

* * *

## fillScreen()

**函数原型：**

<mark>fillScreen(uint16_t color);</mark>

**功能：以指定的颜色填充整个屏幕。**

| 参数 | 描述 |
| --- | --- |
| color | 颜色值 |

**例程：**
```arduino
#include <M5StackC.h>

M5.begin();

M5.Lcd.fillScreen(WHITE);
```

* * *

## setTextColor()

**函数原型：**

<mark>setTextColor(uint16_t color, uint16_t backgroundcolor);</mark>

**功能：设置显示文本的前景颜色和背景颜色。**

| 参数 | 描述 |
| --- | --- |
| color | 文本的前景颜色 |
| backgroundcolor| 文本的背景颜色 |

*如果函数的 backgroundcolor 值没给出，则使用当前的背景颜色。*

**例程：**
```arduino
#include <M5StackC.h>

M5.begin();

M5.Lcd.setTextColor(RED, WHITE);
```

* * *

## setCursor()

**函数原型：**

<mark>setCursor(int16_t x0, int16_t y0, uint8_t font);</mark>

<!-- <mark>setCursor(x0, y0)</mark> # for micropython -->

**功能：移动光标位置到 (x0, y0) 处。**

**例程：**
```arduino
#include <M5StackC.h>

M5.begin();

M5.Lcd.setCursor(7, 20, 2);
M5.Lcd.println("scan done");

M5.Lcd.setCursor(5, 60, 4);
M5.Lcd.printf("50 AP");
```

* * *

## drawPixel()

**函数原型：**

<mark>drawPixel(int16_t x, int16_t y, uint16_t color);</mark>

**功能：在位置(x,y)处画点。**

| 参数 | 描述 |
| --- | --- |
| color | 颜色值 |

*如果函数的 color 值没给出，则使用当前的背景颜色。*

**例程：**
```arduino
#include <M5StackC.h>

M5.begin();

M5.Lcd.drawPixel(22,22,RED);
```

* * *

## drawLine()

**函数原型：**

<mark>drawLine(int16_t x0, int16_t y0, int16_t x1, int16_t y1, uint16_t color);</mark>

**功能：以指定的颜色从点(x,y)到点(x1,y1)画直线。**

| 参数 | 描述 |
| --- | --- |
| color | 颜色值 |

*如果函数的 color 值没给出，则使用当前的背景颜色。*

**例程：**
```arduino
#include <M5StackC.h>

M5.begin();

M5.Lcd.drawLine(0,0,12,12,BLUE);
```

* * *

## drawTriangle()

**函数原型：**

<mark>drawTriangle(int16_t x0, int16_t y0, int16_t x1, int16_t y1, int16_t x2, int16_t y2, uint16_t color);</mark>

**功能：以指定颜色画三角形，顶点分别为(x,y)，(x1,y1)和(x2,y2)。**

| 参数 | 描述 |
| --- | --- |
| color | 颜色值 |

*如果函数的 color 值没给出，则使用当前的背景颜色。*

**例程：**
```arduino
#include <M5StackC.h>

M5.begin();

M5.Lcd.drawTriangle(22,22,69,98,51,22,RED);
```

* * *

## fillTriangle()

**函数原型：**

<mark>fillTriangle(int16_t x0, int16_t y0, int16_t x1, int16_t y1, int16_t x2, int16_t y2, uint16_t color);</mark>

**功能：以指定颜色画<mark>填充形式</mark>的三角形，顶点分别为(x,y)，(x1,y1)和(x2,y2)。**

| 参数 | 描述 |
| --- | --- |
| color | 颜色值 |

*如果函数的 color 值没给出，则使用当前的背景颜色。*

**例程：**
```arduino
#include <M5StackC.h>

M5.begin();

M5.Lcd.fillTriangle(22,22,69,98,51,22,RED);
```

* * *

## drawRect()

**函数原型：**

<mark>drawRect(int16_t x, int16_t y, int16_t w, int16_t h, uint16_t color);</mark>

**功能：以指定颜色画矩形，其中矩形左上角坐标为(x,y)，宽高分别为width和height。**

| 参数 | 描述 |
| --- | --- |
| w | 图形宽(单位: 像素) |
| h | 图形高(单位: 像素) |
| color | 颜色值 |

*如果函数的 color 值没给出，则使用当前的背景颜色。*

**例程：**
```arduino
#include <M5StackC.h>

M5.begin();

M5.Lcd.drawRect(50, 100, 30, 10, BLUE);
```

* * *

## fillRect()

**函数原型：**

<mark>fillRect(int16_t x, int16_t y, int16_t w, int16_t h, uint16_t color);</mark>

**功能：以指定颜色画<mark>填充形式</mark>的矩形，其左上角坐标为(x,y)，宽高分别为width和height。**

| 参数 | 描述 |
| --- | --- |
| w | 图形宽(单位: 像素) |
| h | 图形高(单位: 像素) |
| color | 颜色值 |

*如果函数的 color 值没给出，则使用当前的背景颜色。*

**例程：**
```arduino
#include <M5StackC.h>

M5.begin();

M5.Lcd.fillRect(50, 100, 20, 10, BLUE);
```

* * *

## drawRoundRect()

**函数原型：**

<mark>drawRoundRect(int16_t x0, int16_t y0, int16_t w, int16_t h, int16_t radius, uint16_t color);</mark>

**功能：以指定颜色画<mark>圆角</mark>矩形，其中矩形左上角坐标为(x,y)，宽高分别为width和height，圆角半径为radius。**

| 参数 | 描述 |
| --- | --- |
| w | 图形宽(单位: 像素) |
| h | 图形高(单位: 像素) |
| radius | 圆角半径 |
| color | 颜色值 |

*如果函数的 color 值没给出，则使用当前的背景颜色。*

**例程：**
```arduino
#include <M5StackC.h>

M5.begin();

M5.Lcd.fillRoundRect(40,70,20,10,4,BLUE);
```

* * *

## print()

**函数原型：**

<mark>print();</mark>

**功能：在屏幕的当前位置开始打印文本(字符串) text。**

*默认打印的内容颜色样式是黑底白字。*

**例程：**
```arduino
#include <M5StackC.h>

M5.begin();

M5.Lcd.print("print text");
```

## Usage {docsify-ignore}

```arduino
#include <M5StackC.h>

M5.begin();

M5.Lcd.fillScreen(WHITE) #set the default background color
M5.Lcd.drawLine(0, 0, WHITE);
M5.Lcd.drawTriangle(22,22,69,98,51,22,RED);
M5.Lcd.fillTriangle(22,22,69,98,51,22,RED);
M5.Lcd.drawRect(50, 100, 30, 10, BLUE);
M5.Lcd.fillRect(50, 100, 30, 10, BLUE);
M5.Lcd.drawRoundRect(40,70,20,10,4,BLUE);
M5.Lcd.fillRoundRect(40,70,20,10,4,BLUE);
M5.Lcd.print("print text");
```
