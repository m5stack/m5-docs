# LCD

中文 | [English](/en/api_reference/micropython/api_lcd) | [日本語](/ja/api_reference/micropython/api_lcd)

*屏幕像素为320x240，以屏幕左上角为原点(0,0)*

### <mark>lcd.setRotation(degree)</mark>

**例程**
```python
lcd.setRotation(90)
```

**设置整个屏幕显示的旋转角度。**

| 参数 | 描述 |
| --- | --- |
| degree | 旋转的角度 |



* * *


### <mark>lcd.setColor(color [, background_color])</mark>
**例程**
```python
lcd.setColor(lcd.RED)
lcd.setColor(lcd.ORANGE, lcd.DARKCYAN)
```

**设置显示文本的前景颜色和背景颜色。**

| 参数 | 描述 |
| --- | --- |
| color | 文本的前景颜色 |
| background_color| 文本的背景颜色 |

* * *

### <mark>lcd.fillScreen(color)</mark>
**例程**
```python
lcd.fillScreen(lcd.RED)
```
**以指定的颜色填充整个屏幕。**

| 参数 | 描述 |
| --- | --- |
| color | 颜色值 |



* * *

### <mark>lcd.drawPixel(x, y [,color])</mark>
**例程**
```python
lcd.drawPixel(22,22,lcd.RED)
```
**在位置(x,y)处画点。**

*如果函数的color值没给出，则使用当前的背景颜色。*

| 参数 | 描述 |
| --- | --- |
| color | 颜色值 |



* * *

### <mark>lcd.drawLine(x, y, x1, y1 [,color])</mark>
**例程**
```python
lcd.drawLine(0,0,12,12,lcd.WHITE)
```
**以指定的颜色从点(x,y)到点(x1,y1)画直线。**

*如果函数的color值没给出，则使用当前的背景颜色。*

| 参数 | 描述 |
| --- | --- |
| color | 颜色值 |


* * *

### <mark>lcd.drawTriangle(x, y, x1, y1, x2, y2 [,color])</mark>

**例程**
```python
lcd.drawTriangle(22,22,69,98,51,22,lcd.RED)
```

**以指定颜色画三角形，顶点分别为(x,y)，(x1,y1)和(x2,y2)。**

*如果函数的color值没给出，则使用当前的背景颜色。*

| 参数 | 描述 |
| --- | --- |
| color | 颜色值 |

* * *

### <mark>lcd.fillTriangle(x, y, x1, y1, x2, y2 [,color])</mark>

**例程**
```python
lcd.fillTriangle(122, 122, 169, 198, 151, 182, lcd.RED)
```
**以指定颜色画<mark>填充形式</mark>的三角形，顶点分别为(x,y)，(x1,y1)和(x2,y2)。**

*如果函数的color值没给出，则使用当前的背景颜色。*

| 参数 | 描述 |
| --- | --- |
| color | 颜色值 |


* * *
### <mark>lcd.drawRect(x, y, w, h, [,color])</mark>
**例程**
```python
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
```python
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
```python
lcd.print('this is a print text function', 80, 80)
```
**在(x,y)处开始打印文本(字符串)text。**

| 参数 | 描述 |
| --- | --- |
| text | 要打印的内容 |


* * *

### <mark>lcd.clear([color])</mark>

**例程**
```python
lcd.clear()
```

**清屏(即以当前的背景颜色填充整个屏幕)。**


* * *

### Usage

```python
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
```
