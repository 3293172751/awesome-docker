import{_ as a,r as n,o as i,c,a as e,b as o,w as d,e as l,d as s}from"./app.1bf152e6.js";const u={},p={href:"http://nsddd.top",target:"_blank",rel:"noopener noreferrer"},h=l("author"),m=e("h1",{id:"\u7B2C51\u8282-controller-manager",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#\u7B2C51\u8282-controller-manager","aria-hidden":"true"},"#"),l(" \u7B2C51\u8282 Controller Manager")],-1),g=e("div",null,[e("a",{href:"50.md",style:{float:"left"}},"\u2B06\uFE0F\u4E0A\u4E00\u8282\u{1F517} "),e("a",{href:"52.md",style:{float:"right"}}," \u2B07\uFE0F\u4E0B\u4E00\u8282\u{1F517}")],-1),b=e("br",null,null,-1),_=l("\u2764\uFE0F\u{1F495}\u{1F495}\u65B0\u65F6\u4EE3\u62E5\u62B1\u4E91\u539F\u751F\uFF0C\u4E91\u539F\u751F\u5177\u6709\u73AF\u5883\u7EDF\u4E00\u3001\u6309\u9700\u4ED8\u8D39\u3001\u5373\u5F00\u5373\u7528\u3001\u7A33\u5B9A\u6027\u5F3A\u7279\u70B9\u3002Myblog:"),f={href:"http://nsddd.top/",target:"_blank",rel:"noopener noreferrer"},C=l("http://nsddd.top"),k=s(`<hr><p>[TOC]</p><h3 id="\u63A7\u5236\u5668\u5904\u7406\u6D41\u7A0B" tabindex="-1"><a class="header-anchor" href="#\u63A7\u5236\u5668\u5904\u7406\u6D41\u7A0B" aria-hidden="true">#</a> \u63A7\u5236\u5668\u5904\u7406\u6D41\u7A0B</h3><p><img src="http://sm.nsddd.top/sm202303081726112.png" alt="img"></p><h3 id="informer-\u7684\u5185\u90E8\u5DE5\u4F5C\u673A\u5236" tabindex="-1"><a class="header-anchor" href="#informer-\u7684\u5185\u90E8\u5DE5\u4F5C\u673A\u5236" aria-hidden="true">#</a> informer \u7684\u5185\u90E8\u5DE5\u4F5C\u673A\u5236</h3><p><img src="http://sm.nsddd.top/sm202303081727144.png" alt="image-20230308172739991"></p><h3 id="\u63A7\u5236\u5668\u7684\u534F\u540C\u6D41\u7A0B" tabindex="-1"><a class="header-anchor" href="#\u63A7\u5236\u5668\u7684\u534F\u540C\u6D41\u7A0B" aria-hidden="true">#</a> \u63A7\u5236\u5668\u7684\u534F\u540C\u6D41\u7A0B</h3><p><img src="http://sm.nsddd.top/sm202303081726666.jpeg" alt="img"></p><h3 id="\u901A\u7528-controller" tabindex="-1"><a class="header-anchor" href="#\u901A\u7528-controller" aria-hidden="true">#</a> \u901A\u7528 controller</h3><p>\u8FDB\u5165\u5230 kube-controller-manager pod \u4E2D\u6267\u884C <code>kube-controller-manager -h</code> \u547D\u4EE4\u6765\u67E5\u8BE2\u9ED8\u8BA4\u542F\u7528\u7684 controller\u3002</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>kubectl -n kube-system exec -it kube-controller-manager-cadmin -- kube-controller-manager -h
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>\u5E38\u89C1 controller \u5982\u4E0B\uFF1A</p><ul><li>Job Controller\uFF1A\u5904\u7406 job</li><li>Pod AutoScaler\uFF1A\u5904\u7406 pod \u7684\u81EA\u52A8\u7F29\u5BB9/\u6269\u5BB9\u3002</li><li>RelicaSet\uFF1A\u4F9D\u636E Replicaset Spec \u521B\u5EFA Pod\u3002</li><li>Service Controller\uFF1A\u4E3A LoadBalancer type \u7684 service \u521B\u5EFA LB VIP\u3002</li><li>ServiceAccount Controller\uFF1A\u786E\u4FDD serviceaccount \u5728\u5F53\u524D namespace \u5B58\u5728\u3002</li><li>StatefulSet Controller\uFF1A\u5904\u7406 statefulse t\u4E2D\u7684 pod\u3002</li><li>Volume Controller: \u4F9D\u636E PV spec \u521B\u5EFA volume\u3002</li><li>Resource quota Controller\uFF1A\u5728\u7528\u6237\u4F7F\u7528\u8D44\u6E90\u4E4B\u540E\uFF0C\u66F4\u65B0\u72B6\u6001\u3002</li><li>Namespace Controller\uFF1A\u4FDD\u8BC1 namespace \u5220\u9664\u65F6\uFF0C\u8BE5 namespace \u4E0B\u7684\u6240\u6709\u8D44\u6E90\u90FD\u5148\u88AB\u5220\u9664</li><li>Replication Controller\uFF1A\u521B\u5EFA RC \u540E\uFF0C\u8D1F\u8D23\u521B\u5EFA pod\u3002</li><li>Node Controller\uFF1A\u7EF4\u62A4 node \u72B6\u6001\uFF0C\u5904\u7406 evict \u8BF7\u6C42\u7B49\u3002</li><li>Daemon Controller\uFF1A\u4F9D\u636E damonset \u521B\u5EFA pod\u3002</li><li>Deployment Controller\uFF1A\u4F9D\u636E deployment spec \u521B\u5EFA replicaset\u3002</li><li>Endpoint Controller\uFF1A\u4F9D\u636E service spec \u521B\u5EFA endpoint,\u4F9D\u636E podip \u66F4\u65B0 endpoint\u3002</li><li>Garbage Collector\uFF1A\u5904\u7406\u7EA7\u8054\u5220\u9664\uFF0C\u6BD4\u5982\u5220\u9664 deployment \u7684\u540C\u65F6\u5220\u9664 replicaset \u4EE5\u53CA pod\u3002</li><li>CronJob Controller\uFF1A\u5904\u7406cronjob\u3002</li></ul><h3 id="cloud-controller-manager" tabindex="-1"><a class="header-anchor" href="#cloud-controller-manager" aria-hidden="true">#</a> cloud controller manager</h3><p><strong>\u4EC0\u4E48\u65F6\u5019\u9700\u8981cloud controller manager?</strong></p><p>Cloud Controller Manager \u81EA Kubernetes1.6 \u5F00\u59CB\uFF0C\u4ECE kube-controller-manager \u4E2D\u5206\u79BB\u51FA\u6765\uFF0C\u4E3B\u8981\u56E0\u4E3A Cloud Controller Manager \u5F80\u5F80\u9700\u8981\u8DDF\u4F01\u4E1A cloud \u505A\u6DF1\u5EA6\u96C6\u6210\uFF0Crelease cycle \u8DDF Kubernetes \u76F8\u5BF9\u72EC\u7ACB\u3002 \u4E0E Kubernetes \u6838\u5FC3\u7BA1\u7406\u7EC4\u4EF6\u4E00\u8D77\u5347\u7EA7\u662F\u4E00\u4EF6\u8D39\u65F6\u8D39\u529B\u7684\u4E8B\u3002</p><p>\u901A\u5E38 cloud controller manager \u9700\u8981:</p><ul><li>\u8BA4\u8BC1\u6388\u6743\uFF1A\u4F01\u4E1A cloud \u5F80\u5F80\u9700\u8981\u8BA4\u8BC1\u4FE1\u606F\uFF0CKubernetes \u8981\u4E0E Cloud API \u901A\u4FE1\uFF0C\u9700\u8981\u83B7\u53D6 cloud \u7CFB\u7EDF\u91CC\u7684 ServiceAccount;</li><li>Cloud controller manager \u672C\u8EAB\u4F5C\u4E3A\u4E00\u4E2A\u7528\u6237\u6001\u7684 component, \u9700\u8981\u5728 Kubernetes \u4E2D\u6709\u6B63\u786E\u7684 RBAC \u8BBE\u7F6E\uFF0C\u83B7\u5F97\u8D44\u6E90\u64CD\u4F5C\u6743\u9650;</li><li>\u9AD8\u53EF\u7528\uFF1A\u9700\u8981\u901A\u8FC7 leader election \u6765\u786E\u4FDD cloud controller manger \u9AD8\u53EF\u7528\u3002</li></ul><p>cloud controller manager \u662F\u4ECE\u8001\u7248\u672C\u7684 APIServer \u5206\u79BB\u51FA\u6765\u7684\u3002 Kube-APIServer \u548C kube-controller-manager \u4E2D\u4E00\u5B9A\u4E0D\u80FD\u6307\u5B9A cloud-provider,\u5426\u5219\u4F1A\u52A0\u8F7D\u5185\u7F6E\u7684 cloud controller manager\u3002</p><p>Kubelet \u8981\u914D\u7F6E --cloud-provider=external\u3002</p><p>Cloud Controller Manage r\u4E3B\u8981\u652F\u6301:</p><ul><li>Node controller\uFF1A <ul><li>\u8BBF\u95EE cloud API,\u6765\u66F4\u65B0 node \u72B6\u6001;</li><li>\u5728 cloud \u5220\u9664\u8BE5\u8282\u70B9\u4EE5\u540E\uFF0C\u4ECE kubernetes \u5220\u9664 node;</li></ul></li><li>Service controller\uFF1A\u8D1F\u8D23\u914D\u7F6E\u4E3A loadbalancer \u7C7B\u578B\u7684\u670D\u52A1\u914D\u7F6ELB VIP;</li><li>Route Controller\uFF1A\u5728 cloud \u73AF\u5883\u914D\u7F6E\u8DEF\u7531;</li></ul><p>\u53EF\u4EE5\u81EA\u5B9A\u4E49\u4EFB\u4F55\u9700\u8981\u7684 Cloud Controller\u3002</p><p>\u9700\u8981\u5B9A\u5236\u7684 Cloud Controller</p><ul><li>Ingress controller;</li><li>Service Controller;</li><li>\u81EA\u4E3B\u7814\u53D1\u7684controller ,\u6BD4\u5982\u4E4B\u524D\u63D0\u5230\u7684: <ul><li>RBAC controller;</li><li>Account controller\u3002</li></ul></li></ul><h4 id="\u6765\u81EA\u751F\u4EA7\u7684\u7ECF\u9A8C" tabindex="-1"><a class="header-anchor" href="#\u6765\u81EA\u751F\u4EA7\u7684\u7ECF\u9A8C" aria-hidden="true">#</a> \u6765\u81EA\u751F\u4EA7\u7684\u7ECF\u9A8C</h4><p>\u4FDD\u62A4\u597D controller manager \u7684 kubeconfig:</p><ul><li>\u6B64 kubeconfig \u62E5\u6709\u6240\u6709\u8D44\u6E90\u7684\u6240\u6709\u64CD\u4F5C\u6743\u9650\uFF0C\u9632\u6B62\u666E\u901A\u7528\u6237\u901A\u8FC7 <code>kubectl exec kube-controller-manager ca</code>t \u83B7\u53D6\u8BE5\u6587\u4EF6\u3002</li><li>\u7528\u6237\u53EF\u80FD\u505A\u4EFB\u4F55\u4F60\u60F3\u8C61\u4E0D\u5230\u7684\u64CD\u4F5C\uFF0C\u7136\u540E\u6765\u627E\u4F60 support.</li></ul><p>Pod evict \u540E IP \u53D1\u751F\u53D8\u5316\uFF0C\u4F46 endpoint \u4E2D\u7684 address \u66F4\u65B0\u5931\u8D25:</p><ul><li>\u5206\u6790 stacktrace \u53D1\u73B0 endpoint \u5728\u66F4\u65B0 LoadBalancer \u65F6\u8C03\u7528 gophercloud \u8FDE\u63A5 hang \u4F4F\uFF0C\u5BFC\u81F4 endpoint worker \u7EBF\u7A0B\u5168\u90E8\u5361\u6B7B\u3002</li></ul><h3 id="\u786E\u4FDD-scheduler-\u548C-controller-\u7684\u9AD8\u53EF\u7528" tabindex="-1"><a class="header-anchor" href="#\u786E\u4FDD-scheduler-\u548C-controller-\u7684\u9AD8\u53EF\u7528" aria-hidden="true">#</a> \u786E\u4FDD scheduler \u548C controller \u7684\u9AD8\u53EF\u7528</h3><p>Leader Election Kubenetes \u63D0\u4F9B\u57FA\u4E8E configmap \u548C endpoint \u7684 leader election\u7C7B\u5E93\u3002</p><blockquote><p>\u65B0\u7248\u672C\u63D0\u4F9B\u4E86\u66F4\u8F7B\u91CF\u7EA7\u7684 lease \u5BF9\u8C61\u3002</p></blockquote><p>Kubernetes \u91C7\u7528 leader election \u6A21\u5F0F\u542F\u52A8 component \u540E\uFF0C\u4F1A\u521B\u5EFA\u5BF9\u5E94 endpoint,\u5E76\u628A\u5F53\u524D\u7684 leader \u4FE1\u606F annotate \u5230 endponit \u4E0A\u3002</p><blockquote><p>\u548C\u57FA\u4E8E etcd \u7684\u5206\u5E03\u5F0F\u9501\u5DEE\u4E0D\u591A\uFF0C\u5F88\u7C7B\u4F3C\u3002</p></blockquote><p><img src="http://sm.nsddd.top/sm202303081727954.png" alt="image-20230308172716820"></p><h2 id="end-\u94FE\u63A5" tabindex="-1"><a class="header-anchor" href="#end-\u94FE\u63A5" aria-hidden="true">#</a> END \u94FE\u63A5</h2><ul><li><div><a href="50.md" style="float:left;">\u2B06\uFE0F\u4E0A\u4E00\u8282\u{1F517} </a><a href="52.md" style="float:right;"> \uFE0F\u4E0B\u4E00\u8282\u{1F517}</a></div></li></ul>`,38),v=l("\u24C2\uFE0F\u56DE\u5230\u76EE\u5F55\u{1F3E0}"),x={href:"https://nsddd.top/archives/contributors",target:"_blank",rel:"noopener noreferrer"},A=e("strong",null,"\u{1FAF5}\u53C2\u4E0E\u8D21\u732E\u{1F49E}\u2764\uFE0F\u200D\u{1F525}\u{1F496}",-1),S=l(")"),y=l("\u2734\uFE0F\u7248\u6743\u58F0\u660E \xA9 \uFF1A\u672C\u4E66\u6240\u6709\u5185\u5BB9\u9075\u5FAA"),E={href:"http://zh.wikipedia.org/wiki/Wikipedia:CC-by-sa-3.0%E5%8D%8F%E8%AE%AE%E6%96%87%E6%9C%AC",target:"_blank",rel:"noopener noreferrer"},P=l("CC-BY-SA 3.0\u534F\u8BAE\uFF08\u7F72\u540D-\u76F8\u540C\u65B9\u5F0F\u5171\u4EAB\uFF09\xA9");function B(I,R){const r=n("ExternalLinkIcon"),t=n("RouterLink");return i(),c("div",null,[e("ul",null,[e("li",null,[e("a",p,[h,o(r)])])]),m,g,b,e("blockquote",null,[e("p",null,[_,e("a",f,[C,o(r)])])]),k,e("ul",null,[e("li",null,[e("p",null,[o(t,{to:"/"},{default:d(()=>[v]),_:1})])]),e("li",null,[e("p",null,[e("a",x,[A,o(r)]),S])]),e("li",null,[e("p",null,[y,e("a",E,[P,o(r)])])])])])}const L=a(u,[["render",B],["__file","51.html.vue"]]);export{L as default};