<template><div><h1 id="_118-openim-web-service" tabindex="-1"><a class="header-anchor" href="#_118-openim-web-service" aria-hidden="true">#</a> 118: OpenIM Web Service</h1>
<p>OpenIM Web Service is a lightweight containerized service built with Go. The service serves static files and allows customization via environment variables.</p>
<h2 id="overview" tabindex="-1"><a class="header-anchor" href="#overview" aria-hidden="true">#</a> Overview</h2>
<ul>
<li>Built using Go.</li>
<li>Deployed as a Docker container.</li>
<li>Serves static files from a directory which can be set via an environment variable.</li>
<li>The default port for the service is <code v-pre>20001</code>, but it can be customized using an environment variable.</li>
</ul>
<h2 id="docker-deployment" tabindex="-1"><a class="header-anchor" href="#docker-deployment" aria-hidden="true">#</a> Docker Deployment</h2>
<h3 id="build-the-docker-image" tabindex="-1"><a class="header-anchor" href="#build-the-docker-image" aria-hidden="true">#</a> Build the Docker Image</h3>
<p>Even though we've implemented automation, it's to make the developer experience easier:</p>
<p>To build the Docker image for OpenIM Web Service:</p>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>docker build -t openim-web .
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="run-the-docker-container" tabindex="-1"><a class="header-anchor" href="#run-the-docker-container" aria-hidden="true">#</a> Run the Docker Container</h3>
<p>To run the service:</p>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>docker run -e DIST_PATH=/app/dist -e PORT=20001 -p 20001:20001 openim-web
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h2 id="configuration" tabindex="-1"><a class="header-anchor" href="#configuration" aria-hidden="true">#</a> Configuration</h2>
<p>You can configure the OpenIM Web Service using the following environment variables:</p>
<ul>
<li><strong>DIST_PATH</strong>: The path to the directory containing the static files. Default: <code v-pre>/app/dist</code>.</li>
<li><strong>PORT</strong>: The port on which the service listens. Default: <code v-pre>20001</code>.</li>
</ul>
<h2 id="contributions" tabindex="-1"><a class="header-anchor" href="#contributions" aria-hidden="true">#</a> Contributions</h2>
<p>We welcome contributions from the community. If you find any bugs or have feature suggestions, please create an issue or send a pull request.</p>
</div></template>


