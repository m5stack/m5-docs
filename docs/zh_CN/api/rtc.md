## SetTime()

**函数原型:**

<mark>void SetTime(RTC_TimeTypeDef* RTC_TimeStruct)</mark>

**函数参数:**

设置结构体变量时间

**示例:**

```arduino
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

**函数原型:**

<mark>void GetTime(RTC_TimeTypeDef* RTC_TimeStruct)</mark>

**函数参数:**

获取结构体时间

**示例:**

```arduino

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

**函数原型:**

<mark>void SetData(RTC_TimeTypeDef* RTC_DateStruct)</mark>

**函数参数:**

设置结构体变量日期

**示例:**

```arduino

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

**函数原型:**

<mark>void GetData(RTC_TimeTypeDef* RTC_DateStruct)</mark>

**函数参数:**

获取结构体变量日期

**示例:**

```arduino
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