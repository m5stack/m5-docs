# M5STACK LVGL

>M5STACK LVGL是基于LVGL所开发的一套UI组件库，目前已经集成到了UIFlow固件中，用户可以通过UIFlow图形化编程或使用以下Micropython API进行调用。

## M5Screen

>创建屏幕实例

```clike

from m5stack_ui import *

//创建屏幕实例
screen = M5Screen()

//清除屏幕内容
screen.clean_screen()

//设置屏幕背景色
screen.set_screen_bg_color(color)

//设置屏幕亮度
screen.set_screen_brightness(brightness)

//载入屏幕实例
screen.load_screen(scr)

//获取新的屏幕实例
screen.get_new_screen()

//获取当前的屏幕实例
screen.get_act_screen()

//释放屏幕实例
screen.del_screen()

```

## M5Tabview

>创建页签

```clike
from m5stack_ui import *

screen = M5Screen()

//default M5Tabview(x=0, y=0)
tab = M5Tabview(0,30)

//创建页签
tab.add_tab("tab1")
tab.add_tab("tab2")
tab.add_tab("tab3")

//设置页签

tab.set_tab_name(index,"new_tab_name")

```

## M5Textarea

>创建文本区域


```clike

from m5stack_ui import *

screen = M5Screen()

//M5Textarea(text='', x=0, y=0, w=None, h=None)
Textarea = M5Textarea()

//填充文本
Textarea.set_text("Hello World")

```

## M5Msgbox

>创建信息盒子

```clike

from m5stack_ui import *

screen = M5Screen()

//M5Msgbox(btns_list=None, x=0, y=0, w=None, h=None)
Msgbox = M5Msgbox()

Msgbox.add_btns(btns_list)

//填充文本
Msgbox.set_text(text)

Msgbox.get_active_btn_text()

```

## M5Led

>创建虚拟LED灯

```clike
from m5stack_ui import *

screen = M5Screen()

//M5Led(x=0, y=0, w=None, h=None, color=None)
Led = M5Led()

//设置LED开关
Led.set_on()
Led.set_off()

//设置LED亮度
Led.set_bright(100)

//设置LED颜色
Led.set_color(0x00ff00)

```

## M5Switch

>创建滑动开关


```clike
from m5stack_ui import *

screen = M5Screen()

//M5Switch(x=0, y=0, w=None, h=None, bg_c=None, color=None)
Switch = M5Switch()

Switch.set_bg_color(0x888888)
Switch.set_color(0x000fff)
Switch.set_on()
Switch.set_off()
Switch.set_toggle()

def onCallback():
    pass

def offCallback():
    pass

//注册滑动开关回调函数
Switch.on(onCallback)
Switch.off(offCallback)


```

## M5Slider

>创建滑动条


```clike

from m5stack_ui import *

screen = M5Screen()

//M5Slider(x=0, y=0, w=None, h=None, min=None, max=None, bg_c=None, color=None, parent=None):
Slider = M5Slider(50,50,100,30,0,100,0x888888,0x000fff)

Slider.set_bg_color(0x888888)

Slider.set_color(0x000fff)

Slider.set_range(0,100)

Slider.set_value(10)

Slider.get_value()

def onChange(value):
    print(value)

//注册滑动条变化回调函数
Slider.changed(onChange)

```

## M5List

>创建列表


```clike

from m5stack_ui import *

screen = M5Screen()

//M5List(x=0, y=0)
List = M5List(50,50)

List.add_label("Hello")

List.add_label("M5Stack")

handle = List.add_label("Hi")

List.get_sel_label_index()

List.get_sel_label_text()

List.get_label_indx(handle)

List.get_label_text(handle)

```

## M5Line

>绘制直线

```clike

from m5stack_ui import *

screen = M5Screen()

//M5Line(x1=0, y1=0, x2=0, y2=0, color=None, width=None)
Line = M5Line(20,50,140,50,0xfff,10)

Line.set_points(x1, y1, x2, y2)

Line.set_line_width(width)

Line.set_line_rounded(state)

Line.set_color(color)

//opa 0-100
Line.set_opacity(100)

```

## M5Label

>绘制文本标签


