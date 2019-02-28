# UIFlow クイックスタート(Blockly/MicroPython) {docsify-ignore-all}

:memo: **[テキストチュートリアル](#テキストチュートリアル)**&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;:clapper: **[ビデオチュートリアル](#ビデオチュートリアル)**

?> **Note** *初めてM5Stackを使う場合、あらかじめ指定のファームウェアを書き込む必要があります。[ファームウェアの更新方法](ja/related_documents/how_to_burn_firmware)を参照してください。初めてM5Coreを起動した際にはまだWi-Fi接続先を設定していないため、[flow.m5stack.com](http://flow.m5stack.com)に接続することができません。このページを参照して設定を行ってください。 [M5StackのWi-Fi接続方法](/ja/related_documents/how_to_connect_wifi_using_core)*

M5Stackを起動したらすぐに `UPLOAD` ボタンを連打します。以下の画面に遷移しなかった場合は、M5Stack本体横の赤いリセットスイッチを押して、再起動してやり直してください。

<img src="assets/img/getting_started_pics/m5stack_core/get_started_with_uiflow/apikey.jpg">

?> **Note** *最初の起動では何もしないと、デモプログラムに遷移します。Wi-Fiの設定が完了していると自動的にWi-FiのAPに接続しにいきます。Wi-Fiを再設定したい場合は、`SETUP`ボタンを押してください。*

## テキストチュートリアル

1. [UIFlowに接続](#_1-uiflowに接続)

2. [プログラム作成](#_2-プログラム作成)

3. [音楽演奏デモ](#_3-音楽演奏デモ)

## 1. UIFlowに接続

1. M5Stackに表示されている二次元コードをあなたのスマートフォンやタブレットPCで読み取ってプログラムを始めることができます。もしPCでプログラムをする場合は、ブラウザで次のURLを入力してください。 `flow.m5stack.com`


<img src="assets/img/getting_started_pics/m5stack_core/get_started_with_uiflow/webide.png">

2. UIFlowを利用するためには、お持ちのM5Stackをペアリングする必要があります。

最初にUIFlowの画面の右上にある歯車の設定を開きます。`APIKEY` の欄にM5Stack本体に表示されているAPIKEYを入力します。(写真の場合は `9C6469`) 入力が終わったら`SAVE`をクリックします。


<img src="assets/img/getting_started_pics/m5stack_core/get_started_with_uiflow/enter_apikey.gif">

正しいAPIKEYが入力されるとUIFlowはあなたのM5Stackと接続します。

しばらくすると下図のように、Blockly(や Python)を用いてプログラムが可能になります。

## 2. プログラム作成

### a. UIデザイン

4種類のUI要素が用意されており、UIFlow内のUIエディタにドラッグすることで利用できます。試しにいくつかUIオブジェクトを配置して`実行(Run)`をクリックしてみましょう。

<img src="assets/img/getting_started_pics/m5stack_core/get_started_with_uiflow/draw_ui.gif">

### b. Blocklyでプログラミング

`Emoji`クラスの中にある`Set emoji map in0`ブロックをドラッグしてブロックエディタに配置し、`実行(Run)`をクリックしてみましょう。


<img src="assets/img/getting_started_pics/m5stack_core/get_started_with_uiflow/draw_heart.gif">

*このデモのソースコード: https://github.com/m5stack/M5-ProductExampleCodes/blob/master/Core/M5_draw_heart.m5f*

### c. MicroPythonでプログラミング

Blockly/MicroPython切り替えボタンを使って、MicroPythonに切り替えます。そして次のコードをコピーして`Python エディタ`に貼り付け、`実行(Run)`をクリックしてみましょう。

```Python
from m5stack import *
from m5ui import *
clear_bg(0x111111)


btnA = M5Button(name='ButtonA', text='ButtonA', visibility=False)
btnB = M5Button(name='ButtonB', text='ButtonB', visibility=False)
btnC = M5Button(name='ButtonC', text='ButtonC', visibility=False)


lcd.print("Hello M5Stack")
```

<img src="assets/img/getting_started_pics/m5stack_core/get_started_with_uiflow/program_with_micropython.png">

M5Stackの画面に`Hello M5Stack`と表示されます。

## 3. 音楽演奏デモ

M5Stackを用いればたった数分でミュージックプレイヤーを作成して、音楽を演奏することができます。

`loop`、`music`、`timer`から下図のブロックをブロックエディタに配置します。

<img src="assets/img/getting_started_pics/m5stack_core/get_started_with_uiflow/play_a_song.gif">

実行すると音楽がなります！

*このデモのソースコード: https://github.com/m5stack/M5-ProductExampleCodes/blob/master/Core/M5_play_a_song.m5f*

## 完成

?> **Note** *UIFlowでのプログラミングについて知りたい場合は、[UIFlowのチュートリアルドキュメント](https://m5stack.github.io/UIFlow_doc/ja/index.html)を読んでください。*

## ビデオチュートリアル

**UIFlow概要**

<iframe width="560" height="315" src="https://www.youtube.com/embed/rJwcCx1FnVY" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

**UIFlowチュートリアル**

<iframe height=498 width=510 src='https://m5stack.oss-cn-shenzhen.aliyuncs.com/video/%E6%95%99%E7%A8%8B/UIFlow%20Tutorials/A3%20-%20UIflow%20Tutorial%201.mp4' frameborder="0" allow="accelerometer; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

<!-- <iframe width="560" height="315" src="https://www.youtube.com/embed/rdz6hBoqamA" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe> -->

<!-- **UIFlow (Mac & Linux) 初めの一歩（この動画は少し内容が古いです）**

<iframe width="560" height="315" src="https://www.youtube.com/embed/oEiFLsukAEE" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe> -->