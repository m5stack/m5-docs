## UIFlow 程序块定制{docsify-ignore-all}

<el-card class="box-card" style="margin-bottom:20px">
    <div slot="header" class="clearfix">
        <span>目录</span>
        <i class="el-icon-s-management" style="float: right;"></i>
    </div>
    <div style="margin: 0px 10px 10px 0px ;display:inline-block;">
        <el-tag onclick="page_move('创建程序块')">创建程序块</el-tag>
        <el-tag onclick="page_move('程序块代码-传参')">程序块代码-传参</el-tag>
        <el-tag onclick="page_move('程序块保存-修改')">程序块保存-修改</el-tag>
        <el-tag onclick="page_move('使用程序块')">使用程序块</el-tag>
    </div>
</el-card>

## 创建程序块


点击程序块列表中的`Custom`选项 > `Create` ，创建一个自定义程序块

<img src="assets/img/related_documents/blockly_custom/custom_01.webp">

创建一个新的程序块，我们需要提供 :

`1：分组名称`: 自定义程序块所放置在的分组名称

`2：程序块颜色`: 程序块的外观颜色

`3：程序块标签`: 只允许包含字母、数字、下划线

`4：程序块类型`: 定义程序块的类型为`Value`(数值)，或是`Execute`(执行)

`5：程序块数量`: 能够同时添加多个程序块，并同时保存到一个`.m5b`文件中

<img src="assets/img/related_documents/blockly_custom/custom_02.webp">



## 程序块代码-传参


点击`Parameter`下方的`Add`选项，添加一条程序属性，输入程序块所显示的名称，以及选择属性类型，在`Block Code`选项框中输入自定义程序块所包含的代码.

[点击此处，访问Github获取更多程序API](https://github.com/m5stack/UIFlow-Code/wiki)

<img src="assets/img/related_documents/blockly_custom/custom_03.webp">

当自定义程序块的属性类型带有常量或变量输入时，我们可以在代码中获取这些值，并进行进一步的处理和运算.

例： 将属性类型选择为`String`(字符串输入)，此时在程序中，如果我们想要获得使用时所输入的字符串，只需要在代码中使用`${Parameter name}`，也就是`${show_word}`,需要注意的是，当程序块名称中带有空格时，在使用${}去获取需要使用`_`下划线对空格进行替代

<img src="assets/img/related_documents/blockly_custom/custom_04.webp">

## 程序块保存-修改

完成程序编辑后，点击`Download`进行保存

点击`Open .m5b`，能够打开已保存的自定义程序进行修改

<img src="assets/img/related_documents/blockly_custom/custom_05.webp">


## 使用程序块

点击程序块列表中的`Custom`选项 > `Open` ，打开一个自定义程序块

<img src="assets/img/related_documents/blockly_custom/custom_06.webp">
<br></br>
<img src="assets/img/related_documents/blockly_custom/custom_07.webp">

<script>

   anchor_search();
   scrollFunc();

</script>