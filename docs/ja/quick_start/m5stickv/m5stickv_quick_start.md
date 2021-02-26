# M5StickV クイックスタート {docsify-ignore-all}

## 目次

**[1. ファームウェアをダウンロード](#Download)**

**[2. ファームウェアを書き込む](#Flash)**

**[3. シリアル通信を使ったデバッグツール](#Serial-Tool)**

**[4. Hello World](#Hello-World)**

**[5. コードを編集して実行](#Edit-and-Run-the-Code)**

**[6. ライブラリ](#Library)**



## EasyLoader

<img src="https://m5stack.oss-cn-shenzhen.aliyuncs.com/image/EasyLoader_logo.png" width="100px" style="margin-top:20px">

<a href="https://m5stack.oss-cn-shenzhen.aliyuncs.com/EasyLoader/M5Core/M5StickV/EasyLoader_M5StickV_0630.exe"><button type="button" class="btn btn-primary">EasyLoaderをダウンロード</button></a>

>1.EasyLoader は簡単に素早くプログラムを書き込めます。各プログラムにあわせたEasyLoaderがあります。(**現在Windows OSのみ対応しています。**)

>2.ソフトをダウンロードしたら、ダブルクリックしてインストーラを起動します。そして、データケーブルを使ってM5デバイスとパソコンをつなぎ、通信ポート設定を選び **"書き込み"** を押して書き込みを開始します。

## ダウンロード

> Windows以外のOSを使用しているユーザー、または、書き込みファイルを指定する必要があるユーザーは、ファームウェアの書き込みにKflashを使うことができます。リンクをクリックし、ファームウェアをダウンロードしてください。

<a href="https://m5stack.oss-cn-shenzhen.aliyuncs.com/resource/docs/m5stickV_Firmware_0630Fixed.kfpkg"><button type="button" class="btn btn-primary">ファームウェアをダウンロード </button></a>


## フラッシュ

>1. フラッシュ書き込みツール Kflash_GUIをダウンロードします。

<div class="link">
 <h4><span>Kflash_GUI:</span></h4>
    <p>
    <a href="http://dl.cdn.sipeed.com/kflash_gui_v1.2.5_windows.zip" target="_blank" rel="noopener noreferrer"><img src="https://cdn.shopify.com/s/files/1/0056/7689/2250/files/windows_89cc6ea0-2a3c-4327-97e5-8f51f448c38b_icon.png?v=1557026574" alt="">Windows</a>
    <a href="http://dl.cdn.sipeed.com/kflash_gui_v1.2.5_macOS.dmg" target="_blank" rel="noopener noreferrer"><img src="https://cdn.shopify.com/s/files/1/0056/7689/2250/files/mac_large.png?v=1557026570" alt="">MacOS</a>
    <a href="http://dl.cdn.sipeed.com/kflash_gui_v1.2.5_7_linux.tar.xz" target="_blank" rel="noopener noreferrer"><img src="https://cdn.shopify.com/s/files/1/0056/7689/2250/files/linux_icon.png?v=1557026584" alt="">Linux</a></p>
</div>

>2.Type-C ケーブルを使ってデバイスとコンピュータをつなぎ、 プログラムをダブルクリックしてフラッシュ書き込みツール **Kflash_GUI**を起動し、正しい通信ポート、ファームウェア、通信速度を選んでダウンロードを開始します。

<img src="assets\img\getting_started_pics\m5stickv\kflash_gui_01.jpg">

### Kflash

>3. コマンド操作に慣れている人は、ファームウェア書き込みツールとして Kfalsh を選択できます。[詳細](https://github.com/kendryte/kflash.py)


## シリアル通信ツール

>1. M5StickVをプログラムする上でシリアルデバッグが必要なら、Puttyを使用できます。 ダウンロードおよび情報は[こちらから](https://www.chiark.greenend.org.uk/~sgtatham/putty/latest.html)。

>2. Puttyを実行し、M5StickV とパソコンをつなぎます。Putty上で通信ポート、速度を合わせ、"開く"を押してつながるのを待ちます。(通信ポートはデバイスマネージャーで確認できます)

<img src="assets\img\getting_started_pics\m5stickv\putty_01.jpg">

> 接続が終ると Maixpy UIが自動的に起動します。 接続されたデバイスで動いているプログラムがあれば、"Ctrl+C"を押して中断させることもできます。

<img src="assets\img\getting_started_pics\m5stickv\putty_02.jpg">


## Hello World

>次のプログラムを入力すると、 "hello world" という文字が画面にでます。

```clike
import lcd

lcd.init()
lcd.draw_string(100, 100, "hello world", lcd.RED, lcd.BLACK)

```


## コードを編集して実行

### 編集する


> 対話型プログラム環境(REPL) は、短いコードのプログラミングや検証に使用できます。大量のコードがあるような実際のプロジェクトでは、コードファイルを正しく認識するためにコードエディタが必要になります。


>MaixPy内部にはオープンソースのエディタ [Micropython Editor(pye)](https://github.com/robert-hh/Micropython-Editor)が組み込まれており、コードを管理するのに便利です。

 `os.listdir()`は、現在のディレクトリにあるファイルをチェックする関数です。


`pye("hello.py")`関数を使えば、ファイルを新しく作成し、編集モードに入ります。(ファイルが存在する場合は開いて編集します。)[詳細](https://github.com/robert-hh/Micropython-Editor/blob/master/Pyboard%20Editor.pdf)

編集を終えたら、 `Ctrl+S` > `Enter` をおして保存します。 `Ctrl+Q` を押すと編集モードを終了します。

*注意**： このエディタでは、シリアルツールに起因するいくつかの制約があります。`BackSpace`キーは` DEL`として設定するか、`BackSpace`キーに` Ctrl + H`（文字置換）と同じ機能を割り当てる必要があります。

### ファイルをアップロードする

> MaixPyの内部エディタはファイルの管理に役立ちますが、より効率を上げるには、他のエディタを使用して編集終了後にプロジェクトをアップロードすることをお勧めします

>[uPyLoader](https://github.com/BetaRavener/uPyLoader) はオープンソースです。多くの機能を網羅しており、アップロード、ダウンロード、ファイル実行、出力モニターなどが行えます。

<a href="https://github.com/BetaRavener/uPyLoader/releases"><button type="button" class="btn btn-primary">uPyLoaderをダウンロード</button></a>


### ファイル実行

`os.chdir()` 関数はカレントディレクトリを変更します。たとえばこのように使います： `os.chdir("/flash")`

#### 解決手段 1： `import`

 `import hello`を実行します。

 `hello maixpy`という出力が得られるかとおもいます。

このように簡単かつ便利です。しかし、importは1度しか利用できないことに注意を払う必要があります。2回目のimportは機能しません。importを複数使う必要があるならば、解決手段2を参照してください。

#### 解決手段 2： `exec()`

 `exec()` 関数をつかいます。 :

```clike
with open("hello.py") as f:
    exec(f.read())

```

### 起動時自動実行


システムは `boot.py` ファイルを `/flash` もしくは  `/sd` に作成します。そして、電源が投入されたときに、このスクリプトが実行されます。このファイルを編集することで自動実行を実現できます。

## ライブラリ


<a href="https://maixpy.sipeed.com/zh/libs/standard/"><button type="button" class="btn btn-primary">他のサンプルを入手</button></a>



<style>

.link a{

    padding-left: 13%;

}

</style>