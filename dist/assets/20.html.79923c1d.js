import{_ as s,o as t,c as o,d as r}from"./app.d693e75c.js";const a={},e=r('<h1 id="\u5206\u5E03\u5F0F\u5B58\u50A8\u4E4Bhash\u53D6\u4F59\u7B97\u6CD5" tabindex="-1"><a class="header-anchor" href="#\u5206\u5E03\u5F0F\u5B58\u50A8\u4E4Bhash\u53D6\u4F59\u7B97\u6CD5" aria-hidden="true">#</a> \u5206\u5E03\u5F0F\u5B58\u50A8\u4E4Bhash\u53D6\u4F59\u7B97\u6CD5</h1><p>[toc]</p><blockquote><p>cluster(\u96C6\u7FA4)\u6A21\u5F0F-docker\u7248\u54C8\u5E0C\u69FD\u5206\u533A\u8FDB\u884C\u4EBF\u7EA7\u6570\u636E\u5B58\u50A8</p></blockquote><p><strong>1~2\u4EBF\u6761\u751A\u81F3\u66F4\u591A\u6570\u636E\u9700\u8981\u7F13\u5B58\uFF0C\u8BF7\u95EE\u5982\u4F55\u8BBE\u8BA1\u8FD9\u4E2A\u5B58\u50A8\u6848\u4F8B</strong></p><blockquote><p>\u4F7F\u7528\u666E\u901A\u5173\u7CFB\u578B\u6570\u636E\u5E93\u767E\u5206\u767E\u4E0D\u53EF\u80FD\u5B9E\u73B0\uFF0C\u80AF\u5B9A\u662F\u5206\u5E03\u5F0F\u5B58\u50A8\uFF0C\u7528redis\u5982\u4F55\u843D\u5730\uFF1F\u6216\u8005\u662FmongoDB</p></blockquote><h3 id="_1-hash\u53D6\u4F59\u5206\u533A" tabindex="-1"><a class="header-anchor" href="#_1-hash\u53D6\u4F59\u5206\u533A" aria-hidden="true">#</a> 1. hash\u53D6\u4F59\u5206\u533A</h3><p><strong>2\u4EBF\u6761\u8BB0\u5F55\u5C31\u662F2\u4EBF\u6761k,v\uFF0C\u6211\u4EEC\u5355\u673A\u4E0D\u884C\u5C31\u5FC5\u987B\u8981\u5206\u5E03\u5F0F\u591A\u673A\uFF0C\u5047\u5982\u67093\u53F0\u673A\u5668\u6784\u6210\u4E00\u4E2A\u96C6\u7FA4\uFF0C\u7528\u6237\u6BCF\u6B21\u8BFB\u5199\u64CD\u4F5C\u90FD\u662F\u6839\u636E\u516C\u5F0F\uFF0Chash\uFF08key)%N\u4E2A\u673A\u5668\u53F0\u6570\uFF0C\u8BA1\u7B97\u51FAhash\u503C\uFF0C\u7528\u6765\u51B3\u5B9A\u6570\u636E\u6620\u5C04\u5230\u54EA\u4E2A\u8282\u70B9\u4E0A\u3002</strong></p><ul><li><strong>\u7F3A\u70B9\uFF1A\u7B80\u5355\u7C97\u66B4\uFF0C\u8D77\u5230\u8D1F\u8F7D\u5747\u8861\u548C\u5206\u800C\u6CBB\u4E4B</strong></li><li><strong>\u7F3A\u70B9\uFF1A\u67D0\u4E2Aredis\u673A\u5668\u5B95\u673A\u4E86\uFF0C\u7531\u4E8E\u53F0\u6570\u6570\u91CF\u53D8\u5316\uFF0C\u4F1A\u5BFC\u81F4hash\u53D6\u4F59\u5168\u90E8\u6570\u636E\u91CD\u542F\u6D17\u724C</strong></li></ul><h3 id="_2-\u4E00\u81F4\u6027hash\u7B97\u6CD5\u5206\u533A" tabindex="-1"><a class="header-anchor" href="#_2-\u4E00\u81F4\u6027hash\u7B97\u6CD5\u5206\u533A" aria-hidden="true">#</a> 2. \u4E00\u81F4\u6027hash\u7B97\u6CD5\u5206\u533A</h3><p><strong>\u76EE\u7684\u5C31\u662F\u4E3A\u4E86\u89E3\u51B3\u5206\u5E03\u5F0F\u7F13\u5B58\u6570\u636E\u53D8\u52A8\u548C\u6620\u5C04\u95EE\u9898\uFF0C\u67D0\u4E2A\u673A\u5668\u5B95\u673A\u4E86\uFF0C\u5206\u6BCD\u6570\u91CF\u6539\u53D8\u4E86\uFF0C\u81EA\u7136\u53D6\u4F59\u6570\u5C31\u4E0Dok\u4E86</strong></p><h5 id="\u6B65\u9AA4" tabindex="-1"><a class="header-anchor" href="#\u6B65\u9AA4" aria-hidden="true">#</a> \u6B65\u9AA4\uFF1A</h5><ol><li>\u7B97\u6CD5\u6784\u5EFA\u4E00\u81F4\u6027\u54C8\u5E0C\u73AF <ul><li>hash\u51FD\u6570\u4EA7\u751Fhash\u503C\uFF0C\u6240\u6709hash\u503C\u6784\u6210\u4E00\u4E2A\u5168\u91CF\u96C6\uFF0C\u8FD9\u4E2A\u96C6\u5408\u53EF\u4EE5\u6210\u4E3Ahash\u7A7A\u95F4</li><li>\u4E00\u81F4\u6027hash\u7B97\u6CD5\u5C31\u662F\u5C06\u6574\u4E2Ahash\u7A7A\u95F4\u7EC4\u7EC7\u6210\u4E00\u4E2A\u865A\u62DF\u7684\u5706\u73AF</li><li>\u5C06\u5404\u4E2A\u670D\u52A1\u5668\u4F7F\u7528hash\u8FDB\u884C\u4E00\u6B21hash\uFF0C\u5177\u4F53\u53EF\u4EE5\u9009\u62E9\u670D\u52A1\u5668\u7684IP\u6216\u8005\u4E3B\u673A\u540D\u4F5C\u4E3A\u5173\u952E\u5B57\u6620\u5C04</li></ul></li><li>\u670D\u52A1\u5668IP\u7ED3\u70B9\u6620\u5C04</li><li>key\u843D\u5230\u670D\u52A1\u5668\u7684\u843D\u952E\u89C4\u5219</li></ol><p><img src="https://s2.loli.net/2022/05/11/WC3KuE2olbVgmOU.png" alt="image-20220511224423420"></p><ul><li><p><strong>\u4F18\u70B9</strong></p><ul><li><strong>\u4E00\u81F4\u6027hash\u7B97\u6CD5\u7684\u5BB9\u9519\u6027</strong></li><li><strong>\u4E00\u81F4\u6027hash\u7B97\u6CD5\u7684\u6269\u5C55\u6027</strong></li></ul></li><li><p><strong>\u7F3A\u70B9</strong></p><ul><li><strong>\u4E00\u81F4\u6027hash\u7B97\u6CD5\u7684\u6570\u636E\u503E\u659C\u95EE\u9898</strong></li></ul><blockquote><p>\u5F53\u7ED3\u70B9\u592A\u5C11\u975E\u5E38\u5BB9\u6613\u5BFC\u81F4\u7ED3\u70B9\u5206\u5E03\u4E0D\u5747\u5300</p></blockquote></li></ul><h3 id="_3-\u54C8\u5E0C\u69FD\u5206\u533A\u7B97\u6CD5" tabindex="-1"><a class="header-anchor" href="#_3-\u54C8\u5E0C\u69FD\u5206\u533A\u7B97\u6CD5" aria-hidden="true">#</a> 3. \u54C8\u5E0C\u69FD\u5206\u533A\u7B97\u6CD5</h3><blockquote><p>\u8FD9\u4E2A\u662F\u5927\u5382\u975E\u5E38\u5E38\u89C1\u7684\u7B97\u6CD5\uFF0C\u89E3\u51B3\u4E86\u6570\u636E\u503E\u659C\u95EE\u9898</p></blockquote><p>\u54C8\u5E0C\u69FD\u5B9E\u8D28\u5C31\u662F\u4E00\u4E2A\u6570\u7EC4\uFF0C\u6570\u636E[0,2^14-1]\u5F62\u6210hash slot\u7A7A\u95F4</p><p>redis cluster\u4F7F\u7528\u7684\u662Fhash slot\u7B97\u6CD5\uFF0C\u6709\u56FA\u5B9A\u768416384\u4E2Ahash slot\uFF0Cslot\u662F\u69FD\u7684\u6982\u5FF5\uFF0C\u6709\u70B9\u7C7B\u4F3Cmemcached\u7684slot\uFF0C\u5C31\u7406\u89E3\u4E3A\u6570\u636E\u7BA1\u7406\u548C\u8FC1\u79FB\u7684\u57FA\u672C\u5355\u4F4D\u5427\u3002</p><p><strong>redis cluster\u7B97\u662F\u771F\u6B63\u670D\u52A1\u7AEF\u7684\u5206\u5E03\u5F0F\u7F13\u5B58\u7CFB\u7EDF\uFF0C\u4E0D\u50CFmemcached\u548C2.0\u7684redis\u9700\u8981\u5728\u5BA2\u6237\u7AEF\u8FDB\u884C\u8D1F\u8F7D\u5747\u8861\u3002</strong></p><p><strong>\u7B97\u6CD5:</strong></p><p>\u5BF9\u6BCF\u4E2A key \u8BA1\u7B97 CRC16 \u503C\uFF0C\u7136\u540E\u5BF9 16384 \u53D6\u6A21\uFF0C\u53EF\u4EE5\u83B7\u53D6 key \u5BF9\u5E94\u7684 hash slot\u3002</p><p><strong>\u6570\u636E\u5206\u533A</strong></p><p>Redis Cluster \u91C7\u7528<strong>\u865A\u62DF\u69FD\u5206\u533A</strong>\uFF0C\u6240\u6709\u7684<strong>\u952E</strong>\u6839\u636E<strong>\u54C8\u5E0C\u51FD\u6570</strong>\u6620\u5C04\u5230 0~16383 \uFF08redis\u9ED8\u8BA4\u662F16384\u4E2A\u69FD\uFF09\u6574\u6570\u69FD\u5185\uFF0C\u8BA1\u7B97\u516C\u5F0F\uFF1Aslot = CRC16\uFF08key\uFF09&amp; 16384\u3002\u6BCF\u4E2A\u8282\u70B9\u8D1F\u8D23\u7EF4\u62A4\u4E00\u90E8\u5206\u69FD\u4EE5\u53CA\u69FD\u6240\u6620\u5C04\u7684<strong>\u952E\u503C\u6570\u636E</strong>\uFF0C\u5982\u56FE\u6240\u793A\uFF1A</p><blockquote><p>redis\u96C6\u7FA4\u5E76\u6CA1\u6709\u4F7F\u7528\u4E00\u81F4\u6027hash\u800C\u662F\u5F15\u5165\u4E86\u54C8\u5E0C\u69FD\u7684\u6982\u5FF5\uFF0Credis\u96C6\u7FA4\u670916384\u4E2Ahash\u69FD\uFF0C\u6BCF\u4E2Akey\u901A\u8FC7CRC16\u6821\u9A8C\u540E\u5BF916384\u53D6\u6A21\u6765\u51B3\u5B9A\u653E\u54EA\u4E2A\u69FD\uFF0C\u96C6\u7FA4\u4E2D\u6BCF\u4E00\u4E2A\u7ED3\u70B9\u8D1F\u8D23\u4E00\u90E8\u5206\u69FD\uFF0C\u4F46\u4E3A\u4EC0\u4E48hash\u69FD\u7684\u6570\u91CF\u662F16384\u5462\uFF1F</p><p>CRC16\u4EA7\u751F65535\u4F4D</p></blockquote><p><img src="https:////upload-images.jianshu.io/upload_images/11772383-cef761c010b2db72.png?imageMogr2/auto-orient/strip|imageView2/2/w/782/format/webp" alt="img"></p><p><strong>\u4E3E\u4E2A\u4F8B\u5B50</strong></p><p><img src="https:////upload-images.jianshu.io/upload_images/11772383-d3adce37a8763257.png?imageMogr2/auto-orient/strip|imageView2/2/w/874/format/webp" alt="img"> \u5F53\u524D\u96C6\u7FA4\u6709 5 \u4E2A\u8282\u70B9\uFF0C\u6BCF\u4E2A\u8282\u70B9\u5E73\u5747\u5927\u7EA6\u8D1F\u8D23 3276 \u4E2A<strong>\u69FD</strong>\u3002\u7531\u4E8E\u91C7\u7528<strong>\u9AD8\u8D28\u91CF</strong>\u7684<strong>\u54C8\u5E0C\u7B97\u6CD5</strong>\uFF0C\u6BCF\u4E2A\u69FD\u6240\u6620\u5C04\u7684\u6570\u636E\u901A\u5E38\u6BD4\u8F83<strong>\u5747\u5300</strong>\uFF0C\u5C06\u6570\u636E\u5E73\u5747\u5212\u5206\u5230 5 \u4E2A\u8282\u70B9\u8FDB\u884C<strong>\u6570\u636E\u5206\u533A</strong>\u3002Redis Cluster \u5C31\u662F\u91C7\u7528<strong>\u865A\u62DF\u69FD\u5206\u533A</strong>\u3002</p><p><strong>\u8282\u70B91</strong>\uFF1A \u5305\u542B 0 \u5230 3276 \u53F7\u54C8\u5E0C\u69FD\u3002</p><p><strong>\u8282\u70B92</strong>\uFF1A\u5305\u542B 3277 \u5230 6553 \u53F7\u54C8\u5E0C\u69FD\u3002</p><p><strong>\u8282\u70B93</strong>\uFF1A\u5305\u542B 6554 \u5230 9830 \u53F7\u54C8\u5E0C\u69FD\u3002</p><p><strong>\u8282\u70B94</strong>\uFF1A\u5305\u542B 9831 \u5230 13107 \u53F7\u54C8\u5E0C\u69FD\u3002</p><p><strong>\u8282\u70B95</strong>\uFF1A\u5305\u542B 13108 \u5230 16383 \u53F7\u54C8\u5E0C\u69FD\u3002</p><p>\u6240\u4EE5hash slot\u7684\u597D\u5904\u662F\u53EF\u4EE5\u50CF\u78C1\u76D8\u5206\u533A\u4E00\u6837\u81EA\u7531\u5206\u914D\u69FD\u4F4D\uFF0C\u5728\u914D\u7F6E\u6587\u4EF6\u91CC\u53EF\u4EE5\u6307\u5B9A\uFF0C\u4E5F\u53EF\u4EE5\u8BA9redis\u81EA\u5DF1\u9009\u62E9\u5206\u914D\uFF0C\u7ED3\u679C\u5747\u5300\u3002</p><p>\u8FD9\u79CD\u7ED3\u6784\u5F88\u5BB9\u6613<strong>\u6DFB\u52A0</strong>\u6216\u8005<strong>\u5220\u9664</strong>\u8282\u70B9\u3002\u5982\u679C<strong>\u589E\u52A0</strong>\u4E00\u4E2A\u8282\u70B9 6\uFF0C\u5C31\u9700\u8981\u4ECE\u8282\u70B9 1 ~ 5 \u83B7\u5F97\u90E8\u5206<strong>\u69FD</strong>\u5206\u914D\u5230\u8282\u70B9 6 \u4E0A\u3002\u5982\u679C\u60F3<strong>\u79FB\u9664</strong>\u8282\u70B9 1\uFF0C\u9700\u8981\u5C06\u8282\u70B9 1 \u4E2D\u7684<strong>\u69FD</strong>\u79FB\u5230\u8282\u70B9 2 ~ 5 \u4E0A\uFF0C\u7136\u540E\u5C06<strong>\u6CA1\u6709\u4EFB\u4F55\u69FD</strong>\u7684\u8282\u70B9 1 \u4ECE\u96C6\u7FA4\u4E2D<strong>\u79FB\u9664</strong>\u5373\u53EF\u3002</p><p>\u7531\u4E8E\u4ECE\u4E00\u4E2A\u8282\u70B9\u5C06<strong>\u54C8\u5E0C\u69FD</strong>\u79FB\u52A8\u5230\u53E6\u4E00\u4E2A\u8282\u70B9\u5E76\u4E0D\u4F1A<strong>\u505C\u6B62\u670D\u52A1</strong>\uFF0C\u6240\u4EE5\u65E0\u8BBA<strong>\u6DFB\u52A0\u5220\u9664</strong>\u6216\u8005<strong>\u6539\u53D8</strong>\u67D0\u4E2A\u8282\u70B9\u7684<strong>\u54C8\u5E0C\u69FD\u7684\u6570\u91CF</strong>\u90FD\u4E0D\u4F1A\u9020\u6210<strong>\u96C6\u7FA4\u4E0D\u53EF\u7528</strong>\u7684\u72B6\u6001.</p><h2 id="" tabindex="-1"><a class="header-anchor" href="#" aria-hidden="true">#</a></h2><h4 id="\u7F13\u5B58\u7684key-hash\u7ED3\u679C\u662F\u548Cslot\u7ED1\u5B9A\u7684-\u800C\u4E0D\u662F\u548C\u670D\u52A1\u5668\u8282\u70B9\u7ED1\u5B9A-\u6240\u4EE5\u8282\u70B9\u7684\u66F4\u66FF\u53EA\u9700\u8981\u8FC1\u79FBslot\u5373\u53EF\u5E73\u6ED1\u8FC7\u6E21\u3002" tabindex="-1"><a class="header-anchor" href="#\u7F13\u5B58\u7684key-hash\u7ED3\u679C\u662F\u548Cslot\u7ED1\u5B9A\u7684-\u800C\u4E0D\u662F\u548C\u670D\u52A1\u5668\u8282\u70B9\u7ED1\u5B9A-\u6240\u4EE5\u8282\u70B9\u7684\u66F4\u66FF\u53EA\u9700\u8981\u8FC1\u79FBslot\u5373\u53EF\u5E73\u6ED1\u8FC7\u6E21\u3002" aria-hidden="true">#</a> <strong>\u7F13\u5B58\u7684key hash\u7ED3\u679C\u662F\u548Cslot\u7ED1\u5B9A\u7684\uFF0C\u800C\u4E0D\u662F\u548C\u670D\u52A1\u5668\u8282\u70B9\u7ED1\u5B9A\uFF0C\u6240\u4EE5\u8282\u70B9\u7684\u66F4\u66FF\u53EA\u9700\u8981\u8FC1\u79FBslot\u5373\u53EF\u5E73\u6ED1\u8FC7\u6E21\u3002</strong></h4><h2 id="\u4F46\u662Fredis\u5206\u7247\u6280\u672F\u4E5F\u6709\u529F\u80FD\u9650\u5236" tabindex="-1"><a class="header-anchor" href="#\u4F46\u662Fredis\u5206\u7247\u6280\u672F\u4E5F\u6709\u529F\u80FD\u9650\u5236" aria-hidden="true">#</a> \u4F46\u662Fredis\u5206\u7247\u6280\u672F\u4E5F\u6709\u529F\u80FD\u9650\u5236\uFF1A</h2><p>\u7B14\u8005\u9047\u5230\u8FC7\u7684\u4E00\u4E9B\u9650\u5236\u4E3B\u8981\u5C31\u662F\u4EE5\u4E0B\u51E0\u70B9\uFF1A</p><p>1.\u5BF9\u4E8Epipeline\u6279\u91CF\u64CD\u4F5C\uFF0C\u53EA\u80FD\u8DEF\u7531\u5230\u4E00\u4E2A\u7247\u533A\uFF0C\u538B\u529B\u76F8\u5BF9\u5927</p><p>2.hmset() map\u7ED3\u6784\u4E5F\u662F\u53EA\u80FD\u8DEF\u7531\u5230\u4E00\u4E2A\u7247\u533A\uFF0C\u662F\u6839\u636E\u5927key\u8FDB\u884Chash\uFF0C\u5373\u4F7F\u6709\u5F88\u591A\u4E2Afield\u3002</p><p>3.\u4E8B\u52A1\uFF0C\u4E0D\u540C\u7247\u533A\u65E0\u6CD5\u5728\u540C\u4E00\u4E2A\u4E8B\u52A1\u4E2D</p>',42),n=[e];function h(g,i){return t(),o("div",null,n)}const p=s(a,[["render",h],["__file","20.html.vue"]]);export{p as default};