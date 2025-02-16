<template><div><h1 id="_129-minio-的配置" tabindex="-1"><a class="header-anchor" href="#_129-minio-的配置" aria-hidden="true">#</a> 129: minio 的配置</h1>
<h3 id="minio-configuration-and-usage-guide" tabindex="-1"><a class="header-anchor" href="#minio-configuration-and-usage-guide" aria-hidden="true">#</a> MinIO Configuration and Usage Guide</h3>
<h4 id="_1-overview" tabindex="-1"><a class="header-anchor" href="#_1-overview" aria-hidden="true">#</a> 1. Overview</h4>
<p>MinIO is an object storage server that is API compatible with Amazon S3. It's best suited for storing unstructured data such as photos, videos, log files, backups, and container/VM images. In this guide, we'll walk through the process of configuring MinIO with custom settings.</p>
<h4 id="_2-default-configuration" tabindex="-1"><a class="header-anchor" href="#_2-default-configuration" aria-hidden="true">#</a> 2. Default Configuration</h4>
<p>Configuration can be achieved by modifying the default variables in the <code v-pre>./scripts/install/environment.sh</code> file. However, for more flexibility and dynamic adjustments, setting environment variables is recommended.</p>
<h4 id="_3-setting-up-the-environment-variables" tabindex="-1"><a class="header-anchor" href="#_3-setting-up-the-environment-variables" aria-hidden="true">#</a> 3. Setting Up the Environment Variables</h4>
<h5 id="_3-1-ip-configuration" tabindex="-1"><a class="header-anchor" href="#_3-1-ip-configuration" aria-hidden="true">#</a> 3.1. IP Configuration</h5>
<p>By default, the system generates the public IP of the machine. To manually set a public or local IP address, use:</p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code><span class="token builtin class-name">export</span> <span class="token assign-left variable">IP</span><span class="token operator">=</span><span class="token number">127.0</span>.0.1
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h5 id="_3-2-api-url" tabindex="-1"><a class="header-anchor" href="#_3-2-api-url" aria-hidden="true">#</a> 3.2. API URL</h5>
<p>This is the address your application uses to communicate with MinIO. By default, it uses the public IP. However, you can adjust it to a public domain or another IP.</p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code><span class="token builtin class-name">export</span> <span class="token assign-left variable">API_URL</span><span class="token operator">=</span><span class="token number">127.0</span>.0.1:10002
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h5 id="_3-3-minio-endpoint-configuration" tabindex="-1"><a class="header-anchor" href="#_3-3-minio-endpoint-configuration" aria-hidden="true">#</a> 3.3. MinIO Endpoint Configuration</h5>
<p>This is the primary address MinIO uses for communications:</p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code><span class="token builtin class-name">export</span> <span class="token assign-left variable">MINIO_ENDPOINT</span><span class="token operator">=</span><span class="token string">"127.0.0.1"</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h5 id="_3-4-minio-sign-endpoint" tabindex="-1"><a class="header-anchor" href="#_3-4-minio-sign-endpoint" aria-hidden="true">#</a> 3.4. MinIO Sign Endpoint</h5>
<p>For direct external access to stored content:</p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code><span class="token builtin class-name">export</span> <span class="token assign-left variable">MINIO_SIGN_ENDPOINT</span><span class="token operator">=</span><span class="token number">127.0</span>.0.1:10005
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h5 id="_3-5-modifying-minio-s-port" tabindex="-1"><a class="header-anchor" href="#_3-5-modifying-minio-s-port" aria-hidden="true">#</a> 3.5. Modifying MinIO's Port</h5>
<p>If you need to adjust MinIO's port from the default:</p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code><span class="token builtin class-name">export</span> <span class="token assign-left variable">MINIO_PORT</span><span class="token operator">=</span><span class="token string">"10005"</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h4 id="_4-applying-the-configuration" tabindex="-1"><a class="header-anchor" href="#_4-applying-the-configuration" aria-hidden="true">#</a> 4. Applying the Configuration</h4>
<p>After setting your desired environment variables, restart the MinIO server to apply the changes.</p>
<h4 id="_5-verification" tabindex="-1"><a class="header-anchor" href="#_5-verification" aria-hidden="true">#</a> 5. Verification</h4>
<p>It's crucial to verify the configurations by checking the connectivity between your application and MinIO using the set API URL and ensuring that the data can be directly accessed using the <code v-pre>signEndpoint</code>.</p>
<p>Certainly! Here's a more comprehensive and polished version of the content, structured with the roles of an architect, engineer, programmer, and senior technical writer in mind:</p>
<hr>
<h2 id="openim-data-storage-architecture-guide" tabindex="-1"><a class="header-anchor" href="#openim-data-storage-architecture-guide" aria-hidden="true">#</a> <strong>OpenIM Data Storage Architecture Guide</strong></h2>
<hr>
<h3 id="i-introduction" tabindex="-1"><a class="header-anchor" href="#i-introduction" aria-hidden="true">#</a> <strong>I. Introduction</strong></h3>
<p><strong>OpenIM</strong>, a robust instant messaging system, offers flexible data storage solutions tailored for scalability and performance. This guide provides a deep dive into OpenIM's default storage structure, custom storage settings, and Docker volume management.</p>
<h3 id="ii-openim-default-data-storage-structure" tabindex="-1"><a class="header-anchor" href="#ii-openim-default-data-storage-structure" aria-hidden="true">#</a> <strong>II. OpenIM Default Data Storage Structure</strong></h3>
<p><strong>A. Overview</strong></p>
<p>At the heart of OpenIM's data storage are the essential components: Kafka, MNT, MongoDB, MySQL, and Redis. Each serves a distinct purpose and requires specific configuration and data directories for optimal performance.</p>
<p><strong>B. Directory Structure</strong></p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code>$ tree components/ <span class="token parameter variable">-d</span> <span class="token parameter variable">-L</span> <span class="token number">2</span>
components/
├── kafka
│   ├── config
│   └── data
├── mnt
│   ├── config
│   └── data
├── mongodb
│   └── data
├── mysql
│   └── data
└── redis
    ├── config
    └── data
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="iii-customizing-openim-s-data-storage" tabindex="-1"><a class="header-anchor" href="#iii-customizing-openim-s-data-storage" aria-hidden="true">#</a> III. Customizing OpenIM's Data Storage</h3>
<p><strong>A. Setting a Custom Directory</strong></p>
<p>For organizations with specific storage directory requirements, OpenIM offers the flexibility to specify a custom directory. Follow these steps:</p>
<ol>
<li>Define your custom directory path by setting the <code v-pre>DATA_DIR</code> environment variable:</li>
</ol>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code>$ <span class="token builtin class-name">export</span> <span class="token assign-left variable">DATA_DIR</span><span class="token operator">=</span><span class="token string">"/path/to/your/directory"</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><ol>
<li>Refresh OpenIM's configuration to reflect this change:</li>
</ol>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code>$ <span class="token function">make</span> init
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p><strong>Note:</strong> This action will update the configuration to point to the directory you've specified.</p>
<h3 id="iv-docker-volume-storage-an-advanced-approach" tabindex="-1"><a class="header-anchor" href="#iv-docker-volume-storage-an-advanced-approach" aria-hidden="true">#</a> IV. Docker Volume Storage: An Advanced Approach</h3>
<p><strong>A. Why Docker Volumes?</strong></p>
<p>Docker volumes offer isolated storage solutions, optimizing data persistence and performance. When scaling services in Docker, using volumes ensures that data remains consistent and protected.</p>
<p><strong>B. Using Docker Volumes with OpenIM</strong></p>
<p>To launch OpenIM with Docker volume support, execute:</p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code>$ <span class="token function">docker</span> compose <span class="token parameter variable">-f</span> example/volume-all-server.yml up <span class="token parameter variable">-d</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>With this setup, your OpenIM data is securely mounted onto Docker’s volumes, providing added resilience and scalability.</p>
<p><strong>C. Managing Docker Volumes</strong></p>
<ol>
<li><strong>Listing OpenIM Docker Volumes</strong></li>
</ol>
<p>Retrieve a list of Docker volumes associated with OpenIM using:</p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code>$ <span class="token function">docker</span> volume <span class="token function">ls</span> <span class="token operator">|</span> <span class="token function">grep</span> open-im-server
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><ol>
<li><strong>Removing Data</strong></li>
</ol>
<ul>
<li>For <strong>locally mapped data</strong>: Simply navigate to the appropriate directory and delete the desired files or folders.</li>
<li>For <strong>Docker volume data</strong>: If you wish to clear data from Docker volumes, employ the command below:</li>
</ul>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code>$ <span class="token function">docker</span> volume <span class="token function">ls</span> <span class="token operator">|</span> <span class="token function">grep</span> open-im-server <span class="token operator">|</span> <span class="token function">awk</span> <span class="token string">'{print $2}'</span> <span class="token operator">|</span> <span class="token function">xargs</span> <span class="token function">docker</span> volume <span class="token function">rm</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p><strong>Warning:</strong> This action will permanently erase the data. Always ensure you have backups before proceeding.</p>
<p><a href="https://pkg.go.dev/github.com/openimsdk/open-im-server/v3"><img src="https://pkg.go.dev/badge/github.com/openimsdk/open-im-server/v3.svg" alt="Go Reference"></a></p>
<h3 id="v-conclusion" tabindex="-1"><a class="header-anchor" href="#v-conclusion" aria-hidden="true">#</a> <strong>V. Conclusion</strong></h3>
<p>OpenIM's flexible storage solutions empower organizations to configure their infrastructure in alignment with their specific needs. Whether through default directories, custom paths, or Docker volumes, OpenIM guarantees efficient and secure data management.</p>
<p>For further assistance or advanced configurations, please consult our technical support team or refer to OpenIM's comprehensive documentation.</p>
</div></template>


