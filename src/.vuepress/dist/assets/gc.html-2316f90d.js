import{_ as o,W as a,X as i,Y as e,Z as n,$ as l,a1 as s,C as r}from"./framework-17a5d3b6.js";const c={},d={id:"golang的垃圾回收",tabindex:"-1"},_=e("a",{class:"header-anchor",href:"#golang的垃圾回收","aria-hidden":"true"},"#",-1),h=s("<p>golang GC 算法使用的是无分代（对象没有代际之分）、不整理（回收过程中不对对象进行移动与整理）、并发（与用户代码并发执行）的三色标记清扫算法。</p><p>三色标记法将对象分为三类，并用不同的颜色相称：</p><ul><li><strong>白色对象（可能死亡）</strong>：未被回收器访问到的对象。在回收开始阶段，所有对象均为白色，当回收结束后，白色对象均不可达</li><li><strong>灰色对象（波面）</strong>：已被回收器访问到的对象，但回收器需要对其中的一个或多个指针进行扫描，因为他们可能还指向白色对象</li><li><strong>黑色对象（确定存活）</strong>：已被回收器访问到的对象，其中所有字段都已被扫描，黑色对象中任何一个指针都不可能直接指向白色对象</li></ul><p>标记过程如下：</p><ul><li>第一步：起初所有的对象都是白色的</li><li>第二步：从根对象出发扫描所有可达对象，标记为灰色，放入待处理队列</li><li>第三步：从待处理队列中取出灰色对象，将其引用的对象标记为灰色并放入待处理队列中，自身标记为黑色</li><li>重复第三步，直到待处理队列为空，此时白色对象即为不可达的“垃圾”，回收白色对象</li></ul>",5),g={id:"写屏障",tabindex:"-1"},u=e("a",{class:"header-anchor",href:"#写屏障","aria-hidden":"true"},"#",-1),p=e("p",null,"当标记和程序是并发执行的，这就会造成一个问题。在标记过程中，有新的引用产生，可能会导致误清扫。清扫开始前，标记为黑色的对象引用了一个新申请的对象，它肯定是白色的，而黑色对象不会被再次扫描，那么这个白色对象无法被扫描变成灰色、黑色，它就会最终被清扫。golang 采用了写屏障，作用就是为了避免这类误清扫问题，写屏障即在内存写操作前，维护一个约束，从而确保清扫开始前，黑色的对象不能引用白色对象。gc一旦开始，无论是创建对象还是对象的引用改变，都会先变为灰色。",-1),f={id:"垃圾回收的触发条件",tabindex:"-1"},x=e("a",{class:"header-anchor",href:"#垃圾回收的触发条件","aria-hidden":"true"},"#",-1),m=e("ul",null,[e("li",null,"系统触发：运行时自行根据内置的条件，检查、发现到则进行 GC 处理，维护整个应用程序的可用性"),e("li",null,"系统监控：当超过两分钟没有产生任何GC时，强制触发 GC"),e("li",null,"步调（Pacing）算法，其核心思想是控制内存增长的比例,当前内存分配达到一定比例则触发"),e("li",null,"触发：开发者在业务代码中自行调用 runtime.GC 方法来触发 GC")],-1);function C(G,B){const t=r("Badge");return a(),i("div",null,[e("h3",d,[_,n(" golang的垃圾回收？"),l(t,{text:"重要",type:"danger"})]),h,e("h3",g,[u,n(" 写屏障？"),l(t,{text:"了解",type:"info"})]),p,e("h3",f,[x,n(" 垃圾回收的触发条件？"),l(t,{text:"重要",type:"danger"})]),m])}const V=o(c,[["render",C],["__file","gc.html.vue"]]);export{V as default};
