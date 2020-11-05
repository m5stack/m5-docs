## run()

**Syntax:**

`run()`

**Description:**

this function must be called inside loop()


## setInterval()

**Syntax:**

`int setInterval(long d, timer_callback f)`

**Description:**

call function f every d milliseconds

**Function argument**
	
| Function argument |Type |Description |
| --- | --- | --- |
| d | long | milliseconds |
| f | function | timer_callback function |

**Example:**

```arduino
#include <M5Stack.h>
#include "utility/M5Timer.h"

M5Timer M5timer;
void repeatMe(){
  M5.Lcd.setCursor(0,0);
  M5.Lcd.clear();
  M5.Lcd.print("Uptime(s): ");
  M5.Lcd.println(millis()/1000);
}
void setup() {
  M5.begin();
  M5timer.setInterval(1000, repeatMe);
}
void loop() {
  M5timer.run();
}
```

## setTimeout()

**Syntax:**

`int setTimeout(long d, timer_callback f)`

**Description:**

call function f once after d milliseconds

**Function argument**
	
| Function argument |Type |Description |
| --- | --- | --- |
| d | long | milliseconds |
| f | function | timer_callback function |


**Example:**

```arduino
#include <M5Stack.h>
#include "utility/M5Timer.h"

M5Timer M5timer;
void Timeout(){
  M5.Lcd.setCursor(0,0);
  M5.Lcd.clear();
  M5.Lcd.print("Timeout(s): ");
  M5.Lcd.println(millis()/1000);
}
void setup() {
  M5.begin();
  M5timer.setTimeout(5000, Timeout);
}
void loop() {
  M5timer.run();
}
```

## setTimer()

**Syntax:**

`int setTimer(long d, timer_callback f, int n);`

**Description:**

call function f every d milliseconds for n times

**Function argument**
	
| Function argument |Type |Description |
| --- | --- | --- |
| d | long | milliseconds |
| f | function | timer_callback function |
| n | int | Number of executions |

**Example:**

```arduino
#include <M5Stack.h>
#include "utility/M5Timer.h"

M5Timer M5timer;

void Timer(){
  M5.Lcd.print("Timeout(s): ");
  M5.Lcd.println(millis()/1000);
}

void setup() {
  M5.begin();
  M5timer.setTimer(2000, Timer, 3);
}

void loop() {
  M5timer.run();
}
```

## Enable()

**Syntax:**

`void Enable(int numTimer)`

**Description:**

enables the specified timer

**Function argument**
	
| Function argument |Type |Description |
| --- | --- | --- |
| numTimer | int | timer id |


**Example:**

```arduino
#include <M5Stack.h>
#include "utility/M5Timer.h"

M5Timer M5timer;
int timerId = 1;
void setup() {
  M5.begin();
  M5timer.enable(timerId);
}
void loop() {
  M5timer.run();
  if (M5timer.isEnabled(timerId)){
    M5.Lcd.setCursor(0, 0);
    M5.Lcd.print("Timer is enable ");
    M5.Lcd.println(millis()/1000);
  }
}
```

## isEnabled()

**Syntax:**

`boolean isEnabled(int numTimer)`

**Description:**

returns true if the specified timer is enabled

**Function argument**
	
| Function argument |Type |Description |
| --- | --- | --- |
| numTimer | int | timer id |


**Example:**

```arduino
#include <M5Stack.h>
#include "utility/M5Timer.h"

M5Timer M5timer;
int timerId = 1;
void setup() {
  M5.begin();
  M5timer.enable(timerId);
}
void loop() {
  M5timer.run();
  if (M5timer.isEnabled(timerId)){
    M5.Lcd.setCursor(0, 0);
    M5.Lcd.print("Timer is enable ");
    M5.Lcd.println(millis()/1000);
  }
}
```

## Disable()

**Syntax:**

`void Disable(int numTimer)`

**Description:**

disables the specified timer

**Function argument**
	
| Function argument |Type |Description |
| --- | --- | --- |
| numTimer | int | timer id |


**Example:**

```arduino
#include <M5Stack.h>
#include "utility/M5Timer.h"

M5Timer M5timer;
int timerId = 1;
void setup() {
  M5.begin();
  M5timer.enable(timerId);
}
void loop() {
  M5timer.run();
  if (M5timer.isEnabled(timerId)){
    M5.Lcd.setCursor(0, 0);
    M5.Lcd.print("Timer is enable ");
    M5.Lcd.println(millis()/1000);
  }
  while (millis() > 5000){
    M5timer.disable(timerId);
  }
}
```
