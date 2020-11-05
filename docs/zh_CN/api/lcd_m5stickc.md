# TFT 屏幕

*M5StickC 屏幕像素为 **80x160**，以屏幕左上角为原点 (0,0)*

## ScreenBreath()

**函数原型：**

`void ScreenBreath(uint8_t brightness);`

**功能：调节屏幕背光亮度。**

| 参数 | 描述 |
| --- | --- |
| brightness | 背光值 ( 值: 7 - 16 ) |

**例程：**
```arduino
#include <M5StickC.h>

uint8_t i = 7;

void setup() {
  M5.begin();
  M5.Lcd.fillScreen(WHITE);
}
void loop() {
  M5.Axp.ScreenBreath(i++);
  if (i > 15) i = 7;
  delay(500);
}
```

* * *

## fillScreen()

**函数原型：**

`fillScreen(uint16_t color);`

**功能：以指定的颜色填充整个屏幕。**

| 参数 | 描述 |
| --- | --- |
| color | 颜色值 |

**例程：**
```arduino
#include <M5StickC.h>

void setup() {
  M5.begin();
  M5.Lcd.fillScreen(BLUE);
}
void loop() {}
```

* * *

## setTextColor()

**函数原型：**

`setTextColor(uint16_t color, uint16_t backgroundcolor);`

**功能：设置显示文本的前景颜色和背景颜色。**

| 参数 | 描述 |
| --- | --- |
| color | 文本的前景颜色 |
| backgroundcolor| 文本的背景颜色 |

*如果函数的 backgroundcolor 值没给出，则使用当前的背景颜色。*

**例程：**
```arduino
#include <M5StickC.h>

void setup() {
  M5.begin();
  M5.Lcd.setTextColor(RED, WHITE);
  M5.Lcd.println("Hello, M5Stack world!!");
}
void loop() {}
```

* * *

## setCursor()

**函数原型：**

`setCursor(int16_t x0, int16_t y0, uint8_t font);`

<!-- `setCursor(x0, y0)` # for micropython -->

**功能：移动光标位置到 (x0, y0) 处。**

**例程：**
```arduino
#include <M5StickC.h>

void setup() {
  M5.begin();
  M5.Lcd.setCursor(7, 20, 2);
  M5.Lcd.println("scan done");
  M5.Lcd.setCursor(5, 60, 4);
  M5.Lcd.printf("50 AP");
}
void loop(){}
```

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
#include <M5StickC.h>

void setup() {
  M5.begin();
  M5.Lcd.drawPixel(22, 22, RED);
}
void loop() {}
```

* * *

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
#include <M5StickC.h>

void setup() {
  M5.begin();
  M5.Lcd.drawLine(0, 0, 12, 12, BLUE);
}
void loop() {}
```

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
#include <M5StickC.h>

void setup() {
  M5.begin();
  M5.Lcd.drawTriangle(22, 22, 69, 98, 51, 22, RED);
}
void loop() {}
```

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
#include <M5StickC.h>

void setup() {
  M5.begin();
  M5.Lcd.fillTriangle(22, 22, 69, 98, 51, 22, RED);
}
void loop() {}
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
#include <M5StickC.h>

void setup() {
  M5.begin();
  M5.Lcd.drawRect(50, 100, 30, 10, BLUE);
}
void loop() {}
```

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
#include <M5StickC.h>

void setup() {
  M5.begin();
  M5.Lcd.fillRect(50, 100, 20, 10, BLUE);
}
void loop() {}
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
#include <M5StickC.h>

void setup() {
  M5.begin();
  M5.Lcd.fillRoundRect(40, 70, 20, 10, 4, BLUE);
}
void loop() {}
```

* * *

## print()

**函数原型：**

`print();`

**功能：在屏幕的当前位置开始打印文本(字符串) text。**

*默认打印的内容颜色样式是黑底白字。*

**例程：**
```arduino
#include <M5StickC.h>

void setup() {
  M5.begin();
  M5.Lcd.print("print text");
}
void loop() {}
```

## Usage {docsify-ignore}

```arduino
#include <M5StickC.h>

void setup() {
  M5.begin();

  M5.Lcd.fillScreen(WHITE); // set the default background color
  M5.Lcd.drawLine(0, 0, 100, 100, WHITE);
  M5.Lcd.drawTriangle(22, 22, 69, 98, 51, 22, RED);
  M5.Lcd.fillTriangle(22, 22, 69, 98, 51, 22, RED);
  M5.Lcd.drawRect(50, 100, 30, 10, BLUE);
  M5.Lcd.fillRect(50, 100, 30, 10, BLUE);
  M5.Lcd.drawRoundRect(40, 70, 20, 10, 4, BLUE);
  M5.Lcd.fillRoundRect(40, 70, 20, 10, 4, BLUE);
  M5.Lcd.print("print text");
}
void loop() {}
```
