<template><div><ul>
<li><a href="http://nsddd.top" target="_blank" rel="noopener noreferrer">author<ExternalLinkIcon/></a></li>
</ul>
<h1 id="第90节-gitops-进阶理论" tabindex="-1"><a class="header-anchor" href="#第90节-gitops-进阶理论" aria-hidden="true">#</a> 第90节 GitOps 进阶理论</h1>
<div><a href = '89.md' style='float:left'>⬆️上一节🔗  </a><a href = '91.md' style='float: right'>  ⬇️下一节🔗</a></div>
<br>
<blockquote>
<p>❤️💕💕新时代拥抱云原生，云原生具有环境统一、按需付费、即开即用、稳定性强特点。Myblog:<a href="http://nsddd.top/" target="_blank" rel="noopener noreferrer">http://nsddd.top<ExternalLinkIcon/></a></p>
</blockquote>
<hr>
<p>[TOC]</p>
<h2 id="前言" tabindex="-1"><a class="header-anchor" href="#前言" aria-hidden="true">#</a> 前言</h2>
<p>前面我们介绍了 GitOps 的基础理论。阅读GitOps 实践理论：Kubernetes 部署策略深入解析：https://nsddd.top/zh/posts/gitops-practice-theory-part/</p>
<p>这一节我们来看看 GitOps 的进阶部分，包括访问控制与安全处理，Secret ，以及 可观测性表现。</p>
<p>话不多说，我们立马开始  ~</p>
<h2 id="访问控制" tabindex="-1"><a class="header-anchor" href="#访问控制" aria-hidden="true">#</a> 访问控制</h2>
<p>安全主题既关键又复杂。通常，它是由一个安全专家甚至是一个专门的安全团队来处理的。那么，为什么我们在谈论它的同时，指责GitOps呢？GitOps改变安全责任的方式与改变操作责任边界的方式相同。借助GitOps和Kubernetes，工程团队可以编写Kubernetes访问配置并使用Git强制执行正确的配置更改流程，从而提高安全性。考虑到安全团队不再是一个瓶颈，它可以将一些责任卸给开发人员，专注于提供安全基础设施。GitOps促进了安全工程师和DevOps工程师之间更紧密、更高效的协作，允许任何影响环境安全的拟议更改在影响生产之前经过适当的安全审查和批准。</p>
<p><strong>我继续来解释一下什么是访问控制：</strong></p>
<blockquote>
<p>为了更好地结合GitOps理解访问控制的细微差别，我们先来了解一下什么是访问控制。访问控制是限制对系统或物理或虚拟资源的访问的一种方式。它规定了允许谁访问受保护的资源以及允许执行哪些操作。访问控制由两部分组成：身份验证，确保用户是他们所说的那个人；授权，确保他们有适当的访问权来对指定的资源执行所请求的操作。不管在哪个领域，访问控制包括三个主要组成部分：主体、客体和引用监视器。访问控制系统最直接的演示是一个物理世界的例子：一个人试图通过门进入建筑物。人是一个试图接近客体的主体，客体是一个建筑物。门是一个参考监视器，只有当试图进入的人拥有门钥匙时，它才会授权访问请求。</p>
</blockquote>
<p>就比如说对于我们 OpenIM 团队来说，可能每个人都需要一套环境，需要一套 namespace，如何做到隔离性和访问控制对于我们来说尤为重要。</p>
<p><img src="http://sm.nsddd.top/sm202311282113848.png" alt="image-20231128211345647"></p>
<p><strong>要保护什么？</strong></p>
<p>将应用程序交付流程端到端地保护到Kubernetes集群时，需要保护许多不同的组件。其中包括（但不限于）</p>
<ul>
<li>CICD 管道</li>
<li>Container registry</li>
<li>Git 仓库</li>
<li>Kubernetes 集群</li>
<li>云提供商和数据中心</li>
<li>应用程序本身</li>
<li>GitOps Operator（如果需要）</li>
</ul>
<h2 id="gitops-operator" tabindex="-1"><a class="header-anchor" href="#gitops-operator" aria-hidden="true">#</a> GitOps Operator</h2>
<p>这些组件中的每一个都有其独特的安全问题、身份验证机制和基于角色的访问控制（RBAC）模型，并且将根据许多因素和考虑进行不同的配置。由于安全性取决于最薄弱的环节，因此所有组件在集群的整体安全性中扮演着同等重要的角色。一般来说，安全性的选择往往是安全性和便利性之间的平衡行为。可能非常安全的系统可能非常不方便以至于从用户的角度来看它变得不可用。作为运营商，目标是在不影响安全性的前提下，尽可能合理地提供方便的用户体验。影响组件安全性的一些考虑因素包括:</p>
<ul>
<li>潜在的攻击向量</li>
<li>如果组件受损，最坏的后果是</li>
<li>谁应该被允许访问该服务</li>
<li>什么权限（RBAC）各种用户都有</li>
<li>可以采取哪些保护措施来减轻风险</li>
</ul>
<p>构建系统通常配置有足够凭证以执行其职责。例如，要发布新的容器映像，CI/CD管道可能需要容器注册中心的凭据。传统上，构建系统还被授予访问Kubernetes集群的权限和凭据，以执行实际部署。随着GitOps的出现，直接访问集群不再是必要的。具有CI/CD构建系统访问权限的攻击者可能会以多种方式危及安全性。例如，可以修改管道以公开前面提到的容器regis-try或集群凭证。另一个例子是管道可能被劫持，从而将恶意容器部署到集群中，而不是部署到预期的容器中。在某些场景中，坏的参与者可能仅仅使用CI系统的标准功能而危及安全性。</p>
<p>集装箱登记处容器注册中心包含将部署在集群中的容器映像。因为注册中心中的容器映像有可能在集群中运行，所以需要信任注册中心的内容以及可以推送到该注册中心的用户。因为任何人都可以将映像发布到公共注册中心，如Docker-Hub、Quay.io和grc.io，所以完全阻止从这些不可信的容器注册中心提取映像是企业的标准安全措施。相反，所有的映像都将从一个内部的、受信任的注册表中提取，可以定期扫描存储库中的漏洞。具有受信任容器注册表权限的攻击者可以将图像推送到注册表并覆盖现有的、以前受信任的图像。例如，假设您的集群已经在运行某个 <code v-pre>image mycompany/guestbook:v1.0</code> 具有注册表访问权限的攻击者可以推送新图像并覆盖现有的guest-book:v1.0标记，从而将该图像的含义更改为恶意内容。然后，下一次容器启动时（可能是由于Pod重新调度），它将运行映像的协议版本。这种攻击可能不会被检测到，因为从Kubernetes和GitOps系统的角度来看，一切都是预期的；实时清单与Git中的配置清单相匹配。为了解决这个问题，可以在一些注册中心将图像标记（或图像版本）指定为不可变的，这样一旦写入，图像标记的含义就永远不会改变。</p>
<p>一些图像注册中心（如DockerHub）提供了不可变的IMAGE标记一种使图像标签不可变的功能。这意味着，一旦图像标记已经存在，没有人可以覆盖它，从本质上防止图像标记被重用。使用此功能可以防止修改现有部署的映像标记，从而增加了额外的安全性。</p>
<blockquote>
<p>但是实际上也有一定的问题所在，就是如果打错了镜像，还没办法重新打一个~</p>
</blockquote>
<p>Git仓库在GitOps上下文中定义了哪些资源将被安装到集群中。存储在Git repo中的Kubernetes清单是最终在集群中结束的清单。因此，任何可以访问Git仓库的人都应该被信任来决定集群的构成，包括部署、容器映像、角色、角色绑定、入口和网络策略等。在最坏的情况下，拥有Git仓库完全访问权限的攻击者可以向Git库推送新的提交，更新部署以在集群中运行恶意容器。他们还可以添加一个角色和角色绑定，这可以授予部署足够的特权来读取机密和泄漏敏感信息。好消息是，由于攻击者需要将提交推送到存储库，执行的恶意操作将在众目睽睽之下完成，可以被审计和跟踪。然而，对Git仓库的提交和拉取请求访问权限应该被限制在一组有限的人员中，这些人员实际上拥有完整的集群管理访问权限。</p>
<p><strong>kubernetes cluster 保护</strong>：Kubernetes集群本身就值得写一本书，因此我们将只讨论与GitOps最相关的主题。如您所知，Kubernetes集群是运行应用程序代码的基础架构平台。获得群集访问权限的攻击者可以说是最坏的情况。出于这个原因，Kuber-netes集群是攻击者的极高价值目标，集群的安全性至关重要。GitOps提供了一组全新的选项来决定如何授予用户对集群的访问权限。但是，在更高的层次上，GitOps为操作员提供了一种新的访问集群的方式（比如通过Git），而不是传统的让用户直接访问集群的方式（比如通过个性化的kubeconfig文件）。传统上，在GitOps出现之前，开发人员通常需要直接访问Kubernetes集群来管理和更改其环境。但是有了GitOps，对集群的直接访问不再是严格的要求，因为环境管理可以通过一个新的媒介Git进行。假设所有开发人员都可以通过Git访问集群。在这种情况下，这也意味着运营商可以决定完全关闭传统的直接访问集群（或者至少是写访问），并通过Git强制执行所有更改。</p>
<p>云提供商或数据中心实际的底层云提供商（如AWS）或物理云中心可能超出了GitOps上下文中的范围，但对安全性的讨论仍然很重要。</p>
<p>运行Kubernetes集群的数据中心。通常，在Kubernetes中运行的应用程序将依赖于云中的一些托管资源或服务，例如数据库、DNS、对象存储（如S3）、消息队列等。因为开发人员和应用程序都需要访问这些资源，所以运营商需要考虑如何将创建和访问这些云提供商资源的权限授予用户。开发人员可能需要访问他们的数据库来执行诸如数据库模式迁移或生成报告之类的操作。虽然GitOps本身并不提供保护数据库本身的解决方案，但当数据库配置不可避免地开始缓慢进入Kubernetes清单（通过GitOps进行管理）时，GitOps确实会发挥作用。例如，操作员可以使用一种机制来帮助安全地访问数据库，这就是Kubernetes NetworkPolicy中的IP白名单。由于NetworkPolicy是一个标准的Kubernetes资源，可以通过Git进行管理，因此NetworkPolicy的内容（IP白名单）对运营商来说是一个重要的安全问题。第二个考虑因素是Kubernetes资源可以对云提供商资源产生深远的影响。例如，允许创建普通Kuber netes Service对象的用户可能会导致在云提供商中创建许多代价高昂的负载平衡器，并无意中将服务暴露给外部世界。出于这些原因，集群运营商必须深刻理解Kubernetes资源和云提供商资源之间的关系，以及允许用户自行管理这些资源的结果。</p>
<p>GitOps Operator 根据您选择的GitOps操作符，保护操作符可能是一个选项，也可能不是。一个基本的GitOps操作符，比如我们在之前提到的基于Cron Job的GitOps操作符，没有其他的安全含义，因为它不是一个可以对外公开的服务，也没有任何形式的管理功能。另一方面，像Argo CD、Helm或 Jenckins X 这样的工具是要向最终用户公开的。因此，它有额外的安全考虑，因为它可能是一个攻击向量。</p>
<p>首先，让我们弄清楚连续交付（CD）安全模型中的访问控制主体和对象。正如我们已经了解到的，对象是必须被保护的资源。CD表面攻击很大，但不可变的基础结构和Kubernetes将其限制为两件事:Kubernetes配置和部署工件。您已经知道，Kubernetes配置由Kubernetes资源集合表示。资源清单存储在Git中，并自动应用到目标Kubernetes群集。部署工件是容器映像。有了这两个，你就可以以任何方式塑造你的作品，甚至可以在任何时候从头开始重新创作。</p>
<p>访问控制主体是工程师和自动化流程，如CI管道。工程师们正在利用自动化不断生成新的容器映像，并更新Kubernetes配置以部署这些映像。除非您使用的是GitOps，否则Kubernetes配置将在持续集成中手动更新或编写脚本。这种方法有时被称为CIOps</p>
<p><img src="https://sm.nsddd.top/sm202312051501894.png" alt="image-20231205150119614"></p>
<p>CIOps安全模型并不安全，因为它提供了对工程师和CI系统的集群访问。这里的问题是CI系统获得了对群集的控制权，并被允许进行任意的Kubernetes配置更改。这大大扩大了攻击面，使保护集群变得困难。</p>
<p>那么GitOps如何改善这种情况呢？GitOps统一了从Git repo向集群应用更改的过程。这使得访问令牌更靠近集群，并有效地将保护对集群的访问的负担转移到Git存储库。保护Git仓库中的配置仍然需要付出努力。它的伟大之处在于，我们可以使用用于保护应用程序源代码的相同工具。Git托管提供商，如GitHub和GitLab，允许我们定义和执行变更流程，比如对每个变更进行强制审查或静态分析。</p>
<p><img src="http://sm.nsddd.top/sm202312051504029.png" alt="image-20231205150411886"></p>
<p>GitOps安全模型将群集访问权限仅限于GitOps操作符。攻击面大大减少，对集群的保护也简单得多。</p>
<p>由于GitOps操作员是唯一具有集群访问权限的主体，因此工程团队可以更轻松地定义哪些可以部署到集群中，哪些不能部署到集群中，从而显著提高集群安全性。让我们继续学习如何保护Git存储库中的Kubernetes配置以及如何微调Kubernetes访问控制。</p>
<p><strong>访问限制</strong></p>
<p>保护群集涉及许多组件，包括CI/CD构建系统、容器注册表和实际的Kubernetes群集。每个组件实现特定的访问控制机制来允许或拒绝访问。</p>
<p><strong>Git存储库访问的深入探讨</strong></p>
<p>Git, 作为一种完全面向开发者的工具，因其简单性而在开发社区中广受欢迎。它默认配置为允许开发者在任何时候轻松更改任何内容。Git之所以强大，一部分原因是它建立在坚实的密码学基础上，使用Merkle树作为其基本底层数据结构，这同样的数据结构也被用作分布式账本，使Git成为理想的审计日志存储器。</p>
<p><strong>Merkle树的原理</strong></p>
<p>Merkle树是一种特殊的数据结构，其叶节点标记为数据块的哈希值，非叶节点则标记为其子节点哈希值的加密组合。这种结构确保了数据的完整性和安全性。</p>
<p><strong>Git工作原理</strong></p>
<p>Git在保存变更时，会计算一个差异（diff）并创建一个包含这些变更的bundle，这个bundle包含各种元数据（例如日期和作者）以及对前一个仓库状态的引用。这个过程产生的提交（commit）通过哈希算法进行加密，以确保代码的完整性和未被篡改性。Git仓库因此是一个提交链，形成一个加密的、防篡改的图形数据结构。Git的安全性归功于其使用的加密算法。</p>
<p><strong>Git树形结构</strong></p>
<p>在Git中，每个提交都引用前一个提交，共同构成了一种树状的数据结构。这种结构使得所有的修改在Git仓库中都能得到完整的跟踪。</p>
<p><strong>Git存储库的创建与部署</strong></p>
<p>创建一个部署存储库时，我们可以使用已有的仓库作为示例，例如在<a href="https://github.com/gitopsbook/sample-app-deployment" target="_blank" rel="noopener noreferrer">GitHub上的gitopsbook/sample-app-deployment<ExternalLinkIcon/></a>。这个仓库包含了用于Kubernetes服务器的部署清单和部署资源。部署资源清单提供了对应用程序部署的详细信息。</p>
<p><strong>分布式版本控制</strong></p>
<p>作为一个分布式版本控制系统，Git允许每个开发者拥有一个完整的本地存储库副本，并具有进行更改的完全权限。同时，团队成员共同使用一个远程存储库来交换更改。这个远程存储库通常由GitHub或GitLab等服务托管，它们提供了一系列安全特性，包括保护仓库免受未授权修改、确保提交作者的一致性、防止历史重写等。</p>
<p><strong>开始使用</strong></p>
<p>要开始使用，首先导航至<a href="https://github.com/gitopsbook/sample-app-deployment" target="_blank" rel="noopener noreferrer">gitopsbook/sample-app-deployment<ExternalLinkIcon/></a>仓库，并在GitHub上创建一个分叉（fork）。</p>
<p>创建fork后，使用以下命令在本地克隆存储库，并准备好进行更改:</p>
<p><strong>签名：</strong></p>
<p>签名Git以加密方式保护作者身份。GitHub用户界面可以可视化GPG验证结果。</p>
<p>除了Git托管服务确认之外，您还可以将GitOps操作员配置为在更新Kubernetes群集配置之前自动验证GPG签名。幸运的是，一些GitOps操作符已经内置了签名验证支持，并且不需要复杂的配置。</p>
<p><strong>Kubernetes RBAC</strong></p>
<p>正如您已经知道的，GitOps方法假定CI管道不能访问Kubernetes集群。唯一可以直接访问集群的自动化工具是驻留在集群内的GitOps操作符。这已经是传统DevOps模式的一大优势。然而，这并不意味着GitOps应该有上帝级别的访问权限。我们仍然需要仔细考虑歌剧角色应该获得的权限级别。集群内部的操作者，即所谓的拉动模型，也不是唯一的可能性。您可以考虑将GitOps操作符放置在受保护的边界内，并通过使用推送模型和使用一个操作符管理多个集群来减少管理开销。每一个这样的考虑都有其利弊。为了做出有意义的决策，您需要很好地理解Kubernetes访问模型。因此，让我们退一步，了解Kubernetes内置了哪些安全工具，以及如何使用它们。</p>
<p><strong>access control types</strong> 有四种著名的访问策略：</p>
<ul>
<li>在DAC模型中，数据所有者决定访问。DAC是一种基于用户指定的规则分配访问权限的方法。</li>
<li>MAC是使用非自主模型开发的，在该模型中，人们根据信息许可被授予访问权限。MAC是一种策略，在该策略中，访问权限是根据中央权威机构的规定来分配的。</li>
<li>RBAC根据用户的角色和实现了最小权限和权限分离等关键安全原则。因此，试图访问信息的人只能访问其角色所必需的数据。</li>
<li>ABAC也称为基于策略的访问控制，它定义了一种访问控制范式，通过使用将属性结合在一起的策略将访问权限授予用户。</li>
</ul>
<p>ABAC非常灵活，可能是列表中最强大的模型。由于其强大的功能，ABAC最初被选为Kubernetes安全模型。然而，后来，社区意识到ABAC的概念和它们的实施方式在Kuber netes是很难理解和使用。在此基础上，提出了一种基于RBAC的授权机制。2017年，基于RBAC的授权进入测试版，ABAC被宣布弃用。目前，RBAC是Kubernetes中首选的授权机制，并建议对在Kubernetes上运行的每个应用程序使用。RBAC模型包括以下三个主要元素：主语、资源和动词。主题表示希望访问资源的用户或进程，谓词是可以对资源执行的操作。那么如何将这些元素映射到Kubernetes API对象呢？RBAC资源由常规Kubernetes资源（如Pod或Deploy-ment）表示。为了表示动词，在Kubernetes中引入了两套新的专门资源。动词由Role和RoleBinding资源表示，主题由User和ServiceAccount资源表示。</p>
<p><img src="http://sm.nsddd.top/sm202312062034456.png" alt="image-20231206203417134"></p>
<p>Kubernetes角色绑定将角色中定义的权限授予用户和ServiceAccounts。ServiceAccount为在Pod中运行的进程提供标识。</p>
<p>角色和角色绑定角色资源用于连接动词和Kubernetes资源。示例角色定义在以下代码列表中表示。</p>
<p><img src="http://sm.nsddd.top/sm202312062034741.png" alt="image-20231206203450535"></p>
<h3 id="镜像仓库访问" tabindex="-1"><a class="header-anchor" href="#镜像仓库访问" aria-hidden="true">#</a> 镜像仓库访问</h3>
<p>通过保护 Kubernetes 的集群，我们可以保证集群配置描述了引用正确Docker映像的正确工作负载，并最终运行我们想要的软件。受保护的部署存储库和完全自动化的GitOps驱动的部署过程提供了可审计性和可观察性。最后一个未受保护的部分是Docker映像本身。我们将讨论Docker图像保护的最后，但这绝对不是最不重要的话题。图像内容最终定义了将在集群内部执行的二进制文件。因此，即使其他一切都是安全的，Docker registry保护的漏洞击败了所有其他的安全门。那么Docker图像保护在实践中意味着什么呢？我们必须处理以下两个问题：</p>
<ul>
<li>注册表图像未经允许不能更改。</li>
<li>将图像安全地传递到Kubernetes集群中。</li>
</ul>
<p>注册表图像保护与Git存储库类似，Docker存储库保护由托管服务提供。最流行的Docker存储库托管服务可能是DockerHub。该服务允许访问数以千计的Docker图像。该服务由Docker公司提供，对于任何开源项目都是完全免费的。</p>
<p>要获得DockerHub的实际操作经验，你需要在DockerHub上获得一个帐户，创建一个存储库，并推送一个图像。除非您已经有一个帐户，否则请导航到https://hub.docker.com/signup并创建一个下一步，您需要创建名为gitops-k8s-security-alpine的Docker存储库，如DockerHub文档中所述。您可以验证DockerHub是否正在保护存储库，但首先需要获得一个示例Docker映像。最简单的创建方法是拉一个现有的图像并重命名它。下面的命令从官方DockerHub 存储库中提取 Alpine Linux 映像并将其重命名为<code v-pre>&lt;username&gt;/gitops-k8s-security-alpine</code>，其中<code v-pre>《用户名》</code>是您的 DockerHub 帐户的名称：</p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code><span class="token function">docker</span> pull alpine
<span class="token function">docker</span> tag alpine <span class="token operator">&lt;</span>username<span class="token operator">></span>/gitops-k8s-security-alpine:v0.1
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>下一个命令将图像推入gitops-k8s-security-alpine Docker注册表:</p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code><span class="token function">docker</span> push <span class="token operator">&lt;</span>username<span class="token operator">></span>/gitops-k8s-security-alpine:v0.1
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>但是，本地Docker客户端没有访问DockerHubrepository的凭据，因此push命令应该会失败。要修复此错误，请运行以下命令并提供您的DockerHub帐户用户名和密码:</p>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>docker login
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><blockquote>
<p>docker 登录</p>
</blockquote>
<p>成功登录后，Docker客户端就知道你是谁了，Docker push命令就可以执行了。</p>
<p>保护图像交付将映像交付到集群中的安全性意味着要回答这样一个问题：“我们信任映像的来源吗？”信任意味着我们要确保图像是由授权作者创建的，并且图像内容在从存储库传输时没有被修改。这就是图像作者身份保护的问题。该解决方案非常类似于保护Git com-MIT作者身份的解决方案：</p>
<blockquote>
<p>人或自动化过程使用数字签名对图像内容进行签名。</p>
</blockquote>
<p>好消息是Docker客户端和图像注册表已经支持了这一点。名为Content Trust的Docker特性允许对图像进行签名，并将其与签名一起推入注册表。消费者可以使用Content Trust功能来验证签名图像内容是否未被更改。因此，在完美的场景中，CI管道应该发布签名的图像，Kuber netes应该配置为要求每个运行的图像都有有效的签名。</p>
<p>生产中。坏消息是Kubernetes在1.17版本中仍然没有提供强制执行图像签名验证的配置。因此，我们最多只能在修改Kubernetes清单之前验证图像签名。内容信任配置相当简单。您必须设置DOCKER_CONTENT_TRUST环境变量:</p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code><span class="token builtin class-name">export</span> <span class="token assign-left variable">DOCKER_CONTENT_TRUST</span><span class="token operator">=</span><span class="token number">1</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>设置环境变量后，Docker命令run and pull应该验证图像签名。我们可以通过拉取刚刚推送到gitops-k8s-security-alpine存储库的未签名图像来确认这一点:</p>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>docker pull &lt;username>/gitops-k8s-security-alpine:v0.1
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h2 id="patterns-模式" tabindex="-1"><a class="header-anchor" href="#patterns-模式" aria-hidden="true">#</a> Patterns &amp; 模式</h2>
<p>好吧，面对现实吧。全新的新建项目并不一定要以非常安全的部署过程开始。事实上，年轻的项目甚至没有自动匹配的部署过程。首席工程师可能是唯一一个能够部署项目的人，他们可以在笔记本电脑上进行部署。通常，当部署所有应用程序服务的时间越来越长时，团队开始添加自动化。随着未经授权访问的潜在成本和损害的增加，自动化的安全性变得越来越重要。</p>
<p><strong>完全访问权限</strong></p>
<p>几乎每个新项目的初始安全模型都完全基于团队成员之间的信任。每个团队成员都有完全的访问权限，部署更改不一定会被记录下来，也不一定可用于以后的审计。</p>
<p><img src="http://sm.nsddd.top/sm202312062050315.png" alt="image-20231206205048176"></p>
<p>起初，薄弱的安全并不一定是一件坏事。完全访问意味着很少的障碍，使团队更加灵活，行动更快。虽然生产中没有重要的客户数据，但这是一个专注于速度和塑造项目的完美机会，直到您准备好进入生产。但可能迟早，你将需要把适当的安全控制到位，而不是不仅适用于生产环境中的客户数据，而且还可以确保部署到生产环境中的代码的完整性。</p>
<p><strong>Deployment repo access</strong></p>
<p>默认情况下禁止开发人员直接访问Kubernetes，从安全角度来说是向前迈出的一大步。如果您使用的是GitOps，这是最常见的模式。在此模型中，开发人员仍然可以完全访问部署存储库，但必须依赖GitOps操作符将更改推送到Kubernetes群集。</p>
<p><img src="http://sm.nsddd.top/sm202312062054688.png" alt="image-20231206205408602"></p>
<p>GitOps操作符允许删除群集访问。此时，工程师只需要访问部署存储库。</p>
<p>除了更好的安全性之外，这种模式还提供了可审计性。假设没有人有权访问Kubernetes配置，则部署存储库历史记录包含所有群集配置更改。模式仍不完善。随着项目的成熟，团队不断改进部署配置，手动更新部署存储库感觉非常好。然而，经过一段时间后，每个应用程序版本将只需要更改图像标记。在这个阶段，部署存储库的维护仍然是非常有价值的，但可能会感觉有很大的开销。</p>
<p><strong>仅限代码访问</strong></p>
<p>仅代码访问模式是部署-存储库-仅访问方法的逻辑延续。如果部署存储库中的发布更改是可预测的，那么就有可能在ci管道中编写配置更改流程。</p>
<p><img src="http://sm.nsddd.top/sm202312062101262.png" alt="image-20231206210104068"></p>
<p>模式简化了开发过程，大大减少了人工工作量。还从几个方面提高了部署安全性：</p>
<ul>
<li>开发团队不再需要访问部署存储库。只有专用的自动化帐户才有权限推送到日志中。</li>
<li>由于部署存储库中的更改是自动化的，因此配置GPG签名过程并在CI管道中自动执行该过程要容易得多。</li>
</ul>
<h3 id="安全问题" tabindex="-1"><a class="header-anchor" href="#安全问题" aria-hidden="true">#</a> 安全问题</h3>
<p>我们已经学习了如何端到端地保护我们的部署过程，从最基本的开始，一直到配置更改和新映像的身份保护。最后，让我们了解为确保群集的安全性而必须涵盖的重要边缘情况。</p>
<p><strong>防止从不受信任的注册中心拉取图像</strong></p>
<p>我们介绍了如何在公共注册表（如 <code v-pre>docker.io</code>）上实现安全控制，以确保图像已被授权用户按预期发布，并且在提取时未被篡改。然而，事实是，公共注册中心是在您的可见性和控制范围之外的。你必须相信公共注册中心的维护人员正在遵循安全最佳实践。即使他们是，事实上，他们是一个公共注册意味着任何人在互联网上可以推图片到它。对于一些安全需求非常高的企业来说，这是不能接受的。为了解决这个问题，许多企业将维护自己的私有Docker映像注册表，以提高可靠性、性能、隐私和安全性。在这种情况下，应该将新映像推送到私有注册表（如docker.mycompany.com），而不是公共注册表（如docker.io）。这可以通过修改ci管道来实现，以便将成功构建的新映像推送到私有注册中心。部署到Kubernetes也应该只从私有注册中心提取映像。但如何才能执行呢如果一个天真的开发人员不小心从docker.io中提取了一个受病毒或恶意软件感染的映像怎么办？或者一个没有权限将图片推送到私有注册表的恶意开发者试图从他们的公共DockerHub存储库侧加载一个图片？当然，使用GitOps将确保这些操作被记录在审计跟踪中，以便能够识别责任人。然而，如何才能首先防止这种情况发生呢？这可以通过使用Open Policy Agent（OPA）和admissionwebhook来实现，后者会拒绝引用来自被禁止图像注册表的图像的清单。</p>
<p><strong>Git存储库中的集群级资源</strong></p>
<p>Kubernetes访问设置是使用角色和ClusterRole等Kubernetes资源控制的。RBAC资源管理是GitOps操作符的一个完美有效的用法。通常的做法是将应用程序部署的定义与所需的Kubernetes访问设置打包在一起。但是，有一个潜在的安全漏洞，可以用来升级特权。由于Kubernetes访问设置由资源管理，因此可以将这些资源放入部署储存库中，并由GitOps操作员交付。入侵者可能会创建一个ClusterRole并将权限授予服务Account，该服务Account以后可能会被用作后门。防止权限升级的经验法则是限制GitOps操作员权限。如果利用GitOps操作符的开发团队不应该管理ClusterRoles，那么GitOps操作符不应该具有该权限。如果GitOps操作符由多个团队共享，则应适当配置该操作符，并实施特定于团队的安全检查。</p>
<h2 id="secret" tabindex="-1"><a class="header-anchor" href="#secret" aria-hidden="true">#</a> Secret</h2>
<p>Kubernetes提供了一种机制，允许用户将少量敏感信息存储在受保护的资源对象中，该对象称为Secret。秘密是你想要严格控制访问权限的任何东西。常见的数据示例您希望存储在Secret中的内容包括用户名和密码凭证、API密钥、SSH密钥和TLS证书。</p>
<p>当你第一次看到Secret的值时，你可能会误以为Secret值是受加密保护的，因为这些字段不是人类可读的，也不是以纯文本显示的。但你可能会搞错，重要的是要明白。</p>
<p>Base64是一种编码算法，允许您将任何字符转换成由拉丁字母、数字、加号和斜线组成的字母表。它允许以ASCII字符串格式表示二进制数据。Base64不提供加密功能。</p>
<p>Kubernetes Base64对数据进行编码的原因是它允许Secrets存储二进制数据。这对于将证书存储为机密非常重要。如果没有 Base64 编码，就不可能将二进制配置存储为Secret。</p>
<h3 id="为什么要使用-secret" tabindex="-1"><a class="header-anchor" href="#为什么要使用-secret" aria-hidden="true">#</a> 为什么要使用 secret</h3>
<p>在Kubernetes中，使用Secrets是可选的，但与其他技术（例如直接将敏感值放置在Pod规范中或在构建时将值烘焙到容器映像中）相比，使用Secrets更加方便、灵活和安全。与Config Maps一样，Secrets允许将应用程序的配置与构建工件分离。</p>
<h3 id="如何使用-secret" tabindex="-1"><a class="header-anchor" href="#如何使用-secret" aria-hidden="true">#</a> 如何使用 secret</h3>
<p>Kubernetes Secrets与ConfigMaps一样，可用于以下几种方式:</p>
<ul>
<li>作为文件装入Pod中的文件</li>
<li>作为Pod中的环境变量</li>
<li>Kubernetes API访问</li>
</ul>
<h4 id="作为-config-转入-pod-中" tabindex="-1"><a class="header-anchor" href="#作为-config-转入-pod-中" aria-hidden="true">#</a> 作为 config 转入 pod 中</h4>
<p><img src="http://sm.nsddd.top/sm202312062122875.png" alt="image-20231206212222760"></p>
<p>Secret卷用于向Pods传递敏感信息，如密码。秘密卷由tmpfs（支持RAM的文件系统）支持所以它们永远不会写入非易失性存储器。</p>
<blockquote>
<p><code v-pre>tmpfs</code> 是一种基于内存的文件系统，它使用主机的 RAM 和交换空间来存储文件和目录。在 Linux 和其他类 Unix 操作系统中，<code v-pre>tmpfs</code> 提供了一种高效的方式来存储临时数据，因为访问 RAM 的速度远远超过常规的硬盘存储。</p>
</blockquote>
<p>使用Secrets的第一个技巧是将它们作为卷装载到Pod中。为此，您首先声明以下内容。</p>
<p><img src="http://sm.nsddd.top/sm202312062135614.png" alt="image-20231206213554511"></p>
<p>当将Secret（或ConfigMap）作为文件卷投影到Pod中时，对底层Secret的更改最终会更新Pod中挂载的文件。这使得应用程序有机会重新配置自己，或热重新加载，而无需重新启动容器/Pod。</p>
<p><strong>特点</strong>:</p>
<ul>
<li><code v-pre>tmpfs</code> 是一种内存文件系统，使用主机的 RAM 和交换空间存储文件。</li>
<li><code v-pre>tmpfs</code> 在 Linux 和其他类 Unix 系统中用于临时数据存储，访问速度快。</li>
</ul>
<p><strong>使用方法</strong>:</p>
<ul>
<li>将 Secrets 作为卷装载到 Pod 中。这需要在 Pod 配置中声明相应的卷和卷挂载。</li>
<li>当 Secrets 或 ConfigMap 作为文件卷投影到 Pod 时，底层 Secrets 的更改会更新 Pod 中的文件，允许应用程序重新配置或热重载，无需重启容器/Pod。</li>
</ul>
<h4 id="使用环境变量" tabindex="-1"><a class="header-anchor" href="#使用环境变量" aria-hidden="true">#</a> 使用环境变量</h4>
<p>使用Secrets作为环境变量使用Kubernetes Secrets的第二种方式是将它们设置为环境变量。</p>
<p><img src="http://sm.nsddd.top/sm202312062139548.png" alt="image-20231206213938465"></p>
<p>将Secrets作为环境变量公开到容器中，虽然很方便，但可能不是使用Secrets的最佳方式，因为它比将它们作为卷挂载文件使用更不安全。当Secret被设置为环境变量时，容器中的所有进程（包括子进程）都将继承OS环境，并能够读取环境变量值，从而读取Secret数据。例如，forked shell脚本可以通过运行env实用程序读取环境变量。</p>
<p>使用Secrets作为环境变量的Secret环境变量的第二个缺点是，与Secrets projected intovolumes不同，如果Secret在容器启动后被更新，Secret环境变量的值将不会被更新。容器或Pod重启将是必要的，以通知更改。</p>
<ul>
<li>虽然将 Secrets 设置为环境变量方便，但这种方法相对不那么安全。容器中的所有进程（包括子进程）都能读取这些环境变量，因此可能泄露敏感数据。</li>
<li>例如，通过 <code v-pre>env</code> 命令，forked shell 脚本可以读取这些变量。</li>
<li>与作为卷投影的 Secrets 不同，如果容器启动后 Secrets 更新，环境变量不会自动更新。要应用更新，需要重启容器或 Pod。</li>
</ul>
<h4 id="通过-kubernetes-api-使用-secret" tabindex="-1"><a class="header-anchor" href="#通过-kubernetes-api-使用-secret" aria-hidden="true">#</a> 通过 Kubernetes API 使用 Secret</h4>
<p>使用K8S API中的密钥最后，还可以直接从Kubernetes API检索Kubernetes Secrets。假设您有以下带有密码字段的Secret。</p>
<div class="language-yaml ext-yml line-numbers-mode"><pre v-pre class="language-yaml"><code><span class="token key atrule">apiVersion</span><span class="token punctuation">:</span> v1
<span class="token key atrule">kind</span><span class="token punctuation">:</span> Secret
<span class="token key atrule">matadata</span><span class="token punctuation">:</span>
  <span class="token key atrule">name</span><span class="token punctuation">:</span> my<span class="token punctuation">-</span>secret
