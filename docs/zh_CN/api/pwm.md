# PWM

*PWM用于产生模拟信号驱动舵机或蜂鸣器*

## ledcSetup()

**函数原型：**

<mark>void ledcSetup(uint8_t channel, double freq, uint8_t resolution_bits);</mark>

**功能：设置PWM通道,频率和分辨率。**

## ledcAttachPin()

**函数原型：**

<mark>void ledcAttachPin(uint8_t pin, uint8_t channel);</mark>

**功能：将 LEDC 通道绑定到指定 IO 口上以实现输出**

## ledWrite()

**函数原型：**

<mark>void ledcWrite(uint8_t channel, uint32_t duty);</mark>

**功能：向channel通道写入duty%占空比。**

**例程：**
```arduino
#include <M5StickC.h>
int freq = 1800;
int channel = 0;
int resolution_bits = 8;
int buzzer = 2;

void setup() {
  M5.begin();
  ledcSetup(channel, freq, resolution_bits);
  ledcAttachPin(buzzer, channel);
}
void loop() {
    ledcWrite(channel, 128);
    delay(1000);
    ledcWrite(channel, 0);
    delay(1000);
}
```