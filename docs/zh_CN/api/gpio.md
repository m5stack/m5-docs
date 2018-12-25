# GPIO

中文 | [English](/en/api_reference/micropython/peripherals/api_gpio) | [日本語](/ja/api_reference/micropython/peripherals/api_gpio)

*使用Arduino库的GPIO API*

### <mark>digitalRead</mark>
> uint32 digitalRead(uint8 pin);

读取数字引脚电平值

| Param | Type | Description |
| --- | --- | --- |
| pin | <code>uint8</code> | 引脚编号 |

Return:
    电平值(0/1)

**例程**
```c++
uint32_t pin21_data;
pin21_data = digitalRead(21);
```