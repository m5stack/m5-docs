# 喇叭

<!-- ### tone
> M5.Speaker.tone(uint32_t freq);

设置声音音高

| Param | Type | Description |
| --- | --- | --- |
| freq | <code>uint32_t</code> | 频率 |

**例程**
```arduino
M5.Speaker.tone(100);
``` -->

### tone()

**函数原型：**

<mark>tone(uint16_t freq);</mark> // for arduino

<mark>tone(uint16_t freq, uint32_t duration);</mark> // for arduino
<!-- <mark>fillScreen(color)</mark> # for micropython -->

**功能：喇叭响指定频率的声音持续指定时间。**

| 参数 | 描述 |
| --- | --- |
| freq | 声音频率 |
| duration | 持续时间 (单位：毫秒) |

<!-- *如果函数的 duration 值没给出，则使用当前的背景颜色。* -->

**例程**
```arduino
#include <M5Stack.h>

M5.begin();

M5.Speaker.tone(900, 1000);
```
<!-- ```python
# MicroPython
from m5stack import *
from m5ui import *

lcd.fillScreen(lcd.RED)
``` -->