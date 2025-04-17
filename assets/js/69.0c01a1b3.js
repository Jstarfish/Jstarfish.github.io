(window.webpackJsonp=window.webpackJsonp||[]).push([[69],{555:function(i,t,a){"use strict";a.r(t);var _=a(2),p=Object(_.a)({},(function(){var i=this,t=i.$createElement,a=i._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":i.$parent.slotKey}},[a("p",[i._v("本文图解 Git 中的最常用命令，如果你稍微理解 Git 的工作原理，这篇文章能够让你理解的更透彻。")]),i._v(" "),a("h2",{attrs:{id:"基本用法"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#基本用法"}},[i._v("#")]),i._v(" 基本用法")]),i._v(" "),a("p",[a("img",{attrs:{src:"https://mmbiz.qpic.cn/mmbiz_png/v1JN0W4OpXjuEjicbH8PQibIRkiaNHr9ibqusjLdmEbIVyxtkjfdtVF9qLMkEkVD69ZwzCuOHiaEFczrkAtib8ic7JznA/640?wx_fmt=png&tp=webp&wxfrom=5&wx_lazy=1&wx_co=1",alt:""}})]),i._v(" "),a("p",[i._v("上面的四条命令在工作目录、暂存目录(也叫做索引)和仓库之间复制文件。")]),i._v(" "),a("ul",[a("li",[a("code",[i._v("git add files")]),i._v(" 把当前文件放入暂存区域。")]),i._v(" "),a("li",[a("code",[i._v("git commit")]),i._v(" 给暂存区域生成快照并提交。")]),i._v(" "),a("li",[a("code",[i._v("git reset -- files")]),i._v(" 用来撤销最后一次 "),a("code",[i._v("git add files")]),i._v("，你也可以用 "),a("code",[i._v("git reset")]),i._v(" 撤销所有暂存区域文件。")]),i._v(" "),a("li",[a("code",[i._v("git checkout -- files")]),i._v(" 把文件从暂存区域复制到工作目录，用来丢弃本地修改。")])]),i._v(" "),a("p",[i._v("你可以用 git reset -p, git checkout -p, or git add -p进入交互模式。")]),i._v(" "),a("p",[i._v("也可以跳过暂存区域直接从仓库取出文件或者直接提交代码。")]),i._v(" "),a("p",[a("img",{attrs:{src:"https://mmbiz.qpic.cn/mmbiz_png/v1JN0W4OpXjuEjicbH8PQibIRkiaNHr9ibqud6LC2aicjNKDWT21Hia4rNsykKdUKvNLicCGEb17M3RSz3ica06iaGsJ26Q/640?wx_fmt=png&tp=webp&wxfrom=5&wx_lazy=1&wx_co=1",alt:"图片"}})]),i._v(" "),a("ul",[a("li",[a("code",[i._v("git commit -a")]),i._v(" 相当于运行 git add 把所有当前目录下的文件加入暂存区域再运行。")]),i._v(" "),a("li",[a("code",[i._v("git commit files")]),i._v(" 进行一次包含最后一次提交加上工作目录中文件快照的提交。并且文件被添加到暂存区域。")]),i._v(" "),a("li",[a("code",[i._v("git checkout HEAD -- files")]),i._v(" 回滚到复制最后一次提交。")])]),i._v(" "),a("h2",{attrs:{id:"约定"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#约定"}},[i._v("#")]),i._v(" 约定")]),i._v(" "),a("p",[i._v("后文中以下面的形式使用图片。")]),i._v(" "),a("p",[a("img",{attrs:{src:"https://mmbiz.qpic.cn/mmbiz_png/v1JN0W4OpXjuEjicbH8PQibIRkiaNHr9ibqu7NiaX2TCRf2LmScVxMq6Vuuu27PCD5zQARVFmicaicOTqmf58KDHjsWFA/640?wx_fmt=png&tp=webp&wxfrom=5&wx_lazy=1&wx_co=1",alt:""}})]),i._v(" "),a("p",[i._v("绿色的5位字符表示提交的ID，分别指向父节点。分支用橘色显示，分别指向特定的提交。当前分支由附在其上的HEAD标识。这张图片里显示最后5次提交，ed489是最新提交。main分支指向此次提交，另一个stable分支指向祖父提交节点。")]),i._v(" "),a("h2",{attrs:{id:"命令详解"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#命令详解"}},[i._v("#")]),i._v(" 命令详解")]),i._v(" "),a("h3",{attrs:{id:"diff"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#diff"}},[i._v("#")]),i._v(" Diff")]),i._v(" "),a("p",[i._v("有许多种方法查看两次提交之间的变动。下面是一些示例。")]),i._v(" "),a("p",[a("img",{attrs:{src:"https://mmbiz.qpic.cn/mmbiz_png/v1JN0W4OpXjuEjicbH8PQibIRkiaNHr9ibqulXh7n4XFXW9Su6bIuaYrO1QVSG0DUx3XQV39r47DtTibzpKMWybdCaA/640?wx_fmt=png&tp=webp&wxfrom=5&wx_lazy=1&wx_co=1",alt:""}})]),i._v(" "),a("h3",{attrs:{id:"commit"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#commit"}},[i._v("#")]),i._v(" Commit")]),i._v(" "),a("p",[i._v("提交时，git用暂存区域的文件创建一个新的提交，并把此时的节点设为父节点。然后把当前分支指向新的提交节点。下图中，当前分支是main。在运行命令之前，main指向ed489，提交后，main指向新的节点f0cec并以ed489作为父节点。")]),i._v(" "),a("p",[a("img",{attrs:{src:"https://mmbiz.qpic.cn/mmbiz_png/v1JN0W4OpXjuEjicbH8PQibIRkiaNHr9ibquicW9XtH5x8uZYXgxTibAzI6NMHyYQicTQpx088lCjODPjyntB6fxcqEwA/640?wx_fmt=png&tp=webp&wxfrom=5&wx_lazy=1&wx_co=1",alt:"图片"}})]),i._v(" "),a("p",[i._v("即便当前分支是某次提交的祖父节点，git会同样操作。下图中，在main分支的祖父节点stable分支进行一次提交，生成了1800b。这样，stable分支就不再是main分支的祖父节点。此时，"),a("strong",[i._v("合并")]),i._v(" (或者 "),a("strong",[i._v("衍合")]),i._v(") 是必须的。")]),i._v(" "),a("p",[a("img",{attrs:{src:"https://mmbiz.qpic.cn/mmbiz_png/v1JN0W4OpXjuEjicbH8PQibIRkiaNHr9ibquaQAps6sd0gF62lnMliafhlMU1JnZ0hwmroPmw3zA4mWBYSpS6JEPbAQ/640?wx_fmt=png&tp=webp&wxfrom=5&wx_lazy=1&wx_co=1",alt:"图片"}})]),i._v(" "),a("p",[i._v("如果想更改一次提交，使用 "),a("code",[i._v("git commit --amend")]),i._v("。git会使用与当前提交相同的父节点进行一次新提交，旧的提交会被取消。")]),i._v(" "),a("p",[a("img",{attrs:{src:"https://mmbiz.qpic.cn/mmbiz_png/v1JN0W4OpXjuEjicbH8PQibIRkiaNHr9ibquVBHmp05AuxQYOLNbyISvKFSpibicGXcN80BFQDGMfWeuFniaekxQw98Wg/640?wx_fmt=png&tp=webp&wxfrom=5&wx_lazy=1&wx_co=1",alt:"图片"}})]),i._v(" "),a("p",[i._v("另一个例子是分离HEAD提交，后文讲。")]),i._v(" "),a("h3",{attrs:{id:"checkout"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#checkout"}},[i._v("#")]),i._v(" Checkout")]),i._v(" "),a("p",[i._v("checkout命令用于从历史提交（或者暂存区域）中拷贝文件到工作目录，也可用于切换分支。")]),i._v(" "),a("p",[i._v("当给定某个文件名（或者打开-p选项，或者文件名和-p选项同时打开）时，git会从指定的提交中拷贝文件到暂存区域和工作目录。比如，git checkout HEAD~ foo.c 会将提交节点HEAD~(即当前提交节点的父节点)中的foo.c复制到工作目录并且加到暂存区域中。（如果命令中没有指定提交节点，则会从暂存区域中拷贝内容。）注意当前分支不会发生变化。")]),i._v(" "),a("p",[a("img",{attrs:{src:"https://mmbiz.qpic.cn/mmbiz_png/v1JN0W4OpXjuEjicbH8PQibIRkiaNHr9ibquYRJlVeV37BX7p2RjOnhiaicKrXmVA5cET0wsFEtibEmiaicia99uvrBhicDog/640?wx_fmt=png&tp=webp&wxfrom=5&wx_lazy=1&wx_co=1",alt:"图片"}})]),i._v(" "),a("p",[i._v("当不指定文件名，而是给出一个（本地）分支时，那么HEAD标识会移动到那个分支（也就是说，我们“切换”到那个分支了），然后暂存区域和工作目录中的内容会和HEAD对应的提交节点一致。新提交节点（下图中的a47c3）中的所有文件都会被复制（到暂存区域和工作目录中）；只存在于老的提交节点（ed489）中的文件会被删除；不属于上述两者的文件会被忽略，不受影响。")]),i._v(" "),a("p",[a("img",{attrs:{src:"https://mmbiz.qpic.cn/mmbiz_png/v1JN0W4OpXjuEjicbH8PQibIRkiaNHr9ibquwAYoaS7XxctZHcMJRd9X2Uj0XuJJvEu97JCZE9zaicxrlv0icDxaIhAw/640?wx_fmt=png&tp=webp&wxfrom=5&wx_lazy=1&wx_co=1",alt:"图片"}})]),i._v(" "),a("p",[i._v("如果既没有指定文件名，也没有指定分支名，而是一个标签、远程分支、SHA-1值或者是像main~3类似的东西，就得到一个匿名分支，称作detached HEAD（被分离的HEAD标识）。这样可以很方便地在历史版本之间互相切换。比如说你想要编译1.6.6.1版本的git，你可以运行git checkout v1.6.6.1（这是一个标签，而非分支名），编译，安装，然后切换回另一个分支，比如说git checkout main。然而，当提交操作涉及到“分离的HEAD”时，其行为会略有不同，详情见在下面。")]),i._v(" "),a("p",[a("img",{attrs:{src:"https://mmbiz.qpic.cn/mmbiz_png/v1JN0W4OpXjuEjicbH8PQibIRkiaNHr9ibqu2YZpLEkZIPkhQt9QhMSDgZEqqKRmUfJ88OEAJ4wHR2VEm7N4icOFN7A/640?wx_fmt=png&tp=webp&wxfrom=5&wx_lazy=1&wx_co=1",alt:"图片"}})]),i._v(" "),a("h3",{attrs:{id:"head标识处于分离状态时的提交操作"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#head标识处于分离状态时的提交操作"}},[i._v("#")]),i._v(" HEAD标识处于分离状态时的提交操作")]),i._v(" "),a("p",[i._v("当HEAD处于分离状态（不依附于任一分支）时，提交操作可以正常进行，但是不会更新任何已命名的分支。(你可以认为这是在更新一个匿名分支。)")]),i._v(" "),a("p",[a("img",{attrs:{src:"https://mmbiz.qpic.cn/mmbiz_png/v1JN0W4OpXjuEjicbH8PQibIRkiaNHr9ibqua9280QsWR9xas8oZ5VVqTicr8mKI9Xw4uicksmSMABnDxwXn2TJicQExQ/640?wx_fmt=png&tp=webp&wxfrom=5&wx_lazy=1&wx_co=1",alt:"图片"}})]),i._v(" "),a("p",[i._v("一旦此后你切换到别的分支，比如说main，那么这个提交节点（可能）再也不会被引用到，然后就会被丢弃掉了。注意这个命令之后就不会有东西引用2eecb。")]),i._v(" "),a("p",[a("img",{attrs:{src:"https://mmbiz.qpic.cn/mmbiz_png/v1JN0W4OpXjuEjicbH8PQibIRkiaNHr9ibqupnjPcO08ibU5I35DVVPsx6y7KpbIklBRonjWOFDibZAKQuIMOpqVDm6w/640?wx_fmt=png&tp=webp&wxfrom=5&wx_lazy=1&wx_co=1",alt:"图片"}})]),i._v(" "),a("p",[i._v("但是，如果你想保存这个状态，可以用命令git checkout -b name来创建一个新的分支。")]),i._v(" "),a("p",[a("img",{attrs:{src:"https://mmbiz.qpic.cn/mmbiz_png/v1JN0W4OpXjuEjicbH8PQibIRkiaNHr9ibquCxouWHoFCoQH8trhDRvSYXia7qjpAskdzFgpIwmGzMretUuwwsUAvBA/640?wx_fmt=png&tp=webp&wxfrom=5&wx_lazy=1&wx_co=1",alt:"图片"}})]),i._v(" "),a("h3",{attrs:{id:"reset"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#reset"}},[i._v("#")]),i._v(" Reset")]),i._v(" "),a("p",[i._v("reset命令把当前分支指向另一个位置，并且有选择的变动工作目录和索引。也用来在从历史仓库中复制文件到索引，而不动工作目录。")]),i._v(" "),a("p",[i._v("如果不给选项，那么当前分支指向到那个提交。如果用--hard选项，那么工作目录也更新，如果用--soft选项，那么都不变。")]),i._v(" "),a("p",[a("img",{attrs:{src:"https://mmbiz.qpic.cn/mmbiz_png/v1JN0W4OpXjuEjicbH8PQibIRkiaNHr9ibquR2ssrwZCkzWpAicgu6ka8coVOwia46EHpmnmibVjicrbxF6bX4VXfPiaLEw/640?wx_fmt=png&tp=webp&wxfrom=5&wx_lazy=1&wx_co=1",alt:"图片"}})]),i._v(" "),a("p",[i._v("如果没有给出提交点的版本号，那么默认用HEAD。这样，分支指向不变，但是索引会回滚到最后一次提交，如果用--hard选项，工作目录也同样。")]),i._v(" "),a("p",[a("img",{attrs:{src:"https://mmbiz.qpic.cn/mmbiz_png/v1JN0W4OpXjuEjicbH8PQibIRkiaNHr9ibqu4aYibTEhy50rlJC7foIuM354xEGwPDa5wpVRkoUkZ2l8STF4xob4hjQ/640?wx_fmt=png&tp=webp&wxfrom=5&wx_lazy=1&wx_co=1",alt:"图片"}})]),i._v(" "),a("p",[i._v("如果给了文件名(或者 -p选项), 那么工作效果和带文件名的checkout差不多，除了索引被更新。")]),i._v(" "),a("p",[a("img",{attrs:{src:"https://mmbiz.qpic.cn/mmbiz_png/v1JN0W4OpXjuEjicbH8PQibIRkiaNHr9ibqul6v6bPIWC2R2Hgq5RdurdLs2AkW0aZvZJz3EqMbo3hkb2G7T78VZibg/640?wx_fmt=png&tp=webp&wxfrom=5&wx_lazy=1&wx_co=1",alt:"图片"}})]),i._v(" "),a("h3",{attrs:{id:"merge"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#merge"}},[i._v("#")]),i._v(" Merge")]),i._v(" "),a("p",[i._v("merge 命令把不同分支合并起来。合并前，索引必须和当前提交相同。如果另一个分支是当前提交的祖父节点，那么合并命令将什么也不做。另一种情况是如果当前提交是另一个分支的祖父节点，就导致fast-forward合并。指向只是简单的移动，并生成一个新的提交。")]),i._v(" "),a("p",[a("img",{attrs:{src:"https://mmbiz.qpic.cn/mmbiz_png/v1JN0W4OpXjuEjicbH8PQibIRkiaNHr9ibqufNibdMOHpQeibRTtmOmNAkW2jGcMl1UsDWeuw2N4sKjrXDckg2FR2BFA/640?wx_fmt=png&tp=webp&wxfrom=5&wx_lazy=1&wx_co=1",alt:"图片"}})]),i._v(" "),a("p",[i._v("否则就是一次真正的合并。默认把当前提交(ed489 如下所示)和另一个提交(33104)以及他们的共同祖父节点(b325c)进行一次三方合并。结果是先保存当前目录和索引，然后和父节点33104一起做一次新提交。")]),i._v(" "),a("p",[a("img",{attrs:{src:"https://mmbiz.qpic.cn/mmbiz_png/v1JN0W4OpXjuEjicbH8PQibIRkiaNHr9ibqu7GCEon8ZIjiaUnX3OOwibRJJnrPmdTwibGAHDibh9sthaYCjvYAFGAr27g/640?wx_fmt=png&tp=webp&wxfrom=5&wx_lazy=1&wx_co=1",alt:"图片"}})]),i._v(" "),a("h3",{attrs:{id:"cherry-pick"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#cherry-pick"}},[i._v("#")]),i._v(" Cherry Pick")]),i._v(" "),a("p",[i._v('cherry-pick命令"复制"一个提交节点并在当前分支做一次完全一样的新提交。')]),i._v(" "),a("p",[a("img",{attrs:{src:"https://mmbiz.qpic.cn/mmbiz_png/v1JN0W4OpXjuEjicbH8PQibIRkiaNHr9ibquoRiat32geHjtWMakEDd8Ldr65lLxb9zFN5aSR8ub2ogDeFPwibr6wFBQ/640?wx_fmt=png&tp=webp&wxfrom=5&wx_lazy=1&wx_co=1",alt:"图片"}})]),i._v(" "),a("h3",{attrs:{id:"rebase"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#rebase"}},[i._v("#")]),i._v(" Rebase")]),i._v(" "),a("p",[i._v("衍合是合并命令的另一种选择。合并把两个父分支合并进行一次提交，提交历史不是线性的。衍合在当前分支上重演另一个分支的历史，提交历史是线性的。本质上，这是线性化的自动的 cherry-pick")]),i._v(" "),a("p",[a("img",{attrs:{src:"https://mmbiz.qpic.cn/mmbiz_png/v1JN0W4OpXjuEjicbH8PQibIRkiaNHr9ibqunYS5PT91Cgu74kKP9HK1biaUCxs7rvWT49u5OZIA0MAbLoTEIxicEKpA/640?wx_fmt=png&tp=webp&wxfrom=5&wx_lazy=1&wx_co=1",alt:"图片"}})]),i._v(" "),a("p",[i._v("上面的命令都在topic分支中进行，而不是main分支，在main分支上重演，并且把分支指向新的节点。注意旧提交没有被引用，将被回收。")]),i._v(" "),a("p",[i._v("要限制回滚范围，使用--onto选项。下面的命令在main分支上重演当前分支从169a6以来的最近几个提交，即2c33a。")]),i._v(" "),a("p",[a("img",{attrs:{src:"https://mmbiz.qpic.cn/mmbiz_png/v1JN0W4OpXjuEjicbH8PQibIRkiaNHr9ibqu8oVsj0EWGa0IEXc1USnHJfl7GKJDbHkiaZj5k3XdwTSwZhfibcq4gqWg/640?wx_fmt=png&tp=webp&wxfrom=5&wx_lazy=1&wx_co=1",alt:"图片"}})]),i._v(" "),a("p",[i._v("同样有 "),a("code",[i._v("git rebase --interactive")]),i._v(" 让你更方便的完成一些复杂操作，比如丢弃、重排、修改、合并提交。")]),i._v(" "),a("h2",{attrs:{id:"技术说明"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#技术说明"}},[i._v("#")]),i._v(" 技术说明")]),i._v(" "),a("p",[i._v("文件内容并没有真正存储在索引(.git/index)或者提交对象中，而是以blob的形式分别存储在数据库中(.git/objects)，并用SHA-1值来校验。索引文件用识别码列出相关的blob文件以及别的数据。对于提交来说，以树(tree)的形式存储，同样用对于的哈希值识别。树对应着工作目录中的文件夹，树中包含的树或者blob对象对应着相应的子目录和文件。每次提交都存储下它的上一级树的识别码。")]),i._v(" "),a("p",[i._v("如果用detached HEAD提交，那么最后一次提交会被 the reflog for HEAD 引用。但是过一段时间就失效，最终被回收，与git commit --amend或者git rebase很像。")])])}),[],!1,null,null,null);t.default=p.exports}}]);