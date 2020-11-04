<el-card class="box-card" style="margin-bottom:20px">
    <div slot="header" class="clearfix">
        <span>Contents</span>
        <i class="el-icon-s-management" style="float: right;"></i>
    </div>
    <div style="margin: 0px 10px 10px 0px ;display:inline-block;">
        <el-tag onclick="page_move('ui-elements')">UI Elements</el-tag>
        <el-tag onclick="page_move('unicode')">Unicode</el-tag>
        <el-tag onclick="page_move('emoji')">Emoji</el-tag>
        <el-tag onclick="page_move('graphic')">Graphic</el-tag>
        <el-tag onclick="page_move('displaying-images')">Displaying images</el-tag>
        <el-tag onclick="page_move('screen')">screen</el-tag>
    </div>
</el-card>

## UI Elements

#### Feature introduction

>UIFlow Designer allows you to create and manipulate various shapes and images on the M5Stack screen

><img src="/image/Display/UI.webp" width="30%">

* __Title__
Display a title bar at the top of the screen

* __Label__
Display a text element wherever you place it on the screen

* __Rect__
Display a square or rectangle (Parameters can be set by clicking on the element and changing the settings)

* __Circle__
Display a circle (Parameters can be set by clicking on the element and changing the settings)

* __image__
Display an image that has been uploaded to the M5 device


#### Adding and removing elements

>Add an element

><img src="/image/Display/UI_user1.gif" width="30%">

>Remove an element

><img src="/image/Display/UI_user2.gif" width="30%">

#### Programming UI elements

>Method 1：After placing an element on the screen, single press it to display the parameters window. From here you can adjust the elements color,size,position and layer

><img src="/image/Display/UI_user3.gif" width="50%">

>Method 2：After adding an element to the screen, its equivalent blocks will appear in the UI section of the blocks menu. Using blocks you can program all of the parameters of the element within your program.


><img src="/image/Display/UI_user4.gif" width="50%"> 



## Unicode

>UIFlow firmware integrates some common character libraries in Unicode, so you can directly input and use it when editing text.

><img src="/image/Display/unicode.webp" width="50%">

>The following are the addresses corresponding to different characters in the UIFlow custom font.

<table class="table-1">
      <thead>
      <tr>
         <th>Start address</th>
         <th>End address</th>
         <th>Description</th>
         <th>reference</th> 
      </tr>
      </thead>
      <tbody>
      <tr>
         <td>0x3040</td>
         <td>0x30FF</td>
         <td>Hiragana and Katakana</td>
         <td>/</td>
      </tr>
      <tr>
         <td>0x0400</td>
         <td>0x04FF</td>
         <td>Cyrillic</td>
         <td>/</td>
      </tr>
      <tr>
         <td>0x0020</td>
         <td>0x007F</td>
         <td>Basic Latin</td>
         <td>/</td>
      </tr>
      <tr>
         <td>0x2100</td>
         <td>0x214F</td>
         <td>Letterlike Symbols</td>
         <td><a href="https://unicode-table.com/en/blocks/letterlike-symbols/">Click for details</a></td>
      </tr>
      <tr>
         <td>0x2150</td>
         <td>0x218F</td>
         <td>Number Forms</td>
         <td><a href="https://unicode-table.com/en/blocks/number-forms/">Click for details</a></td>
      </tr>
      <tr>
         <td>0x2190</td>
         <td>0x21FF</td>
         <td>Arrows</td>
         <td><a href="https://unicode-table.com/en/blocks/arrows/">Click for details</a></td>
      </tr>
      <tr>
         <td>0x2200</td>
         <td>0x23f0</td>
         <td>Mathematical Operators<br>Miscellaneous Technical</td>
         <td><a href="https://unicode-table.com/en/blocks/mathematical-operators/
