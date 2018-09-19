SPI API
********

-----------------------------

Description
------------

This class includes full support for using ESP32 SPI peripheral in master mode

Only SPI master mode is supported for now.

Python exception wil be raised if the requested spihost is used by SD Card driver (sdcard in spi mode).
If the requested spihost is VSPI and the psRAM is used at 80 MHz, the exception will be raised.
The exception will be raised if SPI cannot be configured for given configurations.


-----------------------------

Function
---------

machine.spi(spihost, baudrate, polarity, phase, firstbit, sck, mosi, miso, cs, duplex, bits)
>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>

| **Description:** 　　
|   Create the spi instance object

| **Parament:**
|   **spihost:** The hardware SPI host. machine-SPI.HSPI (1) or machine.SPI.VSPI (2) can be used. Default: 1
|   **baudrate:** SPI clock speed in Hz; Default: 1000000

| **Example:**

.. code:: python

    from machine import SPI, Pin

    spi = SPI(
        spihost=SPI.HSPI,
        baudrate=2600000
        sck=Pin(18),
        mosi=Pin(23),
        miso=Pin(19),
        cs=Pin(4)
    )

write(buf)
>>>>>>>>>>>>>>>>>

| **Description:** 　　
|   Write bytes from buffer object buf to the SPI device

| **Parament:**
|   **buf:** data buffer to be write

| **Return:**
|   Returns `True` on success, `False` ion error

| **Example:**

.. code:: python

    from machine import SPI, Pin

    spi = SPI(
        spihost=SPI.HSPI,
        baudrate=2600000
        sck=Pin(18),
        mosi=Pin(23),
        miso=Pin(19),
        cs=Pin(4)
    )

    spi.write(buf) #NOHEAP


write_readinto(wr_buf, rd_buf)
>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>

| **Description:** 　　
|   Write bytes from buffer object wr_buf to the SPI device and reads from SPI device into buffer object rd_buf

| **Parament:**
|   **wr_buf:** data buffer to be write
|   **rd_buf:** data buffer to be read
|   *Note: * In fullduplex mode write and read are simultaneous. In halfduplex mode the data are first written to the device, then read from it

| **Return:**
|   Returns `True` on success, `False` ion error

| **Example:**

.. code:: python

    import machine

    adc = machine.ADC(35)
    adc.read()


---------------------

Usage
------

.. code:: python

    from machine import SPI, Pin

    spi = SPI(
        spihost=SPI.HSPI,
        baudrate=2600000
        sck=Pin(18),
        mosi=Pin(23),
        miso=Pin(19),
        cs=Pin(4)
    )

    spi.write(buf) #NOHEAP
    spi.read(nbytes, *, write=0x00) #write is the byte to ?output on MOSI for each byte read in
    spi.readinto(buf, *, write=0x00) #NOHEAP
    spi.write_readinto(write_buf, read_buf) #NOHEAP; write_buf and read_buf can be the same