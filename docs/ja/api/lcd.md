# LCD 画面表示

スクリーンの解像度は 横320 x 高さ240 で、左上が原点(0, 0)です。

## fillScreen()

**機能:**

引数で指定した色で画面を塗りつぶします。

**構文:**

```arduino
fillScreen(uint16_t color);
```

| 引数 | 説明 | 型 |
| --- | --- | -- |
| color | 塗りつぶしの色 | uint16_t |

**使用例:**

```arduino
#include <M5Stack.h>

M5.begin();
M5.Lcd.fillScreen(RED);
```

## setTextColor()

**機能:**

文字の色や文字の背景色を引数で指定した色に変更します。

**構文:**

```arduino
setTextColor(uint16_t color, [uint16_t backgroundcolor]);
```

| 引数 | 説明 | 型 |
| --- | --- | -- |
| color | テキストの色 | uint16_t |
| backgroundcolor| テキストの背景色。省略可能。 | uint16_t |

**使用例:**

```arduino
#include <M5Stack.h>

M5.begin();
M5.Lcd.setTextColor(RED);
```

## setCursor()

**機能:**

カーソルの位置を設定します。

**構文:**

```arduino
setCursor(uint16_t x, uint16_t y);
```

| 引数 | 説明 | 型 |
| --- | --- | -- |
| x | x位置 | uint16_t |
| y | y位置 | uint16_t |

**使用例:**

```arduino
#include <M5Stack.h>

M5.begin();
M5.Lcd.setCursor(100, 100);
M5.Lcd.print("Hello");
```

## drawPixel()

**機能:**

指定した位置に指定色のピクセルを描画します。

**構文:**

```arduino
drawPixel(int16_t x, int16_t y, [uint16_t color]);
```

| 引数 | 説明 | 型 |
| --- | --- | -- |
| x | x位置 | int16_t |
| y | y位置 | int16_t |
| color | ピクセルの色。省略可能。 | uint16_t |

**使用例:**

```arduino
#include <M5Stack.h>

M5.begin();
M5.Lcd.drawPixel(22, 22, RED);
```

## drawLine()

**機能:**

指定した始点から終点まで指定色の直線を描画します。

**構文:**

```arduino
drawLine(int16_t x0, int16_t y0, int16_t x1, int16_t y1, [uint16_t color]);
```

| 引数 | 説明 | 型 |
| --- | --- | -- |
| x0 | 始点のx位置 | int16_t |
| y0 | 始点のy位置 | int16_t |
| x1 | 終点のx位置 | int16_t |
| y1 | 終点のy位置 | int16_t |
| color | 線の色。省略可能。 | uint16_t |

**使用例:**

```arduino
#include <M5Stack.h>

M5.begin();
M5.Lcd.drawLine(0, 0, 12, 12, WHITE);
```

## drawTriangle()

**機能:**

指定した3点を結ぶ三角形を指定色で描画します。

**構文:**

```arduino
drawTriangle(int16_t x0, int16_t y0, int16_t x1, int16_t y1, int16_t x2, int16_t y2, [uint16_t color]);
```

| 引数 | 説明 | 型 |
| --- | --- | -- |
| x0 | 点0のx位置 | int16_t |
| y0 | 点0のy位置 | int16_t |
| x1 | 点1のx位置 | int16_t |
| y1 | 点1のy位置 | int16_t |
| x2 | 点2のx位置 | int16_t |
| y2 | 点2のy位置 | int16_t |
| color | 線の色。省略可能。 | uint16_t |

**使用例:**

```arduino
#include <M5Stack.h>

M5.begin();
M5.Lcd.drawTriangle(22, 22, 69, 98, 51, 22, RED);
```

## fillTriangle()

**機能:**

指定した3点を結ぶ三角形を指定色で塗りつぶして描画します。

**構文:**

```arduino
fillTriangle(int16_t x0, int16_t y0, int16_t x1, int16_t y1, int16_t x2, int16_t y2, [uint16_t color]);
```

| 引数 | 説明 | 型 |
| --- | --- | -- |
| x0 | 点0のx位置 | int16_t |
| y0 | 点0のy位置 | int16_t |
| x1 | 点1のx位置 | int16_t |
| y1 | 点1のy位置 | int16_t |
| x2 | 点2のx位置 | int16_t |
| y2 | 点2のy位置 | int16_t |
| color | 塗りつぶしの色。省略可能。 | uint16_t |

