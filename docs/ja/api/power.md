# Power

*電源関連の機能はIP5306チップに依存しています。必要に応じてデータシート[IP5306]（https://github.com/m5stack/M5-Schematic/blob/master/Core/IIC_IP5306_REG_V1.4.pdf）を参照してください*

*古いM5STACKハードウェアの場合、IP5306チップが通信未対応です。機能を使う場合は制御できないケースも考慮してください。*

下記の例のように、初期化、通信確認、制御の順で使用してください。
```arduino
  M5.Power.begin();
  if(!M5.Power.canControl()) {
    //can't control.
    return;
  }
  M5.Power.lightSleep(SLEEP_SEC(5));
```
## begin()

**構文:**

<mark>void begin()</mark>

**説明:**

Powerクラスの初期化を行います。  


**引数**
なし。

**戻り値**
なし。

## setPowerBoostOnOff()

**構文:**

<mark>bool setPowerBoostOnOff(bool en)</mark>

**説明:**

電源をON/OFFの方法を変更します。  
USB接続時は電源をOFFにできません。

**引数**

| 値 |説明 |
| --- |--- |
|true|長押しでON/OFFします。|
|false|短押し2回でON/OFFします。 |

**戻り値**

| 値 |説明 |
| --- |--- |
|true|制御成功。|
|false|制御失敗。|

## setPowerBoostSet()

**構文:**

<mark>bool setPowerBoostSet(bool en)</mark>

**説明:**

電源をON/OFFの方法を変更します。  
USB接続時は電源をOFFにできません。

**引数**

| 引数 |説明 |
| --- |--- |
|true|短押し1回でON/OFFします。|
|false|setPowerBoostOnOff()の方法に従います。 |

**戻り値**

| 値 |説明 |
| --- |--- |
|true|制御成功|
|false|制御失敗| 

## setPowerVin()

**構文:**

<mark>bool setPowerVin(bool en)</mark>

**説明:**

USBなどからの電源供給が途切たとき、
電源を再投入するかを決定します。 

**引数**

| 値 |説明 |
| --- |--- |
|true|電源を再投入します。|
|false|電源を再投入しません。 |

**戻り値**

| 値 |説明 |
| --- |--- |
|true|制御成功|
|false|制御失敗| 


## setPowerWLEDSet()

**構文:**

<mark>bool setPowerWLEDSet(bool en)</mark>

**説明:**

電源LEDを付けるためのモードを設定します。
なお、M5GOのIP5306は結線されておらず、この関数では制御できません。

**引数**

| 値 |説明 |
| --- |--- |
|true|短押し2回でLEDをつけます|
|false|長押しでLEDをつけます|

**戻り値**

| 値 |説明 |
| --- |--- |
|true|制御成功|
|false|制御失敗| 

## setPowerBtnEn()

**構文:**

<mark>bool setPowerBtnEn(bool en)</mark>

**説明:**

電源ボタンを受け付けるか設定します。
ボタンを受け付けない場合は、
通電状態ならば電源ボタンはCPUリセットのみを受け付けます。
非通電状態ならば、電源は投入できなくなります。

**引数**

| 値 |説明 |
| --- |--- |
|true|電源操作を受け付けます。|
|false|電源操作を受け付けません。|

**戻り値**

| 値 |説明 |
| --- |--- |
|true|制御成功|
|false|制御失敗| 


## setLowPowerShutdownTime()

**構文:**

<mark>bool setLowPowerShutdownTime(ShutdownTime time)</mark>

**説明:**

IP5306が省エネ判断をして電源OFFするまでの待ち時間を設定します。

**引数**

| 値 |説明 |
| --- |--- |
|ShutdownTime::SHUTDOWN_8S |8秒待ちます。|
|ShutdownTime::SHUTDOWN_16S|16秒待ちます。|
|ShutdownTime::SHUTDOWN_32S|32秒待ちます。|
|ShutdownTime::SHUTDOWN_64S|64秒待ちます。|

**戻り値**

| 値 |説明 |
| --- |--- |
|true|制御成功|
|false|制御失敗| 


## setPowerBoostKeepOn()

**構文:**

<mark>bool setPowerBoostKeepOn(bool en)</mark>

**説明:**

省エネを無効にし電源供給状態を維持します。  

**引数**

| 値 |説明 |
| --- |--- |
|true|電源供給を常に保ちます。 （IP5306スリープ無効）|
|false| 電源供給はIP5306が判断します。（IP5306スリープ有効）|

**戻り値**

| 値 |説明 |
| --- |--- |
|true|制御成功|
|false|制御失敗|   


## setKeepLightLoad()

**構文:**

<mark>bool setKeepLightLoad(bool en)</mark>

**説明:**

自動シャットダウン無効化機能を設定します。  
(非推奨：この関数は無効化され、今後なくなります)

**引数**

| 値 |説明 |
| --- |--- |
|true| 軽負荷時に自動シャットダウンしません。 |
|false| 軽負荷時に自動シャットダウンします。  |

**戻り値**

| 値 |説明 |
| --- |--- |
|true|制御成功|
|false|制御失敗| 


## setLowPowerShutdown()

**構文:**

<mark>bool setLowPowerShutdown(bool en)</mark>

**説明:**

省電力時の自動シャットダウン機能を設定します。  
(非推奨：この関数は無効化され、今後なくなります。setPowerBoostKeepOnを使ってください)

**引数**

| 値 |説明 |
| --- |--- |
|true|省エネシャットダウン機能を有効にします。|
|false|省エネシャットダウン機能を無効にします。|

**戻り値**

