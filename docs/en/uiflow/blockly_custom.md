# UIFlow Block Custom{docsify-ignore-all}

<el-card class="box-card" style="margin-bottom:20px">
    <div slot="header" class="clearfix">
        <span>Contents</span>
        <i class="el-icon-s-management" style="float: right;"></i>
    </div>
    <div style="margin: 0px 10px 10px 0px ;display:inline-block;">
        <el-tag onclick="page_move('create-block')">Create-block</el-tag>
        <el-tag onclick="page_move('code-parameter')">Code-Parameter</el-tag>
        <el-tag onclick="page_move('save-and-changes">Save-and-Changes</el-tag>
        <el-tag onclick="page_move('using-program-block')">Using-program-block</el-tag>
    </div>
</el-card>


## Create block


Create a custom block by clicking on the `Custom` option > `Create` in the block list.

<img src="assets/img/related_documents/blockly_custom/custom_01.webp">

To create a new block, we need to provide:

`1: group name`: the name of the group in which the custom block is placed

`2: Block color`: Appearance color of the block

`3: Block label`: Only letters, numbers, underscores are allowed

`4: Block type`: Define the type of the block as `Value` (value), or `Execute` (execute)

`5: Number of blocks`: Ability to add multiple blocks at the same time and save them to a `.m5b` file at the same time

<img src="assets/img/related_documents/blockly_custom/custom_02.webp">


## Code-Parameter


Click the `Add` option under `Parameter`, add a program property, enter the name displayed in the block, and select the property type. Enter the code contained in the custom block in the `Block Code` option box.

[Click here to visit Github for more program API](https://github.com/m5stack/UIFlow-Code/wiki)

<img src="assets/img/related_documents/blockly_custom/custom_03.webp">

When the attribute type of a custom block has constant or variable input, we can get these values in the code and perform further processing and operations.

Example: Select the attribute type as `String` (string input). In this case, if we want to get the string input when using, just use `${Parameter name}` in the code. It is `${show_word}`. It should be noted that when there is a space in the block name, use ${} to get the space that needs to be replaced with the `_` underscore.

<img src="assets/img/related_documents/blockly_custom/custom_04.webp">

## Save and Changes

After editing the program, click `Download` to save.

Click on `Open .m5b` to open the saved custom program for modification.

<img src="assets/img/related_documents/blockly_custom/custom_05.webp">


## Using program block

Open a custom block by clicking on the`Custom`option > `Open` ，in the block list.

<img src="assets/img/related_documents/blockly_custom/custom_06.webp">
<br></br>
<img src="assets/img/related_documents/blockly_custom/custom_07.webp">