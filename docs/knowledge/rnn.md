---
title: 循环神经网络RNN
lang: en-US
---
### 循环神经网络
> 前面的输入和后面的输入是有关系的

![](https://pic4.zhimg.com/80/v2-3884f344d71e92d70ec3c44d2795141f_720w.jpg)

RNN 隐藏层的值 s 不仅取决于当前这次的输入 x ，还取决于上一次隐藏层的值 s

用公式表示如下:

![](https://pic4.zhimg.com/80/v2-9524a28210c98ed130644eb3c3002087_720w.jpg)


[一文搞懂RNN（循环神经网络）基础篇](https://zhuanlan.zhihu.com/p/30844905)
### 双向循环网络
举个例子: **我的手机坏了，我打算____一部新手机**。光看横线前面的词，是不够的。因此这种情况就需要双向循环神经网络

![](https://dbaplus.cn/uploadfile/2016/1110/20161110102720169.jpg)

从上图可以看出，双向神经网络的隐藏层需要保存两个值，一个 A 值参与正向运算，另一个 A 值参与反向运算，最终的输出值 y2 取决于 A2 和 A'2 。其计算方法为:

![](https://dbaplus.cn/uploadfile/2016/1110/20161110102739752.jpg)

其中 A2 和 A'2 分别为:

![](https://dbaplus.cn/uploadfile/2016/1110/20161110102751909.jpg)

<template>
  <img :src="$withBase('/images/doublernn.png')"alt="双向rnn">
</template>

### 反向求导