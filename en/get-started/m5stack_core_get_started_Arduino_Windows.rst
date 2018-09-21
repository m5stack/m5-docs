M5Stack Core Get Started(Windows, Arduino)
===========================================

.. note::
    If your OS is MacOS, please click `here`_.

.. _here: m5stack_core_get_started_Arduino_MacOS.html

CONTENT
~~~~~~~

1. `Setting Environment <#setting-environment>`__

   -  `1. Install Arduino IDE <#1-install-arduino-ide>`__

   -  `2. Download Toolchain <#2-download-toolchain>`__

   -  `3. ESP32 Toolchain <#3-esp32-toolchain>`__

   -  `4. Download M5Stack Lib <#4-download-m5stack-lib>`__

2. `Example <#example>`__

.. note::

    If you want to upgrade the M5Stack Lib, please view this article `upgrade M5Stack Lib`_

.. _upgrade M5Stack Lib: upgrade_m5stack_lib.html


Setting Environment
~~~~~~~~~~~~~~~~~~~

.. note::

    Before setting the development environment, we suggest you confirm whether the USB driver has installed. If not, please visit this link `establish_serial_connection`_.

.. _establish_serial_connection: establish_serial_connection.html

1. Install ``Arduino IDE``
^^^^^^^^^^^^^^^^^^^^^^^^^^

*download address* https://www.arduino.cc/en/Main/Software

.. image:: ../../_static/screenshots/arduino_cc_package.png

modified the path of Arduino as ``D:\Program Files`` as shown below

.. image:: ../../_static/screenshots/select_arduino_install_path.png

Now my path of Arduino is ``D:\Program Files\Arduino``

.. image:: ../../_static/screenshots/arduino_path.png

2. Download Toolchain
^^^^^^^^^^^^^^^^^^^^^

（Now my path of Arduino is ``D:\Program Files\Arduino``\ ）

Enter the path ``D:\Program Files\Arduino\hareware`` via the terminal of
Windows

Execute the following commands on the terminal of Windows > \* new a
directory named ``espressif``, then enter this directory

mkdir espressif && cd espressif

.. image:: ../../_static/screenshots/mkdir_espressif.png


    -  clone ``esp32 idf`` at the directory named ``esp32``

git clone --recursive https://github.com/espressif/arduino-esp32.git
esp32

.. image:: ../../_static/screenshots/download_idf.png

3. ESP32 Toolchain
^^^^^^^^^^^^^^^^^^

Enter the path
``D:\Program Files\arduino\hardware\espressif\esp32\tools`` double click
on ``get.exe``

.. image:: ../../_static/screenshots/select_get_exe_file.png

.. image:: ../../_static/screenshots/download_xtensa_tools.png

4. Download the M5Stack Lib via Arduino IDE
^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^

Open Arduino IDE, then Select
``Sketch``->``Include Library``->``Manage Libraries...`` Search
``M5Stack`` and install it

.. image:: ../../_static/screenshots/select_arduino_lib.png

.. image:: ../../_static/screenshots/download_m5stack_lib.png

Example
~~~~~~~

The USB cable connects to M5Stack Core, then select your serial port
which is connected M5Stack Core. Select a demo example, compile and
upload

1. Open a example likes ``FactoryTest.ino``
^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^

.. image:: ../../_static/screenshots/select_demo.png

Comfire your board name, baudrate, the specified serial port:
M5Stack-Core-ESP32、921600、COM3

.. image:: ../../_static/screenshots/select_board_and_com.png

After upload seccessfully, open the Serial Monitor

.. image:: ../../_static/screenshots/FactoryTest_result.png

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

compile it and upload, the M5Stack screen will show "Hello World!"
"M5Stack is running successfully!"
