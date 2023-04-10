import{_ as i,r as t,o,c as d,a as e,b as n,w as c,e as a,d as r}from"./app.74e47ba8.js";const p={},u={href:"http://nsddd.top",target:"_blank",rel:"noopener noreferrer"},h=a("author"),m=e("h1",{id:"\u7B2C22\u8282-\u8FD0\u884C\u6709\u72B6\u6001\u5E94\u7528",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#\u7B2C22\u8282-\u8FD0\u884C\u6709\u72B6\u6001\u5E94\u7528","aria-hidden":"true"},"#"),a(" \u7B2C22\u8282 \u8FD0\u884C\u6709\u72B6\u6001\u5E94\u7528")],-1),v=e("div",null,[e("a",{href:"21.md",style:{float:"left"}},"\u2B06\uFE0F\u4E0A\u4E00\u8282\u{1F517} "),e("a",{href:"23.md",style:{float:"right"}}," \u2B07\uFE0F\u4E0B\u4E00\u8282\u{1F517}")],-1),k=e("br",null,null,-1),b=a("\u2764\uFE0F\u{1F495}\u{1F495}\u65B0\u65F6\u4EE3\u62E5\u62B1\u4E91\u539F\u751F\uFF0C\u4E91\u539F\u751F\u5177\u6709\u73AF\u5883\u7EDF\u4E00\u3001\u6309\u9700\u4ED8\u8D39\u3001\u5373\u5F00\u5373\u7528\u3001\u7A33\u5B9A\u6027\u5F3A\u7279\u70B9\u3002Myblog:"),_={href:"http://nsddd.top/",target:"_blank",rel:"noopener noreferrer"},f=a("http://nsddd.top"),y=r(`<hr><p>[TOC]</p><h2 id="\u8FD0\u884C\u6709\u72B6\u6001\u5E94\u7528" tabindex="-1"><a class="header-anchor" href="#\u8FD0\u884C\u6709\u72B6\u6001\u5E94\u7528" aria-hidden="true">#</a> \u8FD0\u884C\u6709\u72B6\u6001\u5E94\u7528</h2><p>\u4EE5 <code>Mysql</code> \u4E3A\u4F8B\uFF0C\u5728 <code>kubernetes</code> \u96C6\u7FA4\u4E2D\u8FD0\u884C\u4E00\u4E2A\u6709\u72B6\u6001\u7684\u5E94\u7528\uFF0C\u90E8\u7F72\u6570\u636E\u5E93\u51E0\u4E4E\u8986\u76D6\u4E86 <code>kubernetes</code> \u4E2D\u5E38\u89C1\u7684\u5BF9\u8C61\u548C\u6982\u5FF5\u3002</p><h2 id="\u521B\u5EFAmysql\u6570\u636E\u5E93" tabindex="-1"><a class="header-anchor" href="#\u521B\u5EFAmysql\u6570\u636E\u5E93" aria-hidden="true">#</a> \u521B\u5EFAMysql\u6570\u636E\u5E93</h2><h3 id="\u51C6\u5907" tabindex="-1"><a class="header-anchor" href="#\u51C6\u5907" aria-hidden="true">#</a> \u51C6\u5907</h3><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token function">mkdir</span> /home/mysql -p<span class="token punctuation">;</span> <span class="token builtin class-name">cd</span> /home/mysql/ <span class="token punctuation">;</span> <span class="token function">touch</span> mysql-pod.yaml <span class="token operator">&amp;&amp;</span> <span class="token function">ls</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p><strong>\u521B\u5EFA\u547D\u540D\u7A7A\u95F4\uFF0CMySQL\u653E\u5165\u9ED8\u8BA4\u547D\u540D\u7A7A\u95F4\u4E2D\uFF1A</strong></p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>kubectl create namespace dev
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="\u521B\u5EFA\u6301\u4E45\u5377pv-\u7528\u6765\u5B58\u50A8mysql\u6570\u636E\u6587\u4EF6" tabindex="-1"><a class="header-anchor" href="#\u521B\u5EFA\u6301\u4E45\u5377pv-\u7528\u6765\u5B58\u50A8mysql\u6570\u636E\u6587\u4EF6" aria-hidden="true">#</a> \u521B\u5EFA\u6301\u4E45\u5377PV\uFF0C\u7528\u6765\u5B58\u50A8mysql\u6570\u636E\u6587\u4EF6</h3><p>\u5B9A\u4E49\u4E00\u4E2A\u5BB9\u91CF\u5927\u5C0F\u4E3A1GB\u7684PV\uFF0C\u6302\u8F7D\u5230 <code>/nfs/data/01</code> \u76EE\u5F55\uFF0C\u9700\u624B\u52A8\u521B\u5EFA\u8BE5\u76EE\u5F55</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token function">mkdir</span> <span class="token parameter variable">-p</span> /root/mysql/nfs/data/01
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>\u7F16\u5199 <code>mysql-pv.yaml</code> \u6587\u4EF6\u5185\u5BB9\uFF0C\u8981\u521B\u5EFA\u7684 <code>pv</code> \u5BF9\u8C61\u540D\u79F0\uFF1Apv-1gi</p><div class="language-yaml ext-yml line-numbers-mode"><pre class="language-yaml"><code><span class="token comment"># \u5B9A\u4E49\u6301\u4E45\u5377\u4FE1\u606F</span>
<span class="token key atrule">apiVersion</span><span class="token punctuation">:</span> v1
<span class="token key atrule">kind</span><span class="token punctuation">:</span> PersistentVolume
<span class="token key atrule">metadata</span><span class="token punctuation">:</span>    <span class="token comment"># pv\u662F\u6CA1\u6709namespace\u5C5E\u6027\u7684\uFF0C\u5B83\u662F\u4E00\u79CD\u8DE8namespace\u7684\u5171\u4EAB\u8D44\u6E90</span>
  <span class="token key atrule">name</span><span class="token punctuation">:</span> pv<span class="token punctuation">-</span>1gi
<span class="token key atrule">spec</span><span class="token punctuation">:</span>
  <span class="token key atrule">capacity</span><span class="token punctuation">:</span>
    <span class="token key atrule">storage</span><span class="token punctuation">:</span> 1Gi
  <span class="token key atrule">accessModes</span><span class="token punctuation">:</span>
    <span class="token punctuation">-</span> ReadWriteMany   <span class="token comment"># \u5B58\u50A8\u7C7B\uFF0C\u5177\u6709\u76F8\u540C\u5B58\u50A8\u7C7B\u540D\u79F0\u7684pv\u548Cpvc\u624D\u80FD\u8FDB\u884C\u7ED1\u5B9A</span>
  <span class="token key atrule">storageClassName</span><span class="token punctuation">:</span> nfs
  <span class="token key atrule">nfs</span><span class="token punctuation">:</span>
    <span class="token key atrule">path</span><span class="token punctuation">:</span> /nfs/data/01
    <span class="token key atrule">server</span><span class="token punctuation">:</span> 192.168.59.110
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u521B\u5EFA\u8BE5PV\u5BF9\u8C61\uFF1A</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>kubectl create <span class="token parameter variable">-f</span> mysql-pv.yaml
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="\u914D\u7F6E\u73AF\u5883\u53D8\u91CF" tabindex="-1"><a class="header-anchor" href="#\u914D\u7F6E\u73AF\u5883\u53D8\u91CF" aria-hidden="true">#</a> \u914D\u7F6E\u73AF\u5883\u53D8\u91CF</h3><div class="language-yaml ext-yml line-numbers-mode"><pre class="language-yaml"><code>apiV
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h2 id="end-\u94FE\u63A5" tabindex="-1"><a class="header-anchor" href="#end-\u94FE\u63A5" aria-hidden="true">#</a> END \u94FE\u63A5</h2><ul><li><div><a href="21.md" style="float:left;">\u2B06\uFE0F\u4E0A\u4E00\u8282\u{1F517} </a><a href="23.md" style="float:right;"> \uFE0F\u4E0B\u4E00\u8282\u{1F517}</a></div></li></ul>`,20),g=a("\u24C2\uFE0F\u56DE\u5230\u76EE\u5F55\u{1F3E0}"),x={href:"https://nsddd.top/archives/contributors",target:"_blank",rel:"noopener noreferrer"},q=e("strong",null,"\u{1FAF5}\u53C2\u4E0E\u8D21\u732E\u{1F49E}\u2764\uFE0F\u200D\u{1F525}\u{1F496}",-1),C=a(")"),E=a("\u2734\uFE0F\u7248\u6743\u58F0\u660E \xA9 \uFF1A\u672C\u4E66\u6240\u6709\u5185\u5BB9\u9075\u5FAA"),V={href:"http://zh.wikipedia.org/wiki/Wikipedia:CC-by-sa-3.0%E5%8D%8F%E8%AE%AE%E6%96%87%E6%9C%AC",target:"_blank",rel:"noopener noreferrer"},M=a("CC-BY-SA 3.0\u534F\u8BAE\uFF08\u7F72\u540D-\u76F8\u540C\u65B9\u5F0F\u5171\u4EAB\uFF09\xA9");function N(B,L){const s=t("ExternalLinkIcon"),l=t("RouterLink");return o(),d("div",null,[e("ul",null,[e("li",null,[e("a",u,[h,n(s)])])]),m,v,k,e("blockquote",null,[e("p",null,[b,e("a",_,[f,n(s)])])]),y,e("ul",null,[e("li",null,[e("p",null,[n(l,{to:"/"},{default:c(()=>[g]),_:1})])]),e("li",null,[e("p",null,[e("a",x,[q,n(s)]),C])]),e("li",null,[e("p",null,[E,e("a",V,[M,n(s)])])])])])}const A=i(p,[["render",N],["__file","22.html.vue"]]);export{A as default};