M5Stack-Core Get Started(Windows, Arudino)
==========================================

.. note::
    If your OS is MacOS, please click `here`_.

.. _here: m5stack_core_get_started_Arduino_MacOS.html

CONTENT
~~~~~~~

1. `Setting Environment <#setting-environment>`__

   -  `1. Install Git <#1-install-git>`__

   -  `2. Install Arduino IDE <#2-install-arduino-ide>`__

   -  `3. Download Arduino-ESP32 Support <#3-download-arduino-esp32-support>`__

   -  `4. Download the M5Stack Lib <#4-download-the-m5stack-lib>`__

2. `Example <#example>`__

.. note::

    If you want to upgrade the M5Stack Lib, please view this article `upgrade M5Stack Lib`_

.. _upgrade M5Stack Lib: upgrade_m5stack_lib.html

Setting Environment
~~~~~~~~~~~~~~~~~~~

.. note::
  Before setting the development environment, we suggest you confirm whether the USB driver has installed. If not, please view this article `establish_serial_connection`_.

.. _establish_serial_connection: https://github.com/m5stack/m5stack-documentation/blob/master/en/get-started/establish_serial_connection.md

1. Install ``Git``
^^^^^^^^^^^^^^^^^^

If you has installed ``Git``, please following setp 2 straight. Otherwise, download the client of `Git <https://git-scm.com/download/win>`__ and install it.

2. Install ``Arduino IDE``
^^^^^^^^^^^^^^^^^^^^^^^^^^

*download address*

https://www.arduino.cc/en/Main/Software

.. image:: ../../_static/getting_started_pics/m5stack_core/arduino_cc_package.png

Double click to install Arduino IDE

.. image:: ../../_static/getting_started_pics/m5stack_core/select_arduino_install_path.png

.. image:: ../../_static/getting_started_pics/m5stack_core/install_arduino_2.png

3. Download Arduino-ESP32 Support
^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^

Download the batch file `download\_arduino\_esp32\_support.bat <https://pan.baidu.com/s/17ROZVzg5Pj4nUu74duxEfw>`__, and execte it as Administrator.

.. image:: ../../_static/getting_started_pics/m5stack_core/execute_batch_file.png

Then a new window will appear as shown below. Please waiting for cloning...

.. image:: ../../_static/getting_started_pics/m5stack_core/execute_batch_file_for_downloading_arduino_esp32.png

As shown below, it means Arduino-ESP32 Support has completed.

.. image:: ../../_static/getting_started_pics/m5stack_core/download_arduino_esp32_completed.png

4. Download the M5Stack Lib
^^^^^^^^^^^^^^^^^^^^^^^^^^^

Open Arduino IDE, then Select ``Sketch`` -> ``Include Library`` -> ``Manage Libraries...`` Search ``M5Stack`` and install it

.. image:: ../../_static/getting_started_pics/m5stack_core/install_m5stack_lib_01.png

.. image:: ../../_static/getting_started_pics/m5stack_core/install_m5stack_lib_02.png

.. note::

  As shown below, it means you need update

  .. image:: ../../_static/getting_started_pics/m5stack_core/update_m5stack_lib.png

Example
~~~~~~~

The USB cable connects to M5Stack Core, then select your serial port which is connected M5Stack Core. Select a demo example, compile and upload.

1. Execute a example likes ``FactoryTest.ino``
^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^

Select your board name, baudrate, the specified serial port: M5Stack-Core-ESP32, 921600, COM4(Now, my serial port which is connected with PC is ``COM4``)

.. image:: ../../_static/getting_started_pics/m5stack_core/select_board_baudrate_serial_port.png

Then select an example likes ``FactoryTest.ino``

.. image:: ../../_static/getting_started_pics/m5stack_core/select_an_example.png

Upload it

.. image:: ../../_static/getting_started_pics/m5stack_core/arduino_upload.png

2. New a M5Stack program
^^^^^^^^^^^^^^^^^^^^^^^^

Open Arduino IDE, then new a ``.ino`` file, rename it as ``my_test.ino``

Copy the below code to my\_test.ino

.. code:: cpp

    #include <M5Stack.h>

    // the setup routine runs once when M5Stack starts up
    void setup(){tack

      // Initialize the M5Stack object
      M5.begin();

      // LCD display
      M5.Lcd.print("Hello World!");
      M5.Lcd.print("M5Stack is running successfully!");
    }

    // the loop routine runs over and over again forever
    void loop() {

    }

compile it and upload, the M5Stack screen will show "Hello World!" "M5Stack is running successfully!"