https://unicode-table.com/en/blocks/miscellaneous-technical/">Click for details</a></td>
      </tr>
      <tr>
         <td>0x2460</td>
         <td>0x24FF</td>
         <td>Enclosed Alphanumerics</td>
         <td><a href="https://unicode-table.com/en/blocks/enclosed-alphanumerics/">Click for details</a></td>
      </tr>
      <tr>
         <td>0x2500</td>
         <td>0x257F</td>
         <td>Box Drawing</td>
         <td><a href="https://unicode-table.com/en/blocks/box-drawing/">Click for details</a></td>
      </tr>
      <tr>
         <td>0x2580</td>
         <td>0x259F</td>
         <td>Block Elements</td>
         <td><a href="https://unicode-table.com/en/blocks/block-elements/">Click for details</a></td>
      </tr>
      <tr>
         <td>0x2600</td>
         <td>0x27BF</td>
         <td>Miscellaneous Symbols</td>
         <td><a href="https://unicode-table.com/en/blocks/miscellaneous-symbols/">Click for details</a></td>
      </tr>
      <tr>
         <td>0xFF00</td>
         <td>0xFFEF</td>
         <td>Halfwidth and Fullwidth Forms</td>
         <td><a href="https://unicode-table.com/en/blocks/halfwidth-and-fullwidth-forms/">Click for details</a></td>
      </tr>
      <tr>
         <td>0x25A0</td>
         <td>0x25FF</td>
         <td>Geometric Shapes</td>
         <td><a href="https://unicode-table.com/en/blocks/geometric-shapes/">Click for details</a></td>
      </tr>
      <tr>
         <td>0x2000</td>
         <td>0x206F</td>
         <td>General Punctuation</td>
         <td><a href="https://unicode-table.com/en/blocks/general-punctuation/">Click for details</a></td>
      </tr>
      <tr>
         <td>0x0370</td>
         <td>0x03FF</td>
         <td>Greek and Coptic</td>
         <td><a href="https://unicode-table.com/en/blocks/greek-coptic/">Click for details</a></td>
      </tr>
      <tr>
         <td>0x0080</td>
         <td>0x00FF</td>
         <td>Latin-1 Supplement</td>
         <td><a href="https://unicode-table.com/en/blocks/latin-1-supplement/">Click for details</a></td>
      </tr>
      <tr>
         <td>0xFF00</td>
         <td>0xFFEF</td>
         <td>Half-width and full-width forms</td>
         <td><a href="https://unicode-table.com/cn/blocks/halfwidth-and-fullwidth-forms/">Click for details</a></td>
      </tr>
      <tr>
         <td colspan = "4" style="text-align:center">Chinese GB2312 + Commonly used Japanese Kanji A total of 7857 characters</td>
      </tr>
    </tbody>
</table>

## Emoji

#### Feature introduction

>UIFlow has a Block that makes the creation of simple images on the screen a walk in the park. By clicking the squares on the emoji grid we can draw a picture and use the color swatch to set the color of the pixels


><img src="/image/Display/Emoji.webp" width="30%"> 

* __Set emoji map in__
>Click on the squares of the grid to set which pixels will be filled with color on the pixel grid

* __Set line x row x in__
>This block allows you to individually set the position and color of individual pixels on the grid

* __Set background image x__
>Choose from a list of preset backgrounds for the backdrop of the grid

#### Usage

>When the grid has been filled and you have uploaded your code you will see the picture appear on the M5 screen

><img src="/image/Display/Emoji_user.gif" width="50%"> 


## Graphic

#### Feature introduction

>Apart from the circle and rectangle provided in the UI designer, there are other shapes and elements we can program with the graphic blocks

><img src="/image/Display/Graphic_Block.webp" width="50%"> 


* __LCD clear__
>Clear the screen

* __LCD fill__
Fill the screen with the color selected in the color swatch

* __LCD print x,y__
Display text on the screen at the selected x/y coordinates

* __Font__
Set the font of the text with a font from the list

* __LCD pixel__
Draw a pixel at the selected x/y coordinate

* __line__
Draw a line from origin point x/y to end point x/y

* __rect__
Draw a rectangle of a desired width and height

* __triangle__
Define the coordinates of the 3 points of a triangle and draw it in the color specified

* __circle__
Draw a circle from the x/y origin and choose the radius and color

* __ellipse__
Draw an ellipse from the x/y origin, set the radius with 2 parameters and choose the color

* __polygon__
Draw a polygon at the x/y origin with a set radius and amount of sides

#### Attention
>The M5GO screen resolution is 320X240


#### Example

>Create a triangle and set its color to red

><img src="/image/Display/Graphic_user.gif" width="50%"> 


## Displaying images

#### Feature introduction

>Upload some photos from your computer and display them on your device（Attention：Images must be below 25k，in jpg or bmp format）

#### Upload image

>Connect to UIflow with your API key，Select the cloud file icon in the top right，select the image tab，click Add image and browse for an image，choose your image and upload, its name will appear in the list if it has successfully been uploaded.

><img src="/image/Display/image_user1.gif" width="50%"> 

#### Display the image

>In the UI designer grab an image placeholder and set it in the middle of the screen. Click on the image placeholder，choose your image name from the drop down list

><img src="/image/Display/image_user2.gif" width="50%"> 

#### Image manipulation

>After uploading an image and assigning it to the place holder, you can manipulate it with the image blocks in the UI blocks section. You can choose whether to show or hide the image and set its position on the screen.

><img src="/image/Display/image_user3.gif" width="50%"> 

## SCREEN

#### Feature introduction

>Perform operations on the screen display such as adjusting the brightness, changing the background color, rotating the screen, and so on.

#### Set the screen background color

>Set the background color of the screen to work with the UI emulator

><img src="/image/Display/Screen.webp" width="30%">

* __Set Screen backgroundColor__
Set backgroundColor

* __Set screen rotate mode__
Rotating  screen with mode 0-3,default value is 1, if you change value, the screen with anticlockwise rotation

* __Set screen brightness__
Set screen brightness
