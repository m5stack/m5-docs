## SetTime()

**Syntax:**

`void SetTime(RTC_TimeTypeDef* RTC_TimeStruct)`

**Description:**

Set time with the value of the structure member variable

**Example:**

```clike
#include <M5StickC.h>

RTC_TimeTypeDef TimeStruct;
void setup() {
  M5.begin();
  
  TimeStruct.Hours   = 18;
  TimeStruct.Minutes = 56;
  TimeStruct.Seconds = 10;
  M5.Rtc.SetTime(&TimeStruct);
}
void loop(){};
```

## GetTime()

**Syntax:**

`void GetTime(RTC_TimeTypeDef* RTC_TimeStruct)`

**Description:**

Get time with the value of the structure member variable

**Example:**

```clike

#include <M5StickC.h>

RTC_TimeTypeDef TimeStruct;
void setup() {
  M5.begin();
  M5.Lcd.setRotation(3);
  M5.Lcd.fillScreen(BLACK);
  
  M5.Lcd.setTextSize(1);
  M5.Lcd.setCursor(40, 0, 2);
  M5.Lcd.println("RTC TEST");
  
  TimeStruct.Hours   = 18;
  TimeStruct.Minutes = 56;
  TimeStruct.Seconds = 10;
  M5.Rtc.SetTime(&TimeStruct);
}

void loop() {
  M5.Rtc.GetTime(&TimeStruct);
  M5.Lcd.setCursor(0, 15);
  M5.Lcd.printf("Time: %02d : %02d : %02d\n",TimeStruct.Hours, TimeStruct.Minutes, TimeStruct.Seconds);
  delay(500);
}
```

## SetData()

**Syntax:**

`void SetData(RTC_TimeTypeDef* RTC_DateStruct)`

**Description:**

Set date with the value of the structure member variable

**Example:**

```clike

#include <M5StickC.h>

RTC_TimeTypeDef TimeStruct;
RTC_DateTypeDef DateStruct;
void setup() {
  M5.begin();

  DateStruct.WeekDay = 3;
  DateStruct.Month = 3;
  DateStruct.Date = 22;
  DateStruct.Year = 2019;
  M5.Rtc.SetData(&DateStruct);
}
void loop(){};

```

## GetData()

**Syntax:**

`void GetData(RTC_TimeTypeDef* RTC_DateStruct)`

**Description:**

Get date with the value of the structure member variable

**Example:**

```clike
#include <M5StickC.h>

RTC_DateTypeDef DateStruct;
void setup() {
  M5.begin();
  M5.Lcd.setRotation(3);
  M5.Lcd.fillScreen(BLACK);
  
  M5.Lcd.setTextSize(1);
  M5.Lcd.setCursor(40, 0, 2);
  M5.Lcd.println("RTC TEST");
  
  DateStruct.WeekDay = 3;
  DateStruct.Month = 3;
  DateStruct.Date = 22;
  DateStruct.Year = 2019;
  M5.Rtc.SetData(&DateStruct);
}

void loop() {
  M5.Rtc.GetData(&DateStruct);
  M5.Lcd.setCursor(0, 15);
  M5.Lcd.printf("Data: %04d-%02d-%02d\n",DateStruct.Year, DateStruct.Month,DateStruct.Date);
  M5.Lcd.printf("Week: %d\n",DateStruct.WeekDay);
  delay(500);
}