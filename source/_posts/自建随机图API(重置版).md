---
title: 自建随机图API(重置版)
cover: 'https://api.ssykawa.com/random.php'
categories:
  - 教程
  - 技术
tags:
  - 技术
  - PHP
  - 折腾
abbrlink: f635c1ba
date: 2021-11-28 13:54:31
---
# 前言
之前自建过随机图API，可本质是通过跳转外链从而达到的效果，而且所有图片我都放在了github图床，因为有可能会被封。所以本期教程给大家提供一个新的方案。
# 开始搭建
## First—准备图片
老样子，先寻找合适的图片，可以从从[Wallhaven](https://wallhaven.cc)，[Pixiv](https://www.pixiv.net)或其他人的api中获取，当然你如果会python可以用爬虫来爬取图片。**找到之后下载图片**
​

## Second—存入文件夹
把下好的图片存进一个文件夹，再将文件夹命名为`img`
​

## Third—写入源码
最后就是随机图的PHP源码了
源码:
```php
<?php
$img_array = glob('img/*.{gif,jpg,png,jpeg,webp,bmp}', GLOB_BRACE);
if (count($img_array) == 0) {
    die('没找到图片文件。请先上传一些图片到 ' . dirname(__FILE__) . '/img/ 文件夹');
}
header('Content-Type: image/png');
echo file_get_contents($img_array[array_rand($img_array)]);
```
把以上这些放到服务器的根目录，然后[https://你的域名/random.php](https://你的域名/random.php)即可访问


**至此随机图API搭建完成。**
​

# 拓展内容
因为图片放在本地，所以速度不会特别快，所以用CDN加速一下更好(oﾟvﾟ)ノ
