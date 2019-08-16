## EEPROM.begin()

**函数原型:**

<mark>EEPROM.begin(size)</mark>

**功能:**

使用前加载<EEPROM.h>

开启EEPROM,大小为最大地址+1个字节,范围1-4096.

**函数参数**
	
| 函数参数 | 类型 | 描述 |
| --- | --- | --- |
| size | int | EEPROM size |

## EEPROM.write()

**函数原型:**

<mark>EEPROM.write(addr, data)</mark>

**功能:**

向地址写入数据.

**函数参数**
	
| 函数参数 | 类型 | 描述 |
| --- | --- | --- |
| addr | int | 空间存储地址 |
| data | int | 数据 |

## EEPROM.commit()

**函数原型:**

<mark>EEPROM.commit()</mark>

**功能:**

每次向地址写入数据后都需要调用,保存数据.

**函数参数**
	
None

## EEPROM.read()

**函数原型:**

<mark>EEPROM.read(addr)</mark>

**功能:**

读取地址内存储的数据.

**函数参数**
	
| 函数参数 | 类型 | 描述 |
| --- | --- | --- |
| addr | int | 读取地址内的数据 |