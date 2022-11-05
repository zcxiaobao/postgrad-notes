(window.webpackJsonp=window.webpackJsonp||[]).push([[41],{419:function(t,v,_){"use strict";_.r(v);var l=_(51),e=Object(l.a)({},(function(){var t=this,v=t.$createElement,_=t._self._c||v;return _("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[_("h2",{attrs:{id:"大致流程"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#大致流程"}},[t._v("#")]),t._v(" 大致流程")]),t._v(" "),_("p",[t._v("经过多篇文献及多周的思考，对于使用 V-I 轨迹作为负荷印记，并且使用图像识别的方法，大致有了几点思路:")]),t._v(" "),_("ol",[_("li",[t._v("事件探测与特征提取: 这部分是必不可少的，通过这两部分提取出投切事件的 V-I 信息，但目前还未选取好这两部分使用的方法")]),t._v(" "),_("li",[t._v("提取数据的预处理:\n"),_("ul",[_("li",[t._v("标准化")]),t._v(" "),_("li",[t._v("去噪")]),t._v(" "),_("li",[t._v("插值等")])])]),t._v(" "),_("li",[t._v("经过预处理将 V-I 绘制成轨迹图，轨迹图初步应为灰度图或者说单通道图，如果不经处理，蕴含的特征信息维度太少，因此需要想方设法为 V-I 轨迹添加合理的识别特征。\n"),_("ul",[_("li",[_("strong",[t._v("二值化映射")]),t._v("，将轨迹图转化为 2N * 2N 矩阵信息，二值化映射的效果非常不错，目前该部分应该作为必备的步骤之一(N 参数选取是个问题)")]),t._v(" "),_("li",[t._v("二值化映射后结合 HSV 颜色空间，通过公式将二值图转化为彩色图")]),t._v(" "),_("li",[t._v("单通道图像通过复制 -> RGB 三通道图像")]),t._v(" "),_("li",[t._v("有篇文献提供了一种使用"),_("strong",[t._v("递归图")]),t._v("将一维信号的时间序列转换为二维图像，但具体还没理解。")]),t._v(" "),_("li",[t._v("其余灰度图彩色化方案")])])])]),t._v(" "),_("blockquote",[_("p",[t._v("目前的初步想法是颜色结合 V-I 轨迹图形，其他可结合的维度正在思考中。")])]),t._v(" "),_("ol",{attrs:{start:"4"}},[_("li",[t._v("负荷识别: 初步方案是使用基于 ImageNet 训练的 AlexNet、GoogleNet、VCG 等进行迁移学习")])]),t._v(" "),_("blockquote",[_("p",[t._v("ECG 文献中提到了 DenseNet 具有更低的拟合，有可能会作为更好的选择。")])]),t._v(" "),_("h2",{attrs:{id:"计划"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#计划"}},[t._v("#")]),t._v(" 计划")]),t._v(" "),_("p",[t._v("目前的计划主要是开始尝试上述流程的可能性及准确性，同时广泛阅读 ECG 方面的文献，寻求其他轨迹处理方案。")])])}),[],!1,null,null,null);v.default=e.exports}}]);