import{_ as a,o as s,c as p,R as o}from"./chunks/framework.oNtUbm1h.js";const b=JSON.parse('{"title":"踩坑","description":"","frontmatter":{},"headers":[],"relativePath":"core/bug.md","filePath":"core/bug.md"}'),t={name:"core/bug.md"},r=o(`<h1 id="踩坑" tabindex="-1">踩坑 <a class="header-anchor" href="#踩坑" aria-label="Permalink to &quot;踩坑&quot;">​</a></h1><p>记录平常遇到的一些坑点、技术点，以备后面查阅。</p><h2 id="sharp-包安装失败" tabindex="-1">sharp 包安装失败 <a class="header-anchor" href="#sharp-包安装失败" aria-label="Permalink to &quot;sharp 包安装失败&quot;">​</a></h2><ol><li>pnpm、npm、yarn 时，github 连接失败无法下载 sharp 包的解决方案，未遇到此情况请勿尝试</li></ol><p>解决方法：</p><p>在命令行分别输入</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>pnpm config set sharp_binary_host=https://npm.taobao.org/mirrors/sharp</span></span>
<span class="line"><span>pnpm config set sharp_libvips_binary_host=https://npm.taobao.org/mirrors/sharp-libvips</span></span></code></pre></div><p>完成后再去执行 <code>pnpm i</code></p><ol start="2"><li>pnpm 安装 sharp 安装报错解决方案（未报错的用户请勿尝试）！：</li></ol><p>控制台输入 <code>pnpm config set sharp_binary_host &quot;https://npmmirror.com/mirrors/sharp&quot;</code><code>pnpm config set sharp_libvips_binary_host &quot;https://npmmirror.com/mirrors/sharp-libvips&quot;</code></p><p>也可以用node20 cnpm9.4安装 （当然还是推荐pnpm，不过可能出现sharp安装的问题）</p>`,11),e=[r];function n(i,c,h,l,_,m){return s(),p("div",null,e)}const u=a(t,[["render",n]]);export{b as __pageData,u as default};