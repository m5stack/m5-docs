# PWM

*PWM used to generate analog signals to drive servos or buzzers,etc.*

## ledcSetup()

**Syntax:**

<mark>void ledcSetup(uint8_t channel, double freq, uint8_t resolution_bits);</mark>

**Description：Set the PWM channel, frequency and resolution.**

## ledcAttachPin()

**Syntax:**

<mark>void ledcAttachPin(uint8_t pin, uint8_t channel);</mark>

**Description：Bind the LEDC channel to the specified IO port to achieve output.**

## ledWrite()

**Syntax：**

<mark>void ledcWrite(uint8_t channel, uint32_t duty);</mark>

**Description：Output waveform to the channel channel according to the specified duty cycle.**

**Example：**
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