**使用例:**

```arduino
#include <M5Stack.h>

M5.begin();
M5.Lcd.fillTriangle(22, 22, 69, 98, 51, 22, RED);
```

## drawRect()

**機能:**

指定の点から指定の幅と高さの四角形を指定色で描画します。

**構文:**

```arduino
drawRect(int16_t x, int16_t y, int16_t w, int16_t h, [uint16_t color]);
```

| 引数 | 説明 | 型 |
| --- | --- | -- |
| x | 点のx位置 | int16_t |
| y | 点のy位置 | int16_t |
| w | 四角形の幅 | int16_t |
| h | 四角形の高さ | int16_t |
| color | 線の色。省略可能。 | uint16_t |

**使用例:**

```arduino
#include <M5Stack.h>

M5.begin();
M5.Lcd.drawRect(180, 12, 122, 10, BLUE);
```

## fillRect()

**機能:**

指定の左上の点(x,y)と幅と高さの四角形を指定色で塗りつぶして描画します。

**構文:**

```arduino
fillRect(int16_t x, int16_t y, int16_t w, int16_t h, [uint16_t color]);
```

| 引数 | 説明 | 型 |
| --- | --- | -- |
| x | 点のx位置 | int16_t |
| y | 点のy位置 | int16_t |
| w | 四角形の幅 | int16_t |
| h | 四角形の高さ | int16_t |
| color | 塗りつぶしの色。省略可能。 | uint16_t |

**使用例:**

```arduino
#include <M5Stack.h>

M5.begin();
M5.Lcd.fillRect(180, 12, 122, 10, BLUE);
```

## drawRoundRect()

**機能:**

左上の点(x,y)と幅と高さを指定して、かど丸の四角形を描画します。

**構文:**

```arduino
drawRoundRect(int16_t x, int16_t y, int16_t w, int16_t h, int16_t r, [uint16_t color]);
```

| 引数 | 説明 | 型 |
| --- | --- | -- |
| x | 四角形の左上の頂点のx座標 | int16_t |
| y | 四角形の左上の頂点のy座標 | int16_t |
| w | 四角形の幅 | int16_t |
| h | 四角形の高さ | int16_t |
| r | コーナー半径 | int16_t |
| color | 四角形の線の色。省略可能。 | uint16_t |

**使用例:**

```arduino
#include <M5Stack.h>

M5.begin();
M5.Lcd.fillRoundRect(180, 70, 122, 10, 4, BLUE);
```

## print()

**機能:**

指定の文字列を描画します。

**構文:**

```arduino
print("表示する文字列");
```

**使用例:**

```arduino
#include <M5Stack.h>

M5.begin();
M5.Lcd.print("this is a print text function");
```

## 使用例 {docsify-ignore}

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

<!-- ## <mark>lcd.setRotation(degree)</mark>

**画面全体の回転角度を設定します。**

| パラメータ | 説明 |
|:---|:---|
| degree   | 回転角度 |

**使用例**

```python
lcd.setRotation(90)
```

---

## <mark>lcd.setColor(color [, background_color])</mark>

**テキストの色と背景色を設定します。**

| パラメータ | 説明 |
| :--- | :--- |
| color | テキストの色 |
| background_color| テキストの背景色 |

**使用例**

```python
lcd.setColor(lcd.RED)
lcd.setColor(lcd.ORANGE, lcd.DARKCYAN)
```

---

## <mark>lcd.fillScreen(color)</mark>

**画面全体を指定した色で塗りつぶします。**

| パラメータ | 説明 |
|:--- | :--- |
| color | 塗りつぶしの色 |

**使用例**

```python
lcd.fillScreen(lcd.RED)
```

---

## <mark>lcd.drawPixel(x, y [,color])</mark>

**(x,y)の位置に点（ピクセル）を描画します。**

*色の指定がない場合は、現在設定されている前景色が使用されます。*

| パラメータ | 説明 |
| :--- | :--- |
| x | 点のx座標 |
| y | 点のy座標 |
| color | 点の色 |

**使用例**

```python
lcd.drawPixel(22, 22, lcd.RED)
```

---

## <mark>lcd.drawLine(x, y, x1, y1 [,color])</mark>

**点(x,y) から 点(x1,y1) へ直線を描画します。**

