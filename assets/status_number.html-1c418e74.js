import{_ as t,o as s,c as n,e as a}from"./app-4d64d895.js";const e={},d=a(`<h1 id="音频状态数" tabindex="-1"><a class="header-anchor" href="#音频状态数" aria-hidden="true">#</a> 音频状态数</h1><h2 id="歌曲状态数" tabindex="-1"><a class="header-anchor" href="#歌曲状态数" aria-hidden="true">#</a> 歌曲状态数</h2><blockquote><p>https://www.bilibili.com/audio/music-service-c/web/stat/song</p></blockquote><p><em>请求方式：GET</em></p><p>唯缺投币数2333333</p><p><strong>url参数：</strong></p><table><thead><tr><th>参数名</th><th>类型</th><th>内容</th><th>必要性</th><th>备注</th></tr></thead><tbody><tr><td>sid</td><td>num</td><td>音频auid</td><td>必要</td><td></td></tr></tbody></table><p><strong>json回复：</strong></p><p>根对象：</p><table><thead><tr><th>字段</th><th>类型</th><th>内容</th><th>备注</th></tr></thead><tbody><tr><td>code</td><td>num</td><td>返回值</td><td>0：成功<br>72000000：参数错误</td></tr><tr><td>msg</td><td>str</td><td>错误信息</td><td>默认为success</td></tr><tr><td>data</td><td>obj</td><td>信息本体</td><td></td></tr></tbody></table><p><code>data</code>对象：</p><table><thead><tr><th>字段</th><th>类型</th><th>内容</th><th>备注</th></tr></thead><tbody><tr><td>sid</td><td>num</td><td>音频auid</td><td></td></tr><tr><td>play</td><td>num</td><td>播放次数</td><td></td></tr><tr><td>collect</td><td>num</td><td>收藏数</td><td></td></tr><tr><td>comment</td><td>num</td><td>评论数</td><td></td></tr><tr><td>share</td><td>num</td><td>分享数</td><td></td></tr></tbody></table><p><strong>示例：</strong></p><p>查询歌曲<code>au15664</code>的状态数</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">curl</span> <span class="token parameter variable">-G</span> <span class="token string">&#39;https://www.bilibili.com/audio/music-service-c/web/stat/song&#39;</span> <span class="token punctuation">\\</span>
--data-urlencode <span class="token string">&#39;sid=15664&#39;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><details><summary>查看响应示例：</summary><div class="language-json line-numbers-mode" data-ext="json"><pre class="language-json"><code><span class="token punctuation">{</span>
    <span class="token property">&quot;code&quot;</span><span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span>
    <span class="token property">&quot;msg&quot;</span><span class="token operator">:</span> <span class="token string">&quot;success&quot;</span><span class="token punctuation">,</span>
    <span class="token property">&quot;data&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token property">&quot;sid&quot;</span><span class="token operator">:</span> <span class="token number">15664</span><span class="token punctuation">,</span>
        <span class="token property">&quot;play&quot;</span><span class="token operator">:</span> <span class="token number">1377390</span><span class="token punctuation">,</span>
        <span class="token property">&quot;collect&quot;</span><span class="token operator">:</span> <span class="token number">44340</span><span class="token punctuation">,</span>
        <span class="token property">&quot;comment&quot;</span><span class="token operator">:</span> <span class="token number">2756</span><span class="token punctuation">,</span>
        <span class="token property">&quot;share&quot;</span><span class="token operator">:</span> <span class="token number">4114</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></details>`,16),o=[d];function p(r,c){return s(),n("div",null,o)}const i=t(e,[["render",p],["__file","status_number.html.vue"]]);export{i as default};
