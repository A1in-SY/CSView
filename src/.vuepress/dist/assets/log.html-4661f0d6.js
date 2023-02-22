const l=JSON.parse('{"key":"v-0a7e0a1b","path":"/mysql/log.html","title":"","lang":"zh-CN","frontmatter":{"description":"MySQL三种日志？ undo log(回滚日志) undo log是Innodb存储引擎层生成的日志，实现了事务中的原子性，主要用于事务回滚和MVCC。 在事务没提交之前，Innodb会先记录更新前的数据到undo log中，回滚时利用 undo log 来进行回滚。每当进行一条记录进行操作(修改、删除、新增)时，要把回滚时需要的信息都记录到 und...","head":[["meta",{"property":"og:url","content":"https://www.csguide.xyz/mysql/log.html"}],["meta",{"property":"og:site_name","content":"CSView"}],["meta",{"property":"og:description","content":"MySQL三种日志？ undo log(回滚日志) undo log是Innodb存储引擎层生成的日志，实现了事务中的原子性，主要用于事务回滚和MVCC。 在事务没提交之前，Innodb会先记录更新前的数据到undo log中，回滚时利用 undo log 来进行回滚。每当进行一条记录进行操作(修改、删除、新增)时，要把回滚时需要的信息都记录到 und..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"\\",\\"image\\":[\\"\\"],\\"dateModified\\":null,\\"author\\":[]}"]]},"headers":[{"level":3,"title":"MySQL三种日志？","slug":"mysql三种日志","link":"#mysql三种日志","children":[]},{"level":3,"title":"redo log与bin log的区别？","slug":"redo-log与bin-log的区别","link":"#redo-log与bin-log的区别","children":[]},{"level":3,"title":"redo log和undo log区别？","slug":"redo-log和undo-log区别","link":"#redo-log和undo-log区别","children":[]},{"level":3,"title":"undo log是如何实现MVCC的？","slug":"undo-log是如何实现mvcc的","link":"#undo-log是如何实现mvcc的","children":[]},{"level":3,"title":"为什么有了binlog，还要有redo log？","slug":"为什么有了binlog-还要有redo-log","link":"#为什么有了binlog-还要有redo-log","children":[]},{"level":3,"title":"被修改 Undo 页面，需要记录对应 redo log 吗？","slug":"被修改-undo-页面-需要记录对应-redo-log-吗","link":"#被修改-undo-页面-需要记录对应-redo-log-吗","children":[]},{"level":3,"title":"binlog的三种格式？","slug":"binlog的三种格式","link":"#binlog的三种格式","children":[]},{"level":3,"title":"redo log容灾恢复过程？","slug":"redo-log容灾恢复过程","link":"#redo-log容灾恢复过程","children":[]},{"level":3,"title":"redo log是直接写入磁盘的吗？","slug":"redo-log是直接写入磁盘的吗","link":"#redo-log是直接写入磁盘的吗","children":[]},{"level":3,"title":"redo log比直接落盘的优点？","slug":"redo-log比直接落盘的优点","link":"#redo-log比直接落盘的优点","children":[]},{"level":3,"title":"redo log buffer什么时候刷盘？","slug":"redo-log-buffer什么时候刷盘","link":"#redo-log-buffer什么时候刷盘","children":[]},{"level":3,"title":"redo log文件文件格式和写入过程？","slug":"redo-log文件文件格式和写入过程","link":"#redo-log文件文件格式和写入过程","children":[]},{"level":3,"title":"binlog什么时候刷盘？","slug":"binlog什么时候刷盘","link":"#binlog什么时候刷盘","children":[]},{"level":3,"title":"binlog什么时候刷盘频率？","slug":"binlog什么时候刷盘频率","link":"#binlog什么时候刷盘频率","children":[]},{"level":3,"title":"主从复制是怎么实现？","slug":"主从复制是怎么实现","link":"#主从复制是怎么实现","children":[]},{"level":3,"title":"MySQL主从复制模型？","slug":"mysql主从复制模型","link":"#mysql主从复制模型","children":[]},{"level":3,"title":"为什么需要两阶段提交？","slug":"为什么需要两阶段提交","link":"#为什么需要两阶段提交","children":[]},{"level":3,"title":"两阶段提交的过程是怎样的？","slug":"两阶段提交的过程是怎样的","link":"#两阶段提交的过程是怎样的","children":[]},{"level":3,"title":"异常重启会出现什么现象？","slug":"异常重启会出现什么现象","link":"#异常重启会出现什么现象","children":[]},{"level":3,"title":"事务没提交redo log 会被持久化到磁盘吗？","slug":"事务没提交redo-log-会被持久化到磁盘吗","link":"#事务没提交redo-log-会被持久化到磁盘吗","children":[]},{"level":3,"title":"两阶段提交有什么问题？","slug":"两阶段提交有什么问题","link":"#两阶段提交有什么问题","children":[]},{"level":3,"title":"组提交是什么意思？","slug":"组提交是什么意思","link":"#组提交是什么意思","children":[]},{"level":3,"title":"Buffer Pool有什么作用？","slug":"buffer-pool有什么作用","link":"#buffer-pool有什么作用","children":[]},{"level":3,"title":"Buffer Pool缓存内容？","slug":"buffer-pool缓存内容","link":"#buffer-pool缓存内容","children":[]}],"git":{},"readingTime":{"minutes":18.71,"words":5612},"filePathRelative":"mysql/log.md","autoDesc":true,"excerpt":""}');export{l as data};