```clike

from m5stack_ui import *

screen = M5Screen()

/*M5Label(text, x=0, y=0, color=None, font=None) */
| ---------------------------------------------------------------------
| font:
| FONT_MONT_12/14/16/18/20/22/24/26/28/30/32/34/36/38/40/42/44/46/48
| FONT_UNICODE_24 = lv.font_PHT_unicode_24
/*---------------------------------------------------------------------*/

Label = M5Label("Hello!",20,50,0xff,FONT_MONT_48)

Label.set_text(text)

Label.set_text_color(color)

Label.set_text_font(font)

Label.get_width()

```

## M5Img

>插入图像(仅支持png)。

```clike

from m5stack_ui import *

screen = M5Screen()

//M5Img(filename, x=0, y=0, w=None, h=None)
Img = M5Img("res/default.png", x=0, y=0, parent=None)

Img.set_img_src(filename)

```

## M5Dropdown

>创建下拉菜单

```clike

from m5stack_ui import *

screen = M5Screen()

//M5Dropdown(x=0, y=0, w=None, h=None)
Dropdown = M5Dropdown(30,30,240,40)

Dropdown.set_options(['option0','option1'])

Dropdown.add_option('option2',2)
Dropdown.add_option('option3',3)
Dropdown.add_option('option4',4)

Dropdown.set_sel_index(1)

Dropdown.get_sel_index()
```

## M5Cpicker

>创建色盘选择器

```clike

coming soon...

```


## M5Checkbox

>创建勾选框

```clike

from m5stack_ui import *

screen = M5Screen()

//M5Checkbox(text, x=0, y=0, w=None, h=None, text_c=None, check_c=None, font=None):
Checkbox = M5Checkbox("check",50,50,50,50,0xff,0xff,FONT_MONT_12)
Checkbox.set_text(text)

//state: True | False
Checkbox.set_checked(state)

Checkbox.set_text_color(color)

Checkbox.set_checked_color(color)
Checkbox.set_text_font(font)
Checkbox.get_width()

def Checkbox_checked():
  pass

def Checkbox_unchecked():
  pass

Checkbox.checked(checked_cb)

Checkbox.unchecked(unchecked_cb)

```

## M5Btn

>创建按键

```clike

from m5stack_ui import *

screen = M5Screen()

//M5Btn(text='', x=0, y=0, w=70, h=30, bg_c=None, text_c=None, font=None)
Btn = M5Btn("button",50,50,80,50,0xff,0xffffff,FONT_MONT_12)

Btn.set_bg_color(color)

Btn.set_btn_text(text)

Btn.set_btn_text_color(color)

Btn.set_btn_text_font(font)

def pressed_cb():
    pass

def released_cb():
    pass

Btn.pressed(pressed_cb)

Btn.released(released_cb)


```

## M5Arc

>创建弧形表盘(参数：start,end为顺时针角度)。

```clike

from m5stack_ui import *

screen = M5Screen()

//M5Arc(x=0, y=0, w=None, h=None)
Arc = M5Arc(0,0,150,150)

Arc.set_angles(0,90)

```

## M5Bar

>创建进度条。

```clike

from m5stack_ui import *

screen = M5Screen()

//M5Bar(x=0, y=0, w=None, h=None, min=None, max=None, bg_c=None, color=None)
Bar = M5Bar(50,50,150,30,0,100,0xdddddd,0xff)

//设置进度条数值
Bar.set_value(50)

Bar.set_bg_color(color)

Bar.set_color(color)

Bar.set_range(min, max)

Bar.get_value()

```

## M5Imgbtn

>创建图片按键。

```clike
from m5stack_ui import *

screen = M5Screen()

//M5Imgbtn(filename, x=0, y=0, w=None, h=None)
Imgbtn = M5Imgbtn("res/default.png",0,0,50,50)

Imgbtn.set_pressed_img(filename, w, h)

Imgbtn.set_released_img(filename, w, h)

```

## M5Obj

>元素基类，所有的可控元素都继承于该类，因此可以调用该类中的一些方法，进行显示操作。

```clike

M5Obj.set_pos(x, y)

M5Obj.set_align(mode, x=0, y=0, ref=None)

M5Obj.set_size(w=None, h=None)

M5Obj.set_hidden(state)

M5Obj.set_cb(cb)

M5Obj.get_state()

M5Obj.delete()

```
