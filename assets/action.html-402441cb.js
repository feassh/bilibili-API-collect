import{_ as t,a as s,b as n}from"./fav-55c612b4.js";import{_ as a,o as e,c as d,e as o}from"./app-4d64d895.js";const r={},p=o('<h1 id="专栏投币-点赞-收藏" tabindex="-1"><a class="header-anchor" href="#专栏投币-点赞-收藏" aria-hidden="true">#</a> 专栏投币&amp;点赞&amp;收藏</h1><h2 id="点赞文章" tabindex="-1"><a class="header-anchor" href="#点赞文章" aria-hidden="true">#</a> 点赞文章</h2><img src="'+t+`" width="100" height="100"><blockquote><p>https://api.bilibili.com/x/article/like</p></blockquote><p><em>请求方式：POST</em></p><p>认证方式：Cookie（SESSDATA）</p><p><strong>正文参数（ application/x-www-form-urlencoded ）：</strong></p><table><thead><tr><th>参数名</th><th>类型</th><th>内容</th><th>必要性</th><th>备注</th></tr></thead><tbody><tr><td>id</td><td>num</td><td>文章cvid</td><td>必要</td><td></td></tr><tr><td>type</td><td>num</td><td>操作方式</td><td>必要</td><td>1：点赞<br>2：取消赞</td></tr><tr><td>csrf</td><td>str</td><td>CSRF Token（位于cookie）</td><td>必要</td><td></td></tr></tbody></table><p><strong>json回复：</strong></p><p>根对象：</p><table><thead><tr><th>字段</th><th>类型</th><th>内容</th><th>备注</th></tr></thead><tbody><tr><td>code</td><td>num</td><td>返回值</td><td>0：成功 <br>-101：账号未登录<br>-111：csrf校验失败<br>-400：请求错误<br>10003：不存在该稿件<br>65006：已赞过<br>65004：取消点赞失败</td></tr><tr><td>message</td><td>str</td><td>错误信息</td><td>默认为0</td></tr><tr><td>ttl</td><td>num</td><td>1</td><td></td></tr></tbody></table><p><strong>示例：</strong></p><p>为文章<code>cv5806746</code>点赞</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">curl</span> <span class="token string">&#39;https://api.bilibili.com/x/article/like&#39;</span> <span class="token punctuation">\\</span>
--data-urlencode <span class="token string">&#39;id=5806746&#39;</span> <span class="token punctuation">\\</span>
--data-urlencode <span class="token string">&#39;type=1&#39;</span> <span class="token punctuation">\\</span>
--data-urlencode <span class="token string">&#39;csrf=xxx&#39;</span> <span class="token punctuation">\\</span>
<span class="token parameter variable">-b</span> <span class="token string">&#39;SESSDATA=xxx&#39;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><details><summary>查看响应示例：</summary><div class="language-json line-numbers-mode" data-ext="json"><pre class="language-json"><code><span class="token punctuation">{</span>
    <span class="token property">&quot;code&quot;</span><span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span>
    <span class="token property">&quot;message&quot;</span><span class="token operator">:</span> <span class="token string">&quot;0&quot;</span><span class="token punctuation">,</span>
    <span class="token property">&quot;ttl&quot;</span><span class="token operator">:</span> <span class="token number">1</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></details><h2 id="投币文章" tabindex="-1"><a class="header-anchor" href="#投币文章" aria-hidden="true">#</a> 投币文章</h2><img src="`+s+`" width="100" height="100"><blockquote><p>https://api.bilibili.com/x/web-interface/coin/add</p></blockquote><p><em>请求方式：POST</em></p><p>认证方式：Cookie（SESSDATA）</p><p><strong>正文参数（ application/x-www-form-urlencoded ）：</strong></p><table><thead><tr><th>参数名</th><th>类型</th><th>内容</th><th>必要性</th><th>备注</th></tr></thead><tbody><tr><td>aid</td><td>num</td><td>文章cvid</td><td>必要</td><td></td></tr><tr><td>upid</td><td>num</td><td>文章作者mid</td><td>必要</td><td></td></tr><tr><td>multiply</td><td>num</td><td>投币数量</td><td>必要</td><td>上限为2</td></tr><tr><td>avtype</td><td>num</td><td>2</td><td>必要</td><td>必须为2</td></tr><tr><td>csrf</td><td>str</td><td>CSRF Token（位于cookie）</td><td>必要</td><td></td></tr></tbody></table><p><strong>json回复：</strong></p><p>根对象：</p><table><thead><tr><th>字段</th><th>类型</th><th>内容</th><th>备注</th></tr></thead><tbody><tr><td>code</td><td>num</td><td>返回值</td><td>0：成功<br>-101：账号未登录<br>-102：账号被封停<br>-104：硬币不足<br>-111：csrf校验失败<br>-400：请求错误<br>10003：不存在该稿件<br>34002：不能给自己投币<br>34003：非法的投币数量<br>34005：超过投币上限</td></tr><tr><td>message</td><td>str</td><td>错误信息</td><td>默认为0</td></tr><tr><td>ttl</td><td>num</td><td>1</td><td></td></tr><tr><td>data</td><td>obj</td><td>信息本体</td><td></td></tr></tbody></table><p>data 对象：</p><table><thead><tr><th>字段</th><th>类型</th><th>内容</th><th>备注</th></tr></thead><tbody><tr><td>like</td><td>bool</td><td>是否点赞成功</td><td>true：成功<br>false：失败<br>已赞过则附加点赞失败</td></tr></tbody></table><p><strong>示例：</strong></p><p>为文章<code>cv5806746</code>投币1枚</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">curl</span> <span class="token string">&#39;https://api.bilibili.com/x/web-interface/coin/add&#39;</span> <span class="token punctuation">\\</span>
--data-urlencode <span class="token string">&#39;aid=5806746&#39;</span> <span class="token punctuation">\\</span>
--data-urlencode <span class="token string">&#39;upid=486980924&#39;</span> <span class="token punctuation">\\</span>
--data-urlencode <span class="token string">&#39;multiply=1&#39;</span> <span class="token punctuation">\\</span>
--data-urlencode <span class="token string">&#39;avtype=2&#39;</span> <span class="token punctuation">\\</span>
--data-urlencode <span class="token string">&#39;csrf=xxx&#39;</span> <span class="token punctuation">\\</span>
<span class="token parameter variable">-b</span> <span class="token string">&#39;SESSDATA=xxx&#39;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><details><summary>查看响应示例：</summary><div class="language-json line-numbers-mode" data-ext="json"><pre class="language-json"><code><span class="token punctuation">{</span>
    <span class="token property">&quot;code&quot;</span><span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span>
    <span class="token property">&quot;message&quot;</span><span class="token operator">:</span> <span class="token string">&quot;0&quot;</span><span class="token punctuation">,</span>
    <span class="token property">&quot;ttl&quot;</span><span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">,</span>
    <span class="token property">&quot;data&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token property">&quot;like&quot;</span><span class="token operator">:</span> <span class="token boolean">false</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></details><h2 id="收藏文章" tabindex="-1"><a class="header-anchor" href="#收藏文章" aria-hidden="true">#</a> 收藏文章</h2><img src="`+n+`" width="100" height="100"><blockquote><p>https://api.bilibili.com/x/article/favorites/add</p></blockquote><p><em>请求方式：POST</em></p><p>认证方式：Cookie（SESSDATA）</p><p><strong>正文参数（ application/x-www-form-urlencoded ）：</strong></p><table><thead><tr><th>参数名</th><th>类型</th><th>内容</th><th>必要性</th><th>备注</th></tr></thead><tbody><tr><td>id</td><td>num</td><td>文章cvid</td><td>必要</td><td></td></tr><tr><td>csrf</td><td>str</td><td>CSRF Token（位于cookie）</td><td>必要</td><td></td></tr></tbody></table><p><strong>json回复：</strong></p><p>根对象：</p><table><thead><tr><th>字段</th><th>类型</th><th>内容</th><th>备注</th></tr></thead><tbody><tr><td>code</td><td>num</td><td>返回值</td><td>0：成功<br>-101：账号未登录<br>-111：csrf校验失败<br>-400：请求错误<br>-404：无此项</td></tr><tr><td>message</td><td>str</td><td>错误信息</td><td>正确为success</td></tr><tr><td>data</td><td>obj</td><td>信息本体</td><td></td></tr></tbody></table><p><strong>示例：</strong></p><p>收藏文章<code>cv5806746</code></p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">curl</span> <span class="token string">&#39;https://api.bilibili.com/x/article/favorites/add&#39;</span> <span class="token punctuation">\\</span>
--data-urlencode <span class="token string">&#39;id=5806746&#39;</span> <span class="token punctuation">\\</span>
--data-urlencode <span class="token string">&#39;csrf=xxx&#39;</span> <span class="token punctuation">\\</span>
<span class="token parameter variable">-b</span> <span class="token string">&#39;SESSDATA=xxx&#39;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><details><summary>查看响应示例：</summary><div class="language-json line-numbers-mode" data-ext="json"><pre class="language-json"><code><span class="token punctuation">{</span>
    <span class="token property">&quot;code&quot;</span><span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span>
    <span class="token property">&quot;message&quot;</span><span class="token operator">:</span> <span class="token string">&quot;0&quot;</span><span class="token punctuation">,</span>
    <span class="token property">&quot;ttl&quot;</span><span class="token operator">:</span> <span class="token number">1</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></details>`,45),i=[p];function l(c,u){return e(),d("div",null,i)}const m=a(r,[["render",l],["__file","action.html.vue"]]);export{m as default};
