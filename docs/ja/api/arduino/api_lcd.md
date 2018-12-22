# LCD

<!-- 中文 | [English](/en/api_reference/micropython/api_lcd) | [日本語](/ja/api_reference/micropython/api_lcd) -->

*画面の解像度は横320x縦240で左上を(0,0)とします。*

### <mark>M5.lcd.setBrightness(uint8_t brightness);</mark>

**画面全体の明るさを設定します。**

| 引数 | 説明 |
|:---|:---|
| brightness | 画面の明るさ(0-254) |

**使用例**

```c++
M5.lcd.setBrightness(200);
```

---

### <mark>M5.Lcd.setCursor(uint16_t x0, uint16_t y0);</mark>

**表示開始位置を設定します。(x0, y0)**

| パラメータ | 説明 |
|:---|:---|
| x0 | カーソルのx座標 |
| y0 | カーソルのy座標 |

**使用例**

```c++
M5.lcd.setCursor(20, 40);
```

---

### <mark>M5.Lcd.fillScreen(uint16_t color);</mark>

**画面全体を指定された色で塗りつぶします。**

| パラメータ | 説明 |
|:---|:---|
| color | 塗りつぶしの色 |

**使用例**

```c++
M5.Lcd.fillScreen(BLUE);
```

---

### <mark>M5.Lcd.drawPixel(int16_t x, int16_t y, [uint16_t color]);</mark>

**位置(x, y)にcolorで指定した色の点を描画します。**

*もしcolorを指定しない場合は、現在の背景色が使用されます。*

| パラメータ | 説明 |
|:---|:---|
| x | 点のx座標 |
| y | 点のy座標 |
| color | 点の色 |

**使用例**

```c++
M5.Lcd.drawPixel(20, 40, BLUE);
```

---

### <mark>M5.Lcd.drawLine(int16_t x0, int16_t y0, int16_t x1, int16_t y1, uint16_t color);</mark>

**始点(x0, y0)から終点(x1, y1)にcolorで指定した色の直線を描画します。**

*もしcolorを指定しない場合は、現在の背景色が使用されます。*

| パラメータ | 説明 |
|:---|:---|
| x0 | 線の始点のx座標 |
| y0 | 線の始点のy座標 |
| x1 | 線の終点のx座標 |
| y1 | 線の終点のy座標 |
| color | 線の色 |

**使用例**

```c++
M5.Lcd.drawLine(0, 0, 12, 12, BLUE);
```

---

### <mark>M5.Lcd.drawTriangle(int16_t x0, int16_t y0, int16_t x1, int16_t y1, int16_t x2, int16_t y2, uint16_t color);</mark>

**colorで指定した色の線で3つの頂点(x0, y0)、(x1, y1)、(x2, y2)を持つ三角形を描画します。**

*もしcolorを指定しない場合は、現在の背景色が使用されます。*

| パラメータ | 説明 |
|:---|:---|
| x0 | 三角形の頂点Aのx座標 |
| y0 | 三角形の頂点Aのy座標 |
| x1 | 三角形の頂点Bのx座標 |
| y1 | 三角形の頂点Bのy座標 |
| x2 | 三角形の頂点Cのx座標 |
| y2 | 三角形の頂点Cのy座標 |
| color | 線の色 |

**使用例**

```c++
M5.Lcd.drawTriangle(22, 22, 69, 98, 51, 22, BLUE);
```

---

### <mark>M5.Lcd.fillTriangle(int16_t x0, int16_t y0, int16_t x1, int16_t y1, int16_t x2, int16_t y2, uint16_t color);</mark>

**colorで指定した色に<mark>塗りつぶされた</mark>頂点(x0, y0)、(x1, y1)、(x2, y2)を持つ三角形を描画します。**

*もしcolorを指定しない場合は、現在の背景色が使用されます。*

| パラメータ | 説明 |
|:---|:---|
| x0 | 三角形の頂点Aのx座標 |
| y0 | 三角形の頂点Aのy座標 |
| x1 | 三角形の頂点Bのx座標 |
| y1 | 三角形の頂点Bのy座標 |
| x2 | 三角形の頂点Cのx座標 |
| y2 | 三角形の頂点Cのy座標 |
| color | 線の色 |

**使用例**

```c++
M5.Lcd.fillTriangle(122, 122, 169, 198, 151, 182, BLUE);
```

---
