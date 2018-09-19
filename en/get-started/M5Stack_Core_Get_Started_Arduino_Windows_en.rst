M5Stack-Core Get Started(Windows, Arduino)
==========================================

CONTENT
~~~~~~~

1. `Setting Environment <#setting-environment>`__

   -  `1. Install Arduino IDE <#1-install-arduino-ide>`__

   -  `2. Download Toolchain <#2-download-toolchain>`__

   -  `3. ESP32 Toolchain <#3-esp32-toolchain>`__

   -  `4. Download M5Stack Lib <#4-download-m5stack-lib>`__

2. `Example <#example>`__

Setting Environment
~~~~~~~~~~~~~~~~~~~

*Before setting the development environment, we suggest you confirm
whether the USB driver has installed. If not, please visit this link
``establish serial connection``.*

1. Install ``Arduino IDE``
^^^^^^^^^^^^^^^^^^^^^^^^^^

*download address* https://www.arduino.cc/en/Main/Software

.. figure:: ../../_static/screenshots/arduino_cc_package.png
   :alt: image

   image
modified the path of Arduino as ``D:\Program Files`` as shown below

.. figure:: ../../_static/screenshots/select_arduino_install_path.png
   :alt: image

   image
Now my path of Arduino is ``D:\Program Files\Arduino``

.. figure:: ../../_static/screenshots/arduino_path.png
   :alt: image

   image
2. Download Toolchain
^^^^^^^^^^^^^^^^^^^^^

（Now my path of Arduino is ``D:\Program Files\Arduino``\ ）

Enter the path ``D:\Program Files\Arduino\hareware`` via the terminal of
Windows

Execute the following commands on the terminal of Windows > \* new a
directory named ``espressif``, then enter this directory

mkdir espressif && cd espressif

.. figure:: ../../_static/screenshots/mkdir_espressif.png
   :alt: image

   image

    -  clone ``esp32 idf`` at the directory named ``esp32``

git clone --recursive https://github.com/espressif/arduino-esp32.git
esp32

.. figure:: ../../_static/screenshots/download_idf.png
   :alt: image

   image
3. ESP32 Toolchain
^^^^^^^^^^^^^^^^^^

Enter the path
``D:\Program Files\arduino\hardware\espressif\esp32\tools`` double click
on ``get.exe``

.. figure:: ../../_static/screenshots/select_get_exe_file.png
   :alt: image

   image
.. figure:: ../../_static/screenshots/download_xtensa_tools.png
   :alt: image

   image
4. Download the M5Stack Lib via Arduino IDE
^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^

Open Arduino IDE, then Select
``Sketch``->``Include Library``->``Manage Libraries...`` Search
``M5Stack`` and install it

.. figure:: ../../_static/screenshots/select_arduino_lib.png
   :alt: image

   image
.. figure:: ../../_static/screenshots/download_m5stack_lib.png
   :alt: image

   image
Example
~~~~~~~

The USB cable connects to M5Stack Core, then select your serial port
which is connected M5Stack Core. Select a demo example, compile and
upload

1. Open a example likes ``FactoryTest.ino``
^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^

.. figure:: ../../_static/screenshots/select_demo.png
   :alt: image

   image
Comfire your board name, baudrate, the specified serial port:
M5Stack-Core-ESP32、921600、COM3

.. figure:: ../../_static/screenshots/select_board_and_com.png
   :alt: image

   image
After upload seccessfully, open the Serial Monitor

.. figure:: ../../_static/screenshots/FactoryTest_result.png
   :alt: image

   image
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
