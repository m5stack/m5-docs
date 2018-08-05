Display Module
--------------

Methods
~~~~~~~

1.lcd.setRotation(2)
^^^^^^^^^^^^^^^^^^^^

***Description:*** ***Parament:*** ***Example:***

.. code:: python

    #The M5Stack Core LCD has been initialized
    lcd.setRotation(2)

2.lcd.setColor(foreground\_color[,background\_color])
^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^

***Description:*** 　　Set the default foreground/background color
***Parament:*** ***Example:***

.. code:: python

    #The M5Stack Core LCD has been initialized
    lcd.setColor(lcd.RED) 
    lcd.setColor(lcd.ORANGE, LCD.DARKCYAN) 

3.lcd.setTextColor(foreground\_color[,background\_color])
^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^

***Description:*** 　　Set the default foreground/background color for
text ***Parament:*** \* ***color：*** color values are given as 24 bit
integer numbers, 8-bit per color ***Example:***

.. code:: python

    #The M5Stack Core LCD has been initialized
    lcd.setTextColor(lcd.PINK) 
    lcd.setTextColor(lcd.ORANGE, LCD.DARKCYAN) 

4.lcd.fillScreen(color)
^^^^^^^^^^^^^^^^^^^^^^^

***Description:*** 　　Fill the screen with the given color
***Parament:*** \* ***color：*** color values are given as 24 bit
integer numbers, 8-bit per color ***Example:***

.. code:: python

    #The M5Stack Core LCD has been initialized
    lcd.fillScreen(lcd.color565(0x00, 0x00, 0x00))

5.lcd.drawPixel(x, y [,color])
^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^

***Description:*** 　　Draw the pixel at position **(x,y)** *Note:*
　　If color is not given, current foreground color is used
***Parament:*** \* ***color：*** color values are given as 24 bit
integer numbers, 8-bit per color ***Example:***

.. code:: python

    #The M5Stack Core LCD has been initialized
    lcd.drawPixel(22,22,lcd.RED)  

6.lcd.drawLine(x, y, x1, y1 [,color])
^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^

***Description:*** 　　Draw the line from point **(x,y)** to point
**(x1,y1)** *Note:* 　　If color is not given, current foreground color
is used ***Parament:*** \* ***color：*** color values are given as 24
bit integer numbers, 8-bit per color ***Example:***

.. code:: python

    #The M5Stack Core LCD has been initialized
    lcd.drawLine(0,0,lcd.WHITE)  

7.lcd.drawTriangle(x, y, x1, y1, x2, y2 [,color])
^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^

***Description:*** 　　Draw the triangel between points **(x,y)**,
**(x1,y1)** and **(x2,y2)** *Note:* 　　If color is not given, current
foreground color is used 　 ***Parament:*** \* ***color：*** color
values are given as 24 bit integer numbers, 8-bit per color
***Example:***

.. code:: python

    #The M5Stack Core LCD has been initialized
    lcd.drawTriangle(22,22,69,98,51,22,lcd.RED)

8.lcd.fillTriangle(x, y, x1, y1, x2, y2 [,color])
^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^

***Description:*** 　　Fill the triangel between points **(x,y)**,
**(x1,y1)** and **(x2,y2)** *Note:* 　　If **color** is not given,
triangle will be filled in current foreground color ***Parament:*** \*
***color：*** color values are given as 24 bit integer numbers, 8-bit
per color ***Example:***

.. code:: python

    #The M5Stack Core LCD has been initialized
    lcd.fillTriangle(122,122,169,198,151,182,lcd.RED)

　 #### 9.lcd.drawCircle(x, y, r [,color]) ***Description:*** 　　Draw
the circle with center at **(x,y)** and radius **r** *Note:* 　　If
**color** is not given, current foreground color is used

***Parament:*** \* ***r:*** the radius of circle \* ***color：*** color
values are given as 24 bit integer numbers, 8-bit per color
***Example:***

.. code:: python

    #The M5Stack Core LCD has been initialized
    lcd.drawCircle(180,180,10,lcd.BLUE) 

