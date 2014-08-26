log-error
=========

<log-error>
A web component that calls your API when a js error occurs.
Receive on your api the reference error, target file and the line of the error. 

Maintained by Renan Carvalho. 


#Usage

1. Import Platform.js:
<pre><span class="nt">&lt;script </span><span class="na">src=</span><span class="s">"bower_components/platform/platform.js"</span><span class="nt">&gt;&lt;/script&gt;</span>
</pre>


2. Import Polymer.js:
<pre><span class="nt">&lt;script </span><span class="na">src=</span><span class="s">"bower_components/polymer/polymer.html"</span><span class="nt">&gt;&lt;/script&gt;</span>
</pre>


3.  Import Custom Web Element:
<pre><span class="nt">&lt;link</span> <span class="na">rel=</span><span class="s">"import"</span> <span class="na">href=</span><span class="s">"log-error.html"</span><span class="nt">&gt;</span>
</pre>

4. Import the exceptionHandle.js
<pre><span class="nt">&lt;script </span><span class="na">src=</span><span class="s">"exceptionHandle.js"</span><span class="nt">&gt;&lt;/script&gt;</span>
</pre>


5.  Using the component:
<pre><span class="nt">&lt;log-error</span> <span class="na">api-uri=</span><span class="s">"PathToYourApi"</span><span class="nt">&gt;&lt;/log-error&gt;</span>
</pre>

 
More info of how to use see <a href="www.rcarvalhojs.com/log-error">here.<a/>

The WebComponent will POST th

# Contributing

<ol class="task-list">
<li>Fork it!</li>
<li>Create your feature branch: <code>git checkout -b my-new-feature</code>
</li>
<li>Commit your changes: <code>git commit -m 'Add some feature'</code>
</li>
<li>Push to the branch: <code>git push origin my-new-feature</code>
</li>
<li>Submit a pull request \0/.</li>
</ol>




. 
