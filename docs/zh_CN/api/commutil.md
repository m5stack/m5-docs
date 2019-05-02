# I2C 

这是一个控制M5Stack的Grove-A端口（I2C）的类。
需要通过M5.Begin()预先初始化I2C通信。

## writeCommand()

**構文:**
<mark>bool writeCommand(uint8_t address, uint8_t subAddress);</mark>

**功能:**

写入指定的地址。
没有参数时使用。

**参数**

| 参数 |型 |功能 |
| --- | --- | --- |
| address | <code>uint8_t</code> |奴隶地址 |
| subAddress | <code>uint8_t</code> |功能地址 |

**返回值:**

| 値 |功能 |
| --- | --- |
|true|发送成功。|
|false|发送失败。|



## writeByte()

**構文:**
<mark>bool writeByte(uint8_t address, uint8_t subAddress, uint8_t data);</mark>

**功能:**

写入指定的地址。
有一个参数时使用。

**参数**

| 参数 |型 |功能 |
| --- | --- | --- |
| address | <code>uint8_t</code> |奴隶地址 |
| subAddress | <code>uint8_t</code> |功能地址 |
| data | <code>uint8_t</code> |参数 |

**返回值:**

| 値 |功能 |
| --- | --- |
|true|发送成功。|
|false|发送失败。|


## writeBytes()

**構文:**
<mark> bool writeBytes(uint8_t address, uint8_t subAddress, uint8_t *data,uint8_t length);</mark>

**功能:**

写入指定的地址。
在有多个参数时使用。

**参数**

| 参数 |型 |功能 |
| --- | --- | --- |
| address | <code>uint8_t</code> |奴隶地址 |
| subAddress | <code>uint8_t</code> |功能地址 |
| data | <code>uint8_t *</code> |参数数组的开头 |
| length | <code>uint8_t</code> |参数长度 |

**返回值:**

| 値 |功能 |
| --- | --- |
|true|发送成功。|
|false|发送失败。|

## readByte()

**構文:**
<mark> bool readByte(uint8_t address, uint8_t *result);</mark>

**功能:**

从指定的地址读取。
在读取之前没有数据要发送且响应为1个字节时使用。

**参数**

| 参数 |型 |功能 |
| --- | --- | --- |
| address | <code>uint8_t</code> |奴隶地址 |
| result | <code>uint8_t *</code> |结果存储目的地 |

**返回值:**

| 値 |功能 |
| --- | --- |
|true|阅读成功。|
|false|读取失败。|

## readByte()

**構文:**
<mark>bool readByte(uint8_t address, uint8_t subAddress,uint8_t *result);</mark>

**功能:**

从指定的地址读取。
当读取前发送的数据仅为功能地址且响应为1个字节时使用。

**参数**

| 参数 |型 |功能 |
| --- | --- | --- |
| address | <code>uint8_t</code> |奴隶地址 |
| subAddress | <code>uint8_t</code> |功能地址 |
| result | <code>uint8_t *</code> |结果存储目的地 |

**返回值:**

| 値 |功能 |
| --- | --- |
|true|阅读成功。|
|false|读取失败。|


## readBytes()

**構文:**
<mark>bool readBytes(uint8_t address, uint8_t count,uint8_t * dest);</mark>

**功能:**

从指定的地址读取。
在加载之前没有数据要发送且有多个响应时使用。

**参数**

| 参数 |型 |功能 |
| --- | --- | --- |
| address | <code>uint8_t</code> |奴隶地址 |
| count | <code>uint8_t</code> |请求的字节数 |
| result | <code>uint8_t *</code> |结果存储目的地 |

**返回值:**

| 値 |功能 |
| --- | --- |
|true|阅读成功。|
|false|读取失败。|

## readBytes()

**構文:**
<mark>bool readBytes(uint8_t address, uint8_t subAddress, uint8_t count, uint8_t * dest);</mark>

**功能:**

从指定的地址读取。
当在读取之前要发送的数据仅是功能地址并且存在多个响应时使用它。

**参数**

| 参数 |型 |功能 |
| --- | --- | --- |
| address | <code>uint8_t</code> |奴隶地址 |
| subAddress | <code>uint8_t</code> |功能地址 |
| count | <code>uint8_t</code> |请求的字节数 |
| result | <code>uint8_t *</code> |结果存储目的地 |

**返回值:**

| 値 |功能 |
| --- | --- |
|true|阅读成功。|
|false|读取失败。|


## scanID()

**構文:**
<mark>bool readBytes(bool *result);</mark>

**功能:**

在I2C总线上执行设备存在检查。

**参数**

| 参数 |型 |功能 |
| --- | --- | --- |
| result | <code>bool *</code> |结果存储目标（128字节） |

**返回值:**

| 値 |功能 |
| --- | --- |
|true|阅读成功。|
|false|读取失败。|



