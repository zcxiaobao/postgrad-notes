(window.webpackJsonp=window.webpackJsonp||[]).push([[10],{388:function(v,_,t){"use strict";t.r(_);var a=t(51),e=Object(a.a)({},(function(){var v=this,_=v.$createElement,t=v._self._c||_;return t("ContentSlotsDistributor",{attrs:{"slot-key":v.$parent.slotKey}},[t("h2",{attrs:{id:"文章信息"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#文章信息"}},[v._v("#")]),v._v(" 文章信息")]),v._v(" "),t("ul",[t("li",[v._v("题目: 基于 U-I 轨迹曲线精细化识别的非侵入式 居民负荷监测方法")]),v._v(" "),t("li",[v._v("作者: 汪颖，杨维，肖先勇，张姝")]),v._v(" "),t("li",[v._v("期刊: 电网技术")]),v._v(" "),t("li",[v._v("关键词: 智能电网；非侵入式负荷监测；U-I 轨迹；精细化识别；卷积神经网络 ;")]),v._v(" "),t("li",[v._v("英文关键词: smart grid; non-intrusive load monitoring; U-I trajectory; fine identification; convolution neural network")])]),v._v(" "),t("h2",{attrs:{id:"文章总结"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#文章总结"}},[v._v("#")]),v._v(" 文章总结")]),v._v(" "),t("p",[v._v("该文使用基于 "),t("code",[v._v("U-I")]),v._v(" 轨迹曲线精细化识别的非侵入式负荷监测方法，实现对用户负荷有效的非侵入式监测。")]),v._v(" "),t("ul",[t("li",[v._v("第一步，利用拟合优度检验进行事件检测，提取负荷的有功、无功功率变化量以及 "),t("code",[v._v("U-I")]),v._v(" 轨迹 "),t("code",[v._v("3")]),v._v(" 类特征。")]),v._v(" "),t("li",[v._v("第二部，进行负荷识别，负荷识别分为两个阶段：\n"),t("ul",[t("li",[v._v("第一阶段利用考虑初始优化的 "),t("code",[v._v("k-means")]),v._v(" 算法对有功、无功变化量进行聚类，实现负荷粗辨识；")]),v._v(" "),t("li",[v._v("第二阶段针对一阶段存在的识别盲区，构建 "),t("code",[v._v("CNN")]),v._v(" ，以二维 "),t("code",[v._v("U-I")]),v._v(" 轨迹图作为输入，通过 "),t("code",[v._v("CNN")]),v._v(" 自动提取轨线的有效特征，实现一阶段盲区负荷的精细化识别。最后，利用BLUED数据集进行方法有效性的验证。")])])])]),v._v(" "),t("p",[v._v("文章中验证算法使用的电器种类不多，大多为家用电器: 冰箱、空气压缩机、厨房切碎机、浴室顶灯、卧室灯、后院灯与热吹风，其中只有冰箱为"),t("strong",[v._v("多状态设备")]),v._v("。文章负荷识别的难点就在于后院灯、冰箱状态2、浴室顶灯。")]),v._v(" "),t("p",[v._v("评价指标采用精确率、召回率和宏平均值 "),t("code",[v._v("F1")])]),v._v(" "),t("p",[t("strong",[v._v("目前所看几篇文章中，都是采用上述评价指标来评价 "),t("code",[v._v("NILM")]),v._v(" 算法，需重点注意")])]),v._v(" "),t("blockquote",[t("p",[v._v("另外很多论文中出现了混淆矩阵，也需要重点把握一下")])]),v._v(" "),t("h2",{attrs:{id:"学习记录"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#学习记录"}},[v._v("#")]),v._v(" 学习记录")]),v._v(" "),t("h3",{attrs:{id:"基于拟合优度检验的事件检测"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#基于拟合优度检验的事件检测"}},[v._v("#")]),v._v(" 基于拟合优度检验的事件检测")]),v._v(" "),t("p",[v._v("拟合优度检验 "),t("code",[v._v("(goodness of fitness， GOF)")]),v._v("，基于非参数的假设检验，是变点检测方法。")]),v._v(" "),t("ul",[t("li",[v._v("首先提出假设: 用电器未投切钱的功率满足 "),t("code",[v._v("G0(x)")]),v._v(" 分布")]),v._v(" "),t("li",[v._v("通过滑动窗口公式计算检验统计量")])]),v._v(" "),[t("img",{attrs:{src:v.$withBase("/images/gof.png"),alt:"CNN 分类器的搭建"}})],v._v(" "),t("ul",[t("li",[v._v("通过卡方表查询数值后，根据上面公式进行判断，若采样数据拒绝假设，则出现投切事件")]),v._v(" "),t("li",[v._v("判断投切事件是否为用电事件")])]),v._v(" "),t("blockquote",[t("p",[v._v("投切: 电器的开关"),t("br"),v._v(" "),t("code",[v._v("X2")]),v._v(" 卡方分布，通过给定的 "),t("code",[v._v("n、a")]),v._v(" 可以去卡方表查询数值")])]),v._v(" "),t("h3",{attrs:{id:"k-means"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#k-means"}},[v._v("#")]),v._v(" k-means")]),v._v(" "),t("p",[t("code",[v._v("k-means")]),v._v(" 算法的 "),t("code",[v._v("k")]),v._v(" 个初始化质心位置，对最后的聚类结果影响很大，因此文章对 k-means 算法的质心位置进行"),t("strong",[v._v("初始化")]),v._v("。")]),v._v(" "),t("h3",{attrs:{id:"二阶段负荷识别"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#二阶段负荷识别"}},[v._v("#")]),v._v(" 二阶段负荷识别")]),v._v(" "),t("p",[v._v("二阶段负荷识别基于 "),t("code",[v._v("CNN")]),v._v(" 的图像分类器，将 "),t("code",[v._v("U-I")]),v._v(" 轨迹图作为输入。")]),v._v(" "),[t("img",{attrs:{src:v.$withBase("/images/20211119cnn.png"),alt:"gof计算"}})],v._v(" "),t("h2",{attrs:{id:"文章优缺点"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#文章优缺点"}},[v._v("#")]),v._v(" 文章优缺点")]),v._v(" "),t("h3",{attrs:{id:"优点"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#优点"}},[v._v("#")]),v._v(" 优点")]),v._v(" "),t("ol",[t("li",[t("p",[v._v("不同于上几篇文献使用一种方法进行负荷识别，该文使用两阶段两个方法，第一阶段粗识别，识别准确率高，第二阶段对第一阶段盲区进行精细识别。 两个阶段优势互补，一阶段提升二阶段分类器的训练效率与分类准确性；二阶段实现一阶段识别盲区用电器的精细化分类。")])]),v._v(" "),t("li",[t("p",[v._v("这提供了一个很好的思路，"),t("strong",[v._v("单个方法实现负荷识别时，总存在各式各样的缺陷，那是否可以组合几个方法来实现更全面的负荷识别")])])])]),v._v(" "),t("h3",{attrs:{id:"缺点"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#缺点"}},[v._v("#")]),v._v(" 缺点")]),v._v(" "),t("ol",[t("li",[v._v("文章并没有提出涉及识别第一阶段盲区的相关知识，难道是通过分析第一阶段的准确率，人工确认？那万一电器数量增多，算法的效率是否依旧高效，"),t("strong",[v._v("先打个问号")])]),v._v(" "),t("li",[v._v("文章在检验算法的正确性时，一阶段使用 "),t("code",[v._v("94")]),v._v(" 个样本，二阶段使用 "),t("code",[v._v("52")]),v._v(" 个样本，样本数量是否过少？")])]),v._v(" "),t("h2",{attrs:{id:"展望与收获"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#展望与收获"}},[v._v("#")]),v._v(" 展望与收获")]),v._v(" "),t("ol",[t("li",[v._v("文章中直接使用 "),t("code",[v._v("U-I")]),v._v(" 轨迹图像作为 "),t("code",[v._v("CNN")]),v._v(" 模型输入，是否有识别图像更好的算法？")]),v._v(" "),t("li",[v._v("文章中指出 "),t("code",[v._v("U-I")]),v._v(" 轨迹图像的量化比较复杂，"),t("code",[v._v("U-I")]),v._v(" 轨迹图量化后特征的准确性是否会提高？如何进行 "),t("code",[v._v("U-I")]),v._v(" 轨迹图的量化")])]),v._v(" "),t("blockquote",[t("p",[v._v("《基于改进kNN算法的非侵入式负荷识别方法》: 提出二值化 "),t("code",[v._v("U-I")])])]),v._v(" "),t("ol",{attrs:{start:"3"}},[t("li",[v._v("多种方法组合来进行 "),t("code",[v._v("NILM")]),v._v(" 负荷监测，何种算法合适？阶段分界处应该如何识别上一阶段的盲区？")]),v._v(" "),t("li",[v._v("若电器中存在很多多状态电器，"),t("code",[v._v("k-means")]),v._v(" 算法的准确率如何？")])])],2)}),[],!1,null,null,null);_.default=e.exports}}]);