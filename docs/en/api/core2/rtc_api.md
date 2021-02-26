# RTC

```clike
typedef struct RTC_Time
{
    int8_t Hours;
    int8_t Minutes;
    int8_t Seconds;
    RTC_Time() : Hours(),Minutes(),Seconds(){}
    RTC_Time(int8_t h,int8_t m,int8_t s) : Hours(h),Minutes(m),Seconds(s){}
} RTC_TimeTypeDef;

typedef struct RTC_Date
{
    int8_t WeekDay;
    int8_t Month;
    int8_t Date;
    int16_t Year;
    RTC_Date() : WeekDay(),Month(),Date(),Year(){}
    RTC_Date(int8_t w,int8_t m,int8_t d, int16_t y) : WeekDay(w),Month(m),Date(d),Year(y){}
} RTC_DateTypeDef;
```

## SetTime()

**Syntax:**

`void SetTime(RTC_TimeTypeDef* RTC_TimeStruct)`

**Description:**

Set RTC Time Struct

## GetTime()

**Syntax:**

`void GetTime(RTC_TimeTypeDef* RTC_TimeStruct)`

**Description:**

Get RTC Time Struct

## SetDate()

**Syntax:**

`void SetDate(RTC_TimeTypeDef* RTC_DateStruct)`

**Description:**

Set RTC Date Struct


## GetDate()

**Syntax:**

`void GetDate(RTC_TimeTypeDef* RTC_DateStruct)`

**Description:**

Get RTC Date Struct

**Example:**

```clike
#include <M5Core2.h>

RTC_TimeTypeDef RTCtime;
RTC_DateTypeDef RTCDate;

char timeStrbuff[64];

void flushTime(){
    M5.Rtc.GetTime(&RTCtime);
    M5.Rtc.GetDate(&RTCDate);
    
    sprintf(timeStrbuff,"%d/%02d/%02d %02d:%02d:%02d",
                        RTCDate.Year,RTCDate.Month,RTCDate.Date,
                        RTCtime.Hours,RTCtime.Minutes,RTCtime.Seconds);
                                         
    M5.lcd.setCursor(10,100);
    M5.Lcd.println(timeStrbuff);
}

void setupTime(){
  
  RTCtime.Hours = 23;
  RTCtime.Minutes = 33;
  RTCtime.Seconds = 33;
  M5.Rtc.SetTime(&RTCtime);
  
  RTCDate.Year = 2020;
  RTCDate.Month = 11;
  RTCDate.Date = 6;
  M5.Rtc.SetDate(&RTCDate);
}

void setup() {

  M5.begin();
  setupTime();
}

void loop() {
  flushTime();
  delay(1000);
}

```

## shutdown()

### function overload-1:

Power off and wake up again via PWR button

`void shutdown();`

### function overload-2:

Turn off the power and wake up the device via RTC at the end of the delay based on the number of seconds of incoming delay.

`int shutdown( int seconds );`

### function overload-3:

Turn off the power, pass in the RTC time structure that specifies a certain point in time, and wake up the device via RTC when the `hours`, `minutes`, and `seconds` of that time are met.

`int shutdown( const RTC_TimeTypeDef &RTC_TimeStruct);`

### function overload-4:

Turn off the power, pass in the RTC time structure specified for a certain point in time, and wake up the device by RTC when the `week number`, `day number`, and `time` of that point in time match at the same time.

`int shutdown( const RTC_DateTypeDef &RTC_DateStruct, const RTC_TimeTypeDef &RTC_TimeStruct);`

**Example:**

```clike
#include <M5Core2.h>

RTC_TimeTypeDef RTCtime;
RTC_TimeTypeDef RTCtime_Now;

char timeStrbuff[64];

void setup()
{
  M5.begin(true,true,true,true);

  RTCtime.Hours = 10;
  RTCtime.Minutes = 30;
  RTCtime.Seconds = 45;

  M5.Lcd.setCursor(0,80);
  M5.Lcd.println("");
  M5.Lcd.println("BtnA:  shutdown, use power button to turn back on");
  M5.Lcd.println("");
  M5.Lcd.println("BtnB:  shutdown, wake up after 5 seconds");
  M5.Lcd.println("");
  M5.Lcd.println("BtnC:  shutdown, wake up at RTC Time 10:30:45");
}

void loop()
{

  M5.update();

  if(M5.BtnA.wasPressed())
  { 
    M5.shutdown();
  }
  if(M5.BtnB.wasPressed())
  {
    M5.shutdown(5);
  }
  if(M5.BtnC.wasPressed())
  {
    M5.shutdown(RTCtime);
  }

  M5.Lcd.setCursor(0,140);
  M5.Rtc.GetTime(&RTCtime_Now);
  sprintf(timeStrbuff,"RTC Time Now is %02d:%02d:%02d",
         RTCtime_Now.Hours,RTCtime_Now.Minutes,RTCtime_Now.Seconds);
  M5.Lcd.println(timeStrbuff);

}

```
