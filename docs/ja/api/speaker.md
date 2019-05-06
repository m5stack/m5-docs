# スピーカー

## begin()

**機能:**

スピーカーを初期化します。

**構文:**

<mark>begin();</mark>

**引数:**

なし

**戻り値:**

なし

## end()

**機能:**

スピーカーをミュートし、出力を終了します。

**構文:**

<mark>end();</mark>

**引数:**

なし

**戻り値:**

なし

## tone()

**機能:**

指定した音と長さでスピーカーを鳴らします。

**構文:**

<mark>tone(uint16_t freq, [uint32_t duration]);</mark>

| 引数 | 説明 | 型 |
| --- | --- | -- |
| freq | 音の高さ（周波数Hz） | uint16_t |
| duration | 鳴動時間 (ms)、 省略可能。 | uint16_t |

**使用例:**

```arduino
#include <M5Stack.h>

void setup() {
  M5.begin();
  M5.Speaker.tone(900, 1000);
}
```

## setBeep()

**機能:**

Beepで鳴らす音を設定します。

**構文:**

<mark>setBeep(uint16_t freq, uint16_t duration);</mark>

| 引数 | 説明 | 型 |
| --- | --- | -- |
| freq | 音の高さ（周波数Hz） | uint16_t |
| duration | 鳴動時間 (ms)、 省略可能。 | uint16_t |

**使用例:**

```arduino
#include <M5Stack.h>

void setup() {
  M5.begin();
  M5.Speaker.setBeep(900, 1000);
}
```

<!--
### <mark>tone</mark>
> M5.Speaker.tone(uint32_t freq);

Set the pitch of speaker.

| Param | Type | Description |
| --- | --- | --- |
| freq | <code>uint32_t</code> | frequency |

**Example**
```arduino
M5.Speaker.tone(100);
``` -->