<span class="token key atrule">type</span><span class="token punctuation">:</span> Opaque
<span class="token key atrule">data</span><span class="token punctuation">:</span> 
  <span class="token key atrule">password</span><span class="token punctuation">:</span> UEA1NXcwcmQ=
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>要检索Secret，Pod本身可以直接从Kubernetes检索Secret值，例如，通过使用 <code v-pre>kubectl</code> 命令或``REST API<code v-pre>调用。以下 </code>ing kubectl<code v-pre>命令检索名为</code>my-secret<code v-pre>的</code>Secret<code v-pre>, </code>Base64` 解码密码字段，并将纯文本值打印到标准输出:</p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code>$ kubectl get secret my-secret <span class="token parameter variable">-o</span><span class="token operator">=</span>jsonpath<span class="token operator">=</span><span class="token string">'{.data.password}'</span> <span class="token operator">|</span> base64 --decodeP@55w0rd
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>这种技术要求 Pod 有权限取回 <code v-pre>secret</code>。</p>
<p>秘密类型Secret类型字段指示Secret中包含的数据类型。它主要被软件程序用来识别相关的秘密他们可能会对Secret中设置了哪些可用字段感兴趣，并安全地做出假设。下表介绍了内置Kubernetes Secret类型以及每种类型的必填字段。</p>
<p><strong>步骤</strong>:</p>
<ol>
<li>创建一个包含敏感数据（如密码）的 Secret。</li>
<li>使用 <code v-pre>kubectl</code> 命令或 Kubernetes REST API 直接从 Kubernetes API 检索 Secret 值。</li>
<li>示例命令：使用 <code v-pre>kubectl</code> 获取名为 <code v-pre>my-secret</code> 的 Secret，并解码密码字段。</li>
</ol>
<p><strong>权限要求</strong>:</p>
<ul>
<li>Pod 需要有权限从 Kubernetes API 中检索 Secrets。</li>
</ul>
<p><strong>Secret 类型</strong>:</p>
<ul>
<li>Secret 的 <code v-pre>type</code> 字段指示其包含的数据类型，帮助软件程序识别和安全地处理 Secrets。</li>
<li>Kubernetes 提供了多种内置的 Secret 类型，每种类型都有特定的必填字段。</li>
</ul>
<table>
<thead>
<tr>
<th>Secret 类型</th>
<th>说明</th>
<th>必需字段</th>
</tr>
</thead>
<tbody>
<tr>
<td>Opaque</td>
<td>默认类型，用于存储任意数据</td>
<td>无特定格式要求</td>
</tr>
<tr>
<td>kubernetes.io/service-account-token</td>
<td>存储服务账户的凭据</td>
<td><code v-pre>serviceAccountName</code>: 服务账户的名称</td>
</tr>
<tr>
<td>kubernetes.io/dockercfg</td>
<td>存储 Docker 配置文件</td>
<td><code v-pre>.dockercfg</code>: 包含 Docker 配置文件的序列化 JSON</td>
</tr>
<tr>
<td>kubernetes.io/dockerconfigjson</td>
<td>存储 Docker 配置文件的 JSON 版本</td>
<td><code v-pre>.dockerconfigjson</code>: 包含 Docker 配置文件的 JSON</td>
</tr>
<tr>
<td>kubernetes.io/basic-auth</td>
<td>基本身份验证凭据</td>
<td><code v-pre>username</code>: 用户名 <code v-pre>&lt;br&gt;password</code>: 密码</td>
</tr>
<tr>
<td>kubernetes.io/ssh-auth</td>
<td>SSH 密钥</td>
<td><code v-pre>ssh-privatekey</code>: SSH 私钥</td>
</tr>
<tr>
<td>kubernetes.io/tls</td>
<td>TLS 凭据</td>
<td><code v-pre>tls.crt</code>: TLS 证书<code v-pre>&lt;br&gt;tls.key</code>: TLS 私钥</td>
</tr>
<tr>
<td>bootstrap.kubernetes.io/token</td>
<td>用于节点引导的令牌</td>
<td>用于 Kubernetes 节点引导的各种数据</td>
</tr>
</tbody>
</table>
<p>在生产环境中使用 Kubernetes Secrets 的最佳方式通常取决于具体的应用需求和安全要求。不过，可以根据常见的用例和安全最佳实践来概括几种流行的方法：</p>
<ol>
<li><strong>作为 Pod 中的卷挂载</strong>:
<ul>
<li><strong>最常用于</strong>: 存储配置文件、证书等。</li>
<li><strong>优点</strong>: 直接映射到文件系统，便于应用读取；支持自动更新，当 Secret 更新时，挂载的文件也会更新。</li>
<li><strong>使用场景</strong>: 大型应用或微服务架构中，这种方式常用于动态更新配置而无需重启容器。</li>
</ul>
</li>
<li><strong>作为环境变量</strong>:
<ul>
<li><strong>最常用于</strong>: 传递简单的配置或临时秘钥。</li>
<li><strong>优点</strong>: 简单易用，适用于不经常更改的密钥或配置。</li>
<li><strong>限制</strong>: 容器中的所有进程都可以访问这些环境变量，可能存在安全风险；更新 Secret 后，需要重启 Pod 才能获取新值。</li>
</ul>
</li>
<li><strong>通过 Kubernetes API 访问</strong>:
<ul>
<li><strong>最常用于</strong>: 动态获取和处理 Secret。</li>
<li><strong>优点</strong>: 灵活性高，可以在运行时动态获取和处理密钥。</li>
<li><strong>限制</strong>: 需要额外的权限和配置，以及对 Kubernetes API 的理解。</li>
</ul>
</li>
</ol>
<h2 id="end-链接" tabindex="-1"><a class="header-anchor" href="#end-链接" aria-hidden="true">#</a> END 链接</h2>
<ul><li><div><a href = '89.md' style='float:left'>⬆️上一节🔗  </a><a href = '91.md' style='float: right'>  ️下一节🔗</a></div></li></ul>
<ul>
<li>
<p><RouterLink to="/">Ⓜ️回到目录🏠</RouterLink></p>
</li>
<li>
<p><a href="https://nsddd.top/archives/contributors" target="_blank" rel="noopener noreferrer"><strong>🫵参与贡献💞❤️‍🔥💖</strong><ExternalLinkIcon/></a>)</p>
</li>
<li>
<p>✴️版权声明 © ：本书所有内容遵循<a href="http://zh.wikipedia.org/wiki/Wikipedia:CC-by-sa-3.0%E5%8D%8F%E8%AE%AE%E6%96%87%E6%9C%AC" target="_blank" rel="noopener noreferrer">CC-BY-SA 3.0协议（署名-相同方式共享）©<ExternalLinkIcon/></a></p>
</li>
</ul>
</div></template>


