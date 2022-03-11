---
title: 宏平均值、精确率、召回率等
---
参考链接：[机器学习-精确率与召回率](https://zhuanlan.zhihu.com/p/56316526)


<template>
  <img :src="$withBase('/images/精确率与召回率.png')"alt="精确率与召回率">
</template>


+ 准确率

<template>
  <img :src="$withBase('/images/准确率.jpg')"alt="准确率">
</template>

+ 精确率(precision)：预测为正例的那些数据里预测正确的数据个数

<template>
  <img :src="$withBase('/images/精确率.jpg')"alt="精确率">
</template>

+ 召回率(recall)：真实为正例的那些数据里预测正确的数据个数

<template>
  <img :src="$withBase('/images/召回率.jpg')"alt="召回率">
</template>

+ 宏平均值F1: F1分数认为召回率和精确率同等重要

<template>
  <img :src="$withBase('/images/宏平均值.jpg')"alt="宏平均值">
</template>

+ F2分数: 认为召回率的重要程度是精确率的2倍，而F0.5分数认为召回率的重要程度是精确率的一半。计算公式为：

<template>
  <img :src="$withBase('/images/其余宏平均值.png')"alt="其余宏平均值">
</template>


> 多元分类器：应用多分类问题，把每个类别单独视为”正“，所有其它类型视为”负“ -->