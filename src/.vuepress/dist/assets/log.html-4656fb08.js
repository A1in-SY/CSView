import{_ as i,X as r,Y as d,Z as o,$ as n,a0 as l,a2 as t,H as s}from"./framework-edbf9e3c.js";const g={},a={id:"mysql三种日志",tabindex:"-1"},h=o("a",{class:"header-anchor",href:"#mysql三种日志","aria-hidden":"true"},"#",-1),c=t('<h4 id="undo-log-回滚日志" tabindex="-1"><a class="header-anchor" href="#undo-log-回滚日志" aria-hidden="true">#</a> undo log(回滚日志)</h4><p>undo log是Innodb存储引擎层生成的日志，实现了事务中的<strong>原子性</strong>，主要<strong>用于事务回滚和MVCC</strong>。</p><p>在事务没提交之前，Innodb会先记录更新前的数据到undo log中，回滚时利用 undo log 来进行回滚。每当进行一条记录进行操作(修改、删除、新增)时，要把回滚时需要的信息都记录到 undo log 里：原理是执行一条相反的操作。undo log 有两个参数：roll_pointer 指针和一个 trx_id 事务id，通过 trx_id 可以知道该记录是被哪个事务修改的；通过 roll_pointer 指针可以将这些 undo log 串成一个链表，形成版本链。</p><p>innodb存储引擎也通过ReadView + undo log实现 MVCC(多版本并发控制)。</p><div class="hint-container tip"><p class="hint-container-title">undo log的作用是什么?</p><p><strong>实现事务回滚，保障事务的原子性</strong>：如果出现了错误或者用户执行了 ROLLBACK 语句，可以利用 undo log 中的历史数据将数据恢复到事务开始之前的状态。</p><p><strong>实现 MVCC关键因素之一</strong>：MVCC 是通过 ReadView + undo log 实现的。undo log 为每条记录保存多份历史数据，在执行快照读的时候，会根据事务的 Read View 里的信息，顺着 undo log 的版本链找到满足其可见性的记录。</p></div><h4 id="redo-log-重做日志" tabindex="-1"><a class="header-anchor" href="#redo-log-重做日志" aria-hidden="true">#</a> redo log(重做日志)</h4><p>redo log是物理日志，记录了某个数据页做了什么修改，每当执行一个事务就会产生一条或者多条物理日志。在事务提交时，先将redo log持久化到磁盘即可，不需要等到将缓存在Buffer Pool里的脏页数据持久化到磁盘。当系统崩溃时，虽然脏页数据没有持久化但是redo log已经持久化，可以根据 redo log 的内容，将所有数据恢复到最新的状态。</p><p>redo log实现了事务中的持久性，主要用于掉电等故障恢复。发生更新的时候，InnoDB会先更新内存，同时标记为脏页，然后将本次对这个页的修改以redo log的形式记录下来。InnoDB引擎会在适当的时候，由后台线程将缓存在Buffer Pool的脏页刷新到磁盘里，实现<strong>WAL技术</strong>。</p><div class="hint-container tip"><p class="hint-container-title">什么是WAL技术？</p><p>WAL技术指的是，MySQL的写操作并不是立刻写到磁盘上，而是先写日志，然后在合适的时间再写到磁盘上。</p></div><div class="hint-container tip"><p class="hint-container-title">什么是crash-safe？</p><p>redo log+WAL 技术，InnoDB 就可以保证即使数据库发生异常重启，之前已提交的记录都不会丢失。</p></div><h4 id="binlog-归档日志" tabindex="-1"><a class="header-anchor" href="#binlog-归档日志" aria-hidden="true">#</a> binlog(归档日志）</h4><p>Server 层生成的日志，主要<strong>用于数据备份和主从复制</strong>。</p><p>在完成一条更新操作后，Server 层会生成一条 binlog，等之后事务提交的时候，会将该事物执行过程中产生的所有 binlog 统一写入 binlog 文件。binlog 文件是记录了所有数据库表结构变更和表数据修改的日志，不会记录查询类的操作。</p>',13),_={id:"redo-log与bin-log的区别",tabindex:"-1"},u=o("a",{class:"header-anchor",href:"#redo-log与bin-log的区别","aria-hidden":"true"},"#",-1),p=o("ul",null,[o("li",null,[o("strong",null,"适用对象不同"),n("：binlog 是 MySQL 的 Server 层实现的，所有存储引擎都可以使用；redo log 是 Innodb 存储引擎实现的日志。")]),o("li",null,[o("strong",null,"文件格式不同"),n("：redo log 是物理日志，记录的是在某个数据页做了什么修改，比如对 XXX 表空间中的 YYY 数据页 ZZZ 偏移量的地方做了AAA 更新。")]),o("li",null,[o("strong",null,"写入方式不同"),n("：binlog 是追加写，写满一个文件，就创建一个新的文件继续写，不会覆盖以前的日志，保存的是全量的日志。redo log是循环写，日志空间大小是固定，全部写满就从头开始，保存未被刷入磁盘的脏页日志。")]),o("li",null,[o("strong",null,"用途不同"),n("：binlog 用于备份恢复、主从复制；redo log 用于掉电等故障恢复。")])],-1),b={id:"redo-log和undo-log区别",tabindex:"-1"},f=o("a",{class:"header-anchor",href:"#redo-log和undo-log区别","aria-hidden":"true"},"#",-1),y=o("p",null,[n("redo log 记录了此次事务"),o("strong",null,"完成后"),n("的数据状态，undo log 记录了此次事务"),o("strong",null,"开始前"),n("的数据状态。")],-1),x={id:"undo-log是如何实现mvcc的",tabindex:"-1"},m=o("a",{class:"header-anchor",href:"#undo-log是如何实现mvcc的","aria-hidden":"true"},"#",-1),M=o("p",null,"对于读提交和可重复读隔离级别，快照读是通过 Read View + undo log 来实现的，区别在于创建 Read View 的时机不同：",-1),S=o("ul",null,[o("li",null,"读提交在每个 select 都会生成一个新的 Read View，事务期间的多次读取同一条数据，前后两次读的数据可能会出现不一致，因为可能这期间另外一个事务修改了该记录，并提交了事务。"),o("li",null,"可重复读隔离级别是启动事务时生成一个 Read View，然后整个事务期间都在用这个 Read View，这样就保证了在事务期间读到的数据都是事务启动前的记录。")],-1),B=o("p",null,"通过**事务的 Read View 里的字段和记录中的两个隐藏列(trx_id 和 roll_pointer)**的比对，如果不满足可见行，就会顺着 undo log 版本链里找到满足其可见性的记录，从而控制并发事务访问同一个记录时的行为。",-1),L={id:"为什么有了binlog-还要有redo-log",tabindex:"-1"},I=o("a",{class:"header-anchor",href:"#为什么有了binlog-还要有redo-log","aria-hidden":"true"},"#",-1),Q=o("p",null,"早期版本 MySQL 里没有 InnoDB 引擎，MySQL 自带的 MyISAM引擎没有 crash-safe 的能力，binlog 日志只能用于归档。InnoDB 是另一个公司以插件形式引入 MySQL 的，所以 InnoDB 使用 redo log 来实现 crash-safe 能力。",-1),v={id:"被修改-undo-页面-需要记录对应-redo-log-吗",tabindex:"-1"},A=o("a",{class:"header-anchor",href:"#被修改-undo-页面-需要记录对应-redo-log-吗","aria-hidden":"true"},"#",-1),D=o("p",null,[n("需要。开启事务后，InnoDB 更新记录前，首先要记录相应的 undo log，如果是更新操作，也就是要生成一条 undo log，undo log 会写入 Buffer Pool 中的 Undo 页面。"),o("strong",null,"在内存修改该 Undo 页面后，需要记录对应的 redo log"),n("。")],-1),T={id:"binlog的三种格式",tabindex:"-1"},w=o("a",{class:"header-anchor",href:"#binlog的三种格式","aria-hidden":"true"},"#",-1),P=t('<p>STATEMENT(默认格式)、ROW、 MIXED：</p><ul><li><strong>STATEMENT</strong>：每一条修改数据的 SQL 都会被记录到 binlog 中，主从复制中 slave 端再根据 SQL 语句重现。</li></ul><div class="hint-container warning"><p class="hint-container-title">缺陷</p><p>STATEMENT 有动态函数的问题，比如用了 uuid 或者 now 这些函数，在主库上执行的结果并不是你在从库执行的结果，这种随时在变的函数会导致复制的数据不一致</p></div><ul><li><strong>ROW</strong>：记录行数据最终被修改成什么样了，不会出现 STATEMENT 下动态函数的问题。</li></ul><div class="hint-container warning"><p class="hint-container-title">缺陷</p><p>但 ROW 的缺点是每行数据的变化结果都会被记录，比如执行批量 update 语句，更新多少行数据就会产生多少条记录，使 binlog 文件过大，而在 STATEMENT 格式下只会记录一个 update 语句。</p></div><ul><li><strong>MIXED</strong>：包含了 STATEMENT 和 ROW 模式，它会根据不同的情况自动使用 ROW 模式和 STATEMENT 模式。</li></ul>',6),X={id:"redo-log容灾恢复过程",tabindex:"-1"},V=o("a",{class:"header-anchor",href:"#redo-log容灾恢复过程","aria-hidden":"true"},"#",-1),E=o("p",null,"如果 redo log 是完整(commit 状态)的，直接用 redo log 恢复；",-1),R=o("p",null,"如果 redo log 是预提交 prepare 但不是 commit 状态，此时要去判断 binlog 是否完整，如果完整那就提交 redo log，再用 redo log 恢复，不完整就回滚事务。",-1),C={id:"redo-log是直接写入磁盘的吗",tabindex:"-1"},N=o("a",{class:"header-anchor",href:"#redo-log是直接写入磁盘的吗","aria-hidden":"true"},"#",-1),O=o("p",null,"不是。直接写入磁盘会产生大量的 I/O 操作，redo log会写入redo log buffer，每当产生一条 redo log 时，会先写入到 redo log buffer，后续在持久化到磁盘。",-1),W={id:"redo-log比直接落盘的优点",tabindex:"-1"},k=o("a",{class:"header-anchor",href:"#redo-log比直接落盘的优点","aria-hidden":"true"},"#",-1),q=t("<p>redo log 的写方式使用了追加，日志操作是<strong>顺序写</strong>，磁盘操作是<strong>随机写</strong>，MySQL 的写操作从磁盘的<strong>随机写</strong>变成了<strong>顺序写</strong>，提升语句的执行性能。</p><ul><li><strong>实现事务的持久性，让 MySQL 有 crash-safe 的能力</strong>，能够保证 MySQL 在任何时间段突然崩溃，重启后之前已提交的记录都不会丢失；</li><li><strong>将写操作从随机写变成了顺序写</strong>，提升 MySQL 写入磁盘的性能。</li></ul>",2),U={id:"redo-log-buffer什么时候刷盘",tabindex:"-1"},Y=o("a",{class:"header-anchor",href:"#redo-log-buffer什么时候刷盘","aria-hidden":"true"},"#",-1),Z=o("ul",null,[o("li",null,"MySQL 正常关闭时，会触发落盘"),o("li",null,"当 redo log buffer 中记录的写入量大于 redo log buffer 内存空间的一半时，会触发落盘"),o("li",null,"InnoDB 的后台线程每隔 1 秒，将 redo log buffer 持久化到磁盘"),o("li",null,"每次事务提交时都将缓存在 redo log buffer 里的 redo log 直接持久化到磁盘")],-1),z={id:"redo-log文件文件格式和写入过程",tabindex:"-1"},H=o("a",{class:"header-anchor",href:"#redo-log文件文件格式和写入过程","aria-hidden":"true"},"#",-1),K=o("p",null,"InnoDB有 1 个redo log组，由有 2 个 redo log 文件组成：logfile0 和 logfile1。",-1),$=o("figure",null,[o("img",{src:"https://cdn.xiaolincoding.com/gh/xiaolincoder/mysql/how_update/重做日志文件组.drawio.png",alt:"重做日志文件组",tabindex:"0",loading:"lazy"}),o("figcaption",null,"重做日志文件组")],-1),j=o("p",null,[n("redo log组中每个 redo log的大小是固定且相同的，redo log组是以"),o("strong",null,"循环写"),n("的方式工作的，从头开始写，写到末尾就又回到开头，相当于一个环形。")],-1),F=o("p",null,"先写 logfile0 文件，当 logfile0 文件被写满的时候，会切换至 logfile1 文件，当 logfile1 文件也被写满时，会切换回 ib_logfile0 文件。随着系统运行，Buffer Pool 的脏页刷新到了磁盘中， redo log 对应的记录没用了，会腾出空间记录新的更新操作。redo log 是循环写的方式相当于一个环形，用 write pos 表示 redo log 当前记录写到的位置，用 checkpoint 表示当前要擦除的位置。",-1),G=o("p",null,"write pos 追上了 checkpoint，说明 redo log 文件满了， MySQL 会被阻塞，会停下来将 Buffer Pool 中的脏页刷新到磁盘中，然后标记 redo log 哪些记录可以被擦除，接着对旧的 redo log 记录进行擦除，等擦除完旧记录腾出了空间，checkpoint 就会往后移动，然后 MySQL 恢复正常运行，继续执行新的更新操作。",-1),J={id:"binlog什么时候刷盘",tabindex:"-1"},oo=o("a",{class:"header-anchor",href:"#binlog什么时候刷盘","aria-hidden":"true"},"#",-1),no=o("p",null,"事务执行过程中，先把日志写到 binlog cache(Server 层的 cache)，事务提交的时候，再把 binlog cache 写到 binlog 文件中。",-1),eo=o("div",{class:"hint-container tip"},[o("p",{class:"hint-container-title"},"提示"),o("p",null,"binlog 是不能被拆开的，无论这个事务有多大，也要保证一次性写入。这是因为有一个线程只能同时有一个事务在执行的设定，所以每当执行一个 begin/start transaction 的时候，就会默认提交上一个事务，这样如果一个事务的 binlog 被拆开的时候，在备库执行就会被当做多个事务分段自行，这样破坏了原子性，是有问题的。")],-1),lo={id:"binlog什么时候刷盘频率",tabindex:"-1"},to=o("a",{class:"header-anchor",href:"#binlog什么时候刷盘频率","aria-hidden":"true"},"#",-1),io=o("p",null,"MySQL提供一个 sync_binlog 参数来控制数据库的 binlog 刷到磁盘上的频率：",-1),ro=o("ul",null,[o("li",null,"sync_binlog = 0 的时候，表示每次提交事务都只 write，不 fsync，后续交由操作系统决定何时将数据持久化到磁盘；"),o("li",null,"sync_binlog = 1 的时候，表示每次提交事务都会 write，然后马上执行 fsync；"),o("li",null,"sync_binlog = N(N>1) 的时候，表示每次提交事务都 write，但累积 N 个事务后才 fsync。")],-1),so=o("p",null,"系统默认的设置是 sync_binlog = 0，也就是不做任何强制性的磁盘刷新指令，这时候的性能是最好的，但是风险也是最大的，因为一旦主机发生异常重启，还没持久化到磁盘的数据就会丢失。",-1),go=o("p",null,"当 sync_binlog 设置为 1 的时候，是最安全但是性能损耗最大的设置。因为当设置为 1 的时候，即使主机发生异常重启，最多丢失一个事务的 binlog，而已经持久化到磁盘的数据就不会有影响，不过就是对写入性能影响太大。",-1),ao=o("p",null,[o("strong",null,"如果能容少量事务的 binlog 日志丢失的风险，为了提高写入的性能，一般会 sync_binlog 设置为 100~1000 中的某个数值"),n("。")],-1),ho={id:"主从复制是怎么实现",tabindex:"-1"},co=o("a",{class:"header-anchor",href:"#主从复制是怎么实现","aria-hidden":"true"},"#",-1),_o=o("p",null,"binlog记录 MySQL 上的所有变化并以二进制形式保存在磁盘上。复制的过程就是将 binlog 中的数据从主库传输到从库上。",-1),uo=o("ul",null,[o("li",null,"主库在收到提交事务的请求之后，会先写入 binlog，再提交事务，更新存储引擎中的数据，事务提交完成后，返回“操作成功”的响应。"),o("li",null,"从库会创建一个专门的 I/O 线程，连接主库的 log dump 线程，来接收主库的 binlog 日志，再把 binlog 信息写入 relay log 的中继日志里，再返回给主库“复制成功”的响应。"),o("li",null,"从库会创建一个用于回放 binlog 的线程，去读 relay log 中继日志，然后回放 binlog 更新存储引擎中的数据，最终实现主从的数据一致性。")],-1),po={id:"mysql主从复制模型",tabindex:"-1"},bo=o("a",{class:"header-anchor",href:"#mysql主从复制模型","aria-hidden":"true"},"#",-1),fo=o("ul",null,[o("li",null,[o("strong",null,"同步复制"),n("：MySQL 主库提交事务的线程要等待所有从库的复制成功响应，才返回客户端结果。这种方式在实际项目中，基本上没法用，原因有两个：一是性能很差，因为要复制到所有节点才返回响应；二是可用性也很差，主库和所有从库任何一个数据库出问题，都会影响业务。")]),o("li",null,[o("strong",null,"异步复制"),n("(默认)：MySQL 主库提交事务的线程并不会等待 binlog 同步到各从库，就返回客户端结果。这种模式一旦主库宕机，数据就会发生丢失。")]),o("li",null,[o("strong",null,"半同步复制"),n("：介于两者之间，事务线程不用等待所有的从库复制成功响应，只要一部分复制成功响应回来就行，比如一主二从的集群，只要数据成功复制到任意一个从库上，主库的事务线程就可以返回给客户端。这种"),o("strong",null,"半同步复制的方式，兼顾了异步复制和同步复制的优点，即使出现主库宕机，至少还有一个从库有最新的数据，不存在数据丢失的风险"),n("。")])],-1),yo={id:"为什么需要两阶段提交",tabindex:"-1"},xo=o("a",{class:"header-anchor",href:"#为什么需要两阶段提交","aria-hidden":"true"},"#",-1),mo=o("p",null,"事务提交后，redo log 和 binlog 都要持久化到磁盘，但是这两个是独立的逻辑，可能出现半成功的状态，造成两份日志之间的逻辑不一致。",-1),Mo=o("ul",null,[o("li",null,[o("strong",null,"如果在将 redo log 刷入到磁盘之后， MySQL 突然宕机了，而 binlog 还没有来得及写入"),n("。MySQL 重启后，通过 redo log 能将 Buffer Pool 恢复到新值，但是 binlog 里面没有记录这条更新语句，在主从架构中，binlog 会被复制到从库，由于 binlog 丢失了这条更新语句，从库的这一行是旧值，主从不一致。")]),o("li",null,[o("strong",null,"如果在将 binlog 刷入到磁盘之后， MySQL 突然宕机了，而 redo log 还没有来得及写入"),n("。由于 redo log 还没写，崩溃恢复以后这个事务无效，数据是旧值，而 binlog 里面记录了这条更新语句，在主从架构中，binlog 会被复制到从库，从库执行了这条更新语句，这一行字段是新值，与主库的值不一致性。")])],-1),So=o("p",null,"所以会造成主从环境的数据不一致性。因为 redo log 影响主库的数据，binlog 影响从库的数据，redo log 和 binlog 必须保持一致。",-1),Bo=o("p",null,[o("strong",null,"两阶段提交把单个事务的提交拆分成了 2 个阶段，分别是准备(Prepare)阶段和提交(Commit)阶段"),n("，每个阶段都由协调者(Coordinator)和参与者(Participant)共同完成。")],-1),Lo={id:"两阶段提交的过程是怎样的",tabindex:"-1"},Io=o("a",{class:"header-anchor",href:"#两阶段提交的过程是怎样的","aria-hidden":"true"},"#",-1),Qo=t("<p>在 MySQL 的 InnoDB 存储引擎中，开启 binlog 的情况下，MySQL 会同时维护 binlog 日志与 InnoDB 的 redo log，为了保证这两个日志的一致性，MySQL 使用了<strong>内部 XA 事务</strong>，内部 XA 事务由 binlog 作为协调者，存储引擎是参与者。</p><p>当客户端执行 commit 语句或者在自动提交的情况下，MySQL 内部开启一个 XA 事务，<strong>分两阶段来完成 XA 事务的提交</strong>。</p><p>事务的提交过程有两个阶段，<strong>将 redo log 的写入拆成了两个步骤：prepare 和 commit，中间再穿插写入binlog</strong>：</p><ul><li><strong>prepare 阶段</strong>：将 内部 XA 事务的 ID写入到 redo log，同时将 redo log 对应的事务状态设置为 prepare，然后将 redo log 持久化到磁盘。</li><li><strong>commit 阶段</strong>：把 内部 XA 事务的 ID写入到 binlog，然后将 binlog 持久化到磁盘，接着调用引擎的提交事务接口，将 redo log 状态设置为 commit，此时该状态并不需要持久化到磁盘，只需要 write 到文件系统的 page cache 成功，只要 binlog 写磁盘成功，redo log 的状态还是 prepare 也没有关系，一样会被认为事务已经执行成功。</li></ul>",4),vo={id:"异常重启会出现什么现象",tabindex:"-1"},Ao=o("a",{class:"header-anchor",href:"#异常重启会出现什么现象","aria-hidden":"true"},"#",-1),Do=o("p",null,"在 MySQL 重启后会按顺序扫描 redo log 文件，碰到处于 prepare 状态的 redo log，就拿着 redo log 中的 XID 去 binlog 查看是否存在此 XID：",-1),To=o("ul",null,[o("li",null,[o("strong",null,"如果 binlog 中没有当前内部 XA 事务的 XID，说明 redolog 完成刷盘，但是 binlog 还没有刷盘，则回滚事务"),n("。对应时刻 A 崩溃恢复的情况。")]),o("li",null,[o("strong",null,"如果 binlog 中有当前内部 XA 事务的 XID，说明 redolog 和 binlog 都已经完成了刷盘，则提交事务"),n("。对应时刻 B 崩溃恢复的情况。")])],-1),wo=o("p",null,[o("strong",null,"对于处于 prepare 阶段的 redo log，即可以提交事务，也可以回滚事务，这取决于是否能在 binlog 中查找到与 redo log 相同的 XID"),n("，如果有就提交事务，如果没有就回滚事务。这样就可以保证 redo log 和 binlog 这两份日志的一致性了。")],-1),Po={id:"事务没提交redo-log-会被持久化到磁盘吗",tabindex:"-1"},Xo=o("a",{class:"header-anchor",href:"#事务没提交redo-log-会被持久化到磁盘吗","aria-hidden":"true"},"#",-1),Vo=o("p",null,"会。事务执行中间过程的 redo log 也是直接写在 redo log buffer 中的，这些缓存在 redo log buffer 里的 redo log 也会被后台线程每隔一秒一起持久化到磁盘。",-1),Eo={id:"两阶段提交有什么问题",tabindex:"-1"},Ro=o("a",{class:"header-anchor",href:"#两阶段提交有什么问题","aria-hidden":"true"},"#",-1),Co=t('<p><strong>磁盘 I/O 次数高</strong>：每个事务提交都会进行两次 fsync(刷盘)，一次是 redo log 刷盘，另一次是 binlog 刷盘。</p><p><strong>锁竞争激烈</strong>：两阶段提交虽然能够保证单事务两个日志的内容一致，但在多事务的情况下，却不能保证两者的提交顺序一致。在两阶段提交的流程基础上，还需要加一个锁来保证提交的原子性，从而保证多事务的情况下，两个日志的提交顺序一致。</p><div class="hint-container tip"><p class="hint-container-title">为什么两阶段提交的磁盘 I/O 次数会很高？</p><p>binlog 和 redo log 在内存中都对应的缓存空间，binlog 会缓存在 binlog cache，redo log 会缓存在 redo log buffer，它们持久化到磁盘的时机分别由下面这两个参数控制。一般为了避免日志丢失的风险，会将这两个参数设置为 1：</p><ul><li>当 sync_binlog = 1 的时候，表示每次提交事务都会将 binlog cache 里的 binlog 直接持久到磁盘；</li><li>当 innodb_flush_log_at_trx_commit = 1 时，表示每次事务提交时，都将缓存在 redo log buffer 里的 redo log 直接持久化到磁盘；</li></ul><p>如果 sync_binlog 和 当 innodb_flush_log_at_trx_commit 都设置为 1，那么在每个事务提交过程中， 都会<strong>至少调用 2 次刷盘操作</strong>，一次是 redo log 刷盘，一次是 binlog 落盘，所以这会成为性能瓶颈。</p></div><div class="hint-container tip"><p class="hint-container-title">为什么锁竞争激烈？</p><p>在早期的 MySQL 版本中，通过使用 prepare_commit_mutex 锁来保证事务提交的顺序，在一个事务获取到锁时才能进入 prepare 阶段，一直到 commit 阶段结束才能释放锁，下个事务才可以继续进行 prepare 操作。</p><p>通过加锁虽然完美地解决了顺序一致性的问题，但在并发量较大的时候，就会导致对锁的争用，性能不佳。</p></div>',4),No={id:"组提交是什么意思",tabindex:"-1"},Oo=o("a",{class:"header-anchor",href:"#组提交是什么意思","aria-hidden":"true"},"#",-1),Wo=t("<p>有多个事务提交的时候，会将多个 binlog 刷盘操作合并成一个，从而减少磁盘 I/O 的次数。组提交机制后，prepare 阶段不变，将 commit 阶段拆分为三个过程：</p><ul><li><strong>flush 阶段</strong>：多个事务按进入的顺序将 binlog 从 cache 写入文件(不刷盘)；</li><li><strong>sync 阶段</strong>：对 binlog 文件做 fsync 操作(多个事务的 binlog 合并一次刷盘)；</li><li><strong>commit 阶段</strong>：各个事务按顺序做 InnoDB commit 操作；</li></ul><p>上面的<strong>每个阶段都有一个队列</strong>，每个阶段有锁进行保护，因此保证了事务写入的顺序，第一个进入队列的事务会成为 leader，leader领导所在队列的所有事务，全权负责整队的操作，完成后通知队内其他事务操作结束。对每个阶段引入了队列后，锁就只针对每个队列进行保护，不再锁住提交事务的整个过程，锁粒度减小了，这样就使得多个阶段可以并发执行，从而提升效率。</p>",3),ko={id:"buffer-pool有什么作用",tabindex:"-1"},qo=o("a",{class:"header-anchor",href:"#buffer-pool有什么作用","aria-hidden":"true"},"#",-1),Uo=o("p",null,"主要的作用是实现缓存：",-1),Yo=o("ul",null,[o("li",null,"当读取数据时，如果数据存在于 Buffer Pool 中，会直接读取 Buffer Pool 中的数据。"),o("li",null,"当修改数据时，如果数据存在于 Buffer Pool 中，那直接修改 Buffer Pool 中数据所在的页，然后将其页设置为脏页(该页的内存数据和磁盘上的数据已经不一致)；不会立即将脏页写入磁盘，后续由后台线程选择一个合适的时机将脏页写入到磁盘。")],-1),Zo={id:"buffer-pool缓存内容",tabindex:"-1"},zo=o("a",{class:"header-anchor",href:"#buffer-pool缓存内容","aria-hidden":"true"},"#",-1),Ho=o("p",null,[o("strong",null,"InnoDB 会为 Buffer Pool 申请一片连续的内存空间，然后按照默认的大小划分出一个个的页， Buffer Pool 中的页就叫做缓存页"),n("。此时这些缓存页都是空闲的，之后随着程序的运行，才会有磁盘上的页被缓存到 Buffer Pool 中。")],-1),Ko=o("p",null,"Buffer Pool 除了缓存索引页和数据页，还包括了 Undo 页，插入缓存、自适应哈希索引、锁信息等等。",-1),$o=o("p",null,"开启事务后，InnoDB 层更新记录前，首先要记录相应的 undo log，undo log 会写入 Buffer Pool 中的 Undo 页面。",-1);function jo(Fo,Go){const e=s("Badge");return r(),d("div",null,[o("h3",a,[h,n(" MySQL三种日志？"),l(e,{text:"重要",type:"danger"})]),c,o("h3",_,[u,n(" redo log与bin log的区别？"),l(e,{text:"掌握",type:"tip"})]),p,o("h3",b,[f,n(" redo log和undo log区别？"),l(e,{text:"掌握",type:"tip"})]),y,o("h3",x,[m,n(" undo log是如何实现MVCC的？"),l(e,{text:"了解",type:"info"})]),M,S,B,o("h3",L,[I,n(" 为什么有了binlog，还要有redo log？"),l(e,{text:"了解",type:"info"})]),Q,o("h3",v,[A,n(" 被修改 Undo 页面，需要记录对应 redo log 吗？"),l(e,{text:"了解",type:"info"})]),D,o("h3",T,[w,n(" binlog的三种格式？"),l(e,{text:"掌握",type:"tip"})]),P,o("h3",X,[V,n(" redo log容灾恢复过程？"),l(e,{text:"了解",type:"info"})]),E,R,o("h3",C,[N,n(" redo log是直接写入磁盘的吗？"),l(e,{text:"了解",type:"info"})]),O,o("h3",W,[k,n(" redo log比直接落盘的优点？"),l(e,{text:"了解",type:"info"})]),q,o("h3",U,[Y,n(" redo log buffer什么时候刷盘？"),l(e,{text:"了解",type:"info"})]),Z,o("h3",z,[H,n(" redo log文件文件格式和写入过程？"),l(e,{text:"掌握",type:"tip"})]),K,$,j,F,G,o("h3",J,[oo,n(" binlog什么时候刷盘？"),l(e,{text:"了解",type:"info"})]),no,eo,o("h3",lo,[to,n(" binlog什么时候刷盘频率？"),l(e,{text:"了解",type:"info"})]),io,ro,so,go,ao,o("h3",ho,[co,n(" 主从复制是怎么实现？"),l(e,{text:"了解",type:"info"})]),_o,uo,o("h3",po,[bo,n(" MySQL主从复制模型？"),l(e,{text:"了解",type:"info"})]),fo,o("h3",yo,[xo,n(" 为什么需要两阶段提交？"),l(e,{text:"掌握",type:"tip"})]),mo,Mo,So,Bo,o("h3",Lo,[Io,n(" 两阶段提交的过程是怎样的？"),l(e,{text:"掌握",type:"tip"})]),Qo,o("h3",vo,[Ao,n(" 异常重启会出现什么现象？"),l(e,{text:"了解",type:"info"})]),Do,To,wo,o("h3",Po,[Xo,n(" 事务没提交redo log 会被持久化到磁盘吗？"),l(e,{text:"了解",type:"info"})]),Vo,o("h3",Eo,[Ro,n(" 两阶段提交有什么问题？"),l(e,{text:"了解",type:"info"})]),Co,o("h3",No,[Oo,n(" 组提交是什么意思？"),l(e,{text:"了解",type:"info"})]),Wo,o("h3",ko,[qo,n(" Buffer Pool有什么作用？"),l(e,{text:"了解",type:"info"})]),Uo,Yo,o("h3",Zo,[zo,n(" Buffer Pool缓存内容？"),l(e,{text:"了解",type:"info"})]),Ho,Ko,$o])}const on=i(g,[["render",jo],["__file","log.html.vue"]]);export{on as default};
