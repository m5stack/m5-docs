# TF 卡

## begin()

**函数原型：**

<mark>begin();</mark>

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
