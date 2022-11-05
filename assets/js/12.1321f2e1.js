(window.webpackJsonp=window.webpackJsonp||[]).push([[12],{391:function(v,_,t){"use strict";t.r(_);var e=t(51),a=Object(e.a)({},(function(){var v=this,_=v.$createElement,t=v._self._c||_;return t("ContentSlotsDistributor",{attrs:{"slot-key":v.$parent.slotKey}},[t("h2",{attrs:{id:"文章信息"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#文章信息"}},[v._v("#")]),v._v(" 文章信息")]),v._v(" "),t("ul",[t("li",[v._v("题目: GIS 局部放电时域波形图像的模式识别方法")]),v._v(" "),t("li",[v._v("作者: 刘创华，何 金，张春晖，曹 梦，宋晓博，朱旭亮")]),v._v(" "),t("li",[v._v("期刊: 电 力 系 统 及 其 自 动 化 学 报")]),v._v(" "),t("li",[v._v("关键词: 模式识别；图像；支持向量机；局部放电 ;")]),v._v(" "),t("li",[v._v("英文关键词: pattern recognition；image；support vector machine（SVM）；partial discharge")])]),v._v(" "),t("h2",{attrs:{id:"文章总结"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#文章总结"}},[v._v("#")]),v._v(" 文章总结")]),v._v(" "),t("p",[v._v("文章主要包括两部分：第一部分为 "),t("code",[v._v("GIS")]),v._v(" 局部放电时域波形图像数据采集，暂时可用性不高；第二部提供一个波形图像识别的案例分析，包含波形图像识别的全过程。")]),v._v(" "),t("h3",{attrs:{id:"波形图像分析过程"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#波形图像分析过程"}},[v._v("#")]),v._v(" 波形图像分析过程")]),v._v(" "),t("ol",[t("li",[v._v("图像预处理\n"),t("ul",[t("li",[v._v("图像分割: 根据图像特点对图像进行分割，去除通道、标识等无关信息，最终得到只含脉冲电压的图像。(如果选取合适数据集后，可直接绘制U-I轨迹，目前未知是否需要当前步骤)")]),v._v(" "),t("li",[v._v("图像灰度化: 彩色图像由 "),t("code",[v._v("R,G,B")]),v._v(" 三个通道的颜色分量构成，采用分量法对彩色图像进行灰度化处理")]),v._v(" "),t("li",[v._v("图像二值化: 人工选择阈值 T ，对灰度图进行全局二值化操作。")]),v._v(" "),t("li",[v._v("图像增强: 增加数据量的方法。"),t("strong",[v._v("通过滑动裁剪图像，人为扩大数据集。针对不同样本量的缺陷图像，选择不同的滑动步长，根据一张时域波形图像扩充得到不同数量的新样本")])]),v._v(" "),t("li",[v._v("图像压缩: 图像压缩为 "),t("code",[v._v("96*96")]),v._v(" 的图像")])])])]),v._v(" "),[t("img",{attrs:{src:v.$withBase("/images/processOfImageRecogbition.png"),alt:"图像识别模型"}})],v._v(" "),t("ol",{attrs:{start:"2"}},[t("li",[v._v("网络模型\n文章选用基于径向基函数的 "),t("code",[v._v("SVM")]),v._v(" 进行波形图像局部放电模式识别，通过获取学习样本，对输入数据进行函数映射，形成二次优化问题。然后用 "),t("code",[v._v("SMO")]),v._v(" 优化方法求解，得到参数，并确定 "),t("code",[v._v("DAG")]),v._v(" 分类器模型。最终将测试数据输入 "),t("code",[v._v("SVM")]),v._v(" 方程，得到识别结果。")])]),v._v(" "),t("h3",{attrs:{id:"模型比较"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#模型比较"}},[v._v("#")]),v._v(" 模型比较")]),v._v(" "),t("ol",[t("li",[v._v("与反向传播神经网络 "),t("code",[v._v("BPNN")]),v._v(" 进行比较")]),v._v(" "),t("li",[v._v("比较 "),t("code",[v._v("SVM")]),v._v(" 的参数——惩罚因子与 "),t("code",[v._v("γ")]),v._v(" 值对识别正确率的影响")])]),v._v(" "),t("h2",{attrs:{id:"学习与思考"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#学习与思考"}},[v._v("#")]),v._v(" 学习与思考")]),v._v(" "),t("p",[v._v("从该文中，可以学会图像预处理的全过程及新的两种可用于图像识别的算法: "),t("code",[v._v("SVM")]),v._v(" 算法及 "),t("code",[v._v("BPNN")]),v._v(" 算法。")]),v._v(" "),t("p",[v._v("非侵入式负荷识别中使用 "),t("code",[v._v("U-I")]),v._v(" 轨迹时利用的算法大多为 "),t("code",[v._v("CNN")]),v._v(" 算法，"),t("code",[v._v("SVM")]),v._v(" 算法及 "),t("code",[v._v("BPNN")]),v._v(" 算法用于非侵入式负荷识别时有何缺点，是否有改进空间？")])],2)}),[],!1,null,null,null);_.default=a.exports}}]);