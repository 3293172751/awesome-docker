import{_ as l,r,o as c,c as t,a as e,b as s,w as d,d as a,e as n}from"./app.9f14a191.js";const p={},m=a(`<h1 id="_107-openim-docker-deployment" tabindex="-1"><a class="header-anchor" href="#_107-openim-docker-deployment" aria-hidden="true">#</a> 107: OpenIM Docker Deployment</h1><p>OpenIM Docker \u63D0\u4F9B\u4E86\u4E00\u4E2A\u7A33\u5B9A\u7684 OpenIM \u6784\u5EFA\u548C\u90E8\u7F72\u89E3\u51B3\u65B9\u6848\uFF0C\u6709\u975E\u5E38\u591A\u7684\u90E8\u7F72\u65B9\u6848\u63D0\u4F9B\u9009\u62E9\uFF0C\u4F7F\u7528 Docker \u548C Docker Compose \u7B80\u5316\u4E86\u6574\u4E2A\u8FC7\u7A0B\u3002</p><h2 id="\u76EE\u5F55\u7ED3\u6784" tabindex="-1"><a class="header-anchor" href="#\u76EE\u5F55\u7ED3\u6784" aria-hidden="true">#</a> \u76EE\u5F55\u7ED3\u6784</h2><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>OpenIM Docker Deployment
\u2502
\u251C\u2500\u2500 \u{1F4C1} **build/**
\u2502   \u251C\u2500\u2500 \u{1F4C4} Dockerfile-server
\u2502   \u2514\u2500\u2500 \u{1F4C4} Dockerfile-chat
\u2502
\u251C\u2500\u2500 \u{1F4C1} **openim-server/**
\u2502   \u251C\u2500\u2500 \u{1F4C4} docker-compose.yml
\u2502   \u2514\u2500\u2500 \u{1F4C1} **configs/**
\u2502       \u251C\u2500\u2500 \u{1F4C4} server-config.yaml
\u2502       \u2514\u2500\u2500 \u{1F4C4} other-config.yaml
\u2502
\u251C\u2500\u2500 \u{1F4C1} **openim-chat/**
\u2502   \u251C\u2500\u2500 \u{1F4C4} docker-compose.yml
\u2502   \u2514\u2500\u2500 \u{1F4C1} **configs/**
\u2502       \u251C\u2500\u2500 \u{1F4C4} chat-config.yaml
\u2502       \u2514\u2500\u2500 \u{1F4C4} other-config.yaml
\u2502
\u251C\u2500\u2500 \u{1F4C1} **env/**
\u2502   \u251C\u2500\u2500 \u{1F4C4} openim-server.env
\u2502   \u2514\u2500\u2500 \u{1F4C4} openim-chat.env
\u2502
\u2514\u2500\u2500 \u{1F4C1} **example/**
    \u251C\u2500\u2500 \u{1F4C4} basic-openim-server-dependency.yml
    \u251C\u2500\u2500 \u{1F4C4} only-openim-server.yml
    \u2514\u2500\u2500 \u{1F4C4} full-openim-server-and-chat.yml
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li><code>build/</code>\uFF1A\u7528\u4E8E\u6784\u5EFA Docker \u955C\u50CF\u3002</li><li><code>openim-server/</code>\uFF1A\u7528\u4E8E\u90E8\u7F72 openim-server\u3002</li><li><code>openim-chat/</code>\uFF1A\u7528\u4E8E\u90E8\u7F72 openim-chat\u3002</li><li><code>env/</code>\uFF1A\u5B58\u653E Docker-compose \u7684\u73AF\u5883\u53D8\u91CF\u6587\u4EF6\u3002</li><li><code>example/</code>\uFF1A\u5305\u542B\u5404\u79CD Docker-compose \u793A\u4F8B\u3002</li></ul><p>\u4E86\u89E3\u60A8\u7684\u8981\u6C42\u540E\uFF0C\u6211\u5C06\u5728\u4F7F\u7528\u65B9\u6CD5\u6307\u5357\u4E2D\u52A0\u5165\u8FD9\u90E8\u5206\u5185\u5BB9\u3002</p><h3 id="openim-docker-\u4F7F\u7528\u65B9\u6CD5" tabindex="-1"><a class="header-anchor" href="#openim-docker-\u4F7F\u7528\u65B9\u6CD5" aria-hidden="true">#</a> OpenIM Docker \u4F7F\u7528\u65B9\u6CD5</h3><h4 id="_1-\u83B7\u53D6\u955C\u50CF" tabindex="-1"><a class="header-anchor" href="#_1-\u83B7\u53D6\u955C\u50CF" aria-hidden="true">#</a> 1. \u83B7\u53D6\u955C\u50CF</h4><p>\u60A8\u53EF\u4EE5\u4ECE\u4EE5\u4E0B\u4E09\u4E2A\u6E90\u83B7\u53D6 Docker \u955C\u50CF\uFF1A</p>`,9),u={href:"https://github.com/orgs/OpenIMSDK/packages?repo_name=Open-IM-Server",target:"_blank",rel:"noopener noreferrer"},h=n("GitHub Packages"),v=e("li",null,"\u963F\u91CC\u4E91",-1),b=e("li",null,"Docker Hub",-1),g=e("p",null,"\u4E3A\u4E86\u786E\u4FDD\u83B7\u53D6\u5230\u6700\u65B0\u7248\u672C\u7684\u955C\u50CF\uFF0C\u8BF7\u53C2\u8003\u4EE5\u4E0B\u6587\u6863\uFF1A",-1),k={href:"https://github.com/OpenIMSDK/Open-IM-Server/blob/main/docs/conversions/version.md",target:"_blank",rel:"noopener noreferrer"},_=n("openim \u7248\u672C\u8BBE\u8BA1"),f={href:"https://github.com/OpenIMSDK/Open-IM-Server/blob/main/docs/conversions/images.md",target:"_blank",rel:"noopener noreferrer"},y=n("openim \u955C\u50CF\u7B56\u7565"),x=a(`<h4 id="_2-\u4F7F\u7528-docker-compose" tabindex="-1"><a class="header-anchor" href="#_2-\u4F7F\u7528-docker-compose" aria-hidden="true">#</a> 2. \u4F7F\u7528 Docker-compose</h4><p><strong>\u9ED8\u8BA4\u542F\u52A8\u9009\u62E9\uFF1A</strong></p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token function">docker-compose</span> up <span class="token parameter variable">-d</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h2 id="\u9879\u76EE\u7ED3\u6784" tabindex="-1"><a class="header-anchor" href="#\u9879\u76EE\u7ED3\u6784" aria-hidden="true">#</a> \u9879\u76EE\u7ED3\u6784</h2><ul><li>\u5BF9\u4E8E <code>openim-server</code> \u548C <code>openim-chat</code> \u7684\u66F4\u6539\uFF0C\u8BF7\u5206\u522B\u524D\u5F80 https://github.com/OpenIMSDK/Open-IM-Server/ \u548C https://github.com/OpenIMSDK/chat \u8FDB\u884C\u8D21\u732E\u3002</li><li>\u4E3A\u4E86\u540C\u6B65\u4E24\u4E2A\u9879\u76EE\u7684\u811A\u672C\u548C\u914D\u7F6E\u6587\u4EF6\uFF0C\u6211\u4EEC\u4F7F\u7528\u81EA\u52A8\u5316\u5DE5\u5177\u3002\u60A8\u53EA\u9700\u8981\u786E\u4FDD\u6587\u4EF6\u4E0E\u539F\u59CB\u4ED3\u5E93\u4FDD\u6301\u540C\u6B65\u3002</li><li>\u5BF9\u4E8E\u73AF\u5883\u53D8\u91CF\u6587\u4EF6\u548C Docker-compose \u793A\u4F8B\uFF0C\u8BF7\u5728 <code>env/</code> \u548C <code>example/</code> \u76EE\u5F55\u4E0B\u8FDB\u884C\u66F4\u6539\u3002</li></ul><p><strong>\u5B9A\u5236\u542F\u52A8</strong></p><p>\u6839\u636E\u60A8\u7684\u9700\u6C42\uFF0C\u9009\u62E9\u76F8\u5E94\u7684 Docker-compose \u6587\u4EF6\u8FDB\u884C\u542F\u52A8\uFF1A</p><ul><li><p><strong>\u57FA\u7840\u73AF\u5883\u4F9D\u8D56</strong>\uFF1A</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token function">docker-compose</span> <span class="token parameter variable">-f</span> basic-openim-server-dependency.yml up <span class="token parameter variable">-d</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div></li><li><p><strong>\u4EC5 OpenIM Server</strong>\uFF1A</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token function">docker-compose</span> <span class="token parameter variable">-f</span> only-openim-server.yml up <span class="token parameter variable">-d</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div></li><li><p><strong>OpenIM Server \u548C Chat</strong>\uFF1A</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token function">docker-compose</span> <span class="token parameter variable">-f</span> full-openim-server-and-chat.yml up <span class="token parameter variable">-d</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div></li></ul><p><strong>\u6D4B\u8BD5\u8FD0\u884C\u72B6\u6001</strong></p><p>\u8981\u67E5\u770B\u6240\u6709\u670D\u52A1\u662F\u5426\u90FD\u5DF2\u542F\u52A8\uFF0C\u53EF\u4EE5\u4F7F\u7528\uFF1A</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token function">docker-compose</span> <span class="token function">ps</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>\u5982\u679C\u60A8\u53D1\u73B0\u6CA1\u6709\u542F\u52A8\u7684\u5BB9\u5668\uFF0C\u60A8\u53EF\u4EE5\u67E5\u770B\u7279\u5B9A\u670D\u52A1\u7684\u65E5\u5FD7\u4EE5\u627E\u51FA\u539F\u56E0\u3002\u4F8B\u5982\uFF0C\u67E5\u770B OpenIM Server \u7684\u65E5\u5FD7\uFF1A</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token function">docker-compose</span> logs openim-server
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p><strong>\u505C\u6B62</strong></p><p>\u505C\u6B62 Docker-compose \u8FD0\u884C\u7684\u6240\u6709\u670D\u52A1\uFF1A</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token function">docker-compose</span> down
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>\u5982\u679C\u60A8\u4F7F\u7528\u4E86\u7279\u5B9A\u7684 <code>docker-compose</code> \u6587\u4EF6\uFF0C\u8BF7\u786E\u4FDD\u4E5F\u5728 <code>down</code> \u547D\u4EE4\u4E2D\u6307\u5B9A\u5B83\u3002</p><h4 id="_3-\u63D0\u793A" tabindex="-1"><a class="header-anchor" href="#_3-\u63D0\u793A" aria-hidden="true">#</a> 3. \u63D0\u793A</h4><p>\u786E\u4FDD\u60A8\u7684 Docker \u548C Docker Compose \u662F\u6700\u65B0\u7248\u672C\uFF0C\u4EE5\u786E\u4FDD\u6700\u4F73\u517C\u5BB9\u6027\u548C\u6027\u80FD\u3002</p><h2 id="\u8D21\u732E" tabindex="-1"><a class="header-anchor" href="#\u8D21\u732E" aria-hidden="true">#</a> \u8D21\u732E</h2>`,20),I=n("\u6211\u4EEC\u9F13\u52B1\u793E\u533A\u8D21\u732E\u5E76\u5B8C\u5584\u8FD9\u4E2A\u9879\u76EE\u3002\u5177\u4F53\u7684\u8D21\u732E\u6D41\u7A0B\uFF0C\u8BF7\u67E5\u770B "),D=n("CONTRIBUTING.md"),O=n("\u3002"),M=a(`<h2 id="\u534F\u8BAE" tabindex="-1"><a class="header-anchor" href="#\u534F\u8BAE" aria-hidden="true">#</a> \u534F\u8BAE</h2><p>\u672C\u9879\u76EE\u4F7F\u7528 MIT \u534F\u8BAE\u3002\u8BE6\u60C5\u8BF7\u67E5\u770B <a href="./LICENSE">LICENSE</a>\u3002</p><h1 id="openim-docker-deployment" tabindex="-1"><a class="header-anchor" href="#openim-docker-deployment" aria-hidden="true">#</a> OpenIM Docker Deployment</h1><p>OpenIM Docker \u63D0\u4F9B\u4E86\u4E00\u4E2A\u7A33\u5B9A\u7684 OpenIM \u6784\u5EFA\u548C\u90E8\u7F72\u89E3\u51B3\u65B9\u6848\uFF0C\u6709\u975E\u5E38\u591A\u7684\u90E8\u7F72\u65B9\u6848\u63D0\u4F9B\u9009\u62E9\uFF0C\u4F7F\u7528 Docker \u548C Docker Compose \u7B80\u5316\u4E86\u6574\u4E2A\u8FC7\u7A0B\u3002</p><h2 id="\u76EE\u5F55\u7ED3\u6784-1" tabindex="-1"><a class="header-anchor" href="#\u76EE\u5F55\u7ED3\u6784-1" aria-hidden="true">#</a> \u76EE\u5F55\u7ED3\u6784</h2><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>OpenIM Docker Deployment
\u2502
\u251C\u2500\u2500 \u{1F4C1} **build/**
\u2502   \u251C\u2500\u2500 \u{1F4C4} Dockerfile-server
\u2502   \u2514\u2500\u2500 \u{1F4C4} Dockerfile-chat
\u2502
\u251C\u2500\u2500 \u{1F4C1} **openim-server/**
\u2502   \u251C\u2500\u2500 \u{1F4C4} docker-compose.yml
\u2502   \u2514\u2500\u2500 \u{1F4C1} **configs/**
\u2502       \u251C\u2500\u2500 \u{1F4C4} server-config.yaml
\u2502       \u2514\u2500\u2500 \u{1F4C4} other-config.yaml
\u2502
\u251C\u2500\u2500 \u{1F4C1} **openim-chat/**
\u2502   \u251C\u2500\u2500 \u{1F4C4} docker-compose.yml
\u2502   \u2514\u2500\u2500 \u{1F4C1} **configs/**
\u2502       \u251C\u2500\u2500 \u{1F4C4} chat-config.yaml
\u2502       \u2514\u2500\u2500 \u{1F4C4} other-config.yaml
\u2502
\u251C\u2500\u2500 \u{1F4C1} **env/**
\u2502   \u251C\u2500\u2500 \u{1F4C4} openim-server.env
\u2502   \u2514\u2500\u2500 \u{1F4C4} openim-chat.env
\u2502
\u2514\u2500\u2500 \u{1F4C1} **example/**
    \u251C\u2500\u2500 \u{1F4C4} basic-openim-server-dependency.yml
    \u251C\u2500\u2500 \u{1F4C4} only-openim-server.yml
    \u2514\u2500\u2500 \u{1F4C4} full-openim-server-and-chat.yml
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li><code>build/</code>\uFF1A\u7528\u4E8E\u6784\u5EFA Docker \u955C\u50CF\u3002</li><li><code>openim-server/</code>\uFF1A\u7528\u4E8E\u90E8\u7F72 openim-server\u3002</li><li><code>openim-chat/</code>\uFF1A\u7528\u4E8E\u90E8\u7F72 openim-chat\u3002</li><li><code>env/</code>\uFF1A\u5B58\u653E Docker-compose \u7684\u73AF\u5883\u53D8\u91CF\u6587\u4EF6\u3002</li><li><code>example/</code>\uFF1A\u5305\u542B\u5404\u79CD Docker-compose \u793A\u4F8B\u3002</li></ul><p>\u4E86\u89E3\u60A8\u7684\u8981\u6C42\u540E\uFF0C\u6211\u5C06\u5728\u4F7F\u7528\u65B9\u6CD5\u6307\u5357\u4E2D\u52A0\u5165\u8FD9\u90E8\u5206\u5185\u5BB9\u3002</p><h3 id="openim-docker-\u4F7F\u7528\u65B9\u6CD5-1" tabindex="-1"><a class="header-anchor" href="#openim-docker-\u4F7F\u7528\u65B9\u6CD5-1" aria-hidden="true">#</a> OpenIM Docker \u4F7F\u7528\u65B9\u6CD5</h3><h4 id="_1-\u83B7\u53D6\u955C\u50CF-1" tabindex="-1"><a class="header-anchor" href="#_1-\u83B7\u53D6\u955C\u50CF-1" aria-hidden="true">#</a> 1. \u83B7\u53D6\u955C\u50CF</h4><p>\u60A8\u53EF\u4EE5\u4ECE\u4EE5\u4E0B\u4E09\u4E2A\u6E90\u83B7\u53D6 Docker \u955C\u50CF\uFF1A</p>`,11),S={href:"https://github.com/orgs/OpenIMSDK/packages?repo_name=Open-IM-Server",target:"_blank",rel:"noopener noreferrer"},C=n("GitHub Packages"),w=e("li",null,"\u963F\u91CC\u4E91",-1),N=e("li",null,"Docker Hub",-1),T=e("p",null,"\u4E3A\u4E86\u786E\u4FDD\u83B7\u53D6\u5230\u6700\u65B0\u7248\u672C\u7684\u955C\u50CF\uFF0C\u8BF7\u53C2\u8003\u4EE5\u4E0B\u6587\u6863\uFF1A",-1),L={href:"https://github.com/OpenIMSDK/Open-IM-Server/blob/main/docs/conversions/version.md",target:"_blank",rel:"noopener noreferrer"},E=n("openim \u7248\u672C\u8BBE\u8BA1"),G={href:"https://github.com/OpenIMSDK/Open-IM-Server/blob/main/docs/conversions/images.md",target:"_blank",rel:"noopener noreferrer"},K=n("openim \u955C\u50CF\u7B56\u7565"),B=a(`<h4 id="_2-\u4F7F\u7528-docker-compose-1" tabindex="-1"><a class="header-anchor" href="#_2-\u4F7F\u7528-docker-compose-1" aria-hidden="true">#</a> 2. \u4F7F\u7528 Docker-compose</h4><p><strong>\u9ED8\u8BA4\u542F\u52A8\u9009\u62E9\uFF1A</strong></p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token function">docker-compose</span> up <span class="token parameter variable">-d</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p><strong>\u5B9A\u5236\u542F\u52A8</strong></p><p>\u6839\u636E\u60A8\u7684\u9700\u6C42\uFF0C\u9009\u62E9\u76F8\u5E94\u7684 Docker-compose \u6587\u4EF6\u8FDB\u884C\u542F\u52A8\uFF1A</p><ul><li><p><strong>\u57FA\u7840\u73AF\u5883\u4F9D\u8D56</strong>\uFF1A</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token function">docker-compose</span> <span class="token parameter variable">-f</span> basic-openim-server-dependency.yml up <span class="token parameter variable">-d</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div></li><li><p><strong>\u4EC5 OpenIM Server</strong>\uFF1A</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token function">docker-compose</span> <span class="token parameter variable">-f</span> only-openim-server.yml up <span class="token parameter variable">-d</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div></li><li><p><strong>OpenIM Server \u548C Chat</strong>\uFF1A</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token function">docker-compose</span> <span class="token parameter variable">-f</span> full-openim-server-and-chat.yml up <span class="token parameter variable">-d</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div></li></ul><p><strong>\u6D4B\u8BD5\u8FD0\u884C\u72B6\u6001</strong></p><p>\u8981\u67E5\u770B\u6240\u6709\u670D\u52A1\u662F\u5426\u90FD\u5DF2\u542F\u52A8\uFF0C\u53EF\u4EE5\u4F7F\u7528\uFF1A</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token function">docker-compose</span> <span class="token function">ps</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>\u5982\u679C\u60A8\u53D1\u73B0\u6CA1\u6709\u542F\u52A8\u7684\u5BB9\u5668\uFF0C\u60A8\u53EF\u4EE5\u67E5\u770B\u7279\u5B9A\u670D\u52A1\u7684\u65E5\u5FD7\u4EE5\u627E\u51FA\u539F\u56E0\u3002\u4F8B\u5982\uFF0C\u67E5\u770B OpenIM Server \u7684\u65E5\u5FD7\uFF1A</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token function">docker-compose</span> logs openim-server
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p><strong>\u505C\u6B62</strong></p><p>\u505C\u6B62 Docker-compose \u8FD0\u884C\u7684\u6240\u6709\u670D\u52A1\uFF1A</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token function">docker-compose</span> down
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>\u5982\u679C\u60A8\u4F7F\u7528\u4E86\u7279\u5B9A\u7684 <code>docker-compose</code> \u6587\u4EF6\uFF0C\u8BF7\u786E\u4FDD\u4E5F\u5728 <code>down</code> \u547D\u4EE4\u4E2D\u6307\u5B9A\u5B83\u3002</p><h4 id="_3-\u63D0\u793A-1" tabindex="-1"><a class="header-anchor" href="#_3-\u63D0\u793A-1" aria-hidden="true">#</a> 3. \u63D0\u793A</h4><p>\u786E\u4FDD\u60A8\u7684 Docker \u548C Docker Compose \u662F\u6700\u65B0\u7248\u672C\uFF0C\u4EE5\u786E\u4FDD\u6700\u4F73\u517C\u5BB9\u6027\u548C\u6027\u80FD\u3002</p><h2 id="\u8D21\u732E-1" tabindex="-1"><a class="header-anchor" href="#\u8D21\u732E-1" aria-hidden="true">#</a> \u8D21\u732E</h2>`,18),R=n("\u6211\u4EEC\u9F13\u52B1\u793E\u533A\u8D21\u732E\u5E76\u5B8C\u5584\u8FD9\u4E2A\u9879\u76EE\u3002\u5177\u4F53\u7684\u8D21\u732E\u6D41\u7A0B\uFF0C\u8BF7\u67E5\u770B "),H=n("CONTRIBUTING.md"),U=n("\u3002"),j=a(`<h2 id="\u534F\u8BAE-1" tabindex="-1"><a class="header-anchor" href="#\u534F\u8BAE-1" aria-hidden="true">#</a> \u534F\u8BAE</h2><p>\u672C\u9879\u76EE\u4F7F\u7528 MIT \u534F\u8BAE\u3002\u8BE6\u60C5\u8BF7\u67E5\u770B <a href="./LICENSE">LICENSE</a>\u3002</p><h1 id="openim-docker-deployment-guide" tabindex="-1"><a class="header-anchor" href="#openim-docker-deployment-guide" aria-hidden="true">#</a> OpenIM Docker Deployment Guide</h1><p>Welcome to the world of OpenIM Docker! To make it easier for you to deploy OpenIM, we offer a stable and convenient Docker solution. With just Docker and Docker Compose, you can easily launch or manage the entire service.</p><h2 id="a-glimpse-at-the-project-structure" tabindex="-1"><a class="header-anchor" href="#a-glimpse-at-the-project-structure" aria-hidden="true">#</a> A Glimpse at the Project Structure</h2><div class="language-bashOpenIM ext-bashOpenIM line-numbers-mode"><pre class="language-bashOpenIM"><code>\u2502
\u251C\u2500\u2500 \u{1F4C1} **build/**
\u2502   \u251C\u2500\u2500 \u{1F4C4} Dockerfile-server
\u2502   \u2514\u2500\u2500 \u{1F4C4} Dockerfile-chat
\u2502
\u251C\u2500\u2500 \u{1F4C1} **openim-server/**
\u2502   \u251C\u2500\u2500 \u{1F4C4} docker-compose.yml
\u2502   \u2514\u2500\u2500 \u{1F4C1} **configs/**
\u2502       \u251C\u2500\u2500 \u{1F4C4} server-config.yaml
\u2502       \u2514\u2500\u2500 \u{1F4C4} other-config.yaml
\u2502
\u251C\u2500\u2500 \u{1F4C1} **openim-chat/**
\u2502   \u251C\u2500\u2500 \u{1F4C4} docker-compose.yml
\u2502   \u2514\u2500\u2500 \u{1F4C1} **configs/**
\u2502       \u251C\u2500\u2500 \u{1F4C4} chat-config.yaml
\u2502       \u2514\u2500\u2500 \u{1F4C4} other-config.yaml
\u2502
\u251C\u2500\u2500 \u{1F4C1} **env/**
\u2502   \u251C\u2500\u2500 \u{1F4C4} openim-server.env
\u2502   \u2514\u2500\u2500 \u{1F4C4} openim-chat.env
\u2502
\u2514\u2500\u2500 \u{1F4C1} **example/**
    \u251C\u2500\u2500 \u{1F4C4} basic-openim-server-dependency.yml
    \u251C\u2500\u2500 \u{1F4C4} only-openim-server.yml
    \u2514\u2500\u2500 \u{1F4C4} full-openim-server-and-chat.yml
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li><code>build/</code>: Files required for Docker builds reside here.</li><li><code>openim-server/</code>: Everything you need to deploy the OpenIM service can be found here.</li><li><code>openim-chat/</code>: This is where the OpenIM chat service is deployed.</li><li><code>env/</code>: The home of environment variables that Docker-compose needs.</li><li><code>example/</code>: Want real Docker-compose examples? Look no further!</li></ul><p>Next, we&#39;ll delve into the operational guide detailing how to use these files.</p><h3 id="how-to-use-openim-docker" tabindex="-1"><a class="header-anchor" href="#how-to-use-openim-docker" aria-hidden="true">#</a> How to Use OpenIM Docker</h3><h4 id="_1-acquire-the-image" tabindex="-1"><a class="header-anchor" href="#_1-acquire-the-image" aria-hidden="true">#</a> 1. Acquire the Image</h4><p>First, choose one of the following platforms to download the Docker image:</p>`,11),P={href:"https://github.com/orgs/OpenIMSDK/packages?repo_name=Open-IM-Server",target:"_blank",rel:"noopener noreferrer"},q=n("GitHub Packages"),A=e("li",null,"Alibaba Cloud",-1),V=e("li",null,"Docker Hub",-1),W=e("p",null,"To ensure that you download the latest image, please refer to these two documents:",-1),F={href:"https://github.com/OpenIMSDK/Open-IM-Server/blob/main/docs/conversions/version.md",target:"_blank",rel:"noopener noreferrer"},z=n("openim version introduction"),Y={href:"https://github.com/OpenIMSDK/Open-IM-Server/blob/main/docs/conversions/images.md",target:"_blank",rel:"noopener noreferrer"},J=n("openim image selection guide"),Q=a(`<h4 id="_2-launch-the-service-with-docker-compose" tabindex="-1"><a class="header-anchor" href="#_2-launch-the-service-with-docker-compose" aria-hidden="true">#</a> 2. Launch the Service with Docker-compose</h4><p><strong>One-click launch:</strong></p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token function">docker-compose</span> up <span class="token parameter variable">-d</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p><strong>Customized launches based on needs:</strong></p><ul><li><p><strong>Launch basic environment only</strong>:</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>bashCopy code
docker-compose -f basic-openim-server-dependency.yml up -d
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p><strong>Launch OpenIM Server only</strong>:</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>bashCopy code
docker-compose -f only-openim-server.yml up -d
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p><strong>Launch both OpenIM Server and chat functionality</strong>:</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>bashCopy code
docker-compose -f full-openim-server-and-chat.yml up -d
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div></li></ul><p><strong>Check operational status</strong></p><p>To confirm all services are up and running:</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token function">docker-compose</span> <span class="token function">ps</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>If a particular service isn&#39;t running, you can inspect its logs, for instance:</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token function">docker-compose</span> logs openim-server
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p><strong>Shut down the service</strong></p><p>To stop all services run by Docker-compose:</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token function">docker-compose</span> down
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>When using a specific <code>docker-compose</code> file, remember to specify it in the <code>down</code> command.</p><h4 id="_3-a-little-tip" tabindex="-1"><a class="header-anchor" href="#_3-a-little-tip" aria-hidden="true">#</a> 3. A Little Tip</h4><p>Please ensure that both your Docker and Docker Compose are updated to the latest versions for the best compatibility and performance.</p><h2 id="contribute-your-strength" tabindex="-1"><a class="header-anchor" href="#contribute-your-strength" aria-hidden="true">#</a> Contribute Your Strength</h2>`,17),X=n("If you're interested in our project, we warmly welcome you to participate and contribute to it! Please refer to "),Z={href:"https://github.com/openim-sigs/openim-docker/tree/main/CONTRIBUTING.md",target:"_blank",rel:"noopener noreferrer"},$=n("CONTRIBUTING.md"),ee=n(" for more details."),ne=e("h2",{id:"license",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#license","aria-hidden":"true"},"#"),n(" License")],-1),se=n("This project is licensed under the MIT license. For specific content, please check "),ie={href:"https://github.com/openim-sigs/openim-docker/tree/main/LICENSE",target:"_blank",rel:"noopener noreferrer"},ae=n("LICENSE"),oe=n(".");function re(de,le){const i=r("ExternalLinkIcon"),o=r("RouterLink");return c(),t("div",null,[m,e("ul",null,[e("li",null,[e("a",u,[h,s(i)])]),v,b]),g,e("ul",null,[e("li",null,[e("a",k,[_,s(i)])]),e("li",null,[e("a",f,[y,s(i)])])]),x,e("p",null,[I,s(o,{to:"/Cloud-Native/CONTRIBUTING.html"},{default:d(()=>[D]),_:1}),O]),M,e("ul",null,[e("li",null,[e("a",S,[C,s(i)])]),w,N]),T,e("ul",null,[e("li",null,[e("a",L,[E,s(i)])]),e("li",null,[e("a",G,[K,s(i)])])]),B,e("p",null,[R,s(o,{to:"/Cloud-Native/CONTRIBUTING.html"},{default:d(()=>[H]),_:1}),U]),j,e("ul",null,[e("li",null,[e("a",P,[q,s(i)])]),A,V]),W,e("ul",null,[e("li",null,[e("a",F,[z,s(i)])]),e("li",null,[e("a",Y,[J,s(i)])])]),Q,e("p",null,[X,e("a",Z,[$,s(i)]),ee]),ne,e("p",null,[se,e("a",ie,[ae,s(i)]),oe])])}const te=l(p,[["render",re],["__file","107.html.vue"]]);export{te as default};