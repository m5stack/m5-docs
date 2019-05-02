# I2C

M5StackのGrove-Aポート(I2C)を制御するクラスです。
あらかじめ M5.Begin()でI2C通信が初期化されている必要があります。

## writeCommand()

**構文:**
<mark>bool writeCommand(uint8_t address, uint8_t subAddress);</mark>

**説明:**

指定のアドレスに書きこみます。
パラメータがない場合に使います。

**引数**

| 引数 |型 |説明 |
| --- | --- | --- |
| address | <code>uint8_t</code> |スレーブアドレス |
| subAddress | <code>uint8_t</code> |機能アドレス |

**戻り値:**

| 値 |説明 |
| --- | --- |
|true|送信成功。|
|false|送信失敗。|


## writeByte()

**構文:**
<mark>bool writeByte(uint8_t address, uint8_t subAddress, uint8_t data);</mark>

**説明:**

指定のアドレスに書きこみます。
パラメータ１つある場合に使います。

**引数**

| 引数 |型 |説明 |
| --- | --- | --- |
| address | <code>uint8_t</code> |スレーブアドレス |
| subAddress | <code>uint8_t</code> |機能アドレス |
| data | <code>uint8_t</code> |パラメータ |

**戻り値:**

| 値 |説明 |
| --- | --- |
|true|送信成功。|
|false|送信失敗。|



## writeBytes()

**構文:**
<mark> bool writeBytes(uint8_t address, uint8_t subAddress, uint8_t *data,uint8_t length);</mark>

**説明:**

指定のアドレスに書きこみます。
パラメータが複数ある場合に使います。

**引数**

| 引数 |型 |説明 |
| --- | --- | --- |
| address | <code>uint8_t</code> |スレーブアドレス |
| subAddress | <code>uint8_t</code> |機能アドレス |
| data | <code>uint8_t *</code> |パラメータ配列の先頭 |
| length | <code>uint8_t</code> |パラメータ長 |

**戻り値:**

| 値 |説明 |
| --- | --- |
|true|送信成功。|
|false|送信失敗。|


## readByte()

**構文:**
<mark> bool readByte(uint8_t address, uint8_t *result);</mark>

**説明:**

指定のアドレスから読み込みます。
読み込み前に送信するデータがなく、返答が1バイトの場合に使います。

**引数**

| 引数 |型 |説明 |
| --- | --- | --- |
| address | <code>uint8_t</code> |スレーブアドレス |
| result | <code>uint8_t *</code> |結果格納先 |

**戻り値:**

| 値 |説明 |
| --- | --- |
|true|読込成功。|
|false|読込失敗。|

## readByte()

**構文:**
<mark>bool readByte(uint8_t address, uint8_t subAddress,uint8_t *result);</mark>

**説明:**

指定のアドレスから読み込みます。
読み込み前に送信するデータが機能アドレスのみで、返答が1バイトの場合に使います。

**引数**

| 引数 |型 |説明 |
| --- | --- | --- |
| address | <code>uint8_t</code> |スレーブアドレス |
| subAddress | <code>uint8_t</code> |機能アドレス |
| result | <code>uint8_t *</code> |結果格納先 |

**戻り値:**

| 値 |説明 |
| --- | --- |
|true|読込成功。|
|false|読込失敗。|


## readBytes()

**構文:**
<mark>bool readBytes(uint8_t address, uint8_t count,uint8_t * dest);</mark>

**説明:**

指定のアドレスから読み込みます。
読み込み前に送信するデータがなく、返答が複数ある場合に使います。

**引数**

| 引数 |型 |説明 |
| --- | --- | --- |
| address | <code>uint8_t</code> |スレーブアドレス |
| count | <code>uint8_t</code> |要求バイト数 |
| result | <code>uint8_t *</code> |結果格納先 |

**戻り値:**

| 値 |説明 |
| --- | --- |
|true|読込成功。|
|false|読込失敗。|

## readBytes()

**構文:**
<mark>bool readBytes(uint8_t address, uint8_t subAddress, uint8_t count, uint8_t * dest);</mark>

**説明:**

指定のアドレスから読み込みます。
読み込み前に送信するデータが機能アドレスのみで、返答が複数ある場合に使います。

**引数**

| 引数 |型 |説明 |
| --- | --- | --- |
| address | <code>uint8_t</code> |スレーブアドレス |
| subAddress | <code>uint8_t</code> |機能アドレス |
| count | <code>uint8_t</code> |要求バイト数 |
| result | <code>uint8_t *</code> |結果格納先 |

**戻り値:**

| 値 |説明 |
| --- | --- |
|true|読込成功。|
|false|読込失敗。|


## scanID()

**構文:**
<mark>bool readBytes(bool *result);</mark>

**説明:**

I2Cバス上のデバイス存在確認をおこないます。

**引数**

| 引数 |型 |説明 |
| --- | --- | --- |
| result | <code>bool *</code> |結果格納先 (128バイト) |

**戻り値:**

| 値 |説明 |
| --- | --- |
|true|読込成功。|
|false|読込失敗。|


