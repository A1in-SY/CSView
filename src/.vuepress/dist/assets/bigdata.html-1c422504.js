const e=JSON.parse('{"key":"v-16fc98f2","path":"/design/bigdata.html","title":"","lang":"zh-CN","frontmatter":{"description":"海量日志数据，提取出某日访问百度次数最多的那个IP？ 首先是找到这一天的日志，并且是访问百度的IP从日志中提取出来逐个写入大文件中，如果IP是32位的，最多可能有2^32次方种结果。 采用映射的方法，比如%1000，把大文件依次映射成1000个小文件，找出每个小文件中出现频率最多的IP，可以使用hashMap统计频率，依次找出每个文件中出现频率最大IP...","head":[["meta",{"property":"og:url","content":"https://www.csview.cn/design/bigdata.html"}],["meta",{"property":"og:site_name","content":"CSView计算机招聘知识分享"}],["meta",{"property":"og:description","content":"海量日志数据，提取出某日访问百度次数最多的那个IP？ 首先是找到这一天的日志，并且是访问百度的IP从日志中提取出来逐个写入大文件中，如果IP是32位的，最多可能有2^32次方种结果。 采用映射的方法，比如%1000，把大文件依次映射成1000个小文件，找出每个小文件中出现频率最多的IP，可以使用hashMap统计频率，依次找出每个文件中出现频率最大IP..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2023-02-26T13:16:56.000Z"}],["meta",{"property":"article:modified_time","content":"2023-02-26T13:16:56.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2023-02-26T13:16:56.000Z\\",\\"author\\":[]}"]]},"headers":[{"level":3,"title":"海量日志数据，提取出某日访问百度次数最多的那个IP？","slug":"海量日志数据-提取出某日访问百度次数最多的那个ip","link":"#海量日志数据-提取出某日访问百度次数最多的那个ip","children":[]},{"level":3,"title":"寻找热门查询中，1000万个查询字符串中最热门的10个查询？要求内存使用不超过1G，每个查询串长度都是1~255字节?","slug":"寻找热门查询中-1000万个查询字符串中最热门的10个查询-要求内存使用不超过1g-每个查询串长度都是1-255字节","link":"#寻找热门查询中-1000万个查询字符串中最热门的10个查询-要求内存使用不超过1g-每个查询串长度都是1-255字节","children":[]},{"level":3,"title":"有一个1G大小的一个文件，里面每一行是一个词，词的大小不超过16字节，内存限制大小是1M。返回频数最高的100个词？","slug":"有一个1g大小的一个文件-里面每一行是一个词-词的大小不超过16字节-内存限制大小是1m。返回频数最高的100个词","link":"#有一个1g大小的一个文件-里面每一行是一个词-词的大小不超过16字节-内存限制大小是1m。返回频数最高的100个词","children":[]},{"level":3,"title":"海量数据分布在100台电脑中，想个办法高效统计出这批数据的TOP10？","slug":"海量数据分布在100台电脑中-想个办法高效统计出这批数据的top10","link":"#海量数据分布在100台电脑中-想个办法高效统计出这批数据的top10","children":[]},{"level":3,"title":"有10个文件，每个文件1G，每个文件的每一行存放的都是用户的查询，每个文件的查询都可能重复。要求你按照查询的频度排序？","slug":"有10个文件-每个文件1g-每个文件的每一行存放的都是用户的查询-每个文件的查询都可能重复。要求你按照查询的频度排序","link":"#有10个文件-每个文件1g-每个文件的每一行存放的都是用户的查询-每个文件的查询都可能重复。要求你按照查询的频度排序","children":[]},{"level":3,"title":"给定a、b两个文件，各存放50亿个url，每个url各占64字节，内存限制是4G，让你找出a、b文件共同的url？","slug":"给定a、b两个文件-各存放50亿个url-每个url各占64字节-内存限制是4g-让你找出a、b文件共同的url","link":"#给定a、b两个文件-各存放50亿个url-每个url各占64字节-内存限制是4g-让你找出a、b文件共同的url","children":[]},{"level":3,"title":"在2.5亿个整数中找出不重复的整数，注，内存不足以容纳这2.5亿个整数？","slug":"在2-5亿个整数中找出不重复的整数-注-内存不足以容纳这2-5亿个整数","link":"#在2-5亿个整数中找出不重复的整数-注-内存不足以容纳这2-5亿个整数","children":[]},{"level":3,"title":"给40亿个不重复的unsigned int的整数，没排过序的，然后再给一个数，如何快速判断这个数是否在那40亿个数当中？","slug":"给40亿个不重复的unsigned-int的整数-没排过序的-然后再给一个数-如何快速判断这个数是否在那40亿个数当中","link":"#给40亿个不重复的unsigned-int的整数-没排过序的-然后再给一个数-如何快速判断这个数是否在那40亿个数当中","children":[]},{"level":3,"title":"100w个数中找出最大的100个数？","slug":"_100w个数中找出最大的100个数","link":"#_100w个数中找出最大的100个数","children":[]},{"level":3,"title":"5亿个int找到它的中位数？","slug":"_5亿个int找到它的中位数","link":"#_5亿个int找到它的中位数","children":[]}],"git":{"createdTime":1677035158000,"updatedTime":1677417416000,"contributors":[{"name":"zijing2333","email":"qq944741457@gmail.com","commits":2}]},"readingTime":{"minutes":6.69,"words":2006},"filePathRelative":"design/bigdata.md","localizedDate":"2023年2月22日","autoDesc":true,"excerpt":""}');export{e as data};
