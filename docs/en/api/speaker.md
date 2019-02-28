# Speaker

### tone

**Syntax:**

```arduino
tone(uint16_t freq, [uint32_t duration]);
```

**Description: Set the pitch of speaker.**

| Param | Description | type |
| --- | --- | -- |
| freq  | frequency | uint16_t |
| duration | duration (unit: millisecond) | uint16_t |

**Example**
```arduino
#include <M5Stack.h>

void setup() {
  M5.begin();
  M5.Speaker.tone(900, 1000);
}
```