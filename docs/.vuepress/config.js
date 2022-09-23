module.exports = {
  base: "/postgrad-notes/",
  lang: "zh-CN",
  title: "文献阅读记录",
  // description: "Vue-powered Static Site Generator",
  configureWebpack: {
    resolve: {
      alias: {
        "@public": "./public",
      },
    },
  },
  themeConfig: {
    search: false,
    nav: [
      { text: "中文文献", link: "/chinese/" },
      { text: "外文文献", link: "/english/" },
      { text: "外文翻译", link: "/translate/" },
      { text: "词汇积累", link: "/vocabulary/" },
      { text: "知识积累", link: "/knowledge/" },
    ],
    sidebar: {
      plan: [
        {
          collapsable: false,
          children: ["20220115", "20220121"],
        },
      ],
      "/chinese/": [
        {
          collapsable: false,
          children: [
            "20211105",
            "20211112",
            "20211119",
            "20211224",
            "20211224-2",
            "20220101",
            "20220114",
            "20220128-1",
            "20220128-2",
            "20220218-1",
            "20220218-2",
          ],
        },
      ],
      "/english/": [
        {
          collapsable: false,
          children: [
            "20211101",
            "20211224",
            "20220121",
            "20220219",
            "20220225-1",
            "20220225-2",
            "20220301",
            "20220304",
            "20220311-1",
            "20220311-2",
            "20220311-3",
            "20220317",
            "20220324",
            "20220325",
            "20220331",
            "20220408",
            "20220427",
            "20220428",
            "20220429-1",
            "20220429-2",
            "20220506",
            "20220513",
            "20220708",
            "20220722",
            "20220729-1",
            "20220729-2",
            "20220812",
            "20220909",
          ],
        },
      ],
      "/translate/": [
        {
          collapsable: false,
          children: ["20211101"],
        },
      ],
      "/progress/": [
        {
          collapsable: false,
          children: ["20220506", "20220602"],
        },
      ],
      "/knowledge/": [
        {
          collapsable: false,
          children: ["rnn", "TPFPFNTNF1"],
        },
      ],
      "/work/": [
        {
          collapsable: false,
          children: ["20220708", "20220722", "20220729", "20220812"],
        },
      ],
      "/code/": [
        {
          collapsable: false,
          children: [
            "20220818",
            "20220819",
            "20220819-2",
            "20220909",
            "20220916",
          ],
        },
      ],
      "/other/": [
        {
          collapsable: false,
          children: ["20220710"],
        },
      ],
      // "/": [""],
    },
  },
};
