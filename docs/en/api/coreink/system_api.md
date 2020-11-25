# System & Button & RTC

## begin()

**Syntax:**

`int begin(bool InkEnable = true, bool wireEnable = false);`

**Description: Initialize E-Ink, RTC, I2C, Speaker**


**Example:**

```arduino
#include "M5CoreInk.h"

void setup() {
  M5.begin(true,false);
}
```

## update()

**Syntax:**

`void update();`

**Description: refresh device button/buzzer status**

**Example:**

```arduino

if( M5.BtnPWR.wasPressed())
{
  Serial.printf("Btn wasPressed!");
}
M5.update();

```

## Button

**Description: detects the device key state**

`M5.BtnUP.wasPressed()`

`M5.BtnDOWN.wasPressed()`

`M5.BtnMID.wasPressed()`

`M5.BtnEXT.wasPressed()`

`M5.BtnPWR.wasPressed()`

## Speaker

**Description: Buzzer Drive**

`void end();`

`void mute();`

`void tone(uint16_t frequency);`

`void tone(uint16_t frequency, uint32_t duration);`

`void beep();`

`void setBeep(uint16_t frequency, uint16_t duration);`

`void update();`

`void write(uint8_t value);`

`void setVolume(uint8_t volume);`

`void playMusic(const uint8_t *music_data, uint16_t sample_rate);`


```
M5.Speaker.tone(2700);
```

## RTC

?> Please use `M5.begin();` to initialize RTC related functions before using

```
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

## SetData()

**Syntax:**

`void SetData(RTC_TimeTypeDef* RTC_DateStruct)`

**Description:**

Set RTC Date Struct


## GetData()

**Syntax:**

`void GetData(RTC_TimeTypeDef* RTC_DateStruct)`

**Description:**

Get RTC Date Struct

**Example:**

```
#include "M5CoreInk.h"

Ink_Sprite InkPageSprite(&M5.M5Ink);

RTC_TimeTypeDef RTCtime;
RTC_DateTypeDef RTCDate;

char timeStrbuff[64];

void flushTime(){
    M5.rtc.GetTime(&RTCtime);
    M5.rtc.GetData(&RTCDate);
    
    sprintf(timeStrbuff,"%d/%02d/%02d %02d:%02d:%02d",
                        RTCDate.Year,RTCDate.Month,RTCDate.Date,
                        RTCtime.Hours,RTCtime.Minutes,RTCtime.Seconds);
                                         
    InkPageSprite.drawString(10,100,timeStrbuff);
    InkPageSprite.pushSprite();
}

void setupTime(){
  
  RTCtime.Hours = 23;
  RTCtime.Minutes = 33;
  RTCtime.Seconds = 33;
  M5.rtc.SetTime(&RTCtime);
  
  RTCDate.Year = 2020;
  RTCDate.Month = 11;
  RTCDate.Date = 6;
  M5.rtc.SetData(&RTCDate);
}

void setup() {

    M5.begin();
    if( !M5.M5Ink.isInit())
    {
        Serial.printf("Ink Init faild");
        while (1) delay(100);   
    }
    M5.M5Ink.clear();
    delay(1000);
    //creat ink refresh Sprite
    if( InkPageSprite.creatSprite(0,0,200,200,true) != 0 )
    {
        Serial.printf("Ink Sprite creat faild");
    }
    setupTime();
}

void loop() {
  flushTime();
  delay(15000);
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

```
#include "M5CoreInk.h"
void setup()
{
    M5.begin();
    digitalWrite(LED_EXT_PIN,LOW);
    M5.update();

    M5.M5Ink.clear();
    delay(500);
}

void loop()
{

    if( M5.BtnPWR.wasPressed())
    {
        Serial.printf("Btn %d was pressed \r\n",BUTTON_EXT_PIN);
        digitalWrite(LED_EXT_PIN,LOW);
        M5.shutdown(5);
        //M5.shutdown(RTC_TimeTypeDef(10,2,0));
    }

    //M5.rtc.SetAlarmIRQ(RTC_TimeTypeDef(10,2,0));

    M5.update();
}
```
