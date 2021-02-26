# TFT スクリーン

*M5StickC 解像度 **80x160**, 左上原点 (0,0)*

## ScreenBreath()

**説明：**

スクリーンのバックライトの輝度を調整できます。  

**構文：**

<mark>void ScreenBreath(uint8_t brightness);</mark>

**パラメータ：**

| 引数 | 説明 |
| --- | --- |
| brightness | 輝度 ( 範囲: 7 ~ 15 ) |

**使用例：**

```clike
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

**説明：**

指定した色で画面を塗りつぶします。  

**構文：**

<mark>fillScreen(uint16_t color);</mark>

**パラメータ：**

| 引数 | 説明 |
| --- | --- |
| color | 色値 |

**使用例：**

```clike
#include <M5StickC.h>

void setup() {
  M5.begin();
  M5.Lcd.fillScreen(BLUE);
}
void loop() {}
```

* * *

## setTextColor()

**説明**

テキストの色を変更できます。  

**構文：**

<mark>setTextColor(uint16_t color, [uint16_t backgroundcolor]);</mark>

**パラメータ**

| 引数 | 説明 |
| --- | --- |
| color | テキストの色 |
| backgroundcolor| テキストの背景色　option |

*backgroundcolor を指定しない場合は、直前に使用されていた色が使用されます。*

**使用例：**

```clike
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

**説明：**

カーソルの位置を設定します。  

**構文：**

<mark>setCursor(int16_t x0, int16_t y0, [uint8_t fontSize]);</mark>

**パラメータ：**

| 引数 | 説明 |
| --- | --- |
| fontSize | テキストのサイズ option |

**使用例：**

```clike
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

**説明：**

指定の位置にピクセルを描画します。  

**構文：**

<mark>drawPixel(int16_t x, int16_t y, uint16_t color);</mark>

**パラメータ：**

| 引数 | 説明 |
| --- | --- |
| color | 色値 option |

*color を指定しない場合は、直前に使用されていた色が使用されます。*

**使用例：**

```clike
#include <M5StickC.h>

void setup() {
  M5.begin();
  M5.Lcd.drawPixel(22, 22, RED);
}
void loop() {}
```

* * *

## drawLine()

**説明：**

始点から終点に直線を描画します。  

**構文：**

<mark>drawLine(int16_t x0, int16_t y0, int16_t x1, int16_t y1, [uint16_t color]);</mark>

**パラメータ：**

| 引数 | 説明 |
| --- | --- |
| color | 色値 option |

*color を指定しない場合は、直前に使用されていた色が使用されます。*

**使用例：**

```clike
#include <M5StickC.h>

void setup() {
  M5.begin();
  M5.Lcd.drawLine(0, 0, 12, 12, BLUE);
}
void loop() {}
```

* * *

## drawTriangle()

**説明：**

3つの頂点からなる三角形を描画します。  

**構文：**

<mark>drawTriangle(int16_t x0, int16_t y0, int16_t x1, int16_t y1, int16_t x2, int16_t y2, [uint16_t color]);</mark>

**パラメータ：**

| 引数 | 説明 |
| --- | --- |
| color | 色値 option |

*color を指定しない場合は、直前に使用されていた色が使用されます。*

**使用例：**

```clike
#include <M5StickC.h>

void setup() {
  M5.begin();
  M5.Lcd.drawTriangle(22, 22, 69, 98, 51, 22, RED);
}
void loop() {}
```

* * *

## fillTriangle()

**説明：**

3つの頂点からなる三角形を塗りつぶします。  

**構文：**

<mark>fillTriangle(int16_t x0, int16_t y0, int16_t x1, int16_t y1, int16_t x2, int16_t y2, [uint16_t color]);</mark>

**パラメータ：**

| 引数 | 説明 |
| --- | --- |
| color | 色値 option |

*color を指定しない場合は、直前に使用されていた色が使用されます。*

**使用例：**

```clike
#include <M5StickC.h>

void setup() {
  M5.begin();
  M5.Lcd.fillTriangle(22, 22, 69, 98, 51, 22, RED);
}
void loop() {}
```

* * *

## drawRect()

**説明：**

四角形を描画します。  

**構文：**

<mark>drawRect(int16_t x, int16_t y, int16_t w, int16_t h, [uint16_t color]);</mark>

**パラメータ：**

| 引数 | 説明 |
| --- | --- |
| w | 四角形の幅(ピクセル) |
| h | 四角形の高さ(ピクセル) |
| color | 四角形の色　option |

*color を指定しない場合は、直前に使用されていた色が使用されます。*

**使用例：**

```clike
#include <M5StickC.h>

void setup() {
  M5.begin();
  M5.Lcd.drawRect(50, 100, 30, 10, BLUE);
}
void loop() {}
```

* * *

## fillRect()

**説明：**

四角形を塗りつぶします。  

**構文：**

<mark>fillRect(int16_t x, int16_t y, int16_t w, int16_t h, [uint16_t color]);</mark>

**パラメータ：**

| 引数 | 説明 |
| --- | --- |
| w | 四角形の幅(ピクセル) |
| h | 四角形の高さ(ピクセル) |
| color | 四角形の塗りつぶし色　option |

*color を指定しない場合は、直前に使用されていた色が使用されます。*

**使用例：**

```clike
#include <M5StickC.h>

void setup() {
  M5.begin();
  M5.Lcd.fillRect(50, 100, 20, 10, BLUE);
}
void loop() {}
```

* * *

## drawRoundRect()

**説明：**

角丸の四角形を描画します。  

**構文：**

<mark>drawRoundRect(int16_t x0, int16_t y0, int16_t w, int16_t h, int16_t radius, [uint16_t color]);</mark>

**パラメータ：**

| 引数 | 説明 |
| --- | --- |
| w | 四角形の幅(ピクセル) |
| h | 四角形の高さ(ピクセル) |
| radius | 角丸の半径 |
| color | 四角形の塗りつぶし色　option |

*color を指定しない場合は、直前に使用されていた色が使用されます。*

**使用例：**

```clike
#include <M5StickC.h>

void setup() {
  M5.begin();
  M5.Lcd.fillRoundRect(40, 70, 20, 10, 4, BLUE);
}
void loop() {}
```

* * *

## print()

**説明：**

指定した文字列を画面に表示します。  

**構文：**

<mark>print();</mark>

*デフォルトは白地に黒い文字*

**使用例：**

```clike
#include <M5StickC.h>

void setup() {
  M5.begin();
  M5.Lcd.print("print text");
}
void loop() {}
```

## 使用例（一括） {docsify-ignore}

```clike
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
