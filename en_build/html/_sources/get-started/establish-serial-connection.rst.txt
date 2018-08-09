Establish Serial Connection with M5Stack Board based on ESP32
==============================================================

This section provides guidance how to establish serial connection between your board and PC.


Connect your board to PC
-------------------------

Connect the your board board to the PC using the USB cable. If device driver does not install automatically, identify USB to serial converter chip on your your board board (or external converter dongle), search for drivers in internet and install them.

Below are the links to drivers for your board boards produced by Espressif:

* your board-PICO-KIT and your board-DevKitC - `CP210x USB to UART Bridge VCP Drivers <https://www.silabs.com/products/development-tools/software/usb-to-uart-bridge-vcp-drivers>`_

* your board-WROVER-KIT and your board Demo Board - `FTDI Virtual COM Port Drivers <http://www.ftdichip.com/Drivers/VCP.htm>`_

Above drivers are primarily for reference. They should already be bundled with the operating system and installed automatically once one of listed boards is connected to the PC.


Check port on Windows
---------------------

Check the list of identified COM ports in the Windows Device Manager. Disconnect your board and connect it back, to verify which port disappears from the list and then shows back again.

Figures below show serial port for your board DevKitC and your board WROVER KIT

.. figure:: ../../_static/establish_serial_port/your board-devkitc-in-device-manager.png
    :align: center
    :alt: USB to UART bridge of your board-DevKitC in Windows Device Manager
    :figclass: align-center

    USB to UART bridge of your board-DevKitC in Windows Device Manager

.. figure:: ../../_static/establish_serial_port/your board-wrover-kit-in-device-manager.png
    :align: center
    :alt: Two USB Serial Ports of ESP-WROVER-KIT in Windows Device Manager
    :figclass: align-center

    Two USB Serial Ports of ESP-WROVER-KIT in Windows Device Manager


Check port on Linux and MacOS
-----------------------------

To check the device name for the serial port of your your board board (or external converter dongle), run this command two times, first with the board / dongle unplugged, then with plugged in. The port which appears the second time is the one you need:

Linux ::

    ls /dev/tty*

MacOS ::

    ls /dev/cu.*


.. _linux-dialout-group:

Adding user to ``dialout`` on Linux
-----------------------------------

The currently logged user should have read and write access the serial port over USB. On most Linux distributions, this is done by adding the user to ``dialout`` group with the following command::

    sudo usermod -a -G dialout $USER

Make sure you re-login to enable read and write permissions for the serial port. 


Verify serial connection
------------------------

Now verify that the serial connection is operational. You can do this using a serial terminal program. In this example we will use `PuTTY SSH Client <http://www.putty.org/>`_ that is available for both Windows and Linux. You can use other serial program and set communication parameters like below.

Run terminal, set identified serial port, baud rate = 115200, data bits = 8, stop bits = 1, and parity = N. Below are example screen shots of setting the port and such transmission parameters (in short described as  115200-8-1-N) on Windows and Linux. Remember to select exactly the same serial port you have identified in steps above.

.. figure:: ../../_static/establish_serial_port/putty-settings-windows.png
    :align: center
    :alt: Setting Serial Communication in PuTTY on Windows
    :figclass: align-center

    Setting Serial Communication in PuTTY on Windows

.. figure:: ../../_static/establish_serial_port/putty-settings-linux.png
    :align: center
    :alt: Setting Serial Communication in PuTTY on Linux
    :figclass: align-center

    Setting Serial Communication in PuTTY on Linux


Then open serial port in terminal and check, if you see any log printed out by your board. The log contents will depend on application loaded to your board. An example log by your board is shown below.

.. highlight:: none

::

    ets Jun  8 2016 00:22:57

    rst:0x5 (DEEPSLEEP_RESET),boot:0x13 (SPI_FAST_FLASH_BOOT)
    ets Jun  8 2016 00:22:57

    rst:0x7 (TG0WDT_SYS_RESET),boot:0x13 (SPI_FAST_FLASH_BOOT)
    configsip: 0, SPIWP:0x00
    clk_drv:0x00,q_drv:0x00,d_drv:0x00,cs0_drv:0x00,hd_drv:0x00,wp_drv:0x00
    mode:DIO, clock div:2
    load:0x3fff0008,len:8
    load:0x3fff0010,len:3464
    load:0x40078000,len:7828
    load:0x40080000,len:252
    entry 0x40080034
    I (44) boot: ESP-IDF v2.0-rc1-401-gf9fba35 2nd stage bootloader
    I (45) boot: compile time 18:48:10

    ...

If you see some legible log, it means serial connection is working and you are ready to proceed with installation and finally upload of application to your board.

.. note::

   For some serial port wiring configurations, the serial RTS & DTR pins need to be disabled in the terminal program before the your board will boot and produce serial output. This depends on the hardware itself, most development boards (including all Espressif boards) *do not* have this issue. The issue is present if RTS & DTR are wired directly to the EN & GPIO0 pins. See the `esptool documentation`_ for more details.

.. note::

   Close serial terminal after verification that communication is working. In next step we are going to use another application to upload your board. This application will not be able to access serial port while it is open in terminal.

If you got here from section :ref:`get-started-connect` when installing s/w for your board development, then go back to section :ref:`get-started-configure`.


.. _esptool documentation: https://github.com/espressif/esptool/wiki/your board-Boot-Mode-Selection#automatic-bootloader


*Note: This article based on `Establish Serial Connection with ESP32 <https://docs.espressif.com/projects/esp-idf/en/latest/get-started/establish-serial-connection.html>`_ supported by Espressif Inc.*


