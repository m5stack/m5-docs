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

**函数原型:**

`void SetTime(RTC_TimeTypeDef* RTC_TimeStruct)`

**函数参数:**

设置结构体变量时间

## GetTime()

**函数原型:**

`void GetTime(RTC_TimeTypeDef* RTC_TimeStruct)`

**函数参数:**

获取结构体时间

## SetDate()

**函数原型:**

`void SetDate(RTC_TimeTypeDef* RTC_DateStruct)`

**函数参数:**

设置结构体变量日期

## GetDate()

**函数原型:**

`void GetDate(RTC_TimeTypeDef* RTC_DateStruct)`

**函数参数:**

获取结构体变量日期

**使用示例:**

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

### 函数重载1:

关闭电源，再次启动需要通过PWR按键唤醒

`void shutdown();`

### 函数重载2:

关闭电源，根据传入的延时秒数，在延时结束后通过RTC唤醒设备。

`int shutdown( int seconds );`

### 函数重载3:

关闭电源，传入指定了某个时间点的RTC时间结构体，当符合该时间的`时`,`分`,`秒`的时候通过RTC唤醒设备。

`int shutdown( const RTC_TimeTypeDef &RTC_TimeStruct);`

### 函数重载4:

关闭电源，传入指定了某个时间点的RTC时间结构体，当同时符合该时间点的`周数`,`天数`,`时间`的时通过RTC唤醒设备。

`int shutdown( const RTC_DateTypeDef &RTC_DateStruct, const RTC_TimeTypeDef &RTC_TimeStruct);`


**使用示例:**

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