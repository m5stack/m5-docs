# LCD

### <mark>setbrightness</mark>
> M5.Lcd.setbrightness(uint8_t brightness);

设置LCD屏幕的亮度

| Param | Type | Description |
| --- | --- | --- |
| brightness | <code>uint8_t</code> | 亮度值(0-254) |

**例程**
```c++
M5.Lcd.setbrightness(100);
```

* * *

### <mark>fillScreen</mark>
> M5.Lcd.fillScreen(uint16_t color);

设置全屏颜色

| Param | Type | Description |
| --- | --- | --- |
| color | <code>uint16_t</code> | 颜色值 |

**例程**
```c++
M5.Lcd.fillScreen(RED);
delay(500);
M5.Lcd.fillScreen(WHITE);
delay(500);
```

* * *

### <mark>fillRect</mark>
> M5.Lcd.fillRect(int16_t x, int16_t y, int16_t w, int16_t h, uint16_t color);

画填充形式的矩形图形

| Param | Type | Description |
| --- | --- | --- |
| x, y | <code>int16_t</code> | x和y方向的偏移量 |
| w, h | <code>int16_t</code> | 图形宽和高 |
| color | <code>uint16_t</code> | 填充的颜色 |

**例程**
```c++
M5.Lcd.fillRect(50,50,60,150,WHITE);
```

* * *

### <mark>fillRoundRect</mark>
> M5.Lcd.fillRoundRect(int16_t x0, int16_t y0, int16_t w, int16_t h, int16_t radius, uint16_t color);

画填充形式的圆角矩形图形

| Param | Type | Description |
| --- | --- | --- |
| x, y | <code>int16_t</code> | x和y方向的偏移量 |
| w, h | <code>int16_t</code> | 图形宽和高 |
| radius | <code>int16_t</code> | 圆角半径 |
| color | <code>uint16_t</code> | 填充的颜色 |

**例程**
```c++
M5.Lcd.fillRoundRect(50,50,60,150,4,WHITE);
```

* * *