import{_ as t,o as s,c as n,e as a}from"./app-4d64d895.js";const e={},p=a(`<h1 id="全站广播" tabindex="-1"><a class="header-anchor" href="#全站广播" aria-hidden="true">#</a> 全站广播</h1><h2 id="获取广播服务器地址" tabindex="-1"><a class="header-anchor" href="#获取广播服务器地址" aria-hidden="true">#</a> 获取广播服务器地址</h2><blockquote><p>https://api.bilibili.com/x/web-interface/broadcast/servers</p></blockquote><p><em>请求方式：GET</em></p><p><strong>url参数：</strong></p><table><thead><tr><th>参数名</th><th>类型</th><th>内容</th><th>必要性</th><th>备注</th></tr></thead><tbody><tr><td>platform</td><td>str</td><td>平台选择</td><td>必要</td><td>为web时输出域名<br>其他时输出ip</td></tr></tbody></table><p><strong>json回复：</strong></p><p>根对象：</p><table><thead><tr><th>字段</th><th>类型</th><th>内容</th><th>备注</th></tr></thead><tbody><tr><td>code</td><td>num</td><td>返回值</td><td>0：成功<br>-400：请求错误</td></tr><tr><td>message</td><td>str</td><td>错误信息</td><td>默认为0</td></tr><tr><td>ttl</td><td>num</td><td>1</td><td></td></tr><tr><td>data</td><td>obj</td><td>信息本体</td><td></td></tr></tbody></table><p><code>data</code>对象：</p><table><thead><tr><th>字段</th><th>类型</th><th>内容</th><th>备注</th></tr></thead><tbody><tr><td>domain</td><td>str</td><td>广播服务器url</td><td></td></tr><tr><td>tcp_port</td><td>num</td><td>tcp端口</td><td></td></tr><tr><td>ws_port</td><td>num</td><td>websocket端口</td><td></td></tr><tr><td>wss_port</td><td>num</td><td>websocket ssl端口</td><td></td></tr><tr><td>heartbeat</td><td>num</td><td>最大心跳包间隔时间</td><td></td></tr><tr><td>nodes</td><td>array</td><td>服务节点地址列表</td><td></td></tr><tr><td>backoff</td><td>obj</td><td>？？？</td><td></td></tr><tr><td>heartbeat_max</td><td>num</td><td>？？？</td><td></td></tr></tbody></table><p><code>data</code>中的<code>nodes</code>数组：</p><table><thead><tr><th>项</th><th>类型</th><th>内容</th><th>备注</th></tr></thead><tbody><tr><td>0</td><td>str</td><td>服务节点1</td><td></td></tr><tr><td>n</td><td>str</td><td>服务节点(n+1)</td><td></td></tr><tr><td>……</td><td>str</td><td>……</td><td></td></tr></tbody></table><p><code>data</code>中的<code>backoff</code>对象：</p><table><thead><tr><th>字段</th><th>类型</th><th>内容</th><th>备注</th></tr></thead><tbody><tr><td>max_delay</td><td>num</td><td>？？？</td><td></td></tr><tr><td>base_delay</td><td>num</td><td>？？？</td><td></td></tr><tr><td>factor</td><td>num</td><td>？？？</td><td></td></tr><tr><td>jitter</td><td>num</td><td>？？？</td><td></td></tr></tbody></table><p>示例：</p><p>当<code>platform</code>=<code>web</code>时，不显示节点ip</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">curl</span> <span class="token parameter variable">-G</span> <span class="token string">&#39;https://api.bilibili.com/x/web-interface/broadcast/servers&#39;</span> <span class="token punctuation">\\</span>
--data-urlencode <span class="token string">&#39;platform=web&#39;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><details><summary>查看响应示例：</summary><div class="language-json line-numbers-mode" data-ext="json"><pre class="language-json"><code><span class="token punctuation">{</span>
	<span class="token property">&quot;code&quot;</span><span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span>
	<span class="token property">&quot;message&quot;</span><span class="token operator">:</span> <span class="token string">&quot;0&quot;</span><span class="token punctuation">,</span>
	<span class="token property">&quot;ttl&quot;</span><span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">,</span>
	<span class="token property">&quot;data&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
		<span class="token property">&quot;domain&quot;</span><span class="token operator">:</span> <span class="token string">&quot;broadcast.chat.bilibili.com&quot;</span><span class="token punctuation">,</span>
		<span class="token property">&quot;tcp_port&quot;</span><span class="token operator">:</span> <span class="token number">7821</span><span class="token punctuation">,</span>
		<span class="token property">&quot;ws_port&quot;</span><span class="token operator">:</span> <span class="token number">7822</span><span class="token punctuation">,</span>
		<span class="token property">&quot;wss_port&quot;</span><span class="token operator">:</span> <span class="token number">7823</span><span class="token punctuation">,</span>
		<span class="token property">&quot;heartbeat&quot;</span><span class="token operator">:</span> <span class="token number">30</span><span class="token punctuation">,</span>
		<span class="token property">&quot;nodes&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">&quot;broadcast.chat.bilibili.com&quot;</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
		<span class="token property">&quot;backoff&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
			<span class="token property">&quot;max_delay&quot;</span><span class="token operator">:</span> <span class="token number">300</span><span class="token punctuation">,</span>
			<span class="token property">&quot;base_delay&quot;</span><span class="token operator">:</span> <span class="token number">3</span><span class="token punctuation">,</span>
			<span class="token property">&quot;factor&quot;</span><span class="token operator">:</span> <span class="token number">1.8</span><span class="token punctuation">,</span>
			<span class="token property">&quot;jitter&quot;</span><span class="token operator">:</span> <span class="token number">0.3</span>
		<span class="token punctuation">}</span><span class="token punctuation">,</span>
		<span class="token property">&quot;heartbeat_max&quot;</span><span class="token operator">:</span> <span class="token number">3</span>
	<span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></details><p>当<code>platform</code>=其他时，显示节点ip</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">curl</span> <span class="token parameter variable">-G</span> <span class="token string">&#39;https://api.bilibili.com/x/web-interface/broadcast/servers&#39;</span> <span class="token punctuation">\\</span>
--data-urlencode <span class="token string">&#39;platform=1&#39;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><details><summary>查看响应示例：</summary><div class="language-json line-numbers-mode" data-ext="json"><pre class="language-json"><code><span class="token punctuation">{</span>
	<span class="token property">&quot;code&quot;</span><span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span>
	<span class="token property">&quot;message&quot;</span><span class="token operator">:</span> <span class="token string">&quot;0&quot;</span><span class="token punctuation">,</span>
	<span class="token property">&quot;ttl&quot;</span><span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">,</span>
	<span class="token property">&quot;data&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
		<span class="token property">&quot;domain&quot;</span><span class="token operator">:</span> <span class="token string">&quot;broadcast.chat.bilibili.com&quot;</span><span class="token punctuation">,</span>
		<span class="token property">&quot;tcp_port&quot;</span><span class="token operator">:</span> <span class="token number">7821</span><span class="token punctuation">,</span>
		<span class="token property">&quot;ws_port&quot;</span><span class="token operator">:</span> <span class="token number">7822</span><span class="token punctuation">,</span>
		<span class="token property">&quot;wss_port&quot;</span><span class="token operator">:</span> <span class="token number">7823</span><span class="token punctuation">,</span>
		<span class="token property">&quot;heartbeat&quot;</span><span class="token operator">:</span> <span class="token number">30</span><span class="token punctuation">,</span>
		<span class="token property">&quot;nodes&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">&quot;134.175.207.130&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;120.92.150.90&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;120.92.150.212&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;192.144.173.136&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;154.8.217.108&quot;</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
		<span class="token property">&quot;backoff&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
			<span class="token property">&quot;max_delay&quot;</span><span class="token operator">:</span> <span class="token number">300</span><span class="token punctuation">,</span>
			<span class="token property">&quot;base_delay&quot;</span><span class="token operator">:</span> <span class="token number">3</span><span class="token punctuation">,</span>
			<span class="token property">&quot;factor&quot;</span><span class="token operator">:</span> <span class="token number">1.8</span><span class="token punctuation">,</span>
			<span class="token property">&quot;jitter&quot;</span><span class="token operator">:</span> <span class="token number">0.3</span>
		<span class="token punctuation">}</span><span class="token punctuation">,</span>
		<span class="token property">&quot;heartbeat_max&quot;</span><span class="token operator">:</span> <span class="token number">3</span>
	<span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></details><h2 id="服务器数据包" tabindex="-1"><a class="header-anchor" href="#服务器数据包" aria-hidden="true">#</a> 服务器数据包</h2><p>连接服务器分为三种方式，分别是ws wss tcp，数据包分为上行和下行</p><p>单个数据包分为头部和正文</p><p>其中上行的有认证包 心跳包，下行的有认证包回复 心跳包回复 普通包</p><p>建立连接后超过30s内未发送认证包，或握手后30s内未发送心跳包，或发送了错误的认证包，都会被强制断开连接</p><p>操作流程：</p><p>1.发送认证包，等待接收认证回复</p><p>2.确认握手成功后，每30s内发送心跳包，并立即接收心跳包回复</p><p>3.空闲时间接收普通包</p><h3 id="数据包结构" tabindex="-1"><a class="header-anchor" href="#数据包结构" aria-hidden="true">#</a> 数据包结构</h3><p>头部通用于上行和下行数据包</p><p>头部格式：</p><table><thead><tr><th>偏移量</th><th>长度（字节）</th><th>类型</th><th>含义</th></tr></thead><tbody><tr><td>0x00</td><td>4</td><td>uint32</td><td>封包总大小（头部大小+正文大小）</td></tr><tr><td>0x04</td><td>2</td><td>uint16</td><td>头部大小（一般为0x0012，18字节）</td></tr><tr><td>0x06</td><td>2</td><td>uint16</td><td>协议版本，可取常数1</td></tr><tr><td>0x08</td><td>4</td><td>uint32</td><td>操作码（包类型）<br><strong>见下表</strong></td></tr><tr><td>0x0C</td><td>4</td><td>uint32</td><td>sequence（请求次数），可取常数1<br>对于普通包恒为0</td></tr><tr><td>0x10</td><td>2</td><td>uint16</td><td>保留，一般为0</td></tr></tbody></table><p>操作码：</p><table><thead><tr><th>代码</th><th>含义</th></tr></thead><tbody><tr><td>2</td><td>心跳</td></tr><tr><td>3</td><td>心跳回复</td></tr><tr><td>7</td><td>认证</td></tr><tr><td>8</td><td>认证回复</td></tr><tr><td>1000</td><td>实时弹幕</td></tr></tbody></table><p><strong>示例：</strong></p><p>以下为一个认证包示例，正文为文本<code>test</code></p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>00000000  00 00 00 16 00 12 00 01  00 00 00 07 00 00 00 01  |................|
00000010  00 00 74 65 73 74                                 |..test|
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div>`,40),o=[p];function d(r,c){return s(),n("div",null,o)}const i=t(e,[["render",d],["__file","index.html.vue"]]);export{i as default};
