<template><div><ul>
<li><a href="http://nsddd.top" target="_blank" rel="noopener noreferrer">author<ExternalLinkIcon/></a></li>
</ul>
<h1 id="第61节-节点资源管理、异常检测以及常见问题排查" tabindex="-1"><a class="header-anchor" href="#第61节-节点资源管理、异常检测以及常见问题排查" aria-hidden="true">#</a> 第61节 节点资源管理、异常检测以及常见问题排查</h1>
<div><a href = '60.md' style='float:left'>⬆️上一节🔗  </a><a href = '62.md' style='float: right'>  ⬇️下一节🔗</a></div>
<br>
<blockquote>
<p>❤️💕💕新时代拥抱云原生，云原生具有环境统一、按需付费、即开即用、稳定性强特点。Myblog:<a href="http://nsddd.top/" target="_blank" rel="noopener noreferrer">http://nsddd.top<ExternalLinkIcon/></a></p>
</blockquote>
<hr>
<p>[TOC]</p>
<h2 id="numa-node" tabindex="-1"><a class="header-anchor" href="#numa-node" aria-hidden="true">#</a> NUMA Node</h2>
<p>Non-Uniform Memory Access 是一种内存访问方式，是为多处理器计算机设计的内存架构。</p>
<h3 id="节点资源管理" tabindex="-1"><a class="header-anchor" href="#节点资源管理" aria-hidden="true">#</a> 节点资源管理</h3>
<ul>
<li>状态汇报</li>
<li>资源预留</li>
<li>防止节点资源耗尽的防御机制驱逐</li>
<li>容器和系统资源的配置</li>
</ul>
<h3 id="状态上报" tabindex="-1"><a class="header-anchor" href="#状态上报" aria-hidden="true">#</a> 状态上报</h3>
<p>kubelet 周期性地向 <code v-pre>API Server</code> 进行汇报，并更新节点的相关健康和资源使用信息</p>
<ul>
<li>节点基础信息，包括IP地址、操作系统、内核、运行时、kubelet、 kube-proxy 版本信息。</li>
<li>节点资源信息包括CPU、内存、HugePage、临时存储、GPU 等注册设备，以及这些资源中可以分配给容器使用的部分。</li>
<li>调度器在为 Pod 选择节点时会将机器的状态信息作为依据。</li>
</ul>
<table>
<thead>
<tr>
<th>状态</th>
<th>意义</th>
</tr>
</thead>
<tbody>
<tr>
<td>Ready</td>
<td>节点是否健康</td>
</tr>
<tr>
<td>MemoryPressure</td>
<td>节点是否存在内存压力</td>
</tr>
<tr>
<td>PIDPressure</td>
<td>节点是否存在比较多的进程</td>
</tr>
<tr>
<td>DiskPressure</td>
<td>节点是否存在磁盘压力</td>
</tr>
<tr>
<td>NetworkUnavailable</td>
<td>节点网络配置是否正确</td>
</tr>
</tbody>
</table>
<h3 id="lease" tabindex="-1"><a class="header-anchor" href="#lease" aria-hidden="true">#</a> Lease</h3>
<p>在早期版本 kubele t的状态上报直接更新 node 对象,而上报的信息包含状态信息和资源信息，因此需要 传输的数据包较大，给 APIServer 和 etcd 造成的压力较大。</p>
<p>后引入 Lease 对象用来保存健康信息，在默认 40s 的 nodeLeaseDurationSeconds 周期内，若 Lease 对 象没有被更新，则对应节点可以被判定为不健康。</p>
<blockquote>
<p>将变化频率低的资源信息和状态信息分离。</p>
</blockquote>
<h3 id="资源预留" tabindex="-1"><a class="header-anchor" href="#资源预留" aria-hidden="true">#</a> 资源预留</h3>
<p>计算节点除用户容器外，还存在很多支撑系统运行的基础服务，譬如 systemd、journald、 sshd、dockerd、Containerd、 kubelet 等。</p>
<p>为了使服务进程能够正常运行，要确保它们在任何时候都可以获取足够的系统资源，所以我们要为这些系统进程预留资源。 kubelet 可以通过众多启动参数为系统预留 CPU、内存、PID等资源，比如 SystemReserved、KubeReserved等。</p>
<h3 id="capacity-和-allocatable" tabindex="-1"><a class="header-anchor" href="#capacity-和-allocatable" aria-hidden="true">#</a> Capacity 和 Allocatable</h3>
<p>容量资源(Capacity) 是指 kubelet 获取的计算节点当前的资源信息。</p>
<ul>
<li>CPU是从 <code v-pre>/proc/cpuinfo</code> 文件中获取的节点CPU核数;</li>
<li>memory 是从/ proc/memoryinfo 中获取的节点内存大小;</li>
<li>ephemeral-storage 是指节点根分区的大小。</li>
</ul>
<p>资源可分配额(Allocatable) 是用户 Pod 可用的资源，是资源容量减去分配给系统的资源的剩余部分。</p>
<p>节点资源总量= KubeReserved + SystemReserved + Eviction-threshold + Allocatable</p>
<h3 id="节点磁盘管理" tabindex="-1"><a class="header-anchor" href="#节点磁盘管理" aria-hidden="true">#</a> 节点磁盘管理</h3>
<p>系统分区 nodefs</p>
<ul>
<li>工作目录和容器日志</li>
<li>kubelet 的数据目录，默认为 <code v-pre>/var/lib/kubelet</code></li>
</ul>
<p>容器运行时分区 <code v-pre>imagefs</code></p>
<ul>
<li>用户镜像和容器可写层</li>
<li>容器运行时分区是可选的，可以合并到系统分区中</li>
<li>存放镜像的目录，containerd 在 <code v-pre>/var/lib/containerd</code>，docker 在 <code v-pre>/var/lib/docker</code></li>
</ul>
<h3 id="驱逐管理" tabindex="-1"><a class="header-anchor" href="#驱逐管理" aria-hidden="true">#</a> 驱逐管理</h3>
<ul>
<li>kubelet 会在系统资源不够时中止一些容器进程，以空出系统资源，保证节点的稳定性。</li>
<li><strong>但由 kubelet 发起的驱逐只停止 Pod 的所有容器进程，并不会直接删除 Pod</strong>，便于管理员发现问题
<ul>
<li>Pod 的 status.phase 会被标记为 Failed</li>
<li>status.reason 会被设置为 Evicted</li>
<li>status.message 则会记录被驱逐的原因</li>
</ul>
</li>
</ul>
<h3 id="资源可用额监控" tabindex="-1"><a class="header-anchor" href="#资源可用额监控" aria-hidden="true">#</a> 资源可用额监控</h3>
<ul>
<li>kubelet 依赖内嵌的开源软件 <a href="https://github.com/google/cadvisor" target="_blank" rel="noopener noreferrer">cAdvisor<ExternalLinkIcon/></a>,周期性检查节点资源使用情况</li>
<li>CPU 是可压缩资源，根据不同进程分配时间配额和权重，CPU 可被多个进程竞相使用</li>
<li>驱逐策略是基于磁盘和内存资源用量进行的，因为两者属于不可压缩的资源，当此类资源使用耗尽时将无法再申请</li>
</ul>
<table>
<thead>
<tr>
<th>检查类型</th>
<th>说明</th>
</tr>
</thead>
<tbody>
<tr>
<td>memory.avaliable</td>
<td>节点当前可用内存</td>
</tr>
<tr>
<td>nodefs.avaliable</td>
<td>节点根分区的可用磁盘大小</td>
</tr>
<tr>
<td>nodefs.inodesFree</td>
<td>节点根分区的可使用 inode</td>
</tr>
<tr>
<td>imagefs.avaliable</td>
<td>节点运行时分区的可用磁盘大小</td>
</tr>
<tr>
<td>imagefs.inodesFree</td>
<td>节点运行时分区的可使用 inode</td>
</tr>
</tbody>
</table>
<h3 id="驱逐策略" tabindex="-1"><a class="header-anchor" href="#驱逐策略" aria-hidden="true">#</a> 驱逐策略</h3>
<p>kubelet 获得节点的可用额信息后，会结合节点的容量信息来判断当前节点运行的 Pod 是否满足驱逐条件。</p>
<p>驱逐条件可以是绝对值或百分比，当监控资源的可使用额少于设定的数值或百分比时，kubelet 就会发起驱逐操作。</p>
<p>kubelet 参数 evictionMinimumReclaim 可以设置每次回收的资源的最小值，以防止小资源的多次回收。</p>
<table>
<thead>
<tr>
<th>kubelet 参数</th>
<th>分类</th>
<th>驱逐方式</th>
</tr>
</thead>
<tbody>
<tr>
<td>evictionSoft</td>
<td>软驱逐</td>
<td>当检测到当前资源达到软驱逐的阈值时，并不会立即启动驱逐操作，而是要等待一个宽限期。这个宽限期选取 EvictionSoftGracePeriod 和 Pod 指定的TerminationGracePeriodSeconds 中较小的值</td>
</tr>
<tr>
<td>evictionHard</td>
<td>硬驱逐</td>
<td>没有宽限期，一旦检测到满足硬驱逐的条件，就直接中止容器来释放紧张资源</td>
</tr>
</tbody>
</table>
<h4 id="基于内存压力的驱逐" tabindex="-1"><a class="header-anchor" href="#基于内存压力的驱逐" aria-hidden="true">#</a> 基于内存压力的驱逐</h4>
<p>memory.avaiable 表示当前系统的可用内存情况。</p>
<p>kubelet 默认设置了 memory.avaiable&lt;100Mi 的硬驱逐条件。</p>
<p>当 kubelet 检测到当前节点可用内存资源紧张并满足驱逐条件时，会将节点的 MemoryPressure 状态设置为 True, 调度器会阻止 BestEffort Pod 调度到内存承压的节点。</p>
<p>kubelet 启动对内存不足的驱逐操作时，会依照如下的顺序选取目标 Pod:、</p>
<ul>
<li>(1)判断 Pod 所有容器的内存使用量总和是否超出了请求的内存量，超出请求资源的 Pod 会成为备选目标。</li>
<li>(2)查询 Pod 的调度优先级，低优先级的 Pod 被优先驱逐。</li>
<li>(3)计算 Pod 所有容器的内存使用量和 Pod 请求的内存量的差值，差值越小，越不容易被驱逐。
<ul>
<li>Pod A 请求 100Mi，使用了 120Mi，比例为 1.2</li>
<li>Pod B 请求 200Mi，使用了 300Mi，比例为1.5</li>
<li>Pod B 会被优先驱逐</li>
</ul>
</li>
</ul>
<h4 id="基于磁盘压力的驱逐" tabindex="-1"><a class="header-anchor" href="#基于磁盘压力的驱逐" aria-hidden="true">#</a> 基于磁盘压力的驱逐</h4>
<p>以下任何一项满足驱逐条件时，它会将节点的 DiskPressure 状态设置为 True,调度器不会再调度任何 Pod 到该节点上：</p>
<ul>
<li>nodefs.available</li>
<li>nodefs.inodesFree</li>
<li>imagefs.available</li>
<li>imagefs.inodesFree</li>
</ul>
<p>驱逐行为</p>
<ul>
<li>有容器运行时分区
<ul>
<li>nodefs 达到驱逐阈值， 那么 kubelet 删除已经退出的容器</li>
<li>Imagefs 达到驱逐阈值，那么 kubelet 删除所有未使用的镜像</li>
</ul>
</li>
<li>无容器运行时分区
<ul>
<li>kubelet 同时删除未运行的容器和未使用的镜像。</li>
</ul>
</li>
</ul>
<p>回收已经退出的容器和未使用的镜像后，如果节点依然满足驱逐条件，kubelet 就会开始驱逐正在运行的 Pod,进一步释放磁盘空间。</p>
<ul>
<li>判断 Pod 的磁盘使用量是否超过请求的大小，超出请求资源的 Pod 会成为备选目标。</li>
<li>查询 Pod 的调度优先级，低优先级的 Pod 优先驱逐。</li>
<li>根据磁盘使用超过请求的数量进行排序，差值越小，越不容易被驱逐。</li>
</ul>
<h3 id="oom-killer-的行为" tabindex="-1"><a class="header-anchor" href="#oom-killer-的行为" aria-hidden="true">#</a> OOM Killer 的行为</h3>
<ul>
<li>系统的 OOM_Killer 可能会采取 OOM 的方式来中止某些容器的进程，进行必要的内存回收操作</li>
<li>而系统根据进程的 oom_score 来进行优先级排序，选择待终止的进程，且<strong>进程的 oom_score 越高，越容易被终止</strong>。</li>
<li>进程的 oom_score 是根据当前进程使用的内存占节点总内存的比例值乘以 10,再加上 oom_score_adj 综合得到的
<ul>
<li>比如占用内存 50%，那么计算得到的这部分占比分就是 500，如果是 60% 就是 600 分</li>
</ul>
</li>
<li>而容器进程的 oom_score_adj 正是 kubelet 根据 memory.request 进行设置的</li>
</ul>
<table>
<thead>
<tr>
<th>Pod QoS 等级</th>
<th>oom_score_adj</th>
</tr>
</thead>
<tbody>
<tr>
<td>Guaranteed</td>
<td>-998</td>
</tr>
<tr>
<td>BestEffort</td>
<td>1000</td>
</tr>
<tr>
<td>Burstable</td>
<td>min(max(2,1000-(1000 * memoryRequestBytes) / machineMemoryCapacityBytes), 999)</td>
</tr>
</tbody>
</table>
<p>查看具体 Pod 的 oom_score：</p>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>crictl ps|grep nginx
crictl inspect b2e7a8e64253d|grep pid
cat /proc/296290/oom_score
cat /proc/296290/oom_score_adj
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>查看全部进程的 oom_score</p>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>#!/bin/bash
printf 'PID\tOOM Score\tOOM Adj\tCommand\n'
while read -r pid comm; do [ -f /proc/$pid/oom_score ] &amp;&amp; [ $(cat /proc/$pid/oom_score) != 0 ] &amp;&amp; printf '%d\t%d\t\t%d\t%s\n' "$pid" "$(cat /proc/$pid/oom_score)" "$(cat /proc/$pid/oom_score_adj)" "$comm"; done &lt; &lt;(ps -e -o pid= -o comm=) | sort -k 2nr
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="测试对-cpu-的校验和准入行为" tabindex="-1"><a class="header-anchor" href="#测试对-cpu-的校验和准入行为" aria-hidden="true">#</a> 测试对 cpu 的校验和准入行为</h3>
<ul>
<li>定义一个 Pod,并将该 Pod 中的 nodeName 属性直接写成集群中的节点名</li>
<li>将 Pod 的 CPU 的资源设置为超出计算节点的 CPU 的值</li>
<li>创建该 Pod</li>
<li>观察行为并思考</li>
</ul>
<h3 id="日志管理" tabindex="-1"><a class="header-anchor" href="#日志管理" aria-hidden="true">#</a> 日志管理</h3>
<p>节点上需要通过运行 logrotate 的定时任务对系统服务日志进行rotate清理，以防止系统服务日志占用大量的磁盘空间。</p>
<ul>
<li>logrotate 的执行周期不能过长，以防日志短时间内大量增长。</li>
<li>同时配置日志的 rotate 条件， 在日志不占用太多空间的情况下，保证有足够的日志可供查看。</li>
<li>Docker
<ul>
<li>除了基于系统 logrotate 管理日志，还可以依赖 Docker 自带的日志管理功能来设置容器日志的数量和每个日志文件的大小。</li>
<li>Docker 写入数据之前会对日志大小进行检查和 rotate 操作，确保日志文件不会超过配置的数量和大小。</li>
</ul>
</li>
<li>Containerd
<ul>
<li>日志的管理是通过 kubelet 定期(默认为10s)执行 du 命令，来检查容器日志的数量和文件的大小的。</li>
<li>每个容器日志的大小和可以保留的文件个数，可以通过 kubelet 的配置参数 container-log-max-size和container-log-max-files 进行调整。</li>
</ul>
</li>
</ul>
<h3 id="docker-卷管理" tabindex="-1"><a class="header-anchor" href="#docker-卷管理" aria-hidden="true">#</a> Docker 卷管理</h3>
<ul>
<li>在构建容器镜像时，可以在 Dockerfile 中通过 VOLUME 指令声明一个存储卷，目前 Kubernetes 并未将其纳入管控范围，不建议使用。</li>
<li>如果容器进程在可写层或 emptyDir 卷进行大量读写操作，就会导致磁盘 I/O 过高,从而影响其他容器进程甚至系统进程。</li>
<li>Docker 和 Containerd 运行时都基于 CGroupv1。对于块设备,只支持对 Direct I/O 限速，而对于Buffer I/O 还不具备有效的支持。因此，针对设备限速的问题，目前还没有完美的解决方案,对于有特殊 I/O 需求的容器，建议使用独立的磁盘空间。</li>
</ul>
<h3 id="网络资源" tabindex="-1"><a class="header-anchor" href="#网络资源" aria-hidden="true">#</a> 网络资源</h3>
<p>由网络插件通过 Linux Traffic Control 为 Pod限制带宽</p>
<p>可利用 CNI社区提供的 bandwidth 插件</p>
<h3 id="进程数" tabindex="-1"><a class="header-anchor" href="#进程数" aria-hidden="true">#</a> 进程数</h3>
<p>kubelet 默认不限制 Pod 可以创建的子进程数量，但可以通过启动参数 podPidsLimit 开启限制，还可以由reserved 参数为系统进程预留进程数。</p>
<ul>
<li>kubelet 通过系统调用周期性地获取当前系统的 PID 的使用量，并读取 <code v-pre>/proc/sys/kernel/pid_max</code>, 获取系统支持的PID 上限。</li>
<li>如果当前的可用进程数少于设定阈值，那么 kubelet 会将节点对象的 PIDPressure 标记为 True</li>
<li>kube-scheduler 在进行调度时， 会从备选节点中对处于 NodeUnderPIDPressure 状态的节点进行过滤。</li>
</ul>
<h2 id="kubernetes-日志" tabindex="-1"><a class="header-anchor" href="#kubernetes-日志" aria-hidden="true">#</a> Kubernetes 日志</h2>
<p>与传统的日志收集相比，Kubernetes 日志收集具有以下不同之处：</p>
<ol>
<li>分布式：Kubernetes 集群中运行的应用程序通常由多个容器组成，这些容器可能跨越多个节点。因此，日志收集需要跨节点和容器进行。</li>
<li>动态性：Kubernetes 集群中的 Pod 可以随时被创建、删除或重新启动。因此，日志收集需要动态地适应这些变化。</li>
<li>多样性：Kubernetes 集群中的应用程序可能使用多种编程语言和日志格式。因此，日志收集需要支持多种格式和语言。</li>
</ol>
<p>为了解决这些问题，Kubernetes 提供了一些内置的日志收集机制，如 kubectl logs 命令和 Fluentd 插件。此外，还可以使用第三方工具，如 Elasticsearch、Fluentd 和 Kibana 等，来进行日志收集和分析。</p>
<h3 id="前言" tabindex="-1"><a class="header-anchor" href="#前言" aria-hidden="true">#</a> 前言</h3>
<p>Pod 的生命周期很短， Pod 销毁后 日志也会一同被删除， Kubernetes 的日志系统在设计的时候，必须独立于节点和pod 的生命周期，且保证日志数据可以实时采集到服务端。</p>
<p>在 Kubernetes 集群中，需要进行日志收集的地方包括：</p>
<ul>
<li>容器日志：在容器中运行的应用程序输出的日志。</li>
<li>节点日志：节点上的系统日志和容器日志。</li>
</ul>
<p>除了以上两种方式外，还可以使用日志聚合工具，如 Elasticsearch、Fluentd 和 Kibana 等，来进行日志收集和分析。</p>
<p>在进行日志收集时，需要注意以下几点：</p>
<ul>
<li>确保节点和 Pod 的时间同步。</li>
<li>将日志存储在持久存储中，避免数据丢失。</li>
<li>对于大规模集群，需要考虑日志的压缩和转储，以减少存储空间的占用。</li>
</ul>
<h3 id="日志轮转" tabindex="-1"><a class="header-anchor" href="#日志轮转" aria-hidden="true">#</a> 日志轮转</h3>
<p><strong>日志轮转</strong>是指在日志文件达到一定大小或一定时间后，将其重命名并创建一个新的日志文件，以避免日志文件过大或过旧而导致的性能问题或存储问题。</p>
<p>优点：</p>
<ul>
<li>避免单个日志文件过大，导致读取、写入、传输、存储等方面的性能问题。</li>
<li>避免日志文件过旧，导致存储空间占用过多。</li>
</ul>
<p>缺点：</p>
<ul>
<li>如果日志轮转设置不当，可能会导致日志文件不完整，或者日志文件没有及时轮转，导致存储空间占用过多。</li>
</ul>
<h2 id="end-链接" tabindex="-1"><a class="header-anchor" href="#end-链接" aria-hidden="true">#</a> END 链接</h2>
<ul><li><div><a href = '60.md' style='float:left'>⬆️上一节🔗  </a><a href = '62.md' style='float: right'>  ️下一节🔗</a></div></li></ul>
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


