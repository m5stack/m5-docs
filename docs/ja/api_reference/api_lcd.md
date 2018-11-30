# LCD

### <mark>setbrightness</mark>
> M5.Lcd.setbrightness(uint8_t brightness);

Set the brightness of LCD.

| Param | Type | Description |
| --- | --- | --- |
| brightness | <code>uint8_t</code> | brightness(0-254) |

**Example**
```c++
M5.Lcd.setbrightness(100);
```

* * *

### <mark>fillScreen</mark>
> M5.Lcd.fillScreen(uint16_t color);

Set the color to display of the whole LCD.

| Param | Type | Description |
| --- | --- | --- |
| color | <code>uint16_t</code> | color value |

**Example**
```c++
M5.Lcd.fillScreen(RED);
delay(500);
M5.Lcd.fillScreen(WHITE);
delay(500);
```

* * *

### <mark>fillRect</mark>
> M5.Lcd.fillRect(int16_t x, int16_t y, int16_t w, int16_t h, uint16_t color);

Draw a filled rectangle.

| Param | Type | Description |
| --- | --- | --- |
| x, y | <code>int16_t</code> | offset of x, y direction |
| w, h | <code>int16_t</code> | width and height of graphics |
| color | <code>uint16_t</code> | color to fill |

**Example**
```c++
M5.Lcd.fillRect(50,50,60,150,WHITE);
```

* * *

### <mark>fillRoundRect</mark>
> M5.Lcd.fillRoundRect(int16_t x0, int16_t y0, int16_t w, int16_t h, int16_t radius, uint16_t color);

Draw a filled round rectangle.

| Param | Type | Description |
| --- | --- | --- |
| x, y | <code>int16_t</code> | offset of x, y direction |
| w, h | <code>int16_t</code> | width and height of graphics |
| radius | <code>int16_t</code> | fillet radius |
| color | <code>uint16_t</code> | color to fill |

**Example**
```c++
M5.Lcd.fillRoundRect(50,50,60,150,4,WHITE);
```

* * *