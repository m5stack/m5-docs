# LCD

### <mark>lcd.setRotation(degree)</mark>

**Example**
```python
lcd.setRotation(90)
```

**Set the angle of rotation of the entire screen.**

| Param | Description |
| --- | --- |
| degree | the angle of setRotation |



* * *


### <mark>lcd.setColor(color [, background_color])</mark>
**Example**
```python
lcd.setColor(lcd.RED)
lcd.setColor(lcd.ORANGE, lcd.DARKCYAN)
```

**Set the default foreground/background color of text.**

| Param | Description |
| --- | --- |
| color | the color of text |
| background_color| the fill color of text |

* * *

### <mark>lcd.fillScreen(color)</mark>
**Example**
```python
lcd.fillScreen(lcd.RED)
```
**Fill the entire screen with the given color.**

| Param | Description |
| --- | --- |
| color | color value |



* * *

### <mark>lcd.drawPixel(x, y [,color])</mark>
**Example**
```python
lcd.drawPixel(22,22,lcd.RED)
```
**Draw the pixel at position (x,y)**

*If color is not given, current foreground color is used*

| Param | Description |
| --- | --- |
| color | color value |



* * *

### <mark>lcd.drawLine(x, y, x1, y1 [,color])</mark>
**Example**
```python
lcd.drawLine(0,0,12,12,lcd.WHITE)
```
**Draw the line from point (x,y) to point (x1,y1)**

*If color is not given, current foreground color is used*

| Param | Description |
| --- | --- |
| color | color value |


* * *

### <mark>lcd.drawTriangle(x, y, x1, y1, x2, y2 [,color])</mark>

**Example**
```python
lcd.drawTriangle(22,22,69,98,51,22,lcd.RED)
```

**Draw the triangel between points (x,y), (x1,y1) and (x2,y2).**

*If color is not given, current foreground color is used*

| Param | Description |
| --- | --- |
| color | color value |

* * *

### <mark>lcd.fillTriangle(x, y, x1, y1, x2, y2 [,color])</mark>

**Example**
```python
lcd.fillTriangle(122, 122, 169, 198, 151, 182, lcd.RED)
```
**Fill the triangel between points (x,y), (x1,y1) and (x2,y2).**

*If color is not given, current foreground color is used*

| Param | Description |
| --- | --- |
| color | color value |


* * *
### <mark>lcd.drawRect(x, y, w, h, [,color])</mark>
**Example**
```python
lcd.drawRect(180, 12, 122, 10, lcd.BLUE)
```
**Draw the rectangle from the upper left point at (x,y) and width and height.**

*If color is not given, current foreground color is used*

| Param | Description |
| --- | --- |
| w | display phisical width in pixels (display’s smaller dimension) |
| h | display phisical height in pixels (display’s larger dimension) |
| color | color value |




* * *

### <mark>lcd.drawRoundRect(x, y, w, h, r [,color])</mark>
**Example**
```python
lcd.fillRoundRect(180,70,122,10,4,lcd.BLUE)
```
**Draw the rectangle with rounded corners from the upper left point at (x,y) and width and height. Corner radius is given by r argument.**

*If color is not given, current foreground color is used*

| Param | Description |
| --- | --- |
| w | display phisical width in pixels (display’s smaller dimension) |
| h | display phisical height in pixels (display’s larger dimension) |
| r | the radius of circle |
| color | color value |




* * *
### <mark>lcd.print(‘text’, [x, y])</mark>
**Example**
```python
lcd.print('this is a print text function', 80, 80)
```
**Print the text at position (x,y).**

| Param | Description |
| --- | --- |
| text | the string need to print |


* * *

### <mark>lcd.clear([color])</mark>

**Example**
```python
lcd.clear()
```

**Clear the screen with default background color orspecific color if given.**


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
