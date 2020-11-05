# TFT Screen

*The M5StickC screen resolution is **80x160**, the top left corner of the screen as the origin (0,0)*

## ScreenBreath()

**Syntax:**

`void ScreenBreath(uint8_t brightness);`

**Description: Adjust the brightness of the screen backlight.**

| Parameter | Description |
| --- | --- |
| brightness | TFT backlight brightness ( value: 7 - 15 ) |

**Example:**

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

**Syntax:**

`fillScreen(uint16_t color);`

**Description: Fills the entire screen with the specified color.**

| Parameter | Description |
| --- | --- |
| color | color value |

**Example:**

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

**Syntax:**

`setTextColor(uint16_t color, [uint16_t backgroundcolor]);`

**Description: Sets the foreground color and background color of the displayed text.**

| Parameter | Description |
| --- | --- |
| color | foreground color |
| backgroundcolor| background color |

*If the function's backgroundcolor value is not given, the current background color is used.*

**Example:**

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

**Syntax:**

`setCursor(int16_t x0, int16_t y0, uint8_t font);`

**Description: Move the cursor position to (x0, y0).**

**Example:**

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

**Syntax:**

`drawPixel(int16_t x, int16_t y, [uint16_t color]);`

**Description: Draw a pixel at the position (x, y).**

| Parameter | Description |
| --- | --- |
| color | pixel color |

*If the function's color value is not given, the current background color is used.*

**Example:**

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

**Syntax:**

`drawLine(int16_t x0, int16_t y0, int16_t x1, int16_t y1, [uint16_t color]);`

**Description: Draw a line from the point (x, y) to the point (x1, y1) in the specified color.**

| Parameter | Description |
| --- | --- |
| color | line color |

*If the function's color value is not given, the current background color is used.*

**Example:**

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

**Syntax:**

`drawTriangle(int16_t x0, int16_t y0, int16_t x1, int16_t y1, int16_t x2, int16_t y2, [uint16_t color]);`

**Description: Draw a triangle with the specified color, with vertices of (x, y), (x1, y1), and (x2, y2).**

| Parameter | Description |
| --- | --- |
| color | line color |

*If the function's color value is not given, the current background color is used.*

**Example:**

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

**Syntax:**

`fillTriangle(int16_t x0, int16_t y0, int16_t x1, int16_t y1, int16_t x2, int16_t y2, [uint16_t color]);`

**Description: Fill a triangle with the specified color, with vertices of (x, y), (x1, y1) and (x2, y2).**

| Parameter | Description |
| --- | --- |
| color | fill color |

*If the function's color value is not given, the current background color is used.*

**Example:**

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

**Syntax:**

`drawRect(int16_t x, int16_t y, int16_t w, int16_t h, [uint16_t color]);`

**Description: Draws a rectangle with a specified color, where the coordinates of the upper left corner of the rectangle are (x, y), and the width and height.**

| Parameter | Description |
| --- | --- |
| w | width (pixel) |
| h | height (pixel) |
| color | line color |

*If the function's color value is not given, the current background color is used.*

**Example:**

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

**Syntax:**

`fillRect(int16_t x, int16_t y, int16_t w, int16_t h, [uint16_t color]);`

**Description: Fill a rectangle with the specified color. The coordinates of the upper left corner are (x, y), and the width and height.**

| Parameter | Description |
| --- | --- |
| w | width (pixel) |
| h | height (pixel) |
| color | fill color |

*If the function's color value is not given, the current background color is used.*

**Example:**

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

**Syntax:**

`drawRoundRect(int16_t x0, int16_t y0, int16_t w, int16_t h, int16_t radius, uint16_t color);`

**Description: Draw a rounded corner rectangle with the specified color, where the coordinates of the upper left corner of the rectangle are (x, y), the width, the height and the radius of the fillet.**

| Parameter | Description |
| --- | --- |
| w | width (pixel) |
| h | height (pixel) |
| radius | radius of corner fillet |
| color | fill color |

*If the function's color value is not given, the current background color is used.*

**Example:**

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

**Syntax:**

`print();`

**Description: Printing text (string) at the current cursor position of the screen.**

*The default printed content color style is white on black.*

**Example:**

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
