# Speaker

[中文](/zh_CN/api_reference/micropython/api_speaker) | English | [日本語](/ja/api_reference/micropython/api_speaker)

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