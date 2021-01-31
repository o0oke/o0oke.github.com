Here's an inline link to [my linux notes](http://www.evel.cn/post/upload/note.txt).

<h2 id="n1">Linux</h2>

<h3 id="n1.1">VNC服务器</h3>
1,搭建node服务器
```
[evel@evel-arch node]$ node server.js 
Server running at http://127.0.0.1:8888/
```
2, ./ngrok http 8888

3, 本机服务器位置
```
网页目录：/srv/http/
systemctl start httpd
systemctl stop httpd
systemctl status httpd
```
<h3 id="n1.2">VNC服务器</h3>
VNC from Win to Linux
x11vnc -display :0
VNC from Linux to Win:
using Wine to run vncviwer directly

<h3 id="n1.3">系统声音配置</h3>
rmmod pcspkr--关闭警告声
modprobe pcspkr-打开

<h3 id="n1.4">ZIP</h3>
```
[evel@evel-arch borderify]$ ls
borderify.js  icons  manifest.json
[evel@evel-arch borderify]$ zip -r -FS ../borderify.zip *
*  adding: borderify.js (stored 0%)
  adding: icons/ (stored 0%)
  adding: icons/border-48.png (deflated 3%)
  adding: manifest.json (deflated 42%)
[evel@evel-arch borderify]$ ls
borderify.js  icons  manifest.json
[evel@evel-arch borderify]$ cd ..
[evel@evel-arch firefox]$ ls
borderify  borderify.zip*
```
<h3 id="n1.5">查询历史命令</h3>
查询历史命令：
```
history | grep pacman
```
<h3 id="n1.6">查询温度传感器</h3>
查询温度传感器数据
sensors
<h3 id="n1.7">查看和调整Linux声音</h3>
查看和调整声音

alsamixer

<h3 id="n1.8">查找文件目录</h3>
查找文件目录等
```
tree -f | grep pdf
tree -f -h -D -c | grep -E pdf$
```
一下-C仅仅针对Linux盘下文件其起作用
```
[evel@evel-arch ~]$ tree -f -h -D -C | grep 学习
│   ├── [3.0M Jun 29  2017]  ./Document/603. 面向移动计算的深度学习-程健.pdf
```

<h3 id="n1.9">VIM</h3>
VIM：
zf创建折叠， 代码折叠 zm 折叠所有，zo展开一个折叠，zj/zk跳到下/上一个折叠
mkview 生成一个文件的view loadview 加载某个文件的view

<h3 id="n1.10">帮助相关</h3>
搜索某个命令的一些帮助文档：
```
help:
[evel@evel-arch ~]$ help 
GNU bash，版本 4.4.19(1)-release (x86_64-unknown-linux-gnu)
这些 shell 命令是内部定义的。请输入 `help' 以获取一个列表。
输入 `help 名称' 以得到有关函数`名称'的更多信息。
使用 `info bash' 来获得关于 shell 的更多一般性信息。
使用 `man -k' 或 `info' 来获取不在列表中的命令的更多信息。

man：
1,用斜杠/加关键词，加上n的用法（仅对man管用）
2,用-k来匹配命令，加上greg搜索关键词
[evel@evel-arch ~]$ man -k read | grep ^read\\s
read (1)             - GNU Bourne-Again SHell (GNU 命令解释程序 “Bourne二世”)
read (2)             - 在文件描述符上执行读操作
read (3tcl)          - 从一个通道读
read (1p)            - read a line from standard input
read (3)             - An abstract i/o interface.
read (3p)            - read from a file
read (n)             - Read from a channel

一般来说数字代码的意思：
1：用户命令所有的用户都可以查阅并且会使用此手册的内容
2：系统调用，查看系统提供的相关调用，一般是程序员使用
3：库函数
4：设备文件
5：文件格式描述，通常是配置文件的帮助手册
6：游戏
7：其他杂项
8：只能由root用户使用的管理命令和工具等
9：其他

info
有超链接并且查询方法不一样
's'或者斜杠/ 开启查询，{ 和 } 为上一个下一个跳转
带*号为超链接，tab键跳转。然后回车直接转到该node，‘u’为跳转上级node
```
<h3 id="n1.11">SHELL</h3>
理解shell
linux内核需要和用户或者其他外界资源交互。所以会安装不同的shell，对用户而言，每建立一个用户。系统默认分配一个bash shell给他用于和内核交互.
查询系统的shell：
```
cat /etc/shells
sh和bash一个东西
sh-4.4$ sh -help
GNU bash，版本 4.4.19(1)-release-(x86_64-unknown-linux-gnu)
用法：	sh [GNU 长选项] [选项] ...
	sh [GNU 长选项] [选项] 脚本文件 ...
```

[evel@evel-arch ~]$ bash -help
GNU bash，版本 4.4.19(1)-release-(x86_64-unknown-linux-gnu)
用法：	bash [GNU 长选项] [选项] ...
	bash [GNU 长选项] [选项] 脚本文件 ...

<h3 id="n1.12">系统SHELL更换</h3>
输入新的shell名字。临时更改shell
查看当前shell echo $SHELL
永远更改 chshin 管理员更改就用usermod -s 
新增用户定义其Shell： useradd -s /bin/ksh user2

<h3 id="n1.13">ogv转mp4视频加水印</h3>
```
ffmpeg -i Evel.ogv -vf "drawtext=fontfile=simhei.ttf: text='By Evel':x=10:y=10:fontsize=24:fontcolor=yellow:shadowy=2" -f mp4 demo2.mp4
```

<h3 id="n1.14">自动登录</h3>
```
autologin-guest=false
autologin-user=evel
autologin-user-timeout=0
autologin-session=xfce
```
<h3 id="n1.15">多屏幕共享方案</h3>
Synergy

<h3 id="n1.16">比对文件彩色标记不同</h3>

```
apt install colordiff
diff -y svg.html svg.txt | colordiff
```
<h2 id="n2">Web</h2>

<h3 id="n2.1">web进展</h3>

- [x] 1,保证文章长度超过一定长度。确保点击后无缩小放大的情况
- [ ] 2,文章代码高亮方案
- [x] 3,文章列表方案
- [ ] 4, 选择文字弹出评论框方案
- [ ] 5, 评论框固定方案
- [x] 6, 音乐播放器
- [x] 7, 图片分享
- [x] 8, 图标展示
- [x] 9, 视频外链

<h2 id="n3">UOS</h2>

<h3 id="n3.1">UOS过期咋办</h3>

如不想折腾只要将以下两个文件删除，即可去掉烦人的弹框提醒
```
uos-activator-usrbin：/usr/bin
uos-license-agent：/usr/lib/deepin-daemon
```

另外如果有应用商店可安装。直接替换源即可。