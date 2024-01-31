import { defineUserConfig } from "vuepress";
import type { DefaultThemeOptions } from "vuepress";
import recoTheme from "vuepress-theme-reco";

export default defineUserConfig({
  title: "泽兮的blooog",
  description: "welcome to paly around ~",
  base:'/',
  head: [
    ['link', { rel: 'icon', href: '/logo.png' }]
  ],
  theme: recoTheme({
    style: "@vuepress-reco/style-default",
    logo: "/logo.png",
    author: "泽兮",
    authorAvatar: "/head.png",
    docsRepo: "https://github.com/dream-worker",
    docsBranch: "main",
    docsDir: "example",
    lastUpdatedText: "123456",
    // series 为原 sidebar
    series: {
      "/docs/theme-reco/": [
        {
          text: "module one",
          children: ["home", "theme"],
        },
        {
          text: "module two",
          children: ["api", "plugin"],
        },
      ],
    },
    navbar: [
      { text: "Home", link: "/" },
      { text: "Categories", link: "/blogs/index/" },
      { text: "Tags", link: "/tags/tag1/1/" },
      {
        text: "Docs",
        children: [
          { text: "vuepress-reco", link: "/docs/theme-reco/theme" },
          { text: "vuepress-theme-reco", link: "/blogs/other/guide" },
        ],
      },
    ],
    bulletin: {
      body: [
        {
          type: "text",
          content: `🎉🎉🎉 👏欢迎来到泽兮的blooog～将在这里开辟一处空间，分门别类的收纳自己感兴趣的小东西。如果碰巧你也喜欢，那就很美好啦❤️`,
          style: "font-size: 12px;",
        },
        {
          type: "hr",
        },
        {
          type: "title",
          content: "找到我",
        },
        {
          type: "text",
          content: `
          <ul>
            <li>方式一：本站留言见</li>
            <li>方式二：<a href='https://github.com/dream-worker'>Github<a/></li>
          </ul>`,
          style: "font-size: 12px;",
        },
        {
          type: "hr",
        },
        {
          type: "title",
          content: "版本日志",
        },
        {
          type: "text",
          content: `
          <ul>
            <li><a href="/blogs/version/index.md">已更新<a/></li>
            <li><a href="/blogs/version/index.md">新建议<a/></li>
          </ul>`,
          style: "font-size: 12px;",
        },
        {
          type: "hr",
        },
        {
          type: "buttongroup",
          children: [
            {
              text: "打赏",
              link: "/docs/others/donate.html",
            },
          ],
        },
      ],
    },
    commentConfig: {
      type: 'valine',
      // options 与 1.x 的 valineConfig 配置一致
      options: {
        // appId: 'xxx',
        // appKey: 'xxx',
        // placeholder: '填写邮箱可以收到回复提醒哦！',
        // verify: true, // 验证码服务
        // notify: true,
        // recordIP: true,
        // hideComments: true // 隐藏评论
      },
    },
  }),
  // debug: true,
});
