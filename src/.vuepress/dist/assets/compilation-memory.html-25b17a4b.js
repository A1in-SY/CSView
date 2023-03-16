import{_ as i,W as t,X as l,a1 as e}from"./framework-17a5d3b6.js";const a={},n=e(`<h3 id="c-编译的过程" tabindex="-1"><a class="header-anchor" href="#c-编译的过程" aria-hidden="true">#</a> C++ 编译的过程？</h3><p>编译分为4个阶段：预处理、编译、汇编、链接</p><p><strong>预处理(Preprocess)</strong>：这一步由预处理器完成，对源程序中的伪指令(以#开头的指令)和特殊符号进行处理，伪指令包括宏定义指令、条件编译指令和头文件中包含的指令。</p><p><strong>编译(Compilation)</strong>：这一步由编译器完成，对预处理后的文件进行词法分析、语法分析、语义分析以及优化后生成相应的汇编代码文件。</p><p><strong>汇编(Assemoly)</strong>：由汇编器完成，将汇编代码转变成机器可执行的二进制代码(机器码)，并生成目标文件。</p><p><strong>链接(Linking)</strong>：由链接器完成，主要解决多个文件之间符号引用的问题，即symbol resolution。编译时编译器只对单个文件进行处理，如果该文件里面需要引用到其他文件中的符号，比如全局变量或者调用了某个库函数中的函数，那么这时候，在这个文件中该符号的地址是没法确定的，只能由链接器把所有的目标文件链接到一起才能确定最终的地址，并生成最终的可执行文件。</p><figure><img src="https://img-blog.csdnimg.cn/c22b258c226140b49b914e2cc34c6787.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><h3 id="编译时链接有几种方式-静态链接和动态链接的区别是什么" tabindex="-1"><a class="header-anchor" href="#编译时链接有几种方式-静态链接和动态链接的区别是什么" aria-hidden="true">#</a> 编译时链接有几种方式？静态链接和动态链接的区别是什么？</h3><p><strong>链接方式</strong></p><ul><li><strong>静态链接</strong>：程序运行前，将目标模块以及它们所需库函数链接成一个完整可执行程序</li><li><strong>装入时动态链接</strong>：将用户源程序编译后所得到的一组目标模块，在装入内存时，釆用边装入边链接的链接方式。</li><li><strong>运行时动态链接</strong>：对某些目标模块的链接，是在程序执行中需要该目标模块时，才对它进行的链接。其优点是便于修改和更新，便于实现对目标模块的共享。</li></ul><p><strong>静态链接</strong>：静态链接是由链接器在链接时将库的内容加入到可执行程序中的做法。链接器是一个独立程序，将一个或多个库或目标文件(先前由编译器或汇编器生成)链接到一块生成可执行程序。这里的库指的是静态链接库，Windows下以.lib为后缀，Linux下以.a为后缀。</p><p><strong>动态链接</strong>：把链接这个过程推迟到了运行时再进行，在可执行文件装载时或运行时，由操作系统的装载程序加载库。这里的库指的是动态链接库，Windows下以.dll为后缀，Linux下以.so为后缀。</p><p>区别在于：</p><ul><li><strong>文件体积</strong>：静态链接生成可执行文件体积较大，包含公共代码。动态链接生成可执行文件体积较小。</li><li><strong>执行速度</strong>：静态链接执行速度较快，动态链接速度较慢。</li><li><strong>代码耦合度</strong>：静态链接代码耦合度高，同时以二进制发布时不需要考虑用户计算机上库文件是否存在以及版本问题。动态链接耦合度小，适用于大规模软件开发，dll文件与exe文件相互独立，提高可维护性和扩展性，但是动态链接库的应用程序不是自完备的，依赖的dll文件也要存在，否则程序报错。</li></ul><h3 id="程序编译和链接的过程-c-从代码到可执行二进制文件的过程" tabindex="-1"><a class="header-anchor" href="#程序编译和链接的过程-c-从代码到可执行二进制文件的过程" aria-hidden="true">#</a> 程序编译和链接的过程(C++ 从代码到可执行二进制文件的过程)？</h3><p>程序从源代码到可执行程序，一般包括四个步骤：预处理、编译、汇编和链接。</p><p><strong>预处理</strong>，将.c文件生成一个对应的.i文件。</p><ul><li><p>将宏定义替换“#define”</p></li><li><p>处理所有的条件编译指令，如“#if”、“#ifdef”等</p></li><li><p>处理“#include”预编译指令，将头文件插入到相应位置</p></li><li><p>删除所有的注释</p></li><li><p>添加行号、文件名标识，方便后边编译时，编译器产生编译相关的信息，如编译错误时显示行号等。</p></li><li><p>保留#pragma编译伪指令，因为后续编译时需要使用它们</p></li></ul><p><strong>编译</strong>，将.i文件生成一个对应的.s文件，编译过程时整个程序构建的核心，编译成功，会将源代码转换为汇编语言，编译的过程就是把.i文件进行一系列的词法分析、语法分析、语义分析以及优化，从而最终生成相应的汇编代码文件。</p><ul><li>词法分析：将代码分割成一个个记号序列，如关键字、标识符、符号、变量等，保存到一个表中。</li><li>语法分析：将上一步生成的记号序列，根据语法规则形成语法树。</li><li>语义分析：分析语义是否有意义。如两个指针相乘，这显然是没有意义的，然后提示错误。又例如将浮点数赋值给整形数，则会默认进行类型转换，同时给出警告等。</li><li>代码优化：如某些情况下的循环展开，const数据的提前计算(2+3则会提前计算为5)，删除没有用的语句等，然后生成汇编语言。</li></ul><p><strong>汇编</strong>，汇编器(as)将汇编代码转变为机器码，每一条汇编语句几乎都对应一条机器指令。最终会生成.o文件。</p><p><strong>链接</strong>，链接的主要工作就是将各个模块之间相互引用的部分正确的衔接起来。链接的过程主要包括了地址和空间分派、符号决议和重定向。</p><h3 id="c-是如何进行内存管理的" tabindex="-1"><a class="header-anchor" href="#c-是如何进行内存管理的" aria-hidden="true">#</a> C++ 是如何进行内存管理的？</h3><p>C++中可以使用C的内存管理方式：malloc、calloc、realloc、free</p><ul><li>malloc函数的功能是开辟指定字节大小的内存空间，如果开辟成功就返回该空间的首地址，如果开辟失败就返回一个NULL。传参时只需传入需要开辟的字节个数。</li><li>calloc函数的功能也是开辟指定大小的内存空间，如果开辟成功就返回该空间的首地址，如果开辟失败就返回一个NULL。calloc函数传参时需要传入开辟的内存用于存放的元素个数和每个元素的大小。calloc函数开辟好内存后会将空间内容中的每一个字节都初始化为0。</li><li>realloc函数可以调整已经开辟好的动态内存的大小，第一个参数是需要调整大小的动态内存的首地址，第二个参数是动态内存调整后的新大小。realloc函数与上面两个函数一样，如果开辟成功便返回开辟好的内存的首地址，开辟失败则返回NULL。</li><li>free函数的作用就是将malloc、calloc以及realloc函数申请的动态内存空间释放，其释放空间的大小取决于之前申请的内存空间的大小。</li></ul><p>同时C++也有自己的内存管理方式：new、delete操作符</p><ul><li><strong>对于内置类型</strong>：new和delete用来动态申请单个某类型的空间、动态申请多个某类型的空间、动态申请某类型单个空间并初始化、动态申请多个某类型空间并初始化以及释放某类型空间，申请和释放单个元素的空间，使用new和delete操作符；申请和释放连续的空间，使用new[]和delete[]。</li><li><strong>对于自定义类型如类、结构体</strong>：使用new和delete申请单个类空间、new[]和delete[]申请多个类空间。</li></ul><figure><img src="https://img-blog.csdnimg.cn/20210610153826397.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L2NoZW5sb25nX2N4eQ==,size_16,color_FFFFFF,t_70" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><h3 id="内存中堆与栈的区别是什么" tabindex="-1"><a class="header-anchor" href="#内存中堆与栈的区别是什么" aria-hidden="true">#</a> 内存中堆与栈的区别是什么？</h3><ul><li>堆内存远大于栈内存大小</li><li>malloc/new在堆上，需要手动创建/释放</li><li>函数运行在栈上分配栈帧、函数的局部变量在栈上分配，自动释放</li><li>堆：低地址-&gt;高地址，栈：高地址-&gt;低地址</li></ul><table><thead><tr><th></th><th>堆</th><th>栈</th></tr></thead><tbody><tr><td>管理方式</td><td>堆中资源是由程序员控制</td><td>栈中资源是自动管理的，无需手工控制</td></tr><tr><td>内存管理机制</td><td>系统有一个记录空闲内存地址的链表，当系统收到程序申请时，遍历该链表，寻找第一个空间大于申请空间的堆结点，删 除空闲结点链表中的该结点，并将该结点空间分配给程序(大多数系统会在这块内存空间首地址记录本次分配的大小，这样delete才能正确释放本内存 空间，另外系统会将多余的部分重新放入空闲链表中)</td><td>只要栈的剩余空间大于所申请空间，系统为程序提供内存，否则报异常提示栈出。</td></tr><tr><td>空间大小</td><td>堆是不连续的内存区域(因为系统是用链表来存储空闲内存地址，自然不是连续的)，堆大小受限于计算机系统中有效的虚拟内存(32bit 系统理论上是4G)，所以堆的空间比较灵活，比较大</td><td>栈是一块连续的内存区域，大小是操作系统预定好的。</td></tr><tr><td>碎片问题</td><td>对于堆，频繁的new/delete会造成大量碎片，会使程序效率降低</td><td>对于栈来讲，它是一个先进后出的队列，进出一一对镜，不会产生碎片。</td></tr><tr><td>生长方向</td><td>堆向上生长，向高地址方向增长</td><td>栈向下，向低地址方向生长</td></tr><tr><td>分配方式</td><td>堆是动态分配的</td><td>栈有静态分配和动态分配。静态分配是由编译器完成(比如局部变量)，动态分配是比如由alloca函数分配，其释放是由编译器进行的。</td></tr><tr><td>分配效率</td><td>效率低一些</td><td>效率高一些</td></tr><tr><td>存放内容</td><td>栈存放的内容，函数返回地址、相关参数、局部变量和寄存器内容等。当主函数调用另外一个函数的时候，要对当前函数执行断点进行保存，需要使用栈来实现，首先入栈的是主函数下一条语句的地址，即扩展指针寄存器的内容(EIP)，然后是当前栈帧的底部地址，即扩展基址指针寄存器内容(EBP)，再然后是被调函数的实参等，一般情况下是按照从右向左的顺序入栈，之后是被调函数的局部变量，注意静态变量是存放在数据段或者BSS段，是不入栈的。出栈的顺序正好相反，最终栈顶指向主函数下一条语句的地址，主程序又从该地址开始执行</td><td>堆，一般情况堆顶使用一个字节的空间来存放堆的大小，而堆中具体存放内容是由程序员来填充的些</td></tr></tbody></table><h3 id="c-的内存分区" tabindex="-1"><a class="header-anchor" href="#c-的内存分区" aria-hidden="true">#</a> C++ 的内存分区？</h3><p>C++中的内存分区，分别是堆、栈、自由存储区、全局/静态存储区、常量存储区和代码区。</p><ul><li>栈：在执行函数时，函数内局部变量的存储单元都可以在栈上创建，函数执行结束时这些存储单元自动被释放。栈内存分配运算内置于处理器的指令集中，效率很高，但是分配的内存容量有限。</li><li>堆：由程序员管理，需要⼿动 new malloc delete free 进⾏分配和回收，如果不进⾏回收的话，会造成内存泄漏的问题</li><li>自由存储区：自由存储区是C++中通过new与delete动态分配和释放对象的抽象概念。堆是操作系统所维护的一块特殊内存，它提供了动态分配的功能，当运行程序调用malloc()时就会从中分配，稍后调用free可把内存交还。而自由存储是C++中通过new和delete动态分配和释放对象的抽象概念，通过new来申请的内存区域可称为自由存储区。基本上，所有的C++编译器默认使用堆来实现自由存储，也即是缺省的全局运算符new和delete也许会按照malloc和free的方式来被实现。</li><li>全局/静态存储区：全局变量和静态变量被分配到同一块内存中，在以前的C语言中，全局变量和静态变 量又分为初始化的和未初始化的，在C++里面没有这个区分了，它们共同占用同一块内存区，在该区定义的变量若没有初始化，则会被自动初始化，例如int型变量自动初始为0。</li><li>常量存储区：这是一块比较特殊的存储区，这里面存放的是常量，不允许修改。</li><li>代码区：存放函数体的二进制代码。</li></ul><figure><img src="https://img.jbzj.com/file_images/article/202106/2021062610102732.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><h3 id="什么是内存泄漏-怎么确定内存泄漏" tabindex="-1"><a class="header-anchor" href="#什么是内存泄漏-怎么确定内存泄漏" aria-hidden="true">#</a> 什么是内存泄漏，怎么确定内存泄漏？</h3><p><strong>内存泄漏</strong>是因为疏忽或错误造成程序未能释放已经不再使用的内存的情况。 其实就是内存在程序运行中动态申请的内存空间由于某种原因程序未释放或无法释放。内存泄露的主要原因包括：</p><ul><li>指针内容被覆盖而无法释放</li><li>内存申请指针丢失</li><li>申请内存和释放内存没有配对处理</li><li>结构数据中外层指针释放导致内层指针丢失无法释放</li></ul><p><strong>如何确定内存泄漏</strong>：</p><ul><li>使用内存泄漏检测工具：valgrind、mtrace、dmalloc、ccmalloc、memwatch等</li><li>使用静态代码检测工具：cppcheck、Clang-Tidy等</li></ul><h3 id="stl-中的内存分配器原理" tabindex="-1"><a class="header-anchor" href="#stl-中的内存分配器原理" aria-hidden="true">#</a> STL 中的内存分配器原理？</h3><p>内存分配器是一个由两级分配器构成的内存管理器，当申请的内存大小大于128byte时，就启动第一级分配器通过malloc直接向系统的堆空间分配，如果申请的内存大小小于128byte时，就启动第二级分配器，从一个预先分配好的内存池中取一块内存交付给用户，这个内存池由16个不同大小(8的倍数，8~128byte)的空闲列表组成，allocator会根据申请内存的大小(将这个大小round up成8的倍数)从对应的空闲块列表取表头块给用户。</p><h3 id="c-c-内存存储区有哪几种类型" tabindex="-1"><a class="header-anchor" href="#c-c-内存存储区有哪几种类型" aria-hidden="true">#</a> C/C++内存存储区有哪几种类型？</h3><p>C/C++主要有以下五种内存存储区：</p><ul><li><strong>全局/静态存储区</strong>：存全局变量，静态变量。程序编译时内存已分配好，并存在于程序整个运行期间，程序结束后由系统统一释放。 全局变量和静态变量被分配到同一块内存中。 <ul><li>C 语言中，全局变量又分为初始化的和未初始化的。初始化的全局变量和静态变量在一块区域，未初始化的全局变量与静态变量在相邻的另一块区域。同时未被初始化的对象存储区可以通过 void* 来访问和操纵，程序结束后由系统自行释放。</li><li>在 C++ 里面没有区分，他们共同占用同一块内存区。</li></ul></li><li><strong>栈</strong>：存放函数的参数值，局部变量，函数执行结束时会被自动释放。栈内存分配运算内置于处理器的指令集中，效率高，但是容量有限。</li><li><strong>堆</strong>：通过new和malloc由低到高分配，由delete或free手动释放或者程序结束自动释放。动态内存的生存期人为决定，使用灵活。缺点是容易分配/释放不当容易造成内存泄漏，频繁分配/释放会产生大量内存碎片。 若程序员不释放，程序结束时可能由OS(操作系统)回收。(C++中<strong>自由存储区</strong>默认在堆上)</li><li><strong>常量存储区</strong>： 存放常量字符串，程序结束时由系统释放</li><li><strong>代码区</strong>： 存放函数体的二进制代码</li></ul><h3 id="什么是字节对齐-为什么要采用这种机制" tabindex="-1"><a class="header-anchor" href="#什么是字节对齐-为什么要采用这种机制" aria-hidden="true">#</a> 什么是字节对齐，为什么要采用这种机制？</h3><p><strong>字节对齐</strong>：系统对变量的存放地址有限制，通常将变量首地址设为某个数的倍数，例如4字节的int型，存放的起始地址位于4字节边界，即起始地址能够被4整除。</p><figure><img src="https://upload-images.jianshu.io/upload_images/15203565-ff423731e98a428e.png?imageMogr2/auto-orient/strip|imageView2/2/w/1200/format/webp" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><p><strong>字节对齐的原因</strong>：</p><ul><li>硬件平台限制内存以字节为单位，不同硬件平台不一定支持任何内存地址的存取，一般可能以双字节、4字节等为单位存取内存，为了保证处理器正确存取数据，需要进行内存对齐。</li><li>提高CPU内存访问速度，一般处理器的内存存取粒度都是N的整数倍，假如访问N大小的数据，没有进行内存对齐，有可能就需要两次访问才可以读取出数据，而进行内存对齐可以一次性把数据全部读取出来，提高效率。</li></ul><h3 id="内存对齐的使用场景" tabindex="-1"><a class="header-anchor" href="#内存对齐的使用场景" aria-hidden="true">#</a> 内存对齐的使用场景？</h3><p><strong>内存对齐</strong>：系统对变量的存放地址有限制，通常将变量首地址设为某个数的倍数，例如4字节的int型，存放的起始地址位于4字节边界，即起始地址能够被4整除。</p><p>内存对齐在结构体使用中，可以有效节省空间，例如设置两个结构体part1、part2。</p><div class="language-cpp line-numbers-mode" data-ext="cpp"><pre class="language-cpp"><code>type Part1 <span class="token keyword">struct</span> <span class="token punctuation">{</span>
    a int8
    b int64
    c int16
<span class="token punctuation">}</span>

type Part2 <span class="token keyword">struct</span> <span class="token punctuation">{</span>
    a int8
    b int16
    c int64
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>结构体part1，part2 拥有相同的字段，而字段顺序不同。结果占用的字节数 part1为24，part2为16。part2更省内存空间，part1 花费了更多的空间去对齐内存。</p><figure><img src="https://upload-images.jianshu.io/upload_images/15203565-ad5b3ac140e14b21.png?imageMogr2/auto-orient/strip|imageView2/2/w/1200/format/webp" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure>`,56),r=[n];function s(d,o){return t(),l("div",null,r)}const p=i(a,[["render",s],["__file","compilation-memory.html.vue"]]);export{p as default};
