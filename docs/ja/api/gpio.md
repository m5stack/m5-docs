# I/O (GPIO/ADC/DAC/PWM)

*詳しくは [Arduino](http://www.arduino.cc) の マニュアルを見てください*

*便宜上、M5Stackに関連の深いものに絞って説明します*

**M5STACK割り当て:**
	
| pin番号 | 名称 |割り当て先|
| ---  |  --- |   ---    |
|    0 |  G0  |ダウンローダ |
|    1 |  T1  |UART      |
|    2 |  G2  |側面端子(M5FIREを除く),M5-BUS|
|    3 |  R1  |UART     |
|    4 |  G4  |TF|
|    5 |  G5  |側面端子(M5FIREを除く),M5-BUS|
|    6 |  G6 |SDIO      |
|    7 |  G7 |SDIO      |
|    8 |  G8 |SDIO      |
|    9 |  G9 |SDIO      |
|   10 |  G10 |SDIO      |
|   11 |  G11 |SDIO      |
|   12 |  G12 |LCD      |
|   13 |  G13 |LCD      |
|   14 |  G14 |LCD      |
|   15 |  G15 |LCD      |
|   16 |  R2 |UART      |
|   17 |  T2 |UART     |
|   18 |  G18 |TF,上面端子(SCK),M5-BUS|
|   19 |  G19 |TF,上面端子(MISO),M5-BUS|
|   21 |  G21 |GROVE-A(SDA)|
|   22 |  G22 |GROVE-A(SCL)|
|   23 |  G23 |TF,上面端子(MOSI)|
|   25 |  G25 |スピーカ,側面端子(M5FIREを除く),M5-BUS|
|   26 |  G26 |側面端子(M5FIREを除く),M5-BUS|
|   27 |  G27 |LCD      |
|   32 |  G32 |LCDバックライト |
|   33 |  G33 |LCD      |
|   34 |  G34 |なし      |
|   35 |  G35 |側面端子(M5FIREを除く)|
|   36 |  G36 |側面端子(M5FIREを除く)|
|   37 |  G37 |Cボタン|
|   38 |  G38 |Bボタン|
|   39 |  G39 |Aボタン|


## digitalRead()

**構文:**

<mark>int digitalRead(uint8_t pin);</mark>

**説明:**

端子の状態を読み取ります。

**引数**
	
| 引数 |型 |説明 |
| --- | --- | --- |
| pin | <code>uint8</code> |ピン番号 |

**戻り値:**

ピンの電圧入力状態(0/1)

**注意**

1)ピンモードがINPUTになっていない場合は正しい結果を返しません。

2)バスに他の回路がある場合、その影響を受けます。

**使用例;**
```arduino
uint32_t pin21_data;
pin21_data = digitalRead(21);
```

## digitalWrite()

**構文:**

<mark>void digitalWrite(uint8_t pin, uint8_t val);</mark>

**説明:**

端子の状態を書き込みます。

**引数**
	
| 引数 |型 |説明 |
| --- | --- | --- |
| pin | <code>uint8</code> |ピン番号 |
| val | <code>uint8</code> |出力状態(0/1) |

**戻り値:**

なし

**注意**

1)ピンモードがOUTPUTになっていない場合は正しい結果を返しません。

2)バスに他の回路がある場合、物理的に破損する可能性があるため、注意してください。


**使用例;**

```arduino
digitalWrite(2,1);
```

## pinMode()

**構文:**

<mark>void pinMode(uint8_t pin, uint8_t mode);</mark>

**説明:**

端子の入出力モードを設定します

**引数**
	
| 引数 |型 |説明 |
| --- | --- | --- |
| pin | <code>uint8</code> |ピン番号 |
| mode | <code>uint8</code> |INPUT,OUTPUT,INPUT_PULLUPのいずれか|

**戻り値:**

なし

**注意**

バスに他の回路がある場合、物理的に破損する可能性があるため、注意してください。

例えば、スピーカ(G25)端子をINPUTモードにすると、スピーカへ流れる電流により本体が発熱します。

故障の恐れがあるため、指示内容が正しいことを確認してください。

**使用例;**

```arduino
pinMode(2,INPUT);
```

## analogRead()

**構文:**
<mark>uint16_t analogRead(uint8_t pin);</mark>

**説明:**

アナログ端子の値を読み取ります。

**引数**
	
| 引数 |型 |説明 |
| --- | --- | --- |
| pin | <code>uint8</code> |ピン番号 |

**戻り値:**

読み取り結果。返答の最大値はanalogSetWidth()で決定します。

**注意**

M5StackではG35,G36が使用できます。

**使用例;**

```arduino
uint16_t ret;
ret=analogRead(35);
```

## dacWrite()

**構文:**

<mark>void dacWrite(uint8_t pin, uint8_t value);</mark>

**説明:**

アナログ端子に出力指示をします。

**引数**
	
| 引数 |型 |説明 |
| --- | --- | --- |
| pin | <code>uint8</code> |ピン番号 |
| value | <code>uint8</code> |出力指示電圧 |

**戻り値:**

なし。

**注意**

M5StackではG25,G26が使用できます。

**使用例;**

```arduino
dacWrite(25,0x40);
```

## ledcSetup()

**構文:**

<mark>double ledcSetup(uint8_t channel, double freq, uint8_t resolution_bits);</mark>

**説明:**

デューティ出力設定をします

**引数**
	
| 引数 |型 |説明 |
| --- | --- | --- |
| channel | <code>uint8</code> |チャネル(0～15) |
| freq | <code>double</code> |周波数(Hz) |
| resolution_bits | <code>uint8_t</code> |デューティ指示のフルスケールビット数 |

**戻り値:**

実際の出力周波数。

**注意**

チャンネルとGPIOポート番号は同一ではありません。

設定を記憶するための番号だと認識するとよいでしょう。



## ledcAttachPin()

**構文:**

<mark>void ledcAttachPin(uint8_t pin, uint8_t chan);</mark>

**説明:**

出力するポートを指定します。

**引数**
	
| 引数 |型 |説明 |
| --- | --- | --- |
| pin | <code>uint8_t</code> |ピン番号) |
| chan | <code>uint8_t</code> |チャネル(0～15) |

**戻り値:**

なし




## ledcWrite()

**構文:**

<mark>void ledcWrite(uint8_t chan, uint32_t duty);</mark>

**説明:**

指定したデューティ値で出力します。

**引数**
	
| 引数 |型 |説明 |
| --- | --- | --- |
| chan | <code>uint8_t</code> |チャネル(0～15) |
| duty | <code>uint32_t</code> |デューティ |

**戻り値:**

なし

**注意**

デューティの単位は、初期化時に設定したビットスケールに依存します。

8ビットで指示していた場合は 0xFF を指定すると100%出力になります。



## ledcDetachPin()

**構文:**

<mark>void ledcDetachPin(uint8_t pin);</mark>

**説明:**

割り当てたポートを解放し、出力をやめます。

**引数**
	
| 引数 |型 |説明 |
| --- | --- | --- |
| pin | <code>uint8_t</code> |ピン番号) |


**戻り値:**

なし
