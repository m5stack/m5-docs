I2C API
********

-----------------------------

Description
------------

Both master and slave modes are supported
Master and slave modes can be used at the same time, on different I2C interfaces


-----------------------------

Function
---------

machine.I2C(id, mode, speed, sda, scl, slave_addr, slave_bufflen, slave_rolen, slave_busy)
>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>

| **Description:** 　　
|   Create the I2C instance object

| **Parament:**
|   **id:** The hardware I2C peripheral ID; 0 or 1 can be used. Default: 0
|   **mode:** I2C interface mode; master or slave. Use the constants **machine.I2C.MASTER** or **machine.I2C.SLAVE**  Default: master
|   **speed:** I2C clock frequency in **Hz**. Default: 100000
|   **sda:** I2C **sda** pin; can be given as integer gpio number or Pin object
|   **scl:** I2C **scl** pin; can be given as integer gpio number or Pin object
|   **slave_addr:** I2C slave address to be assigned to this i2c interface. Only used if SLAVE mode is selected
|   **slave_bufflen:** Size of slave buffer used for master<->slave comunication in bytes
|   **slave_rolen:** Size of **read-only** area at the end of the slave buffer in bytes
|   **slave_busy:** Only used if **SLAVE** mode is selected
|   *Note: Only sda and scl are required, all the others are optional and will be set to the default values if not given*


init(args)
>>>>>>>>>>>>>>>>>

| **Description:** 　　
|   Reinitialize an existing I2C object

| **Parament:**
|   **The arguments are the same as for creating a new i2c instance object** 


scan()
>>>>>>>>>>>>>>>>>

| **Description:** 　　
|   Scan for i2c devices on I2C bus. Does not scan reserved 7-bit addresses: **0x00-0x07** & **0x78-0x7F**
|   *Note: can only be used in master mode*

| **Parament:**
|   **None** 

| **Return:**
|   Returns the list of detected addresses


readfrom(addr, nbytes)
>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>

| **Description:** 　　
|   Read **nbytes** bytes from i2c device with address **addr**
|   *Note: can only be used in master mode*

| **Parament:**
|   **None:** 

| **Return:**
|   Return bytearray of read bytes

writeto(addr, buf [,stop=True])
>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>

| **Description:** 　　
|   Write the content of the buffer object **buf** to the i2c device with address **adr**
|   *Note: can only be used in master mode*

| **Parament:**
|   *Note: If optional stop argument is set to False, the stop signal is not issued* 

readfrom_into(addr, buf)
>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>

| **Description:** 　　
|   Read from i2c device with address **addr** into buffer object **buf**
|   *Note: can only be used in master mode*

| **Parament:**
|   *Note: Size of buf bytes are read* 

---------------------

Usage
------

.. code:: python

    from machine import I2C

    i2c = I2C(freq=400000, sda=21, scl=22)
                                    # create I2C peripheral at frequency of 400kHz
                                    # depending on the port, extra parameters may be required
                                    # to select the peripheral and/or pins to use

    i2c.scan()                      # scan for slaves, returning a list of 7-bit addresses

    i2c.writeto(42, b'123')         # write 3 bytes to slave with 7-bit address 42
    i2c.readfrom(42, 4)             # read 4 bytes from slave with 7-bit address 42

    i2c.readfrom_mem(42, 8, 3)      # read 3 bytes from memory of slave 42,
                                    #   starting at memory-address 8 in the slave
    i2c.writeto_mem(42, 2, b'\x10') # write 1 byte to memory of slave 42
                                    #   starting at address 2 in the slave