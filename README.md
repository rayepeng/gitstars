![](public/brand.png)

Github 作为开发者的第一社交平台，拥有数不胜数的优秀开源项目，给工作和学习带来巨大方便，遇到自己需要或是喜爱的项目只需点击 Star 便可收入囊中。

Star is easy，可随着 Stars Repositories 增长和时间流逝，在需要使用到某个项目时难免记不清叫什么，而 Github 又只提供简单的搜索，找到目标 Star Repositorie 竟也成了件小小的麻烦事。

所以拥有自己的 Github Stars Repositories Manager 也算是开发者的必备需求。

之前有使用过市面上的一些 Github Stars Repositories Manager，比如 Astral，虽说能用，但总觉得不顺手、不好用。

Gitstars 由此诞生 🎉

## Example

![](public/example-gitstars.png)

## 说明

### 什么是 Topics？

每个 Repository 都可以设置 Topics，可以理解为标签。

![](public/example-topics.png)

### 什么是 Languages？

Github 会统计分析 Repository 的文件，确定 Repository 的主编程语言。

![](public/example-languages.png)

### 有什么用？

Gitstars 根据 Topic 和 Language 对 Repository 进行分类，方便快速找到目标 Repository。

Topic 和 Language 本身也是可搜索的。


## vercel部署

<a href="https://vercel.com/import/project?template=https://github.com/rayepeng/gitstars.git" target="_blank" rel="noopener noreferrer"><img src="https://vercel.com/button" alt=""><span><svg class="external-link-icon" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" focusable="false" x="0px" y="0px" viewBox="0 0 100 100" width="15" height="15"><path fill="currentColor" d="M18.8,85.1h56l0,0c2.2,0,4-1.8,4-4v-32h-8v28h-48v-48h28v-8h-32l0,0c-2.2,0-4,1.8-4,4v56C14.8,83.3,16.6,85.1,18.8,85.1z"></path><polygon fill="currentColor" points="45.7,48.7 51.3,54.3 77.2,28.5 77.2,37.2 85.2,37.2 85.2,14.9 62.8,14.9 62.8,22.9 71.5,22.9"></polygon></svg></span></a>

部署完成后，vercel会自动生成域名，作为Github OAuth的回调地址，需要在Github OAuth应用中设置。Github OAuth新建应用[参考](https://docs.github.com/en/apps/oauth-apps/building-oauth-apps/creating-an-oauth-app)
新建完成之后，vercel中分别设置VITE_GITSTARS_CLIENT_SECRET和VITE_GITSTARS_CLIENT_ID两个环境变量