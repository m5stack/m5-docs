# LCD

<!-- 中文 | [English](/en/api_reference/micropython/api_lcd) | [日本語](/ja/api_reference/micropython/api_lcd) -->

*屏幕像素为320x240，以屏幕左上角为原点(0,0)*

### <mark>M5.lcd.setBrightness(uint8_t brightness);</mark>

**例程**
```c++
M5.lcd.setBrightness(200);
```

**设置整个屏幕显示的亮度。**

| 参数 | 描述 |
| --- | --- |
| brightness | 屏幕的亮度(0-254) |

* * *

### <mark>M5.Lcd.setCursor(uint16_t x0, uint16_t y0);</mark>

**例程**
```c++
M5.lcd.setCursor(20, 40);
```

**设置下一次要显示的起始位置(x0, y0)**

* * *

### <mark>M5.Lcd.fillScreen(uint16_t color);</mark>
**例程**
```c++
M5.Lcd.fillScreen(BLUE);
```
**以指定的颜色填充整个屏幕。**

| 参数 | 描述 |
| --- | --- |
| color | 颜色值 |

* * *

### <mark>M5.Lcd.drawPixel(int16_t x, int16_t y, uint16_t color);</mark>
**例程**
```c++
M5.Lcd.drawPixel(20, 40);
```
**在位置(x,y)处画color颜色的点。**

*如果函数的color值没给出，则使用当前的背景颜色。*

* * *

### <mark>M5.Lcd.drawLine(int16_t x0, int16_t y0, int16_t x1, int16_t y1, uint16_t color);</mark>
**例程**
```c++
M5.Lcd.drawLine(0,0,12,12,BLUE);
```
**以指定的颜色color从点(x0,y0)到点(x1,y1)画直线。**

*如果函数的color值没给出，则使用当前的背景颜色。*

* * *

### <mark>M5.Lcd.drawTriangle(int16_t x0, int16_t y0, int16_t x1, int16_t y1, int16_t x2, int16_t y2, uint16_t color);</mark>

**例程**
```c++
M5.Lcd.drawTriangle(22,22,69,98,51,22,BLUE);
```

**以指定颜色color画三角形，顶点分别为(x,y)，(x1,y1)和(x2,y2)。**

*如果函数的color值没给出，则使用当前的背景颜色。*

* * *

### <mark>M5.Lcd.fillTriangle(int16_t x0, int16_t y0, int16_t x1, int16_t y1, int16_t x2, int16_t y2, uint16_t color);</mark>

**例程**
```c++
M5.Lcd.fillTriangle(122, 122, 169, 198, 151, 182, BLUE);
```
**以指定颜色画<mark>填充形式</mark>的三角形，顶点分别为(x,y)，(x1,y1)和(x2,y2)。**

*如果函数的color值没给出，则使用当前的背景颜色。*


* * *
<!-- ### <mark>lcd.drawRect(x, y, w, h, [,color])</mark>
**例程**
```c++
lcd.drawRect(180, 12, 122, 10, lcd.BLUE)
```
**以指定颜色画矩形，其中矩形左上角坐标为(x,y)，宽高分别为width和height。**

*如果函数的color值没给出，则使用当前的背景颜色。*

| 参数 | 描述 |
| --- | --- |
| w | 图形宽(单位: 像素) |
| h | 图形高(单位: 像素) |
| color | 颜色值 |




* * *

### <mark>lcd.drawRoundRect(x, y, w, h, r [,color])</mark>
**例程**
```c++
lcd.fillRoundRect(180,70,122,10,4,lcd.BLUE)
```
**以指定颜色画<mark>圆角</mark>矩形，其中矩形左上角坐标为(x,y)，宽高分别为width和height，圆角半径为r。**

*如果函数的color值没给出，则使用当前的背景颜色。*

| 参数 | 描述 |
| --- | --- |
| w | 图形宽(单位: 像素) |
| h | 图形高(单位: 像素) |
| r | 圆角半径 |
| color | 颜色值 |




* * *
### <mark>lcd.print(‘text’, [x, y])</mark>
**例程**
```c++
lcd.print('this is a print text function', 80, 80)
```
**在(x,y)处开始打印文本(字符串)text。**

| 参数 | 描述 |
| --- | --- |
| text | 要打印的内容 |


* * *

### <mark>lcd.clear([color])</mark>

**例程**
```c++
lcd.clear()
```

**清屏(即以当前的背景颜色填充整个屏幕)。**


* * *

### Usage

```c++
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
