import{_ as i,r as t,o,c as r,a as e,b as s,w as c,e as n,d as p}from"./app.74e47ba8.js";const d={},u={href:"http://nsddd.top",target:"_blank",rel:"noopener noreferrer"},b=n("author"),m=e("h1",{id:"\u7B2C35\u8282-client-go-\u5199-k8s-\u63A7\u5236\u5668",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#\u7B2C35\u8282-client-go-\u5199-k8s-\u63A7\u5236\u5668","aria-hidden":"true"},"#"),n(" \u7B2C35\u8282 client-go \u5199 k8s \u63A7\u5236\u5668")],-1),v=e("div",null,[e("a",{href:"34.md",style:{float:"left"}},"\u2B06\uFE0F\u4E0A\u4E00\u8282\u{1F517} "),e("a",{href:"36.md",style:{float:"right"}}," \u2B07\uFE0F\u4E0B\u4E00\u8282\u{1F517}")],-1),k=e("br",null,null,-1),h=n("\u2764\uFE0F\u{1F495}\u{1F495}\u65B0\u65F6\u4EE3\u62E5\u62B1\u4E91\u539F\u751F\uFF0C\u4E91\u539F\u751F\u5177\u6709\u73AF\u5883\u7EDF\u4E00\u3001\u6309\u9700\u4ED8\u8D39\u3001\u5373\u5F00\u5373\u7528\u3001\u7A33\u5B9A\u6027\u5F3A\u7279\u70B9\u3002Myblog:"),g={href:"http://nsddd.top/",target:"_blank",rel:"noopener noreferrer"},_=n("http://nsddd.top"),f=e("hr",null,null,-1),y=e("p",null,"[TOC]",-1),S=e("h2",{id:"\u63A7\u5236\u5668",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#\u63A7\u5236\u5668","aria-hidden":"true"},"#"),n(" \u63A7\u5236\u5668")],-1),R=e("p",null,"Contaoller \u81F3\u5C11\u8FFD\u8E2A\u4E00\u79CD\u7C7B\u578B\u7684 Kubernetes \u8D44\u6E90\u3002\u8FD9\u4E9B \u5BF9\u8C61 \u6709\u4E00\u4E2A\u4EE3\u8868\u671F\u671B\u72B6\u6001\u7684 spec \u5B57\u6BB5\uFF0C\u8BE5\u8D44\u6E90\u7684\u63A7\u5236\u5668\u8D1F\u8D23\u786E\u4FDD\u5F53\u524D\u72B6\u6001\u63A5\u8FD1\u671F\u671B\u72B6\u6001\u3002",-1),x=n("kubernetes \u5B98\u65B9\u4E00\u4E2A "),N={href:"https://github.com/kubernetes/sample-controller",target:"_blank",rel:"noopener noreferrer"},T=n("\u5B9E\u73B0\u7B80\u5355\u7684 sample-controller"),C=n(" \u6848\u4F8B"),A=n("kubernetes \u5B98\u65B9\u4E00\u4E2A "),E={href:"https://github.com/rootsongjc/kubernetes-client-go-sample",target:"_blank",rel:"noopener noreferrer"},w=n("\u7B80\u5355\u7684\u5B9E\u73B0 client-go-sample"),j=n(" \u6848\u4F8B"),B=e("h2",{id:"client-go",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#client-go","aria-hidden":"true"},"#"),n(" client-go")],-1),M={href:"https://github.com/kubernetes/client-go",target:"_blank",rel:"noopener noreferrer"},O=n("GitHub \u5730\u5740"),$=e("p",null,"\u6211\u4EEC\u5982\u4F55\u548C Kubernetes \u5BF9\u8BDD\uFF0C\u662F\u7684\uFF0C\u4F7F\u7528 kubectl \u53EF\u4EE5\u4EE5 CRL \u65B9\u5F0F\u548C Kubernetes \u4EA4\u4E92\u3002",-1),F=e("p",null,"\u5982\u4F55\u4F7F\u7528 code \u5B9E\u73B0\uFF0C\u662F\u7684\uFF0C\u53EF\u4EE5\u4F7F\u7528 client-go\uFF0C\u8FD9\u5F88\u91CD\u8981\uFF01\uFF01\uFF01",-1),L=e("h3",{id:"\u8BBF\u95EE-kubernetes-\u96C6\u7FA4\u7684\u65B9\u5F0F",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#\u8BBF\u95EE-kubernetes-\u96C6\u7FA4\u7684\u65B9\u5F0F","aria-hidden":"true"},"#"),n(" \u8BBF\u95EE Kubernetes \u96C6\u7FA4\u7684\u65B9\u5F0F")],-1),P=e("p",null,"\u8BBF\u95EEkubernetes\u96C6\u7FA4\u6709\u4EE5\u4E0B\u51E0\u79CD\u65B9\u5F0F\uFF1A",-1),U=e("thead",null,[e("tr",null,[e("th",null,"\u65B9\u5F0F"),e("th",null,"\u7279\u70B9"),e("th",null,"\u652F\u6301\u8005")])],-1),q=e("tr",null,[e("td",null,"Kubernetes dashboard"),e("td",null,"\u76F4\u63A5\u901A\u8FC7Web UI\u8FDB\u884C\u64CD\u4F5C\uFF0C\u7B80\u5355\u76F4\u63A5\uFF0C\u53EF\u5B9A\u5236\u5316\u7A0B\u5EA6\u4F4E"),e("td",null,"\u5B98\u65B9\u652F\u6301")],-1),D=e("tr",null,[e("td",null,"kubectl"),e("td",null,"\u547D\u4EE4\u884C\u64CD\u4F5C\uFF0C\u529F\u80FD\u6700\u5168\uFF0C\u4F46\u662F\u6BD4\u8F83\u590D\u6742\uFF0C\u9002\u5408\u5BF9\u5176\u8FDB\u884C\u8FDB\u4E00\u6B65\u7684\u5206\u88C5\uFF0C\u5B9A\u5236\u529F\u80FD\uFF0C\u7248\u672C\u9002\u914D\u6700\u597D"),e("td",null,"\u5B98\u65B9\u652F\u6301")],-1),I={href:"https://github.com/kubernetes/client-go",target:"_blank",rel:"noopener noreferrer"},K=n("client-go"),V=e("td",null,"\u4ECEkubernetes\u7684\u4EE3\u7801\u4E2D\u62BD\u79BB\u51FA\u6765\u7684\u5BA2\u6237\u7AEF\u5305\uFF0C\u7B80\u5355\u6613\u7528\uFF0C\u4F46\u9700\u8981\u5C0F\u5FC3\u533A\u5206kubernetes\u7684API\u7248\u672C",-1),G=e("td",null,"\u5B98\u65B9\u652F\u6301",-1),H={href:"https://github.com/kubernetes-incubator/client-python",target:"_blank",rel:"noopener noreferrer"},z=n("client-python"),W=e("td",null,"python\u5BA2\u6237\u7AEF\uFF0Ckubernetes-incubator",-1),Y=e("td",null,"\u5B98\u65B9\u652F\u6301",-1),J={href:"https://github.com/fabric8io/kubernetes-client",target:"_blank",rel:"noopener noreferrer"},Q=n("Java client"),X=e("td",null,"fabric8\u4E2D\u7684\u4E00\u90E8\u5206\uFF0Ckubernetes\u7684java\u5BA2\u6237\u7AEF",-1),Z=e("td",null,"Red Hat",-1),ee=p(`<h2 id="\u7B80\u5355\u7684\u5B9E\u73B0-client-go-sample" tabindex="-1"><a class="header-anchor" href="#\u7B80\u5355\u7684\u5B9E\u73B0-client-go-sample" aria-hidden="true">#</a> \u7B80\u5355\u7684\u5B9E\u73B0 client-go-sample</h2><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>$ go get github.com/rootsongjc/kubernetes-client-go-sample
$ <span class="token builtin class-name">cd</span> <span class="token variable">$GOPATH</span>/src/github.com/rootsongjc/kubernetes-client-go-sample
$ go build main.go
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u8BE5\u547D\u4EE4\u7684\u7528\u6CD5\u5982\u4E0B\u3002</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code> $ ./main
  <span class="token parameter variable">-app</span> string
        application name <span class="token punctuation">(</span>default <span class="token string">&quot;app&quot;</span><span class="token punctuation">)</span>
  <span class="token parameter variable">-deployment</span> string
        deployment name
  <span class="token parameter variable">-image</span> string
        new image name
  <span class="token parameter variable">-kubeconfig</span> string
        <span class="token punctuation">(</span>optional<span class="token punctuation">)</span> absolute path to the kubeconfig <span class="token function">file</span> <span class="token punctuation">(</span>default <span class="token string">&quot;/Users/jimmy/.kube/config&quot;</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>\u4F7F\u7528\u4E0D\u5B58\u5728\u7684image\u66F4\u65B0</strong></p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code> $ ./main <span class="token parameter variable">-deployment</span> filebeat-test <span class="token parameter variable">-image</span> harbor-001.jimmysong.io/library/analytics-docker-test:Build_9 
Found deployment
name -<span class="token operator">&gt;</span> filebeat-test
Old image -<span class="token operator">&gt;</span> harbor-001.jimmysong.io/library/analytics-docker-test:Build_8
New image -<span class="token operator">&gt;</span> harbor-001.jimmysong.io/library/analytics-docker-test:Build_9
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u67E5\u770BDeployment\u7684event\u3002</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>$ kubectl describe deployment filebeat-test   
Name:            filebeat-test
Namespace:        default
CreationTimestamp:    Fri, <span class="token number">19</span> May <span class="token number">2017</span> <span class="token number">15</span>:12:28 +0800
Labels:            k8s-app<span class="token operator">=</span>filebeat-test
Selector:        k8s-app<span class="token operator">=</span>filebeat-test
Replicas:        <span class="token number">2</span> updated <span class="token operator">|</span> <span class="token number">3</span> total <span class="token operator">|</span> <span class="token number">2</span> available <span class="token operator">|</span> <span class="token number">2</span> unavailable
StrategyType:        RollingUpdate
MinReadySeconds:    <span class="token number">0</span>
RollingUpdateStrategy:    <span class="token number">1</span> max unavailable, <span class="token number">1</span> max surge
Conditions:
  Type        Status    Reason
  ----        ------    ------
  Available     True    MinimumReplicasAvailable
  Progressing     True    ReplicaSetUpdated
OldReplicaSets:    filebeat-test-2365467882 <span class="token punctuation">(</span><span class="token number">2</span>/2 replicas created<span class="token punctuation">)</span>
NewReplicaSet:    filebeat-test-2470325483 <span class="token punctuation">(</span><span class="token number">2</span>/2 replicas created<span class="token punctuation">)</span>
Events:
  FirstSeen    LastSeen    Count    From                SubObjectPath    Type        ReasoMessage
  ---------    --------    -----    ----                -------------    --------    ------------
  2h        1m        <span class="token number">3</span>    <span class="token punctuation">{</span>deployment-controller <span class="token punctuation">}</span>            Normal        ScalingReplicaSet    Scaled down replica <span class="token builtin class-name">set</span> filebeat-test-2365467882 to <span class="token number">2</span>
  1m        1m        <span class="token number">1</span>    <span class="token punctuation">{</span>deployment-controller <span class="token punctuation">}</span>            Normal        ScalingReplicaSet    Scaled up replica <span class="token builtin class-name">set</span> filebeat-test-2470325483 to <span class="token number">1</span>
  1m        1m        <span class="token number">1</span>    <span class="token punctuation">{</span>deployment-controller <span class="token punctuation">}</span>            Normal        ScalingReplicaSet    Scaled up replica <span class="token builtin class-name">set</span> filebeat-test-2470325483 to <span class="token number">2</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u53EF\u4EE5\u770B\u5230\u8001\u7684ReplicaSet\u4ECE3\u4E2Areplica\u51CF\u5C11\u5230\u4E862\u4E2A\uFF0C\u67092\u4E2A\u4F7F\u7528\u65B0\u914D\u7F6E\u7684replica\u4E0D\u53EF\u7528\uFF0C\u76EE\u524D\u53EF\u7528\u7684replica\u662F2\u4E2A\u3002</p><p>\u8FD9\u662F\u56E0\u4E3A\u6211\u4EEC\u6307\u5B9A\u7684\u955C\u50CF\u4E0D\u5B58\u5728\uFF0C\u67E5\u770BDeployment\u7684pod\u7684\u72B6\u6001\u3002</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>$ kubectl get pods <span class="token parameter variable">-l</span> k8s-app<span class="token operator">=</span>filebeat-test
NAME                             READY     STATUS             RESTARTS   AGE
filebeat-test-2365467882-4zwx8   <span class="token number">2</span>/2       Running            <span class="token number">0</span>          33d
filebeat-test-2365467882-rqskl   <span class="token number">2</span>/2       Running            <span class="token number">0</span>          33d
filebeat-test-2470325483-6vjbw   <span class="token number">1</span>/2       ImagePullBackOff   <span class="token number">0</span>          4m
filebeat-test-2470325483-gc14k   <span class="token number">1</span>/2       ImagePullBackOff   <span class="token number">0</span>          4m
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u6211\u4EEC\u53EF\u4EE5\u770B\u5230\u6709\u4E24\u4E2Apod\u6B63\u5728\u62C9\u53D6image\u3002</p><p><strong>\u8FD8\u539F\u4E3A\u539F\u5148\u7684\u955C\u50CF</strong></p><p>\u5C06image\u8BBE\u7F6E\u4E3A\u539F\u6765\u7684\u955C\u50CF\u3002</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>$ ./main <span class="token parameter variable">-deployment</span> filebeat-test <span class="token parameter variable">-image</span> harbor-001.jimmysong.io/library/analytics-docker-test:Build_8
Found deployment
name -<span class="token operator">&gt;</span> filebeat-test
Old image -<span class="token operator">&gt;</span> harbor-001.jimmysong.io/library/analytics-docker-test:Build_9
New image -<span class="token operator">&gt;</span> harbor-001.jimmysong.io/library/analytics-docker-test:Build_8
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u73B0\u5728\u518D\u67E5\u770BDeployment\u7684\u72B6\u6001\u3002</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>$ kubectl describe deployment filebeat-test   
Name:            filebeat-test
Namespace:        default
CreationTimestamp:    Fri, <span class="token number">19</span> May <span class="token number">2017</span> <span class="token number">15</span>:12:28 +0800
Labels:            k8s-app<span class="token operator">=</span>filebeat-test
Selector:        k8s-app<span class="token operator">=</span>filebeat-test
Replicas:        <span class="token number">3</span> updated <span class="token operator">|</span> <span class="token number">3</span> total <span class="token operator">|</span> <span class="token number">3</span> available <span class="token operator">|</span> <span class="token number">0</span> unavailable
StrategyType:        RollingUpdate
MinReadySeconds:    <span class="token number">0</span>
RollingUpdateStrategy:    <span class="token number">1</span> max unavailable, <span class="token number">1</span> max surge
Conditions:
  Type        Status    Reason
  ----        ------    ------
  Available     True    MinimumReplicasAvailable
  Progressing     True    NewReplicaSetAvailable
OldReplicaSets:    <span class="token operator">&lt;</span>none<span class="token operator">&gt;</span>
NewReplicaSet:    filebeat-test-2365467882 <span class="token punctuation">(</span><span class="token number">3</span>/3 replicas created<span class="token punctuation">)</span>
Events:
  FirstSeen    LastSeen    Count    From                SubObjectPath    Type        ReasoMessage
  ---------    --------    -----    ----                -------------    --------    ------------
  2h        8m        <span class="token number">3</span>    <span class="token punctuation">{</span>deployment-controller <span class="token punctuation">}</span>            Normal        ScalingReplicaSet    Scaled down replica <span class="token builtin class-name">set</span> filebeat-test-2365467882 to <span class="token number">2</span>
  8m        8m        <span class="token number">1</span>    <span class="token punctuation">{</span>deployment-controller <span class="token punctuation">}</span>            Normal        ScalingReplicaSet    Scaled up replica <span class="token builtin class-name">set</span> filebeat-test-2470325483 to <span class="token number">1</span>
  8m        8m        <span class="token number">1</span>    <span class="token punctuation">{</span>deployment-controller <span class="token punctuation">}</span>            Normal        ScalingReplicaSet    Scaled up replica <span class="token builtin class-name">set</span> filebeat-test-2470325483 to <span class="token number">2</span>
  2h        1m        <span class="token number">3</span>    <span class="token punctuation">{</span>deployment-controller <span class="token punctuation">}</span>            Normal        ScalingReplicaSet    Scaled up replica <span class="token builtin class-name">set</span> filebeat-test-2365467882 to <span class="token number">3</span>
  1m        1m        <span class="token number">1</span>    <span class="token punctuation">{</span>deployment-controller <span class="token punctuation">}</span>            Normal        ScalingReplicaSet    Scaled down replica <span class="token builtin class-name">set</span> filebeat-test-2470325483 to <span class="token number">0</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u53EF\u4EE5\u770B\u5230available\u7684replica\u4E2A\u6570\u6062\u590D\u62103\u4E86\u3002</p><h2 id="end-\u94FE\u63A5" tabindex="-1"><a class="header-anchor" href="#end-\u94FE\u63A5" aria-hidden="true">#</a> END \u94FE\u63A5</h2><ul><li><div><a href="34.md" style="float:left;">\u2B06\uFE0F\u4E0A\u4E00\u8282\u{1F517} </a><a href="36.md" style="float:right;"> \uFE0F\u4E0B\u4E00\u8282\u{1F517}</a></div></li></ul>`,20),ne=n("\u24C2\uFE0F\u56DE\u5230\u76EE\u5F55\u{1F3E0}"),se={href:"https://nsddd.top/archives/contributors",target:"_blank",rel:"noopener noreferrer"},ae=e("strong",null,"\u{1FAF5}\u53C2\u4E0E\u8D21\u732E\u{1F49E}\u2764\uFE0F\u200D\u{1F525}\u{1F496}",-1),te=n(")"),le=n("\u2734\uFE0F\u7248\u6743\u58F0\u660E \xA9 \uFF1A\u672C\u4E66\u6240\u6709\u5185\u5BB9\u9075\u5FAA"),ie={href:"http://zh.wikipedia.org/wiki/Wikipedia:CC-by-sa-3.0%E5%8D%8F%E8%AE%AE%E6%96%87%E6%9C%AC",target:"_blank",rel:"noopener noreferrer"},oe=n("CC-BY-SA 3.0\u534F\u8BAE\uFF08\u7F72\u540D-\u76F8\u540C\u65B9\u5F0F\u5171\u4EAB\uFF09\xA9");function re(ce,pe){const a=t("ExternalLinkIcon"),l=t("RouterLink");return o(),r("div",null,[e("ul",null,[e("li",null,[e("a",u,[b,s(a)])])]),m,v,k,e("blockquote",null,[e("p",null,[h,e("a",g,[_,s(a)])])]),f,y,S,R,e("p",null,[x,e("a",N,[T,s(a)]),C]),e("p",null,[A,e("a",E,[w,s(a)]),j]),B,e("ul",null,[e("li",null,[e("a",M,[O,s(a)])])]),$,F,L,P,e("table",null,[U,e("tbody",null,[q,D,e("tr",null,[e("td",null,[e("a",I,[K,s(a)])]),V,G]),e("tr",null,[e("td",null,[e("a",H,[z,s(a)])]),W,Y]),e("tr",null,[e("td",null,[e("a",J,[Q,s(a)])]),X,Z])])]),ee,e("ul",null,[e("li",null,[e("p",null,[s(l,{to:"/"},{default:c(()=>[ne]),_:1})])]),e("li",null,[e("p",null,[e("a",se,[ae,s(a)]),te])]),e("li",null,[e("p",null,[le,e("a",ie,[oe,s(a)])])])])])}const ue=i(d,[["render",re],["__file","35.html.vue"]]);export{ue as default};