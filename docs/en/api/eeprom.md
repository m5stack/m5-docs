## EEPROM.begin()

**Syntax:**

`EEPROM.begin(size)`

**Description:**

Load <EEPROM.h> before use

Open EEPROM,Size is the maximum address + 1 of the data bytes to be read and written, ranging from 1 to 4096.

**Function argument**
	
| Function argument |Type |Description |
| --- | --- | --- |
| size | int | EEPROM size |

## EEPROM.write()

**Syntax:**

`EEPROM.write(addr, data)`

**Description:**

Write data to storage space.

**Function argument**
	
| Function argument |Type |Description |
| --- | --- | --- |
| addr | int | Address of storage space |
| data | int | Actual Write Data |

## EEPROM.commit()

**Syntax:**

`EEPROM.commit()`

**Description:**

This function needs to be called every time an address is written.

**Function argument**
	
None

## EEPROM.read()

**Syntax:**

`EEPROM.read(addr)`

**Description:**

Reading data from storage space.

**Function argument**
	
| Function argument |Type |Description |
| --- | --- | --- |
| addr | int | Address of storage space |