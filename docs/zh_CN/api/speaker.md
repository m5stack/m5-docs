# 喇叭

## begin()

**功能:**

Initialize the speaker.

**函数原型:**

`begin();`

**参数:**

None

**返回值:**

None

## end()

**功能:**

Mute the speakers and stop the output.

**函数原型:**

`end();`

**参数:**

None

**返回值:**

None

<!-- ### tone
> M5.Speaker.tone(uint32_t freq);

设置声音音高

| 参数 | 型 | 描述 |
| --- | --- | --- |
| freq | <code>uint32_t</code> | 频率 |

**例程**
```clike
M5.Speaker.tone(100);
``` -->

## tone()

**函数原型：**

`tone(uint16_t freq);` // for arduino

`tone(uint16_t freq, uint32_t duration);` // for arduino
<!-- `fillScreen(color)` # for micropython -->

**功能：喇叭响指定频率的声音持续指定时间。**

| 参数 | 描述 |
| --- | --- |
| freq | 声音频率 |
| duration | 持续时间 (单位：毫秒) |

<!-- *如果函数的 duration 值没给出，则使用当前的背景颜色。* -->

**例程**
```clike
#include <M5Stack.h>

M5.begin();

M5.Speaker.tone(900, 1000);
```

## setBeep()

**功能:**

Set the beep sound.

**函数原型:**

`setBeep(uint16_t freq, uint16_t duration);`

| 参数 |描述 | 型 | 
| --- | --- |---|
| freq | 声音频率 (Hz) | uint16_t |
| duration | 持续时间 (单位：毫秒)  | uint16_t |

**例程**

```clike
#include <M5Stack.h>

void setup() {
  M5.begin();
  M5.Speaker.setBeep(900, 1000);
}
```