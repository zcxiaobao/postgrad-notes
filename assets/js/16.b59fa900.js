(window.webpackJsonp=window.webpackJsonp||[]).push([[16],{399:function(t,a,e){"use strict";e.r(a);var v=e(51),_=Object(v.a)({},(function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[e("h2",{attrs:{id:"文章信息"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#文章信息"}},[t._v("#")]),t._v(" 文章信息")]),t._v(" "),e("ul",[e("li",[t._v("题目: 基于聚类特征及 seq2seq 深度 CNN 的家电负荷识别方法研究")]),t._v(" "),e("li",[t._v("作者: 汪繁荣，向堃，吴铁洲")]),t._v(" "),e("li",[t._v("期刊: 电测与仪表")]),t._v(" "),e("li",[t._v("关键词: 非侵入式负荷分解；深度学习；卷积神经网络；序列到序列；特征提取；数据挖掘")]),t._v(" "),e("li",[t._v("英文关键词: non-intrusive load decomposition, deep learning, convolutional neural network, sequence to sequence, eature extraction, data mining")])]),t._v(" "),e("h2",{attrs:{id:"文章摘要"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#文章摘要"}},[t._v("#")]),t._v(" 文章摘要")]),t._v(" "),e("p",[t._v("从文章摘要来看，我们可以提炼出以下要点:")]),t._v(" "),e("ol",[e("li",[t._v("文章首先利用改进迭代"),e("strong",[t._v("K 均值聚类")]),t._v("提取用电设备运行状态建立负荷特征集")]),t._v(" "),e("li",[t._v("将特征集输入构造的序列到序列的一维深层卷积神经网络模型以及序列到序列的单、双向长短时记忆网络等模型中进行负荷分解挖掘各设备运行状态")]),t._v(" "),e("li",[t._v("通过 REFITPowerData 数据集进行验证，准确率达到 93%")])]),t._v(" "),e("blockquote",[e("p",[t._v("第二点没读懂。。。")])]),t._v(" "),e("h2",{attrs:{id:"用电设备负荷特征集建立"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#用电设备负荷特征集建立"}},[t._v("#")]),t._v(" 用电设备负荷特征集建立")]),t._v(" "),e("h3",{attrs:{id:"设备状态特征提取"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#设备状态特征提取"}},[t._v("#")]),t._v(" 设备状态特征提取")]),t._v(" "),e("blockquote",[e("p",[t._v("使用聚类方法，选择合适的簇中心数目非常重要，簇中心数目过少会造成聚类不彻底，导致用电设备提取不全；簇中心数目过多则会使用电设备运行状态类别增加，进而增加分解算法的复杂度。")])]),t._v(" "),e("p",[t._v("文章在在 k-means 聚类算法的基础上利用k-means++算法进行簇中心初始化并引入轮廓值指标以筛选更加有效的聚类数目，然后迭代执行避免结果陷入局部最优，最后使用新的初始簇中心位置寻求更为合理的聚类方案。\n"),e("strong",[t._v("第二次见到聚类算法")])]),t._v(" "),e("h3",{attrs:{id:"数据预处理及设备负荷特征的挖掘"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#数据预处理及设备负荷特征的挖掘"}},[t._v("#")]),t._v(" 数据预处理及设备负荷特征的挖掘")]),t._v(" "),e("p",[t._v("文章使用 REFITPowerData 数据集。")]),t._v(" "),e("p",[t._v("文章取各用电设备有功功率数据中前100万个采样点数据并将各个用电设备运行状态的"),e("strong",[t._v("有功功率消耗数据提出且剔除相同时间的功率消耗数据")]),t._v("，设立提取参数以保证数据的有效性。")]),t._v(" "),e("blockquote",[e("p",[t._v("加粗区域不理解，有功功率消耗数据什么意思？")])]),t._v(" "),e("p",[t._v("通过聚类效果分析，取 K = 4")]),t._v(" "),e("h2",{attrs:{id:"深度学习与非侵入式负荷分解"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#深度学习与非侵入式负荷分解"}},[t._v("#")]),t._v(" 深度学习与非侵入式负荷分解")]),t._v(" "),e("blockquote",[e("p",[t._v("卷积神经网络在图像处理领域一直以来有出色的表现，处理二维数据时具有很大优势")])]),t._v(" "),e("p",[t._v("文章将输入的一维数据(总有功功率)进行增维扩增至4维矩阵作为模型的输入，完成数据转化，但实质上数值没有改变。下面是模型流程图。")]),t._v(" "),[e("img",{attrs:{src:t.$withBase("/images/0128kmean-cnn.png"),alt:"叠加原理"}})]],2)}),[],!1,null,null,null);a.default=_.exports}}]);