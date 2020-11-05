# Speaker

## begin()

**Description:**

Initialize the speaker.

**Syntax:**

`begin();`

**Function argument:**

None

**Function return value:**

None

## end()

**Description:**

Mute the speakers and stop the output.

**Syntax:**

`end();`

**Function argument:**

None

**Function return value:**

None


## tone()

**Syntax:**

`tone(uint16_t freq, [uint32_t duration]);`

**Description: Set the pitch of speaker.**

| Param | Description | type |
| --- | --- | --- |
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

## setBeep()

**Description:**

Set the beep sound.

**Syntax:**

`setBeep(uint16_t freq, uint16_t duration);`

| Argument | Description | Type |
| --- | --- | --- |
| freq | pitch (frequency Hz) | uint16_t |
| duration | beep time (ms), optional. | uint16_t |

**Example of use:**

```arduino
#include <M5Stack.h>

void setup() {
  M5.begin();
  M5.Speaker.setBeep(900, 1000);
}
```
## mute()

**Description:**

Mute the  sound .

**Syntax:**

`void mute(void);`

**Example of use:**

```arduino
#include <M5Stack.h>

void setup() {
  M5.begin();
  M5.Speaker.mute();
}
```