10.lcd.fillCircle(x, y, r [,color])
^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^

***Description:*** 　　Fill the circle with center at **(x,y)** and
radius **r** *Note:* 　　If **color** is not given, current foreground
color will be used

***Parament:*** \* ***r:*** the radius of circle \* ***color：*** color
values are given as 24 bit integer numbers, 8-bit per color
***Example:***

.. code:: python

    #The M5Stack Core LCD has been initialized
    lcd.fillcircle(100,100,10,lcd.BLUE)  

11.lcd.drawRect(x, y, width, height, [,color])
^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^

***Description:*** 　　Draw the rectangle from the upper left point at
**(x,y)** and width **width** and height **height** *Note:* 　　If
**color** is not given, rectangle will be drawn in current foreground
color ***Parament:*** \* ***width:*** optional, default=240, display
phisical width in pixels (display's smaller dimension). \* ***height:***
optional, default=320, display phisical height in pixels (display's
larger dimension). \* ***color：*** color values are given as 24 bit
integer numbers, 8-bit per color ***Example:***

.. code:: python

    #The M5Stack Core LCD has been initialized
    lcd.drawRect(180,12,122,10,lcd.BLUE)

12.lcd.fillRect(x, y, width, height, [,color])
^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^

***Description:*** 　　Fill the rectangle from the upper left point at
**(x,y)** and width **width** and height **height** *Note:* 　　If
**fillcolor** is not given, rectangle will be filled in current
foreground color ***Parament:*** \* ***width:*** optional, default=240,
display phisical width in pixels (display's smaller dimension). \*
***height:*** optional, default=320, display phisical height in pixels
(display's larger dimension). \* ***color：*** color values are given as
24 bit integer numbers, 8-bit per color ***Example:***

.. code:: python

    #The M5Stack Core LCD has been initialized
    lcd.fillRect(180,30,122,10,lcd.BLUE)

13.lcd.drawRoundRect(x, y, width, height, r [,color])
^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^

***Description:*** 　　Draw the rectangle with rounded corners from the
upper left point at *(x,y)* and width **width** and height **height**.
Corner radius is given by **r** argument *Note:* 　　If *color* is not
given, current foreground color will be used ***Parament:*** \*
***width:*** optional, default=240, display phisical width in pixels
(display's smaller dimension) \* ***height:*** optional, default=320,
display phisical height in pixels (display's larger dimension). \*
***r:*** the radius of circle \* ***color：*** color values are given as
24 bit integer numbers, 8-bit per color ***Example:***

.. code:: python

    #The M5Stack Core LCD has been initialized
    lcd.drawRoundRect(180,50,122,10,4,lcd.BLUE) 

14.lcd.fillRoundRect(x, y, width, height, r [,color])
^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^

***Description:*** 　　Fill the rectangle with rounded corners from the
upper left point at *(x,y)* and width **width** and height **height**.
Corner radius is given by **r** argument *Note:* 　　If **color** is not
given, current foreground color will be used ***Parament:*** \*
***width:*** optional, default=240, display phisical width in pixels
(display's smaller dimension) \* ***height:*** optional, default=320,
display phisical height in pixels (display's larger dimension). \*
***r:*** the radius of circle \* ***color：*** color values are given as
24 bit integer numbers, 8-bit per color ***Example:***

.. code:: python

    #The M5Stack Core LCD has been initialized
    lcd.fillRoundRect(180,70,122,10,4,lcd.BLUE) 

15.lcd.print('text',x,y)
^^^^^^^^^^^^^^^^^^^^^^^^

***Description:*** 　　Print the **text** at position **(x,y)**
***Parament:***

***Example:***

.. code:: python

    #The M5Stack Core LCD has been initialized
    lcd.print('this is a print text function', 80, 80)

16.lcd.clear([color])
^^^^^^^^^^^^^^^^^^^^^

***Description:*** 　　Clear the screen with default background color or
specific color if given ***Parament:*** \* ***color：*** color values
are given as 24 bit integer numbers, 8-bit per color ***Example:***

.. code:: python

    #The M5Stack Core LCD has been initialized
    lcd.clear()

