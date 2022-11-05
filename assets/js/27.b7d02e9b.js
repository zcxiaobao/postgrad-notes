(window.webpackJsonp=window.webpackJsonp||[]).push([[27],{404:function(e,t,a){"use strict";a.r(t);var r=a(51),s=Object(r.a)({},(function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[a("h2",{attrs:{id:"工作进度"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#工作进度"}},[e._v("#")]),e._v(" 工作进度")]),e._v(" "),a("h3",{attrs:{id:"成功将-ap-聚类集合到网络结构中"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#成功将-ap-聚类集合到网络结构中"}},[e._v("#")]),e._v(" 成功将 AP 聚类集合到网络结构中")]),e._v(" "),a("p",[e._v("数据传入网络前，先经过 AP 聚类，会提高识别准确率，对于多状态电器比较有用。")]),e._v(" "),a("p",[e._v("AP 聚类难点在于 preference 参数的选择，preference 参数决定聚类中心的偏向，通过多次调整，将 preference 由固定的数字修正为")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("preference = N / w * (np.min(S) + np.median(S))\n\n-- N 传入的总像素点数 = 3 * w * w\n-- w 图像的大小\n-- S 基于负欧几里得范数的相似矩阵\n-- min/median 求最小值及中位数\n")])])]),a("p",[e._v("基于该 preference 参数，多状态电器会被分成几类，开关型电器仍保持为一类，PLAID 数据集具有较大的类内相关性，聚类效果最为明显。")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("Fan 分为两类\nHairDryer 分为两类\nLaptop 分为两类\n")])])]),a("h3",{attrs:{id:"简化-resnet18"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#简化-resnet18"}},[e._v("#")]),e._v(" 简化 ResNet18")]),e._v(" "),a("p",[e._v("ResNet18 的层数过多，参数量也特别大，使用的数据集数据量并不大，调试过程中发现数据出现过拟合现象。为了减轻过拟合现象，本周做了一系列努力。")]),e._v(" "),a("ol",[a("li",[e._v("添加正则化: 通过优化器的 weight_decay 参数")]),e._v(" "),a("li",[e._v("在 resnet 的基础上进行重写，减少卷积核的个数，删除掉最后一个残差块，添加一定的 dropout")])]),e._v(" "),a("h3",{attrs:{id:"测试-vi-wrg-特征"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#测试-vi-wrg-特征"}},[e._v("#")]),e._v(" 测试 VI/WRG 特征")]),e._v(" "),a("p",[e._v("设定同样的条件，将 VI 和 WRG 特征复制三次生成三通道图，传入神经网络中，最后与融合特征进行对比，经过多次测试，融合特征的识别率在 PLAID 和 WHITED 都可以保持最高的识别率。")])])}),[],!1,null,null,null);t.default=s.exports}}]);