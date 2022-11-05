(window.webpackJsonp=window.webpackJsonp||[]).push([[37],{415:function(v,_,a){"use strict";a.r(_);var t=a(51),e=Object(t.a)({},(function(){var v=this,_=v.$createElement,a=v._self._c||_;return a("ContentSlotsDistributor",{attrs:{"slot-key":v.$parent.slotKey}},[a("h2",{attrs:{id:"文章信息"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#文章信息"}},[v._v("#")]),v._v(" 文章信息")]),v._v(" "),a("ul",[a("li",[v._v("题目: Non-intrusive Load Monitoring by V oltage-Current Trajectory Enabled Transfer Learning")]),v._v(" "),a("li",[v._v("作者: Y anchi Liu, Xue Wang, Senior Member , IEEE, Wei Y ou")]),v._v(" "),a("li",[v._v("关键词: Non-intrusive load monitoring, appliance recognition, color encoding, load signature, transfer learning.")])]),v._v(" "),a("h2",{attrs:{id:"二值化映射"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#二值化映射"}},[v._v("#")]),v._v(" 二值化映射")]),v._v(" "),a("p",[v._v("看到第三部分，发现二值化映射算法与前面文献有点差异。")]),v._v(" "),a("p",[v._v("二值化映射可以把轨迹转移到矩阵，如果矩阵的元素与轨迹相交，它们将被分配一个与未相交元素的值相反的真值。")]),v._v(" "),a("ol",[a("li",[v._v("获取电器负载的电压和电流波形")]),v._v(" "),a("li",[v._v("获取电流电压的最大绝对值，作为规范化标准")]),v._v(" "),a("li",[v._v("将电流和电压进行均匀划分，"),a("code",[v._v("∆i=imax/N, ∆v=vmax/N")]),v._v("，求解出每个单元格的长度和宽度，可以得出一个 "),a("code",[v._v("2N * 2N")]),v._v(" 的矩阵。")]),v._v(" "),a("li",[v._v("对原始轨迹进行插值，保证二值化映射后曲线的连续性。")]),v._v(" "),a("li",[v._v("绘制插值轨迹点到 "),a("code",[v._v("2N*2N")]),v._v(" 网络单元")])]),v._v(" "),[a("img",{attrs:{src:v.$withBase("/images/0228binary-loop.png"),alt:"叠加原理"}})],v._v(" "),a("blockquote",[a("p",[v._v("二值化映射不仅可以把轨迹信息转移到矩阵中，而且没有损失计算复杂度，同时减缓设备负载的小波动。")])]),v._v(" "),a("h2",{attrs:{id:"颜色编码"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#颜色编码"}},[v._v("#")]),v._v(" 颜色编码")]),v._v(" "),a("blockquote",[a("p",[v._v("二值图像只能传递轨迹的形状信息，对于负荷分类精度不利，因此如果使用 V-I 轨迹，想提高负荷识别率，应寻找算法或者方法尽可能使用轨迹特征。")])]),v._v(" "),a("p",[v._v("文章将 "),a("code",[v._v("HSV")]),v._v(" 颜色将 "),a("code",[v._v("V-I")]),v._v(" 轨迹彩色化。"),a("strong",[v._v("相当于给 V-I 轨迹增添了颜色维度")]),v._v("。")]),v._v(" "),a("h3",{attrs:{id:"h"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#h"}},[v._v("#")]),v._v(" H")]),v._v(" "),a("p",[v._v("为了捕捉 "),a("code",[v._v("V-I")]),v._v(" 轨迹的核心特征，"),a("code",[v._v("hue")]),v._v(" 来表示 "),a("code",[v._v("V-I")]),v._v(" 轨迹方向，其值定义为:")]),v._v(" "),[a("img",{attrs:{src:v.$withBase("/images/0228HUE.png"),alt:"叠加原理"}})],v._v(" "),a("p",[a("code",[v._v("arg")]),v._v(" 代表 "),a("code",[v._v("arctan")]),v._v(" 函数，可以求出 "),a("code",[v._v("0-360")]),v._v(" 角度，然后把角度转化成坐标，绘制到 "),a("code",[v._v("2N*2N")]),v._v(" 网格上(转换公式没看懂)——见下图a")]),v._v(" "),[a("img",{attrs:{src:v.$withBase("/images/0228Hue-cod.png"),alt:"叠加原理"}})],v._v(" "),a("h3",{attrs:{id:"s"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#s"}},[v._v("#")]),v._v(" S")]),v._v(" "),a("p",[v._v("文献使用 "),a("code",[v._v("Fryze")]),v._v(" 功率理论将负载电流分为有功和无功分量，只有有功分量可用于绘制 "),a("code",[v._v("V-I")]),v._v(" 轨迹，这导致了有功分量和无功分量组件之间信息的丢失，因此文章使用 "),a("code",[v._v("saturation")]),v._v(" 来表示有功功率和非有功功率的比率(功率因数)——具体见下图b")]),v._v(" "),[a("img",{attrs:{src:v.$withBase("/images/0228baohedu.png"),alt:"叠加原理"}})],v._v(" "),a("p",[a("code",[v._v("K")]),v._v(" 代表采样点个数，"),a("code",[v._v("Papparent")]),v._v(" 代表总视在功率，"),a("code",[v._v("Vrms/Irms")]),v._v(" 代表电流和电压的有效值。")]),v._v(" "),a("h3",{attrs:{id:"v"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#v"}},[v._v("#")]),v._v(" V")]),v._v(" "),a("p",[a("code",[v._v("HSV")]),v._v(" 中的另一个颜色属性 "),a("code",[v._v("V")]),v._v(" 用于表示 "),a("code",[v._v("V-I")]),v._v(" 轨迹的可重复性，使用 "),a("code",[v._v("M")]),v._v(" 个电流和电压的周期波形生成的二值图像 "),a("code",[v._v("Wm")]),v._v("，"),a("code",[v._v("V")]),v._v(" 计算如下(威慑这么计算，没搞懂)——见下图c")]),v._v(" "),[a("img",{attrs:{src:v.$withBase("/images/0228Vcalcu.png"),alt:"叠加原理"}})],v._v(" "),a("h3",{attrs:{id:"链接"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#链接"}},[v._v("#")]),v._v(" 链接")]),v._v(" "),a("p",[v._v("为了创建人类可感知的图像，矩阵 "),a("code",[v._v("H S V")]),v._v(" 沿第三维联机玩，色调饱和度值转换为等效的红-绿-蓝，最终绘制图见下图d")]),v._v(" "),[a("img",{attrs:{src:v.$withBase("/images/0228hsv-trans.png"),alt:"叠加原理"}})],v._v(" "),a("h2",{attrs:{id:"总结"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#总结"}},[v._v("#")]),v._v(" 总结")]),v._v(" "),a("p",[v._v("本周主要详细的阅读了文章的二值化映射及颜色编码部分，虽然还有几个公式未能透彻理解，但不得不说利用颜色编码将V-I轨迹与计算机视觉挂钩，不止为V-I轨迹增添了一种判别维度，还提供了一种使用迁移学习的好思路。")]),v._v(" "),a("p",[v._v("是否还有别的特征将V-I轨迹与大型数据集ImageNet挂钩，是后续要考虑的重点问题。")])],2)}),[],!1,null,null,null);_.default=e.exports}}]);