# LCD



### <mark>lcd.setRotation(degree)</mark>

**画面全体の回転角度を設定します。**

| パラメータ | 説明 |
|:---|:---|
| degree   | 回転角度 |

**使用例**

```python
lcd.setRotation(90)
```

---

### <mark>lcd.setColor(color [, background_color])</mark>

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

### <mark>lcd.fillScreen(color)</mark>

**画面全体を指定した色で塗りつぶします。**

| パラメータ | 説明 |
|:--- | :--- |
| color | 塗りつぶしの色 |

**使用例**

```python
lcd.fillScreen(lcd.RED)
```

---

### <mark>lcd.drawPixel(x, y [,color])</mark>

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

### <mark>lcd.drawLine(x, y, x1, y1 [,color])</mark>

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

### <mark>lcd.drawTriangle(x, y, x1, y1, x2, y2 [,color])</mark>

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

### <mark>lcd.fillTriangle(x, y, x1, y1, x2, y2 [,color])</mark>

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

### <mark>lcd.drawRect(x, y, w, h, [,color])</mark>

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

### <mark>lcd.drawRoundRect(x, y, w, h, r [,color])</mark>

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

### <mark>lcd.print(‘text’, [x, y])</mark>

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

### <mark>lcd.clear([color])</mark>

**デフォルトの背景色、または指定の色で画面を塗りつぶします。**

| パラメータ | 説明 |
| :--- | :--- |
| color | 塗りつぶしの色 |

**使用例**

```python
lcd.clear(lcd.WHITE)
```

---

### 使い方

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
```
