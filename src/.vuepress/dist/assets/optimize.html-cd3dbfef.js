import{_ as i,W as s,X as l,Y as o,Z as t,$ as n,a1 as a,C as c}from"./framework-17a5d3b6.js";const r={},g={id:"慢查询的原因",tabindex:"-1"},_=o("a",{class:"header-anchor",href:"#慢查询的原因","aria-hidden":"true"},"#",-1),d=a('<ul><li><p><strong>索引不足</strong>：如果查询的表没有合适的索引，MySQL需要遍历整个表才能找到匹配的记录，这会导致查询变慢。可以通过添加索引来优化查询性能。</p></li><li><p><strong>数据库设计问题</strong>：如果数据库设计不合理，例如表过于庞大、列过多等，查询时可能需要耗费大量时间。这时可以通过优化数据库设计来解决问题。</p></li><li><p><strong>数据库服务器负载过高</strong>：如果MySQL服务器上同时运行了太多的查询，会导致服务器负载过高，从而导致查询变慢。可以通过增加服务器硬件配置或分散查询负载来解决问题。</p></li><li><p><strong>查询语句复杂</strong>：复杂的查询语句可能需要耗费更多的时间才能完成。可以尝试简化查询语句或将查询分解成多个较简单的查询语句来提高性能。</p></li><li><p><strong>数据库统计信息不准确</strong>：如果数据库统计信息不准确，MySQL可能会选择不合适的查询计划，从而导致查询变慢。可以通过更新数据库统计信息来解决问题。</p></li><li><p><strong>MySQL版本过低</strong>：较老版本的MySQL可能性能较差，升级到较新版本的MySQL可能会提高查询性能。</p></li></ul><figure><img src="https://img-blog.csdnimg.cn/d3ba35cf63b44096b3766372845cf4ac.png" alt="在这里插入图片描述" tabindex="0" loading="lazy"><figcaption>在这里插入图片描述</figcaption></figure>',2),p={id:"mysql磁盘i-o很高有什么优化的方法",tabindex:"-1"},h=o("a",{class:"header-anchor",href:"#mysql磁盘i-o很高有什么优化的方法","aria-hidden":"true"},"#",-1),u=o("p",null,[o("strong",null,"设置组提交的两个参数"),t("： binlog_group_commit_sync_delay 和 binlog_group_commit_sync_no_delay_count 参数，延迟 binlog 刷盘的时机，从而减少 binlog 的刷盘次数。")],-1),m=o("div",{class:"hint-container tip"},[o("p",{class:"hint-container-title"},"提示"),o("p",null,"这个方法是基于“额外的故意等待”来实现的，因此可能会增加语句的响应时间，但即使 MySQL 进程中途挂了，也没有丢失数据的风险，因为 binlog 早被写入到 page cache 了，只要系统没有宕机，缓存在 page cache 里的 binlog 就会被持久化到磁盘。")],-1),f=o("p",null,[o("strong",null,"将 sync_binlog 设置为大于 1 的值(比较常见是 100~1000)"),t("：表示每次提交事务都 write，但累积 N 个事务后才 fsync，相当于延迟了 binlog 刷盘的时机。但是这样做的风险是，主机掉电时会丢 N 个事务的 binlog 日志。")],-1),y=o("p",null,[o("strong",null,"将 innodb_flush_log_at_trx_commit 设置为 2"),t("：表示每次事务提交时，都只是缓存在 redo log buffer 里的 redo log 写到 redo log 文件，注意写入到redo log 文件并不意味着写入到了磁盘，因为操作系统的文件系统中有个 Page Cache，专门用来缓存文件数据的，所以写入 redo log文件意味着写入到了操作系统的文件缓存，然后交由操作系统控制持久化到磁盘的时机。但是这样做的风险是，主机掉电的时候会丢数据。")],-1);function b(x,S){const e=c("Badge");return s(),l("div",null,[o("h3",g,[_,t(" 慢查询的原因？"),n(e,{text:"重要",type:"danger"})]),d,o("h3",p,[h,t(" MySQL磁盘I/O很高有什么优化的方法？"),n(e,{text:"了解",type:"info"})]),u,m,f,y])}const M=i(r,[["render",b],["__file","optimize.html.vue"]]);export{M as default};
