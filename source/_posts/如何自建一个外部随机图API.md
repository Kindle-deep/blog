---
title: 如何自建一个外部随机图API
cover: >-
  https://pica.zhimg.com/v2-58b320c1597d2cf2682435198a9b5cdd_r.jpg?source=172ae18b
abbrlink: 615c50c5
categories: 
  - 教程
  - 技术
tags: 
  - 技术
  - PHP
  - 折腾
---
<h2><span style="font-family: 'andale mono', monospace;">  前言：在美化我的博客时候，封面一直是个大问题，其他人的API自己不喜欢，今天就教大家自建一个外部随机图API。</span></h2>

<h2>整体步骤：</h2>

<ol>
    <li>找到自己喜欢的图片，这里我用的网站是<a href="https://wallhaven.cc/">https://wallhaven.cc/</a></li>
    <li>自建GIthub图库。</li>
    <li>通过PicGo上传到GitHub，输出加速后的图片地址</li>
    <li>部署到服务器中</li>
</ol>

OK,理论存在，实践开始！！

<h2><strong> 1.搭建图床</strong></h2>

<ol>
    <li>先创建一个Github仓库</li>
</ol>

这里我仓库名称用的是photo repository,你也可以是其他名字，选公开，注意！！勾选“Add a README file”

 

<h2><b>2.生成一个 Token</b></h2>

<ol>
    <li>点击用户头像 -> 选择 setting</li>
    <li>点击Developer settings</li>
    <li>点击Personal access tokens</li>
    <li>点击Generate new token</li>
    <li>填写Token描述，勾选repo然后点击Generate token生成一个Token，只需勾选repo</li>
    <li>获取Token，注意这个 Token 只会显示一次，自己先保存下来，或者等后面配置好 PicGo 后再关闭此网页</li>
</ol>

<h2><b>配置 PicGo 并使用 jsdelivr 作为 CDN 加速</b></h2>

<ol>
    <li>前往下载<a href="https://github.com/Molunerfinn/picgo/releases">PicGo</a></li>
    <li>设定仓库名：按照用户名/图床仓库名 的格式填写</li>
</ol>

设定分支名：main

设定 Token：粘贴之前生成的Token

指定存储路径：填写想要储存的路径，如 img/，这样就会在仓库下创建一个名为img的文件夹，图片将会储存在此文件夹中

设定自定义域名：它的的作用是，在图片上传后，PicGo 会按照自定义域名+上传的图片名的方式生成访问链接，放到粘贴板上，因为我们要使用 jsDelivr 加速访问，所以可以设置为<a class=" external" href="https://link.zhihu.com/?target=https%3A//cdn.jsdelivr.net/gh/" target="_blank" rel="nofollow noopener noreferrer" data-za-detail-view-id="1043"><span class="invisible">https://</span><span class="visible">cdn.jsdelivr.net/gh/</span></a>用户名/图床仓库名@分支 #默认是main

<h2></h2>

<h2>现在图床搭建完毕，开始配置随机图片</h2>

<ol>
    <li>新建一个img.txt和random.php</li>
    <li>把jsDelivr 加速后的图片链接复制下来</li>
    <li>一行一个配置random.php</li>
    <li>源码
``` PHP
<?php
//存有美图链接的文件名img.txt
$filename = "img.txt";
if(!file_exists($filename)){
die('文件不存在');
}//从文本获取链接
$pics = [];
$fs = fopen($filename, "r");
while(!feof($fs)){
$line=trim(fgets($fs));
if($line!=''){
array_push($pics, $line);
}
}
//从数组随机获取链接
$pic = $pics[array_rand($pics)];

//返回指定格式
$type=$_GET['type'];
switch($type){

//JSON返回
case 'json':
header('Content-type:text/json');
die(json_encode(['pic'=>$pic]));

default:
die(header("Location: $pic"));
}
?>

```
 </li>
    <li><code></code>把img.txt和random.php放到你的网站服务器的目录下，你的域名/random.php即可访问</li>
</ol>

<h2>到这里，今天的教程就到此结束了，GoodBye！！</h2>

