# Speaker

### tone

**Function prototype:**

<mark>tone(uint16_t freq);</mark> // for arduino

<mark>tone(uint16_t freq, uint32_t duration);</mark> // for arduino
<!-- <mark>fillScreen(color)</mark> # for micropython -->

**Function: Set the pitch of speaker.**

| Param | Description |
| --- | --- |
| freq  | frequency |
| duration | duration (unit: millisecond) |

**Example**
```arduino
#include <M5Stack.h>

M5.begin();

M5.Speaker.tone(900, 1000);
```