(window.webpackJsonp=window.webpackJsonp||[]).push([[22],{401:function(t,s,a){"use strict";a.r(s);var n=a(51),p=Object(n.a)({},(function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("p",[t._v("近几周在网上大致调研了一些 AI 框架，目前来看 pytorch 的确强于 tensorflow，因此暂时决定选用 pytorch 来实现图像识别部分。上来直接图像识别跨度过大，本周首先对 Mnist 手写数据集进行分类。")]),t._v(" "),a("p",[t._v("Mnist 是手写的阿拉伯数字数据集，其中分为四个子集。")]),t._v(" "),a("ul",[a("li",[t._v("训练集文件: train_images_idx3_ubyte_file")]),t._v(" "),a("li",[t._v("训练集标签文件: train_labels_idx1_ubyte_file")]),t._v(" "),a("li",[t._v("测试集文件: test_images_idx3_ubyte_file")]),t._v(" "),a("li",[t._v("测试集标签文件: test_labels_idx1_ubyte_file")])]),t._v(" "),a("p",[t._v("每张手写图片的像素为 "),a("code",[t._v("(28*28)")]),t._v("，像素点比较少，因此比较适合于初学。")]),t._v(" "),a("h3",{attrs:{id:"数据集解析"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#数据集解析"}},[t._v("#")]),t._v(" 数据集解析")]),t._v(" "),a("p",[t._v("数据集解析采用了"),a("a",{attrs:{href:"https://herok.blog.csdn.net/article/details/103324368",target:"_blank",rel:"noopener noreferrer"}},[t._v("MNIST 数据集下载与读取"),a("OutboundLink")],1),t._v("的代码。数据读取是成功的，但该代码读取的数据最终测试有一些数据格式问题，暂且还没有想明白原因")]),t._v(" "),a("ul",[a("li",[t._v("标签文件的数据应该为 int64 格式，读取格式为 float64")])]),t._v(" "),a("div",{staticClass:"language-py extra-class"},[a("pre",{pre:!0,attrs:{class:"language-py"}},[a("code",[t._v("y_train "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" y_train"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("astype"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("np"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("int64"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\ny_valid "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" y_valid"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("astype"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("np"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("int64"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])]),a("ul",[a("li",[t._v("数据文件读取格式为 float64，后续搭建网络要求为 double")])]),t._v(" "),a("div",{staticClass:"language-py extra-class"},[a("pre",{pre:!0,attrs:{class:"language-py"}},[a("code",[t._v("torch"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("set_default_tensor_type"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("torch"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("DoubleTensor"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])]),a("ul",[a("li",[t._v("数据文件为二维格式即 "),a("code",[t._v("(28*28)")]),t._v("，平铺为 (784,)")])]),t._v(" "),a("h3",{attrs:{id:"转化为-tensor-数据"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#转化为-tensor-数据"}},[t._v("#")]),t._v(" 转化为 tensor 数据")]),t._v(" "),a("p",[t._v("pytorch 中要求数据类型应该为 tensor")]),t._v(" "),a("div",{staticClass:"language-py extra-class"},[a("pre",{pre:!0,attrs:{class:"language-py"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" torch\nx_train"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("y_train"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("x_valid"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("y_valid "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("map")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("torch"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("tensor"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("x_train"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("y_train"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("x_valid"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("y_valid"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])]),a("p",[t._v("然后利用 DataLoader 转化数据，DataLoader 部分应该就是后续融合算法重点需要研究的。")]),t._v(" "),a("blockquote",[a("p",[t._v("这里先暂时使用 TensorDataset")])]),t._v(" "),a("div",{staticClass:"language-py extra-class"},[a("pre",{pre:!0,attrs:{class:"language-py"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("from")]),t._v(" torch"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("utils"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("data "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" TensorDataset\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("from")]),t._v(" torch"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("utils"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("data "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" DataLoader\ntrain_ds "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" TensorDataset"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("x_train"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" y_train"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\nvalid_ds "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" TensorDataset"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("x_valid"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" y_valid"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("def")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("get_data")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("train_ds"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" valid_ds"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" bs"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("\n        DataLoader"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("train_ds"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" batch_size"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("64")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" shuffle"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("True")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n        DataLoader"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("valid_ds"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" batch_size"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("128")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])]),a("h3",{attrs:{id:"模型创建"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#模型创建"}},[t._v("#")]),t._v(" 模型创建")]),t._v(" "),a("p",[t._v("先初步设计一个比较简单的三层神经网络模型，输出值有 0-9 10 个，因此最终输出层为 10。输入值为 (60000,784)")]),t._v(" "),a("p",[t._v("第一层: (784, 128)\n第二层: (128, 256)\n第三层: (256, 10)")]),t._v(" "),a("div",{staticClass:"language-py extra-class"},[a("pre",{pre:!0,attrs:{class:"language-py"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" torch"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("nn"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("functional "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("as")]),t._v(" F\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("from")]),t._v(" torch "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" nn\nloss_func "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" F"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("cross_entropy\n\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("def")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("model")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("xb"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" xb"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("mm"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("weights"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),t._v(" bias\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("from")]),t._v(" torch "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" nn\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("class")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Mnist_NN")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("nn"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("Module"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("def")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("__init__")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("self"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("super")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("__init__"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 隐层 1")]),t._v("\n        self"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("hidden1 "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" nn"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("Linear"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("784")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("128")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n        self"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("hidden2 "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" nn"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("Linear"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("128")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("256")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n        self"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("out "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" nn"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("Linear"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("256")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("10")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# dropout")]),t._v("\n        self"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("dropout "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" nn"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("Dropout"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("0.5")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("def")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("forward")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("self"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" x"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n        x "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" F"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("relu"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("self"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("hidden1"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("x"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n        x "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" self"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("dropout"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("x"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n        x "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" F"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("relu"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("self"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("hidden2"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("x"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n        x "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" self"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("dropout"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("x"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n        x "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" self"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("out"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("x"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" x\n")])])]),a("h3",{attrs:{id:"创建优化器"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#创建优化器"}},[t._v("#")]),t._v(" 创建优化器")]),t._v(" "),a("p",[t._v("一般优化器会有两个选择: SGD Adam，这里使用 Adam，两者的区别还没有完全区分好，详情参考: "),a("a",{attrs:{href:"https://blog.csdn.net/dbdxwyl/article/details/122209565",target:"_blank",rel:"noopener noreferrer"}},[t._v("优化算法 SGD 与 Adam"),a("OutboundLink")],1)]),t._v(" "),a("div",{staticClass:"language-py extra-class"},[a("pre",{pre:!0,attrs:{class:"language-py"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("from")]),t._v(" torch "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" optim\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("def")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("get_model")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n    model "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" Mnist_NN"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# lr 学习率")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 更新全部参数")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" model"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" optim"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("Adam"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("model"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("parameters"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" lr"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("0.001")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])]),a("h3",{attrs:{id:"定义迭代函数"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#定义迭代函数"}},[t._v("#")]),t._v(" 定义迭代函数")]),t._v(" "),a("div",{staticClass:"language-py extra-class"},[a("pre",{pre:!0,attrs:{class:"language-py"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("def")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("loss_batch")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("model"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("loss_func"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" xb"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" yb"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" opt"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("None")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n    loss "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" loss_func"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("model"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("xb"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" yb"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" opt "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("is")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("not")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("None")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n        loss"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("backward"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n        opt"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("step"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 很重要，pytorch 默认累计梯度")]),t._v("\n        opt"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("zero_grad"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" loss"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("item"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("len")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("xb"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])]),a("h3",{attrs:{id:"fit-函数"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#fit-函数"}},[t._v("#")]),t._v(" fit 函数")]),t._v(" "),a("div",{staticClass:"language-py extra-class"},[a("pre",{pre:!0,attrs:{class:"language-py"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# steps 迭代次数")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("def")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("fit")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("steps"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" model"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("loss_func"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" opt"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" train_dl"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" valid_dl"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("for")]),t._v(" step "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("in")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("range")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("steps"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 训练模式 更新参数")]),t._v("\n        model"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("train"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("for")]),t._v(" xb"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" yb "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("in")]),t._v(" train_dl"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n            loss_batch"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("model"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" loss_func"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" xb"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" yb"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" opt"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 验证")]),t._v("\n        model"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("eval")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("with")]),t._v(" torch"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("no_grad"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n            "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# zip")]),t._v("\n            losses"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" nums "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("zip")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("\n                "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("*")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("loss_batch"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("model"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" loss_func"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" xb"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" yb"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("for")]),t._v(" xb"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" yb "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("in")]),t._v(" valid_dl"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n            "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 计算平均损失")]),t._v("\n        val_loss "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" np"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("sum")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("np"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("multiply"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("losses"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("nums"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v(" np"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("sum")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("nums"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("print")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"当前 step"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),a("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("str")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("step"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"验证集损失"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),a("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("str")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("val_loss"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])]),a("h3",{attrs:{id:"分类效果"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#分类效果"}},[t._v("#")]),t._v(" 分类效果")]),t._v(" "),a("div",{staticClass:"language-py extra-class"},[a("pre",{pre:!0,attrs:{class:"language-py"}},[a("code",[t._v("train_dl"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" valid_dl "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" get_data"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("train_ds"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" valid_ds"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("64")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\nmodel"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("opt "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" get_model"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\nfit"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("100")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" model"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" loss_func"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" opt"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" train_dl"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" valid_dl"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])]),a("p",[t._v("分类效果并不算好，下周尝试优化一下。")])])}),[],!1,null,null,null);s.default=p.exports}}]);