# GPIO

[中文](/zh_CN/api_reference/micropython/peripherals/api_gpio) | [English](/en/api_reference/micropython/peripherals/api_gpio) | 日本語

*Refer to GPIO API of [Arduino](http://www.arduino.cc)*

### <mark>digitalRead</mark>
> uint32 digitalRead(uint8 pin);

Read the value of `pin`

| Param | Type | Description |
| --- | --- | --- |
| pin | <code>uint8</code> | the number of pin |

Return:
    digital level(0/1)

**Example**
```c++
uint32_t pin21_data;
pin21_data = digitalRead(21);
```