| 値 |説明 |
| --- |--- |
|true|制御成功|
|false|制御失敗|  

## setAutoBootOnLoad()

**構文:**

<mark>bool setAutoBootOnLoad(bool en)</mark>

**説明:**

IP5306の2次側に電力消費が発生した場合に自動起動するかを設定します。  

**引数**

| 値 |説明 |
| --- |--- |
|true|自動起動機能を有効にします。|
|false|自動起動機能を無効にします。|

**戻り値**

| 値 |説明 |
| --- |--- |
|true|制御成功|
|false|制御失敗| 

## setCharge()

**構文:**

<mark>bool setCharge(bool en)</mark>

**説明:**

充電制御状態を指示します。  
満充電時は、有効→無効→有効とセットすることで再充電ができます。  

**引数**

| 値 |説明 |
| --- |--- |
|true|充電開始指示。|
|false|充電中止指示。|

**戻り値**

| 値 |説明 |
| --- |--- |
|true|制御成功|
|false|制御失敗|  


## isChargeFull()

**構文:**

<mark>bool isChargeFull()</mark>

**説明:**

満充電かを判断します。  

**引数**

なし。  

**戻り値**

| 値 |説明 |
| --- |--- |
|true|満充電。 |
|false|満充電ではない。 |


## canControl()

**構文:**

<mark>bool canControl()</mark>

**説明:**

電源コントローラが制御可能かどうかを判断します。  
古いM5Stackなど、IP5306を認識できない場合はfalseとなります。
その場合は、Powerクラスのほとんどが機能しません。

**引数**

なし。

**戻り値**

| 値 |説明 |
| --- |--- |
|true|電源コントローラーを制御可能。|
|false|電源コントローラーを制御不可能。|


## isCharging()

**構文:**

<mark>bool isCharging()</mark>

**説明:**

充電状態かどうかを判断します。  

**引数**

なし。  

**戻り値**

| 値 |説明 |
| --- |--- |
|true|充電中。|
|false|充電中ではない。|


## getBatteryLevel()

**構文:**

<mark>int8_t getBatteryLevel()</mark>

**説明:**

バッテリー残量(%)を返します。  

**引数**

なし  

**戻り値**

バッテリーレベルを(0-100)の範囲で返します。（単位：％）  
もし残量が確認できる状態になければ-1を返します。  


## setWakeupButton()

**構文:**

<mark>void setWakeupButton(uint8_t button)</mark>

**説明:**

スリープから復帰するときに監視する信号ポートを設定します。  

**引数**

| 値 |説明 |
| --- |--- |
|button| ポート番号  |

**戻り値**

なし

**使用例:**

```arduino
setWakeupButton(BUTTON_A_PIN);
```

## reset()

**構文:**

<mark>void reset();</mark>

**説明:**

CPUをリセットし、再起動します。  

**引数**

なし 

**戻り値**

なし

## isResetbySoftware()

**構文:**

<mark>bool isResetbySoftware()</mark>

**説明:**

現在の起動状態がCPUリセット後であるか判定します。  
(reset()もしくはRTOS等から同等の処理を行うとtrueになります)

**引数**

なし

**戻り値**

| 値 |説明 |
| --- |--- |
|true| ソフトウェアリセットによるもの|
|false| それ以外によるもの|

## isResetbyWatchdog()

**構文:**

<mark>bool isResetbyWatchdog()</mark>

**説明:**

現在の起動状態がウォッチドッグ後であるか判定します。  

**引数**

なし

**戻り値**

| 値 |説明 |
| --- |--- |
|true|ウォッチドッグによるもの|
|false|それ以外によるもの|

## isResetbyDeepsleep()

**構文:**

<mark>bool isResetbyDeepsleep()</mark>

**説明:**

現在の起動状態がdeepSleep()後であるか判定します。  

**引数**

なし

**戻り値**

| 値 |説明 |
| --- |--- |
|true|deepSleep()後の起動|
|false|それ以外によるもの|

## isResetbyPowerSW()

**構文:**

<mark>bool isResetbyPowerSW()</mark>

**説明:**

現在の起動状態がパワーSWからの電源投入後であるか判定します。  

**引数**

なし

**戻り値**

| 値 |説明 |
| --- |--- |
|true|パワーSWからの電源投入後の起動|
|false|それ以外によるもの|

## deepSleep()

**構文:**

<mark>void deepSleep(uint64_t time_in_us)</mark>

**説明:**
省電力モードに移行します。  
指定した時間、もしくはポートに変化があった場合に起動します。
復帰した後は、次の行からの実行ではなく、CPUは再起動されます。

**使用例:**
5秒省エネを行い、その後に再起動します。
```arduino
deepSleep(SLEEP_SEC(5));
```

## lightSleep()

**構文:**

<mark>void lightSleep(uint64_t time_in_us)</mark>

**説明:**
省電力モードに移行します。  
指定した時間、もしくはポートに変化があった場合に起動します。
復帰した後は、次の行から実行されます。
deepSleepに比べ、省電力能力に欠けます。

**使用例:**
5秒省エネを行い、その後に再起動します。
```arduino
lightSleep(SLEEP_SEC(5));
```

## powerOFF()

**構文:**

<mark>void powerOFF()</mark>

**説明:**
電源を切ります。
省電力機能を用いて、IP5306を8秒後にOFFさせることで
回路側に供給される電源をOFFとします。

**使用上の注意**
強制的に電源をOFFにする手段が用意されていないため
IP5306の省電力機能をつかってこの機能を実現しています。
そのためユーザが回路で電流を消費している場合には
IP5306は電源OFFへの移行判断に失敗します。

