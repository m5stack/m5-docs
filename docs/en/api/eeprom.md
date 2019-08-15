## EEPROM.begin()

**Syntax:**

<mark>EEPROM.begin(size)</mark>

**Description:**

Load <EEPROM.h> before use

Open EEPROM,Size is the maximum address + 1 of the data bytes to be read and written, ranging from 1 to 4096.

**Function argument**
	
| Function argument |Type |Description |
| --- | --- | --- |
| size | int | EEPROM size |

## EEPROM.write()

**Syntax:**

<mark>EEPROM.write(addr, data)</mark>

**Description:**

Load <EEPROM.h> before use

Write data to storage space.

**Function argument**
	
| Function argument |Type |Description |
| --- | --- | --- |
| addr | int | Address of storage space |
| data | int | Actual Write Data |

## EEPROM.commit()

**Syntax:**

<mark>EEPROM.commit()</mark>

**Description:**

Load <EEPROM.h> before use

This function needs to be called every time an address is written.

**Function argument**
	
None

## EEPROM.read()

**Syntax:**

<mark>EEPROM.read(addr)</mark>

**Description:**

Load <EEPROM.h> before use

Reading data from storage space.

**Function argument**
	
| Function argument |Type |Description |
| --- | --- | --- |
| addr | int | Address of storage space |