*色の指定がない場合は、現在設定されている前景色が使用されます。*

| パラメータ | 説明 |
| :--- | :--- |
| x | 線の始点のx座標 |
| y | 線の始点のy座標 |
| x1 | 線の終点のx1座標 |
| y1 | 線の終点のy1座標 |
| color | 線の色 |

**使用例**

```python
lcd.drawLine(0, 0, 12, 12, lcd.WHITE)
```

---

## <mark>lcd.drawTriangle(x, y, x1, y1, x2, y2 [,color])</mark>

**3つの頂点 (x,y), (x1,y1), (x2,y2) を持つ三角形を描画します。**

*色の指定がない場合は、現在設定されている前景色が使用されます。*

| パラメータ | 説明 |
| :--- | :--- |
| x  | 三角形の頂点0のx座標 |
| y  | 三角形の頂点0のy座標 |
| x1 | 三角形の頂点1のx座標 |
| y1 | 三角形の頂点1のy座標 |
| x2 | 三角形の頂点2のx座標 |
| y2 | 三角形の頂点2のy座標 |
| color | 三角形の線の色 |

**使用例**

```python
lcd.drawTriangle(22, 22, 69, 98, 51, 22, lcd.RED)
```

---

## <mark>lcd.fillTriangle(x, y, x1, y1, x2, y2 [,color])</mark>

**3つの頂点 (x,y), (x1,y1), (x2,y2) を持つ三角形を塗りつぶします。**

*色の指定がない場合は、現在設定されている前景色が使用されます。*

| パラメータ | 説明 |
| :--- | :--- |
| x  | 三角形の頂点0のx座標 |
| y  | 三角形の頂点0のy座標 |
| x1 | 三角形の頂点1のx座標 |
| y1 | 三角形の頂点1のy座標 |
| x2 | 三角形の頂点2のx座標 |
| y2 | 三角形の頂点2のy座標 |
| color | 三角形の色 |

**使用例**

```python
lcd.fillTriangle(122, 122, 169, 198, 151, 182, lcd.RED)
```

---

## <mark>lcd.drawRect(x, y, w, h, [,color])</mark>

**左上の点(x,y)と幅と高さを指定して、四角形を描画します。**

*色の指定がない場合は、現在設定されている前景色が使用されます。*

| パラメータ | 説明 |
| :--- | :--- |
| x  | 四角形の左上の頂点のx座標 |
| y  | 四角形の左上の頂点のy座標 |
| w | 四角形の幅 |
| h | 四角形の高さ |
| color | 四角形の線の色 |

**使用例**

```python
lcd.drawRect(180, 12, 122, 10, lcd.BLUE)
```

---

## <mark>lcd.drawRoundRect(x, y, w, h, r [,color])</mark>

**左上の点(x,y)と幅と高さを指定して、かど丸の四角形を描画します。**

*色の指定がない場合は、現在設定されている前景色が使用されます。*

| パラメータ | 説明 |
| :--- | :--- |
| x | 四角形の左上の頂点のx座標 |
| y | 四角形の左上の頂点のy座標 |
| w | 四角形の幅 |
| h | 四角形の高さ |
| r | コーナー半径 |
| color | 四角形の線の色 |

**使用例**

```python
lcd.fillRoundRect(180, 70, 122, 10, 4, lcd.BLUE)
```

---

## <mark>lcd.print(‘text’, [x, y])</mark>

**位置(x,y)にテキストを表示します。**

| パラメータ | 説明 |
| :--- | :--- |
| text | 表示するテキスト |
| x | テキストを表示する位置のx座標 |
| y | テキストを表示する位置のy座標 |

**使用例**

```python
lcd.print('this is a print text function', 80, 80)
```

---

## <mark>lcd.clear([color])</mark>

**デフォルトの背景色、または指定の色で画面を塗りつぶします。**

| パラメータ | 説明 |
| :--- | :--- |
| color | 塗りつぶしの色 |

**使用例**

```python
lcd.clear(lcd.WHITE)
```

---

## 使い方

```python
from machine import SPI, Pin
from display import LCD

spi = SPI(1, baudrate=32000000, mosi=Pin(23), miso=Pin(19), sck=Pin(18))

lcd = LCD(spi = spi)  # lcd 初期化
lcd.fillScreen(lcd.BLACK)  # デフォルトの背景色を設定

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
