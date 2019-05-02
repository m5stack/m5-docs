# GPIO {docsify-ignore-all}



*詳しくは [Arduino](http://www.arduino.cc) の GPIOマニュアルを見てください*
## digitalRead()

**構文:**
<mark> uint32 digitalRead(uint8 pin);</mark>

**説明:**

端子の状態を読み取ります。`

**引数**
	
| 引数 |型 |説明 |
| --- | --- | --- |
| pin | <code>uint8</code> |ピン番号 |

戻り値:
    ピンの電圧入力状態(0/1)

**使用例;**
```arduino
uint32_t pin21_data;
pin21_data = digitalRead(21);
```