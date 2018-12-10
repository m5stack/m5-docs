# Speaker

[中文](/zh_CN/api_reference/micropython/api_speaker) | [English](/en/api_reference/micropython/api_speaker) | 日本語

### <mark>tone</mark>
> M5.Speaker.tone(uint32_t freq);

Set the pitch of speaker.

| Param | Type | Description |
| --- | --- | --- |
| freq | <code>uint32_t</code> | frequency |

**Example**
```c++
M5.Speaker.tone(100);
```