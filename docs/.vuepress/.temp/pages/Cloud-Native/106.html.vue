<template><div><h1 id="_106openim-protoc-tool" tabindex="-1"><a class="header-anchor" href="#_106openim-protoc-tool" aria-hidden="true">#</a> 106OpenIM Protoc Tool</h1>
<h2 id="introduction" tabindex="-1"><a class="header-anchor" href="#introduction" aria-hidden="true">#</a> Introduction</h2>
<p>OpenIM is passionate about ensuring that its suite of tools is custom-tailored to cater to the unique needs of its users. That commitment led us to develop and release our custom Protoc tool, version v1.0.0.</p>
<h3 id="why-a-custom-version" tabindex="-1"><a class="header-anchor" href="#why-a-custom-version" aria-hidden="true">#</a> Why a Custom Version?</h3>
<p>There are several reasons to choose our custom Protoc tool over generic open-source versions:</p>
<ul>
<li><strong>Specialized Features</strong>: OpenIM's Protoc tool has been enriched with features and plugins that are optimized for the OpenIM ecosystem. This makes it more aligned with the needs of OpenIM users.</li>
<li><strong>Optimized Performance</strong>: Built from the ground up with OpenIM's infrastructure in mind, our tool guarantees faster and more efficient operations.</li>
<li><strong>Enhanced Compatibility</strong>: Our Protoc tool ensures full compatibility with OpenIM's offerings, minimizing potential conflicts and integration challenges.</li>
<li><strong>Rich Output Support</strong>: Unlike generic tools, our custom tool provides a wide array of output options including C++, C#, Java, Kotlin, Objective-C, PHP, Python, Ruby, and more. This allows developers to generate code for their preferred platform with ease.</li>
</ul>
<h2 id="download" tabindex="-1"><a class="header-anchor" href="#download" aria-hidden="true">#</a> Download</h2>
<ul>
<li>https://github.com/OpenIMSDK/Open-IM-Protoc</li>
</ul>
<p>Access the official release of the Protoc tool on the OpenIM repository here: <a href="https://github.com/OpenIMSDK/Open-IM-Protoc/releases/tag/v1.0.0" target="_blank" rel="noopener noreferrer">OpenIM Protoc Tool v1.0.0 Release<ExternalLinkIcon/></a></p>
<h3 id="direct-download-links" tabindex="-1"><a class="header-anchor" href="#direct-download-links" aria-hidden="true">#</a> Direct Download Links:</h3>
<ul>
<li><strong>Windows</strong>: <a href="https://github.com/OpenIMSDK/Open-IM-Protoc/releases/download/v1.0.0/windows.zip" target="_blank" rel="noopener noreferrer">Download for Windows<ExternalLinkIcon/></a></li>
<li><strong>Linux</strong>: <a href="https://github.com/OpenIMSDK/Open-IM-Protoc/releases/download/v1.0.0/linux.zip" target="_blank" rel="noopener noreferrer">Download for Linux<ExternalLinkIcon/></a></li>
</ul>
<h2 id="installation" tabindex="-1"><a class="header-anchor" href="#installation" aria-hidden="true">#</a> Installation</h2>
<p>For Windows:</p>
<ol>
<li>Navigate to the Windows download link provided above and download the version suitable for your system.</li>
<li>Extract the contents of the zip file.</li>
<li>Add the path of the extracted tool to your <code v-pre>PATH</code> environment variable to run the Protoc tool directly from the command line.</li>
</ol>
<p>For Linux:</p>
<ol>
<li>Navigate to the Linux download link provided above and download the version suitable for your system.</li>
<li>Extract the contents of the zip file.</li>
<li>Use <code v-pre>chmod +x ./*</code> to make the extracted files executable.</li>
<li>Add the path of the extracted tool to your <code v-pre>PATH</code> environment variable to run the Protoc tool directly from the command line.</li>
</ol>
<h2 id="usage" tabindex="-1"><a class="header-anchor" href="#usage" aria-hidden="true">#</a> Usage</h2>
<p>The OpenIM Protoc tool provides a multitude of options for parsing <code v-pre>.proto</code> files and generating output:</p>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>./protoc [OPTION] PROTO_FILES
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>Some of the key options include:</p>
<ul>
<li><code v-pre>--proto_path=PATH</code>: Specify the directory to search for imports.</li>
<li><code v-pre>--version</code>: Show version info.</li>
<li><code v-pre>--encode=MESSAGE_TYPE</code>: Convert a text-format message of a given type from standard input to binary on standard output.</li>
<li><code v-pre>--decode=MESSAGE_TYPE</code>: Convert a binary message of a given type from standard input to text format on standard output.</li>
<li><code v-pre>--cpp_out=OUT_DIR</code>: Generate C++ header and source.</li>
<li><code v-pre>--java_out=OUT_DIR</code>: Generate Java source file.</li>
</ul>
<p>... and many more. For a full list of options, run <code v-pre>./protoc --help</code> or refer to the official documentation.</p>
</div></template>


