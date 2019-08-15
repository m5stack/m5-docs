## once()

**Syntax:**

<mark>void once(float seconds, callback_t callback)</mark>

**Description:**

Load <Ticker.h> before use
Execute a command in seconds, which is executed only once.

**Function argument**
	
| Function argument |Type |Description |
| --- | --- | --- |
| seconds | float | Set time |
| callback | callback_t | Custom callback function |

## once_ms()

**Syntax:**

<mark>void once_ms(uint32_t milliseconds, callback_t callback)</mark>

**Description:**

Load <Ticker.h> before use
Execute a command in milliseconds, which is executed only once.

**Function argument**
	
| Function argument |Type |Description |
| --- | --- | --- |
| milliseconds | float | Set time |
| callback | callback_t | Custom callback function |

## attach()

**Syntax:**

<mark>void attach(float seconds, void (*callback)(TArg), TArg arg)</mark>

**Description:**

Load <Ticker.h> before use
Execute commands with parameters after every seconds.

**Function argument**
	
| Function argument |Type |Description |
| --- | --- | --- |
| seconds | float | Set time |
| *callback | callback_t | Custom callback function |
| TArg | arg | function arguments |

## attach_ms()

**Syntax:**

<mark>void attach_ms(uint32_t milliseconds, void (*callback)(TArg), TArg arg)</mark>

**Description:**

Load <Ticker.h> before use
Execute commands with parameters after every milliseconds.

**Function argument**
	
| Function argument |Type |Description |
| --- | --- | --- |
| milliseconds | float | Set time |
| *callback | callback_t | Custom callback function |
| TArg | arg | function arguments |

## attach()

**Syntax:**

<mark>void attach(float seconds, callback_t callback)</mark>

**Description:**

Load <Ticker.h> before use
Execute the command after every second with no parameters.

**Function argument**
	
| Function argument |Type |Description |
| --- | --- | --- |
| seconds | float | Set time |
| callback | callback_t | Custom callback function |

## attach_ms()

**Syntax:**

<mark>void attach_ms(uint32_t milliseconds, callback_t callback)</mark>

**Description:**

Load <Ticker.h> before use
Execute the command after every milliseconds with no parameters.

**Function argument**
	
| Function argument |Type |Description |
| --- | --- | --- |
| seconds | float | Set time |
| callback | callback_t | Custom callback function |

## Usage {docsify-ignore}

```arduino
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