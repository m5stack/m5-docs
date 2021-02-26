## once()

**函数原型:**

`void once(float seconds, callback_t callback)`

**功能:**

使用前加载<Ticker.h>

在设定的时间点(s)只执行一次回调函数.

**函数参数**
	
| 参数 | 类型 | 描述 |
| --- | --- | --- |
| seconds | float | 设置秒 |
| callback | callback_t | 回调函数 |

## once_ms()

**函数原型:**

`void once_ms(uint32_t milliseconds, callback_t callback)`

**功能:**

使用前加载<Ticker.h>

在设定的时间点(ms)回调函数只运行一次.

**函数参数**
	
| 参数 | 类型 | 描述 |
| --- | --- | --- |
| milliseconds | float | 毫秒 |
| callback | callback_t | 回调函数 |

## attach()

**函数原型:**

`void attach(float seconds, void (*callback)(TArg), TArg arg)`

**功能:**

使用前加载 <Ticker.h> 

每隔一段时间(s)执行一次带参数的回调函数.

**函数参数**
	
| 参数 |类型 | 描述 |
| --- | --- | --- |
| seconds | float | 秒 |
| *callback | callback_t | 带参数回调函数 |
| TArg | arg | 函数参数 |

## attach_ms()

**函数原型:**

`void attach_ms(uint32_t milliseconds, void (*callback)(TArg), TArg arg)`

**功能:**

使用前加载 <Ticker.h> 

每隔一段时间(ms)执行一次带参数的回调函数

**函数参数**
	
| 参数 | 类型 | 描述 |
| --- | --- | --- |
| milliseconds | float | 毫秒 |
| *callback | callback_t | 带参数回调函数 |
| TArg | arg | 参数 |

## attach()

**函数原型:**

`void attach(float seconds, callback_t callback)`

**功能:**

使用前加载 <Ticker.h>

每隔一定时间(s)执行一次回调函数

**函数参数**
	
| 参数 | 类型 | 描述 |
| --- | --- | --- |
| seconds | float | 秒 |
| callback | callback_t | 回调函数 |

## attach_ms()

**函数原型:**

`void attach_ms(uint32_t milliseconds, callback_t callback)`

**功能:**

使用前加载 <Ticker.h> 

每隔一定时间(ms)执行一次回调函数

**函数参数**
	
| 参数 | 类型 | 描述 |
| --- | --- | --- |
| milliseconds | float | 毫秒 |
| callback | callback_t | 回调函数 |

## Usage {docsify-ignore}

```clike
#include <M5Stack.h>
#include <Ticker.h>

Ticker tickerSetHigh;
Ticker tickerSetLow;

void display(int number) {
  M5.Lcd.setCursor(0, 0);
  M5.Lcd.print(number);
}
void setup() {
  M5.begin();
  tickerSetLow.attach_ms(1000, display, 0);
  tickerSetHigh.attach_ms(2000, display, 1);
}
void loop() {
}



```