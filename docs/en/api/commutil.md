# I2C

This is a class to control M5Stack's Grove-A port (I2C).
I2C communication needs to be initialized in advance by M5.Begin().

## writeCommand()

**Syntax:**
<mark>bool writeCommand(uint8_t address, uint8_t subAddress);</mark>

**Description:**

Write to the specified address.
Used when there are no parameters.

**Function argument**

| Function argument |Type |Description |
| --- | --- | --- |
| address | <code>uint8_t</code> |Slave Address |
| subAddress | <code>uint8_t</code> |function address |

**Function return value**

| Value |Description |
| --- | --- |
|true|Write success|
|false|Write failure|


## writeByte()

**Syntax:**
<mark>bool writeByte(uint8_t address, uint8_t subAddress, uint8_t data);</mark>

**Description:**

Write to the specified address.
Used when there is one parameter.

**Function argument**

| Function argument |Type |Description |
| --- | --- | --- |
| address | <code>uint8_t</code> |Slave Address |
| subAddress | <code>uint8_t</code> |function address |
| data | <code>uint8_t</code> |parameter |

**Function return value**

| Value |Description |
| --- | --- |
|true|Write success|
|false|Write failure|



## writeBytes()

**Syntax:**
<mark> bool writeBytes(uint8_t address, uint8_t subAddress, uint8_t *data,uint8_t length);</mark>

**Description:**

Write to the specified address.
Use when there are multiple parameters.

**Function argument**

| Function argument |Type |Description |
| --- | --- | --- |
| address | <code>uint8_t</code> |Slave Address |
| subAddress | <code>uint8_t</code> |function address |
| data | <code>uint8_t *</code> | top of data memory |
| length | <code>uint8_t</code> | length of data |

**Function return value**

| Value |Description |
| --- | --- |
|true|Write success|
|false|Write failure|


## readByte()

**Syntax:**
<mark> bool readByte(uint8_t address, uint8_t *result);</mark>

**Description:**

Read from the specified address.
It is used when there is no data to send before reading and the response is 1 byte.

**Function argument**

| Function argument |Type |Description |
| --- | --- | --- |
| address | <code>uint8_t</code> |Slave Address |
| result | <code>uint8_t *</code> | stored memory |

**Function return value**

| Value |Description |
| --- | --- |
|true|Read success|
|false|Read failure|


## readByte()

**Syntax:**
<mark>bool readByte(uint8_t address, uint8_t subAddress,uint8_t *result);</mark>

**Description:**

Read from the specified address.
It is used when the data to be sent before reading is only the functional address and the response is 1 byte.

**Function argument**

| Function argument |Type |Description |
| --- | --- | --- |
| address | <code>uint8_t</code> |Slave Address |
| subAddress | <code>uint8_t</code> |function address |
| result | <code>uint8_t *</code> |stored memory|

**Function return value**

| Value |Description |
| --- | --- |
|true|Read success|
|false|Read failure|


## readBytes()

**Syntax:**
<mark>bool readBytes(uint8_t address, uint8_t count,uint8_t * dest);</mark>

**Description:**

Read from the specified address.
Use when there is no data to send before reading and there are multiple responses.

**Function argument**

| Function argument |Type |Description |
| --- | --- | --- |
| address | <code>uint8_t</code> |Slave Address |
| count | <code>uint8_t</code> | Length of request bytes |
| result | <code>uint8_t *</code> |stored memory|

**Function return value**

| Value |Description |
| --- | --- |
|true|Read success|
|false|Read failure|

## readBytes()

**Syntax:**
<mark>bool readBytes(uint8_t address, uint8_t subAddress, uint8_t count, uint8_t * dest);</mark>

**Description:**

Read from the specified address.
It is used when the data to be sent before reading is only the functional address and there are multiple responses.

**Function argument**

| argument |Typer |Description |
| --- | --- | --- |
| address | <code>uint8_t</code> |Slave Address |
| subAddress | <code>uint8_t</code> |Addresress |
| count | <code>uint8_t</code> | Length of request bytes |
| result | <code>uint8_t *</code> |stored memory|


**Function return value**

| Value |Description |
| --- | --- |
|true|Read success|
|false|Read failure|


## scanID()

**Syntax:**
<mark>bool readBytes(bool *result);</mark>

**Description:**

Perform device presence check on I2C bus.

**Function argument**

| Function argument |Type |Description |
| --- | --- | --- |
| result | <code>bool *</code> |stored memory(128bytes) |

**Function return value**

| Value |Description |
| --- | --- |
|true|Read success|
|false|Read failure|


