
<el-card class="box-card" style="margin-bottom:20px">
    <div slot="header" class="clearfix">
        <span>Contents</span>
        <i class="el-icon-s-management" style="float: right;"></i>
    </div>
    <div style="margin: 0px 10px 10px 0px ;display:inline-block;">
        <el-tag onclick="page_move('variables')">variables</el-tag>
        <el-tag onclick="page_move('operation')">operation</el-tag>
        <el-tag onclick="page_move('random')">Random</el-tag>
        <el-tag onclick="page_move('map')">map</el-tag>
        <el-tag onclick="page_move('array')">array</el-tag>
        <el-tag onclick="page_move('json')">JSON</el-tag>
        <el-tag onclick="page_move('text')">TEXT</el-tag>
    </div>
</el-card>

## variables

#### What is a variable?

>A variable is like a container. We can give the variable a name, use it to store the data, read it, or change it. It is often used in actual programming.

#### Create variable

>Click the Create variable option, enter the name of the variable, click OK to create

><img src="/image/Operation/Variables_user1.gif" width="50%"> 

#### Using variables

>For example: assign the variable initial value A=6, and add the variable 2 after one second.

><img src="/image/Operation/Variables_user2.gif" width="50%"> 



## operation

#### Function Description

>There are some basic arithmetic blocks in Math, such as "addition, subtraction, multiplication and division".

><img src="/image/Operation/Math.webp" width="30%"> 

* __constant__
Fill in any number and connect to other objects for assignment

* __Common operation__
Add data on both sides of the expression to add, subtract, multiply and divide power

* __Surplus__
Add data on both sides of the expression to make the remainder

* __Special number judgment__
Add a value to set whether the judgment is true (for example, whether it is odd or even or prime), if it is true, it is True, otherwise it is False.

* __Array calculation__
Summing an array, calculating the maximum or minimum, the average, etc.

* __round__
Rounding off decimals or going to the bottom

* __advance operation__
Find trigonometric functions, absolute values, etc.

* __convert to int__
Convert the value to an integer 

* __convert to float__
Convert values to floating point numbers



#### Instructions

>Add data to both sides of the expression, assign the expression to a variable or other object, and get the result.

><img src="/image/Operation/Math_user.gif" width="50%"> 


## random

#### Function Description

>When making games or animations, we sometimes need some random elements, and Random can generate random numbers according to our needs.

><img src="/image/Operation/Random.webp" width="50%"> 

* __random fraction__
Randomly generate a number between 0 and 1 each time it is executed

* __random integer__
Specify a random range, each time it is executed, randomly generate an integer in the range


#### Instructions

>Set a random range with a constant and assign a random intger to a variable

><img src="/image/Operation/Random_user.gif" width="50%"> 



## map

#### Function Description

>Map is another variable container model that can store any type of object.

><img src="/image/Operation/map.webp" width="40%"> 

* __creat map__
Create key-value pairs of map.

* __map clear__
clear key-value.

* __map contain key__
Confirm if there is a key in map

* __get ken in map__
Get the value of Specified key.

* __in map add key value__
Add key-value in map.

* __in map set key value__
change the value of key in map.

* __in map delete key__
Delete specified key
    
#### Instructions
>Add a create map to create a map, add some elements to the map, Specify keywords and values

><img src="/image/Operation/map_creat_user.gif" width="50%"> 


## array
__________________________
#### Function Description

>If the variable is a container, the array is a collection of many containers. We can assign values to any of the variables in the array.

><img src="/image/Operation/List.webp" width="40%"> 

* __length of__
Measure the length of the array (ie the number of elements in the array)

* __X is empty__
Determine whether an array is empty. When it is established, the expression is True, otherwise it is False.

* __in list find__
Array index, indexed positive or reverse specified element

* __create empty list__
Add a value to set whether the judgment is true (for example, whether it is odd or even or prime), if it is true, it is True, otherwise it is False.

* __create list with__
Customize an array

* __in list get__
Get the index value of an index element

* __in list get sub-list from__
Set an index to the specified value in the array

* __icreat list with item repeated times__
Create an array and use the element to repeat a certain number of times to fill

* __reverse__
Array in reverse order

* __in list set as__
Set an index to the specified value in the array

* __make list from text with delimiter__
Create an array from text, using a separator

    
#### Instructions
>Add a create list to create an array, add some elements to the array, call elements iteratively or by using other methods

><img src="/image/Operation/List_user.gif" width="50%"> 


## JSON

#### Function Description

>JSON (JavaScript Object Notation) is a lightweight data exchange format that is easy for people to read and write.

><img src="/image/Operation/JSON.webp" width="40%"> 

* __dumps to json__
Encode Python objects into JSON strings.

* __loads json__
Decode an encoded JSON string into a Python object.


#### Instructions
>Creat a map and turn it into json format

><img src="/image/Operation/JSON_dump_user.gif" width="50%"> 


## TEXT

#### Function Description

>Use these blocks for text processing and screen display.

><img src="/image/Operation/Text.webp" width="40%"> 

* __" "__
Assign text or String 

* __to UPPER CASE__
Convert text to uppercase or lowercase.

* __in text get letter#__
Get the specified character from the text.

* __count in__
Find the number of occurrences of specific characters.

* __is empty__
Returns whether it is empty text.

* __length of__
Return text length.

* __print__
Print text.

* __replace with in__
Replace text.

* __trim spaces from both sides__
Remove spaces from both sides of the string.

* __Convert to str__
Convert other types to strings.

* __" "+__
Text merging.

* __decode__
Decode the string in the encoding format specified by encoding.

* __encode__
Encodes the string in the encoding format specified by encoding.

* __Reduce to decimal places__
Retain the specified number of decimal places.

#### Instructions
>

><img src="/image/Operation/Text_user.gif" width="50%"> 